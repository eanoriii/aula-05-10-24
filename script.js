// seleciona os elementos do DOM que serao manipulador
const botao = document.getElementById("botaoInteragir");
const mensagem = document.getElementById("mensagem");

// adicionar um evento de clique ao botao
botao.addEventListener("click", () => {
    //solicita o nome de usuario
    let nome = prompt("Qual é seu nome?");
    
    //condicao para verificar se o nome foi fornecido
    if (nome){
        //solicita a idade do usuario
        let idade=prompt("qual é a sua idade?");

        //condicao para verificar se a idade é um numero valido
        //isnan = is not a number || = ou
        if (isNaN(idade) || idade <=0){
            mensagem.innerText = "por favor insira um idade valida.";
            mensagem.style.color = "red"; //altera a cor do texto para vermelho
    } else {
        //saida de dados com base na idade fornecida
        if (idade < 18) {
            mensagem.innerText = `ola, ${nome}! você tem apenas ${idade} anos.`;
            mensagem.style.color = "blue"; //altera a cor do texto para azul
        } else {
            mensagem.innerText = `ola, ${nome}! você é maior de idade com ${idade} anos.`;
            mensagem.style.color = "green"; //altera a cor do texto para verde
        }
        console.log(`Nome de usuario: ${nome}`);
        console.log(`Idade do usuario: ${idade}`);
            }

        } else {
            mensagem.innerText = "nome nao fornecido. Por favor ,insira um  nome.";
            mensagem.style.color = "orange";
        }
});