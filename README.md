Sinox Media — Project Documentation

Welcome to the official codebase of Sinox Media, a modern content-production platform built with a scalable and performance-oriented architecture.
This document provides a complete overview of the project structure, tech stack, setup instructions, and development guidelines.

🔗 Project Access

Live Project URL:


📌 Overview

Sinox Media is designed to deliver a seamless user experience using a modular React + TypeScript architecture.
The project follows clean coding standards, reusability practices, and dependency-driven structure for long-term scalability.

This README helps developers quickly get started with the codebase and understand all dependencies and workflows.

📁 Project Structure
├── README.md                 # Documentation
├── components.json           # Component library configuration
├── eslint.config.js          # Code linting rules
├── index.html                # Application entry point
├── package.json              # NPM project configuration
├── postcss.config.js         # PostCSS setup
├── public                    # Static resources
│   ├── favicon.png
│   └── images
├── src
│   ├── App.tsx               # Root React component
│   ├── components            # Reusable UI components
│   ├── context               # Global context providers
│   ├── db                    # Database & Supabase setup
│   ├── hooks                 # Custom React hooks
│   ├── index.css             # Global styles
│   ├── layout                # App layout components
│   ├── lib                   # Utility helpers
│   ├── main.tsx              # Application bootstrap
│   ├── routes.tsx            # Routing system
│   ├── pages                 # Application pages
│   ├── services              # API & database services
│   ├── types                 # TypeScript interfaces
├── tsconfig.app.json         # TS config (frontend)
├── tsconfig.json             # Main TypeScript config
├── tsconfig.node.json        # TS Node.js config
└── vite.config.ts            # Vite bundler configuration

🛠 Tech Stack
Layer	Technology
Frontend	React, TypeScript, Vite
Backend	Supabase Services
Styling	Tailwind / CSS
Build Tool	Vite
Package Manager	npm
⚙️ System Requirements

Ensure the following versions or above:

Node.js ≥ 20
npm ≥ 10

Check versions:
node -v
npm -v

💻 Installation Guide
1️⃣ Install Node.js

Windows:

1. Visit https://nodejs.org/
2. Download recommended version
3. Install and verify:
   node -v
   npm -v


macOS:

1. Install via Homebrew:
   brew install node
OR
2. Download .pkg installer from nodejs.org

Verify:
node -v
npm -v

🚀 Running the Project
1. Download the project files
2. Extract the folder
3. Open it in VSCode or any IDE
4. Install dependencies:
   npm i
5. Start the development server:
   npm run dev -- --host 127.0.0.1
6. If that fails:
   npx vite --host 127.0.0.1

🗄 Backend / Supabase Setup

If using authentication, database, or storage:

Configure .env variables

Setup Supabase tables & policies

Update service modules under /src/services

Use official Supabase instance for production reliability