function filterProducts(category) {
  const products = document.querySelectorAll(".da-product-item");
  const buttons = document.querySelectorAll(".da-filter-btn");

  // reset active button
  buttons.forEach(btn => btn.classList.remove("active"));

  // set active button
  event.target.classList.add("active");

  products.forEach(product => {
    if (category === "all") {
      product.style.display = "block";
    } else {
      if (product.getAttribute("data-category") === category) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    }
  });
}
