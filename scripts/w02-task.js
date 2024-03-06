/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Nicole Zegarra';

let currentYear = '2024';

let profilePicture = 'images/profileimage.jpg'

let favFood = ['Escabeche de pollo', 'Pachamanca', 'Hawaiian pizza', 'Lemon Pie'];

let newFavFood = 'Roasted chicken';

/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');

const foodElement = document.getElementById('food');

const yearElement = document.querySelector('#year');

const imageElement = document.querySelector('img')

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;

imageElement.setAttribute('src', profilePicture);

document.getElementById('elementId');

imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */

document.getElementById('food').innerHTML = favFood.join(', ');

favFood.push(newFavFood);

foodElement.innerHTML += `<br>${favFood.join(', ')}`;

favFood.shift();

foodElement.innerHTML += `<br>${favFood.join(', ')}`;

favFood.pop();

foodElement.innerHTML += `<br>${favFood.join(', ')}`;

