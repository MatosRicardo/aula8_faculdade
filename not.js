function alternarTema(){
    let body = document.body;
    //Verifica se o body tem uma classe especifica do cs
    if(body.classList.contains('dark-theme')){
        body.classList.remove('dark-theme'); //remove o tema
        body.classList.add('light-theme'); //Adiciona o tema
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
    }
}

let indiceCor = 0;
        const cores = ['red', 'blue', 'green', 'yellow', 'purple', 'orange']; 
        let temaAtual = 'light'; 

        function mudarCorTitulo() {
            let titulo = document.getElementById('logo');
            titulo.style.color = cores[indiceCor];
            indiceCor++;
            if (indiceCor >= cores.length) {
                indiceCor = 0; // Reinicia o indice de cores
            }
        }

function mostrarEsconderSecoes(){
    let secoes = document.getElementsByClassName('caixa');
    for(var i = 0; i < secoes.length; i++){
        // Estrutura de decisão que vai verificar a visibilidade das seções
        if(secoes[i].style.display === 'none'){
            secoes[i].style.display === 'block'
        }
    }
}