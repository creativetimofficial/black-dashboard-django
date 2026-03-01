# -*- encoding: utf-8 -*-
"""
Copyright (c) 2019 - present AppSeed.us
"""

from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Prediction(models.Model):
    # Match identifiers
    div = models.CharField(max_length=10)
    date = models.DateField()
    home_team = models.CharField(max_length=100)
    away_team = models.CharField(max_length=100)

    # Model predictions
    h_win = models.FloatField()
    draw = models.FloatField()
    a_win = models.FloatField()
    pred_ftr = models.CharField(max_length=1)
    pred_fthg = models.FloatField()
    pred_ftag = models.FloatField()
    btts_yes = models.FloatField(default=0.0)
    btts_no = models.FloatField(default=0.0)
    over25 = models.FloatField(default=0.0)
    under25 = models.FloatField(default=0.0)
    over25_value = models.FloatField(null=True, blank=True)
    under25_value = models.FloatField(null=True, blank=True)
    max_value = models.FloatField()
    max_value_result = models.CharField(max_length=20)

    # Bookmaker odds (for P/L simulation)
    odds_h = models.FloatField(null=True, blank=True)
    odds_d = models.FloatField(null=True, blank=True)
    odds_a = models.FloatField(null=True, blank=True)
    best_odds = models.FloatField(null=True, blank=True)
    odds_over25 = models.FloatField(null=True, blank=True)
    odds_under25 = models.FloatField(null=True, blank=True)

    # Actual results (null until resolved)
    actual_ftr = models.CharField(max_length=1, null=True, blank=True)
    actual_fthg = models.IntegerField(null=True, blank=True)
    actual_ftag = models.IntegerField(null=True, blank=True)
    resolved = models.BooleanField(default=False)

    # Metadata
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('div', 'date', 'home_team', 'away_team')
        indexes = [
            models.Index(fields=['div']),
            models.Index(fields=['resolved']),
            models.Index(fields=['date']),
        ]

    def __str__(self):
        return f"{self.home_team} vs {self.away_team} ({self.date})"

    @property
    def is_correct(self):
        if not self.resolved:
            return None
        return self.pred_ftr == self.actual_ftr

    @property
    def max_value_pct(self):
        return round(self.max_value * 100, 1)


class AccumulatorBet(models.Model):
    DOUBLE = 2
    TREBLE = 3
    TYPE_CHOICES = [(DOUBLE, 'Double'), (TREBLE, 'Treble')]

    acca_type = models.IntegerField(choices=TYPE_CHOICES)
    date = models.DateField()
    legs = models.ManyToManyField('Prediction', related_name='accumulators')
    combined_odds = models.FloatField()
    combined_prob = models.FloatField()
    won = models.BooleanField(default=False)
    profit = models.FloatField(default=0.0)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        indexes = [
            models.Index(fields=['acca_type']),
            models.Index(fields=['date']),
        ]
        ordering = ['-date']

    def __str__(self):
        return f"{'Double' if self.acca_type == 2 else 'Treble'} {self.date} (odds: {self.combined_odds:.2f})"

    @property
    def type_name(self):
        return 'Double' if self.acca_type == self.DOUBLE else 'Treble'

