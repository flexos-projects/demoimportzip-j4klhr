---
id: feature.003-task-tracking
seq: 11
type: spec
subtype: feature
slug: 003-task-tracking
title: Task Tracking
description: Tasks within projects — status board, due dates, quick time log from task
status: active
tags: [core]
created: 2026-01-01
last_modified: 2026-01-01
relatesTo: [feature.002-project-management, feature.004-time-tracking, database.003-tasks]
---

# Task Tracking

Tasks are the atomic unit of work within a project. Simple kanban-style status, no subtasks v1.

## What it does

- Create tasks within a project — title, description, due date, estimated hours
- Four statuses: To Do → In Progress → Review → Done
- Drag to reorder within a status column (manual priority)
- Log time directly from a task (opens time log form pre-filled with task)
- See hours logged vs estimated per task

## Design decisions

- **No subtasks v1.** Complexity creep. If a task is too big, break it into multiple tasks.
- **No assignees v1.** Flo is solo/micro-team. Assignees are roadmap when team billing lands.
- **Estimated hours is a guide, not a cap.** Shows remaining/overrun for awareness, doesn't block logging.

## Acceptance criteria

- [ ] Create task with title, optional description, due date, estimated hours
- [ ] Drag tasks between status columns
- [ ] Drag to reorder within a column
- [ ] "Log time" button on task card pre-fills time entry
- [ ] Hours logged badge on task card (e.g. "2.5h / 4h est")
- [ ] Overdue tasks shown with red due date
