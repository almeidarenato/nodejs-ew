const axios = require("axios");

const baseURL = "https://swapi.co/api/people";

async function getPessoas(nome) {
  const result = await axios.get(`${baseURL}/?search=${nome}&format=json`);
  //console.log(JSON.stringify(result.data));
  return result.data.results.map(pessoa => mapearPessoas(pessoa));
}
function mapearPessoas(item) {
  return {
    nome: item.name,
    altura: item.height
  };
}
module.exports = { getPessoas };
