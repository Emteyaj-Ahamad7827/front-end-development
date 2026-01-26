const API = "https://fakestoreapi.com/products";

let cartData = JSON.parse(localStorage.getItem("cartData")) || [];

async function ApiCall() {
  try {
    const res = await fetch(API);
    const data = await res.json();
    dataAppend(data);
  } catch (error) {
    console.log(error);
  }
}

window.onload = function () {
  ApiCall();
  updateCartCount();
};

function dataAppend(value) {
  // this is sort & filter code

  let filterData = [];
  const mainDiv = document.querySelector("#mainData");

  mainDiv.innerHTML = "";

  value?.forEach((el) => {
    const childDiv = document.createElement("div");

    const id = document.createElement("h3");
    const img = document.createElement("img");
    const title = document.createElement("h3");
    const description = document.createElement("h3");
    const price = document.createElement("h3");
    const category = document.createElement("h3");

    const addBtn = document.createElement("button");
    const plusBtn = document.createElement("button");
    const minusBtn = document.createElement("button");
    const qty = document.createElement("span");

    plusBtn.style = "display:none";
    minusBtn.style = "display:none";
    qty.style = "display:none";

    plusBtn.innerText = "+";
    minusBtn.innerText = "-";
    qty.innerText = "1";

    id.innerText = el.id;
    img.src = el.image;
    title.innerText = el.title;
    description.innerText = el.description;
    price.innerText = `₹ ${el.price}`;
    category.innerText = el.category;
    addBtn.innerText = "Add";

    // here we are adding the data in the arr which we have to use in tags
    filterData.push(el.category);
    const existingProduct = cartData.find((item) => item.id === el.id);
    if (existingProduct) {
        addBtn.style.display = 'none';
        plusBtn.style.display = 'inline-block';
        minusBtn.style.display = 'inline-block';
        qty.style.display = 'inline-block';
        qty.innerText = existingProduct.qty;

    }
    addBtn.addEventListener('click', () => {

        addBtn.style = 'display:none';
        plusBtn.style = 'display:inline-block';
        qty.style = 'display:inline-block';
        minusBtn.style = 'display:inline-block';
        cartData.push({...el, qty: 1 });
        qty.innerText = 1;
        localStorage.setItem('cartData', JSON.stringify(cartData));
        updateCartCount();

    });

    plusBtn.addEventListener('click', () => {
    const item = cartData.find((item) => item.id === el.id);
    item.qty += 1;
qty.innerText = item.qty;
minusBtn.disabled = false;
localStorage.setItem('cartData', JSON.stringify(cartData));
updateCartCount();
});

minusBtn.addEventListener('click', () => {
    const item = cartData.find((item) => item.id === el.id);
    item.qty -= 1;

    if (!item || item.qty <= 0) {
     addBtn.style.display = 'inline-block';   
     plusBtn.style.display = 'none';   
     minusBtn.style.display = 'none';   
     qty.style.display = 'none';   
    } else {
      addBtn.style.display = 'none';
      plusBtn.style.display = 'inline-block';
      minusBtn.style.display = 'inline-block';
      qty.style.display = 'inline-block';
      qty.innerText = item.qty;
      if (item.qty === 1) {
        minusBtn.disabled = true;
      } else {
        minusBtn.disabled = false;
      }
    }
    localStorage.setItem('cartData', JSON.stringify(cartData));
    updateCartCount();
});

childDiv.append(id, img, title, description, price, category, addBtn, plusBtn, qty, minusBtn);
mainDiv.append(childDiv);
});

let singleFilterData = filterData.reduce((acc, curr) =>{
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});

const sortBy = document.createElement('select');
const categoryBy = document.createElement('div');
const filterBy = document.createElement('select');

const optionSort1 = document.createElement('option');
const optionSort2 = document.createElement('option');

optionSort1.value = 'high to low';
optionSort2.innerText = 'high to low';

optionSort2.value = 'low to high';
optionSort2.innerText = 'low to high';

sortBy.name = 'select_sorting';

categoryBy.className = 'category';

sortBy.append(optionSort1, optionSort2);

// filterBy

Object.keys(singleFilterData).map((el) => {
  const optionFilter = document.createElement('option');
  optionFilter.innerText = el;
  optionFilter.value = el;
});

categoryBy.append(sortBy, filterBy);

document.body.insertBefore(categoryBy, mainDiv);
console.log('filterData', filterData);
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cartData')) || [];

  let totalQty = 0;
  cart.forEach((item) => {
    totalQty += Number(item.qty) || 0;
  });

  const badge = document.getElementById('cartCount');
  if (!badge) return;

  badge.innerText = totalQty
  badge.style.display  = totalQty > 0 ? 'inline-block'  : 'none'
};