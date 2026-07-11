// ============================================
// 🧩 REFERÊNCIAS-CONTEXTOS — biblioteca fina por versículo (V3)
// Substituta enxuta do antigo contextos-biblicos.js.
//
// Cada entrada guarda SÓ o que é único daquele versículo/trecho:
// data, local, tags, assuntos, e os IDs que apontam para as outras
// bibliotecas segmentadas. Tudo que se repete entre várias referências
// (nome de era, título de evento, classificação do livro, período
// secular, idade da humanidade) é buscado dinamicamente — nunca copiado.
//
// Como o versículo em si (texto bíblico) continua vindo da API na hora,
// esta biblioteca também NÃO guarda o campo "versiculo".
// ============================================

const referenciasContextos = {

  // 3T2026 — Lição 1 (Livro de Juízes)

  "js24.26-30": {
    id: "js24.26-30",
    referencia: "Js 24.26-30",
    data: "~1380 a.C.",
    local: "Siquém / Efraim (Cisjordânia)",
    eraId: "era-exodo",
    antesId: "js10",
    duranteId: "js23",
    depoisId: "jz1",
    liderOverride: "Josué",
    tags: "aliança / pedra testemunho / morte de Josué / Timnate-Sera",
    assuntos: ["siquem", "josue", "conquista-canaa", "alianca"]
  },

  "jz1.1": {
    id: "jz1.1",
    referencia: "Jz 1.1",
    data: "~1380 a.C.",
    local: "Canaã (Terra Prometida)",
    eraId: "era-juizes",
    antesId: "js23",
    duranteId: "jz1",
    depoisId: "jz2",
    liderOverride: "",
    tags: "morte de Josué / vazio de liderança / consulta ao Senhor",
    assuntos: ["canaa", "juizes", "conquista-canaa", "tribos-de-israel"]
  },

  "js23": {
    id: "js23",
    referencia: "Js 23",
    data: "~1380 a.C.",
    local: "Siquém / Efraim (Cisjordânia)",
    eraId: "era-exodo",
    antesId: "js22",
    duranteId: "js23",
    depoisId: "jz1",
    liderOverride: "Josué",
    tags: "discurso de despedida / fidelidade exclusiva / advertência final",
    assuntos: ["siquem", "josue", "conquista-canaa", "fidelidade"]
  },

  "jz2.16": {
    id: "jz2.16",
    referencia: "Jz 2.16-18",
    data: "~1380-1050 a.C.",
    local: "Canaã (Terra Prometida)",
    eraId: "era-juizes",
    antesId: "jz1",
    duranteId: "jz2",
    depoisId: "jz4",
    liderOverride: "",
    tags: "juízes / libertação / compaixão / instrumentos de Deus",
    assuntos: ["juizes", "libertacao", "compaixao-divina"]
  },

  "jz2.11-13": {
    id: "jz2.11-13",
    referencia: "Jz 2.11-15",
    data: "~1380-1050 a.C.",
    local: "Canaã (Terra Prometida)",
    eraId: "era-juizes",
    antesId: "jz1",
    duranteId: "jz2",
    depoisId: "jz4",
    liderOverride: "",
    tags: "infidelidade / idolatria / Baal / opressão / ciclo de Juízes",
    assuntos: ["juizes", "idolatria", "baal", "ciclo-apostasia"]
  },

  "jz17.6": {
    id: "jz17.6",
    referencia: "Jz 17.6",
    data: "~1200-1100 a.C.",
    local: "Monte Efraim (Canaã)",
    eraId: "era-juizes",
    periodoSecularOverride: "Período Filisteu",
    antesId: "jz16",
    duranteId: "jz17",
    depoisId: "rt1",
    liderOverride: "",
    tags: "não havia rei / cada qual fazia o que parecia direito / relativismo moral",
    assuntos: ["monte-efraim", "juizes", "idolatria", "mica"]
  },

  "jz21.25": {
    id: "jz21.25",
    referencia: "Jz 21.25",
    data: "~1100-1050 a.C.",
    local: "Canaã (Terra Prometida)",
    eraId: "era-juizes",
    periodoSecularOverride: "Período Filisteu",
    antesId: "jz16",
    duranteId: "jz17",
    depoisId: "rt1",
    liderOverride: "",
    tags: "não havia rei / cada um fazia o que era reto / fechamento do livro",
    assuntos: ["juizes", "monarquia", "relativismo-moral"]
  },

  "jz6.34": {
    id: "jz6.34",
    referencia: "Jz 6.34",
    data: "~1200 a.C.",
    local: "Ofra / Manassés (Canaã)",
    eraId: "era-juizes",
    periodoSecularOverride: "Período Filisteu",
    antesId: "jz4",
    duranteId: "jz6",
    depoisId: "jz9",
    liderOverride: "Gideão",
    tags: "Espírito do Senhor se apoderou de / Gideão / midianitas",
    assuntos: ["ofra", "gideao", "midianitas", "juizes"]
  },

  "jz14.6": {
    id: "jz14.6",
    referencia: "Jz 14.6",
    data: "~1100 a.C.",
    local: "Timna / Filístia (Canaã)",
    eraId: "era-juizes",
    periodoSecularOverride: "Período Filisteu",
    antesId: "jz13",
    duranteId: "jz14",
    depoisId: "jz16",
    liderOverride: "Sansão",
    tags: "Espírito do Senhor se apoderou de / Sansão / força sobrenatural",
    assuntos: ["timna", "sansao", "filisteus", "juizes"]
  },

  "hb11.32": {
    id: "hb11.32",
    referencia: "Hb 11.32",
    data: "~60-70 d.C.",
    local: "Roma / Itália ou Jerusalém (destinatários judeus)",
    eraId: "era-igreja-primitiva",
    antesId: "hb7",
    duranteId: "hb11",
    depoisId: "hb12",
    liderOverride: "",
    tags: "galeria da fé / juízes / heróis da fé",
    assuntos: ["hebreus", "fe", "juizes", "galeria-da-fe"]
  }

};

// ============================================
// MOTOR DE MONTAGEM — junta as 9 bibliotecas na hora
// ============================================

function extrairAbreviacaoLivro(referencia) {
  const m = referencia.match(/^(\d?\s?[A-Za-zÀ-ÿ]+)/);
  return m ? m[1].replace(/\s/g, '') : '';
}

function buscarEvento(id) {
  if (!id || typeof window === 'undefined' || !window.eventosBiblicos) return null;
  return window.eventosBiblicos.find(e => e.id === id) || null;
}

// getPeriodoHumanidadePorNome (da lib periodos-humanidade.js) busca pelo NOME DA
// PRÓPRIA IDADE (ex. "Idade Antiga") — não serve para achar a idade a partir do
// nome de uma era bíblica. Por isso esta função própria, que faz o inverso:
function buscarHumanidadePorNomeEra(nomeEra) {
  if (typeof window === 'undefined' || !window.periodosHumanidade) return null;
  for (const h of Object.values(window.periodosHumanidade)) {
    if (h.periodosBiblicos && h.periodosBiblicos.includes(nomeEra)) return h;
  }
  return null;
}

// Extrai o(s) ano(s) aproximado(s) de um texto tipo "~1200-1100 a.C." ou "~60-70 d.C."
// Retorna { min, max } em "anos com sinal" (a.C. negativo, d.C. positivo) para poder comparar.
function parseAnoRange(texto) {
  if (!texto) return null;
  const ehDC = /d\.C\./.test(texto);
  const nums = (texto.match(/\d+/g) || []).map(Number);
  if (nums.length === 0) return null;
  const sinal = ehDC ? 1 : -1;
  const anos = nums.map(n => n * sinal);
  return { min: Math.min(...anos), max: Math.max(...anos) };
}

function overlapScore(a, b) {
  if (!a || !b) return -Infinity;
  const inicio = Math.max(a.min, b.min);
  const fim = Math.min(a.max, b.max);
  return fim - inicio; // quanto maior (mais positivo), maior a sobreposição
}

// Quando mais de um período secular corresponde à mesma era bíblica
// (ex. "Era dos Juízes" cobre tanto o Período Egípcio quanto o Filisteu),
// escolhe o que tem MAIOR sobreposição com a data específica da referência.
function escolherMelhorPeriodoSecular(candidatos, dataReferencia) {
  if (!candidatos || candidatos.length === 0) return null;
  if (candidatos.length === 1) return candidatos[0];
  const rangeRef = parseAnoRange(dataReferencia);
  if (!rangeRef) return candidatos[0];
  let melhor = candidatos[0];
  let melhorScore = -Infinity;
  for (const c of candidatos) {
    const score = overlapScore(rangeRef, parseAnoRange(`${c.inicio} - ${c.fim}`));
    if (score > melhorScore) { melhorScore = score; melhor = c; }
  }
  return melhor;
}

// Título de seção mais próximo (ARC), como camada extra opcional —
// NÃO substitui o antes/durante/depois de eventos-biblicos.js.
function buscarTituloProximo(livro, capitulo, versiculo, direcao) {
  if (typeof window === 'undefined' || !window.titulosBiblicos) return null;
  const candidatos = Object.values(window.titulosBiblicos).filter(
    t => t.livro === livro && t.capitulo === capitulo
  );
  if (direcao === 'antes') {
    return candidatos.filter(t => t.vFim < versiculo).sort((a, b) => b.vFim - a.vFim)[0] || null;
  } else {
    return candidatos.filter(t => t.vIni > versiculo).sort((a, b) => a.vIni - b.vIni)[0] || null;
  }
}

function montarContextoCompleto(id) {
  const fino = referenciasContextos[id];
  if (!fino) return null;

  const era = (typeof window !== 'undefined' && window.periodosBiblicos) ? window.periodosBiblicos[fino.eraId] : null;
  const periodosSecularesMatch = (era && typeof window !== 'undefined' && window.buscarPeriodoSecularPorPeriodoBiblico)
    ? window.buscarPeriodoSecularPorPeriodoBiblico(era.nome) : [];
  const periodoSecular = fino.periodoSecularOverride
    ? periodosSecularesMatch.find(p => p.nome === fino.periodoSecularOverride) || escolherMelhorPeriodoSecular(periodosSecularesMatch, fino.data)
    : escolherMelhorPeriodoSecular(periodosSecularesMatch, fino.data);
  const humanidade = era ? buscarHumanidadePorNomeEra(era.nome) : null;
  const livroAbrev = extrairAbreviacaoLivro(fino.referencia);
  const classificacao = (typeof window !== 'undefined' && window.getClassificacaoLivro)
    ? window.getClassificacaoLivro(livroAbrev) : '';

  const antes = buscarEvento(fino.antesId);
  const durante = buscarEvento(fino.duranteId);
  const depois = buscarEvento(fino.depoisId);

  // camada extra opcional (seção específica ARC) — só entra se existir
  const m = fino.referencia.match(/(\d+)\.(\d+)/);
  const capitulo = m ? parseInt(m[1], 10) : null;
  const versiculo = m ? parseInt(m[2], 10) : null;
  const nomeLivroCompleto = (typeof window !== 'undefined' && window.titulosBiblicos)
    ? (Object.values(window.titulosBiblicos).find(t => extrairAbreviacaoLivro(t.referencia) === livroAbrev) || {}).livro
    : null;
  const tituloSecaoAntes = (capitulo && versiculo && nomeLivroCompleto)
    ? buscarTituloProximo(nomeLivroCompleto, capitulo, versiculo, 'antes') : null;
  const tituloSecaoDepois = (capitulo && versiculo && nomeLivroCompleto)
    ? buscarTituloProximo(nomeLivroCompleto, capitulo, versiculo, 'depois') : null;

  return {
    id: fino.id,
    referencia: fino.referencia,
    data: fino.data,
    local: fino.local,
    lider: fino.liderOverride || '',
    era: era?.nome || '',
    eraDatas: era ? `${era.inicio} - ${era.fim}` : '',
    classificacao,
    periodoSecular: periodoSecular?.nome || '',
    periodoSecularDatas: periodoSecular ? `${periodoSecular.inicio} - ${periodoSecular.fim}` : '',
    periodoHumanidade: humanidade?.nome || '',
    periodoHumanidadeDatas: humanidade ? `${humanidade.inicio} - ${humanidade.fim}` : '',
    panorama: {
      antes: antes ? { titulo: antes.titulo, referencia: antes.referencia } : null,
      durante: durante ? { titulo: durante.titulo, referencia: durante.referencia } : null,
      depois: depois ? { titulo: depois.titulo, referencia: depois.referencia } : null
    },
    secaoEspecifica: {
      antes: tituloSecaoAntes ? { titulo: tituloSecaoAntes.titulo, referencia: tituloSecaoAntes.referencia } : null,
      depois: tituloSecaoDepois ? { titulo: tituloSecaoDepois.titulo, referencia: tituloSecaoDepois.referencia } : null
    },
    tags: fino.tags,
    assuntos: fino.assuntos
  };
}

// ============================================
// EXPORTAÇÃO
// ============================================

if (typeof window !== "undefined") {
  window.referenciasContextos = referenciasContextos;
  window.montarContextoCompleto = montarContextoCompleto;
}

if (typeof module !== "undefined") {
  module.exports = { referenciasContextos, montarContextoCompleto };
}

console.log("🧩 referencias-contextos.js carregado!");
console.log("📊 Total de referências finas: " + Object.keys(referenciasContextos).length);
