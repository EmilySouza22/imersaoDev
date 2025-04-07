//Preciso criar uma lista com os 3 jogadores
personagem = ["","",""]
vilões = ["","",""]

forcaPersonagem = 0
forcaViloes = 0

for(let i=0;i<3; i++){
    escolhaPersonagem = prompt("Digite o nome do seu personagem!" + (i + 1));
    personagem[i] = escolhaPersonagem
}
console.log("A array personagem contém: " + personagem)
//Calcular a força de cada jogador, e depois somar pra saber a força do time

//Calcular a força de cada jogador do time do computador

//Comparar os dois times para saber quem venceu.