
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    let tentativas = 0;
    const maxTentativas = 10;

function Adivinhar() {
    while (tentativas < maxTentativas) {
        const chute = document.getElementById("chute").value;
        tentativas++;
       if (chute === numeroAleatorio) {
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

    }
}