
const contactValidator = (event) => {
    console.log(document.loginForm.contact.value)
}

const handleSubmit = () => {
    let fname = document.loginForm.fname.value;
    let lname = document.loginForm.lname.value;
    let email = document.loginForm.email.value;
    let contact = document.loginForm.contact.value;
    let password = document.loginForm.password.value;
    

    if (fname == "" || lname=="" || email=="" || contact=="" || password==""){
        alert("Enter All the fields to proceed!");
    }
    else{
        alert( "Sign Up Successfully\nFirst Name: " + fname +
                "\nLast Name: " + lname +
                "\nEmail: " + email + 
                "\nContact: " + contact);
    }

}

const passwordVal = () => {
    let password = document.loginForm.password.value;
    if (password.length < 8){
        alert("Password Length must be greater than 8 Characters!");
    }
}

const nameVal = (input) => {
    let letter = /^[A-Za-z]+$/;
    if (!input.value.match(letter)){
        alert("Name must contain only alphabets");
    }
    
}

const emailVal = (input) => {
    var mail_format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!input.value.match(mail_format)){
        alert("Invalid Mail address!");
        return;
    }
    document.loginForm.contact.focus();

}