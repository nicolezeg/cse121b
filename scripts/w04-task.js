/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: 'Nicole Zegarra',
    photo: 'images/profileimage.jpg',
    favoriteFoods:['Escabeche de pollo',
     'Pachamanca',
     'Hawaiian Pizza',
     'Lemon Pie',
     'Roasted chicken'
    ], 
    hobbies:['Play volleyball',
     'Watch movies', 'Listen to music'],
    placesLived: []

};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Satipo',
        length: '9 years',
}, {
        place: 'Arequipa',
        length: '6 months'
})

/* DOM Manipulation - Output */
/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.getElementById('photo').src = myProfile.photo;
document.getElementById('photo').alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobbie => {
    let li = document.createElement('li');
    li.textContent = hobbie;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */

myProfile.placesLived.forEach((place) => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
    
    let dd = document.createElement('dd');
    dd.textContent = place.length;
    
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
});
