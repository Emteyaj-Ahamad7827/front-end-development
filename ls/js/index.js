// const API = 'https://fakestoreapi.com/products';

// async function ApiCall() {

//     try {
//         const res = await fetch(API);
//         const data = await res.json();
//         dataAppend(data);
//     } catch (error) {
//         console.log('error', error);
        
//     }
// }

// ApiCall();

// function dataAppend(value) {
//     console.log('value', value);
//     const mainDiv = document.querySelector('#mainData');

//     value?.forEach(el => {
//         const childDiv = document.createElement('div')
//         const id = document.createElement('h3')
//         const img = document.createElement('img')
//         const title = document.createElement('h3')
//         const description = document.createElement('h3')
//         const price = document.createElement('h3')
//         const category = document.createElement('h3')
//         const addBtn = document.createElement('button')

//         id.innerText = el.id;
//         img.src = el.image;
//         title.innerText = el.title;
//         description.innerText = el.description;
//         price.innerText = el.price;
//         category.innerText = el.category;
//         addBtn.innerText = 'addBtn';

//         childDiv.append(id,img, title, description, price, category, addBtn);
//         mainDiv.append(childDiv);
//     });
    
// }

// new code

const API = 'https://fakestoreapi.com/products';

async function ApiCall() {
    try {
        const res = await fetch(API);
        const data = await res.json();
        dataAppend(data);
    } catch (error) {
        console.log('error', error);
    }
}

ApiCall();

function dataAppend(value) {
    mainDiv.innerHTML = "";
    const sortBy = document.createElement('select');
    const filterBy = document.createElement('select');
    const categoryBy = document.createElement('div');
    
    
    const optionSort1 = document.createElement('option');
    const optionSort2 = document.createElement('option');
    const mainDiv = document.querySelector('#mainData');

    optionSort1.value = 'high to low';
    optionSort1.innerText = 'high to low';

    optionSort2.value = 'low to high';
    optionSort2.innerText = 'low to high';

    sortBy.name = 'select_sorting';

    categoryBy.className = 'category';

    sortBy.append(optionSort1, optionSort2);

    categoryBy.append(sortBy, filterBy);
    
    document.body.insertBefore(categoryBy, mainDiv);

    value.forEach(el => {
        const childDiv = document.createElement('div');

        const id = document.createElement('h3');
        const img = document.createElement('img');
        const title = document.createElement('h3');
        const description = document.createElement('p');
        const price = document.createElement('h3');
        const category = document.createElement('h3');
        const addBtn = document.createElement('button');

        id.innerText = `ID: ${el.id}`;
        img.src = el.image;
        img.style.width = "150px";

        title.innerText = el.title;
        description.innerText = el.description;
        price.innerText = `₹ ${el.price}`;
        category.innerText = el.category;

        addBtn.innerText = 'Add to Cart';

        // 🔥 ADD TO CART CLICK EVENT
        addBtn.addEventListener('click', () => {
            addToCart(el);
        });

        childDiv.append(id, img, title, description, price, category, addBtn);
        mainDiv.append(childDiv);
    });
}

// 🛒 Add to Cart Function
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const exists = cart.find(item => item.id === product.id);

    if (exists) {
        exists.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart 🛒");
}


