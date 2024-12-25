let inputField= document.getElementById("display")

inputField.addEventListener("input", () => {
    inputField.value = ''
    inputField.value = inputField.value.replace(/[^0-9+\-*/().]/g, "");
    console.log(inputField.value)
  });

document.addEventListener('keydown', function(e){
    if (e.key === 'Enter') {

        console.log(inputField.value);
        inputField.value= eval(inputField.value.toString())
        inputField = inputField.value.slice(0, -1)
        console.log(inputField.value);
        
    }
    else{
        console.log(e)
    }

})