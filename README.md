# 🎬 Cine Blog

A modern movie review platform featuring a custom-built Content Management System (CMS), developed with **Next.js, React, TypeScript, Tailwind CSS, TanStack React Query, Supabase, and TMDB**.

Designed as an editorial platform where movie reviews are the main content, Cine Blog separates content creation from presentation, allowing administrators to manage reviews, featured content, drafts, and movie assets through an integrated administration panel.

---

## 🚀 Live Demo

https://cine-blog-ivory.vercel.app/

---

# 🧩 Core Features

## 🖥 Custom Content Management System

Unlike traditional portfolio projects that rely on static content, Cine Blog includes a custom-built CMS designed specifically for editorial workflows.

### Current capabilities

- Secure administrator authentication
- Protected admin routes
- Create, edit, and delete movie reviews
- Draft and publish workflow
- Featured review management
- Movie search powered by TMDB
- Poster and backdrop selection
- Dynamic homepage content
- Supabase database synchronization

The CMS was designed independently from the public website, allowing new content to be published without modifying application code.

---

# 🎬 TMDB Integration

Movie data is integrated directly from TMDB to provide:

- Movie search
- Detailed movie information
- Cast information
- High-resolution posters and backdrops
- Movie metadata synchronization

A mapping layer transforms external API responses into application-specific models, keeping components independent from external services.

---

# 🏗 Architecture Overview

The application follows the **Next.js App Router architecture** with a modular structure designed for scalability and maintainability.

```
app/
 ├── Public routes
 ├── Admin routes
 ├── Protected routes
 └── Layouts

components/
 ├── UI components
 ├── Feature components
 └── Page components

lib/
 ├── Services
 ├── Supabase clients
 ├── Queries
 ├── Mappers
 └── Utilities

types/
 └── Shared TypeScript models
```

This separation improves:

- Maintainability
- Reusability
- Scalability
- Type safety
- Feature isolation

---

# 🧠 Technical Challenges Solved

## ⚡ Data Mapping Layer

Instead of exposing raw API responses throughout the application, external data is transformed into internal domain models.

Examples:

```
TMDB Response → Movie Model

Supabase Review → Review Model

TMDB + Review → Hero Content
```

This keeps components independent from backend implementation details.

---

## 🔄 Server State Management

Implemented TanStack React Query to manage server state and asynchronous data.

Features include:

- Automatic caching
- Background synchronization
- Query invalidation
- Loading states
- Mutation handling

---

## 🔐 Authentication & Route Protection

Implemented Supabase authentication integrated with Next.js.

Features include:

- Secure administrator login
- Protected admin routes
- Middleware authentication checks
- Cookie-based sessions using Supabase SSR

---

## 🎨 Design System

Built a reusable design system composed of:

- Button
- Card
- Badge
- Modal
- Container
- Inputs
- Form components
- Toggle components
- Rating components

The application uses semantic design tokens to maintain consistency across themes and components.

---

## 📱 Responsive Editorial Layout

The interface was designed following a mobile-first approach focused on a magazine-style reading experience.

Optimized layouts include:

- Responsive navigation
- Adaptive review cards
- Responsive hero section
- Flexible movie grids
- Mobile-friendly typography

---

# 🛠 Tech Stack

## Frontend

- **Framework:** Next.js 16
- **Library:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS

## Backend & Data

- **Database:** Supabase PostgreSQL
- **Authentication:** Supabase Auth
- **Movie API:** TMDB

## State Management

- **Server State:** TanStack React Query

## Deployment

- **Hosting:** Vercel

---

# 📸 Key Features

## ⭐ Featured Review Hero

A cinematic hero section highlighting featured reviews using dynamic movie artwork and responsive layouts.

_(GIF)_

---

## ✍️ Admin Dashboard

A custom CMS dashboard allowing administrators to:

- Create reviews
- Edit existing content
- Save drafts
- Publish reviews
- Manage featured content

_(GIF)_

---

## 🎥 Movie Explorer

Browse movies from TMDB with:

- Movie search
- Movie details
- Cast information
- Review connections

_(GIF)_

---

# 🧪 Project Highlights

This project demonstrates:

- Next.js App Router architecture
- React component architecture
- TypeScript best practices
- Custom CMS development
- Authentication systems
- Supabase integration
- External API integration
- Data mapping patterns
- Server state management
- Responsive design
- Design systems
- Reusable UI components
- Scalable frontend architecture

---

# 🚧 Roadmap

Upcoming improvements:

- SEO optimization
- Dynamic metadata generation
- Sitemap generation
- Open Graph support
- Related reviews
- Reading time estimation
- Draft management improvements
- Accessibility improvements
- Performance optimization

---

# ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/walterfcr/cine-blog.git
```

Navigate to the project:

```bash
cd cine-blog
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

---

# 🔑 Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=

NEXT_PUBLIC_SUPABASE_ANON_KEY=

NEXT_PUBLIC_TMDB_TOKEN=
```

---

# 👨‍💻 Author

**Walter Fallas**

🌐 https://walterfallascr.com

💻 https://github.com/walterfcr

---

# 📄 License

This project is intended for educational and portfolio purposes.
