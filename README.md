# 📰 News Aggregator

Test assignment for **Junior Frontend Developer** position.

The project is a small news aggregator application that fetches articles from a public News API and extends their functionality using a CMS (Strapi).

## 📁 Project Structure

Test-news-aggregator/
├── frontend/ # React application
└── backend/ # Strapi CMS (Cloud / local)

## 🧩 Tech Stack

### Frontend

- React
- TypeScript
- TanStack Query (React Query)
- React Router
- TailwindCSS
- shadcn/ui
- Axios
- ESLint + Prettier

### Backend

- Strapi (Cloud)

---

- **Frontend**:
- **CMS (Strapi Cloud)**: https://unwavering-charity-6dbc8ad899.strapiapp.com

---

## 📌 Features

### Frontend

- News feed with a list of articles
- Article details page
- Filtering:
  - by source (from CMS)
  - by keyword (search in title)
- Sorting:
  - by publication date (newest / oldest)
- Topic detection based on keywords defined in CMS
- Dynamic configuration loading (no hardcoded sources or topics)

### CMS (Strapi)

- Manage **allowed news sources**
- Manage **topics and keywords**
- Changes in CMS affect frontend behavior **without redeploying the app**

---

## 🧠 Architecture Overview

### News API

Used as the main data source for news articles:

- title
- description
- source
- publication date
- content

### Strapi CMS (Configuration Layer)

Strapi is used **not as a content replacement**, but as a configuration and logic extension layer.

The CMS provides:

- Allowed sources list  
  → only articles from these sources are shown
- Topic definitions  
  → each topic has a name and a list of keywords

The frontend:

- fetches CMS config dynamically
- determines article topics by matching title keywords
- reacts to CMS changes in real time

---

# Installation

### Backend (optional, for local development)

cd my-news-cms
npm install
npm run dev

---

### Frontend

cd frontend
npm install
npm run dev

## 👩‍💻 Author

Natalia Stan
GitHub: https://github.com/StanNatalia

Email: stan.natasha.dev@gmail.com
