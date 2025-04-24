
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    let tentativas = 0;
    const maxTentativas = 10;
    const valorNegativo = (valor) => valor <0;

function Adivinhar() {
    while (tentativas < maxTentativas) {
        const chute = parseInt(document.getElementById("chute").value);
        tentativas++;
        if (valorNegativo(chute)) {
            document.getElementById("resultado").textContent = "Valor inválido! O número deve ser maior que 0 e menor que 100.";
            return;
        }
        else if (chute === numeroAleatorio) {
            document.getElementById("resultado").textContent = "Parabéns! Você acertou o número em " + tentativas + " tentativas!";
        }
        else if (chute < numeroAleatorio){
            document.getElementById("dica").textContent = "O número é maior! Você ainda tem " + (maxTentativas - tentativas) + " tentativas.";
        }
        else {
            document.getElementById("dica").textContent = "O número é menor! Você ainda tem " + (maxTentativas - tentativas) + " tentativas.";
        }
        if (tentativas === maxTentativas){
            document.getElementById("resultado").textContent = "Você perdeu! O número era " + numeroAleatorio + ".";
            document.getElementById("dica").textContent = "";
            document.getElementById("tentativas").textContent = "Sem tentativas restantes.";
        }
        break;
    }
}
function Reiniciar() {
    tentativas = 0;
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    document.getElementById("resultado").textContent = "Tente adivinhar o número entre 1 e 100!";
    document.getElementById("dica").textContent = "";
    document.getElementById("tentativas").textContent = "Tentativas restantes: " + maxTentativas;
    document.getElementById("chute").value = "";
}