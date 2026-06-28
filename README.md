# 09-JS-D.O.M - Hunter x Hunter - Acerte o Personagem

## Nome: Gustavo Henrique Oliveira Pestana

## Tema do Jogo

O tema do jogo se baseia no anime Hunter x Hunter, utilizando os personagens principais da obra para fazer a composição da gameplay do jogo.

## Mecânica escolhida

O jogo se baseia na mecânica do Acerte a Toupeira, onde os alvos aparecem em buracos aleatórios por pouco tempo e deve-se clicar neles antes que sumam. No entanto, eu decidi adaptar essa mecânica para a temática de Hunter x Hunter, um anime que eu gosto bastante. No lugar da toupeira será utilizado os personagens principais do anime.

## Briefing do cliente (público-alvo escolhido)

O jogo se destina a vários tipos de jogadores, como foco em partidas rápidas, ranking e clima competitivo.

## Regras do Jogo

- O jogador deve clicar sobre os personagens antes que eles desapareçam
- O jogo possui o tempo de 30 segundos.
- Cada personagem vale 1 ponto, exceto pelo Hisoka (Personagem com a bomba):
- Gon: + 1 ponto
- Killua: + 1 ponto
- Kurapika: + 1 ponto
- Leorio: + 1 ponto
- Hisoka: Ao ser clicado o jogador perde 1 ponto de vida

## Como Jogar

Antes de iniciar a partida, o jogador precisa informar um nome. Após isso, será permitido clicar em jogar e iniciar a partida. O jogador deve clicar sobre os personagens que aparecer e obter a maior pontuação antes que o tempo acabe. É preciso cuidado com o Hisoka, o personagem que possui uma bomba, pois ele faz o jogador perder uma vida ao ser clicado. O jogo termina quando o tempo acaba ou quando todas as vidas são perdidas.

## Como executar

Por ser um jogo que é executado no navegador não é preciso baixar nenhum programa, basta acessar o link abaixo e se divertir

https://catchthehunter.netlify.app/

Agora caso deseje jogar de forma local, realizar modificações ou utilizar o projeto para desenvolvimento, basta fazer um clone do repositório 

## O meu diferencial na implementação do jogo

Para criar o meu diferencial com relação a mecânica de acerte a toupeira, decidi implementar um sistema de vidas, onde o jogador inicia com três vidas.  Decidi implementar também uma armadilha, nesse caso o personagem Hisoka que possui uma bomba, que se caso o jogador clicar, ele perde 1 uma vida. Quando todas as vidas acabam, a partida é encerrada imediatamente.

Essa mecânica foi implementada utilizando uma variável chamada vidas, atualizada sempre que o jogador clica em Hisoka.


## Minhas Decisões

### Tamanho e formato do grid

Foi utilizado um grid 3x3, totalizando 9 posições. Eu considerei essa quantidade aceitável por oferecer uma boa dificuldade sem deixar o jogo confuso para o jogador.

### Quantidade de cores/elementos

Com relação a quantidade de cores foram utilizadas: 
- #1f1f1f para o fundo da página 
- #00ff88 para o título e as bordas das caixas grid
- cor branca #ffffff para o texto normal. 

Também foram utilizadas as seguintes cores: 
- #333 e #444 para respectivamente criar a cor de fundo das caixas grid e o efeito hover das mesmas. 

Ao todo foram utilizadas 5 cores.

Já com relação aos elementos, foram utilizados imagens em png de cinco personagens do anime Hunter x Hunter para o jogo:

- Gon
- Killua
- Kurapika
- Leorio
- Hisoka

E também tem uma imagem adicional que se refere ao ícone da página.

Ao todo foram 6 elementos.

### Fórmula de pontuação

Cada personagem vale 1 ponto, exceto pelo Hisoka (Personagem com a bomba):
- Gon: + 1 ponto
- Killua: + 1 ponto
- Kurapika: + 1 ponto
- Leorio: + 1 ponto
- Hisoka: Ao ser clicado o jogador perde 1 ponto de vida 

Não existe nenhuma punição por errar os demais personagens, somente a pontuação que será menor. Já com relação ao Hisoka que carrega a bomba, ele não gera pontos e faz o jogador perder uma vida, ou seja, caso seja clicado três vezes será fim de jogo.

### Critérios de tempo

A partida dura 30 segundos. Os personagens aparecem em posições aleatórias durante esse período de tempo. Após o término de uma partida, o jogador pode sempre jogar novamente.

### Curva de dificuldade

A dificuldade ocorre pela velocidade de aparecimento dos personagens e pela presença do Hisoka que possui a bomba, que pode encerrar a partida caso o jogador perca todas as vidas ao clicar sobre ele 3 vezes.

### Condição de término

O jogo termina quando:

- O tempo chega a zero; ou
- O jogador perde todas as vidas.

## Reflexão

### Qual foi o bug mais chato e como resolveu?

O bug mais difícil ocorreu durante a implementação dos personagens utilizando objetos. O jogo parou de funcionar porque algumas partes do código ainda tratavam os personagens como texto simples. O problema foi resolvido ajustando o acesso às propriedades nome e imagem. Esse bug aconteceu, porque antes de utilizar as imagens, eu utilizei emojis como exemplo para ver como seria a implementação final, e após o uso das imagens, esse tratamento como texto ainda estava presente.

### Por que escolheu essa fórmula de pontuação?

Eu escolhi uma fórmula simples para facilitar o entendimento do jogador. Como utilizei a mecânica do acerte a toupeira, considerei que cada acerto vale um ponto e o desafio adicional ficaria por conta do personagem Hisoka, que remove vidas.

### Como o briefing do cliente mudou suas decisões?

Para o público-alvo considerei que o jogo deveria ser uma experiência abrangente e pelo fato da mecânica original do acerte a topeira possuir um tom competitivo, entendi que o briefing do cliente seria voltado para esse aspecto de partidas rápidas com foco emm ranking e um clima competitivo. O único aspecto que considerei por decisão própria foi o de inserir o contexto de anime, escolhendo o tema Hunter x Hunter para tornar a experiência mais divertida e criativa.

### Se tivesse mais uma semana, o que mudaria?

Se eu tivesse mais uma semana, eu implementaria efeitos sonoros ao clicar sobre os personagens, especialmente no Hisoka que possui a bomba. Nesse sentido, também criaria algumas animações quando os personagens fossem clicados, e um efeito de explosão quando a bomba fosse selecionada, além de algumas animações para quando fosse perdidos pontos de vida. Outra implementação interessante que eu faria se tivesse mais tempo também, seria adicionar algum sistema de dificuldade, tipo aumentar a velocidade que os personagens aparecem nos niveís de maior dificuldade.

### Aponte uma função sua que ficou boa e explique o que ela faz.

Uma função que eu gostei e acho que ficou boa foi a função salvarRanking(). Ela salva a pontuação dos jogadores no localStorage, como é pedido no bônus da atividade, e atualiza a melhor pontuação de cada jogador e ordena o ranking automaticamente.


## Declaração de uso de IA

Eu declaro que utilizei IA como apoio para esclarecer dúvidas sobre implementação do JavaScript, manipulação do DOM, localStorage, CSS responsivo, entre outros aspectos relacionados à organização do projeto. Eu analisei todo o código, adaptando e compreendendo a maioria dos seus aspectos antes da sua implementação. O uso da IA contribuiu para o aprendizado de conceitos relacionados à utilização do Javascript e como aplicá-la ao desenvolvimento do jogo interativo.


## Créditos

Este projeto foi desenvolvido como atividade acadêmica da disciplina de WEB I sobre o conteúdo de JavaScript D.O.M.

Referências utilizadas e adaptadas para a atividade:

- Material do Notion #07 Javascript - utilizado como base para compreender variáveis, laços de repetição e funções empregadas no jogo.

- Material do Notion #08 Javascript: DOM - utilizado como referência principal para a manipulação dos elementos da página, criação dinâmica da interface.

- Livro online Eloquent Javascript - Consultei os conteúdos 03 sobre funções, 04 sobre estruturas de dados: objetos e arrays e o 14 sobre The Document Object Model. Os conceitos estudados foram adaptados para organizar o código em funções e para representar os personagens através de objetos JavaScript.

- Site Javascript.info - Consultei os conteúdos: Objects: the basics - 4.1 Objetos. Na seção Document consultei 1.2 DOM tree e 1.3 Walking the DOM. Os exemplos auxiliaram na compreensão da navegação e manipulação dos elementos dentro do jogo.

- Site w3schools - Na seção JS Advanced consultei sobre JS Functions, JS objects e JS DOM Navigation. Acabou sendo utilizado para consulta rápida sobre funções, objetos e navegação no DOM durante a implementação do projeto.

- Como mencionado na seção "Declaração de uso de IA", utilizei também inteligência artificial, especificamente o ChatGPT (OpenAI) como ferramenta de apoio para o esclarecimento de dúvidas sobre a criação de funções e objetos em JavaScript, implementação do DOM na atividade, criação do sistema de ranking com localStorage, melhoria da responsividade do projeto e correção de erros durante o desenvolvimento do jogo. Todas as sugestões foram analisadas, adaptadas e compreendidas antes de serem incorporadas ao código final. 


## Licença do projeto

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para mais detalhes.
