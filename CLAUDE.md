# FlyRank AI Frontend Engineer Capstone

## Tech Stack
- Frontend: React / Next.js
- Styling: Tailwind CSS
- Tooling: Node.js, npm/yarn
- Version Control: Git

## Coding Conventions
- **Formatting**: Use Prettier with default settings.
- **Linting**: ESLint with recommended Next.js and React rules.
- **Commits**: Use Conventional Commits 1.0.0 (e.g., `feat:`, `fix:`, `docs:`, `chore:`).
- **Components**: Functional components with hooks. Use descriptive names.

## AI Assistant Guidelines
- Prioritize clean, readable, and maintainable code.
- Follow mobile-first design principles.
- Use accessible HTML tags and ARIA attributes where needed.
- Write tests for core utilities and complex components.

### Rules Extracted From Workflow Drills
- Forms use `react-hook-form` + `zod`, never uncontrolled inputs or manual state-based validation.
- All UI inputs must include ARIA attributes (e.g. `aria-invalid`, `aria-describedby`) correctly mapped to labels and error messages.
- Every new feature component must be accompanied by a React Testing Library test file verifying success states and validation edge cases.
