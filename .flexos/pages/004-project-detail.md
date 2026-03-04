---
id: page.004-project-detail
seq: 19
type: spec
subtype: page
slug: 004-project-detail
title: Project Detail
description: Everything about a project — tasks, time logged, brief, and invoice history
status: active
tags: [app, authenticated]
created: 2026-01-01
last_modified: 2026-01-01
route: /projects/:id
prototype: project.html
relatesTo: [feature.002-project-management, feature.003-task-tracking, feature.004-time-tracking]
---

# Project Detail Page

The heart of the app. Where a freelancer spends most of their time.

## Layout — tabbed

**Overview tab**
- Project header: name, client, status badge, budget/type, deadline, % complete
- Brief (markdown, expandable)
- Recent time entries (last 10, "view all" → Time tab)
- Quick log time button

**Tasks tab**
- Kanban board: To Do / In Progress / Review / Done
- Add task button in each column
- Drag to move between columns

**Time tab**
- All time entries for this project, grouped by week
- Total hours, billable vs non-billable breakdown
- "Generate invoice from unbilled" button (shows if unbilled hours > 0)

**Invoices tab**
- All invoices for this project
- Status badges, totals, quick "Send reminder" for overdue
