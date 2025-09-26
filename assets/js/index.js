//criando lista de imagens
let imagens = [
    'assets/img/capa-1.jpg',
    'assets/img/capa2.jpg',
    'assets/img/capa-3.jpg'
]

let indiceAtualListaImagens = 0

function exibirImagens() {
    let imagemcarrosel = document.getElementById('img-carrosel')
    imagemcarrosel.src = imagens[indiceAtualListaImagens]
}
//logica para exibir imagens
//cada 5 segundos

setInterval(function()  {
    exibirImagens()
    indiceAtualListaImagens++

    if(indiceAtualListaImagens > 2){
        indiceAtualListaImagens = 0
    }
}, 5000);

exibirImagens()
indiceAtualListaImagens++