const API = 'https://fakestoreapi.com/products';

async function ApiCall() {
    // fetch(API)
    // .then((res) => res.json())
    // .then((res) => dataAppend(res))
    // .catch((err) => console.log(err))

    try {
        const res = await fetch(API);
        const data = await res.json();
    } catch (error) {
        console.log('error', error);
        
    }
}
ApiCall();

function dataAppend(value) {
    console.log('value', value);

    const mainDiv = document.querySelector('#mainData');

    value?.forEach(el => {
        const childDiv = document.getElement('div');
        const id = document.getElement('h3');
        const img = document.getElement('img');
        const title = document.getElement('h3');
        const description = document.getElement('h3');
        const price = document.getElement('h3');
        const category = document.getElement('h3');

        id.innerText = el.id;

        img.innerText = el.img;
        title.innerText = el.title;
        description.innerText = el.description;
        price.innerText = el.price;
        category.innerText = el.category;
    });
    
}