# AGENTS.md

## Project Overview

This repository contains the source code for the agency website.

The site is built using **Next.js (App Router)** and styled with **Tailwind CSS**.
It is deployed as a **static site on Vercel**.

The website currently consists of a landing page but will expand to include:

- case studies
- additional marketing pages
- potentially blog-style content in the future

The architecture prioritizes:

- performance
- static generation
- SEO
- maintainability
- simple deployments

Agents and contributors should aim to keep the project **lightweight and static-first**.

---

# Technology Stack

Core framework:

- Next.js (App Router)

Styling:

- Tailwind CSS

Deployment:

- Vercel

Linting:

- ESLint (`eslint.config.mjs`)

Image handling:

- `next/image`
- local assets stored in `/public`

---

# Project Structure

Current structure:

```
/app
/components
/public
```

### `/app`

Contains all application routes and layouts.

Typical structure:

```
/app
  layout.tsx
  page.tsx
```

Future pages should follow the App Router conventions:

```
/app/about/page.tsx
/app/case-studies/page.tsx
/app/case-studies/[slug]/page.tsx
```

---

### `/components`

Reusable UI components used across pages.

Examples may include:

```
/components
  Navbar.tsx
  Footer.tsx
  Hero.tsx
  Section.tsx
```

Keep components **small, focused, and reusable**.

If the project grows, this folder may be expanded into:

```
/components/ui
/components/sections
/components/layout
```

But for now keep it simple.

---

### `/public`

Static assets such as:

- images
- icons
- logos
- favicons

Example structure:

```
/public/images
/public/icons
```

All static images should live here.

---

# Image Guidelines

All images must use **Next.js Image component**.

Example:

```tsx
import Image from "next/image";

<Image
  src="/images/example.jpg"
  alt="Example description"
  width={1200}
  height={800}
/>;
```

Guidelines:

- Always provide `alt` text
- Use properly sized images
- Avoid uploading extremely large images
- Prefer compressed formats when possible

Do not hotlink external images unless necessary.

---

# Styling Guidelines

Tailwind CSS is the default styling system.

Guidelines:

- Prefer Tailwind utilities over custom CSS
- Avoid unnecessary custom styles
- Keep class lists readable
- Extract repeated patterns into components

Example:

Good:

```
<section className="max-w-6xl mx-auto px-6 py-16">
```

Avoid overly complex inline styling.

---

# Performance Rules

This site should remain **static-first**.

Preferred:

- Static pages
- Static assets
- Minimal client-side JavaScript

Avoid:

- unnecessary client components
- heavy libraries
- runtime APIs when static data works

Always default to **Server Components** unless interactivity is required.

---

# Deployment Workflow

The project uses the default **Vercel Git workflow**.

Development flow:

```
feature branch
      ↓
Pull Request
      ↓
Preview Deployment (Vercel)
      ↓
Review / QA
      ↓
Merge to main
      ↓
Production deployment
```

Preview deployments are used for:

- testing changes
- client review
- QA

Agents should never deploy directly to production.

---

# Code Quality

Linting is enforced using ESLint.

Before committing changes:

- ensure code passes linting
- avoid unused imports
- avoid console logs in production code

Maintain consistent formatting and readability.

---

# Accessibility

All UI should follow basic accessibility guidelines.

Requirements:

- images must have alt text
- buttons must be accessible
- links should have descriptive labels
- semantic HTML should be preferred

Example:

Use `<button>` instead of clickable `<div>`.

---

# SEO Considerations

The agency website must be optimized for search engines.

Guidelines:

- use semantic HTML
- include descriptive page titles
- provide meta descriptions
- use proper heading hierarchy

Future pages should include structured metadata using Next.js metadata APIs.

---

# Future Expansion

The site will eventually include:

- case study pages
- additional marketing pages
- possibly blog content

Future features should maintain the **static-first philosophy** to ensure:

- fast load times
- low infrastructure costs
- high SEO performance

---

# Agent Behavior Guidelines

When modifying this repository:

1. Prefer simple solutions.
2. Do not introduce heavy dependencies unless necessary.
3. Maintain static-first architecture.
4. Follow existing file structure.
5. Keep components reusable and clean.

If unsure about structure, follow existing patterns rather than introducing new ones.

---

# Summary

This project prioritizes:

- performance
- simplicity
- static generation
- clean architecture
- maintainability

All changes should respect these principles.
