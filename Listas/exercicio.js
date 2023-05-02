/*
Fazer um programa com as seguintes funções de lista encadeada:
a)Mostrar todos os elementos da lista.
b)Remover o primeiro elemento da lista.
c)Inserir um elemento no início da lista.
d)Retornar a posição do elemento na lista. Se o elemento não existir, retorne -1.
e)Remover um elemento de uma posição específica da lista.
*/

function LinkedList(){

    let Node = function(element){
        this.element = element;
        this.next = null;
    };

    let length = 0;
    let head = null;

    //tamanho da lista
    this.size = function(){
        return length;
    };

    //mostrar todos os elementos da lista
    this.toString = function(){
        let current = head, string = '';

        while(current){
            string += current.element + (current.next ? '->' : '');
            current = current.next;
        }
        return string;
    }

    //remover o primeiro elemento da lista 
    this.remove = function(){
        if(!this.head){
            return;
        }

        this.head = this.head.next;

        if(!this.head){
            this.tail = null;
        }
    }

    //inserir um elemento no inicio da lista 
    this.append = function(element){
        let node = new Node(element);
        let current;
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
    }

    //Retornar a posição do elemento na lista

    //Remover um elemento de uma posição específica da lista.

}

//exemplo de uso
lista = new LinkedList();
lista.append(10);
lista.append(12);
lista.append(5);

console.log("Tamanho da lista:");
console.log(lista.size());

console.log("Lista após inserir um elemento no início:");
console.log(lista.toString());

console.log("Lista original:");
console.log(lista.toString());

lista.remove();
console.log("Lista após remover o primeiro elemento:");
console.log(lista.toString());