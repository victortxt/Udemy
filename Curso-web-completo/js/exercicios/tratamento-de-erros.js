/*
let dados = Array()
dados[0] = Array()
dados[0]['frutas'] = ['Laranja', 'Banana', 'Melão']
//try catch finally
try{
    dados[0]['frutas'] = ['Laranja', 'Banana', 'Melão']
    console.log(dados[1]['frutas']); 
}catch{
    console.log('Não temos está fruta disponivel')
}finally{
    console.log('Podemos te oferecer as seguintes frutas ')
}
*/

let dados = Array();
dados[0] = Array();
dados[0]['catalogo'] = ['Wakanda', 'Ultimate', 'Vingadores']
try{
    console.log(dados[1]['algo'])
}catch{
    console.log('Não temo isto disponivel')
}finally{
    console.log('Você pode ver nossos catalodo de filmes')
}