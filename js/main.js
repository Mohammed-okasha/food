// Access Menu Btn
const menuBtn = document.querySelector(".menu-btn");
// Access Nav Menu
const navMenu = document.querySelector(".nav-menu");
// Access Logo
const logo = document.getElementById("logo");

menuBtn.addEventListener("click", function() {

    ///// Menu Btn > Icon Style
    this.classList.toggle("active");

    /// Active Menu In Small Screens(Open && Close)
    if(!navMenu.classList.contains("active")) {
        navMenu.classList.add("active");

    } else {
        navMenu.classList.remove("active");
    }

    // fixed Logo ==============
    if(!logo.hasAttribute("class")) {
        // SetAttribute("class", fixed-logo) To Logo
        logo.setAttribute("class", "fixed-logo");

    } else {
        // removeAttribute("class", fixed-logo) From Logo
        logo.removeAttribute("class");
    }
});
//==========================================================================
// Access Header
const header = document.getElementById("header");

// Access Up Btn ===============
const up = document.getElementById("up");

// Window addEventListener To Do Things
window.addEventListener("scroll", function() {
    // Fixed Header When Window Scroll
    if(this.scrollY >= 50) {
        header.classList.add("header-scroll");

    } else {
        // Remove header-scroll Class From Header;
        header.classList.remove("header-scroll");
    }

    // When Window Scroll > Remove Active Class From Menu Btn
    // menuBtn.classList.remove("active");

    // When Window Scroll > Remove Active Class From Nav Menu
    // navMenu.classList.remove("active");

    // When Window Scroll > removeAttribute("class", fixed-logo) From Logo
    // logo.removeAttribute("class");

    if(this.scrollY >= 1100) {
        // Add Show Class To Up Btn
        up.classList.add("show");

    } else {
        // Remove Show Class Form Up Btn
        up.classList.remove("show");
    }

    // Window Scroll To Top When Click To Up Btn
    up.onclick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    //=============================================================

});
//==========================================================================
// Menu Link Active When Scroll To Section
// Access All Sections
const sections = document.getElementsByTagName("section");
let sectionsArray = [...sections];

// Access All Links
const links = document.querySelectorAll(".nav-menu li a");

// Looping For All Section
sectionsArray.forEach((section) => {
    // // Get All Section Attribute (id) Value
    let id = section.getAttribute("id");

    window.addEventListener("scroll", function() {

        if(window.scrollY >= section.offsetTop - 200) {

            // Looping For All link
            links.forEach((a) => {

                // Get All Links Attribute (data-active) Value
                let dataActive = a.getAttribute("data-active");

                // comparison data-Active ِAtt == id Att ?
                if(dataActive === id) {
                    // if data-Active ِAtt == id Att > Add Active Class To a
                    a.classList.add("active");

                } else {
                    // else data-Active ِAtt == id Att > Remove Active Class From a
                    a.classList.remove("active");
                }
            });

        };
    });

});
//==========================================================================
// [Open Search Input]
// Access To Search Btn
const searchInput = document.getElementsByClassName("search-input")[0];
// Access To Search Btn
const searchBtn = document.getElementById("search");
// Access To Close Btn
const closeBtn = document.getElementById("close");

searchBtn.onclick = () => {
    // Add Open Class To Search Btn
    searchInput.classList.add("open");
};

closeBtn.onclick = () => {
    // Remove Open Class From Search Btn
    searchInput.classList.remove("open");
};
//==========================================================================
// [Home Page Slider]
// Access All Slides
const slides = document.querySelectorAll("#home .slide");
// Access Previous Btn
const prev = document.querySelector(".prev");
// Access Next Btn
const next = document.querySelector(".next");
// Access To Text Div Then Add it Anmation Class
const text = document.querySelectorAll("#home .text");

slides.forEach((slide, index) => {
    // Slide > index[0] * 100% = left 0
    // Slide > index[1] * 100% = left 100%
    // Slide > index[2] * 100% = left 200%
    slide.style.left = `${index * 100}%`;
});

let counter = 0;

next.addEventListener("click", () => {
    counter++;
    carousel();

    // Looping For All Text Then Add It Anmation Class
    for(let i = 0; i < text.length; i++) {
        let result = text[i];
    
        if(!result.classList.contains("animation")) {
            // Add Anmation Class To text
            result.classList.add("animation");
    
        } else {
            // Remove Anmation Class From text
            result.classList.remove("animation");
        };
    };
});

prev.addEventListener("click", () => {
    counter--;
    carousel();
});


function carousel() {
    if(counter > slides.length - 1) {
        counter = 0;
    };

    if(counter < 0) {
        counter = slides.length - 1;
    };

    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};

// Auto Slider ============
setInterval((() => {
    
    counter++;

    carousel();

}), 7000);


    // // [Draggable Dlider]
    // // Slide Cursur In mousedown = grabbing
    // slides.forEach((slide) => {
    //     slide.addEventListener("mousedown", () => {
    //         slide.style.cursor = 'grabbing';
    //     });
    // });

    //     // Slide Cursur In mouseenter = grab
    // slides.forEach((slide) => {
    //     slide.addEventListener("mouseenter", () => {
    //         slide.style.cursor = 'grab';
    //     });
    // });

    //     // Slide Cursur In mouseleave = grab
    // slides.forEach((slide) => {
    //     slide.addEventListener("mouseleave", () => {
    //         slide.style.cursor = 'default';
    //     });
    // });
    // slides.forEach((slide, index) => {
    //     slide.style.left = `${index * 100}%`;
    //     slide.addEventListener("mouseup", sliderBackground());
    // });
//==========================================================================
// Loading Page Animation
// Access Loading Div
const loading = document.getElementById("loading");

window.onload = function () {

    if(loading.hasAttribute("id")) {

        loading.style.cssText = "visibility: hidden; opacity: 0";
    }

    // Looping For All Text Then Add It Anmation Class
    for(let i = 0; i < text.length; i++) {
        let result = text[i];

        if(!result.classList.contains("animation")) {
            // Add Anmation Class To text
            result.classList.add("animation");

        } else {
            // Remove Anmation Class From text
            result.classList.remove("animation");
        }
    };
};
//==========================================================================
// Add Dishes To Cart(icon)
const select = document.querySelector(".select");

// Access For Add Cart Btn From Parent ELement >=(Info)
const addBtn = document.querySelectorAll("#dishes .box .info .add");

// Access For Cart Btn
const cartBtn = document.querySelector("#header .icon #cart");

// Looping For All Add Btn
addBtn.forEach((add) => {
    add.addEventListener("click", () => {
    // getAttrebute data-num From Cart Btn || 0
        let increases = Number(cartBtn.getAttribute("data-num") || 0);

        // setAttrebute (data-num, value => add + 1)
        cartBtn.setAttribute("data-num", increases + 1);

        // Add Class Zero To Crt Btn
        cartBtn.classList.add("zero");
        
        // Access All Dishes Box From Add Btn Child
        let box = add.parentElement.parentElement;

        // Cloned Dishes Box
        clone = box.cloneNode(true);

        // Remove First And Last Child ELement From Dishes Clone
        clone.firstElementChild.remove();
        clone.lastElementChild.remove();

        // Access Rate Div From Last Element Child Then Remove Rate Div
        clone.firstElementChild.
        nextElementSibling.
        lastElementChild.
        previousElementSibling.remove();

        // // Access Btn Child > Clone Then Convert textContent
        clone.firstElementChild.
        nextElementSibling.
        lastElementChild.innerHTML = "Buy Now";

        // Add Clone Dishes Box To Select Div
        select.appendChild(clone);

    });
});


// Open Select Div When Click To Cart Btn
cartBtn.addEventListener('click', () => {
    // Add Open Class To Select Div
    select.classList.add("show-cart");

    // Create Overlay
    overlay = document.createElement("div");
    overlay.className = "overlay";

    // Append Close Btn To Overlay Div
    overlay.appendChild(close);

    // Append overlay To Body
    document.body.appendChild(overlay);

    // Add Open Class To overlay Div
    overlay.classList.add("open");
});


// Access For Close Btn Child(Select)
const close = document.getElementsByClassName("close")[0];
close.addEventListener("click", () => {
    // Remove Open Class From Select Div
    select.classList.remove("show-cart");

    // Remove Open Class From overlay Div
    overlay.classList.remove("open");

});
//==========================================================================