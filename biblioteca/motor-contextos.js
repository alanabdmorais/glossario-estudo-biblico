// ============================================
// 🧩 MOTOR DE CONTEXTOS — v3
// Não guarda nenhum dado de referência. Só recebe o objeto
// "fino" que já vem dentro do próprio dados-licaoN-v3.js
// (window.dadosLicaoV3.contextosReferencias[id]) e monta o
// contexto completo buscando ao vivo nas bibliotecas segmentadas:
// periodos-biblicos.js, periodos-seculares.js, periodos-humanidade.js,
// classificacao-livros-biblicos.js, eventos-biblicos.js, titulos-biblicos.js.
//
// Nada aqui é copiado/duplicado — cada lição referencia as
// bibliotecas segmentadas diretamente pelos IDs que ela mesma guarda.
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

// "Durante" da seção específica: o título cujo intervalo de versículos
// cobre exatamente o versículo citado (equivalente ao "durante" do arco).
// Este continua restrito ao mesmo capítulo — só conta como "durante" se
// realmente cobrir a passagem, não expande pra vizinhos.
function buscarTituloDurante(livro, capitulo, versiculo) {
  if (typeof window === 'undefined' || !window.titulosBiblicos) return null;
  return Object.values(window.titulosBiblicos).find(
    t => t.livro === livro && t.capitulo === capitulo && t.vIni <= versiculo && versiculo <= t.vFim
  ) || null;
}

// Antes/depois do 📑, agora sempre tentando achar algo (igual o 🌟 já faz):
// 1) mesmo capítulo → 2) qualquer capítulo do mesmo livro → 3) livro vizinho
// dentro da mesma era (usa abrevParaNomeCompletoAuto/buscarPeriodoPorLivroId
// pra converter nome completo ↔ sigla e achar o livro vizinho).
function buscarTituloGlobal(nomeLivroCompleto, abrevLivro, capitulo, versiculo, direcao) {
  if (typeof window === 'undefined' || !window.titulosBiblicos) return null;

  // 1) mesmo capítulo
  const noCapitulo = buscarTituloProximo(nomeLivroCompleto, capitulo, versiculo, direcao);
  if (noCapitulo) return noCapitulo;

  // 2) qualquer capítulo do mesmo livro
  const todosDoLivro = Object.values(window.titulosBiblicos).filter(t => t.livro === nomeLivroCompleto);
  if (direcao === 'antes') {
    const antes = todosDoLivro.filter(t => t.capitulo < capitulo)
      .sort((a, b) => (b.capitulo - a.capitulo) || (b.vFim - a.vFim))[0];
    if (antes) return antes;
  } else {
    const depois = todosDoLivro.filter(t => t.capitulo > capitulo)
      .sort((a, b) => (a.capitulo - b.capitulo) || (a.vIni - b.vIni))[0];
    if (depois) return depois;
  }

  // 3) livro vizinho dentro da mesma era (mesma lógica do 🌟)
  if (!abrevLivro || typeof window.buscarPeriodoPorLivroId !== 'function') return null;
  const era = window.buscarPeriodoPorLivroId(abrevLivro.toLowerCase() + capitulo);
  if (!era || !era.livros) return null;
  const idx = era.livros.indexOf(abrevLivro);
  if (idx === -1) return null;
  const vizinhoAbrev = direcao === 'antes' ? era.livros[idx - 1] : era.livros[idx + 1];
  if (!vizinhoAbrev) return null;
  const vizinhoNome = abrevParaNomeCompletoAuto[vizinhoAbrev];
  if (!vizinhoNome) return null;
  const doVizinho = Object.values(window.titulosBiblicos).filter(t => t.livro === vizinhoNome)
    .sort((a, b) => (a.capitulo - b.capitulo) || (a.vIni - b.vIni));
  if (!doVizinho.length) return null;
  return direcao === 'antes' ? doVizinho[doVizinho.length - 1] : doVizinho[0];
}

// ============================================
// fino = window.dadosLicaoV3.contextosReferencias[id]
// (vem da própria lição, não de biblioteca nenhuma)
// ============================================
function montarContextoCompleto(fino) {  if (!fino) return null;

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
  const m = fino.referencia.match(/(\d+)[.:](\d+)/);
  const capitulo = m ? parseInt(m[1], 10) : null;
  const versiculo = m ? parseInt(m[2], 10) : null;
  const nomeLivroCompleto = (typeof window !== 'undefined' && window.titulosBiblicos)
    ? (Object.values(window.titulosBiblicos).find(t => extrairAbreviacaoLivro(t.referencia) === livroAbrev) || {}).livro
    : null;
  const tituloSecaoDurante = (capitulo && versiculo && nomeLivroCompleto)
    ? buscarTituloDurante(nomeLivroCompleto, capitulo, versiculo) : null;
  const tituloSecaoAntes = (capitulo && versiculo && nomeLivroCompleto)
    ? buscarTituloGlobal(nomeLivroCompleto, livroAbrev, capitulo, versiculo, 'antes') : null;
  const tituloSecaoDepois = (capitulo && versiculo && nomeLivroCompleto)
    ? buscarTituloGlobal(nomeLivroCompleto, livroAbrev, capitulo, versiculo, 'depois') : null;

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
      antes: antes ? { titulo: antes.titulo, referencia: antes.referencia, personagens: antes.personagens || [] } : null,
      durante: durante ? { titulo: durante.titulo, referencia: durante.referencia, personagens: durante.personagens || [] } : null,
      depois: depois ? { titulo: depois.titulo, referencia: depois.referencia, personagens: depois.personagens || [] } : null
    },
    secaoEspecifica: {
      antes: tituloSecaoAntes ? { titulo: tituloSecaoAntes.titulo, referencia: tituloSecaoAntes.referencia } : null,
      durante: tituloSecaoDurante ? { titulo: tituloSecaoDurante.titulo, referencia: tituloSecaoDurante.referencia } : null,
      depois: tituloSecaoDepois ? { titulo: tituloSecaoDepois.titulo, referencia: tituloSecaoDepois.referencia } : null
    },
    tags: fino.tags,
    assuntos: fino.assuntos
  };
}

// ============================================
// 🔮 MODO AUTOMÁTICO — quando a lição NÃO tem essa referência
// cadastrada em contextosReferencias. Deriva tudo direto das
// bibliotecas segmentadas, sem precisar de curadoria manual:
//   - era: via buscarPeriodoPorLivroId (já existe em periodos-biblicos.js)
//   - antes/durante/depois: via ordem dos eventos do mesmo livro em
//     eventos-biblicos.js (os IDs seguem o padrão "abrevCapitulo",
//     ex: jz1, jz2, jz4...), cruzando pro livro vizinho da era quando
//     a referência está na borda do livro
//   - data estimada: via cronologia-biblica.js
// Fica marcado com autoInferido:true pra tela sinalizar com 🔮.
// ============================================
function extrairLivroCapitulo(referencia) {
  const m = referencia.match(/^(\d?\s?[A-Za-zÀ-ÿ]+)\s*(\d+)/);
  if (!m) return null;
  return { abrev: m[1].replace(/\s/g, ''), capitulo: parseInt(m[2], 10) };
}

// As bibliotecas (eventos-biblicos.js, periodos-biblicos.js) usam siglas
// SEM acento (ex: "Ex", "Is"), mas a referência digitada na lição pode vir
// COM acento (ex: "Êx 15.20"). Normaliza pra bater — exceto "Jó", que
// precisa manter o acento pra não ser confundido com "Jo" (João).
function normalizarAbrevLivro(abrev) {
  if (abrev === 'Jó') return abrev;
  return abrev.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function buscarEventosDoLivro(abrevLivro) {
  if (typeof window === 'undefined' || !window.eventosBiblicos) return [];
  const prefixo = abrevLivro.toLowerCase();
  return window.eventosBiblicos
    .filter(e => e.id.toLowerCase().startsWith(prefixo) && /^\d+$/.test(e.id.slice(prefixo.length)))
    .map(e => ({ ...e, capitulo: parseInt(e.id.slice(prefixo.length), 10) }))
    .sort((a, b) => a.capitulo - b.capitulo);
}

// Quando a referência está na primeira/última "borda" do livro, busca
// o evento vizinho no livro anterior/seguinte, seguindo a ORDEM DE
// LIVROS DENTRO DA ERA (periodos-biblicos.js já lista isso).
function buscarEventoLivroVizinho(abrevLivro, direcao) {
  if (typeof window === 'undefined' || !window.buscarPeriodoPorLivroId) return null;
  const era = window.buscarPeriodoPorLivroId(abrevLivro.toLowerCase() + '1');
  if (!era || !era.livros) return null;
  const idx = era.livros.indexOf(abrevLivro);
  if (idx === -1) return null;
  const vizinho = direcao === 'antes' ? era.livros[idx - 1] : era.livros[idx + 1];
  if (!vizinho) return null; // borda da era — não cruza pra era seguinte (fica em aberto por ora)
  const eventos = buscarEventosDoLivro(vizinho);
  if (!eventos.length) return null;
  return direcao === 'antes' ? eventos[eventos.length - 1] : eventos[0];
}

// Bibliotecas usam sigla sem acento no que salvam, mas a referência
// digitada na lição pode vir com acento. Tabela de tradução sigla → nome
// completo (necessária pra localizar títulos ARC em titulos-biblicos.js,
// que guarda o nome do livro por extenso, ex: "Jz" → "Juízes").
const abrevParaNomeCompletoAuto = {
  "Gn": "Gênesis", "Ex": "Êxodo", "Lv": "Levítico", "Nm": "Números", "Dt": "Deuteronômio",
  "Js": "Josué", "Jz": "Juízes", "Rt": "Rute", "1Sm": "1 Samuel", "2Sm": "2 Samuel",
  "1Rs": "1 Reis", "2Rs": "2 Reis", "1Cr": "1 Crônicas", "2Cr": "2 Crônicas",
  "Ed": "Esdras", "Ne": "Neemias", "Et": "Ester",
  "Jó": "Jó", "Sl": "Salmos", "Pv": "Provérbios", "Ec": "Eclesiastes", "Ct": "Cântico",
  "Is": "Isaías", "Jr": "Jeremias", "Lm": "Lamentações", "Ez": "Ezequiel", "Dn": "Daniel",
  "Os": "Oseias", "Jl": "Joel", "Am": "Amós", "Ob": "Obadias", "Jn": "Jonas",
  "Mq": "Miqueias", "Na": "Naum", "Hc": "Habacuque", "Sf": "Sofonias", "Ag": "Ageu",
  "Zc": "Zacarias", "Ml": "Malaquias",
  "Mt": "Mateus", "Mc": "Marcos", "Lc": "Lucas", "Jo": "João", "At": "Atos",
  "Rm": "Romanos", "1Co": "1 Coríntios", "2Co": "2 Coríntios", "Gl": "Gálatas",
  "Ef": "Efésios", "Fp": "Filipenses", "Cl": "Colossenses",
  "1Ts": "1 Tessalonicenses", "2Ts": "2 Tessalonicenses",
  "1Tm": "1 Timóteo", "2Tm": "2 Timóteo", "Tt": "Tito", "Fm": "Filemom",
  "Hb": "Hebreus", "Tg": "Tiago", "1Pe": "1 Pedro", "2Pe": "2 Pedro",
  "1Jo": "1 João", "2Jo": "2 João", "3Jo": "3 João", "Jd": "Judas", "Ap": "Apocalipse"
};

function inferirContextoAutomatico(id, referencia) {
  if (!referencia) return null;
  const parsed = extrairLivroCapitulo(referencia);
  if (!parsed) return null;
  const abrevOriginal = parsed.abrev;
  const abrev = normalizarAbrevLivro(abrevOriginal);
  const { capitulo } = parsed;

  const era = (typeof window !== 'undefined' && window.buscarPeriodoPorLivroId)
    ? window.buscarPeriodoPorLivroId(abrev.toLowerCase() + capitulo) : null;

  const eventosLivro = buscarEventosDoLivro(abrev);
  const durante = eventosLivro.find(e => e.capitulo === capitulo) || null;
  let antesEv = [...eventosLivro].reverse().find(e => e.capitulo < capitulo) || null;
  let depoisEv = eventosLivro.find(e => e.capitulo > capitulo) || null;
  if (!antesEv) antesEv = buscarEventoLivroVizinho(abrev, 'antes');
  if (!depoisEv) depoisEv = buscarEventoLivroVizinho(abrev, 'depois');

  const periodosSecularesMatch = (era && typeof window !== 'undefined' && window.buscarPeriodoSecularPorPeriodoBiblico)
    ? window.buscarPeriodoSecularPorPeriodoBiblico(era.nome) : [];
  const periodoSecular = escolherMelhorPeriodoSecular(periodosSecularesMatch, era ? era.inicio : null);
  const humanidade = era ? buscarHumanidadePorNomeEra(era.nome) : null;
  const classificacao = (typeof window !== 'undefined' && window.getClassificacaoLivro)
    ? window.getClassificacaoLivro(abrev) : '';

  const posicaoLivro = (typeof window !== 'undefined' && window.cronologiaBiblica && window.cronologiaBiblica.livros[abrev])
    ? window.cronologiaBiblica.livros[abrev].posicaoNum : null;
  const dataEstimada = (posicaoLivro !== null && window.cronologiaBiblica)
    ? window.cronologiaBiblica.numeroParaAno(posicaoLivro) : (era ? era.inicio : '');

  // Seção específica (ARC) — mesma lógica do modo manual, só que
  // o nome completo do livro vem direto da tabela de tradução acima
  // (mais confiável que casar sigla dentro do texto da referência).
  const mVerso = referencia.match(/(\d+)[.:](\d+)/);
  const versiculoRef = mVerso ? parseInt(mVerso[2], 10) : null;
  const nomeLivroCompleto = abrevParaNomeCompletoAuto[abrevOriginal] || abrevParaNomeCompletoAuto[abrev] || null;
  const tituloSecaoDurante = (nomeLivroCompleto && capitulo && versiculoRef)
    ? buscarTituloDurante(nomeLivroCompleto, capitulo, versiculoRef) : null;
  const tituloSecaoAntes = (nomeLivroCompleto && capitulo && versiculoRef)
    ? buscarTituloGlobal(nomeLivroCompleto, abrev, capitulo, versiculoRef, 'antes') : null;
  const tituloSecaoDepois = (nomeLivroCompleto && capitulo && versiculoRef)
    ? buscarTituloGlobal(nomeLivroCompleto, abrev, capitulo, versiculoRef, 'depois') : null;

  return {
    id, referencia,
    data: dataEstimada, local: '', lider: '',
    era: era?.nome || '', eraDatas: era ? `${era.inicio} - ${era.fim}` : '',
    classificacao,
    periodoSecular: periodoSecular?.nome || '',
    periodoSecularDatas: periodoSecular ? `${periodoSecular.inicio} - ${periodoSecular.fim}` : '',
    periodoHumanidade: humanidade?.nome || '',
    periodoHumanidadeDatas: humanidade ? `${humanidade.inicio} - ${humanidade.fim}` : '',
    panorama: {
      antes: antesEv ? { titulo: antesEv.titulo, referencia: antesEv.referencia, personagens: antesEv.personagens || [] } : null,
      durante: durante ? { titulo: durante.titulo, referencia: durante.referencia, personagens: durante.personagens || [] } : null,
      depois: depoisEv ? { titulo: depoisEv.titulo, referencia: depoisEv.referencia, personagens: depoisEv.personagens || [] } : null
    },
    secaoEspecifica: {
      antes: tituloSecaoAntes ? { titulo: tituloSecaoAntes.titulo, referencia: tituloSecaoAntes.referencia } : null,
      durante: tituloSecaoDurante ? { titulo: tituloSecaoDurante.titulo, referencia: tituloSecaoDurante.referencia } : null,
      depois: tituloSecaoDepois ? { titulo: tituloSecaoDepois.titulo, referencia: tituloSecaoDepois.referencia } : null
    },
    tags: '', assuntos: [],
    autoInferido: true
  };
}

if (typeof window !== "undefined") {
  window.montarContextoCompleto = montarContextoCompleto;
  window.inferirContextoAutomatico = inferirContextoAutomatico;
}

if (typeof module !== "undefined") {
  module.exports = { montarContextoCompleto };
}

console.log("🧩 motor-contextos.js carregado (v3 — sem tabela intermediária)!");

