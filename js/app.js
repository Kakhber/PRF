let mySlide = 0;
showSlideImg();

function showSlideImg() {
  let i;
  let slideImg = document.getElementsByClassName("my-img");
  for (i = 0; i < slideImg.length; i++) {
    slideImg[i].style.display = "none";
  }
    mySlide++;
  if (mySlide > slideImg.length) {mySlide = 1}
  slideImg[mySlide-1].style.display = "block";
  setTimeout(showSlideImg, 5000); 
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("myslides-photo");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

}

let rivieweIndex = 1;
riviewSlides(rivieweIndex);

function plussRiview(n) {
    riviewSlides(rivieweIndex += n)
};

function currenRiview(n) {
    riviewSlides(rivieweIndex = n);
  }
  function riviewSlides(n) {
    let i;
    let riviews = document.getElementsByClassName("myrecommendation");
    let dotRecommend = document.getElementsByClassName("dot-recommend");
    if (n > riviews.length) {
      rivieweIndex = 1;
    }
    if (n < 1) {
      rivieweIndex = riviews.length;
    }
    for (i = 0; i < riviews.length; i++) {
        riviews[i].style.display = "none";
    }
    for (i = 0; i < dotRecommend.length; i++) {
        dotRecommend[i].className = dotRecommend[i].className.replace(" active", "");
    }
    riviews[rivieweIndex-1].style.display = "block";
    dotRecommend[rivieweIndex-1].className += " active";
  }
  