//pega o menor elemento e coloca na primeira posição e assim por diante
function selecaoDireta(vetor){
    
    for(i=0; i<vetor. length-1; i++){
        var aux
        var menor = 0

        for(j=0; j<vetor.length-i; j++){
            if(vetor[j] > menor){
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


console.time(`selecaoDireta1...`)
selecaoDireta(nums)
console.timeEnd(`selecaoDireta1...`)

console.time(`selecaoDireta...`)
selecaoDireta(nums)
console.timeEnd(`selecaoDireta...`)