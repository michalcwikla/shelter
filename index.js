
const menuSlide = () => {
  // return console.log("dzialam");
  const burger = document.querySelector(".burger");
  // console.log({burger});
  const menu1 = document.querySelector(".menu");
  // console.log({menu1});
  burger.addEventListener("click", () => {
    menu1.classList.toggle("menu-active");
  });
}

menuSlide();


const naKlikniecie = () => {
    // return console.log("dzialam ja jebeeeee") ;
    const burger = document.querySelector(".hide");
    burger.addEventListener("click", () => {
          menu1.classList.toggle("menu-active");
      });
    }


    naKlikniecie();

const menuHide = () => {
  window.addEventListener('scroll', () => {
    console.log('scrolled');
    const menu2 = document.querySelector(".menu");
  })
}

menuHide();