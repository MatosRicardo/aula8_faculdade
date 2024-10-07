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
            secoes[i].style.display = 'block';
        } else {
            secoes[i].style.display = 'none';
        }
    }
}

var novosLinks = ['Serviços', 'Blog', 'Ajuda'] // Arrays com itens do menu
var indiceLink = 0;

function adicionarItemNav(){
    let nav = document.querySelector('nav ul');
    if(indiceLink < novosLinks.length){
        // Criar um novo elemento li
        let novoItem = document.createElement('li')
        let link = document.createElement('a')
        link.href = '#'
        link.textContent = novosLinks[indiceLink]
        novoItem.appendChild(link);
        nav.appendChild(novoItem)
        indiceLink++;
    } else {
        alert('Todos os itens já foram inseridos!')
    }
}

function alterarImagem() {
    let imagem = document.querySelector('img');
    // Array de imagem
    let imagens = ['images/img.jpg', 'images/img2.jpg'];
    // Quebrando a URL da imagem para obter somente o nome
    let imagemAtual = imagem.src.split('/').pop();
    let indiceAtual = imagens.findIndex(src => src.includes(imagemAtual));
    let proximoIndice = (indiceAtual + 1) % imagens.length;
    // Troca
    imagem.src = imagens[proximoIndice];
}

function alterarTexto(){
    let titulo = document.querySelector('article.caixa h2');
    if(titulo.textContent === 'QUEM SOMOS NÓS?'){
        titulo.textContent = 'ALTEREI AQUI!'
    } else {
        titulo.textContent = 'QUEM SOMOS NÓS?'
    }
}

function alterarTexto2(){
    let titulo = document.querySelector('article.caixa h2');
    titulo.textContent = 'ALTEREI PARA SEMPRE'
}