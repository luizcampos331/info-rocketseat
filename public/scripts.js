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
    window.location.href = `/cursos/${id}`
  });
}