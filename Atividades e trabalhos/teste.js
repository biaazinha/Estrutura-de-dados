/*function Node(element) {
    this.element = element;
    this.next = null;
}*/

function LinkedList() {

    let Node = function (element) {
        this.element = element;
        this.next = null;
    };

    let length = 0;
    let head = null;

    // a) Mostrar todos os elementos da lista.
    this.toString = function() {
        let current = head, string = '';
        while (current !== null) {
        string += current.element + (current.next ? ' -> ' : '')
        current = current.next;
        }
        string += ' -> null';
        console.log(string);
    }

    // b) Remover o primeiro elemento da lista.
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

    // c) Inserir um elemento no início da lista.
    this.append = function(element) {
        let newNode = new Node(element);
        if (head === null) {
            head = newNode;
        } else {
            let current = head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
        length++;
        return this;
    }

    // d) Retornar a posição do elemento na lista. Se o elemento não existir, retorne -1.
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
    }

    // e) Remover um elemento de uma posição específica da lista.
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
  
// Exemplo de uso:
let lista = new LinkedList();
lista.append(3);
lista.append(2);
lista.append(1);

//Mostrar todos os elementos da lista.
console.log("Lista com todos os seus elementos:");
lista.toString(); // 3 -> 2 -> 1 -> null

//Remover o primeiro elemento da lista.
lista.remove(); // 2 -> 1 -> null
console.log("Lista após remover o primeiro elemento:");
lista.toString();
lista.remove(); // 1 -> null
console.log("Lista após remover de novo o primeiro elemento:");
lista.toString();

//Inserir um elemento no início da lista.
console.log("Lista após inserir um elemento no início:");
lista.append(4);
lista.toString(); // 1 -> 4 -> null
console.log("Lista após inserir mais um elemento no início:");
lista.append(5);
lista.toString(); // 1 -> 4 -> 5 -> null

//Retornar a posição do elemento na lista. Se o elemento não existir, retorne -1.
console.log("Índice de posição do elemento 3:");
console.log(lista.index(5)); // 2
console.log("Índice de posição do elemento inexistente:");
console.log(lista.index(2)); // -1

//Remover um elemento de uma posição específica da lista.
console.log("Lista após remover elemento de um índice específico");
lista.removeIndex(0);
lista.toString(); // 4 -> 3 -> null