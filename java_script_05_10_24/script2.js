document.getElementById("form").addEventListener("submit", function(event) { 
    event.preventDefault(); 
    const nome = document.getElementById("nome").value; 
    if (nome === '') {
        mensagemNome.innerText = "Por favor, insira um  nome.";
        mensagemNome.style.color = "red";
    }

    nome
    const idade = document.getElementById("idade").value;
    if (isNaN(idade) || idade <=0){
        mensagemIdade.innerText = "Por favor, insira uma idade valida.";
        mensagemIdade.style.color = "red";
    } else {
        mensagem.innerText = `ola, ${nome}! a sua idade é ${idade} anos.`;
        mensagem.style.color = "green"; //altera a cor do texto para verde
    }


    console.log(`Nome de usuario: ${nome}`);
    console.log(`Idade do usuario: ${idade}`);
});

//document.getElementById("form").addEventListener("submit", function(event) {
//    event.preventDefault(); 
//
//    const mensagem = document.getElementById("mensagem"); // Certifique-se de ter um elemento para a mensagem
//    mensagem.innerText = ""; // Limpar mensagens anteriores

//    const nome = document.getElementById("nome").value; 
//    if (nome === '') {
//        mensagem.innerText += "Nome não fornecido. Por favor, insira um nome.\n";
//        mensagem.style.color = "red";
//    }

//  const idade = document.getElementById("idade").value;
//    if (isNaN(idade) || idade <= 0) {
//        mensagem.innerText += "Por favor, insira uma idade válida.\n";
//        mensagem.style.color = "red";
//    }
//});



