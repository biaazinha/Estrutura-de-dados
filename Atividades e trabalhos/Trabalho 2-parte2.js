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
  const tabela = HashTable(5);
  tabela.insert('a');
  tabela.insert('b');
  tabela.insert('c');
  tabela.insert('d');
  tabela.insert('e');
  tabela.insert('f'); // A tabela está cheia
  tabela.print(); // ['a', 'b', 'c', 'd', 'e']
  console.log(tabela.search('c')); // 2
  console.log(tabela.search('f')); // -1
  