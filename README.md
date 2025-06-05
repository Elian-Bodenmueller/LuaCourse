# LuaCourse Nx Workspace

This repository contains an Nx monorepo for a Roblox Lua programming course. It consists of a React frontend, an Express backend and two shared libraries. The `shared` library provides lesson data while `ui` contains reusable React components. The repository uses the official Nx wrapper so the correct version of Nx and plugins are always used.

## Getting Started

Install dependencies with:

```bash
npm install
```

### Useful Commands

Build all projects:

```bash
./nx run-many --target=build --all
```

Run the backend API (serves the compiled frontend as well):

```bash
./nx serve backend
```

During development you can run the frontend separately:

```bash
./nx serve frontend
```

Explore the dependency graph:

```bash
./nx graph
```

## Development

To develop the course locally, run the backend which also serves the compiled
frontend:

```bash
npm run serve
```

The frontend can also be served independently during development using
`./nx serve frontend`.
