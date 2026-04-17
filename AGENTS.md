# AGENTS.md

> Project context and guidelines for AI coding agents working on this TanStack Start application.

## Project Overview

This is a **blank TanStack Start application** with minimal scaffolding. It demonstrates the core TanStack libraries without additional feature integrations.

### TanStack CLI Command Used

```bash
bunx @tanstack/cli@latest create . --agent
```

### TanStack Intent Commands

```bash
bunx @tanstack/intent@latest install
bunx @tanstack/intent@latest list
```

## Tech Stack

| Library | Purpose | Package |
|---------|---------|---------|
| **TanStack Start** | Full-stack React framework | `@tanstack/react-start` |
| **TanStack Router** | Type-safe file-based routing | `@tanstack/react-router` |
| **TanStack Query** | Server state management | `@tanstack/react-query` |
| **TanStack Intent** | AI skill management | `@tanstack/intent` |
| **TanStack CLI** | Project scaffolding & tooling | `@tanstack/cli` |
| **React** | UI library | `react`, `react-dom` |
| **Tailwind CSS** | Styling | `tailwindcss`, `@tailwindcss/vite` |
| **TypeScript** | Type safety | `typescript` |
| **Vite** | Build tool | `vite` |
| **ESLint** | Linting | `eslint`, `typescript-eslint` |
| **Bun** | Package manager | `bun` |

## Project Structure

```
├── src/
│   ├── routes/              # TanStack Router file-based routes
│   │   ├── __root.tsx       # Root layout (shell)
│   │   ├── index.tsx        # Home page
│   │   └── about.tsx        # About page
│   ├── components/          # Reusable React components
│   │   ├── Header.tsx       # Site header with navigation
│   │   ├── Footer.tsx       # Site footer
│   │   └── ThemeToggle.tsx  # Light/dark/auto theme switcher
│   ├── router.tsx           # Router configuration
│   ├── styles.css           # Global styles + Tailwind
│   └── routeTree.gen.ts     # Auto-generated route tree (do not edit)
├── public/                  # Static assets
├── vite.config.ts           # Vite + TanStack Start plugin config
├── tsconfig.json            # TypeScript configuration
├── eslint.config.js         # ESLint configuration
├── .coderabbit.yaml         # CodeRabbit AI code review config
└── AGENTS.md                # This file
```

## Partner Integrations

### CodeRabbit (Code Review)

CodeRabbit is configured as external repository tooling via the GitHub App.

**Setup:**
1. Install the CodeRabbit GitHub App: https://github.com/apps/coderabbitai
2. Select this repository in the GitHub App settings
3. CodeRabbit will automatically review pull requests

**Configuration:** `.coderabbit.yaml`
- Reviews TypeScript/React components with TanStack-specific patterns
- Monitors `src/routes/` for routing best practices
- Monitors `src/server/` for server function patterns
- ESLint integration enabled

**Note:** CodeRabbit is NOT an in-app SDK integration. It operates via GitHub App for pull request reviews.

## Available Scripts

```bash
# Development server
bun --bun run dev

# Production build
bun --bun run build

# Preview production build
bun --bun run preview

# Run tests
bun --bun run test

# Linting
bunx eslint .
```

## Environment Variables

No environment variables required for the blank starter. When adding features:

- **Client-side:** Use `import.meta.env.VITE_*` prefix
- **Server-side:** Use standard `process.env.*` (not prefixed)

## TanStack Intent Skill Mappings

When working on specific areas, load the corresponding skill:

<!-- intent-skills:start -->
# Skill mappings - when working in these areas, load the linked skill file into context.
skills:
  - task: "TanStack Start framework setup, server functions, API routes"
    load: "node_modules/@tanstack/react-start/skills/react-start/SKILL.md"
  - task: "React Server Components in TanStack Start"
    load: "node_modules/@tanstack/react-start/skills/react-start/server-components/SKILL.md"
  - task: "TanStack Router core concepts, route trees, file-based routing"
    load: "node_modules/@tanstack/router-core/skills/router-core/SKILL.md"
  - task: "Route authentication, guards, and protected routes"
    load: "node_modules/@tanstack/router-core/skills/router-core/auth-and-guards/SKILL.md"
  - task: "Code splitting and lazy loading routes"
    load: "node_modules/@tanstack/router-core/skills/router-core/code-splitting/SKILL.md"
  - task: "Data loading with loaders and caching"
    load: "node_modules/@tanstack/router-core/skills/router-core/data-loading/SKILL.md"
  - task: "Navigation, Links, and routing hooks"
    load: "node_modules/@tanstack/router-core/skills/router-core/navigation/SKILL.md"
  - task: "Error boundaries and not found handling"
    load: "node_modules/@tanstack/router-core/skills/router-core/not-found-and-errors/SKILL.md"
  - task: "SSR and streaming rendering"
    load: "node_modules/@tanstack/router-core/skills/router-core/ssr/SKILL.md"
  - task: "Type safety patterns in TanStack Router"
    load: "node_modules/@tanstack/router-core/skills/router-core/type-safety/SKILL.md"
  - task: "TanStack Router plugin configuration"
    load: "node_modules/@tanstack/router-plugin/skills/router-plugin/SKILL.md"
  - task: "TanStack Start core setup and configuration"
    load: "node_modules/@tanstack/start-client-core/skills/start-core/SKILL.md"
  - task: "Deployment configuration (Cloudflare, Vercel, Netlify, etc.)"
    load: "node_modules/@tanstack/start-client-core/skills/start-core/deployment/SKILL.md"
  - task: "Server/client environment boundaries and isomorphic functions"
    load: "node_modules/@tanstack/start-client-core/skills/start-core/execution-model/SKILL.md"
  - task: "Middleware patterns"
    load: "node_modules/@tanstack/start-client-core/skills/start-core/middleware/SKILL.md"
  - task: "Server function implementation"
    load: "node_modules/@tanstack/start-client-core/skills/start-core/server-functions/SKILL.md"
  - task: "Server-side API routes"
    load: "node_modules/@tanstack/start-client-core/skills/start-core/server-routes/SKILL.md"
  - task: "TanStack Devtools setup and configuration"
    load: "node_modules/@tanstack/devtools/skills/devtools-app-setup/SKILL.md"
  - task: "Vite devtools plugin configuration"
    load: "node_modules/@tanstack/devtools-vite/skills/devtools-vite-plugin/SKILL.md"
<!-- intent-skills:end -->

## Key Architectural Decisions

1. **File-Based Routing:** All routes in `src/routes/` are automatically registered
2. **Root Layout:** `src/routes/__root.tsx` defines the HTML shell
3. **Theme System:** CSS custom properties with light/dark/auto modes
4. **No Demo Files:** Clean starter without example/demo routes

## Known Gotchas

- Routes are auto-generated via the TanStack Router plugin - don't manually import route files
- Server functions must be defined with `createServerFn` from `@tanstack/react-start`
- Use `?url` suffix when importing CSS in the root route for proper SSR handling
- The `routeTree.gen.ts` file is auto-generated - do not edit directly

## Next Steps

To extend this starter:

1. **Add more routes:** Create files in `src/routes/` (e.g., `src/routes/dashboard.tsx`)
2. **Add TanStack Query:** Wrap your app with `QueryClientProvider`
3. **Add server functions:** Create `.server.ts` files or use `createServerFn`
4. **Add authentication:** Use `beforeLoad` in routes for auth guards
5. **Deploy:** Configure deployment via TanStack Start's deployment skill

## Resources

- [TanStack Start Docs](https://tanstack.com/start/latest/docs/framework/react/overview)
- [TanStack Router Docs](https://tanstack.com/router/latest/docs/framework/react/overview)
- [TanStack Query Docs](https://tanstack.com/query/latest/docs/framework/react/overview)
- [TanStack Intent Skills](https://tanstack.com/intent)
