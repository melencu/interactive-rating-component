"strict";

const submitCard = document.getElementById("submit-card");
const finalCard = document.getElementById("final-card");
const submitBtn = document.querySelector(".btn");

// CHANGE THE BUTTON TEXT AFTER SELECTING A RATING
const pickRating = document.querySelectorAll("label");
for (let star of pickRating) {
  star.addEventListener("click", () => {
    submitBtn.textContent = "Submit";
  });
}

// SUBMIT RATING
submitBtn.addEventListener("click", () => {
  const rating = document.querySelector('input[name="star"]:checked').value;
  if (rating) {
    submitCard.classList.toggle("hidden");
    finalCard.classList.toggle("hidden");
    document.querySelector(".rating").textContent = rating;
  }
});
