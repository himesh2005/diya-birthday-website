# Birthday Love Website - Project Overview

## Overview

This is a romantic birthday website built with React and Express.js, designed to create a beautiful, interactive experience for celebrating someone special. The application features animated slide presentations with romantic messages, photo galleries, and elegant UI components.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Animations**: Framer Motion for smooth transitions and interactive elements
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development**: tsx for TypeScript execution in development
- **Production**: esbuild for bundling and optimization

### Database & ORM
- **Database**: PostgreSQL (configured for Neon Database)
- **ORM**: Drizzle ORM with Drizzle Kit for migrations
- **Schema Location**: `shared/schema.ts` for type-safe database operations
- **Storage Interface**: Abstracted storage layer with in-memory fallback

## Key Components

### UI Components
- **shadcn/ui**: Comprehensive component library with Radix UI primitives
- **Custom Components**: 
  - `WelcomeSlide`: Animated birthday greeting with floating hearts
  - `PhotoGallery`: Responsive image gallery with captions
  - `FinalMessage`: Closing romantic message
  - `FloatingHearts`: Animated background hearts
  - `NavigationDots`: Slide navigation controls

### Animations & Interactions
- **Framer Motion**: Handles all animations, transitions, and gesture controls
- **Touch Support**: Swipe gestures for mobile navigation
- **Keyboard Navigation**: Arrow key support for slide transitions
- **Responsive Design**: Mobile-first approach with adaptive layouts

### Theming & Styling
- **Design System**: Custom CSS variables for romantic color palette
- **Typography**: Google Fonts integration (Playfair Display, Dancing Script, Inter)
- **Icons**: Font Awesome for decorative elements
- **Responsive**: Tailwind's utility-first responsive design

## Data Flow

### Client-Side Flow
1. App initialization with QueryClient and routing setup
2. Home page manages slide state and navigation
3. Components receive props for slide transitions and content display
4. Touch/keyboard events trigger state updates for navigation

### Server-Side Flow
1. Express server with middleware for JSON parsing and logging
2. Static file serving for production builds
3. API routes prefixed with `/api` (currently minimal implementation)
4. Development mode includes Vite middleware for HMR

### Asset Management
- Images stored in `attached_assets` directory
- Vite handles asset imports and optimization
- Alias configuration for clean import paths

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React 18, React DOM, TanStack Query
- **UI Framework**: Radix UI primitives, shadcn/ui components
- **Animation**: Framer Motion for advanced animations
- **Styling**: Tailwind CSS, class-variance-authority for component variants
- **Database**: Drizzle ORM, Neon Database serverless driver
- **Utilities**: date-fns, clsx, zod for validation

### Development Dependencies
- **Build Tools**: Vite, esbuild, TypeScript
- **Development**: tsx for TypeScript execution
- **Linting/Formatting**: TypeScript compiler for type checking

## Deployment Strategy

### Build Process
1. **Frontend**: Vite builds React app to `dist/public`
2. **Backend**: esbuild bundles server code to `dist/index.js`
3. **Database**: Drizzle Kit handles schema migrations

### Environment Configuration
- **Development**: `NODE_ENV=development` with Vite dev server
- **Production**: `NODE_ENV=production` with static file serving
- **Database**: `DATABASE_URL` environment variable required

### Hosting Considerations
- Server serves static files from `dist/public` in production
- API routes available at `/api/*` prefix
- Database migrations run via `npm run db:push`

## Changelog

```
Changelog:
- July 02, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```