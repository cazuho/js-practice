const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const altTexts = { 'pic1.jpg': '人の目', 'pic2.jpg': '岩場', 'pic3.jpg': '紫と白の花々', 'pic4.jpg': 'エジプトの壁画', 'pic5.jpg': '蝶' };

/* Looping through images */
for(const image of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    newImage.setAttribute('alt', altTexts[image]);

    newImage.onclick = () => {
        displayedImage.setAttribute('src', newImage.src);
        displayedImage.setAttribute('alt', newImage.alt);
    };

    thumbBar.appendChild(newImage);
}

/* Wiring up the Darken/Lighten button */
btn.onclick = () => {
    const className = btn.getAttribute('class');
    if(className === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgb(0 0 0 / 0%)';
    }
}