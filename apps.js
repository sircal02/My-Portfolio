const navSlide = () => {
    const burger = document.querySelector('.burger');
    const const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");

  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 1
        }s`;
      }
    });

    //burger animation
    burger.classList.toggle("toggle");
  });
};

navSlide();
 = document.querySelector('.navlinks');

    const navLink = document.querySelector('.navlinks li');

    burger.addEventListener(click, () => {
        nav.classList.toggle("nav-active");

        //   burger animation 
        burger.classList.toggle("toggle");
        
    });
    navLink.forEach((link, index) => {
        link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 3}s';
    });

};

navSlide();