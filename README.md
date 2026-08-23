# CarryCome Website

This is the official website for CarryCome, a mobile application that [please insert a brief, one-sentence description of the CarryCome app here]. This project is built with Next.js and provides information about the app, its features, and how to download it.

## Technologies Used

*   [Next.js](https://nextjs.org/) - A React framework for building server-side rendered and static websites.
*   [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript that compiles to plain JavaScript.
*   [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js (v18 or later)
*   npm, yarn, pnpm, or bun

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/your_username_/CarryCome-Website.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```
3.  Run the development server
    ```sh
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

**Pushing to `main` deploys to production.** That is the whole mechanism: Vercel's
GitHub integration builds and promotes every push, and it is configured in the
Vercel dashboard rather than anywhere in this repo — which is why nothing here
appeared to deploy anything.

There is no deploy script and no CI workflow, deliberately. Both used to exist and
neither worked:

*   `workflows/deploy.yml` ran `npx vercel --prod` on push, but it sat in
    `workflows/` rather than `.github/workflows/`, so GitHub Actions never picked
    it up. Moving it into place would have been worse than deleting it: it would
    have raced Vercel's own integration on every push, promoting a second build of
    the same commit, and it needed a `VERCEL_TOKEN` secret — so if that secret
    were missing it would turn a silent no-op into a failed check on every commit.
*   `npm run deploy` called `bun run deploy.mjs`. There is no `deploy.mjs` and no
    bun lockfile in this project, so it had two reasons to fail.

To deploy, push. To check a deploy, look at the Vercel dashboard — the live site
gives no version marker, so there is nothing to probe from outside.

## Folder Structure

The project structure is organized as follows:

```
.
├── public/
│   ├── assets/
│   └── ...
├── src/
│   ├── app/
│   │   ├── blog/
│   │   └── ...
│   ├── components/
│   │   ├── download-app-section/
│   │   ├── features-01/
│   │   └── ...
│   ├── lib/
│   └── ...
└── ...
```

-   `public/`: Contains static assets such as images, fonts, and other files.
-   `src/app/`: The main application directory for a Next.js project, containing pages and layouts.
-   `src/components/`: Contains reusable UI components used throughout the application.
-   `src/lib/`: Contains utility functions and other shared code.


This is a proprietory software, &copy; CarryCome Inc. All rights reserved