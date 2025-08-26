let arrNum =[], arr11=[], arr13=[], arrOutros =[]

function gerarAleatorio(min,max){
 return Math.floor(Math.random() * (max - min) + min)
    
}
function willianBonner(qtde,min,max){
    for(let i=0;i<qtde;i++){
        arrNum.push(gerarAleatorio(min,max))
    }
}
function separarArr(){
    for(let i=0;i<numArr.length;i++){
        if(arrNum%11===0){
            arr11.push(arrNum[i])
        }else if(arrNum%13===0){
            arr13.push(arr13)
        }else{
            arrOutros.push(numArr[i])
        }
    }
}
function media11(){
    let soma11 =0
    for(let i=0;i<arr11;i++){
        soma11+=arr11
    }
    console.log('a soma dos 11 é de =',soma11)
    return soma11/arr11.length
}
function media13(){
    let soma13 =0
    for(let i=0;i<arr13;i++){
        soma13+=arr13
    }
    console.log('a soma dos 13 é de =',soma13)
    return soma13/arr13.length
}
function mediaOutros(){
    let somaOutros =0
    for(let i=0;i<arrOutros;i++){
        somaOutros+=arrOutros
    }
    console.log('a soma dos 11 é de =',somaOutros)
    return somaOutros/arrOutros.length
}


function principal(){
willianBonner()
separarArr()
let mediados11 = media11()
let mediados13 = media13()
console.log('os sorteados foram =',numArr)

}
principal()