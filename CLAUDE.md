# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server (http://localhost:5173)
npm run build    # type-check + production build
npm run preview  # preview production build
```

## Architecture

React 18 + Vite + TypeScript SPA with no backend. State is persisted to `localStorage`.

```
src/
  types.ts              # Todo interface, Filter type
  hooks/useTodos.ts     # all todo state + localStorage sync
  components/
    TodoInput.tsx       # controlled input, Enter or button to add
    TodoItem.tsx        # checkbox toggle + delete button
    TodoFilter.tsx      # all/active/completed filter + clear completed
  App.tsx               # composes the above, owns filter state
  App.css / index.css   # plain CSS, no CSS modules
```

`useTodos` is the single source of truth — `App` only owns the `filter` value. Adding features should extend the hook first, then surface them through components.
