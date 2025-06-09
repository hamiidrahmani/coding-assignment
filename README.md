# 🎥 Movieland - React + TypeScript + Vite

A modern movie discovery application built with **React**, **TypeScript**, and **Vite**, featuring a comprehensive development setup and best practices.

---

## 🌟 Features

- 🎬 Browse trending and popular movies
- 🔍 Search movies by name
- 📋 Save movies to favorites
- ⏱️ Add movies to watch later list
- 📱 Responsive design for all devices

---

## 🛠️ Development Tools Setup

This project includes a full-featured development workflow with:

### 🎨 Code Quality & Formatting

- **Prettier** – Code formatter for consistent styling
- **ESLint** – JavaScript/TypeScript linter with Prettier integration
- **EditorConfig** – Consistent coding styles across different editors
- **TypeScript** – Static type checking

### 📚 Documentation & Testing

- **Storybook** – Component documentation and visual testing
- **Vitest** – Unit testing framework

### 🔧 Git Hooks & Commit Standards

- **Husky** – Git hooks management
- **lint-staged** – Run linters on staged files
- **Commitlint** – Enforce conventional commit messages

---

## 📦 Project Structure

```bash
src/
├── api/        # API integration and services
├── assets/     # Static assets
├── icons/      # SVG icons and icon components
├── pages/      # Page components
├── router/     # Routing configuration
├── shared/     # Shared utilities, UI components, widgets, global styles, and theme
└── test/       # Test utilities and mocks
```

---

## ⚙️ Environment Variables

The application requires the following environment variables:

- `VITE_API_KEY`: Your TMDB API key
- `VITE_API_BASE`: The base URL for the TMDB API

Create a `.env` file in the root directory with the following:

```env
VITE_API_KEY=your_tmdb_api_key_here
VITE_API_BASE=https://api.themoviedb.org/3
```

> ✅ For Docker, the environment variables will be automatically loaded from the `.env` file.

---

## 🚀 Development Setup

### 1. Start development container:

```bash
docker compose up -d dev
```

### 2. Start production container:

```bash
docker compose up -d prod
```

---

## 📚 Areas for Improvement

- [ ] **Add List Virtualization** – Implement list virtualization (e.g., with `react-window`) for movie lists to improve performance on large datasets.

---

Feel free to contribute, open issues, or customize this project for your needs!
