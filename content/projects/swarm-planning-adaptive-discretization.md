---
title: "Swarm Planning with Adaptive Map Discretization"
link: ""
image: "projects/swarm-planning.png"
---

A hierarchical swarm-planning framework for coordinated multi-drone navigation using dynamic grid discretization to reduce computation cost.

**Motivation**: Swarm robotics can improve mapping, disaster response, and surveillance — but real-time planning becomes expensive in dense environments. Adaptive resolution avoids unnecessary computation.

**Objective**: Enable drone swarms to maintain formation while navigating cluttered areas using efficient, locally adaptive grids.

**Methods**: Built a two-tier planner (leader–follower + local navigation). Introduced adaptive grid refinement near obstacles. Simulated multi-agent movement through varying-density environments.

**Results**: Reduced planning time by 38% vs. uniform grid resolution. Achieved stable formation flight across all simulations. Improved smoothness of trajectories and reduced collision risk.

**My Role**: Developed the algorithm, created the simulation environment, and analyzed performance.
