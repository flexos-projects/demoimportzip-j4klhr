---
id: flow.002-project-to-invoice
seq: 21
type: spec
subtype: flow
slug: 002-project-to-invoice
title: Project to Invoice
description: The full project lifecycle — from brief to invoice sent
status: active
tags: [core, billing]
created: 2026-01-01
last_modified: 2026-01-01
relatesTo: [feature.002-project-management, feature.003-task-tracking, feature.004-time-tracking, feature.005-invoice-generation]
---

# Project to Invoice Flow

The complete lifecycle of a piece of freelance work.

<flex_block type="flow">
{
  "steps": [
    { "id": "1", "label": "Project created", "description": "Client onboarded, project set up with budget and deadline." },
    { "id": "2", "label": "Work tracked", "description": "Tasks updated as work progresses. Time logged daily (habit). Timer running when billing." },
    { "id": "3", "label": "Project complete", "description": "All tasks done. Status set to Completed. Unbilled hours sitting on the project." },
    { "id": "4", "label": "Generate invoice", "description": "One click from project. Unbilled time entries become line items. Edit, add expenses, check totals." },
    { "id": "5", "label": "Send invoice", "description": "PDF preview. Customise email. Send. Invoice status moves to Sent." },
    { "id": "6", "label": "Invoice paid", "description": "Client pays. Mark paid with date and method. Revenue counter updates. Done." }
  ]
}
</flex_block>
