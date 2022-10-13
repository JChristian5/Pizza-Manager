// Pizza Making
// Add temp ingredients for now

const pizzasForm = document.querySelector('#pizzasform');
const pepperoni = document.querySelector('#pepperoni');
const ham = document.querySelector('#ham');
const bacon = document.querySelector('#bacon');
const jalapenos = document.querySelector('#jalapenos')
const pineapple = document.querySelector('#pineapple');

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
            toppingsListBox.innerText = `${ingredient.name}`;
            pizzaList.appendChild(toppingsListBox);
        }
    });
});