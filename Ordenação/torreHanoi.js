function hanoi(n, origem, destino, aux) {
    if (n == 1) {
        console.log("Mova disco do pino " + origem + " para o pino " + destino)
    }else{
        hanoi(n-1, origem, aux, destino)
        console.log("Mova disco do pino " + origem + " para o pino " + destino)
        hanoi(n-1, aux, destino, origem)
    }
}

hanoi(4, 'A', 'B', 'C')