document.getElementById("outer3").addEventListener("click", toggleState3);

function toggleState3() {
  let galleryView = document.getElementById("galleryView");
  let tilesView = document.getElementById("tilesView");
  let outer = document.getElementById("outer3");
  let slider = document.getElementById("slider3");
  let tilesContainer = document.getElementById("tilesContainer");
  if (slider.classList.contains("active")) {
    slider.classList.remove("active");
    outer.classList.remove("outerActive");
    galleryView.style.display = "flex";
    tilesView.style.display = "none";

    while (tilesContainer.hasChildNodes()) {
      tilesContainer.removeChild(tilesContainer.firstChild);
    }
  } else {
    slider.classList.add("active");
    outer.classList.add("outerActive");
    galleryView.style.display = "none";
    tilesView.style.display = "flex";

    for (let i = 0; i < imgObject.length - 1; i++) {
      let tileItem = document.createElement("div");
      tileItem.classList.add("tileItem");
      tileItem.style.background = "url(" + imgObject[i] + ")";
      tileItem.style.backgroundSize = "contain";
      tilesContainer.appendChild(tileItem);
    }
  }
}

let imgObject = [
  "https://placekitten.com/g/450/450",
  "https://placekitten.com/g/451/451",
  "https://placekitten.com/g/452/452",
  "https://placekitten.com/g/453/453",
  "https://placekitten.com/g/454/454",
  "https://placekitten.com/g/455/455",
  "https://placeimg.com/450/450/architecture",
  "https://placeimg.com/450/450/nature",
  "https://placeimg.com/450/450/people",
  "https://placeimg.com/450/450/tech",
];

let mainImg = 0;
let prevImg = imgObject.length - 1;
let nextImg = 1;

function loadGallery() {
  let mainView = document.getElementById("mainView");
  mainView.style.background = "url(" + imgObject[mainImg] + ")";

  let leftView = document.getElementById("leftView");
  leftView.style.background = "url(" + imgObject[prevImg] + ")";

  let rightView = document.getElementById("rightView");
  rightView.style.background = "url(" + imgObject[nextImg] + ")";

  let linkTag = document.getElementById("linkTag");
  linkTag.href = imgObject[mainImg];
}

function scrollRight() {
  prevImg = mainImg;
  mainImg = nextImg;
  if (nextImg >= imgObject.length - 1) {
    nextImg = 0;
  } else {
    nextImg++;
  }
  loadGallery();
}

function scrollLeft() {
  nextImg = mainImg;
  mainImg = prevImg;

  if (prevImg === 0) {
    prevImg = imgObject.length - 1;
  } else {
    prevImg--;
  }
  loadGallery();
}

document.getElementById("navRight").addEventListener("click", scrollRight);
document.getElementById("navLeft").addEventListener("click", scrollLeft);
document.getElementById("rightView").addEventListener("click", scrollRight);
document.getElementById("leftView").addEventListener("click", scrollLeft);
document.addEventListener("keyup", function (e) {
  if (e.keyCode === 37) {
    scrollLeft();
  } else if (e.keyCode === 39) {
    scrollRight();
  }
});

loadGallery();

var mainListDiv = document.getElementById("mainListDiv"),
    mediaButton = document.getElementById("mediaButton");

mediaButton.onclick = function () {
    
    "use strict";
    
    mainListDiv.classList.toggle("show_list");
    mediaButton.classList.toggle("active");
    
};
/*
*menu
*/
function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}


/*
*Carousel
*/
var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel)

/*
*menu index
*
*/
$(function() {
  $('#navbar.navbar-right ul li a').click(function() {
    //clear active status of any parent LI's
    $('#navbar.navbar-right ul li').removeClass('active');

    // store id of new active sub-nav
    var currSub = $(this).parent();
    currSub.addClass('active')
    var id = currSub.attr('id');

    // clear active status of any sub-nav list
    $('#subnavbar ul.navbar-nav').removeClass('active');

    // set selected sub-nav to active
    $('.' + id).addClass('active');

    console.log($('.' + id).attr('class'));

  });

});
