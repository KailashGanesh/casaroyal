const scrollOffset = 100;
 
const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (element, offset = 0) => {
  const elementTop = element.getBoundingClientRect().top;
 
  return (
    elementTop <= 
    ((window.innerHeight || document.documentElement.clientHeight) - offset)
  );
};
 
const displayScrollElement = (element) => {
  element.classList.add('scrolled');
}
 
const hideScrollElement = (element) => {
  element.classList.remove('scrolled');
}
 
const handleScrollAnimation = () => {

    for (let i = 0; i < scrollElements.length; i++){
        if (elementInView(scrollElements[i], scrollOffset)) {
            displayScrollElement(scrollElements[i]);
        } else {
            hideScrollElement(scrollElements[i]);
        }
    }
}
 
window.addEventListener('scroll', () => {
  handleScrollAnimation();
})