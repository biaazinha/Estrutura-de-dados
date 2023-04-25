//parte 2 - Bianca Karoline Ramos e Giovanna Cerino

function HashTable(size) {
    const table = new Array(size).fill(undefined);
  
    function hash(key) {
      let sum = 0;
      for (let i = 0; i < key.length; i++) {
        sum += key.charCodeAt(i);
      }
      return sum % size;
    }
  
    function insert(key) {
      const index = hash(key);
      let i = index;
      while (table[i] !== undefined) {
        i = (i + 1) % size;
        if (i === index) {
          return false;
        }
      }
      table[i] = key;
      return true;
    }
  
    function search(key) {
      const index = hash(key);
      let i = index;
      while (table[i] !== undefined) {
        if (table[i] === key) {
          return i;
        }
        i = (i + 1) % size;
        if (i === index) {
          return -1;
        }
      }
      return -1;
    }
  
    function print() {
      console.log(table);
    }
  
    return {
      insert: insert,
      search: search,
      print: print,
    };
  }
  
  // Exemplo de uso
  const table = HashTable(5);
  table.insert('a');
  table.insert('b');
  table.insert('c');
  table.insert('d');
  table.insert('e');
  table.insert('f'); // A tabela está cheia
  table.print(); // ['a', 'b', 'c', 'd', 'e']
  console.log(table.search('c')); // 2
  console.log(table.search('f')); // -1
  