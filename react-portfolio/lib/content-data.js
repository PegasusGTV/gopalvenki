// Auto-generated content data
export const contentData = {
  "publications": [],
  "projects": [
    {
      "title": "Constant-Time Motion Planning (CTMP) for Robotic Manipulators",
      "link": "",
      "image": "projects/ctmp.png",
      "content": "A fast and reliable motion-planning framework that guarantees constant-time generation of feasible, collision-free paths for robotic manipulators in static environments.\n\n**Motivation**: Robotic arms often struggle with real-time planning because classical methods recompute paths from scratch. This leads to delays in manufacturing, inspection, and assistive tasks. CTMP enables instant planning after a single preprocessing step.\n\n**Objective**: Design a motion-planning algorithm that produces safe paths in bounded time, regardless of start or goal location.\n\n**Methods**: Built a 2D geometric testbed with obstacle preprocessing. Encoded free space into a subgoal graph enabling constant-time queries. Developed bounded-time start/goal connectors. Preparing extension to ROS–MoveIt for UR10e in 3D.\n\n**Results**: Achieved consistent constant-time path retrieval across 50+ random trials. Verified collision-free execution for all feasible start/goal pairs. Demonstrated superior consistency compared to sampling-based re-planning.\n\n**My Role**: Designed the CTMP algorithm, implemented the planner, and conducted all experiments.\n\n**Date**: September 2024 – Present",
      "slug": "ctmp-robotic-manipulators"
    },
    {
      "title": "16-832 Special Topics: Integrated Planning & Learning, CMU",
      "link": "https://github.com/PegasusGTV/Planning_wrapper",
      "image": "projects/planning-learning-ta.png",
      "content": "Teaching Assistant role developing planning infrastructure and tools for student research.\n\n**Motivation**: Students need reliable, standardized tools for planning research without dealing with low-level physics engine complexities.\n\n**Objective**: Create high-reliability middleware and simulation tools that abstract complexity while maintaining determinism and performance.\n\n**Methods**: Engineered a high-reliability Python middleware for ManiSkill/SAPIEN, abstracting low-level physics into a structured planning-centric API that standardizes state access and determinism for student research. Architected a standalone Multi-Agent Path Finding (MAPF) simulation engine featuring custom collision checking, dataset ingestion, and real-time visualization to enable lightweight prototyping without heavy external simulators. Developing an automated evaluation pipeline to benchmark planner performance, quantitatively analyzing theoretical optimality guarantees and cost-function convergence across diverse test suites.\n\n**Results**: Enabled students to focus on algorithm development rather than infrastructure. Provided standardized evaluation metrics and visualization tools.\n\n**My Role**: Designed and implemented the middleware, MAPF engine, and evaluation pipeline.\n\n**Date**: December 2025 – Present\n\n**Links**:\n- [Planning Wrapper GitHub](https://github.com/PegasusGTV/Planning_wrapper)\n- [MAPF Engine GitHub](https://github.com/PegasusGTV/mapf)",
      "slug": "planning-learning-ta"
    },
    {
      "title": "Iterative 2D–3D Inpainting for Single-Image 3D Reconstruction",
      "link": "https://github.com/PegasusGTV/2d_to_3d",
      "image": "projects/2d-3d-inpainting.png",
      "content": "A self-correcting 3D reconstruction framework that couples Latent Diffusion with Monocular Depth Estimation to synthesize and recover occluded geometry from single-view RGB inputs.\n\n**Motivation**: Single-image 3D reconstruction suffers from depth instability and incomplete geometry, especially for occluded regions. Traditional methods fail to recover missing geometry accurately.\n\n**Objective**: Develop a framework that iteratively detects and repairs geometric noise and sparse regions in 3D reconstructions from single images.\n\n**Methods**: Architected a self-correcting 3D reconstruction framework that couples Latent Diffusion (2D inpainting) with Monocular Depth Estimation (Depth-Anything-V2) to synthesize and recover occluded geometry from single-view RGB inputs. Implemented a custom 3D inpainting algorithm (Open3D, Poisson Reconstruction) that iteratively detects sparse point-density regions and repairs geometric noise, solving the \"depth instability\" problem inherent in generative lifting.\n\n**Results**: Outperformed the TripoSR baseline on synthetic benchmarks, reducing Chamfer Distance by 55% (0.066 → 0.030) and increasing Multi-View Consistency (MVCS) from 0.938 → 0.971, demonstrating superior structural completeness.\n\n**My Role**: Designed the architecture, implemented the 3D inpainting algorithm, and conducted all experiments.\n\n**Date**: September 2025 – December 2025\n\n**Links**:\n- [GitHub Repository](https://github.com/PegasusGTV/2d_to_3d)\n- [Paper/Report](https://drive.google.com/file/d/1D1Nyguk2BU8mpqRySa1sITZzcNPlKuTh/view?usp=sharing)\n- [Presentation](https://docs.google.com/presentation/d/18wug4RKXRM4xZykzbqwOdNN2KUpxiNiw/edit?usp=sharing&ouid=111668335629834950462&rtpof=true&sd=true)",
      "slug": "2d-3d-inpainting"
    },
    {
      "title": "Latent Test-Time Compute for Generative Retrieval",
      "link": "https://drive.google.com/file/d/1X1H0wxBriM78aE4c8MCnowgeYoycis_Q/view?usp=sharing",
      "image": "projects/generative-retrieval.png",
      "content": "Investigating inference-time compute scaling in Generative Retrieval by injecting learnable pause tokens and encoder masks to induce latent reasoning.\n\n**Motivation**: Generative Retrieval models often struggle with inference-time compute allocation. Understanding how to dynamically allocate computation can improve performance without increasing training costs.\n\n**Objective**: Investigate inference-time compute scaling in Generative Retrieval (RIPOR) by injecting learnable pause tokens and encoder masks to induce latent reasoning within hierarchical document identifier generation.\n\n**Methods**: Investigated inference-time compute scaling in Generative Retrieval (RIPOR) by injecting learnable pause tokens and encoder masks to induce latent reasoning within hierarchical document identifier generation. Conducted a rigorous ablation study on MS-MARCO, identifying a critical beam-search sensitivity bottleneck: while interleaved computation yielded +2% Recall@10 in constrained-beam settings, standard decoding strategies failed to generalize to high-recall benchmarks (TREC-DL). Analyzed token-level error distributions, revealing that imitative models suffer from \"early-stage ranking collapse\" unlike standard autoregressive models; proposed a confidence-guided compute allocation strategy to dynamically target high-entropy decision nodes.\n\n**Results**: Identified critical bottlenecks in generative retrieval. Proposed novel compute allocation strategies for improved performance.\n\n**My Role**: Designed experiments, implemented pause tokens and encoder masks, conducted ablation studies, and analyzed results.\n\n**Date**: September 2025 – December 2025",
      "slug": "generative-retrieval"
    },
    {
      "title": "Retrieval-Augmented Generation (RAG) System",
      "link": "https://drive.google.com/file/d/1ktgVG27wWna-S2lruwMyDVsFX59nfcTS/view?usp=sharing",
      "image": "projects/rag-system.png",
      "content": "A domain-specific RAG pipeline with hybrid retrieval combining dense and sparse signals for improved question answering.\n\n**Motivation**: Standard RAG systems often fail to effectively combine different retrieval signals, leading to suboptimal performance on domain-specific tasks.\n\n**Objective**: Build a RAG system that effectively combines dense and sparse retrieval signals for domain-specific question answering.\n\n**Methods**: Architected a domain-specific RAG pipeline (Firecrawl, PyPDF) with sentence-aware chunking, implementing Reciprocal Rank Fusion (RRF) to integrate Dense (MiniLM) and Sparse (BM25) retrieval signals.\n\n**Results**: Achieved a statistically significant 3.6× F1 gain (0.12 → 0.43, p<0.001) over the Qwen-2.5-7B baseline on a custom 171-sample benchmark, validating Hybrid RAG superiority for open-domain QA.\n\n**My Role**: Designed the pipeline architecture, implemented chunking and RRF, and conducted evaluation.\n\n**Date**: September 2025 – October 2025",
      "slug": "rag-system"
    },
    {
      "title": "FinDe++: Augmented Decoder-Only Model for Financial Forecasting",
      "link": "https://drive.google.com/file/d/1tRFjDawVmw1xX0GxM16spZrpAU_bNA1j/view?usp=sharing",
      "image": "projects/finde.png",
      "content": "A transformer-based model that integrates market indicators, sentiment, and physics-based constraints to improve short-term stock forecasting.\n\n**Motivation**: Traditional forecasting models ignore financial dynamics and suffer from overfitting during regime shifts. A physics-informed transformer offers better stability.\n\n**Objective**: Build a decoder-only transformer that captures patterns in price, indicators, and sentiment while encouraging realistic price movement.\n\n**Methods**: Designed a pyramidal decoder-only transformer with causal masking. Embedded price, technical indicators, and FinBERT-based sentiment. Added a Geometric Brownian Motion loss to stabilize predictions.\n\n**Results**: Outperformed baseline transformers by 12–17% MAE improvement. Produced smoother, more realistic trend-following behavior. Reduced sudden prediction spikes and unrealistic volatility.\n\n**My Role**: Created the model architecture, engineered all features, and led experimentation.\n\n**Date**: January 2025 – June 2025",
      "slug": "finde-financial-forecasting"
    },
    {
      "title": "Automated Property Inspection with Computer Vision",
      "link": "",
      "image": "projects/property-inspection.png",
      "content": "A computer-vision system that automates detection of wall chipping, rust, foundation cracks, roof wear, and water damage for home inspections.\n\n**Motivation**: Home inspection is slow, subjective, and error-prone. Automation reduces cost and improves safety for inspectors and homeowners.\n\n**Objective**: Develop a robust vision pipeline to detect and localize common housing defects using classical CV and deep learning.\n\n**Methods**: Built modules using OpenCV, thresholding, contour extraction, and Gabor filtering. Integrated thermal imaging for moisture and foundation detection. Added CNN-based segmentation for complex textures.\n\n**Results**: Achieved 92%+ detection accuracy across four damage categories. Reduced inspection time by ~35% relative to manual review. Generated standardized, interpretable inspection reports.\n\n**My Role**: Designed the detection modules, processed datasets, and implemented the reporting workflow.",
      "slug": "house-inspection-automation"
    },
    {
      "title": "Swarm Planning with Adaptive Map Discretization",
      "link": "https://drive.google.com/file/d/1BDGaLfMNEi4QUJfHbn7l-VoKXCDnaVkP/view?usp=sharing",
      "image": "projects/swarm-planning.png",
      "content": "A hierarchical swarm-planning framework for coordinated multi-drone navigation using dynamic grid discretization to reduce computation cost.\n\n**Motivation**: Swarm robotics can improve mapping, disaster response, and surveillance — but real-time planning becomes expensive in dense environments. Adaptive resolution avoids unnecessary computation.\n\n**Objective**: Enable drone swarms to maintain formation while navigating cluttered areas using efficient, locally adaptive grids.\n\n**Methods**: Built a two-tier planner (leader–follower + local navigation). Introduced adaptive grid refinement near obstacles. Simulated multi-agent movement through varying-density environments.\n\n**Results**: Reduced planning time by 38% vs. uniform grid resolution. Achieved stable formation flight across all simulations. Improved smoothness of trajectories and reduced collision risk.\n\n**My Role**: Developed the algorithm, created the simulation environment, and analyzed performance.\n\n**Date**: September 2024 – December 2024",
      "slug": "swarm-planning-adaptive-discretization"
    },
    {
      "title": "Reinforcement Learning Algorithms: From TD Learning to Hierarchical Methods",
      "link": "",
      "image": "projects/rl-algorithms.png",
      "content": "A comprehensive exploration of reinforcement learning methods covering value-based, deep, and hierarchical approaches, demonstrating how architectural choices and exploration strategies influence agent performance in complex environments.\n\n**Motivation**: RL agents often struggle with stability, slow convergence, and poor exploration. Understanding how different TD learning methods and hierarchical strategies behave provides deeper insight into how real-world robotic and autonomous systems can efficiently learn long-horizon tasks.\n\n**Objective**: Study, implement, and compare multiple reinforcement learning methods — from basic Temporal-Difference algorithms to hierarchical options — and evaluate their differences in performance, convergence, and policy behavior.\n\n**Methods**: Implemented and compared SARSA vs. Q-Learning in GridWorld to analyze ε-greedy vs. softmax exploration. Extended to deep reinforcement learning, implementing Dueling DQN and Monte-Carlo REINFORCE. Explored hierarchical RL using SMDP Q-Learning and Intra-Option Q-Learning in Taxi-v3. Visualized Q-values, visitation densities, optimal actions, and convergence behavior.\n\n**Results**: Demonstrated clear differences between on-policy (SARSA) and off-policy (Q-Learning) stability. Showed that Dueling-DQN improves value estimation and reduces learning variance. Hierarchical RL significantly reduced convergence time by enabling temporally extended actions. Produced visual heatmaps revealing policy structure, state-value distributions, and option behavior.\n\n**My Role**: Designed the experiments, implemented all algorithms from scratch, created visual analysis tools, and documented comparative results.\n\n**Date**: January 2024 – May 2024",
      "slug": "rl-algorithms-analysis"
    },
    {
      "title": "Cryogenic Bone Tumor Removal Device",
      "link": "",
      "image": "projects/cryogenic-device.png",
      "content": "A medical device engineered to remove bone tumors using liquid nitrogen cryogenic cooling, enabling minimally invasive treatment with improved patient safety and reduced recovery time.\n\n**Motivation**: Bone tumor removal traditionally requires invasive surgery, leading to long recovery times and increased complications. Cryogenic ablation allows targeted tumor destruction while preserving healthy tissue and minimizing surgical trauma.\n\n**Objective**: Design, model, and evaluate a cryogenic surgical tool capable of safely delivering extremely low temperatures to tumor tissue while maintaining structural integrity and thermal isolation.\n\n**Methods**: Designed a sealed, vacuum-insulated chamber using SS 304 stainless steel for durability and biocompatibility. Integrated a liquid nitrogen cooling line for rapid temperature drop. Performed COMSOL Multiphysics simulations (2D & 3D) to analyze heat transfer and cooling gradients, thermal stress distribution, and safety margins for surrounding healthy bone. Optimized geometry and insulation layers to maintain steady cryogenic delivery during operation.\n\n**Results**: Achieved rapid localized cooling suitable for tumor ablation. Thermal analysis confirmed minimal temperature rise in surrounding tissue, validating the insulation design. Stress simulations verified structural stability during extreme temperature changes.\n\n**My Role**: Designed the device geometry, authored CAD models, performed all COMSOL simulations, and validated thermal/structural performance.",
      "slug": "cryogenic-bone-tumor-device"
    }
  ],
  "awards": [],
  "education": [
    {
      "institution": "Carnegie Mellon University (CMU)",
      "location": "Pittsburgh, PA",
      "degree": "MS in Mechanical Engineering",
      "specialization": "Robotics, Artificial Intelligence & Motion Planning",
      "gpa": "4.0/4.0",
      "graduation_date": "May 2026",
      "relevant_courses": [
        "Planning & Decision-Making for Robotics",
        "Generative AI",
        "Advanced NLP",
        "11-785: Deep Learning"
      ]
    },
    {
      "institution": "Indian Institute of Technology Madras (IIT Madras)",
      "location": "Chennai, India",
      "degree": "B.Tech (Honors) in Mechanical Engineering",
      "specialization": "Minor in Artificial Intelligence and Machine Learning",
      "gpa": "8.71/10.0",
      "graduation_date": "June 2024",
      "relevant_courses": [
        "Machine Learning",
        "Reinforcement Learning",
        "Robotics",
        "Multi-Armed Bandits",
        "Stochastic Processes"
      ]
    }
  ],
  "skills": {
    "languages": [
      "C++17 (STL, Eigen)",
      "Python (PyTorch, NumPy, Pandas)",
      "MATLAB",
      "Bash"
    ],
    "robotics_simulation": [
      "ROS",
      "MoveIt",
      "Gazebo",
      "ManiSkill (SAPIEN)",
      "URDF/Xacro",
      "RViz"
    ],
    "planning_control": [
      "Graph Search (A*, ARA*)",
      "Sampling-based (RRT*, PRM)",
      "Multi-Agent Path Finding (MAPF/PIBT)",
      "MPC"
    ],
    "ai_perception": [
      "Reinforcement Learning (PPO, DQN)",
      "Stable Diffusion",
      "Transformers",
      "Open3D",
      "OpenCV",
      "Point Clouds"
    ],
    "deep_learning_genai": [
      "Transformers (Hugging Face)",
      "LLM Fine-tuning (LoRA/PEFT)",
      "Diffusion Models",
      "RNNs/LSTMs"
    ],
    "retrieval_nlp": [
      "RAG (LangChain/Firecrawl)",
      "Vector Databases (FAISS/Chroma)",
      "BM25",
      "Semantic Search",
      "BERT"
    ],
    "developer_tools": [
      "Linux",
      "Docker",
      "Git",
      "CMake",
      "GDB",
      "CI/CD"
    ],
    "infrastructure_tools": [
      "Linux",
      "Git",
      "Docker",
      "CUDA",
      "Weights & Biases (W&B)",
      "Slurm",
      "AWS/GCP"
    ]
  },
  "hero": {
    "name": "Gopalakrishnan Thirunellai Venkitachalam",
    "title": "Master's of Science, AI & Robotics Research",
    "institution": "Robotics Institute, Carnegie Mellon University",
    "tagline": "Advancing motion planning and multi-agent systems through algorithmic innovation",
    "profile_initials": "GV",
    "profile_image": "profile.jpeg",
    "email": "gopalakt@andrew.cmu.edu",
    "github": "https://github.com/PegasusGTV",
    "linkedin": "https://www.linkedin.com/in/gopalakrishnan-thirunellai-venkitachalam",
    "scholar": "",
    "resume": "",
    "content": "## Social Links\n\n- **Email**: [gopalakt@andrew.cmu.edu](mailto:gopalakt@andrew.cmu.edu)\n- **LinkedIn**: [LinkedIn Profile](https://www.linkedin.com/in/gopalakrishnan-thirunellai-venkitachalam)\n- **GitHub**: [GitHub Profile](https://github.com/PegasusGTV)\n\n## Background Elements\n\n- Background pattern with gradient circles\n- Scroll down indicator with animated arrow\n- Profile image placeholder with initials"
  },
  "about": {
    "title": "About Me",
    "current_position": "Graduate Research Assistant at Search Based Planning Lab, Robotics Institute, CMU",
    "advisor": "Prof. Maxim Likhachev",
    "previous_position": "Research Intern in ML, Control, and Data Analytics at Caterpillar Inc.",
    "education": "B.Tech in Mechanical Engineering with Honors from IIT Madras",
    "achievement": "GPA 4.0/4.0 at CMU, GPA 8.71/10.0 at IIT Madras",
    "content": "## About Me\n\nHello! I'm Gopalakrishnan Thirunellai Venkitachalam (Gopal), a Master's student in AI & Robotics Research, Mechanical Engineering at [Carnegie Mellon University](https://www.cmu.edu/). I'm currently working as a Graduate Research Assistant at the [Search Based Planning Lab](https://www.cs.cmu.edu/~maxim/), [Robotics Institute](https://www.ri.cmu.edu/), under the guidance of [Prof. Maxim Likhachev](https://www.cs.cmu.edu/~maxim/).\n\nMy research focuses on developing efficient motion planning algorithms for robotics applications, with particular emphasis on real-time planning for mobile manipulators and multi-agent systems.\n\n---\n\n## Current Research\n\n🔬 **Constant Time Motion Planning (CTMP) for Mobile Manipulators**  \nDeveloping algorithms for optimizing dynamic task allocation and motion planning in warehouse robotics. Implementing solutions in C++ & ROS to enhance real-time adaptability and execution efficiency. Working on simulated door-opening tasks with Ridgeback UR10e teleoperation in SAPien and Maniskill, demonstrating precision for hazardous applications like nuclear waste disposal.\n\n---\n\n## Education\n\n🎓 **Master's of Science, AI & Robotics Research, Mechanical Engineering**  \n[Carnegie Mellon University](https://www.cmu.edu/), Pittsburgh, PA  \n*May 2026 (Expected)* | GPA: 4.0/4.0\n\n**Relevant Courses**: Deep Learning, Planning & Decision-Making, Computer Vision for Robotics, Modern Control Theory\n\n---\n\n🎓 **Bachelor of Technology in Mechanical Engineering with Honors**  \n[Indian Institute of Technology Madras](https://www.iitm.ac.in/), Chennai, India  \n*June 2024* | GPA: 8.71/10.0 | Minor in Artificial Intelligence and Machine Learning\n\n**Relevant Courses**: Machine Learning, Reinforcement Learning, Deep Learning, Multi-Armed Bandits, Field and Service Robotics, Multi-Body Dynamics, Stochastic Processes, Signal Processing, Control of Automotive Systems, Design and Optimization\n\n---\n\n## Work Experience\n\n📚 **Graduate Research Assistant** — [Search Based Planning Lab](https://www.cs.cmu.edu/~maxim/), Robotics Institute, CMU  \n*September 2024 – Present* | Advisor: [Prof. Maxim Likhachev](https://www.cs.cmu.edu/~maxim/)\n\n- Developing Constant Time Motion Planning (CTMP) algorithms for mobile manipulators\n- Optimizing dynamic task allocation and motion planning in warehouse robotics\n- Implementing solutions in C++ & ROS for real-time adaptability\n- Simulating door-opening tasks with Ridgeback UR10e teleoperation in SAPien and Maniskill\n\n---\n\n🏭 **Research Intern in ML, Control, and Data Analytics** — [Caterpillar Inc.](https://www.caterpillar.com/)  \n*May 2023 – January 2024* | Chennai, India\n\n- Developed MATLAB and Simulink models for predicting diesel engine exhaust gas temperature dynamics\n- Implemented Python scripts for cleaning and analyzing large-scale engine datasets using PCA and K-means clustering\n- Designed data visualization dashboard with Plotly for spectral and operational cycle analysis\n\n---\n\n## Technical Skills\n\n**Programming Languages**: C++, Python, C, MATLAB & Simulink, Linux, Git\n\n**Frameworks & Tools**: PyTorch, TensorFlow, Scikit-learn, OpenCV, MoveIt, ROS, Pandas, NumPy, SymPy, Vaex\n\n**Areas of Expertise**: Machine Learning, Deep Learning, Reinforcement Learning, Motion Planning, Computer Vision, Control Systems\n\n---\n\n## 🔭 Research Interests\n\nMy research interests span motion planning, multi-agent systems, machine learning, and robotics. I'm particularly interested in developing efficient algorithms that can operate in real-time for practical robotic applications, including warehouse automation, hazardous environment operations, and multi-agent coordination.\n\n---\n\n## Research Statistics\n\n- **Current GPA**: 4.0/4.0 (CMU)\n- **Research Experience**: 2+ years\n- **Industry Experience**: 1+ year"
  },
  "contact": {
    "title": "Get In Touch",
    "description": "I'm always interested in discussing new research opportunities, collaborations, and innovative projects in AI, robotics, and motion planning.",
    "primary_cta": "Send me an email",
    "primary_cta_link": "mailto:gopalakt@andrew.cmu.edu",
    "content": "## Contact Information\n\n### Email\n- **Type**: Email\n- **Value**: gopalakt@andrew.cmu.edu\n- **Link**: mailto:gopalakt@andrew.cmu.edu\n\n### LinkedIn\n- **Type**: LinkedIn\n- **Value**: Connect\n- **Link**: https://www.linkedin.com/in/gopalakrishnan-thirunellai-venkitachalam\n\n### GitHub\n- **Type**: GitHub\n- **Value**: View Profile\n- **Link**: https://github.com/PegasusGTV"
  },
  "interests": {
    "title": "Research Interests",
    "description": "My research focuses on motion planning, multi-agent systems, machine learning, and robotics, with emphasis on real-time algorithms for practical applications including warehouse automation and hazardous environment operations.",
    "content": "## Interest Areas\n\n### Motion Planning\n- **Description**: Developing efficient algorithms for real-time motion planning in robotics, including constant-time planning (CTMP) for mobile manipulators, pathfinding in complex environments, and dynamic task allocation for warehouse robotics applications.\n- **Icon**: 🗺️\n\n### Multi-Agent Systems\n- **Description**: Researching formation control, multi-agent pathfinding (MAPF), and coordination algorithms for collaborative robotic systems. Working on GIF-PIBT algorithms that integrate global formation heuristics with priority-based pathfinding frameworks.\n- **Icon**: 👥\n\n### Machine Learning & Deep Learning\n- **Description**: Applying machine learning techniques including reinforcement learning, deep learning, and neural networks to solve robotics and prediction problems. Experience with PyTorch, TensorFlow, and various RL algorithms for robotic applications.\n- **Icon**: 🤖\n\n### Computer Vision\n- **Description**: Developing computer vision solutions for robotics applications, including object detection, semantic segmentation, and visual recognition systems. Experience with OpenCV and deep learning-based vision models.\n- **Icon**: 👁️\n\n### Control Systems\n- **Description**: Designing and implementing control systems for robotic applications, including predictive control, real-time system optimization, and control of automotive systems. Experience with MATLAB, Simulink, and modern control theory.\n- **Icon**: 🎛️\n\n### Data Analytics\n- **Description**: Analyzing large-scale datasets using statistical methods, PCA, K-means clustering, and visualization techniques for engineering applications. Experience with Python, Pandas, NumPy, and data visualization tools.\n- **Icon**: 📊"
  },
  "research": {
    "title": "Current Research",
    "description": "My research focuses on developing efficient motion planning algorithms for robotics applications, with particular emphasis on real-time planning for mobile manipulators and multi-agent systems.",
    "content": "## Current Research\n\n🔬 **Constant Time Motion Planning (CTMP) for Mobile Manipulators**  \nDeveloping algorithms for optimizing dynamic task allocation and motion planning in warehouse robotics. Implementing solutions in C++ & ROS to enhance real-time adaptability and execution efficiency. Working on simulated door-opening tasks with Ridgeback UR10e teleoperation in SAPien and Maniskill, demonstrating precision for hazardous applications like nuclear waste disposal.\n\n## Research Focus Areas\n\n### Motion Planning\n- Real-time motion planning for mobile manipulators\n- Constant-time planning algorithms\n- Pathfinding in complex, dynamic environments\n- Warehouse robotics automation\n\n### Multi-Agent Systems\n- Formation control algorithms\n- Multi-agent pathfinding (MAPF)\n- Coordination strategies for collaborative systems\n- Dynamic task allocation\n\n### Machine Learning Applications\n- Reinforcement learning for robotics\n- Deep learning for motion prediction\n- Neural network-based planning strategies\n\n## Research Environment\n\n- **Laboratory**: Search Based Planning Lab, Robotics Institute, CMU\n- **Advisor**: Prof. Maxim Likhachev\n- **Tools & Technologies**: C++, ROS, SAPien, Maniskill, Python, PyTorch\n- **Applications**: Warehouse automation, hazardous environment operations, nuclear waste disposal"
  },
  "navbar": {
    "title": "Navigation",
    "content": "## Navigation Items\n\n- **About**: #about\n- **Research**: #research\n- **Projects**: #projects\n- **Contact**: #contact\n\n## Mobile Menu\n- Responsive mobile menu with hamburger icon\n- Smooth scroll to sections\n- Auto-close on navigation"
  },
  "footer": {
    "copyright_text": "© 2024 Gopalakrishnan Thirunellai Venkitachalam. All rights reserved.",
    "content": "## Social Links\n\n### Email\n- **Link**: mailto:gopalakt@andrew.cmu.edu\n- **Aria Label**: Email\n\n### GitHub\n- **Link**: https://github.com/PegasusGTV\n- **Aria Label**: GitHub\n\n### LinkedIn\n- **Link**: https://www.linkedin.com/in/gopalakrishnan-thirunellai-venkitachalam\n- **Aria Label**: LinkedIn\n\n## Footer Features\n- Dynamic year calculation\n- Hover animations\n- Responsive layout"
  }
};

export function getAllContent(type) {
  return contentData[type] || [];
}

export function getContentBySlug(type, slug) {
  const allContent = getAllContent(type);
  return allContent.find(item => item.slug === slug) || null;
}

export function getSectionContent(sectionName) {
  return contentData[sectionName] || null;
}
