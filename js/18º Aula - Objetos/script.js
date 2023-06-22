let car = 
{
    Modelo : "Fiat",
    Ano : 2023,
    cor: "Azul"
}

let eu =
{
    Nome : "Pedro",
    Idade : "16",
    Escola : "Céu Guarapiranga",
    CantorFavorito : "2pac",
    Otário : "Tio Tetão"
}
let Aluno =
{
    PrimeiroNome: 'Eduardo',
    SegundoNome: 'Ximenes',
    Idade: 18,
    Altura: 1.85,
    Peso: 90,
    fullName: function()
    {
        return this.PrimeiroNome + " " + this.SegundoNome
    }
}

let a = ["a", 2, "b"]

const tarefas = 
[
    {
        id : 1,
        texto: 'Levar o lixo para fora',
        Completado: true,
    },
    {
        id:2,
        texto:'Fazer miojo',
        Completado: true
    },
    {
        id:3,
        texto: 'Dormir',
        Completado: false,
    }
]