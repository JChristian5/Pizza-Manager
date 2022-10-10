const toppingsForm = document.querySelector('#toppingsform');
const toppingsName = document.querySelector('#toppingsname');
const toppingsNumber = document.querySelector('#toppingsnumber');
const submitToppings = document.querySelector('#submittoppings');

const submitList = document.querySelector('#toppingslist');

toppingsForm.addEventListener('submit', (e) => {
    e.preventDefault();
});

submitToppings.addEventListener('click', () => {
    boxTopping = document.createElement('div');
    let name = toppingsName.value;
    let number = toppingsNumber.value;
    boxTopping.innerHTML = `${name}: ${number}`;
    submitList.appendChild(boxTopping);

    const editButton = document.createElement('button');
    editButton.classList.add('btn', 'btn-outline-primary');
    editButton.innerHTML = 'Edit';
    boxTopping.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('btn', 'btn-outline-danger');
    deleteButton.innerHTML = 'Delete';
    boxTopping.appendChild(deleteButton);
})