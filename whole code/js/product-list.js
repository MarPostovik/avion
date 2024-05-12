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

let productsList = document.getElementById('products-listing-container');
let loadMoreBtn = document.getElementById('load-more-btn');
let closeProductBtn = document.getElementById('close-clicked-product-btn');
let products = document.getElementsByClassName('product-item');
//load more
for(let i = 0; i < productsList.children.length; i++){
  if(i > 7){ 
    productsList.children[i].style.display = 'none';
  }
  loadMoreBtn.addEventListener('click', function(){
    productsList.children[i].style.display = 'flex';
    loadMoreBtn.style.display = 'none';  
  })
}



//filter when clicking on links
document.addEventListener('DOMContentLoaded', function () {
  // Read the category query parameter from the URL
  var urlParams = new URLSearchParams(window.location.search);
  var category = urlParams.get('category');
  var sortOption = urlParams.get('sortOption');

  // Filter products based on the category
  if (category !== null && category !== undefined) {
    // Filter products based on the category
    filterProductsByCategory(category);
    loadMoreBtn.style.display = 'none';
  }else if (sortOption !== null && sortOption !== undefined) {
    sortProducts(sortOption);
  }
});
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
//filter by category
document.addEventListener('DOMContentLoaded', function() {
  let filterCategoryBtns = document.getElementsByClassName('filter-category-btn');

  for (let i = 0; i < filterCategoryBtns.length; i++) {
      let currentBtn = filterCategoryBtns[i];
      let productCategory = currentBtn.getAttribute('data-category');

      currentBtn.addEventListener('click', function(){
          filterProductsByCategory(productCategory);
          loadMoreBtn.style.display = 'none'; 
      });
  }
}); 
 function filterProductsByCategory(category) {
      
      for (let i = 0; i < products.length; i++) {
          let product = products[i];
          let productCategory = product.getAttribute('data-category');
          
          if (category == productCategory) {
              product.style.display = "flex";
          } else {
              product.style.display = "none";
          }
      }
  }
// filter by product type
document.addEventListener('DOMContentLoaded', function() {
  let filterProductTypeBtns = document.getElementsByClassName('filter-ProductType-btn');

  for (let i = 0; i < filterProductTypeBtns.length; i++) {
      let currentBtn = filterProductTypeBtns[i];
      let productType = currentBtn.getAttribute('data-producttype');

      currentBtn.addEventListener('click', function(){
          filterProductsByProductType(productType);
          loadMoreBtn.style.display = 'none'; 
      });
  }

  function filterProductsByProductType(type) {
      for (let i = 0; i < products.length; i++) {
          let product = products[i];
          let productType = product.getAttribute('data-producttype');
          
          if (type == productType) {
              product.style.display = "flex";
          } else {
              product.style.display = "none";
          }
      }
  }
});
//filter by brand 
document.addEventListener('DOMContentLoaded', function() {
  let filterBrandBtns = document.getElementsByClassName('filter-brand-btn');

  for (let i = 0; i < filterBrandBtns.length; i++) {
      let currentBtn = filterBrandBtns[i];
      let productBrand = currentBtn.getAttribute('data-brand');

      currentBtn.addEventListener('click', function(){
          filterProductsByBrand(productBrand);
      });
  }

  function filterProductsByBrand(brand) {
      for (let i = 0; i < products.length; i++) {
          let product = products[i];
          let productBrand = product.getAttribute('data-brand');
          
          if (brand == productBrand) {
              product.style.display = "flex";
          } else {
              product.style.display = "none";
          }
      }
  }
});
//filter by price
document.addEventListener('DOMContentLoaded', function() {
  let filterPriceBtns = document.getElementsByClassName('filter-price-btn');

  for (let i = 0; i < filterPriceBtns.length; i++) {
      let currentBtn = filterPriceBtns[i];
      let productPrice = currentBtn.getAttribute('data-price');

      currentBtn.addEventListener('click', function(){
          filterProductsByPrice(productPrice);
          loadMoreBtn.style.display = 'none'; 
      });
  }

  function filterProductsByPrice(price) {
      for (let i = 0; i < products.length; i++) {
          let product = products[i];
          let productPrice = product.getAttribute('data-price');
          
          if (price == productPrice) {
              product.style.display = "flex";
          } else {
              product.style.display = "none";
          }
      }
  }
});

let showFiltersBtn = document.getElementById('showFiltersBtn');
let showSortingBtn = document.getElementById('showSortingBtn');
let filtersContainer = document.querySelector('.filters-container');
let SortingContainer = document.querySelector('.sorting-container');

showFiltersBtn.addEventListener('click', function(){
  if(filtersContainer.style.display == 'flex'){
    filtersContainer.style.display = 'none';
    showFiltersBtn.style.background = 'var(--Light-Grey, #F9F9F9)';
    showFiltersBtn.querySelector('svg').style.display = 'inline-block';
    showFiltersBtn.querySelector('ion-icon').style.display = 'none';
    SortingContainer.style.display = 'none';
  }else{
  filtersContainer.style.display = 'flex';
  showFiltersBtn.style.background = '#e3e6e9';
  showFiltersBtn.querySelector('svg').style.display = 'none';
  showFiltersBtn.querySelector('ion-icon').style.display = 'inline-block';
  showSortingBtn.style.background = 'var(--Light-Grey, #F9F9F9)';
  SortingContainer.style.display = 'none';
  showSortingBtn.querySelector('svg').style.display = 'inline-block';
  showSortingBtn.querySelector('ion-icon').style.display = 'none';
  }
})

showSortingBtn.addEventListener('click', function(){
  if(SortingContainer.style.display == 'flex'){
    SortingContainer.style.display = 'none';
    showSortingBtn.style.background = '#F9F9F9';
    showSortingBtn.querySelector('svg').style.display = 'inline-block';
    showSortingBtn.querySelector('ion-icon').style.display = 'none';
  }else{
    SortingContainer.style.display = 'flex';
    showSortingBtn.style.background = '#e3e6e9';
    showFiltersBtn.style.background = 'var(--Light-Grey, #F9F9F9)';
    filtersContainer.style.display = 'none';    
    showSortingBtn.querySelector('svg').style.display = 'none';
    showSortingBtn.querySelector('ion-icon').style.display = 'inline-block';
    showFiltersBtn.querySelector('svg').style.display = 'inline-block';
    showFiltersBtn.querySelector('ion-icon').style.display = 'none';
  }
})

//dropdown
// let dropbtn = document.querySelectorAll('.dropbtn');
// let dropdownContent = document.querySelectorAll('.dropdown-content');

// for(let i = 0; i < dropbtn.length; i++){
//   dropbtn[i].addEventListener('click', function(){
//       if(dropdownContent[i].style.display == 'none'){
//       for(let j = 0; j < dropbtn.length; j++){
//         if((j!= i &&(dropdownContent[j].style.display = 'block'))){
//         dropdownContent[j].style.display = 'none';
//         dropbtn[j].querySelector('svg').style.display = 'inline-block';
//         dropbtn[j].querySelector('ion-icon').style.display = 'none';
//       }}
//       dropdownContent[i].style.display = 'block';
//       dropbtn[i].querySelector('svg').style.display = 'none';
//       dropbtn[i].querySelector('ion-icon').style.display = 'inline-block';
//     }else{
//       dropdownContent[i].style.display = 'none';
//       dropbtn[i].querySelector('svg').style.display = 'inline-block';
//       dropbtn[i].querySelector('ion-icon').style.display = 'none';
//     }
//   })
// }

document.addEventListener('DOMContentLoaded', function () {
  var dropbtn = document.getElementsByClassName('dropbtn');
  var dropdownContent = document.getElementsByClassName('dropdown-content');
  var currentActiveIndex = -1;

  // Add click event listener to the document body
  document.body.addEventListener('click', function (event) {
      // Check if the clicked element is not a dropbtn or inside a dropdownContent
      if (!isClickInsideDropdown(event.target)) {
          // Hide the current active dropdown (if any)
          hideDropdown(currentActiveIndex);
      }
  });

  // Add click event listeners to each dropbtn
  for (let i = 0; i < dropbtn.length; i++) {
      dropbtn[i].addEventListener('click', function (event) {
          // Prevent the click event from propagating to the document body
          event.stopPropagation();

          // Toggle visibility of dropdownContent
          toggleDropdown(i);
      });
  }

  function isClickInsideDropdown(target) {
      // Check if the clicked element is a dropbtn or inside a dropdownContent
      for (let i = 0; i < dropbtn.length; i++) {
          if (target === dropbtn[i] || dropdownContent[i].contains(target)) {
              return true;
          }
      }
      return false;
  }

  function hideDropdown(index) {
      if (index !== -1) {
          dropdownContent[index].style.display = 'none';
          dropbtn[index].querySelector('svg').style.display = 'inline-block';
          dropbtn[index].querySelector('ion-icon').style.display = 'none';
          currentActiveIndex = -1;
      }
  }

  function toggleDropdown(index) {
      if (index === currentActiveIndex) {
          // If the clicked dropdown is already active, hide it
          hideDropdown(index);
      } else {
          // Hide the current active dropdown (if any)
          hideDropdown(currentActiveIndex);

          // Show the clicked dropdown
          dropdownContent[index].style.display = 'block';
          dropbtn[index].querySelector('svg').style.display = 'none';
          dropbtn[index].querySelector('ion-icon').style.display = 'inline-block';

          // Update the current active index
          currentActiveIndex = index;
      }
  }
});
let productsContainer = document.getElementById('products-listing-container');
//sorting
document.addEventListener('DOMContentLoaded', function () {
  let sortingBtns = document.getElementsByClassName('sorting-btn');
  

  for (let i = 0; i < sortingBtns.length; i++) {
      sortingBtns[i].addEventListener('click', function () {
          let sortingOption = sortingBtns[i].getAttribute('data-sort');
          sortProducts(sortingOption);
      });
  }
});
let spanSorted = document.getElementById('span-sorted');
function sortProducts(option) {
    let products = document.querySelectorAll('.product-item');
    let productsArray = Array.from(products);
    if (option === 'date') {
        productsArray.sort((a, b) => {
            let dateA = a.getAttribute('data-date');
            let dateB = b.getAttribute('data-date');
            return new Date(dateA) - new Date(dateB);
        });
        spanSorted.innerHTML = 'Date added';
    } else if (option === 'new') {
        productsArray.sort((a, b) => {
            let dateA = new Date(a.getAttribute('data-date'));
            let dateB = new Date(b.getAttribute('data-date'));
            return dateB - dateA;
        });
        spanSorted.innerHTML = 'New arrivals';
    } else if (option === 'best') {
        productsArray.sort((a, b) => {
            let salesA = parseInt(a.getAttribute('data-sales'));
            let salesB = parseInt(b.getAttribute('data-sales'));
            return salesB - salesA;
        });
        spanSorted.innerHTML = 'Best sellers';
    } else if (option === 'recent') {
        productsArray.sort((a, b) => {
            let viewsA = parseInt(a.getAttribute('data-views'));
            let viewsB = parseInt(b.getAttribute('data-views'));
            return viewsB - viewsA;
        });
        spanSorted.innerHTML = 'Recently viewed';
    } else if (option === 'popular') {
        productsArray.sort((a, b) => {
            let salesA = parseInt(a.getAttribute('data-sales'));
            let salesB = parseInt(b.getAttribute('data-sales'));
            return salesB - salesA;
        });
        spanSorted.innerHTML = 'Popular this weeek';
    }

    // Clear the current products
    productsContainer.innerHTML = '';

    // Append the sorted products back to the container
    for (let i = 0; i < productsArray.length; i++) {
        productsContainer.appendChild(productsArray[i]);
    }
}
// open details of product
// for(let i = 0; i < productsContainer.children.length; i++){
//   productsContainer.children[i].addEventListener('click', function(){
//     productsContainer.children[i].classList.add('clicked');
//     closeProductBtn.classList.add('shown');
//     closeProductBtn.addEventListener('click', function(){
//       productsContainer.children[i].classList.remove('clicked');
//       closeProductBtn.classList.remove('shown');
//     })
//  })
// }
let productPhoto = productsContainer.querySelectorAll('.product-photo');
let productClickInfos = productsContainer.querySelectorAll('.product__name-and-price');
for(let i = 0; i < productsContainer.children.length; i++){
    productPhoto[i].addEventListener('click', function (event) {
    let clickedProduct = event.target.closest('.product-item');
    const addToCartButton = clickedProduct.querySelector(".addToCardBtn");
    
    if (clickedProduct) {
        clickedProduct.classList.add('clicked');
        closeProductBtn.classList.toggle('shown', clickedProduct.classList.contains('clicked'));
    }
    let openedProduct = productsContainer.querySelector('.product-item.clicked');
    closeProductBtn.addEventListener('click', function(){
        openedProduct.classList.remove('clicked');
        closeProductBtn.classList.remove('shown');
        })
        addToCartButton.addEventListener('click', function(){
        openedProduct.classList.remove('clicked');
        closeProductBtn.classList.remove('shown');  
        let productAddedPopUp = document.getElementById('productAddedPopUp');
        productAddedPopUp.style.display = 'flex';
        productAddedPopUp.classList.add('animate__pulse');
        let closeProductAddedPopUp = document.getElementById('closeproductAddedPopUp');
        closeProductAddedPopUp.addEventListener('click', function(){
            productAddedPopUp.style.display = 'none';
        });     
        })
    });
    productClickInfos[i].addEventListener('click', function (event) {
    let clickedProduct = event.target.closest('.product-item');
    const addToCartButton = clickedProduct.querySelector(".addToCardBtn");
    
    if (clickedProduct) {
        clickedProduct.classList.add('clicked');
        closeProductBtn.classList.toggle('shown', clickedProduct.classList.contains('clicked'));
    }
    let openedProduct = productsContainer.querySelector('.product-item.clicked');
    closeProductBtn.addEventListener('click', function(){
        openedProduct.classList.remove('clicked');
        closeProductBtn.classList.remove('shown');
        })
        addToCartButton.addEventListener('click', function(){
        openedProduct.classList.remove('clicked');
        closeProductBtn.classList.remove('shown');
        let productAddedPopUp = document.getElementById('productAddedPopUp');
        productAddedPopUp.style.display = 'flex';
        productAddedPopUp.classList.add('animate__pulse');
        let closeProductAddedPopUp = document.getElementById('closeProductAddedPopUp');
        closeProductAddedPopUp.addEventListener('click', function(){
            productAddedPopUp.style.display = 'none';
        });
        })
    });
}


let quantityBtns = document.querySelectorAll('.product-quantity');
for( let i = 0; i < quantityBtns.length; i++){
    let currentValue = Number(quantityBtns[i].lastElementChild.innerText);
    let addQuantity = quantityBtns[i].querySelector('.add-quantity');
    let removeQuantity = quantityBtns[i].querySelector('.remove-quantity');
    addQuantity.addEventListener('click', function(){
        currentValue++;
        quantityBtns[i].lastElementChild.innerText = currentValue;
    });
    removeQuantity.addEventListener('click', function(){
        if(currentValue > 1){
            currentValue--;
            quantityBtns[i].lastElementChild.innerText = currentValue;            
        }
    });
}

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
