class Validation {
    constructor(email){
        this.mail = email;
    }

    validate(){
        let pattern = /[A-z0-9._]+@[A-z]+\.[A-z]{2,4}/;
        if (this.mail.search(pattern) == -1){
            alert("Please Enter Valid E-mail Address");
        }
        else {
            alert("  E-mail Address Valid");
        }
    }
}