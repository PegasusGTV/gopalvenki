---
title: "Reinforcement Learning Algorithms: From TD Learning to Hierarchical Methods"
link: ""
image: "projects/rl-algorithms.png"
---

A comprehensive exploration of reinforcement learning methods covering value-based, deep, and hierarchical approaches, demonstrating how architectural choices and exploration strategies influence agent performance in complex environments.

**Motivation**: RL agents often struggle with stability, slow convergence, and poor exploration. Understanding how different TD learning methods and hierarchical strategies behave provides deeper insight into how real-world robotic and autonomous systems can efficiently learn long-horizon tasks.

**Objective**: Study, implement, and compare multiple reinforcement learning methods — from basic Temporal-Difference algorithms to hierarchical options — and evaluate their differences in performance, convergence, and policy behavior.

**Methods**: Implemented and compared SARSA vs. Q-Learning in GridWorld to analyze ε-greedy vs. softmax exploration. Extended to deep reinforcement learning, implementing Dueling DQN and Monte-Carlo REINFORCE. Explored hierarchical RL using SMDP Q-Learning and Intra-Option Q-Learning in Taxi-v3. Visualized Q-values, visitation densities, optimal actions, and convergence behavior.

**Results**: Demonstrated clear differences between on-policy (SARSA) and off-policy (Q-Learning) stability. Showed that Dueling-DQN improves value estimation and reduces learning variance. Hierarchical RL significantly reduced convergence time by enabling temporally extended actions. Produced visual heatmaps revealing policy structure, state-value distributions, and option behavior.

**My Role**: Designed the experiments, implemented all algorithms from scratch, created visual analysis tools, and documented comparative results.
