# Harshad Sadashiv Kadam - Personal Website

A cybersecurity-themed personal website showcasing my professional experience, skills, projects, and blog posts.

![Website Screenshot](assets/website-screenshot.png)

## 🔐 Features

- Responsive design that works on all devices
- Cyberpunk/hacker aesthetic with matrix animation
- Terminal-style interface with typing effects
- Dark mode with neon green accents
- Sections for professional experience, skills, projects, and blog posts

## 🛠️ Technologies Used

- HTML5 with semantic markup
- CSS3 with modern features (Grid, Flexbox, CSS Variables)
- Vanilla JavaScript (no frameworks)
- Font Awesome for icons
- Fira Code monospace font

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

### Deployment

The site is deployed on Cloudflare Pages at:
- https://personal-site-ek2.pages.dev/
- https://harshadsadashivkadam.com

## 📂 Project Structure

```
personal-site/
├── assets/                # Images and other static assets
│   └── profile-image.png  # Profile photo
├── css/
│   └── style.css          # Main stylesheet
├── js/
│   └── scripts.js         # JavaScript functionality
├── index.html             # Main HTML file
└── README.md              # This documentation
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

### Responsive Design

The website is fully responsive with:

- Mobile-first approach
- Hamburger menu for smaller screens
- Flexible grid layouts
- Optimized typography for all screen sizes

## 🖋️ Customization

To customize the site:

1. **Colors**: Edit the CSS variables in `:root` in `style.css`
2. **Content**: Update the information in `index.html`
3. **Profile Image**: Replace `assets/profile-image.png` with your own image
4. **Projects & Blog Posts**: Edit the corresponding sections in `index.html`

## 🔒 Best Practices Implemented

- Semantic HTML for better accessibility and SEO
- Responsive design for all devices
- Performance optimizations for animations
- Accessibility features (focus styles, semantic markup)
- Print stylesheet for better printing
- Error handling in JavaScript
- Cross-browser compatibility
- Proper meta tags for SEO

## 📄 License

All rights reserved © 2023 Harshad Sadashiv Kadam

## 📞 Contact

- Email: harshad.surfer@gmail.com
- LinkedIn: [linkedin.com/in/harshad99](https://www.linkedin.com/in/harshad99/)
- GitHub: [github.com/harshadk99](https://github.com/harshadk99)
