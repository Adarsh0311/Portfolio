# Adarsh Kumar — Software Engineering Portfolio

My portfolio highlights backend and full-stack engineering with Java/Spring Boot, AWS, React, and Angular, alongside research tooling at COSMOS Research Center, UA Little Rock. I am an AWS Certified Developer – Associate, based in Little Rock, Arkansas and open to relocation.

[Visit the portfolio](https://adarshkumar.dev/) · [LinkedIn](https://www.linkedin.com/in/adarsh-kumar03/) · [Get in touch](mailto:adarshghai6@gmail.com)

## Selected work

| Project | Engineering focus | Explore |
| --- | --- | --- |
| **Musify** | Spring Boot on Lambda, React/TypeScript, API Gateway, DynamoDB, and direct S3 streaming through time-limited URLs | [Source](https://github.com/Adarsh0311/Musify) · [Architecture](https://github.com/Adarsh0311/Musify/blob/master/Musify_Architecture.png) |
| **Campus Inspection System** | Angular, Node.js/Express, Prisma, PostgreSQL, JWT authentication, and AWS deployments automated with GitHub Actions | [Source](https://github.com/Adarsh0311/campus-inspection-system) · [Architecture](https://github.com/Adarsh0311/campus-inspection-system/blob/master/docs/Architecture.jpeg) |
| **DataVerse at COSMOS** | Configuration-driven React/TypeScript interface for 12 collection services, job history, status tracking, exports, and role-based access; FastAPI/MongoDB platform | [Engineering and research context](https://adarshkumar.dev/#research) |

Additional projects: [ShopSphere](https://github.com/Adarsh0311/shopsphere-backend), a Spring Boot/Angular e-commerce application, and [Task Management](https://github.com/Adarsh0311/task-management-application), a Spring Boot API using JPA Specifications for dynamic filtering.

## Experience and research

- **COSMOS Research Center, UA Little Rock — Software Engineer:** DataVerse development and social-media collection workflows.
- **Northwest Missouri State University — Software Developer (Graduate Assistant):** Canvas LMS integrations for a platform serving 5,500+ students, course-submission automation, and .NET APIs.
- **qordata — Software Engineer / Associate Software Engineer:** Spring Boot integrations, multi-tenant compliance workflows, Angular dashboards, and secure document access using AWS S3.
- **Current research:** iterative query expansion and keyword discovery for social-media case studies, combining candidate extraction, LLM-assisted cleaning, and ranking with comparisons against TF-IDF, YAKE, KeyBERT, and LDA.

## Portfolio website stack

This repository contains the Angular website. The Java, Python, and other backend technologies above are demonstrated by the linked projects and professional work.

| Area | Implementation |
| --- | --- |
| Frontend | Angular 17, TypeScript, Tailwind CSS |
| Hosting and delivery | Amazon S3 and CloudFront |
| Domain and HTTPS | Route 53 and AWS Certificate Manager |
| Delivery pipeline | CodePipeline and CodeBuild |

### AWS architecture

![Portfolio AWS deployment architecture](Architecture%20Diagram.jpeg)

The documented deployment uses CodePipeline to trigger CodeBuild. The repository's [`buildspec.yml`](buildspec.yml) installs dependencies, builds the Angular application, syncs the output to S3, and requests a CloudFront invalidation. Route 53 and ACM provide the custom domain and HTTPS configuration outside this source tree.

## Local development

Use a Node.js version compatible with the pinned Angular 17 toolchain (Node 20.x, version 20.9 or newer, is supported by Angular 17) and npm. The local Angular CLI is installed with the project dependencies; a global installation is unnecessary.

```bash
git clone https://github.com/Adarsh0311/Portfolio.git
cd Portfolio
npm ci
npm start
```

Open [localhost:4200](http://localhost:4200/).

### Production build

```bash
npm run build -- --configuration production
```

Static output is written to `dist/my-portfolio/browser/`.

### Tests

```bash
npm test -- --watch=false --browsers=ChromeHeadless
```

A Chrome or Chromium installation is required. Set `CHROME_BIN` when the executable is outside the default location.

## Content and structure

The page follows: About → Selected projects → Experience → Research → Skills → Education. Smaller projects are available under **More projects**. Navigation works on mobile and desktop, with native fragment links, a keyboard skip link, and reduced-motion support.

- [`src/app/portfolio-data.ts`](src/app/portfolio-data.ts): experience, projects, research, skills, education, and navigation.
- [`src/app/app.component.html`](src/app/app.component.html): introduction, contact links, and section layouts.
- [`src/index.html`](src/index.html): page title, description, canonical URL, and social metadata.
- [`docs/content-maintenance.md`](docs/content-maintenance.md): evidence sources and information needed before adding further claims.

## Deployment

Configure `S3_BUCKET` and `DISTRIBUTION_ID` in the CodeBuild environment. The build role needs access to the destination S3 bucket and permission to create invalidations for the selected distribution. The S3 sync uses `--delete`; use a bucket dedicated to this site's published files.

The existing build specification selects Node.js 18. Updating the Angular and build-runtime versions together is a separate maintenance task; this content update preserves the existing deployment configuration.
