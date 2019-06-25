var inputElement = document.querySelector('input');
var ulElement = document.querySelector('ul');
var container = document.querySelector('#repos');

// desafio 1

function pegarGit(){
    var login_git = inputElement.value;

    loading();

    if(login_git){
        axios.get('https://api.github.com/users/' + login_git + '/repos')
            .then(function(response){
                renderRepos(response.data); // passa dois argumentos pro renderPos (dados e o tamanho dos dados)
            })
            .catch(function(){
                error();
            });
    } else{
        return;
    }
    

    inputElement.value = "";
}

// função para renderizar os repositórios na tela

function renderRepos(datas){

    // cada renderização ele limpa a tela

    container.innerHTML = "";
    ulElement.innerHTML = "";

    // loop para verificar todos os repositórios do usuário

    for(data of datas){
        var liElement = document.createElement('li');
        var textElement = document.createTextNode(data.html_url);
        liElement.appendChild(textElement);
        ulElement.appendChild(liElement);
    }

    container.appendChild(ulElement);
}

// desafio 2 e 3

// função texto para carregamento

function loading(){
    container.innerHTML = "";
    var txtLoading = document.createTextNode('Carregando...');
    container.appendChild(txtLoading);
}

// função para caso não encontre nenhum github

function error(){
    container.innerHTML = "";

    var messageNf = document.createTextNode('Não existe nenhum Github compatível com o digitado!');
    container.appendChild(messageNf);
}