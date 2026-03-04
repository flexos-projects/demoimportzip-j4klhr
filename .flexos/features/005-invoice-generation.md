---
id: feature.005-invoice-generation
seq: 13
type: spec
subtype: feature
slug: 005-invoice-generation
title: Invoice Generation
description: Auto-build invoices from time entries — editable line items, PDF, send by email
status: active
tags: [core, billing]
created: 2026-01-01
last_modified: 2026-01-01
relatesTo: [feature.004-time-tracking, feature.006-invoice-tracking, database.005-invoices, flow.003-invoice-flow]
---

# Invoice Generation

The payoff of all the time logging. One click to generate an invoice from unbilled time entries, with full editability before sending.

## What it does

- Generate invoice from a project's unbilled time entries — groups by description, calculates totals
- Edit line items before finalising — merge, split, adjust rate, delete
- Add manual line items (for fixed-price elements, expenses)
- Set invoice number, due date (net 30 default), payment terms
- Preview as PDF before sending
- Send via email directly from Flo (Resend)
- Mark as sent, viewed, paid manually (or auto via payment link)

## Invoice structure

```
Invoice #0042
Flo Demo Ltd → Acme Corp
Issued: 1 Feb 2026 | Due: 3 Mar 2026 (net 30)

Line items:
  UI Design (8.5h × £120/h)      £1,020.00
  Dev review calls (2h × £120/h)    £240.00
  Figma licence (expense)            £45.00
                          Subtotal  £1,305.00
                          VAT 20%     £261.00
                             Total  £1,566.00
```

## Key decisions

- **Invoices are snapshots.** Once generated, editing the original time entries doesn't change the invoice. Invoice line items are their own records.
- **VAT is optional.** Toggle on per invoice. Rate configurable in settings.
- **Payment link v1 = manual mark paid.** Stripe integration is roadmap.

## Acceptance criteria

- [ ] "Generate invoice" from project pulls all unbilled time entries
- [ ] Auto-groups entries by description, calculates line total
- [ ] Full line item editing (title, quantity, rate, delete, add)
- [ ] Invoice number auto-increments, editable
- [ ] Net 30 due date default, editable
- [ ] PDF preview before send
- [ ] Send via email with customisable message
- [ ] Sent invoice locked from editing (clone to create credit note)
