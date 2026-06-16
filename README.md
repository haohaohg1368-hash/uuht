# 10Best Reviews - Affiliate Marketing Website

A modern, SEO-optimized affiliate marketing website built with Next.js 14, TypeScript, and Tailwind CSS. This MVP (Minimum Viable Product) is designed for promoting lifestyle products across multiple categories including kitchen appliances, home essentials, fitness equipment, fashion, and more.

## Features

### Core Functionality
- **Responsive Design**: Fully responsive layout that works on all devices
- **SEO Optimized**: Meta tags, structured data, and semantic HTML for better search rankings
- **Fast Performance**: Built with Next.js App Router for optimal loading speeds
- **Affiliate Integration**: Ready-to-use affiliate link structure with disclosure compliance

### Pages Included
1. **Homepage** (`/`)
   - Hero section with trust indicators
   - Featured product reviews grid (15 products)
   - Call-to-action sections

2. **About Us** (`/about`)
   - Company mission and values
   - Review process explanation
   - Trust building content

3. **Contact Us** (`/contact`)
   - Contact form
   - FAQ section
   - Multiple contact methods

4. **Blog/Reviews** (`/blog`)
   - Grid of all product reviews
   - Category filtering
   - Newsletter signup

5. **Product Detail Pages** (`/products/[id]`)
   - Detailed product information
   - SEO-optimized content
   - Pros & cons analysis
   - Affiliate CTA buttons

6. **Legal Pages**
   - Privacy Policy (`/privacy-policy`)
   - Terms of Service (`/terms-of-service`)
   - Affiliate Disclosure (`/affiliate-disclosure`)

### Technical Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Inter (Google Fonts)
- **Deployment**: Bolt.new / Vercel ready

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd 10best-reviews
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Deployment to Bolt.new

This project is configured for easy deployment on [Bolt.new](https://bolt.new):

1. Push your code to a GitHub repository
2. Visit [bolt.new](https://bolt.new)
3. Connect your GitHub account
4. Select this repository
5. Bolt will automatically detect it's a Next.js project and deploy it

Alternatively, you can deploy to Vercel:
```bash
npm install -g vercel
vercel
```

## Customization

### Updating Affiliate Links
Edit the `products` array in:
- `/src/components/BrandReviews.tsx` (homepage grid)
- `/src/app/products/[id]/page.tsx` (detail pages)

Replace the `affiliateLink: "#"` with your actual affiliate URLs.

### Adding Real Product Images
1. Add images to `/public/images/` directory
2. Update image paths in component files
3. Use Next.js `<Image>` component for optimization

### SEO Optimization
Each page includes:
- Meta title and description
- Open Graph tags
- Twitter cards
- Structured data (JSON-LD) ready for implementation

Update metadata in `/src/app/layout.tsx` and individual page files.

### Content Management
For a production site, consider integrating:
- **Supabase**: For product database (already planned)
- **CMS**: Sanity, Contentful, or Strapi for content management
- **Analytics**: Google Analytics or Plausible for tracking

## File Structure

```
10best-reviews/
├── public/
│   └── images/          # Product images (add your own)
── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── affiliate-disclosure/
│   │   │   └── page.tsx
│   │   ├── blog/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── privacy-policy/
│   │   │   └── page.tsx
│   │   ├── products/
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   ├── terms-of-service/
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── BrandReviews.tsx
│       └── Footer.tsx
├── .bolt/
│   └── config.json
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
├── next.config.mjs
├── package.json
└── README.md
```

## Compliance & Legal

This template includes essential legal pages required for affiliate marketing:

1. **Privacy Policy**: GDPR and CCPA compliant
2. **Terms of Service**: Standard website terms
3. **Affiliate Disclosure**: FTC-compliant disclosure

**Important**: Review these pages with a legal professional before launching to ensure they meet your specific requirements and local regulations.

## Next Steps for Production

1. **Add Real Products**: Replace placeholder data with actual products
2. **Integrate Database**: Set up Supabase for dynamic content
3. **Add Analytics**: Implement Google Analytics or similar
4. **Email Marketing**: Connect newsletter signup to Mailchimp/ConvertKit
5. **SEO Tools**: Add sitemap.xml and robots.txt
6. **Performance**: Optimize images and implement lazy loading
7. **Testing**: Test all affiliate links and forms
8. **Domain**: Connect your custom domain

## Support

For questions or issues:
- Check the [Next.js Documentation](https://nextjs.org/docs)
- Review [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- Contact: contact@10bestreviews.com

## License

This project is created for affiliate marketing purposes. All product names, logos, and brands are property of their respective owners.

---

**Built with ❤️ using Next.js and Tailwind CSS**

*Last Updated: June 2026*
