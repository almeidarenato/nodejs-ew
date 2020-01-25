const EventEmitter = require("events");
class MeuEmissor extends EventEmitter {}
const meuEmissor = new MeuEmissor();
const nomeEvento = "usuario:click";

// adiciona "observador"
meuEmissor.on(nomeEvento, click => {
  console.log("meu usuario clicou", click);
});

// teste de emissao de eventos
meuEmissor.emit(nomeEvento, "na barra de rolagem");
meuEmissor.emit(nomeEvento, "no botão");

// Teste de execução de eventos
// let count = 0;
// setInterval(() => {
//   count++;
//   meuEmissor.emit(nomeEvento, "na barra de rolagem " + count);
// }, 1000);

// adicionado eventListener no terminal/console

// const stdin = process.openStdin();
// stdin.addListener("data", value => {
//   console.log(`Você digitou ${value.toString().trim()}`);
// });
