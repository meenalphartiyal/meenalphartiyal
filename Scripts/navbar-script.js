var option = document.getElementsByClassName("option");
var close_menu = document.getElementById("drop-menu");

Array.from(option).forEach(function(element) {
  element.addEventListener('click', myfunction => {
    close_menu.checked = false;
  })
});

function changeColor() {
  if(close_menu.checked == true)
  {
    $("nav").css("background" , "transparent");
  }
  else
  $("nav").css("background" , "white");
}