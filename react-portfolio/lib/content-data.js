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
    "name": "Gopalakrishnan (Gopal) T. Venkitachalam",
    "tagline": "Robotics Researcher bridging the gap between Classical Planning and Learning-Based Control.",
    "current_position": "Graduate Researcher @ Search Based Planning Lab (SBPL), CMU",
    "email": "[Your Email]",
    "socials": [
      {
        "name": "LinkedIn",
        "url": "https://linkedin.com/in/[your-profile]"
      },
      {
        "name": "GitHub",
        "url": "https://github.com/[your-handle]"
      },
      {
        "name": "Scholar",
        "url": "[Google Scholar Link]"
      }
    ],
    "content": "## 👋 About Me\n\nI am a **Graduate Researcher** at the [Robotics Institute, Carnegie Mellon University](https://www.ri.cmu.edu/), advised by [Prof. Maxim Likhachev](https://www.cs.cmu.edu/~maxim/). My research focuses on **Motion Planning** for high-degree-of-freedom (DOF) systems, specifically tackling the challenges of real-time performance in constrained, unstructured environments.\n\nI am currently building **Constant Time Motion Planning (CTMP)** frameworks that allow mobile manipulators to operate safely and efficiently in dynamic settings—ranging from warehouse automation to hazardous waste disposal. My work bridges the gap between the theoretical guarantees of graph search algorithms and the adaptability of modern learning-based heuristics.\n\nPreviously, I graduated with Honors from **IIT Madras**, where I specialized in AI & Robotics. I also spent time at **Caterpillar Inc.**, applying machine learning and control theory to optimize large-scale industrial systems.\n\n---\n\n## 🔬 Research Focus\n\nMy core research interest lies in **Search-Based Planning** and **AI for Robotics**. I am particularly interested in:\n* **Real-Time Motion Planning:** reducing planning times for 7-DOF arms from seconds to milliseconds.\n* **Experience-Based Planning:** Leveraging past solutions to accelerate future queries in similar environments.\n* **Generative AI for Robotics:** Using diffusion models and transformers to guide search heuristics.\n\n### **Current Project: Constant Time Motion Planning (CTMP)**\n*At the Search Based Planning Lab (SBPL)*\n\nI am developing a novel planning framework designed to provide bounded-time guarantees for mobile manipulation. Key contributions include:\n* **Task-Metric Experience Graphs (TMEG):** A framework that adapts cached motion plans to dynamic constraints, solving the \"static world\" limitation of standard E-Graphs.\n* **Lipschitz-Bounded Heuristics:** Engineered mathematically consistent heuristics derived from the Weighted Jacobian spectral norm to guide A* search effectively.\n* **Sim-to-Real Validation:** Validating algorithms on a **Ridgeback-UR10e** mobile manipulator for contact-rich tasks (e.g., door opening, debris removal) using **ROS** and **MoveIt**.\n\n---\n\n## 🗞️ Updates\n* **Jan 2026:** Selected as a Teaching Assistant for **16-832: Integrated Planning & Learning** and **10-623: Generative AI** at CMU.\n* **Jan 2026:** Developing a high-performance Python wrapper for **ManiSkill/SAPIEN** to accelerate planning research.\n* **2025:** Filed a patent for a **Cryogenic Surgical Device** (App No: 202541075423).\n\n---\n\n## 🎓 Education\n\n**Carnegie Mellon University** | *Pittsburgh, PA*\n**M.S. in Mechanical Engineering (Research)** | *Expected May 2026*\n* **GPA:** 4.0/4.0\n* **Key Coursework:** Planning & Decision Making in Robotics (16-782), Deep Learning (11-785), Generative AI (10-623), Advanced NLP (11-711).\n\n**Indian Institute of Technology, Madras** | *Chennai, India*\n**B.Tech (Honors) in Mechanical Engineering** | *June 2024*\n* **GPA:** 8.71/10.0\n* **Minor:** Artificial Intelligence & Machine Learning.\n* **Key Coursework:** Reinforcement Learning, Multi-Armed Bandits, Stochastic Processes, Control Systems.\n\n---\n\n## 💼 Industry Experience\n\n**Caterpillar Inc.** | *Research Intern (Data Analytics & Controls)*\n*Chennai, India | May 2023 – Jan 2024*\n* Built **Machine Learning pipelines** (K-Means, PCA) to analyze large-scale engine field data, automating cycle detection.\n* Diagnosed numerical instabilities in Mean Value Engine Models (MVEM) using **MATLAB/Simulink**.\n* Developed interactive spectral analysis dashboards using **Plotly** to drive engineering decisions.\n\n---\n\n## 🛠️ Tech Stack\n\n| Category | Tools |\n| :--- | :--- |\n| **Languages** | C++, Python, MATLAB, C |\n| **Robotics** | ROS 1/2, MoveIt, OMPL, ManiSkill, SAPIEN, Gazebo |\n| **AI/ML** | PyTorch, TensorFlow, Scikit-learn, Vaex |\n| **Tools** | Linux, Git, Docker, CMake, SolidWorks, COMSOL |"
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
