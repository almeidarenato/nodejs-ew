const { deepEqual } = require("assert");
const database = require("./database");

const DEFAULT_ITEM_CADASTRAR = {
  nome: "Flash",
  poder: "Speed",
  id: 1
};
describe("Suite de manipulação de herois", () => {
  before(async function cadastrarUmHeroi() {
    this.enableTimeouts(false);
    await database.cadastrar(DEFAULT_ITEM_CADASTRAR);
  });

  it("deve pesquisar um herói usando arquivos", async () => {
    const expected = DEFAULT_ITEM_CADASTRAR;
    const [resultado] = await database.listar(expected.id);
    // para trazer o resultado já fora do array de objetos uso [resultado]

    deepEqual(resultado, expected);
  });
  it("deve cadastrar um herói usando arquivos", async () => {
    const expected = DEFAULT_ITEM_CADASTRAR;
    const resultado = await database.cadastrar(DEFAULT_ITEM_CADASTRAR);
    const [actual] = await database.listar(DEFAULT_ITEM_CADASTRAR.id);
    deepEqual(actual, expected);
  });
});
