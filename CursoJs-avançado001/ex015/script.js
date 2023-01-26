for(var i = 0; i <=50; i += 1 ){
    if( i % i == 0 && i % 1 == 0 && i % i++ == 0){
        console.log(`${i} este é par `)
    }else{
        console.log(`${i}`)
    }
}