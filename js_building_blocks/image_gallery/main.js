const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg']

/* Declaring the alternative text for each image file */
const imageText = {
    'pic1.jpg': 'eye',
    'pic2.jpg': 'sea',
    'pic3.jpg': 'flowers',
    'pic4.jpg': 'egypt',
    'pic5.jpg': 'butterfly'
}

/* Looping through images */

for(const image of images){


const newImage = document.createElement('img');
newImage.setAttribute('src', `images/${image}`);
newImage.setAttribute('alt', `${imageText[image]}`);
thumbBar.appendChild(newImage);
}

const thumbBarImages = document.querySelector('.thumb-bar').children
for(const img of thumbBarImages){
    const copyImg = img
    img.addEventListener('click', (e)=>{
        displayedImage.src=e.target.src
        displayedImage.alt = e.target.alt
    })
}
/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', ()=>{
    if(overlay.style.backgroundColor == 'rgba(0, 0, 0, 0)'){
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
        btn.textContent = 'Ligthen'
    }else{
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)'
        btn.textContent = 'Darken'
    }
})