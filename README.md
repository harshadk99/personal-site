# Harshad Sadashiv Kadam - Personal Website

A clean, responsive personal website built with HTML and Tailwind CSS.

## Overview

This personal website showcases Harshad Sadashiv Kadam's professional profile, including sections for:
- About Me
- Resume/Experience
- Projects
- Blog
- Contact Information

## Technologies Used

- **HTML5** - For structure and content
- **Tailwind CSS** - For styling and responsive design
- **JavaScript** - For interactive elements and mobile menu
- **Font Awesome** - For icons
- **CDN Delivery** - For fast loading of external libraries

## Project Structure

```
personal-site/
├── assets/           # Images, resume PDF, and other static assets
├── blog/             # Blog posts and blog index
│   ├── index.html    # Blog listing page
│   └── post1.html    # Sample blog post
├── css/              # Custom CSS styles
│   └── styles.css    # Additional styles beyond Tailwind
├── js/               # JavaScript files
│   └── main.js       # Main JavaScript functionality
├── index.html        # Main homepage
└── README.md         # Project documentation
```

## Features

### Responsive Design
- Mobile-first approach
- Responsive navigation with hamburger menu for small screens
- Flexible grid layouts that adapt to different screen sizes

### Interactive Elements
- Mobile menu toggle
- Smooth scrolling to page sections
- Active navigation highlighting based on scroll position
- Simple form validation for the contact form

### Sections
1. **Header** - Navigation and branding
2. **About** - Personal introduction and call-to-action buttons
3. **Resume** - Professional experience, education, and skills
4. **Projects** - Portfolio of work with links to GitHub and live demos
5. **Blog** - Articles with full post pages
6. **Contact** - Contact form and social media links
7. **Footer** - Additional links and copyright information

## Customization

### Replacing Placeholder Content
- Replace placeholder text with your actual information
- Add your own project details and screenshots
- Update social media links with your profiles
- Add your actual resume PDF in the assets folder
- Replace placeholder images with your own photos

### Styling Changes
- The website uses Tailwind CSS via CDN for styling
- Custom styles are in `css/styles.css` for additional customization
- Color scheme can be adjusted by modifying Tailwind classes (primarily using indigo-600 as accent color)

## Browser Compatibility

The website is compatible with modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## Local Development

To run this website locally:

1. Clone the repository
2. Open `index.html` in your browser

No build process is required as the site uses Tailwind CSS via CDN.

## Deployment

This site can be deployed to any static web hosting service such as:
- GitHub Pages
- Netlify
- Vercel
- AWS S3
- Any standard web hosting service

## Future Enhancements

Potential improvements for future versions:
- Dark mode toggle
- More interactive project showcases
- Blog comment system
- Contact form backend integration
- Image gallery for visual work
- Performance optimizations for images and CSS
