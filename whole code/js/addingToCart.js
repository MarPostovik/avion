
  // Отримати кількість товарів з локального сховища та відобразити її
const cartCountSpan = document.querySelectorAll('.cart-count');
// const cartCount = localStorage.getItem('.cartCount') || 0;

let cart = JSON.parse(localStorage.getItem("cart")) || [];

cartCountSpan.forEach(span => {
  span.textContent = cart.length;
});

// При кожному додаванні товару оновлювати локальне сховище та відображати кількість
const addToCartButtons = document.querySelectorAll('.addToCardBtn');
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
  //   const currentCount = localStorage.getItem('.cartCount') || 0;
  //   const newCount = parseInt(currentCount) + 1;
    
  //   localStorage.setItem('.cartCount', newCount);

  let newCart = JSON.parse(localStorage.getItem("cart")) || [];
    cartCountSpan.forEach(span => {
      span.textContent = newCart.length + 1;
    });
  });
});


document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll(".addToCardBtn");
  
    // Додаємо обробник події для кожної кнопки "Додати в корзину"
    addToCartButtons.forEach(button => {
        button.addEventListener("click", () => {
        const product = button.parentElement.parentElement.parentElement.parentElement;
        let productPhoto = product.querySelector('.product-photo img').getAttribute('src');
        let productName = product.querySelector('.product-name').innerHTML;
        let productPrice = product.querySelector('.product-price').innerHTML.slice(1);
        let productDescription = product.querySelector('.product__description').innerHTML;
        productDescription = truncateText(productDescription, 50);
        let productQuantity = Number(product.querySelector('.product-quantity .value').innerText);
        let wholeProductPrice = productPrice * productQuantity;
        
            // Отримуємо дані про корзину з локального сховища
            const cart = JSON.parse(localStorage.getItem("cart")) || [];
  
            // Додаємо товар до корзини
            cart.push({ title: productName, price: productPrice, photo: productPhoto, description: productDescription, quantity: productQuantity, wholePrice: wholeProductPrice});
            
            // Зберігаємо дані корзини в локальному сховищі
            localStorage.setItem("cart", JSON.stringify(cart));
        });
    });
  });


  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
        return text.substring(0, maxLength) + '...';
    }
    return text;
  }
