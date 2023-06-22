let título =  document.getElementById("título");
título.style.textAlign = 'center'
título.style.backgroundColor = '#CCC';
título.style.borderBottom = 'solid 3px #000';
título.style.margin = '20px';
título.innerHTML = 'Olá meus queridos alunos S2'

let itens = document.getElementsByClassName('item')
console.log(itens);
itens[1].innerHTML = 'Olá'
itens[1].style.backgroundColor = 'yellow'