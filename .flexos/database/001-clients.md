---
id: database.001-clients
seq: 23
type: spec
subtype: database
slug: 001-clients
title: Clients
description: Client companies and contacts — the top-level entity everything belongs to
status: active
tags: [core]
created: 2026-01-01
last_modified: 2026-01-01
relatesTo: [database.002-projects, feature.001-client-management]
---

# Clients Collection

One document per client. Scoped by userId — freelancers only see their own clients.

<flex_block type="schema">
{
  "fields": [
    { "name": "_id", "type": "id", "required": true, "description": "Convex auto-generated ID" },
    { "name": "userId", "type": "string", "required": true, "description": "Clerk user ID — row-level security" },
    { "name": "name", "type": "string", "required": true, "description": "Client company or individual name" },
    { "name": "contactName", "type": "string", "required": false, "description": "Primary contact person" },
    { "name": "email", "type": "string", "required": true, "description": "Primary billing email" },
    { "name": "company", "type": "string", "required": false, "description": "Company name if contact is an individual" },
    { "name": "defaultRate", "type": "number", "required": false, "description": "Default hourly rate in user's currency" },
    { "name": "billingAddress", "type": "string", "required": false, "description": "Full billing address for invoices" },
    { "name": "vatNumber", "type": "string", "required": false, "description": "Client VAT number for invoice" },
    { "name": "notes", "type": "string", "required": false, "description": "Freeform markdown notes / brief" },
    { "name": "status", "type": "enum", "required": true, "description": "active | paused | archived" },
    { "name": "createdAt", "type": "number", "required": true, "description": "Unix timestamp" }
  ]
}
</flex_block>

## Indexes

- `by_user` — (userId) — primary query for all client lists
- `by_user_status` — (userId, status) — for active/archived tab filtering

## Relationships

- One client → many `projects` (clientId)
- One client → many `invoices` (clientId, via project)
