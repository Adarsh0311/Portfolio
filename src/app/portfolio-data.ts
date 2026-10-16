export interface Experience {
    company: string;
    role: string;
    period: string;
    companyUrl?: string;
    description: string[];
}

export interface Project {
    title: string;
    category: string;
    description: string;
    highlights: string[];
    tags: string[];
    sourceUrl?: string;
    architectureUrl?: string;
    liveUrl?: string;
    detailsUrl?: string;
}

export interface Research {
    title: string;
    description: string;
    methods: string[];
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

export const navigation = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Selected projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'research', label: 'Research' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' }
];

export const experiences: Experience[] = [
    {
        company: 'COSMOS Research Center, UA Little Rock',
        role: 'Software Engineer',
        period: 'APR 2026 — PRESENT',
        description: [
            'Designed a configuration-driven React and TypeScript interface that unifies 12 data collection services, allowing new services to be onboarded through configuration changes.',
            'Developed per-user job history, real-time status tracking, and Excel export with role-based access control for platform-wide administration.',
            'Work on DataVerse with a Python/FastAPI backend and MongoDB, supporting social-media data collection and research workflows.'
        ]
    },
    {
        company: 'Northwest Missouri State University',
        role: 'Software Developer (Graduate Assistant)',
        period: 'JAN 2025 — DEC 2025',
        companyUrl: 'https://www.nwmissouri.edu/',
        description: [
            'Built .NET Web APIs integrating Canvas LMS and daily synchronization jobs for a course-material platform serving 5,500+ students.',
            'Automated course selection, PDF generation, and registrar email delivery with ASP.NET Core MVC.',
            'Developed REST APIs with MySQL and Entity Framework, and automated personalized welcome emails for newly enrolled students.'
        ]
    },
    {
        company: 'qordata Inc.',
        role: 'Software Engineer',
        period: 'JAN 2023 — JUL 2024',
        companyUrl: 'https://www.qordata.com/',
        description: [
            'Built Java Spring Boot integrations with Salesforce, Microsoft Graph API, and FTP to replace manual Excel-based data workflows.',
            'Developed configurable compliance-monitoring workflows for 5+ pharmaceutical clients.',
            'Built Angular and TypeScript dashboards with Highcharts to visualize monitoring activity across 4 teams and 15+ regions.'
        ]
    },
    {
        company: 'qordata Inc.',
        role: 'Associate Software Engineer',
        period: 'AUG 2021 — DEC 2022',
        companyUrl: 'https://www.qordata.com/',
        description: [
            'Built a document management module using AWS S3, IAM policies, and pre-signed URLs for temporary access to uploaded files.',
            'Implemented dynamic request routing in a multi-tenant Spring Boot application across PostgreSQL and SQL Server.',
            'Used JUnit, Mockito, and peer code reviews to improve backend reliability while collaborating with QA and product teams.'
        ]
    }
];

export const projects: Project[] = [
    {
        title: 'Musify',
        category: 'Personal project · Java & serverless AWS',
        description: 'A music streaming application with a Spring Boot backend on AWS Lambda and a React/TypeScript frontend.',
        highlights: [
            'API Gateway routes requests to Lambda; DynamoDB stores track metadata.',
            'Time-limited S3 URLs let the browser upload and stream audio directly, keeping media transfer out of the backend request path.'
        ],
        tags: ['Java', 'Spring Boot', 'React', 'TypeScript', 'Lambda', 'API Gateway', 'DynamoDB', 'S3'],
        sourceUrl: 'https://github.com/Adarsh0311/Musify',
        architectureUrl: 'https://github.com/Adarsh0311/Musify/blob/master/Musify_Architecture.png'
    },
    {
        title: 'Campus Inspection System',
        category: 'University project · Full-stack delivery',
        description: 'A paperless facility inspection application for technicians and administrators, replacing paper logs with digital checklists and building-level reports.',
        highlights: [
            'Built an Angular interface and Node.js/Express API with JWT authentication, Prisma, and PostgreSQL.',
            'Deployed the API to EC2 and frontend to S3/CloudFront, with GitHub Actions automating deployments.'
        ],
        tags: ['Angular', 'TypeScript', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'AWS', 'GitHub Actions'],
        sourceUrl: 'https://github.com/Adarsh0311/campus-inspection-system',
        architectureUrl: 'https://github.com/Adarsh0311/campus-inspection-system/blob/master/docs/Architecture.jpeg'
    },
    {
        title: 'DataVerse',
        category: 'Professional work · COSMOS Research Center',
        description: 'A research platform bringing social-media collection services into a shared interface for submitting, monitoring, and reviewing data collection jobs.',
        highlights: [
            'My contributions include a configuration-driven interface for 12 collection services, per-user job history, and Excel export.',
            'Role-based access control supports administration and review of platform-wide jobs.'
        ],
        tags: ['React', 'TypeScript', 'Python', 'FastAPI', 'MongoDB', 'Role-based access'],
        detailsUrl: '#research'
    }
];

export const additionalProjects: Project[] = [
    {
        title: 'ShopSphere',
        category: 'Personal project · E-commerce',
        description: 'Spring Boot and Angular e-commerce application with a product catalog, order workflows, Stripe integration, and AWS SQS messaging.',
        highlights: [],
        tags: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'Stripe', 'SQS'],
        sourceUrl: 'https://github.com/Adarsh0311/shopsphere-backend'
    },
    {
        title: 'Task Management Application',
        category: 'Personal project · Backend APIs',
        description: 'Spring Boot backend with file attachments and dynamic query filtering using JPA Specifications and PostgreSQL.',
        highlights: [],
        tags: ['Java', 'Spring Boot', 'Spring Data JPA', 'PostgreSQL'],
        sourceUrl: 'https://github.com/Adarsh0311/task-management-application'
    }
];

export const research: Research[] = [
    {
        title: 'Engineering tools for social-media research',
        description: 'At COSMOS, I connect software engineering with research through DataVerse: supporting data collection, job monitoring, and structured exports so researchers can work with collected posts.',
        methods: ['Data collection workflows', 'Research tooling', 'Access control']
    },
    {
        title: 'Iterative query expansion and keyword discovery',
        description: 'I work on discovering useful search terms for social-media case studies. The workflow combines candidate extraction, LLM-assisted cleaning, and keyword ranking, with comparisons against TF-IDF, YAKE, KeyBERT, and LDA. Case studies include Arkansas data centers and the 2025 Nepal protests.',
        methods: ['Python', 'NLP', 'Keyword ranking', 'Retrieval evaluation']
    }
];

export const skills: Skill[] = [
    {
        category: 'Backend engineering',
        technologies: ['Java / Spring Boot', 'C# / .NET Core', 'Python / FastAPI', 'Node.js / Express', 'REST APIs', 'JUnit / Mockito']
    },
    {
        category: 'Frontend development',
        technologies: ['TypeScript / JavaScript', 'React', 'Angular', 'HTML / CSS', 'Tailwind CSS']
    },
    {
        category: 'Databases & persistence',
        technologies: ['PostgreSQL / MySQL', 'SQL Server', 'MongoDB', 'DynamoDB', 'JPA / Hibernate', 'Prisma / Entity Framework']
    },
    {
        category: 'AWS & delivery',
        technologies: ['Lambda / API Gateway', 'S3 / CloudFront', 'EC2 / RDS', 'SQS / SNS', 'CodePipeline / CodeBuild', 'GitHub Actions', 'Git / Docker / Linux']
    }
];

export const education: Education[] = [
    {
        institution: 'Northwest Missouri State University',
        degree: 'Master of Science, Information Systems',
        link: 'https://www.nwmissouri.edu/',
        period: 'AUG 2024 — DEC 2025'
    },
    {
        institution: 'National University of Computer and Emerging Sciences',
        degree: 'Bachelor of Science, Computer Science',
        link: 'https://www.nu.edu.pk/',
        period: 'AUG 2017 — MAY 2021'
    }
];
