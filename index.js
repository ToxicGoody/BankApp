const prompt = require('prompt-sync')({ sigint: true });


// This the user login functionality
function login(username, password){
    if(username === "admin" && password === "12345"){
        return true;
    }
}

// this function collect data from the user
function userInput(desc){
    let userInput = String(prompt(desc))
    return userInput
}
// store the dedault count values
let loginCount = 0
// our while loop to count the number of trial
while(loginCount < 3){
    username = userInput("Enter your name?.. ")
    passsword = userInput("Enter your password?.. ")
  if(login(username,passsword) != true){
    console.log("Try again")
    loginCount ++;
  }else if(login(username,passsword) == true){
    console.log("Login successfuly")
    break;
  }

}

