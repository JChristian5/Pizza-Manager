const toppingsForm = document.querySelector('#toppingsform');
const toppingsName = document.querySelector('#toppingsname');
const toppingsNumber = document.querySelector('#toppingsnumber');
const submitToppings = document.querySelector('#submittoppings');

const submitList = document.querySelector('#toppingslist');




toppingsForm.addEventListener('submit', (e) => {
    e.preventDefault();
});

submitToppings.addEventListener('click', () => {
    const boxTopping = document.createElement('div');
    let name = toppingsName.value;
    let number = toppingsNumber.value;
    if(toppingsName.value === '' || toppingsNumber.value < 1) {
        alert('Error! Make sure you entered a valid name for the toppings or entered a number larger than 0.');
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
        toppingsName.value = prompt('What would you like to rename your topping to?');
        toppingsNumber.value = prompt('How many of that topping do you have?');
        boxTopping.innerText = `${toppingsName.value}: ${toppingsNumber.value}`;
        boxTopping.appendChild(editButton);
        boxTopping.appendChild(deleteButton);
    })
});

