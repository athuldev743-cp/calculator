
function displayclick(val) {
    document.getElementById("screen").value += val;
}


function equalClick() {
    try {
        const result = Function('"use strict";return (' + document.getElementById("screen").value + ')')();
        document.getElementById("screen").value = result;
    } catch {
        document.getElementById("screen").value = "Error";
    }
}


function cleardesp() {
    document.getElementById("screen").value = "";
}


document.addEventListener("keydown", function (e) {
    const key = e.key;
    const screen = document.getElementById("screen");

    if ("0123456789+-*/.".includes(key)) {
        displayclick(key);
    } else if (key === "Enter") {
        equalClick();
    } else if (key === "Backspace") {
        screen.value = screen.value.slice(0, -1);
    } else if (key === "Escape") {
        cleardesp();
    }
});
