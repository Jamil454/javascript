class Validation {
    constructor(email){
        this.mail = email;
    }

    validate(){
        let pattern = /[A-z0-9]+@[A-z]+\.[A-z]/;
        if (this.mail.search(pattern) == -1){
            return " E-mail Address is wrong"
        }
        else {
          return "E-mail Address is correct "
        }
    }
}