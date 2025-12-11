const API = 'https://fakestoreapi.com/products';

async function ApiCall() {

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
    const mainDiv = document.querySelector('mainDiv');

    value?.forEach(element => {
        const childDiv = document.getElement('div')
        const id = document.getElement('h3')
        const img = document.getElement('img')
        const title = document.getElement('h3')
        const description = document.getElement('h3')
        const price = document.getElement('h3')
        const category = document.getElement('h3')

        id.inn
    });
    
}