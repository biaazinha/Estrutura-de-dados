function principal(){
    let vetor = []
    let opcao = ""

    for(i = 0; i < 10; i++){
        vetor.push(Number(Math.random(11).toFixed(2)))
    }
    console.log(vet)

    do{
        opcao = prompt(`Digite 1 para inserir um número;\nDigite 2 para remover um número;\nDigite 3 para somar os números\nDigite 4 para sair`)
    }while (opcao != 4)


    inserirElementos(vetor)
    removerElementos(vetor)
    somarElementosParImpar(vetor)
    
}


function inserirElementos(vetor){

    if(opcao == `1`){
        let n 
        n = Number(prompt(`Digite o número de elementos a serem inseridos: `))
        let vetorn = []

        for(let i = 0; i < n; i++){
            vetorn.push(prompt(`Digite o ${i + 1} elemento: `))
            vetor.push(vetorn[i])
        }
        console.log(`Novo vetor: ${vetor}`)

    }else{
        alert(`Ocorreu algum erro durante a operação!`)
    }

}


function removerElementos(vetor){

    if (opcao == `2`){

        let escolha = prompt(`Deseja remover um elemento pelo valor (v) ou índice (i) ?`)

        if(escolha == `v`){
            let elemento = prompt(`Digite o valor do elemento: `)
            vetor.indexOf(elemento)
            vetor.splice(vetor.indexOf(elemento),1)
            console.log(vetor)
        }else if(escolha == `i`){
            let index = prompt(`Digite o index do elemento: `)
            vetor.splice(index,1)
            console.log(vetor)
        }else{
            alert(`Não foi possível realizar a operação`)
        }

    }

}


function somarElementosParImpar(vetor){

    if (opcao == `3`){
        let escolha = prompt(`Deseja somar elementos pares (p) ou ímpares (i) ?`)

        if(escolha == `p`){
            let pares = 0
            for(i = 0; i < vetor.length; i++){
                if(vetor[i]%2 == 0){
                    pares = pares + vetor[i]
                }
            }
            console.log(pares)
        }else if(escolha == `i`){
            let impares = 0
            for(i = 0; i < vetor.length; i++){
                if(vetor[i]%2 != 0){
                    impares = impares + vetor[i]
                }
            }
            console.log(impares)
        }else{
            alert(`Opção inválida!`)
        }

    }
    
}