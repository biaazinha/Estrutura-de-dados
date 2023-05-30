function LinkedList() {

    let Node = function (element) {
        this.element = element;
        this.next = null;
    };

    let length = 0;
    let head = null;

    this.toString = function() {
        let current = head, string = '';
        while (current !== null) {
        string += current.element + (current.next ? ' -> ' : '')
        current = current.next;
        }
        string += ' -> null';
        console.log(string);
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

    this.index = function(element) {
        let current = head;
        let index = 0;
      
        while (current) {
            if (element == current.telement) {
                return index;
            }
            index++;
            current = current.next
        }
        return -1;
    }

    this.removeAt = function (position) {
        //verifica fora do intervalo
        if (position > -1 && position < length) {
            let current = head,
            previous,
            index = 0;
            //Remove o primeiro elemento
            if(position == 0){
                head = current.next;
            }           
        }
    }

}
