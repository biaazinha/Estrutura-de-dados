//troca e compara a primeira posição com a segunda toda hora percorrendo o vetor
function selecaoDireta(vetor){
    
    for(i=0; i<vetor. length-1; i++){
        var aux

        for(j=0; j<vetor.length-i-1; j++){
            if(vetor[j] > vetor[j+1]){
                aux = vetor[j]
                vetor[j] = vetor[j+1]
                vetor[j +1] = aux
            }
        }
    }
}

let nums = [77, 44, 22, 33, 99, 55, 88, 0, 66, 11 ]

console.log(nums)
selecaoDireta(nums)
console.log(nums)


console.time(`Bubblesort1...`)
selecaoDireta(nums)
console.timeEnd(`Bubblesort1...`)

console.time(`Bubblesort...`)
selecaoDireta(nums)
console.timeEnd(`Bubblesort...`)