// ============================================
// BIBLIOTECA DE MATÉRIAS VESTIBULAR - HIERARQUICA
// ============================================

const bibliotecaMaterias = {
  
    "estoicismo": {
      id: "estoicismo",
      titulo: "Estoicismo: Filosofia e Virtudes Cardeais",
      materia: "FILOSOFIA",
      ano: "EM1º",
      area: "Etica",
      palavrasChave: ["estoicismo", "estoico"],
      
      subtopicos: [
        {
          id: "estoicismo_virtudes",
          titulo: "As 4 Virtudes Cardeais",
          ancora: "virtudes",
          palavrasChave: ["virtudes", "virtudes cardeais", "sabedoria", "coragem", "justica", "temperanca"]
        },
        {
          id: "estoicismo_representantes",
          titulo: "Principais Representantes",
          ancora: "representantes",
          palavrasChave: ["seneca", "epicteto", "marco aurelio", "zenao"]
        },
        {
          id: "estoicismo_logos",
          titulo: "Logos: A Razao Universal",
          ancora: "logos",
          palavrasChave: ["logos", "razao universal"]
        }
      ],
      
      conteudo: `
        <div class="sumario">
          <h4>📑 Navegue pelos topicos:</h4>
          <ul>
            <li><a href="#" onclick="scrollParaAncora('virtudes'); return false;">[VIRTUDES] As 4 Virtudes Cardeais</a></li>
            <li><a href="#" onclick="scrollParaAncora('representantes'); return false;">[REPRESENTANTES] Principais Representantes</a></li>
            <li><a href="#" onclick="scrollParaAncora('logos'); return false;">[LOGOS] Logos: A Razao Universal</a></li>
          </ul>
        </div>
        
        <h3 id="virtudes">[VIRTUDES] As 4 Virtudes Cardeais</h3>
        <ul>
          <li><strong>Sabedoria</strong> - Capacidade de discernir o que e bom e ruim</li>
          <li><strong>Coragem</strong> - Forca para fazer o certo</li>
          <li><strong>Justica</strong> - Agir com retidao e honestidade</li>
          <li><strong>Temperanca</strong> - Autocontrole e moderacao</li>
        </ul>
        
        <h3 id="representantes">[REPRESENTANTES] Principais Representantes</h3>
        <ul>
          <li><strong>Seneca</strong> (4 a.C. - 65 d.C.) - Filosofo romano</li>
          <li><strong>Epicteto</strong> (55 - 135 d.C.) - Ex-escravo filosofo</li>
          <li><strong>Marco Aurelio</strong> (121 - 180 d.C.) - Imperador romano</li>
        </ul>
        
        <h3 id="logos">[LOGOS] Logos: A Razao Universal</h3>
        <p>O Logos e a razao divina que governa o cosmos.</p>
      `
    },
    
    "epicurismo": {
      id: "epicurismo",
      titulo: "Epicurismo: Prazer e Ataraxia",
      materia: "FILOSOFIA",
      ano: "EM1º",
      area: "Etica",
      palavrasChave: ["epicurismo", "epicuro"],
      
      subtopicos: [
        {
          id: "epicurismo_ataraxia",
          titulo: "Ataraxia: Ausencia de Perturbacao",
          ancora: "ataraxia",
          palavrasChave: ["ataraxia", "ausencia de perturbacao"]
        },
        {
          id: "epicurismo_prazer",
          titulo: "O Conceito de Prazer",
          ancora: "prazer",
          palavrasChave: ["prazer", "hedonismo"]
        }
      ],
      
      conteudo: `
        <div class="sumario">
          <h4>📑 Navegue pelos topicos:</h4>
          <ul>
            <li><a href="#" onclick="scrollParaAncora('ataraxia'); return false;">[ATARAXIA] Ataraxia: Ausencia de Perturbacao</a></li>
            <li><a href="#" onclick="scrollParaAncora('prazer'); return false;">[PRAZER] O Conceito de Prazer</a></li>
          </ul>
        </div>
        
        <h3 id="ataraxia">[ATARAXIA] Ataraxia: Ausencia de Perturbacao</h3>
        <p>Estado de tranquilidade da alma, livre de medos e ansiedades.</p>
        
        <h3 id="prazer">[PRAZER] O Conceito de Prazer</h3>
        <p>Prazer e a ausencia de dor no corpo e perturbacao na alma.</p>
      `
    },
    
    "celtas_galacia": {
      id: "celtas_galacia",
      titulo: "Os Celtas na Galacia (Asia Menor)",
      materia: "HISTORIA",
      ano: "EM1º",
      area: "Antiguidade",
      palavrasChave: ["celtas", "galacia", "gauleses"],
      
      subtopicos: [
        {
          id: "celtas_invasao",
          titulo: "Invasao de 278 a.C.",
          ancora: "invasao",
          palavrasChave: ["278 a.c.", "invasao"]
        },
        {
          id: "celtas_romanizacao",
          titulo: "Romanizacao da Galacia",
          ancora: "romanizacao",
          palavrasChave: ["roma", "augusto", "provincia romana"]
        }
      ],
      
      conteudo: `
        <div class="sumario">
          <h4>📑 Navegue pelos topicos:</h4>
          <ul>
            <li><a href="#" onclick="scrollParaAncora('invasao'); return false;">[INVASAO] Invasao de 278 a.C.</a></li>
            <li><a href="#" onclick="scrollParaAncora('romanizacao'); return false;">[ROMANIZACAO] Romanizacao da Galacia</a></li>
          </ul>
        </div>
        
        <h3 id="invasao">[INVASAO] Invasao de 278 a.C.</h3>
        <p>Em 278 a.C., tribos gaulesas cruzaram o Helesponto.</p>
        
        <h3 id="romanizacao">[ROMANIZACAO] Romanizacao da Galacia</h3>
        <p>Em 25 a.C., Galacia se tornou provincia romana sob Augusto.</p>
      `
    },
    
    "arte_helenistica": {
      id: "arte_helenistica",
      titulo: "Arte Helenistica (323-31 a.C.)",
      materia: "ARTE",
      ano: "EM1º",
      area: "Escultura",
      palavrasChave: ["helenistica", "helenismo"],
      
      subtopicos: [
        {
          id: "helenistica_caracteristicas",
          titulo: "Caracteristicas da Arte Helenistica",
          ancora: "caracteristicas",
          palavrasChave: ["realismo", "dramatismo", "movimento"]
        },
        {
          id: "helenistica_obras",
          titulo: "Principais Obras",
          ancora: "obras",
          palavrasChave: ["laocoonte", "venus de milo", "altar de pergamo"]
        }
      ],
      
      conteudo: `
        <div class="sumario">
          <h4>📑 Navegue pelos topicos:</h4>
          <ul>
            <li><a href="#" onclick="scrollParaAncora('caracteristicas'); return false;">[CARACTERISTICAS] Caracteristicas da Arte Helenistica</a></li>
            <li><a href="#" onclick="scrollParaAncora('obras'); return false;">[OBRAS] Principais Obras</a></li>
          </ul>
        </div>
        
        <h3 id="caracteristicas">[CARACTERISTICAS] Caracteristicas da Arte Helenistica</h3>
        <ul>
          <li><strong>Realismo extremo</strong></li>
          <li><strong>Dramatismo e emocao</strong></li>
          <li><strong>Movimento</strong></li>
        </ul>
        
        <h3 id="obras">[OBRAS] Principais Obras</h3>
        <ul>
          <li>Laocoonte e seus filhos</li>
          <li>Venus de Milo</li>
          <li>Altar de Pergamo</li>
        </ul>
      `
    }
  };
  
  const indicesMaterias = {
    porMateria: {
      "FILOSOFIA": ["estoicismo", "epicurismo"],
      "HISTORIA": ["celtas_galacia"],
      "ARTE": ["arte_helenistica"],
      "GEOGRAFIA": [],
      "SOCIOLOGIA": []
    },
    porAno: {
      "EM1º": ["estoicismo", "epicurismo", "celtas_galacia", "arte_helenistica"],
      "EM2º": [],
      "EM3º": []
    },
    ordemChegada: ["estoicismo", "celtas_galacia", "arte_helenistica", "epicurismo"]
  };
  
  console.log('biblioteca-materias.js carregado com sucesso!');