document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);
    
    const reveals = document.querySelectorAll('.reveal, .reveal2');
    
    reveals.forEach(reveal => {
      gsap.fromTo(reveal, 
        { opacity: 0, x: -100 }, 
        { 
          opacity: 1, 
          x: 0, 
          scrollTrigger: {
            trigger: reveal,
            start: 'top 80%', // Adjust the trigger point as needed
            toggleActions: 'play none none reverse'
          }
        }
      );
    });
  });
    