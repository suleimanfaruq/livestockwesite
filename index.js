const observerOptions = {
  root: null,
  threshold: 0.15 
};

const observer = new IntersectionObserver((entries, observerInstance) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      observerInstance.unobserve(entry.target);
    }
  });
}, observerOptions);
document.querySelectorAll(".reveal").forEach(element => {
  observer.observe(element);
});
// Hamburger Mobile Toggle & Icon Swap Logic
const hamburger = document.getElementById("hamburger");
const hamburgerIcon = document.getElementById("hamburgerIcon");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  
  if (navLinks.classList.contains("active")) {
    hamburgerIcon.classList.replace("fa-bars", "fa-xmark");
  } else {
    hamburgerIcon.classList.replace("fa-xmark", "fa-bars");
  }
});