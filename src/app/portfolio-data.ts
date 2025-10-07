import { signal, WritableSignal } from '@angular/core';

// --- DATA MODELS ---
export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  sourceUrl?: string;
  enhancedDescription?: WritableSignal<string>;
  isEnhancing?: WritableSignal<boolean>;
}

export interface Skill {
    category: string;
    technologies: string[];
}

export interface Education {
    institution: string;
    degree: string;
    period: string;
}

// --- PORTFOLIO DATA ---

export const experiences: Experience[] = [
    {
      company: 'Northwest Missouri State University',
      role: 'Graduate Assistant Software Developer',
      period: 'JAN 2025 — PRESENT',
      description: [
        'Engineered .NET Web APIs for a Canvas-integrated university platform, streamlining faculty textbook adoption for 5,500+ students.',
        'Automated faculty course selection and PDF generation using an ASP.NET Core MVC web app, reducing manual registrar workflows by 90%.',
        'Built and optimized REST APIs with .NET Core and MySQL/Entity Framework to increase system performance and reliability.'
      ]
    },
    {
      company: 'qordata Inc.',
      role: 'Software Engineer',
      period: 'JAN 2023 — JUL 2024',
      description: [
        'Developed Java Spring Boot integrations with FTP, Salesforce, and Microsoft Graph API, optimizing data flows and improving load performance by 55%.',
        'Delivered full-stack solutions with Angular 8 dashboards, providing real-time insights that improved decision-making speed by 75%.',
        'Led unit testing and peer code reviews to reduce production bugs and ensure maintainable, production-ready releases.'
      ]
    },
    {
      company: 'qordata Inc.',
      role: 'Associate Software Engineer',
      period: 'AUG 2021 — DEC 2022',
      description: [
        'Built and optimized Spring Boot backend services with relational databases to deliver complex client customizations on schedule.',
        'Collaborated with cross-functional agile teams (QA, product managers, frontend engineers) to deliver high-quality features.',
        'Achieved a perfect NPS score by focusing on innovative problem-solving, which significantly improved client satisfaction.'
      ]
    }
  ];

export const skills: Skill[] = [
    {
        category: 'Programming Languages',
        technologies: ['Java', 'C#', 'C++', 'Python', 'TypeScript', 'JavaScript']
    },
    {
        category: 'Backend Development',
        technologies: ['Spring Boot', 'Spring Data JPA', 'Hibernate', '.NET Core', 'ASP.NET MVC', 'REST API']
    },
    {
        category: 'Frontend Development',
        technologies: ['Angular', 'HTML', 'CSS', 'Bootstrap']
    },
    {
        category: 'Databases & ORM',
        technologies: ['PostgreSQL', 'MySQL', 'SQL', 'NoSQL', 'Entity Framework']
    },
    {
        category: 'Cloud & DevOps',
        technologies: ['AWS (EC2, S3, RDS, Lambda, DynamoDB)', 'Git', 'GitHub', 'CI/CD', 'Docker']
    },
    {
        category: 'Development & Tools',
        technologies: ['JIRA', 'Agile/Scrum', 'Postman', 'IntelliJ IDEA', 'Visual Studio Code']
    }
];

export const projects: Project[] = [
    {
      title: '',
      description: '',
      tags: [''],
      imageUrl: '',
      sourceUrl: '',
      enhancedDescription: signal(''),
      isEnhancing: signal(false)
    },
  ];
  
export const education: Education[] = [
    {
        institution: 'Northwest Missouri State University',
        degree: 'Master of Science, Information Systems',
        period: '2024 - 2025'
    },
    {
        institution: 'National University of Computer and Emerging Sciences',
        degree: 'Bachelor of Science, Computer Science',
        period: '2017 - 2021'
    }
  ];

