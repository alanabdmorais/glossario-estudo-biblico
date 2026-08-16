// ============================================
// DADOS DA ESCOLA DOMINICAL - 3º TRIMESTRE 2026
// LIÇÃO 2 - FIDELIDADE A DEUS: UMA QUESTÃO DE
//           ESCOLHA
// MODELO V2 — hierarquia, mermaid e perguntas
//             incluídos aqui (extraídos dos prints)
// Versículos bíblicos → buscados via API em tempo real
// Contexto histórico  → referencias-contextos.js (v3)
// ============================================

window.dadosLicaoV4 = {
  titulo: "📖 Lição 2 – Fidelidade a Deus: Uma Questão de Escolha",
  trimestre: "3º Trimestre 2026",
  paginas: "11-17",
  data: "12 jul 2026",

  mapaConfig: {
    centro: [31.9522, 35.2332], // Canaã
    zoom: 7
  },

  // ============================================
  // HIERARQUIA DE TÓPICOS
  // ============================================
  hierarquia: [
    {
      label: "Texto Principal",
      refs: [{ id: "jz2.11", referencia: "Jz 2.11", tags: "fizeram o que parecia mal / serviram aos baalins" }]
    },
    { label: "Resumo da Lição", refs: [] },
    {
      label: "Leitura Semanal",
      refs: [],
      filhos: [
        { label: "Segunda – Deus é fiel",                        refs: [{ id: "dt7.9",    referencia: "Dt 7.9",     tags: "Deus fiel / guarda a aliança" }] },
        { label: "Terça – O Senhor não pode negar a si mesmo",    refs: [{ id: "2tm2.13",  referencia: "2 Tm 2.13",  tags: "fidelidade de Deus / imutabilidade" }] },
        { label: "Quarta – A recompensa da fidelidade",           refs: [{ id: "ap2.10",   referencia: "Ap 2.10",   tags: "fiel até a morte / coroa da vida" }] },
        { label: "Quinta – O Senhor corrige ao que ama",          refs: [{ id: "hb12.6",   referencia: "Hb 12.6",   tags: "disciplina / correção / amor de Deus" }] },
        { label: "Sexta – Deus exige exclusividade",              refs: [{ id: "mt6.24",   referencia: "Mt 6.24",   tags: "não podeis servir a dois senhores" }] },
        { label: "Sábado – O pecado da idolatria",                refs: [{ id: "ex20.3-6", referencia: "Êx 20.3-6", tags: "não terás outros deuses / idolatria" }] }
      ]
    },
    {
      label: "Objetivos",
      refs: [],
      filhos: [
        { label: "CONHECER os êxitos e fracassos de Israel na posse da Terra Prometida", refs: [] },
        { label: "REFLETIR sobre a repreensão de Deus ao seu povo", refs: [] },
        { label: "DESTACAR os perigos da idolatria e do sincretismo religioso", refs: [] }
      ]
    },
    { label: "Interação", refs: [] },
    {
      label: "Orientação Pedagógica",
      refs: [],
      filhos: [
        { label: "Discussão aplicada: quais 'ídolos' (materiais, sociais, relacionamentos) podem estar presentes hoje", refs: [] },
        { label: "O que significa ser fiel a Deus em meio às dificuldades?", refs: [] },
        { label: "Quais lições podemos aprender do povo de Israel para a nossa caminhada cristã?", refs: [] },
        { label: "Como podemos resistir à idolatria em nossos dias?", refs: [] }
      ]
    },
    {
      label: "Texto Bíblico",
      refs: [{ id: "jz2.1-6", referencia: "Jz 2.1-6, 10-13", tags: "Anjo do Senhor / Boquim / choro / nova geração / baalins" }]
    },
    { label: "Introdução", refs: [] },
    {
      label: "I – Entre Êxitos e Fracassos",
      refs: [],
      filhos: [
        {
          label: "1. O começo promissor de Judá",
          refs: [
            { id: "jz1.1",  referencia: "Jz 1.1",  tags: "consulta ao Senhor / quem subirá primeiro" },
            { id: "jz1.2",  referencia: "Jz 1.2",  tags: "tribo de Judá escolhida / promessa da terra" }
          ]
        },
        {
          label: "2. Força divina e união fraterna",
          refs: [
            { id: "jz1.4",    referencia: "Jz 1.4",     tags: "presença de Deus / vitória não é força militar" },
            { id: "rm12.10",  referencia: "Rm 12.10,13", tags: "amor fraternal / companheiros de fé" },
            { id: "gl6.2",    referencia: "Gl 6.2",     tags: "levar as cargas uns dos outros" }
          ],
          filhos: [
            {
              label: "Subsídio 1 — por que os israelitas não puderam expulsar todos os cananeus",
              refs: [{ id: "jz1.21", referencia: "Jz 1.21-36", tags: "cananeus permaneceram / trabalhos forçados / sincretismo" }]
            }
          ]
        },
        {
          label: "3. Conquista parcial e fracassos",
          refs: [
            { id: "jz1.19", referencia: "Jz 1.19", tags: "carros de ferro / vitória incompleta / falta de fé" },
            { id: "sl24.8", referencia: "Sl 24.8",  tags: "o Senhor é forte e poderoso na guerra" },
            { id: "sl46.9", referencia: "Sl 46.9",  tags: "Deus queima os carros no fogo" }
          ]
        }
      ]
    },
    {
      label: "II – O Anjo do Senhor Repreende os Israelitas",
      refs: [],
      filhos: [
        {
          label: "1. Deus fala",
          refs: [
            { id: "jz2.1b", referencia: "Jz 2.1",     tags: "Anjo do Senhor / teofania / questão de vontade, não capacidade" },
            { id: "mt6.24b",referencia: "Mt 6.24",    tags: "Deus exige exclusividade" },
            { id: "tg4.4",  referencia: "Tg 4.4",     tags: "amizade com o mundo é inimizade com Deus" }
          ]
        },
        {
          label: "2. A desobediência do povo",
          refs: [{ id: "jz2.2", referencia: "Jz 2.2", tags: "por que fizestes isso? / aliança com moradores da terra" }]
        },
        {
          label: "3. Choro e remorso",
          refs: [{ id: "jz2.4-5", referencia: "Jz 2.4,5", tags: "choro / sacrifícios / arrependimento sem mudança de atitude" }]
        }
      ]
    },
    {
      label: "III – Vivendo Entre Ídolos",
      refs: [],
      filhos: [
        {
          label: "1. Uma geração rebelde",
          refs: [
            { id: "jz2.5b",  referencia: "Jz 2.5",  tags: "apresentação do cenário geral" },
            { id: "jz2.10",  referencia: "Jz 2.10", tags: "nova geração não conhecia o Senhor / esquecimento das origens" }
          ]
        },
        {
          label: "2. O pecado da idolatria",
          refs: [
            { id: "jz2.12-13", referencia: "Jz 2.12,13", tags: "Baal e Astarote / idolatria cananeia" },
            { id: "2rs1.2",    referencia: "2 Rs 1.2",   tags: "Baal / divindade cultuada" },
            { id: "jz8.33",    referencia: "Jz 8.33",    tags: "baalins / apostasia após a morte de um juiz" },
            { id: "1rs14.24",  referencia: "1 Rs 14.24", tags: "ritos lascivos / prostituição cultual" },
            { id: "2rs23.7",   referencia: "2 Rs 23.7",  tags: "ritos lascivos / prostituição cultual" },
            { id: "jr19.5",    referencia: "Jr 19.5",    tags: "sacrifícios humanos / crianças queimadas como holocaustos a Baal" }
          ]
        },
        {
          label: "3. Contaminação e sincretismo",
          refs: [
            { id: "lv18.24-30", referencia: "Lv 18.24-30", tags: "cananeus extremamente maldosos e corrompidos" },
            { id: "dt18.9-12",  referencia: "Dt 18.9-12",  tags: "práticas abomináveis das nações" },
            { id: "gn15.16",    referencia: "Gn 15.16",    tags: "tempo do juízo divino havia chegado" },
            { id: "jz2.14",     referencia: "Jz 2.14",     tags: "saqueados e subjugados pelos inimigos" },
            { id: "jz2.15",     referencia: "Jz 2.15",     tags: "o próprio Deus contra o seu povo" },
            { id: "jz2.19",     referencia: "Jz 2.19",     tags: "voltavam a se corromper / seguindo outros deuses" }
          ],
          filhos: [
            {
              label: "Subsídio 2 — por que a idolatria era tão atrativa para os israelitas",
              refs: []
            }
          ]
        },
        {
          label: "4. Mantendo a fidelidade hoje",
          refs: [
            { id: "1co10.14", referencia: "1 Co 10.14", tags: "fugi da idolatria" },
            { id: "cl3.5",    referencia: "Cl 3.5",     tags: "cobiça / idolatria" },
            { id: "dt11.16",  referencia: "Dt 11.16",   tags: "guardai-vos / não vos desvieis" },
            { id: "mt6.21",   referencia: "Mt 6.21",    tags: "onde estiver o teu tesouro, aí estará teu coração" }
          ]
        }
      ]
    },
    { label: "Estante do Professor", refs: [] },
    { label: "Conclusão", refs: [] },
    { label: "Anotações", refs: [] }
  ],

  // ============================================
  // LISTA DE APARIÇÃO
  // ============================================
  listaAparicao: [
    { numero: 1,  referencia: "Jz 2.11",     tags: "fizeram o que parecia mal / serviram aos baalins",       pagina: 11, id: "jz2.11" },
    { numero: 2,  referencia: "Dt 7.9",      tags: "Deus fiel / guarda a aliança",                            pagina: 11, id: "dt7.9" },
    { numero: 3,  referencia: "2 Tm 2.13",   tags: "fidelidade de Deus / imutabilidade",                      pagina: 11, id: "2tm2.13" },
    { numero: 4,  referencia: "Ap 2.10",     tags: "fiel até a morte / coroa da vida",                        pagina: 11, id: "ap2.10" },
    { numero: 5,  referencia: "Hb 12.6",     tags: "disciplina / correção / amor de Deus",                    pagina: 11, id: "hb12.6" },
    { numero: 6,  referencia: "Mt 6.24",     tags: "não podeis servir a dois senhores",                       pagina: 11, id: "mt6.24" },
    { numero: 7,  referencia: "Êx 20.3-6",   tags: "não terás outros deuses / idolatria",                     pagina: 11, id: "ex20.3-6" },
    { numero: 8,  referencia: "",            tags: "objetivos da lição",                                       pagina: 12, id: "" },
    { numero: 9,  referencia: "",            tags: "interação / fidelidade como tema central",                pagina: 12, id: "" },
    { numero: 10, referencia: "",            tags: "orientação pedagógica / discussão aplicada sobre ídolos", pagina: 12, id: "" },
    { numero: 11, referencia: "Jz 2.1-6, 10-13", tags: "Anjo do Senhor / Boquim / choro / nova geração",      pagina: 13, id: "jz2.1-6" },
    { numero: 12, referencia: "",            tags: "introdução / assentamento em Canaã após morte de Josué", pagina: 13, id: "" },
    { numero: 13, referencia: "Jz 1.1",      tags: "consulta ao Senhor / quem subirá primeiro",              pagina: 13, id: "jz1.1" },
    { numero: 14, referencia: "Jz 1.2",      tags: "tribo de Judá escolhida / promessa da terra",            pagina: 13, id: "jz1.2" },
    { numero: 15, referencia: "Jz 1.4",      tags: "presença de Deus / vitória não é força militar",          pagina: 13, id: "jz1.4" },
    { numero: 16, referencia: "Rm 12.10,13", tags: "amor fraternal / companheiros de fé",                     pagina: 14, id: "rm12.10" },
    { numero: 17, referencia: "Gl 6.2",      tags: "levar as cargas uns dos outros",                          pagina: 14, id: "gl6.2" },
    { numero: 18, referencia: "Jz 1.21-36",  tags: "cananeus permaneceram / trabalhos forçados / sincretismo", pagina: 14, id: "jz1.21" },
    { numero: 19, referencia: "Jz 1.19",     tags: "carros de ferro / vitória incompleta / falta de fé",      pagina: 14, id: "jz1.19" },
    { numero: 20, referencia: "Sl 24.8",     tags: "o Senhor é forte e poderoso na guerra",                   pagina: 14, id: "sl24.8" },
    { numero: 21, referencia: "Sl 46.9",     tags: "Deus queima os carros no fogo",                           pagina: 14, id: "sl46.9" },
    { numero: 22, referencia: "Jz 2.1",      tags: "Anjo do Senhor / teofania / questão de vontade",          pagina: 14, id: "jz2.1b" },
    { numero: 23, referencia: "Tg 4.4",      tags: "amizade com o mundo é inimizade com Deus",                pagina: 15, id: "tg4.4" },
    { numero: 24, referencia: "Jz 2.2",      tags: "por que fizestes isso? / aliança com moradores da terra", pagina: 15, id: "jz2.2" },
    { numero: 25, referencia: "Jz 2.4,5",    tags: "choro / sacrifícios / arrependimento sem mudança",        pagina: 15, id: "jz2.4-5" },
    { numero: 26, referencia: "Jz 2.5",      tags: "apresentação do cenário geral",                           pagina: 15, id: "jz2.5b" },
    { numero: 27, referencia: "Jz 2.10",     tags: "nova geração não conhecia o Senhor",                      pagina: 15, id: "jz2.10" },
    { numero: 28, referencia: "Jz 2.12,13",  tags: "Baal e Astarote / idolatria cananeia",                    pagina: 16, id: "jz2.12-13" },
    { numero: 29, referencia: "2 Rs 1.2",    tags: "Baal / divindade cultuada",                               pagina: 16, id: "2rs1.2" },
    { numero: 30, referencia: "Jz 8.33",     tags: "baalins / apostasia após a morte de um juiz",             pagina: 16, id: "jz8.33" },
    { numero: 31, referencia: "1 Rs 14.24",  tags: "ritos lascivos / prostituição cultual",                   pagina: 16, id: "1rs14.24" },
    { numero: 32, referencia: "2 Rs 23.7",   tags: "ritos lascivos / prostituição cultual",                   pagina: 16, id: "2rs23.7" },
    { numero: 33, referencia: "Jr 19.5",     tags: "sacrifícios humanos / crianças queimadas a Baal",         pagina: 16, id: "jr19.5" },
    { numero: 34, referencia: "Lv 18.24-30", tags: "cananeus extremamente maldosos e corrompidos",            pagina: 16, id: "lv18.24-30" },
    { numero: 35, referencia: "Dt 18.9-12",  tags: "práticas abomináveis das nações",                         pagina: 16, id: "dt18.9-12" },
    { numero: 36, referencia: "Gn 15.16",    tags: "tempo do juízo divino havia chegado",                     pagina: 16, id: "gn15.16" },
    { numero: 37, referencia: "Jz 2.14",     tags: "saqueados e subjugados pelos inimigos",                   pagina: 16, id: "jz2.14" },
    { numero: 38, referencia: "Jz 2.15",     tags: "o próprio Deus contra o seu povo",                        pagina: 16, id: "jz2.15" },
    { numero: 39, referencia: "Jz 2.19",     tags: "voltavam a se corromper / seguindo outros deuses",        pagina: 16, id: "jz2.19" },
    { numero: 40, referencia: "1 Co 10.14",  tags: "fugi da idolatria",                                       pagina: 16, id: "1co10.14" },
    { numero: 41, referencia: "Cl 3.5",      tags: "cobiça / idolatria",                                      pagina: 16, id: "cl3.5" },
    { numero: 42, referencia: "Dt 11.16",    tags: "guardai-vos / não vos desvieis",                          pagina: 16, id: "dt11.16" },
    { numero: 43, referencia: "Mt 6.21",     tags: "onde estiver o teu tesouro, aí estará teu coração",       pagina: 16, id: "mt6.21" },
    { numero: 44, referencia: "",            tags: "estante do professor / hora da revisão / conclusão",      pagina: 17, id: "" }
  ],

  // ============================================
  // LISTA ALFABÉTICA
  // ============================================
  listaAlfabetica: [
    { referencia: "1 Co 10.14",  tags: "fugi da idolatria",                                       pagina: 16, id: "1co10.14" },
    { referencia: "1 Rs 14.24",  tags: "ritos lascivos / prostituição cultual",                    pagina: 16, id: "1rs14.24" },
    { referencia: "2 Rs 1.2",    tags: "Baal / divindade cultuada",                                pagina: 16, id: "2rs1.2" },
    { referencia: "2 Rs 23.7",   tags: "ritos lascivos / prostituição cultual",                    pagina: 16, id: "2rs23.7" },
    { referencia: "2 Tm 2.13",   tags: "fidelidade de Deus / imutabilidade",                       pagina: 11, id: "2tm2.13" },
    { referencia: "Ap 2.10",     tags: "fiel até a morte / coroa da vida",                         pagina: 11, id: "ap2.10" },
    { referencia: "Cl 3.5",      tags: "cobiça / idolatria",                                       pagina: 16, id: "cl3.5" },
    { referencia: "Dt 11.16",    tags: "guardai-vos / não vos desvieis",                           pagina: 16, id: "dt11.16" },
    { referencia: "Dt 18.9-12",  tags: "práticas abomináveis das nações",                          pagina: 16, id: "dt18.9-12" },
    { referencia: "Dt 7.9",      tags: "Deus fiel / guarda a aliança",                             pagina: 11, id: "dt7.9" },
    { referencia: "Êx 20.3-6",   tags: "não terás outros deuses / idolatria",                      pagina: 11, id: "ex20.3-6" },
    { referencia: "Gl 6.2",      tags: "levar as cargas uns dos outros",                           pagina: 14, id: "gl6.2" },
    { referencia: "Gn 15.16",    tags: "tempo do juízo divino havia chegado",                      pagina: 16, id: "gn15.16" },
    { referencia: "Hb 12.6",     tags: "disciplina / correção / amor de Deus",                     pagina: 11, id: "hb12.6" },
    { referencia: "Jr 19.5",     tags: "sacrifícios humanos / crianças queimadas a Baal",          pagina: 16, id: "jr19.5" },
    { referencia: "Jz 1.1",      tags: "consulta ao Senhor / quem subirá primeiro",                pagina: 13, id: "jz1.1" },
    { referencia: "Jz 1.19",     tags: "carros de ferro / vitória incompleta / falta de fé",       pagina: 14, id: "jz1.19" },
    { referencia: "Jz 1.2",      tags: "tribo de Judá escolhida / promessa da terra",              pagina: 13, id: "jz1.2" },
    { referencia: "Jz 1.21-36",  tags: "cananeus permaneceram / trabalhos forçados / sincretismo", pagina: 14, id: "jz1.21" },
    { referencia: "Jz 1.4",      tags: "presença de Deus / vitória não é força militar",           pagina: 13, id: "jz1.4" },
    { referencia: "Jz 2.1",      tags: "Anjo do Senhor / teofania / questão de vontade",           pagina: 14, id: "jz2.1b" },
    { referencia: "Jz 2.1-6, 10-13", tags: "Anjo do Senhor / Boquim / choro / nova geração",       pagina: 13, id: "jz2.1-6" },
    { referencia: "Jz 2.10",     tags: "nova geração não conhecia o Senhor",                       pagina: 15, id: "jz2.10" },
    { referencia: "Jz 2.11",     tags: "fizeram o que parecia mal / serviram aos baalins",         pagina: 11, id: "jz2.11" },
    { referencia: "Jz 2.12,13",  tags: "Baal e Astarote / idolatria cananeia",                     pagina: 16, id: "jz2.12-13" },
    { referencia: "Jz 2.14",     tags: "saqueados e subjugados pelos inimigos",                    pagina: 16, id: "jz2.14" },
    { referencia: "Jz 2.15",     tags: "o próprio Deus contra o seu povo",                         pagina: 16, id: "jz2.15" },
    { referencia: "Jz 2.19",     tags: "voltavam a se corromper / seguindo outros deuses",         pagina: 16, id: "jz2.19" },
    { referencia: "Jz 2.2",      tags: "por que fizestes isso? / aliança com moradores da terra",  pagina: 15, id: "jz2.2" },
    { referencia: "Jz 2.4,5",    tags: "choro / sacrifícios / arrependimento sem mudança",         pagina: 15, id: "jz2.4-5" },
    { referencia: "Jz 2.5",      tags: "apresentação do cenário geral",                            pagina: 15, id: "jz2.5b" },
    { referencia: "Jz 8.33",     tags: "baalins / apostasia após a morte de um juiz",              pagina: 16, id: "jz8.33" },
    { referencia: "Lv 18.24-30", tags: "cananeus extremamente maldosos e corrompidos",             pagina: 16, id: "lv18.24-30" },
    { referencia: "Mt 6.21",     tags: "onde estiver o teu tesouro, aí estará teu coração",        pagina: 16, id: "mt6.21" },
    { referencia: "Mt 6.24",     tags: "não podeis servir a dois senhores",                        pagina: 11, id: "mt6.24" },
    { referencia: "Rm 12.10,13", tags: "amor fraternal / companheiros de fé",                      pagina: 14, id: "rm12.10" },
    { referencia: "Sl 24.8",     tags: "o Senhor é forte e poderoso na guerra",                    pagina: 14, id: "sl24.8" },
    { referencia: "Sl 46.9",     tags: "Deus queima os carros no fogo",                            pagina: 14, id: "sl46.9" },
    { referencia: "Tg 4.4",      tags: "amizade com o mundo é inimizade com Deus",                 pagina: 15, id: "tg4.4" }
  ]
};
