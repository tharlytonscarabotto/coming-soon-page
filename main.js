let botao = document.querySelector("#botao");
let mensagemErro = document.querySelector(".mensagem_erro");
let imagemErro = document.querySelector(".imagem_erro");
let campoEmail = document.querySelector("#email");
let emailValido = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

botao.addEventListener('click', ()=>{
    if (campoEmail.value.match(emailValido)){
        alert("Thank you for subscribing!")
    }else{
        mensagemErro.style.display = 'block';
        imagemErro.style.display = 'block';
    }
})