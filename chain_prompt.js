/**
 * Converts a given string into kebab-case format.
 * 
 * @param {string} input - The string to convert to kebab-case.
 * @returns {string} The kebab-case formatted string.
 * @throws {TypeError} If input is not a string, null, or undefined.
 * 
 * @example
 * toKebabCase("Hello World") // → "hello-world"
 * toKebabCase("  multiple   words_here ") // → "multiple-words-here"
 * toKebabCase("") // → ""
 * toKebabCase(123) // → throws TypeError
 */
function toKebabCase(input) {
    // Step 1: Validate the input
    if (input === null || input === undefined || typeof input !== 'string') {
        throw new TypeError(`Expected a string, but received ${typeof input}.`);
    }

    // Step 2: Normalize and clean the string
    // Trim leading and trailing whitespace and convert to lowercase
    let cleaned = input.trim().toLowerCase();
    
    // Replace underscores and multiple spaces with a single space
    cleaned = cleaned.replace(/_+/g, ' ').replace(/\s+/g, ' ');
    
    // Remove all non-alphanumeric characters except spaces
    cleaned = cleaned.replace(/[^a-z0-9\s]/g, '');

    // Step 3: Convert to kebab-case
    // Split the cleaned string into words and join with hyphens
    const kebab = cleaned
        .split(' ')
        .filter(word => word.length > 0) // Remove empty strings
        .join('-');

    return kebab;
}

// Export for use in modules
module.exports = toKebabCase;