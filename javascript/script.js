function validaForm() {
    // Fetching values from all input fields and storing them in variables.
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var fone = document.getElementById("telefone").value;
    
    //Check input Fields Should not be blanks.
    if (nome == '' || email == '' || fone == '' || mensagem == '') {
        alert("Por favor preencha todos os campos.");
    } else {
        alert("blblblbblblblb");
    }   





// function validaFormulario(){

//     if(document.getElementById("nome").value != "" &&
//        document.getElementById("email").value != "" &&
//        document.getElementById("telefone").value != "" ){
  
//       alert("Prontinho! você receberá as novidades por email.")
//     }else{
//       alert("Por favor, preencha os campos nome e email.")
//     }
//   }