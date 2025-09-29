# 📇 Next.js CRUD Contacts with Pagination

A modern **CRUD Contacts Application** built with **Next.js 15**, **TypeScript**, **Prisma**, and **PostgreSQL**.
This project implements **search, pagination, and CRUD operations** with a clean UI powered by **TailwindCSS**.

---

## 🚀 Features

* 🔍 **Search & Filter** – Find contacts easily by name or phone.
* 📄 **Pagination** – Smooth navigation across multiple pages.
* ✏️ **CRUD Operations** – Create, Read, Update, Delete contacts.
* 🎨 **Responsive UI** – Styled with TailwindCSS for modern design.
* ⚡ **Optimized Data Fetching** – Using SWR & React Server Components.
* ✅ **Validation** – Form validation powered by Zod.

---

## 🛠️ Tech Stack

* [Next.js 15](https://nextjs.org/) – React framework
* [TypeScript](https://www.typescriptlang.org/) – Type safety
* [Prisma](https://www.prisma.io/) – Database ORM
* [PostgreSQL](https://www.postgresql.org/) – Relational database
* [TailwindCSS](https://tailwindcss.com/) – Utility-first CSS framework
* [React Icons](https://react-icons.github.io/react-icons/) – Beautiful icons
* [SWR](https://swr.vercel.app/) – Data fetching & caching
* [Zod](https://zod.dev/) – Schema validation

---

## 📂 Project Structure

```
app/
 ├── api/contacts/       # API routes (CRUD)
 │    ├── [id]/route.ts  # GET, PATCH, DELETE contact by ID
 │    └── route.ts       # GET all, POST new contact
 ├── contacts/           # Pages
 │    ├── create/        # Create contact page
 │    ├── edit/[id]/     # Edit contact page
 │    └── page.tsx       # Contact list with pagination
 ├── component/          # Reusable UI components
 │    ├── ContactTable.tsx
 │    ├── CreateForm.tsx
 │    ├── EditForm.tsx
 │    ├── Pagination.tsx
 │    └── Search.tsx
 ├── library/            # Utils & helpers
 │    ├── prisma.ts      # Prisma client
 │    ├── data.ts        # Data fetchers
 │    └── actions.ts     # Server actions
 └── prisma/
      └── migrations/    # Prisma migration files
```

---

## ⚙️ Installation

1. Clone the repository

   ```bash
   git clone https://github.com/yourusername/nextjs-crud-pagination.git
   cd nextjs-crud-pagination
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Setup environment variables in `.env`

   ```env
   DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/yourdb"
   ```

4. Run Prisma migrations

   ```bash
   npx prisma migrate dev
   ```

5. Start the development server

   ```bash
   npm run dev
   ```

---

## 📦 Dependencies

```json
"dependencies": {
  "@prisma/client": "^6.16.2",
  "clsx": "^2.1.1",
  "next": "15.5.4",
  "react": "19.1.0",
  "react-dom": "19.1.0",
  "react-icons": "^5.5.0",
  "swr": "^2.3.6",
  "use-debounce": "^10.0.6",
  "zod": "^4.1.11"
},
"devDependencies": {
  "@eslint/eslintrc": "^3",
  "@tailwindcss/postcss": "^4",
  "@types/node": "^20",
  "@types/react": "^19",
  "@types/react-dom": "^19",
  "eslint": "^9",
  "eslint-config-next": "15.5.4",
  "prisma": "^6.16.2",
  "tailwindcss": "^4",
  "typescript": "^5"
}
```

---

## 🚀 Deployment

You can deploy easily on **[Vercel](https://vercel.com/)**:

1. Push your project to GitHub.
2. Import repo to Vercel.
3. Set environment variable `DATABASE_URL` in Vercel Dashboard.
4. Run migrations in production:

   ```bash
   npx prisma migrate deploy
   ```

---

## 📸 Preview

(Contact list with search & pagination)
*(insert screenshot here)*

---

## 📜 License

This project is licensed under the MIT License.
Feel free to use and modify for your own projects.

