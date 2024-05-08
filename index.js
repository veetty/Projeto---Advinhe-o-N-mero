let numeroComputador    
let numeroUsuarios = []
let tentativas = 0
let tentativasMaximas = 6

//Criando codigo para botão funcional de "novo jogo"
function novoJogo(){
    window.location.reload()
}

//Criando codigo para computador gerar numero

function init() {
   numeroComputador = Math.floor(Math.random() *100 + 1)
   console.log(numeroComputador)
}

//Criando codigo para usuario digitar o numero e ser armazenado na array

function compararNumeros() {
    const numeroUsuario = Number(document.getElementById('inputBox').value)
    numeroUsuarios.push(' ' + numeroUsuario)
    document.getElementById('guesses').innerHTML = numeroUsuarios

//Criando codigo para comparação e resposta para jogador

    if (tentativas < tentativasMaximas) {

        if (numeroUsuario > numeroComputador) {
            document.getElementById('textOutput').innerHTML = 'Seu numero está acima'
            document.getElementById('inputBox').value = ''
            tentativas++
            document.getElementById('attempts').innerHTML = tentativas
        }
        
        else if(numeroUsuario < numeroComputador) {
            document.getElementById('textOutput').innerHTML = 'Seu numero está abaixo'
            document.getElementById('inputBox').value = ''
            tentativas++
            document.getElementById('attempts').innerHTML = tentativas
        }
        
        else {
            document.getElementById('textOutput').innerHTML = 'Parabéns! Você acertou!'
            tentativas++
            document.getElementById('attempts').innerHTML = tentativas
            document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
        }
    }

    else {
        document.getElementById('textOutput').innerHTML = 'Poxa, você perdeu. O numero era' + ' ' + numeroComputador + '!'
        document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
    }   
}


