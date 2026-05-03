let cart = [];
let total = 0;

function addToCart(item, price) {
  cart.push({ item, price });
  total += price;
  updateCart();
}

function updateCart() {
  document.getElementById("cart-items").innerHTML = "";

  cart.forEach(c => {
    let li = document.createElement("li");
    li.textContent = `${c.item} - $${c.price}`;
    document.getElementById("cart-items").appendChild(li);
  });

  document.getElementById("total").innerText = total;
}

/* SEARCH FILTER */
function filterMenu() {
  let input = document.getElementById("search").value.toLowerCase();
  let cards = document.getElementsByClassName("card");

  for (let card of cards) {
    let text = card.innerText.toLowerCase();
    card.style.display = text.includes(input) ? "block" : "none";
  }
}

/* DARK MODE */
function toggleTheme() {
  document.body.classList.toggle("dark");
}