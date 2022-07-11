const navLinkses = document.querySelectorAll("[data-cell]");
const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".navLinks");
const bars = document.querySelectorAll(".bar");


//Show Border Active Page

navLinkses.forEach(navLink => {

    navLink.addEventListener("click", (e)=>{
        var el = navLinkses[0].parentElement;

        while (el) {
            if (el.tagName === "LI") {
                el.classList.remove("active");
            }
            el = el.nextSibling;
        }

        e.target.parentElement.classList.add("active");

    })
    
})



//Show Nav

burger.addEventListener("click", ()=>{
    barMenu()
})




function barMenu() {
    navLinks.classList.toggle("showNavLinks");
    bars.forEach(bar =>{
        bar.classList.toggle("cross");
    })
    navLinkses.forEach(navLink => {
        navLink.addEventListener("click", ()=>{
            navLinks.classList.remove("showNavLinks");
            bars.forEach(bar =>{
                bar.classList.remove("cross");
                })
        })
    })
}


