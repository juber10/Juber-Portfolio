


const links = document.querySelectorAll("nav a");

links.forEach(link => {
  link.addEventListener("click", () => {
    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});



    const skillBars = document.querySelectorAll('.skill-bar-inner');

    window.addEventListener('scroll', () => {
      skillBars.forEach(bar => {
        const sectionTop = bar.parentElement.parentElement.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight - 50) {
          bar.style.width = bar.getAttribute('data-skill');
        }
      });
    });

    // Get current year dynamically
const year = new Date().getFullYear();

// Add copyright text
document.getElementById("copyright").innerHTML = 
  `&copy; ${year} Mohd Juber. All Rights Reserved.`;

  