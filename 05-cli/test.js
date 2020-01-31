const { deepEqual } = require("assert");
const database = require("./database");

const DEFAULT_ITEM_CADASTRAR = {
  nome: "Flash",
  poder: "Speed",
  id: 1
};
const DEFAULT_ITEM_ATUALIZAR = {
  nome: "Lanterna Verde",
  poder: "Energia do Anel",
  id: 2
};
describe("Suite de manipulação de herois", () => {
  before(async function cadastrarUmHeroi() {
    this.enableTimeouts(false);
    await database.cadastrar(DEFAULT_ITEM_CADASTRAR);
    await database.cadastrar(DEFAULT_ITEM_ATUALIZAR);
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

  it("deve remover um herói com id", async () => {
    const expected = true;
    const resultado = await database.remover(DEFAULT_ITEM_CADASTRAR.id);
    deepEqual(resultado, expected);
  });
  it("deve atualizar um herói pelo id", async () => {
    const expected = {
      ...DEFAULT_ITEM_ATUALIZAR,
      nome: "Batman",
      poder: "Dinheiro"
    };

    const novoDado = {
      nome: "Batman",
      poder: "Dinheiro"
    };
    await database.atualizar(DEFAULT_ITEM_ATUALIZAR.id, novoDado);
    const [resultado] = await database.listar(DEFAULT_ITEM_ATUALIZAR.id);
    deepEqual(resultado, expected);
  });
  after(async () => {
    database.remover(2);
  });
});
