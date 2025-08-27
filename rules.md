# Development Rules & Guidelines

## Code Standards

### General Rules
1. **Type Safety**: Use TypeScript strictly, no `any` types
2. **Component Structure**: Functional components with hooks
3. **State Management**: Use React Context for global state
4. **Error Handling**: Comprehensive error boundaries and try-catch blocks
5. **Performance**: Lazy loading, code splitting, image optimization

### Naming Conventions
- **Components**: PascalCase (e.g., `HeroSection`, `ContactForm`)
- **Functions**: camelCase (e.g., `handleSubmit`, `fetchData`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_ENDPOINT`, `MAX_RETRY`)
- **Files**: 
  - Components: PascalCase.tsx
  - Utilities: camelCase.ts
  - Styles: camelCase.module.css

### Directory Structure
```
components/
├── layout/          # Layout components (Header, Footer)
├── sections/        # Page sections (Hero, Services)
├── ui/             # Reusable UI components
├── forms/          # Form components
└── admin/          # Admin-specific components
```

## SEO Guidelines

### On-Page SEO
1. **Title Tags**: 50-60 characters, include primary keyword
2. **Meta Descriptions**: 150-160 characters, compelling CTA
3. **Headers**: Proper H1-H6 hierarchy, one H1 per page
4. **Images**: Alt text, WebP format, lazy loading
5. **URLs**: Clean, descriptive, lowercase with hyphens

### Technical SEO
1. **Performance**: 
   - LCP < 2.5s
   - FID < 100ms
   - CLS < 0.1
2. **Mobile**: Mobile-first responsive design
3. **Schema**: Local business structured data
4. **Sitemap**: Dynamic XML sitemap
5. **Robots.txt**: Proper crawl directives

## Content Guidelines

### English Content (Frontend)
- Professional, clear, concise
- Active voice preferred
- Industry-specific keywords
- Trust signals and social proof
- Clear CTAs

### Turkish Content (Admin)
- Simple, user-friendly interface
- Clear instructions
- Consistent terminology
- Help tooltips where needed

## Security Rules

1. **Authentication**: 
   - JWT tokens with refresh mechanism
   - Session management
   - Role-based access control

2. **Data Validation**:
   - Client and server-side validation
   - Sanitize all inputs
   - SQL injection prevention

3. **API Security**:
   - Rate limiting
   - CORS configuration
   - API key management

4. **Environment Variables**:
   - Never commit secrets
   - Use .env.local for development
   - Secure production configs

## Git Workflow

1. **Branches**:
   - `main`: Production-ready code
   - `develop`: Development branch
   - `feature/*`: New features
   - `fix/*`: Bug fixes

2. **Commits**:
   - Conventional commits format
   - Clear, descriptive messages
   - Small, focused changes

3. **Code Review**:
   - All PRs require review
   - Run tests before merge
   - Update documentation

## Testing Requirements

1. **Unit Tests**: Components and utilities
2. **Integration Tests**: API endpoints
3. **E2E Tests**: Critical user flows
4. **Performance Tests**: Core Web Vitals
5. **Accessibility Tests**: WCAG 2.1 AA compliance

## Deployment Checklist

- [ ] Environment variables configured
- [ ] Database migrations run
- [ ] Build successful
- [ ] Tests passing
- [ ] SEO meta tags verified
- [ ] Performance metrics met
- [ ] Security headers configured
- [ ] Analytics tracking active
- [ ] Error monitoring setup
- [ ] Backup procedures in place

