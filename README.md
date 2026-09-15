# Needle Drop — Frontend

The React frontend for **Needle Drop**, a personal music collection catalog. It lets you browse the albums I own and search and filter them by genre and format.

Backend API repo: [album-app](https://github.com/theKHutDeveloper/album-app)

## Screenshot

<!-- Screenshot to be added once the app is complete -->

_Coming soon._

## Tech stack

- **React** — UI
- **Vite** — build tool and dev server
- Plain CSS with light/dark theming via CSS custom properties

## Getting started

### Prerequisites

- Node.js (LTS — v20.19+ or v22+)
- The [backend API](https://github.com/theKHutDeveloper/album-app) running locally (defaults to `http://localhost:8000`)

### Installation

```bash
git clone git@github.com:theKHutDeveloper/album-app-frontend.git
cd album-app-frontend
npm install
```

### Run the dev server

```bash
npm run dev
```

The app runs at the URL `http://localhost:5173`. Make sure the backend API is running first, or album data won't load.

### Build for production

```bash
npm run build
```

The production build is output to `dist/`.

## Features

- Browse the full album collection
- Search by album title or artist
- Filter by genre
- Filter by format (physical / streaming)
- Light and dark themes

## Notes

<!-- Design decisions and things learned — a few short bullets, e.g.: -->
<!-- - Data fetched with useEffect for now; TanStack Query planned as a future upgrade for caching and refetching. -->
<!-- - Theming built entirely on CSS custom properties so colours stay consistent across light and dark modes. -->

## License

[MIT](LICENSE)
