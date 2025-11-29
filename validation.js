const fullname = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmpassword = document.getElementById('confirmpassword')
const terms = document.getElementById('terms')
const form = document.getElementById('form')

function removeError(input) {
    const oldError = input.parentElement.querySelector('.errormessage');
    if (oldError) oldError.remove();
}


function validateName() {
    removeError(fullname);

    if (fullname.value === "") {
        const nameError = document.createElement('span')
        nameError.classList.add('errormessage')
        nameError.innerText = `Please enter your full name`
        fullname.parentElement.appendChild(nameError)
        return false
    }

    return true

}

function validateEmail() {

    removeError(email);

    if (email.value === "" || !email.value.includes('@')) {
        const emailError = document.createElement('span')
        emailError.classList.add('errormessage')
        emailError.innerText = `Please enter a valid email address`
        email.parentElement.appendChild(emailError)
        return false
    }

    return true
}

function validatePassword() {

    removeError(password);

    if (password.value === "" || password.value.length < 8) {
        const passwordError = document.createElement('span')
        passwordError.classList.add('errormessage')
        passwordError.innerText = `Please enter a valid password with at least 8 characters`
        password.parentElement.appendChild(passwordError)
        return false
    }
    return true

}


function validateConfirmPassword() {
    removeError(confirmpassword);

    if (confirmpassword.value === "") {
        const confirmpasswordError = document.createElement('span')
        confirmpasswordError.classList.add('errormessage')
        confirmpasswordError.innerText = `Please confirm your password`
        confirmpassword.parentElement.appendChild(confirmpasswordError)
        return false
    }


    if (confirmpassword.value !== password.value) {
        const confirmpasswordError = document.createElement('span')
        confirmpasswordError.classList.add('errormessage')
        confirmpasswordError.innerText = `Passwords do not match`
        confirmpassword.parentElement.appendChild(confirmpasswordError)
        return false
    }

    return true
}


function validateTerms() {
    removeError(terms)

    if (!terms.checked) {
        const termsError = document.createElement('span')
        termsError.classList.add('errormessage')
        termsError.innerText = `Please accept the terms and conditions to proceed`
        terms.parentElement.appendChild(termsError)
        return false
    }

    return true
}

fullname.addEventListener('blur', validateName)
email.addEventListener('blur', validateEmail)
password.addEventListener('blur', validatePassword)
confirmpassword.addEventListener('blur', validateConfirmPassword)
terms.addEventListener('change', validateTerms)


form.addEventListener('submit', (e) => {
    e.preventDefault()


    const isNameValid = validateName()
    const isEmailValid = validateEmail()
    const isPasswordValid = validatePassword()
    const isConfirmPasswordValid = validateConfirmPassword()
    const isTermsValid = validateTerms()

    if (isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid && isTermsValid) {
        alert('Form submitted successfully!');

    }

})