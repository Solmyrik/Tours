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
