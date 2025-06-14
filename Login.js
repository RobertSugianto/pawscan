const form = document.getElementById('login-form');
const email = document.getElementById('email-field')
const password = document.getElementById('password-field')

form.addEventListener('submit', (event) => {
    let [isEmailValid, emailErr] = checkEmail(email.value.trim());
    let [isPasswordValid, passErr] = checkPassword(password.value.trim());

    if(!isEmailValid || !isPasswordValid) {
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

    document.getElementById('email-warning').style.display = 'none';
    document.getElementById('password-warning').style.display = 'none';

});

const checkEmail = (value) => {
    const regx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(value === '') return [false, "email should't be empty"];
    if(!regx.test(value)) return [false, "email format is invalid"];

    return [true, null];
};

const checkPassword = (value) => {
    const pattern = /['"<>;]/
    if(value.length < 8) return [false, "must atleast 8 character"];
    if(pattern.test(value)) return [false, "contain invalid characters"];

    return [true, null];
}