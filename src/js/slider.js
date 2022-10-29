const quote = document.getElementById("quote");
const authorImage = document.getElementById("authorImage");
const authorName = document.getElementById("authorName");
const authorLocation = document.getElementById("authorLocation");
const backBtn = document.getElementById("backBtn");
const forwardBtn = document.getElementById("forwardBtn");


const list = {
    1:{
        'quote':'A man cannot build a reputation on what he is going to do.',
        'image':'dist/images/henry-ford.webp',
        'name':'Henry Ford',
        'location':'Michigan',
    },
    2:{
        'quote':'The reason we struggle with insecurity is because we compare our behind-the-scenes with everyone else’s highlight reel.',
        'image':'dist/images/steven-furtick.webp',
        'name':'Steven Furtick',
        'location':'Elevation Church',
    },
    3:{
        'quote':"No man ever steps in the same river twice, for it's not the same river and he's not the same man.",
        'image':'dist/images/Heraclito.webp',
        'name':'Heraclitus',
        'location':'Ephesus - Ancient Greece',
    },
}

let index = 1;

setContent();

function setContent(){
    quote.innerText = list[index]['quote'];
    authorImage.src = list[index]['image'];
    authorName.innerText = list[index]['name'];
    authorLocation.innerText = list[index]['location'];
    setOpacity('1');
}

function setOpacity(input){
    quote.style.opacity = input;
    authorImage.style.opacity = input;
    authorName.style.opacity = input;
    authorLocation.style.opacity = input;
}


forwardBtn.addEventListener('click', () => {

    if(index == 3){
        index = 1;
    }else{
        index += 1;
    }

    setOpacity('0');
    setTimeout( setContent,300);
});

backBtn.addEventListener('click', () => {

    if(index == 1){
        index = 3;
    }else{
        index -= 1;
    }

    setOpacity('0');
    setTimeout(setContent,300);

});