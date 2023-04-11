//Fução para verificar se uma dada expressão aritmetica possui ou não parenteses, colchetes e chaves corretamente utilizados, tanto numero quanto posição
/*
-criar uma pilha vazia
-criar uam string com simbolos de abertura
-criar uam string com simbolos de fechamento
-percorre a expressão dada caracter por caracter
-se tiver simbolos de abertura ele é colocado na pilha 
-se não, retorna false
-se tiver simbolos de fechamento 
-verifica se ter um correspondente na pilha de abertura 
-se não, retorna false 
-depois de percorrer a pilha inteira, verifica se tudo é valido ou não
*/

function verificaExpressao(expressao){
    let pilha = [];
    let ordem = {
        '(':')',
        '[':']',
        '{':'}',
    };

    for(let i = 0; i < expressao.length; i ++){
        let x = expressao[i];
        if(ordem[x]){
            pilha.push(x);
        }else if(x === ')' || x === ']' || x === '}'){
            let y = pilha.pop();
            if(ordem[y] !== x){
                return false;
            }
        }
    }
    return pilha.length === 0;
}

let expressao = "{1+[2(3+6)}"
console.log(verificaExpressao(expressao))