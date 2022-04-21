"strict";

//SELECT RATING
let stars;
const ratings = document.querySelector(".rating-list");
const items = document.getElementsByTagName("li");

for (let i = 0; i < items.length; i++)
  items[i].addEventListener("click", function () {
    for (let item of items) {
      item.classList.remove("active");
    }
    items[i].classList.toggle("active");
    stars = items[i].textContent;
  });

// SUBMIT RATING
const submitCard = document.getElementById("submit-card");
const finalCard = document.getElementById("final-card");
const submitBtn = document.querySelector(".btn");
submitBtn.addEventListener("click", function () {
  submitCard.classList.toggle("hidden");
  finalCard.classList.toggle("hidden");
  document.querySelector(".rating").textContent = stars;
});
