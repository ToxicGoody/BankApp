const prompt = require('prompt-sync')({ sigint: true });

class User {

    constructor(name, day, month, year) {
        this.setName(name);
        this.setDay(day);
        this.setMonth(month);
        this.setYear(year);
      }
    
      // Getter methods
      getName() {
        return this.name;
      }
    
      getDay() {
        return this.day;
      }
    
      getMonth() {
        return this.month;
      }
    
      getYear() {
        return this.year;
      }
    
      // Setter methods
      setName(name) {
        this.name = name;
      }
    
      setDay(day) {
        this.day = day;
      }
    
      setMonth(month) {
        this.month = month;
      }
    
      setYear(year) {
        this.year = year;
      }
    
      // Method to calculate age in 40 years
      getAgeIn40Years() {
        let currentAge = new Date().getFullYear() - this.getYear();
        return currentAge + 40;
      }
    
      // Method to calculate future date
      getFutureDate() {
        let futureDate = new Date(
          this.getYear() + 40,
          this.getMonth() - 1,
          this.getDay()
        );
        return futureDate.toLocaleDateString();
      }
    }
    
    // Get user input
    let name = prompt("Enter your name:");
    let day = parseInt(prompt("Enter your day of birth:"));
    let month = parseInt(prompt("Enter your month of birth:"));
    let year = parseInt(prompt("Enter your year of birth:"));
    
    // Create a new User object
    let user1 = new User(name, day, month, year);
    
    // Calculate and display results
    let ageIn40Years = user1.getAgeIn40Years();
    let futureDate = user1.getFutureDate();
    
    console.log("Hello," + user1.getName());
    console.log(" In 40 years, you will be " + ageIn40Years + " years old ");
    console.log("That date will be " + futureDate);
