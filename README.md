# DevStack Solutions

Marketing website for a Sri Lankan agency built with Next.js App Router, TypeScript, and Tailwind CSS.

## Run locally

1. Install dependencies with `npm install`
2. Copy `.env.example` to `.env.local`
3. Update the placeholder values in `.env.local`
4. Start development with `npm run dev`
5. Open `http://localhost:3000`

## Deploy to Vercel

1. Push this project to GitHub
2. Import the repository into Vercel
3. Add the environment variables from `.env.example`
4. Deploy

## Optional form delivery

Set `CONTACT_WEBHOOK_URL` to a webhook endpoint if you want the contact form to forward leads to email, Google Sheets, Make, Zapier, or another backend.
