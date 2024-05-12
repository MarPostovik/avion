// import $ from 'jquery';

// Bootstrap
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/style.css'
import '../styles/profile.css'
import '../styles/responsive.css'

import 'animate.css';

import heic2any from 'heic2any';

let menuBtn = document.getElementById('gamburger-menu-icon');
let bottomMenuLine = document.querySelector('.bottom-line-nav');
let nav =  document.querySelector('nav');
menuBtn.addEventListener('click', () =>{
  if(bottomMenuLine.style.display === 'flex'){
    bottomMenuLine.style.display = 'none';
    nav.classList.add('animate__fadeOutLeft');
    setTimeout(() => {
     nav.classList.remove('active');
     nav.classList.remove('animate__fadeOutLeft');
    }, 500);
    nav.classList.remove('animate__fadeInLeft');
    menuBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M14 3H2V4H14V3Z" fill="#2A254B"/>
                          <path d="M14 12H2V13H14V12Z" fill="#2A254B"/>
                          <path d="M14 6H2V7H14V6Z" fill="#2A254B"/>
                          <path d="M14 9H2V10H14V9Z" fill="#2A254B"/>
                        </svg>`
  }else{
    bottomMenuLine.style.display = 'flex';
    nav.classList.add('active');
    nav.classList.add('animate__fadeInLeft');
    menuBtn.innerHTML = '<ion-icon name="close-outline" class="close-nav"></ion-icon>'
  }
})
window.addEventListener('resize', function(){
  if(bottomMenuLine.style.display === 'flex'){
    bottomMenuLine.style.display = 'none';
    nav.classList.add('animate__fadeOutLeft');
    setTimeout(() => {
     nav.classList.remove('active');
     nav.classList.remove('animate__fadeOutLeft');
    }, 500);
    nav.classList.remove('animate__fadeInLeft');
    menuBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M14 3H2V4H14V3Z" fill="#2A254B"/>
                          <path d="M14 12H2V13H14V12Z" fill="#2A254B"/>
                          <path d="M14 6H2V7H14V6Z" fill="#2A254B"/>
                          <path d="M14 9H2V10H14V9Z" fill="#2A254B"/>
                        </svg>`
  }
})

document.addEventListener('DOMContentLoaded', function () {
  let links = document.getElementsByClassName('link-item');
  for (let i = 0; i < links.length; i++) {
      let currentLink = links[i];

      currentLink.addEventListener('click', function (event) {
          // Get the category attribute from the clicked link
          let productCategory = currentLink.getAttribute('data-category');
          let sortOption = currentLink.getAttribute('data-sort');
          // Check if the productCategory is not null or undefined
          if (productCategory !== null && productCategory !== undefined) {
              // Get the URL from the href attribute of the clicked link
              let destinationUrl = currentLink.getAttribute('href');

              // Append the category as a query parameter to the destination URL
              let urlWithQuery = destinationUrl + '?category=' + encodeURIComponent(productCategory);

              // Navigate to the destination URL with the category as a query parameter
              window.location.href = urlWithQuery;

              // Prevent the default link behavior
              event.preventDefault();
          }else if( sortOption !== null && sortOption !== undefined){
            let destinationUrl = currentLink.getAttribute('href');
            let urlWithQuery = destinationUrl + '?sortOption=' + encodeURIComponent(sortOption);
            window.location.href = urlWithQuery;
            event.preventDefault();
          }
      });
  }
});

let searchBtn = document.querySelector('.searchBtn');

searchBtn.addEventListener('click', function() {
    let input = document.getElementById('searchInput')
    let inputValue = document.getElementById('searchInput').value.toLowerCase();
    if(inputValue.trim() === ''){
      document.querySelector('.warning').style.display = 'block';
      input.style.border = '1px solid red';
    }else{
      window.location.href = '/avion/product-listing.html?search=' + inputValue;
      document.querySelector('.warning').innerHTML.style.display = 'none';
      input.style.border = 'none';
    }
});

function clearFormFields(fields) {
  const formFields = document.querySelectorAll(fields);
  formFields.forEach(field => {
      field.value = '';
  });
}

let subsribtionModal =  document.getElementById('SubsribtionModal');
let subscribtionForm = document.querySelectorAll('.subscribtionForm');

for (let i = 0; i < subscribtionForm.length; i++) {
  let close = document.getElementById('close-Subsribtion-Modal');
  subscribtionForm[i].addEventListener('submit', function(e) {
    e.preventDefault();
    clearFormFields('.sign-up-email');
    setTimeout(function() {
      subsribtionModal.style.display = 'flex';
      subsribtionModal.querySelector('.search-modal__container').classList.add('animate__animated');
      subsribtionModal.querySelector('.search-modal__container').classList.add('animate__backInDown');
    }, 500);
  });

  close.addEventListener('click', () => {
    subsribtionModal.style.display = 'none';
  });
}
const fileInput = document.getElementById('photo');
const selectedPhotoContainer = document.getElementById('selectedPhotoContainer');
const deleteButton = document.getElementById('deletePhotoButton');
const loadingMessage = document.getElementById('loadingMessage');

deleteButton.disabled = true;

fileInput.addEventListener('change', async function () {
  const file = this.files[0];

  if (file) {
    if (file.type === 'image/heic') {
      try {
        loadingMessage.innerText = 'Loading...';
        // Simulate a delay to show the loading message
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Конвертація HEIC у JPEG
        const jpegBlob = await heic2any({ blob: file });

        // Створення об'єкта Blob для нового JPEG-зображення
        const jpegFile = new File([jpegBlob], 'converted.jpg', { type: 'image/jpeg' });

        displaySelectedPhoto(jpegFile);
      } catch (error) {
        console.error('Error converting HEIC to image:', error);
        displayErrorMessage('Error converting HEIC to JPEG.');
      } finally {
        loadingMessage.innerText = '';
      }
    } else if(file.type === 'image/jpeg' || file.type === 'image/jpg' ||file.type === 'image/png'){
      // Display the selected photo for other image formats
      displaySelectedPhoto(file);
    
    } else{
      displayErrorMessage('Unsupported file format. Please choose a different image.');
      displayDefaultPhoto();
    }
    deleteButton.disabled = false;
  } else {
    // No file selected
    displayErrorMessage('Unsupported file format. Please choose a different image.');
    displayDefaultPhoto();
  }
});

function displaySelectedPhoto(file) {
  const reader = new FileReader();

  reader.onload = function (e) {
    const imageElement = document.createElement('img');
    imageElement.classList.add('selected-image');
    imageElement.src = e.target.result;
    imageElement.alt = 'Selected Photo';

    // Clear previous content
    selectedPhotoContainer.innerHTML = '';

    // Append the new image
    selectedPhotoContainer.appendChild(imageElement);
  };

  reader.readAsDataURL(file);
}

function displayErrorMessage(message) {
  // Display an error message
  loadingMessage.innerHTML = `<p class="error-message">${message}</p>`;
}
function displayDefaultPhoto() {
  const defaultImageElement = `<svg class="default-photo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c39.77 0 72 32.24 72 72S295.8 272 256 272c-39.76 0-72-32.24-72-72S216.2 128 256 128zM256 448c-52.93 0-100.9-21.53-135.7-56.29C136.5 349.9 176.5 320 224 320h64c47.54 0 87.54 29.88 103.7 71.71C356.9 426.5 308.9 448 256 448z"/></svg>`

  selectedPhotoContainer.innerHTML = '';
  selectedPhotoContainer.innerHTML = defaultImageElement;
}

function deleteSelectedPhoto(event) {
    event.preventDefault();
  
    fileInput.value = '';
    selectedFileName.textContent = '';
    selectedPhotoContainer.innerHTML = '<svg class="default-photo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c39.77 0 72 32.24 72 72S295.8 272 256 272c-39.76 0-72-32.24-72-72S216.2 128 256 128zM256 448c-52.93 0-100.9-21.53-135.7-56.29C136.5 349.9 176.5 320 224 320h64c47.54 0 87.54 29.88 103.7 71.71C356.9 426.5 308.9 448 256 448z"/></svg>';
  
    deleteButton.disabled = true;
  }
  deleteButton.addEventListener('click', deleteSelectedPhoto);


  let inputs = document.querySelectorAll('.profile__input');
  
  for(let i = 0; i < inputs.length; i++){
    inputs[i].addEventListener('focus',function(){
        inputs[i].classList.add('active');
    })
    inputs[i].addEventListener('blur',function(){
        if(inputs[i].value === ''){
          inputs[i].classList.remove('active');  
        } 
    })
  }


  let registerForm = document.getElementById('profile__registration-form');
  let profile = document.querySelector('.profile');
  function saveDataToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
  
  // Отримання даних з локального сховища
  function getDataFromLocalStorage(key) {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : null;
  }
window.addEventListener('DOMContentLoaded', function(){
    displayProfile()
    registerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    let checkBox = document.getElementById('agreement');
    let repeatPassword = document.getElementById('repeat-password');
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let photo = document.querySelector('.selected-image');
    let userInfo = {};
if(repeatPassword.value != password){
    repeatPassword.classList.add('not-valid');
    repeatPassword.parentElement.querySelector('.profile__label').innerText = "The password is wrong";
}
if(checkBox.checked && repeatPassword.value == password){
    let registered = true;
    userInfo = {
        userName: name,
        userEmail:  email,
        userPassword: password,
        registered: registered
    }
    if(photo != null || photo != undefined){
        userInfo.userPhoto = photo.src;
    }
    repeatPassword.classList.remove('not-valid');
    repeatPassword.parentElement.querySelector('.profile__label').innerText = "Repeat your password";

    saveDataToLocalStorage('userInformation', { userInfo });
    
    let SussesfulRegisterModal = document.getElementById('SussesfulRegisterModal');
    setTimeout(function() {
        SussesfulRegisterModal.style.display = 'flex';
        SussesfulRegisterModal.querySelector('.search-modal__container').classList.add('animate__animated');
        SussesfulRegisterModal.querySelector('.search-modal__container').classList.add('animate__backInDown');
      }, 500);
    let CloseSussesfulRegisterModal = document.getElementById('CloseSussesfulRegisterModal');
    CloseSussesfulRegisterModal.addEventListener('click', function(){
        SussesfulRegisterModal.style.display = 'none';
    })
    displayProfile();
    }
    });

function displayProfile(){

let profileFirst = document.getElementById('firstprofile')
let profileSecond = document.getElementById('secondprofile')
let LogOut = document.getElementById('LogOut');
let registeredProfile = JSON.parse(localStorage.getItem("userInformation")) || [];
if(registeredProfile.length != 0){
   let registered = registeredProfile.userInfo.registered; 

    if(!registered){
        profileSecond.style.display = 'none';
    }
    else{
        profileFirst.style.display = 'none';
        let userPhoto = registeredProfile.userInfo.userPhoto;
        let showedPhoto;
        if(userPhoto != null && userPhoto != undefined){
            showedPhoto = `<img  class="selected-image" src="${userPhoto}" alt="user photo">`
        }else{
            showedPhoto = '<svg class="default-photo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c39.77 0 72 32.24 72 72S295.8 272 256 272c-39.76 0-72-32.24-72-72S216.2 128 256 128zM256 448c-52.93 0-100.9-21.53-135.7-56.29C136.5 349.9 176.5 320 224 320h64c47.54 0 87.54 29.88 103.7 71.71C356.9 426.5 308.9 448 256 448z"/></svg>';
        }
        profileSecond.style.display = 'flex';
        let registeredName = document.querySelector('#registeredName');
        let registeredEmail = document.querySelector('#registeredEmail');
        let registeredPhoto = document.querySelector('#registeredPhoto');
        registeredPhoto.innerHTML = showedPhoto;
        registeredName.innerText = registeredProfile.userInfo.userName;
        registeredEmail.innerText = registeredProfile.userInfo.userEmail
        let user = document.querySelector('.user');
        user.innerHTML = showedPhoto;                       
        LogOut.addEventListener('click', () =>{
                registeredProfile.userInfo.registered = false;
                localStorage.setItem("userInformation", JSON.stringify(registeredProfile));
                profileSecond.style.display = 'none';
                profileFirst.style.display = 'flex';
                localStorage.removeItem('userInformation');
                const formFields = document.querySelectorAll('.profile__input');
                const checkboxes = document.querySelectorAll('.profile__checkbox');
                const photo = document.querySelector('#selectedPhotoContainer');
                checkboxes.forEach(button => {
                    button.checked = false;
                });
                formFields.forEach(field => {
                    field.value = '';
                });
                photo.innerHTML = '<svg class="default-photo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c39.77 0 72 32.24 72 72S295.8 272 256 272c-39.76 0-72-32.24-72-72S216.2 128 256 128zM256 448c-52.93 0-100.9-21.53-135.7-56.29C136.5 349.9 176.5 320 224 320h64c47.54 0 87.54 29.88 103.7 71.71C356.9 426.5 308.9 448 256 448z"/></svg>';
                user.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect width="16" height="16" fill="white" style="mix-blend-mode:multiply"/>
                <path d="M8 4C7.50555 4 7.0222 4.14662 6.61108 4.42133C6.19995 4.69603 5.87952 5.08648 5.6903 5.54329C5.50108 6.00011 5.45158 6.50277 5.54804 6.98773C5.6445 7.47268 5.88261 7.91814 6.23224 8.26777C6.58187 8.6174 7.02733 8.8555 7.51228 8.95196C7.99723 9.04843 8.4999 8.99892 8.95671 8.8097C9.41353 8.62048 9.80397 8.30005 10.0787 7.88893C10.3534 7.4778 10.5 6.99445 10.5 6.5C10.5 5.83696 10.2366 5.20107 9.76777 4.73223C9.29893 4.26339 8.66304 4 8 4ZM8 8C7.70333 8 7.41332 7.91203 7.16665 7.7472C6.91997 7.58238 6.72772 7.34811 6.61418 7.07403C6.50065 6.79994 6.47095 6.49834 6.52882 6.20736C6.5867 5.91639 6.72956 5.64912 6.93934 5.43934C7.14912 5.22956 7.4164 5.0867 7.70737 5.02882C7.99834 4.97094 8.29994 5.00065 8.57403 5.11418C8.84812 5.22771 9.08239 5.41997 9.24721 5.66664C9.41203 5.91332 9.5 6.20333 9.5 6.5C9.49955 6.89769 9.34137 7.27896 9.06017 7.56016C8.77896 7.84137 8.39769 7.99955 8 8Z" fill="#2A254B"/>
                <path d="M8 1C6.61553 1 5.26216 1.41054 4.11101 2.17971C2.95987 2.94888 2.06266 4.04213 1.53285 5.32122C1.00303 6.6003 0.86441 8.00776 1.13451 9.36563C1.4046 10.7235 2.07129 11.9708 3.05026 12.9497C4.02922 13.9287 5.2765 14.5954 6.63437 14.8655C7.99224 15.1356 9.3997 14.997 10.6788 14.4672C11.9579 13.9373 13.0511 13.0401 13.8203 11.889C14.5895 10.7378 15 9.38447 15 8C14.9979 6.14413 14.2597 4.36486 12.9474 3.05256C11.6351 1.74026 9.85588 1.00209 8 1ZM5 13.1882V12.5C5.00044 12.1023 5.15862 11.721 5.43983 11.4398C5.72104 11.1586 6.10231 11.0004 6.5 11H9.5C9.89769 11.0004 10.279 11.1586 10.5602 11.4398C10.8414 11.721 10.9996 12.1023 11 12.5V13.1882C10.0896 13.7199 9.05426 14 8 14C6.94574 14 5.91042 13.7199 5 13.1882ZM11.9963 12.4629C11.9863 11.807 11.7191 11.1813 11.2521 10.7206C10.7852 10.2599 10.156 10.0011 9.5 10H6.5C5.84405 10.0011 5.2148 10.2599 4.74786 10.7206C4.28093 11.1813 4.01369 11.807 4.00375 12.4629C3.09703 11.6533 2.45762 10.5873 2.17017 9.40623C1.88272 8.22513 1.9608 6.98457 2.39407 5.84883C2.82734 4.71309 3.59536 3.73573 4.59644 3.04618C5.59751 2.35663 6.78442 1.98741 8 1.98741C9.21558 1.98741 10.4025 2.35663 11.4036 3.04618C12.4046 3.73573 13.1727 4.71309 13.6059 5.84883C14.0392 6.98457 14.1173 8.22513 13.8298 9.40623C13.5424 10.5873 12.903 11.6533 11.9963 12.4629Z" fill="#2A254B"/>
              </svg> `;
                
        })   

    }
}
} 
})