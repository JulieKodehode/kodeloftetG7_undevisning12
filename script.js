console.log('Hello!');

// Regular Functions / Functions

function greeting() {
    console.log("Dette er en funksjon!");

    const firstName = "Julie";
    const greet = "Good morning";
    
    console.log(greet + " " + firstName)
    console.log(`${greet}, ${firstName}!`)
}

// greeting();

// DOMM (Document Object Model Manipulation)

// lagringsplass = lagringsinnhold
const greetingButton = document.querySelector("#greetingButton");
console.log(greetingButton);

greetingButton.addEventListener("click", greeting);


// HENT
const themeSwitchButton = document.querySelector("#themeSwitchButton");
console.log(themeSwitchButton);

// MODIFISER
function themeSwitch() {
    // HENT
    const body = document.querySelector("body");
    console.log(body);

    // MODIFISER
    body.classList.toggle("dark");
}

// SEND
themeSwitchButton.addEventListener("click", themeSwitch);




















/*
greetingButton.addEventListener("click", () => {
    console.log("Dette er en arrow function");

    const firstName = "Julie";
    const greet = "Good morning";
    console.log(greet + " " + firstName)
});
*/