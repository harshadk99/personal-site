# Harshad Sadashiv Kadam - Personal Website

A cybersecurity-themed personal website showcasing my professional experience, skills, projects, and blog posts. Built with a "hacker/terminal" aesthetic and deployed completely free using Cloudflare Pages.

![Website Screenshot](assets/website-screenshot.png)

## 🔐 Features

- Responsive design that works on all devices
- Cyberpunk/hacker aesthetic with matrix animation
- Terminal-style interface with typing effects
- Dark mode with neon green accents
- Sections for professional experience, skills, projects, and blog posts
- Interactive timeline for work experience
- Loading animation with cybersecurity theme
- Zero cost deployment using Cloudflare Pages

## 🛠️ Technologies Used

- HTML5 with semantic markup
- CSS3 with modern features (Grid, Flexbox, CSS Variables)
- Vanilla JavaScript (no frameworks)
- Font Awesome for icons
- Fira Code monospace font
- Cloudflare Pages for hosting
- Cloudflare Workers for serverless functions (optional)
- Custom domain configuration

## 🔧 Setup and Deployment

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/harshadk99/personal-site.git
   cd personal-site
   ```

2. Open `index.html` in your browser or use a local server:
   ```bash
   # Using Python
   python -m http.server
   
   # Using Node.js
   npx serve
   ```

### Free Deployment with Cloudflare Pages

This site is deployed using Cloudflare Pages, which offers free hosting for static websites with:
- Unlimited sites
- Unlimited requests
- Unlimited bandwidth
- Custom domains with free SSL
- Automatic builds from GitHub

#### Step-by-Step Deployment Guide:

1. **Create a GitHub repository** for your site (or fork this one)

2. **Sign up for Cloudflare** (free tier) at https://dash.cloudflare.com/sign-up

3. **Set up Cloudflare Pages**:
   - Go to the Cloudflare dashboard
   - Select "Pages" from the sidebar
   - Click "Create a project" → "Connect to Git"
   - Select your GitHub repository
   - Configure build settings:
     - Build command: (leave blank for static HTML sites)
     - Build output directory: (leave as root or specify folder)
     - Environment variables: (none needed for this project)

4. **Deploy your site**:
   - Click "Save and Deploy"
   - Cloudflare will automatically build and deploy your site
   - You'll get a `*.pages.dev` subdomain for free

5. **Custom Domain Setup** (optional):
   - In the Pages project, go to "Custom domains"
   - Add your custom domain
   - Update your domain's DNS settings to point to Cloudflare
   - Cloudflare will automatically provision a free SSL certificate

6. **Continuous Deployment**:
   - Any push to your main branch will trigger a new deployment
   - You can also set up preview deployments for pull requests

### Using Cloudflare Workers (Advanced)

For dynamic functionality (contact forms, API integrations), you can use Cloudflare Workers:

1. **Install Wrangler CLI**:
   ```bash
   npm install -g wrangler
   ```

2. **Create a Worker**:
   ```bash
   wrangler init my-worker
   ```

3. **Example Worker for Contact Form**:
   ```javascript
   addEventListener('fetch', event => {
     event.respondWith(handleRequest(event.request))
   })

   async function handleRequest(request) {
     if (request.method === 'POST') {
       // Process form data
       const formData = await request.formData()
       
       // Send email using a service like SendGrid or Mailgun
       // Store data in KV storage
       
       return new Response('Message sent!', {
         headers: { 'Content-Type': 'application/json' }
       })
     }
     
     return new Response('Method not allowed', { status: 405 })
   }
   ```

4. **Deploy the Worker**:
   ```bash
   wrangler publish
   ```

## 📂 Project Structure

```
personal-site/
├── assets/                     # Images and other static assets
│   ├── favicon/                # Favicon files
│   ├── Profile-Picture.jpeg    # Profile photo
│   └── website-screenshot.png  # Screenshot for README
├── css/
│   ├── style.css               # Main stylesheet
│   └── styles.css              # Additional styles
├── js/
│   ├── main.js                 # Additional JavaScript functionality
│   └── scripts.js              # Main JavaScript functionality
├── blog/                       # Blog section files
│   ├── index.html              # Blog landing page
│   └── post1.html              # Individual blog post
├── index.html                  # Main HTML file
└── README.md                   # This documentation
```

## 🔍 Key Components

### Matrix Background Animation

The background features a Matrix-style rain animation created with HTML5 Canvas. The animation is optimized for performance with:

- RequestAnimationFrame for smooth rendering
- Visibility detection to pause when tab is not active
- Debounced resize handling

### Terminal Effects

The site includes several terminal-inspired UI elements:

- Command prompt typing animation
- Terminal windows with macOS-style buttons
- Blinking cursors
- ASCII art header

### Interactive Timeline

The professional experience section features an interactive timeline with:

- Tab-based navigation between current and previous roles
- Expandable/collapsible content sections
- Visual metrics and achievements
- Responsive design for all screen sizes

### Loading Animation

The site includes a branded loading animation that:

- Creates a professional first impression
- Reinforces the cybersecurity theme
- Provides visual feedback during page load
- Smoothly transitions to the main content

## 🖋️ Customization

To customize the site:

1. **Colors**: Edit the CSS variables in `:root` in `style.css`
2. **Content**: Update the information in `index.html`
3. **Profile Image**: Replace `assets/Profile-Picture.jpeg` with your own image
4. **Projects & Blog Posts**: Edit the corresponding sections in `index.html`
5. **Domain**: Configure your custom domain in Cloudflare Pages settings

## 💰 Cost Breakdown (Free!)

This entire portfolio setup costs $0 to run:

| Service | Cost | What You Get |
|---------|------|-------------|
| Cloudflare Pages | $0 | Hosting, CI/CD, SSL |
| GitHub | $0 | Code storage, version control |
| Custom Domain | $0-$15/year | Only cost is domain registration |
| Cloudflare Workers | $0 | Up to 100,000 requests/day |

## 🔒 Best Practices Implemented

- Semantic HTML for better accessibility and SEO
- Responsive design for all devices
- Performance optimizations for animations
- Accessibility features (focus styles, semantic markup)
- Print stylesheet for better printing
- Error handling in JavaScript
- Cross-browser compatibility
- Proper meta tags for SEO
- Schema.org structured data for rich snippets

## 🚀 "Build Your Own Brand" Workshop Guide

This repository serves as an excellent template for a "Build Your Own Brand" workshop:

1. **Fork the Repository**: Participants start by forking this repo
2. **Personalize Content**: Update text, images, and projects
3. **Deploy with Cloudflare**: Follow the deployment steps above
4. **Add Custom Domain**: Connect a personal domain name
5. **Extend Functionality**: Add blog posts, contact forms, etc.

Workshop participants will learn:
- Basic HTML/CSS/JavaScript
- Git workflow
- Cloudflare Pages deployment
- Personal branding principles
- SEO fundamentals

## 📄 License

All rights reserved © 2025 Harshad Sadashiv Kadam

## 📞 Contact

- Email: harshad.surfer@gmail.com
- LinkedIn: [linkedin.com/in/harshad99](https://www.linkedin.com/in/harshad99/)
- GitHub: [github.com/harshadk99](https://github.com/harshadk99)
