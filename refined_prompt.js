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
    // Convert to dot.case: all lowercase joined with dots
    return words.map(word => word.toLowerCase()).join('.');


module.exports = toDotCase;

