import"./SearchModal-606c704d.js";import"./addingToCart-3ffcca3f.js";let B=document.getElementById("gamburger-menu-icon"),v=document.querySelector(".bottom-line-nav"),c=document.querySelector("nav");B.addEventListener("click",()=>{v.style.display==="flex"?(v.style.display="none",c.classList.add("animate__fadeOutLeft"),setTimeout(()=>{c.classList.remove("active"),c.classList.remove("animate__fadeOutLeft")},500),c.classList.remove("animate__fadeInLeft"),B.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M14 3H2V4H14V3Z" fill="#2A254B"/>
                          <path d="M14 12H2V13H14V12Z" fill="#2A254B"/>
                          <path d="M14 6H2V7H14V6Z" fill="#2A254B"/>
                          <path d="M14 9H2V10H14V9Z" fill="#2A254B"/>
                        </svg>`):(v.style.display="flex",c.classList.add("active"),c.classList.add("animate__fadeInLeft"),B.innerHTML='<ion-icon name="close-outline" class="close-nav"></ion-icon>')});window.addEventListener("resize",function(){v.style.display==="flex"&&(v.style.display="none",c.classList.add("animate__fadeOutLeft"),setTimeout(()=>{c.classList.remove("active"),c.classList.remove("animate__fadeOutLeft")},500),c.classList.remove("animate__fadeInLeft"),B.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M14 3H2V4H14V3Z" fill="#2A254B"/>
                            <path d="M14 12H2V13H14V12Z" fill="#2A254B"/>
                            <path d="M14 6H2V7H14V6Z" fill="#2A254B"/>
                            <path d="M14 9H2V10H14V9Z" fill="#2A254B"/>
                          </svg>`)});let E=document.getElementById("products-listing-container"),m=document.getElementById("load-more-btn"),u=document.getElementById("close-clicked-product-btn"),y=document.getElementsByClassName("product-item");for(let e=0;e<E.children.length;e++)e>7&&(E.children[e].style.display="none"),m.addEventListener("click",function(){E.children[e].style.display="flex",m.style.display="none"});document.addEventListener("DOMContentLoaded",function(){var e=new URLSearchParams(window.location.search),l=e.get("category"),t=e.get("sortOption");l!=null?(k(l),m.style.display="none"):t!=null&&A(t)});document.addEventListener("DOMContentLoaded",function(){let e=document.getElementsByClassName("link-item");for(let l=0;l<e.length;l++){let t=e[l];t.addEventListener("click",function(n){let o=t.getAttribute("data-category"),s=t.getAttribute("data-sort");if(o!=null){let r=t.getAttribute("href")+"?category="+encodeURIComponent(o);window.location.href=r,n.preventDefault()}else if(s!=null){let r=t.getAttribute("href")+"?sortOption="+encodeURIComponent(s);window.location.href=r,n.preventDefault()}})}});document.addEventListener("DOMContentLoaded",function(){let e=document.getElementsByClassName("filter-category-btn");for(let l=0;l<e.length;l++){let t=e[l],n=t.getAttribute("data-category");t.addEventListener("click",function(){k(n),m.style.display="none"})}});function k(e){for(let l=0;l<y.length;l++){let t=y[l],n=t.getAttribute("data-category");e==n?t.style.display="flex":t.style.display="none"}}document.addEventListener("DOMContentLoaded",function(){let e=document.getElementsByClassName("filter-ProductType-btn");for(let t=0;t<e.length;t++){let n=e[t],o=n.getAttribute("data-producttype");n.addEventListener("click",function(){l(o),m.style.display="none"})}function l(t){for(let n=0;n<y.length;n++){let o=y[n],s=o.getAttribute("data-producttype");t==s?o.style.display="flex":o.style.display="none"}}});document.addEventListener("DOMContentLoaded",function(){let e=document.getElementsByClassName("filter-brand-btn");for(let t=0;t<e.length;t++){let n=e[t],o=n.getAttribute("data-brand");n.addEventListener("click",function(){l(o)})}function l(t){for(let n=0;n<y.length;n++){let o=y[n],s=o.getAttribute("data-brand");t==s?o.style.display="flex":o.style.display="none"}}});document.addEventListener("DOMContentLoaded",function(){let e=document.getElementsByClassName("filter-price-btn");for(let t=0;t<e.length;t++){let n=e[t],o=n.getAttribute("data-price");n.addEventListener("click",function(){l(o),m.style.display="none"})}function l(t){for(let n=0;n<y.length;n++){let o=y[n],s=o.getAttribute("data-price");t==s?o.style.display="flex":o.style.display="none"}}});let d=document.getElementById("showFiltersBtn"),a=document.getElementById("showSortingBtn"),b=document.querySelector(".filters-container"),L=document.querySelector(".sorting-container");d.addEventListener("click",function(){b.style.display=="flex"?(b.style.display="none",d.style.background="var(--Light-Grey, #F9F9F9)",d.querySelector("svg").style.display="inline-block",d.querySelector("ion-icon").style.display="none",L.style.display="none"):(b.style.display="flex",d.style.background="#e3e6e9",d.querySelector("svg").style.display="none",d.querySelector("ion-icon").style.display="inline-block",a.style.background="var(--Light-Grey, #F9F9F9)",L.style.display="none",a.querySelector("svg").style.display="inline-block",a.querySelector("ion-icon").style.display="none")});a.addEventListener("click",function(){L.style.display=="flex"?(L.style.display="none",a.style.background="#F9F9F9",a.querySelector("svg").style.display="inline-block",a.querySelector("ion-icon").style.display="none"):(L.style.display="flex",a.style.background="#e3e6e9",d.style.background="var(--Light-Grey, #F9F9F9)",b.style.display="none",a.querySelector("svg").style.display="none",a.querySelector("ion-icon").style.display="inline-block",d.querySelector("svg").style.display="inline-block",d.querySelector("ion-icon").style.display="none")});document.addEventListener("DOMContentLoaded",function(){var e=document.getElementsByClassName("dropbtn"),l=document.getElementsByClassName("dropdown-content"),t=-1;document.body.addEventListener("click",function(i){n(i.target)||o(t)});for(let i=0;i<e.length;i++)e[i].addEventListener("click",function(r){r.stopPropagation(),s(i)});function n(i){for(let r=0;r<e.length;r++)if(i===e[r]||l[r].contains(i))return!0;return!1}function o(i){i!==-1&&(l[i].style.display="none",e[i].querySelector("svg").style.display="inline-block",e[i].querySelector("ion-icon").style.display="none",t=-1)}function s(i){i===t?o(i):(o(t),l[i].style.display="block",e[i].querySelector("svg").style.display="none",e[i].querySelector("ion-icon").style.display="inline-block",t=i)}});let p=document.getElementById("products-listing-container");document.addEventListener("DOMContentLoaded",function(){let e=document.getElementsByClassName("sorting-btn");for(let l=0;l<e.length;l++)e[l].addEventListener("click",function(){let t=e[l].getAttribute("data-sort");A(t)})});let g=document.getElementById("span-sorted");function A(e){let l=document.querySelectorAll(".product-item"),t=Array.from(l);e==="date"?(t.sort((n,o)=>{let s=n.getAttribute("data-date"),i=o.getAttribute("data-date");return new Date(s)-new Date(i)}),g.innerHTML="Date added"):e==="new"?(t.sort((n,o)=>{let s=new Date(n.getAttribute("data-date"));return new Date(o.getAttribute("data-date"))-s}),g.innerHTML="New arrivals"):e==="best"?(t.sort((n,o)=>{let s=parseInt(n.getAttribute("data-sales"));return parseInt(o.getAttribute("data-sales"))-s}),g.innerHTML="Best sellers"):e==="recent"?(t.sort((n,o)=>{let s=parseInt(n.getAttribute("data-views"));return parseInt(o.getAttribute("data-views"))-s}),g.innerHTML="Recently viewed"):e==="popular"&&(t.sort((n,o)=>{let s=parseInt(n.getAttribute("data-sales"));return parseInt(o.getAttribute("data-sales"))-s}),g.innerHTML="Popular this weeek"),p.innerHTML="";for(let n=0;n<t.length;n++)p.appendChild(t[n])}let S=p.querySelectorAll(".product-photo"),C=p.querySelectorAll(".product__name-and-price");for(let e=0;e<p.children.length;e++)S[e].addEventListener("click",function(l){let t=l.target.closest(".product-item");const n=t.querySelector(".addToCardBtn");t&&(t.classList.add("clicked"),u.classList.toggle("shown",t.classList.contains("clicked")));let o=p.querySelector(".product-item.clicked");u.addEventListener("click",function(){o.classList.remove("clicked"),u.classList.remove("shown")}),n.addEventListener("click",function(){o.classList.remove("clicked"),u.classList.remove("shown");let s=document.getElementById("productAddedPopUp");s.style.display="flex",s.classList.add("animate__pulse"),document.getElementById("closeproductAddedPopUp").addEventListener("click",function(){s.style.display="none"})})}),C[e].addEventListener("click",function(l){let t=l.target.closest(".product-item");const n=t.querySelector(".addToCardBtn");t&&(t.classList.add("clicked"),u.classList.toggle("shown",t.classList.contains("clicked")));let o=p.querySelector(".product-item.clicked");u.addEventListener("click",function(){o.classList.remove("clicked"),u.classList.remove("shown")}),n.addEventListener("click",function(){o.classList.remove("clicked"),u.classList.remove("shown");let s=document.getElementById("productAddedPopUp");s.style.display="flex",s.classList.add("animate__pulse"),document.getElementById("closeProductAddedPopUp").addEventListener("click",function(){s.style.display="none"})})});let f=document.querySelectorAll(".product-quantity");for(let e=0;e<f.length;e++){let l=Number(f[e].lastElementChild.innerText),t=f[e].querySelector(".add-quantity"),n=f[e].querySelector(".remove-quantity");t.addEventListener("click",function(){l++,f[e].lastElementChild.innerText=l}),n.addEventListener("click",function(){l>1&&(l--,f[e].lastElementChild.innerText=l)})}let q=document.querySelector(".searchBtn");q.addEventListener("click",function(){let e=document.getElementById("searchInput"),l=document.getElementById("searchInput").value.toLowerCase();l.trim()===""?(document.querySelector(".warning").style.display="block",e.style.border="1px solid red"):(window.location.href="/avion/product-listing.html?search="+l,document.querySelector(".warning").innerHTML.style.display="none",e.style.border="none")});function P(e){document.querySelectorAll(e).forEach(t=>{t.value=""})}let h=document.getElementById("SubsribtionModal"),w=document.querySelectorAll(".subscribtionForm");for(let e=0;e<w.length;e++){let l=document.getElementById("close-Subsribtion-Modal");w[e].addEventListener("submit",function(t){t.preventDefault(),P(".sign-up-email"),setTimeout(function(){h.style.display="flex",h.querySelector(".search-modal__container").classList.add("animate__animated"),h.querySelector(".search-modal__container").classList.add("animate__backInDown")},500)}),l.addEventListener("click",()=>{h.style.display="none"})}window.addEventListener("DOMContentLoaded",function(){let e=JSON.parse(localStorage.getItem("userInformation"))||[];if(e.length!=0&&e.userInfo.registered){let t=e.userInfo.userPhoto,n;t!=null&&t!=null?n=`<img  class="selected-image" src="${t}" alt="user photo">`:n='<svg class="default-photo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c39.77 0 72 32.24 72 72S295.8 272 256 272c-39.76 0-72-32.24-72-72S216.2 128 256 128zM256 448c-52.93 0-100.9-21.53-135.7-56.29C136.5 349.9 176.5 320 224 320h64c47.54 0 87.54 29.88 103.7 71.71C356.9 426.5 308.9 448 256 448z"/></svg>';let o=document.querySelector(".user");o.innerHTML=n}});