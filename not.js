function alterarTema(){
    let body = document.body;
    //Verifica se o body tem uma classe especifica do cs
    if(body.classList.contains('dark-theme')){
        body.classList.remove('dark-theme'); //remove o tema
        body.classList.add('light-theme'); //Adiciona o tema
    } else {
        body.classList.remove('light-theme')
        body.classList.add('dark-theme')
    }
}

function mudarCorTitulo(){
    var titulo = document.getElementById('logo');
    titulo.style.color = core
}