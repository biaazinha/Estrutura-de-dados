function sequencialDesordenado(vetor, valor){
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] == valor){
            return i
        }
    }
    return -1
}


function sequencial2(vetor, valor){
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] == valor){
            return i
        }else if (vetor[i] > valor){
            return -1
        }
    }
}