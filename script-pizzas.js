// Pizza Making

const toppings = JSON.parse(localStorage.getItem('toppings')) || [];
const savedPizzas = JSON.parse(localStorage.getItem('pizzas')) || [];

const pizzasForm = document.querySelector('#pizzasform');
const ingredientsList = document.querySelector('#ingredientslist');
const checkboxContainer = document.querySelector('#checkboxcontainer');

const submitPizza = document.querySelector('#submitpizza');

pizzasForm.addEventListener('submit', (e) => {
    e.preventDefault();
});

// let ingredientArray = [pepperoni, ham, bacon, jalapenos, pineapple];

const pizzaList = document.querySelector('#pizzalist');

function displayPizza(pizzaObject) {
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

    pizzaObject.toppings.forEach((topping) => {
        const li = document.createElement('li');

        li.innerText = topping;

        ul.appendChild(li);
    });

    toppingsListBox.appendChild(ul);
    toppingsListBox.appendChild(editButton);
    toppingsListBox.appendChild(deleteButton);

    pizzaList.appendChild(toppingsListBox);

    deleteButton.addEventListener('click', () => {
        let pizzas = JSON.parse(localStorage.getItem('pizzas')) || [];

        pizzaObject.toppings.forEach((topping) => {
            const toppingObject = toppings.find(
                toppingObject => toppingObject.name === topping
            );
            toppingObject.amount++;
            
            const ingredientText = document.querySelector(`#${topping}-ingredient`);
            ingredientText.innerText = `${toppingObject.name}: ${toppingObject.amount}`;
        });

        pizzas = pizzas.filter(
            pizza => JSON.stringify(pizza.toppings) !==
            JSON.stringify(pizzaObject.toppings)
        );
        localStorage.setItem('pizzas', JSON.stringify(pizzas));

        localStorage.setItem('toppings',JSON.stringify(toppings));
        pizzaList.removeChild(toppingsListBox);
    });
}

savedPizzas.forEach((pizza) => {
    displayPizza(pizza);
});

toppings.forEach(topping =>
    {
        //ingredient list first
        const li = document.createElement('li');
        li.id = `${topping.name}-ingredient`;
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

submitPizza.addEventListener('click', () => {
    const pizzaToppingsArray = [];
    //Create storage for pizzas
    const pizzaObject = {
        toppings: pizzaToppingsArray
    };

    const checkedIngredients = document.querySelectorAll('#checkboxcontainer input:checked');
    checkedIngredients.forEach((ingredient) => {
        const li = document.createElement('li');
        li.innerText = ingredient.id;
        pizzaToppingsArray.push(ingredient.id);
        const ul = document.createElement('ul');
        ul.appendChild(li);

        const toppingObject = toppings.find(
            topping => topping.name === ingredient.id
        );

        toppingObject.amount--;
        const ingredientText = document.querySelector(`#${ingredient.id}-ingredient`);

        ingredientText.innerText = `${toppingObject.name}: ${toppingObject.amount}`;
        ingredient.checked = false;
    });

    //locate and push pizza to localstorage
    let pizzas = JSON.parse(localStorage.getItem('pizzas')) || [];
    pizzas.push(pizzaObject);
    localStorage.setItem('pizzas', JSON.stringify(pizzas));

    localStorage.setItem('toppings', JSON.stringify(toppings));
    displayPizza(pizzaObject);
});

// Difficulty having editButton add/remove toppings
// Difficulty not allowing user to enter duplicate pizza