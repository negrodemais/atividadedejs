let item = document.getElementById("item")

function adicionar()
{
    //Criar um elemento
    let p = document.createElement("li");
    //Criar conteúdo
    let texto = document.createTextNode(item.value)
    //Adicionar um texto no elemento
    p.appendChild(texto)
    //Adicionar no Body 
    document.getElementById("lista").appendChild(p)
}

