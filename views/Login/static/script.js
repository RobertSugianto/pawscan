const form = document.getElementById('login-form');
const email = document.getElementById('email-field')
const password = document.getElementById('password-field')

form.addEventListener('submit', (event) => {
    let emailErr = checkEmail(email.value.trim());
    let passErr = checkPassword(password.value.trim());

    if(emailErr != null || passErr != null) {
        if(emailErr != null) {
            document.getElementById('email-warning').style.display = 'block';
            document.getElementById('email-warning').innerHTML = emailErr;
        }
        if(passErr != null) {
            document.getElementById('password-warning').style.display = 'block';
            document.getElementById('password-warning').innerHTML = passErr;
        }
        
        event.preventDefault();
    }

    if(emailErr == null) {
        document.getElementById('email-warning').style.display = 'none';
        document.getElementById('email-warning').innerHTML = '';
    }
    if(passErr == null) {
        document.getElementById('password-warning').style.display = 'none';
        document.getElementById('password-warning').innerHTML = '';
    }

});

const checkEmail = (value) => {
    const regx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(value === '') return "email should't be empty";
    if(!regx.test(value)) return "email format is invalid";

    return null;
};

const checkPassword = (value) => {
    const pattern = /['"<>;]/
    if(value.length < 8) return "must atleast 8 character";
    if(pattern.test(value)) return "contain invalid characters";

    return null;
}

