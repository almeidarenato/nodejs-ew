// Usando apenas callback

function obterUsuario(callback) {
  setTimeout(() => {
    return callback(null, {
      usuario: "Renato",
      dtNascimento: new Date()
    });
  }, 2000);
}
function resolverUsuario(erro, usuario) {
  if (!erro) console.log("meu usuario", usuario);
}
obterUsuario(resolverUsuario);

//usando promise

function obterEndereco() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        rua: "Rua Etc",
        numero: "Numero"
      });
    }, 2000);
  });
}
const endereco = obterEndereco();
endereco.then(resultado => {
  console.log("Meu endereco: ", resultado);
});

//usando async await

function obterTelefone() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        numero: "99991111"
      });
    }, 1000);
  });
}

function obterDDD() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        ddd: "11"
      });
    }, 1000);
  });
}

mostrarTelefone();
async function mostrarTelefone() {
  try {
    //const telefone = await obterTelefone();
    //const ddd = await obterDDD();
    console.time();
    const resultado = await Promise.all([obterTelefone(), obterDDD()]);
    console.log(`Tel: (${resultado[1].ddd}) ${resultado[0].numero}`);
    console.timeEnd(); // 1000 ms para duas promisses de 1000
  } catch (erro) {
    console.error("Erro do telefone", erro);
  }
}
