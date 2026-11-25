# LifeMirror

A personal life dashboard app built with React, TypeScript, and Vite.

## Features
- **Dashboard**: Overview of tasks, finance, fitness, and mood
- **Tasks**: Priority tracking & task management
- **Finance**: Income, expenses, and visual financial breakdown
- **Fitness**: Activity logs and workout stats
- **Mood**: Daily mood tracker & journal
- **Vault**: Secure storage for notes and credentials
- **Insights**: Analytics across your personal metrics
- **Settings**: Workspace customization

## Auth
- **Email & Password**: Simple credential login
- **Guest Mode**: Explore without an account

## Tech Stack
- **Frontend**: React 19, TypeScript, Vite, React Router
- **Charts & Icons**: Chart.js, React-Feather, FullCalendar

## Setup & Running

Requires **Node.js 20+**.

```bash
git clone https://github.com/kuberbassi/lifemirror.git
cd lifemirror

# Install root & backend dependencies
npm install

# Install frontend dependencies
cd client
npm install
cd ..

# Configure .env files in backend/ and client/ if using MongoDB / Google Auth

# Run backend (terminal 1)
npm run dev:backend

# Run frontend (terminal 2)
npm run dev

# Build frontend for production
npm run build
```
