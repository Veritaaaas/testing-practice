const functions = require('./functions');

describe('capitalize', () => {
    test('capitalize', () => {
        expect(functions.capitalize("hello")).toBe("Hello");
    });

    test('capitalize and turns remaining to lowercase', () => {
        expect(functions.capitalize("HELLO")).toBe("Hello");
    });

    test('not a string', () => {
        expect(functions.capitalize(1232)).toBe('');
    });
});

describe('reversed', () => {
    test('reversed', () => {
        expect(functions.reversed("hello")).toBe("olleh");
    });
    test('not a string', () => {
        expect(functions.reversed(121332)).toBe('');
    })
})

describe('calculator', () => {
    test('add', () => {
        calculator = new functions.calculators(1,2);
        expect(calculator.add()).toBe(3);
    })
    test('subtract', () => {
        calculator = new functions.calculators(91, 20);
        expect(calculator.subtract()).toBe(71);
    })
})

