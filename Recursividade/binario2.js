function ordenacao(vetor) {

    for (let i = 1; i < vetor.length; i++) {
        for (let j = 0; j < i; j++) {
            if (vetor[i] < vetor[j]) {
                var aux = vetor[i]
                for (let k = i; k > j; k--) {
                    vetor[k] = vetor[k - 1]
                }
                vetor[j] = aux
            }
        }
    }
    return vetor
}

function busca_binaria(vetor, valorBusca) {     // retorna a posição
    let ini = 0
    let fim = vetor.length - 1
    while (fim >= ini) {
        let meio = Math.floor((ini + fim) / 2)

        if (valorBusca === vetor[meio]) {
            return meio
        }
        else if (valorBusca > vetor[meio]) {
            ini = meio + 1
        }
        else {
            fim = meio - 1
        }
    }
    return - 1
}


let vetor = [7, 3, 9, 6, 1, 4, 10, 2]
console.log(vetor)
ordenacao(vetor)
console.log(vetor)
let result = busca_binaria(vetor,7)
console.log(result)