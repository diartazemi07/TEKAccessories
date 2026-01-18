document.addEventListener("DOMContentLoaded", () => {
  const stars = document.querySelectorAll('input[name="da-rate"]');

  stars.forEach(star => {
    star.addEventListener("change", () => {
      const rating = star.dataset.rating;

      alert(`Thank you for rating us ${rating} star(s)! ⭐`);

      // reset stars pas alert
      setTimeout(() => {
        stars.forEach(s => (s.checked = false));
      }, 150);
    });
  });
});


function daVote() {
  alert("Thank you for voting! 🙏");
}
