---
id: reference.001-resend-api
seq: 34
type: reference
subtype: reference
slug: 001-resend-api
title: Resend API Reference
description: Email sending via Resend — invoice delivery and payment reminders
status: active
tags: [email, integration]
created: 2026-01-01
last_modified: 2026-01-01
relatesTo: [feature.005-invoice-generation, feature.006-invoice-tracking]
---

# Resend API Reference

Flo uses Resend for all transactional email — invoice delivery and payment reminders.

## Setup

```bash
pnpm add resend
```

```ts
import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)
```

## Invoice send

```ts
await resend.emails.send({
  from: 'invoices@useflo.io',
  to: client.email,
  subject: `Invoice ${invoice.invoiceNumber} from ${user.name}`,
  react: InvoiceEmailTemplate({ invoice, client, user }),
  attachments: [{ filename: `${invoice.invoiceNumber}.pdf`, content: pdfBuffer }]
})
```

## Reminder schedule

Reminders triggered by Convex scheduled functions:
- `scheduleReminder(invoiceId, 'before_due', dueAt - 7days)`
- `scheduleReminder(invoiceId, 'on_due', dueAt)`
- `scheduleReminder(invoiceId, 'overdue', dueAt + 7days)`

Each reminder checks invoice status before sending — cancels if already paid.

## Docs

Full API reference: https://resend.com/docs
