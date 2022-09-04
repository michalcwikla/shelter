const menuSlide = () => {
    console.log("dzialam")

    const burger = document.querySelector(".burger");
    console.log({burger});
    const menu1 = document.querySelector(".menu");
    console.log({menu1});

    burger.addEventListener("click", () => {
        menu1.classList.toggle("menu-active");
    });
}

menuSlide();