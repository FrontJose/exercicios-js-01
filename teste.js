// Definimos a função 'tocaSom' que recebe o 'idElementoAudio' como parâmetro.
function tocaSom(seletorAudio) {
    // Usando o 'document.querySelector', selecionamos o elemento de áudio com o ID especificado e o reproduzimos.
    const elemento = document.querySelector(seletorAudio)

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log('Elemento não encontrado ou seletor inválido!')
    }
}

// Selecionamos todos os elementos HTML com a classe CSS "tecla" e armazenamos em uma lista na variável 'listaDeTeclas'.
const listaDeTeclas = document.querySelectorAll('.tecla');

// Iniciamos um loop 'for' para percorrer cada elemento na 'listaDeTeclas'.
for (contador = 0; contador < listaDeTeclas.length; contador++) {
    // Para cada elemento na lista, armazenamos o elemento atual na variável 'tecla'.
    const tecla = listaDeTeclas[contador];

    // Obtemos a segunda classe CSS do elemento 'tecla' e a armazenamos na variável 'instrumento'.
    const instrumento = tecla.classList[1];

    // Criamos uma string 'idAudio' usando uma template string, que é usada para construir o seletor de ID do elemento de áudio relacionado ao instrumento.
    const idAudio = `#som_${instrumento}`;

    // Configuramos um evento de clique ('onclick') para o elemento 'tecla'.
    // Quando a tecla é clicada, a função 'tocaSom' é chamada, reproduzindo o som associado ao instrumento.
    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (event) {
        if(event.code === 'Space' || event.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    
    }

}
