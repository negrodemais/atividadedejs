let idade = document.getElementById("idade");
let titulo = document.getElementById("titulo");


function Apertar()
{
if(idade.value >= 16 && titulo.value == "Sim") 
{
    alert("Poderá votar")
} 
else 
{
    alert("Não poderá votar") 
}

}