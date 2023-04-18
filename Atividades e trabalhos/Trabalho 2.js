//parte 1 
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

let expressao = "{(1+2)*3}[4-9]"
console.log(verificaExpressao(expressao))

//parte 2
