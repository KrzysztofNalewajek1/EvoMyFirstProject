import {getRectanglePerimeter, getRectangleArea, getRectangleInfo} from "../js/rectangle";

test('Correct calculate rectangle perimeter', () => {
    const outputText = getRectanglePerimeter(10, 6);
    expect(outputText).toBe(32);
});

test('Incorrect calculate rectangle perimeter', () => {
    const outputText = getRectanglePerimeter(12, 3);
    expect(outputText).not.toBe(31);
});

test('Correct calculate rectangle area', () => {
    const outputText = getRectangleArea(100, 6);
    expect(outputText).toBe(600);
});

test('Incorrect calculate rectangle area', () => {
    const outputText = getRectangleArea(10, 5);
    expect(outputText).not.toBe(10);
});

test('Correct rectangle info', () => {
    const length = 4;
    const width = 12;
    const area = getRectangleArea(length, width);
    const perimeter = getRectanglePerimeter(length, width);
    return console.log(`The perimeter of a rectangle is ${perimeter} and the area is ${area}`)
});
