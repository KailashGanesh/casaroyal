
// == mobile nav ==

const hamburger = document.getElementById("hamburger");
const header = document.getElementById("header");

hamburger.addEventListener('click', () => {
    header.classList.toggle('responsive')
    // toggleNav(true)
})

function toggleNav(open){
    mobileMenu.classList.toggle('overlay__nav--active');
    toggleScroll(allowScroll = open ? false:true);
}

// function to prevent background scrolling
function toggleScroll(allowScroll){
    document.body.style.overflow = allowScroll ? 'scroll' : 'hidden';
    // document.body.classList.toggle('no-scroll');
    document.body.scroll = allowScroll ? 'yes':'no';
}

// drop down

const dropDownLinks = document.getElementsByClassName('dropdown__link');

for(let i = 0; i < dropDownLinks.length; i++){
    dropDownLinks[i].addEventListener('click', () => {
       dropDownLinks[i].classList.toggle('dropdown__active');
    })
}