---
id: commit.001-initial-setup
seq: 29
type: commit
subtype: commit
slug: 001-initial-setup
title: Initial Project Setup
description: Full spec set created — all features, pages, flows, database schemas, design tokens
status: active
tags: [setup]
created: 2026-01-01
last_modified: 2026-01-01
relatesTo: []
---

# Initial Project Setup

**Date:** 2026-01-01

## What was created

- Core docs (000–008) — vision through content overview
- 7 feature specs — client management, projects, tasks, time tracking, invoice generation, invoice tracking, dashboard
- 5 page specs — home, dashboard, clients, project detail, invoice detail
- 3 flow specs — client onboarding, project to invoice, invoice flow
- 5 database schemas — clients, projects, tasks, time entries, invoices
- Design system — violet palette, Inter type scale, spacing tokens
- Prototype — landing page and dashboard HTML with tokens.css
- Initial build — scaffold tasks defined

## Decisions logged

- Nuxt 4 + Convex + Open Props + Clerk + Vercel + Resend
- Fixed and hourly project types
- Time entries bridge work to invoices — invoiceId foreign key marks billed
- Invoices are snapshots — line items stored independently
- Reminders via Resend cron, opt-in per invoice
