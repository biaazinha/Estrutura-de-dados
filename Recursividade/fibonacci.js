function fibonacci(x){
    if(x<3){
        return 1;
    }else{
        return (fibonacci(x-1) + fibonacci(x-2));
    }
}

console.log(fibonacci(4));