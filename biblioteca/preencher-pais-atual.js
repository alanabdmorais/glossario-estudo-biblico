// ============================================
// 🌍 PREENCHER PAÍS ATUAL (USANDO NOMINATIM)
// ============================================

// ============================================
// MAPEAMENTO DE PAÍSES (padrão do projeto)
// ============================================
function mapearPais(pais) {
    const mapa = {
        'Israel': 'Israel',
        'Palestine': 'Cisjordânia',
        'West Bank': 'Cisjordânia',
        'Jordan': 'Jordânia',
        'Egypt': 'Egito',
        'Syria': 'Síria',
        'Lebanon': 'Líbano',
        'Turkey': 'Turquia',
        'Greece': 'Grécia',
        'Italy': 'Itália',
        'Iraq': 'Iraque',
        'Iran': 'Irã',
        'Saudi Arabia': 'Arábia Saudita',
        'Cyprus': 'Chipre',
        'Libya': 'Líbia',
        'Sudan': 'Sudão',
        'Ethiopia': 'Etiópia',
        'Spain': 'Espanha',
        'France': 'França',
        'Germany': 'Alemanha',
        'United Kingdom': 'Reino Unido',
        'Romania': 'Romênia',
        'Bulgaria': 'Bulgária',
        'Serbia': 'Sérvia',
        'Croatia': 'Croácia',
        'Albania': 'Albânia',
        'North Macedonia': 'Macedônia do Norte',
        'Montenegro': 'Montenegro',
        'Bosnia and Herzegovina': 'Bósnia e Herzegovina',
        'Slovenia': 'Eslovênia',
        'Slovakia': 'Eslováquia',
        'Czechia': 'República Tcheca',
        'Poland': 'Polônia',
        'Hungary': 'Hungria',
        'Austria': 'Áustria',
        'Switzerland': 'Suíça',
        'Netherlands': 'Países Baixos',
        'Belgium': 'Bélgica',
        'Luxembourg': 'Luxemburgo',
        'Denmark': 'Dinamarca',
        'Norway': 'Noruega',
        'Sweden': 'Suécia',
        'Finland': 'Finlândia',
        'Russia': 'Rússia',
        'Ukraine': 'Ucrânia',
        'Belarus': 'Bielorrússia',
        'Georgia': 'Geórgia',
        'Armenia': 'Armênia',
        'Azerbaijan': 'Azerbaijão',
        'Kazakhstan': 'Cazaquistão',
        'Uzbekistan': 'Uzbequistão',
        'Turkmenistan': 'Turcomenistão',
        'Kyrgyzstan': 'Quirguistão',
        'Tajikistan': 'Tajiquistão',
        'Afghanistan': 'Afeganistão',
        'Pakistan': 'Paquistão',
        'India': 'Índia',
        'China': 'China',
        'Japan': 'Japão',
        'South Korea': 'Coreia do Sul',
        'North Korea': 'Coreia do Norte',
        'Vietnam': 'Vietnã',
        'Thailand': 'Tailândia',
        'Myanmar': 'Mianmar',
        'Malaysia': 'Malásia',
        'Indonesia': 'Indonésia',
        'Philippines': 'Filipinas',
        'Australia': 'Austrália',
        'New Zealand': 'Nova Zelândia',
        'South Africa': 'África do Sul',
        'Nigeria': 'Nigéria',
        'Kenya': 'Quênia',
        'Tanzania': 'Tanzânia',
        'Uganda': 'Uganda',
        'Rwanda': 'Ruanda',
        'Burundi': 'Burundi',
        'Congo': 'Congo',
        'Angola': 'Angola',
        'Mozambique': 'Moçambique',
        'Zambia': 'Zâmbia',
        'Zimbabwe': 'Zimbábue',
        'Botswana': 'Botsuana',
        'Namibia': 'Namíbia',
        'Madagascar': 'Madagáscar',
        'Mauritius': 'Maurício',
        'Seychelles': 'Seicheles',
        'Comoros': 'Comores',
        'Portugal': 'Portugal',
        'Brazil': 'Brasil',
        'Argentina': 'Argentina',
        'Chile': 'Chile',
        'Peru': 'Peru',
        'Colombia': 'Colômbia',
        'Venezuela': 'Venezuela',
        'Mexico': 'México',
        'United States': 'Estados Unidos',
        'Canada': 'Canadá',
        'Cuba': 'Cuba',
        'Dominican Republic': 'República Dominicana',
        'Puerto Rico': 'Porto Rico'
    };
    return mapa[pais] || pais;
}

// ============================================
// FALLBACK: PAÍS POR REGIÃO APROXIMADA
// ============================================
function obterPaisPorRegiao(lat, lng) {
    const regioes = [
        { nome: 'Israel', latMin: 29.5, latMax: 33.5, lngMin: 34.0, lngMax: 36.0 },
        { nome: 'Jordânia', latMin: 29.0, latMax: 33.0, lngMin: 35.0, lngMax: 39.0 },
        { nome: 'Egito', latMin: 22.0, latMax: 31.5, lngMin: 25.0, lngMax: 35.0 },
        { nome: 'Síria', latMin: 32.0, latMax: 37.0, lngMin: 35.5, lngMax: 42.0 },
        { nome: 'Líbano', latMin: 33.0, latMax: 34.5, lngMin: 35.0, lngMax: 36.5 },
        { nome: 'Turquia', latMin: 36.0, latMax: 42.0, lngMin: 26.0, lngMax: 44.0 },
        { nome: 'Grécia', latMin: 36.0, latMax: 41.0, lngMin: 20.0, lngMax: 28.0 },
        { nome: 'Itália', latMin: 36.0, latMax: 47.0, lngMin: 6.0, lngMax: 18.0 },
        { nome: 'Iraque', latMin: 29.0, latMax: 37.0, lngMin: 39.0, lngMax: 48.0 },
        { nome: 'Irã', latMin: 25.0, latMax: 38.0, lngMin: 44.0, lngMax: 55.0 },
        { nome: 'Arábia Saudita', latMin: 16.0, latMax: 30.0, lngMin: 35.0, lngMax: 50.0 },
        { nome: 'Chipre', latMin: 34.5, latMax: 35.5, lngMin: 32.0, lngMax: 34.5 },
        { nome: 'Líbia', latMin: 20.0, latMax: 33.0, lngMin: 9.0, lngMax: 25.0 },
        { nome: 'Sudão', latMin: 10.0, latMax: 22.0, lngMin: 22.0, lngMax: 38.0 },
        { nome: 'Etiópia', latMin: 4.0, latMax: 15.0, lngMin: 33.0, lngMax: 48.0 },
        { nome: 'Espanha', latMin: 36.0, latMax: 44.0, lngMin: -9.0, lngMax: 3.0 },
        { nome: 'França', latMin: 42.0, latMax: 51.0, lngMin: -5.0, lngMax: 8.0 },
        { nome: 'Alemanha', latMin: 47.0, latMax: 55.0, lngMin: 5.0, lngMax: 15.0 },
        { nome: 'Reino Unido', latMin: 50.0, latMax: 58.0, lngMin: -8.0, lngMax: 2.0 },
        { nome: 'Portugal', latMin: 36.0, latMax: 42.0, lngMin: -9.5, lngMax: -6.0 },
        { nome: 'Brasil', latMin: -34.0, latMax: 5.0, lngMin: -74.0, lngMax: -34.0 },
        { nome: 'Argentina', latMin: -55.0, latMax: -22.0, lngMin: -73.0, lngMax: -53.0 },
        { nome: 'Chile', latMin: -55.0, latMax: -17.0, lngMin: -76.0, lngMax: -66.0 },
        { nome: 'Peru', latMin: -18.0, latMax: -0.5, lngMin: -81.0, lngMax: -68.0 },
        { nome: 'Colômbia', latMin: -4.0, latMax: 12.0, lngMin: -79.0, lngMax: -66.0 },
        { nome: 'Venezuela', latMin: 0.5, latMax: 12.0, lngMin: -73.0, lngMax: -60.0 },
        { nome: 'México', latMin: 14.0, latMax: 32.5, lngMin: -118.0, lngMax: -86.0 },
        { nome: 'Estados Unidos', latMin: 24.0, latMax: 49.0, lngMin: -125.0, lngMax: -66.0 },
        { nome: 'Canadá', latMin: 41.0, latMax: 83.0, lngMin: -141.0, lngMax: -52.0 },
        { nome: 'Cuba', latMin: 19.0, latMax: 23.0, lngMin: -85.0, lngMax: -74.0 },
        { nome: 'República Dominicana', latMin: 17.5, latMax: 20.0, lngMin: -72.0, lngMax: -68.0 },
        { nome: 'Porto Rico', latMin: 17.5, latMax: 18.5, lngMin: -67.5, lngMax: -65.5 }
    ];

    for (const reg of regioes) {
        if (lat >= reg.latMin && lat <= reg.latMax &&
            lng >= reg.lngMin && lng <= reg.lngMax) {
            return reg.nome;
        }
    }
    return null;
}

// ============================================
// FUNÇÃO PRINCIPAL
// ============================================
async function preencherPaisAtual() {
    const dados = window.locaisBiblicos || locaisBiblicos;
    if (!dados) {
        console.error('❌ locaisBiblicos não encontrado!');
        return;
    }

    const total = Object.keys(dados).length;
    let preenchidos = 0;
    let jaTinham = 0;
    let semCoordenadas = 0;
    let erros = 0;

    console.log(`🔄 Iniciando preenchimento de ${total} locais...`);

    for (const [key, local] of Object.entries(dados)) {
        // Se já tem nomeAtual com 🔮, pula
        if (local.nomeAtual && local.nomeAtual !== '' && !local.nomeAtual.includes('🔮')) {
            jaTinham++;
            continue;
        }

        const lat = parseFloat(local.latitude);
        const lng = parseFloat(local.longitude);

        if (isNaN(lat) || isNaN(lng) || (lat === 0 && lng === 14) || (lat === 0 && lng === 0)) {
            semCoordenadas++;
            continue;
        }

        try {
            // Tentar Nominatim via proxy
            const originalUrl = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&zoom=3&accept-language=pt`;
            const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(originalUrl)}`;
            
            const response = await fetch(proxyUrl);
            const data = await response.json();

            if (data && data.address && data.address.country) {
                const pais = data.address.country;
                const nomeAtual = mapearPais(pais);
                local.nomeAtual = `🔮 ${nomeAtual}`;

                if (!local.nome || local.nome === '' || local.nome === local.nomeOriginal) {
                    const nomeAntigo = local.nomeAntigo || '';
                    const nomeOriginal = local.nomeOriginal || key;
                    local.nome = nomeAntigo ? 
                        `${nomeOriginal} / ${nomeAntigo} (${nomeAtual})` :
                        `${nomeOriginal} (${nomeAtual})`;
                }

                preenchidos++;
                console.log(`✅ ${key}: ${nomeAtual}`);
            } else {
                const fallback = obterPaisPorRegiao(lat, lng);
                if (fallback) {
                    local.nomeAtual = `🔮 ${fallback}`;
                    preenchidos++;
                    console.log(`⚠️ ${key}: ${fallback} (fallback)`);
                } else {
                    local.nomeAtual = `🔮 (não identificado)`;
                    preenchidos++;
                }
            }
        } catch (e) {
            erros++;
            console.warn(`⚠️ Erro em ${key}:`, e.message);
            const fallback = obterPaisPorRegiao(lat, lng);
            local.nomeAtual = fallback ? `🔮 ${fallback}` : `🔮 (não identificado)`;
        }

        // Delay maior para evitar rate limit
        await new Promise(r => setTimeout(r, 800));
    }

    console.log('📊 RESUMO:');
    console.log(`   ✅ Já tinham país: ${jaTinham}`);
    console.log(`   🔧 Preenchidos: ${preenchidos}`);
    console.log(`   📍 Sem coordenadas: ${semCoordenadas}`);
    console.log(`   ❌ Erros: ${erros}`);
    console.log(`   📦 Total: ${total}`);

    console.log('💾 Copie o objeto locaisBiblicos do console e cole no arquivo!');
    console.log('📋 Use: copy(locaisBiblicos) para copiar');

    return dados;
}

// ============================================
// EXPORTAÇÃO
// ============================================
if (typeof window !== "undefined") {
    window.preencherPaisAtual = preencherPaisAtual;
    window.mapearPais = mapearPais;
    window.obterPaisPorRegiao = obterPaisPorRegiao;
}

console.log('🛠️ Script preencher-pais-atual.js carregado!');
console.log('📌 Use: preencherPaisAtual() para preencher todos os locais');