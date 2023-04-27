class HashTable {
    constructor() {
      this.tabela = new Array(27);
    }
    
    hash(chave) {
      return chave % this.tabela.length;
    }
    
    get(chave) {
      let hash = this.hash(chave);
      return this.tabela[hash];
    }  
  
    put(chave, valor) {
      let hash = this.hash(chave);
      this.tabela[hash] = valor;
    }  
    
}

// Criando uma instância da HashTable
let hashTable = new HashTable();

// Criando alguns alunos
let aluno1 = { nome: "João", matricula: 123 };
let aluno2 = { nome: "Maria", matricula: 456 };
let aluno3 = { nome: "Pedro", matricula: 789 };

// Inserindo os alunos na tabela
hashTable.put(aluno1.matricula, aluno1);
hashTable.put(aluno2.matricula, aluno2);
hashTable.put(aluno3.matricula, aluno3);

// Buscando um aluno na tabela
let alunoEncontrado = hashTable.get(456);
console.log("Aluno encontrado:", alunoEncontrado);

console.log(hashTable)