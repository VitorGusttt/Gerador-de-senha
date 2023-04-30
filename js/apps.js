//preciso pegar o click do botao
const btnGerarSenha = document.querySelector("#gerarSenha");
const textoSenha = document.querySelector("#textoSenha");
const btnCopy = document.querySelector("#btnCopy");
const rangeValue = document.querySelector("#rangeElementos");
const spanValue = document.querySelector("#spanValue");


//aqui eu mudo os valores do span com base no range
rangeValue.addEventListener("input", () =>{
    spanValue.innerHTML = `${rangeValue.value}`
})


//fazer uma funcao que faz senhas utilizando minusculos maiusculas @# e numeros
let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYS123456789!@#$&*";
function gerarSenha() {
    let senhaGerada ="";

    for (i = 0 ; i < rangeValue.value; i++){
        senhaGerada += charset.charAt(Math.floor(Math.random() * charset.length))
    }
    textoSenha.innerHTML = senhaGerada
};



//funcao que copia para a area de transferencia
function copiar () {
    let copysenha = document.querySelector('#textoSenha')
    navigator.clipboard.writeText(copysenha.innerHTML)
    alert(`copied password: ${copysenha.innerHTML}`)
};

//escuta o click e raliza funcao
btnGerarSenha.addEventListener("click", gerarSenha);

//pega o click e copia
btnCopy.addEventListener("click", copiar)

