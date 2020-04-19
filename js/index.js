// variáveis
let inputCode = document.getElementById("input-binary-code");
let inputConversion = document.getElementById("input-conversion-result");
let buttonConvert = document.getElementById("btn-convert");

// inicializações
buttonConvert.onclick = verifyInputCode;

// funções
// verifica se algum dígito além de 0 ou 1 foi inserido
function verifyInputCode() {
    let arrInput = inputCode.value;

    for(let i = 0; i < arrInput.length; i++) {
        if(arrInput[i] != 1 && arrInput[i] != 0) {
            window.alert("Please insert only BINARY values.");
            inputCode.value = "";
            return;
        }
    }

    if(arrInput != "")
        displayConversion(arrInput);
}

// converte o valor binário para decimal
function convertBinaryToDecimal(val) {
    return parseInt(val, 2).toString(10);
}

// transfere o resultado para o input de exibição
function displayConversion(val) {
    inputConversion.value = convertBinaryToDecimal(val);
}