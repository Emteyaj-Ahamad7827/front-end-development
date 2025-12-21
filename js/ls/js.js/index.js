// const API = 'https://fakestoreapi.com/products';

// async function ApiCall() {
//     // fetch(API)
//     // .then((res) => res.json())
//     // .then((res) => dataAppend(res))
//     // .catch((err) => console.log(err))

//     try {
//         const res = await fetch(API);
//         const data = await res.json();
//         dataAppend(data)
//     } catch (error) {
//         console.log('error', error);
        
//     }
// }
// ApiCall();

// function dataAppend(value) {
//     console.log('value', value);

//     const mainDiv = document.querySelector('#mainData');

//     value?.forEach(el => {
//         const childDiv = document.createElement('div');
//         const id = document.createElement('h3');
//         const img = document.createElement('img');
//         const title = document.createElement('h3');
//         const description = document.createElement('h3');
//         const price = document.createElement('h3');
//         const category = document.createElement('h3');

//         id.innerText = el.id;

//         img.src = el.imgage;
//         title.innerText = el.title;
//         description.innerText = el.description;
//         price.innerText = el.price;
//         category.innerText = el.category;
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
    const mainDiv = document.querySelector('#mainData');

    value.forEach(el => {
        const childDiv = document.createElement('div');

        const id = document.createElement('h3');
        const img = document.createElement('img');
        const title = document.createElement('h3');
        const description = document.createElement('p');
        const price = document.createElement('h3');
        const category = document.createElement('h3');

        id.innerText = `ID: ${el.id}`;
        img.src = el.image;
        img.style.width = '150px';
        title.innerText = el.title;
        description.innerText = el.description;
        price.innerText = `Price: $${el.price}`;
        category.innerText = el.category;

        childDiv.append(
            id,
            img,
            title,
            description,
            price,
            category
        );

        mainDiv.appendChild(childDiv);
    });
}
