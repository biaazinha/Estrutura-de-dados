function insercaoDireta(vetor){

    for(let i = 0; i < vetor.length; i++){
        let analise = i;
        while(analise > 0 && vetor[analise] < vetor[analise - 1]){
            let itemAnalise = vetor[analise];
            let itemAnterior = vetor[analise - 1];

            vetor[analise] = itemAnterior
            vetor[analise - 1] = itemAnalise

            analise--
        }
    }
}
let nums = [77, 44, 22, 33, 99, 55, 88, 0, 66, 11]

console.log(nums)
insercaoDireta(nums)
console.log(nums)

console.time(`insercaoDireta1...`)
insercaoDireta(nums)
console.timeEnd(`insercaoDireta1...`)

console.time(`insercaoDireta...`)
insercaoDireta(nums)
console.timeEnd(`insercaoDireta...`)