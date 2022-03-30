(()=>{"use strict";const e=e=>{const t="a"==e.tagName.toLowerCase()?e.getAttribute("href").substr(1):e.closest("a").getAttribute("href").substr(1);document.getElementById(t).scrollIntoView({behavior:"smooth",block:"start"})},t=({timing:e,draw:t,duration:o})=>{let a=performance.now();requestAnimationFrame((function r(c){let n=(c-a)/o;n>1&&(n=1);let l=e(n);t(l),n<1&&requestAnimationFrame(r)}))};(e=>{const t=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),a=document.getElementById("timer-seconds"),r=()=>{let e=(()=>{let e=(new Date("01 april 2022").getTime()-(new Date).getTime())/1e3,t=Math.floor(e/60/60),o=Math.floor(e/60%60),a=Math.floor(e%60);return t=t<10?"0"+t:t,o=o<10?"0"+o:o,a=a<10?"0"+a:a,{timeRemainig:e,hours:t,minutes:o,seconds:a}})();t.textContent=e.hours,o.textContent=e.minutes,a.textContent=e.seconds,e.timeRemainig<=0&&(clearInterval(setInterval(r,1e3)),t.textContent="00",o.textContent="00",a.textContent="00")};setInterval(r,1e3),r()})(),(()=>{const t=document.querySelector("menu");document.addEventListener("click",(o=>(o=>{if(o.target.closest(".menu")||o.target.closest("menu")){if(o.preventDefault(),o.target.matches("ul>li>a"))e(o.target);else if(!o.target.classList.contains("close-btn")&&o.target.closest("menu"))return}else if(!t.classList.contains("active-menu"))return;t.classList.toggle("active-menu")})(o)))})(),(()=>{const e=document.querySelector(".popup"),o=e.querySelector(".popup-content");document.querySelectorAll(".popup-btn").forEach((a=>{a.addEventListener("click",(()=>{e.style.display="block",window.outerWidth>768&&t({duration:400,timing:e=>e,draw(e){o.style.top=-50+Math.round(60*e)}})}))})),e.addEventListener("click",(t=>{t.target.closest(".popup-content")&&!t.target.classList.contains("popup-close")||(e.style.display="none")}))})(),document.querySelector('a[href="#service-block"]').addEventListener("click",(t=>{t.preventDefault(),e(t.target)})),document.querySelectorAll(".calc-item").forEach((e=>{e.classList.contains("calc-type")||e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/gi,"")}))})),document.querySelectorAll("form").forEach((e=>{e.addEventListener("input",(e=>{e.target.matches(".form-phone")?e.target.value=e.target.value.replace(/[^\d\(\)\-]/gi,""):e.target.matches(".form-email")?e.target.value=e.target.value.replace(/[^\w\-\@\.\!\~\*\']/gi,""):(e.target.matches(".mess")||e.target.matches('input[name="user_name"]'))&&(e.target.value=e.target.value.replace(/[^А-ЯЁа-яё\s\-]/,""))}))})),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const a=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===a?(e.classList.add("active"),o[t].classList.remove("d-none")):(e.classList.remove("active"),o[t].classList.add("d-none"))}))}}))})(),(()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item");let o=document.querySelectorAll(".dot");const a=document.querySelector(".portfolio-dots");let r,c=0;const n=(e,t,o)=>{e[t].classList.remove(o)},l=(e,t,o)=>{e[t].classList.add(o)},s=()=>{n(t,c,"portfolio-item-active"),n(o,c,"dot-active"),c++,c>=t.length&&(c=0),l(t,c,"portfolio-item-active"),l(o,c,"dot-active")},i=(e=1500)=>{r=setInterval(s,e)};t.length>0&&(a.innerHTML="",t.forEach(((e,t)=>{const o=document.createElement("li");o.classList.add("dot"),e.classList.contains("slide-active")&&(o.classList.add("slide-active"),c=t),a.append(o)})),o=document.querySelectorAll(".dot"),e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(n(t,c,"portfolio-item-active"),n(o,c,"dot-active"),e.target.matches("#arrow-right")?c++:e.target.matches("#arrow-left")?c--:e.target.classList.contains("dot")&&o.forEach(((t,o)=>{e.target===t&&(c=o)})),c>=t.length&&(c=0),c<0&&(c=t.length-1),l(t,c,"portfolio-item-active"),l(o,c,"dot-active"))}))),e.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearTimeout(r)}),!0),e.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&i(2e3)}),!0),i(2e3)})(),((e=100)=>{const o=document.querySelector(".calc-block"),a=document.querySelector(".calc-type"),r=document.querySelector(".calc-square"),c=document.querySelector(".calc-count"),n=document.querySelector(".calc-day"),l=document.getElementById("total");let s,i;o.addEventListener("input",(o=>{o.target!==a&&o.target!==r&&o.target!==c&&o.target!==n||(()=>{const o=+a.options[a.selectedIndex].value,u=r.value;let d=0,m=1,v=1;c.value>1&&(m+=+c.value/10),n.value&&n.value<5?v=2:n.value&&n.value<10&&(v=1.5),d=a.value&&r.value?e*o*u*m*v:0,s=+l.textContent,i=d,t({duration:400,timing:e=>e,draw(e){l.textContent=s+Math.round((i-s)*e)}})})()}))})(100)})();