function principal(){
    let vetor = []

    inserirElementos(vetor)
    removerElementos(vetor)
    somarElementosParImpar(vetor)
    somarTodosElementos(vetor)
    mostra(vetor)
    
}

function inserirElementos(vetor){

    for(let i = 0; i < 10; i++){

        let objNumeros = {
            n: Number(prompt(`Informe o número inteiro ${i+1}`))
        }

        vetor.push(objNumeros)
    }

}

function removerElementos(vetor){

    let objIndice = {
        n: Number(prompt(`Informe o número/indíce que deseja remover`))
    }
    let indice = n.indexOf(buscar)

    while(indice >= 0){
        n.splice(indice, 1)
        indice = n.indexOf(buscar)
    }

    vetor.push(objIndice)
}

function somarElementosParImpar(vetor){
}

function somarTodosElementos(vetor){
}

function mostra(vetor){
    console.log(`Resultado final do vetor`)
    console.log(vetor)
}