# 🎬 Cine Blog

A modern movie review platform featuring a custom-built Content Management System (CMS), developed with React, TypeScript, Tailwind CSS, React Query, Supabase, and TMDB.

Designed to separate content creation from presentation, allowing reviews, featured content, drafts, and movie assets to be managed through an integrated administration panel.

---

## 🚀 Live Demo

https://cine-blog-ivory.vercel.app/

---

## 🧩 Core Features

## 🖥 Custom Content Management System

Unlike traditional portfolio projects that rely on static data, Cine Blog includes a fully custom-built CMS designed specifically for editorial workflows.

### Current capabilities

- Secure administrator authentication
- Create, edit and delete movie reviews
- Draft and publish workflow
- Featured review management
- Movie search powered by TMDB
- Poster and backdrop selection
- Dynamic homepage content
- Automatic synchronization with Supabase

The CMS was designed independently of the public website, allowing new content to be published without modifying the application code.

### 🎬 TMDB Integration

- Movie search
- Detailed movie pages
- Cast information
- High-resolution posters and backdrops
- Automatic metadata synchronization

---

### 🎨 Design System

Built using a reusable design system composed of:

- Button
- Card
- Badge
- Modal
- Container
- Inputs
- Form components
- Theme Toggle

The entire application uses semantic design tokens to maintain consistency across light and dark themes.

---

## 🏗 Architecture Overview

The application follows a scalable folder structure designed for maintainability.

- **Pages** → Route-level views
- **Components** → Reusable UI components
- **Layouts** → Shared application layouts
- **Services** → API and database logic
- **Mappers** → Transform external data into domain models
- **Queries** → React Query keys and caching
- **Types** → Shared TypeScript models
- **Utils** → Pure utility functions
- **Contexts** → Global application state

This separation improves:

- Maintainability
- Reusability
- Scalability
- Type safety

---

## 🧠 Technical Challenges Solved

### ⚡ Data Mapping Layer

Instead of exposing raw API responses throughout the application, external data is transformed into internal domain models.

Examples include:

- TMDB → Movie
- Supabase → Review
- TMDB + Review → Hero

This keeps components independent from backend implementation details.

---

### 🔄 Server State Management

Implemented React Query to handle:

- Automatic caching
- Background refetching
- Cache invalidation
- Loading states
- Optimistic UI updates

Reducing unnecessary API requests while keeping the interface synchronized.

---

### 🎨 Theme System

Implemented a complete light/dark theme using:

- CSS variables
- Semantic design tokens
- Context API
- Local persistence

Every component automatically adapts to the active theme.

---

### 📱 Responsive Editorial Layout

The interface was designed following a mobile-first approach.

Optimized layouts include:

- Responsive navigation
- Adaptive review cards
- Responsive hero section
- Flexible movie grids
- Mobile-friendly typography

---

## 🛠 Tech Stack

- **Frontend:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Data Fetching:** TanStack React Query
- **Backend:** Supabase
- **Authentication:** Supabase Auth
- **Movie API:** TMDB
- **Routing:** React Router
- **HTTP Client:** Axios
- **Hosting:** Vercel

---

## 📸 Key Features

### ⭐ Featured Review Hero

A cinematic hero section highlighting featured reviews with dynamic movie artwork and responsive layouts.

_(GIF)_

---

### ✍️ Admin Dashboard

Custom CMS allowing administrators to:

- Publish reviews
- Save drafts
- Edit existing reviews
- Manage featured content

_(GIF)_

---

### 🎥 Movie Explorer

Browse movies from TMDB with:

- Search
- Movie details
- Cast information
- Direct links to reviews

_(GIF)_

---

## 🧪 Project Highlights

This project demonstrates:

- React component architecture
- TypeScript best practices
- React Query server state management
- Custom Content Management System (CMS)
- Authentication
- External API integration
- Responsive design
- Design systems
- Theme management
- Data mapping patterns
- Reusable UI components

---

## 🚧 Roadmap

Upcoming improvements:

- Featured review carousel
- Draft management page
- Reading time estimation
- Related reviews
- SEO optimization
- Sitemap
- Open Graph support
- Accessibility improvements
- Performance optimization

---

## ⚙️ Installation

```bash
git clone https://github.com/walterfcr/cine-blog.git

cd cine-blog

npm install

npm run dev
```

---

## 🔑 Environment Variables

```env
VITE_SUPABASE_URL=...

VITE_SUPABASE_ANON_KEY=...

VITE_TMDB_TOKEN=...
```

---

## 👨‍💻 Author

**Walter Fallas**

🌐 https://walterfallascr.com

💻 https://github.com/walterfcr

---

## 📄 License

This project is intended for educational and portfolio purposes.
