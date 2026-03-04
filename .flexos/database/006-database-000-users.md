---
id: "database-000-users"
title: "Users Collection"
type: "spec"
subtype: "database"
status: "draft"
description: "Defines user profiles, roles, and subscription status for authorization."
tags: ["database", "users", "auth", "flexgen"]
createdAt: "2026-03-04"
updatedAt: "2026-03-04"
relatesTo: ["database/001-clients.md", "database/002-projects.md", "database/003-tasks.md", "database/004-time-entries.md", "database/005-invoices.md"]
---

---
id: database-000-users
title: Users Collection
type: spec
subtype: database
status: active
description: Defines user profiles, roles, and subscription status for authorization.
tags:
  - database
  - users
  - auth
  - flexgen
relatesTo:
  - database/001-clients.md
  - database/002-projects.md
  - database/003-tasks.md
  - database/004-time-entries.md
  - database/005-invoices.md
priority: P0
createdAt: 2023-10-27T10:00:00Z
updatedAt: 2023-10-27T10:00:00Z
---

# Users Collection

## Overview
This collection serves as the central repository for user-specific data, including authentication details, application roles, and subscription information. It links directly to Clerk for user authentication and integrates with Stripe for managing subscription plans. This data is critical for implementing role-based access control and feature gating based on subscription status.

## Collections/Tables

### `users` Collection
Stores core user profile data, including Clerk authentication identifiers, roles within the application, and their Stripe subscription status.

<flex_block type="schema">
{
  "fields": [
    { "name": "_id", "type": "id", "required": true, "description": "Convex auto-generated ID for the user document." },
    { "name": "clerkUserId", "type": "string", "required": true, "unique": true, "description": "The unique ID provided by Clerk for the authenticated user." },
    { "name": "email", "type": "string", "required": true, "description": "The primary email address of the user, typically from Clerk." },
    { "name": "name", "type": "string", "required": false, "description": "The user's display name or full name." },
    { "name": "imageUrl", "type": "string", "required": false, "description": "URL to the user's profile picture from Clerk or other source." },
    { "name": "role", "type": "enum", "required": true, "enum": ["admin", "freelancer", "client-portal-user"], "default": "freelancer", "description": "The role of the user within the application, dictating permissions." },
    { "name": "stripeCustomerId", "type": "string", "required": false, "unique": true, "description": "The unique ID of the customer in Stripe, if a subscription exists." },
    { "name": "stripeSubscriptionId", "type": "string", "required": false, "unique": true, "description": "The ID of the user's active subscription in Stripe." },
    { "name": "subscriptionStatus", "type": "enum", "required": false, "enum": ["active", "trialing", "past_due", "canceled", "unpaid", "incomplete", "incomplete_expired", "paused"], "description": "Current status of the user's Stripe subscription." },
    { "name": "subscriptionPlan", "type": "enum", "required": false, "enum": ["free", "pro"], "description": "The active subscription plan associated with the user." },
    { "name": "createdAt", "type": "number", "required": true, "description": "Unix timestamp of when the user record was created." },
    { "name": "updatedAt", "type": "number", "required": false, "description": "Unix timestamp of the last time the user record was updated." }
  ]
}
</flex_block>

## Indexes
- `by_clerk_id` — `(clerkUserId)`: A unique index for efficient lookup of user profiles based on their Clerk ID. Essential for authentication middleware.
- `by_stripe_customer_id` — `(stripeCustomerId)`: For quick lookup by Stripe customer ID, useful for webhook processing from Stripe.
- `by_stripe_subscription_id` — `(stripeSubscriptionId)`: For quick lookup by Stripe subscription ID, also useful for webhook processing and subscription management.

## Relationships
This `users` collection forms the root of the data hierarchy for a user's owned resources within the application.

- One `user` owns many `clients` (via `clients.userId`)
- One `user` owns many `projects` (via `projects.userId`)
- One `user` owns many `tasks` (via `tasks.userId`)
- One `user` owns many `timeEntries` (via `timeEntries.userId`)
- One `user` owns many `invoices` (via `invoices.userId`)

<flex_block type="relationships">
```mermaid
erDiagram
  USERS { 
    id _id PK
    string clerkUserId UNIQUE
    string email
    string name
    enum role
    string stripeCustomerId UNIQUE
    string stripeSubscriptionId UNIQUE
    enum subscriptionStatus
    enum subscriptionPlan
  }
  CLIENTS {
    id _id PK
    string userId FK "Clerk User ID"
    string name
  }
  PROJECTS {
    id _id PK
    string userId FK "Clerk User ID"
    id clientId FK
    string name
  }
  TASKS {
    id _id PK
    string userId FK "Clerk User ID"
    id projectId FK
    string title
  }
  TIME_ENTRIES {
    id _id PK
    string userId FK "Clerk User ID"
    id projectId FK
    number durationHours
  }
  INVOICES {
    id _id PK
    string userId FK "Clerk User ID"
    id clientId FK
    id projectId FK
    string invoiceNumber
  }

  USERS ||--o{ CLIENTS : "owns"
  USERS ||--o{ PROJECTS : "owns"
  USERS ||--o{ TASKS : "owns"
  USERS ||--o{ TIME_ENTRIES : "owns"
  USERS ||--o{ INVOICES : "owns"
  CLIENTS ||--o{ PROJECTS : "has"
  PROJECTS ||--o{ TASKS : "has"
  PROJECTS ||--o{ TIME_ENTRIES : "logs against"
  PROJECTS ||--o{ INVOICES : "generates"
```
</flex_block>

## Security Rules
- **Row-Level Security**: Access to specific user profiles is restricted. A user can only read and update their own `users` document where `clerkUserId` matches their authenticated Clerk ID.
- **Role-Based Access**: Users with the `admin` role have full read/write access to all `users` documents, enabling administrative oversight and management.
- **Subscription Checks**: Middleware will utilize `subscriptionStatus` and `subscriptionPlan` fields on the `users` document to determine feature access and enforce plan limitations.

## Sample Data

### Admin User
```json
{
  "clerkUserId": "user_2PjM3N8K1Q5S7L9D",
  "email": "admin@example.com",
  "name": "Admin User",
  "imageUrl": "https://img.clerk.com/avatar/user_2PjM3N8K1Q5S7L9D",
  "role": "admin",
  "stripeCustomerId": null,
  "stripeSubscriptionId": null,
  "subscriptionStatus": null,
  "subscriptionPlan": null,
  "createdAt": 1678886400000
}
```

### Freelancer (Pro Plan)
```json
{
  "clerkUserId": "user_2S7L9D1PjM3N8K1Q",
  "email": "freelancer@example.com",
  "name": "Jane Doe",
  "imageUrl": "https://img.clerk.com/avatar/user_2S7L9D1PjM3N8K1Q",
  "role": "freelancer",
  "stripeCustomerId": "cus_NzS0c5L7lQ9t2R4y",
  "stripeSubscriptionId": "sub_OiP0d8K6jM4g2F1e",
  "subscriptionStatus": "active",
  "subscriptionPlan": "pro",
  "createdAt": 1678886400000
}
```

### Freelancer (Free Plan)
```json
{
  "clerkUserId": "user_3N8K1Q5S7L9D1PjM",
  "email": "freeuser@example.com",
  "name": "John Smith",
  "imageUrl": "https://img.clerk.com/avatar/user_3N8K1Q5S7L9D1PjM",
  "role": "freelancer",
  "stripeCustomerId": null,
  "stripeSubscriptionId": null,
  "subscriptionStatus": "active",
  "subscriptionPlan": "free",
  "createdAt": 1678886400000
}
```

### Client Portal User
```json
{
  "clerkUserId": "user_4K1Q5S7L9D1PjM3N",
  "email": "client@example.com",
  "name": "Client Contact",
  "imageUrl": "https://img.clerk.com/avatar/user_4K1Q5S7L9D1PjM3N",
  "role": "client-portal-user",
  "stripeCustomerId": null,
  "stripeSubscriptionId": null,
  "subscriptionStatus": null,
  "subscriptionPlan": null,
  "createdAt": 1678886400000
}
```