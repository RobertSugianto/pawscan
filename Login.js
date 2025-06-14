const form = document.querySelector('.login-form');
const email = document.getElementById('email-field')
const password = document.getElementById('password-field')

form.addEventListener('submit', (event) => {
    let isEmailValid, emailErr = checkEmail(email.value.trim());
    let isPasswordValid, passErr = checkPassword(password.value.trim());

    if(!isEmailValid || !isPasswordValid) {
        if(emailErr != null) {
            // action
        }
        if(passErr != null) {
            // action
        }
        event.preventDefault();
    }
});

const checkEmail = (value) => {
    const regx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(value === '') return false, "email should't be empty";
    if(!regx.test(inputValue)) return false, "email format is invalid";

    return true;
};

const checkPassword = (value) => {
    const pattern = /['"<>;]/
    if(value < 8) return false, "must atleast 8 character";
    if(pattern.test(value)) return false, "contain invalid characters";

    return true;
}