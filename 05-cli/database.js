const { readFile, writeFile } = require("fs"); // fs = file system
const { promisify } = require("util");

const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);
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
  async escreverArquivo(dados) {
    await writeFileAsync(this.NOME_ARQUIVO, JSON.stringify(dados));
    return true;
  }
  async cadastrar(heroi) {
    const dados = await this.obterDadosArquivo();
    const id = heroi.id <= 2 ? heroi.id : Date.now();
    const heroiComId = {
      id,
      ...heroi
    };
    const dadosFinal = [...dados, heroiComId];
    const resultado = await this.escreverArquivo(dadosFinal);
    return resultado;
  }

  async listar(id) {
    const dados = await this.obterDadosArquivo();
    try {
      const dadosFiltrados = dados.filter(item => {
        if (!id) return true; // retorna todos os items se o id for falso
        if (item.id === id) return true; // retorna apenas o item com id igual
        // ou id ? item.id === id : true
      });
      return dadosFiltrados;
    } catch (err) {
      console.log(`ops não há dados disponíveis ${err}`);
      return "";
    }
  }

  async remover(id) {
    if (!id) {
      return await this.escreverArquivo([]);
    }
    const dados = await this.obterDadosArquivo();
    const indice = dados.findIndex(item => item.id === parseInt(id));
    if (indice === -1) {
      throw Error("o usuário informado não existe");
      return false;
    }
    dados.splice(indice, 1);
    return await this.escreverArquivo(dados);
  }
  async atualizar(id, modificacoes) {
    const dados = await this.obterDadosArquivo();
    const indice = dados.findIndex(item => item.id === parseInt(id));
    if (indice === -1) {
      throw Error("O herói informado não existe");
    }
    const atual = dados[indice];
    const objetoAtualizar = {
      ...atual,
      ...modificacoes
    };
    dados.splice(indice, 1);
    return await this.escreverArquivo([...dados, objetoAtualizar]);
  }
}

module.exports = new Database();
