let input = document.querySelector('#newsInputEmail');
let button = document.querySelector('.button');
let mensagem = document.querySelector('.mensagem');

button.addEventListener('click', function (event) {
  event.preventDefault();
  let valorDoInput = input.value;

  if (valorDoInput == '') {
   alert("Gratidão!! Reprograma, Accenture, Mell, Jani, Professoras, Monitoras, Juliana...");
  
  } else {
   alert("Parabéns Maravilhosas formandas Front-End da Turma-8-On/2020 - Sucesso!!...");
    input.value = '';
  }
});

























// function validaFormulario(){

//   if(document.getElementById("nome").value != "" &&
//      document.getElementById("email").value != "" &&
//      document.getElementById("telefone").value != "" ){

//     alert("Prontinho! você receberá as novidades por email.")
//   }else{
//     alert("Por favor, preencha os campos nome e email.")
//   }
// }