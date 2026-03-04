---
id: page.003-clients
seq: 18
type: spec
subtype: page
slug: 003-clients
title: Clients
description: Client list — all clients with status, revenue, and unbilled hours at a glance
status: active
tags: [app, authenticated]
created: 2026-01-01
last_modified: 2026-01-01
route: /clients
prototype: clients.html
relatesTo: [feature.001-client-management]
---

# Clients Page

List of all clients. The starting point for navigating to any client's work.

## Layout

- Search bar + "Add client" button
- Table/list: client name, status badge, active projects count, total billed (YTD), unbilled hours
- Tabs: Active | Archived
- Click row → client detail

## Empty state

First-time users: illustrated empty state — "Add your first client to get started." with a big Add Client button.
