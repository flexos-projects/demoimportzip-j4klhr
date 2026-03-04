---
id: database.004-time-entries
seq: 26
type: spec
subtype: database
slug: 004-time-entries
title: Time Entries
description: Logged time — linked to project and optionally a task, billable flag
status: active
tags: []
created: 2026-01-01
last_modified: 2026-01-01
relatesTo: [database.002-projects, database.003-tasks, database.005-invoices]
---

# Time Entries Collection

<flex_block type="schema">
{
  "fields": [
    { "name": "_id", "type": "id", "required": true, "description": "Convex auto-generated ID" },
    { "name": "userId", "type": "string", "required": true, "description": "Clerk user ID" },
    { "name": "projectId", "type": "id", "required": true, "description": "Parent project" },
    { "name": "taskId", "type": "id", "required": false, "description": "Optional — specific task this time was logged against" },
    { "name": "description", "type": "string", "required": false, "description": "What was done — becomes invoice line item description" },
    { "name": "durationHours", "type": "number", "required": true, "description": "Duration in decimal hours (1.5 = 90 min)" },
    { "name": "date", "type": "number", "required": true, "description": "Date the work was done (Unix timestamp, date only)" },
    { "name": "billable", "type": "boolean", "required": true, "description": "Whether to include in invoice generation" },
    { "name": "invoiceId", "type": "id", "required": false, "description": "Set when included in an invoice — marks as billed" },
    { "name": "createdAt", "type": "number", "required": true, "description": "Unix timestamp" }
  ]
}
</flex_block>

## Indexes

- `by_project` — (projectId) — all entries for a project
- `by_project_unbilled` — (projectId, billable, invoiceId) — for invoice generation query
- `by_user_date` — (userId, date) — daily/weekly time views
