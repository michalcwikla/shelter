const menuSlide = () => {
    console.log("dzialam")

    const burger = document.getElementById(".burger");
    const menu1 = document.getElementById(".menu");

    burger.addEventListener("click",() => {
        menu1.classList.toggle(".menu-active");
    });

}

menuSlide();