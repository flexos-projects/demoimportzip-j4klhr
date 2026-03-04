---
id: feature.004-time-tracking
seq: 12
type: spec
subtype: feature
slug: 004-time-tracking
title: Time Tracking
description: Log time against projects or tasks — running timer, manual entry, daily view
status: active
tags: [core]
created: 2026-01-01
last_modified: 2026-01-01
relatesTo: [feature.003-task-tracking, feature.005-invoice-generation, database.004-time-entries]
---

# Time Tracking

Time entries are the bridge between work done and invoice sent. Logging should be fast enough to become a habit.

## What it does

- **Running timer** — start/stop timer from anywhere in the app, persists across page navigation
- **Manual entry** — log time directly (date, duration, project/task, description, billable toggle)
- **Daily view** — see all entries for today grouped by project, total hours
- **Weekly view** — 7-day summary, hours per project, total billable vs non-billable
- **Quick log** — from a task card, from the header button, from the Time page

## Key decisions

- **Billable by default.** Most freelancer time is billable. Toggle to non-billable is explicit opt-out.
- **Description is optional but searchable.** Useful for invoice line item generation.
- **Duration in decimal hours** internally (1.5 = 90 min) but shown as hours:minutes in UI (1h 30m).
- **One running timer at a time.** Starting a new one stops the previous.

## Acceptance criteria

- [ ] Start/stop timer from header, auto-attaches to last used project
- [ ] Prompt to assign project/task when timer stopped
- [ ] Manual entry with date picker, duration, project selector, description
- [ ] Billable toggle defaults on, sticky per project
- [ ] Daily and weekly aggregation views
- [ ] Edit and delete any entry
- [ ] Total unbilled hours shown on dashboard
