//inserção no final e remoção no inicio - extremidades
//implementação estatica e dinamica
//primeiro a entrar é o primeiro a sair - FIFO

//****descrevendo uma operação Clear utilizando apenas as operações Serve e Empty****
//1-criando a fila inicialemnte
fila = []
//2-verificar se está vazia 
while empty(fila) != 0
//3-removendo o primeiro elemento da fila
serve(fila)
//4-fila agora está vazia e a operação clear é concluida

//exemplo:
function clear(){
    while (!empty()){
        serve()
    }
}