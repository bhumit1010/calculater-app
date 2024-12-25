let inputField = document.getElementById("display")

inputField.addEventListener("input", () => {
    inputField.value = ''
    inputField.value = inputField.value.replace(/[^0-9+\-*/().]/g, "");
    console.log(inputField.value)
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
            const result = eval(inputField.value); 
            inputField.value = result; 
            console.log(result);
        e.preventDefault(); 
    } else {
        console.log(e);
    }
    console.log(inputField.value);
});