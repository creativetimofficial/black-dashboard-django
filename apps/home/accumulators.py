"""Accumulator betting engine.

Generates doubles and trebles from daily value bets and simulates P/L.
"""

from collections import defaultdict
from itertools import combinations

from apps.home.strategies import RESULT_MAP, _get_odds

MAX_LEGS_PER_DAY = 5


def generate_daily_accumulators(daily_predictions, acca_type=2):
    """Generate accumulator combinations from same-day value predictions.

    Args:
        daily_predictions: list of Prediction objects for one day,
                          filtered to max_value > 0 and sorted by -max_value
        acca_type: 2 for doubles, 3 for trebles

    Returns:
        list of dicts with keys: legs, combined_odds, combined_prob, won, profit
    """
    # Build eligible legs with pre-computed odds
    eligible = []
    for p in daily_predictions[:MAX_LEGS_PER_DAY]:
        outcome = RESULT_MAP.get(p.max_value_result)
        if not outcome:
            continue
        odds = _get_odds(p, outcome)
        if not odds or odds <= 1:
            continue
        prob_map = {'H': p.h_win, 'D': p.draw, 'A': p.a_win}
        prob = prob_map.get(outcome, 0)
        if prob <= 0:
            continue
        eligible.append((p, odds, prob, outcome))

    if len(eligible) < acca_type:
        return []

    accas = []
    for combo in combinations(eligible, acca_type):
        combined_odds = 1.0
        combined_prob = 1.0
        all_won = True

        for pred, odds, prob, outcome in combo:
            combined_odds *= odds
            combined_prob *= prob
            if outcome != pred.actual_ftr:
                all_won = False

        profit = combined_odds - 1.0 if all_won else -1.0

        accas.append({
            'legs': [item[0] for item in combo],
            'combined_odds': round(combined_odds, 2),
            'combined_prob': round(combined_prob, 6),
            'won': all_won,
            'profit': round(profit, 2),
        })

    return accas


def simulate_accumulators(acca_qs):
    """Simulate P/L over an ordered queryset of AccumulatorBet objects.

    Returns a dict with 'doubles', 'trebles', and 'all' keys,
    each containing summary stats and chart data.
    """
    stats = {
        'doubles': _init_stats(),
        'trebles': _init_stats(),
        'all': _init_stats(),
    }

    for acca in acca_qs.order_by('date', 'combined_odds'):
        key = 'doubles' if acca.acca_type == 2 else 'trebles'
        for bucket in [key, 'all']:
            s = stats[bucket]
            s['staked'] += 1
            s['odds_sum'] += acca.combined_odds

            if acca.won:
                s['wins'] += 1
                s['profit'] += acca.profit
                s['losing_streak'] = 0
                s['winning_streak'] += 1
                s['max_winning_streak'] = max(
                    s['max_winning_streak'], s['winning_streak'])
                if acca.profit > s['best_win']:
                    s['best_win'] = acca.profit
            else:
                s['profit'] -= 1
                s['winning_streak'] = 0
                s['losing_streak'] += 1
                s['max_losing_streak'] = max(
                    s['max_losing_streak'], s['losing_streak'])

            if s['profit'] > s['peak']:
                s['peak'] = s['profit']
            dd = s['peak'] - s['profit']
            if dd > s['max_drawdown']:
                s['max_drawdown'] = dd

            s['pl_values'].append(round(s['profit'], 2))
            s['date_labels'].append(acca.date.strftime('%d %b'))

    return {key: _finalize_stats(s) for key, s in stats.items()}


def _init_stats():
    return {
        'staked': 0, 'wins': 0, 'profit': 0.0,
        'peak': 0.0, 'max_drawdown': 0.0,
        'losing_streak': 0, 'max_losing_streak': 0,
        'winning_streak': 0, 'max_winning_streak': 0,
        'odds_sum': 0.0, 'best_win': 0.0,
        'pl_values': [], 'date_labels': [],
    }


def _finalize_stats(s):
    win_rate = round(s['wins'] / s['staked'] * 100, 1) if s['staked'] > 0 else 0
    roi = round(s['profit'] / s['staked'] * 100, 1) if s['staked'] > 0 else 0
    avg_odds = round(s['odds_sum'] / s['staked'], 2) if s['staked'] > 0 else 0

    kelly = 0
    if avg_odds > 1 and s['staked'] > 0:
        b = avg_odds - 1
        p_w = s['wins'] / s['staked']
        if b > 0:
            kelly = round((b * p_w - (1 - p_w)) / b * 100, 1)

    return {
        'bets': s['staked'],
        'wins': s['wins'],
        'losses': s['staked'] - s['wins'],
        'win_rate': win_rate,
        'profit': round(s['profit'], 2),
        'roi': roi,
        'max_drawdown': round(s['max_drawdown'], 2),
        'max_losing_streak': s['max_losing_streak'],
        'max_winning_streak': s['max_winning_streak'],
        'best_win': round(s['best_win'], 2),
        'avg_odds': avg_odds,
        'kelly': kelly,
        'pl_values': s['pl_values'],
        'date_labels': s['date_labels'],
    }
