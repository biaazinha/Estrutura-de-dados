function inserirChaves() {
    var chaves = "NIVOZUAEFRBL"
    return chaves
}

function listaLinear(chaves) {

    chaves.toUpperCase()
    chaves = chaves.split("")

    var lista = []
    var lista2 = []

    for(i=0; i<chaves.length; i++) {
        var ch = chaves[i]
        
        var j = ch.charCodeAt(0) - 64
        
        lista.push(j % 13)
        
        var pos = j % 13

        if(lista2[(j % 13)] == null) {
            lista2[j % 13] = ch
        }
        else if(lista2[(j % 13)] != null) {
            while (lista2[pos] != null) {
                pos++
            }
            lista2[pos] = ch
        }
        console.log(lista2)
    }
}

listaLinear(inserirChaves())