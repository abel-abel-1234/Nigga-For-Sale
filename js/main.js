// SWIPER 
const swiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    loop: 'true',

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


window.addEventListener('scroll', scrollHeader)
    // 

let cart = document.getElementById('cart'),

    cartShop = document.getElementById('cart-shop'),

    cartClose = document.getElementById('cart-close')

if (cartShop) {
    cartShop.addEventListener("click", () => {
        cart.classList.toggle("show-cart")
        login.classList.remove("show-login")
    })
}
if (cartClose) {
    cartClose.addEventListener("click", () => {
        cart.classList.remove("show-cart")
    })
}

//////// LOGIN SHOW AND HIDE //////////

let login = document.getElementById('login'),

    loginToggel = document.getElementById('login-toggle'),

    loginClose = document.getElementById('login-close')


if (loginToggel) {
    loginToggel.addEventListener("click", () => {
        login.classList.toggle("show-login")
        cart.classList.remove("show-cart")
    })
}
if (loginClose) {
    loginClose.addEventListener("click", () => {
        login.classList.remove("show-login")
    })
}
// 
//////// NAV SHOW AND HIDE //////////

let nav = document.getElementById('nav-items'),
    navToggel = document.getElementById('nav-toggle'),
    iconToggel = document.getElementById('icon-toggel')

if (nav) {
    navToggel.addEventListener("click", () => {
        nav.classList.toggle("nav-show");
        iconToggel.classList.toggle("fa-times");
    })
}


// Change background header 

// let navH = document.getElementById("nav-items");
// if (navH.classList.contains('nav-show')) {
//     hightNav = 10;
// } else {
//     hightNav = 67;
// }

function scrollHeader() {
    const header = document.getElementById('header')
    if (this.scrollY >= 15) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header')
}
// End Change

//  NEW SWIPER 
const newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 25,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: 'true',


});

// Show Scroll Up


function scrollUp() {
    scrollUp = document.getElementById("scroll-up");
    // when the scroll heigher than 350px viewport height , add show scroll class
    if (this.scrollY >= 350) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll")
}
window.addEventListener("scroll", scrollUp);

///////////////////// Question Accordion 

let accordionItem = document.querySelectorAll(".questions-item")

accordionItem.forEach((item) => {
    let AccordionHeader = item.querySelector('.questions-header')
    AccordionHeader.addEventListener('click', () => {
        let openItem = document.querySelector('.accordion-open')

        toggleItem(item)
        if (openItem && openItem !== item) {
            toggleItem(openItem)
        }

    })
})

let toggleItem = (item) => {
    let accordionContent = item.querySelector('.questions-content')

    if (item.classList.contains('accordion-open')) {
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    } else {
        accordionContent.style.height = accordionContent.scrollHeight + "px"
        item.classList.add("accordion-open")
    }


}

/////////////////// Style Switcher ////////////////////////

const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open")
})


//  Hide style Switcher on Scroll
window.addEventListener('scroll', () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open")
    }
})


//  Themes colors

function themesColors() {
    const colorStyle = document.querySelector(".js-color-style"),
        themesColorsContainer = document.querySelector(".js-theme-colors");

    themesColorsContainer.addEventListener("click", ({ target }) => {
        if (target.classList.contains("js-theme-color-item")) {
            // console.log(target.getAttribute("data-js-themes-color"));
            localStorage.setItem("color", target.getAttribute("data-js-themes-color"));
            setColors();
        }
    })

    function setColors() {
        let path = colorStyle.getAttribute("href").split("/");
        path = path.slice(0, path.length - 1);
        colorStyle.setAttribute("href", path.join("/") + "/" + localStorage.getItem("color") + ".css");
        if (document.querySelector(".js-theme-color-item.active")) {
            document.querySelector(".js-theme-color-item.active").classList.remove("active");
        }
        document.querySelector("[data-js-themes-color=" + localStorage.getItem("color") + "]").classList.add("active");

    }
    if (localStorage.getItem("color") !== null) {
        setColors();
    } else {
        const dufaultColor = colorStyle.getAttribute("href").split("/").pop().split(".").shift();
        document.querySelector("[data-js-themes-color" + dufaultColor + "]").classList.add("active");
    }

}

themesColors();
