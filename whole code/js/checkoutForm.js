import '../styles/checkoutForm.css';

// close and open form
let closeCheckoutBtn = document.querySelector('#closeCheckoutForm');
let modal = document.querySelector('.checkout');
let checkoutBtn = document.getElementById('checkout-btn');
closeCheckoutBtn.addEventListener('click', function(){
    modal.style.display = 'none';
});
checkoutBtn.addEventListener('click',function(){
    modal.style.display = 'flex';
    modal.querySelector('.checkout__content').classList.add('animate__animated');
    modal.querySelector('.checkout__content').classList.add('animate__fadeIn');
});
let resetBtn = document.querySelector('.checkout__reset-btn');
resetBtn.addEventListener('click', function(){
    modal.style.display = 'none';
});


let form = document.querySelector('.checkout-form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    modal.style.display = 'none';
    clearFormFields();
    setTimeout(function() {
        secondModal.style.display = 'flex';
        secondModal.querySelector('.second-modal__wrapper').classList.add('animate__animated');
        secondModal.querySelector('.second-modal__wrapper').classList.add('animate__backInDown');
    }, 500);
});

let closeSecondModalBtn = document.querySelector('#closeSecondModal');
let secondModal = document.querySelector('.second-modal');
closeSecondModalBtn.addEventListener('click', function(){
    secondModal.style.display = 'none';
});

function clearFormFields() {
    const formFields = document.querySelectorAll('.checkout input');
    const radioButtons = document.querySelectorAll('.form__input');
    radioButtons.forEach(button => {
        button.checked = false;
      });
    formFields.forEach(field => {
        field.value = '';
    });
}