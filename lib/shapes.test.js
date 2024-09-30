const { Circle, Triangle, Square } = require('./shapes');

// Describe block for grouping shape class tests
describe('Shape Classes', () => {
  // Variables to hold shape instances for each test
  let circle, triangle, square;

  // Run before each test to initialize shape instances
  beforeEach(() => {
    circle = new Circle();
    triangle = new Triangle();
    square = new Square();
  });

  // Test for circle's render method
  test('Circle render method', () => {
    circle.setColor('red'); // Set circle color to red
    expect(circle.render()).toBe('<circle cx="150" cy="100" r="80" fill="red" />');
  });

  // Test circle's render method with different colors
  test('Circle render method with a different color', () => {
    circle.setColor('blue'); // Set circle color to blue
    expect(circle.render()).toBe('<circle cx="150" cy="100" r="80" fill="blue" />');

    circle.setColor('green'); // Change circle color to green
    expect(circle.render()).toBe('<circle cx="150" cy="100" r="80" fill="green" />');
  });

  // Test for triangle's render method
  test('Triangle render method', () => {
    triangle.setColor('blue'); // Set triangle color to blue
    expect(triangle.render()).toBe('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  });

  // Test triangle's render method with different colors
  test('Triangle render method with a different color', () => {
    triangle.setColor('green'); // Set triangle color to green
    expect(triangle.render()).toBe('<polygon points="150, 18 244, 182 56, 182" fill="green" />');
    
    triangle.setColor('yellow'); // Change triangle color to yellow
    expect(triangle.render()).toBe('<polygon points="150, 18 244, 182 56, 182" fill="yellow" />');
  });

  // Test for square's render method
  test('Square render method', () => {
    square.setColor('green'); // Set square color to green
    expect(square.render()).toBe('<rect x="50" y="50" width="200" height="200" fill="green" />');
  });

  // Test square's render method with different colors
  test('Square render method with a different color', () => {
    square.setColor('yellow'); // Set square color to yellow
    expect(square.render()).toBe('<rect x="50" y="50" width="200" height="200" fill="yellow" />');

    square.setColor('red'); // Change square color to red
    expect(square.render()).toBe('<rect x="50" y="50" width="200" height="200" fill="red" />');
  });
});
