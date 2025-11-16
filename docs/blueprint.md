# **App Name**: Creative Canopy

## Core Features:

- Public Portfolio Site: Responsive website with Home, About, Projects, Certificates, Blog, and Contact pages.
- Content Management: Support for titles, descriptions (Markdown), dates, tags, images, and external links for all content types.
- Admin Dashboard: Protected dashboard for adding, editing, and deleting content (projects, certificates, blog posts) and managing site settings.
- Image Upload: Admin ability to upload images/files to Firebase Storage via the dashboard.
- Authentication: Firebase Authentication (email/password and Google Sign-In) for admin access.
- Secure Contact Form: Firebase Function endpoint to securely handle contact form submissions and send emails via SendGrid. Tool: AI checks form submission for abusive language, based on configurable rules.
- Authenticated REST Endpoints: Firebase Functions with authenticated REST endpoints for admin operations, including security role checks (admin role).

## Style Guidelines:

- Primary color: Deep blue (#3F51B5) for a professional and trustworthy feel.
- Background color: Light grey (#F0F0F5) for a clean and modern look, to support easy readability of portfolio content.
- Accent color: A vibrant orange (#FF9800) to highlight key actions and interactive elements on the site.
- Font pairing: 'Space Grotesk' (sans-serif) for headlines and 'Inter' (sans-serif) for body text, to maintain a balance of techiness and readability.
- Code font: 'Source Code Pro' for displaying code snippets in blog posts or project descriptions.
- Use a set of modern, minimalist icons from a library like FontAwesome or Material Icons, maintaining consistency across the site.
- Implement a grid-based layout system (Tailwind CSS) to ensure responsiveness across different devices, and a clean separation of content.