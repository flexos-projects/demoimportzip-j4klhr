---
id: doc.pages
seq: 3
type: doc
subtype: pages
slug: 003-pages
title: Pages Overview
description: Site structure — marketing + the core app
status: active
tags: []
created: 2026-01-01
last_modified: 2026-01-01
relatesTo: []
---

# Pages Overview

## Site map

```
/                     Home — marketing landing page
/pricing              Pricing — three tiers
/login                Login
/signup               Signup

/dashboard            Dashboard — active work overview       [auth]
/clients              Client list                             [auth]
/clients/:id          Client detail — projects + history     [auth]
/projects/:id         Project detail — tasks + time + brief  [auth]
/time                 Time log — all entries, running timer  [auth]
/invoices             Invoice list                           [auth]
/invoices/:id         Invoice detail + send                  [auth]
/settings             Account + billing settings             [auth]
```

## Navigation

**Primary sidebar:** Dashboard, Clients, Time, Invoices
**Contextual:** Project detail accessed from client, invoice from project
**Mobile:** Bottom tab bar — Dashboard, Clients, Time, Invoices, Settings

## Page types

- **Marketing (3):** Home, Pricing — public, SEO-critical
- **App (8):** Dashboard through Settings — authenticated, the product
