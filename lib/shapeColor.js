/**
 * Validates if a given color is a valid hex code or a color name.
 * @param {string} color - The color value to validate.
 * @returns {boolean} - True if the color is valid, otherwise false.
 */
function isValidColor(color) {
    // Basic hex color and color name validation
    return /^#[0-9A-F]{6}$/i.test(color) || /^(?:[a-zA-Z]+)$/.test(color);
}

/**
 * Provides a default color if the input color is invalid or left empty.
 * @param {string} color - The color value to check.
 * @param {string} defaultColor - The default color to return if invalid input or left empty.
 * @returns {string} - The valid color.
 */
function getColorOrDefault(color, defaultColor = 'gray') {
    // If the input color is valid, return it; otherwise, return the default color
    return isValidColor(color) ? color : defaultColor;
}

// Exporting the validation functions for use in other modules
module.exports = { isValidColor, getColorOrDefault };
