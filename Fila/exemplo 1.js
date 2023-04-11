//****descrevendo uma operação Clear utilizando apenas as operações Serve e Empty****
var fila = [];
var x;

x = 7
fila.push(x);
fila.push(1);
fila.push(2);

console.log("Fila: " + fila);

x = fila.shift();
console.log("elemento: " + x);
console.log("Fila: " + fila)

fila.push(10)
console.log("Fila: " + fila)