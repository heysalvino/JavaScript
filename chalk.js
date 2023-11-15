const chalk = require('chalk');

function rainbow(string){
    var output = ""
    var colors = ['red', 'orange', 'yellow', 'green', 'navy', 'purple'];
    var j = 0;

    for(let i = 0; i < string.length; i++) {
      output += chalk.keyword(colors[j])(string[i]);
      j++;
      j = j % 6;
    }
  return output;
}

console.log(rainbow("Taste the rainbow"));
console.log(rainbow("Rainbow in the dark"))
