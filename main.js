let items = document.querySelectorAll(".item");
let box = document.querySelector(".box");

// Har bir item uchun event listener o‘rnatamiz
items.forEach((item) => {
  item.addEventListener("click", function () {
    let imgSrc = this.querySelector("img").src;
    box.style.backgroundImage = `url(${imgSrc})`;
    box.style.backgroundSize = "contain";
    box.style.backgroundRepeat = "no-repeat";
    box.style.backgroundPosition = "center";
  });
});

// Btn uchun alohida event listener o‘rnatamiz
let btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  // Harakatni bu yerda bajarishingiz mumkin, agar kerak bo‘lsa
  console.log("Button clicked");
});
