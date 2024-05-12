
// Bootstrap
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/style.css'
import '../styles/responsive.css'

import 'animate.css';


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

window.addEventListener('DOMContentLoaded', function(){ 
  let registeredProfile = JSON.parse(localStorage.getItem("userInformation")) || [];
  if(registeredProfile.length != 0){
        let registered = registeredProfile.userInfo.registered;
    if(registered){
      let userPhoto = registeredProfile.userInfo.userPhoto;
      let showedPhoto;
      if(userPhoto != null && userPhoto != undefined){
          showedPhoto = `<img  class="selected-image" src="${userPhoto}" alt="user photo">`
      }else{
          showedPhoto = '<svg class="default-photo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c39.77 0 72 32.24 72 72S295.8 272 256 272c-39.76 0-72-32.24-72-72S216.2 128 256 128zM256 448c-52.93 0-100.9-21.53-135.7-56.29C136.5 349.9 176.5 320 224 320h64c47.54 0 87.54 29.88 103.7 71.71C356.9 426.5 308.9 448 256 448z"/></svg>';
      }
      let user = document.querySelector('.user');
      user.innerHTML = showedPhoto;  
    }
  }

 })