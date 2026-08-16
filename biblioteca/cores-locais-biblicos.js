// ============================================
// CORES PADRÃO PARA LOCAIS BÍBLICOS
// Versão 1.0 - Central de Cores
// Usado pelo mapa da lição e mapa completo
// ============================================

const CORES_LOCAIS = {
    // ===== CIDADES E ASSENTAMENTOS =====
    'cidade': {
        cor: '#DC143C',
        nome: 'crimson',
        texto: '#FFFFFF',
        emoji: '🏙️'
    },
    'aldeia': {
        cor: '#FF6347',
        nome: 'tomato',
        texto: '#000000',
        emoji: '🏘️'
    },
    'porto': {
        cor: '#FF7F50',
        nome: 'coral',
        texto: '#000000',
        emoji: '⚓'
    },
    
    // ===== ACIDENTES GEOGRÁFICOS =====
    'rio': {
        cor: '#1E90FF',
        nome: 'dodgerblue',
        texto: '#FFFFFF',
        emoji: '🌊'
    },
    'mar': {
        cor: '#005B96',
        nome: 'darkblue',
        texto: '#FFFFFF',
        emoji: '🌊'
    },
    'monte': {
        cor: '#8B4513',
        nome: 'saddlebrown',
        texto: '#FFFFFF',
        emoji: '⛰️'
    },
    'vale': {
        cor: '#556B2F',
        nome: 'darkolivegreen',
        texto: '#FFFFFF',
        emoji: '🏞️'
    },
    'deserto': {
        cor: '#D2691E',
        nome: 'chocolate',
        texto: '#FFFFFF',
        emoji: '🏜️'
    },
    'caverna': {
        cor: '#654321',
        nome: 'darkbrown',
        texto: '#FFFFFF',
        emoji: '🕳️'
    },
    'jardim': {
        cor: '#228B22',
        nome: 'forestgreen',
        texto: '#FFFFFF',
        emoji: '🌳'
    },
    'nascente': {
        cor: '#20B2AA',
        nome: 'lightseagreen',
        texto: '#000000',
        emoji: '💧'
    },
    'poço': {
        cor: '#00CED1',
        nome: 'darkturquoise',
        texto: '#000000',
        emoji: '🪣'
    },
    'piscina': {
        cor: '#87CEEB',
        nome: 'skyblue',
        texto: '#000000',
        emoji: '🏊'
    },
    
    // ===== ESTRUTURAS RELIGIOSAS =====
    'templo': {
        cor: '#DAA520',
        nome: 'goldenrod',
        texto: '#000000',
        emoji: '🛕'
    },
    'torre': {
        cor: '#708090',
        nome: 'slategray',
        texto: '#FFFFFF',
        emoji: '🗼'
    },
    'palácio': {
        cor: '#8B008B',
        nome: 'darkmagenta',
        texto: '#FFFFFF',
        emoji: '🏛️'
    },
    'altar': {
        cor: '#8B0000',
        nome: 'darkred',
        texto: '#FFFFFF',
        emoji: '🔥'
    },
    'porta': {
        cor: '#CD853F',
        nome: 'peru',
        texto: '#000000',
        emoji: '🚪'
    },
    
    // ===== REGIÕES E TERRITÓRIOS =====
    'região': {
        cor: '#2E8B57',
        nome: 'seagreen',
        texto: '#FFFFFF',
        emoji: '🗺️'
    },
    'reino': {
        cor: '#4169E1',
        nome: 'royalblue',
        texto: '#FFFFFF',
        emoji: '👑'
    },
    'planície': {
        cor: '#9ACD32',
        nome: 'yellowgreen',
        texto: '#000000',
        emoji: '🌾'
    },
    'acampamento': {
        cor: '#B8860B',
        nome: 'darkgoldenrod',
        texto: '#FFFFFF',
        emoji: '⛺'
    },
    
    // ===== POVOS E GRUPOS =====
    'povo': {
        cor: '#800080',
        nome: 'purple',
        texto: '#FFFFFF',
        emoji: '👥'
    },
    'tribo': {
        cor: '#800000',
        nome: 'maroon',
        texto: '#FFFFFF',
        emoji: '🏹'
    },
    
    // ===== OUTROS =====
    'local': {
        cor: '#808080',
        nome: 'gray',
        texto: '#FFFFFF',
        emoji: '📍'
    },
    'ilha': {
        cor: '#FF4500',
        nome: 'orangered',
        texto: '#FFFFFF',
        emoji: '🏝️'
    }
};

// ============================================
// FUNÇÕES AUXILIARES
// ============================================

function getCorLocal(tipo) {
    const config = CORES_LOCAIS[tipo] || CORES_LOCAIS['local'];
    return config.cor;
}

function getNomeCorLocal(tipo) {
    const config = CORES_LOCAIS[tipo] || CORES_LOCAIS['local'];
    return config.nome;
}

function getCorTextoLocal(tipo) {
    const config = CORES_LOCAIS[tipo] || CORES_LOCAIS['local'];
    return config.texto;
}

function getEmojiLocal(tipo) {
    const config = CORES_LOCAIS[tipo] || CORES_LOCAIS['local'];
    return config.emoji || '📍';
}

function getConfigCorLocal(tipo) {
    return CORES_LOCAIS[tipo] || CORES_LOCAIS['local'];
}

function listarTipos() {
    return Object.keys(CORES_LOCAIS);
}

// ============================================
// EXPORTAÇÃO PARA USO GLOBAL
// ============================================
if (typeof window !== 'undefined') {
    window.CORES_LOCAIS = CORES_LOCAIS;
    window.getCorLocal = getCorLocal;
    window.getNomeCorLocal = getNomeCorLocal;
    window.getCorTextoLocal = getCorTextoLocal;
    window.getEmojiLocal = getEmojiLocal;
    window.getConfigCorLocal = getConfigCorLocal;
    window.listarTipos = listarTipos;
}

// ============================================
// EXPORTAÇÃO PARA NODE.JS (SE NECESSÁRIO)
// ============================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        CORES_LOCAIS,
        getCorLocal,
        getNomeCorLocal,
        getCorTextoLocal,
        getEmojiLocal,
        getConfigCorLocal,
        listarTipos
    };
}

console.log('✅ Cores dos locais bíblicos carregadas!');
console.log(`📊 ${Object.keys(CORES_LOCAIS).length} tipos de locais configurados.`);