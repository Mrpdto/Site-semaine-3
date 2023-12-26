
let body = document.querySelector("body")
let nom = document.querySelector("#nom")
let pseudo = document.querySelector("#pseudo")
let numero = document.querySelector("#numero")
let email = document.querySelector('#email')
let passwordInput = document.getElementById("password");
let form = document.querySelector('form')

console.log(nom, pseudo)

function nouvelleInterface(nom, email) {
    body.innerHTML = `
    <div class="container">
        <div class="head">
            <div class="title">Bienvenue ${nom}</div>
            <div> Email enregistré : ${email}</div>
            <div class="close">
                <a href="index.html"><svg xmlns="http://www.w3.org/2000/svg" id="menu"  fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg></a>
            </div>
        </div>
    </div>
    `
}

form.addEventListener('submit', e => {
    e.preventDefault()
    let nomRecup = nom.value
    let emailRecup = email.value
    form.remove()

    nouvelleInterface(nomRecup, emailRecup)
})


function validatePassword(){

    let passwordError = document.getElementById("mdpError");

    let passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;

    if (passwordRegex.toLocaleString(passwordInput.value) && passwordInput.value.length >= 8){
        passwordError.textContent="";
    } else {
        passwordError.textContent = "Le mot de passe doit contenir au moins une majuscule, une minuscule et un caractère spécial, et faire au moins 8 caractères de long.";
    }
}

passwordInput.addEventListener("input",validatePassword)