//Trabalho 1 - Bianca Karoline Ramos e Giovanna Cerino

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

//-------------------------------------------------------------------------------------------------------------------------------------//

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

//--------------------------------------------------------------------------------------------------------------------------------------//

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

//--------------------------------------------------------------------------------------------------------------------------------------//

//quickSort
function quickSort(vetor, esquerda, direita) {
  var i = esquerda
  var j = direita
  var aux
  var pivotidx = (esquerda + direita) / 2
  var pivot = parseInt(vetor[pivotidx.toFixed()])


  //partição
  while (i <= j) {
    while (parseInt(vetor[i]) < pivot)
      i++
    while (parseInt(vetor[j]) > pivot)
      j--
    if (i <= j) {
      aux = vetor[i]
      vetor[i] = vetor[j]
      vetor[j] = aux
      i++
      j--
    }
  }

  //Recursão
  if (esquerda < j)
    quickSort(vetor, esquerda, j)
  if (i < direita)
    quickSort(vetor, i, direita)
  return vetor

}

//-------------------------------------------------------------------------------------------------------------------------------------//

//100
//vetor crescente de 100
let crescente100 = []
for (let i = 0; i < 100; i++) {
  crescente100.push(i)
}


//vetor descrescente de 100
let decrescente100 = []
for (let i = 0; i < 100; i++) {
  decrescente100.push(i)
}
decrescente100.reverse()


//vetor aleatório de 100
let aleatorio100 = []
for (let i = 0; i < 100; i++) {
  aleatorio100[i] = Math.floor(Math.random() * 100)
}

//-------------------------------------------------------------------------------------------------------------------------------------//

//1000
//vetor crescente de 1000
let crescente1000 = []
for (let i = 0; i < 1000; i++) {
  crescente1000.push(i)
}


//vetor descrescente de 1000
let decrescente1000 = []
for (let i = 0; i < 1000; i++) {
  decrescente1000.push(i)
}
decrescente1000.reverse()


//vetor aleatório de 1000
let aleatorio1000 = []
for (let i = 0; i < 1000; i++) {
  aleatorio1000[i] = Math.floor(Math.random() * 1000)
}

//-------------------------------------------------------------------------------------------------------------------------------------//

//10000
//vetor crescente de 10000
let crescente10000 = []
for (let i = 0; i < 10000; i++) {
  crescente10000.push(i)
}


//vetor descrescente de 10000
let decrescente10000 = []
for (let i = 0; i < 10000; i++) {
  decrescente10000.push(i)
}
decrescente10000.reverse()


//vetor aleatório de 10000
let aleatorio10000 = []
for (let i = 0; i < 10000; i++) {
  aleatorio10000[i] = Math.floor(Math.random() * 10000)
}

//-------------------------------------------------------------------------------------------------------------------------------------//

//100000
//vetor crescente de 100000
let crescente100000 = []
for (let i = 0; i < 100000; i++) {
  crescente100000.push(i)
}


//vetor descrescente de 100000
let decrescente100000 = []
for (let i = 0; i < 100000; i++) {
  decrescente100000.push(i)
}
decrescente100000.reverse()


//vetor aleatório de 100000
let aleatorio100000 = []
for (let i = 0; i < 100000; i++) {
  aleatorio100000[i] = Math.floor(Math.random() * 100000)
}

//-------------------------------------------------------------------------------------------------------------------------------------//

//BUBBLESORT
let bubbleSortC1 = crescente100.slice()
let bubbleSortC2 = crescente1000.slice()
let bubbleSortC3 = crescente10000.slice()
let bubbleSortC4 = crescente100000.slice()

let bubbleSortD1 = decrescente100.slice()
let bubbleSortD2 = decrescente1000.slice()
let bubbleSortD3 = decrescente10000.slice()
let bubbleSortD4 = decrescente100000.slice()

let bubbleSortA1 = aleatorio100.slice()
let bubbleSortA2 = aleatorio1000.slice()
let bubbleSortA3 = aleatorio10000.slice()
let bubbleSortA4 = aleatorio100000.slice()

//bubbleSort crescente:
console.log(`BubbleSort crescente de 100: ${bubblesort(bubbleSortC1)}`)

console.time("crescente100...")
bubblesort(bubbleSortC1)
console.timeEnd("crescente100...")
console.log("\n")


console.log(`BubbleSort crescente de 1000: ${bubblesort(bubbleSortC2)}`)

console.time("crescente1000...")
bubblesort(bubbleSortC2)
console.timeEnd("crescente1000...")
console.log("\n")


console.log(`BubbleSort crescente de 10000: ${bubblesort(bubbleSortC3)}`)

console.time("crescente10000...")
bubblesort(bubbleSortC3)
console.timeEnd("crescente10000...")
console.log("\n")


console.log(`BubbleSort crescente de 100000: ${bubblesort(bubbleSortC4)}`)

console.time("crescente100000...")
bubblesort(bubbleSortC4)
console.timeEnd("crescente100000...")
console.log("\n")

//-------------------------------------------------------------------------------------------------------------------------------------//

//bubbleSort descrescente:
console.log(`BubbleSort decrescente de 100: ${bubblesort(bubbleSortD1)}`)

console.time("decrescente100...")
bubblesort(bubbleSortD1)
console.timeEnd("decrescente100...")
console.log("\n")

console.log(`BubbleSort decrescente de 1000: ${bubblesort(bubbleSortD2)}`)

console.time("decrescente1000...")
bubblesort(bubbleSortD2)
console.timeEnd("decrescente1000...")
console.log("\n")


console.log(`BubbleSort decrescente de 10000: ${bubblesort(bubbleSortD3)}`)

console.time("decrescente10000...")
bubblesort(bubbleSortD3)
console.timeEnd("decrescente10000...")
console.log("\n")


console.log(`BubbleSort decrescente de 100000: ${bubblesort(bubbleSortD4)}`)

console.time("decrescente100000...")
bubblesort(bubbleSortD4)
console.timeEnd("decrescente100000...")
console.log("\n")



//-------------------------------------------------------------------------------------------------------------------------------------//

//bubbleSort aleatório:

console.log(`BubbleSort aleatorio de 100: ${bubblesort(bubbleSortA1)}`)

console.time("aleatorio100...")
bubblesort(bubbleSortA1)
console.timeEnd("aleatorio100...")
console.log("\n")

console.log(`BubbleSort aleatorio de 1000: ${bubblesort(bubbleSortA2)}`)

console.time("aleatorio1000...")
bubblesort(bubbleSortA2)
console.timeEnd("aleatorio1000...")
console.log("\n")


console.log(`BubbleSort aleatorio de 10000: ${bubblesort(bubbleSortA3)}`)

console.time("aleatorio10000...")
bubblesort(bubbleSortA3)
console.timeEnd("aleatorio10000...")
console.log("\n")


console.log(`BubbleSort aleatorio de 100000: ${bubblesort(bubbleSortA4)}`)

console.time("aleatorio100000...")
bubblesort(bubbleSortA4)
console.timeEnd("aleatorio100000...")
console.log("\n")

//-------------------------------------------------------------------------------------------------------------------------------------//

//SELEÇÃO DIRETA
let selecaoDiretaC1 = crescente100.slice()
let selecaoDiretaC2 = crescente1000.slice()
let selecaoDiretaC3 = crescente10000.slice()
let selecaoDiretaC4 = crescente100000.slice()

let selecaoDiretaD1 = decrescente100.slice()
let selecaoDiretaD2 = decrescente1000.slice()
let selecaoDiretaD3 = decrescente10000.slice()
let selecaoDiretaD4 = decrescente100000.slice()

let selecaoDiretaA1 = aleatorio100.slice()
let selecaoDiretaA2 = aleatorio1000.slice()
let selecaoDiretaA3 = aleatorio10000.slice()
let selecaoDiretaA4 = aleatorio100000.slice()


//seleçao direta crescente:
console.log(`Seleçao Direta crescente de 100: ${selecaoDireta(selecaoDiretaC1)}`)

console.time("crescente100...")
selecaoDireta(selecaoDiretaC1)
console.timeEnd("crescente100...")
console.log("\n")


console.log(`Seleçao Direta crescente de 1000: ${selecaoDireta(selecaoDiretaC2)}`)

console.time("crescente1000...")
selecaoDireta(selecaoDiretaC2)
console.timeEnd("crescente1000...")
console.log("\n")


console.log(`Seleçao Direta crescente de 10000: ${selecaoDireta(selecaoDiretaC3)}`)

console.time("crescente10000...")
selecaoDireta(selecaoDiretaC3)
console.timeEnd("crescente10000...")
console.log("\n")


console.log(`Seleçao Direta crescente de 100000: ${selecaoDireta(selecaoDiretaC4)}`)

console.time("crescente100000...")
selecaoDireta(selecaoDiretaC4)
console.timeEnd("crescente100000...")
console.log("\n")

//-------------------------------------------------------------------------------------------------------------------------------------//

//seleção direta descrescente:
console.log(`Seleçao Direta decrescente de 100: ${selecaoDireta(selecaoDiretaD1)}`)

console.time("decrescente100...")
selecaoDireta(selecaoDiretaD1)
console.timeEnd("decrescente100...")
console.log("\n")


console.log(`Seleçao Direta decrescente de 1000: ${selecaoDireta(selecaoDiretaD2)}`)

console.time("decrescente1000...")
selecaoDireta(selecaoDiretaD2)
console.timeEnd("decrescente1000...")
console.log("\n")


console.log(`Seleçao Direta decrescente de 10000: ${selecaoDireta(selecaoDiretaD3)}`)

console.time("decrescente10000...")
selecaoDireta(selecaoDiretaD3)
console.timeEnd("decrescente10000...")
console.log("\n")


console.log(`Seleçao Direta decrescente de 100000: ${selecaoDireta(selecaoDiretaD4)}`)

console.time("decrescente100000...")
selecaoDireta(selecaoDiretaD4)
console.timeEnd("decrescente100000...")
console.log("\n")

//-------------------------------------------------------------------------------------------------------------------------------------//

//seleçao direta aleatório:
console.log(`Seleçao Direta aleatório de 100: ${selecaoDireta(selecaoDiretaA1)}`)

console.time("aleatório100...")
selecaoDireta(selecaoDiretaA1)
console.timeEnd("aleatório100...")
console.log("\n")


console.log(`Seleçao Direta aleatório de 1000: ${selecaoDireta(selecaoDiretaA2)}`)

console.time("aleatório1000...")
selecaoDireta(selecaoDiretaA2)
console.timeEnd("aleatório1000...")
console.log("\n")


console.log(`Seleçao Direta aleatório de 10000: ${selecaoDireta(selecaoDiretaA3)}`)

console.time("aleatório10000...")
selecaoDireta(selecaoDiretaA3)
console.timeEnd("aleatório10000...")
console.log("\n")


console.log(`Seleçao Direta aleatório de 100000: ${selecaoDireta(selecaoDiretaA4)}`)

console.time("aleatório100000...")
selecaoDireta(selecaoDiretaA4)
console.timeEnd("aleatório100000...")
console.log("\n")

//-------------------------------------------------------------------------------------------------------------------------------------//

//INSERÇÃO DIRETA
let insercaoDiretaC1 = crescente100.slice()
let insercaoDiretaC2 = crescente1000.slice()
let insercaoDiretaC3 = crescente10000.slice()
let insercaoDiretaC4 = crescente100000.slice()

let insercaoDiretaD1 = decrescente100.slice()
let insercaoDiretaD2 = decrescente1000.slice()
let insercaoDiretaD3 = decrescente10000.slice()
let insercaoDiretaD4 = decrescente100000.slice()

let insercaoDiretaA1 = aleatorio100.slice()
let insercaoDiretaA2 = aleatorio1000.slice()
let insercaoDiretaA3 = aleatorio10000.slice()
let insercaoDiretaA4 = aleatorio100000.slice()


//inserçao direta crescente:
console.log(`Inserçao Direta crescente de 100: ${insercaoDireta(insercaoDiretaC1)}`)

console.time("crescente100...")
insercaoDireta(insercaoDiretaC1)
console.timeEnd("crescente100...")
console.log("\n")


console.log(`Inserçao Direta crescente de 1000: ${insercaoDireta(insercaoDiretaC2)}`)

console.time("crescente1000...")
insercaoDireta(insercaoDiretaC2)
console.timeEnd("crescente1000...")
console.log("\n")


console.log(`Inserçao Direta crescente de 1000: ${insercaoDireta(insercaoDiretaC3)}`)

console.time("crescente10000...")
insercaoDireta(insercaoDiretaC3)
console.timeEnd("crescente10000...")
console.log("\n")


console.log(`Inserçao Direta crescente de 100000: ${insercaoDireta(insercaoDiretaC4)}`)

console.time("crescente100000...")
insercaoDireta(insercaoDiretaC4)
console.timeEnd("crescente100000...")
console.log("\n")

//-------------------------------------------------------------------------------------------------------------------------------------//

//inserção direta descrescente:
console.log(`Inserçao Direta descrescente de 100: ${insercaoDireta(insercaoDiretaD1)}`)

console.time("descrescente100...")
insercaoDireta(insercaoDiretaD1)
console.timeEnd("descrescente100...")
console.log("\n")


console.log(`Inserçao Direta descrescente de 1000: ${insercaoDireta(insercaoDiretaD2)}`)

console.time("descrescente1000...")
insercaoDireta(insercaoDiretaD2)
console.timeEnd("descrescente1000...")
console.log("\n")


console.log(`Inserçao Direta descrescente de 10000: ${insercaoDireta(insercaoDiretaD3)}`)

console.time("descrescente10000...")
insercaoDireta(insercaoDiretaD3)
console.timeEnd("descrescente10000...")
console.log("\n")


console.log(`Inserçao Direta descrescente de 100000: ${insercaoDireta(insercaoDiretaD4)}`)

console.time("descrescente100000...")
insercaoDireta(insercaoDiretaD4)
console.timeEnd("descrescente100000...")
console.log("\n")

//-------------------------------------------------------------------------------------------------------------------------------------//

//inserçao direta aleatório:
console.log(`Inserçao Direta aleatório de 100: ${insercaoDireta(insercaoDiretaA1)}`)

console.time("aleatório100...")
bubblesort(insercaoDiretaA1)
console.timeEnd("aleatório100...")
console.log("\n")


console.log(`Inserçao Direta aleatório de 1000: ${insercaoDireta(insercaoDiretaA2)}`)

console.time("aleatório1000...")
bubblesort(insercaoDiretaA2)
console.timeEnd("aleatório1000...")
console.log("\n")


console.log(`Inserçao Direta aleatório de 10000: ${insercaoDireta(insercaoDiretaA3)}`)

console.time("aleatório10000...")
bubblesort(insercaoDiretaA3)
console.timeEnd("aleatório10000...")
console.log("\n")


console.log(`Inserçao Direta aleatório de 100000: ${insercaoDireta(insercaoDiretaA4)}`)

console.time("aleatório100000...")
bubblesort(insercaoDiretaA4)
console.timeEnd("aleatório100000...")
console.log("\n")


//-------------------------------------------------------------------------------------------------------------------------------------//

//QUICKSORT
let quickSortC1 = crescente100.slice()
let quickSortC2 = crescente1000.slice()
let quickSortC3 = crescente10000.slice()
let quickSortC4 = crescente100000.slice()

let quickSortD1 = decrescente100.slice()
let quickSortD2 = decrescente1000.slice()
let quickSortD3 = decrescente10000.slice()
let quickSortD4 = decrescente100000.slice()

let quickSortA1 = aleatorio100.slice()
let quickSortA2 = aleatorio1000.slice()
let quickSortA3 = aleatorio10000.slice()
let quickSortA4 = aleatorio100000.slice()


//quickSort crescente:
console.log(`QuickSort crescente de 100: ${quickSort(quickSortC1,0,quickSortC1.length-1)}`)

console.time("crescente100...")
quickSort(quickSortC1,0,quickSortC1.length-1)
console.timeEnd("crescente100...")
console.log("\n")


console.log(`QuickSort crescente de 1000: ${quickSort(quickSortC2,0,quickSortC2.length-1)}`)

console.time("crescente1000...")
quickSort(quickSortC2,0,quickSortC2.length-1)
console.timeEnd("crescente1000...")
console.log("\n")


console.log(`QuickSort crescente de 10000: ${quickSort(quickSortC3,0,quickSortC3.length-1)}`)

console.time("crescente10000...")
quickSort(quickSortC3,0,quickSortC3.length-1)
console.timeEnd("crescente10000...")
console.log("\n")


console.log(`QuickSort crescente de 100000: ${quickSort(quickSortC4,0,quickSortC4.length-1)}`)

console.time("crescente100000...")
quickSort(quickSortC4,0,quickSortC4.length-1)
console.timeEnd("crescente100000...")
console.log("\n")

//-------------------------------------------------------------------------------------------------------------------------------------//

//quickSort descrescente:
console.log(`QuickSort descrescente de 100: ${quickSort(quickSortD1,0,quickSortD1.length-1)}`)

console.time("descrescente100...")
quickSort(quickSortD1,0,quickSortD1.length-1)
console.timeEnd("descrescente100...")
console.log("\n")


console.log(`QuickSort descrescente de 1000: ${quickSort(quickSortD2,0,quickSortD2.length-1)}`)

console.time("descrescente1000...")
quickSort(quickSortD2,0,quickSortD2.length-1)
console.timeEnd("descrescente1000...")
console.log("\n")


console.log(`QuickSort descrescente de 10000: ${quickSort(quickSortD3,0,quickSortD3.length-1)}`)

console.time("descrescente10000...")
quickSort(quickSortD3,0,quickSortD3.length-1)
console.timeEnd("descrescente10000...")
console.log("\n")


console.log(`QuickSort descrescente de 100000: ${quickSort(quickSortD4,0,quickSortD4.length-1)}`)

console.time("descrescente100000...")
quickSort(quickSortD4,0,quickSortD4.length-1)
console.timeEnd("descrescente100000...")
console.log("\n")
//-------------------------------------------------------------------------------------------------------------------------------------//

//quickSort aleatório:
console.log(`QuickSort aleatório de 100: ${quickSort(quickSortA1,0,quickSortA1.length-1)}`)

console.time("aleatório100...")
quickSort(quickSortA1,0,quickSortA1.length-1)
console.timeEnd("aleatório100...")
console.log("\n")


console.log(`QuickSort aleatório de 1000: ${quickSort(quickSortA2,0,quickSortA2.length-1)}`)

console.time("aleatório1000...")
quickSort(quickSortA2,0,quickSortA2.length-1)
console.timeEnd("aleatório1000...")
console.log("\n")

      
console.log(`QuickSort aleatório de 10000: ${quickSort(quickSortA3,0,quickSortA3.length-1)}`)

console.time("aleatório10000...")
quickSort(quickSortA3,0,quickSortA3.length-1)
console.timeEnd("aleatório10000...")
console.log("\n")


console.log(`QuickSort aleatório de 100000: ${quickSort(quickSortA4,0,quickSortA4.length-1)}`)

console.time("aleatório100000...")
quickSort(quickSortA4,0,quickSortA4.length-1)
console.timeEnd("aleatório100000...")
console.log("\n")