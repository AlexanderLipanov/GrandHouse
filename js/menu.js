
const px = "px";
const currentUrls = ["frame-key", "foam-key", "timber-key", "cottages-key"];

window.onload = function() {
    
maybeScroll();
}

function  maybeScroll() {
    let url = window.location;
    
    let searchitems = url.search.split("?");

    searchitems.forEach(i => {
        if(i !== "" && currentUrls.includes(i)) {
            
            let d = document.getElementById("page-scroll").scrollTop;
            let gotoBlock = document.querySelector("." + i);
            let t = gotoBlock.getBoundingClientRect().top;
            let b = document.getElementById("header");
            let h = b === undefined || b === null ? 65 : b.offsetHeight;
            const gotoBlockValue = d + t + scrollY - h + 30;
            console.log(gotoBlockValue);
            window.scrollTo({
                left: null,
                top: gotoBlockValue,
                behavior: "smooth",
            });
        }
    });
}


let burgerLinksContainer = document.getElementById("burger-links-container");
function toggleLinksContainer() {
    let burgerLinksList1 = document.getElementById("burger-links-list-1");
    let burgerLinksList2 = document.getElementById("burger-links-list-2");
    let menuLine = document.getElementById("menu-svg");
    
    if(burgerLinksContainer.clientHeight === 0) {
        if(burgerLinksContainer.clientWidth > 1280) {
        burgerLinksContainer.style.height = burgerLinksList1.clientHeight + burgerLinksList2.clientHeight + 60 + 15 + 10 + px;
        } else {
            burgerLinksContainer.style.height = burgerLinksList1.clientHeight + 60 + 15 + 10 + px;
        }
        menuLine.style.display = "block";
    } else {
        burgerLinksContainer.style.height = 0 + px;
        menuLine.style.display = "none";
    }
}

const scrollLinks = document.getElementsByName("scroll-button");

if(scrollLinks.length > 0)
{
    scrollLinks.forEach(l => {
        l.addEventListener("click", onScrollLinkClick);
    })
}

function onScrollLinkClick(e) {
    
    const menuLink = e.target;
    let d = document.getElementById("page-scroll").scrollTop;
    const gotoBlock = document.querySelector(menuLink.dataset.goto);
    let t = gotoBlock.getBoundingClientRect().top;
    let b = document.getElementById("header");
    let h = b === undefined || b === null ? 65 : b.offsetHeight;
    const gotoBlockValue = d + t + scrollY - h + 30;
    console.log(gotoBlockValue);
    window.scrollTo({
        left: null,
        top: gotoBlockValue,
        behavior: "smooth",
    });
    e.preventDefault();
}

