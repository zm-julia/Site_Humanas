let numArr = [], arrP = [], arrI=[]

function gerarAleatorio(min,max){
    return Math.floor(Math.random()* (max-min)+min)
}
function empurrarArr(qtde,min,max){
    for(let i=0;i<qtde;i++){
        numArr.push(gerarAleatorio(min,max))
    }
}
function separarArr(){
    for(let i=0;i<numArr.length;i++){
        if(numArr %2===0){
            arrI.push(numArr[i])
        }else{
            arrP.push(numArr[i])
        }
    }
}
function mediaP(){
    let somaP = 0
    for(let i=0; i<numArr.length;i++){
        somaP+=arrP[i]
    }
    console.log('a soma dos pares é de: =',somaP)
    return somaP/arrP.length
}

function mediaI(){
let somaI =0
for(let i=0;i<numArr.lenght;i++){
    somaI+=arrI[i]
}
console.log('a soma dos ímpares é de: =',somaI)
return somaI/arrI.length
}



function principal(){
let qtde = 100, min =1, max = 10
empurrarArr(qtde,min,max)
separarArr()
let mediaPar = mediaP()
let mediaImpar = mediaI()
console.log('os números foram: =',NumArr)
console.log('a média dos pares foi =',mediaP)
console.log('a média dos ímpares foi de =',mediaI)
}
principal()