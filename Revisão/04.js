function principal(){
    let vetor = [1, 2, 3, -2, -6, 10, -10, 10];
    let opcao = "";

    console.log(vetor);

    do{
        opcao = prompt(`Digite 1 para saber a quantidade de números negativos;
        \nDigite 2 para calcular a média dos números pares;
        \nDigite 3 para calcular a soma dos números múltiplos de 3 e de 5;
        \nDigite 4 para listar todos os números ímpares;
        \nDigite 5 para mostrar o menor elemento;
        \nDigite 6 para mostrar a posição do maior elemento;
        \nDigite 7 para verificar se o vetor possui números repetidos;
        \nDigite 8 para remover todos os números repetidos;`)

        if (opcao == `1`){
            qntNegativo(vetor);
        }
        else if (opcao == `2`){
            mediaPares(vetor);
        }
        else if (opcao == `3`){
            somaMultiplos(vetor);
        }
        else if (opcao == `4`){
            listarImpares(vetor);
        }
        else if (opcao == `5`){
            menorElemento(vetor);
        }
        else if (opcao == `6`){
            posicaoMaior(vetor);
        }
        else if (opcao == `7`){
            numerosRepetidos(vetor);
        }
        else if (opcao == `8`){
            removerRepetidos(vetor);
        }

    }while (opcao != 0);

}


function qntNegativo(vetor){
    let contador = 0;

    vetor.forEach(numero => {
        if(numero < 0){
            contador++
        }
    });

    console.log(contador)

}


function mediaPares(vetor){
    let qnt = 0;

    for (i = 0; i < vetor.length; i++){

        if(vetor[i]%2 == 0){
            qnt += 1
        }
    
    }
    console.log(`A quantidade de notas pares é ${qnt}`);

    let soma = 0;

    for (i = 0; i < vetor.length; i++){

        if(vetor[i]%2 == 0){
            soma += vetor[i]
        }
    
    }

    const media = soma / qnt

    console.log(`A média das notas pares é ${media}`)

}


function somaMultiplos(vetor){
    let multiplos3 = 0
    let multiplos5 = 0
    let soma = 0

    for (let i = 0; i < vetor.length; i++) {
        if(vetor[i] %3 == 0){
           multiplos3 += vetor[i]
        }
        else if(vetor[i] %5 == 0){
            multiplos5 += vetor[i]
        }
    }

    soma = multiplos3 + multiplos5
    console.log(`A soma dos múltiplos de 3 e 5 são: ${soma}`)
}


function listarImpares(vetor){

    let impar = []

    for (let i = 0; i < vetor.length; i++) {
        if(vetor[i]%2 != 0){
          impar.push(vetor[i])
        }
    }

    console.log(`Os elementos ímpares são: ${impar}`)

}


function menorElemento(vetor){
    let menor = vetor[0]

    for (let i = 0; i < vetor.length; i++) {
       if(menor > vetor[i]){
         menor = vetor[i]
       }
    }
    console.log(`O menor elemento é: ${menor}`)
}


function posicaoMaior(vetor){
    let posicao = 0
    let maior = vetor[0]

    for (let i = 0; i < vetor.length; i++) {

        if(maior < vetor[i]){
          maior = vetor[i]
          posicao = i
        }
     }
     console.log(`O maior elemento é: ${maior} e sua posição é: ${posicao}`)
}


function numerosRepetidos(vetor){
    let vetor2 =[]
    let msg = ""
    for (let i = 0; i < vetor.length; i++) {    
         vetor2.push(vetor[i])

    }

    vetor.forEach((valor,index)=> {
       
        for (let i = 0; i < vetor2.length; i++) {
            if (valor == vetor2[i] && index != i) {    
                msg = "Há numeros repetidos"
            }else{
                msg= "Não há repetidos"
            }
       }
        
    });
    console.log(msg)
}


function removerRepetidos(vetor){
 
   vetor.forEach((valor,index) => {

       for (let i = 0; i < vetor.length; i++) {

       if (valor == vetor[i]) {
            if (index != i) {
                vetor.splice(i,1)
            }
        }
        
       }
   });

   console.log(vetor)
}