const { sum } = require('./app.js');


test('adds 14 + 9 to equal 23', () => {
    
    let total = sum(14, 9);

    
    expect(total).toBe(23);
});  

test('adds 5 + 3 to equal 23', () => {
    let total = sum(5,5);

    expect(total).toBe(10);

})

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(expected); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One dollar should be 156.5 yen", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromDollarToYen(1.07);

    const expected = 1.07 * 156.5;

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(1.07)).toBe(expected); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One yen should be 0.87 pound", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromYenToPound(156.5);

    const expected = 156.5 * 0.87;

    // Hago mi comparación (la prueba)
    expect(fromYenToPound(156.5)).toBe(expected); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})