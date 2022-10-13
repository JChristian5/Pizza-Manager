const toppingsForm = document.querySelector('#toppingsform');
const toppingsName = document.querySelector('#toppingsname');
const toppingsNumber = document.querySelector('#toppingsnumber');
const submitToppings = document.querySelector('#submittoppings');

const submitList = document.querySelector('#toppingslist');


toppingsForm.addEventListener('submit', (e) => {
    e.preventDefault();
});

let toppingsListArray = [];

submitToppings.addEventListener('click', () => {
    

    const boxTopping = document.createElement('div');
    let name = toppingsName.value;
    let number = toppingsNumber.value;

    let toppingExists = toppingsListArray.includes(toppingsName.value);
    if(toppingExists == true) {
        alert('Error! Topping already exists!');
        return;
    }

    toppingsListArray.push(name);

    if(toppingsName.value === '' || /^[a-zA-Z]*$/.test(toppingsName.value) === false || toppingsNumber.value < 1) {
        alert('Error! Make sure you entered a valid name for the toppings (toppings can not contain numbers) or entered a number larger than 0.');
        return;
    }

    boxTopping.innerText = `${name}: ${number}`;
    submitList.appendChild(boxTopping);
    toppingsName.value = ''; //Deletes text inside input box
    toppingsNumber.value = ''; //Deletes text inside input box

    const editButton = document.createElement('button');
    editButton.classList.add('btn', 'btn-outline-primary');
    editButton.innerText = 'Edit';
    boxTopping.appendChild(editButton);
    
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('btn', 'btn-outline-danger');
    deleteButton.innerText = 'Delete';
    boxTopping.appendChild(deleteButton); 

    deleteButton.addEventListener('click', () => {
        submitList.removeChild(boxTopping);
    });

    editButton.addEventListener ('click', () => {
        let changedName = prompt('What would you like to rename your topping to?');
        while(changedName === '' || changedName >= 0 || changedName <= 0 || /^[a-zA-Z]*$/.test(changedName) === false) {
            changedName = prompt('Try again, name cannot be blank or a number');
        }
        let changedNumber = prompt('How many of that topping do you have?');
        while(changedNumber < 1 || /^[a-zA-Z]+$/.test(changedNumber) === true || /^[0-9]+$/.test(changedNumber) === false) {
             changedNumber = prompt ('Try again, please enter a valid number');
        }
        boxTopping.innerText = `${changedName}: ${changedNumber}`;
        boxTopping.appendChild(editButton);
        boxTopping.appendChild(deleteButton);
    });
});

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

submitPizza.addEventListener('click', () => {
    if(pizzasForm.checked === true) {
        console.log('true');
    } else {
        console.log('false');
    }
})