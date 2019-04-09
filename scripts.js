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
console.log(answer);

const play = function () {

};

playButton.onclick = play;