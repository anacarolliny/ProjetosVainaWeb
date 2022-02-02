//1 - crie uma função que exiba uma mensagem no console

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console

//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console

function exibir(mensagem) {
  return ("Olá")
}

console.log(exibir())

function exibeNome(nome) {
  return nome
}


console.log(exibeNome("Carol"));

function cadastro(nome, idade, estiloM) {
  return nome + idade + estiloM
  
}

console.log(cadastro("Carol ", 26, " Pop"));

function cadastro2(filme, musica) {
  return "Seu filme é:"  + filme + "E sua musica é :" + musica
}

console.log("Senhor dos aneis", "Chandelier");