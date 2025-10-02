const password = document.getElementById('password')
const confirmarPassword = document.getElementById('confirmar-password')


function cadastrarUsuario() {    
    const nome = document.getElementById('nome')
    const email = document.getElementById('email')
   


if (password.value == confirmarPassword.value) {
    //cadastra local storage

    //verifica se a lista existe no local storage
    let lista = window.localStorage.getItem('usuarios')

    //não existe a lista
    if (lista == undefined){
        lista = []
        let usuario = {
            'nome': nome.value,
            'email': email.value,
            'password': password.value
        }
        lista.push(usuario)

        window.localStorage.setItem('usuarios', JSON.stringify(lista))
        alert(' Usuario cadastrado')
    } else {
        //adicionar novos usuarios
        //primeiro buscar  a lista
        let listaE = window.localStorage.getItem('usuarios')
        listaE = JSON.parse(listaE)

        let usuarioA = {
            'nome': nome.value,
            'email': email.value,
            'password': password.value
        }
       
        //add na lista
        listaE.pusqh(usuarioA)

        //salvar no local storage
        window.localStorage.setItem('usuarios', JSON.stringify(listaE))
        alert('usuario cadastrado')

        //limpa dados
        nome.value = ''
        email.value = ''
        password.value = ''
        confirmarPassword.value = ''
    }

} else {
    alert('senha não estão iguais, verifique seus dados')
    password.value = ''
    confirmarPassword.value = ''
}
}

function toggleSenha(){
    const exibirSenha = document.getElementById('exibir-senha')

    if (exibirSenha.checked == true) {
        password.type = 'text'
        confirmarPassword.type = 'text'
    } else {
        password.type = 'password'
        confirmarPassword.type = 'password'
    }
}