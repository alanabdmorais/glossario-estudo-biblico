// ============================================
// 🔘 CLASSIFICAÇÃO DOS LIVROS BÍBLICOS
// Gênero/categoria literária de cada um dos 66 livros
// (Pentateuco, Históricos, Poéticos, Profetas Maiores/Menores,
//  Evangelhos, Histórico (NT), Cartas Paulinas, Cartas Gerais, Profético (NT))
//
// Papel desta biblioteca dentro do padrão V3:
//   periodos-biblicos.js        -> era bíblica + líder bíblico   (agrupado por ERA)
//   periodos-livros-biblicos.js -> período do livro               (agrupado por ERA/LIVROS)
//   classificacao-livros-biblicos.js -> classificação literária    (agrupado por LIVRO) ← esta aqui
// ============================================

const classificacaoLivrosBiblicos = {
  // ========== PENTATEUCO ==========
  "Gn": "Pentateuco", "Ex": "Pentateuco", "Lv": "Pentateuco", "Nm": "Pentateuco", "Dt": "Pentateuco",

  // ========== HISTÓRICOS (AT) ==========
  "Js": "Históricos", "Jz": "Históricos", "Rt": "Históricos",
  "1Sm": "Históricos", "2Sm": "Históricos", "1Rs": "Históricos", "2Rs": "Históricos",
  "1Cr": "Históricos", "2Cr": "Históricos", "Ed": "Históricos", "Ne": "Históricos", "Et": "Históricos",

  // ========== POÉTICOS ==========
  "Jó": "Poéticos", "Sl": "Poéticos", "Pv": "Poéticos", "Ec": "Poéticos", "Ct": "Poéticos",

  // ========== PROFETAS MAIORES ==========
  "Is": "Profetas Maiores", "Jr": "Profetas Maiores", "Lm": "Profetas Maiores",
  "Ez": "Profetas Maiores", "Dn": "Profetas Maiores",

  // ========== PROFETAS MENORES ==========
  "Os": "Profetas Menores", "Jl": "Profetas Menores", "Am": "Profetas Menores", "Ob": "Profetas Menores",
  "Jn": "Profetas Menores", "Mq": "Profetas Menores", "Na": "Profetas Menores", "Hc": "Profetas Menores",
  "Sf": "Profetas Menores", "Ag": "Profetas Menores", "Zc": "Profetas Menores", "Ml": "Profetas Menores",

  // ========== EVANGELHOS ==========
  "Mt": "Evangelhos", "Mc": "Evangelhos", "Lc": "Evangelhos", "Jo": "Evangelhos",

  // ========== HISTÓRICO (NT) ==========
  "At": "Histórico (NT)",

  // ========== CARTAS PAULINAS ==========
  "Rm": "Cartas Paulinas", "1Co": "Cartas Paulinas", "2Co": "Cartas Paulinas", "Gl": "Cartas Paulinas",
  "Ef": "Cartas Paulinas", "Fp": "Cartas Paulinas", "Cl": "Cartas Paulinas",
  "1Ts": "Cartas Paulinas", "2Ts": "Cartas Paulinas", "1Tm": "Cartas Paulinas", "2Tm": "Cartas Paulinas",
  "Tt": "Cartas Paulinas", "Fm": "Cartas Paulinas",

  // ========== CARTAS GERAIS ==========
  "Hb": "Cartas Gerais", "Tg": "Cartas Gerais", "1Pe": "Cartas Gerais", "2Pe": "Cartas Gerais",
  "1Jo": "Cartas Gerais", "2Jo": "Cartas Gerais", "3Jo": "Cartas Gerais", "Jd": "Cartas Gerais",

  // ========== PROFÉTICO (NT) ==========
  "Ap": "Profético (NT)"
};

// ============================================
// FUNÇÕES AUXILIARES
// ============================================

function getClassificacaoLivro(abreviacaoLivro) {
  return classificacaoLivrosBiblicos[abreviacaoLivro] || "";
}

function listarLivrosPorClassificacao(classificacao) {
  return Object.keys(classificacaoLivrosBiblicos).filter(
    livro => classificacaoLivrosBiblicos[livro] === classificacao
  );
}

function listarClassificacoes() {
  return [...new Set(Object.values(classificacaoLivrosBiblicos))];
}

// ============================================
// EXPORTAÇÃO (browser)
// ============================================

if (typeof window !== "undefined") {
  window.classificacaoLivrosBiblicos = classificacaoLivrosBiblicos;
  window.getClassificacaoLivro = getClassificacaoLivro;
  window.listarLivrosPorClassificacao = listarLivrosPorClassificacao;
  window.listarClassificacoes = listarClassificacoes;
}

// ============================================
// EXPORTAÇÃO (Node)
// ============================================

if (typeof module !== "undefined") {
  module.exports = {
    classificacaoLivrosBiblicos,
    getClassificacaoLivro,
    listarLivrosPorClassificacao,
    listarClassificacoes
  };
}

console.log("🔘 classificacao-livros-biblicos.js carregado!");
console.log("📊 Total de livros classificados: " + Object.keys(classificacaoLivrosBiblicos).length);
