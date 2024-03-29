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
        expect(functions.caesarCipher('abc', 1)).toBe('bcd');
    });

    test('wraps from z to a', () => {
        expect(functions.caesarCipher('xyz', 3)).toBe('abc');
    });

    test('maintains case', () => {
        expect(functions.caesarCipher('AbC', 1)).toBe('BcD');
    });

    test('ignores non-letter characters', () => {
        expect(functions.caesarCipher('abc123!', 1)).toBe('bcd123!');
    });

    test('handles negative shift values', () => {
        expect(functions.caesarCipher('bcd', -1)).toBe('abc');
    });
})

describe("analyze array", () => {
    let array = [1, 8, 3, 4, 2, 6];
    let object = {
        average: 4,
        min: 1,
        max: 8,
        length: 6
      };
    test('analyzeArrray', () => {
        expect(functions.analyzeArray(array)).toEqual(object);
    });
})

