function principal(){

    let vet1 = []
    let vet2 = []
    let vet3 = []

    for(let i=0; i<5; i++)
    {
        vet1.push(+prompt())
    }
    for(let i=0; i<5; i++)
    {
        vet2.push(+prompt())
    }
    for(let i=0; i<5; i++)
    {
        vet3.push(vet1[i], vet2[i])
    }
        
    console.log(vet3)
}