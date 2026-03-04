---
id: build.task-001-scaffold
seq: 36
type: build
subtype: task
slug: 001-scaffold
buildId: build.001-initial-setup
title: Clone Nuxt Starter
description: Copy nuxt-starter files into src/ — package.json, nuxt.config, Open Props, Convex stub
status: draft
tags: []
created: 2026-01-01
last_modified: 2026-01-01
relatesTo: [build.001-initial-setup]
---

# Clone Nuxt Starter

Copies the `flexos-templates/nuxt-starter` files into the project `src/` directory via GitHub API.

## What gets cloned

- `package.json` — Nuxt 4, Convex, Clerk, Open Props, Resend pre-installed
- `nuxt.config.ts` — Vercel deployment config, Clerk module, route middleware
- `app.vue` — root component with Nuxt layout
- `layouts/default.vue` — sidebar nav layout for app pages
- `layouts/marketing.vue` — header/footer layout for public pages
- `middleware/auth.ts` — Clerk auth guard
- `assets/css/main.css` — Open Props import + CSS custom properties
- `convex/schema.ts` — empty stub, ready for task 002
- `public/favicon.ico` — Flo placeholder favicon

## Output

Working Nuxt dev server, Convex connected, auth configured, empty app at `/dashboard`.
