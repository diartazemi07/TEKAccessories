const products = [
  {
    id: 1,
    name: "Classic Men Watch",
    price: 120,
    desc: "Timeless design with premium steel finish.",
    img: "img/men-watch1.jpg"
  },
  {
    id: 2,
    name: "Leather Bracelet",
    price: 35,
    desc: "Genuine leather bracelet for everyday style.",
    img: "img/leatherbracelet.png"
  },
  {
    id: 3,
    name: "Elegant Women Watch",
    price: 140,
    desc: "Elegant design perfect for daily wear.",
    img: "img/women-watch1.jpg"
  },
  {
    id: 4,
    name: "Gold Jewelry",
    price: 60,
    desc: "Luxury gold jewelry with refined details.",
    img: "img/women-ring.jpg"
  },
  {
    id: 5,
    name: "Luxury Steel Watch",
    price: 150,
    desc: "Premium steel watch with modern elegance.",
    img: "img/luxurywatch.jpg"
  },
  {
    id: 6,
    name: "Sport Chrono Watch",
    price: 110,
    desc: "Sport chronograph inspired by performance.",
    img: "img/sportchrono.jpg"
  },
  {
    id: 7,
    name: "Metal Bracelet",
    price: 40,
    desc: "Durable metal bracelet with sleek design.",
    img: "img/men-bracelet.jpg"
  },
  {
    id: 8,
    name: "Silver Chain",
    price: 45,
    desc: "Minimal silver chain for modern men.",
    img: "img/silverchain.jpg"
  },
  {
    id: 9,
    name: "Rose Gold Watch",
    price: 160,
    desc: "Rose gold finish with timeless beauty.",
    img: "img/rosegoldwatch.jpg"
  },
  {
    id: 10,
    name: "Minimal Watch",
    price: 130,
    desc: "Clean minimal design for everyday elegance.",
    img: "img/minimalwatch.jpg"
  },
  {
    id: 11,
    name: "Diamond Necklace",
    price: 90,
    desc: "Sparkling necklace with premium stones.",
    img: "img/diamondnecklace.jpg"
  },
  {
    id: 12,
    name: "Elegant Earrings",
    price: 55,
    desc: "Elegant earrings for special occasions.",
    img: "img/elegantearrings.jpg"
  },
  {
    id: 13,
    name: "Men Ring",
    price: 50,
    desc: "Classic ring with masculine finish.",
    img: "img/menring.jpg"
  },
  {
    id: 14,
    name: "Gold Bracelet",
    price: 70,
    desc: "Luxury bracelet with polished gold tone.",
    img: "img/goldbraceletwomen.jpg"
  },
  {
    id: 15,
    name: "Men Necklace",
    price: 55,
    desc: "Stylish necklace for casual & formal looks.",
    img: "img/mennecklace.jpg"
  },
  {
    id: 16,
    name: "Jewelry Set",
    price: 120,
    desc: "Perfectly matched jewelry set.",
    img: "img/jewelryset.jpg"
  },
  {
    id: 17,
    name: "Black Edition Watch",
    price: 170,
    desc: "Bold black watch with premium craftsmanship.",
    img: "img/blackwatch.jpg"
  },
  {
    id: 18,
    name: "Diamond Ring",
    price: 285,
    desc: "Classic diamond ring with brilliant shine.",
    img: "img/diamondring.jpg"
  },
  {
    id: 19,
    name: "Beaded Bracelet",
    price: 30,
    desc: "Natural stone beads with elastic fit.",
    img: "img/menbeaded.jpg"
  },
  {
    id: 20,
    name: "Luxury Crystal Watch",
    price: 180,
    desc: "Crystal details with a luxurious finish.",
    img: "img/crystalwatch.jpg"
  }
];


const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get("id"));
const product = products.find(p => p.id === productId);

document.getElementById("product-img").src = product.img;
document.getElementById("product-name").textContent = product.name;
document.getElementById("product-desc").textContent = product.desc;
document.getElementById("product-price").textContent = "€" + product.price;
document.getElementById("buy-btn").href ="checkout.html?id=" + product.id;


function addToCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name: product.name, price: product.price, qty: 1 });
  localStorage.setItem("cart", JSON.stringify(cart));
  window.location.href = "cart.html";
}
