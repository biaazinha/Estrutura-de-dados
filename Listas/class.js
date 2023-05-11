/*
Fazer um programa com as seguintes funções de lista encadeada:
a)Mostrar todos os elementos da lista.
b)Remover o primeiro elemento da lista.
c)Inserir um elemento no início da lista.
d)Retornar a posição do elemento na lista. Se o elemento não existir, retorne -1.
e)Remover um elemento de uma posição específica da lista.
*/

class Node {
    constructor(element, next = null) {
      this.element = element;
      this.next = next;
    }
}
  
class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    // a) Mostrar todos os elementos da lista.
    toString() {
        let current = this.head;
        let string = '';
        while (current !== null) {
        string += current.element + ' -> ';
        current = current.next;
        }
        string += 'null';
        console.log(string);
    }

    // b) Remover o primeiro elemento da lista.
    remove() {
        if (this.head === null) {
        console.log('Lista vazia');
        return;
        }
        this.head = this.head.next;
        this.length--;
    }

    // c) Inserir um elemento no início da lista.
    append(element) {
        this.head = new Node(element, this.head);
        this.length++;
    }

    // d) Retornar a posição do elemento na lista. Se o elemento não existir, retorne -1.
    index(element) {
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

    // e) Remover um elemento de uma posição específica da lista.
    removeIndex(index) {
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
  
// Exemplo de uso:
let list = new LinkedList();
list.append(3);
list.append(2);
list.append(1);

//Mostrar todos os elementos da lista.
console.log("Lista com todos os seus elementos:");
list.toString(); // 1 -> 2 -> 3 -> null

//Remover o primeiro elemento da lista.
list.remove(); // 2 -> 3 -> null
console.log("Lista após remover o primeiro elemento:");
list.toString(); 
list.remove(); // 3 -> null
console.log("Lista após remover de novo o primeiro elemento:");
list.toString(); 

//Inserir um elemento no início da lista.
console.log("Lista após inserir um elemento no início:");
list.append(4);
list.toString(); // 4 -> 3 -> null
console.log("Lista após inserir mais um elemento no início:");
list.append(5);
list.toString(); // 5 -> 4 -> 3 -> null

//Retornar a posição do elemento na lista. Se o elemento não existir, retorne -1.
console.log("Índice de posição do elemento 3:");
console.log(list.index(3)); // 2
console.log("Índice de posição do elemento inexistente:");
console.log(list.index(2)); // -1

//Remover um elemento de uma posição específica da lista.
console.log("Lista após remover elemento de um índice específico");
list.removeIndex(0);
list.toString(); // 4 -> 3 -> null