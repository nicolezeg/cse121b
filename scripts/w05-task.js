/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
let templeList = [];

/* async displayTemples Function */

const displayTemples = (temples) => {
    temples.forEach(temple => {
        let article = document.createElement('article');
        templesElement.appendChild(article);

        let h3 = document.createElement('h3');
        h3.textContent = temple.templeName
        article.appendChild(h3);

        let img = document.createElement('img');
        img.setAttribute('src', temple.imageUrl);
        img.setAttribute('alt', temple.location);
        article.appendChild(img);

        templesElement.appendChild(article);

    });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
    templeList = await response.json();
    displayTemples(templeList);
}

getTemples();

/* reset Function */
/*function reset() {
    templesElement.appendChild(article);

}*/

function reset() {
    const articles = templesElement.querySelectorAll('article');
    articles.forEach(article => {
        templesElement.removeChild(article);
    });
}


/* filterTemples Function */
function filterTemples(temples) {
    reset();
    let filter = document.querySelector('#filtered').value;

    switch (filter) {
        case 'utah':
            displayTemples(temples.filter(temple => temple.location.includes('Utah')));
            break;
        case 'notutah':
            displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
            break;
        case 'older':
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        default: 'all'
            displayTemples(temples);
    }
}

getTemples();

/* Event Listener */
document.querySelector('#filtered').addEventListener('change', () => {filterTemples(templeList)});
