//1 - Criar um loop que conte de 1 até 10 usando FOR


//2 - Criar um loop que conte de 10 até 1 usando WHILE


//3 - Criar um loop que conte todos os números ímpares de 1 até 100


//4- Criar um loop que conte todos os números pares de 0 a 100
console.log("--------------------------------------------");
console.log("Este é o Primeiro Looping");

for (let index = 0; index < 11; index++) {
  console.log(index);
  
}

console.log("--------------------------------------------");
console.log("Este é o Segundo Looping");

let index = 0;

while (index < 10) {
  console.log(index++);
}

console.log(index);

console.log("--------------------------------------------");
console.log("Este é o Terceiro Looping");


let contador = 1;
    while(contador <= 100) {
      let numero = contador%2
        if(numero ==1){
          console.log("Impar " + contador);
        }
         contador++
         // incrementa de dois em dois
    }
console.log("FIM");


console.log("--------------------------------------------");
console.log("Este é o QuartoLooping");


let contador2 = 0;
    while(contador2 <= 100) {
      let numero = contador2%2
        if(numero ==0){
          console.log("Par " + contador2);
        }
         contador2++
         // incrementa de dois em dois
    }
console.log("FIM");