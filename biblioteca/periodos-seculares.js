// ============================================
// BIBLIOTECA DE PERÍODOS SECULARES E LÍDERES
// ============================================

const periodosSeculares = {
    // ============================================
    // ANTIGO TESTAMENTO
    // ============================================
  
    // ---- PERÍODO CANANEU ----
    "periodo-cananeu": {
      id: "periodo-cananeu",
      nome: "Período Cananeu",
      inicio: "~3300 a.C.",
      fim: "~1200 a.C.",
      descricao: "Canaã dividida em cidades-estado cananeias",
      periodoBiblico: ["Era dos Patriarcas", "Era do Êxodo e Conquista"],
      lideres: [
        { nome: "Reis cananeus (diversos)", tipo: "secular" }
      ]
    },
  
    // ---- PERÍODO EGÍPCIO ----
    "periodo-egipcio": {
      id: "periodo-egipcio",
      nome: "Período Egípcio",
      inicio: "~1550 a.C.",
      fim: "~1070 a.C.",
      descricao: "Egito domina Canaã",
      periodoBiblico: ["Era do Êxodo e Conquista", "Era dos Juízes"],
      lideres: [
        { nome: "Faraó Tutmés III", reinado: "1479-1425 a.C.", tipo: "secular" },
        { nome: "Faraó Amenófis II", reinado: "1427-1401 a.C.", tipo: "secular" },
        { nome: "Faraó Merneptah", reinado: "1213-1203 a.C.", tipo: "secular" },
        { nome: "Faraó Ramsés II", reinado: "1279-1213 a.C.", tipo: "secular" }
      ]
    },
  
    // ---- PERÍODO FILISTEU ----
    "periodo-filisteu": {
      id: "periodo-filisteu",
      nome: "Período Filisteu",
      inicio: "~1200 a.C.",
      fim: "~950 a.C.",
      descricao: "Filisteus dominam a planície costeira",
      periodoBiblico: ["Era dos Juízes", "Era da Monarquia Unida"],
      lideres: [
        { nome: "Reis filisteus (diversos)", tipo: "secular" },
        { nome: "Aquis de Gate", tipo: "secular" }
      ]
    },
  
    // ---- IMPÉRIO ASSÍRIO ----
    "imperio-assirio": {
      id: "imperio-assirio",
      nome: "Império Assírio",
      inicio: "~900 a.C.",
      fim: "~612 a.C.",
      descricao: "Assíria domina o Oriente Médio",
      periodoBiblico: ["Era do Reino Dividido"],
      lideres: [
        { nome: "Tiglate-Pileser III", reinado: "745-727 a.C.", tipo: "secular" },
        { nome: "Salmaneser V", reinado: "727-722 a.C.", tipo: "secular" },
        { nome: "Senaqueribe", reinado: "705-681 a.C.", tipo: "secular" },
        { nome: "Esar-Hadom", reinado: "681-669 a.C.", tipo: "secular" },
        { nome: "Assurbanipal", reinado: "669-627 a.C.", tipo: "secular" }
      ]
    },
  
    // ---- IMPÉRIO BABILÔNICO ----
    "imperio-babilonico": {
      id: "imperio-babilonico",
      nome: "Império Babilônico",
      inicio: "~612 a.C.",
      fim: "~539 a.C.",
      descricao: "Babilônia domina Judá",
      periodoBiblico: ["Era do Exílio Babilônico"],
      lideres: [
        { nome: "Nabucodonosor II", reinado: "605-562 a.C.", tipo: "secular" },
        { nome: "Evil-Merodaque", reinado: "562-560 a.C.", tipo: "secular" },
        { nome: "Neriglissar", reinado: "560-556 a.C.", tipo: "secular" },
        { nome: "Belsazar", reinado: "553-539 a.C.", tipo: "secular" }
      ]
    },
  
    // ---- IMPÉRIO PERSA ----
    "imperio-persa": {
      id: "imperio-persa",
      nome: "Império Persa",
      inicio: "~539 a.C.",
      fim: "~332 a.C.",
      descricao: "Pérsia domina o Oriente Médio",
      periodoBiblico: ["Era do Pós-Exílio", "Era Interbíblica"],
      lideres: [
        { nome: "Ciro, o Grande", reinado: "559-530 a.C.", tipo: "secular" },
        { nome: "Cambises II", reinado: "530-522 a.C.", tipo: "secular" },
        { nome: "Dario I", reinado: "522-486 a.C.", tipo: "secular" },
        { nome: "Xerxes I", reinado: "486-465 a.C.", tipo: "secular" },
        { nome: "Artaxerxes I", reinado: "465-424 a.C.", tipo: "secular" },
        { nome: "Dario II", reinado: "423-404 a.C.", tipo: "secular" },
        { nome: "Artaxerxes II", reinado: "404-359 a.C.", tipo: "secular" },
        { nome: "Artaxerxes III", reinado: "359-338 a.C.", tipo: "secular" }
      ]
    },
  
    // ---- IMPÉRIO GREGO (ALEXANDRE) ----
    "imperio-grego": {
      id: "imperio-grego",
      nome: "Império Grego",
      inicio: "~332 a.C.",
      fim: "~323 a.C.",
      descricao: "Alexandre, o Grande, conquista o Oriente",
      periodoBiblico: ["Era Interbíblica"],
      lideres: [
        { nome: "Alexandre, o Grande", reinado: "336-323 a.C.", tipo: "secular" }
      ]
    },
  
    // ---- PERÍODO PTOLOMAICO ----
    "periodo-ptolomaico": {
      id: "periodo-ptolomaico",
      nome: "Período Ptolomaico",
      inicio: "~323 a.C.",
      fim: "~198 a.C.",
      descricao: "Egito grego (Ptolomeus) controla Israel",
      periodoBiblico: ["Era Interbíblica"],
      lideres: [
        { nome: "Ptolomeu I Sóter", reinado: "305-282 a.C.", tipo: "secular" },
        { nome: "Ptolomeu II Filadelfo", reinado: "282-246 a.C.", tipo: "secular" },
        { nome: "Ptolomeu III Evérgeta", reinado: "246-222 a.C.", tipo: "secular" },
        { nome: "Ptolomeu IV Filopátor", reinado: "222-205 a.C.", tipo: "secular" },
        { nome: "Ptolomeu V Epifânio", reinado: "205-180 a.C.", tipo: "secular" }
      ]
    },
  
    // ---- PERÍODO SELÊUCIDA ----
    "periodo-seleucida": {
      id: "periodo-seleucida",
      nome: "Período Selêucida",
      inicio: "~198 a.C.",
      fim: "~167 a.C.",
      descricao: "Síria grega (Selêucidas) controla Israel",
      periodoBiblico: ["Era Interbíblica"],
      lideres: [
        { nome: "Antíoco III Magno", reinado: "223-187 a.C.", tipo: "secular" },
        { nome: "Antíoco IV Epifânio", reinado: "175-164 a.C.", tipo: "secular" }
      ]
    },
  
    // ---- PERÍODO MACABEU (HASMONEU) ----
    "periodo-macabeu": {
      id: "periodo-macabeu",
      nome: "Período Macabeu (Hasmoneu)",
      inicio: "~167 a.C.",
      fim: "~63 a.C.",
      descricao: "Revolta e independência judaica",
      periodoBiblico: ["Era Interbíblica"],
      lideres: [
        { nome: "Judas Macabeu", tipo: "líder" },
        { nome: "Jônatas Macabeu", tipo: "líder" },
        { nome: "Simão Macabeu", tipo: "líder" },
        { nome: "João Hircano", tipo: "líder" },
        { nome: "Alexandre Janeu", tipo: "líder" }
      ]
    },
  
    // ============================================
    // NOVO TESTAMENTO
    // ============================================
  
    // ---- PERÍODO DO SEGUNDO TEMPLO ----
    "periodo-segundo-templo": {
      id: "periodo-segundo-templo",
      nome: "Período do Segundo Templo",
      inicio: "~516 a.C.",
      fim: "~70 d.C.",
      descricao: "Templo reconstruído em Jerusalém",
      periodoBiblico: ["Era do Pós-Exílio", "Era de Cristo", "Era da Igreja Primitiva"],
      lideres: [
        // Líderes judeus
        { nome: "Zorobabel", tipo: "bíblico" },
        { nome: "Josué (sumo sacerdote)", tipo: "bíblico" },
        { nome: "Herodes, o Grande", reinado: "37-4 a.C.", tipo: "secular" },
        { nome: "Herodes Antipas", reinado: "4 a.C. - 39 d.C.", tipo: "secular" },
        // Procuradores romanos
        { nome: "Pôncio Pilatos", mandato: "26-36 d.C.", tipo: "secular" },
        { nome: "Herodes Agripa I", reinado: "41-44 d.C.", tipo: "secular" },
        { nome: "Herodes Agripa II", reinado: "53-100 d.C.", tipo: "secular" },
        // Sumos sacerdotes
        { nome: "Caifás", mandato: "18-36 d.C.", tipo: "bíblico" },
        { nome: "Anás", mandato: "6-15 d.C.", tipo: "bíblico" }
      ]
    },
  
    // ---- IMPÉRIO ROMANO ----
    "imperio-romano": {
      id: "imperio-romano",
      nome: "Império Romano",
      inicio: "~27 a.C.",
      fim: "~476 d.C.",
      descricao: "Roma domina o Mediterrâneo",
      periodoBiblico: ["Era de Cristo", "Era da Igreja Primitiva"],
      lideres: [
        { nome: "Augusto", reinado: "27 a.C. - 14 d.C.", tipo: "secular" },
        { nome: "Tibério", reinado: "14-37 d.C.", tipo: "secular" },
        { nome: "Calígula", reinado: "37-41 d.C.", tipo: "secular" },
        { nome: "Cláudio", reinado: "41-54 d.C.", tipo: "secular" },
        { nome: "Nero", reinado: "54-68 d.C.", tipo: "secular" },
        { nome: "Vespasiano", reinado: "69-79 d.C.", tipo: "secular" },
        { nome: "Tito", reinado: "79-81 d.C.", tipo: "secular" },
        { nome: "Domiciano", reinado: "81-96 d.C.", tipo: "secular" },
        { nome: "Trajano", reinado: "98-117 d.C.", tipo: "secular" }
      ]
    },
  
    // ---- PERÍODO BIZANTINO ----
    "periodo-bizantino": {
      id: "periodo-bizantino",
      nome: "Período Bizantino",
      inicio: "~324 d.C.",
      fim: "~638 d.C.",
      descricao: "Império Romano do Oriente",
      periodoBiblico: ["Pós-Apostólico"],
      lideres: [
        { nome: "Constantino I", reinado: "306-337 d.C.", tipo: "secular" },
        { nome: "Teodósio I", reinado: "379-395 d.C.", tipo: "secular" },
        { nome: "Justiniano I", reinado: "527-565 d.C.", tipo: "secular" },
        { nome: "Heráclio I", reinado: "610-641 d.C.", tipo: "secular" }
      ]
    }
  };
  
  // ============================================
  // FUNÇÕES AUXILIARES
  // ============================================
  
  function buscarPeriodoSecularPorId(id) {
    return periodosSeculares[id] || null;
  }
  
  function buscarPeriodoSecularPorNome(nome) {
    for (const periodo of Object.values(periodosSeculares)) {
      if (periodo.nome === nome) {
        return periodo;
      }
    }
    return null;
  }
  
  function buscarPeriodoSecularPorPeriodoBiblico(periodoBiblico) {
    const resultados = [];
    for (const periodo of Object.values(periodosSeculares)) {
      if (periodo.periodoBiblico && periodo.periodoBiblico.includes(periodoBiblico)) {
        resultados.push(periodo);
      }
    }
    return resultados;
  }
  
  function getLideresDoPeriodoSecular(periodoId) {
    const periodo = periodosSeculares[periodoId];
    return periodo ? periodo.lideres || [] : [];
  }
  
  function getLideresSecularesDisplay(periodoId) {
    const lideres = getLideresDoPeriodoSecular(periodoId);
    if (!lideres || lideres.length === 0) return null;
    return lideres.map(l => {
      let display = l.nome;
      if (l.reinado) display += ` (${l.reinado})`;
      if (l.mandato) display += ` (${l.mandato})`;
      return display;
    });
  }
  
  function getPeriodoSecularDisplay(periodoId) {
    const periodo = periodosSeculares[periodoId];
    if (!periodo) return null;
    return `${periodo.nome} (${periodo.inicio} - ${periodo.fim})`;
  }
  
  function listarPeriodosSeculares() {
    return Object.values(periodosSeculares);
  }
  
  function buscarLiderSecularPorNome(nome) {
    for (const periodo of Object.values(periodosSeculares)) {
      for (const lider of (periodo.lideres || [])) {
        if (lider.nome === nome) {
          return { lider, periodo: periodo.nome };
        }
      }
    }
    return null;
  }
  
  // ============================================
  // EXPORTAÇÃO (browser)
  // ============================================
  
  if (typeof window !== "undefined") {
    window.periodosSeculares = periodosSeculares;
    window.buscarPeriodoSecularPorId = buscarPeriodoSecularPorId;
    window.buscarPeriodoSecularPorNome = buscarPeriodoSecularPorNome;
    window.buscarPeriodoSecularPorPeriodoBiblico = buscarPeriodoSecularPorPeriodoBiblico;
    window.getLideresDoPeriodoSecular = getLideresDoPeriodoSecular;
    window.getLideresSecularesDisplay = getLideresSecularesDisplay;
    window.getPeriodoSecularDisplay = getPeriodoSecularDisplay;
    window.listarPeriodosSeculares = listarPeriodosSeculares;
    window.buscarLiderSecularPorNome = buscarLiderSecularPorNome;
  }
  
  // ============================================
  // EXPORTAÇÃO (Node)
  // ============================================
  
  if (typeof module !== "undefined") {
    module.exports = {
      periodosSeculares,
      buscarPeriodoSecularPorId,
      buscarPeriodoSecularPorNome,
      buscarPeriodoSecularPorPeriodoBiblico,
      getLideresDoPeriodoSecular,
      getLideresSecularesDisplay,
      getPeriodoSecularDisplay,
      listarPeriodosSeculares,
      buscarLiderSecularPorNome
    };
  }
  
  console.log("🏛️ Períodos Seculares carregados!");
  console.log("📊 Total de períodos: " + Object.keys(periodosSeculares).length);