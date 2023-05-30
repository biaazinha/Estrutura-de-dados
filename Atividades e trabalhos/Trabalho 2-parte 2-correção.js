let palavra = "P R O G R A M"
palavra = palavra.split(" ")

var tabela = new Array(11)

for(i=0; i<palavra.length; i++){
    inserir(tabela, palavra[i])
}
console.log(tabela)

buscar(tabela, 'A')

function inserir(tabela, caracter){
    var cascii = caracter.charCodeAt(0)
    var pos = cascii % 11

    while(tabela[pos] != null){
        pos ++
        if(pos > 10){
            pos = 0
        }
    }
    tabela[pos] = caracter
}

function buscar(tabela, caracter){
    var cascii = caracter.charCodeAt(0)
    var pos = cascii % 11

    while(tabela[pos] != null){
        if(tabela[pos] == caracter){
            console.log("Achou")
            return
        }
        else if(pos > 10){
            pos = 0
        }
        else {
            pos ++
        }
    }
    console.log("Não achou")
    return
}
