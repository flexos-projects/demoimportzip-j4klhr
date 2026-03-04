---
id: database.002-projects
seq: 24
type: spec
subtype: database
slug: 002-projects
title: Projects
description: Work scoped to a client — budget, type, deadline, status
status: active
tags: [core]
created: 2026-01-01
last_modified: 2026-01-01
relatesTo: [database.001-clients, database.003-tasks, database.004-time-entries, database.005-invoices]
---

# Projects Collection

<flex_block type="schema">
{
  "fields": [
    { "name": "_id", "type": "id", "required": true, "description": "Convex auto-generated ID" },
    { "name": "userId", "type": "string", "required": true, "description": "Clerk user ID" },
    { "name": "clientId", "type": "id", "required": true, "description": "Parent client" },
    { "name": "name", "type": "string", "required": true, "description": "Project name" },
    { "name": "description", "type": "string", "required": false, "description": "Brief / scope description (markdown)" },
    { "name": "type", "type": "enum", "required": true, "description": "fixed | hourly" },
    { "name": "budget", "type": "number", "required": false, "description": "Fixed: total fee. Hourly: estimated hours. Both in respective units." },
    { "name": "rate", "type": "number", "required": false, "description": "Hourly rate — overrides client default if set" },
    { "name": "deadline", "type": "number", "required": false, "description": "Unix timestamp of project deadline" },
    { "name": "status", "type": "enum", "required": true, "description": "active | on_hold | completed | cancelled | archived" },
    { "name": "createdAt", "type": "number", "required": true, "description": "Unix timestamp" }
  ]
}
</flex_block>

## Indexes

- `by_user` — (userId)
- `by_client` — (clientId) — load all projects for a client detail page
- `by_user_status` — (userId, status) — dashboard active projects
