const service = require("./service");

async function main() {
  try {
    const result = await service.getPessoas("Skywalker");
    const names = [];
    // console.time("tempo do for");
    // for (let i = 0; i <= result.results.length - 1; i++) {
    //   const pessoa = result.results[i];
    //   names.push(pessoa.name);
    // }
    // console.timeEnd("tempo do for");
    // tempo do for: 0.119ms

    // console.time("tempo do for in");
    // for (let i in result.results) {
    //   const pessoa = result.results[i];
    //   names.push(pessoa.name);
    // }
    // console.timeEnd("tempo do for in");
    //tempo do for in: 0.126ms

    console.time("tempo do for of");
    for (pessoa of result.results) {
      names.push(pessoa.name);
    }
    console.timeEnd("tempo do for of");
    //tempo do for of: 0.149ms
    console.log(names);
  } catch (error) {
    console.error(`Ocorreu algum problema ${error}`);
  }
}

main();
