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
    const toppingsListBox = document.createElement('div');
    toppingsListBox.classList.add('mb-2');
    toppingsListBox.classList.add('border');
    let ul = document.createElement('ul');
    ul.innerText = `Pizza Toppings`;

    const editButton = document.createElement('button');
    editButton.classList.add('btn', 'btn-outline-primary');
    editButton.innerText = 'Edit';

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('btn', 'btn-outline-danger');
    deleteButton.innerText = 'Delete';

    ingredientArray.forEach((ingredient) => {
        if(ingredient.checked === true) {
            console.log(ingredient.name);
            ingredient.value -= 1;
            
            const li = document.createElement('li');
            li.innerText = `${ingredient.name}`;
            pizzaList.appendChild(toppingsListBox);
            toppingsListBox.appendChild(ul);
            ul.appendChild(li);
            toppingsListBox.appendChild(editButton);
            toppingsListBox.appendChild(deleteButton);

            pepperoniName.innerText = `Pepperoni: ${pepperoni.value}`;
            hamName.innerText = `Ham: ${ham.value}`;
            baconName.innerText = `Bacon: ${bacon.value}`;
            jalapenosName.innerText = `Jalapenos: ${jalapenos.value}`;
            pineappleName.innerText = `Pineapple: ${pineapple.value}`;
            if(ingredient.value <= 0) {
                ingredient.disabled = true;
                ingredient.checked = false;
            }
            ingredient.checked = false;
        }
    });
    //Difficulty adding ingredients back to the checkbox value, fix later
    deleteButton.addEventListener('click', () => {
        pizzaList.removeChild(toppingsListBox);
    });
});

// Difficulty having editButton add/remove toppings
// Difficulty not allowing user to enter duplicate pizza