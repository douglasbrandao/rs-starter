var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

// verifica os itens no localStorage, se não tiver cria um novo Array

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

// renderiza os Todos na tela

function renderTodos(){
    listElement.innerHTML = "";

    for(todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);
        linkElement.setAttribute('href', '#');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);
    }
}

renderTodos();

// função para adicionar novos Todos
function addTodo(){
    var todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = "";
    renderTodos();
    saveToStorage();
}

buttonElement.onclick = addTodo;

// função para deletar Todos

function deleteTodo(pos){
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

// salva no storage

function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}