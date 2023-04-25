//parte 1 - Bianca Karoline Ramos e Giovanna Cerino
function verifica(expressao){
    let pilha = [];
    let ordem = {'(':')', '[':']', '{':'}'};

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

let expressaoT = "{(1+2)*3[4-9]}"    //true
let expressaoF = "{(1+2)*3[4-9}"     //false

console.log(verifica(expressaoT)) 
console.log(verifica(expressaoF))