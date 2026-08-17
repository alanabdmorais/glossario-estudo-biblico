// ============================================
// 🎬 FILMES BÍBLICOS
// ============================================

const FILMES_BIBLICOS = [
    // ==========================================
    // GÊNESIS
    // ==========================================
    {
        id: "filme-genesis-1966",
        titulo: "The Bible: In the Beginning...",
        diretor: "John Huston",
        ano: 1966,
        descricao: "Seis episódios do Gênesis (Criação, Adão e Eva, Caim e Abel, Noé, Torre de Babel e Abraão)",
        refs: ["gn1", "gn2", "gn3", "gn4", "gn6", "gn7", "gn8", "gn9", "gn11", "gn12", "gn15", "gn17", "gn22"],
        links: [
            {
                plataforma: "YouTube",
                url: "https://www.youtube.com/watch?v=XXXXXXXXXXX",
                idioma: "Inglês"
            }
        ]
    },
    {
        id: "filme-noah-2014",
        titulo: "Noé",
        diretor: "Darren Aronofsky",
        ano: 2014,
        descricao: "Noé é escolhido por Deus para uma missão antes do dilúvio",
        refs: ["gn6", "gn7", "gn8", "gn9"],
        links: [
            {
                plataforma: "Netflix",
                url: "https://www.netflix.com/title/XXXXXXXXXX",
                idioma: "Português"
            }
        ],
        observacao: "Filme com Russell Crowe"
    },
    {
        id: "filme-abraao-1993",
        titulo: "Abraham (1993) - Minissérie",
        diretor: "Joseph Sargent",
        ano: 1993,
        descricao: "A história de Abraão, desde sua fé até as provações",
        refs: ["gn12", "gn14", "gn15", "gn17", "gn18", "gn20", "gn22"],
        links: [
            {
                plataforma: "YouTube",
                url: "https://www.youtube.com/watch?v=XXXXXXXXXXX",
                idioma: "Inglês"
            }
        ],
        observacao: "Minissérie em 2 partes"
    },
    {
        id: "filme-jaco-1994",
        titulo: "Jacob (1994) - Minissérie",
        diretor: "Peter Hall",
        ano: 1994,
        descricao: "A história de Jacó e seu conflito com Esaú",
        refs: ["gn25", "gn26", "gn27", "gn28", "gn29", "gn30", "gn31", "gn32", "gn33", "gn35"],
        links: [
            {
                plataforma: "YouTube",
                url: "https://www.youtube.com/watch?v=XXXXXXXXXXX",
                idioma: "Inglês"
            }
        ],
        observacao: "Minissérie em 2 partes"
    },
    {
        id: "filme-jose-1995",
        titulo: "Joseph (1995) - Minissérie",
        diretor: "Roger Young",
        ano: 1995,
        descricao: "A história de José e seus irmãos",
        refs: ["gn36", "gn37", "gn39", "gn40", "gn41", "gn42", "gn43", "gn44", "gn45", "gn46", "gn47", "gn50"],
        links: [
            {
                plataforma: "YouTube",
                url: "https://www.youtube.com/watch?v=XXXXXXXXXXX",
                idioma: "Inglês"
            }
        ],
        observacao: "Minissérie em 2 partes"
    },

    // ==========================================
    // ÊXODO
    // ==========================================
    {
        id: "filme-os-dez-mandamentos-1956",
        titulo: "Os Dez Mandamentos",
        diretor: "Cecil B. DeMille",
        ano: 1956,
        descricao: "A vida de Moisés, desde o Egito até a Terra Prometida",
        refs: ["ex1", "ex2", "ex3", "ex4", "ex5", "ex6", "ex7", "ex11", "ex12", "ex14", "ex15", "ex16", "ex17", "ex19", "ex20", "ex32"],
        links: [
            {
                plataforma: "YouTube",
                url: "https://www.youtube.com/watch?v=XXXXXXXXXXX",
                idioma: "Inglês"
            },
            {
                plataforma: "Amazon Prime",
                url: "https://www.amazon.com/dp/XXXXXXXXXX",
                idioma: "Inglês"
            }
        ],
        observacao: "Clássico de 1956 com Charlton Heston"
    },
    {
        id: "filme-o-principe-do-egito-1998",
        titulo: "O Príncipe do Egito",
        diretor: "Brenda Chapman, Steve Hickner, Simon Wells",
        ano: 1998,
        descricao: "Animação sobre a vida de Moisés",
        refs: ["ex1", "ex2", "ex3", "ex4", "ex5", "ex6", "ex7", "ex11", "ex12", "ex14"],
        links: [
            {
                plataforma: "Netflix",
                url: "https://www.netflix.com/title/XXXXXXXXXX",
                idioma: "Português"
            },
            {
                plataforma: "YouTube",
                url: "https://www.youtube.com/watch?v=XXXXXXXXXXX",
                idioma: "Português"
            }
        ],
        observacao: "Animação da DreamWorks"
    },

    // ==========================================
    // JUÍZES
    // ==========================================
    {
        id: "filme-sansao-e-dalila-1949",
        titulo: "Sansão e Dalila",
        diretor: "Cecil B. DeMille",
        ano: 1949,
        descricao: "A história de Sansão e sua queda por Dalila",
        refs: ["jz13", "jz14", "jz15", "jz16"],
        links: [
            {
                plataforma: "YouTube",
                url: "https://www.youtube.com/watch?v=XXXXXXXXXXX",
                idioma: "Inglês"
            }
        ],
        observacao: "Clássico de 1949"
    },

    // ==========================================
    // REIS E PROFECIAS
    // ==========================================
    {
        id: "filme-davi-e-bate-seba-1951",
        titulo: "Davi e Bate-Seba",
        diretor: "Henry King",
        ano: 1951,
        descricao: "A história do Rei Davi e seu pecado com Bate-Seba",
        refs: ["2sm11", "2sm12"],
        links: [
            {
                plataforma: "YouTube",
                url: "https://www.youtube.com/watch?v=XXXXXXXXXXX",
                idioma: "Inglês"
            }
        ],
        observacao: "Filme com Gregory Peck"
    },
    {
        id: "filme-salomao-1997",
        titulo: "Salomão (1997) - Minissérie",
        diretor: "Roger Young",
        ano: 1997,
        descricao: "A história do Rei Salomão e sua sabedoria",
        refs: ["1rs1", "1rs2", "1rs3", "1rs4", "1rs5", "1rs6", "1rs7", "1rs8", "1rs9", "1rs10", "1rs11"],
        links: [
            {
                plataforma: "YouTube",
                url: "https://www.youtube.com/watch?v=XXXXXXXXXXX",
                idioma: "Inglês"
            }
        ],
        observacao: "Minissérie em 2 partes"
    },

    // ==========================================
    // NOVO TESTAMENTO - VIDA DE CRISTO
    // ==========================================
    {
        id: "filme-jesus-de-nazare-1977",
        titulo: "Jesus de Nazaré (1977) - Minissérie",
        diretor: "Franco Zeffirelli",
        ano: 1977,
        descricao: "Minissérie clássica sobre a vida de Jesus",
        refs: ["mt1", "mt2", "mt3", "mt4", "mt5", "mt6", "mt7", "mt8", "mt9", "mt10", "mt11", "mt12", "mt13", "mt14", "mt15", "mt16", "mt17", "mt18", "mt19", "mt20", "mt21", "mt22", "mt23", "mt24", "mt25", "mt26", "mt27", "mt28", "lc1", "lc2", "lc3", "lc4", "lc5", "lc6", "lc7", "lc8", "lc9", "lc10", "lc11", "lc12", "lc13", "lc14", "lc15", "lc16", "lc17", "lc18", "lc19", "lc20", "lc21", "lc22", "lc23", "lc24", "jo1", "jo2", "jo3", "jo4", "jo5", "jo6", "jo7", "jo8", "jo9", "jo10", "jo11", "jo12", "jo13", "jo14", "jo15", "jo16", "jo17", "jo18", "jo19", "jo20", "jo21"],
        links: [
            {
                plataforma: "YouTube",
                url: "https://www.youtube.com/watch?v=XXXXXXXXXXX",
                idioma: "Português"
            },
            {
                plataforma: "Amazon Prime",
                url: "https://www.amazon.com/dp/XXXXXXXXXX",
                idioma: "Inglês"
            }
        ],
        observacao: "Minissérie em 2 partes com Robert Powell"
    },
    {
        id: "filme-a-paixao-de-cristo-2004",
        titulo: "A Paixão de Cristo",
        diretor: "Mel Gibson",
        ano: 2004,
        descricao: "As últimas 12 horas da vida de Jesus, em aramaico e latim",
        refs: ["mt26", "mt27", "mc14", "mc15", "lc22", "lc23", "jo18", "jo19"],
        links: [
            {
                plataforma: "Netflix",
                url: "https://www.netflix.com/title/XXXXXXXXXX",
                idioma: "Aramaico"
            },
            {
                plataforma: "YouTube",
                url: "https://www.youtube.com/watch?v=XXXXXXXXXXX",
                idioma: "Aramaico"
            },
            {
                plataforma: "Amazon Prime",
                url: "https://www.amazon.com/dp/XXXXXXXXXX",
                idioma: "Aramaico"
            }
        ],
        observacao: "Filme com Jim Caviezel"
    },

    // ==========================================
    // NOVO TESTAMENTO - IGREJA PRIMITIVA
    // ==========================================
    {
        id: "filme-paulo-o-apostolo-1999",
        titulo: "Paulo, o Apóstolo (1999) - Minissérie",
        diretor: "Bob Misiorowski",
        ano: 1999,
        descricao: "A vida do apóstolo Paulo, desde sua conversão até seu ministério",
        refs: ["at9", "at13", "at14", "at15", "at16", "at17", "at18", "at19", "at20", "at21", "at22", "at23", "at24", "at25", "at26", "at27", "at28", "rm1", "rm2", "rm3", "rm4", "rm5", "rm6", "rm7", "rm8", "rm9", "rm10", "rm11", "rm12", "rm13", "rm14", "rm15", "rm16", "1co1", "1co2", "1co3", "1co4", "1co5", "1co6", "1co7", "1co8", "1co9", "1co10", "1co11", "1co12", "1co13", "1co14", "1co15", "1co16", "gl1", "gl2", "gl3", "gl4", "gl5", "gl6"],
        links: [
            {
                plataforma: "YouTube",
                url: "https://www.youtube.com/watch?v=XXXXXXXXXXX",
                idioma: "Inglês"
            }
        ],
        observacao: "Minissérie com Johannes Brandrup"
    },
    {
        id: "filme-paulo-apostolo-de-cristo-2018",
        titulo: "Paulo, Apóstolo de Cristo",
        diretor: "Andrew Hyatt",
        ano: 2018,
        descricao: "A história de Paulo e Lucas em Roma, enfrentando o imperador Nero",
        refs: ["at23", "at24", "at25", "at26", "at27", "at28", "rm1", "rm2", "rm3", "rm4", "rm5", "rm6", "rm7", "rm8", "rm9", "rm10", "rm11", "rm12", "rm13", "rm14", "rm15", "rm16", "2tm1", "2tm2", "2tm3", "2tm4"],
        links: [
            {
                plataforma: "Netflix",
                url: "https://www.netflix.com/title/XXXXXXXXXX",
                idioma: "Português"
            },
            {
                plataforma: "YouTube",
                url: "https://www.youtube.com/watch?v=XXXXXXXXXXX",
                idioma: "Inglês"
            },
            {
                plataforma: "Amazon Prime",
                url: "https://www.amazon.com/dp/XXXXXXXXXX",
                idioma: "Inglês"
            }
        ],
        observacao: "Filme com James Faulkner"
    },

    // ==========================================
    // ESTER
    // ==========================================
    {
        id: "filme-esther-1999",
        titulo: "A História de Ester",
        diretor: "Raffaele Mertes",
        ano: 1999,
        descricao: "A jovem Ester se torna rainha e salva seu povo",
        refs: ["et1", "et2", "et3", "et4", "et5", "et6", "et7", "et8", "et9", "et10"],
        links: [
            {
                plataforma: "YouTube",
                url: "https://www.youtube.com/watch?v=XXXXXXXXXXX",
                idioma: "Inglês"
            }
        ],
        observacao: "Minissérie"
    },
];

// ============================================
// FUNÇÃO PARA BUSCAR FILMES POR REFERÊNCIA
// ============================================

function buscarFilmesPorReferencia(referenciaId) {
    if (!referenciaId) return [];
    
    const filmesEncontrados = [];
    const idsVistos = new Set();
    
    // Extrai o livro+capítulo do ID da referência
    // Ex: "jz9.6" → "jz9"
    const capituloId = referenciaId.split('.')[0].toLowerCase();
    
    // Extrai apenas o livro (sem o número do capítulo)
    // Ex: "jz9" → "jz"
    const livroId = capituloId.replace(/[0-9]/g, '').toLowerCase();
    
    console.log(`🔍 Buscando filmes para: ${referenciaId}`);
    console.log(`   📌 capítulo extraído: ${capituloId}, livro extraído: ${livroId}`);
    console.log(`   📚 Total de filmes na biblioteca: ${FILMES_BIBLICOS.length}`);
    
    FILMES_BIBLICOS.forEach(filme => {
        // Verifica se alguma referência do filme corresponde
        const temMatch = filme.refs.some(ref => {
            const refNorm = ref.trim().toLowerCase();
            
            // 1. Match exato com o ID completo (ex: "jz9.6")
            if (refNorm === referenciaId.toLowerCase()) {
                console.log(`   ✅ Match exato: ${ref} === ${referenciaId}`);
                return true;
            }
            
            // 2. Match com o capítulo (ex: "jz9" vs "jz9.6")
            if (refNorm === capituloId) {
                console.log(`   ✅ Match por capítulo: ${ref} === ${capituloId}`);
                return true;
            }
            
            // 3. O capítulo da referência contém a ref do filme
            if (capituloId.includes(refNorm)) {
                console.log(`   ✅ Match por inclusão: ${capituloId} contém ${refNorm}`);
                return true;
            }
            
            // 4. A ref do filme contém o capítulo
            if (refNorm.includes(capituloId)) {
                console.log(`   ✅ Match por inclusão reversa: ${refNorm} contém ${capituloId}`);
                return true;
            }
            
            return false;
        });
        
        if (temMatch && !idsVistos.has(filme.id)) {
            idsVistos.add(filme.id);
            filmesEncontrados.push(filme);
            console.log(`   🎬 Filme encontrado: ${filme.titulo}`);
        }
    });
    
    console.log(`📦 Total de filmes encontrados: ${filmesEncontrados.length}`);
    return filmesEncontrados;
}

// ============================================
// EXPORTAÇÃO
// ============================================

if (typeof window !== "undefined") {
    window.FILMES_BIBLICOS = FILMES_BIBLICOS;
    window.buscarFilmesPorReferencia = buscarFilmesPorReferencia;
}

console.log("🎬 filmes-biblicos.js carregado com sucesso!");
console.log("📊 Total de filmes: " + FILMES_BIBLICOS.length);