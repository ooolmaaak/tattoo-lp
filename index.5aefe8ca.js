!function(){var e=document.querySelector(".menu-btn"),t=document.querySelector(".close-menu"),n=document.querySelector(".menu"),o=document.querySelectorAll(".menu-link"),c=document.querySelectorAll('a[href^="#"]');function i(){n.style.opacity=0,setTimeout((function(){n.style.display="none"}),500)}function u(e){var t=document.querySelector(e).offsetTop;window.scrollTo({top:t,behavior:"smooth"})}e.onclick=function(){n.style.display="flex",setTimeout((function(){n.style.opacity=1}),10)},t.onclick=function(){i()},window.onclick=function(e){e.target==n&&i()},window.addEventListener("keydown",(function(e){"Escape"===e.key&&i()})),o.forEach((function(e){e.addEventListener("click",(function(){i(),u(this.getAttribute("href"))}))})),c.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),u(this.getAttribute("href"))}))}))}();
//# sourceMappingURL=index.5aefe8ca.js.map