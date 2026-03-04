---
id: doc.database
seq: 4
type: doc
subtype: database
slug: 004-database
title: Database Overview
description: Data model — clients, projects, tasks, time, invoices
status: active
tags: []
created: 2026-01-01
last_modified: 2026-01-01
relatesTo: []
---

# Database Overview

**Database:** Convex
**Why:** Real-time subscriptions out of the box, TypeScript-native schema, functions run server-side. Time entries and dashboard need live updates.

## Core collections

| Collection | Purpose |
|-----------|---------|
| `users` | Account and billing |
| `clients` | Client companies and contacts |
| `projects` | Work scoped to a client |
| `tasks` | Work items within a project |
| `timeEntries` | Logged time against task or project |
| `invoices` | Generated invoices |
| `invoiceLineItems` | Line items within an invoice |

## Key relationships

```
users ──< clients        (userId)
clients ──< projects     (clientId)
projects ──< tasks       (projectId)
projects ──< timeEntries (projectId)
tasks ──< timeEntries    (taskId, optional)
projects ──< invoices    (projectId, multiple invoices per project)
invoices ──< invoiceLineItems (invoiceId)
```

## Design decisions

- Time entries can be logged to a project directly OR to a specific task. Both valid — task-level is optional precision.
- Invoices are generated from time entries but line items are stored independently — allows manual adjustment after generation.
- All user data is scoped by userId at the query level. No multi-tenancy needed v1.
