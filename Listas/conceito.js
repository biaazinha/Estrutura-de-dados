//Lista encadeada simples
function LinkedList(){

    let Node = function (element) {
        this.element = element;
        this.next = null;
    };

    let length = 0;
    let head = null;

    this.append = function (element){
        let node = new Node(element),
         current;
        if(head === null){ //primeiro nó da lista
            head = node;
        }else{
            current = head;
            while(current.next){  //percorre a lista com um laço até encontrar o último item
                current = current.next;
            }
            current.next = node; //obtém o último item e faz next receber node para fazer a ligação
        }
        length++;  //atualiza o tamanho da lista
    };

    this.size = function(){
        return length;
    };

}

lista = new LinkedList();
lista.append(10);
lista.append(12);
console.log(lista.size());



//Lista duplamente encadeada
//cada nó possui dois ponteiros - predecessor e sucessor
//circular, linear ou conter nó de cabeçalho

//Lista circular
//ultimo elemento aponta para o priemiro
//evitar loop infinito - cabeça de lista