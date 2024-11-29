const prompt = require('prompt-sync')({ sigint: true });

// Year, month and year of user
let year = prompt("Enter your birth year..");
let month = prompt("Enter your birth month..");
let day = prompt("Enter your birth day...");


// Current year
let currentYear = new
Date().getFullYear();

//Age in 20 years time
let ageIn20Years = 20 + (currentYear-year);


console.log ("You will be" + ageIn20Years + " years old in 20 years! " );