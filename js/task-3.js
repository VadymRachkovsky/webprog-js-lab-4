function generateAndCheckPassword(length) {
    let password;
    let isValid = false;

    while (!isValid) {
        let result = confirm("Click Ok to write password manually. Cancel to generate automatically.");
        if (result) {
            password = prompt("Enter your password");
        } else {
            password = generatePassword(length);
            alert("Your password: " + password);
        }

        if (validatePassword(password)) {
            let confirmPassword = prompt("Confirm your password");
            if (password === confirmPassword) {
                alert("Password is set successfully.");
                isValid = true;
            } else {
                alert("Passwords do not match. Try again.");
            }
        } else {
            alert("Password does not meet the requirements: it must contain at least one uppercase letter, one lowercase letter, and one number.");
        }
    }
}

function validatePassword(password) {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    return hasUpperCase && hasLowerCase && hasNumber;
}

generateAndCheckPassword(8);