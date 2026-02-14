/**
 * String case conversion utilities for transforming text between different naming conventions.
 * 
 * This module provides functions to convert strings to various case formats commonly used in
 * programming, such as camelCase and dot.case. Each function handles:
 * - Multiple whitespace characters
 * - Hyphens and underscores as word separators
 * - Mixed case input normalization
 * - Non-alphanumeric character removal
 * - Input validation with descriptive error messages
 * 
 * @module stringCaseConverters
 * @version 1.0.0
 * 
 * @example
 * const { toCamelCase, toDotCase } = require('./stringCaseConverters');
 * 
 * toCamelCase("hello-world_example") // "helloWorldExample"
 * toDotCase("hello world example")   // "hello.world.example"
 * 
 * @throws {TypeError} All functions throw TypeError if input is not a string
 */

/**
 * Convert a string to dot.case: all lowercase words joined with dots.
 *
 * This function:
 * - Treats whitespace, hyphens, and underscores as word separators
 * - Splits camelCase / PascalCase boundaries into separate words
 * - Removes non-alphanumeric separators
 *
 * @param {string} input - The input string to convert.
 * @returns {string} The dot.case representation of the input.
 * @throws {TypeError} If input is not a string.
 */
function toDotCase(input) {
  if (typeof input !== 'string') {
    throw new TypeError('toDotCase: input must be a string');
  }

  // Insert spaces between camelCase / PascalCase boundaries, then split on non-alphanumerics.
  const normalized = input
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/[_\-]+/g, ' ');

  const words = normalized
    .split(/[^A-Za-z0-9]+/)
    .filter(Boolean);

  // Convert to dot.case: all lowercase joined with dots
  return words.map(word => word.toLowerCase()).join('.');
}
module.exports = toDotCase;

