# NodeJS - Curso Erick Wendel

## 01 - Sincronia de Funções Javascript (01-sincronia)

Treino de uso de sincronia de funções do javascript usando

- Callback
- Promise
- Async / Await

## 02 - Utilização do EventEmitter para captura de eventos e uso (02-events)

Aula para exemplificar emissão de eventos com EventEmitter

## 03 - Listas (03-lists)

3.1 - Uso de funções para percorrer um resultado de uma API.
`for`, `forin`, `forof`

3.2 - Utilizando `Array.forEach` e `Array.map` para percorrer listas e foi criado um map próprio `Array.meuMap` via prototype nosso para entender como o map funciona e como posso modifica-lo

3.3 - Utilizando `Array.filter` para filtrar determinadas informações e também
implementado um `Array.meuFilter` .

3.4 - Utilizado `Array.reduce` para executar uma função de totalização de valores de um array (Reduzindo a um valor final).
Também foi implementado um `Array.meuReduce` para exemplificar melhor como ele funciona

## 04 - Testes automatizados com MochaJS (04-tests)

Utilizamos o `mocha` para realizar testes automatizados com a chamada a api.
Também usamos o `nock` para simular o resultado da api.

## 05 - Usando Node como ferramenta de linha de comando

Foi feita a leitura, busca , escrita ,atualização e exclusão de registros em um arquivo `JSON` com o desenvolvimento orientado a testes pelo `mocha` .
Foi criada uma interface de `CLI` usando o `commander` para utilizar os métodos implementados.
Comandos do Terminal
Para utilizar execute dentro da pasta 05-cli o comand `node index [option]`
Opções disponíveis:
-V, --version Versão
-n, --nome [value] Nome do Herói
-p, --poder [value] Poder do Herói
-c, --cadastrar Cadastrar um Heroi
-i, --id [value] Id do Heroi
-l, --listar Lista os heróis
-r, --remover Remove um heroi pelo id
-a, --atualizar [value] Atualiza um heroi pelo id
-h, --help Lista os comandos disponíveis
