
window.addEventListener("load", () => {
  gsap.from("#navbar", {
    y: -80,          
    opacity: 0,      
    duration: 1,     
    ease: "power3.out"
  });

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
    gsap.to("#iphoneImg", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
    delay: 1.1
  });
});
