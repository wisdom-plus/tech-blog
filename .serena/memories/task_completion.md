# Task Completion
- Run `npm run lint` after code changes.
- Run `npm run format` if formatting is needed or Biome reports style issues.
- If behavior changes affect runtime routes, also run `npm run build` when feasible to catch Next.js type/build issues.
- There is no dedicated test script in `package.json`, so lint/build are the main verification steps.