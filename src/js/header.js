
// == mobile nav ==

const hamburger = document.getElementById("hamburger");

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
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