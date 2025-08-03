# Suganthan Prabhu Portfolio Website

## Overview

This is a modern, interactive portfolio website built for Suganthan Prabhu, an Electronics and Communication Engineering student specializing in embedded systems, space technology, and control systems. The application showcases his academic achievements, professional experience, research publications, projects, and technical skills through a responsive single-page application with smooth animations and professional design.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for consistent theming
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **Animations**: Framer Motion for smooth transitions and interactive elements
- **State Management**: TanStack React Query for server state management
- **Form Handling**: React Hook Form with Zod validation for the contact form

### Backend Architecture  
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints with JSON responses
- **Error Handling**: Centralized error handling middleware with structured error responses
- **Request Processing**: Built-in Express middleware for JSON parsing and URL encoding

### Data Storage Solutions
- **Database**: PostgreSQL configured with Drizzle ORM
- **Connection**: Neon Database serverless PostgreSQL
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Session Storage**: Connect-pg-simple for PostgreSQL-backed session storage
- **In-Memory Storage**: Fallback MemStorage implementation for development

### Authentication and Authorization
- **User Management**: Basic user schema with username/password authentication
- **Session Management**: Express sessions with PostgreSQL storage backend
- **Data Validation**: Zod schemas for runtime type checking and validation

### External Service Integrations
- **Email Service**: Nodemailer with Gmail SMTP for contact form submissions
- **Development Tools**: Vite for fast development server and hot module replacement
- **Deployment**: Replit-optimized configuration with development banners and cartographer integration

### Build and Development
- **Build System**: Vite for frontend bundling, esbuild for server-side compilation
- **Development**: Hot reload for both client and server code
- **TypeScript**: Strict configuration with path mapping for clean imports
- **Asset Management**: Vite-based asset resolution with alias support

### Responsive Design
- **Mobile-First**: Tailwind CSS responsive utilities
- **Breakpoints**: Standard Tailwind breakpoints (sm, md, lg, xl)
- **Theme Support**: Light/dark mode with system preference detection
- **Typography**: Inter font family for modern, professional appearance