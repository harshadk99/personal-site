document.addEventListener('DOMContentLoaded', function() {
    // Theme Toggle Functionality
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Check for saved theme preference or use the system preference
    const currentTheme = localStorage.getItem('theme') || (prefersDarkScheme.matches ? 'dark' : 'light');
    
    // Set initial theme
    if (currentTheme === 'light') {
        document.body.setAttribute('data-theme', 'light');
    } else {
        document.body.removeAttribute('data-theme');
    }
    
    // Toggle theme when button is clicked
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            if (document.body.getAttribute('data-theme') === 'light') {
                document.body.removeAttribute('data-theme');
                localStorage.setItem('theme', 'dark');
            } else {
                document.body.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
            }
        });
    }

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a nav link
    const navItems = document.querySelectorAll('.nav-links a');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (navLinks.classList.contains('active') && 
            !event.target.closest('.navbar') && 
            !event.target.closest('.nav-links')) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add active class to hamburger when clicked
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            const bars = hamburger.querySelectorAll('.bar');
            
            if (hamburger.classList.contains('active')) {
                bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });
    }
    
    // Add scroll event listener for header styling
    const header = document.querySelector('.header');
    
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.style.boxShadow = '0 2px 10px rgba(0, 255, 0, 0.1)';
            } else {
                header.style.boxShadow = 'none';
            }
        });
    }

    // Matrix rain animation with performance optimizations and theme awareness
    const canvas = document.getElementById('matrix-bg');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        
        // Set canvas dimensions
        const setCanvasDimensions = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        
        setCanvasDimensions();
        
        // Characters to display
        const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
        const fontSize = 14;
        let columns = Math.floor(canvas.width / fontSize);
        
        // Array to track the y position of each column
        let drops = [];
        
        const initDrops = () => {
            drops = [];
            for (let i = 0; i < columns; i++) {
                drops[i] = Math.floor(Math.random() * -20); // Start some above the screen
            }
        };
        
        initDrops();
        
        // Function to draw the matrix rain with optimizations
        function drawMatrix() {
            // Check if canvas is visible (tab in focus, element in viewport)
            if (document.hidden) return;
            
            // Set semi-transparent black background to create trail effect
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // Set text color based on theme
            const isDark = document.body.getAttribute('data-theme') !== 'light';
            ctx.fillStyle = isDark ? '#00ff00' : 'rgba(0, 102, 204, 0.5)';
            ctx.font = fontSize + 'px monospace';
            
            // Draw characters
            for (let i = 0; i < drops.length; i++) {
                // Get random character
                const text = characters.charAt(Math.floor(Math.random() * characters.length));
                
                // Only draw if within canvas bounds
                if (drops[i] * fontSize > 0 && drops[i] * fontSize < canvas.height) {
                    // Draw the character
                    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                }
                
                // Move to next position or reset to top
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                
                drops[i]++;
            }
            
            // Request next frame with throttling for better performance
            matrixAnimationId = requestAnimationFrame(drawMatrix);
        }
        
        // Resize canvas when window is resized with debounce
        let resizeTimeout;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                setCanvasDimensions();
                columns = Math.floor(canvas.width / fontSize);
                initDrops();
            }, 200);
        });
        
        // Start/stop animation based on visibility
        let matrixAnimationId;
        
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                cancelAnimationFrame(matrixAnimationId);
            } else {
                matrixAnimationId = requestAnimationFrame(drawMatrix);
            }
        });
        
        // Start the animation
        matrixAnimationId = requestAnimationFrame(drawMatrix);
    }

    // Terminal typing effect with error handling
    const typedTextElement = document.getElementById('typed-text');
    if (typedTextElement) {
        const texts = [
            'analyzing security vulnerabilities...',
            'implementing zero trust architecture...',
            'deploying honeypot systems...',
            'securing cloud infrastructure...',
            'monitoring network traffic...'
        ];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;
        
        function typeEffect() {
            try {
                const currentText = texts[textIndex];
                
                if (isDeleting) {
                    // Deleting text
                    typedTextElement.textContent = currentText.substring(0, charIndex - 1);
                    charIndex--;
                    typingSpeed = 50;
                } else {
                    // Typing text
                    typedTextElement.textContent = currentText.substring(0, charIndex + 1);
                    charIndex++;
                    typingSpeed = 100;
                }
                
                // If finished typing
                if (!isDeleting && charIndex === currentText.length) {
                    isDeleting = true;
                    typingSpeed = 1500; // Pause before deleting
                }
                
                // If finished deleting
                if (isDeleting && charIndex === 0) {
                    isDeleting = false;
                    textIndex = (textIndex + 1) % texts.length;
                    typingSpeed = 500; // Pause before typing next text
                }
                
                setTimeout(typeEffect, typingSpeed);
            } catch (error) {
                console.error("Error in typing effect:", error);
                // Restart the effect if there was an error
                setTimeout(() => {
                    charIndex = 0;
                    isDeleting = false;
                    textIndex = 0;
                    typeEffect();
                }, 1000);
            }
        }
        
        // Start typing effect
        setTimeout(typeEffect, 1000);
    }

    // Add glitch effect on hover for certain elements
    const glitchElements = document.querySelectorAll('.section-title, .hero-content h1');
    glitchElements.forEach(element => {
        element.addEventListener('mouseover', function() {
            this.classList.add('glitch-effect');
        });
        
        element.addEventListener('mouseout', function() {
            this.classList.remove('glitch-effect');
        });
    });
    
    // Add cursor to headings
    const addCursorToHeadings = () => {
        const headings = document.querySelectorAll('h2:not(.section-title)');
        headings.forEach(heading => {
            if (!heading.querySelector('.cursor-blink')) {
                const cursor = document.createElement('span');
                cursor.className = 'cursor-blink';
                cursor.innerHTML = '|';
                heading.appendChild(cursor);
            }
        });
    };
    
    // Call once on load
    addCursorToHeadings();
}); 