const { getPessoas } = require("./service");

// criando meuReduce
Array.prototype.meuReduce = function(callback, valorInicial) {
  let valorFinal = typeof valorInicial !== undefined ? valorInicial : this[0]; // se o valor inicial for indefinido , ele obrigatoriamente pega o primeiro item
  for (let index = 0; index <= this.length - 1; index++) {
    valorFinal = callback(valorFinal, this[index], this);
  }
  return valorFinal;
};

async function main() {
  try {
    const { results } = await getPessoas("a");
    const pesos = results.map(item => parseInt(item.height)); // capturo a altura de cada personagem
    console.log(pesos);
    const total = pesos.reduce((anterior, proximo) => {
      //console.log(`Soma nesta etapa: ${anterior}+${proximo}`);
      return anterior + proximo;
    }, 0); // valor inicial caso o primeiro item do array não tenha valor
    console.log(total);

    const names = [
      ["Erick", "Wendel"],
      ["NodeBR", "NerdZao"]
    ];
    const total2 = names
      .meuReduce((anterior, proximo) => {
        return anterior.concat(proximo);
      }, [])
      .join(", "); // converção para um array unico
    console.log(total2);
  } catch (error) {
    console.error("ocorreu algum problema na chamada a api", error);
  }
}

main();
