const navigationMenuIcon=document.querySelector(".navigation__menu_icon"),navigationList=document.querySelector(".navigation__list"),navigationLinks=document.querySelectorAll(".navigation__link");navigationMenuIcon.addEventListener("click",function(n){navigationMenuIcon.classList.toggle("active_menu"),navigationList.classList.toggle("active_menu")}),navigationList.addEventListener("click",function(n){navigationLinks.forEach(function(n){n.classList.contains("active_link")&&n.classList.remove("active_link")}),n.target.classList.add("active_link")});