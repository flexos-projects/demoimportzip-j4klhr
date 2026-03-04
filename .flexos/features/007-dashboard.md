---
id: feature.007-dashboard
seq: 15
type: spec
subtype: feature
slug: 007-dashboard
title: Dashboard
description: Live overview of active work, unbilled hours, and money owed — the daily home screen
status: active
tags: [core]
created: 2026-01-01
last_modified: 2026-01-01
relatesTo: [page.002-dashboard, feature.004-time-tracking, feature.006-invoice-tracking]
---

# Dashboard

The first thing a freelancer sees every morning. Should answer: what am I working on, what's overdue, what do I need to chase.

## What it shows

**Top stats bar**
- Unbilled hours this month
- Outstanding invoice total (£)
- Overdue invoices count
- Revenue this month (paid invoices)

**Active projects** — cards for all active projects, showing task progress + unbilled hours + days to deadline. Ordered by deadline proximity.

**Running timer** — if active, shown prominently at top. Elapsed time, project, quick stop.

**Recent time entries** — last 5 entries across all projects. Quick edit.

**Overdue invoices** — if any, shown as urgent strip. Quick "send reminder" from here.

## Design decisions

- Dashboard is read-mostly — navigate elsewhere to take action. Only timer stop and quick reminder send are inline actions.
- No date range filters on dashboard — it's always "right now". Reports are where you go for historical analysis.

## Acceptance criteria

- [ ] Stats update in real-time (Convex subscriptions)
- [ ] Active project cards ordered by deadline
- [ ] Running timer shown if active, stop button works inline
- [ ] Overdue invoices strip visible and not ignorable
- [ ] Loads in under 500ms (all data pre-subscribed)
