$(document).ready(function(){
  $("#home")[0].style.display = "none";
  setTimeout(function () {
    $("#chargementI")[0].style.display = "none";
    document.querySelector("body").className = "background-black";
    $("#home")[0].style.display = "block";
  }, 2500);
});
