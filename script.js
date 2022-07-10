const navLinkses = document.querySelectorAll("[data-cell]");
const firstSec = document.querySelector(".firstSec");
const secondSec = document.querySelector(".secondSec");
const thirdSec = document.querySelector(".thirdSec");
const fourthSec = document.querySelector(".fourthSec");

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
