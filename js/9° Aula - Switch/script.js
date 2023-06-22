let Dia = document.getElementById("Dia")
let resultado = document.getElementById("resultado")
function apertar()
{
switch (Dia.value) 
{
    case "1":
        resultado.innerHTML = "Domingo não é um dia útil"
        break;
    case "2":
        resultado.innerHTML = "Segunda não é um dia útil"
        break;
    case "3":
        resultado.innerHTML = "Terça não é um dia útil"
        break;
    case "4":
        resultado.innerHTML = "Quarta não é um dia útil"
        break;
    case "5":
        resultado.innerHTML = "Quinta não é um dia útil"
        break;    
    case "6":
        resultado.innerHTML = "Sexta não é um dia útil"
         break;
    case "7":
        resultado.innerHTML = "Sábado não é um dia útil"
        break;        
    default:
        break;
}

}