let cart = JSON.parse(localStorage.getItem("cartData")) || [];

const cartDiv = document.getElementById("cartData");
const totalPriceEl = document.getElementById("totalPrice");

function displayCart() {
    cartDiv.innerHTML = "";
    let total = 0;

    cart.forEach((el, index) => {
        const div = document.createElement("div");
        div.className = "cart-item";

        const img = document.createElement("img");
        img.src = el.image;

        const title = document.createElement("h3");
        title.innerText = el.title;

        const price = document.createElement("p");
        price.innerText = `Price: $${el.price}`;

        const btn = document.createElement("button");
        btn.innerText = "Remove";
        btn.addEventListener("click", () => removeItem(index));

        total += el.price;

        div.append(img, title, price, btn);
        cartDiv.append(div);
    });

    totalPriceEl.innerText = `Total Price: $${total.toFixed(2)}`;
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

displayCart();
