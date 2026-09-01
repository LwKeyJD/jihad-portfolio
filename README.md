# Jihad's Edit Bay — Next.js + Supabase

This is Phase 3 of the build: a real Next.js site connected to your Supabase database,
with working sign-in and a working upload form.

## What's wired up

- Every page (`/`, `/reels`, `/videos`, `/motion`, `/about`, `/contact`) is a real route
- Reels / Videos / Motion Graphics pull their clips live from your Supabase `clips` table
- `/login` signs in against the one account you created in Supabase
- `/upload` is protected — it checks for a real session and redirects to `/login` if you're
  not signed in — and inserts new rows into `clips`
- The nav bar automatically shows "Sign in" or "Upload" depending on whether you're logged in

## 1. Run it locally

You'll need [Node.js](https://nodejs.org) installed (v18 or later).

```bash
cd jihad-portfolio
npm install
cp .env.local.example .env.local
```

Open `.env.local` and paste in your two values from Supabase → **Project Settings → API**:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-public-key
```

Then start it:

```bash
npm run dev
```

Open **http://localhost:3000** — you should see the live site. Go to `/login`, sign in with
the account you made in Supabase, then `/upload` to add your first real clip.

## 2. Put your real content in

- `app/about/page.js` — swap in your real photo (see the comment inside the file) and edit the bio text
- `app/contact/page.js` — replace the placeholder email/instagram
- Everything in Reels / Videos / Motion Graphics comes from the database now — add clips through `/upload`, not by editing code

## 3. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
```

Create a new empty repository on github.com, then:

```bash
git remote add origin https://github.com/YOUR_USERNAME/jihad-portfolio.git
git branch -M main
git push -u origin main
```

`.env.local` is in `.gitignore`, so your Supabase keys won't be committed — you'll add them
separately in Vercel in the next step.

## 4. Deploy on Vercel

1. Go to vercel.com, sign in with GitHub
2. **Add New Project** → select this repository → **Import**
3. Before clicking Deploy, open **Environment Variables** and add the same two values from
   your `.env.local`
4. Click **Deploy**

You'll get a live URL like `jihad-portfolio.vercel.app` within a minute. Every future
`git push` automatically redeploys.

## 5. Add your domain

Once deployed: Vercel project → **Settings → Domains** → add your domain → follow the DNS
instructions it gives you at your registrar.

## Day-to-day workflow after this is live

1. Finish an edit, upload it to YouTube as **Unlisted** (or Vimeo)
2. Copy the link
3. Go to your site → Sign in → fill out the upload form → Save
4. It's live immediately — no redeploy needed
