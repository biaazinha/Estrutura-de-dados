//converter as letras em seus números correspondentes 
function gerar(letra) {
    var codigo = letra.toLowerCase().charCodeAt() - 96;
    return codigo;
}

function converter(letra){
    var num = [];
    for (let i = 0; i < letra.length; i++) {
        num.push(gerar(letra[i]));
    }
    return num;
}