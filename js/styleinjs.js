const sections = document.querySelectorAll('section');
for (const section of sections) {
    section.style.border = "2px solid steelblue";
    section.style.margin = "5px";
    section.style.borderRadius = '15px';
    section.style.padding = '7px';
    section.style.backgroundColor = "lightgray"
}
// const placesContainer = document.getElementById('fruits-container');
// placesContainer.style.backgroundColor = 'green';
const placesContainer = document.getElementById('fruits-container');
//*add new class using javascript
placesContainer.classList.add('yellow-bg');

//*remove class using javascript
placesContainer.classList.remove('large-text');