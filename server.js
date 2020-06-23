//Importação do express para roteamento
const express = require('express');
//Importação do nunjucks para template engine
const nunjucks = require('nunjucks');
//Importando array de data.js
const course = require('./data');

//Colocando funcionalidades do express na constante server
const server = express();

//Server usando arquivos estáticos (css) da pasta public
server.use(express.static('public'));

//setando que o server ira ser um motor de visualização (view engine) do tipo html
server.set('view engine', 'njk');

// === comando "npm start" no terminal para começar o servidor === //

//configurando o nunjucks para a pasta de views
nunjucks.configure('views', {
  //definindo o uso do express e a variavel que o mesmo esta usando
  express: server,
  //permite tags html dentro de variáveis neste arquivo
  autoescape: false,
  noCache: true
});

//Rota tipo GET para a página articles.html
server.get('/', function (req, res) {
  //Retornando a página index renderizada
  return res.render('courses', {items: course})
});

//Rota tipo GET para a página course-description.html atravez do id
server.get("/cursos/:id", function(req, res) {
  //Pega o id da URL
  const id = req.params.id;

  //Salva na variavel data os dados da posição do array em que o id na url seja igual ao id do array
  const data = course.find(function(page) {
      //Se achar id igual retorna true, se não achar nenhum retorna false
      return page.id == id
  });

  //Se data for false ele renderiza a pagina de erro 404
  if(!data) {
    return res.status(404).render("not-found");
  }

  //Se id for true, renderiza a página course-description
  return res.render('course-description', {id, data});
});

//Rota tipo GET para a página index.html
server.get('/sobre', function (req, res) {
  const about = {
    avatar_url: "https://avatars0.githubusercontent.com/u/28929274?s=200&v=4",
    avatar_alt: "Logo Rocketseat",
    name: "Rocketseat",
    description: "Plataforma de educação em tecnologia",
    techs: [
      "HTML",
      "CSS",
      "JavaScript",
      "NodeJS",
      "ReactJS",
      "React Native"
    ],
    socials: [
      {url: "https://github.com/Rocketseat", name: "GitHub"},
      {url: "https://www.facebook.com/rocketseat", name: "Facebook"},
      {url: "https://www.instagram.com/rocketseat_oficial/", name: "Instagram"}
    ]
  }

  //Retornando a página index renderizada
  return res.render('about', {about})
});

//Caso nenhuma rota seja encontrada
server.use(function(req, res) {
  res.status(404).render("not-found");
});

//Server está ouvindo pedidos na porta 5001
server.listen(5001);