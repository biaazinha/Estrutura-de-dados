/*
Fazer um programa com as seguintes funções de lista encadeada:
a)Mostrar todos os elementos da lista.
b)Remover o primeiro elemento da lista.
c)Inserir um elemento no início da lista.
d)Retornar a posição do elemento na lista. Se o elemento não existir, retorne -1.
e)Remover um elemento de uma posição específica da lista.
*/

function LinkedList(){

    let Node = function(element = null){
        this.element = element;
        this.next = null;
    };

    let head = null;
    let length = 0;

    //mostrar todos os elementos da lista
    this.toString = function(){
        let current = head
        let string = '';

        while(current !== null){
            string += current.element + (current.next ? '->' : '');
            current = current.next;
        }
        string += '->null';
        return string;
    }

    //remover o primeiro elemento da lista 
    this.remove = function(){
        if(this.head === null){
            console.log('Lista vazia');
            return;
        }

        this.head = this.head.next;

    }

    //inserir um elemento no inicio da lista 
    this.append = function(element){
        this.head = new Node(element, this.head);
        this.length++;
        return lista;
    }

    //Retornar a posição do elemento na lista. Se o elemento não existir, retorne -1.
    this.index = function(element) {
        let current = this.head;
        let index = 0;
        while (current !== null) {
        if (current.element === element) {
            return index;
        }
        current = current.next;
        index++;
        }
        return -1;
    } 

    //Remover um elemento de uma posição específica da lista.
    this.removeIndex = function(index) {
        if (index < 0 || index >= this.length) {
            console.log('Índice inválido');
            return;
        }   
        if (index === 0) {
            this.remove();
            return;
        }
        let current = this.head;
        let previous = null;
        let currentIndex = 0;
        while (currentIndex < index) {
            previous = current;
            current = current.next;
            currentIndex++;
        }
        previous.next = current.next;
        this.length--;
    }

}


//exemplo de uso

lista = new LinkedList();
lista.append(3);
lista.append(2);
lista.append(1);

//Mostrar todos os elementos da lista.
console.log("Lista com todos os seus elementos:");
console.log(lista.toString());   // 3 -> 2 -> 1 -> null

//Remover o primeiro elemento da lista.
lista.remove();
console.log("Lista após remover o primeiro elemento:");
console.log(lista.toString());   // 2 -> 1 -> null

//Inserir um elemento no início da lista.
console.log("Lista após inserir um elemento no início:");
lista.append(4);
lista.append(5);
console.log(lista.toString()); // 4 -> 5 -> 2 -> 1 -> null

//Retornar a posição do elemento na lista. Se o elemento não existir, retorne -1.
console.log(lista.index(3)); // 1
console.log(lista.index(4)); // -1

//Remover um elemento de uma posição específica da lista.
lista.removeIndex(1);
lista.toString(); // 2 -> null