function intercalar(vetor1, vetor2){

    var vetor3 = []

    for(var i=0; i<4; i++){
        vetor3.push(vetor1[i])
        vetor3.push(vetor2[i])
    }
    console.log(vetor3)
}

var vet1 = [1,3,5,7]
var vet2 = [2,4,6,8]

intercalar(vet1, vet2)