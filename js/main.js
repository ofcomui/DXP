document.addEventListener('DOMContentLoaded', () => {
  "use strict";
  // Menu
  const menu = document.querySelector(".menu");
  const menuMain = menu.querySelector(".menu-main");
  const goBack = menu.querySelector(".go-back");
  const menuTrigger = document.querySelector(".mobile-menu-trigger");
  const closeMenu = menu.querySelector(".mobile-menu-close");

  // const showHideMenu = document.querySelectorAll('.menu-item-has-children');
  // for (var i = 0; i < showHideMenu.length; i++) {    
  //   showHideMenu[i].addEventListener("click", function (e) { 

  //     for (var j = 0; j < showHideMenu.length; j++) {
  //         showHideMenu[j].classList.remove("mystyle")
  //     }

  //     if(e.target.classList.contains("mystyle") == true){
  //       e.target.classList.remove("mystyle");
  //     }else{
  //         e.target.classList.add("mystyle");
  //     }      
  //   });
  // }


  let subMenu;
  menuMain.addEventListener("click", (e) => {
    if (!menu.classList.contains("active")) {
      return;
    }
    if (e.target.closest(".menu-item-has-children")) {
      const hasChildren = e.target.closest(".menu-item-has-children");
      showSubMenu(hasChildren);
    }
  });
  goBack.addEventListener("click", () => {
    hideSubMenu();
  })
  menuTrigger.addEventListener("click", () => {
    toggleMenu();
  })
  closeMenu.addEventListener("click", () => {
    toggleMenu();
  })
  document.querySelector(".menu-overlay").addEventListener("click", () => {
    toggleMenu();
  })

  function toggleMenu() {
    menu.classList.toggle("active");
    document.querySelector(".menu-overlay").classList.toggle("active");
  }

  function showSubMenu(hasChildren) {
    subMenu = hasChildren.querySelector(".sub-menu");
    subMenu.classList.add("active");
    subMenu.style.animation = "slideLeft 0.5s ease forwards";
    const menuTitle = hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
    menu.querySelector(".current-menu-title").innerHTML = menuTitle;
    menu.querySelector(".mobile-menu-head").classList.add("active");
  }

  function hideSubMenu() {
    subMenu.style.animation = "slideRight 0.5s ease forwards";
    setTimeout(() => {
      subMenu.classList.remove("active");
    }, 300);
    menu.querySelector(".current-menu-title").innerHTML = "";
    menu.querySelector(".mobile-menu-head").classList.remove("active");
  }

  window.onresize = function () {
    if (this.innerWidth > 991) {
      if (menu.classList.contains("active")) {
        toggleMenu();
      }

    }
  }
  // Cliick on Link

  // function myFunction() {
  //   var element = document.getElementById("has-Child");
  //   element.classList.toggle("mystyle");
  // }

  /* Search ****************/
  let searchIcon = document.querySelector('#search-icon');
  let searchForm = document.querySelector('.search-form');

  searchIcon.onclick = () => {
    searchIcon.classList.toggle('fa-times');
    searchForm.classList.toggle('active');
    menu.classList.remove('fa-times');
    // navbar.classList.remove('active');
  }

  window.onscroll = () => {
    menu.classList.remove('fa-times');
    // navbar.classList.remove('active');
   // searchIcon.classList.remove('fa-times');
    //searchForm.classList.remove('active');
  }
});


// for main menu 
$(document).ready(function(){
  $(".menu-item-has-children").click(function (){
    if($(this).children(".sub-menu").hasClass("sub-menu-show")){
      $(this).children(".sub-menu").removeClass("sub-menu-show");
      $(this).find(".fa-angle-down").removeClass("rotate-arrow");
      //alert("If"+ $(this).children(".fa-angle-down").text("if"));
    }
    else{   
    $(".menu-item-has-children .sub-menu").removeClass("sub-menu-show"); 
     $(this).children(".sub-menu").addClass("sub-menu-show");
     $(".menu-item-has-children .fa-angle-down").removeClass("rotate-arrow");
     $(this).find(".fa-angle-down").addClass("rotate-arrow");
     
    }
  });
  $("#search-icon").click(function(){
    $(".menu-item-has-children .sub-menu").removeClass("sub-menu-show");
    $(".menu-item-has-children .fa-angle-down").removeClass("rotate-arrow");
  })

  $(".mobile-nav-toggle").click(function(){
    $(this).toggleClass("btn-close close-bars");
    $("body").toggleClass("overflow-hidden");
    });
   
  });