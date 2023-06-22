let valor1 = document.getElementById("valor1")
let valor2 = document.getElementById("valor2")
let sinal = document.getElementById("sinal")
let resultado = document.getElementById("resultado")
let soma;
let subtração;
let multiplicação;
let divisão;

function calculo()
{
    switch (sinal.value) 
    {
        case "+":
         soma = parseInt(valor1.value) + parseInt(valor2.value) 
        resultado.innerHTML = soma
        break;
        case "-":
         subtração = parseInt(valor1.value) - parseInt(valor2.value) 
         resultado.innerHTML = subtração
        break;
        case "*":
         multiplicação = parseInt(valor1.value) * parseInt(valor2.value) 
         resultado.innerHTML = multiplicação
        break;
        case "/":
         divisão = parseInt(valor1.value) / parseInt(valor2.value) 
        resultado.innerHTML = divisão
         break;
      
    }
}