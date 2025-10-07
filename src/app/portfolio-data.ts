import { signal, WritableSignal } from '@angular/core';

// --- DATA MODELS ---
export interface Experience {
    company: string;
    role: string;
    period: string;
    companyUrl?: string;
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
    link?: string;
    period: string;
}

// --- PORTFOLIO DATA ---

export const experiences: Experience[] = [
    {
        company: 'Northwest Missouri State University',
        role: 'Graduate Assistant Software Developer',
        period: 'JAN 2025 — PRESENT',
        companyUrl: 'https://www.nwmissouri.edu/',
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
        companyUrl: 'https://www.qordata.com/',
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
        companyUrl: 'https://www.qordata.com/',
        description: [
            'Built and optimized Spring Boot backend services with relational databases to deliver complex client customizations on schedule.',
            'Collaborated with cross-functional agile teams (QA, product managers, frontend engineers) to deliver high-quality features.',
            'Achieved a perfect NPS score by focusing on innovative problem-solving, which significantly improved client satisfaction.'
        ]
    }
];

export const skills: Skill[] = [
    {
        category: 'Core Languages',
        technologies: ['Java', 'C#', 'TypeScript', 'JavaScript', 'Python', 'C++']
    },
    {
        category: 'Backend Frameworks & Technologies',
        technologies: ['Spring Boot', '.NET Core', 'REST API', 'Hibernate', 'Spring Data JPA', 'ASP.NET MVC', 'Node.js', 'Express.js']
    },
    {
        category: 'Frontend',
        technologies: ['Angular', 'HTML', 'CSS', 'Bootstrap']
    },
    {
        category: 'Databases & ORM',
        technologies: ['PostgreSQL', 'MySQL', 'SQL', 'NoSQL', 'Entity Framework']
    },
    {
        category: 'Cloud & DevOps',
        technologies: ['AWS (EC2, S3, RDS, Lambda)', 'Docker', 'CI/CD', 'Git', 'GitHub']
    },
    {
        category: 'Project Management & Tools',
        technologies: ['JIRA', 'Agile/Scrum', 'Postman', 'IntelliJ IDEA', 'Visual Studio Code']
    }
];

export const projects: Project[] = [
    {
        title: 'ShopSphere E-commerce Platform',
        description: 'Full-stack e-commerce platform built with Spring Boot & Angular. Features comprehensive product catalog, order management, Stripe payment integration, SQS messaging, and AWS deployment. Production-ready with PostgreSQL, RESTful API endpoints, and cloud infrastructure.',
        tags: ['Java', 'Angular', 'Spring Boot', 'E-commerce', 'REST API', 'PostgreSQL', 'AWS'],
        imageUrl: '',
        sourceUrl: 'https://github.com/Adarsh0311/shopsphere-backend',
        enhancedDescription: signal(''),
        isEnhancing: signal(false)
    },
    {
        title: 'Task Management Application',
        description: 'A comprehensive task management backend system built with Spring Boot and PostgreSQL, featuring file attachments, dynamic filtering with JPA Specifications, and complete CRUD operations for efficient task organization.',
        tags: ['Spring Boot', 'Java', 'PostgreSQL', 'Spring Data JPA', 'REST API', 'File Upload', 'Dynamic Filtering'],
        imageUrl: '',
        sourceUrl: 'https://github.com/Adarsh0311/task-management-application',
        enhancedDescription: signal(''),
        isEnhancing: signal(false)
    },
];

export const education: Education[] = [
    {
        institution: 'Northwest Missouri State University',
        degree: 'Master of Science, Information Systems',
        link: 'https://www.nwmissouri.edu/',
        period: 'Aug 2024 - Dec 2025'
    },
    {
        institution: 'National University of Computer and Emerging Sciences',
        degree: 'Bachelor of Science, Computer Science',
        link: 'https://www.nu.edu.pk/',
        period: 'Aug 2017 - May 2021'
    }
];

