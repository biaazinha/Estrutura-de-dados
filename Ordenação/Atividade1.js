//Atividade 1 - Bianca Karoline Ramos e Giovanna Cerino

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
    return vetor
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
    return vetor
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
    return vetor
}


//vetor ordenado de 1000
let ordenado = []
for (let i = 0; i < 1000; i++) {
  ordenado.push(i)
}

//vetor invertido de 1000
let invertido = []
for (let i = 0; i < 1000; i++) {
  invertido.push(i)
}
invertido.reverse()

//vetor aleatório de 1000
let desordenado = []
for (let i = 0; i < 1000; i++) {
  desordenado[i] = Math.floor(Math.random()*1000)
}


//BUBBLESORT
let bubbleSort1 = ordenado.slice() 
let bubbleSort2 = invertido.slice() 
let bubbleSort3 = desordenado.slice() 

//bubbleSort ordenado:
console.log(`BubbleSort ordenado: ${bubblesort(bubbleSort1)}`)

console.log("Tempo de execução:")
console.time("ordenado...")
bubblesort(bubbleSort1)
console.timeEnd("ordenado...")

console.log("\n")

//bubbleSort invertido:
console.log(`BubbleSort invertido: ${bubblesort(bubbleSort2)}`)

console.log("Tempo de execução:")
console.time("invertido...")
bubblesort(bubbleSort2)
console.timeEnd("invertido...")

console.log("\n")

//bubbleSort desordenado:
console.log(`BubbleSort desordenado: ${bubblesort(bubbleSort3)}`) 

console.log("Tempo de execução:")
console.time("desordenado...")
bubblesort(bubbleSort3)
console.timeEnd("desordenado...")

console.log("\n")


//SELEÇÃO DIRETA
let selecaoDireta1 = ordenado.slice() 
let selecaoDireta2 = invertido.slice() 
let selecaoDireta3 = desordenado.slice() 

//seleçao direta ordenado:
console.log(`Seleçao Direta ordenado: ${selecaoDireta(selecaoDireta1)}`)

console.log("Tempo de execução:")
console.time("ordenado...")
selecaoDireta(selecaoDireta1)
console.timeEnd("ordenado...")

console.log("\n")

//seleção direta invertido:
console.log(`Seleçao Direta invertido: ${selecaoDireta(selecaoDireta2)}`)

console.log("Tempo de execução:")
console.time("invertido...")
selecaoDireta(selecaoDireta2)
console.timeEnd("invertido...")

console.log("\n")

//seleçao direta desordenado:
console.log(`Seleçao Direta desordenado: ${selecaoDireta(selecaoDireta3)}`)

console.log("Tempo de execução:")
console.time("desordenado...")
selecaoDireta(selecaoDireta3)
console.timeEnd("desordenado...")

console.log("\n")


//INSERÇÃO DIRETA
let insercaoDireta1 = ordenado.slice() 
let insercaoDireta2 = invertido.slice() 
let insercaoDireta3 = desordenado.slice() 

//inserçao direta ordenado:
console.log(`Inserçao Direta ordenado: ${insercaoDireta(insercaoDireta1)}`)

console.log("Tempo de execução:")
console.time("ordenado...")
insercaoDireta(insercaoDireta1)
console.timeEnd("ordenado...")

console.log("\n")

//inserção direta invertido:
console.log(`Inserçao Direta invertido: ${insercaoDireta(insercaoDireta2)}`)

console.log("Tempo de execução:")
console.time("invertido...")
insercaoDireta(insercaoDireta2)
console.timeEnd("invertido...")

console.log("\n")

//inserçao direta desordenado:
console.log(`Inserçao Direta desordenado: ${insercaoDireta(insercaoDireta3)}`)

console.log("Tempo de execução:")
console.time("desordenado...")
bubblesort(insercaoDireta3)
console.timeEnd("desordenado...")

console.log("\n")