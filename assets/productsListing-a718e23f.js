import"./animate-d51fc6bf.js";let L=document.getElementById("gamburger-menu-icon"),B=document.querySelector(".bottom-line-nav"),y=document.querySelector("nav");L.addEventListener("click",()=>{B.style.display==="flex"?(B.style.display="none",y.classList.add("animate__fadeOutLeft"),setTimeout(()=>{y.classList.remove("active"),y.classList.remove("animate__fadeOutLeft")},500),y.classList.remove("animate__fadeInLeft"),L.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M14 3H2V4H14V3Z" fill="#2A254B"/>
                          <path d="M14 12H2V13H14V12Z" fill="#2A254B"/>
                          <path d="M14 6H2V7H14V6Z" fill="#2A254B"/>
                          <path d="M14 9H2V10H14V9Z" fill="#2A254B"/>
                        </svg>`):(B.style.display="flex",y.classList.add("active"),y.classList.add("animate__fadeInLeft"),L.innerHTML='<ion-icon name="close-outline" class="close-nav"></ion-icon>')});let b=document.getElementById("products-listing-container"),p=document.getElementById("load-more-btn"),h=document.getElementById("close-clicked-product-btn"),u=document.getElementsByClassName("product-item");for(let e=0;e<b.children.length;e++)e>7&&(b.children[e].style.display="none"),p.addEventListener("click",function(){b.children[e].style.display="flex",p.style.display="none"});document.addEventListener("DOMContentLoaded",function(){var e=new URLSearchParams(window.location.search),i=e.get("category");i!=null&&(k(i),p.style.display="none")});document.addEventListener("DOMContentLoaded",function(){let e=document.getElementsByClassName("link-item");for(let i=0;i<e.length;i++){let t=e[i];t.addEventListener("click",function(r){let l=t.getAttribute("data-category");if(l!=null){let n=t.getAttribute("href")+"?category="+encodeURIComponent(l);window.location.href=n,r.preventDefault()}})}});document.addEventListener("DOMContentLoaded",function(){let e=document.getElementsByClassName("filter-category-btn");for(let i=0;i<e.length;i++){let t=e[i],r=t.getAttribute("data-category");t.addEventListener("click",function(){k(r),p.style.display="none"})}});function k(e){for(let i=0;i<u.length;i++){let t=u[i],r=t.getAttribute("data-category");e==r?t.style.display="flex":t.style.display="none"}}document.addEventListener("DOMContentLoaded",function(){let e=document.getElementsByClassName("filter-ProductType-btn");for(let t=0;t<e.length;t++){let r=e[t],l=r.getAttribute("data-producttype");r.addEventListener("click",function(){i(l),p.style.display="none"})}function i(t){for(let r=0;r<u.length;r++){let l=u[r],o=l.getAttribute("data-producttype");t==o?l.style.display="flex":l.style.display="none"}}});document.addEventListener("DOMContentLoaded",function(){let e=document.getElementsByClassName("filter-brand-btn");for(let t=0;t<e.length;t++){let r=e[t],l=r.getAttribute("data-brand");r.addEventListener("click",function(){i(l)})}function i(t){for(let r=0;r<u.length;r++){let l=u[r],o=l.getAttribute("data-brand");t==o?l.style.display="flex":l.style.display="none"}}});document.addEventListener("DOMContentLoaded",function(){let e=document.getElementsByClassName("filter-price-btn");for(let t=0;t<e.length;t++){let r=e[t],l=r.getAttribute("data-price");r.addEventListener("click",function(){i(l),p.style.display="none"})}function i(t){for(let r=0;r<u.length;r++){let l=u[r],o=l.getAttribute("data-price");t==o?l.style.display="flex":l.style.display="none"}}});let d=document.getElementById("showFiltersBtn"),a=document.getElementById("showSortingBtn"),m=document.querySelector(".filters-container"),g=document.querySelector(".sorting-container");d.addEventListener("click",function(){m.style.display=="flex"?(m.style.display="none",d.style.background="var(--Light-Grey, #F9F9F9)",d.querySelector("svg").style.display="inline-block",d.querySelector("ion-icon").style.display="none",g.style.display="none"):(m.style.display="flex",d.style.background="#e3e6e9",d.querySelector("svg").style.display="none",d.querySelector("ion-icon").style.display="inline-block",a.style.background="var(--Light-Grey, #F9F9F9)",g.style.display="none",a.querySelector("svg").style.display="inline-block",a.querySelector("ion-icon").style.display="none")});a.addEventListener("click",function(){g.style.display=="flex"?(g.style.display="none",a.style.background="#F9F9F9",a.querySelector("svg").style.display="inline-block",a.querySelector("ion-icon").style.display="none"):(g.style.display="flex",a.style.background="#e3e6e9",d.style.background="var(--Light-Grey, #F9F9F9)",m.style.display="none",a.querySelector("svg").style.display="none",a.querySelector("ion-icon").style.display="inline-block",d.querySelector("svg").style.display="inline-block",d.querySelector("ion-icon").style.display="none")});document.addEventListener("DOMContentLoaded",function(){var e=document.getElementsByClassName("dropbtn"),i=document.getElementsByClassName("dropdown-content"),t=-1;document.body.addEventListener("click",function(n){r(n.target)||l(t)});for(let n=0;n<e.length;n++)e[n].addEventListener("click",function(s){s.stopPropagation(),o(n)});function r(n){for(let s=0;s<e.length;s++)if(n===e[s]||i[s].contains(n))return!0;return!1}function l(n){n!==-1&&(i[n].style.display="none",e[n].querySelector("svg").style.display="inline-block",e[n].querySelector("ion-icon").style.display="none",t=-1)}function o(n){n===t?l(n):(l(t),i[n].style.display="block",e[n].querySelector("svg").style.display="none",e[n].querySelector("ion-icon").style.display="inline-block",t=n)}});let v=document.getElementById("products-listing-container");document.addEventListener("DOMContentLoaded",function(){let e=document.getElementsByClassName("sorting-btn");for(let l=0;l<e.length;l++)e[l].addEventListener("click",function(){let o=e[l].getAttribute("data-sort");r(o)});let i=document.getElementById("span-sorted"),t=document.querySelectorAll(".product-item");function r(l){let o=Array.from(t);l==="date"?(o.sort((n,s)=>{let c=n.getAttribute("data-date"),f=s.getAttribute("data-date");return new Date(c)-new Date(f)}),i.innerHTML="Date added"):l==="new"?(o.sort((n,s)=>{let c=new Date(n.getAttribute("data-date"));return new Date(s.getAttribute("data-date"))-c}),i.innerHTML="New arrivals"):l==="best"?(o.sort((n,s)=>{let c=parseInt(n.getAttribute("data-sales"));return parseInt(s.getAttribute("data-sales"))-c}),i.innerHTML="Best sellers"):l==="recent"?(o.sort((n,s)=>{let c=parseInt(n.getAttribute("data-views"));return parseInt(s.getAttribute("data-views"))-c}),i.innerHTML="Recently viewed"):l==="popular"&&(o.sort((n,s)=>{let c=parseInt(n.getAttribute("data-sales"));return parseInt(s.getAttribute("data-sales"))-c}),i.innerHTML="Popular this weeek"),v.innerHTML="";for(let n=0;n<o.length;n++)v.appendChild(o[n])}});v.addEventListener("click",function(e){let i=e.target.closest(".product-item");i&&(i.classList.add("clicked"),h.classList.toggle("shown",i.classList.contains("clicked")));let t=v.querySelector(".product-item.clicked");h.addEventListener("click",function(){t.classList.remove("clicked"),h.classList.remove("shown")})});
