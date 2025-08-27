# Aptiro LLC - Professional Business Website

## About
Professional business website for Aptiro LLC, a US-based company specializing in Google Ads management, web design, and e-commerce solutions.

## Features
- Modern, responsive design with Next.js 14 and React
- WhatsApp integration for client communication
- Dynamic admin panel (Turkish interface)
- SEO optimized for US market
- Performance optimized with Core Web Vitals in mind
- Multi-language support (English frontend, Turkish admin)

## Tech Stack
- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Deployment**: Vercel
- **Analytics**: Google Analytics 4, Google Search Console

## Installation

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Environment Variables

```
DATABASE_URL=
NEXTAUTH_SECRET=
NEXTAUTH_URL=
GOOGLE_ANALYTICS_ID=
WHATSAPP_DEFAULT_NUMBER="+16288006818"
```

## Project Structure

```
aptiroLLC/
├── app/                    # Next.js app directory
│   ├── (site)/            # Public website routes
│   ├── admin/             # Admin panel routes
│   └── api/               # API routes
├── components/            # React components
├── lib/                   # Utility functions
├── prisma/               # Database schema
├── public/               # Static assets
└── styles/               # Global styles
```

## Admin Access
Admin panel is accessible at `/admin` with Turkish interface for managing:
- WhatsApp contact number
- Service descriptions
- Portfolio items
- SEO metadata
- Analytics dashboard

## SEO Strategy
- Structured data for local business
- Optimized meta tags
- XML sitemap generation
- Robots.txt configuration
- Page speed optimization
- Mobile-first design

## Contact
**Aptiro LLC**  
1209 MOUNTAIN ROAD PL NE, STE N  
ALBUQUERQUE, NM 87110  
United States

Phone: +1 (628) 800-6818 (WhatsApp only)