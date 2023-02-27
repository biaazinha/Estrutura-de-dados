function principal() {
    let n = Number(prompt(`Digite quantos números da sequencia de fibonacci devem aparecer: `))
    let n1 = 0
    let n2 = 1
    let r = 0
    let vetor = []

    for(let i = 0 ; i < n; i++){
        n1 = n2
        n2 = r

        r = n1 + n2
        vetor.push(r)
        
        console.log(`${n1} + ${n2}    Resultado: ${r}`)
    }

    console.log(vetor)
}