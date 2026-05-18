const toppingsForm = document.querySelector('#toppingsform');
const toppingsName = document.querySelector('#toppingsname');
const toppingsNumber = document.querySelector('#toppingsnumber');
const submitToppings = document.querySelector('#submittoppings');

const submitList = document.querySelector('#toppingslist');

const savedToppings = JSON.parse(localStorage.getItem('toppings')) || [];

savedToppings.forEach(topping => {
    displayToppings(topping.name, topping.amount);
});

function displayToppings(name, number) {
    const boxTopping = document.createElement('div');

    boxTopping.innerText = `${name}: ${number}`;
    
    const editButton = document.createElement('button');
    editButton.classList.add('btn', 'btn-outline-primary', 'ms-2', 'me-2');
    editButton.innerText = 'Edit';

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('btn', 'btn-outline-danger', 'ms-2');
    deleteButton.innerText = 'Delete';

    boxTopping.appendChild(editButton);
    boxTopping.appendChild(deleteButton);

    submitList.appendChild(boxTopping);

    deleteButton.addEventListener('click', () => {
        submitList.removeChild(boxTopping);

        let toppings = JSON.parse(localStorage.getItem('toppings')) || [];

        toppings = toppings.filter(
            topping => topping.name !== name
        );

        localStorage.setItem('toppings', JSON.stringify(toppings));
    });

    editButton.addEventListener ('click', () => {
        let changedName = prompt('What would you like to rename your topping to?');
        
        while(
            changedName === '' || 
            /^[a-zA-Z]*$/.test(changedName) === false
        ) {
            changedName = prompt('Try again, name cannot be blank or a number');
        }

        let changedNumber = prompt('How many of that topping do you have?');
        
        while(
            changedNumber < 1 || 
            /^[0-9]+$/.test(changedNumber) === false
        ) {
            changedNumber = prompt ('Try again, please enter a valid number');
        }

        boxTopping.innerText = `${changedName}: ${changedNumber}`;
        boxTopping.appendChild(editButton);
        boxTopping.appendChild(deleteButton);

        let toppings = JSON.parse(localStorage.getItem('toppings')) || [];

        const toppingIndex = toppings.findIndex(
            topping => topping.name === name
        );

        if (toppingIndex !== -1) {
            toppings[toppingIndex].name = changedName;
            toppings[toppingIndex].amount = Number(changedNumber);
        }

        localStorage.setItem('toppings', JSON.stringify(toppings));

        name = changedName;
        number = Number(changedNumber);
    });
}

toppingsForm.addEventListener('submit', (e) => {
    e.preventDefault();
});

submitToppings.addEventListener('click', () => {
    

    let name = toppingsName.value;
    let number = toppingsNumber.value;

    if(
        name === '' || 
        /^[a-zA-Z]*$/.test(name) === false || 
        number < 1
    ) {
        alert('Error! Make sure you entered a valid name for the toppings (toppings can not contain numbers) or entered a number larger than 0.');
        return;
    }

    let toppings = JSON.parse(localStorage.getItem('toppings')) || [];

    let toppingExists = toppings.some(
        topping => topping.name.toLowerCase() === name.toLowerCase()
    );

    if (toppingExists) {
        alert('Error! Topping already exists!');
        return;
    }

    const toppingObject = {
        name: name,
        amount: Number(number)
    };

    toppings.push(toppingObject);

    localStorage.setItem('toppings', JSON.stringify(toppings));
    
    displayToppings(name, number);

    toppingsName.value = '';
    toppings.value = '';
});