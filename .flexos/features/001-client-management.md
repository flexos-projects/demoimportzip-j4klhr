---
id: feature.001-client-management
seq: 9
type: spec
subtype: feature
slug: 001-client-management
title: Client Management
description: Add and manage clients — contact details, brief, status, full project history
status: active
tags: [core]
created: 2026-01-01
last_modified: 2026-01-01
relatesTo: [page.003-clients, database.001-clients]
---

# Client Management

The foundation of Flo. Everything is organised around clients. A client is a company or individual you bill.

## What it does

- Add a client with name, contact email, company, billing address, hourly rate default
- View all projects for a client on their detail page
- See total billed, outstanding, and hours logged per client
- Mark clients as active, paused, or archived
- Store a client brief / notes (freeform markdown)

## Key decisions

- **One contact per client v1.** Multi-contact (e.g. billing contact + project contact) is roadmap.
- **Default hourly rate on client** — can be overridden per project. Flows through to invoice generation.
- **Archived clients** still show history but don't appear in active lists or dropdowns.

## Acceptance criteria

- [ ] Create client with required fields (name, email)
- [ ] Edit all client fields inline
- [ ] View client's projects, total billed, unbilled hours
- [ ] Archive/unarchive client
- [ ] Search clients by name

<flex_block type="instructions">
Client management is the entry point for all work in Flo. When generating or editing code for client-related features, note:
- All client queries must be scoped by userId (Convex: use auth.getUserIdentity())
- The clientId foreign key links clients to projects, time entries, and invoices
- Archived clients should be excluded by default from dropdowns and lists unless explicitly requested
</flex_block>
