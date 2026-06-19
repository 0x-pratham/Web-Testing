import {
  BrainCircuit,
  Code2,
  GraduationCap,
  FileText,
  Headphones,
  Cloud,
  Gamepad2,
  Cuboid,
  Palette,
  Workflow,
  ShieldCheck,
  Bug,
} from "lucide-react";

export const services = [
  {
    slug: "ai-ml",
    title: "AI & Machine Learning",
    subtitle: "Intelligent systems built for scale.",
    icon: BrainCircuit,
    category: "build",

    description:
      "From a research question to a model running in production.",

    capabilities: [
      "AI Research",
      "Model Training",
      "Fine Tuning",
      "Deployment",
    ],

    benefits: [
      "Enterprise Ready",
      "Scalable Architecture",
      "Secure Infrastructure",
    ],
  },

  {
    slug: "software",
    title: "Software Development",
    subtitle: "Custom software solutions.",
    icon: Code2,
    category: "build",

    description:
      "We design and ship the product, not just the codebase.",

    capabilities: [
      "Web Apps",
      "SaaS Products",
      "Dashboards",
      "API Development",
    ],

    benefits: [
      "Custom Built",
      "Maintainable",
      "Future Ready",
    ],
  },

  {
    slug: "training",
    title: "Training Programs",
    subtitle: "Technical learning solutions.",
    icon: GraduationCap,
    category: "more",

    description:
      "Corporate training and workshops engineered for technical advancement.",

    capabilities: [
      "Workshops",
      "Bootcamps",
      "Certifications",
      "Corporate Training",
    ],

    benefits: [
      "Hands-On",
      "Industry Focused",
      "Practical Learning",
    ],
  },

  {
    slug: "tenders",
    title: "Tender Solutions",
    subtitle: "Government and enterprise opportunities.",
    icon: FileText,
    category: "more",

    description:
      "Structured proposal preparation for public and private opportunities.",

    capabilities: [
      "Proposal Writing",
      "Bid Submission",
      "Compliance",
      "Documentation",
    ],

    benefits: [
      "Professional Process",
      "Accurate Documentation",
      "Faster Submission",
    ],
  },

  {
    slug: "it-services",
    title: "IT Services",
    subtitle: "Managed technology operations.",
    icon: Headphones,
    category: "run",

    description:
      "Operational support that keeps critical systems running.",

    capabilities: [
      "Support",
      "Maintenance",
      "Monitoring",
      "Operations",
    ],

    benefits: [
      "Reliable",
      "Secure",
      "Cost Effective",
    ],
  },

  {
    slug: "cloud",
    title: "Cloud & SaaS",
    subtitle: "Cloud-native solutions.",
    icon: Cloud,
    category: "run",

    description:
      "Cloud infrastructure planning, migration, management and SaaS development.",

    capabilities: [
      "Cloud Migration",
      "SaaS Multi-tenancy",
      "Serverless Architecture",
      "Cost Optimization",
    ],

    benefits: [
      "High Availability",
      "Scalable Infrastructure",
      "Secure Operations",
    ],
  },

  {
    slug: "game-development",
    title: "Game Development",
    subtitle: "Interactive experiences across platforms.",
    icon: Gamepad2,
    category: "build",

    description:
      "Game design, multiplayer systems, backend services and publishing support.",

    capabilities: [
      "Unity Development",
      "Unreal Engine",
      "Multiplayer Systems",
      "Backend Integration",
    ],

    benefits: [
      "Cross Platform",
      "Optimized Performance",
      "Scalable Infrastructure",
    ],
  },

  {
    slug: "ar-vr",
    title: "AR / VR",
    subtitle: "Immersive digital experiences.",
    icon: Cuboid,
    category: "build",

    description:
      "Augmented reality and virtual reality solutions for education, training and enterprise use.",

    capabilities: [
      "AR Applications",
      "VR Experiences",
      "3D Interaction",
      "Simulation Systems",
    ],

    benefits: [
      "Immersive",
      "Interactive",
      "Future Ready",
    ],
  },

  {
    slug: "design",
    title: "UI / UX Design",
    subtitle: "Design systems and digital experiences.",
    icon: Palette,
    category: "build",

    description:
      "User experience research, interface design and product design systems.",

    capabilities: [
      "Wireframing",
      "User Research",
      "Design Systems",
      "Prototyping",
    ],

    benefits: [
      "User Centric",
      "Consistent",
      "Conversion Focused",
    ],
  },

  {
    slug: "devops",
    title: "DevOps",
    subtitle: "Automation and delivery pipelines.",
    icon: Workflow,
    category: "run",

    description:
      "Infrastructure automation, CI/CD pipelines and operational reliability.",

    capabilities: [
      "CI/CD",
      "Infrastructure as Code",
      "Monitoring",
      "Automation",
    ],

    benefits: [
      "Reliable",
      "Scalable",
      "Automated",
    ],
  },

  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    subtitle: "Protecting digital assets and operations.",
    icon: ShieldCheck,
    category: "run",

    description:
      "Security assessments, vulnerability management and security consulting.",

    capabilities: [
      "VAPT",
      "Security Audits",
      "Compliance",
      "Monitoring",
    ],

    benefits: [
      "Secure",
      "Compliant",
      "Resilient",
    ],
  },

  {
    slug: "testing",
    title: "QA & Testing",
    subtitle: "Quality assurance built into delivery.",
    icon: Bug,
    category: "run",

    description:
      "Manual and automated testing services for applications and platforms.",

    capabilities: [
      "Manual Testing",
      "Automation",
      "Regression Testing",
      "Performance Testing",
    ],

    benefits: [
      "Reliable Releases",
      "Improved Quality",
      "Reduced Risk",
    ],
  },
];