
// == mobile nav ==

const mobileMenu = document.getElementById("mobile-menu");
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

// == sticky header ==

let header = document.getElementById("header");


document.addEventListener('scroll', (e) => {
    lastKnownScrollPosition = window.scrollY;
    if (lastKnownScrollPosition >= 100){
        header.classList.add('header--sticky');
    }else if(lastKnownScrollPosition == 0){
        header.classList.remove('header--sticky');
    }
})