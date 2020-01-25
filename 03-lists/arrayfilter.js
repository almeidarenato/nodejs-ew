const { getPessoas } = require("./service");
// traz apenas uma função especifica de um modulo

// criando meu proprio filter
Array.prototype.meuFilter = function(callback) {
  const lista = [];
  for (item of this) {
    const result = callback(item, this);
    if (!result) continue;
    lista.push(item);
  }
  return lista;
};
async function main() {
  try {
    const { results } = await getPessoas("a");
    const familiaLars = results.filter(pessoa => {
      // precisa retornar um boolean para saber se deve retornar da lista
      // se não encontrou o indexOf retorna == -1
      // se encontrou = posição do array
      // console.log(pessoa.name);
      // console.log(pessoa.name.toLowerCase().indexOf(`lars`) !== -1);
      const result = pessoa.name.toLowerCase().indexOf(`lars`) !== -1;
      return result;
    });

    const familiaSky = results.meuFilter(
      pessoa => pessoa.name.toLowerCase().indexOf("skywalker") !== -1
    );

    const names = familiaLars.map(pessoa => pessoa.name);
    const names2 = familiaSky.map(pessoa => pessoa.name);

    console.log(names);
    console.log(names2);
  } catch (error) {
    console.error("Ocorreu algum erro na chamada da api", error);
  }
}

main();
