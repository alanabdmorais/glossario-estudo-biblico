// ============================================
// DADOS DA ESCOLA DOMINICAL - 3º TRIMESTRE 2026
// LIÇÃO 5 - DÉBORA E BARAQUE: UNIÃO PARA
//           FAZER A OBRA DE DEUS
// MODELO V2 — hierarquia, mermaid e perguntas
//             incluídos aqui (extraídos dos prints)
// Versículos bíblicos → buscados via Bíblia local / API em tempo real
// Contexto histórico  → referencias-contextos.js (v3)
// ============================================

window.dadosLicaoV3 = {
  titulo: "📖 Lição 5 – Débora e Baraque: União para Fazer a Obra de Deus",
  trimestre: "3º Trimestre 2026",
  paginas: "32-38",
  data: "2 ago 2026",

  mapaConfig: {
    centro: [32.6853, 35.3919], // Monte Tabor
    zoom: 8
  },

  // ============================================
  // HIERARQUIA DE TÓPICOS
  // ============================================
  hierarquia: [
    {
      label: "Texto Principal",
      refs: [{ id: "jz4.14a", referencia: "Jz 4.14a", tags: "Débora exorta Baraque / Levanta-te / o Senhor tem dado Sísera na tua mão" }]
    },
    { label: "Resumo da Lição", refs: [] },
    {
      label: "Leitura Semanal",
      refs: [],
      filhos: [
        { label: "Segunda – Levando as cargas uns dos outros",         refs: [{ id: "gl6.2",      referencia: "Gl 6.2",      tags: "levando as cargas uns dos outros" }] },
        { label: "Terça – Encorajando uns aos outros",                 refs: [{ id: "hb10.23-25", referencia: "Hb 10.23-25", tags: "encorajando uns aos outros" }] },
        { label: "Quarta – Cooperação na obra de Deus",                refs: [{ id: "1co3.6-9",   referencia: "1 Co 3.6-9",  tags: "cooperação na obra de Deus" }] },
        { label: "Quinta – Cada membro tem a sua função",              refs: [{ id: "1co12.12-27",referencia: "1 Co 12.12-27",tags: "cada membro tem a sua função" }] },
        { label: "Sexta – Façam tudo para a glória de Deus",           refs: [{ id: "1co10.31",   referencia: "1 Co 10.31",  tags: "façam tudo para a glória de Deus" }] },
        { label: "Sábado – Todos somos um em Cristo",                  refs: [{ id: "gl3.28",     referencia: "Gl 3.28",     tags: "todos somos um em Cristo" }] }
      ]
    },
    {
      label: "Objetivos",
      refs: [],
      filhos: [
        { label: "COMPREENDER o papel de liderança e de influência exercido por Débora", refs: [] },
        { label: "IDENTIFICAR a atuação de Baraque e a de Jael no livramento do povo", refs: [] },
        { label: "EXTRAIR lições espirituais desta vitória para a vivência cristã diária", refs: [] }
      ]
    },
    { label: "Interação", refs: [] },
    {
      label: "Orientação Pedagógica",
      refs: [],
      filhos: [
        { label: "Atividade: tabela com perfis de Débora, Baraque e Jael (quem era / talentos / contribuição)", refs: [] },
        { label: "Leitura conjunta de 1 Coríntios 3.6-9 sobre cooperação na obra de Deus", refs: [{ id: "1co3.6-9", referencia: "1 Co 3.6-9", tags: "cooperação / cada um recebe conforme seu trabalho" }] }
      ]
    },
    {
      label: "Texto Bíblico",
      refs: [{ id: "jz4.1-9-14-21", referencia: "Jz 4.1-9, 14-21", tags: "Israel oprimido por Jabim / Débora convoca Baraque / vitória sobre Sísera / Jael mata Sísera" }]
    },
    { label: "Introdução", refs: [] },
    {
      label: "I – Débora: Uma Mulher Usada por Deus",
      refs: [],
      filhos: [
        {
          label: "1. Novo ciclo de infidelidade",
          refs: [
            { id: "jz4.1",     referencia: "Jz 4.1",      tags: "Israel volta a fazer o mal / após a morte de Eúde" },
            { id: "js11.10-11",referencia: "Js 11.10-11", tags: "Hazor conquistada por Josué / retomada pelos cananeus" },
            { id: "gn4.7",     referencia: "Gn 4.7",      tags: "pecado que se fortalece se não for combatido" },
            { id: "rm12.21",   referencia: "Rm 12.21",    tags: "vencer o mal com o bem" }
          ]
        },
        {
          label: "2. O perfil de Débora",
          refs: [
            { id: "jz4.4",     referencia: "Jz 4.4",     tags: "Débora profetisa / casada com Lapidote" },
            { id: "ex15.20",   referencia: "Êx 15.20",   tags: "Miriã profetisa / exemplo bíblico de mulher profetisa" },
            { id: "2rs22.14",  referencia: "2 Rs 22.14", tags: "Hulda profetisa / outro exemplo bíblico" },
            { id: "jz4.5",     referencia: "Jz 4.5",     tags: "Débora juíza / julgava as causas do povo / única juíza mencionada" }
          ],
          filhos: [
            {
              label: "Subsídio 1 — Débora e a disciplina da oração como fonte de intimidade com Deus",
              refs: [{ id: "", referencia: "", tags: "Subsídio 1 / relacionamento com Deus / disciplina da oração" }]
            }
          ]
        },
        {
          label: "3. Liderança inesperada",
          refs: [{ id: "", referencia: "", tags: "Deus escolhe uma mulher em tempos de guerra / não guerreira nem estrategista / dons únicos" }]
        }
      ]
    },
    {
      label: "II – Os Papéis de Baraque e Jael",
      refs: [],
      filhos: [
        {
          label: "1. A mensagem de Deus a Baraque",
          refs: [
            { id: "jz4.8",     referencia: "Jz 4.8",      tags: "Baraque condiciona sua ida à companhia de Débora" },
            { id: "jz4.9",     referencia: "Jz 4.9",      tags: "honra da vitória será de uma mulher / antecipa Jael" },
            { id: "gl6.2",    referencia: "Gl 6.2",      tags: "levando as cargas uns dos outros / ninguém caminha sozinho" },
            { id: "hb10.24-25",referencia: "Hb 10.24-25", tags: "encorajando uns aos outros" }
          ]
        },
        {
          label: "2. Palavras de encorajamento",
          refs: [
            { id: "jz4.14", referencia: "Jz 4.14", tags: "Levanta-te / o Senhor tem dado Sísera na tua mão / exortação de Débora" },
            { id: "jz4.9",  referencia: "Jz 4.9",   tags: "Débora foi à frente com Baraque (v.9)" },
            { id: "jz4.10",  referencia: "Jz 4.10",  tags: "Débora sobe com Baraque ao campo de batalha (v.10)" },
            { id: "jz4.15",  referencia: "Jz 4.15",  tags: "o Senhor derrotou Sísera diante de Baraque (v.15)" }
          ]
        },
        {
          label: "3. A ação de Jael",
          refs: [
            { id: "jz4.17",    referencia: "Jz 4.17",    tags: "Sísera busca refúgio na tenda de Jael, mulher de Héber" },
            { id: "jz4.11",    referencia: "Jz 4.11",    tags: "Héber, nômade quenita, separado de seu povo" },
            { id: "pv12.19-20",referencia: "Pv 12.19-20",tags: "falsa paz do ímpio / seu fim é a morte" },
            { id: "jz4.19-21", referencia: "Jz 4.19-21", tags: "Jael dá água e leite a Sísera / crava a estaca / mata Sísera" }
          ]
        }
      ]
    },
    {
      label: "III – Lições da Vitória",
      refs: [],
      filhos: [
        {
          label: "1. Tributo a Deus",
          refs: [
            { id: "jz5.1-31",  referencia: "Jz 5.1-31",  tags: "cântico de Débora e Baraque louvando ao Senhor pela libertação" },
            { id: "sl115.1",   referencia: "Sl 115.1",   tags: "não a nós, Senhor, mas ao teu nome dá glória" },
            { id: "1co10.31", referencia: "1 Co 10.31", tags: "façam tudo para a glória de Deus" },
            { id: "1sm17.47",  referencia: "1 Sm 17.47", tags: "não é do guerreiro a vitória" },
            { id: "2cr20.15",  referencia: "2 Cr 20.15", tags: "a peleja não é vossa, mas de Deus / o Senhor é quem dá a vitória" }
          ]
        },
        {
          label: "2. Liderança, cooperação e sinergia",
          refs: [
            { id: "1co12.12-27",referencia: "1 Co 12.12-27", tags: "igreja como organismo / cada membro exerce sua função" },
            { id: "1co3.6-9",   referencia: "1 Co 3.6-9",    tags: "Paulo lembra que não fez a obra sozinho" },
            { id: "jz4.23-24",   referencia: "Jz 4.23-24",    tags: "sinergia entre ação divina e responsabilidade humana" }
          ]
        },
        {
          label: "3. O papel das mulheres",
          refs: [
            { id: "gl3.28", referencia: "Gl 3.28",     tags: "protagonismo das mulheres / não há homem nem mulher em Cristo" },
            { id: "gn1.27",  referencia: "Gn 1.27",     tags: "homem e mulher criados à imagem de Deus / complementaridade" },
            { id: "ef5.22-33",referencia: "Ef 5.22-33", tags: "modelo bíblico de complementaridade, não antagonismo" }
          ],
          filhos: [
            {
              label: "Subsídio 3 — a mulher como 'adjutora' (hebraico 'ezer'), igual ao homem diante de Deus",
              refs: [{ id: "", referencia: "", tags: "Subsídio 3 / ezer / adjutora / igualdade diante de Deus" }]
            }
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
    { numero: 1,  referencia: "Jz 4.14a",     tags: "Débora exorta Baraque / Levanta-te / o Senhor tem dado Sísera na tua mão", pagina: 32, id: "jz4.14a" },
    { numero: 2,  referencia: "",             tags: "resumo da lição / cooperação e talentos",                              pagina: 32, id: "" },
    { numero: 3,  referencia: "Gl 6.2",       tags: "levando as cargas uns dos outros",                                     pagina: 32, id: "gl6.2" },
    { numero: 4,  referencia: "Hb 10.23-25",  tags: "encorajando uns aos outros",                                           pagina: 32, id: "hb10.23-25" },
    { numero: 5,  referencia: "1 Co 3.6-9",   tags: "cooperação na obra de Deus",                                           pagina: 32, id: "1co3.6-9" },
    { numero: 6,  referencia: "1 Co 12.12-27",tags: "cada membro tem a sua função",                                         pagina: 32, id: "1co12.12-27" },
    { numero: 7,  referencia: "1 Co 10.31",   tags: "façam tudo para a glória de Deus",                                     pagina: 32, id: "1co10.31" },
    { numero: 8,  referencia: "Gl 3.28",      tags: "todos somos um em Cristo",                                             pagina: 32, id: "gl3.28" },
    { numero: 9,  referencia: "",             tags: "objetivos da lição",                                                   pagina: 33, id: "" },
    { numero: 10, referencia: "",             tags: "interação / aprendizado dos alunos",                                   pagina: 33, id: "" },
    { numero: 11, referencia: "",             tags: "orientação pedagógica / tabela Débora, Baraque e Jael",                pagina: 33, id: "" },
    { numero: 12, referencia: "1 Co 3.6-9",   tags: "cooperação / cada um recebe conforme seu trabalho",                   pagina: 33, id: "1co3.6-9" },
    { numero: 13, referencia: "Jz 4.1-9, 14-21", tags: "Israel oprimido por Jabim / Débora convoca Baraque / vitória sobre Sísera / Jael mata Sísera", pagina: 34, id: "jz4.1-9-14-21" },
    { numero: 14, referencia: "",             tags: "introdução / libertação de Israel da opressão dos cananeus",           pagina: 34, id: "" },
    { numero: 15, referencia: "Jz 4.1",       tags: "Israel volta a fazer o mal / após a morte de Eúde",                    pagina: 34, id: "jz4.1" },
    { numero: 16, referencia: "Js 11.10-11",  tags: "Hazor conquistada por Josué / retomada pelos cananeus",                pagina: 34, id: "js11.10-11" },
    { numero: 17, referencia: "Gn 4.7",       tags: "pecado que se fortalece se não for combatido",                        pagina: 34, id: "gn4.7" },
    { numero: 18, referencia: "Rm 12.21",     tags: "vencer o mal com o bem",                                              pagina: 34, id: "rm12.21" },
    { numero: 19, referencia: "Jz 4.4",       tags: "Débora profetisa / casada com Lapidote",                              pagina: 35, id: "jz4.4" },
    { numero: 20, referencia: "Êx 15.20",     tags: "Miriã profetisa / exemplo bíblico de mulher profetisa",               pagina: 35, id: "ex15.20" },
    { numero: 21, referencia: "2 Rs 22.14",   tags: "Hulda profetisa / outro exemplo bíblico",                             pagina: 35, id: "2rs22.14" },
    { numero: 22, referencia: "Jz 4.5",       tags: "Débora juíza / julgava as causas do povo / única juíza mencionada",   pagina: 35, id: "jz4.5" },
    { numero: 23, referencia: "",             tags: "Subsídio 1 / relacionamento com Deus / disciplina da oração",         pagina: 35, id: "" },
    { numero: 24, referencia: "",             tags: "liderança inesperada / Deus escolhe uma mulher em tempos de guerra",  pagina: 35, id: "" },
    { numero: 25, referencia: "Jz 4.8",       tags: "Baraque condiciona sua ida à companhia de Débora",                    pagina: 36, id: "jz4.8" },
    { numero: 26, referencia: "Jz 4.9",       tags: "honra da vitória será de uma mulher / antecipa Jael",                 pagina: 36, id: "jz4.9" },
    { numero: 27, referencia: "Gl 6.2",       tags: "levando as cargas uns dos outros / ninguém caminha sozinho",          pagina: 36, id: "gl6.2" },
    { numero: 28, referencia: "Hb 10.24-25",  tags: "encorajando uns aos outros",                                          pagina: 36, id: "hb10.24-25" },
    { numero: 29, referencia: "Jz 4.14",      tags: "Levanta-te / o Senhor tem dado Sísera na tua mão / exortação de Débora", pagina: 36, id: "jz4.14" },
    { numero: 30, referencia: "Jz 4.9",       tags: "Débora foi à frente com Baraque (v.9)",                               pagina: 36, id: "jz4.9" },
    { numero: 31, referencia: "Jz 4.10",      tags: "Débora sobe com Baraque ao campo de batalha (v.10)",                  pagina: 36, id: "jz4.10" },
    { numero: 32, referencia: "Jz 4.15",      tags: "o Senhor derrotou Sísera diante de Baraque (v.15)",                   pagina: 36, id: "jz4.15" },
    { numero: 33, referencia: "Jz 4.17",      tags: "Sísera busca refúgio na tenda de Jael, mulher de Héber",              pagina: 36, id: "jz4.17" },
    { numero: 34, referencia: "Jz 4.11",      tags: "Héber, nômade quenita, separado de seu povo",                        pagina: 36, id: "jz4.11" },
    { numero: 35, referencia: "Pv 12.19-20",  tags: "falsa paz do ímpio / seu fim é a morte",                              pagina: 36, id: "pv12.19-20" },
    { numero: 36, referencia: "Jz 4.19-21",   tags: "Jael dá água e leite a Sísera / crava a estaca / mata Sísera",        pagina: 36, id: "jz4.19-21" },
    { numero: 37, referencia: "Jz 5.1-31",    tags: "cântico de Débora e Baraque louvando ao Senhor pela libertação",      pagina: 37, id: "jz5.1-31" },
    { numero: 38, referencia: "Sl 115.1",     tags: "não a nós, Senhor, mas ao teu nome dá glória",                       pagina: 37, id: "sl115.1" },
    { numero: 39, referencia: "1 Co 10.31",   tags: "façam tudo para a glória de Deus",                                   pagina: 37, id: "1co10.31" },
    { numero: 40, referencia: "1 Sm 17.47",   tags: "não é do guerreiro a vitória",                                       pagina: 37, id: "1sm17.47" },
    { numero: 41, referencia: "2 Cr 20.15",   tags: "a peleja não é vossa, mas de Deus / o Senhor é quem dá a vitória",    pagina: 37, id: "2cr20.15" },
    { numero: 42, referencia: "1 Co 12.12-27",tags: "igreja como organismo / cada membro exerce sua função",              pagina: 37, id: "1co12.12-27" },
    { numero: 43, referencia: "1 Co 3.6-9",   tags: "Paulo lembra que não fez a obra sozinho",                            pagina: 37, id: "1co3.6-9" },
    { numero: 44, referencia: "Jz 4.23-24",   tags: "sinergia entre ação divina e responsabilidade humana",               pagina: 37, id: "jz4.23-24" },
    { numero: 45, referencia: "Gl 3.28",      tags: "protagonismo das mulheres / não há homem nem mulher em Cristo",      pagina: 37, id: "gl3.28" },
    { numero: 46, referencia: "Gn 1.27",      tags: "homem e mulher criados à imagem de Deus / complementaridade",        pagina: 37, id: "gn1.27" },
    { numero: 47, referencia: "Ef 5.22-33",   tags: "modelo bíblico de complementaridade, não antagonismo",               pagina: 37, id: "ef5.22-33" },
    { numero: 48, referencia: "",             tags: "Subsídio 3 / ezer / adjutora / igualdade diante de Deus",            pagina: 37, id: "" },
    { numero: 49, referencia: "",             tags: "estante do professor / hora da revisão / conclusão",                 pagina: 38, id: "" }
  ],

  // ============================================
  // LISTA ALFABÉTICA
  // ============================================
  listaAlfabetica: [
    { referencia: "1 Co 3.6-9", tags: "cooperação na obra de Deus | cooperação / cada um recebe conforme seu trabalho | Paulo lembra que não fez a obra sozinho", pagina: "32, 33, 37", id: "1co3.6-9" },
    { referencia: "1 Co 10.31", tags: "façam tudo para a glória de Deus", pagina: "32, 37", id: "1co10.31" },
    { referencia: "1 Co 12.12-27", tags: "cada membro tem a sua função | igreja como organismo / cada membro exerce sua função", pagina: "32, 37", id: "1co12.12-27" },
    { referencia: "1 Sm 17.47", tags: "não é do guerreiro a vitória", pagina: 37, id: "1sm17.47" },
    { referencia: "2 Cr 20.15", tags: "a peleja não é vossa, mas de Deus / o Senhor é quem dá a vitória", pagina: 37, id: "2cr20.15" },
    { referencia: "2 Rs 22.14", tags: "Hulda profetisa / outro exemplo bíblico", pagina: 35, id: "2rs22.14" },
    { referencia: "Ef 5.22-33", tags: "modelo bíblico de complementaridade, não antagonismo", pagina: 37, id: "ef5.22-33" },
    { referencia: "Êx 15.20", tags: "Miriã profetisa / exemplo bíblico de mulher profetisa", pagina: 35, id: "ex15.20" },
    { referencia: "Gl 3.28", tags: "todos somos um em Cristo | protagonismo das mulheres / não há homem nem mulher em Cristo", pagina: "32, 37", id: "gl3.28" },
    { referencia: "Gl 6.2", tags: "levando as cargas uns dos outros | levando as cargas uns dos outros / ninguém caminha sozinho", pagina: "32, 36", id: "gl6.2" },
    { referencia: "Gn 1.27", tags: "homem e mulher criados à imagem de Deus / complementaridade", pagina: 37, id: "gn1.27" },
    { referencia: "Gn 4.7", tags: "pecado que se fortalece se não for combatido", pagina: 34, id: "gn4.7" },
    { referencia: "Hb 10.23-25", tags: "encorajando uns aos outros", pagina: 32, id: "hb10.23-25" },
    { referencia: "Hb 10.24-25", tags: "encorajando uns aos outros", pagina: 36, id: "hb10.24-25" },
    { referencia: "Js 11.10-11", tags: "Hazor conquistada por Josué / retomada pelos cananeus", pagina: 34, id: "js11.10-11" },
    { referencia: "Jz 4.1", tags: "Israel volta a fazer o mal / após a morte de Eúde", pagina: 34, id: "jz4.1" },
    { referencia: "Jz 4.1-9, 14-21", tags: "Israel oprimido por Jabim / Débora convoca Baraque / vitória sobre Sísera / Jael mata Sísera", pagina: 34, id: "jz4.1-9-14-21" },
    { referencia: "Jz 4.4", tags: "Débora profetisa / casada com Lapidote", pagina: 35, id: "jz4.4" },
    { referencia: "Jz 4.5", tags: "Débora juíza / julgava as causas do povo / única juíza mencionada", pagina: 35, id: "jz4.5" },
    { referencia: "Jz 4.8", tags: "Baraque condiciona sua ida à companhia de Débora", pagina: 36, id: "jz4.8" },
    { referencia: "Jz 4.9", tags: "honra da vitória será de uma mulher / antecipa Jael | Débora foi à frente com Baraque (v.9)", pagina: 36, id: "jz4.9" },
    { referencia: "Jz 4.10", tags: "Débora sobe com Baraque ao campo de batalha (v.10)", pagina: 36, id: "jz4.10" },
    { referencia: "Jz 4.11", tags: "Héber, nômade quenita, separado de seu povo", pagina: 36, id: "jz4.11" },
    { referencia: "Jz 4.14", tags: "Levanta-te / o Senhor tem dado Sísera na tua mão / exortação de Débora", pagina: 36, id: "jz4.14" },
    { referencia: "Jz 4.14a", tags: "Débora exorta Baraque / Levanta-te / o Senhor tem dado Sísera na tua mão", pagina: 32, id: "jz4.14a" },
    { referencia: "Jz 4.15", tags: "o Senhor derrotou Sísera diante de Baraque (v.15)", pagina: 36, id: "jz4.15" },
    { referencia: "Jz 4.17", tags: "Sísera busca refúgio na tenda de Jael, mulher de Héber", pagina: 36, id: "jz4.17" },
    { referencia: "Jz 4.19-21", tags: "Jael dá água e leite a Sísera / crava a estaca / mata Sísera", pagina: 36, id: "jz4.19-21" },
    { referencia: "Jz 4.23-24", tags: "sinergia entre ação divina e responsabilidade humana", pagina: 37, id: "jz4.23-24" },
    { referencia: "Jz 5.1-31", tags: "cântico de Débora e Baraque louvando ao Senhor pela libertação", pagina: 37, id: "jz5.1-31" },
    { referencia: "Pv 12.19-20", tags: "falsa paz do ímpio / seu fim é a morte", pagina: 36, id: "pv12.19-20" },
    { referencia: "Rm 12.21", tags: "vencer o mal com o bem", pagina: 34, id: "rm12.21" },
    { referencia: "Sl 115.1", tags: "não a nós, Senhor, mas ao teu nome dá glória", pagina: 37, id: "sl115.1" }
  ]
};
