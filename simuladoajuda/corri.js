let ArrNum = [], arrP = [], arrI = []

function gerarAleatorio(min,max){
    return Math.floor(Math.random() * (max - min) + min)
}

function gerarTotalNum(qtde,min,max){
    for(let i=0;i<qtde;i++){
        ArrNum.push(gerarAleatorio(min,max))
    }
}

function separarArray(){
    for(let i=0;i<ArrNum.length;i++){
        if(ArrNum[i]%2===0){
            arrP.push(ArrNum[i])
        }else{
            arrI.push(ArrNum[i])
        }
    }
}

function calcularMediaPar(){
    let somaPar = 0
    for(let i=0; i<arrP.length;i++){
        somaPar+=arrP[i]
    }
    console.log('somaPar = ', somaPar)
    return somaPar/arrP.length
}

function calcularMediaImpar(){
    let somaImpar = 0
    for(let i=0; i<arrI.length;i++){
        somaImpar += arrI[i]
    }
    console.log('soma impar = ', somaImpar)
    return somaImpar/arrI.length
}


function principal(){
let qtde = 5, min = 1, max = 10
gerarTotalNum(qtde,min,max)
separarArray()
let mediaPar = calcularMediaPar()
let mediaImpar = calcularMediaImpar()
console.log('numeros sorteados', ArrNum)
console.log('numes pares', arrP)
console.log('numeros impares', arrI)
console.log('media par=', mediaPar.toFixed(2))
console.log('media impares',mediaImpar )

}

principal()
