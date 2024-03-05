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
        expect(functions.reversed("hello").toBe("olleh"));
    });
})