function jogar(){
    //Preciso criar uma lista com os 3 jogadores
    personagem = ["","",""];
    viloes = ["","",""];

    forcaPersonagem = 0;
    forcaViloes = 0;

    for(let i=0;i<3; i++){
        escolhaPersonagem = prompt("Digite o nome do seu personagem! " + (i + 1));
        personagem[i] = escolhaPersonagem;
        
        //Calcular a força de cada jogador, e depois somar pra saber a força do time
        //forcaPersonagem = forcaPersonagem + Math.floor(Math.random() * 10) + 1; (Opção 1)
        forcaPersonagem += Math.floor(Math.random() * 10) + 1;
    }
    console.log("A array personagem contém: " + personagem);

    for(let i=0; i<3; i++){
        indiceAleatorio = Math.floor(Math.random() * 10);
        viloesPossiveis = ["Darth Vader", "Palpatine", "Darth Maul", "Conde Dookan", "General Grievous", 
        "Asajj Ventress", "Jabba The Hutt", "Grande Inquisidor", "Almirante Thrawn", "Moof Tarkin"]
        viloes[i] = viloesPossiveis[indiceAleatorio]
        
        //Calcular a força de cada jogador do time do computador
        forcaViloes += Math.floor(Math.random() * 10) + 1;
    }
    console.log("Vilões: " + viloes)

    //Comparar os dois times para saber quem venceu.

    if(forcaPersonagem > forcaViloes){
        alert("Seu time é mais forte! Você venceu! Sua força foi " + forcaPersonagem)
    } else {
        if(forcaPersonagem < forcaViloes){
            alert("O time dos vilões é mais forte! A força dos vilões foi " + forcaViloes)
        } else {
            alert("Os dois times tem a mesma força, deu empate!")
        }
    }
}