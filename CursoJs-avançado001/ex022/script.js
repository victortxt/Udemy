function mensagem(a , b){
    if(a === undefined || b === undefined){
        console.log(`Os questionarios a e b não forma respondidos`)
    }else{
        console.log(`Os questionarios foram enviados`)
    }
}

console.log =(mensagem())