//1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18

//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a condição humana seja true

//3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro


//*** Exercícios bônus
//4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R

//5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E

var idade =18
var humano = true 
var aniversario = "Janeiro"
var nome = "Elis"
var sobrenome = "Sacramento" 

if(idade >= 18){
  console.log("Maior de idade")
 
}

if(idade >= 18 && humano === true){
  console.log("Maior de idade é humano")
 
}

if(aniversario === "Janeiro" || "Desembro"){
  console.log("Seu aniversario é em: " + aniversario)
 
}

if (nome.includes("R",0)) {
  console.log("Nome é :" + nome);
}

if(sobrenome.length > 6 && nome.includes("E",0) ){
  console.log("Seu sobrenome é : " + sobrenome + " " + " E seu nome é : " + nome);
}
