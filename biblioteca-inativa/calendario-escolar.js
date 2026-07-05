// ============================================
// BIBLIOTECA CALENDÁRIO ESCOLAR
// FONTE DA VERDADE - Define assuntos, anos, disciplinas e bimestres
// O Rodapé Vestibular é SUBORDINADO a este calendário
// ============================================

const calendarioEscolar = {

    // ==================== ENSINO FUNDAMENTAL - ANOS FINAIS ====================
    // (Conteúdos que aparecem no Fundamental e são retomados no Médio)
  
    "6º ANO EF": {
      HISTORIA: {
        "1º Bimestre": ["pre-historia", "povos-cacadores-coletores"],
        "2º Bimestre": ["antigo-oriente", "mesopotamia", "egito-antigo"],
        "3º Bimestre": ["hebreus", "fenicios", "persas"],
        "4º Bimestre": ["grecia-antiga", "periodo-homerico", "cidades-estado"]
      },
      GEOGRAFIA: {
        "1º Bimestre": ["orientacao-espacial", "cartografia"],
        "2º Bimestre": ["relevo", "hidrografia"],
        "3º Bimestre": ["clima", "vegetacao"],
        "4º Bimestre": ["biomas-mundiais"]
      },
      ARTE: {
        "2º Bimestre": ["arte-egipcia"],
        "3º Bimestre": ["arte-grega", "ceramica-grega"]
      }
    },
  
    "7º ANO EF": {
      HISTORIA: {
        "1º Bimestre": ["roma-antiga", "republica-romana", "imperio-romano"],
        "2º Bimestre": ["cristianismo-primitivo", "imperio-bizantino"],
        "3º Bimestre": ["povos-germanicos", "feudalismo"],
        "4º Bimestre": ["igreja-medieval", "cruzadas"]
      },
      GEOGRAFIA: {
        "1º Bimestre": ["populacao-mundial", "migracoes"],
        "2º Bimestre": ["urbanizacao"],
        "3º Bimestre": ["industrializacao"],
        "4º Bimestre": ["meio-ambiente-impactos"]
      },
      ARTE: {
        "1º Bimestre": ["arte-romana"],
        "2º Bimestre": ["arte-crista-primitiva"],
        "3º Bimestre": ["arte-medieval", "romantica", "gotica"]
      }
    },
  
    "8º ANO EF": {
      HISTORIA: {
        "1º Bimestre": ["renascimento", "humanismo"],
        "2º Bimestre": ["reforma-protestante", "reforma-catolica"],
        "3º Bimestre": ["absolutismo", "estado-moderno"],
        "4º Bimestre": ["iluminismo", "revolucao-francesa"]
      },
      FILOSOFIA: {
        "3º Bimestre": ["filosofia-moderna", "racionalismo"]
      },
      ARTE: {
        "1º Bimestre": ["renascimento-arte"],
        "2º Bimestre": ["barroco"]
      }
    },
  
    "9º ANO EF": {
      HISTORIA: {
        "1º Bimestre": ["revolucao-industrial"],
        "2º Bimestre": ["independencia-americas", "brasil-colonia"],
        "3º Bimestre": ["brasil-imperio"],
        "4º Bimestre": ["republica-velha", "primeira-guerra"]
      },
      FILOSOFIA: {
        "1º Bimestre": ["filosofia-contemporanea", "positivismo", "marx"]
      },
      SOCIOLOGIA: {
        "1º Bimestre": ["origem-sociologia", "durkheim", "marx-sociologia", "weber"]
      },
      ARTE: {
        "3º Bimestre": ["realismo", "impressionismo"]
      }
    },
  
    // ==================== ENSINO MÉDIO ====================
  
    "1º ANO EM": {
      // ----- FILOSOFIA -----
      FILOSOFIA: {
        "1º Bimestre": ["pre-socraticos", "sofistas"],
        "2º Bimestre": ["socrates", "platao"],
        "3º Bimestre": ["aristoteles", "logica", "etica-nicomaqueia"],
        "4º Bimestre": ["helenismo", "estoicismo", "epicurismo", "cinismo", "neoplatonismo"]
      },
      
      // ----- HISTÓRIA -----
      HISTORIA: {
        "1º Bimestre": ["grecia-antiga", "periodo-classico", "guerras-medicas"],
        "2º Bimestre": ["guerras-peloponeso", "alexandre-magno"],
        "3º Bimestre": ["helenismo", "celtas", "galacia", "reinos-helenisticos"],
        "4º Bimestre": ["roma-antiga", "republica-romana", "imperio-romano", "pax-romana"]
      },
      
      // ----- GEOGRAFIA -----
      GEOGRAFIA: {
        "1º Bimestre": ["cartografia", "coordenadas-geograficas", "fusos-horarios"],
        "2º Bimestre": ["relevo-europa", "relevo-asia-menor", "estruturas-geologicas"],
        "3º Bimestre": ["clima-mediterraneo", "mares-egeu-mediterraneo", "rios-tigre-eufrates"],
        "4º Bimestre": ["biomas-mediterraneo", "deserto-judeia", "vegetacao-mediterranea"]
      },
      
      // ----- ARTE -----
      ARTE: {
        "2º Bimestre": ["arte-grega", "arte-helenistica"],
        "3º Bimestre": ["arte-romana", "arquitetura-romana", "mosaicos-romanos"]
      },
      
      // ----- SOCIOLOGIA -----
      SOCIOLOGIA: {
        "1º Bimestre": ["origem-sociologia", "contexto-historico-sociologia"],
        "2º Bimestre": ["durkheim", "fatos-sociais", "solidariedade-mecanica-organica"],
        "3º Bimestre": ["marx-sociologia", "luta-classes", "alienacao", "materialismo-historico"],
        "4º Bimestre": ["weber", "acao-social", "racionalizacao", "etica-protestante"]
      },
      
      // ----- BIOLOGIA -----
      BIOLOGIA: {
        "1º Bimestre": ["origem-vida", "criacionismo", "evolucao-criacionismo"],
        "4º Bimestre": ["ecologia-mediterranea", "endemismo", "adaptacao-ambiental"]
      }
    },
  
    "2º ANO EM": {
      // ----- FILOSOFIA -----
      FILOSOFIA: {
        "1º Bimestre": ["patristica", "agostinho", "escolastica", "tomas-aquino"],
        "2º Bimestre": ["filosofia-moderna", "racionalismo", "descartes", "empirismo", "locke", "hume"],
        "3º Bimestre": ["iluminismo", "kant", "rousseau", "ilustracao"],
        "4º Bimestre": ["idealismo-alemao", "hegel", "fichte", "schelling"]
      },
      
      // ----- HISTÓRIA -----
      HISTORIA: {
        "1º Bimestre": ["feudalismo", "igreja-medieval", "sociedade-estamental"],
        "2º Bimestre": ["renascimento", "humanismo-renascentista", "reforma-protestante", "luteranismo", "calvinismo", "reforma-catolica", "concilio-trento"],
        "3º Bimestre": ["absolutismo", "estado-moderno", "revolucao-francesa"],
        "4º Bimestre": ["revolucao-industrial", "brasil-colonia", "ciclodo-ouro", "inconfidencia-mineira"]
      },
      
      // ----- ARTE -----
      ARTE: {
        "1º Bimestre": ["arte-medieval", "estilo-romantico", "estilo-gotico"],
        "2º Bimestre": ["renascimento-arte", "davinci", "michelangelo", "rafael"],
        "3º Bimestre": ["barroco", "caravaggio", "bermini", "rococo"],
        "4º Bimestre": ["neoclassicismo"]
      },
      
      // ----- SOCIOLOGIA -----
      SOCIOLOGIA: {
        "1º Bimestre": ["cultura-brasileira", "diversidade-cultural", "etnocentrismo"],
        "2º Bimestre": ["industria-cultural", "adorno", "horkheimer", "escola-frankfurt"],
        "3º Bimestre": ["movimentos-sociais", "novos-movimentos-sociais"],
        "4º Bimestre": ["trabalho-sociedade", "divisao-trabalho", "precarizacao"]
      },
      
      // ----- BIOLOGIA -----
      BIOLOGIA: {
        "1º Bimestre": ["evolucao", "darwin", "lamarck", "selecao-natural"],
        "2º Bimestre": ["zoologia", "classificacao-animal", "vertebrados-invertebrados"],
        "3º Bimestre": ["botanica", "fisiologia-vegetal", "taxonomia-vegetal"],
        "4º Bimestre": ["ecologia", "cadeias-alimentares", "ciclos-biogeoquimicos"]
      }
    },
  
    "3º ANO EM": {
      // ----- FILOSOFIA -----
      FILOSOFIA: {
        "1º Bimestre": ["nietzsche", "transvaloracao", "super-homem", "schopenhauer", "vontade"],
        "2º Bimestre": ["marx-filosofia", "materialismo-dialetico", "freud", "psicanalise", "inconsciente"],
        "3º Bimestre": ["existencialismo", "sartre", "camus", "heidegger", "kierkegaard"],
        "4º Bimestre": ["foucault", "poder-discurso", "arendt", "banalidade-do-mal", "contemporanea"]
      },
      
      // ----- HISTÓRIA -----
      HISTORIA: {
        "1º Bimestre": ["brasil-imperio", "independencia-brasil", "primeiro-reinado", "segundo-reinado", "abolicao", "leis-abolicionistas"],
        "2º Bimestre": ["republica-velha", "era-vargas", "ditadura-militar", "redemocratizacao", "constituicao-1988"],
        "3º Bimestre": ["primeira-guerra-mundial", "crise-1929", "nazismo", "fascismo", "segunda-guerra-mundial", "holocausto"],
        "4º Bimestre": ["guerra-fria", "cortina-ferro", "corrida-espacial", "globalizacao", "caida-muro-berlim", "terrorismo"]
      },
      
      // ----- GEOGRAFIA -----
      GEOGRAFIA: {
        "1º Bimestre": ["geopolitica", "conflitos-mundiais", "blocos-economicos", "otan", "mercosul", "uniao-europeia"],
        "2º Bimestre": ["globalizacao", "fluxos-mundiais", "comercio-internacional"],
        "3º Bimestre": ["agricultura-mundial", "reforma-agraria", "agronegocio"],
        "4º Bimestre": ["urbanizacao", "problemas-urbanos", "mobilidade"]
      },
      
      // ----- SOCIOLOGIA -----
      SOCIOLOGIA: {
        "1º Bimestre": ["globalizacao-sociologia", "consequencias-globalizacao"],
        "2º Bimestre": ["violencia", "seguranca-publica", "criminalidade"],
        "3º Bimestre": ["direitos-humanos", "cidadania", "minorias"],
        "4º Bimestre": ["politica", "democracia", "participacao-politica", "eleicoes"]
      },
      
      // ----- ARTE -----
      ARTE: {
        "1º Bimestre": ["romantismo-arte", "delacroix", "goya"],
        "2º Bimestre": ["realismo-arte", "courbet", "impressionismo", "monet", "renoir"],
        "3º Bimestre": ["pos-impressionismo", "van-gogh", "cezanne", "gauguin", "modernismo-brasil", "semana-22"],
        "4º Bimestre": ["arte-contemporanea", "abstracionismo", "pop-art"]
      }
    },
  
    // ==================== ÍNDICE DE BUSCA (FUNÇÕES AUXILIARES) ====================
    
    // Retorna todas as disciplinas disponíveis
    getDisciplinas: function() {
      return ["FILOSOFIA", "HISTORIA", "GEOGRAFIA", "ARTE", "SOCIOLOGIA", "BIOLOGIA"];
    },
    
    // Retorna os anos escolares disponíveis
    getAnos: function() {
      return ["6º ANO EF", "7º ANO EF", "8º ANO EF", "9º ANO EF", "1º ANO EM", "2º ANO EM", "3º ANO EM"];
    },
    
    // Busca em qual ano, disciplina e bimestre um assunto está localizado
    buscarAssunto: function(assuntoId) {
      const anos = this.getAnos();
      
      for (const ano of anos) {
        const disciplinas = this[ano];
        if (!disciplinas) continue;
        
        for (const disciplina of this.getDisciplinas()) {
          const conteudo = disciplinas[disciplina];
          if (!conteudo) continue;
          
          for (const bimestre in conteudo) {
            if (conteudo[bimestre].includes(assuntoId)) {
              return {
                encontrado: true,
                ano: ano,
                disciplina: disciplina,
                bimestre: bimestre,
                assuntoId: assuntoId
              };
            }
          }
        }
      }
      
      return { encontrado: false, assuntoId: assuntoId };
    },
    
    // Verifica se um assunto existe no calendário
    assuntoExiste: function(assuntoId) {
      return this.buscarAssunto(assuntoId).encontrado;
    },
    
    // Retorna todos os assuntos de uma disciplina em um ano específico
    getAssuntosPorDisciplinaEAno: function(ano, disciplina) {
      if (!this[ano] || !this[ano][disciplina]) {
        return {};
      }
      return this[ano][disciplina];
    },
    
    // Retorna todos os assuntos por disciplina (todos os anos)
    getTodosAssuntosPorDisciplina: function(disciplina) {
      const resultados = {};
      const anos = this.getAnos();
      
      for (const ano of anos) {
        if (this[ano] && this[ano][disciplina]) {
          resultados[ano] = this[ano][disciplina];
        }
      }
      
      return resultados;
    }
  };
  
  // ============================================
  // EXPORTAÇÃO
  // ============================================
  
  if (typeof window !== 'undefined') {
    window.calendarioEscolar = calendarioEscolar;
  }
  
  console.log('📅 calendario-escolar.js carregado com sucesso!');
  console.log('📚 Assuntos mapeados: Estoicismo, Epicurismo, Celtas, Arte Helenística e muitos outros.');
  console.log('💡 O Rodapé Vestibular deve citar apenas assuntos que existem neste calendário.');