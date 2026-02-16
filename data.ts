
import { PortfolioData } from './types';

export const portfolioData: PortfolioData = {
  name: "Mohammed Naeem Fawzy",
  title: "Artificial Intelligence Engineer",
  contact: {
    phone: "+20 1061106853",
    email: "mohammednaeemfawzy@gmail.com",
    github: "https://github.com/Mohamed6110",
    linkedin: "https://www.linkedin.com/in/mohammed-naim8"
  },
  summary: "I am a detail-oriented AI Engineer specializing in high-performance automation and architectural efficiency. With a B.Sc. in Artificial Intelligence, I bridge the gap between complex research and production-ready deployments. I focus on delivering Premium AI Expertise through Scalable Pricing that yields Real Results. By leveraging expert-level Python, TensorFlow, and LangChain, I build systems that prioritize both accuracy and cost-efficiency. Whether designing RAG pipelines or low-latency computer vision tools, my goal is to provide enterprise-grade intelligence at a freelance price point.",
  education: {
    degree: "Bachelor of Science in Artificial Intelligence",
    institution: "Faculty of Artificial Intelligence, Kafr El-Sheikh University",
    period: "Jul 2024",
    gpa: "3.317 / 4 (B+)"
  },
  internships: [
    {
      role: "Generative AI Trainee",
      company: "Digital Egypt Pioneers Initiative (DEPI)",
      period: "Dec 2025 – Present",
      description: "Focusing on the end-to-end development and deployment of enterprise-grade Generative AI applications using modern RAG architectures and LLM orchestration.",
      achievements: [
        "Identified factual inconsistencies in base LLM outputs and implemented a Retrieval-Augmented Generation (RAG) pipeline using LangChain, resulting in a 40% improvement in response accuracy for domain-specific queries.",
        "Optimized inference latency for a customer support bot by refactoring prompt templates and implementing efficient caching strategies, reducing token consumption and processing time by 20%.",
        "Developed and containerized a multi-agent orchestration system using FastAPI and Docker, enabling seamless scaling of AI services across cloud environments."
      ]
    }
  ],
  projects: [
    {
      title: "Skin Cancer Detection App",
      description: "A comprehensive deep learning solution for early-stage oncology screening. Trained on ISIC datasets and optimized for mobile deployment to assist clinical preliminary reviews.",
      metrics: "93% F1-Score",
      tools: ["TensorFlow", "Keras", "Python", "OpenCV"],
      image: "/images/skin cancer.jpg",
      githubLink: "https://github.com/mohammed-naeem/skin-cancer-detection",
      liveLink: "#"
    },
    {
      title: "Real-Time Face Mask Monitor",
      description: "Safety compliance system utilizing computer vision to detect mask-wearing in public spaces. Features a low-latency pipeline capable of processing 30+ FPS on edge devices.",
      metrics: "96% Accuracy",
      tools: ["OpenCV", "MobileNetV2", "PyTorch"],
      image: "/mohammed_naeem/images/mage-of-face-mask-detected.jpg",
      githubLink: "https://github.com/mohammed-naeem/face-mask-detection"
    },
    {
      title: "Telecom Churn Analyzer",
      description: "Predictive analytics dashboard that identifies high-risk customers for an Orange telecom subsidiary using ensemble learning techniques and feature engineering.",
      metrics: "95% Recall",
      tools: ["Scikit-learn", "Pandas", "Random Forest", "Plotly"],
      image: "/mohammed_naeem/images/churn.png",
      githubLink: "https://github.com/mohammed-naeem/churn-prediction",
      liveLink: "#"
    },
    {
      title: "Association Rule Mining",
      description: "Market basket analysis system using Association Rule Learning to discover frequent itemsets and generate meaningful rules. Implements Apriori algorithm to identify customer purchasing patterns and cross-selling opportunities with visual analytics.",
      metrics: "Multi-Rule Support Analysis",
      tools: ["Python", "Pandas", "Apriori Algorithm", "MLxtend", "Matplotlib", "Seaborn"],
      image: "/mohammed_naeem/images/Association-Rule-Mining-in-Data-Mining.jpg",
      githubLink: "https://github.com/Mohamed6110/ASSOCIATION-RULE"
    },
    {
      title: "Sign Language Recognition",
      description: "Deep learning system for real-time sign language recognition using computer vision. Trained on hand gesture datasets to classify and interpret sign language gestures with high accuracy, enabling communication assistance for deaf and hard-of-hearing individuals.",
      metrics: "Real-time Gesture Detection",
      tools: ["TensorFlow", "Keras", "OpenCV", "NumPy", "Python"],
      image: "/mohammed_naeem/images/sign language.jpg",
      githubLink: "https://github.com/Mohamed6110/NLP/tree/551f287f73bec71f637e69a0a5284db3b7caf3d8/sign_language"
    },
    {
      title: "Text Generation with GRU",
      description: "Sequence-to-sequence text generation model using Gated Recurrent Units (GRU) for natural language generation. Capable of learning patterns from input sequences and generating contextually relevant text outputs with improved performance over standard RNNs.",
      metrics: "Sequence Generation Model",
      tools: ["TensorFlow", "Keras", "GRU Networks", "NLP", "Python"],
      image: "/mohammed_naeem/images/text generation.jpg",
      githubLink: "https://github.com/Mohamed6110/NLP/tree/551f287f73bec71f637e69a0a5284db3b7caf3d8/text_genration_GRU"
    },
    {
      title: "Hate Speech Detection",
      description: "NLP-based classification system designed to identify and flag hate speech content in text. Utilizes advanced text processing and machine learning techniques to detect harmful language patterns with high accuracy for content moderation applications.",
      metrics: "High-Precision Detection",
      tools: ["Python", "NLP", "Text Classification", "Scikit-learn", "NLTK"],
      image: "/mohammed_naeem/images/heat_speach.jpg",
      githubLink: "https://github.com/Mohamed6110/NLP/tree/551f287f73bec71f637e69a0a5284db3b7caf3d8/hate%20speech%20det"
    },
    {
      title: "Email Spam Detection",
      description: "Machine learning classifier for identifying and filtering spam emails. Implements feature extraction from email content and applies classification algorithms to distinguish legitimate emails from spam with high precision and recall.",
      metrics: "Email Classification Model",
      tools: ["Python", "Scikit-learn", "NLP", "Text Processing", "Pandas"],
      image: "/mohammed_naeem/images/email spam.jpg",
      githubLink: "https://github.com/Mohamed6110/NLP/tree/551f287f73bec71f637e69a0a5284db3b7caf3d8/email_spam_detec"
    }
  ],
  skillGroups: [
    {
      category: "Programming Languages",
      skills: ["Python (Advanced)", "SQL (PostgreSQL/MySQL)", "C++", "Java"]
    },
    {
      category: "Frameworks & Libraries",
      skills: ["TensorFlow", "Keras", "PyTorch", "Scikit-learn", "LangChain", "Hugging Face Transformers", "FastAPI", "React"]
    },
    {
      category: "Tools & Platforms",
      skills: ["Git & GitHub", "Docker", "MLflow", "Apache Airflow", "AWS (EC2/S3)", "Power BI", "Tableau", "OpenCV"]
    }
  ],
  courses: [
    { name: "AI for All: From Basics to GenAI Practice", platform: "Nvidia Academy", duration: "3.5h", link: "https://drive.google.com/file/d/14TWJMIglrn5lbizR7eW__BiuuJTPkmOZ/view?usp=sharing" },
    { name: "Deployment of Machine Learning Models", platform: "ITI mahara-tech", duration: "10h", link: "https://drive.google.com/file/d/1wxPxUfp5nudKgSPIMcNmnePHZm2bsyO4/view?usp=sharing" },
    { name: "Mastering NLP with Transformers", platform: "Udemy", duration: "6.5h", link: "https://drive.google.com/file/d/1oFOnhMl5LSTPTk_2YtLPs8HDvvK96jB2/view?usp=sharing" },
    { name: "AI Engineer For Data Scientists Associate", platform: "DataCamp", link: "https://drive.google.com/file/d/1qLNrHomtUG2YOhcGEzt2BDlIF7OgRlwE/view?usp=sharing" },
    { name: "Microsoft Azure AI Essentials", platform: "LinkedIn Learning", link: "https://drive.google.com/file/d/1Niv_81jDE4uY9MafrFBkvZJhUeAL-RAm/view?usp=sharing" }
  ],
  languages: [
    { language: "Arabic", level: "Native" },
    { language: "English", level: "Intermediate–Upper (B2)" }
  ]
};
