// Adds src and alt properties to the imgs in videogames.html
if (document.body.classList.contains("videogames_page")) {
  const vidyaImg = document.querySelectorAll(".card_img");
  const vidyaText = document.querySelectorAll(".card_text");

  const getImgs = async () => {
    const resVidya = await fetch("../js/videogames-img.json");
    const vidya = await resVidya.json();

    for (let i = 0; i < vidyaImg.length; i++) {
      vidyaImg[i].src = `${vidya[i].src}`;
      vidyaImg[i].alt = `${vidya[i].alt}`;
      vidyaText[i].innerHTML = `${vidya[i].text}`;
    }
  };
  getImgs();
}

// Adds src and alt properties to the imgs in anime.html
if (document.body.classList.contains("anime_page")) {
  const animeBody = document.querySelectorAll(".card_body");
  const animeBtn = document.querySelectorAll(".card_btn");

  const getImgs = async () => {
    const resAnime = await fetch("../js/anime-img.json");
    const anime = await resAnime.json();

    for (let i = 0; i < animeBody.length; i++) {
      animeBody[i].style.backgroundImage = `url(${anime[i].src})`;
      animeBtn[i].href = `${anime[i].href}`;
    }
  };
  getImgs();
}

// Scroll to top button
let scrollBtn = document.getElementById("to-top");
// When the user scrolls down show the button
window.onscroll = function () {
  showScrollButton();
};

function showScrollButton() {
  if (document.body.scrollTop > (window.innerHeight * .5) || document.documentElement.scrollTop > (window.innerHeight * .5)) {
    scrollBtn.style.display = "block";
    setTimeout(()=> {
      scrollBtn.style.opacity = 1;
    }, 500);
  } else {
    setTimeout(()=> {
      scrollBtn.style.display = "none";
    }, 500);
    // scrollBtn.style.display = "none";
    scrollBtn.style.opacity = 0;
  }
}

// When the user clicks on the button, scroll to the top of the document
function toTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}