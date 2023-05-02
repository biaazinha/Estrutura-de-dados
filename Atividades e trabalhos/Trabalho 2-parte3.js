//parte 2 - Bianca Karoline Ramos e Giovanna Cerino

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