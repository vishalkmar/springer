# IPEE 2026 Conference Website

## Overview

This is a full-stack conference website for the 2026 2nd International Power and Electrical Engineering Conference (IPEE 2026) in Penang, Malaysia. The application is a React-based frontend with an Express.js backend, using PostgreSQL for data persistence. It serves as an informational and registration platform for the academic conference, featuring pages for speakers, committees, call for papers, submission guidelines, program details, and contact functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: shadcn/ui component library (Radix UI primitives)
- **Animations**: Framer Motion for page transitions and effects
- **Icons**: Lucide React
- **Build Tool**: Vite with HMR support

The frontend follows a page-based architecture with shared components. Pages include Home, Committee, Speakers, CFP (Call for Papers), Submission, Program, Registration, and Contact. Custom components like PageBanner, SectionHeader, Button, Navbar, and Footer provide consistent UI patterns across the site.

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **HTTP Server**: Node.js native http module wrapping Express
- **API Design**: RESTful endpoints defined in shared routes file
- **Validation**: Zod schemas for request/response validation
- **Development**: Vite dev server middleware for HMR during development
- **Production**: Static file serving from built assets

The server uses a clean separation between routes, storage layer, and database access. The storage pattern abstracts database operations through an interface, allowing for easy testing and potential storage backend changes.

### Data Storage
- **Database**: PostgreSQL
- **ORM**: Drizzle ORM with drizzle-zod for schema-to-validation integration
- **Schema Location**: `shared/schema.ts` (shared between frontend and backend)
- **Migrations**: Drizzle Kit with `db:push` command for schema synchronization
- **Connection**: pg Pool with DATABASE_URL environment variable

Current schema includes a minimal `messages` table for contact form submissions. The schema is designed to be extended as conference features grow.

### Shared Code
The `shared/` directory contains code used by both frontend and backend:
- `schema.ts`: Database table definitions and Zod validation schemas
- `routes.ts`: API route definitions with type-safe input/output schemas

This pattern ensures type safety across the full stack and prevents API contract drift.

### Build System
- **Client Build**: Vite builds React app to `dist/public`
- **Server Build**: esbuild bundles server code to `dist/index.cjs`
- **Dependency Bundling**: Selective bundling of common dependencies to reduce cold start times

## External Dependencies

### Database
- **PostgreSQL**: Primary data store, connected via `DATABASE_URL` environment variable
- **connect-pg-simple**: Session storage for Express sessions (available but not currently active)

### UI Framework Dependencies
- **Radix UI**: Comprehensive set of accessible UI primitives (dialog, dropdown, popover, tabs, etc.)
- **shadcn/ui**: Pre-styled components built on Radix primitives
- **Tailwind CSS**: Utility-first CSS framework with custom theme configuration
- **Framer Motion**: Animation library for smooth transitions

### Development Tools
- **Vite**: Development server and build tool
- **Drizzle Kit**: Database migration and schema management
- **TypeScript**: Full type safety across the codebase
- **Replit Plugins**: Runtime error overlay, cartographer, and dev banner for Replit environment

### Fonts
- **Google Fonts**: DM Sans (body text), Outfit (display headings), loaded via external CDN

### Environment Variables Required
- `DATABASE_URL`: PostgreSQL connection string (required for database operations)