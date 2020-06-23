//Importação do express para roteamento
const express = require('express');
//Importação do nunjucks para template engine
const nunjucks = require('nunjucks');

//Colocando funcionalidades do express na constante server
const server = express();

//Server usando arquivos estáticos (css) da pasta public
server.use(express.static('public'));

//setando que o server ira ser um motor de visualização (view engine) do tipo html
server.set('view engine', 'njk');

// === comando "npm start" no terminal para começar o servidor === //

//configurando o nunjucks para a pasta de views, definindo o uso do express e a variavel que o mesmo esta usando
nunjucks.configure('views', {
  express: server
});

//Rota tipo GET para a página articles.html
server.get('/', function (req, res) {
  //Retornando a página index renderizada
  return res.render('courses')
});
//Rota tipo GET para a página index.html
server.get('/sobre', function (req, res) {
  //Retornando a página index renderizada
  return res.render('about')
});

//Caso nenhuma rota seja encontrada
server.use(function(req, res) {
  res.status(404).render("not-found");
});

//Server está ouvindo pedidos na porta 5001
server.listen(5001);