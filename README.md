# Adarsh Kumar - Personal Portfolio
This repository contains the source code for my personal portfolio website, built with Angular and styled with Tailwind CSS. This project showcases my skills and experience with modern web technologies and personal projects.

[View Live Site](https://adarshkumar.dev/)

<img width="1871" height="897" alt="image" src="https://github.com/user-attachments/assets/66689cf5-6599-4c35-936b-8ef1ce5ec051" />


## Features
- Single Page Application (SPA): A seamless, fast, and modern user experience built on the Angular framework.
- Fully Responsive Design: The layout is optimized for all screen sizes, from mobile phones to desktop monitors.
- CI/CD Pipeline: AWS CodePipeline + CodeBuild for automated deployment to S3 with CloudFront cache invalidation.
- Secure Custom Domain: HTTPS enabled via ACM with DNS managed through Route 53.



## 🏗️ System Architecture
The following diagram illustrates the production-grade AWS infrastructure for my portfolio website.

![Portfolio Architecture](https://github.com/user-attachments/assets/9087b0cb-883a-43ed-870f-a8e232907b9a)



## Tech Stack
- Frontend: Angular, TypeScript
- Styling: Tailwind CSS
- Hosting: AWS S3
- CDN: CloudFront
- DNS & SSL: Route 53, ACM
- CI/CD: AWS CodePipeline, CodeBuild




## Running the Project Locally
To get a local copy up and running, follow these simple steps.
### Prerequisites
- Node.js and npm installed. You can download them from nodejs.org.
- Angular CLI installed globally: npm install -g @angular/cli

  
## Installation & Setup
Clone the repository:
git clone [https://github.com/adarsh0311/portfolio.git](https://github.com/adarsh0311/portfolio.git)


### Navigate to the project directory:
`cd portfolio`


### Install NPM packages:
`npm install`


#### Run the development server:
`ng serve`

Navigate to http://localhost:4200/. The application will automatically reload if you change any of the source files.

## Building for Production
To create a production-ready build of the application, run the following command:
`ng build --configuration production`


This will create a dist/ directory with all the optimized, static files needed for deployment.
