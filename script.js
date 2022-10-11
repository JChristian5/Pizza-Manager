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
    if(toppingsName.value === '' || toppingsName.value >= 0 || toppingsName.value <= 0 || toppingsNumber.value < 1) {
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
        let changedName = prompt('What would you like to rename your topping to?');
        if(changedName === '' || changedName >= 0 || changedName <= 0) {
            let changedName = prompt('Try again, name cannot be blank or a number');
        }
        let changedNumber = prompt('How many of that topping do you have?');
        // if(changedNumber < 1) {
        //     let changedNumber = prompt ('Try again, please enter a valid number');
        // } Fix tomorrow
        boxTopping.innerText = `${changedName}: ${changedNumber}`;
        boxTopping.appendChild(editButton);
        boxTopping.appendChild(deleteButton);
    })
});

