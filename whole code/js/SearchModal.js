
import '../styles/SearchModal.css';

import 'animate.css';

let closeBtn = document.getElementById('closeSearchModal');
let modal = document.querySelector('#search-modal');
let openModalBtn = document.getElementById('openSearchModal');

openModalBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
    modal.querySelector('.search-modal__container').classList.add('animate__animated')
    modal.querySelector('.search-modal__container').classList.add('animate__fadeInUpBig')
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

  document.addEventListener('DOMContentLoaded', function() {
    // Отримання значення параметра search з URL
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('search');
    let loadMoreBtn = document.getElementById('load-more-btn');
    // Отримання списку товарів
    const products = document.querySelectorAll('.product-item');
    if (!searchQuery) {
        // Якщо інпут порожній, не виконувати пошук
        return;
    }
    let foundProducts;
    if (searchQuery.trim() != '') {
        for (const product of products) {
            const productName = product.querySelector('.product-name').innerText.toLowerCase();
            if (searchQuery && productName.includes(searchQuery.toLowerCase())) {
                product.style.display = 'flex';
                foundProducts = true;
            } else {
                product.style.display = 'none';
            }
            modal.style.display = 'none';
            loadMoreBtn.style.display = 'none';             
        }
      }
    
      if ((searchQuery.trim() != '') && !foundProducts){
        let nofoundPopUp = document.getElementById('NofoundPopUp');
        nofoundPopUp.style.display = 'flex';
        for(let i = 0; i < products.length; i++){
            if(i < 8){ 
              products[i].style.display = 'flex';
              loadMoreBtn.style.display = 'block'; 
            }
        }
        let closeNofoundPopUp = document.getElementById('closeNofoundPopUp');
        closeNofoundPopUp.addEventListener('click', () => {
            nofoundPopUp.style.display = 'none';
        });
        const currentUrl = window.location.href;

        // Отримання URL без параметрів
        const urlWithoutParameter = removeUrlParameter(currentUrl, 'search');

        // Заміна поточного URL на новий без параметрів
        history.replaceState(null, null, urlWithoutParameter);
    }

      function removeUrlParameter(url, parameterName) {
        // Розділення URL за допомогою "?" (якщо параметри існують)
        const urlParts = url.split('?');

        // Якщо є параметри
        if (urlParts.length > 1) {
          const baseUrl = urlParts[0];
          const searchParams = new URLSearchParams(urlParts[1]);

          // Видалення параметра
          searchParams.delete(parameterName);

          // Формування нового URL без параметра
          return baseUrl + '?' + searchParams.toString();
        }

        // Якщо параметрів немає, повертаємо вихідний URL
        return url;
      }
  });