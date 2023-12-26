"use strict"

document.addEventListener("DOMContentLoaded", function () {
  //obtient les references de licone du menu burger, du menu de navigation et de l'overlay
  const headerMobile = document.querySelector(".header-mobile");
  const navMobile = document.querySelector(".nav-mobile");
  const navMobileClose = document.querySelector(".nav-mobile-close")
  const mobileOverlay = document.querySelector(".mobile-overlay")
  //ajoute un evenement quand on clic sur l'icone du menu burger
  headerMobile.addEventListener("click", function () {
    //bascule la clsse 'active' pour affiche/masquer le menu de navigation et l'overlay
    navMobile.classList.toggle("active");
    mobileOverlay.classList.toggle("active");
  });
  //ajoute un evenement quand on clic sur l'icone de croix dans le menu de navigation
  navMobileClose.addEventListener("click", function () {
    //bascule la clsse 'active' pour affiche/masquer le menu de navigation et l'overlay
    navMobile.classList.toggle("active");
    mobileOverlay.classList.toggle("active");
  });
  //ajoute un evenement quand on clic sur l'overlay
  mobileOverlay.addEventListener("click", function () {
    //bascule la clsse 'active' pour affiche/masquer le menu de navigation et l'overlay
    navMobile.classList.toggle("active");
    mobileOverlay.classList.toggle("active");
  });
});


let swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
});


document.addEventListener("DOMContentLoaded", function (){
  let x="on"; 
  let connexionButton = document.querySelector(".connexionButton")
  const connexionClose = document.querySelector(".close")
  const connexion = document.querySelector(".container")
  //ajoute un evenement quand on clic sur le boutton de connexion
  connexionButton.addEventListener("click",function (){
    connexion.classList.toggle("active");
    //change la couleur du boutton connexion  
    if (x=="on"){
      connexionButton.style.color = "#f8fafc";
      x="off";
    } else{
      connexionButton.style.color = "black";
      x="on";
    }
  })
  //ajoute un evenement quand on clic sur l'icone de croix de la page de connexion
  connexionClose.addEventListener("click",function (){
    connexion.classList.toggle("active");
  })
})



let y = "on";
let darkMode = document.querySelector(".dark-mode") 
let darkTexte = document.querySelector(".dark-txt")
let body = document.querySelector("body") 
let header = document.querySelector(".header")
let headerMobile = document.querySelector(".header-mobile")
let mainTitre1 = document.querySelector(".titre h1")
let mainTitre2 = document.querySelector(".titre p")
let navMobile2 = document.querySelector(".nav-mobile")
let navMobileClose2 = document.querySelector(".nav-mobile-close")
let container= document.querySelector(".container")
let close = document.querySelector(".close")
let input1 = document.querySelector(".input1")
let input2 = document.querySelector(".input2")
let bottomP = document.querySelector(".liens")
let bottomP1 = document.querySelector(".liens1")
let bottomP2 = document.querySelector(".liens2")
let bottomP3 = document.querySelector(".liens3")
let bottomP4 = document.querySelector(".liens4")
let conexion = document.querySelector(".connexionButton")
let inscription = document.querySelector(".inscrireButton")




darkMode.addEventListener('click', function(){
  darkMode.classList.toggle("active")
  if (y=="on"){
    darkMode.style.background = "#737373";
    body.style.background = "#78350f";
    header.style.background = "#333";
    headerMobile.style.background = "#404040";
    navMobileClose2.style.background = "#404040";
    navMobile2.style.background = "#333";
    bottomP.style.color = "#f1f1f1"
    bottomP1.style.color = "#f1f1f1"
    bottomP2.style.color = "#f1f1f1"
    bottomP3.style.color = "#f1f1f1"
    bottomP4.style.color = "#f1f1f1"
    darkTexte.style.color = "#f1f1f1"
    mainTitre1.style.color = "#f1f1f1"
    mainTitre2.style.color = "#f1f1f1"
    container.style.background = "#737373"
    close.style.background = "#525252"
    input1.style.background = "#333"
    input2.style.background = "#333"
    conexion.style.background = "#737373"
    conexion.style.color = "#f1f1f1"
    inscription.style.background = "#737373"
    inscription.style.color = "#f1f1f1"
    y="off";
  } else{
    darkMode.style.background = "#333";
    body.style.background = "#e4d4b6";
    header.style.background = "#f1f5f9";
    headerMobile.style.background = "#e2e8f0";
    navMobileClose2.style.background = "#e2e8f0";
    navMobile2.style.background = "#e2e8f0";
    bottomP.style.color = "#111827"
    bottomP1.style.color = "#111827"
    bottomP2.style.color = "#111827"
    bottomP3.style.color = "#111827"
    bottomP4.style.color = "#111827"
    darkTexte.style.color = "black"
    mainTitre1.style.color = "black"
    mainTitre2.style.color = "black"
    container.style.background = "#f1f5f9"
    close.style.background = "#abafb6"
    input1.style.background = "white"
    input2.style.background = "white"
    conexion.style.background = "#abafb6"
    conexion.style.color = "#111827"
    inscription.style.background = "#abafb6"
    inscription.style.color = "#111827"
    y="on";
  }
})


document.addEventListener("DOMContentLoaded", function (){
  const menuT = document.querySelectorAll(".nav-mobile-menu a")
  let z = "on";
  darkMode.addEventListener('click', function(){
    if (z == "on"){
      menuT.forEach(element =>{
        element.style.color = "#f1f1f1"
        z = "off";
      })
    } else {
      menuT.forEach(element =>{
        element.style.color = "#111827"
        z = "on";
      })
    }
  })
})

document.addEventListener("DOMContentLoaded", function (){
  const svgMenu = document.querySelectorAll("#menu")
  let a = "on";
  darkMode.addEventListener('click', function(){
    if (a == "on"){
      svgMenu.forEach(element =>{
        element.style.stroke = "#f1f1f1"
        a = "off";
      })
    } else {
      svgMenu.forEach(element =>{
        element.style.stroke = "#111827"
        a = "on";
      })
    }
  })
})

darkMode.addEventListener("click",function (){
  let monLogo = document.querySelector("img").getAttribute('src');
  if (monLogo =="img/Harry_potter_logo.png"){
    document.querySelector("img").src = "img/Harry_potter_logo_blanc.png";
  } else {
    document.querySelector("img").src = "img/Harry_potter_logo.png";
  }
})