const pessoa = {
    nome: 'Victor',
    idade: 25, 
    cpf: 123-456-789,
    rg: 1234-1234/80
}

console.log(pessoa)
console.log(pessoa.nome)
if(pessoa.nome === 'João'){
    console.log('Você é o João')
}else if(pessoa.nome != 'João'){
    console.log('Você não é o João, voce é o ' + pessoa.nome)
}