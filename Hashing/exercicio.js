function TabelaHash(tamanho) {

  const tabela = new Array(tamanho).fill(null);

  function gerar(chave) {
    var codigo = chave.charCodeAt(0) - 64;
    return codigo;
  }

  function converter(chave) {
    var num = gerar(chave);
    return num % tamanho;
  }

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

const tabela = TabelaHash(14);

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
tabela.inserir("M");
tabela.inserir("S");
tabela.inserir("C");  

let letraEncontrada = tabela.buscar("A");  // 3
console.log("Letra encontrada:", letraEncontrada);

tabela.exibir("\n");