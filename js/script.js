const iconMenu = document.querySelector(".header__burger");
const menuBody = document.querySelector(".header__body");
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("active");
    menuBody.classList.toggle("active");
  });
}

const listMenu = document.querySelector(".menu__list");
listMenu.addEventListener("click", (e) => {
  if (e.target.className === "menu__link") {
    document.body.classList.remove("_lock");
    iconMenu.classList.remove("_active");
    menuBody.classList.remove("_active");
  }
});

function ibg() {
  let ibg = document.querySelectorAll(".ibg");
  for (let i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      ibg[i].style.backgroundImage = "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
    }
  }
}
ibg();

//slider
const mainSwiperContainer = document.querySelector(".main-swiper");

if (mainSwiperContainer) {
  const mainSwiper = new Swiper(".main-swiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1,
    slideToClickedSlide: true,
  });

  // Initialize the thumbnail Swiper
  const thumbnailSwiper = new Swiper(".thumbnail-swiper", {
    spaceBetween: 24,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      320: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
    },
  });

  // Make the main swiper control the thumbnail swiper
  mainSwiper.on("slideChange", function () {
    const activeIndex = mainSwiper.realIndex;
    thumbnailSwiper.slides.removeClass("swiper-slide-thumb-active");
    thumbnailSwiper.slides.eq(activeIndex).addClass("swiper-slide-thumb-active");
  });

  // Добавление обработки клика для миниатюр
  thumbnailSwiper.on("click", function (swiper) {
    const clickedIndex = swiper.clickedIndex;
    if (clickedIndex !== undefined) {
      mainSwiper.slideToLoop(clickedIndex);
    }
  });
}
