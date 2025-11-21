---
title: "Constant-Time Motion Planning (CTMP) for Robotic Manipulators"
link: ""
image: "projects/ctmp.png"
---

A fast and reliable motion-planning framework that guarantees constant-time generation of feasible, collision-free paths for robotic manipulators in static environments.

**Motivation**: Robotic arms often struggle with real-time planning because classical methods recompute paths from scratch. This leads to delays in manufacturing, inspection, and assistive tasks. CTMP enables instant planning after a single preprocessing step.

**Objective**: Design a motion-planning algorithm that produces safe paths in bounded time, regardless of start or goal location.

**Methods**: Built a 2D geometric testbed with obstacle preprocessing. Encoded free space into a subgoal graph enabling constant-time queries. Developed bounded-time start/goal connectors. Preparing extension to ROS–MoveIt for UR10e in 3D.

**Results**: Achieved consistent constant-time path retrieval across 50+ random trials. Verified collision-free execution for all feasible start/goal pairs. Demonstrated superior consistency compared to sampling-based re-planning.

**My Role**: Designed the CTMP algorithm, implemented the planner, and conducted all experiments.
