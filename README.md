# Mixlab

Full-stack SaaS demo: pet pharmacy platform built with Next.js, Prisma, Stripe and Tailwind.

## Tech Stack

* Next.js
* Tailwind CSS
* Prisma ORM
* PostgreSQL
* Stripe (payments & subscriptions)
* Zod (validation)
* Upstash Redis (rate limiting)
* Sentry (error monitoring)

## Features

* User authentication
* Pet pharmacy product catalog
* Secure checkout with Stripe
* API validation with Zod
* Rate limiting with Upstash
* Error tracking with Sentry

## Getting Started

Clone the repository:

git clone https://github.com/nextuseryes1/mixlab.git
cd mixlab

Install dependencies:

pnpm install

Setup environment variables:

cp .env.example .env

Run the development server:

pnpm dev

Open http://localhost:3000 in your browser.
