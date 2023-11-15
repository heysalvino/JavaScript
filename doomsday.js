const readline = require('readline');

// Define a reference doomsday date
const referenceDoomsday = new Date("January 3, 2018");

// Function to convert input to a date
function parseInputToDate(input) {
    return new Date(input + ", 2018");
}

// Function to calculate the difference in days between two dates
function calculateDateDifference(dateA, dateB) {
    const dateAms = dateA.getTime();
    const dateBms = dateB.getTime();

    // Calculate the absolute difference in milliseconds
    const absoluteDiffMs = Math.abs(dateBms - dateAms);

    // Convert milliseconds to days and round
    const days = Math.round(absoluteDiffMs / (1000 * 60 * 60 * 24));

    return days;
}

// Function to find the day of the week based on the number of days
function findDayOfWeek(days) {
    const daysOfWeek = ["Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday"];
    const remainder = ((days % 7) + 7) % 7; // Ensure positive remainder

    return daysOfWeek[remainder];
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a month and a day: \n', (answer) => {
    const inputDate = parseInputToDate(answer);
    const daysDifference = calculateDateDifference(inputDate, referenceDoomsday);
    const dayOfWeek = findDayOfWeek(daysDifference);

    console.log(`The day of the week for ${inputDate.toDateString()} is ${dayOfWeek}.`);
    rl.close();
});
