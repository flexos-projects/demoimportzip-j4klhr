---
id: feature.006-invoice-tracking
seq: 14
type: spec
subtype: feature
slug: 006-invoice-tracking
title: Invoice Tracking
description: Track invoice status from sent to paid — automated reminders, overdue alerts
status: active
tags: [billing]
created: 2026-01-01
last_modified: 2026-01-01
relatesTo: [feature.005-invoice-generation, database.005-invoices]
---

# Invoice Tracking

Sending the invoice is only half the battle. Flo tracks what's outstanding and nudges clients so you don't have to.

## What it does

- Invoice list with status: Draft, Sent, Viewed, Overdue, Paid
- "Viewed" status set when client opens the invoice link (email pixel + link click)
- Automated payment reminders: 7 days before due, on due date, 7 days overdue
- Manual reminder send at any time with custom message
- Mark paid with date and method (bank transfer, PayPal, etc.)
- Dashboard shows: total outstanding, overdue count, average days to payment

## Status flow

```
Draft → Sent → Viewed → Paid
              ↓
           Overdue (auto after due date if unpaid)
```

## Key decisions

- **Reminders are opt-in per invoice.** Default on, can disable for clients you know are slow-to-respond and you don't want to annoy.
- **"Viewed" requires the email pixel load or link click.** Not guaranteed (email clients block pixels) — shown as best-effort signal.

## Acceptance criteria

- [ ] Invoice list filterable by status
- [ ] Overdue badge auto-appears after due date passes
- [ ] Reminder emails send automatically (via Resend cron)
- [ ] Manual "Send reminder" with preview of email content
- [ ] Mark paid with date + method
- [ ] Dashboard overdue/outstanding summary
