// ============================================
// DADOS DA ESCOLA DOMINICAL - 3º TRIMESTRE 2026
// LIÇÃO 4 - EÚDE E SANGAR: DEUS USA OS
//           IMPROVÁVEIS
// MODELO V2 — hierarquia, mermaid e perguntas
//             incluídos aqui (extraídos dos prints)
// Versículos bíblicos → buscados via API em tempo real
// Contexto histórico  → referencias-contextos.js (v3)
// ============================================

window.dadosLicaoV3 = {
  titulo: "📖 Lição 4 – Eúde e Sangar: Deus Usa os Improváveis",
  trimestre: "3º Trimestre 2026",
  paginas: "25-31",
  data: "26 jul 2026",

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
      refs: [{ id: "jz3.15a", referencia: "Jz 3.15a", tags: "clamaram ao Senhor / libertador Eúde / homem canhoto" }]
    },
    { label: "Resumo da Lição", refs: [] },
    {
      label: "Leitura Semanal",
      refs: [],
      filhos: [
        { label: "Segunda – Deus escolheu as coisas loucas e vis",        refs: [{ id: "1co1.27-29", referencia: "1 Co 1.27-29", tags: "coisas loucas e vis / Deus escolheu" }] },
        { label: "Terça – A bênção estendida aos gentios",                refs: [{ id: "ef3.6",       referencia: "Ef 3.6",       tags: "bênção estendida aos gentios" }] },
        { label: "Quarta – Jesus humilhou-se a si mesmo",                 refs: [{ id: "fp2.5-8",     referencia: "Fp 2.5-8",     tags: "humilhação de Cristo / exemplo de humildade" }] },
        { label: "Quinta – O valor dos pequenos gestos",                  refs: [{ id: "mt10.42",     referencia: "Mt 10.42",     tags: "valor dos pequenos gestos" }] },
        { label: "Sexta – Seja fiel no pouco",                            refs: [{ id: "lc16.10",     referencia: "Lc 16.10",     tags: "fidelidade no pouco" }] },
        { label: "Sábado – Não despreze as pequenas coisas",              refs: [{ id: "zc4.10",      referencia: "Zc 4.10",      tags: "não desprezar o dia das pequenas coisas" }] }
      ]
    },
    {
      label: "Objetivos",
      refs: [],
      filhos: [
        { label: "MOSTRAR com a história de Eúde como Deus usa os improváveis", refs: [] },
        { label: "REFLETIR sobre Sangar e como Deus usa o que temos à disposição", refs: [] },
        { label: "DISCUTIR teologicamente o padrão de justiça divino", refs: [] }
      ]
    },
    { label: "Interação", refs: [] },
    {
      label: "Orientação Pedagógica",
      refs: [],
      filhos: [
        { label: "Frase-tira: Com Eúde aprendemos que Deus pode usar nossas diferenças", refs: [] },
        { label: "Frase-tira: Com Sangar aprendemos que Deus pode usar o que temos nas mãos", refs: [] },
        { label: "Frase-tira: Com ambos aprendemos que Deus usa pessoas improváveis", refs: [] },
        { label: "Pergunta disparadora: o que Deus poderia usar na sua vida hoje?", refs: [] }
      ]
    },
    {
      label: "Texto Bíblico",
      refs: [{ id: "jz3.12-21", referencia: "Jz 3.12-21, 29-31", tags: "Eúde mata Eglom / palavra secreta / Sangar fere 600 filisteus" }]
    },
    { label: "Introdução", refs: [] },
    {
      label: "I – Eúde: Deus Usa os Improváveis",
      refs: [],
      filhos: [
        {
          label: "1. Uma derrota amarga",
          refs: [
            { id: "jz3.12",    referencia: "Jz 3.12",     tags: "Israel volta a fazer o mal / Eglom rei dos moabitas" },
            { id: "jz3.13",    referencia: "Jz 3.13",     tags: "cidade das Palmeiras conquistada / antiga Jericó" },
            { id: "js6",       referencia: "Js 6",        tags: "conquista de Jericó por Josué" },
            { id: "jo15.6",    referencia: "Jo 15.6",     tags: "o que é alcançado pela graça pode ser perdido" },
            { id: "hb10.26-27",referencia: "Hb 10.26,27", tags: "advertência contra o pecado voluntário" },
            { id: "ap2.4-5",   referencia: "Ap 2.4,5",    tags: "deixar o primeiro amor" },
            { id: "jz3.14",    referencia: "Jz 3.14",     tags: "dezoito anos servindo a Eglom" }
          ]
        },
        {
          label: "2. Um libertador improvável",
          refs: [
            { id: "jz3.15b",   referencia: "Jz 3.15",       tags: "Eúde filho de Gera / benjamita / homem canhoto" },
            { id: "sl118.15-16",referencia: "Sl 118.15,16", tags: "a destra do Senhor / força divina" },
            { id: "gn48.13-14",referencia: "Gn 48.13,14",   tags: "bênção associada à mão direita" },
            { id: "1cr12.2",   referencia: "1 Cr 12.2",     tags: "guerreiros ambidestros / habilidade com a esquerda" },
            { id: "jz20.16",   referencia: "Jz 20.16",      tags: "setecentos homens canhotos e certeiros" },
            { id: "1co1.27-29b",referencia: "1 Co 1.27-29", tags: "Deus escolhe os improváveis / o que não é para envergonhar os fortes" }
          ],
          filhos: [
            {
              label: "Subsídio 1 — a ação de Eúde não foi assassinato, mas ato de guerra por mandamento de Deus",
              refs: [{ id: "jz3.15c", referencia: "Jz 3.15", tags: "mandamento direto de Deus / novo concerto / guerra espiritual" }]
            }
          ]
        },
        {
          label: "3. Uma grande vitória",
          refs: [
            { id: "jz3.17-19", referencia: "Jz 3.17-19", tags: "entrega do tributo / reconhecimento do ambiente" },
            { id: "jz3.18-22", referencia: "Jz 3.18-22", tags: "arma oculta / momento oportuno para agir" },
            { id: "jz3.28-29", referencia: "Jz 3.28,29", tags: "convocação para a batalha / dez mil moabitas mortos" }
          ]
        }
      ]
    },
    {
      label: "II – Sangar: Deus Usa o Que Temos à Disposição",
      refs: [],
      filhos: [
        {
          label: "1. Um juiz desconhecido",
          refs: [{ id: "jz3.31a", referencia: "Jz 3.31", tags: "Sangar filho de Anate / 600 filisteus / aguilhada de bois / 80 anos de paz" }]
        },
        {
          label: "2. Um nome estrangeiro",
          refs: [
            { id: "is45.1", referencia: "Is 45.1", tags: "Ciro usado por Deus / origem estrangeira" },
            { id: "js2",    referencia: "Js 2",    tags: "Raabe / gentia transformada em instrumento de Deus" },
            { id: "ef3.6",  referencia: "Ef 3.6b", tags: "gentios coerdeiros / plano de redenção" },
            { id: "rm11.17",referencia: "Rm 11.17",tags: "enxertados / graça alcança os gentios" }
          ]
        },
        {
          label: "3. Uma arma diferente",
          refs: [{ id: "jz3.31b", referencia: "Jz 3.31", tags: "aguilhada de bois / ferramenta de trabalho como arma" }],
          filhos: [
            {
              label: "Subsídio 2 — 'O poder das pequenas coisas' (Pr. Valmir Nascimento)",
              refs: []
            }
          ]
        }
      ]
    },
    {
      label: "III – A Questão da Violência",
      refs: [],
      filhos: [
        {
          label: "1. Um Deus injusto?",
          refs: []
        },
        {
          label: "2. Pessoas inocentes",
          refs: [
            { id: "rm3.23",    referencia: "Rm 3.23",       tags: "todos pecaram e carecem da glória de Deus" },
            { id: "rm3.10",    referencia: "Rm 3.10",       tags: "não há um justo, nem um sequer" },
            { id: "2rs17.7-23",referencia: "2 Rs 17.7-23",  tags: "juízo sobre Israel por idolatria" },
            { id: "2cr36.15-21",referencia: "2 Cr 36.15-21",tags: "juízo e exílio por infidelidade" }
          ]
        },
        {
          label: "3. Revelação progressiva",
          refs: [{ id: "jo1.17", referencia: "Jo 1.17", tags: "graça e verdade vieram por Jesus Cristo" }]
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
    { numero: 1,  referencia: "Jz 3.15a",     tags: "clamaram ao Senhor / libertador Eúde / homem canhoto",         pagina: 25, id: "jz3.15a" },
    { numero: 2,  referencia: "1 Co 1.27-29", tags: "coisas loucas e vis / Deus escolheu",                          pagina: 25, id: "1co1.27-29" },
    { numero: 3,  referencia: "Ef 3.6",       tags: "bênção estendida aos gentios",                                 pagina: 25, id: "ef3.6" },
    { numero: 4,  referencia: "Fp 2.5-8",     tags: "humilhação de Cristo / exemplo de humildade",                  pagina: 25, id: "fp2.5-8" },
    { numero: 5,  referencia: "Mt 10.42",     tags: "valor dos pequenos gestos",                                    pagina: 25, id: "mt10.42" },
    { numero: 6,  referencia: "Lc 16.10",     tags: "fidelidade no pouco",                                          pagina: 25, id: "lc16.10" },
    { numero: 7,  referencia: "Zc 4.10",      tags: "não desprezar o dia das pequenas coisas",                      pagina: 25, id: "zc4.10" },
    { numero: 8,  referencia: "",             tags: "objetivos da lição",                                            pagina: 26, id: "" },
    { numero: 9,  referencia: "",             tags: "interação / Eúde e Sangar como libertadores improváveis",       pagina: 26, id: "" },
    { numero: 10, referencia: "",             tags: "orientação pedagógica / tiras com frases sobre improváveis",    pagina: 26, id: "" },
    { numero: 11, referencia: "Jz 3.12-21, 29-31", tags: "Eúde mata Eglom / Sangar fere 600 filisteus",             pagina: 27, id: "jz3.12-21" },
    { numero: 12, referencia: "",             tags: "introdução / Eúde e Sangar e a questão da violência",           pagina: 27, id: "" },
    { numero: 13, referencia: "Jz 3.12",      tags: "Israel volta a fazer o mal / Eglom rei dos moabitas",           pagina: 27, id: "jz3.12" },
    { numero: 14, referencia: "Jz 3.13",      tags: "cidade das Palmeiras conquistada / antiga Jericó",              pagina: 28, id: "jz3.13" },
    { numero: 15, referencia: "Js 6",         tags: "conquista de Jericó por Josué",                                 pagina: 28, id: "js6" },
    { numero: 16, referencia: "Jo 15.6",      tags: "o que é alcançado pela graça pode ser perdido",                 pagina: 28, id: "jo15.6" },
    { numero: 17, referencia: "Hb 10.26,27",  tags: "advertência contra o pecado voluntário",                        pagina: 28, id: "hb10.26-27" },
    { numero: 18, referencia: "Ap 2.4,5",     tags: "deixar o primeiro amor",                                        pagina: 28, id: "ap2.4-5" },
    { numero: 19, referencia: "Jz 3.14",      tags: "dezoito anos servindo a Eglom",                                 pagina: 28, id: "jz3.14" },
    { numero: 20, referencia: "Jz 3.15",      tags: "Eúde filho de Gera / benjamita / homem canhoto",                pagina: 28, id: "jz3.15b" },
    { numero: 21, referencia: "Sl 118.15,16", tags: "a destra do Senhor / força divina",                             pagina: 28, id: "sl118.15-16" },
    { numero: 22, referencia: "Gn 48.13,14",  tags: "bênção associada à mão direita",                                pagina: 28, id: "gn48.13-14" },
    { numero: 23, referencia: "1 Cr 12.2",    tags: "guerreiros ambidestros / habilidade com a esquerda",            pagina: 28, id: "1cr12.2" },
    { numero: 24, referencia: "Jz 20.16",     tags: "setecentos homens canhotos e certeiros",                        pagina: 28, id: "jz20.16" },
    { numero: 25, referencia: "1 Co 1.27-29", tags: "Deus escolhe os improváveis / o que não é para envergonhar os fortes", pagina: 28, id: "1co1.27-29b" },
    { numero: 26, referencia: "Jz 3.15",      tags: "mandamento direto de Deus / novo concerto / guerra espiritual", pagina: 28, id: "jz3.15c" },
    { numero: 27, referencia: "Jz 3.17-19",   tags: "entrega do tributo / reconhecimento do ambiente",               pagina: 28, id: "jz3.17-19" },
    { numero: 28, referencia: "Jz 3.18-22",   tags: "arma oculta / momento oportuno para agir",                      pagina: 28, id: "jz3.18-22" },
    { numero: 29, referencia: "Jz 3.28,29",   tags: "convocação para a batalha / dez mil moabitas mortos",           pagina: 28, id: "jz3.28-29" },
    { numero: 30, referencia: "Jz 3.31",      tags: "Sangar filho de Anate / 600 filisteus / aguilhada de bois / 80 anos de paz", pagina: 29, id: "jz3.31a" },
    { numero: 31, referencia: "Is 45.1",      tags: "Ciro usado por Deus / origem estrangeira",                      pagina: 29, id: "is45.1" },
    { numero: 32, referencia: "Js 2",         tags: "Raabe / gentia transformada em instrumento de Deus",            pagina: 29, id: "js2" },
    { numero: 33, referencia: "Ef 3.6",       tags: "gentios coerdeiros / plano de redenção",                        pagina: 29, id: "ef3.6b" },
    { numero: 34, referencia: "Rm 11.17",     tags: "enxertados / graça alcança os gentios",                         pagina: 29, id: "rm11.17" },
    { numero: 35, referencia: "Jz 3.31",      tags: "aguilhada de bois / ferramenta de trabalho como arma",          pagina: 29, id: "jz3.31b" },
    { numero: 36, referencia: "",             tags: "subsídio 2 / o poder das pequenas coisas",                      pagina: 29, id: "" },
    { numero: 37, referencia: "",             tags: "a questão da violência / Deus injusto?",                        pagina: 29, id: "" },
    { numero: 38, referencia: "Rm 3.23",      tags: "todos pecaram e carecem da glória de Deus",                     pagina: 30, id: "rm3.23" },
    { numero: 39, referencia: "Rm 3.10",      tags: "não há um justo, nem um sequer",                                pagina: 30, id: "rm3.10" },
    { numero: 40, referencia: "2 Rs 17.7-23", tags: "juízo sobre Israel por idolatria",                              pagina: 30, id: "2rs17.7-23" },
    { numero: 41, referencia: "2 Cr 36.15-21",tags: "juízo e exílio por infidelidade",                               pagina: 30, id: "2cr36.15-21" },
    { numero: 42, referencia: "Jo 1.17",      tags: "graça e verdade vieram por Jesus Cristo",                       pagina: 30, id: "jo1.17" },
    { numero: 43, referencia: "",             tags: "estante do professor / hora da revisão / conclusão",            pagina: 31, id: "" }
  ],

  // ============================================
  // LISTA ALFABÉTICA
  // ============================================
  listaAlfabetica: [
    { referencia: "1 Co 1.27-29", tags: "coisas loucas e vis / Deus escolheu",                          pagina: 25, id: "1co1.27-29" },
    { referencia: "1 Co 1.27-29", tags: "Deus escolhe os improváveis / o que não é para envergonhar os fortes", pagina: 28, id: "1co1.27-29b" },
    { referencia: "1 Cr 12.2",    tags: "guerreiros ambidestros / habilidade com a esquerda",            pagina: 28, id: "1cr12.2" },
    { referencia: "2 Cr 36.15-21",tags: "juízo e exílio por infidelidade",                               pagina: 30, id: "2cr36.15-21" },
    { referencia: "2 Rs 17.7-23", tags: "juízo sobre Israel por idolatria",                              pagina: 30, id: "2rs17.7-23" },
    { referencia: "Ap 2.4,5",     tags: "deixar o primeiro amor",                                        pagina: 28, id: "ap2.4-5" },
    { referencia: "Ef 3.6",       tags: "bênção estendida aos gentios",                                  pagina: 25, id: "ef3.6" },
    { referencia: "Ef 3.6",       tags: "gentios coerdeiros / plano de redenção",                        pagina: 29, id: "ef3.6b" },
    { referencia: "Fp 2.5-8",     tags: "humilhação de Cristo / exemplo de humildade",                   pagina: 25, id: "fp2.5-8" },
    { referencia: "Gn 48.13,14",  tags: "bênção associada à mão direita",                                pagina: 28, id: "gn48.13-14" },
    { referencia: "Hb 10.26,27",  tags: "advertência contra o pecado voluntário",                        pagina: 28, id: "hb10.26-27" },
    { referencia: "Is 45.1",      tags: "Ciro usado por Deus / origem estrangeira",                      pagina: 29, id: "is45.1" },
    { referencia: "Jo 1.17",      tags: "graça e verdade vieram por Jesus Cristo",                       pagina: 30, id: "jo1.17" },
    { referencia: "Jo 15.6",      tags: "o que é alcançado pela graça pode ser perdido",                 pagina: 28, id: "jo15.6" },
    { referencia: "Js 2",         tags: "Raabe / gentia transformada em instrumento de Deus",            pagina: 29, id: "js2" },
    { referencia: "Js 6",         tags: "conquista de Jericó por Josué",                                 pagina: 28, id: "js6" },
    { referencia: "Jz 3.12",      tags: "Israel volta a fazer o mal / Eglom rei dos moabitas",           pagina: 27, id: "jz3.12" },
    { referencia: "Jz 3.12-21, 29-31", tags: "Eúde mata Eglom / Sangar fere 600 filisteus",             pagina: 27, id: "jz3.12-21" },
    { referencia: "Jz 3.13",      tags: "cidade das Palmeiras conquistada / antiga Jericó",              pagina: 28, id: "jz3.13" },
    { referencia: "Jz 3.14",      tags: "dezoito anos servindo a Eglom",                                 pagina: 28, id: "jz3.14" },
    { referencia: "Jz 3.15",      tags: "Eúde filho de Gera / benjamita / homem canhoto",                pagina: 28, id: "jz3.15b" },
    { referencia: "Jz 3.15",      tags: "mandamento direto de Deus / novo concerto / guerra espiritual", pagina: 28, id: "jz3.15c" },
    { referencia: "Jz 3.15a",     tags: "clamaram ao Senhor / libertador Eúde / homem canhoto",          pagina: 25, id: "jz3.15a" },
    { referencia: "Jz 3.17-19",   tags: "entrega do tributo / reconhecimento do ambiente",               pagina: 28, id: "jz3.17-19" },
    { referencia: "Jz 3.18-22",   tags: "arma oculta / momento oportuno para agir",                      pagina: 28, id: "jz3.18-22" },
    { referencia: "Jz 3.28,29",   tags: "convocação para a batalha / dez mil moabitas mortos",           pagina: 28, id: "jz3.28-29" },
    { referencia: "Jz 3.31",      tags: "Sangar filho de Anate / 600 filisteus / aguilhada de bois / 80 anos de paz", pagina: 29, id: "jz3.31a" },
    { referencia: "Jz 3.31",      tags: "aguilhada de bois / ferramenta de trabalho como arma",          pagina: 29, id: "jz3.31b" },
    { referencia: "Jz 20.16",     tags: "setecentos homens canhotos e certeiros",                        pagina: 28, id: "jz20.16" },
    { referencia: "Lc 16.10",     tags: "fidelidade no pouco",                                           pagina: 25, id: "lc16.10" },
    { referencia: "Mt 10.42",     tags: "valor dos pequenos gestos",                                     pagina: 25, id: "mt10.42" },
    { referencia: "Rm 3.10",      tags: "não há um justo, nem um sequer",                                pagina: 30, id: "rm3.10" },
    { referencia: "Rm 3.23",      tags: "todos pecaram e carecem da glória de Deus",                     pagina: 30, id: "rm3.23" },
    { referencia: "Rm 11.17",     tags: "enxertados / graça alcança os gentios",                         pagina: 29, id: "rm11.17" },
    { referencia: "Sl 118.15,16", tags: "a destra do Senhor / força divina",                             pagina: 28, id: "sl118.15-16" },
    { referencia: "Zc 4.10",      tags: "não desprezar o dia das pequenas coisas",                       pagina: 25, id: "zc4.10" }
  ]
};
