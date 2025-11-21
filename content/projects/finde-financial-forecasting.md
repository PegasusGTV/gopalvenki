---
title: "FinDe++: Augmented Decoder-Only Model for Financial Forecasting"
link: ""
image: "projects/finde.png"
---

A transformer-based model that integrates market indicators, sentiment, and physics-based constraints to improve short-term stock forecasting.

**Motivation**: Traditional forecasting models ignore financial dynamics and suffer from overfitting during regime shifts. A physics-informed transformer offers better stability.

**Objective**: Build a decoder-only transformer that captures patterns in price, indicators, and sentiment while encouraging realistic price movement.

**Methods**: Designed a pyramidal decoder-only transformer with causal masking. Embedded price, technical indicators, and FinBERT-based sentiment. Added a Geometric Brownian Motion loss to stabilize predictions.

**Results**: Outperformed baseline transformers by 12–17% MAE improvement. Produced smoother, more realistic trend-following behavior. Reduced sudden prediction spikes and unrealistic volatility.

**My Role**: Created the model architecture, engineered all features, and led experimentation.
