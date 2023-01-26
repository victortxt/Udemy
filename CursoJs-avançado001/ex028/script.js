function dados(d){
    if(typeof d === 'string'){
        console.log(`Seu dado é uma string`)
    }else if(typeof d === 'number'){
        console.log(`Seu dado é um numero`)
    }else if(typeof d === 'boolean'){
        console.log(`Seu dado é um booleano`)
    }
}

console.log(dados(12))
console.log(dados('Ola Mundo'))
console.log(dados(false))
console.log(dados(10 < 4))