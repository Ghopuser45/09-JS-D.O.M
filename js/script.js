/* Eu escolhi guardar os personagens em objetos para separar o nome da imagem.
Isso acabou facilitando criar regras especiais, como no caso da minha implementação, onde deveria
identificar quando o personagem é o Hisoka, o mesmo que tira os pontos de vida do jogador.
*/
const personagens = [
    {
        nome: "gon",
        imagem: "images/gon.png"
    },
    {
        nome: "killua",
        imagem: "images/killua.png"
    },
    {
        nome: "kurapika",
        imagem: "images/kurapika.png"
    },
    {
        nome: "leorio",
        imagem: "images/leorio.png"
    },
    {
        nome: "hisoka",
        imagem: "images/hisoka.png"
    }
];

let pontuacao = 0;
let tempo = 30;
let jogador = "";

let vidas = 3;
let vidasTexto;

let personagemAtual = "";

let rankingDiv;

let placarTexto;
let tempoTexto;
let tabuleiro;
let casas = [];

let intervaloTempo;
let intervaloPersonagem;
let indiceAtual = -1;

criarInterface();

function criarInterface(){

    /* Como foi pedido na atividade, eu criei os elementos pelo DOM ao invés de
    montar a interface usando innerHTML.
    */
    const app = document.getElementById("app");

    const titulo = document.createElement("h1");
    titulo.textContent = "Hunter x Hunter - Acerte o Personagem";
    app.appendChild(titulo);

    const campoNome = document.createElement("input");
    campoNome.type = "text";
    campoNome.placeholder = "Digite seu nome";
    campoNome.id = "nomeJogador";
    app.appendChild(campoNome);

    app.appendChild(document.createElement("br"));
    app.appendChild(document.createElement("br"));

    const botaoJogar = document.createElement("button");
    botaoJogar.textContent = "Jogar";
    botaoJogar.addEventListener("click", iniciarJogo);
    app.appendChild(botaoJogar);

    const info = document.createElement("div");
    info.id = "info";

    placarTexto = document.createElement("p");
    placarTexto.textContent = "Pontuação: 0";

    tempoTexto = document.createElement("p");
    tempoTexto.textContent = "Tempo: 30";

    vidasTexto = document.createElement("p");
    vidasTexto.textContent = "❤️❤️❤️";

    info.appendChild(placarTexto);
    info.appendChild(tempoTexto);
    info.appendChild(vidasTexto);

    app.appendChild(info);

    tabuleiro = document.createElement("div");
    tabuleiro.id = "tabuleiro";

    for(let i = 0; i < 9; i++){
         /* Como eu comentei no readme, na seção "Minhas decisões" eu escolhi um grid 3x3, que totaliza 
         9 posições no meu elemento tabuleiro porque oferece uma dificuldade equilibrada
        // sem deixar o jogo confuso para o jogador.
        */

        const casa = document.createElement("div");
        casa.classList.add("casa");

        casa.addEventListener("click", function(){

            if(i !== indiceAtual){
                return;
            }

            /* O meu diferencial com relação a mecânica original do acerte a toupeira 
            foi criar uma mecânica especial para um dos personagens do jogo, o Hisoka, onde em vez de dar pontos,
            ele remove uma vida do jogador, funcionando como uma armadilha dentro do jogo.
            */
            if(personagemAtual.nome === "hisoka"){

                vidas--;

                vidasTexto.textContent =
                    "❤️".repeat(vidas);

                limparCasas();

                if(vidas <= 0){
                    encerrarJogo();
                }

                return;
            }

            /* Aqui eu defini que quando o jogador acerta um personagem válido, 
            a operação de incremento "pontuacao++"" vai incrementar uma contagem após a outra.
            */
            pontuacao++;

            /* A propriedade textcontent que eu utilizo aqui vai ser a responsável por 
            atualizar o texto do placar na tela para que o jogador veja a nova pontuação imediatamente.
            */
            placarTexto.textContent =
                "Pontuação: " + pontuacao;

            // Aqui a função limparCasas que eu criei vai limpar o personagem atual para preparar a próxima rodada.
            limparCasas();
});

        casas.push(casa);
        tabuleiro.appendChild(casa);
    }

    app.appendChild(tabuleiro);

    rankingDiv = document.createElement("div");

    app.appendChild(rankingDiv);

    atualizarRanking();

}

function iniciarJogo(){

    const campoNome = document.getElementById("nomeJogador");

    jogador = campoNome.value.trim();

    if(jogador === ""){
        alert("Digite seu nome!");
        return;
    }

    pontuacao = 0;
    tempo = 30;
    vidas = 3;

    placarTexto.textContent = "Pontuação: 0";
    tempoTexto.textContent = "Tempo: 30";
    vidasTexto.textContent = "❤️❤️❤️";

    limparCasas();

    clearInterval(intervaloTempo);
    clearInterval(intervaloPersonagem);

    intervaloPersonagem = setInterval(
        mostrarPersonagem,
        1200
    );

    intervaloTempo = setInterval(function(){

        tempo--;

        tempoTexto.textContent =
            "Tempo: " + tempo;

        if(tempo <= 0){
            encerrarJogo();
        }

    },1000);
}

function mostrarPersonagem(){

    /* Aqui a função limparCasas que eu criei vai limpar o tabuleiro antes de exibir o próximo personagem
    para garantir que apenas um apareça por vez.
    */
    limparCasas();

    indiceAtual =
        Math.floor(Math.random() * 9);

        /* Aqui na variável indiceAtual, utilizo um sorteio aleatório para escolher tanto a posição
        quanto o personagem exibido na rodada atual.
        */

    const personagem =
        personagens[
            Math.floor(
                Math.random() *
                personagens.length
            )
        ];

    personagemAtual = personagem;

     const img = document.createElement("img");

    img.src = personagem.imagem;
    img.alt = personagem.nome;

    img.style.width = "100px";
    img.style.height = "100px";
    img.style.objectFit = "contain";

    casas[indiceAtual].appendChild(img);
}

function limparCasas(){

    /* Aqui na função limparCasas preferi remover os elementos filhos diretamente com o removeChild
    para limpar as imagens exibidas sem ter que recriar o tabuleiro novamente.
    */
    for(let i = 0; i < casas.length; i++){

        while(casas[i].firstChild){
            casas[i].removeChild(casas[i].firstChild);
        }

    }

    indiceAtual = -1;
}

function encerrarJogo(){

    clearInterval(intervaloTempo);
    clearInterval(intervaloPersonagem);

    limparCasas();

    const resposta = confirm(
        "Fim de jogo!\n\n" +
        "Jogador: " + jogador + "\n" +
        "Pontuação: " + pontuacao +
        "\n\nDeseja jogar novamente?"
    );

    if(resposta){
        iniciarJogo();
    }

    salvarRanking(jogador, pontuacao);
    atualizarRanking();

}

function salvarRanking(nome, pontos){

    /* Aqui na função salvarRanking utilizei localStorage como pedido nos bônus da atividade
     para manter o ranking salvo.
    */
    let ranking =
        JSON.parse(localStorage.getItem("ranking")) || [];

    const jogadorExistente =
        ranking.find(item => item.nome === nome);

    if(jogadorExistente){

        /* Nessa condição aqui decidi armazenar apenas a melhor pontuação de cada jogador
         para evitar nomes repetidos no ranking.
        */
        if(pontos > jogadorExistente.pontos){
            jogadorExistente.pontos = pontos;
        }

    }else{

        ranking.push({
            nome: nome,
            pontos: pontos
        });

    }

    ranking.sort((a,b) => b.pontos - a.pontos);

    ranking = ranking.slice(0,5);

    localStorage.setItem(
        "ranking",
        JSON.stringify(ranking)
    );
}

function atualizarRanking(){

    rankingDiv.replaceChildren();

    const titulo =
        document.createElement("h2");

    titulo.textContent =
        "Ranking";

    rankingDiv.appendChild(titulo);

    const ranking =
        JSON.parse(
            localStorage.getItem("ranking")
        ) || [];

    for(let i = 0; i < ranking.length; i++){

        const item =
            document.createElement("p");

        item.textContent =
            (i + 1) + "º - " +
            ranking[i].nome +
            " (" +
            ranking[i].pontos +
            " pontos)";

        rankingDiv.appendChild(item);
    }
}