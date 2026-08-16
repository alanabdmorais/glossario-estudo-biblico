// ============================================
// 📊 MOTOR DA PLANILHA CRONOLÓGICA
// Não guarda evento nem título nenhum. Só junta, na hora de
// exibir, o que já existe em eventos-biblicos.js (🌟) e
// titulos-biblicos.js (📑), agrupado por era (periodos-biblicos.js).
//
// A única coisa "nova" aqui é uma tabela de tradução sigla → nome
// completo (ex: "Jz" → "Juízes"), necessária porque eventos-biblicos.js
// usa siglas nos IDs e titulos-biblicos.js usa o nome por extenso no
// campo "livro". Isso é só uma ponte entre as duas, não é conteúdo.
// ============================================

const abrevParaNomeCompleto = {
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

function eventosDoLivro(abrev) {
  if (typeof window === 'undefined' || !window.eventosBiblicos) return [];
  const prefixo = abrev.toLowerCase();
  return window.eventosBiblicos
    .filter(e => e.id.toLowerCase().startsWith(prefixo) && /^\d+$/.test(e.id.slice(prefixo.length)))
    .map(e => ({
      emoji: '🌟', tipo: 'evento',
      referencia: e.referencia, titulo: e.titulo,
      personagens: e.personagens || [],
      capituloOrdem: parseInt(e.id.slice(prefixo.length), 10),
      versiculoOrdem: 0
    }));
}

function titulosDoLivro(abrev) {
  if (typeof window === 'undefined' || !window.titulosBiblicos) return [];
  const nomeCompleto = abrevParaNomeCompleto[abrev];
  if (!nomeCompleto) return [];
  return Object.values(window.titulosBiblicos)
    .filter(t => t.livro === nomeCompleto)
    .map(t => ({
      emoji: '📑', tipo: 'titulo',
      referencia: t.referencia, titulo: t.titulo,
      personagens: [], // titulos-biblicos.js não tem esse campo — fica em branco até você preencher
      capituloOrdem: t.capitulo,
      versiculoOrdem: t.vIni || 0
    }));
}

// ============================================
// Monta a planilha inteira, agrupada por era (10 cards),
// cada uma com as linhas de evento + título já intercaladas
// na ordem de leitura (livro → capítulo → versículo).
// ============================================
function gerarPlanilhaCronologica() {
  if (typeof window === 'undefined' || !window.periodosBiblicos) return [];

  const eras = (window.cronologiaBiblica && window.cronologiaBiblica.eras.length)
    ? window.cronologiaBiblica.eras
    : Object.values(window.periodosBiblicos);

  return eras.map(era => {
    const humanidade = (typeof window.periodosHumanidade !== 'undefined')
      ? Object.values(window.periodosHumanidade).find(h => h.periodosBiblicos && h.periodosBiblicos.includes(era.nome))
      : null;
    const secular = (typeof window.buscarPeriodoSecularPorPeriodoBiblico === 'function')
      ? window.buscarPeriodoSecularPorPeriodoBiblico(era.nome) : [];

    const linhas = [];
    (era.livros || []).forEach(abrev => {
      const doLivro = [...eventosDoLivro(abrev), ...titulosDoLivro(abrev)]
        .sort((a, b) => (a.capituloOrdem - b.capituloOrdem) || (a.versiculoOrdem - b.versiculoOrdem));
      doLivro.forEach(l => linhas.push({ ...l, livro: abrev }));
    });

    return {
      era: era.nome, eraDatas: `${era.inicio} - ${era.fim}`,
      humanidade: humanidade ? humanidade.nome : '',
      secular: secular.map(s => s.nome).join(', '),
      livros: era.livros || [],
      linhas
    };
  });
}

// ============================================
// Versão "básica" — só os eventos do arco (🌟), sem os títulos ARC.
// Mais leve (≈511 linhas em vez de ≈3.686), pensada pra ficar
// embutida direto nas páginas de lição.
// ============================================
function gerarPlanilhaEventosBasica() {
  if (typeof window === 'undefined' || !window.periodosBiblicos) return [];

  const eras = (window.cronologiaBiblica && window.cronologiaBiblica.eras.length)
    ? window.cronologiaBiblica.eras
    : Object.values(window.periodosBiblicos);

  return eras.map(era => {
    const linhas = [];
    (era.livros || []).forEach(abrev => {
      eventosDoLivro(abrev)
        .sort((a, b) => a.capituloOrdem - b.capituloOrdem)
        .forEach(l => linhas.push({ ...l, livro: abrev }));
    });
    return {
      era: era.nome, eraDatas: `${era.inicio} - ${era.fim}`,
      livros: era.livros || [],
      linhas
    };
  });
}

if (typeof window !== 'undefined') {
  window.gerarPlanilhaCronologica = gerarPlanilhaCronologica;
  window.gerarPlanilhaEventosBasica = gerarPlanilhaEventosBasica;
}

if (typeof module !== 'undefined') {
  module.exports = { gerarPlanilhaCronologica, gerarPlanilhaEventosBasica, abrevParaNomeCompleto };
}

console.log("📊 planilha-cronologica.js carregada!");
