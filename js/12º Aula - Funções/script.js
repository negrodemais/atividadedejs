function mult(a,b)    
{
    return a*b
}

let mult = (a,b) => 
{
    return a*b
}

//Sintaxe da função é definida com a fuction palavra-chave, seguida por um nome, seguido por parêntes().
//Quando o JavaScript atinge uma return instruções, a função
//Se a função foi invocada a partir de uma instrução, O Javascript "retornará" para o executar o código após instrução invocada.
let celsius = document.getElementById("Celsius")
let resultado = document.getElementById("resultado")

function toCelsius()
{
   return resultado.innerHTML = (celsius.value*1.8) + 32
}

//Crie uma função no qual utileze parâmetros para descobrir se o valor é par ou impar

function parouimpar(q)
{
   if(q % 2 == 0)
   {
    return console.log("Par")
   }
   else
   {
    return console.log("Impar") 
   }

}
//Escreva uma função que retorne o maior de dois números

function maiorque(m,n)
{
    if(m > n)
    {
        return console.log(m)
    }
    else
    {
        return console.log(n)
    }
}
    
const Maior = (t,u) => {t>u? console.log(t) : console.log(u)}

