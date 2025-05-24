document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".page");
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, {
      threshold: 0.3
    });
  
    sections.forEach(section => {
      observer.observe(section);
    });
  });
  
  const navLinks = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    let current = "";
  
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute("id");
      }
    });
  
    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  
  emailjs.init("YOUR_USER_ID");

  document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
      .then(() => {
        alert("Message sent successfully!");
        this.reset();
      }, (error) => {
        alert("Failed to send message. Try again later.");
        console.error(error);
      });
  });
  

thankYou.style.opacity = 0;
thankYou.style.display = 'block';
setTimeout(() => { thankYou.style.opacity = 1; }, 50);
