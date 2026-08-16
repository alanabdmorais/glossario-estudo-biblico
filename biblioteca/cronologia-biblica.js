// ============================================
// 🔮 CRONOLOGIA BÍBLICA — v4
// Não guarda nenhuma data nova "na mão". Calcula tudo em cima
// do que já existe em periodos-biblicos.js (inicio/fim de cada
// era + a lista de livros de cada era).
//
// Hierarquia: ERA → LIVRO → EVENTO/REFERÊNCIA
//   - Era:   posição real, vem de periodos-biblicos.js (inicio/fim)
//   - Livro: posição ESTIMADA — distribuída em partes iguais dentro
//            do intervalo numérico da era a que pertence
//   - Evento/Referência: usa o campo "data" que já existe em
//            contextosReferencias (dados-licaoN-v3.js) quando existir;
//            senão, cai na posição estimada do livro
//
// Tudo que é calculado (não digitado por livro/fonte) é marcado
// com estimado:true e pode ser sinalizado na tela com 🔮.
// ============================================

// Converte "~1200-1100 a.C." ou "~30 d.C." num número de eixo único
// (a.C. negativo, d.C. positivo), pegando o PONTO MÉDIO do intervalo
// quando o texto trouxer uma faixa.
function anoParaNumero(texto) {
  if (!texto) return null;
  const ehDC = /d\.C\./.test(texto);
  const nums = (texto.match(/\d+/g) || []).map(Number);
  if (nums.length === 0) return null;
  const sinal = ehDC ? 1 : -1;
  const anos = nums.map(n => n * sinal);
  return (Math.min(...anos) + Math.max(...anos)) / 2;
}

function numeroParaAno(num) {
  if (num === null || num === undefined) return '';
  const abs = Math.round(Math.abs(num));
  return num < 0 ? `~${abs} a.C.` : `~${abs} d.C.`;
}

// ============================================
// MONTA A CRONOLOGIA A PARTIR DE periodos-biblicos.js
// ============================================
function montarCronologia() {
  if (typeof window === 'undefined' || !window.periodosBiblicos) return { eras: [], livros: {} };

  const eras = [];
  const livros = {}; // abreviação -> { livro, eraId, posicaoNum, estimado }

  Object.values(window.periodosBiblicos).forEach(era => {
    const inicioNum = anoParaNumero(era.inicio);
    const fimNum = anoParaNumero(era.fim);
    if (inicioNum === null || fimNum === null) return;

    eras.push({
      id: era.id,
      nome: era.nome,
      inicio: era.inicio,
      fim: era.fim,
      inicioNum,
      fimNum,
      livros: era.livros || [],
      estimado: false // era vem direto de periodos-biblicos.js, não é calculada
    });

    const listaLivros = era.livros || [];
    const passo = (fimNum - inicioNum) / (listaLivros.length + 1);
    listaLivros.forEach((abrev, i) => {
      // só a primeira ocorrência do livro fixa a posição (alguns livros
      // aparecem em mais de uma era, ex. Rs/Cr no reino dividido)
      if (livros[abrev]) return;
      livros[abrev] = {
        livro: abrev,
        eraId: era.id,
        posicaoNum: inicioNum + passo * (i + 1),
        estimado: true
      };
    });
  });

  eras.sort((a, b) => a.inicioNum - b.inicioNum);
  return { eras, livros };
}

// Pega a posição numérica de uma referência bíblica (ex: "Jz 17.6").
// 1) Se a própria lição já tem contextosReferencias[id].data → usa (real, sem 🔮).
// 2) Senão, cai na posição estimada do livro (🔮).
function getPosicaoReferencia(referenciaOuAbrev, contextosReferencias, id) {
  const cron = window.cronologiaBiblica;
  if (!cron) return null;

  if (id && contextosReferencias && contextosReferencias[id] && contextosReferencias[id].data) {
    const num = anoParaNumero(contextosReferencias[id].data);
    if (num !== null) return { posicaoNum: num, estimado: false };
  }

  const m = referenciaOuAbrev.match(/^(\d?\s?[A-Za-zÀ-ÿ]+)/);
  const abrev = m ? m[1].replace(/\s/g, '') : referenciaOuAbrev;
  const livro = cron.livros[abrev];
  return livro ? { posicaoNum: livro.posicaoNum, estimado: true } : null;
}

if (typeof window !== 'undefined') {
  const { eras, livros } = montarCronologia();
  window.cronologiaBiblica = {
    eras,
    livros,
    anoParaNumero,
    numeroParaAno,
    getPosicaoReferencia
  };
}

if (typeof module !== 'undefined') {
  module.exports = { anoParaNumero, numeroParaAno, montarCronologia };
}

console.log("🔮 cronologia-biblica.js carregada (v4 — calculada a partir das eras)!");
console.log("📊 Eras: " + (window.cronologiaBiblica ? window.cronologiaBiblica.eras.length : 0) +
            " | Livros posicionados: " + (window.cronologiaBiblica ? Object.keys(window.cronologiaBiblica.livros).length : 0));
