import"./animate-86751f6d.js";import"./addingToCart-3ffcca3f.js";let L=document.getElementById("gamburger-menu-icon"),B=document.querySelector(".bottom-line-nav"),u=document.querySelector("nav");L.addEventListener("click",()=>{B.style.display==="flex"?(B.style.display="none",u.classList.add("animate__fadeOutLeft"),setTimeout(()=>{u.classList.remove("active"),u.classList.remove("animate__fadeOutLeft")},500),u.classList.remove("animate__fadeInLeft"),L.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M14 3H2V4H14V3Z" fill="#2A254B"/>
                          <path d="M14 12H2V13H14V12Z" fill="#2A254B"/>
                          <path d="M14 6H2V7H14V6Z" fill="#2A254B"/>
                          <path d="M14 9H2V10H14V9Z" fill="#2A254B"/>
                        </svg>`):(B.style.display="flex",u.classList.add("active"),u.classList.add("animate__fadeInLeft"),L.innerHTML='<ion-icon name="close-outline" class="close-nav"></ion-icon>')});let b=document.getElementById("products-listing-container"),f=document.getElementById("load-more-btn"),h=document.getElementById("close-clicked-product-btn"),c=document.getElementsByClassName("product-item");for(let e=0;e<b.children.length;e++)e>7&&(b.children[e].style.display="none"),f.addEventListener("click",function(){b.children[e].style.display="flex",f.style.display="none"});document.addEventListener("DOMContentLoaded",function(){var e=new URLSearchParams(window.location.search),l=e.get("category"),t=e.get("sortOption");l!=null?(E(l),f.style.display="none"):t!=null&&k(t)});document.addEventListener("DOMContentLoaded",function(){let e=document.getElementsByClassName("link-item");for(let l=0;l<e.length;l++){let t=e[l];t.addEventListener("click",function(n){let i=t.getAttribute("data-category"),o=t.getAttribute("data-sort");if(i!=null){let s=t.getAttribute("href")+"?category="+encodeURIComponent(i);window.location.href=s,n.preventDefault()}else if(o!=null){let s=t.getAttribute("href")+"?sortOption="+encodeURIComponent(o);window.location.href=s,n.preventDefault()}})}});document.addEventListener("DOMContentLoaded",function(){let e=document.getElementsByClassName("filter-category-btn");for(let l=0;l<e.length;l++){let t=e[l],n=t.getAttribute("data-category");t.addEventListener("click",function(){E(n),f.style.display="none"})}});function E(e){for(let l=0;l<c.length;l++){let t=c[l],n=t.getAttribute("data-category");e==n?t.style.display="flex":t.style.display="none"}}document.addEventListener("DOMContentLoaded",function(){let e=document.getElementsByClassName("filter-ProductType-btn");for(let t=0;t<e.length;t++){let n=e[t],i=n.getAttribute("data-producttype");n.addEventListener("click",function(){l(i),f.style.display="none"})}function l(t){for(let n=0;n<c.length;n++){let i=c[n],o=i.getAttribute("data-producttype");t==o?i.style.display="flex":i.style.display="none"}}});document.addEventListener("DOMContentLoaded",function(){let e=document.getElementsByClassName("filter-brand-btn");for(let t=0;t<e.length;t++){let n=e[t],i=n.getAttribute("data-brand");n.addEventListener("click",function(){l(i)})}function l(t){for(let n=0;n<c.length;n++){let i=c[n],o=i.getAttribute("data-brand");t==o?i.style.display="flex":i.style.display="none"}}});document.addEventListener("DOMContentLoaded",function(){let e=document.getElementsByClassName("filter-price-btn");for(let t=0;t<e.length;t++){let n=e[t],i=n.getAttribute("data-price");n.addEventListener("click",function(){l(i),f.style.display="none"})}function l(t){for(let n=0;n<c.length;n++){let i=c[n],o=i.getAttribute("data-price");t==o?i.style.display="flex":i.style.display="none"}}});let d=document.getElementById("showFiltersBtn"),a=document.getElementById("showSortingBtn"),m=document.querySelector(".filters-container"),g=document.querySelector(".sorting-container");d.addEventListener("click",function(){m.style.display=="flex"?(m.style.display="none",d.style.background="var(--Light-Grey, #F9F9F9)",d.querySelector("svg").style.display="inline-block",d.querySelector("ion-icon").style.display="none",g.style.display="none"):(m.style.display="flex",d.style.background="#e3e6e9",d.querySelector("svg").style.display="none",d.querySelector("ion-icon").style.display="inline-block",a.style.background="var(--Light-Grey, #F9F9F9)",g.style.display="none",a.querySelector("svg").style.display="inline-block",a.querySelector("ion-icon").style.display="none")});a.addEventListener("click",function(){g.style.display=="flex"?(g.style.display="none",a.style.background="#F9F9F9",a.querySelector("svg").style.display="inline-block",a.querySelector("ion-icon").style.display="none"):(g.style.display="flex",a.style.background="#e3e6e9",d.style.background="var(--Light-Grey, #F9F9F9)",m.style.display="none",a.querySelector("svg").style.display="none",a.querySelector("ion-icon").style.display="inline-block",d.querySelector("svg").style.display="inline-block",d.querySelector("ion-icon").style.display="none")});document.addEventListener("DOMContentLoaded",function(){var e=document.getElementsByClassName("dropbtn"),l=document.getElementsByClassName("dropdown-content"),t=-1;document.body.addEventListener("click",function(r){n(r.target)||i(t)});for(let r=0;r<e.length;r++)e[r].addEventListener("click",function(s){s.stopPropagation(),o(r)});function n(r){for(let s=0;s<e.length;s++)if(r===e[s]||l[s].contains(r))return!0;return!1}function i(r){r!==-1&&(l[r].style.display="none",e[r].querySelector("svg").style.display="inline-block",e[r].querySelector("ion-icon").style.display="none",t=-1)}function o(r){r===t?i(r):(i(t),l[r].style.display="block",e[r].querySelector("svg").style.display="none",e[r].querySelector("ion-icon").style.display="inline-block",t=r)}});let v=document.getElementById("products-listing-container");document.addEventListener("DOMContentLoaded",function(){let e=document.getElementsByClassName("sorting-btn");for(let l=0;l<e.length;l++)e[l].addEventListener("click",function(){let t=e[l].getAttribute("data-sort");k(t)})});let p=document.getElementById("span-sorted");function k(e){let l=document.querySelectorAll(".product-item"),t=Array.from(l);e==="date"?(t.sort((n,i)=>{let o=n.getAttribute("data-date"),r=i.getAttribute("data-date");return new Date(o)-new Date(r)}),p.innerHTML="Date added"):e==="new"?(t.sort((n,i)=>{let o=new Date(n.getAttribute("data-date"));return new Date(i.getAttribute("data-date"))-o}),p.innerHTML="New arrivals"):e==="best"?(t.sort((n,i)=>{let o=parseInt(n.getAttribute("data-sales"));return parseInt(i.getAttribute("data-sales"))-o}),p.innerHTML="Best sellers"):e==="recent"?(t.sort((n,i)=>{let o=parseInt(n.getAttribute("data-views"));return parseInt(i.getAttribute("data-views"))-o}),p.innerHTML="Recently viewed"):e==="popular"&&(t.sort((n,i)=>{let o=parseInt(n.getAttribute("data-sales"));return parseInt(i.getAttribute("data-sales"))-o}),p.innerHTML="Popular this weeek"),v.innerHTML="";for(let n=0;n<t.length;n++)v.appendChild(t[n])}v.addEventListener("click",function(e){let l=e.target.closest(".product-item");l&&(l.classList.add("clicked"),h.classList.toggle("shown",l.classList.contains("clicked")));let t=v.querySelector(".product-item.clicked");h.addEventListener("click",function(){t.classList.remove("clicked"),h.classList.remove("shown")})});let y=document.querySelectorAll(".product-quantity");for(let e=0;e<y.length;e++){let l=Number(y[e].lastElementChild.innerText),t=y[e].querySelector(".add-quantity"),n=y[e].querySelector(".remove-quantity");t.addEventListener("click",function(){l++,y[e].lastElementChild.innerText=l}),n.addEventListener("click",function(){l>1&&(l--,y[e].lastElementChild.innerText=l)})}
