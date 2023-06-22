let x = document.getElementById("valorInicial");
let y = document.getElementById("valorFinal");
function Aperte(){
    while(x.value <= parseInt(y.value))
    {
        //criar elemento p
        let paragrafo = document.createElement("p")
        //criamos texto
        let texto = document.createTextNode(x.value)
        //adicionamos um texto no seu elemento
        paragrafo.appendChild(texto)
        //adicionar o elemento no body
        document.getElementById("contar").appendChild(paragrafo)
        console.log(x.value)
        x.value++ //x = x + 1
    }

}