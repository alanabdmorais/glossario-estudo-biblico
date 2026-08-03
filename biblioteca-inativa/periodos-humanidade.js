// ============================================
// PERÍODOS DA HUMANIDADE
// ============================================

const periodosHumanidade = {
    // ---- IDADE ANTIGA ----
    "idade-antiga": {
      id: "idade-antiga",
      nome: "Idade Antiga",
      inicio: "4000 a.C.",
      fim: "476 d.C.",
      descricao: "Desde as primeiras civilizações até a queda do Império Romano",
      periodosSeculares: [
        "Período Cananeu",
        "Período Egípcio",
        "Período Filisteu",
        "Império Assírio",
        "Império Babilônico",
        "Império Persa",
        "Império Grego",
        "Período Ptolomaico",
        "Período Selêucida",
        "Período Macabeu (Hasmoneu)",
        "Período do Segundo Templo",
        "Império Romano"
      ],
      periodosBiblicos: [
        "Era dos Patriarcas",
        "Era do Êxodo e Conquista",
        "Era dos Juízes",
        "Era da Monarquia Unida",
        "Era do Reino Dividido",
        "Era do Exílio Babilônico",
        "Era do Pós-Exílio",
        "Era Interbíblica",
        "Era de Cristo",
        "Era da Igreja Primitiva"
      ]
    },
  
    // ---- IDADE MÉDIA ----
    "idade-media": {
      id: "idade-media",
      nome: "Idade Média",
      inicio: "476 d.C.",
      fim: "1453 d.C.",
      descricao: "Da queda do Império Romano à queda de Constantinopla",
      periodosSeculares: [
        "Período Bizantino",
        "Império Carolíngio",
        "Feudalismo",
        "Cruzadas",
        "Império Mongol"
      ],
      periodosBiblicos: [
        "Pós-Apostólico",
        "Patrística",
        "Escolástica"
      ]
    },
  
    // ---- IDADE MODERNA ----
    "idade-moderna": {
      id: "idade-moderna",
      nome: "Idade Moderna",
      inicio: "1453 d.C.",
      fim: "1789 d.C.",
      descricao: "Da queda de Constantinopla à Revolução Francesa",
      periodosSeculares: [
        "Renascimento",
        "Grandes Navegações",
        "Reforma Protestante",
        "Revolução Científica",
        "Iluminismo"
      ],
      periodosBiblicos: [
        "Reforma",
        "Contrarreforma"
      ]
    },
  
    // ---- IDADE CONTEMPORÂNEA ----
    "idade-contemporanea": {
      id: "idade-contemporanea",
      nome: "Idade Contemporânea",
      inicio: "1789 d.C.",
      fim: "atualidade",
      descricao: "Da Revolução Francesa até os dias atuais",
      periodosSeculares: [
        "Revolução Industrial",
        "Imperialismo",
        "Primeira Guerra Mundial",
        "Segunda Guerra Mundial",
        "Guerra Fria",
        "Era Digital"
      ],
      periodosBiblicos: [
        "Mundo Moderno",
        "Missões Mundiais",
        "Ecumenismo"
      ]
    }
  };
  
  // ============================================
  // FUNÇÕES AUXILIARES
  // ============================================
  
  function getPeriodoHumanidade(id) {
    return periodosHumanidade[id] || null;
  }
  
  function getPeriodoHumanidadePorNome(nome) {
    for (const periodo of Object.values(periodosHumanidade)) {
      if (periodo.nome === nome) {
        return periodo;
      }
    }
    return null;
  }
  
  function getPeriodoHumanidadePorData(data) {
    // Converte data para número para comparação
    const converterData = (dataStr) => {
      if (dataStr === "atualidade") return Infinity;
      const ano = parseInt(dataStr);
      if (dataStr.includes("a.C.")) return -ano;
      return ano;
    };
  
    const ano = converterData(data);
    
    for (const periodo of Object.values(periodosHumanidade)) {
      const inicio = converterData(periodo.inicio);
      const fim = converterData(periodo.fim);
      if (ano >= inicio && ano <= fim) {
        return periodo;
      }
    }
    return null;
  }
  
  function getPeriodoHumanidadeDisplay(id) {
    const periodo = periodosHumanidade[id];
    if (!periodo) return null;
    return `${periodo.nome} (${periodo.inicio} - ${periodo.fim})`;
  }
  
  function listarPeriodosHumanidade() {
    return Object.values(periodosHumanidade);
  }
  
  function getPeriodosSecularesPorHumanidade(id) {
    const periodo = periodosHumanidade[id];
    return periodo ? periodo.periodosSeculares || [] : [];
  }
  
  function getPeriodosBiblicosPorHumanidade(id) {
    const periodo = periodosHumanidade[id];
    return periodo ? periodo.periodosBiblicos || [] : [];
  }
  
  // ============================================
  // EXPORTAÇÃO (browser)
  // ============================================
  
  if (typeof window !== "undefined") {
    window.periodosHumanidade = periodosHumanidade;
    window.getPeriodoHumanidade = getPeriodoHumanidade;
    window.getPeriodoHumanidadePorNome = getPeriodoHumanidadePorNome;
    window.getPeriodoHumanidadePorData = getPeriodoHumanidadePorData;
    window.getPeriodoHumanidadeDisplay = getPeriodoHumanidadeDisplay;
    window.listarPeriodosHumanidade = listarPeriodosHumanidade;
    window.getPeriodosSecularesPorHumanidade = getPeriodosSecularesPorHumanidade;
    window.getPeriodosBiblicosPorHumanidade = getPeriodosBiblicosPorHumanidade;
  }
  
  // ============================================
  // EXPORTAÇÃO (Node)
  // ============================================
  
  if (typeof module !== "undefined") {
    module.exports = {
      periodosHumanidade,
      getPeriodoHumanidade,
      getPeriodoHumanidadePorNome,
      getPeriodoHumanidadePorData,
      getPeriodoHumanidadeDisplay,
      listarPeriodosHumanidade,
      getPeriodosSecularesPorHumanidade,
      getPeriodosBiblicosPorHumanidade
    };
  }
  
  console.log("🏰 Períodos da Humanidade carregados!");
  console.log("📊 Total de períodos: " + Object.keys(periodosHumanidade).length);