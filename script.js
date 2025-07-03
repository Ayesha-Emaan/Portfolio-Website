document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    // Enhanced smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Calculate proper scroll position accounting for fixed navbar
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update URL without jumping
                history.pushState(null, null, targetId);
            }
        });
    });

    // Active section detection
    const sections = document.querySelectorAll('section[id]');
    const navLinksAll = document.querySelectorAll('.nav-links a[href^="#"]');
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    
    function setActiveNav() {
        let current = '';
        const scrollPosition = window.scrollY + navbarHeight + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && 
                scrollPosition < sectionTop + sectionHeight) {
                current = section.id;
            }
        });
        
        navLinksAll.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', setActiveNav);
    setActiveNav(); // Run on load
    
    // Set copyright year
    document.getElementById('year').textContent = new Date().getFullYear();
});

document.addEventListener('DOMContentLoaded', function() {
    // Wait a brief moment to ensure all elements are ready
    setTimeout(function() {
        // Get all sections and nav links safely
        const sections = document.querySelectorAll('section:not([id=""])'); // Only sections with IDs
        const navLinks = document.querySelectorAll('.nav-links li a[href^="#"]');
        
        // Only proceed if we have both sections and nav links
        if (sections.length && navLinks.length) {
            // Function to update active nav link
            function setActiveNav() {
                const scrollPosition = window.scrollY || document.documentElement.scrollTop;
                let currentSectionId = '';
                
                // Find which section is currently in view
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;
                    
                    if (scrollPosition >= sectionTop - 200 && 
                        scrollPosition < sectionTop + sectionHeight - 200) {
                        currentSectionId = section.id;
                    }
                });
                
                // Update nav links
                navLinks.forEach(link => {
                    const href = link.getAttribute('href');
                    if (href && href.startsWith('#')) {
                        const sectionId = href.substring(1);
                        link.classList.toggle('active', sectionId === currentSectionId);
                    }
                });
            }
            
            // Set up scroll listener with debounce
            let scrollTimeout;
            window.addEventListener('scroll', function() {
                clearTimeout(scrollTimeout);
                scrollTimeout = setTimeout(setActiveNav, 50);
            });
            
            // Initialize on load
            setActiveNav();
        }
    }, 100); // Small delay to ensure DOM is fully ready
});

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add active class to current section in navigation
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links li a');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    // Smooth Scrolling for All Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
            
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offset = 70; // Same as navbar height
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active Section Highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinksAll = document.querySelectorAll('.nav-links a[href^="#"]');
    
    function highlightNav() {
        let current = '';
        const scrollPosition = window.scrollY + 200;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinksAll.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', highlightNav);
    highlightNav(); // Initialize on load

    // Set copyright year
    document.getElementById('year').textContent = new Date().getFullYear();
});

document.addEventListener('DOMContentLoaded', function() {
  // Set up the scene
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('threejs-background').appendChild(renderer.domElement);

  // Create geometry and material
  const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
  const material = new THREE.MeshBasicMaterial({ 
    color: 0x3498db,
    wireframe: true 
  });
  const torus = new THREE.Mesh(geometry, material);
  scene.add(torus);

  camera.position.z = 30;

  // Add animation
  function animate() {
    requestAnimationFrame(animate);
    torus.rotation.x += 0.005;
    torus.rotation.y += 0.01;
    renderer.render(scene, camera);
  }

  // Handle window resize
  window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  animate();
});

document.addEventListener('DOMContentLoaded', function() {
  const roles = ["Frontend Developer", "Web Developer", "Computer Scientist", "Programmer"];
  const rolesElement = document.querySelector('.dynamic-roles');
  const cursor = document.querySelector('.cursor');
  
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let isEnd = false;
  let typingSpeed = 150;

  function type() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
      rolesElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      rolesElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = charIndex % 3 === 0 ? 250 : 150; // Randomize speed slightly
    }

    if (!isDeleting && charIndex === currentRole.length) {
      isEnd = true;
      typingSpeed = 2000; // Pause at end
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 500;
    }

    setTimeout(type, typingSpeed);
  }

  type();
});


// Add this to your script.js to animate progress bars on scroll
document.addEventListener('DOMContentLoaded', function() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target.querySelector('.skill-progress');
                const width = progressBar.style.width;
                progressBar.style.width = '0';
                setTimeout(() => {
                    progressBar.style.width = width;
                }, 100);
            }
        });
    }, { threshold: 0.5 });

    skillItems.forEach(item => {
        observer.observe(item);
    });
});




document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const form = e.target;
    const responseDiv = document.getElementById('formResponse');
    
    // Show loading state
    responseDiv.textContent = 'Sending your message...';
    responseDiv.style.display = 'block';
    responseDiv.className = 'form-response';
    
    fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            responseDiv.textContent = 'Message sent successfully!';
            responseDiv.className = 'form-response success';
            form.reset();
        } else {
            throw new Error('Failed to send message');
        }
    })
    .catch(error => {
        responseDiv.textContent = 'Error sending message. Please try again.';
        responseDiv.className = 'form-response error';
    });
});


// Add intersection observer for service cards animation
document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    const serviceObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('show');
                }, index * 150); // Staggered animation
            }
        });
    }, { threshold: 0.1 });
    
    serviceCards.forEach(card => {
        serviceObserver.observe(card);
    });
    
    // Add hover effect for touch devices
    if ('ontouchstart' in window) {
        serviceCards.forEach(card => {
            card.addEventListener('click', function() {
                this.classList.toggle('hover-effect');
            });
        });
    }
});