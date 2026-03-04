---
id: database.005-invoices
seq: 27
type: spec
subtype: database
slug: 005-invoices
title: Invoices
description: Generated invoices — with line items as a sub-collection
status: active
tags: [billing]
created: 2026-01-01
last_modified: 2026-01-01
relatesTo: [database.001-clients, database.002-projects, database.004-time-entries]
---

# Invoices Collection

<flex_block type="schema">
{
  "fields": [
    { "name": "_id", "type": "id", "required": true, "description": "Convex auto-generated ID" },
    { "name": "userId", "type": "string", "required": true, "description": "Clerk user ID" },
    { "name": "clientId", "type": "id", "required": true, "description": "Billed client" },
    { "name": "projectId", "type": "id", "required": true, "description": "Source project" },
    { "name": "invoiceNumber", "type": "string", "required": true, "description": "Human-readable invoice number e.g. INV-0042" },
    { "name": "status", "type": "enum", "required": true, "description": "draft | sent | viewed | overdue | paid | cancelled" },
    { "name": "issuedAt", "type": "number", "required": true, "description": "Issue date (Unix timestamp)" },
    { "name": "dueAt", "type": "number", "required": true, "description": "Payment due date (Unix timestamp)" },
    { "name": "paidAt", "type": "number", "required": false, "description": "Date payment received" },
    { "name": "paymentMethod", "type": "string", "required": false, "description": "bank_transfer | paypal | other" },
    { "name": "subtotal", "type": "number", "required": true, "description": "Sum of line items before tax" },
    { "name": "vatRate", "type": "number", "required": false, "description": "VAT percentage if applicable (e.g. 20)" },
    { "name": "vatAmount", "type": "number", "required": false, "description": "Calculated VAT amount" },
    { "name": "total", "type": "number", "required": true, "description": "Final total including tax" },
    { "name": "currency", "type": "string", "required": true, "description": "ISO 4217 currency code e.g. GBP, USD, EUR" },
    { "name": "notes", "type": "string", "required": false, "description": "Payment instructions / thank you note on invoice" },
    { "name": "remindersEnabled", "type": "boolean", "required": true, "description": "Auto-reminder schedule active" },
    { "name": "createdAt", "type": "number", "required": true, "description": "Unix timestamp" }
  ]
}
</flex_block>

## Line items

Stored as a separate `invoiceLineItems` collection (invoiceId foreign key):
```
{ invoiceId, description, quantity, rate, amount, order }
```

## Indexes

- `by_user_status` — (userId, status) — dashboard overdue/outstanding queries
- `by_client` — (clientId) — client billing history
- `by_project` — (projectId) — project invoice history
- `by_due_date` — for reminder cron queries
