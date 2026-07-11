// ============================================
// PERÍODOS BÍBLICOS E SEUS LÍDERES
// ============================================

const periodosBiblicos = {
  // ========== ANTIGO TESTAMENTO ==========

  // ---- ERA DOS PATRIARCAS ----
  "era-patriarcas": {
    id: "era-patriarcas",
    nome: "Era dos Patriarcas",
    descricao: "Período dos patriarcas Abraão, Isaque e Jacó",
    inicio: "~2166 a.C.",
    fim: "~1800 a.C.",
    livros: ["Gn"],
    lideres: [
      { nome: "Abraão", tipo: "patriarca" },
      { nome: "Isaque", tipo: "patriarca" },
      { nome: "Jacó", tipo: "patriarca" }
    ]
  },

  // ---- ERA DO ÊXODO E CONQUISTA ----
  "era-exodo": {
    id: "era-exodo",
    nome: "Era do Êxodo e Conquista",
    descricao: "Libertação do Egito, peregrinação no deserto e conquista de Canaã",
    inicio: "~1446 a.C.",
    fim: "~1380 a.C.",
    livros: ["Ex", "Lv", "Nm", "Dt", "Js"],
    lideres: [
      { nome: "Moisés", tipo: "libertador" },
      { nome: "Josué", tipo: "conquistador" },
      { nome: "Calebe", tipo: "conquistador" }
    ]
  },

  // ---- ERA DOS JUÍZES ----
  "era-juizes": {
    id: "era-juizes",
    nome: "Era dos Juízes",
    descricao: "Período dos juízes de Israel, ciclos de infidelidade e libertação",
    inicio: "~1380 a.C.",
    fim: "~1050 a.C.",
    livros: ["Jz", "Rt"],
    lideres: [
      { nome: "Otniel", tipo: "juiz" },
      { nome: "Eúde", tipo: "juiz" },
      { nome: "Débora", tipo: "juíza" },
      { nome: "Gideão", tipo: "juiz" },
      { nome: "Jefté", tipo: "juiz" },
      { nome: "Sansão", tipo: "juiz" },
      { nome: "Eli", tipo: "sacerdote/juiz" },
      { nome: "Samuel", tipo: "profeta/juiz" }
    ]
  },

  // ---- ERA DA MONARQUIA UNIDA ----
  "era-monarquia-unida": {
    id: "era-monarquia-unida",
    nome: "Era da Monarquia Unida",
    descricao: "Reis Saul, Davi e Salomão - Israel unificado",
    inicio: "~1050 a.C.",
    fim: "~930 a.C.",
    livros: ["1Sm", "2Sm", "1Rs", "1Cr", "2Cr", "Sl", "Pv", "Ec", "Ct"],
    lideres: [
      { nome: "Saul", reinado: "~1050-1010 a.C.", tipo: "rei" },
      { nome: "Davi", reinado: "1010-970 a.C.", tipo: "rei" },
      { nome: "Salomão", reinado: "970-930 a.C.", tipo: "rei" }
    ]
  },

  // ---- ERA DO REINO DIVIDIDO ----
  "era-reino-dividido": {
    id: "era-reino-dividido",
    nome: "Era do Reino Dividido",
    descricao: "Israel (Norte) e Judá (Sul) - profetas atuantes",
    inicio: "~930 a.C.",
    fim: "~586 a.C.",
    livros: ["1Rs", "2Rs", "2Cr", "Is", "Jr", "Os", "Jl", "Am", "Ob", "Jn", "Mq", "Na", "Hc", "Sf", "Ez", "Dn"],
    lideres: [
      // Reino do Norte (Israel)
      { nome: "Jeroboão I", reinado: "930-909 a.C.", reino: "Israel", tipo: "rei" },
      { nome: "Acabe", reinado: "874-853 a.C.", reino: "Israel", tipo: "rei" },
      { nome: "Jeú", reinado: "841-814 a.C.", reino: "Israel", tipo: "rei" },
      { nome: "Jeroboão II", reinado: "793-753 a.C.", reino: "Israel", tipo: "rei" },
      // Reino do Sul (Judá)
      { nome: "Roboão", reinado: "930-913 a.C.", reino: "Judá", tipo: "rei" },
      { nome: "Ezequias", reinado: "715-686 a.C.", reino: "Judá", tipo: "rei" },
      { nome: "Josias", reinado: "640-609 a.C.", reino: "Judá", tipo: "rei" },
      { nome: "Zedequias", reinado: "597-586 a.C.", reino: "Judá", tipo: "rei" },
      // Profetas
      { nome: "Elias", tipo: "profeta" },
      { nome: "Eliseu", tipo: "profeta" },
      { nome: "Isaías", tipo: "profeta" },
      { nome: "Jeremias", tipo: "profeta" },
      { nome: "Oséias", tipo: "profeta" },
      { nome: "Amós", tipo: "profeta" },
      { nome: "Miquéias", tipo: "profeta" }
    ]
  },

  // ---- ERA DO EXÍLIO BABILÔNICO ----
  "era-exilio": {
    id: "era-exilio",
    nome: "Era do Exílio Babilônico",
    descricao: "Povo de Judá exilado na Babilônia (586-539 a.C.)",
    inicio: "~586 a.C.",
    fim: "~539 a.C.",
    livros: ["Ez", "Dn", "Lm"],
    lideres: [
      { nome: "Ezequiel", tipo: "profeta" },
      { nome: "Daniel", tipo: "profeta" },
      { nome: "Jeremias", tipo: "profeta" }
    ]
  },

  // ---- ERA DO PÓS-EXÍLIO ----
  "era-pos-exilio": {
    id: "era-pos-exilio",
    nome: "Era do Pós-Exílio",
    descricao: "Retorno do exílio, reconstrução do templo e de Jerusalém",
    inicio: "~539 a.C.",
    fim: "~400 a.C.",
    livros: ["Ed", "Ne", "Ag", "Zc", "Ml", "Et"],
    lideres: [
      { nome: "Zorobabel", tipo: "governador" },
      { nome: "Josué (sumo sacerdote)", tipo: "sumo sacerdote" },
      { nome: "Esdras", tipo: "escriba/sacerdote" },
      { nome: "Neemias", tipo: "governador" },
      { nome: "Ageu", tipo: "profeta" },
      { nome: "Zacarias", tipo: "profeta" },
      { nome: "Malaquias", tipo: "profeta" }
    ]
  },

  // ---- ERA INTERBÍBLICA ----
  "era-interbiblica": {
    id: "era-interbiblica",
    nome: "Era Interbíblica",
    descricao: "Período entre Malaquias e João Batista (400 a.C. - 5 a.C.)",
    inicio: "~400 a.C.",
    fim: "~5 a.C.",
    livros: [],
    lideres: [
      { nome: "(sem líderes bíblicos registrados)", tipo: "" }
    ]
  },

  // ========== NOVO TESTAMENTO ==========

  // ---- ERA DE CRISTO ----
  "era-cristo": {
    id: "era-cristo",
    nome: "Era de Cristo",
    descricao: "Vida, morte, ressurreição e ascensão de Jesus",
    inicio: "~5 a.C.",
    fim: "~30 d.C.",
    livros: ["Mt", "Mc", "Lc", "Jo"],
    lideres: [
      { nome: "Jesus Cristo", tipo: "messias" },
      { nome: "João Batista", tipo: "profeta" },
      { nome: "Os doze apóstolos", tipo: "apóstolos" }
    ]
  },

  // ---- ERA DA IGREJA PRIMITIVA ----
  "era-igreja-primitiva": {
    id: "era-igreja-primitiva",
    nome: "Era da Igreja Primitiva",
    descricao: "Nascimento e expansão da igreja, epístolas dos apóstolos",
    inicio: "~30 d.C.",
    fim: "~100 d.C.",
    livros: ["At", "Rm", "1Co", "2Co", "Gl", "Ef", "Fp", "Cl", "1Ts", "2Ts", "1Tm", "2Tm", "Tt", "Fm", "Hb", "Tg", "1Pe", "2Pe", "1Jo", "2Jo", "3Jo", "Jd", "Ap"],
    lideres: [
      { nome: "Pedro", tipo: "apóstolo" },
      { nome: "Paulo", tipo: "apóstolo" },
      { nome: "João", tipo: "apóstolo" },
      { nome: "Tiago", tipo: "apóstolo" },
      { nome: "Estêvão", tipo: "diácono/mártir" },
      { nome: "Filipe", tipo: "evangelista" },
      { nome: "Barnabé", tipo: "missionário" },
      { nome: "Timóteo", tipo: "pastor" },
      { nome: "Tito", tipo: "pastor" }
    ]
  }
};

// ============================================
// FUNÇÕES AUXILIARES
// ============================================

function buscarPeriodoPorId(id) {
  return periodosBiblicos[id] || null;
}

function buscarPeriodoPorNome(nome) {
  for (const periodo of Object.values(periodosBiblicos)) {
    if (periodo.nome === nome) {
      return periodo;
    }
  }
  return null;
}

function buscarPeriodoPorLivroId(livroId) {
  const sigla = livroId.split(/[0-9.]/)[0];
  const siglasMap = {
    "gn": "Gn", "ex": "Ex", "lv": "Lv", "nm": "Nm", "dt": "Dt",
    "js": "Js", "jz": "Jz", "rt": "Rt", "1sm": "1Sm", "2sm": "2Sm",
    "1rs": "1Rs", "2rs": "2Rs", "1cr": "1Cr", "2cr": "2Cr",
    "ed": "Ed", "ne": "Ne", "et": "Et",
    "jo": "Jó", "sl": "Sl", "pv": "Pv", "ec": "Ec", "ct": "Ct",
    "is": "Is", "jr": "Jr", "lm": "Lm", "ez": "Ez", "dn": "Dn",
    "os": "Os", "jl": "Jl", "am": "Am", "ob": "Ob", "jn": "Jn",
    "mq": "Mq", "na": "Na", "hc": "Hc", "sf": "Sf", "ag": "Ag",
    "zc": "Zc", "ml": "Ml",
    "mt": "Mt", "mc": "Mc", "lc": "Lc", "jo": "Jo",
    "at": "At", "rm": "Rm", "1co": "1Co", "2co": "2Co",
    "gl": "Gl", "ef": "Ef", "fp": "Fp", "cl": "Cl",
    "1ts": "1Ts", "2ts": "2Ts", "1tm": "1Tm", "2tm": "2Tm",
    "tt": "Tt", "fm": "Fm", "hb": "Hb", "tg": "Tg",
    "1pe": "1Pe", "2pe": "2Pe", "1jo": "1Jo", "2jo": "2Jo",
    "3jo": "3Jo", "jd": "Jd", "ap": "Ap"
  };
  const nomeLivro = siglasMap[sigla];
  if (!nomeLivro) return null;
  for (const periodo of Object.values(periodosBiblicos)) {
    if (periodo.livros && periodo.livros.includes(nomeLivro)) {
      return periodo;
    }
  }
  return null;
}

function getLideresDoPeriodo(periodoId) {
  const periodo = periodosBiblicos[periodoId];
  return periodo ? periodo.lideres || [] : [];
}

function getLideresDisplay(periodoId) {
  const lideres = getLideresDoPeriodo(periodoId);
  if (!lideres || lideres.length === 0) return null;
  return lideres.map(l => {
    let display = l.nome;
    if (l.reinado) display += ` (${l.reinado})`;
    return display;
  });
}

function listarPeriodosBiblicos() {
  return Object.values(periodosBiblicos);
}

function listarLivrosPorPeriodo(periodoId) {
  const periodo = periodosBiblicos[periodoId];
  return periodo ? periodo.livros : [];
}

function getPeriodoDisplay(periodoId) {
  const periodo = periodosBiblicos[periodoId];
  if (!periodo) return null;
  let display = periodo.nome;
  if (periodo.inicio && periodo.fim) {
    display += ` (${periodo.inicio} - ${periodo.fim})`;
  }
  return display;
}

// ============================================
// EXPORTAÇÃO (browser)
// ============================================

if (typeof window !== "undefined") {
  window.periodosBiblicos = periodosBiblicos;
  window.buscarPeriodoPorId = buscarPeriodoPorId;
  window.buscarPeriodoPorNome = buscarPeriodoPorNome;
  window.buscarPeriodoPorLivroId = buscarPeriodoPorLivroId;
  window.getLideresDoPeriodo = getLideresDoPeriodo;
  window.getLideresDisplay = getLideresDisplay;
  window.listarPeriodosBiblicos = listarPeriodosBiblicos;
  window.listarLivrosPorPeriodo = listarLivrosPorPeriodo;
  window.getPeriodoDisplay = getPeriodoDisplay;
}

// ============================================
// EXPORTAÇÃO (Node)
// ============================================

if (typeof module !== "undefined") {
  module.exports = {
    periodosBiblicos,
    buscarPeriodoPorId,
    buscarPeriodoPorNome,
    buscarPeriodoPorLivroId,
    getLideresDoPeriodo,
    getLideresDisplay,
    listarPeriodosBiblicos,
    listarLivrosPorPeriodo,
    getPeriodoDisplay
  };
}

console.log("⏳ Períodos Bíblicos carregados!");
console.log("📊 Total de períodos: " + Object.keys(periodosBiblicos).length);