/**
 * mock-data.js — Flo Demo Mock Data
 * ───────────────────────────────────
 * Generated from Flo database specs.
 * Matches schema in database/001-clients.md through 005-invoices.md
 */

window.MOCK_DATA = {

  clients: [
    { id: "cli_001", name: "Acme Corp",    contact: "Mark Holt",   email: "mark@acmecorp.com",      company: "Acme Corp",    rate: 120, currency: "USD", status: "active",   totalBilled: 12400, outstanding: 0,    tags: ["design", "strategy"] },
    { id: "cli_002", name: "Nova Labs",    contact: "Sarah Kim",   email: "sarah@novalabs.io",      company: "Nova Labs",    rate: 120, currency: "USD", status: "active",   totalBilled: 5200,  outstanding: 1800, tags: ["development"] },
    { id: "cli_003", name: "Bright Ideas", contact: "Tom Okafor",  email: "tom@brightideas.co",     company: "Bright Ideas", rate: 95,  currency: "USD", status: "active",   totalBilled: 3800,  outstanding: 1200, tags: ["content"] },
    { id: "cli_004", name: "Kira & Co",    contact: "Kira Patel",  email: "kira@kiraandco.com",     company: "Kira & Co",    rate: 80,  currency: "USD", status: "active",   totalBilled: 950,   outstanding: 150,  tags: ["design"] },
    { id: "cli_005", name: "Pixel Garden", contact: "Dev Singh",   email: "hello@pixelgarden.design",company: "Pixel Garden", rate: 100, currency: "USD", status: "inactive", totalBilled: 2100,  outstanding: 0,    tags: [] },
    { id: "cli_006", name: "Wave Studio",  contact: "Lena Moore",  email: "ops@wavestudio.io",      company: "Wave Studio",  rate: 90,  currency: "USD", status: "inactive", totalBilled: 800,   outstanding: 0,    tags: [] },
    { id: "cli_007", name: "Flux Digital", contact: "James Wright",email: "james@fluxdigital.com",  company: "Flux Digital", rate: 110, currency: "USD", status: "active",   totalBilled: 4200,  outstanding: 0,    tags: ["development", "strategy"] },
    { id: "cli_008", name: "The Hive",     contact: "Priya Nair",  email: "ceo@thehive.team",       company: "The Hive",     rate: 115, currency: "USD", status: "active",   totalBilled: 6750,  outstanding: 0,    tags: ["design", "development"] },
  ],

  projects: [
    { id: "prj_001", clientId: "cli_001", name: "Brand Refresh",        status: "active",   budget: 6000,  rateType: "hourly",  hoursLogged: 24, dueDate: "2026-04-15", progress: 65 },
    { id: "prj_002", clientId: "cli_002", name: "Web App MVP",           status: "active",   budget: 8000,  rateType: "fixed",   hoursLogged: 38, dueDate: "2026-05-01", progress: 40 },
    { id: "prj_003", clientId: "cli_003", name: "Content Strategy",      status: "active",   budget: 2400,  rateType: "hourly",  hoursLogged: 12, dueDate: "2026-03-28", progress: 90 },
    { id: "prj_004", clientId: "cli_004", name: "Logo Design",           status: "active",   budget: 800,   rateType: "fixed",   hoursLogged: 6,  dueDate: "2026-04-05", progress: 20 },
    { id: "prj_005", clientId: "cli_007", name: "E-commerce Redesign",   status: "active",   budget: 5500,  rateType: "hourly",  hoursLogged: 31, dueDate: "2026-04-20", progress: 55 },
    { id: "prj_006", clientId: "cli_001", name: "Social Media Templates", status: "completed",budget: 1200,  rateType: "fixed",   hoursLogged: 10, dueDate: "2026-02-01", progress: 100 },
  ],

  tasks: [
    { id: "tsk_001", projectId: "prj_002", title: "User auth (Clerk integration)",       status: "in_progress", estimatedHours: 8 },
    { id: "tsk_002", projectId: "prj_002", title: "Dashboard layout + routing",          status: "in_progress", estimatedHours: 6 },
    { id: "tsk_003", projectId: "prj_002", title: "API endpoints — CRUD for core entity",status: "in_progress", estimatedHours: 5 },
    { id: "tsk_004", projectId: "prj_002", title: "Settings page",                       status: "todo",        estimatedHours: 4 },
    { id: "tsk_005", projectId: "prj_002", title: "Email templates + Resend",            status: "todo",        estimatedHours: 3 },
    { id: "tsk_006", projectId: "prj_002", title: "Mobile responsive pass",              status: "todo",        estimatedHours: 4 },
    { id: "tsk_007", projectId: "prj_002", title: "Project setup — Nuxt 4, Convex",      status: "done",        estimatedHours: 3 },
    { id: "tsk_008", projectId: "prj_002", title: "Design system — tokens + components", status: "done",        estimatedHours: 5 },
    { id: "tsk_009", projectId: "prj_002", title: "Database schema v1",                  status: "done",        estimatedHours: 2 },
    { id: "tsk_010", projectId: "prj_002", title: "Landing page",                        status: "done",        estimatedHours: 6 },
    { id: "tsk_011", projectId: "prj_002", title: "Kick-off call + requirements doc",    status: "done",        estimatedHours: 1 },
  ],

  timeLogs: [
    { id: "tl_001", projectId: "prj_002", description: "Auth integration — Clerk setup",      hours: 2.5, date: "2026-03-03", billable: true },
    { id: "tl_002", projectId: "prj_002", description: "Dashboard layout — sidebar + grid",   hours: 3.0, date: "2026-03-02", billable: true },
    { id: "tl_003", projectId: "prj_002", description: "Database schema — tables + indexes",  hours: 1.5, date: "2026-02-28", billable: true },
    { id: "tl_004", projectId: "prj_002", description: "Client call — requirements review",   hours: 1.0, date: "2026-02-27", billable: true },
    { id: "tl_005", projectId: "prj_001", description: "Brand identity exploration",          hours: 3.0, date: "2026-03-01", billable: true },
    { id: "tl_006", projectId: "prj_003", description: "Content audit + gap analysis",        hours: 2.0, date: "2026-03-02", billable: true },
  ],

  invoices: [
    { id: "inv_021", clientId: "cli_001", projectId: "prj_001", number: "INV-021", amount: 2400, status: "paid",    sentAt: "2026-02-10", dueAt: "2026-02-24", paidAt: "2026-02-22" },
    { id: "inv_022", clientId: "cli_007", projectId: "prj_005", number: "INV-022", amount: 3600, status: "paid",    sentAt: "2026-02-15", dueAt: "2026-03-01", paidAt: "2026-02-28" },
    { id: "inv_023", clientId: "cli_004", projectId: "prj_004", number: "INV-023", amount: 150,  status: "overdue", sentAt: "2026-02-01", dueAt: "2026-02-15", paidAt: null },
    { id: "inv_024", clientId: "cli_001", projectId: "prj_001", number: "INV-024", amount: 2400, status: "paid",    sentAt: "2026-02-20", dueAt: "2026-03-06", paidAt: "2026-03-03" },
    { id: "inv_025", clientId: "cli_002", projectId: "prj_002", number: "INV-025", amount: 1800, status: "sent",    sentAt: "2026-03-01", dueAt: "2026-03-15", paidAt: null },
    { id: "inv_026", clientId: "cli_003", projectId: "prj_003", number: "INV-026", amount: 1200, status: "overdue", sentAt: "2026-02-14", dueAt: "2026-02-28", paidAt: null },
  ],

  // ── Dashboard summary (pre-computed for convenience) ─────────────────
  dashboard: {
    revenueThisMonth: 8420,
    revenueLastMonth: 7520,
    outstanding: 3150,
    overdueCount: 2,
    activeProjects: 5,
    hoursThisWeek: 84,
    hoursLastWeek: 78,
  },

  // ── Current user ─────────────────────────────────────────────────────
  currentUser: {
    id: "usr_001",
    name: "Jamie Cole",
    email: "jamie@freelance.io",
    plan: "pro",
    currency: "USD",
    timezone: "America/New_York",
  },

  _meta: {
    generated: "2026-01-01",
    project: "flo-demo",
    version: "1"
  }

}
