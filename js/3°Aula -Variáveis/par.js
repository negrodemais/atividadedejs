let receber = document.getElementById("ReceberNumero");
let mostrar = document.getElementById("ParouImpar");

function Par()
{
    if(receber.value % 2 == 0)
    {
        mostrar.innerHTML = " o número é par "
    }
    else
    {
        mostrar.innerHTML = " o número é ímpar "
    }
}