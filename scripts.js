/* 
1 - Gerar um número aleatório entre 0 e 50;
2 - Pedir para o usuário chutar um número;
3 - Avaliar a resposta do usuário;
    3.1 - Se for igual ao número gerado, ele ganha;
    3.2 - Se for maior que o número gerado, ele deve ser informado que seu palpite tem que ser menor;
    3.3 - Se for menor que número gerado, ele deve ser informado que seu palpite tem que ser maior;
    3.4 - Cada erro desconta uma vida do usuário. Ele tem 10 vidas para ganhar o jogo;

PS.: As saídas e entradas tem que ser feitas no HTML
*/

const guessField = document.querySelector('input');
const playButton = document.querySelector('button');
const outputParagraph = document.querySelector('.output');

const answer = getRandom(0, 50);
let life = 10;
console.log(answer);

const tryNumber = function (value) {
    let output = Number(value);

    if (!value || isNaN(output)) {
        alert('O campo aceita somente números!');
    }
    else {
        return output;
    }
};

const play = function () {
    let guess = tryNumber(guessField.value);
    
    if (guess === answer) {
        outputParagraph.innerHTML = 'Parabéns, você ganhou!';
        playButton.onclick = null;
    }
    else {
        life--;

        if(guess > answer) {
            outputParagraph.innerHTML = `Você chutou um valor muito alto. Tente um valor mais baixo! Você ainda tem ${life} vidas.`;
        }
        else {
            outputParagraph.innerHTML = `Você chutou um valor muito baixo. Tente um valor mais alto! Você ainda tem ${life} vidas.`;
        }

        if (life === 0) {
            outputParagraph.innerHTML = `Suas vidas acabaram! Game over :(`;
            playButton.onclick = null;
        }
    }

    guessField.value = '';
};

playButton.onclick = play;