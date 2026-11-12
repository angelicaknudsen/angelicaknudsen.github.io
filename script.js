// function comparator(a, b) {
//     if (a.dataset.projectindex < b.dataset.projectindex)
//         return 1;
//     if (a.dataset.projectindex > b.dataset.projectindex)
//         return -1;
//     return 0;
// }

// function SortData() {
//     var indexes = document.querySelectorAll("[data-projectIndex]");
//     var indexesArray = Array.from(indexes);
//     console.log(indexesArray)
//     let sorted = indexesArray.sort(comparator);
//     sorted.forEach(e =>
//         document.querySelector("#projectGallery").appendChild(e));
// }

// SortData()

// working on menu button

const navlinks = document.getElementById("menusublinks");
const navlinksholder = document.getElementById("menusublinkswrapper")
const hamburgerbutton = document.getElementById("hamburgerbutton")
const btn = document.getElementById("expand-menu");

const mediaQuery = 'screen and (max-width: 768px)';

const mql = window.matchMedia(mediaQuery);

// hide menu

function hideMenu() {
    navlinksholder.style.display = "none";
    navlinksholder.style.borderTop = "none";
    hamburgerbutton.style.background = "none";

    document.getElementById("expand-menu").setAttribute("aria-expanded", "false");
}

function showMenu() {
    navlinksholder.style.display = "block";
    navlinksholder.style.height = "auto";
    navlinks.style.transform = "translate(0px, 0px)";
    navlinksholder.style.borderTop = "2px solid rgb(129, 114, 101)";
    hamburgerbutton.style.background = "#2c2c2c";

    document.getElementById("expand-menu").setAttribute("aria-expanded", "true");
}

const mediaChanged = (e) => {
    // reset whenever screen changes form
    document.getElementById("expand-menu").setAttribute("aria-expanded", "false");

    if (e.matches) {
        // small screen
        navlinksholder.style.display = "none";
        // console.log("small screen");
    } else {
        navlinksholder.style.display = "block";
        navlinks.style.transform = "translate(0px, 0px)";
        navlinksholder.style.height = "auto";
        navlinksholder.style.borderTop = "none";
        hamburgerbutton.style.background = "none";
        // console.log("big screen");
    }
}

mql.addEventListener('change', mediaChanged);

// navlinksholder.style.background = "red";

// if (smallScreen == "true") {
//     btn.addEventListener("click", menuClick());
// }




// want to close menu when escape key is pressed

function escKeyDown(e) {
    if (e.keyCode == "27") {
        hideMenu();
    }
}

document.addEventListener("keydown", (event) => {
    if (event.keyCode == 27) {
        hideMenu();
    }
});

// want to close menu when user clicks outside menu AND menu button

const onClickOutside = (element, callback) => {
    document.addEventListener('click', e => {
        if ((!element.contains(e.target)) && (!btn.contains(e.target))) {
            if (btn.getAttribute("aria-expanded") == "true") {
                callback();
                console.log("Clicked");
            }
        }
    });
};

onClickOutside(navlinksholder, hideMenu);

// toggles menu between on and off
function menuClick() {
    var x = btn.getAttribute("aria-expanded");

    if (x == "true") {
        // hide menu

        hideMenu();

    } else {
        // expand menu

        showMenu();

        //         window.setTimeout(function() {
        //   document.getElementById('fade3').className += ' fade-in'
        // }, 50)

    }
}

btn.addEventListener("click", menuClick);


