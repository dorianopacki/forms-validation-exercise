const validate = (event) => {
    event.preventDefault();
    let result = '';

    result += validateName();
    result += validateEmail();
    result += validatePassword();
    result += validateTerms();

    if(result === "") {
        return true
    } else {
        alert("Validation result: \n\n" + result)
        return false;
    }
    
}

const validateName = () => {
const name = document.getElementById("name").value;
if(name.length < 3) {
    return "Name should have at least 3 chars. \n"
}
}

const validateEmail = () => {
    const email = document.getElementById("email").value;
    const reEmail = document.getElementById("repeat-email").value;
    if(email.indexOf("@") === -1) {
        return "Email should be a valid adress. \n"
    }

    if(email !== reEmail) {
        return "Emails don't match. \n"
    }
}

const validatePassword = () => {
    const password = document.getElementById("password").value;
    const rePassword = document.getElementById("repeat-password").value;

    if(password.length < 6){
    return "Password should have at least 6 chars. \n"
    }
    if(password !== rePassword) {
    return "Passwords don't match. \n"
    }
}

const validateTerms = () => {
    const terms = document.getElementById("terms").checked;

    if(!terms) {
    return "Please accept terms of use. \n\n"
}
}

