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
    // Add character check for toppingsName so no numbers can be added to the name
    if(toppingsName.value === '' || toppingsNumber.value < 1) {
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
        while(changedName === '' || changedName >= 0 || changedName <= 0) {
            changedName = prompt('Try again, name cannot be blank or a number');
        }
        let changedNumber = prompt('How many of that topping do you have?');
        while(changedNumber < 1 || /^[a-zA-Z]+$/.test(changedNumber) === true || /^[0-9]+$/.test(changedNumber) === false) {
             changedNumber = prompt ('Try again, please enter a valid number');
        }
        boxTopping.innerText = `${changedName}: ${changedNumber}`;
        boxTopping.appendChild(editButton);
        boxTopping.appendChild(deleteButton);
    })
});

