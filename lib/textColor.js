const { isValidColor } = require('./shapeColor');

/**
 * Validates if the given text color is valid.
 * @param {string} color - The color value to validate.
 * @returns {boolean} - True if the color is valid, otherwise false.
 */
function isValidTextColor(color) {
  // Utilize the isValidColor function to check if the color is valid
  return isValidColor(color);
}

/**
 * Provides a default color if the input text color is invalid or empty.
 * @param {string} color - The color value to check.
 * @param {string} defaultColor - The default color to return if input is invalid or empty.
 * @returns {string} - The valid color.
 */
function getTextColorOrDefault(color, defaultColor = 'black') {
  // Return the color if valid; otherwise, return the default color
  return isValidTextColor(color) ? color : defaultColor;
}

// Exporting the validation functions for use in other modules
module.exports = { isValidTextColor, getTextColorOrDefault };
