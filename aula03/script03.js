let rodada = 1;
while(rodada <= 3) {
  console.log("rodada " + rodada);
  
  let escolhaJogador = prompt("Nível " + rodada + ", escolha vidro (1), (2) ou (3): ");
  let pisoQuebrado = Math.floor(Math.random()* 3) + 1;
  
  if(escolhaJogador == pisoQuebrado){
    alert("Ops, você pisou no vidro errado! Game Over...")
    rodada = 1000;
  } else {
    alert("Passou! Piso quebrado estava na ponte " + pisoQuebrado)
  }
  rodada = rodada + 1;
}

if(rodada == 4){
  alert("Parabéns, você venceu o jogo!")
}