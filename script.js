// Component Rendering
$(function () {
    $(".nav-bar").load("../Components/navbar.html");
    $("#footer").load("../Components/footer.html");
});

// Parallax Background
let layer2 = document.getElementById("layer-2");
let layer31 = document.getElementById("layer-31");
let layer32 = document.getElementById("layer-32");
let layer33 = document.getElementById("layer-33");
let layer34 = document.getElementById("layer-34");
let layer4 = document.getElementById("layer-4");
let layer5 = document.getElementById("layer-5");

// Resume Parallax
let resumeLayer1 = document.getElementById("resume-layer-1");
let resumeLayer2 = document.getElementById("resume-layer-2");
let resumeLayer3 = document.getElementById("resume-layer-3");
let resumeLayer4 = document.getElementById("resume-layer-4");
let resumeLayer5 = document.getElementById("resume-layer-5");
let resumeLayer6 = document.getElementById("resume-layer-6");
let resumeLayer7 = document.getElementById("resume-layer-7");
let resumeLayer9 = document.getElementById("resume-layer-9");
let resumeLayer10 = document.getElementById("resume-layer-10");

let projectLayer1 = document.getElementById("project-layer-1");
let projectLayer2 = document.getElementById("project-layer-2");


window.addEventListener('scroll', () => {
    let value = window.scrollY;
    // console.log(value);
    layer2.style.top = value * 0.3 + "px";
    layer31.style.right = value * 0.3 + "px";
    layer32.style.left = value * 0.5 + "px";
    layer33.style.right = value * 0.3 + "px";
    layer34.style.left = value * 0.3 + "px";
    layer4.style.top = value * 0.1 + "px";

    // Resume Parallax Animation  
    resumeLayer2.style.top = value - (value * 0.97) - 60 + "px";
    resumeLayer3.style.top = value - (value * 0.97) - 280 + "px";
    resumeLayer4.style.left = value - (value * 0.8) - 500 + "px";
    resumeLayer5.style.top = value - (value * 1.03) - 90 + "px";
    resumeLayer6.style.right = value - (value * 0.9) - 250 + "px";
    resumeLayer7.style.left = value - (value * 0.95) + 150 + "px";
    resumeLayer9.style.top = value - (value * 1.15) + 294 + "px";
});

$(window).scroll(function() {
  var scroll = $(window).scrollTop();
	$(".resume").css({
		backgroundSize: (scroll/30 + 20)  + "%",
		top: -(scroll/20 - 10)  + "%",
	});
});

//About Section: My Image Reveal Funtcion 
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
}
window.addEventListener("scroll", reveal);

// Project Section: Tab Functioning 
function tab(event, project_section) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("project-section");
  
  for (i = 0; i<tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active_section", "");
  }
  document.getElementById(project_section).style.display = "flex";
  event.currentTarget.className += " active_section";
  
}
document.getElementById("defaultOpen").click();

// Project Section: Project Description and Link Modal Functioning
var modal = document.getElementsByClassName("modal");
var btn = document.getElementsByClassName("myBtn");
var span = document.getElementsByClassName("close");
for(let i=0; i<btn.length; i++)
{
  btn[i].onclick = function() {
    modal[i].style.display = "block";
  }
  span[i].onclick = function() {
    modal[i].style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal[i]) {
      modal[i].style.display = "none";
    }
  }
}
