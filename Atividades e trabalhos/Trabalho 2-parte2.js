//parte 2 - Bianca Karoline Ramos e Giovanna Cerino

function TabelaHash(tamanho) {

  //criar um array de tamanho indefinido
  const tabela = new Array(tamanho).fill(null);

  //utilizar tabela do alfabeto
  function gerar(chave) {
    var codigo = chave.charCodeAt(0) - 64;
    return codigo;
  }

  //converter as letras em números e fazer a divisão
  function converter(chave) {
    var num = gerar(chave);
    return num % tamanho;
  }

  //inserir chaves na tabela
  function inserir(chave) {
    const index = converter(chave);
    let i = index;

    while (tabela[i] !== null) {
      i = (i + 1) % tamanho;
      if (i === index) {
        return false;
      }
    }

    tabela[i] = chave;
    return true;
  }

  //buscar chaves na tabela
  function buscar(chave) {
    const index = converter(chave);
    let i = index;

    while (tabela[i] !== null) {
      if (tabela[i] === chave) {
        return i;
      }
      i = (i + 1) % tamanho;
      if (i === index) {
        return -1;
      }
    }

    return -1;
  }

  //exibir tabela
  function exibir() {
    console.log(tabela);
  }

  return {
    gerar: gerar,
    converter: converter,
    inserir: inserir,
    buscar: buscar,
    exibir: exibir,
  };
}

//passar de parametro o tamanho da tabela
const tabela = TabelaHash(14);

//inserindo 15 exemplos de letras
tabela.inserir("N");  // (14/14) = %0 - pos 0
tabela.inserir("I");  // (9/14) = %5 - pos 5
tabela.inserir("V");  // (23/14) = %9 - pos 9
tabela.inserir("O");
tabela.inserir("Z");
tabela.inserir("U");
tabela.inserir("A");
tabela.inserir("E");
tabela.inserir("F");
tabela.inserir("R");
tabela.inserir("B");
tabela.inserir("L");
tabela.inserir("M");
tabela.inserir("S");
tabela.inserir("C");  //não vai entrar na tabela pois esgotou seu espaço

//buscar a posição do índice de uma letra na tabela
let letraEncontrada = tabela.buscar("A");  // índice 3
console.log("Letra encontrada:", letraEncontrada);

//exibindo tabela final
tabela.exibir();