// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Navbar animation
window.addEventListener("load", () => {
  gsap.from("#navbar", {
    y: -80,          
    opacity: 0,      
    duration: 1,     
    ease: "power3.out"
  });

  // Animate iPhone section elements
  gsap.to("#iphoneTitle", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
    delay: 0.5
  });

  gsap.to("#iphonePrice", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
    delay: 0.8
  });

  gsap.to("#iphoneDate", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
    delay: 1.1
  });
});

// Parallax effect for elements with data-speed attribute
document.addEventListener('DOMContentLoaded', function() {
  const parallaxElements = document.querySelectorAll('.parallax-element');
  
  // Throttle function for performance
  function throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    }
  }
  
  const handleScroll = throttle(function() {
    const scrollTop = window.pageYOffset;
    
    parallaxElements.forEach(function(element) {
      const speed = element.getAttribute('data-speed');
      const yPos = -(scrollTop * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });
  }, 10);
  
  window.addEventListener('scroll', handleScroll);
});

// Fade in elements on scroll
const fadeElements = document.querySelectorAll('.fade-in-element');

const fadeInOnScroll = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

fadeElements.forEach(element => {
  fadeInOnScroll.observe(element);
});

// Enhanced parallax for video background
gsap.to("#iphoneVideo", {
  yPercent: 30,
  ease: "none",
  scrollTrigger: {
    trigger: "#iphone-launch",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 100) {
    navbar.classList.add('bg-black');
    navbar.classList.remove('bg-black/70');
  } else {
    navbar.classList.remove('bg-black');
    navbar.classList.add('bg-black/70');
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Add button hover effects
document.querySelectorAll('button').forEach(button => {
  button.classList.add('button-hover');
});

// GSAP animations for product sections
gsap.utils.toArray('section').forEach(section => {
  const heading = section.querySelector('h1, h2');
  const content = section.querySelectorAll('p, button');
  
  if (heading) {
    gsap.fromTo(heading, 
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: heading,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }
  
  if (content.length > 0) {
    gsap.fromTo(content, 
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }
});

// Initialize all animations when page loads
window.addEventListener('load', function() {
  // Force a reflow to trigger animations
  document.body.classList.add('loaded');
});