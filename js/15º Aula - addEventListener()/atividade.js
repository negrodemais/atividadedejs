let input1 = document.getElementById('valor1')
let input2 = document.getElementById('valor2')
let receber = document.getElementById('recber')

let x = document.getElementById('botao')
x.addEventListener('click', aperte)

function aperte()
{
    resultado.innerHTML = (parseInt(input1.value)*parseInt(input2.value)) / 2
}
