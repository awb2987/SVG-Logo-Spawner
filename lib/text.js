/**
 * Validates if the input text meets the length requirement.
 * @param {string} text - The text value to validate.
 * @returns {boolean} - True if text input is valid (length <= 3), otherwise false.
 */
function isValidText(text) {
    // Check if the length of the text is less than or equal to 3
    return text.length <= 3;
}

/**
 * Provides a default if the input text is invalid or left empty.
 * @param {string} text - The text value to check.
 * @param {string} defaultText - The default text to return if input is invalid or empty.
 * @returns {string} - The valid text.
 */
function getTextOrDefault(text, defaultText = 'ABC') {
    // If the input text is valid, return it; otherwise, return the default text
    return isValidText(text) ? text : defaultText;
}

// Exporting the validation functions for use in other modules
module.exports = { isValidText, getTextOrDefault };
