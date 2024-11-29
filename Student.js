const prompt = require('prompt-sync')({ sigint: true });

class Student {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  login(){
    if(this.username === "admin" && this.password === "12345"){
        return true;
    }
  }
  submitAssignment(){
    if(this.login()){
        console.log("Assignment Submited")
    }else{
        console.log("Not Authorise")
    }
  }

}

let st1 =  new Student("admin","12346")
st1.submitAssignment()