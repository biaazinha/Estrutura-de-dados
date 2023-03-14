let array = [1, 3, 8, 10, 40, 46]

function busca(array, de, ate, valorBuscado) {
    const meio = Math.floor((de + ate) / 2);
    const atual = array[meio];
  
    if (de > ate) {
      return -1;
    }
  
    if (valorBuscado === atual) {
      return meio;
    }

    
    if (valorBuscado < atual) {
        return busca(array, de, meio - 1, valorBuscado);
    }
    
    if (valorBuscado > atual) {
        return busca(array, meio + 1, ate, valorBuscado);
    }

}
  
console.log(busca(array, 0, array.length - 1, 10));