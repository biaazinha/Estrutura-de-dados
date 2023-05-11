/*
Fazer um programa com as seguintes funções de lista encadeada:
a)Mostrar todos os elementos da lista.
b)Remover o primeiro elemento da lista.
c)Inserir um elemento no início da lista.
d)Retornar a posição do elemento na lista. Se o elemento não existir, retorne -1.
e)Remover um elemento de uma posição específica da lista.
*/

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
        if(head === null){ 
            head = node;
        }else{
            current = head;
            while(current.next){  
                current = current.next;
            }
            current.next = node; 
        }
        length++;  
    };

    this.toString = function(){
        let current = head, string = '';

        while(current){
            string += current.element + (current.next ? '->' : '');
            current = current.next;
        }
        return string;
    }
         
    this.remove = function() {
        let current = head

        if(head == null) {
            return - 1
        }else{
            head = current.next
            length--
            return current.element
        }
    }

    this.index = function(element) {
        let current = head;
        let index = 0;
      
        while (current !== null) {
          if (current.element === element) {
            return index;
          }
          current = current.next;
          index++;
        }
      
        return -1;
    };
      
    this.removeIndex = function (position) {
        if (position < 0 || position >= length) {
            console.log('Índice inválido');
            return;
        }
        if (position === 0) {
            this.remove();
            return;
        }
        let current = head;
        let previous = null;
        let currentPosition = 0;
        while (currentPosition < position) {
            previous = current;
            current = current.next;
            currentPosition++;
        }
        previous.next = current.next;
        length--;
    }

}

//Exemplo de uso: 
lista = new LinkedList();
lista.append(10);
lista.append(12);
lista.append(5);

//Mostrar todos os elementos da lista.
console.log("Lista com todos os seus elementos:");
console.log(lista.toString())  // 10 -> 12 -> 5 -> null

//Remover o primeiro elemento da lista.
console.log(lista.remove())
console.log(lista.toString())

//Retornar a posição do elemento na lista. Se o elemento não existir, retorne -1.
console.log(lista.index(12)); // Saída: 1
console.log(lista.index(5)); // Saída: 2
console.log(lista.index(10)); // Saída: 0
console.log(lista.index(8)); // Saída: -1

//Remover um elemento de uma posição específica da lista.
lista.removeIndex(0);
console.log(lista.toString())
