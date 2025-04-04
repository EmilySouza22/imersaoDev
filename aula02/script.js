function jogar(){
		const idadeJogador = prompt("Quantos anos você tem?");
		let escolhaJogador, escolhaComputador;

		if (idadeJogador < 18) {
			alert("Você não pode jogar!")
			return
		}

		if (idadeJogador >= 18) {
			alert("Você pode jogar!");

		  	if (idadeJogador >= 18) {
				escolhaJogador = prompt("Digite (1)Pedra (2)Papel (3)Tesoura.");
		    escolhaComputador = Math.floor(Math.random() * 3) + 1;

		    if(escolhaJogador < 1 || escolhaJogador > 3){
		        alert("Número inválido")
				return
		    }

		    if (escolhaJogador == escolhaComputador) {
		        alert("Deu empate!");
		        alert("Escolha do Computador: " + escolhaComputador);
		    }

		    if (escolhaJogador == 1) {
		        if (escolhaComputador == 2) {
		          alert("Computador venceu, escolheu papel");
		        }
		        if (escolhaComputador == 3) {
		          alert("Jogador venceu, computador escolheu  tesoura");
		        }
		    }

		    if (escolhaJogador == 2) {
		        if (escolhaComputador == 1) {
		            alert("Jogador venceu, computador escolheu pedra");
		        }
		        if (escolhaComputador == 3) {
		            alert("Computador venceu, escolheu tesoura");
		        }
		    }

		    if (escolhaJogador == 3) {
		        if (escolhaComputador == 2) {
		            alert("Jogador vence, computador escolheu papel");
		        }
		        if (escolhaComputador == 1) {
		            alert("Computador venceu, escolheu pedra");
		        }
		    }
		}
	}
}