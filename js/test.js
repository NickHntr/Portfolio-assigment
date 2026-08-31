let point = document.querySelectorAll('.point');
let imageSlider = document.querySelectorAll('.imageSlider');
let leftButton = document.getElementById('leftButton');
let rightButton = document.getElementById('rightButton');

point[0].classList.add('activeImage');
imageSlider[0].classList.add('activeImage');

let counter = 0;

for(let i = 0; i < point.length; i++){
    point[i].addEventListener('click',()=>{
        for(let k = 0; k < imageSlider.length; k++){
            point[k].classList.remove('activeImage');
            imageSlider[k].classList.remove('activeImage');
        }
        counter = i;
        imageSlider[counter].classList.add('activeImage');
        point[counter].classList.add('activeImage');
    })
}

leftButton.addEventListener('click',()=>{
    for(let k = 0; k < imageSlider.length; k++){
        point[k].classList.remove('activeImage');
        imageSlider[k].classList.remove('activeImage');
    }
    counter--;
    if(counter < 0){
        counter = imageSlider.length - 1;
    }

    imageSlider[counter].classList.add('activeImage');
    point[counter].classList.add('activeImage');
}) 

rightButton.addEventListener('click',()=>{
    for(let k = 0; k < imageSlider.length; k++){
        point[k].classList.remove('activeImage');
        imageSlider[k].classList.remove('activeImage');
    }
    counter++;
    if(counter >= imageSlider.length){
        counter = 0;
    }

    imageSlider[counter].classList.add('activeImage');
    point[counter].classList.add('activeImage');
}) 


function slowSlider(){
   
        for (let k = 0; k < imageSlider.length; k++) {
            point[k].classList.remove('activeImage');
            imageSlider[k].classList.remove('activeImage');
        }
        counter++;
        if (counter >= imageSlider.length) {
            counter = 0;
        }

        imageSlider[counter].classList.add('activeImage');
        point[counter].classList.add('activeImage');
    
}

let seconds = 1000 * 5;
let timerImage = setInterval(()=>slowSlider(), seconds);


let blockSlider = document.getElementById('test');
blockSlider.addEventListener('mouseover', () => {
    clearInterval(timerImage);
})

blockSlider.addEventListener('mouseleave', () => {
    timerImage = setInterval(() => slowSlider(), seconds);
})


const contactForm = document.querySelector('.form');
const nameInput = document.getElementById('yourname');
const messageInput = document.getElementById('yourmessage');
const nameError = document.getElementById('nameError');
const messageError = document.getElementById('messageError');

function validateName() {
    const value = nameInput.value.trim();
    const isValid = value.length > 0;

    nameInput.setAttribute('aria-invalid', String(!isValid));
    nameError.textContent = isValid ? '' : 'Please enter your name.';

    return isValid;
}

function validateMessage() {
    const value = messageInput.value.trim();
    const isValid = value.length > 0;

    messageInput.setAttribute('aria-invalid', String(!isValid));
    messageError.textContent = isValid ? '' : 'Please enter a message.';

    return isValid;
}

nameInput.addEventListener('input', validateName);
messageInput.addEventListener('input', validateMessage);

contactForm.addEventListener('submit', function (event) {
    const isNameValid = validateName();
    const isMessageValid = validateMessage();

    if (!isNameValid || !isMessageValid) {
        event.preventDefault();
    }
});

contactForm.addEventListener('reset', function () {
    nameInput.setAttribute('aria-invalid', 'false');
    messageInput.setAttribute('aria-invalid', 'false');
    nameError.textContent = '';
    messageError.textContent = '';
});