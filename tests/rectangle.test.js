import {getRectanglePerimeter} from "../js/rectangle";

test('Correct calculate recttangle perimeter', () => {
    const outputText = getRectanglePerimeter(10, 6);
    expect(outputText).toBe(32);
}
) 