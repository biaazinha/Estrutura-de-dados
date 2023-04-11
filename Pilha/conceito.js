//insiro e removo sempre no topo
//stack 
//o ultimo item a entrar é o primeiro a sair - LIFO

//****descrevendo uma operação Clear utilizando apenas as operações Empty e Pop****
//1-criando a pilha inicialemnte
pilha = []
//2-verificar se está vazia 
while empty(pilha) != 0
//3-removendo o primeiro elemento da pilha
pop(pilha)
//4-pilha agora está vazia e a operação clear é concluida

//exemplo:
function clear(){
    while (!empty()){
        pop()
    }
}


//****descrevendo uma operação Top utilizando apenas as operações Push, Empty e Pop****
//1-criando a pilha inicialemnte
pilha = []
//2-verificar se está vazia 
if != pilha.empty()
//3-salva o valor no topo da pilha em uma variavel temporaria
x = pilha.pop()
//4-colocando o valor temporario de volta na pilha 
pilha.push(x)
//5-imprimindo o valor do topo da pilha - resultado do top
console.log("Topo da pilha: " + temp)

//exemplo:
function top(){
    if (!empty()){
        x = pop()
        push(x)
    }
}