function principal(){
    let vetor = [1,2,3,4,5,6,7,8,9,10]
    let opcao = ""

    console.log(vetor);

    do{
        opcao = prompt(`Digite 1 para inserir um número;
        \nDigite 2 para remover um número;
        \nDigite 3 para somar somar pares ou ímpares;
        \nDigite 4 para somar os números entre dois índices;
        \nDigite 0 para finalizar.`)

        if (opcao == `1`){
            inserirElementos(vetor);
        }
        else if (opcao == `2`){
            removerElementos(vetor);
        }
        else if (opcao == `3`){
            somarElementosParImpar(vetor);
        }
        else if (opcao == `4`){
            somarIndice(vetor);
        }else{
            alert(`Ocorreu algum erro durante a operação!`)
        }

    }while (opcao != 0);

}


function inserirElementos(vetor){

    let n 
    n = Number(prompt(`Digite o número de elementos a serem inseridos: `))
    let vetorn = []

    for(let i = 0; i < n; i++){
        vetorn.push(prompt(`Digite o ${i + 1} elemento: `))
        vetor.push(vetorn[i])
    }
    console.log(`Novo vetor: ${vetor}`)

}


function removerElementos(vetor){

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


function somarElementosParImpar(vetor){

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

function somarIndice(vetor){
}