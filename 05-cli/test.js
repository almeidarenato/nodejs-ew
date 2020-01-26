const { deepEqual, ok } = require("assert");
const database = require("./database");

const DEFAULT_ITEM_CADASTRAR = {
  nome: "Flash",
  poder: "Speed",
  id: 1
};
describe("Suite de manipulação de heróis", () => {
  it("deve pesquisar um herói usando arquivos", async () => {
    const expected = DEFAULT_ITEM_CADASTRAR;
    const [resultado] = await database.listar(expected.id);
    // para trazer o resultado já fora do array de objetos uso [resultado]

    deepEqual(resultado, expected);
  });
  // it("deve cadastrar um herói usando arquivos", async () => {
  //   const expected = DEFAULT_ITEM_CADASTRAR;
  //   ok(null, expected);
  // });
});
