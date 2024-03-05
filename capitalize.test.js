const capitalize = require('./capitalize');

test('capitalize', () => {
    expect(capitalize("hello")).toBe("Hello");
});

test('capitalize and turns remaining to lowercase', () => {
    expect(capitalize("HELLO")).toBe("Hello");
});