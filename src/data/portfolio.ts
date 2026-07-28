export interface Project {
  id: string;
  title: string;
  icon: string;
  status: 'In Development' | 'Production Prototype' | 'Completed';
  description: string;
  shortDescription: string;
  tech: string[];
  features: string[];
  challenges: string;
  github: string;
  liveDemo?: string;
  screenshot: string;
  screenshots: string[];
  featured: boolean;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'cloud' | 'containers' | 'cicd' | 'programming' | 'infrastructure';
}

export interface Config {
  name: string;
  title: string;
  email: string;
  github: string;
  linkedin: string;
  location: string;
  about: string;
  resumeUrl?: string;
}

export const config: Config = {
  name: 'Aman Kumawat',
  title: 'Cloud & DevOps Engineer',
  email: 'kumawataman86@gmail.com',
  github: 'https://github.com/amankumawat89',
  linkedin: 'https://www.linkedin.com/in/aman-kumawat-301278353',
  location: 'Noida, India',
  about: 'Passionate DevOps & Cloud enthusiast with hands-on experience in Kubernetes, Docker, Jenkins, Azure Cloud, Linux, CI/CD pipelines, and automation. I enjoy building scalable infrastructure, automating deployments, and solving real-world cloud problems.',
};

export const skills: Skill[] = [
  { name: 'Docker', icon: 'container', category: 'containers' },
  { name: 'Kubernetes', icon: 'network', category: 'containers' },
  { name: 'Jenkins', icon: 'git-branch', category: 'cicd' },
  { name: 'GitHub Actions', icon: 'git-branch', category: 'cicd' },
  { name: 'ArgoCD', icon: 'git-branch', category: 'cicd' },
  { name: 'Ansible', icon: 'terminal', category: 'cicd' },
  { name: 'Linux', icon: 'terminal', category: 'infrastructure' },
  { name: 'Python', icon: 'code-2', category: 'programming' },
  { name: 'Azure Cloud', icon: 'cloud', category: 'cloud' },
  { name: 'AWS', icon: 'cloud', category: 'cloud' },
];

export const skillCategories = [
  { id: 'cloud', label: 'Cloud', icon: 'cloud' },
  { id: 'containers', label: 'Containers', icon: 'container' },
  { id: 'cicd', label: 'CI/CD', icon: 'git-branch' },
  { id: 'programming', label: 'Programming', icon: 'code-2' },
  { id: 'infrastructure', label: 'Infrastructure', icon: 'terminal' },
] as const;

export const projects: Project[] = [
  {
    id: 'cloud-learning-platform',
    title: 'Cloud Learning Platform',
    icon: 'cloud',
    status: 'In Development',
    description: 'Browser-based cloud learning platform that provides interactive Linux, Docker, and Kubernetes labs with real-time terminal access.',
    shortDescription: 'Browser-based cloud learning platform with interactive Linux, Docker, and Kubernetes labs.',
    tech: ['React', 'Flask', 'Docker', 'Kubernetes', 'PostgreSQL', 'Azure'],
    features: [
      'Interactive Linux Terminal',
      'Kubernetes Sandbox',
      'JWT Authentication',
      'PostgreSQL Database',
      'Dockerized Services',
      'Responsive Dashboard',
    ],
    challenges: 'Building a browser-based terminal that communicates with real Docker containers while maintaining security isolation was the biggest architectural challenge. Ensuring smooth real-time I/O across WebSocket connections required careful buffering and error handling.',
    github: 'https://github.com/amankumawat89/cloud-learning-platform',
    screenshot: '',
    screenshots: [],
    featured: true,
  },
  {
    id: 'kubernetes-ai-analyzer',
    title: 'Kubernetes AI Analyzer',
    icon: 'brain',
    status: 'Production Prototype',
    description: 'AI-powered Kubernetes troubleshooting assistant that analyzes pod logs, explains failures, and recommends fixes using Gemini AI.',
    shortDescription: 'AI-powered Kubernetes troubleshooting with Gemini AI for log analysis and fix recommendations.',
    tech: ['Python', 'Gemini AI', 'Kubernetes', 'Docker'],
    features: [
      'Log Analysis',
      'CrashLoopBackOff Detection',
      'AI Recommendations',
      'kubectl Integration',
    ],
    challenges: 'Integrating Gemini AI to understand Kubernetes-specific error patterns required careful prompt engineering and context window management. Parsing raw pod logs into structured data for AI analysis was initially unreliable.',
    github: '',
    screenshot: '/images/k8s-analyzer/Screenshot 2026-05-20 143241.png',
    screenshots: [
      '/images/k8s-analyzer/Screenshot 2026-05-20 120957.png',
      '/images/k8s-analyzer/Screenshot 2026-05-20 121035.png',
      '/images/k8s-analyzer/Screenshot 2026-05-20 121107.png',
      '/images/k8s-analyzer/Screenshot 2026-05-20 121216.png',
      '/images/k8s-analyzer/Screenshot 2026-05-20 121331.png',
      '/images/k8s-analyzer/Screenshot 2026-05-20 121400.png',
      '/images/k8s-analyzer/Screenshot 2026-05-20 121414.png',
      '/images/k8s-analyzer/Screenshot 2026-05-20 121530.png',
      '/images/k8s-analyzer/Screenshot 2026-05-20 143241.png',
      '/images/k8s-analyzer/Screenshot 2026-05-20 143357.png',
      '/images/k8s-analyzer/Screenshot 2026-05-20 143427.png',
      '/images/k8s-analyzer/Screenshot 2026-05-20 143521.png',
      '/images/k8s-analyzer/Screenshot 2026-05-20 143905.png',
      '/images/k8s-analyzer/Screenshot 2026-05-20 143920.png',
    ],
    featured: false,
  },
  {
    id: 'jenkins-cicd-deployment',
    title: 'Jenkins CI/CD Deployment',
    icon: 'git-branch',
    status: 'Completed',
    description: 'Automated CI/CD pipeline that builds, tests, and deploys applications using Jenkins and Apache Tomcat.',
    shortDescription: 'Automated CI/CD pipeline with Jenkins for building, testing, and deploying to Tomcat.',
    tech: ['Jenkins', 'Git', 'Docker', 'Tomcat'],
    features: [
      'Automated Build',
      'Deployment Pipeline',
      'Continuous Integration',
      'Build History',
    ],
    challenges: 'Configuring Jenkins to work with Docker-based Tomcat instances required solving network isolation issues between build agents and deployment targets. Optimizing pipeline speed while maintaining reliability was an ongoing process.',
    github: '',
    screenshot: '/images/jenkins-deployment/Screenshot 2026-05-20 122829.png',
    screenshots: [
      '/images/jenkins-deployment/Screenshot 2026-05-20 122829.png',
      '/images/jenkins-deployment/Screenshot 2026-05-20 122901.png',
      '/images/jenkins-deployment/Screenshot 2026-05-20 122909.png',
    ],
    featured: false,
  },
  {
    id: 'azure-static-website',
    title: 'Azure Static Website Hosting',
    icon: 'globe',
    status: 'Completed',
    description: 'Hosted and managed a static website using Azure Blob Storage and Static Website Hosting with cloud-native deployment.',
    shortDescription: 'Cloud-native static website hosting using Azure Blob Storage.',
    tech: ['Azure Storage', 'Blob Storage', 'Static Website'],
    features: [
      'Static Website Hosting',
      'Blob Storage',
      'Cloud Deployment',
      'Public Endpoint',
    ],
    challenges: 'Setting up proper CORS rules and cache headers for Azure Blob Storage required understanding the difference between container-level and blob-level configurations. Ensuring HTTPS-only access added another layer of configuration.',
    github: '',
    screenshot: '/images/website-hosting/Screenshot 2026-05-20 122124.png',
    screenshots: [
      '/images/website-hosting/Screenshot 2026-05-20 122124.png',
      '/images/website-hosting/Screenshot 2026-05-20 122235.png',
    ],
    featured: false,
  },
];
