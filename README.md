# Ubunifu Labs Website

A Next.js 16 website for Ubunifu Labs - a software development and IT consulting company based in Rwanda.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
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
CONTACT_EMAIL=your-email@gmail.com
CONTACT_EMAIL_PASSWORD=your-app-password
RECIPIENT_EMAIL=recipient@example.com
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
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   ├── new/               # Project inquiry page
│   ├── (projects)/[project]/ # Dynamic project pages
│   ├── api/contact/       # Contact form API
│   └── sitemap.ts         # Dynamic sitemap
├── components/            # React components
│   ├── MainPage.tsx       # Home page sections
│   ├── OneProject.tsx     # Project detail component
│   ├── NewProjectPage.tsx # Contact/inquiry form
│   ├── Nav.tsx            # Navigation
│   ├── Footer.tsx         # Footer
│   └── FAQs.tsx           # FAQ section
├── data/                  # Static data
│   ├── projects.ts        # Project portfolio data
│   └── faqSchema.ts       # FAQ structured data
├── public/                # Static assets
│   └── robots.txt          # Crawler instructions
└── types/                 # TypeScript type definitions
```

## SEO Features

- Dynamic sitemap.xml generation
- robots.txt
- OpenGraph metadata
- Canonical URLs
- JSON-LD structured data (Organization, FAQ, Article schemas)
- Static page generation for projects

## Deployment

The site is configured for deployment on Vercel or any Next.js-compatible hosting.

### Build Output

```
Route (app)
┌ ○ /                  (Static)
├ ○ /new               (Static)
├ ● /[project]         (SSG - 6 project pages)
├ ƒ /api/contact       (Dynamic)
└ ○ /sitemap.xml       (Static)
```

## Key Features

- Custom software development services showcase
- IT support & outsourcing packages
- Project portfolio with case studies
- Project inquiry form with email notifications
- FAQ section with structured data
- Fully responsive design
- SEO optimized

## License

Proprietary - All rights reserved.
