const chalk = require('chalk');

/**
 * Apply a rainbow effect to a string using Chalk.
 * @param {string} string - The input string to colorize.
 * @returns {string} - The rainbow-colored string.
 */
function rainbow(string) {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
    let rainbowString = '';

    for (let i = 0; i < string.length; i++) {
        const color = colors[i % colors.length]; // Cycle through the colors
        rainbowString += chalk.keyword(color)(string[i]);
    }

    return rainbowString;
}

console.log(rainbow("Taste the rainbow"));
console.log(rainbow("Rainbow in the dark"));
