const scrollOffset=100,scrollElements=document.querySelectorAll(".js-scroll"),elementInView=(e,t=0)=>e.getBoundingClientRect().top<=(window.innerHeight||document.documentElement.clientHeight)-t,displayScrollElement=e=>{e.classList.add("scrolled")},hideScrollElement=e=>{e.classList.remove("scrolled")},handleScrollAnimation=()=>{for(let e=0;e<scrollElements.length;e++)elementInView(scrollElements[e],100)?scrollElements[e].classList.add("scrolled"):hideScrollElement(scrollElements[e])};window.addEventListener("scroll",(()=>{handleScrollAnimation()}));const hamburger=document.getElementById("hamburger"),header=document.getElementById("header");function toggleNav(e){mobileMenu.classList.toggle("overlay__nav--active"),toggleScroll(allowScroll=!e)}function toggleScroll(e){document.body.style.overflow=e?"scroll":"hidden",document.body.scroll=e?"yes":"no"}hamburger.addEventListener("click",(()=>{header.classList.toggle("responsive")}));const dropDownLinks=document.getElementsByClassName("dropdown__link");for(let e=0;e<dropDownLinks.length;e++)dropDownLinks[e].addEventListener("click",(()=>{dropDownLinks[e].classList.toggle("dropdown__active")}));const quote=document.getElementById("quote"),authorImage=document.getElementById("authorImage"),authorName=document.getElementById("authorName"),authorLocation=document.getElementById("authorLocation"),backBtn=document.getElementById("backBtn"),forwardBtn=document.getElementById("forwardBtn"),list={1:{quote:"A man cannot build a reputation on what he is going to do.",image:"dist/images/henry-ford.webp",name:"Henry Ford",location:"Michigan"},2:{quote:"The reason we struggle with insecurity is because we compare our behind-the-scenes with everyone else’s highlight reel.",image:"dist/images/steven-furtick.webp",name:"Steven Furtick",location:"Elevation Church"},3:{quote:"No man ever steps in the same river twice, for it's not the same river and he's not the same man.",image:"dist/images/Heraclito.webp",name:"Heraclitus",location:"Ephesus - Ancient Greece"}};let index=1;function setContent(){quote.innerText=list[index].quote,authorImage.src=list[index].image,authorName.innerText=list[index].name,authorLocation.innerText=list[index].location,setOpacity("1")}function setOpacity(e){quote.style.opacity=e,authorImage.style.opacity=e,authorName.style.opacity=e,authorLocation.style.opacity=e}setContent(),forwardBtn.addEventListener("click",(()=>{3==index?index=1:index+=1,setOpacity("0"),setTimeout(setContent,500)})),backBtn.addEventListener("click",(()=>{1==index?index=3:index-=1,setOpacity("0"),setTimeout(setContent,500)}));
//# sourceMappingURL=all.js.map