const readline = require('readline');

var dd = new Date("January 3, 2018"); //can be any doomsday

function dateify(input){
	var date = new Date(input + ", 2018");
	return date;
}


function dateDifference(dateA, dateB){
	var dateAms = dateA.getTime();
	var dateBms = dateB.getTime();

	var diffA = dateBms - dateAms;
	var diffB = dateAms - dateBms;

	var days = Math.round(diffB/(1000*60*60*24));

	return days;
}

function mod(n,m){
	return ((n % m) + m) % m;
}

function dayfinder(days){
	remainder = mod(days,7);

	if(remainder === 0) {
		return "Wedneday";
	} else if (remainder == 1){
		return "Thursday";
	} else if (remainder == 2){
                return "Friday";
        } else if (remainder == 3){
                return "Saturday";
        } else if (remainder == 4){
                return "Sunday";
        } else if (remainder == 5){
                return "Monday";
        } else if (remainder == 6){
                return "Tuesday";
        } 

}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a month and a day: \n', (answer) => {
	console.log(dayfinder(dateDifference(dateify(answer), dd)));
  rl.close();
});