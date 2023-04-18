function converter(letras2){
    var alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var codigo = []
    letras2 = alfabeto.split("")
    for(let i = 0; i< alfabeto.length; i++){
        codigo.push(alfabeto.indexOf(alfabeto[i]) +1)
    }
    return codigo
}

let letras2 = "aklbB"
converter()
console.log(converter(letras2))