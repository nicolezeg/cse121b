/* Declare and initialize global variables */
const makeupProductsElement = document.querySelector('#Makeup');
let makeupList = [];

/* async displayDogs Function */

const displayMakeup = (makeupProducts) => {

    makeupProducts.forEach(makeup => {
        let article = document.createElement('article');
        makeupProductsElement.appendChild(article);

        let h3 = document.createElement('h3');
        h3.textContent = makeup.name;
        article.appendChild(h3);

        const p2 = document.createElement('p');
        p2.textContent = `Price: ${makeup.price}`;
        article.appendChild(p2);

        let img = document.createElement('img');
        img.setAttribute('src', makeup.image_link);
        img.setAttribute('alt', makeup.name);
        article.appendChild(img);

        makeupProductsElement.appendChild(article);

    });
};

/* async getMakeup Function using fetch()*/
const getMakeup = async () => {
    const response = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline', {
        referrerPolicy: "unsafe-url"   
    });
    makeupList = await response.json();
    displayMakeup(makeupList);
}

getMakeup();

/* reset Function */

function reset() {
    const articles = makeupProductsElement.querySelectorAll('article');
    articles.forEach(article => {
        makeupProductsElement.removeChild(article);
    });
}


/* filterMakeupProducts Function */
function filterMakeupProducts(makeupProducts) {
    reset();
    let filter = document.querySelector('#filtered').value;

    console.log(filter)

    switch (filter) {    
        case 'blush':
            displayMakeup(makeupProducts.filter(makeup => makeup.product_type.includes('blush')));
            console.log('Blush filter applied')
            break;
        case 'mascara':
            displayMakeup(makeupProducts.filter(makeup => makeup.product_type.includes('mascara')));
            console.log('Mascara filter applied')
            break;
        case 'foundation':
            displayMakeup(makeupProducts.filter(makeup => makeup.product_type.includes('foundation')));
            console.log('Foundation filter applied')
            break;
        case 'eyeshadow':
            displayMakeup(makeupProducts.filter(makeup => makeup.product_type.includes('eyeshadow')));
            console.log('Eyeshadow filter applied')
            break;  
        case 'eyeliner':
            displayMakeup(makeupProducts.filter(makeup => makeup.product_type.includes('eyeliner')));
            console.log('Eyeliner filter applied')
            break;
        case 'lipstick':
            displayMakeup(makeupProducts.filter(makeup => makeup.product_type.includes('lipstick')));
            console.log('Lipstick filter applied')
            break;         
        case 'lip_liner':
            displayMakeup(makeupProducts.filter(makeup => makeup.product_type.includes('lip_liner')));
            console.log('Lip liner filter applied')
            break;
        case 'nail_polish':
            displayMakeup(makeupProducts.filter(makeup => makeup.product_type.includes('nail_polish')));
            console.log('Nail polish filter applied')
            break;
        case 'low_price':

            const lowerPricedMakeup = makeupProducts.filter(makeup => makeup.price < 6);
            displayMakeup(lowerPricedMakeup);
            console.log(lowerPricedMakeup);
            break;
        case 'high_price':

            const higherPricedMakeup = makeupProducts.filter(makeup => makeup.price > 10 );
            displayMakeup(higherPricedMakeup);
            console.log(higherPricedMakeup);
            break;
        default: 'all'
            displayMakeup(makeupProducts);
            break;
    }
}

/* Event Listener */
document.querySelector('#filtered').addEventListener('change', () => {filterMakeupProducts(makeupList)});
