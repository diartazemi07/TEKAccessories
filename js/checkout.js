const products = [
  { id: 1, name: "Classic Men Watch", price: 120 },
  { id: 2, name: "Leather Bracelet", price: 35 },
  { id: 3, name: "Elegant Women Watch", price: 140 },
  { id: 4, name: "Gold Jewelry", price: 60 },
  { id: 5, name: "Luxury Steel Watch", price: 150 },
  { id: 6, name: "Sport Chrono Watch", price: 110 },
  { id: 7, name: "Metal Bracelet", price: 40 },
  { id: 8, name: "Silver Chain", price: 45 },
  { id: 9, name: "Rose Gold Watch", price: 160 },
  { id: 10, name: "Minimal Watch", price: 130 },
  { id: 11, name: "Diamond Necklace", price: 90 },
  { id: 12, name: "Elegant Earrings", price: 55 },
  { id: 13, name: "Men Ring", price: 50 },
  { id: 14, name: "Gold Bracelet", price: 70 },
  { id: 15, name: "Men Necklace", price: 55 },
  { id: 16, name: "Jewelry Set", price: 120 },
  { id: 17, name: "Black Edition Watch", price: 170 },
  { id: 18, name: "Diamond Ring", price: 285 },
  { id: 19, name: "Beaded Bracelet", price: 30 },
  { id: 20, name: "Luxury Crystal Watch", price: 180 }
];

const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get("id"));

const product = products.find(p => p.id === productId);

document.getElementById("order-product").textContent = product.name;
document.getElementById("order-price").textContent = product.price;
