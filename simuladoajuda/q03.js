let temperaturas = [5, 12, 8, 25, 19, 7, 21, 9, 14, 30, 17, 3, 6, 20, 11, 28, 10, 22, 15, 2, 13, 18, 16, 23, 27, 24, 1, 4, 26,
29], baixas=[], medias=[], altas =[]
// Temperaturas baixas: de 1°C a 10°C, Temperaturas médias: de 11°C a
// 20°C, e Temperaturas altas: de 21°C a 30°C

function separarArr(min,max){
    for(let i =0;i<temperaturas.length;i++){
        if(temperaturas>=1 & temperaturas<=10){
            baixas[i].push(temperaturas[i])
        }else if(temperaturas>=11 & temperaturas<=20){
            medias[i].push(temperaturas[i])
        }else{
            altas[i].push(temperaturas[i])
        }
    }
}



function principal(){
    separarArr()
    console.log('')
}

principal()