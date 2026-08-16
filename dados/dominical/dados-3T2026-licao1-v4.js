// ============================================
// DADOS DA ESCOLA DOMINICAL - 3º TRIMESTRE 2026
// LIÇÃO 1 - O LIVRO DE JUÍZES: QUANDO CADA UM
//           FAZIA O QUE PARECIA CERTO
// MODELO V2 — hierarquia, mermaid e perguntas
//             incluídos aqui (extraídos dos prints)
// Versículos bíblicos → buscados via API em tempo real
// Contexto histórico  → contextos-biblicos.js
// ============================================

window.dadosLicaoV4 = {
  // ============================================
  // CONTEXTOS DAS REFERÊNCIAS — dados finos, só desta lição.
  // A montagem final (era, panorama, período secular etc.) é
  // buscada ao vivo nas bibliotecas segmentadas por motor-contextos.js
  // a partir dos IDs abaixo (eraId, antesId, duranteId, depoisId).
  // Nada aqui duplica conteúdo das bibliotecas — só aponta pra elas.
  // ============================================
  contextosReferencias: {
    "js24.26-30": {
      id: "js24.26-30", referencia: "Js 24.26-30", data: "~1380 a.C.",
      local: "Siquém / Efraim (Cisjordânia)", eraId: "era-exodo",
      antesId: "js10", duranteId: "js23", depoisId: "jz1",
      liderOverride: "Josué",
      tags: "aliança / pedra testemunho / morte de Josué / Timnate-Sera",
      assuntos: ["siquem", "josue", "conquista-canaa", "alianca"]
    },
    "jz1.1": {
      id: "jz1.1", referencia: "Jz 1.1", data: "~1380 a.C.",
      local: "Canaã (Terra Prometida)", eraId: "era-juizes",
      antesId: "js23", duranteId: "jz1", depoisId: "jz2",
      liderOverride: "",
      tags: "morte de Josué / vazio de liderança / consulta ao Senhor",
      assuntos: ["canaa", "juizes", "conquista-canaa", "tribos-de-israel"]
    },
    "js23": {
      id: "js23", referencia: "Js 23", data: "~1380 a.C.",
      local: "Siquém / Efraim (Cisjordânia)", eraId: "era-exodo",
      antesId: "js22", duranteId: "js23", depoisId: "jz1",
      liderOverride: "Josué",
      tags: "discurso de despedida / fidelidade exclusiva / advertência final",
      assuntos: ["siquem", "josue", "conquista-canaa", "fidelidade"]
    },
    "jz2.16": {
      id: "jz2.16", referencia: "Jz 2.16-18", data: "~1380-1050 a.C.",
      local: "Canaã (Terra Prometida)", eraId: "era-juizes",
      antesId: "jz1", duranteId: "jz2", depoisId: "jz4",
      liderOverride: "",
      tags: "juízes / libertação / compaixão / instrumentos de Deus",
      assuntos: ["juizes", "libertacao", "compaixao-divina"]
    },
    "jz2.11-13": {
      id: "jz2.11-13", referencia: "Jz 2.11-15", data: "~1380-1050 a.C.",
      local: "Canaã (Terra Prometida)", eraId: "era-juizes",
      antesId: "jz1", duranteId: "jz2", depoisId: "jz4",
      liderOverride: "",
      tags: "infidelidade / idolatria / Baal / opressão / ciclo de Juízes",
      assuntos: ["juizes", "idolatria", "baal", "ciclo-apostasia"]
    },
    "jz17.6": {
      id: "jz17.6", referencia: "Jz 17.6", data: "~1200-1100 a.C.",
      local: "Monte Efraim (Canaã)", eraId: "era-juizes",
      periodoSecularOverride: "Período Filisteu",
      antesId: "jz16", duranteId: "jz17", depoisId: "rt1",
      liderOverride: "",
      tags: "não havia rei / cada qual fazia o que parecia direito / relativismo moral",
      assuntos: ["monte-efraim", "juizes", "idolatria", "mica"]
    },
    "jz21.25": {
      id: "jz21.25", referencia: "Jz 21.25", data: "~1100-1050 a.C.",
      local: "Canaã (Terra Prometida)", eraId: "era-juizes",
      periodoSecularOverride: "Período Filisteu",
      antesId: "jz16", duranteId: "jz17", depoisId: "rt1",
      liderOverride: "",
      tags: "não havia rei / cada um fazia o que era reto / fechamento do livro",
      assuntos: ["juizes", "monarquia", "relativismo-moral"]
    },
    "jz6.34": {
      id: "jz6.34", referencia: "Jz 6.34", data: "~1200 a.C.",
      local: "Ofra / Manassés (Canaã)", eraId: "era-juizes",
      periodoSecularOverride: "Período Filisteu",
      antesId: "jz4", duranteId: "jz6", depoisId: "jz9",
      liderOverride: "Gideão",
      tags: "Espírito do Senhor se apoderou de / Gideão / midianitas",
      assuntos: ["ofra", "gideao", "midianitas", "juizes"]
    },
    "jz14.6": {
      id: "jz14.6", referencia: "Jz 14.6", data: "~1100 a.C.",
      local: "Timna / Filístia (Canaã)", eraId: "era-juizes",
      periodoSecularOverride: "Período Filisteu",
      antesId: "jz13", duranteId: "jz14", depoisId: "jz16",
      liderOverride: "Sansão",
      tags: "Espírito do Senhor se apoderou de / Sansão / força sobrenatural",
      assuntos: ["timna", "sansao", "filisteus", "juizes"]
    },
    "hb11.32": {
      id: "hb11.32", referencia: "Hb 11.32", data: "~60-70 d.C.",
      local: "Roma / Itália ou Jerusalém (destinatários judeus)", eraId: "era-igreja-primitiva",
      antesId: "hb7", duranteId: "hb11", depoisId: "hb12",
      liderOverride: "",
      tags: "galeria da fé / juízes / heróis da fé",
      assuntos: ["hebreus", "fe", "juizes", "galeria-da-fe"]
    }
  },

  titulo: "📖 Lição 1 – O Livro de Juízes: Quando Cada um Fazia o que Parecia Certo",
  trimestre: "3º Trimestre 2026",
  paginas: "3-10",
  data: "5 jul 2026",

  mapaConfig: {
    centro: [31.9522, 35.2332], // Siquém / Canaã
    zoom: 7
  },

  // ============================================
  // HIERARQUIA DE TÓPICOS
  // Cada nó pode ter: label, refs[], filhos[]
  // refs: [{ id, referencia, tags }]
  // ============================================
  hierarquia: [
    {
      label: "Texto Principal",
      refs: [{ id: "jz17.6", referencia: "Jz 17.6", tags: "não havia rei / cada qual fazia o que parecia direito" }]
    },
    { label: "Resumo da Lição", refs: [] },
    {
      label: "Leitura Semanal",
      refs: [],
      filhos: [
        { label: "Segunda – Tende bom ânimo",                          refs: [{ id: "js1.1-9",   referencia: "Js 1.1-9",   tags: "ânimo / coragem / obediência" }] },
        { label: "Terça – A travessia do Jordão",                      refs: [{ id: "js3.1-17",  referencia: "Js 3.1-17",  tags: "travessia / Jordão / arca da aliança" }] },
        { label: "Quarta – Um chamado à fidelidade exclusiva a Deus",  refs: [{ id: "js23",      referencia: "Js 23",      tags: "fidelidade exclusiva / chamado / Josué" }] },
        { label: "Quinta – Juízes como heróis da Fé",                  refs: [{ id: "hb11.32",   referencia: "Hb 11.32",   tags: "heróis da fé / juízes / galeria da fé" }] },
        { label: "Sexta – Toda autoridade é constituída por Deus",     refs: [{ id: "rm13.1-2",  referencia: "Rm 13.1,2",  tags: "autoridade / governo / constituída por Deus" }] },
        { label: "Sábado – Liderando no poder do Espírito",            refs: [{ id: "at2.14-21", referencia: "At 2.14-21", tags: "poder do Espírito / liderança / Pentecostes" }] }
      ]
    },
    {
      label: "Objetivos",
      refs: [],
      filhos: [
        { label: "COMPREENDER o papel de Josué na conquista da Terra Prometida", refs: [] },
        { label: "IDENTIFICAR o contexto histórico e espiritual do livro de Juízes", refs: [] },
        { label: "APLICAR a mensagem do livro de Juízes para o tempo presente", refs: [] }
      ]
    },
    { label: "Interação", refs: [] },
    {
      label: "Orientação Pedagógica",
      refs: [],
      filhos: [
        { label: "A. Título — sepher sophetim / shophetim", refs: [] },
        { label: "B. Autoria — desconhecida (hipóteses: os próprios juízes, Fineias, Ezequias, Esdras, Samuel)", refs: [] },
        { label: "C. Propósito — didático: retribuição divina, misericórdia de Deus, futilidade de governos idólatras", refs: [] }
      ]
    },
    {
      label: "Texto Bíblico",
      refs: [
        { id: "js24.26-30", referencia: "Js 24.26-30", tags: "pedra testemunho / morte de Josué / Timnate-Sera" },
        { id: "jz1.1",      referencia: "Jz 1.1",      tags: "morte de Josué / quem subirá primeiro / cananeus" },
        { id: "jz17.6",     referencia: "Jz 17.6",     tags: "não havia rei / cada qual fazia o que parecia direito" }
      ]
    },
    { label: "Introdução", refs: [] },
    {
      label: "I – Josué e a Conquista da Terra Prometida",
      refs: [],
      filhos: [
        {
          label: "1. A conquista da Terra Prometida",
          refs: [
            { id: "js1.1-9",  referencia: "Js 1.1-9",  tags: "esforço / bom ânimo / obediência à Palavra" },
            { id: "js3.14-17", referencia: "Js 3.14-17", tags: "travessia do Jordão / liderança de Josué" }
          ]
        },
        {
          label: "2. Deus é o Conquistador",
          refs: [
            { id: "js23.3",  referencia: "Js 23.3",  tags: "intervenção divina / vitórias de Israel" },
            { id: "js23.11", referencia: "Js 23.11", tags: "segredo do êxito / ser obediente / amar a Jeová" },
            { id: "js24.15", referencia: "Js 24.15", tags: "fidelidade exclusiva / eu e minha casa serviremos ao Senhor" }
          ]
        },
        {
          label: "3. A morte de Josué",
          refs: [
            { id: "js24.29", referencia: "Js 24.29", tags: "morte de Josué / fim da liderança" },
            { id: "jz1.1",   referencia: "Jz 1.1",   tags: "morte de Josué / vazio de liderança" },
            { id: "js13.1",  referencia: "Js 13.1",  tags: "terra ainda por conquistar / tribos" },
            { id: "lv10.11", referencia: "Lv 10.11", tags: "sacerdotes / ensinar a lei ao povo" },
            { id: "dt3.10",  referencia: "Dt 3.10",  tags: "sacerdotes / ensino da lei" },
            { id: "nm35.1-8", referencia: "Nm 35.1-8", tags: "48 cidades levíticas / educação espiritual" },
            { id: "js21.1-41", referencia: "Js 21.1-41", tags: "cidades levíticas / distribuição da terra" }
          ],
          filhos: [
            {
              label: "Subsídio 1 — o livro de Juízes conectado ao livro de Josué pela menção da sua morte",
              refs: [{ id: "jz2.20-23", referencia: "Jz 2.20-23", tags: "inimigos deixados na terra / testar o povo / confiar no Senhor" }]
            }
          ]
        }
      ]
    },
    {
      label: "II – O Livro de Juízes",
      refs: [],
      filhos: [
        {
          label: "1. Uma geração desorientada",
          refs: [
            { id: "jz1.1",   referencia: "Jz 1.1",   tags: "período do livro / da morte de Josué à monarquia" },
            { id: "jz21.25", referencia: "Jz 21.25", tags: "não havia rei / cada um fazia o que era reto" }
          ]
        },
        {
          label: "2. Os Juízes",
          refs: [
            { id: "jz2.16", referencia: "Jz 2.16", tags: "juízes / libertação / instrumentos de Deus" },
            { id: "jz3.9",  referencia: "Jz 3.9",  tags: "clamor do povo / Deus levanta um libertador" }
          ],
          filhos: [
            { label: "Juízes maiores: Otniel, Eúde, Débora, Gideão, Jefté e Sansão", refs: [] },
            { label: "Juízes menores: Sangar, Tola, Jair, Ibsã, Elom e Abdom", refs: [] }
          ]
        },
        {
          label: "3. Heróis, porém falhos",
          refs: [{ id: "jz2.18", referencia: "Jz 2.18", tags: "salvação de Israel / vida do juiz / graça de Deus" }],
          filhos: [
            { label: "Subsídio 2 — a história cíclica da desobediência de Israel", refs: [] }
          ]
        }
      ]
    },
    {
      label: "III – A Mensagem de Juízes para o Tempo Presente",
      refs: [],
      filhos: [
        {
          label: "1. \"Quando cada um fazia o que parecia certo\"",
          refs: [
            { id: "jz17.6",  referencia: "Jz 17.6",  tags: "cada um fazia o que parecia certo" },
            { id: "jz21.25", referencia: "Jz 21.25", tags: "caos generalizado / falta de liderança" }
          ],
          filhos: [
            { label: "a) O perigo da ausência de liderança", refs: [] },
            {
              label: "b) O valor da autoridade",
              refs: [
                { id: "ef6.1-4",   referencia: "Ef 6.1-4",   tags: "autoridade / família" },
                { id: "cl3.18-21", referencia: "Cl 3.18-21", tags: "autoridade / família" },
                { id: "pv22.6",    referencia: "Pv 22.6",    tags: "autoridade / educação dos filhos" },
                { id: "rm13.1-2",  referencia: "Rm 13.1,2",  tags: "autoridade / governo" },
                { id: "1pe2.13-14", referencia: "1 Pe 2.13,14", tags: "autoridade / governo" },
                { id: "hb13.17",   referencia: "Hb 13.17",   tags: "autoridade / igreja" },
                { id: "1co14.40",  referencia: "1 Co 14.40", tags: "autoridade / ordem na igreja" }
              ]
            },
            { label: "c) A consequência do relativismo moral", refs: [] }
          ]
        },
        {
          label: "2. O ciclo da libertação",
          refs: [
            { id: "jz2.11-13", referencia: "Jz 2.11-13", tags: "infidelidade / idolatria" },
            { id: "jz2.14-15", referencia: "Jz 2.14-15", tags: "opressão / juízo / disciplina" },
            { id: "jz3.9b",    referencia: "Jz 3.9",     tags: "arrependimento / clamor ao Senhor" },
            { id: "jz10.10",   referencia: "Jz 10.10",   tags: "arrependimento / clamor ao Senhor" },
            { id: "jz2.16b",   referencia: "Jz 2.16",    tags: "compaixão / libertação / restauração da paz" },
            { id: "jz3.15",    referencia: "Jz 3.15",    tags: "compaixão / libertação / restauração da paz" }
          ]
        },
        {
          label: "3. No poder do Espírito",
          refs: [
            { id: "jz3.10",  referencia: "Jz 3.10",  tags: "Espírito do Senhor se apoderou de" },
            { id: "jz6.34",  referencia: "Jz 6.34",  tags: "Espírito do Senhor se apoderou de" },
            { id: "jz11.29", referencia: "Jz 11.29", tags: "Espírito do Senhor se apoderou de" },
            { id: "jz13.25", referencia: "Jz 13.25", tags: "Espírito do Senhor começou a compeli-lo" },
            { id: "jz14.6",  referencia: "Jz 14.6",  tags: "Espírito do Senhor se apoderou de" }
          ]
        }
      ]
    },
    { label: "Conclusão", refs: [] },
    { label: "Anotações", refs: [] }
  ],

  // ============================================
  // LISTA DE APARIÇÃO (sem campo topico)
  // ============================================
  listaAparicao: [
    { numero: 1,  referencia: "Jz 17.6",     tags: "não havia rei / cada qual fazia o que parecia direito", pagina: 3, id: "jz17.6" },
    { numero: 2,  referencia: "Js 1.1-9",    tags: "ânimo / coragem / obediência",                          pagina: 3, id: "js1.1-9" },
    { numero: 3,  referencia: "Js 3.1-17",   tags: "travessia / Jordão / arca da aliança",                  pagina: 3, id: "js3.1-17" },
    { numero: 4,  referencia: "Js 23",       tags: "fidelidade exclusiva / chamado / Josué",                pagina: 3, id: "js23" },
    { numero: 5,  referencia: "Hb 11.32",    tags: "heróis da fé / juízes / galeria da fé",                 pagina: 3, id: "hb11.32" },
    { numero: 6,  referencia: "Rm 13.1,2",   tags: "autoridade / governo / constituída por Deus",           pagina: 3, id: "rm13.1-2" },
    { numero: 7,  referencia: "At 2.14-21",  tags: "poder do Espírito / liderança / Pentecostes",           pagina: 3, id: "at2.14-21" },
    { numero: 8,  referencia: "",            tags: "objetivos da lição",                                     pagina: 4, id: "" },
    { numero: 9,  referencia: "",            tags: "interação / comentarista da lição",                     pagina: 4, id: "" },
    { numero: 10, referencia: "",            tags: "orientação pedagógica / título, autoria e propósito de Juízes", pagina: 4, id: "" },
    { numero: 11, referencia: "Js 24.26-30", tags: "pedra testemunho / morte de Josué / Timnate-Sera",      pagina: 5, id: "js24.26-30" },
    { numero: 12, referencia: "Jz 1.1",      tags: "morte de Josué / quem subirá primeiro / cananeus",      pagina: 5, id: "jz1.1" },
    { numero: 13, referencia: "Jz 17.6",     tags: "não havia rei / cada qual fazia o que parecia direito", pagina: 5, id: "jz17.6" },
    { numero: 14, referencia: "",            tags: "introdução ao trimestre / livro de Juízes",             pagina: 5, id: "" },
    { numero: 15, referencia: "Js 1.1-9",    tags: "esforço / bom ânimo / obediência à Palavra",            pagina: 5, id: "js1.1-9" },
    { numero: 16, referencia: "Js 3.14-17",  tags: "travessia do Jordão / liderança de Josué",              pagina: 5, id: "js3.14-17" },
    { numero: 17, referencia: "Js 23.3",     tags: "intervenção divina / vitórias de Israel",               pagina: 5, id: "js23.3" },
    { numero: 18, referencia: "Js 23.11",    tags: "segredo do êxito / ser obediente / amar a Jeová",       pagina: 6, id: "js23.11" },
    { numero: 19, referencia: "Js 24.15",    tags: "fidelidade exclusiva / eu e minha casa serviremos ao Senhor", pagina: 6, id: "js24.15" },
    { numero: 20, referencia: "Js 24.29",    tags: "morte de Josué / fim da liderança",                     pagina: 6, id: "js24.29" },
    { numero: 21, referencia: "Jz 1.1",      tags: "morte de Josué / vazio de liderança",                   pagina: 6, id: "jz1.1" },
    { numero: 22, referencia: "Js 13.1",     tags: "terra ainda por conquistar / tribos",                   pagina: 6, id: "js13.1" },
    { numero: 23, referencia: "Lv 10.11",    tags: "sacerdotes / ensinar a lei ao povo",                    pagina: 6, id: "lv10.11" },
    { numero: 24, referencia: "Dt 3.10",     tags: "sacerdotes / ensino da lei",                            pagina: 6, id: "dt3.10" },
    { numero: 25, referencia: "Nm 35.1-8",   tags: "48 cidades levíticas / educação espiritual",            pagina: 6, id: "nm35.1-8" },
    { numero: 26, referencia: "Js 21.1-41",  tags: "cidades levíticas / distribuição da terra",             pagina: 6, id: "js21.1-41" },
    { numero: 27, referencia: "Êx 19.7",     tags: "anciãos / todo o povo / decisões nacionais",            pagina: 6, id: "ex19.7" },
    { numero: 28, referencia: "Dt 19.12",    tags: "anciãos / governo local",                                pagina: 6, id: "dt19.12" },
    { numero: 29, referencia: "Dt 21.2,18-20", tags: "anciãos / governo local",                              pagina: 6, id: "dt21.2" },
    { numero: 30, referencia: "Dt 22.15",    tags: "anciãos / governo local",                                pagina: 6, id: "dt22.15" },
    { numero: 31, referencia: "Dt 25.7",     tags: "anciãos / governo local",                                pagina: 6, id: "dt25.7" },
    { numero: 32, referencia: "Dt 31.9",     tags: "anciãos / governo local",                                pagina: 6, id: "dt31.9" },
    { numero: 33, referencia: "Jz 2.20-23",  tags: "inimigos deixados na terra / testar o povo / confiar no Senhor", pagina: 7, id: "jz2.20-23" },
    { numero: 34, referencia: "Jz 1.1",      tags: "período do livro / da morte de Josué à monarquia",     pagina: 7, id: "jz1.1" },
    { numero: 35, referencia: "Jz 21.25",    tags: "não havia rei / cada um fazia o que era reto",         pagina: 7, id: "jz21.25" },
    { numero: 36, referencia: "Jz 2.16",     tags: "juízes / libertação / instrumentos de Deus",           pagina: 7, id: "jz2.16" },
    { numero: 37, referencia: "Jz 3.9",      tags: "clamor do povo / Deus levanta um libertador",          pagina: 7, id: "jz3.9" },
    { numero: 38, referencia: "",            tags: "juízes maiores e menores / lista dos doze",             pagina: 7, id: "" },
    { numero: 39, referencia: "Jz 2.18",     tags: "salvação de Israel / vida do juiz / graça de Deus",     pagina: 8, id: "jz2.18" },
    { numero: 40, referencia: "",            tags: "Subsídio 2 / ciclo da desobediência",                    pagina: 8, id: "" },
    { numero: 41, referencia: "Jz 17.6",     tags: "cada um fazia o que parecia certo",                     pagina: 8, id: "jz17.6" },
    { numero: 42, referencia: "Jz 21.25",    tags: "caos generalizado / falta de liderança",                pagina: 8, id: "jz21.25" },
    { numero: 43, referencia: "Ef 6.1-4",    tags: "autoridade / família",                                   pagina: 9, id: "ef6.1-4" },
    { numero: 44, referencia: "Cl 3.18-21",  tags: "autoridade / família",                                   pagina: 9, id: "cl3.18-21" },
    { numero: 45, referencia: "Pv 22.6",     tags: "autoridade / educação dos filhos",                      pagina: 9, id: "pv22.6" },
    { numero: 46, referencia: "Rm 13.1,2",   tags: "autoridade / governo",                                   pagina: 9, id: "rm13.1-2" },
    { numero: 47, referencia: "1 Pe 2.13,14", tags: "autoridade / governo",                                  pagina: 9, id: "1pe2.13-14" },
    { numero: 48, referencia: "Hb 13.17",    tags: "autoridade / igreja",                                    pagina: 9, id: "hb13.17" },
    { numero: 49, referencia: "1 Co 14.40",  tags: "autoridade / ordem na igreja",                          pagina: 9, id: "1co14.40" },
    { numero: 50, referencia: "Jz 2.11-13",  tags: "infidelidade / idolatria",                              pagina: 9, id: "jz2.11-13" },
    { numero: 51, referencia: "Jz 2.14-15",  tags: "opressão / juízo / disciplina",                         pagina: 9, id: "jz2.14-15" },
    { numero: 52, referencia: "Jz 3.9",      tags: "arrependimento / clamor ao Senhor",                     pagina: 9, id: "jz3.9" },
    { numero: 53, referencia: "Jz 10.10",    tags: "arrependimento / clamor ao Senhor",                     pagina: 9, id: "jz10.10" },
    { numero: 54, referencia: "Jz 2.16",     tags: "compaixão / libertação / restauração da paz",           pagina: 9, id: "jz2.16" },
    { numero: 55, referencia: "Jz 3.15",     tags: "compaixão / libertação / restauração da paz",           pagina: 9, id: "jz3.15" },
    { numero: 56, referencia: "Jz 3.10",     tags: "Espírito do Senhor se apoderou de",                     pagina: 9, id: "jz3.10" },
    { numero: 57, referencia: "Jz 6.34",     tags: "Espírito do Senhor se apoderou de",                     pagina: 9, id: "jz6.34" },
    { numero: 58, referencia: "Jz 11.29",    tags: "Espírito do Senhor se apoderou de",                     pagina: 9, id: "jz11.29" },
    { numero: 59, referencia: "Jz 13.25",    tags: "Espírito do Senhor começou a compeli-lo",               pagina: 9, id: "jz13.25" },
    { numero: 60, referencia: "Jz 14.6",     tags: "Espírito do Senhor se apoderou de",                     pagina: 9, id: "jz14.6" },
    { numero: 61, referencia: "",            tags: "conclusão da lição",                                     pagina: 10, id: "" },
    { numero: 62, referencia: "",            tags: "hora da revisão / 5 perguntas oficiais",                pagina: 10, id: "" }
  ],

  // ============================================
  // LISTA ALFABÉTICA (sem campo topico)
  // ============================================
  listaAlfabetica: [
    { referencia: "1 Co 14.40",  tags: "autoridade / ordem na igreja",                          pagina: 9, id: "1co14.40" },
    { referencia: "1 Pe 2.13,14", tags: "autoridade / governo",                                  pagina: 9, id: "1pe2.13-14" },
    { referencia: "At 2.14-21",  tags: "poder do Espírito / liderança / Pentecostes",           pagina: 3, id: "at2.14-21" },
    { referencia: "Cl 3.18-21",  tags: "autoridade / família",                                   pagina: 9, id: "cl3.18-21" },
    { referencia: "Dt 19.12",    tags: "anciãos / governo local",                                pagina: 6, id: "dt19.12" },
    { referencia: "Dt 21.2,18-20", tags: "anciãos / governo local",                              pagina: 6, id: "dt21.2" },
    { referencia: "Dt 22.15",    tags: "anciãos / governo local",                                pagina: 6, id: "dt22.15" },
    { referencia: "Dt 25.7",     tags: "anciãos / governo local",                                pagina: 6, id: "dt25.7" },
    { referencia: "Dt 3.10",     tags: "sacerdotes / ensino da lei",                             pagina: 6, id: "dt3.10" },
    { referencia: "Dt 31.9",     tags: "anciãos / governo local",                                pagina: 6, id: "dt31.9" },
    { referencia: "Ef 6.1-4",    tags: "autoridade / família",                                   pagina: 9, id: "ef6.1-4" },
    { referencia: "Êx 19.7",     tags: "anciãos / todo o povo / decisões nacionais",             pagina: 6, id: "ex19.7" },
    { referencia: "Hb 11.32",    tags: "heróis da fé / juízes / galeria da fé",                  pagina: 3, id: "hb11.32" },
    { referencia: "Hb 13.17",    tags: "autoridade / igreja",                                    pagina: 9, id: "hb13.17" },
    { referencia: "Js 1.1-9",    tags: "esforço / bom ânimo / obediência à Palavra",             pagina: 3, id: "js1.1-9" },
    { referencia: "Js 13.1",     tags: "terra ainda por conquistar / tribos",                    pagina: 6, id: "js13.1" },
    { referencia: "Js 21.1-41",  tags: "cidades levíticas / distribuição da terra",              pagina: 6, id: "js21.1-41" },
    { referencia: "Js 23",       tags: "fidelidade exclusiva / chamado / Josué",                 pagina: 3, id: "js23" },
    { referencia: "Js 23.11",    tags: "segredo do êxito / ser obediente / amar a Jeová",        pagina: 6, id: "js23.11" },
    { referencia: "Js 23.3",     tags: "intervenção divina / vitórias de Israel",                pagina: 5, id: "js23.3" },
    { referencia: "Js 24.15",    tags: "fidelidade exclusiva / eu e minha casa serviremos ao Senhor", pagina: 6, id: "js24.15" },
    { referencia: "Js 24.26-30", tags: "pedra testemunho / morte de Josué / Timnate-Sera",       pagina: 5, id: "js24.26-30" },
    { referencia: "Js 24.29",    tags: "morte de Josué / fim da liderança",                      pagina: 6, id: "js24.29" },
    { referencia: "Js 3.1-17",   tags: "travessia / Jordão / arca da aliança",                   pagina: 3, id: "js3.1-17" },
    { referencia: "Js 3.14-17",  tags: "travessia do Jordão / liderança de Josué",               pagina: 5, id: "js3.14-17" },
    { referencia: "Jz 1.1",      tags: "morte de Josué / vazio de liderança",                    pagina: 5, id: "jz1.1" },
    { referencia: "Jz 10.10",    tags: "arrependimento / clamor ao Senhor",                       pagina: 9, id: "jz10.10" },
    { referencia: "Jz 11.29",    tags: "Espírito do Senhor se apoderou de",                       pagina: 9, id: "jz11.29" },
    { referencia: "Jz 13.25",    tags: "Espírito do Senhor começou a compeli-lo",                pagina: 9, id: "jz13.25" },
    { referencia: "Jz 14.6",     tags: "Espírito do Senhor se apoderou de",                       pagina: 9, id: "jz14.6" },
    { referencia: "Jz 17.6",     tags: "não havia rei / cada qual fazia o que parecia direito",  pagina: 3, id: "jz17.6" },
    { referencia: "Jz 2.11-13",  tags: "infidelidade / idolatria",                                pagina: 9, id: "jz2.11-13" },
    { referencia: "Jz 2.14-15",  tags: "opressão / juízo / disciplina",                          pagina: 9, id: "jz2.14-15" },
    { referencia: "Jz 2.16",     tags: "juízes / libertação / instrumentos de Deus",             pagina: 7, id: "jz2.16" },
    { referencia: "Jz 2.18",     tags: "salvação de Israel / vida do juiz / graça de Deus",      pagina: 8, id: "jz2.18" },
    { referencia: "Jz 2.20-23",  tags: "inimigos deixados na terra / testar o povo / confiar no Senhor", pagina: 7, id: "jz2.20-23" },
    { referencia: "Jz 21.25",    tags: "não havia rei / cada um fazia o que era reto",           pagina: 7, id: "jz21.25" },
    { referencia: "Jz 3.10",     tags: "Espírito do Senhor se apoderou de",                       pagina: 9, id: "jz3.10" },
    { referencia: "Jz 3.15",     tags: "compaixão / libertação / restauração da paz",            pagina: 9, id: "jz3.15" },
    { referencia: "Jz 3.9",      tags: "clamor do povo / Deus levanta um libertador",            pagina: 7, id: "jz3.9" },
    { referencia: "Jz 6.34",     tags: "Espírito do Senhor se apoderou de",                       pagina: 9, id: "jz6.34" },
    { referencia: "Lv 10.11",    tags: "sacerdotes / ensinar a lei ao povo",                      pagina: 6, id: "lv10.11" },
    { referencia: "Nm 35.1-8",   tags: "48 cidades levíticas / educação espiritual",             pagina: 6, id: "nm35.1-8" },
    { referencia: "Pv 22.6",     tags: "autoridade / educação dos filhos",                        pagina: 9, id: "pv22.6" },
    { referencia: "Rm 13.1,2",   tags: "autoridade / governo / constituída por Deus",            pagina: 3, id: "rm13.1-2" }
  ]
};
