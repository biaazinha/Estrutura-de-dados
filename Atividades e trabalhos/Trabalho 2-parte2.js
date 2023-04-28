//parte 2 - Bianca Karoline Ramos e Giovanna Cerino

function TabelaHash(tamanho) {

  //criar um array de tamanho indefinido
  const tabela = new Array(tamanho).fill(null);

  //utilizar tabela do alfabeto
  function gerar(chave) {
    var codigo = chave.charCodeAt(0) - 64;
    return codigo
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
    for (let i = 0; i < tabela.length; i++) {
      console.log("[", tabela[i], "]");
    }
    return tabela;
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
const tabela = TabelaHash(13);

//inserindo 15 exemplos de letras
tabela.inserir("N");
tabela.inserir("I");
tabela.inserir("V");
tabela.inserir("O");
tabela.inserir("Z");
tabela.inserir("U");
tabela.inserir("A");
tabela.inserir("E");
tabela.inserir("F");
tabela.inserir("R");
tabela.inserir("B");
tabela.inserir("L");

//caso um espaço da tabela não seja ocupado será impresso "null"

//buscar a posição do índice de uma letra na tabela
let letraEncontrada = tabela.buscar("A");  // índice 3
console.log("Letra posicionada no índice indicado:", letraEncontrada);

//exibindo tabela final
tabela.exibir()