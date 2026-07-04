# 🎬 PROJECT_CONTEXT.md

## Nombre del proyecto

> Pendiente de definir.

---

# Visión

Crear una **revista digital de cine en español**, donde el contenido principal sean reseñas originales escritas por el equipo editorial.

El sitio **no pretende ser un clon de IMDb o TMDB**.

Las películas son el contexto.

Las reseñas son el producto.

---

# Objetivos

- Crear un portfolio de nivel profesional con React + TypeScript.
- Aplicar buenas prácticas de arquitectura frontend.
- Aprender desarrollo escalable.
- Construir una aplicación que pueda evolucionar a producción.
- Publicar el proyecto en GitHub como pieza principal del portfolio.

---

# Stack

- React 19
- TypeScript
- Vite
- React Router
- React Query
- Axios
- Tailwind CSS v4
- Supabase (más adelante)
- React Icons

---

# Idioma

## Código

Todo el código estará en inglés.

- variables
- funciones
- interfaces
- comentarios (cuando existan)

## Sitio

Todo el contenido visible para el usuario estará en español.

---

# Identidad visual

## Personalidad

- Revista editorial
- Cinematográfica
- Moderna
- Elegante
- Oscura
- Centrada en la lectura

No buscamos parecer Netflix.

No buscamos parecer IMDb.

---

# Paleta

| Uso            | Color   |
| -------------- | ------- |
| Background     | #121212 |
| Surface        | #1E1E1E |
| Surface Hover  | #292929 |
| Accent         | #8B1E3F |
| Accent Hover   | #6D1832 |
| Rating         | #D4AF37 |
| Text Primary   | #F5F5F5 |
| Text Secondary | #CCCCCC |
| Text Muted     | #8A8A8A |
| Border         | #313131 |

---

# Tipografía

Principal:

- Inter

---

# Espaciado

Usar una escala consistente.

Ejemplos:

- gap-6
- mb-8
- py-16

Evitar valores arbitrarios sin necesidad.

---

# Border Radius

Button

- rounded-lg

Card

- rounded-xl

Badge

- rounded-full

---

# Iconografía

React Icons

Principalmente Lucide.

---

# Principios de arquitectura

## 1.

Los componentes renderizan datos.

No transforman datos.

---

## 2.

Los mappers transforman datos.

---

## 3.

Los servicios obtienen datos.

---

## 4.

React no depende directamente de TMDB.

---

## 5.

Supabase será la fuente de verdad.

---

## 6.

Todo el contenido editorial pertenece al proyecto.

---

## 7.

Los componentes UI son genéricos.

No conocen el dominio.

Ejemplos:

- Button
- Card
- Badge
- Spinner

---

## 8.

Los componentes de dominio conocen el negocio.

Ejemplos:

- MovieCard
- ReviewCard
- Hero

---

# Arquitectura

Actualmente:

```
TMDB
   ↓
Movie Mapper
   ↓
Movie
```

Objetivo final:

```
                TMDB
                  │
          (solo importar)
                  │
                  ▼
             Supabase
        ┌──────────────┐
        │ Movies       │
        │ Reviews      │
        │ Authors      │
        └──────────────┘
                  │
                  ▼
               React
```

TMDB será únicamente una herramienta para importar información.

La aplicación pública consumirá datos desde Supabase.

---

# Modelos

## API

- TmdbMovie

---

## Dominio

- Movie
- Review

---

## View Models

- ReviewCardData
- HeroData (pendiente)

---

# Mappers

- movie.mapper.ts
- review.mapper.ts
- hero.mapper.ts (pendiente)

---

# Componentes UI

- Container
- Card
- Button
- Badge
- Spinner
- SectionTitle

Todos reutilizables.

---

# Componentes de dominio

Movies

- MovieCard
- MovieGrid

Reviews

- ReviewCard
- ReviewGrid

Hero

- Hero

---

# Flujo de datos

```
API / Supabase
        │
        ▼
     Services
        │
        ▼
     Mappers
        │
        ▼
   View Models
        │
        ▼
   React Components
```

---

# Convenciones

## Componentes

Los componentes reciben datos listos para mostrar.

Nunca consultan APIs.

Nunca transforman datos.

---

## Servicios

Obtienen información.

Ejemplos:

- TMDB
- Supabase

---

## Mappers

Convierten un modelo en otro.

Ejemplo:

```
TmdbMovie
     ↓
Movie
```

o

```
Review + Movie
      ↓
ReviewCardData
```

---

# Roadmap

## Sprint 1

✅ Design System

- Paleta
- Tipografía
- Tokens
- Componentes UI

---

## Sprint 2

🚧 Arquitectura de contenido

- Movie
- Review
- ReviewCardData
- Mappers

---

## Sprint 3

UI completa

- Header
- Hero
- Home
- Movies
- Reviews
- Footer

Todo usando datos mock.

---

## Sprint 4

Supabase

- Movies
- Reviews
- Authors

---

## Sprint 5

Panel de administración

- Importar película desde TMDB
- Crear reseña
- Publicar contenido

---

## Sprint 6

Sitio público consumiendo Supabase.

---

## Sprint 7

Refactor de arquitectura.

Migrar a estructura por features.

---

# Forma de trabajo

Trabajar en cambios pequeños.

Cada paso debe indicar:

- Objetivo
- Archivos involucrados
- Motivo del cambio
- Revisión
- Commit (cuando corresponda)

Evitar cambios grandes que afecten muchos archivos al mismo tiempo.

---

# Objetivo final

Construir un proyecto que:

- sea útil para el mundo real,
- sirva como pieza principal del portfolio,
- demuestre buenas prácticas de React y TypeScript,
- y pueda evolucionar hasta una aplicación de producción.
  "Continuing Cine Blog. Remember: this is my sister's personal movie blog. TMDB is only for movie metadata. Reviews are the main content and will come from Supabase."
