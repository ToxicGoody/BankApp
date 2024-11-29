const prompt = require('prompt-sync')({ sigint: true });

const Login = require("./module/Login")


class Comment extends Login{

    createNewComment() {
        this.userLogin()
    }


}

const user1 = new Comment();
user1.userlogin();