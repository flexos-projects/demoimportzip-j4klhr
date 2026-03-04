---
id: database.003-tasks
seq: 25
type: spec
subtype: database
slug: 003-tasks
title: Tasks
description: Work items within a project — kanban status, estimated hours
status: active
tags: []
created: 2026-01-01
last_modified: 2026-01-01
relatesTo: [database.002-projects, database.004-time-entries]
---

# Tasks Collection

<flex_block type="schema">
{
  "fields": [
    { "name": "_id", "type": "id", "required": true, "description": "Convex auto-generated ID" },
    { "name": "projectId", "type": "id", "required": true, "description": "Parent project" },
    { "name": "userId", "type": "string", "required": true, "description": "Clerk user ID (denormalised for security queries)" },
    { "name": "title", "type": "string", "required": true, "description": "Task title" },
    { "name": "description", "type": "string", "required": false, "description": "Optional notes / acceptance criteria" },
    { "name": "status", "type": "enum", "required": true, "description": "todo | in_progress | review | done" },
    { "name": "estimatedHours", "type": "number", "required": false, "description": "Estimated effort in decimal hours" },
    { "name": "dueDate", "type": "number", "required": false, "description": "Unix timestamp" },
    { "name": "order", "type": "number", "required": true, "description": "Sort order within status column (for drag reorder)" },
    { "name": "createdAt", "type": "number", "required": true, "description": "Unix timestamp" }
  ]
}
</flex_block>

## Indexes

- `by_project` — (projectId) — load all tasks for a project board
- `by_project_status` — (projectId, status) — load a single column
