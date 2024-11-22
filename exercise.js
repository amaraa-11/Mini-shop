const products = [
  { name: "Сүү", price: 4000, category: "Хүнс", rating: 4.6 },
  { name: "Дэвтэр", price: 2000, category: "Бусад", rating: 4.2 },
  { name: "Чихэр", price: 500, category: "Хүнс", rating: 3.9 },
  { name: "Ус", price: 1500, category: "Хүнс", rating: 5 },
  { name: "Шоколад", price: 6000, category: "Хүнс", rating: 4.2 },
  { name: "Алчуур", price: 2500, category: "Ариун цэвэр", rating: 3.5 },
  { name: "Ногоо", price: 1500, category: "Хүнс", rating: 4.7 },
  { name: "Саван", price: 2000, category: "Ариун цэвэр", rating: 3 },
];
// Жагсаалтыг үүсгэх үндсэн функц
function renderProductList() {
  const container = document.getElementById("productList");
  container.innerHTML = "";
}

// 1 бүтээгдэхүүн render
function renderProduct(product) {
  const li = document.createElement("li");
  const discountedPrice = calculateDiscount(product.price);
}

// Хямдралын үнэ тооцох функц
function calculateDiscount(price) {
  price = product.price;
  return price - (price * 15) / 100;
  // 15%-ийн хямдрал
}
const newArray = products.map(calculateDiscount);
console.log(newArray);

// Үнэлгээнд од нэмэх функц
function getStarRating(rating) {
  return rating > 4 ? "⭐" : ""; // 4-с дээш үнэлгээтэй бол од нэмэх
}

// Жагсаалтыг render хийх
renderProductList();
