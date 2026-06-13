# Ubunifu Labs Website

A Next.js 16 website for Ubunifu Labs — a tech support and managed IT services company based in Kigali, Rwanda. We fix tech problems before they break your business.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Font**: Inter (via `next/font` — zero render-blocking)
- **Icons**: Lucide React + Heroicons
- **Email**: Nodemailer

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repo-url>

# Install dependencies
npm install

# Set up environment variables
# Copy .env file and update values
cp .env .env.local
```

### Environment Variables

```env
NEXT_PUBLIC_BASE_URL=https://ubunifu.techinika.co.rw
CONTACT_EMAIL=info@techinika.com
CONTACT_EMAIL_PASSWORD=your-app-password
RECIPIENT_EMAIL=info@techinika.com
```

### Development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

### Linting

```bash
npm run lint
```

## Project Structure

```
├── app/                        # Next.js App Router pages
│   ├── layout.tsx             # Root layout with metadata + Inter font
│   ├── page.tsx               # Home page
│   ├── not-found.tsx          # 404 page
│   ├── manifest.ts            # PWA manifest
│   ├── new/                   # IT support inquiry page
│   ├── (projects)/[project]/  # Dynamic project pages
│   ├── api/contact/           # Contact form API
│   └── sitemap.ts             # Dynamic sitemap
├── components/                # React components
│   ├── MainPage.tsx           # Server component — composes all sections
│   ├── sections/              # Home page sections (7 files)
│   │   ├── Problem.tsx        # Hero / problem statement
│   │   ├── Solution.tsx       # Fix It / Maintain It cards
│   │   ├── HowItWorks.tsx     # 3-step process
│   │   ├── WhyChooseUs.tsx    # Differentiators
│   │   ├── WhoWeServe.tsx     # Industry list
│   │   ├── Pricing.tsx        # Pricing tiers
│   │   └── Contact.tsx        # CTA section
│   ├── InputField.tsx         # Reusable form input
│   ├── OneProject.tsx         # Project detail component
│   ├── NewProjectPage.tsx     # IT support inquiry form
│   ├── Nav.tsx                # Navigation
│   ├── Footer.tsx             # Footer
│   └── FAQs.tsx               # FAQ accordion (client component)
├── hooks/                     # Custom hooks
│   └── useSupportForm.ts      # Form state + submit logic
├── data/                      # Static data
│   ├── projects.ts            # Project portfolio data
│   └── faqSchema.ts           # FAQ structured data
├── public/                    # Static assets
│   └── robots.txt              # Crawler instructions
└── types/                     # TypeScript type definitions
```

## SEO Features

- Dynamic sitemap.xml generation
- robots.txt
- PWA manifest
- OpenGraph + Twitter metadata
- Canonical URLs on all pages
- JSON-LD structured data (Organization, FAQ, Article schemas)
- Static page generation for projects
- Custom 404 page

## Deployment

The site is configured for deployment on Vercel or any Next.js-compatible hosting.

### Build Output

```
Route (app)
┌ ○ /                  (Static)
├ ○ /_not-found        (Static)
├ ○ /manifest          (Static)
├ ○ /new               (Static)
├ ● /[project]         (SSG - 6 project pages)
├ ƒ /api/contact       (Dynamic)
└ ○ /sitemap.xml       (Static)
```

## Key Features

- IT support & managed services showcase
- One-time fix and monthly managed IT pricing
- Project portfolio with case studies
- IT support inquiry form with email notifications
- FAQ section with structured data (injected JSON-LD)
- Fully responsive design
- SEO optimized
- Performance: server components, next/font, no render-blocking

## License

Proprietary - All rights reserved.
