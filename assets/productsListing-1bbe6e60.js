import"./animate-e723a332.js";let o=document.getElementById("gamburger-menu-icon"),s=document.querySelector(".bottom-line-nav"),l=document.querySelector("nav");o.addEventListener("click",()=>{s.style.display==="flex"?(s.style.display="none",l.classList.add("animate__fadeOutLeft"),setTimeout(()=>{l.classList.remove("active"),l.classList.remove("animate__fadeOutLeft")},500),l.classList.remove("animate__fadeInLeft"),o.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M14 3H2V4H14V3Z" fill="#2A254B"/>
                          <path d="M14 12H2V13H14V12Z" fill="#2A254B"/>
                          <path d="M14 6H2V7H14V6Z" fill="#2A254B"/>
                          <path d="M14 9H2V10H14V9Z" fill="#2A254B"/>
                        </svg>`):(s.style.display="flex",l.classList.add("active"),l.classList.add("animate__fadeInLeft"),o.innerHTML='<ion-icon name="close-outline" class="close-nav"></ion-icon>')});document.querySelector(".products-listing-container");document.getElementById("Category");document.getElementById("ProductType");document.getElementById("Price");document.getElementById("Brand");document.getElementById("sorting");let e=document.getElementById("showFiltersBtn"),t=document.getElementById("showSortingBtn"),i=document.querySelector(".filters-container"),n=document.querySelector(".sorting-container");e.addEventListener("click",function(){i.style.display=="flex"?(i.style.display="none",e.style.background="var(--Light-Grey, #F9F9F9)",e.querySelector("svg").style.display="inline-block",e.querySelector("ion-icon").style.display="none",n.style.display="none"):(i.style.display="flex",e.style.background="#e3e6e9",e.querySelector("svg").style.display="none",e.querySelector("ion-icon").style.display="inline-block",t.style.background="var(--Light-Grey, #F9F9F9)",n.style.display="none",t.querySelector("svg").style.display="inline-block",t.querySelector("ion-icon").style.display="none")});t.addEventListener("click",function(){n.style.display=="flex"?(n.style.display="none",t.style.background="var(--Light-Grey, #F9F9F9)",t.querySelector("svg").style.display="inline-block",t.querySelector("ion-icon").style.display="none"):(n.style.display="flex",t.style.background="#e3e6e9",e.style.background="var(--Light-Grey, #F9F9F9)",i.style.display="none",t.querySelector("svg").style.display="none",t.querySelector("ion-icon").style.display="inline-block",e.querySelector("svg").style.display="inline-block",e.querySelector("ion-icon").style.display="none")});
