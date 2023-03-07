
const px = "px";

let burgerLinksContainer = document.getElementById("burger-links-container");
function toggleLinksContainer() {
    let burgerLinksList1 = document.getElementById("burger-links-list-1");
    let burgerLinksList2 = document.getElementById("burger-links-list-2");

    if(burgerLinksContainer.clientHeight === 0) {
        if(burgerLinksContainer.clientWidth > 1280) {
        burgerLinksContainer.style.height = burgerLinksList1.clientHeight + burgerLinksList2.clientHeight + 60 + 15 + px;
        } else {
            burgerLinksContainer.style.height = burgerLinksList1.clientHeight + 60 + 15 + px;
        }
    } else {
        burgerLinksContainer.style.height = 0 + px;
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
    console.log("onScrollLinkClick");
    const menuLink = e.target;
    let d = document.getElementById("page-1").scrollTop;
    const gotoBlock = document.querySelector(menuLink.dataset.goto);
    let t = gotoBlock.getBoundingClientRect().top;
    let b = document.getElementById("header");
    let h = b === undefined || b === null ? 65 : b.offsetHeight;
    const gotoBlockValue = d + t + scrollY - h - 20;
    console.log(gotoBlockValue);
    window.scrollTo({
        left: null,
        top: gotoBlockValue,
        behavior: "smooth",
    });
    e.preventDefault();
    console.log("end scrolling");
}

