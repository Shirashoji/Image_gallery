const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = [...Array(5).keys()].map((d) => { return "images/pic" + (d + 1) + ".jpg"; });

/* Declaring the alternative text for each image file */

/* Looping through images */

images.forEach(xxx => {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', xxx);
    newImage.setAttribute('alt', xxx);
    thumbBar.appendChild(newImage);
    newImage.addEventListener("click", () => {
        displayedImage.setAttribute('src', xxx);
    });
});

/* Wiring up the Darken/Lighten button */
btn.onclick = function () {
    if (btn.getAttribute('class') === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
}