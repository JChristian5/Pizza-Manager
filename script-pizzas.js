// Pizza Making
// Add temp ingredients for now

const pizzasForm = document.querySelector('#pizzasform');
const pepperoni = document.querySelector('#pepperoni');
const ham = document.querySelector('#ham');
const bacon = document.querySelector('#bacon');
    
const jalapenos = document.querySelector('#jalapenos')
const pineapple = document.querySelector('#pineapple');

const pepperoniName = document.querySelector('#pepperoniname');
const hamName = document.querySelector('#hamname');
const baconName = document.querySelector('#baconname');
const jalapenosName = document.querySelector('#jalapenosname');
const pineappleName = document.querySelector('#pineapplename');

pepperoniName.innerText = `Pepperoni: ${pepperoni.value}`;
hamName.innerText = `Ham: ${ham.value}`;
baconName.innerText = `Bacon: ${bacon.value}`;
jalapenosName.innerText = `Jalapenos: ${jalapenos.value}`;
pineappleName.innerText = `Pineapple: ${pineapple.value}`;

const submitPizza = document.querySelector('#submitpizza')

pizzasForm.addEventListener('submit', (e) => {
    e.preventDefault();
});

let ingredientArray = [pepperoni, ham, bacon, jalapenos, pineapple];

const pizzaList = document.querySelector('#pizzalist');

submitPizza.addEventListener('click', () => {
    ingredientArray.forEach((ingredient) => {
        if(ingredient.checked === true) {
            console.log(ingredient.name);
            ingredient.value -= 1;
            
            const toppingsListBox = document.createElement('div');
            toppingsListBox.classList.add('mb-2');
            toppingsListBox.classList.add('border');
            toppingsListBox.innerText = `Pizza ${ingredient.name}`;
            pizzaList.appendChild(toppingsListBox);

            pepperoniName.innerText = `Pepperoni: ${pepperoni.value}`;
            hamName.innerText = `Ham: ${ham.value}`;
            baconName.innerText = `Bacon: ${bacon.value}`;
            jalapenosName.innerText = `Jalapenos: ${jalapenos.value}`;
            pineappleName.innerText = `Pineapple: ${pineapple.value}`;
        }
    });
});