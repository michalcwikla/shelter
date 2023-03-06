menuSlide();
naKlikniecie();
onScroll();



const menuSlide = () => {
    console.log("dzialam");
    const burger = document.querySelector(".burger");
    console.log({burger});
    const menu1 = document.querySelector(".menu");
    console.log({menu1});

    burger.addEventListener("click", () => {
        menu1.classList.toggle("menu-active");
    });
}


const naKlikniecie = () => {
    return console.log("dzialam ja jebeeeee") ;
    const burger = document.querySelector(".hide");


    // burger.addEventListener("click", () => {
    //     menu1.classList.toggle("menu-active");
    // });
}


const scrollPos1 = window.pageYOffset;
const onScroll = () => {
const scrollPos2 = window.pageYOffset;
  if (scrollPos1 > scrollPos2) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-50px";
  }
  scrollPos1 = scrollPos2;
}


