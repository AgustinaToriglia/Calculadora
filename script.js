/* const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item)=>{
    item.onclick=()=>{
        if(item.id=="clear"){
            display.innerText="";
        } else if(item.id=="backspace"){
            let string = display.innerText.toString();
            display.innerText=string.substr(0,string.length-1)
        } else if(display.innerText != "" && item.id=="equal"){
            display.innerText = eval(display.innerText);
        } else if(display.innerText== "" && item.id=="equal"){
            display.innerText= "Null";
            setTimeout(()=>(display.innerText=""),2000);
        } else{
            display.innerText+=item.id;
        }
    }
})

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");

let isDark=true;
themeToggleBtn.onclick=()=>{
    calculator.classList.toggle("dark")
    themeToggleBtn.classList.toggle("active")
    isDark=!isDark;
} */


const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

// Define una función para actualizar el contenido del display
function updateDisplay(value) {
    display.innerText = value;
}

// Define una función para borrar el contenido del display
function clearDisplay() {
    updateDisplay("");
}

// Define una función para borrar un caracter del display
function deleteChar() {
    let string = display.innerText.toString();
    updateDisplay(string.substr(0, string.length - 1));
}

// Define una función para evaluar la expresión en el display
function evaluateExpression() {
    try {
        updateDisplay(eval(display.innerText));
    } catch (error) {
        updateDisplay("Error");
    }
}

// Define una función para mostrar un mensaje temporal en el display
function showTempMessage(message, duration) {
    updateDisplay(message);
    setTimeout(clearDisplay, duration);
}

// Agrega un controlador de eventos a cada botón de la calculadora
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        switch (button.id) {
            case "clear":
                clearDisplay();
                break;
            case "backspace":
                deleteChar();
                break;
            case "equal":
                if (display.innerText === "") {
                    showTempMessage("Null", 2000);
                } else {
                    evaluateExpression();
                }
                break;
            default:
                updateDisplay(display.innerText + button.id);
        }
    });
});

// Agrega un controlador de eventos al botón de alternancia de tema
const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");

let isDark = true;
themeToggleBtn.addEventListener("click", () => {
    calculator.classList.toggle("dark");
    themeToggleBtn.classList.toggle("active");
    isDark = !isDark;
});
