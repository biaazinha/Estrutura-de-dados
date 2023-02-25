function principal() {
    let vet = [1,2,3,4,5,6,7,7,8,9,9,9,9,9]
    let contador = 0
    let msg = ""
    let num = 0   //número repetido
    let m = 0     //é a quantidade de vezes que repitiu

    console.log(vet)
    for (let i = 0; i < vet.length; i++) {
        contador = 0

        for(let j= 0; j<vet.length;j++ ){

            if(vet[i] == vet[j]){
                contador += 1
            }
        }

        if(m < contador){
            m = contador   
            num = vet[i]    //recebe o tanto de vezes que o número repetiu
            msg = `O ${num} foi o que mais apareceu e sua quantidade de aparições foi: ${m}`
        }

    }
    console.log(msg)
}