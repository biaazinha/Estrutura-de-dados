function potencia(base, exp){
    if(exp == 0){
        return 1;
    }
    return (base * potencia(base, exp - 1));
}

console.log(potencia(5, 4))