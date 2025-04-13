console.log("Project: FAQ");



const faq = document.querySelector(".faq");

// Event Delegation: Handle clicks on all questions
faq.addEventListener("click", function (e) {
  if (e.target.classList.contains("question")) {
    e.stopPropagation();

    const currentItem = e.target.parentElement;
    const currentAnswer = currentItem.querySelector(".answer");

    currentAnswer.classList.toggle("show");
  }
});

// Click outside to collapse all
document.addEventListener("click", function () {
  const allAnswers = document.querySelectorAll(".answer.show");
  allAnswers.forEach(answer => answer.classList.remove("show"));
});