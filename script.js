axios.defaults.headers.common['Authorization'] = 'cIpJeTPomCURrlfO3AZDaq4f';
let mensagens = [];
let nome;


function erroAoCadastrarUsuario(erro){
    console.log(erro);
}

function registrou(resposta){
    console.log(resposta);
}

function registarUsuario(){
    const novoNomecadastrado = {name:nome};
    const promise = axios.post('https://mock-api.driven.com.br/api/v6/uol/' , novoNomecadastrado);
    promise.catch(erroAoCadastrarUsuario);
    promise.then(registrou)
}

//pedir o nome
function cadastrarNome(){
     nome = prompt("Cadastre seu nome: ");

//enquanto o nome for igual vazio vai ficar em loop //nome deferente de vazio [ok]
    while(nome === '' ||Number(nome) >= 0 ){
       nome = prompt("Cadastre seu nome: ");
    }

    registarUsuario()

}
cadastrarNome();
