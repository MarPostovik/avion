import"./animate-e723a332.js";let t=document.getElementById("gamburger-menu-icon"),a=document.querySelector(".bottom-line-nav"),e=document.querySelector("nav");t.addEventListener("click",()=>{a.style.display==="flex"?(a.style.display="none",e.classList.add("animate__fadeOutLeft"),setTimeout(()=>{e.classList.remove("active"),e.classList.remove("animate__fadeOutLeft")},500),e.classList.remove("animate__fadeInLeft"),t.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M14 3H2V4H14V3Z" fill="#2A254B"/>
                          <path d="M14 12H2V13H14V12Z" fill="#2A254B"/>
                          <path d="M14 6H2V7H14V6Z" fill="#2A254B"/>
                          <path d="M14 9H2V10H14V9Z" fill="#2A254B"/>
                        </svg>`):(a.style.display="flex",e.classList.add("active"),e.classList.add("animate__fadeInLeft"),t.innerHTML='<ion-icon name="close-outline" class="close-nav"></ion-icon>')});
