let items = document.querySelectorAll(".item");
let box = document.querySelector(".box");


items.forEach((item) => {
  item.addEventListener("click", function () {
    let imgSrc = this.querySelector("img").src;
    box.style.backgroundImage = `url(${imgSrc})`;
    box.style.backgroundSize = "contain";
    box.style.backgroundRepeat = "no-repeat";
    box.style.backgroundPosition = "center";
  });
});

let btn = document.querySelector(".btn");
btn.addEventListener("click", function () {

  console.log("Button clicked");
});
