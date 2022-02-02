
// Crie um objeto que receba ao menos três propriedades sobre você.
let person = {
  nome:"carol",
  idade:26,
  profissao:"desenvolvedora"
}
console.log(person);
// Adicione uma nova propriedade sem alterar seu objeto inicial.
person.telefone = "9999-9999"
console.log(person);
// Remova uma propriedade desse objeto.
delete person.profissao
console.log(person);
//Mostre no console todas as propriedades desse objeto.
console.log(person);
// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.
let cadastro = [{
  nome:"carol",
  telefone:"77777777",
  profissao:"desenvolvedora"
},
{
  nome:"carlos",
  idade:"55555555",
  amigos:["paty","guto","natalia","patricia"],
  profissao:"medico"
},
{
  nome:"leticia",
  idade:"6666666",
  amigos:["marcus","natalia","patruklus","luiza"],
  profissao:"pintora"
},
{
  nome:"raissa",
  idade:"3333333",
  amigos:["patricia","patruklus","luiza","rafael"],
  profissao:"aeromoça"
},
{
  nome:"luiz",
  idade:"1111111",
  amigos:["luiza","rafael","paty","guto"],
  profissao:"professora"
}]
// Mostre no console o nome de um amigo de cada lista.
console.log(cadastro[2].amigos[1]);

let arr = []
for (let index = 0; index < cadastro[arr].amigos[arr]; index++) {
  const result = cadastro[index];
  console.log(result);
  
}