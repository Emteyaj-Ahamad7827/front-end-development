const searchParams = require('./params');

test('paramas test', () => {
    expect(
        searchParams(
            'https://jsonplaceholder.typicode.com/todos?_limit=100=page=10',
            '_limit'
        ),
    ).tobe(100);
});