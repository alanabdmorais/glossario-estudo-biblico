// ============================================
// DADOS DO CURSO TEOLOGIA DESCOMPLICADA PARA JOVENS
// LIVRO 6 - CAPÍTULO III - COMO DEUS USOU OS
//           ANJOS NA HISTÓRIA BÍBLICA?
// MODELO V2 - hierarquia, mermaid e perguntas
//             (extraídos dos prints, páginas 47-68)
// Versículos bíblicos -> buscados via API em tempo real
// Contexto histórico  -> contextos-biblicos.js
//             (biblioteca-inativa não usada; ignorada aqui)
// ============================================

window.dadosLicaoV2 = {
  titulo: "\ud83d\udcd6 Capítulo III \u2013 Como Deus Usou os Anjos na História Bíblica?",
  subtitulo: "Teologia Descomplicada para Jovens - Livro 6, Capítulo 3",
  paginas: "47-68",

  mapaConfig: {
    centro: [31.7683, 35.2137],
    zoom: 6
  },

  // ============================================
  // HIERARQUIA DE TÓPICOS
  // ============================================
  hierarquia: [
    {
      label: "1. Como os anjos atuaram no Antigo Testamento?",
      refs: [
            { id: "jz6.12", referencia: "Jz 6:12", tags: "versículo-chave / O anjo do Senhor lhe disse: o Senhor é contigo, homem valente" }
          ],
      filhos: [
        {
          label: "a) Atuaram como mensageiros de Deus",
          refs: [
            { id: "gn16.7-10", referencia: "Gn 16:7-10", tags: "Agar recebeu direção no deserto" },
            { id: "dn9.21-23", referencia: "Dn 9:21-23", tags: "Daniel recebeu revelações proféticas" },
            { id: "zc1.9", referencia: "Zc 1:9", tags: "Zacarias orientado por meio de visões angelicais" }
          ]
        },
        {
          label: "b) Atuaram como protetores do povo de Deus",
          refs: [
            { id: "dn6.22a", referencia: "Dn 6:22", tags: "Daniel preservado na cova dos leões / anjo fecha a boca dos animais" },
            { id: "2rs6.16-17", referencia: "2 Rs 6:16-17", tags: "servo de Eliseu vê o exército celestial cercando e protegendo o povo de Deus" },
            { id: "gn19.15-16", referencia: "Gn 19:15-16", tags: "Ló retirado de Sodoma pelos anjos antes do juízo divino" }
          ]
        },
        {
          label: "c) Atuaram como executores de juízo",
          refs: [
            { id: "gn19.13a", referencia: "Gn 19:13", tags: "anjos enviados para destruir Sodoma por causa de sua maldade" },
            { id: "2sm24.16a", referencia: "2 Sm 24:16", tags: "um anjo trouxe juízo sobre Israel no tempo de Davi" },
            { id: "2rs19.35a", referencia: "2 Rs 19:35", tags: "um anjo feriu o exército assírio nos dias de Ezequias" }
          ]
        },
        {
          label: "d) Atuaram como guias em momentos decisivos",
          refs: [
            { id: "gn19.13b", referencia: "Gn 19:13", tags: "anjos guiam / executam juízo em Sodoma (repetido no texto original)" },
            { id: "2sm24.16b", referencia: "2 Sm 24:16", tags: "juízo sobre Israel / anjo como guia em momento decisivo (repetido)" },
            { id: "2rs19.35b", referencia: "2 Rs 19:35", tags: "livramento do povo de Deus / anjo fere exército assírio (repetido)" }
          ]
        },
        {
          label: "e) Atuaram como instrumentos de encorajamento em tempos de crise espiritual",
          refs: [
            { id: "1rs19.5-7", referencia: "1 Rs 19:5-7", tags: "Elias sustentado no deserto por um anjo que o alimentou e renovou suas forças" },
            { id: "dn10.18-19", referencia: "Dn 10:18-19", tags: "Daniel foi tocado e fortalecido após receber visões intensas" },
            { id: "gn31.11-13", referencia: "Gn 31:11-13", tags: "Jacó encorajado por meio de revelação em sua jornada" }
          ]
        },
        {
          label: "Toque de Sabedoria — os anjos do AT mostravam que Deus sempre esteve perto do Seu povo",
          refs: []
        },
        {
          label: "Você sabia? — o 'Anjo do Senhor' e a associação a Cristo pré-encarnado",
          refs: [
            { id: "ex3.2-6", referencia: "Êx 3:2-6", tags: "o 'Anjo do Senhor' fala como Deus e recebe tratamento divino / associado a Cristo pré-encarnado" }
          ]
        },
        {
          label: "História Ilustrativa — Sentinelas Invisíveis (Tábata)",
          refs: []
        },
        {
          label: "Tarefa Simples para o Coração — ler Gênesis 28:12 e escrever uma oração",
          refs: [
            { id: "gn28.12", referencia: "Gn 28:12", tags: "tarefa simples para o coração / escrever oração agradecendo a presença constante de Deus" }
          ]
        }
      ]
    },
    {
      label: "2. Qual foi o papel dos anjos na missão de Jesus?",
      refs: [
            { id: "lc2.13-14a", referencia: "Lc 2:13-14", tags: "versículo-chave / multidão do exército celestial louvando a Deus no nascimento de Cristo" }
          ],
      filhos: [
        {
          label: "a) No anúncio do nascimento",
          refs: [
            { id: "lc1.26-28", referencia: "Lc 1:26-28", tags: "o anjo Gabriel anuncia a Maria que conceberia pelo Espírito Santo" },
            { id: "mt1.20-21", referencia: "Mt 1:20-21", tags: "anjo traz orientação a José em sonho" },
            { id: "lc2.9-14", referencia: "Lc 2:9-14", tags: "anjos proclamam aos pastores que o Salvador havia nascido" }
          ]
        },
        {
          label: "b) Os anjos protegeram Jesus em momentos de perigo",
          refs: [
            { id: "mt2.13-14", referencia: "Mt 2:13-14", tags: "anjo avisa José para fugir para o Egito, livrando Jesus da ameaça de Herodes" },
            { id: "mt2.19-20", referencia: "Mt 2:19-20", tags: "anjo orienta o retorno de José e Jesus à terra de Israel" }
          ]
        },
        {
          label: "c) Os anjos serviram e fortaleceram Jesus em sua missão",
          refs: [
            { id: "mt4.11", referencia: "Mt 4:11", tags: "Jesus foi servido por anjos após ser tentado no deserto" },
            { id: "lc22.43", referencia: "Lc 22:43", tags: "um anjo fortaleceu Jesus no Getsêmani em momento de angústia" }
          ]
        },
        {
          label: "d) Os anjos proclamaram a vitória na ressurreição e ascensão",
          refs: [
            { id: "mt28.5-6", referencia: "Mt 28:5-6", tags: "anjos anunciam às mulheres no túmulo: 'Ele não está aqui, porque ressuscitou'" },
            { id: "lc24.4-7", referencia: "Lc 24:4-7", tags: "anjos declaram a ressurreição de Jesus às mulheres no túmulo" },
            { id: "jo20.12", referencia: "Jo 20:12", tags: "anjos vistos no túmulo vazio de Jesus" },
            { id: "at1.9-11", referencia: "At 1:9-11", tags: "anjos trazem mensagem aos discípulos na ascensão de Jesus" },
            { id: "lc24.51", referencia: "Lc 24:51", tags: "Jesus é elevado aos céus enquanto os discípulos contemplam" },
            { id: "jo14.3", referencia: "Jo 14:3", tags: "promessa de Jesus de que voltará, confirmada pelos anjos na ascensão" }
          ]
        },
        {
          label: "Toque de Sabedoria — os anjos acompanharam a missão; Cristo realizou a redenção",
          refs: []
        },
        {
          label: "Você sabia? — o cântico dos anjos como o primeiro 'hino cristão'",
          refs: [
            { id: "lc2.14b", referencia: "Lc 2:14", tags: "o cântico dos anjos é considerado por muitos estudiosos o primeiro 'hino cristão' do Novo Testamento" }
          ]
        },
        {
          label: "História Ilustrativa — O Campo Iluminado (Tália)",
          refs: []
        },
        {
          label: "Tarefa Simples para o Coração — compartilhar um versículo da história de Jesus",
          refs: []
        }
      ]
    },
    {
      label: "3. Como os anjos serviram na igreja primitiva?",
      refs: [
            { id: "at12.7a", referencia: "At 12:7", tags: "versículo-chave / anjo do Senhor toca Pedro e o liberta da prisão" }
          ],
      filhos: [
        {
          label: "a) Os anjos serviram como cooperadores na expansão do evangelho",
          refs: [
            { id: "at8.26", referencia: "At 8:26", tags: "um anjo orientou Filipe a ir ao deserto encontrar o eunuco" },
            { id: "at10.3-5", referencia: "At 10:3-5", tags: "um anjo apareceu a Cornélio, preparando-o para ouvir a mensagem de Pedro" }
          ]
        },
        {
          label: "b) Os anjos serviram executando juízo quando necessário",
          refs: [
            { id: "at12.21-23", referencia: "At 12:21-23", tags: "por causa de sua arrogância, um anjo do Senhor feriu Herodes, e ele morreu" },
            { id: "is42.8", referencia: "Is 42:8", tags: "Deus não divide sua glória com ninguém" },
            { id: "gl6.7", referencia: "Gl 6:7", tags: "o que o homem semear, isso também colherá" }
          ]
        },
        {
          label: "c) Os anjos serviram participando de livramentos extraordinários",
          refs: [
            { id: "at12.7-11a", referencia: "At 12:7-11", tags: "um anjo entrou na prisão, quebrou as correntes e conduziu Pedro para fora da cela" },
            { id: "sl91.11", referencia: "Sl 91:11", tags: "Deus ordena anjos para guardar seus servos" },
            { id: "is43.13", referencia: "Is 43:13", tags: "nenhuma prisão ou perseguição impede os planos de Deus" }
          ]
        },
        {
          label: "d) Os anjos serviram mostrando que o Reino de Deus avança apesar da oposição",
          refs: [
            { id: "at5.39", referencia: "At 5:39", tags: "nenhum império é maior do que o Reino de Deus" },
            { id: "at12.24", referencia: "At 12:24", tags: "a Palavra de Deus avançava apesar da oposição" },
            { id: "dn4.35", referencia: "Dn 4:35", tags: "soberania de Deus sobre todas as coisas" }
          ]
        },
        {
          label: "Toque de Sabedoria — os anjos são mensageiros; Cristo é a mensagem central",
          refs: []
        },
        {
          label: "Você sabia? — anjo do Senhor durante a tempestade na viagem de Paulo",
          refs: [
            { id: "at27.23-24", referencia: "At 27:23-24", tags: "um anjo do Senhor aparece a Paulo durante tempestade no mar: 'Não temas, Paulo'" }
          ]
        },
        {
          label: "História Ilustrativa — A Noite Difícil (Emanuel)",
          refs: [
            { id: "at12.7-10b", referencia: "At 12:7-10", tags: "Deus enviou um anjo para libertar Pedro / referência lembrada por Emanuel em sua crise" }
          ]
        },
        {
          label: "Tarefa Simples para o Coração — escrever sobre perseguição ou dificuldade enfrentada pela fé",
          refs: []
        }
      ]
    },
    {
      label: "4. Os anjos estarão presentes nos eventos do fim dos tempos?",
      refs: [
            { id: "mt24.31a", referencia: "Mt 24:31", tags: "versículo-chave / Ele enviará os anjos com grande som de trombeta para reunir os eleitos" }
          ],
      filhos: [
        {
          label: "a) Os anjos participarão da volta de Cristo",
          refs: [
            { id: "mt25.31", referencia: "Mt 25:31", tags: "o Filho do Homem virá em sua glória, acompanhado de todos os anjos" },
            { id: "2ts1.7", referencia: "2 Ts 1:7", tags: "revelação do Senhor Jesus do céu com os anjos do seu poder" },
            { id: "mc8.38", referencia: "Mc 8:38", tags: "o Filho do Homem virá na glória do Pai com os santos anjos" }
          ]
        },
        {
          label: "b) Os anjos reunirão os salvos nos últimos dias",
          refs: [
            { id: "mt24.31b", referencia: "Mt 24:31", tags: "os anjos reunirão os escolhidos de Deus dos quatro ventos" },
            { id: "mt13.41a", referencia: "Mt 13:41", tags: "o Filho do Homem enviará os seus anjos para ajuntar os salvos" },
            { id: "mc13.27", referencia: "Mc 13:27", tags: "os anjos ajuntarão os eleitos dos quatro ventos" }
          ]
        },
        {
          label: "c) Os anjos executarão juízos divinos",
          refs: [
            { id: "ap8.6", referencia: "Ap 8:6", tags: "os sete anjos se prepararam para tocar as trombetas do juízo" },
            { id: "ap16.1", referencia: "Ap 16:1", tags: "os anjos derramam as taças da ira de Deus" },
            { id: "mt13.49-50", referencia: "Mt 13:49-50", tags: "os anjos separarão os maus dentre os justos no fim do mundo" }
          ]
        },
        {
          label: "d) Os anjos separarão justos e ímpios",
          refs: [
            { id: "mt13.41-42", referencia: "Mt 13:41-42", tags: "os anjos ajuntarão tudo o que causa escândalo e os lançarão na fornalha" },
            { id: "mt13.49b", referencia: "Mt 13:49", tags: "assim será no fim do mundo: virão os anjos e separarão os maus dentre os justos" },
            { id: "mt25.32", referencia: "Mt 25:32", tags: "todas as nações serão ajuntadas diante d'Ele, que separará uns dos outros" }
          ]
        },
        {
          label: "Exemplo Didático — um rei que retorna vitorioso acompanhado de seus soldados e servos",
          refs: []
        },
        {
          label: "Toque de Sabedoria — no fim dos tempos, os anjos servirão, mas Cristo reinará",
          refs: []
        },
        {
          label: "Você sabia? — a palavra 'trombeta' aparece mais de 60 vezes na Bíblia",
          refs: []
        },
        {
          label: "História Ilustrativa — O Som Inesperado (Pedro Ricardo)",
          refs: [
            { id: "mt24.31c", referencia: "Mt 24:31", tags: "história ilustrativa / o som inesperado / Pedro Ricardo lê sobre a trombeta de Deus" }
          ]
        },
        {
          label: "Tarefa Simples para o Coração — pensar na volta de Jesus e orar por um coração preparado",
          refs: []
        }
      ]
    }
  ],

  // ============================================
  // LISTA DE APARIÇÃO
  // ============================================
  listaAparicao: [
    { numero: 1, referencia: "", tags: "capítulo III / capa / Como Deus usou os anjos na história bíblica", pagina: 47, id: "" },
    { numero: 2, referencia: "Jz 6:12", tags: "versículo-chave / O anjo do Senhor lhe disse: o Senhor é contigo, homem valente", pagina: 48, id: "jz6.12" },
    { numero: 3, referencia: "Gn 16:7-10", tags: "Agar recebeu direção no deserto", pagina: 48, id: "gn16.7-10" },
    { numero: 4, referencia: "Dn 9:21-23", tags: "Daniel recebeu revelações proféticas", pagina: 48, id: "dn9.21-23" },
    { numero: 5, referencia: "Zc 1:9", tags: "Zacarias orientado por meio de visões angelicais", pagina: 48, id: "zc1.9" },
    { numero: 6, referencia: "Dn 6:22", tags: "Daniel preservado na cova dos leões / anjo fecha a boca dos animais", pagina: 49, id: "dn6.22a" },
    { numero: 7, referencia: "2 Rs 6:16-17", tags: "servo de Eliseu vê o exército celestial cercando e protegendo o povo de Deus", pagina: 49, id: "2rs6.16-17" },
    { numero: 8, referencia: "Gn 19:15-16", tags: "Ló retirado de Sodoma pelos anjos antes do juízo divino", pagina: 49, id: "gn19.15-16" },
    { numero: 9, referencia: "Gn 19:13", tags: "anjos enviados para destruir Sodoma por causa de sua maldade", pagina: 49, id: "gn19.13a" },
    { numero: 10, referencia: "2 Sm 24:16", tags: "um anjo trouxe juízo sobre Israel no tempo de Davi", pagina: 49, id: "2sm24.16a" },
    { numero: 11, referencia: "2 Rs 19:35", tags: "um anjo feriu o exército assírio nos dias de Ezequias", pagina: 49, id: "2rs19.35a" },
    { numero: 12, referencia: "Gn 19:13", tags: "anjos guiam / executam juízo em Sodoma (repetido como guias em momentos decisivos)", pagina: 49, id: "gn19.13b" },
    { numero: 13, referencia: "2 Sm 24:16", tags: "juízo sobre Israel / anjo como guia em momento decisivo (repetido)", pagina: 49, id: "2sm24.16b" },
    { numero: 14, referencia: "2 Rs 19:35", tags: "livramento do povo de Deus / anjo fere exército assírio (repetido)", pagina: 49, id: "2rs19.35b" },
    { numero: 15, referencia: "1 Rs 19:5-7", tags: "Elias sustentado no deserto por um anjo que o alimentou e renovou suas forças", pagina: 50, id: "1rs19.5-7" },
    { numero: 16, referencia: "Dn 10:18-19", tags: "Daniel foi tocado e fortalecido após receber visões intensas", pagina: 50, id: "dn10.18-19" },
    { numero: 17, referencia: "Gn 31:11-13", tags: "Jacó encorajado por meio de revelação em sua jornada", pagina: 50, id: "gn31.11-13" },
    { numero: 18, referencia: "Êx 3:2-6", tags: "o 'Anjo do Senhor' fala como Deus e recebe tratamento divino / associado a Cristo pré-encarnado", pagina: 50, id: "ex3.2-6" },
    { numero: 19, referencia: "", tags: "história ilustrativa / sentinelas invisíveis / Tábata", pagina: 51, id: "" },
    { numero: 20, referencia: "", tags: "perguntas rápidas / anjos agem em obediência / focam em glorificar a Deus", pagina: 51, id: "" },
    { numero: 21, referencia: "", tags: "exemplo didático / guia turístico numa viagem difícil", pagina: 51, id: "" },
    { numero: 22, referencia: "", tags: "exemplo atual / jovem perdido numa rodovia socorrido pela polícia rodoviária", pagina: 51, id: "" },
    { numero: 23, referencia: "", tags: "palavra pastoral / Deus continua presente e não abandona quem confia n'Ele", pagina: 52, id: "" },
    { numero: 24, referencia: "", tags: "aplicação prática / marque suas respostas", pagina: 52, id: "" },
    { numero: 25, referencia: "Gn 28:12", tags: "tarefa simples para o coração / escrever oração agradecendo a presença constante de Deus", pagina: 52, id: "gn28.12" },
    { numero: 26, referencia: "", tags: "espaço para resposta", pagina: 52, id: "" },
    { numero: 27, referencia: "Lc 2:13-14", tags: "versículo-chave / multidão do exército celestial louvando a Deus no nascimento de Cristo", pagina: 53, id: "lc2.13-14a" },
    { numero: 28, referencia: "", tags: "ideia central / anjos presentes do nascimento à ressurreição de Jesus", pagina: 53, id: "" },
    { numero: 29, referencia: "", tags: "explicação simples e profunda / presença angelical confirma a grandiosidade da missão de Cristo", pagina: 53, id: "" },
    { numero: 30, referencia: "Lc 1:26-28", tags: "o anjo Gabriel anuncia a Maria que conceberia pelo Espírito Santo", pagina: 54, id: "lc1.26-28" },
    { numero: 31, referencia: "Mt 1:20-21", tags: "anjo traz orientação a José em sonho", pagina: 54, id: "mt1.20-21" },
    { numero: 32, referencia: "Lc 2:9-14", tags: "anjos proclamam aos pastores que o Salvador havia nascido", pagina: 54, id: "lc2.9-14" },
    { numero: 33, referencia: "Mt 2:13-14", tags: "anjo avisa José para fugir para o Egito, livrando Jesus da ameaça de Herodes", pagina: 54, id: "mt2.13-14" },
    { numero: 34, referencia: "Mt 2:19-20", tags: "anjo orienta o retorno de José e Jesus à terra de Israel", pagina: 54, id: "mt2.19-20" },
    { numero: 35, referencia: "Mt 4:11", tags: "Jesus foi servido por anjos após ser tentado no deserto", pagina: 54, id: "mt4.11" },
    { numero: 36, referencia: "Lc 22:43", tags: "um anjo fortaleceu Jesus no Getsêmani em momento de angústia", pagina: 54, id: "lc22.43" },
    { numero: 37, referencia: "Mt 28:5-6", tags: "anjos anunciam às mulheres no túmulo: 'Ele não está aqui, porque ressuscitou'", pagina: 54, id: "mt28.5-6" },
    { numero: 38, referencia: "Lc 24:4-7", tags: "anjos declaram a ressurreição de Jesus às mulheres no túmulo", pagina: 54, id: "lc24.4-7" },
    { numero: 39, referencia: "Jo 20:12", tags: "anjos vistos no túmulo vazio de Jesus", pagina: 54, id: "jo20.12" },
    { numero: 40, referencia: "At 1:9-11", tags: "anjos trazem mensagem aos discípulos na ascensão de Jesus", pagina: 55, id: "at1.9-11" },
    { numero: 41, referencia: "Lc 24:51", tags: "Jesus é elevado aos céus enquanto os discípulos contemplam", pagina: 55, id: "lc24.51" },
    { numero: 42, referencia: "Jo 14:3", tags: "promessa de Jesus de que voltará, confirmada pelos anjos na ascensão", pagina: 55, id: "jo14.3" },
    { numero: 43, referencia: "", tags: "perguntas rápidas / Gabriel e multidão de anjos anunciaram o nascimento / anjos protegeram e serviram Jesus", pagina: 55, id: "" },
    { numero: 44, referencia: "", tags: "exemplo didático / grande empresa anunciando um projeto", pagina: 55, id: "" },
    { numero: 45, referencia: "", tags: "exemplo atual / jovem atleta incentivado antes, durante e depois da competição", pagina: 55, id: "" },
    { numero: 46, referencia: "", tags: "toque de sabedoria / os anjos acompanharam a missão; Cristo realizou a redenção", pagina: 55, id: "" },
    { numero: 47, referencia: "Lc 2:14", tags: "o cântico dos anjos é considerado por muitos estudiosos o primeiro 'hino cristão' do Novo Testamento", pagina: 56, id: "lc2.14b" },
    { numero: 48, referencia: "", tags: "história ilustrativa / o campo iluminado / Tália", pagina: 56, id: "" },
    { numero: 49, referencia: "", tags: "palavra pastoral / anjos presentes no ministério de Jesus, mas todo foco está n'Ele", pagina: 57, id: "" },
    { numero: 50, referencia: "", tags: "aplicação prática / marque suas respostas", pagina: 57, id: "" },
    { numero: 51, referencia: "", tags: "tarefa simples para o coração / compartilhar um versículo da história de Jesus", pagina: 57, id: "" },
    { numero: 52, referencia: "", tags: "espaço para resposta", pagina: 57, id: "" },
    { numero: 53, referencia: "At 12:7", tags: "versículo-chave / anjo do Senhor toca Pedro e o liberta da prisão", pagina: 58, id: "at12.7a" },
    { numero: 54, referencia: "", tags: "ideia central / anjos como mensageiros, protetores e instrumentos de libertação na igreja primitiva", pagina: 58, id: "" },
    { numero: 55, referencia: "", tags: "explicação simples e profunda / Deus soberanamente usava anjos para confirmar seu controle", pagina: 58, id: "" },
    { numero: 56, referencia: "At 8:26", tags: "um anjo orientou Filipe a ir ao deserto encontrar o eunuco", pagina: 58, id: "at8.26" },
    { numero: 57, referencia: "At 10:3-5", tags: "um anjo apareceu a Cornélio, preparando-o para ouvir a mensagem de Pedro", pagina: 58, id: "at10.3-5" },
    { numero: 58, referencia: "At 12:21-23", tags: "por causa de sua arrogância, um anjo do Senhor feriu Herodes, e ele morreu", pagina: 59, id: "at12.21-23" },
    { numero: 59, referencia: "Is 42:8", tags: "Deus não divide sua glória com ninguém", pagina: 59, id: "is42.8" },
    { numero: 60, referencia: "Gl 6:7", tags: "o que o homem semear, isso também colherá", pagina: 59, id: "gl6.7" },
    { numero: 61, referencia: "At 12:7-11", tags: "um anjo entrou na prisão, quebrou as correntes e conduziu Pedro para fora da cela", pagina: 59, id: "at12.7-11a" },
    { numero: 62, referencia: "Sl 91:11", tags: "Deus ordena anjos para guardar seus servos", pagina: 59, id: "sl91.11" },
    { numero: 63, referencia: "Is 43:13", tags: "nenhuma prisão ou perseguição impede os planos de Deus", pagina: 59, id: "is43.13" },
    { numero: 64, referencia: "At 5:39", tags: "nenhum império é maior do que o Reino de Deus", pagina: 60, id: "at5.39" },
    { numero: 65, referencia: "At 12:24", tags: "a Palavra de Deus avançava apesar da oposição", pagina: 60, id: "at12.24" },
    { numero: 66, referencia: "Dn 4:35", tags: "soberania de Deus sobre todas as coisas", pagina: 60, id: "dn4.35" },
    { numero: 67, referencia: "", tags: "perguntas rápidas / Deus usa os anjos como instrumentos / juízo sobre Herodes revela justiça de Deus", pagina: 60, id: "" },
    { numero: 68, referencia: "", tags: "exemplo didático / o carteiro que entrega uma mensagem importante", pagina: 60, id: "" },
    { numero: 69, referencia: "", tags: "exemplo atual / jovem cristão ridicularizado na escola por causa da fé", pagina: 60, id: "" },
    { numero: 70, referencia: "", tags: "toque de sabedoria / os anjos são mensageiros; Cristo é a mensagem central", pagina: 61, id: "" },
    { numero: 71, referencia: "At 27:23-24", tags: "um anjo do Senhor aparece a Paulo durante tempestade no mar: 'Não temas, Paulo'", pagina: 61, id: "at27.23-24" },
    { numero: 72, referencia: "", tags: "história ilustrativa / a noite difícil / Emanuel", pagina: 61, id: "" },
    { numero: 73, referencia: "At 12:7-10", tags: "Deus enviou um anjo para libertar Pedro / referência lembrada por Emanuel em sua crise", pagina: 61, id: "at12.7-10b" },
    { numero: 74, referencia: "", tags: "conclusão da história de Emanuel / Deus cuida da mesma forma, mesmo sem um anjo visível", pagina: 62, id: "" },
    { numero: 75, referencia: "", tags: "palavra pastoral / a Bíblia ensina a respeitar a atuação dos anjos, mas a confiar em Deus acima de tudo", pagina: 62, id: "" },
    { numero: 76, referencia: "", tags: "aplicação prática / marque suas respostas", pagina: 62, id: "" },
    { numero: 77, referencia: "", tags: "tarefa simples para o coração / escrever sobre perseguição ou dificuldade enfrentada pela fé", pagina: 63, id: "" },
    { numero: 78, referencia: "", tags: "espaço para resposta", pagina: 63, id: "" },
    { numero: 79, referencia: "Mt 24:31", tags: "versículo-chave / Ele enviará os anjos com grande som de trombeta para reunir os eleitos", pagina: 64, id: "mt24.31a" },
    { numero: 80, referencia: "", tags: "ideia central / anjos terão papel ativo nos eventos do fim dos tempos", pagina: 64, id: "" },
    { numero: 81, referencia: "", tags: "explicação simples e profunda / anjos não decidem o fim, mas executam o plano divino", pagina: 64, id: "" },
    { numero: 82, referencia: "Mt 25:31", tags: "o Filho do Homem virá em sua glória, acompanhado de todos os anjos", pagina: 64, id: "mt25.31" },
    { numero: 83, referencia: "2 Ts 1:7", tags: "revelação do Senhor Jesus do céu com os anjos do seu poder", pagina: 64, id: "2ts1.7" },
    { numero: 84, referencia: "Mc 8:38", tags: "o Filho do Homem virá na glória do Pai com os santos anjos", pagina: 64, id: "mc8.38" },
    { numero: 85, referencia: "Mt 24:31", tags: "os anjos reunirão os escolhidos de Deus dos quatro ventos", pagina: 65, id: "mt24.31b" },
    { numero: 86, referencia: "Mt 13:41", tags: "o Filho do Homem enviará os seus anjos para ajuntar os salvos", pagina: 65, id: "mt13.41a" },
    { numero: 87, referencia: "Mc 13:27", tags: "os anjos ajuntarão os eleitos dos quatro ventos", pagina: 65, id: "mc13.27" },
    { numero: 88, referencia: "Ap 8:6", tags: "os sete anjos se prepararam para tocar as trombetas do juízo", pagina: 65, id: "ap8.6" },
    { numero: 89, referencia: "Ap 16:1", tags: "os anjos derramam as taças da ira de Deus", pagina: 65, id: "ap16.1" },
    { numero: 90, referencia: "Mt 13:49-50", tags: "os anjos separarão os maus dentre os justos no fim do mundo", pagina: 65, id: "mt13.49-50" },
    { numero: 91, referencia: "Mt 13:41-42", tags: "os anjos ajuntarão tudo o que causa escândalo e os lançarão na fornalha", pagina: 65, id: "mt13.41-42" },
    { numero: 92, referencia: "Mt 13:49", tags: "assim será no fim do mundo: virão os anjos e separarão os maus dentre os justos", pagina: 65, id: "mt13.49b" },
    { numero: 93, referencia: "Mt 25:32", tags: "todas as nações serão ajuntadas diante d'Ele, que separará uns dos outros", pagina: 65, id: "mt25.32" },
    { numero: 94, referencia: "", tags: "perguntas rápidas / Cristo dá a ordem final / anjos reúnem, julgam e separam justos dos ímpios", pagina: 65, id: "" },
    { numero: 95, referencia: "", tags: "exemplo didático / um rei que retorna vitorioso acompanhado de seus soldados e servos", pagina: 66, id: "" },
    { numero: 96, referencia: "", tags: "exemplo atual / fiscais organizando uma prova, mas quem define as regras é o professor", pagina: 66, id: "" },
    { numero: 97, referencia: "", tags: "toque de sabedoria / no fim dos tempos, os anjos servirão, mas Cristo reinará", pagina: 66, id: "" },
    { numero: 98, referencia: "", tags: "você sabia? / a palavra 'trombeta' aparece mais de 60 vezes na Bíblia, marcando momentos decisivos", pagina: 66, id: "" },
    { numero: 99, referencia: "Mt 24:31", tags: "história ilustrativa / o som inesperado / Pedro Ricardo lê sobre a trombeta de Deus", pagina: 67, id: "mt24.31c" },
    { numero: 100, referencia: "", tags: "palavra pastoral / não temer os sinais do fim; quem está em Cristo já tem lugar garantido em Sua glória", pagina: 67, id: "" },
    { numero: 101, referencia: "", tags: "aplicação prática / eu já sabia que os anjos participarão dos eventos finais / tenho vivido com esperança", pagina: 67, id: "" },
    { numero: 102, referencia: "", tags: "aplicação prática / o centro do fim dos tempos é a pessoa do Senhor Jesus / minha vida está preparada", pagina: 68, id: "" },
    { numero: 103, referencia: "", tags: "tarefa simples para o coração / pensar na volta de Jesus e orar por um coração preparado", pagina: 68, id: "" },
    { numero: 104, referencia: "", tags: "espaço para resposta", pagina: 68, id: "" }
  ],

  // ============================================
  // LISTA ALFABÉTICA
  // ============================================
  listaAlfabetica: [
    { referencia: "1 Rs 19:5-7", tags: "Elias sustentado no deserto por um anjo que o alimentou e renovou suas forças", pagina: 50, id: "1rs19.5-7" },
    { referencia: "2 Rs 19:35", tags: "um anjo feriu o exército assírio nos dias de Ezequias", pagina: 49, id: "2rs19.35a" },
    { referencia: "2 Rs 19:35", tags: "livramento do povo de Deus / anjo fere exército assírio (repetido)", pagina: 49, id: "2rs19.35b" },
    { referencia: "2 Rs 6:16-17", tags: "servo de Eliseu vê o exército celestial cercando e protegendo o povo de Deus", pagina: 49, id: "2rs6.16-17" },
    { referencia: "2 Sm 24:16", tags: "um anjo trouxe juízo sobre Israel no tempo de Davi", pagina: 49, id: "2sm24.16a" },
    { referencia: "2 Sm 24:16", tags: "juízo sobre Israel / anjo como guia em momento decisivo (repetido)", pagina: 49, id: "2sm24.16b" },
    { referencia: "2 Ts 1:7", tags: "revelação do Senhor Jesus do céu com os anjos do seu poder", pagina: 64, id: "2ts1.7" },
    { referencia: "Ap 16:1", tags: "os anjos derramam as taças da ira de Deus", pagina: 65, id: "ap16.1" },
    { referencia: "Ap 8:6", tags: "os sete anjos se prepararam para tocar as trombetas do juízo", pagina: 65, id: "ap8.6" },
    { referencia: "At 10:3-5", tags: "um anjo apareceu a Cornélio, preparando-o para ouvir a mensagem de Pedro", pagina: 58, id: "at10.3-5" },
    { referencia: "At 12:21-23", tags: "por causa de sua arrogância, um anjo do Senhor feriu Herodes, e ele morreu", pagina: 59, id: "at12.21-23" },
    { referencia: "At 12:24", tags: "a Palavra de Deus avançava apesar da oposição", pagina: 60, id: "at12.24" },
    { referencia: "At 12:7", tags: "versículo-chave / anjo do Senhor toca Pedro e o liberta da prisão", pagina: 58, id: "at12.7a" },
    { referencia: "At 12:7-10", tags: "Deus enviou um anjo para libertar Pedro / referência lembrada por Emanuel em sua crise", pagina: 61, id: "at12.7-10b" },
    { referencia: "At 12:7-11", tags: "um anjo entrou na prisão, quebrou as correntes e conduziu Pedro para fora da cela", pagina: 59, id: "at12.7-11a" },
    { referencia: "At 1:9-11", tags: "anjos trazem mensagem aos discípulos na ascensão de Jesus", pagina: 55, id: "at1.9-11" },
    { referencia: "At 27:23-24", tags: "um anjo do Senhor aparece a Paulo durante tempestade no mar: 'Não temas, Paulo'", pagina: 61, id: "at27.23-24" },
    { referencia: "At 5:39", tags: "nenhum império é maior do que o Reino de Deus", pagina: 60, id: "at5.39" },
    { referencia: "At 8:26", tags: "um anjo orientou Filipe a ir ao deserto encontrar o eunuco", pagina: 58, id: "at8.26" },
    { referencia: "Dn 10:18-19", tags: "Daniel foi tocado e fortalecido após receber visões intensas", pagina: 50, id: "dn10.18-19" },
    { referencia: "Dn 4:35", tags: "soberania de Deus sobre todas as coisas", pagina: 60, id: "dn4.35" },
    { referencia: "Dn 6:22", tags: "Daniel preservado na cova dos leões / anjo fecha a boca dos animais", pagina: 49, id: "dn6.22a" },
    { referencia: "Dn 9:21-23", tags: "Daniel recebeu revelações proféticas", pagina: 48, id: "dn9.21-23" },
    { referencia: "Êx 3:2-6", tags: "o 'Anjo do Senhor' fala como Deus e recebe tratamento divino / associado a Cristo pré-encarnado", pagina: 50, id: "ex3.2-6" },
    { referencia: "Gl 6:7", tags: "o que o homem semear, isso também colherá", pagina: 59, id: "gl6.7" },
    { referencia: "Gn 16:7-10", tags: "Agar recebeu direção no deserto", pagina: 48, id: "gn16.7-10" },
    { referencia: "Gn 19:13", tags: "anjos enviados para destruir Sodoma por causa de sua maldade", pagina: 49, id: "gn19.13a" },
    { referencia: "Gn 19:13", tags: "anjos guiam / executam juízo em Sodoma (repetido como guias em momentos decisivos)", pagina: 49, id: "gn19.13b" },
    { referencia: "Gn 19:15-16", tags: "Ló retirado de Sodoma pelos anjos antes do juízo divino", pagina: 49, id: "gn19.15-16" },
    { referencia: "Gn 28:12", tags: "tarefa simples para o coração / escrever oração agradecendo a presença constante de Deus", pagina: 52, id: "gn28.12" },
    { referencia: "Gn 31:11-13", tags: "Jacó encorajado por meio de revelação em sua jornada", pagina: 50, id: "gn31.11-13" },
    { referencia: "Is 42:8", tags: "Deus não divide sua glória com ninguém", pagina: 59, id: "is42.8" },
    { referencia: "Is 43:13", tags: "nenhuma prisão ou perseguição impede os planos de Deus", pagina: 59, id: "is43.13" },
    { referencia: "Jo 14:3", tags: "promessa de Jesus de que voltará, confirmada pelos anjos na ascensão", pagina: 55, id: "jo14.3" },
    { referencia: "Jo 20:12", tags: "anjos vistos no túmulo vazio de Jesus", pagina: 54, id: "jo20.12" },
    { referencia: "Jz 6:12", tags: "versículo-chave / O anjo do Senhor lhe disse: o Senhor é contigo, homem valente", pagina: 48, id: "jz6.12" },
    { referencia: "Lc 1:26-28", tags: "o anjo Gabriel anuncia a Maria que conceberia pelo Espírito Santo", pagina: 54, id: "lc1.26-28" },
    { referencia: "Lc 22:43", tags: "um anjo fortaleceu Jesus no Getsêmani em momento de angústia", pagina: 54, id: "lc22.43" },
    { referencia: "Lc 24:4-7", tags: "anjos declaram a ressurreição de Jesus às mulheres no túmulo", pagina: 54, id: "lc24.4-7" },
    { referencia: "Lc 24:51", tags: "Jesus é elevado aos céus enquanto os discípulos contemplam", pagina: 55, id: "lc24.51" },
    { referencia: "Lc 2:13-14", tags: "versículo-chave / multidão do exército celestial louvando a Deus no nascimento de Cristo", pagina: 53, id: "lc2.13-14a" },
    { referencia: "Lc 2:14", tags: "o cântico dos anjos é considerado por muitos estudiosos o primeiro 'hino cristão' do Novo Testamento", pagina: 56, id: "lc2.14b" },
    { referencia: "Lc 2:9-14", tags: "anjos proclamam aos pastores que o Salvador havia nascido", pagina: 54, id: "lc2.9-14" },
    { referencia: "Mc 13:27", tags: "os anjos ajuntarão os eleitos dos quatro ventos", pagina: 65, id: "mc13.27" },
    { referencia: "Mc 8:38", tags: "o Filho do Homem virá na glória do Pai com os santos anjos", pagina: 64, id: "mc8.38" },
    { referencia: "Mt 13:41", tags: "o Filho do Homem enviará os seus anjos para ajuntar os salvos", pagina: 65, id: "mt13.41a" },
    { referencia: "Mt 13:41-42", tags: "os anjos ajuntarão tudo o que causa escândalo e os lançarão na fornalha", pagina: 65, id: "mt13.41-42" },
    { referencia: "Mt 13:49", tags: "assim será no fim do mundo: virão os anjos e separarão os maus dentre os justos", pagina: 65, id: "mt13.49b" },
    { referencia: "Mt 13:49-50", tags: "os anjos separarão os maus dentre os justos no fim do mundo", pagina: 65, id: "mt13.49-50" },
    { referencia: "Mt 1:20-21", tags: "anjo traz orientação a José em sonho", pagina: 54, id: "mt1.20-21" },
    { referencia: "Mt 24:31", tags: "versículo-chave / Ele enviará os anjos com grande som de trombeta para reunir os eleitos", pagina: 64, id: "mt24.31a" },
    { referencia: "Mt 24:31", tags: "os anjos reunirão os escolhidos de Deus dos quatro ventos", pagina: 65, id: "mt24.31b" },
    { referencia: "Mt 24:31", tags: "história ilustrativa / o som inesperado / Pedro Ricardo lê sobre a trombeta de Deus", pagina: 67, id: "mt24.31c" },
    { referencia: "Mt 25:31", tags: "o Filho do Homem virá em sua glória, acompanhado de todos os anjos", pagina: 64, id: "mt25.31" },
    { referencia: "Mt 25:32", tags: "todas as nações serão ajuntadas diante d'Ele, que separará uns dos outros", pagina: 65, id: "mt25.32" },
    { referencia: "Mt 28:5-6", tags: "anjos anunciam às mulheres no túmulo: 'Ele não está aqui, porque ressuscitou'", pagina: 54, id: "mt28.5-6" },
    { referencia: "Mt 2:13-14", tags: "anjo avisa José para fugir para o Egito, livrando Jesus da ameaça de Herodes", pagina: 54, id: "mt2.13-14" },
    { referencia: "Mt 2:19-20", tags: "anjo orienta o retorno de José e Jesus à terra de Israel", pagina: 54, id: "mt2.19-20" },
    { referencia: "Mt 4:11", tags: "Jesus foi servido por anjos após ser tentado no deserto", pagina: 54, id: "mt4.11" },
    { referencia: "Sl 91:11", tags: "Deus ordena anjos para guardar seus servos", pagina: 59, id: "sl91.11" },
    { referencia: "Zc 1:9", tags: "Zacarias orientado por meio de visões angelicais", pagina: 48, id: "zc1.9" }
  ]
};
