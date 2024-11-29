const prompt = require('prompt-sync')({ sigint: true });

// guessingGame functionality
function guessingGame(number) {
    if (number == 200) {
        return true;
    }
}

// function key for data collection
function userInput(desc) {
    let userInput = String(prompt(desc))
    return userInput
}

// login count
let loginCount = 0

// while loop for number of attempts to be made
while (loginCount < 3) {
    number = userInput("Enter the lucky number...")
    if (guessingGame(number) != true) {
        console.log("This is not the lucky number, try again")
        loginCount++;
    } else if (guessingGame(number) == true) {
        console.log("Congratulations, this is the lucky number")
        break
    }

}