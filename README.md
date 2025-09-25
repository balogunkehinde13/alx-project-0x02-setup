# Next.js Demo Project

This is a simple Next.js project that demonstrates how to create pages, reusable components, and fetch data from an API using **getStaticProps**.

## 🚀 Features

- **Header Navigation** – Links to Home, About, Posts, and Users pages
- **Reusable Components**:
  - `Card` – Displays title and content
  - `PostCard` – Displays posts fetched from JSONPlaceholder
  - `UserCard` – Displays user details like name, email, and address
  - `Button` – Supports multiple sizes and shapes
  - `PostModal` – Allows creating and displaying posts dynamically
- **Static Site Generation (SSG)** with `getStaticProps` for better performance and SEO
- **Tailwind CSS** for fast, modern styling

## 📂 Project Structure

```bash
.
├── components
│   └── common
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── PostCard.tsx
│       ├── PostModal.tsx
│       └── UserCard.tsx
├── interfaces
│   └── index.ts
├── pages
│   ├── about.tsx
│   ├── home.tsx
│   ├── posts.tsx
│   ├── users.tsx
│   └── _app.tsx
└── README.md

🛠️ Tech Stack

Next.js – React framework for server-side rendering & static generation

React – UI library

TypeScript – Static type checking

Tailwind CSS – Utility-first CSS framework

JSONPlaceholder API – Free fake REST API for prototyping

⚡ Getting Started

Clone the repository:

git clone https://github.com/your-username/your-repo.git
cd your-repo


Install dependencies:

npm install


Run the development server:

npm run dev


Open http://localhost:3000
 with your browser to see the result.

Build for production:

npm run build
npm start

🧪 API Data

Posts: https://jsonplaceholder.typicode.com/posts

Users: https://jsonplaceholder.typicode.com/users