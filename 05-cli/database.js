const { readFile } = require("fs"); // fs = file system
const { promisify } = require("util");

const readFileAsync = promisify(readFile);
// também é possível obter dados do JSON com
// const dadosJSON = require('./arquivo.json')

class Database {
  constructor() {
    this.NOME_ARQUIVO = "herois.json";
  }
  async obterDadosArquivo() {
    const arquivo = await readFileAsync(this.NOME_ARQUIVO, "utf8");
    return JSON.parse(arquivo.toString());
  }
  escreverArquivo() {}

  async listar(id) {
    const dados = await this.obterDadosArquivo();
    const dadosFiltrados = dados.filter(item => {
      if (!id) return true; // retorna todos os items se o id for falso
      if (item.id === id) return true; // retorna apenas o item com id igual
      // ou id ? item.id === id : true
    });
    return dadosFiltrados;
  }
}

module.exports = new Database();
