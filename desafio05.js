 // Crie um array que receba 5 itens e exiba no console.
 let arr = ["abacate", "torta", "lasanha", "batata", "refrigerante"]
console.log(arr);
// Utilize um método para adicionar um nome ao inicio do array.
arr.unshift("suco")
console.log(arr);
// Utilize um método para remover o último nome do array.
arr.pop()
console.log(arr);

// Utilize um método para adicionar dois nomes ao fim do array.
arr.push("chocolate", "coca-cola")
console.log(arr);
// Utilize um método para remover o primeiro nome do array.
arr.shift()
console.log(arr);

// Utilize um método para organizar em ordem crescente o seguinte array:
let numbers = [7,5,6,3,8,9,2,1,4]

numbers.sort((a,b) => a- b)
console.log(numbers);