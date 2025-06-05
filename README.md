# LuaCourse Nx Workspace

This repository contains a small Nx monorepo with a frontend, backend and shared library.

The backend serves lesson data for a Roblox Lua programming course and also hosts the static frontend. The workspace uses the official Nx wrapper so you always get the right version of Nx and required plugins.

### Useful Commands

After installing dependencies with `npm install` you can use Nx directly:

* `npx nx build backend` - build the backend API
* `npx nx serve backend` - run the backend with automatic rebuilds
* `npx nx build frontend` - copy frontend files
* `npx nx build shared` - compile the shared library

