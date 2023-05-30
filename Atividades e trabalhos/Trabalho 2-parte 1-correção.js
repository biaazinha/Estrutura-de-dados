var exp = "]()["
var vet = []
var pilha = []
var i
var erro = 0

vet = exp.split("")

for(i = 0; i < vet.length; i++){
    if((vet[i] == '(') || (vet[i] == '[') || (vet[i] == '{')){
        pilha.push(vet[i])
    }
    else if((vet[i] == ')') && (pilha.pop() != '(')){
        erro = -1
    }
    else if((vet[i] == ']') && (pilha.pop() != '[')){
        erro = -1
    }
    else if((vet[i] == '}') && (pilha.pop() != '{')){
        erro = -1
    }
}

if(pilha.lenght != 0){
    erro = -1
}

if(erro == -1){
    console.log("Erro")
} else {
    console.log("Expressão correta")
}
