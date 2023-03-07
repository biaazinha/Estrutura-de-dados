//Atividade 1 - Bianca Karoline Ramos 

//bubbleSort
function bubblesort(vetor) {

    for (i = 0; i < vetor.length - 1; i++) {
        var aux

        for (j = 0; j < vetor.length - i - 1; j++) {
            if (vetor[j] > vetor[j + 1]) {
                aux = vetor[j]
                vetor[j] = vetor[j + 1]
                vetor[j + 1] = aux
            }
        }
    }
}


//seleção Direta
function selecaoDireta(vetor) {

    for (var i = 0; i < vetor.length; i++) {
        var menor = vetor[i]
        var pos = i

        for (var j = i + 1; j < vetor.length; j++) {
            if (vetor[j] < menor) {
                aux = vetor[j]
                menor = vetor[j]
                pos = j
            }
        }
        var aux = vetor[i]
        vetor[i] = vetor[pos]
        vetor[pos] = aux
    }
}


//Inserção Direta
function insercaoDireta(vetor) {
    for (var i = 1; i < vetor.length; i++) {
        for (var j = 0; j < i; j++) {
            if (vetor[i] < vetor[j]) {
                var aux = vetor[i]
                for (var k = i; k > j; k--) {
                    vetor[k] = vetor[k - 1]
                }
                vetor[j] = aux
            }
        }
    }
}



//vetor ordenado de 1000
const vet1 = []
const size = 1000
for (let i = 0; i < size; i++) {
  vet1.push(i)
}


//vetor invertido de 1000
const vet2 = []
const size2 = 1000
for (let i = 0; i < size2; i++) {
  vet2.push(i)
}
vet2.reverse()


//vetor aleatório de 1000
const vet3 = []
for (let i = 0; i < Math.floor(vet3); i++) {
  vet3.push(i)
}


bubblesort(vet1)
selecaoDireta(vet1)
insercaoDireta(vet1)