const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const clear = document.getElementById("clear");
const equals = document.getElementById("equals");

let currentInput = "";

// Button click handling
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.getAttribute("data-value");
        if (value) {
            currentInput += value;
            display.value = currentInput;
        }
    });
});

// Clear button
clear.addEventListener("click", () => {
    currentInput = "";
    display.value = "";
});

// Equals button
equals.addEventListener("click", () => {
    try {
        currentInput = eval(currentInput).toString();
        display.value = currentInput;
    } catch {
        display.value = "Error";
        currentInput = "";
    }
});

// Keyboard input handling
document.addEventListener("keydown", (e) => {
    if ("0123456789+-*/.".includes(e.key)) {
        currentInput += e.key;
        display.value = currentInput;
    } else if (e.key === "Enter") {
        try {
            currentInput = eval(currentInput).toString();
            display.value = currentInput;
        } catch {
            display.value = "Error";
            currentInput = "";
        }
    } else if (e.key === "Backspace") {
        currentInput = currentInput.slice(0, -1);
        display.value = currentInput;
    }
});
