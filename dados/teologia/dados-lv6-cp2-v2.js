// ============================================
// DADOS DO CURSO TEOLOGIA DESCOMPLICADA PARA JOVENS
// LIVRO 6 – CAPÍTULO II - QUAL É A MISSÃO DOS
//           ANJOS DE DEUS?
// MODELO V2 — hierarquia, mermaid e perguntas
//             (extraídos dos prints, páginas 27-46)
// Versículos bíblicos → buscados via API em tempo real
// Contexto histórico  → contextos-biblicos.js
//             (só editar se explicitamente pedido)
// ============================================

window.dadosLicaoV2 = {
  titulo: "📖 Capítulo II – Qual é a Missão dos Anjos de Deus?",
  subtitulo: "Teologia Descomplicada para Jovens - Livro 6, Capítulo 2",
  paginas: "27-46",

  mapaConfig: {
    centro: [31.0461, 34.8516],
    zoom: 6
  },

  // ============================================
  // HIERARQUIA DE TÓPICOS
  // ============================================
  hierarquia: [
    {
      label: "1. Por que Deus delega tarefas aos anjos?",
      refs: [{ id: "ex23.20", referencia: "Êx 23:20", tags: "versículo-chave / Deus envia um anjo para guardar no caminho" }],
      filhos: [
        {
          label: "a) Para o cumprimento de sua vontade",
          refs: [
            { id: "sl103.20a", referencia: "Sl 103:20", tags: "anjos executam a palavra de Deus" },
            { id: "dn7.10",    referencia: "Dn 7:10",   tags: "milhares de milhares o serviam" },
            { id: "hb1.14a",   referencia: "Hb 1:14",   tags: "anjos são espíritos ministradores" }
          ]
        },
        {
          label: "b) Para envolver suas criaturas em seu plano",
          refs: [
            { id: "hb1.14b",  referencia: "Hb 1:14",  tags: "anjos enviados para servir" },
            { id: "sl103.20b",referencia: "Sl 103:20",tags: "anjos poderosos em força" },
            { id: "1co3.9",   referencia: "1 Co 3:9",  tags: "cooperadores de Deus / servir é oportunidade, não necessidade dEle" }
          ]
        },
        {
          label: "c) Para servir aos que herdarão a salvação",
          refs: [
            { id: "hb1.14c", referencia: "Hb 1:14",  tags: "anjos enviados para servir os que herdarão a salvação" },
            { id: "sl91.11", referencia: "Sl 91:11",  tags: "anjos ordenados para guardar" },
            { id: "mt18.10", referencia: "Mt 18:10",  tags: "anjos dos pequeninos veem a face do Pai" }
          ]
        },
        {
          label: "d) Para revelar sua glória e poder",
          refs: [
            { id: "is6.1-3",    referencia: "Is 6:1-3",   tags: "serafins proclamam a santidade de Deus" },
            { id: "lc2.13-14",  referencia: "Lc 2:13-14", tags: "multidão de anjos louvando no nascimento de Cristo" },
            { id: "ap5.11-12",  referencia: "Ap 5:11-12", tags: "anjos ao redor do trono proclamando glória ao Cordeiro" }
          ]
        },
        {
          label: "Perguntas rápidas — o que o uso dos anjos revela sobre Deus",
          refs: [
            { id: "is6.3a", referencia: "Is 6:3", tags: "anjos existem para glorificar a Deus" },
            { id: "ap5.1",  referencia: "Ap 5:1",  tags: "anjos existem para glorificar a Deus" }
          ]
        },
        {
          label: "Você sabia? — 'Senhor dos Exércitos'",
          refs: [
            { id: "1sm1.3", referencia: "1 Sm 1:3", tags: "Senhor dos Exércitos / exército celestial organizado" },
            { id: "sl24.10",referencia: "Sl 24:10", tags: "Senhor dos Exércitos / Rei da glória" },
            { id: "is6.3b", referencia: "Is 6:3",   tags: "Senhor dos Exércitos / santidade proclamada pelos serafins" }
          ]
        },
        {
          label: "História Ilustrativa — O Projeto do Líder (Esthefany)",
          refs: []
        }
      ]
    },
    {
      label: "2. Os anjos protegem e guardam os cristãos?",
      refs: [{ id: "at12.7", referencia: "At 12:7", tags: "versículo-chave / anjo liberta Pedro da prisão" }],
      filhos: [
        {
          label: "a) A verdadeira proteção está em Deus, não nos anjos",
          refs: [
            { id: "sl20.7",  referencia: "Sl 20:7",  tags: "confiar no nome do Senhor, não em carros e cavalos" },
            { id: "sl121.2", referencia: "Sl 121:2", tags: "o socorro vem do Senhor" },
            { id: "is12.2",  referencia: "Is 12:2",  tags: "Deus é a minha salvação, confiarei e não temerei" }
          ]
        },
        {
          label: "b) A proteção não elimina as provações",
          refs: [
            { id: "dn3.24-25", referencia: "Dn 3:24-25", tags: "os três jovens sustentados dentro da fornalha" },
            { id: "2co12.9",   referencia: "2 Co 12:9",  tags: "a graça basta / o poder se aperfeiçoa na fraqueza" },
            { id: "1pe1.6-7",  referencia: "1 Pe 1:6-7", tags: "provações refinam a fé como o ouro" }
          ]
        },
        {
          label: "c) A proteção de Deus acontece quando há propósito em livrar",
          refs: [
            { id: "at12.7-11a", referencia: "At 12:7-11", tags: "Pedro é livrado da prisão pelo anjo" },
            { id: "dn6.22a",    referencia: "Dn 6:22",    tags: "Daniel livrado da cova dos leões" },
            { id: "rm8.28",     referencia: "Rm 8:28",    tags: "todas as coisas cooperam para o bem" }
          ]
        },
        {
          label: "d) Deus pode usar os anjos em livramentos específicos",
          refs: [
            { id: "at12.7-11b", referencia: "At 12:7-11", tags: "livramento concreto e histórico de Pedro" },
            { id: "dn3.28",     referencia: "Dn 3:28",    tags: "Deus enviou o seu anjo e livrou os servos" },
            { id: "mt4.11",     referencia: "Mt 4:11",    tags: "anjos servem a Jesus após a tentação" }
          ]
        },
        {
          label: "e) A maior proteção é espiritual, não apenas física",
          refs: [
            { id: "mt10.28", referencia: "Mt 10:28", tags: "temer aquele que pode destruir a alma, não apenas o corpo" },
            { id: "jo10.28", referencia: "Jo 10:28",  tags: "vida eterna / ninguém as arrebatará da mão do Pai" },
            { id: "1pe1.5",  referencia: "1 Pe 1:5",  tags: "guardados pelo poder de Deus mediante a fé" }
          ]
        },
        {
          label: "Você sabia? — anjos que livraram, sustentaram e fortaleceram",
          refs: [
            { id: "dn6.22b", referencia: "Dn 6:22",  tags: "anjo livra Daniel na cova dos leões" },
            { id: "1rs19.5", referencia: "1 Rs 19:5", tags: "anjo sustenta Elias com alimento" },
            { id: "lc22.43", referencia: "Lc 22:43",  tags: "anjo fortalece Jesus no Getsêmani" }
          ]
        },
        {
          label: "História Ilustrativa — O Portão da Escola (Isadora)",
          refs: []
        }
      ]
    },
    {
      label: "3. Os anjos anunciam mensagens de Deus hoje?",
      refs: [{ id: "hb1.1-2a", referencia: "Hb 1:1-2", tags: "versículo-chave / Deus falou pelos profetas e agora pelo Filho" }],
      filhos: [
        {
          label: "a) Deus já falou por anjos em momentos especiais",
          refs: [
            { id: "lc1.26-31", referencia: "Lc 1:26-31", tags: "anjo anuncia o nascimento de Jesus a Maria" },
            { id: "mt2.13",    referencia: "Mt 2:13",    tags: "anjo orienta José em sonho" },
            { id: "lc1.11-13", referencia: "Lc 1:11-13", tags: "anjo anuncia o nascimento de João Batista" },
            { id: "lc2.9-11",  referencia: "Lc 2:9-11",  tags: "anjo anuncia o nascimento de Cristo aos pastores" },
            { id: "mt28.5-6",  referencia: "Mt 28:5-6",  tags: "anjo anuncia a ressurreição de Jesus às mulheres" }
          ]
        },
        {
          label: "b) Deus nos fala hoje principalmente por Cristo, pela Palavra e pelo Espírito Santo",
          refs: [
            { id: "hb1.1-2b", referencia: "Hb 1:1-2", tags: "revelação maior e final está em Cristo" },
            { id: "jo16.13",  referencia: "Jo 16:13",  tags: "o Espírito Santo guia a toda a verdade" },
            { id: "2tm3.16",  referencia: "2 Tm 3:16", tags: "toda a Escritura é inspirada por Deus" }
          ]
        },
        {
          label: "c) Deus ainda pode usar anjos, se quiser, mas nada pode contrariar a Bíblia",
          refs: [
            { id: "hb13.8",   referencia: "Hb 13:8",   tags: "Jesus Cristo é o mesmo ontem, hoje e eternamente" },
            { id: "sl115.3",  referencia: "Sl 115:3",  tags: "Deus faz tudo o que lhe apraz" },
            { id: "dn4.35",   referencia: "Dn 4:35",   tags: "soberania de Deus sobre todas as coisas" },
            { id: "gl1.8a",   referencia: "Gl 1:8",    tags: "nem mesmo um anjo pode pregar outro evangelho" },
            { id: "1jo4.1a",  referencia: "1 Jo 4:1",  tags: "provar os espíritos se procedem de Deus" },
            { id: "1ts5.21a", referencia: "1 Ts 5:21", tags: "examinai tudo, retende o bem" }
          ]
        },
        {
          label: "d) Deus nos alerta sobre a importância do discernimento espiritual",
          refs: [
            { id: "2co11.14", referencia: "2 Co 11:14", tags: "Satanás se disfarça de anjo de luz" },
            { id: "1jo4.1b",  referencia: "1 Jo 4:1",   tags: "muitos falsos profetas saíram pelo mundo" },
            { id: "1ts5.21b", referencia: "1 Ts 5:21",  tags: "examinar tudo à luz da Palavra" },
            { id: "pv14.15",  referencia: "Pv 14:15",   tags: "o simples crê em tudo, o prudente considera os seus passos" }
          ]
        },
        {
          label: "Você sabia? — os mórmons e o anjo Moroni",
          refs: [{ id: "gl1.8c", referencia: "Gl 1:8", tags: "toda 'revelação' precisa ser comparada com a Palavra de Deus" }]
        },
        {
          label: "Exemplo Atual — anjo do céu anunciando outro evangelho",
          refs: [{ id: "gl1.8b", referencia: "Gl 1:8", tags: "ainda que um anjo do céu anuncie outro evangelho, seja anátema" }]
        },
        {
          label: "História Ilustrativa — O Texto Que Falou Mais Alto (Noah)",
          refs: [{ id: "2co5.7", referencia: "2 Co 5:7", tags: "vivemos por fé, e não pelo que vemos" }]
        }
      ]
    },
    {
      label: "4. Qual deve ser nossa postura em relação aos anjos hoje?",
      refs: [{ id: "ap22.9a", referencia: "Ap 22:9", tags: "versículo-chave / anjo recusa adoração: 'Adora a Deus'" }],
      filhos: [
        {
          label: "a) A postura correta é não tratar os anjos como mediadores",
          refs: [
            { id: "1tm2.5", referencia: "1 Tm 2:5", tags: "um só mediador entre Deus e os homens: Jesus" },
            { id: "jo14.6", referencia: "Jo 14:6",  tags: "Jesus é o caminho, a verdade e a vida" }
          ]
        },
        {
          label: "b) A postura correta é não adorar os anjos",
          refs: [
            { id: "ap22.8-9", referencia: "Ap 22:8-9", tags: "anjo recusa adoração de João" },
            { id: "mt4.10",   referencia: "Mt 4:10",   tags: "só a Deus adorarás" },
            { id: "ex20.3",   referencia: "Êx 20:3",   tags: "não terás outros deuses diante de mim" }
          ]
        },
        {
          label: "c) A postura correta é não invocar nem consultar os anjos",
          refs: [{ id: "dt18.10-12", referencia: "Dt 18:10-12", tags: "proibição de práticas espirituais antibíblicas" }]
        },
        {
          label: "d) A postura correta é reconhecer a atuação dos anjos sem exageros",
          refs: [
            { id: "cl2.18a", referencia: "Cl 2:18", tags: "advertência contra o culto aos anjos" },
            { id: "hb1.14d", referencia: "Hb 1:14", tags: "anjos são servos, espíritos ministradores" },
            { id: "rm12.3",  referencia: "Rm 12:3", tags: "não pensar de si mais do que convém / equilíbrio espiritual" }
          ]
        },
        {
          label: "Você sabia? — Paulo alerta contra o culto aos anjos",
          refs: [{ id: "cl2.18b", referencia: "Cl 2:18", tags: "práticas espirituais piedosas que desviam o foco de Cristo" }]
        },
        {
          label: "História Ilustrativa — A Chave Certa (Fabrício)",
          refs: []
        },
        {
          label: "Tarefa Simples para o Coração — ler Hb 1:14 sobre o papel dos anjos",
          refs: [{ id: "hb1.14e", referencia: "Hb 1:14", tags: "tarefa: refletir sobre o papel dos anjos como servos" }]
        }
      ]
    }
  ],

  // ============================================
  // LISTA DE APARIÇÃO
  // ============================================
  listaAparicao: [
    { numero: 1,  referencia: "Êx 23:20",   tags: "versículo-chave / Deus envia um anjo para guardar no caminho", pagina: 27, id: "ex23.20" },
    { numero: 2,  referencia: "Sl 103:20",  tags: "anjos executam a palavra de Deus",                              pagina: 27, id: "sl103.20a" },
    { numero: 3,  referencia: "Dn 7:10",    tags: "milhares de milhares o serviam",                                pagina: 27, id: "dn7.10" },
    { numero: 4,  referencia: "Hb 1:14",    tags: "anjos são espíritos ministradores",                             pagina: 27, id: "hb1.14a" },
    { numero: 5,  referencia: "Hb 1:14",    tags: "anjos enviados para servir",                                    pagina: 28, id: "hb1.14b" },
    { numero: 6,  referencia: "Sl 103:20",  tags: "anjos poderosos em força",                                      pagina: 28, id: "sl103.20b" },
    { numero: 7,  referencia: "1 Co 3:9",   tags: "cooperadores de Deus / servir é oportunidade, não necessidade dEle", pagina: 28, id: "1co3.9" },
    { numero: 8,  referencia: "Hb 1:14",    tags: "anjos enviados para servir os que herdarão a salvação",         pagina: 28, id: "hb1.14c" },
    { numero: 9,  referencia: "Sl 91:11",   tags: "anjos ordenados para guardar",                                  pagina: 28, id: "sl91.11" },
    { numero: 10, referencia: "Mt 18:10",   tags: "anjos dos pequeninos veem a face do Pai",                       pagina: 28, id: "mt18.10" },
    { numero: 11, referencia: "Is 6:1-3",   tags: "serafins proclamam a santidade de Deus",                        pagina: 28, id: "is6.1-3" },
    { numero: 12, referencia: "Lc 2:13-14", tags: "multidão de anjos louvando no nascimento de Cristo",            pagina: 28, id: "lc2.13-14" },
    { numero: 13, referencia: "Ap 5:11-12", tags: "anjos ao redor do trono proclamando glória ao Cordeiro",        pagina: 28, id: "ap5.11-12" },
    { numero: 14, referencia: "Is 6:3",     tags: "anjos existem para glorificar a Deus",                          pagina: 28, id: "is6.3a" },
    { numero: 15, referencia: "Ap 5:1",     tags: "anjos existem para glorificar a Deus",                          pagina: 28, id: "ap5.1" },
    { numero: 16, referencia: "1 Sm 1:3",   tags: "Senhor dos Exércitos / exército celestial organizado",          pagina: 28, id: "1sm1.3" },
    { numero: 17, referencia: "Sl 24:10",   tags: "Senhor dos Exércitos / Rei da glória",                          pagina: 28, id: "sl24.10" },
    { numero: 18, referencia: "Is 6:3",     tags: "Senhor dos Exércitos / santidade proclamada pelos serafins",    pagina: 28, id: "is6.3b" },
    { numero: 19, referencia: "",           tags: "história ilustrativa / o projeto do líder / Esthefany",         pagina: 29, id: "" },
    { numero: 20, referencia: "",           tags: "aplicação prática / tarefa para o coração",                     pagina: 31, id: "" },
    { numero: 21, referencia: "At 12:7",    tags: "versículo-chave / anjo liberta Pedro da prisão",                pagina: 32, id: "at12.7" },
    { numero: 22, referencia: "Sl 20:7",    tags: "confiar no nome do Senhor, não em carros e cavalos",            pagina: 32, id: "sl20.7" },
    { numero: 23, referencia: "Sl 121:2",   tags: "o socorro vem do Senhor",                                       pagina: 32, id: "sl121.2" },
    { numero: 24, referencia: "Is 12:2",    tags: "Deus é a minha salvação, confiarei e não temerei",              pagina: 32, id: "is12.2" },
    { numero: 25, referencia: "Dn 3:24-25", tags: "os três jovens sustentados dentro da fornalha",                 pagina: 33, id: "dn3.24-25" },
    { numero: 26, referencia: "2 Co 12:9",  tags: "a graça basta / o poder se aperfeiçoa na fraqueza",             pagina: 33, id: "2co12.9" },
    { numero: 27, referencia: "1 Pe 1:6-7", tags: "provações refinam a fé como o ouro",                            pagina: 33, id: "1pe1.6-7" },
    { numero: 28, referencia: "At 12:7-11", tags: "Pedro é livrado da prisão pelo anjo",                           pagina: 33, id: "at12.7-11a" },
    { numero: 29, referencia: "Dn 6:22",    tags: "Daniel livrado da cova dos leões",                              pagina: 33, id: "dn6.22a" },
    { numero: 30, referencia: "Rm 8:28",    tags: "todas as coisas cooperam para o bem",                           pagina: 33, id: "rm8.28" },
    { numero: 31, referencia: "At 12:7-11", tags: "livramento concreto e histórico de Pedro",                      pagina: 33, id: "at12.7-11b" },
    { numero: 32, referencia: "Dn 3:28",    tags: "Deus enviou o seu anjo e livrou os servos",                     pagina: 33, id: "dn3.28" },
    { numero: 33, referencia: "Mt 4:11",    tags: "anjos servem a Jesus após a tentação",                          pagina: 33, id: "mt4.11" },
    { numero: 34, referencia: "Mt 10:28",   tags: "temer aquele que pode destruir a alma, não apenas o corpo",     pagina: 33, id: "mt10.28" },
    { numero: 35, referencia: "Jo 10:28",   tags: "vida eterna / ninguém as arrebatará da mão do Pai",             pagina: 33, id: "jo10.28" },
    { numero: 36, referencia: "1 Pe 1:5",   tags: "guardados pelo poder de Deus mediante a fé",                    pagina: 33, id: "1pe1.5" },
    { numero: 37, referencia: "",           tags: "perguntas rápidas / confiar no Senhor / nem sempre livra / espiritual", pagina: 34, id: "" },
    { numero: 38, referencia: "Dn 6:22",    tags: "anjo livra Daniel na cova dos leões",                           pagina: 35, id: "dn6.22b" },
    { numero: 39, referencia: "1 Rs 19:5",  tags: "anjo sustenta Elias com alimento",                              pagina: 35, id: "1rs19.5" },
    { numero: 40, referencia: "Lc 22:43",   tags: "anjo fortalece Jesus no Getsêmani",                             pagina: 35, id: "lc22.43" },
    { numero: 41, referencia: "",           tags: "história ilustrativa / o portão da escola / Isadora",           pagina: 35, id: "" },
    { numero: 42, referencia: "Hb 1:1-2",   tags: "versículo-chave / Deus falou pelos profetas e agora pelo Filho",pagina: 36, id: "hb1.1-2a" },
    { numero: 43, referencia: "Lc 1:26-31", tags: "anjo anuncia o nascimento de Jesus a Maria",                    pagina: 37, id: "lc1.26-31" },
    { numero: 44, referencia: "Mt 2:13",    tags: "anjo orienta José em sonho",                                    pagina: 37, id: "mt2.13" },
    { numero: 45, referencia: "Lc 1:11-13", tags: "anjo anuncia o nascimento de João Batista",                     pagina: 37, id: "lc1.11-13" },
    { numero: 46, referencia: "Lc 2:9-11",  tags: "anjo anuncia o nascimento de Cristo aos pastores",              pagina: 38, id: "lc2.9-11" },
    { numero: 47, referencia: "Mt 28:5-6",  tags: "anjo anuncia a ressurreição de Jesus às mulheres",              pagina: 38, id: "mt28.5-6" },
    { numero: 48, referencia: "Hb 1:1-2",   tags: "revelação maior e final está em Cristo",                        pagina: 38, id: "hb1.1-2b" },
    { numero: 49, referencia: "Jo 16:13",   tags: "o Espírito Santo guia a toda a verdade",                        pagina: 38, id: "jo16.13" },
    { numero: 50, referencia: "2 Tm 3:16",  tags: "toda a Escritura é inspirada por Deus",                         pagina: 38, id: "2tm3.16" },
    { numero: 51, referencia: "Hb 13:8",    tags: "Jesus Cristo é o mesmo ontem, hoje e eternamente",              pagina: 38, id: "hb13.8" },
    { numero: 52, referencia: "Sl 115:3",   tags: "Deus faz tudo o que lhe apraz",                                 pagina: 38, id: "sl115.3" },
    { numero: 53, referencia: "Dn 4:35",    tags: "soberania de Deus sobre todas as coisas",                       pagina: 38, id: "dn4.35" },
    { numero: 54, referencia: "Gl 1:8",     tags: "nem mesmo um anjo pode pregar outro evangelho",                 pagina: 38, id: "gl1.8a" },
    { numero: 55, referencia: "1 Jo 4:1",   tags: "provar os espíritos se procedem de Deus",                       pagina: 38, id: "1jo4.1a" },
    { numero: 56, referencia: "1 Ts 5:21",  tags: "examinai tudo, retende o bem",                                  pagina: 38, id: "1ts5.21a" },
    { numero: 57, referencia: "2 Co 11:14", tags: "Satanás se disfarça de anjo de luz",                            pagina: 38, id: "2co11.14" },
    { numero: 58, referencia: "1 Jo 4:1",   tags: "muitos falsos profetas saíram pelo mundo",                      pagina: 38, id: "1jo4.1b" },
    { numero: 59, referencia: "1 Ts 5:21",  tags: "examinar tudo à luz da Palavra",                                pagina: 39, id: "1ts5.21b" },
    { numero: 60, referencia: "Pv 14:15",   tags: "o simples crê em tudo, o prudente considera os seus passos",    pagina: 39, id: "pv14.15" },
    { numero: 61, referencia: "Gl 1:8",     tags: "ainda que um anjo do céu anuncie outro evangelho, seja anátema",pagina: 39, id: "gl1.8b" },
    { numero: 62, referencia: "Gl 1:8",     tags: "toda 'revelação' precisa ser comparada com a Palavra de Deus",  pagina: 40, id: "gl1.8c" },
    { numero: 63, referencia: "2 Co 5:7",   tags: "vivemos por fé, e não pelo que vemos",                          pagina: 40, id: "2co5.7" },
    { numero: 64, referencia: "",           tags: "palavra pastoral / aplicação prática / tarefa para o coração",  pagina: 41, id: "" },
    { numero: 65, referencia: "Ap 22:9",    tags: "versículo-chave / anjo recusa adoração: 'Adora a Deus'",        pagina: 42, id: "ap22.9a" },
    { numero: 66, referencia: "1 Tm 2:5",   tags: "um só mediador entre Deus e os homens: Jesus",                  pagina: 42, id: "1tm2.5" },
    { numero: 67, referencia: "Jo 14:6",    tags: "Jesus é o caminho, a verdade e a vida",                         pagina: 42, id: "jo14.6" },
    { numero: 68, referencia: "Ap 22:8-9",  tags: "anjo recusa adoração de João",                                  pagina: 43, id: "ap22.8-9" },
    { numero: 69, referencia: "Mt 4:10",    tags: "só a Deus adorarás",                                            pagina: 43, id: "mt4.10" },
    { numero: 70, referencia: "Êx 20:3",    tags: "não terás outros deuses diante de mim",                         pagina: 43, id: "ex20.3" },
    { numero: 71, referencia: "Dt 18:10-12",tags: "proibição de práticas espirituais antibíblicas",                pagina: 43, id: "dt18.10-12" },
    { numero: 72, referencia: "Cl 2:18",    tags: "advertência contra o culto aos anjos",                          pagina: 43, id: "cl2.18a" },
    { numero: 73, referencia: "Hb 1:14",    tags: "anjos são servos, espíritos ministradores",                     pagina: 43, id: "hb1.14d" },
    { numero: 74, referencia: "Rm 12:3",    tags: "não pensar de si mais do que convém / equilíbrio espiritual",   pagina: 43, id: "rm12.3" },
    { numero: 75, referencia: "",           tags: "perguntas rápidas / exemplo didático e atual",                  pagina: 44, id: "" },
    { numero: 76, referencia: "Cl 2:18",    tags: "práticas espirituais piedosas que desviam o foco de Cristo",    pagina: 44, id: "cl2.18b" },
    { numero: 77, referencia: "",           tags: "história ilustrativa / a chave certa / Fabrício",               pagina: 45, id: "" },
    { numero: 78, referencia: "Hb 1:14",    tags: "tarefa: refletir sobre o papel dos anjos como servos",         pagina: 46, id: "hb1.14e" }
  ],

  // ============================================
  // LISTA ALFABÉTICA
  // ============================================
  listaAlfabetica: [
    { referencia: "1 Co 3:9",   tags: "cooperadores de Deus / servir é oportunidade, não necessidade dEle", pagina: 28, id: "1co3.9" },
    { referencia: "1 Jo 4:1",   tags: "provar os espíritos se procedem de Deus",                       pagina: 38, id: "1jo4.1a" },
    { referencia: "1 Jo 4:1",   tags: "muitos falsos profetas saíram pelo mundo",                       pagina: 38, id: "1jo4.1b" },
    { referencia: "1 Pe 1:5",   tags: "guardados pelo poder de Deus mediante a fé",                     pagina: 33, id: "1pe1.5" },
    { referencia: "1 Pe 1:6-7", tags: "provações refinam a fé como o ouro",                             pagina: 33, id: "1pe1.6-7" },
    { referencia: "1 Rs 19:5",  tags: "anjo sustenta Elias com alimento",                               pagina: 35, id: "1rs19.5" },
    { referencia: "1 Sm 1:3",   tags: "Senhor dos Exércitos / exército celestial organizado",           pagina: 28, id: "1sm1.3" },
    { referencia: "1 Tm 2:5",   tags: "um só mediador entre Deus e os homens: Jesus",                   pagina: 42, id: "1tm2.5" },
    { referencia: "1 Ts 5:21",  tags: "examinai tudo, retende o bem",                                   pagina: 38, id: "1ts5.21a" },
    { referencia: "1 Ts 5:21",  tags: "examinar tudo à luz da Palavra",                                 pagina: 39, id: "1ts5.21b" },
    { referencia: "2 Co 11:14", tags: "Satanás se disfarça de anjo de luz",                             pagina: 38, id: "2co11.14" },
    { referencia: "2 Co 12:9",  tags: "a graça basta / o poder se aperfeiçoa na fraqueza",              pagina: 33, id: "2co12.9" },
    { referencia: "2 Co 5:7",   tags: "vivemos por fé, e não pelo que vemos",                           pagina: 40, id: "2co5.7" },
    { referencia: "2 Tm 3:16",  tags: "toda a Escritura é inspirada por Deus",                          pagina: 38, id: "2tm3.16" },
    { referencia: "At 12:7",    tags: "versículo-chave / anjo liberta Pedro da prisão",                 pagina: 32, id: "at12.7" },
    { referencia: "At 12:7-11", tags: "Pedro é livrado da prisão pelo anjo",                            pagina: 33, id: "at12.7-11a" },
    { referencia: "At 12:7-11", tags: "livramento concreto e histórico de Pedro",                       pagina: 33, id: "at12.7-11b" },
    { referencia: "Ap 22:8-9",  tags: "anjo recusa adoração de João",                                   pagina: 43, id: "ap22.8-9" },
    { referencia: "Ap 22:9",    tags: "versículo-chave / anjo recusa adoração: 'Adora a Deus'",         pagina: 42, id: "ap22.9a" },
    { referencia: "Ap 5:1",     tags: "anjos existem para glorificar a Deus",                           pagina: 28, id: "ap5.1" },
    { referencia: "Ap 5:11-12", tags: "anjos ao redor do trono proclamando glória ao Cordeiro",         pagina: 28, id: "ap5.11-12" },
    { referencia: "Cl 2:18",    tags: "advertência contra o culto aos anjos",                           pagina: 43, id: "cl2.18a" },
    { referencia: "Cl 2:18",    tags: "práticas espirituais piedosas que desviam o foco de Cristo",     pagina: 44, id: "cl2.18b" },
    { referencia: "Dn 3:24-25", tags: "os três jovens sustentados dentro da fornalha",                  pagina: 33, id: "dn3.24-25" },
    { referencia: "Dn 3:28",    tags: "Deus enviou o seu anjo e livrou os servos",                      pagina: 33, id: "dn3.28" },
    { referencia: "Dn 4:35",    tags: "soberania de Deus sobre todas as coisas",                        pagina: 38, id: "dn4.35" },
    { referencia: "Dn 6:22",    tags: "Daniel livrado da cova dos leões",                               pagina: 33, id: "dn6.22a" },
    { referencia: "Dn 6:22",    tags: "anjo livra Daniel na cova dos leões",                            pagina: 35, id: "dn6.22b" },
    { referencia: "Dn 7:10",    tags: "milhares de milhares o serviam",                                 pagina: 27, id: "dn7.10" },
    { referencia: "Dt 18:10-12",tags: "proibição de práticas espirituais antibíblicas",                 pagina: 43, id: "dt18.10-12" },
    { referencia: "Êx 20:3",    tags: "não terás outros deuses diante de mim",                          pagina: 43, id: "ex20.3" },
    { referencia: "Êx 23:20",   tags: "versículo-chave / Deus envia um anjo para guardar no caminho",   pagina: 27, id: "ex23.20" },
    { referencia: "Gl 1:8",     tags: "nem mesmo um anjo pode pregar outro evangelho",                  pagina: 38, id: "gl1.8a" },
    { referencia: "Gl 1:8",     tags: "ainda que um anjo do céu anuncie outro evangelho, seja anátema", pagina: 39, id: "gl1.8b" },
    { referencia: "Gl 1:8",     tags: "toda 'revelação' precisa ser comparada com a Palavra de Deus",   pagina: 40, id: "gl1.8c" },
    { referencia: "Hb 1:1-2",   tags: "versículo-chave / Deus falou pelos profetas e agora pelo Filho", pagina: 36, id: "hb1.1-2a" },
    { referencia: "Hb 1:1-2",   tags: "revelação maior e final está em Cristo",                         pagina: 38, id: "hb1.1-2b" },
    { referencia: "Hb 1:14",    tags: "anjos são espíritos ministradores",                               pagina: 27, id: "hb1.14a" },
    { referencia: "Hb 1:14",    tags: "anjos enviados para servir",                                     pagina: 28, id: "hb1.14b" },
    { referencia: "Hb 1:14",    tags: "anjos enviados para servir os que herdarão a salvação",           pagina: 28, id: "hb1.14c" },
    { referencia: "Hb 1:14",    tags: "anjos são servos, espíritos ministradores",                      pagina: 43, id: "hb1.14d" },
    { referencia: "Hb 1:14",    tags: "tarefa: refletir sobre o papel dos anjos como servos",           pagina: 46, id: "hb1.14e" },
    { referencia: "Hb 13:8",    tags: "Jesus Cristo é o mesmo ontem, hoje e eternamente",               pagina: 38, id: "hb13.8" },
    { referencia: "Is 12:2",    tags: "Deus é a minha salvação, confiarei e não temerei",               pagina: 32, id: "is12.2" },
    { referencia: "Is 6:1-3",   tags: "serafins proclamam a santidade de Deus",                         pagina: 28, id: "is6.1-3" },
    { referencia: "Is 6:3",     tags: "anjos existem para glorificar a Deus",                           pagina: 28, id: "is6.3a" },
    { referencia: "Is 6:3",     tags: "Senhor dos Exércitos / santidade proclamada pelos serafins",     pagina: 28, id: "is6.3b" },
    { referencia: "Jo 10:28",   tags: "vida eterna / ninguém as arrebatará da mão do Pai",              pagina: 33, id: "jo10.28" },
    { referencia: "Jo 14:6",    tags: "Jesus é o caminho, a verdade e a vida",                          pagina: 42, id: "jo14.6" },
    { referencia: "Jo 16:13",   tags: "o Espírito Santo guia a toda a verdade",                         pagina: 38, id: "jo16.13" },
    { referencia: "Lc 1:11-13", tags: "anjo anuncia o nascimento de João Batista",                      pagina: 37, id: "lc1.11-13" },
    { referencia: "Lc 1:26-31", tags: "anjo anuncia o nascimento de Jesus a Maria",                     pagina: 37, id: "lc1.26-31" },
    { referencia: "Lc 2:13-14", tags: "multidão de anjos louvando no nascimento de Cristo",             pagina: 28, id: "lc2.13-14" },
    { referencia: "Lc 2:9-11",  tags: "anjo anuncia o nascimento de Cristo aos pastores",               pagina: 38, id: "lc2.9-11" },
    { referencia: "Lc 22:43",   tags: "anjo fortalece Jesus no Getsêmani",                              pagina: 35, id: "lc22.43" },
    { referencia: "Mt 10:28",   tags: "temer aquele que pode destruir a alma, não apenas o corpo",      pagina: 33, id: "mt10.28" },
    { referencia: "Mt 18:10",   tags: "anjos dos pequeninos veem a face do Pai",                        pagina: 28, id: "mt18.10" },
    { referencia: "Mt 2:13",    tags: "anjo orienta José em sonho",                                     pagina: 37, id: "mt2.13" },
    { referencia: "Mt 28:5-6",  tags: "anjo anuncia a ressurreição de Jesus às mulheres",               pagina: 38, id: "mt28.5-6" },
    { referencia: "Mt 4:10",    tags: "só a Deus adorarás",                                             pagina: 43, id: "mt4.10" },
    { referencia: "Mt 4:11",    tags: "anjos servem a Jesus após a tentação",                           pagina: 33, id: "mt4.11" },
    { referencia: "Pv 14:15",   tags: "o simples crê em tudo, o prudente considera os seus passos",     pagina: 39, id: "pv14.15" },
    { referencia: "Rm 12:3",    tags: "não pensar de si mais do que convém / equilíbrio espiritual",    pagina: 43, id: "rm12.3" },
    { referencia: "Rm 8:28",    tags: "todas as coisas cooperam para o bem",                            pagina: 33, id: "rm8.28" },
    { referencia: "Sl 103:20",  tags: "anjos executam a palavra de Deus",                               pagina: 27, id: "sl103.20a" },
    { referencia: "Sl 103:20",  tags: "anjos poderosos em força",                                      pagina: 28, id: "sl103.20b" },
    { referencia: "Sl 115:3",   tags: "Deus faz tudo o que lhe apraz",                                  pagina: 38, id: "sl115.3" },
    { referencia: "Sl 121:2",   tags: "o socorro vem do Senhor",                                        pagina: 32, id: "sl121.2" },
    { referencia: "Sl 20:7",    tags: "confiar no nome do Senhor, não em carros e cavalos",             pagina: 32, id: "sl20.7" },
    { referencia: "Sl 24:10",   tags: "Senhor dos Exércitos / Rei da glória",                           pagina: 28, id: "sl24.10" },
    { referencia: "Sl 91:11",   tags: "anjos ordenados para guardar",                                   pagina: 28, id: "sl91.11" }
  ]
};
