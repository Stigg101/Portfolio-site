document.addEventListener("DOMContentLoaded", function () {
    // Select all the navigation links
    let navLinks = document.querySelectorAll(".nav-link");
  
    // Add click event listeners to each navigation link
    navLinks.forEach((link) => {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        let target = this.getAttribute("href");
  
        // Scroll to the target element smoothly
        document.querySelector(target).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  });
  