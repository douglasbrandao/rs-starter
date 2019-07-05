// desafio 1 do módulo 3

/* const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

async function umPorSegundo(){
    await delay();
    console.log('1s');
    await delay();
    console.log('2s');
    await delay();
    console.log('3s');
}

umPorSegundo(); */

// desafio 2 do módulo 3

/* import axios from 'axios';

 async function getUserFromGithub(user){
    try{
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data);
    } catch(erro){
        console.warn(`O usuário não existe!`);
    }
}

getUserFromGithub('douglasbrandao'); */

// desafio 3 do módulo 3

/* import axios from 'axios';

class Github {
    static async getRepositories(repo){
        try{
            const response = await axios.get(`https://api.github.com/repos/${repo}`);
            console.log(response.data);
        } catch(erro){
            console.warn('Repositório não existe');
        }
    }
}

Github.getRepositories('douglasbrandao/minicurso-django');
Github.getRepositories('rocketseat/dslkvmskv'); */

// desafio 4 modulo 4

/* import axios from 'axios';

const buscaUsuario = async usuario => {
    try{
        const response = await axios.get(`https://api.github.com/users/${usuario}`);
        console.log(response);
    } catch(erro){
        console.warn('Usuário não existe');
    }
}

buscaUsuario('douglasbrandao'); */