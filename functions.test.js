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
    test('multiply', () => {
        calculator = new functions.calculators(21, 3);
        expect(calculator.multiply()).toBe(63);
    })
    test('divide', () => {
        calculator = new functions.calculators(99, 3);
        expect(calculator.divide()).toBe(33);
    })
})

describe('caesar cipher', () => {
    test('shifts letters correctly', () => {
        expect(caesarCipher('abc', 1)).toBe('bcd');
    });

    test('wraps from z to a', () => {
        expect(caesarCipher('xyz', 3)).toBe('abc');
    });

    test('maintains case', () => {
        expect(caesarCipher('AbC', 1)).toBe('BcD');
    });

    test('ignores non-letter characters', () => {
        expect(caesarCipher('abc123!', 1)).toBe('bcd123!');
    });

    test('handles negative shift values', () => {
        expect(caesarCipher('bcd', -1)).toBe('abc');
    });
})

