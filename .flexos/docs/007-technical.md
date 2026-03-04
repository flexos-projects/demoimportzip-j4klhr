---
id: doc.technical
seq: 7
type: doc
subtype: technical
slug: 007-technical
title: Technical Overview
description: Nuxt 4 + Convex + Open Props — deployed to Vercel
status: active
tags: []
created: 2026-01-01
last_modified: 2026-01-01
relatesTo: []
---

# Technical Overview

## Stack

| Layer | Choice | Why |
|-------|--------|-----|
| Frontend | Nuxt 4 (Vue 3) | SSR for marketing, SPA for app, one codebase |
| Database | Convex | Real-time, TypeScript schema, serverless functions |
| Auth | Clerk | Best DX, handles all edge cases, Convex integration |
| CSS | Open Props + custom tokens | Full design scale, zero config, performant |
| Hosting | Vercel | Edge functions, preview deployments, Nuxt-native |
| Email | Resend | Invoice delivery, payment reminders |
| PDF | Puppeteer (Vercel function) | Invoice PDF generation |

## Architecture

SSR on marketing pages (/, /pricing). Full SPA behaviour for authenticated app routes. Convex handles all data — no separate API layer. Clerk middleware protects `/dashboard` and below.

## Key technical decisions

- **Convex over Firebase:** Real-time subscriptions needed for running timer + live dashboard. Convex's TypeScript schema beats Firestore's loose typing.
- **No REST API:** Convex functions ARE the API. Client calls Convex directly. Simpler, type-safe end-to-end.
- **PDF on the edge:** Invoice PDF generated server-side via Vercel function on demand, not stored — regenerated if template changes.

## Development

```bash
pnpm dev          # Nuxt + Convex dev servers concurrently
pnpm build        # Production build
npx convex deploy # Push schema + functions to Convex cloud
```
