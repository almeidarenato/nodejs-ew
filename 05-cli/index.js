const Commander = require("commander");
const Database = require("./database");
const Heroi = require("./heroi");
async function main() {
  Commander.version("versão 1")
    .option("-n, --nome [value]", "Nome do Herói")
    .option("-p, --poder [value]", "Poder do Herói")
    .option("-c, --cadastrar", "Cadastrar um Heroi")
    .option("-i, --id [value]", "Id do Heroi")

    .option("-l, --listar", "Lista os heróis")
    .option("-r, --remover", "Remove um heroi pelo id")
    .option("-a, --atualizar [value]", "Atualiza um heroi pelo id")
    .parse(process.argv);
  const heroi = new Heroi(Commander);
  try {
    if (Commander.cadastrar) {
      delete heroi.id;
      const resultado = await Database.cadastrar(heroi);
      if (!resultado) {
        console.error("Não foi possível finalizar o cadastro do heroi");
        return;
      } else {
        console.log("Herói cadastrado com sucesso");
      }
    }
    if (Commander.listar) {
      const resultado = await Database.listar();
      console.log(resultado);
      return;
    }
    if (Commander.remover) {
      const resultado = await Database.remover(heroi.id);
      if (!resultado) {
        console.error("Não foi possível remover o herói");
        return;
      } else {
        console.log("Heroi removido com sucesso");
      }
    }
  } catch (error) {
    console.error("Houve problemas durante a execução do comando:", error);
  }
  if (Commander.atualizar) {
    try {
      const idParaAtualizar = parseInt(Commander.atualizar);
      console.log(idParaAtualizar);
      const dado = JSON.stringify(heroi); //transforma em json removendo os undefined
      const heroiAtualizar = JSON.parse(dado); //transforma em objeto novamente
      const resultado = await Database.atualizar(
        idParaAtualizar,
        heroiAtualizar
      );
      if (resultado) {
        console.log("Heroi atualizado com sucesso");
        return;
      } else {
        console.log("Problemas para atualizar o heroi");
      }
    } catch (err) {
      console.error("Não foi possível atualizar o herói\n", err);
    }
  }
}
main();
