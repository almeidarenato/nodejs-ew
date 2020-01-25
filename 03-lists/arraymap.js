const service = require("./service");

//criando meu proprio map()
Array.prototype.meuMap = function(callback) {
  const novoArrayMapeado = [];
  for (let index = 0; index <= this.length - 1; index++) {
    const resultado = callback(this[index], index);
    novoArrayMapeado.push(resultado);
  }
  return novoArrayMapeado;
};

async function main() {
  try {
    const result = await service.getPessoas("Skywalker");
    //const names = [];
    // Array forEach
    // result.results.forEach(pessoa => {
    //   names.push(pessoa.name);
    // });

    // Array.map() - já retorna um array com o retorno do map
    //const names = result.results.map(pessoa => pessoa.name);
    const names = result.results.meuMap((pessoa, indice) => {
      return `[${indice}],${pessoa.name}`;
    });
    console.log(names);
  } catch (error) {
    console.error("um erro aconteceu na chamada a api", error);
  }
}
main();
