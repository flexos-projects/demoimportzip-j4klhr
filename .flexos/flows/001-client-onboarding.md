---
id: flow.001-client-onboarding
seq: 20
type: spec
subtype: flow
slug: 001-client-onboarding
title: Client Onboarding
description: From new client to first project created — under 2 minutes
status: active
tags: [core, onboarding]
created: 2026-01-01
last_modified: 2026-01-01
relatesTo: [feature.001-client-management, feature.002-project-management, page.003-clients]
---

# Client Onboarding Flow

When a freelancer wins new work, getting the client into Flo should take less than 2 minutes.

<flex_block type="flow">
{
  "steps": [
    { "id": "1", "label": "Add client", "description": "Name, email, company, default hourly rate. Optional: billing address for invoices." },
    { "id": "2", "label": "Create project", "description": "Name, type (fixed/hourly), budget, deadline. Brief is optional at this stage." },
    { "id": "3", "label": "Add initial tasks", "description": "Optional quick task creation. Can skip and add tasks later as work becomes clear." },
    { "id": "4", "label": "Land on project detail", "description": "Project is ready. Timer button is prominent. First action is to start working." }
  ]
}
</flex_block>

## Notes

- Steps 1 and 2 can be combined into a single modal ("New client + project") for speed
- Client can be reused immediately for future projects — no repeat data entry
- No email sent to client at this stage — Flo is for the freelancer, client comms are separate
