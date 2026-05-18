// Pizza Making
// Add temp ingredients for now

const toppings = JSON.parse(localStorage.getItem('toppings')) || [];

const pizzasForm = document.querySelector('#pizzasform');
const ingredientsList = document.querySelector('#ingredientslist');
const checkboxContainer = document.querySelector('#checkboxcontainer');

toppings.forEach(topping =>
    {
        //ingredient list first
        const li = document.createElement('li');
        li.innerText = `${topping.name}: ${topping.amount}`;

        ingredientsList.appendChild(li);

        //next, checkbox container
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = topping.name;

        const label = document.createElement('label');
        label.htmlFor = topping.name;
        label.innerText = topping.name;

        const toppingCheckboxContainer = document.createElement('div');
        toppingCheckboxContainer.appendChild(checkbox);
        toppingCheckboxContainer.appendChild(label);
        checkboxContainer.appendChild(toppingCheckboxContainer);
    });

const submitPizza = document.querySelector('#submitpizza');

pizzasForm.addEventListener('submit', (e) => {
    e.preventDefault();
});

// let ingredientArray = [pepperoni, ham, bacon, jalapenos, pineapple];

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

    const checkedIngredients = document.querySelectorAll('#checkboxcontainer input:checked');
    checkedIngredients.forEach((ingredient) => {
        const li = document.createElement('li');

        li.innerText = ingredient.id;

        ul.appendChild(li);

        const toppingObject = toppings.find(
            topping => topping.name === ingredient.id
        );
        toppingObject.amount--;

        ingredient.checked = false;
    });

    pizzaList.appendChild(toppingsListBox);
    toppingsListBox.appendChild(ul);
    toppingsListBox.appendChild(editButton);
    toppingsListBox.appendChild(deleteButton);
    // ingredientArray.forEach((ingredient) => {
    //     if(ingredient.checked === true) {
    //         console.log(ingredient.name);
    //         ingredient.value -= 1;
            
    //         const li = document.createElement('li');
    //         li.innerText = `${ingredient.name}`;
    //         pizzaList.appendChild(toppingsListBox);
    //         toppingsListBox.appendChild(ul);
    //         ul.appendChild(li);
    //         toppingsListBox.appendChild(editButton);
    //         toppingsListBox.appendChild(deleteButton);

    //         // pepperoniName.innerText = `Pepperoni: ${pepperoni.value}`;
    //         // hamName.innerText = `Ham: ${ham.value}`;
    //         // baconName.innerText = `Bacon: ${bacon.value}`;
    //         // jalapenosName.innerText = `Jalapenos: ${jalapenos.value}`;
    //         // pineappleName.innerText = `Pineapple: ${pineapple.value}`;
    //         if(ingredient.value <= 0) {
    //             ingredient.disabled = true;
    //             ingredient.checked = false;
    //         }
    //         ingredient.checked = false;
    //     }
    // });
    //Difficulty adding ingredients back to the checkbox value, fix later
    deleteButton.addEventListener('click', () => {
        pizzaList.removeChild(toppingsListBox);
    });
});

// Difficulty having editButton add/remove toppings
// Difficulty not allowing user to enter duplicate pizza