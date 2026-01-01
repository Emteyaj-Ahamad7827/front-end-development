// let cart = JSON.parse(localStorage.getItem("cartData")) || [];

// const cartDiv = document.getElementById("cartData");
// const totalPriceEl = document.getElementById("totalPrice");

// cart.push({
//   title: "Product Name",
//   price: 999,
//   image: "image-url"
// });

// function displayCart() {
//     cartDiv.innerHTML = "";
//     let total = 0;

//     cart.forEach((el, index) => {
//         const div = document.createElement("div");
//         div.className = "cart-item";

//         const img = document.createElement("img");
//         img.src = el.image;

//         const title = document.createElement("h3");
//         title.innerText = el.title;

//         const price = document.createElement("p");
//         price.innerText = `Price: $${el.price}`;

//         const btn = document.createElement("button");
//         btn.innerText = "Remove";
//         btn.addEventListener("click", () => removeItem(index));

//         total += el.price;

//         div.append(img, title, price, btn);
//         cartDiv.append(div);
//     });

//     totalPriceEl.innerText = `Total Price: $${total.toFixed(2)}`;
// }

// function removeItem(index) {
//     cart.splice(index, 1);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     displayCart();
// }

// displayCart();



// new code

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartData = document.getElementById("cartData");
const totalDiv = document.getElementById("total");
const cartPage = document.getElementById("cartPage");


function displayCart() {
    cartData.innerHTML = "";

    if (cart.length === 0) {
        cartData.innerHTML = "<h2>Your cart is empty</h2>";
        totalDiv.innerText = "";
        return;
    }

    let total = 0;

    cart.forEach((el, index) => {
        total += el.price * el.quantity;

        const div = document.createElement("div");
        div.className = "cart-item";

        div.innerHTML = `
            <img src="${el.image}" alt="">
            <h3>${el.title}</h3>
            <p>Price: ₹${el.price}</p>
            <p>Quantity: ${el.quantity}</p>
            <button onclick="increaseQty(${index})">+</button>
            <button onclick="decreaseQty(${index})">-</button>
            <br>
            <button onclick="removeItem(${index})">Remove</button>
        `;

        cartData.append(div);
    });

    totalDiv.innerText = `Total Price: ₹ ${total.toFixed(2)}`;
}

function increaseQty(index) {
    cart[index].quantity++;
    updateCart();
}

function decreaseQty(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity--;
    }
    updateCart();
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

// Initial load
displayCart();
