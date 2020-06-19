/*
* Criação da variavel modalOverlay
* document.querySelector = seleciona um objeto em especifico do documento
* Objeto selecionado será o .modal-overlay baseado no seletor css
*/
const modalOverlay = document.querySelector('.modal-overlay');
/*
* Criação da variavel cards
* document.querySelectorAll = seleciona todos os objeto especificados do documento
* Objetos selecionados serão os .card baseado no seletor css
*/
const cards = document.querySelectorAll('.card');

for(let card of cards) {
  //addEventListener é um ouvidor de eventos, nesse caso o evento de click
  card.addEventListener("click", function() {
    //Guardo o valor do atributo id de cada card na constante id
    const id = card.getAttribute('id')
    //Adicionando o "active" a lista de classes do modalOverlay
    modalOverlay.classList.add('active');
    //Procure no contexto do modalOverlay o objeto iframe e adicione em seu src o link da rocketseat
    modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${id}`
  });
}
//addEventListener é um ouvidor de eventos, nesse caso o evento de click
document.querySelector('.close-modal').addEventListener("click", function() {
  //Removendo o "active" a lista de classes do modalOverlay
  modalOverlay.classList.remove('active');
  modalOverlay.classList.remove('maximize');
  //Procure no contexto do modalOverlay o objeto iframe e limpa o valor do src
  modalOverlay.querySelector('iframe').src = "";
});

document.querySelector('.maximize-modal').addEventListener("click", function() {
  if(modalOverlay.classList.contains('maximize')){
    modalOverlay.classList.remove('maximize')
  } else {
    modalOverlay.classList.add('maximize');
  }
});