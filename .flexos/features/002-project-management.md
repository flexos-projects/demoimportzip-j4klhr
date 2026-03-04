---
id: feature.002-project-management
seq: 10
type: spec
subtype: feature
slug: 002-project-management
title: Project Management
description: Projects scoped to a client — budget, deadline, tasks, and time all in one place
status: active
tags: [core]
created: 2026-01-01
last_modified: 2026-01-01
relatesTo: [feature.001-client-management, feature.003-task-tracking, page.004-project-detail, database.002-projects]
---

# Project Management

A project is a piece of work for a client. It has a brief, a budget (fixed or hourly), a deadline, and a collection of tasks.

## What it does

- Create project linked to a client — name, brief, type (fixed/hourly), budget, deadline
- View project status at a glance — tasks done/total, hours logged vs budget, days remaining
- Update project status — active, on hold, completed, cancelled
- Archive completed projects (still visible in client history)

## Project types

**Fixed price** — agreed total fee. Budget field = total project value. Time tracking optional (for your own insight).

**Hourly** — billed by time logged. Budget field = estimated hours × rate. Overage warning at 80%.

## Acceptance criteria

- [ ] Create project with client link, type, budget, deadline
- [ ] Project status card shows tasks, hours, days remaining at a glance
- [ ] Overage warning when hourly project exceeds 80% of budget hours
- [ ] Quick status change (active/on hold/completed)
- [ ] Project archive with full history preserved
