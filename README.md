# Rick and Morty Explorer 🛸

A modern, responsive React application that lets users explore characters from the [Rick and Morty API](https://rickandmortyapi.com/). Built with TanStack Router, React Query, TypeScript, and Material UI.

---

## ✨ Features

- 🔍 Browse Rick and Morty characters with pagination
- 📄 View detailed character profiles
- ⚡ API state management with React Query
- 🧭 Routing with TanStack Router
- 🎨 Responsive UI with Material UI (MUI)
- 🧪 Modular, scalable folder structure
- 🧼 Linting and formatting via ESLint and Prettier
- 🔐 Environment variable management

---

## 🚀 Tech Stack

| Name              | Description                   |
| ----------------- | ----------------------------- |
| React             | UI library                    |
| TypeScript        | Static typing                 |
| TanStack Router   | Client-side routing           |
| React Query       | Server state management       |
| Material UI (MUI) | UI components & design system |
| ESLint + Prettier | Code linting and formatting   |
| Vite              | Lightning-fast build tool     |

---

## 📁 Folder Structure

<pre lang="markdown"> src/
├── components/
│ ├── characterList/
│ │ ├── CharacterList.tsx
│ │ ├── CharacterTable.tsx
│ │ ├── PaginationControls.tsx
│ │ └── RefreshButton.tsx
│ └── characterDetail/
│ ├── CharacterDetailCard.tsx
│ └── BackButton.tsx
├── features/
│ └── characters/
│ ├── api.ts
│ ├── types.ts
│ └── hooks.ts
├── pages/
│ ├── CharacterListPage.tsx
│ └── CharacterDetailPage.tsx
├── routes/
│ ├── router.ts
│ └── routesConfig.ts
├── config/
│ └── index.ts
├── App.tsx
└── main.tsx </pre>

---

---

## 📦 Installation

````bash
# Clone the repository
git clone https://github.com/your-username/rick-and-morty-explorer.git
cd rick-and-morty-explorer

# Install dependencies
npm install

## 🔐 Environment Variables

Create a `.env` file in the root of the project using the `.env.example` as a template:



## 🧪 Scripts

```bash
npm run dev       # Starts development server
npm run build     # Builds for production
npm run preview   # Serves the production build locally
npm run lint      # Lints the project with ESLint
npm run format    # Formats code using Prettier

👨‍💻 Author
Akash Dafane
````
