// Auto-generated content data
export const contentData = {
  "publications": [],
  "projects": [
    {
      "title": "Search Based Planning Lab, Robotics Institute, CMU",
      "link": "",
      "image": "projects/ctmp.png",
      "content": "**Location**: Pittsburgh, PA\n**Role**: Graduate Researcher\n**Advisor**: Prof. Maxim Likhachev\n**Date**: Sept. 2024 – Present\n\nFormulated \"Task-Metric Experience Graphs\" (TMEG), a C++ framework that adapts cached experience to dynamic constraints, solving the \"static world\" limitation of standard E-Graphs for contact-rich manipulation.\n\nEngineered a Lipschitz-bounded heuristic derived from the spectral norm of the Weighted Jacobian, guaranteeing mathematical consistency and admissibility for A* search even when task targets shift.\n\nImplemented high-performance search primitives within the SMPL library, optimizing the sbpl codebase to support weighted SE(3) metrics (Geodesic rotation) and enabling real-time warping of trajectories.\n\nDeployed and validated the stack on a Ridgeback-UR10e manipulator using ROS/MoveIt, achieving robust latch-disengagement in unstructured environments where standard planners failed.",
      "slug": "search-based-planning-lab"
    },
    {
      "title": "Autonomous Manipulation & Planning Simulation Framework, CMU",
      "link": "https://github.com/PegasusGTV/Planning_wrapper",
      "image": "projects/planning-learning-ta.png",
      "content": "**Location**: Pittsburgh, PA\n**Role**: Teaching Assistant\n**Advisor**: Prof. Maxim Likhachev\n**Date**: Dec. 2025 – Present\n\nDesigned a high-performance Python middleware wrapping ManiSkill/SAPIEN, abstracting complex physics engine interactions into a unified, deterministic API to accelerate algorithm development and deployment.\n\nBuilt a lightweight Multi-Agent Path Finding (MAPF) engine from scratch, engineering custom collision kernels and data pipelines to reduce simulation overhead by removing external dependencies.\n\nDeveloped an automated benchmarking pipeline to quantify planner performance, implementing rigorous regression testing for theoretical optimality, cost convergence, and runtime efficiency across large-scale test suites.\n\n**Links**:\n- [Planning Wrapper GitHub](https://github.com/PegasusGTV/Planning_wrapper)\n- [MAPF Engine GitHub](https://github.com/PegasusGTV/mapf)",
      "slug": "autonomous-manipulation-planning-framework"
    },
    {
      "title": "Generative Single-View 3D Reconstruction Pipeline | CMU",
      "link": "https://github.com/PegasusGTV/2d_to_3d",
      "image": "projects/2d-3d-inpainting.png",
      "content": "**Date**: Sept. 2025 – Dec. 2025\n\nEngineered an end-to-end generative 3D pipeline that fuses Latent Diffusion inpainting with Monocular Depth Estimation (Depth-Anything-V2) to autonomously synthesize complete, watertight 3D meshes from single RGB images.\n\nDeveloped a novel iterative geometry repair algorithm using Open3D, which dynamically detects low-density point cloud regions and applies Poisson reconstruction to resolve occlusions and eliminating geometric artifacts.\n\nAchieved better performance vs TripoSR, reducing Chamfer Distance by 55% (0.066 → 0.030)and boosting structural consistency to 0.971, validating high-quality asset generation.\n\n**Links**:\n- [GitHub Repository](https://github.com/PegasusGTV/2d_to_3d)\n- [Paper/Report](https://drive.google.com/file/d/1D1Nyguk2BU8mpqRySa1sITZzcNPlKuTh/view?usp=sharing)\n- [Presentation](https://docs.google.com/presentation/d/18wug4RKXRM4xZykzbqwOdNN2KUpxiNiw/edit?usp=sharing&ouid=111668335629834950462&rtpof=true&sd=true)",
      "slug": "generative-single-view-3d-reconstruction"
    },
    {
      "title": "Constraint-Aware Path Planning for Large-Scale Robotics | CMU",
      "link": "https://drive.google.com/file/d/1BDGaLfMNEi4QUJfHbn7l-VoKXCDnaVkP/view?usp=sharing",
      "image": "projects/swarm-planning.png",
      "content": "**Date**: Sept. 2024 – Dec. 2024\n\nDeveloped a highly optimized C++ formation control solver utilizing the Eigen library for linear algebra operations, integrating Singular Value Decomposition (SVD) to enforce rigid-body constraints at sub-millisecond latencies.\n\nArchitected a real-time coordination algorithm based on Priority Inheritance with Backtracking (PIBT), enabling collision-free navigation for large-scale swarms in highly unstructured, obstacle-dense environments without gridlocking.\n\nSolved the \"formation fracture\" problem by designing a hierarchical cost function that dynamically weights geometric integrity against path efficiency, outperforming standard baselines in maintaining swarm cohesion under heavy congestion.",
      "slug": "constraint-aware-path-planning"
    },
    {
      "title": "Algorithmic Stability & Convergence Analysis of RL Systems | IIT Madras",
      "link": "",
      "image": "projects/rl-algorithms.png",
      "content": "**Date**: Jan. 2024 – May 2024\n\nImplemented a dependency-free RL library in NumPy, implementing custom backpropagation kernels for Dueling DQN and REINFORCE to bypass high-level framework overhead and expose core gradient dynamics.\n\nValidated manual gradient derivation pipelines using SymPy, validating theoretical update rules against runtime behavior to ensure numerical precision in policy optimization steps.\n\nBenchmarked algorithmic stability in stochastic environments, isolating a 40% improvement in sample efficiency for off-policy methods while quantitatively profiling variance sensitivity in noisy reward signals.",
      "slug": "algorithmic-stability-rl-analysis"
    },
    {
      "title": "Latent Test-Time Compute for Generative Retrieval | CMU",
      "link": "https://drive.google.com/file/d/1X1H0wxBriM78aE4c8MCnowgeYoycis_Q/view?usp=sharing",
      "image": "projects/generative-retrieval.png",
      "content": "**Date**: Sept. 2025 – Dec. 2025\n\nInvestigated inference-time compute scaling in Generative Retrieval (RIPOR) by injecting learnable pause tokens and encoder masks to induce latent reasoning within hierarchical document identifier generation.\n\nConducted a rigorous ablation study on MS-MARCO, identifying a critical beam-search sensitivity bottleneck: while interleaved computation yielded +2% Recall@10 in constrained-beam settings, standard decoding strategies failed to generalize to high-recall benchmarks (TREC-DL).\n\nAnalyzed token-level error distributions, revealing that imitative models suffer from \"early-stage ranking collapse\" unlike standard autoregressive models; proposed a confidence-guided compute allocation strategy to dynamically target high-entropy decision nodes.",
      "slug": "latent-test-time-compute-generative-retrieval"
    },
    {
      "title": "Retrieval-Augmented Generation (RAG) System | CMU",
      "link": "https://drive.google.com/file/d/1ktgVG27wWna-S2lruwMyDVsFX59nfcTS/view?usp=sharing",
      "image": "projects/rag-system.png",
      "content": "**Date**: Sept. 2025 – Oct. 2025\n\nArchitected a domain-specific RAG pipeline (Firecrawl, PyPDF) with sentence-aware chunking, implementing Reciprocal Rank Fusion (RRF) to integrate Dense (MiniLM) and Sparse (BM25) retrieval signals.\n\nAchieved a statistically significant 3.6× F1 gain (0.12 → 0.43, p<0.001) over the Qwen-2.5-7B baseline on a custom 171-sample benchmark, validating Hybrid RAG superiority for open-domain QA.",
      "slug": "retrieval-augmented-generation-rag"
    },
    {
      "title": "Stock Predictor — FinDe++ | CMU",
      "link": "https://drive.google.com/file/d/1tRFjDawVmw1xX0GxM16spZrpAU_bNA1j/view?usp=sharing",
      "image": "projects/finde.png",
      "content": "**Date**: Jan. 2025 – June 2025\n\nArchitected a decoder-only Transformer using Time2Vec embeddings and a novel Geometric Brownian Motion (GBM) physics loss, regularizing the model to adhere to stochastic market dynamics while preventing look-ahead bias.\n\nIntegrated FinBERT sentiment analysis with technical indicators to capture market regime shifts, demonstrating superior trend-following capabilities compared to ARIMA baselines despite discrete sentiment limitations.",
      "slug": "stock-predictor-finde"
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
