/*
* 'use strict' 
* Reduz erros silenciosos
* Melhora o desempenho
* Fornece mais avisos e menos recursos não seguros
*/
'use strict'

// mudarTema recebe a referência do botão de classe .btn
const mudarTema = document.querySelector('.btn');

// No addEventListeneer o
// Ouvinte é o 'click'
// Manipulador é a função
mudarTema.addEventListener('click', function(){
    // toggle alterna a classe para 'dark-theme' automaticamente
    document.body.classList.toggle('dark-theme');

    // atualizar rótulo do botão
    let className = document.body.className;
    if(className == 'light-theme') {
        this.textContent = "Escuro";
    } else {
        this.textContent = "Claro";
    }

});

