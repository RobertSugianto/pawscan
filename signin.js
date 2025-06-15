const form = document.getElementById('signin-form');
const email = document.getElementById('email-field');
const fullName = document.getElementById('full-name-field');
const DOB = document.getElementById('DOB-field');
const password = document.getElementById('password-field');

form.addEventListener('submit', (event) => {
    let emailErr = checkEmail(email.value.trim());
    let fullNameErr = checkFullName(fullName.value.trim());
    let DOBErr = CheckDOB(DOB.value);
    let passErr = checkPassword(password.value.trim());

    if(emailErr != null || fullNameErr != null || DOBErr != null || passErr != null) {
        if(emailErr != null) {
            document.getElementById('email-warning').style.display = 'block';
            document.getElementById('email-warning').innerHTML = emailErr;
        }
        if(fullNameErr != null) {
            document.getElementById('full-name-warning').style.display = 'block';
            document.getElementById('full-name-warning').innerHTML = fullNameErr;
        }
        if(DOBErr != null) {
            document.getElementById('DOB-warning').style.display = 'block';
            document.getElementById('DOB-warning').innerHTML = DOBErr;
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
    if(fullNameErr == null) {
        document.getElementById('full-name-warning').style.display = 'none';
        document.getElementById('full-name-warning').innerHTML = '';
    }
    if(DOBErr == null) {
        document.getElementById('DOB-warning').style.display = 'none';
        document.getElementById('DOB-warning').innerHTML = '';
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

const checkFullName = (value) => {
    const pattern = /^[a-zA-Z\s]{3,}$/;
    if (value === '') return "Full name is required";
    if (!pattern.test(value)) return "Full name must contain only letters and spaces";
    if (value.split(' ').length < 2) return "Please enter at least first and last name";

    return null;
};

const CheckDOB = (value) => {
    if (value === '') return "Date of birth is required";

    const dobDate = new Date(value);
    const today = new Date();
    const minAge = 10;

    const age = today.getFullYear() - dobDate.getFullYear();
    const monthDiff = today.getMonth() - dobDate.getMonth();
    const dayDiff = today.getDate() - dobDate.getDate();

    if (
        age < minAge ||
        (age === minAge && (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)))
    ) {
        return "You must be at least 10 years old";
    }

    return null;
};

const checkPassword = (value) => {
    const pattern = /['"<>;]/
    if(value.length < 8) return "must atleast 8 character";
    if(pattern.test(value)) return "contain invalid characters";

    return null;
}