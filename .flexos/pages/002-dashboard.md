---
id: page.002-dashboard
seq: 17
type: spec
subtype: page
slug: 002-dashboard
title: Dashboard
description: Daily home screen — active work, timer, unbilled hours, overdue invoices
status: active
tags: [app, authenticated]
created: 2026-01-01
last_modified: 2026-01-01
route: /dashboard
prototype: dashboard.html
relatesTo: [feature.007-dashboard]
---

# Dashboard

The main app home screen. See feature.007-dashboard for full specification.

## Layout

```
[Stats bar: Unbilled | Outstanding | Overdue | Revenue]
[Running timer — if active]
[Active projects grid]                [Overdue invoices strip]
[Recent time entries]
```

## Responsive

Desktop: two-column (projects + sidebar). Mobile: stacked, timer always visible at bottom.
