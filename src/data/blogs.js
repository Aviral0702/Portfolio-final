/**
 * Add a new blog post by copying the template below into this array.
 * Posts are shown newest-first on /blog.
 *
 * Template:
 * {
 *   slug: "my-post-slug",
 *   title: "Post Title",
 *   excerpt: "One-line summary for the blog listing card.",
 *   date: "2026-08-25",
 *   readTime: "5 min read",
 *   tags: ["Go", "Backend"],
 *   content: `
 * ## Heading
 *
 * Your markdown content here.
 * `,
 * },
 */

export const blogPosts = [
  {
    slug: "building-rfi-workflow-orchestrator",
    title: "Building an RFI Workflow Orchestrator from 0 to 1",
    excerpt:
      "How I solo-designed and shipped a backend-driven workflow engine that powers both web and mobile — and what I learned integrating it with a Core Banking System.",
    date: "2026-08-20",
    readTime: "6 min read",
    tags: ["Go", "Fintech", "Workflow"],
    content: `
## Why we needed it

At Aspora, **Request for Information (RFI)** flows needed to work identically on web and mobile. Hard-coding screens in each client would have meant double the work and endless sync issues.

The fix: a **backend-driven workflow orchestrator** — the server decides which step comes next, and clients just render what they're told.

## Architecture

- **Go services** own the workflow state machine
- Each step maps to a screen schema the frontend renders dynamically
- State transitions are validated server-side — clients can't skip steps
- Event hooks fire on step completion for audit and notifications

## What I'd do differently

Start with the **happy path only**, ship it, then add branching. I spent too long upfront on edge cases that never showed up in production.

## Results

- Live for **500+ users** across web and mobile
- Mentored another engineer to extend the system after the core was stable
- Manual ops work dropped because screens updated without app store releases

---

*More posts on backend systems, fintech, and shipping in production coming soon.*
`,
  },
  {
    slug: "postgres-query-cost-optimization",
    title: "Why I Built QueryWise — Postgres Cost Optimization Without Sending SQL to the Cloud",
    excerpt:
      "Existing tools forced a tradeoff between query visibility and privacy. QueryWise reads pg_stat_statements locally, fingerprints queries, and never stores raw SQL.",
    date: "2026-08-10",
    readTime: "4 min read",
    tags: ["Go", "PostgreSQL", "Open Source"],
    content: `
## The problem

Running Postgres in production, you know *something* is expensive — but which queries? Most tools either:

1. Need superuser access and send full query text to a third party, or
2. Give you aggregates with no actionable ranking

Neither felt right for teams that care about **privacy** and **least privilege**.

## What QueryWise does

QueryWise is a **single-binary Go CLI** that:

- Reads \`pg_stat_statements\` locally
- Ranks query patterns by a weighted cost heuristic (time, I/O, call frequency)
- **Fingerprints** query text via SHA-256/HMAC and discards the raw SQL immediately
- Optionally asks Claude for tuning tips using only fingerprints and numeric metrics

## Design choices

- **No superuser** — only \`pg_read_all_stats\` grant required
- **TLS by default** for database connections
- Reports export to terminal, Markdown, or JSON for CI

## Try it

Open-sourced on GitHub: [QueryWiseProd](https://github.com/Aviral0702/QueryWiseProd)

---

*Built on my own time because the privacy vs. visibility tradeoff didn't need to exist.*
`,
  },
];

export const getBlogBySlug = (slug) => blogPosts.find((post) => post.slug === slug);

export const getSortedPosts = () =>
  [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
