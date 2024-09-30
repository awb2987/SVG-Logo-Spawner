// Base class for all shapes
class Shape {
  constructor() {
    this.color = 'black'; // Default color
  }

  // Method to set the color of the shape
  setColor(color) {
    this.color = color;
  }

  // Abstract method to render the shape (Must be implemented by subclasses)
  render() {
    throw new Error('Render method must be implemented in subclasses');
  }
}

// Class representing a circle
class Circle extends Shape {
  // Renders the SVG for a circle
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}

// Class representing a Triangle
class Triangle extends Shape {
  // Renders the SVG for a triangle
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

// Class representing a square
class Square extends Shape {
  // Renders the SVG for a square
  render() {
    return `<rect x="50" width="200" height="200" fill="${this.color}" />`;
  }
}

// Exporting shape classes for use in other modules
module.exports = { Circle, Triangle, Square };
