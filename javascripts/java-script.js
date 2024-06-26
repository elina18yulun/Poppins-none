
document.addEventListener("DOMContentLoaded", function() {


let halls = document.querySelectorAll('.butts .hall');
let info = document.querySelector('.info .info1 img');

halls.forEach(function(hall) {
    hall.addEventListener('click', function() {
        info.src = './img/info3.png';
    });
});

let planetari = document.querySelectorAll('.butts .planetari');

planetari.forEach(function(planetari) {
    planetari.addEventListener('click', function() {
        info.src = './img/info1.png';
    });
});

let restouran = document.querySelectorAll('.butts .restouran');

restouran.forEach(function(restouran) {
    restouran.addEventListener('click', function() {
        info.src = './img/info2.png';
    });
});

  });


  document.addEventListener("DOMContentLoaded", function() {
    let clickCount = 0;
  
    document.getElementById("page1").addEventListener("click", function() {
    clickCount++;
    
    if (clickCount === 1) {
      this.src = "./img/pag3.png"; 
    } else if (clickCount === 2) {
      this.src = "./img/pag4.png"; 
    } else if (clickCount === 3) {
      this.src = "./img/pag5.png";
      clickCount = 0; 
    }
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    let clickCount = 0;
  
    document.getElementById("page2").addEventListener("click", function() {
    clickCount++;
    
    if (clickCount === 1) {
      this.src = "./img/pag6.png"; 
    } else if (clickCount === 2) {
      this.src = "./img/pag7.png"; 
    } else if (clickCount === 3) {
      this.src = "./img/pag8.png";
      clickCount = 0; 
    }
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    let modal = document.getElementById("modal");
    let openmodal = document.getElementById ("s11");
    let closemodal = document.querySelector(".close");

    openmodal.addEventListener("click", function(){
    modal.style.display = "block";
    });

    closemodal.addEventListener("click", function(){
    modal.style.display = "none";

    });

});

document.addEventListener("DOMContentLoaded", function() {
    let modal = document.getElementById("modal");
    let openmodal = document.getElementById ("s12");
    let closemodal = document.querySelector(".close");

    openmodal.addEventListener("click", function(){
    modal.style.display = "block";
    });

    closemodal.addEventListener("click", function(){
    modal.style.display = "none";

    });

});

document.addEventListener("DOMContentLoaded", function() {
    let modal = document.getElementById("modal");
    let openmodal = document.getElementById ("s13");
    let closemodal = document.querySelector(".close");

    openmodal.addEventListener("click", function(){
    modal.style.display = "block";
    });

    closemodal.addEventListener("click", function(){
    modal.style.display = "none";

    });

});

document.addEventListener("DOMContentLoaded", function() {
    let modal = document.getElementById("modal");
    let openmodal = document.getElementById ("s21");
    let closemodal = document.querySelector(".close");

    openmodal.addEventListener("click", function(){
    modal.style.display = "block";
    });

    closemodal.addEventListener("click", function(){
    modal.style.display = "none";

    });

});

document.addEventListener("DOMContentLoaded", function() {
    let modal = document.getElementById("modal");
    let openmodal = document.getElementById ("s22");
    let closemodal = document.querySelector(".close");

    openmodal.addEventListener("click", function(){
    modal.style.display = "block";
    });

    closemodal.addEventListener("click", function(){
    modal.style.display = "none";

    });

});

document.addEventListener("DOMContentLoaded", function() {
    let modal = document.getElementById("modal");
    let openmodal = document.getElementById ("s31");
    let closemodal = document.querySelector(".close");

    openmodal.addEventListener("click", function(){
    modal.style.display = "block";
    });

    closemodal.addEventListener("click", function(){
    modal.style.display = "none";

    });

});
  
  
  

