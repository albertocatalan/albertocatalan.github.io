export const profile = {
  name: 'Alberto Catalán',
  initials: 'AC',
  title: 'DevOps Engineer & Cloud Platform Specialist',
  subheading:
    'Architecting resilient, scalable AWS infrastructure, automated CI/CD pipelines, and high-performance containerized platforms.',
  email: 'businesscatalan@gmail.com',
  phoneDisplay: '+52 6(62) 453 1379',
  phoneHref: 'tel:+526624531379',
  location: 'Hermosillo, Sonora, Mexico',
  availability: 'Open to Remote Worldwide',
  linkedin: 'https://www.linkedin.com/in/alberto-catalan',
  github: 'https://github.com/albertocatalan',
}

export type Experience = {
  company: string
  role: string
  period: string
  location: string
  logo?: string
  monogram: string
  companyLogo?: string
  accent: 'cyan' | 'aws'
  tags: string[]
  highlights: { title: string; body: string }[]
}

export const experiences: Experience[] = [
  {
    company: 'Urbani',
    role: 'DevOps Engineer',
    period: 'Mar 2025 – Jul 2026',
    location: 'Remote · Monterrey, N.L., Mexico',
    monogram: 'U',
    companyLogo: '/images/logos/urbani.webp',
    accent: 'aws',
    tags: ['Elastic Beanstalk', 'CodePipeline', 'RDS', 'Lambda', 'IAM'],
    highlights: [
      {
        title: 'Scalable AWS Architecture',
        body: 'Architected, deployed, and administered high-availability cloud infrastructure on AWS leveraging Elastic Beanstalk, EC2, RDS, and serverless Lambda functions.',
      },
      {
        title: 'End-to-End CI/CD Automation',
        body: 'Engineered continuous integration and delivery pipelines using AWS CodePipeline, CodeBuild, and CodeDeploy, automating deployments across dev, QA, and prod environments.',
      },
      {
        title: 'Custom Environment Engineering',
        body: 'Customized AWS Elastic Beanstalk environments for Node.js workloads using platform hooks and Nginx reverse proxy tuning.',
      },
      {
        title: 'Database & Serverless Integration',
        body: 'Configured Amazon RDS relational database clusters and integrated event-driven AWS Lambda functions triggered by EventBridge cron rules and API endpoints.',
      },
      {
        title: 'Security & Observability',
        body: 'Enforced IAM least-privilege security policies, credential rotation via AWS Secrets Manager, and auditing via CloudWatch and CloudTrail.',
      },
    ],
  },
  {
    company: 'Samsung Electronics (SRT)',
    role: 'DevOps Engineer',
    period: 'Apr 2024 – Mar 2025',
    location: 'Remote · Tijuana, B.C., Mexico',
    companyLogo: '/images/logos/samsung.png',
    monogram: 'S',
    accent: 'cyan',
    tags: ['Kubernetes', 'Docker', 'HPA', 'Python', 'Java'],
    highlights: [
      {
        title: 'Kubernetes Container Orchestration',
        body: 'Managed container orchestration workflows utilizing Kubernetes clusters for backend ad-delivery platforms.',
      },
      {
        title: 'Environment Standardization',
        body: 'Built and standardized multi-stage Docker and Docker Compose container environments for testing and production, eradicating environment discrepancies and accelerating engineer onboarding.',
      },
      {
        title: 'Backend Telemetry & Data Optimization',
        body: 'Engineered telemetry and backend data scripts in Python and Java to support ad-targeting strategies and predictive models based on user behavioral data for Samsung Ads.',
      },
      {
        title: 'Cluster Reliability',
        body: 'Configured Horizontal Pod Autoscalers (HPA), health checks, and cluster resource quotas to maintain service resiliency under peak traffic loads.',
      },
    ],
  },
  {
    company: 'Nanti System',
    role: 'Junior Site Reliability Engineer',
    period: 'Dec 2022 – Mar 2024',
    location: 'Remote · Mexico City, Mexico',
    monogram: 'N',
    companyLogo: '/images/logos/nanti-dark.png',
    accent: 'cyan',
    tags: ['Observability', 'Python', 'Bash', 'Runbooks', 'SDLC'],
    highlights: [
      {
        title: 'Incident Response & Observability',
        body: 'Monitored production system health and application performance, diagnosing anomalies and resolving operational incidents proactively.',
      },
      {
        title: 'Pipeline & Operations Automation',
        body: 'Developed Python and Bash automation scripts for recurring operational tasks and CI/CD workflows, eliminating manual rollout risks.',
      },
      {
        title: 'Technical Debt Remediation',
        body: 'Collaborated with cross-functional development teams to identify, prioritize, and refactor technical debt across microservices, adhering to SDLC best practices.',
      },
      {
        title: 'Reliability Documentation',
        body: 'Authored comprehensive incident response runbooks, SRE best practices, and operational procedures.',
      },
    ],
  },
  {
    company: 'Fidere Seguridad',
    role: 'Website Operations & Systems Manager',
    period: 'Feb 2020 – Nov 2022',
    location: 'Hermosillo, Sonora, Mexico',
    monogram: 'F',
    companyLogo: '/images/logos/fidere-dark.png',
    accent: 'aws',
    tags: ['Uptime', 'Automation', 'Caching', 'Disaster Recovery'],
    highlights: [
      {
        title: 'Platform Availability & Maintenance',
        body: 'Oversaw the continuous uptime, security updates, and performance monitoring of customer-facing web platforms.',
      },
      {
        title: 'Deployment Automation',
        body: 'Streamlined update and release workflows utilizing script-based automation, minimizing maintenance downtime.',
      },
      {
        title: 'Optimization & Collaboration',
        body: 'Partnered with marketing and operations teams to align technical features with business goals, implementing caching and server optimizations.',
      },
      {
        title: 'Technical Documentation',
        body: 'Established standard operating procedures for platform maintenance, backup routines, and server disaster recovery.',
      },
    ],
  },
]

export const awsCertifications = [
  {
    name: 'Solutions Architect',
    level: 'Associate',
    code: 'SAA',
    fullName: 'AWS Certified Solutions Architect – Associate',
    validity: 'Active through May 2027',
    url: 'https://www.credly.com/badges/a46310f4-4d2f-4f96-844a-1fcb0255bedc/linked_in_profile',
    tone: 'cyan' as const,
  },
  {
    name: 'Cloud Practitioner',
    level: 'Foundational',
    code: 'CLF',
    fullName: 'AWS Certified Cloud Practitioner',
    validity: 'Active through November 2026',
    url: 'https://www.credly.com/badges/97a06479-9237-45f1-96f1-a127f068db10',
    tone: 'aws' as const,
  },
]

export const trainings = [
  {
    name: 'DevOps on AWS: Code, Build, and Test',
    issuer: 'AWS Training Team',
    date: 'Nov 2022',
    logo: '/logos/aws.svg',
    url: 'https://coursera.org/verify/FVZBJ2TM3KXW',
  },
  {
    name: 'AWS Cloud Technical Essentials',
    issuer: 'AWS Training Team',
    date: 'Dec 2022',
    logo: '/logos/aws.svg',
    url: 'https://www.coursera.org/account/accomplishments/verify/94E3XHRG2K3U',
  },
  {
    name: 'Scientific Computing with Python',
    issuer: 'freeCodeCamp',
    date: 'Dec 2022',
    logo: '/logos/freecodecamp.svg',
    url: 'https://freecodecamp.org/certification/fcc00c58ef7-de0b-4841-95fb-be6b996062b9/scientific-computing-with-python-v7',
  },
  {
    name: 'Crash Course on Python',
    issuer: 'Google',
    date: 'Jan 2023',
    logo: '/logos/google.svg',
    url: 'https://www.coursera.org/account/accomplishments/verify/94E3XHRG2K3U',
  },
  {
    name: 'What is Data Science?',
    issuer: 'IBM',
    date: 'Jan 2023',
    logo: '/logos/ibm.svg',
    url: 'https://www.coursera.org/account/accomplishments/verify/NHMRGWJKV7TD',
  },
]

export const techStack = [
  {
    category: 'Cloud & Infrastructure',
    path: 'infra/cloud',
    items: [
      'AWS Elastic Beanstalk',
      'EC2',
      'RDS Aurora',
      'Lambda',
      'Secrets Manager',
      'S3',
      'CloudWatch',
      'CloudTrail',
      'IAM',
      'VPC',
      'Azure',
      'GCP',
    ],
  },
  {
    category: 'IaC & Automation',
    path: 'infra/iac',
    items: ['Terraform', 'Python (Boto3)', 'Bash / Shell', 'Groovy'],
  },
  {
    category: 'Containers & Orchestration',
    path: 'platform/containers',
    items: ['Kubernetes', 'Docker', 'Docker Compose', 'Microservices Architecture'],
  },
  {
    category: 'CI/CD & Delivery',
    path: 'delivery/pipelines',
    items: ['AWS CodePipeline', 'AWS CodeBuild', 'AWS CodeDeploy', 'Git', 'GitHub Actions'],
  },
  {
    category: 'Observability, Networking & Databases',
    path: 'ops/observability',
    items: [
      'CloudWatch',
      'CloudTrail',
      'Nginx Reverse Proxy',
      'PostgreSQL',
      'Redis',
      'EventBridge',
      'RESTful APIs',
    ],
  },
]
