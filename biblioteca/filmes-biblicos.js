// ============================================
// 🎬 FILMES BÍBLICOS
// ============================================

const FILMES_BIBLICOS = [
    {
        id: "filme-teste-gideao",
        titulo: "🧪 TESTE - Gideão e Abimeleque",
        diretor: "Teste",
        ano: 2024,
        descricao: "🧪 FILME DE TESTE",
        refs: ["jz8", "jz9", "jz9.6", "jz8.22"],
        links: [
            {
                plataforma: "YouTube",
                url: "https://www.youtube.com/watch?v=XXXXXXXXXXX",
                idioma: "Português"
            }
        ]
    }
];

function buscarFilmesPorReferencia(referenciaId) {
    if (!referenciaId) return [];
    
    const filmesEncontrados = [];
    const idsVistos = new Set();
    
    const capituloId = referenciaId.split('.')[0].toLowerCase();
    
    FILMES_BIBLICOS.forEach(filme => {
        const temMatch = filme.refs.some(ref => {
            const refNorm = ref.trim().toLowerCase();
            return refNorm === referenciaId.toLowerCase() || 
                   refNorm === capituloId ||
                   capituloId.includes(refNorm) ||
                   refNorm.includes(capituloId);
        });
        
        if (temMatch && !idsVistos.has(filme.id)) {
            idsVistos.add(filme.id);
            filmesEncontrados.push(filme);
        }
    });
    
    return filmesEncontrados;
}

if (typeof window !== "undefined") {
    window.FILMES_BIBLICOS = FILMES_BIBLICOS;
    window.buscarFilmesPorReferencia = buscarFilmesPorReferencia;
}

console.log("🎬 filmes-biblicos.js carregado com sucesso!");
console.log("📊 Total de filmes: " + FILMES_BIBLICOS.length);