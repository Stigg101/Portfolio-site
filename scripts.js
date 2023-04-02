

  document.addEventListener("DOMContentLoaded", () => {
    const projectCards = document.querySelectorAll(".fade-in");
    
    projectCards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add("visible");
      }, index * 250);
    });
  });
  