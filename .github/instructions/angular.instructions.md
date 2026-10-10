---
description: "Use when changing Angular components, templates, styles, routing, or specs in this workspace. Follow the project's standalone-component and file-organization patterns."
applyTo:
  - "src/app/**/*.ts"
  - "src/app/**/*.html"
  - "src/app/**/*.css"
---
# Angular Workspace Conventions

- Keep Angular features standalone; declare template dependencies in the component's `imports` rather than introducing NgModules.
- Keep component TypeScript, HTML templates, and CSS in separate files, following the existing `<name>.ts`, `<name>.html`, and `<name>.css` naming pattern. Use the singular `styleUrl` metadata property used by this project.
- Use the `app` selector prefix for application components, and group page components under `src/app/pages/<page-name>/`.
- Define route entries in `src/app/app.routes.ts` and register them through `provideRouter` in `src/app/app.config.ts`.
- Write component tests with Angular `TestBed`, importing the standalone component under test. Add or update tests for behavior changed by the implementation.
- Keep component-specific presentation in its component stylesheet; reserve `src/styles.css` for global styles.
