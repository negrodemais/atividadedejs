let valor = document.getElementById("valor")
let Tempo = document.getElementById("tempo")

function Apertar()
{
    if(valor.value >= 3000 && Tempo.value >= 5)
    {
        alert("deve pagar")
    }

    else
{
    alert(" Não Deve pagar")
}

}