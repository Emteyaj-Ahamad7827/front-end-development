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



let cart = JSON.parse(localStorage.getItem("productData")) || [];

const cartDiv = document.getElementById("productData");

