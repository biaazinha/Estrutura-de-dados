function HashTable(tamanho) {

  //criar um array de tamanho indefinido
  const tabela = new Array(tamanho).fill(undefined);

  //utilizar tabela do alfabeto
  function gerar(chave) {
    var codigo = chave.toLowerCase().charCodeAt() - 96;
    return codigo;
  }

  //converter as letras em números 
  function converter(chave) {
    var num = [];
    for (let i = 0; i < chave.length; i++) {
      num.push(gerar(chave[i]));
    }
    return num % tamanho;
  }

  //inserir chaves na tabela
  function inserir(chave) {
    const index = converter(chave);
    let i = index;
    while (tabela[i] !== undefined) {
      i = (i + 1) % tamanho;
      if (i === index) {
        return false;
      }
    }
    tabela[i] = chave;
    return true;
  }

  inserir("NIVOZUAEFRBL")
  
  //buscar chaves na tabela
  function buscar(chave) {
    const index = converter(chave);
    let i = index;
    while (tabela[i] !== undefined) {
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

  return {
    gerar: gerar,
    converter: converter,
    inserir: inserir,
    buscar: buscar,
  }

}

//uso:
//passar de parametro o tamanho da tabela
const tabela = HashTable(5);