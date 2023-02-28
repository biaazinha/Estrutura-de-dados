function soma(vet,pos1,pos2){
    var s = 0
    for(let i<pos1; i>pos2; i++)
}


function soma_par_impar(vet,cod){
    var soma = 0
    if(cod == "par"){
        for(var i=0; i<vet.lenght; i++){
            if(vet[i] % 2 == 0){
                soma += vet[i]
            }
        }
    }
    else if (cod == "impar"){
        for(var i=0; i<vet.lenght; i++){
            if(vet[i] % 2 != 0){
                soma += vet[i]
            }
        }
    }
    return soma
}


var qnt = 10
inserir(vet, qnt)
console.log(vet)


resultado = soma(vet,1,3)
console.log(resultado)


resultado = soma_par_impar(vet, "par")
console.log(resultado)
resultado = soma_par_impar(vet, "impar")
console.log(resultado)
