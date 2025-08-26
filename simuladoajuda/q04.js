let arr=[], baixo =[], medio =[], alto=[]

// Baixo (1 a 35), Moderado (36
// a 60) e Alto (61 a 100).

  function gerarAleatorio(min,max){
    return Math.floor(Math.random() * (max - min) + min)
  }
  function willianBonner(qtde,min,max){
    for(let i=0; i<qtde;i++){
        arr.push(gerarAleatorio(min,max))
    }
  }
  function separarArr(){
    for(let i=0;i<numArr.length;i++){
        if(arr>1 & arr<35){
            baixo[i].push(arr[i])
        }else if(arr>36 & arr<60){
            medio[i].push(arr[i])
        }else{
            alto.push(arr[i])
        }
    }
  }


function principal(){
    let qtde = 20, min =1, max = 100
    
    gerarAleatorio(min,max)
    willianBonner(qtde,min,max)
    separarArr()
    console.log('Valores gerados = ',arr)
    console.log('')
}
principal()