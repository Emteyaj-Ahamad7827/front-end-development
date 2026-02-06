// const searchParams = (url, params) => {
//     const defineURL = new URL(url);

//     const searchParamsData = new URLSearchParams(defineURL.search);

//     let data = searchParamsData.get(params);

//     return data;
// }


const value = defineURL.search.split('&');

let valueNumber = value.map((el) => {
    let valuess = el.split('=');

    let data = valuess.filter((els) => els !== params);
    return data;
});

return valueNumber[1];

searchParams(
    'https://jsonplaceholder.typicode.com/todos?_limit=100=page=10',
            '_limit',
);
