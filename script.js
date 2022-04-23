"strict";

// SUBMIT RATING
const submitCard = document.getElementById("submit-card");
const finalCard = document.getElementById("final-card");
const submitBtn = document.querySelector(".btn");
submitBtn.addEventListener("click", function () {
  const rating = document.querySelector('input[name="star"]:checked').value;
  if (rating) {
    submitCard.classList.toggle("hidden");
    finalCard.classList.toggle("hidden");
    document.querySelector(".rating").textContent = rating;
  }
});
