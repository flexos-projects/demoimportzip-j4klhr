---
id: flow.003-invoice-flow
seq: 22
type: spec
subtype: flow
slug: 003-invoice-flow
title: Invoice Flow
description: Generate, send, remind, and mark paid — the money flow
status: active
tags: [billing]
created: 2026-01-01
last_modified: 2026-01-01
relatesTo: [feature.005-invoice-generation, feature.006-invoice-tracking]
---

# Invoice Flow

The detailed payment journey from generation to money in the bank.

<flex_block type="flow">
{
  "steps": [
    { "id": "1", "label": "Generate from time entries", "description": "Pull all unbilled entries for a project. Auto-group by description. Review line items." },
    { "id": "2", "label": "Edit and finalise", "description": "Adjust line items, rates, add expenses. Set invoice number and due date. VAT toggle." },
    { "id": "3", "label": "Preview PDF", "description": "See exactly what the client will receive. Make any final tweaks." },
    { "id": "4", "label": "Send", "description": "Email sent via Resend. Invoice link in email. Status → Sent. Reminder schedule activated." },
    { "id": "5", "label": "Client views", "description": "Client opens link → status → Viewed (best effort via pixel). No action required from freelancer." },
    { "id": "6", "label": "Auto-reminders", "description": "Reminders sent at: 7 days before due, on due date, 7 days overdue. Can send manual reminder anytime." },
    { "id": "7", "label": "Mark paid", "description": "Freelancer marks paid with date and method. Invoice archived. Revenue count updates." }
  ]
}
</flex_block>
