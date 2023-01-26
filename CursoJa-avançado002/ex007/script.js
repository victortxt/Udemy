const identificador = {
    nome: 'Victor',
    sobrenome: 'Fernandes',
    idade: 15,
    localizacao: {
        endereco:'Rua Miranda',
        cep: 1235342,
        numero: 100,
        cidade: 'sorocaba',
        estado: 'São Paulo',
        pais: 'Brasil'
    }
}

const{nome, sobrenome, altura = 1.70.toFixed(2)} = identificador
console.log(nome, sobrenome, altura)

console.log(identificador)
