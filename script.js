let inputField = document.getElementById("display")

inputField.addEventListener("input", () => {
    inputField.value = ''
    inputField.value = inputField.value.replace(/[^0-9+\-*/().]/g, "");
    console.log(inputField.value)
});
let str = "/01234567899+-*."
document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        const result = eval(inputField.value);
        inputField.value = result;
        console.log(result);
        console.log(e.key);
        e.preventDefault();
    }
    else if (e.key === 'Backspace') {
        inputField.value = inputField.value.slice(0, -1);
        console.log(e.key);
        e.preventDefault();
    }
    else if (str.includes(e.key) == true) {
        inputField.value += e.key
        console.log(e.key);
        e.preventDefault();
    }
});
