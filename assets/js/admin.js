function validarLogin() {
    const email = document.getElementById('email')
    const password = document.getElementById('password')

    let lista = window.localStorage.getItem('usuarios')

    //fazer o parse da lista
    lista = JSON.parse(lista)

    let logado = false

    //verificar se o usuario esta na lista
    //e se a senha esta certo
    for (let i=0; i < lista.length; i++) {
        // estamos pelos itens da lista
        const usuario = lista[i]
        const emailLista = usuario.email
        const passwordLista = usuario.password


        if (emailLista == email.value){
            if(passwordLista == password.value){
                alert('voce entrou na sua conta')
                logado = true

                window.location.href = '../../pages/home-admin.html'

            } else{
                alert('senha invalida')
                break
            }
            
        }else{
            logado = false
        }
    }

    //mostra a mensagem
    is (logado = false)
        alert('login invalido')
}