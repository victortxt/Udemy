function texto(txt = 3){
    console.log(`ola ${txt}`);
}

console.log(texto(14));

function decisao(limite = 'Voce não inseriu uma idade'){
    if(limite >= 18){
        console.log(`Sua idade é de ${limite}, então você pode dirigir`);
    }else if(limite < 18){
        console.log(`Sua idade é de ${limite}, então você não pode dirigir`);
    }else if(typeof limite === 'string'){
        console.log(`Você não pode dirigir`)
    }
}

console.log(decisao())