// ============================================
// DADOS DA ESCOLA DOMINICAL - 2º TRIMESTRE 2026
// LIÇÃO 13 - O DISCERNIMENTO DO CRISTÃO
// MODELO V2 — hierarquia, mermaid e perguntas
//             incluídos aqui (extraídos dos prints)
// Versículos bíblicos → buscados via API em tempo real
// Contexto histórico  → contextos-biblicos.js
// ============================================

window.dadosLicaoV2 = {
  titulo: "📖 Lição 13 – O Discernimento do Cristão",
  trimestre: "2º Trimestre 2026",
  paginas: "89-96",
  data: "28 jun 2026",

  mapaConfig: {
    centro: [31.0461, 34.8516],
    zoom: 6
  },

  // ============================================
  // HIERARQUIA DE TÓPICOS
  // Cada nó pode ter: label, refs[], filhos[]
  // refs: [{ id, referencia, tags }]
  // ============================================
  hierarquia: [
    {
      label: "Texto Principal",
      refs: [{ id: "hb5.14", referencia: "Hb 5.14", tags: "discernir / bem / mal / sentidos" }]
    },
    { label: "Resumo da Lição", refs: [] },
    {
      label: "Leitura Semanal",
      refs: [],
      filhos: [
        { label: "Segunda – Provai os espíritos",                        refs: [{ id: "1jo4.1",  referencia: "1 Jo 4.1",  tags: "espíritos / provar / falsos profetas" }] },
        { label: "Terça – Cuidado com os falsos profetas",               refs: [{ id: "mt24.24", referencia: "Mt 24.24", tags: "falsos profetas / enganar / eleitos" }] },
        { label: "Quarta – As aparências enganam",                       refs: [{ id: "jo7.24",  referencia: "Jo 7.24",  tags: "aparências / julgamento / justo" }] },
        { label: "Quinta – O Espírito Santo nos guia em toda verdade",   refs: [{ id: "jo16.13", referencia: "Jo 16.13", tags: "Espírito Santo / verdade / guiar" }] },
        { label: "Sexta – Deus dá sabedoria a quem pede",                refs: [{ id: "tg1.5",   referencia: "Tg 1.5",   tags: "sabedoria / pedir / Deus" }] },
        { label: "Sábado – Examinai tudo. Retende o bem",                refs: [{ id: "1ts5.21", referencia: "1 Ts 5.21", tags: "examinar / reter / bem" }] }
      ]
    },
    {
      label: "Objetivos",
      refs: [],
      filhos: [
        { label: "REFLETIR a respeito da necessidade do discernimento", refs: [] },
        { label: "CONHECER as fontes do discernimento",                 refs: [] },
        { label: "INCENTIVAR a prática do discernimento",               refs: [] }
      ]
    },
    { label: "Interação", refs: [] },
    { label: "Orientação Pedagógica", refs: [] },
    {
      label: "Texto Bíblico",
      refs: [{ id: "1co12.4-11", referencia: "1 Co 12.4-11", tags: "dons / Espírito / diversidade / manifestação" }]
    },
    { label: "Introdução", refs: [] },
    {
      label: "I – Necessidade de Discernimento",
      refs: [],
      filhos: [
        { label: "1. Numerosos ensinos", refs: [] },
        {
          label: "2. Advertência bíblica",
          refs: [
            { id: "1ts5.21", referencia: "1 Ts 5.21", tags: "examinar / reter / bem" },
            { id: "1jo4.1",  referencia: "1 Jo 4.1",  tags: "espíritos / provar / falsos" }
          ]
        },
        { label: "3. Proteção do rebanho", refs: [] },
        {
          label: "Subsídio 1 – Jesus advertiu seus discípulos sobre os falsos líderes",
          refs: [
            { id: "mt7.15",   referencia: "Mt 7.15",   tags: "falsos profetas / lobos / ovelhas" },
            { id: "mc4.24",   referencia: "Mc 4.24",   tags: "cuidado / ouvir" },
            { id: "mc8.15",   referencia: "Mc 8.15",   tags: "levedo / fariseus / Herodes" },
            { id: "mt24.4",   referencia: "Mt 24.4",   tags: "engano / alertas" },
            { id: "mt24.24",  referencia: "Mt 24.24",  tags: "falsos profetas / sinais / eleitos" },
            { id: "lc6.11",   referencia: "Lc 6.11",   tags: "enganadores / discípulos" },
            { id: "lc8.18",   referencia: "Lc 8.18",   tags: "ouvir / cuidar" },
            { id: "mc13.5",   referencia: "Mc 13.5",   tags: "engano / alertas" },
            { id: "mc13.23",  referencia: "Mc 13.23",  tags: "profecia / alerta / falsos" },
            { id: "jo10.1-5", referencia: "Jo 10.1-5", tags: "ovelhas / voz / pastor" },
            { id: "1ts5.21",  referencia: "1 Ts 5.21", tags: "examinar / bem / reter" },
            { id: "1jo4.1",   referencia: "1 Jo 4.1",  tags: "espíritos / provar" }
          ],
          filhos: [
            { label: "(1) Discernir seu caráter",                             refs: [{ id: "gl5.22-23", referencia: "Gl 5.22-23", tags: "fruto do Espírito / caráter" }] },
            { label: "(2) Discernir suas motivações",                         refs: [{ id: "1co9.19-22", referencia: "1 Co 9.19-22", tags: "motivação / servir / ganhar" }] },
            { label: "(4) Discernir seu nível de confiança na Palavra de Deus", refs: [{ id: "2jo9-11", referencia: "2 Jo 9-11", tags: "doutrina / Cristo / permanecer" }] }
          ]
        }
      ]
    },
    {
      label: "II – Fontes do Discernimento",
      refs: [],
      filhos: [
        {
          label: "1. Escrituras Sagradas",
          refs: [
            { id: "1jo4.1",   referencia: "1 Jo 4.1",   tags: "espíritos / provar / falsos" },
            { id: "sl119.18", referencia: "Sl 119.18",  tags: "olhos / maravilhas / lei" }
          ]
        },
        {
          label: "2. Espírito Santo",
          refs: [
            { id: "jo16.13",  referencia: "Jo 16.13",  tags: "Espírito / verdade / guiar" },
            { id: "1co12.10", referencia: "1 Co 12.10", tags: "dons / discernimento / espíritos" }
          ]
        },
        {
          label: "3. Maturidade cristã",
          refs: [
            { id: "hb5.14", referencia: "Hb 5.14", tags: "sólido / sentidos / discernir / bem / mal" },
            { id: "ef4.14", referencia: "Ef 4.14", tags: "doutrina / vento / ensinamentos" }
          ]
        }
      ]
    },
    {
      label: "III – Praticando o Discernimento",
      refs: [],
      filhos: [
        {
          label: "1. Julgar corretamente",
          refs: [{ id: "jo7.24", referencia: "Jo 7.24", tags: "julgamento / aparência / justo" }]
        },
        {
          label: "2. Cuidado com as emoções",
          refs: [{ id: "jr17.9", referencia: "Jr 17.9", tags: "coração / enganoso / acima" }]
        },
        {
          label: "3. Obediência à verdade",
          refs: [
            { id: "tg1.22", referencia: "Tg 1.22", tags: "palavra / fazedores / enganadores" },
            { id: "1jo1.7", referencia: "1 Jo 1.7", tags: "luz / andar / comunhão" }
          ]
        },
        {
          label: "Subsídio 3 – A cosmovisão cristã frente à cultura pós-moderna",
          refs: [{ id: "tg1.27", referencia: "Tg 1.27", tags: "religião / pura / órfãos / viúvas" }]
        }
      ]
    },
    { label: "Conclusão", refs: [] },
    {
      label: "Estante do Professor",
      refs: [],
      filhos: [
        { label: "GEISLER, Norman L. e MEISTER, Chad V. Razões para crer: Apresentando argumentos a favor da fé cristã", refs: [] }
      ]
    },
    {
      label: "Hora da Revisão",
      refs: [],
      filhos: [
        { label: "1. De acordo com a lição, o que é o discernimento espiritual?",                    refs: [] },
        { label: "2. De que forma a Bíblia nos orienta a respeito do cuidado com os falsos ensinos?", refs: [] },
        { label: "3. Qual é a principal fonte do discernimento?",                                     refs: [] },
        { label: "4. Quem conduz o crente à verdade plena?",                                         refs: [] },
        { label: "5. Qual prática também protege contra o engano?",                                  refs: [] }
      ]
    },
    { label: "Anotações", refs: [] }
  ],

  // ============================================
  // LISTA DE APARIÇÃO (sem campo topico)
  // ============================================
  listaAparicao: [
    { numero: 1,  referencia: "Hb 5.14",     tags: "discernir / bem / mal / sentidos",              pagina: 89, id: "hb5.14" },
    { numero: 2,  referencia: "",             tags: "",                                              pagina: 89, id: "" },
    { numero: 3,  referencia: "1 Jo 4.1",    tags: "espíritos / provar / falsos profetas",          pagina: 89, id: "1jo4.1" },
    { numero: 4,  referencia: "Mt 24.24",    tags: "falsos profetas / enganar / eleitos",           pagina: 89, id: "mt24.24" },
    { numero: 5,  referencia: "Jo 7.24",     tags: "aparências / julgamento / justo",               pagina: 89, id: "jo7.24" },
    { numero: 6,  referencia: "Jo 16.13",    tags: "Espírito Santo / verdade / guiar",              pagina: 89, id: "jo16.13" },
    { numero: 7,  referencia: "Tg 1.5",      tags: "sabedoria / pedir / Deus",                      pagina: 89, id: "tg1.5" },
    { numero: 8,  referencia: "1 Ts 5.21",   tags: "examinar / reter / bem",                        pagina: 89, id: "1ts5.21" },
    { numero: 9,  referencia: "",             tags: "",                                              pagina: 90, id: "" },
    { numero: 10, referencia: "",             tags: "discernimento / necessidade",                   pagina: 90, id: "" },
    { numero: 11, referencia: "",             tags: "discernimento / fontes",                        pagina: 90, id: "" },
    { numero: 12, referencia: "",             tags: "discernimento / prática",                       pagina: 90, id: "" },
    { numero: 13, referencia: "",             tags: "",                                              pagina: 90, id: "" },
    { numero: 14, referencia: "",             tags: "",                                              pagina: 90, id: "" },
    { numero: 15, referencia: "1 Co 12.4-11",tags: "dons / Espírito / diversidade / manifestação",  pagina: 91, id: "1co12.4-11" },
    { numero: 16, referencia: "",             tags: "",                                              pagina: 91, id: "" },
    { numero: 17, referencia: "",             tags: "discernimento / numerosos ensinos",             pagina: 91, id: "" },
    { numero: 18, referencia: "1 Ts 5.21",   tags: "examinar / reter / bem",                        pagina: 91, id: "1ts5.21" },
    { numero: 19, referencia: "1 Jo 4.1",    tags: "espíritos / provar / falsos",                   pagina: 91, id: "1jo4.1" },
    { numero: 20, referencia: "",             tags: "falsos ensinadores / discernir / caráter",      pagina: 92, id: "" },
    { numero: 21, referencia: "Mt 7.15",     tags: "falsos profetas / lobos / ovelhas",             pagina: 92, id: "mt7.15" },
    { numero: 22, referencia: "Mc 4.24",     tags: "cuidado / ouvir",                               pagina: 92, id: "mc4.24" },
    { numero: 23, referencia: "Mc 8.15",     tags: "levedo / fariseus / Herodes",                   pagina: 92, id: "mc8.15" },
    { numero: 24, referencia: "Mt 24.4",     tags: "engano / alertas",                              pagina: 92, id: "mt24.4" },
    { numero: 25, referencia: "Mt 24.24",    tags: "falsos profetas / sinais / eleitos",            pagina: 92, id: "mt24.24" },
    { numero: 26, referencia: "Lc 6.11",     tags: "enganadores / discípulos",                      pagina: 92, id: "lc6.11" },
    { numero: 27, referencia: "Lc 8.18",     tags: "ouvir / cuidar",                                pagina: 92, id: "lc8.18" },
    { numero: 28, referencia: "Mc 13.5",     tags: "engano / alertas",                              pagina: 92, id: "mc13.5" },
    { numero: 29, referencia: "Mc 13.23",    tags: "profecia / alerta / falsos",                    pagina: 92, id: "mc13.23" },
    { numero: 30, referencia: "Jo 10.1-5",   tags: "ovelhas / voz / pastor",                        pagina: 92, id: "jo10.1-5" },
    { numero: 31, referencia: "1 Ts 5.21",   tags: "examinar / bem / reter",                        pagina: 92, id: "1ts5.21" },
    { numero: 32, referencia: "1 Jo 4.1",    tags: "espíritos / provar",                            pagina: 92, id: "1jo4.1" },
    { numero: 33, referencia: "Gl 5.22-23",  tags: "fruto do Espírito / caráter",                   pagina: 92, id: "gl5.22-23" },
    { numero: 34, referencia: "1 Co 9.19-22",tags: "motivação / servir / ganhar",                   pagina: 92, id: "1co9.19-22" },
    { numero: 35, referencia: "2 Jo 9-11",   tags: "doutrina / Cristo / permanecer",                pagina: 93, id: "2jo9-11" },
    { numero: 36, referencia: "",             tags: "Escrituras / discernimento / fonte",            pagina: 93, id: "" },
    { numero: 37, referencia: "1 Jo 4.1",    tags: "espíritos / provar / falsos",                   pagina: 91, id: "1jo4.1" },
    { numero: 38, referencia: "Sl 119.18",   tags: "olhos / maravilhas / lei",                      pagina: 91, id: "sl119.18" },
    { numero: 39, referencia: "Jo 16.13",    tags: "Espírito / verdade / guiar",                    pagina: 93, id: "jo16.13" },
    { numero: 40, referencia: "1 Co 12.10",  tags: "dons / discernimento / espíritos",              pagina: 93, id: "1co12.10" },
    { numero: 41, referencia: "Hb 5.14",     tags: "sólido / sentidos / discernir / bem / mal",     pagina: 94, id: "hb5.14" },
    { numero: 42, referencia: "Ef 4.14",     tags: "doutrina / vento / ensinamentos",               pagina: 94, id: "ef4.14" },
    { numero: 43, referencia: "Jo 7.24",     tags: "julgamento / aparência / justo",                pagina: 94, id: "jo7.24" },
    { numero: 44, referencia: "",             tags: "emoções / decisões / equilíbrio",               pagina: 94, id: "" },
    { numero: 45, referencia: "Jr 17.9",     tags: "coração / enganoso / acima",                    pagina: 94, id: "jr17.9" },
    { numero: 46, referencia: "Tg 1.22",     tags: "palavra / fazedores / enganadores",             pagina: 95, id: "tg1.22" },
    { numero: 47, referencia: "1 Jo 1.7",    tags: "luz / andar / comunhão",                        pagina: 95, id: "1jo1.7" },
    { numero: 48, referencia: "",             tags: "cosmovisão cristã / pós-moderno / verdade",     pagina: 95, id: "" },
    { numero: 49, referencia: "Tg 1.27",     tags: "religião / pura / órfãos / viúvas",             pagina: 95, id: "tg1.27" },
    { numero: 50, referencia: "",             tags: "",                                              pagina: 96, id: "" },
    { numero: 51, referencia: "",             tags: "GEISLER / razões para crer",                    pagina: 96, id: "" },
    { numero: 52, referencia: "",             tags: "",                                              pagina: 96, id: "" },
    { numero: 53, referencia: "",             tags: "discernimento / dom / Deus / verdadeiro / falso",pagina: 96, id: "" },
    { numero: 54, referencia: "",             tags: "Bíblia / falsos ensinos / cuidado",            pagina: 96, id: "" },
    { numero: 55, referencia: "",             tags: "discernimento / fonte principal",               pagina: 96, id: "" },
    { numero: 56, referencia: "",             tags: "Espírito Santo / verdade plena",               pagina: 96, id: "" },
    { numero: 57, referencia: "",             tags: "obediência / engano / proteção",               pagina: 96, id: "" },
    { numero: 58, referencia: "",             tags: "",                                              pagina: 96, id: "" }
  ],

  // ============================================
  // LISTA ALFABÉTICA (sem campo topico)
  // ============================================
  listaAlfabetica: [
    { referencia: "1 Co 12.4-11",  tags: "dons / Espírito / diversidade / manifestação",  pagina: 91, id: "1co12.4-11" },
    { referencia: "1 Co 12.10",    tags: "dons / discernimento / espíritos",               pagina: 93, id: "1co12.10" },
    { referencia: "1 Co 9.19-22",  tags: "motivação / servir / ganhar",                   pagina: 92, id: "1co9.19-22" },
    { referencia: "1 Jo 1.7",      tags: "luz / andar / comunhão",                        pagina: 95, id: "1jo1.7" },
    { referencia: "1 Jo 4.1",      tags: "espíritos / provar / falsos profetas",           pagina: 89, id: "1jo4.1" },
    { referencia: "1 Ts 5.21",     tags: "examinar / reter / bem",                        pagina: 89, id: "1ts5.21" },
    { referencia: "2 Jo 9-11",     tags: "doutrina / Cristo / permanecer",                pagina: 93, id: "2jo9-11" },
    { referencia: "Ef 4.14",       tags: "doutrina / vento / ensinamentos",               pagina: 94, id: "ef4.14" },
    { referencia: "Gl 5.22-23",    tags: "fruto do Espírito / caráter",                   pagina: 92, id: "gl5.22-23" },
    { referencia: "Hb 5.14",       tags: "discernir / bem / mal / sentidos",              pagina: 89, id: "hb5.14" },
    { referencia: "Jo 10.1-5",     tags: "ovelhas / voz / pastor",                        pagina: 92, id: "jo10.1-5" },
    { referencia: "Jo 16.13",      tags: "Espírito Santo / verdade / guiar",              pagina: 89, id: "jo16.13" },
    { referencia: "Jo 7.24",       tags: "aparências / julgamento / justo",               pagina: 89, id: "jo7.24" },
    { referencia: "Jr 17.9",       tags: "coração / enganoso / acima",                    pagina: 94, id: "jr17.9" },
    { referencia: "Lc 6.11",       tags: "enganadores / discípulos",                      pagina: 92, id: "lc6.11" },
    { referencia: "Lc 8.18",       tags: "ouvir / cuidar",                                pagina: 92, id: "lc8.18" },
    { referencia: "Mc 13.23",      tags: "profecia / alerta / falsos",                    pagina: 92, id: "mc13.23" },
    { referencia: "Mc 13.5",       tags: "engano / alertas",                              pagina: 92, id: "mc13.5" },
    { referencia: "Mc 4.24",       tags: "cuidado / ouvir",                               pagina: 92, id: "mc4.24" },
    { referencia: "Mc 8.15",       tags: "levedo / fariseus / Herodes",                   pagina: 92, id: "mc8.15" },
    { referencia: "Mt 24.24",      tags: "falsos profetas / enganar / eleitos",           pagina: 89, id: "mt24.24" },
    { referencia: "Mt 24.4",       tags: "engano / alertas",                              pagina: 92, id: "mt24.4" },
    { referencia: "Mt 7.15",       tags: "falsos profetas / lobos / ovelhas",             pagina: 92, id: "mt7.15" },
    { referencia: "Sl 119.18",     tags: "olhos / maravilhas / lei",                      pagina: 91, id: "sl119.18" },
    { referencia: "Tg 1.22",       tags: "palavra / fazedores / enganadores",             pagina: 95, id: "tg1.22" },
    { referencia: "Tg 1.27",       tags: "religião / pura / órfãos / viúvas",             pagina: 95, id: "tg1.27" },
    { referencia: "Tg 1.5",        tags: "sabedoria / pedir / Deus",                      pagina: 89, id: "tg1.5" }
  ]
};
