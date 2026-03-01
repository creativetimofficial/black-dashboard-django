"""Generate historical accumulator bets from resolved predictions.

Reads resolved Prediction objects, groups by date, selects top value bets
per day, and creates AccumulatorBet objects (doubles and trebles).

Run after the main backcast command has populated Prediction objects.

Usage:
    python manage.py backcast_accumulators
    python manage.py backcast_accumulators --clear
    python manage.py backcast_accumulators --leagues E0 E1
"""

from collections import defaultdict

from django.core.management.base import BaseCommand

from apps.home.accumulators import generate_daily_accumulators, MAX_LEGS_PER_DAY
from apps.home.models import AccumulatorBet, Prediction


class Command(BaseCommand):
    help = 'Generate historical accumulator bets from resolved predictions'

    def add_arguments(self, parser):
        parser.add_argument(
            '--clear', action='store_true', default=False,
            help='Delete existing accumulators before generating',
        )
        parser.add_argument(
            '--leagues', nargs='+', default=None,
            help='Limit to specific leagues (default: all)',
        )
        parser.add_argument(
            '--top-n', type=int, default=MAX_LEGS_PER_DAY,
            help=f'Top value bets per day (default: {MAX_LEGS_PER_DAY})',
        )

    def handle(self, *args, **options):
        if options['clear']:
            deleted, _ = AccumulatorBet.objects.all().delete()
            self.stdout.write(self.style.WARNING(
                f'Cleared {deleted} existing accumulators.'))

        qs = Prediction.objects.filter(resolved=True, max_value__gt=0)
        if options['leagues']:
            qs = qs.filter(div__in=options['leagues'])
        qs = qs.order_by('date', '-max_value')

        # Group by date
        daily_groups = defaultdict(list)
        for p in qs:
            daily_groups[p.date].append(p)

        total_doubles = 0
        total_trebles = 0

        for date in sorted(daily_groups.keys()):
            preds = daily_groups[date]

            for acca_type in [2, 3]:
                accas = generate_daily_accumulators(preds, acca_type=acca_type)
                for acca_data in accas:
                    acca = AccumulatorBet.objects.create(
                        acca_type=acca_type,
                        date=date,
                        combined_odds=acca_data['combined_odds'],
                        combined_prob=acca_data['combined_prob'],
                        won=acca_data['won'],
                        profit=acca_data['profit'],
                    )
                    acca.legs.set(acca_data['legs'])

                    if acca_type == 2:
                        total_doubles += 1
                    else:
                        total_trebles += 1

        self.stdout.write(self.style.SUCCESS(
            f'Generated {total_doubles} doubles and {total_trebles} trebles '
            f'across {len(daily_groups)} match days.'
        ))
