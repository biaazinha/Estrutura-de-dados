function principal() {
    let n = Number(prompt(`Digite um número: `))
    let soma = 0

    for (let i = n; i > 0; i--) {
        soma +=  i/ (i*i)
        console.log(`N:${i}    e seu valor: ${ i/ (i*i)}`)
    }
    console.log(soma)

}