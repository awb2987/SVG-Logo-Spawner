const fs = require('fs'); // File system module for writing files
const inquirer = require('inquirer'); // Module for prompting user input
const { Circle, Triangle, Square } = require('./lib/shapes'); // Import shape classes
const { getColorOrDefault } = require('./lib/shapeColor'); // Function to validate shape color
const { getTextOrDefault } = require('./lib/text'); // Function to validate text input
const { getTextColorOrDefault } = require('./lib/textColor'); // Function to validate text color

// Function to prompt the user for their input
async function promptUser() {
  // Prompt for text input with a validation check
  const { text } = await inquirer.prompt({
    type: 'input',
    name: 'text',
    message: 'Please enter text for the logo (Max 3 characters):',
    validate: input => input.length <= 3 ? true : 'Text must be no more than 3 characters'
  });

  // Prompt for text color input
  const { textColor } = await inquirer.prompt({
    type: 'input',
    name: 'textColor',
    message: 'Please enter text color (name or hex code):'
  });

  // Prompt for shape selection from a list
  const { shape } = await inquirer.prompt({
    type: 'list',
    name: 'shape',
    message: 'Please choose a shape:',
    choices: ['circle', 'triangle', 'square']
  });

  // Prompt for shape color input
  const { shapeColor } = await inquirer.prompt({
    type: 'input',
    name: 'shapeColor',
    message: 'Please enter shape color (name or hex code):'
  });

  // Use validation functions to ensure valid user inputs
  return {
    text: getTextOrDefault(text),
    textColor: getTextColorOrDefault(textColor),
    shape,
    shapeColor: getColorOrDefault(shapeColor)
  };
}

// Function to create the SVG string based on the user inputs
function createSVG({ text, textColor, shape, shapeColor }) {
  let shapeInstance;

  // Create an instance of the chosen shape
  switch (shape) {
    case 'circle':
      shapeInstance = new Circle();
      break;
    case 'triangle':
      shapeInstance = new Triangle();
      break;
    case 'square':
      shapeInstance = new Square();
      break;
    default:
      throw new Error('Invalid shape'); // Handle unexpected shape input
  }

  // Set the shape's color
  shapeInstance.setColor(shapeColor);

  // Generate SVG content using the shape instance and user-provided text
  return `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shapeInstance.render()}
      <text x="150" y="125" font-size="36" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
  `;
}

// Main function to run the application
async function main() {
  try {
    const answers = await promptUser(); // Get user input
    const svg = createSVG(answers); // Create SVG from user input

    // Write the SVG to a file
    fs.writeFileSync('logo.svg', svg);
    console.log('Generated logo.svg'); // Notify user of success
  } catch (error) {
    console.error('Error:', error); // Handle errors
  }
}

// Run the main function
main();
