function principal(){
    let vetor = [1, 2, 3, -2, -6, 10, -10];
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
}


function somaMultiplos(vetor){
}


function listarImpares(vetor){
}


function menorElemento(vetor){
}


function posicaoMaior(vetor){
}


function numerosRepetidos(vetor){
}


function removerRepetidos(vetor){
}