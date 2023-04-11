//****descrevendo uma operação Clear utilizando apenas as operações Empty e Pop****
var pilha = []
var x

x = 5
pilha.push(x)
pilha.push(1)
pilha.push(2)

console.log("Pilha: " + pilha)

x = pilha.pop()

console.log("elemento: " + x)
console.log("Pilha: " + pilha)