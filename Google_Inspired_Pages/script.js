const Password = document.querySelector("#txtpassword");
const Conform_Password = document.querySelector("#cfrmpassword");
const Checkbox = document.querySelector("#show");

Checkbox.addEventListener('click', function () {
    const type = Password.getAttribute("type") === "password" ? "text" : "password";
    Password.setAttribute("type", type);
    
    if (Conform_Password) {
        const confType = Conform_Password.getAttribute("type") === "password" ? "text" : "password";
        Conform_Password.setAttribute("type", confType);
    }
});

const signInForm = document.getElementById('signInForm');
const signUpForm = document.getElementById('signUpForm');
const createAccountLink = document.getElementById('createAccountLink');
const loginLink = document.getElementById('loginLink');

if (createAccountLink) {
    createAccountLink.addEventListener('click', function (event) {
        event.preventDefault();
        signInForm.classList.add('hidden');
        signUpForm.classList.remove('hidden');
    });
}

if (loginLink) {
    loginLink.addEventListener('click', function (event) {
        event.preventDefault();
        signUpForm.classList.add('hidden');
        signInForm.classList.remove('hidden');
    });
}
