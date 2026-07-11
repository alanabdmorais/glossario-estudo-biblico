// ============================================
// BIBLIOTECA DE TÓPICOS BÍBLICOS
// BASEADO EM "1001 REFERÊNCIAS BÍBLICAS, BEM À MÃO"
// ============================================

const topicosBiblicos = [
    // ===== ADORAÇÃO =====
    {
      id: "adoracao",
      nome: "Adoração",
      descricao: "O ato de render culto, louvor e honra a Deus",
      refs: ["João 4.24", "Êxodo 34.14", "Salmo 29.2", "Mateus 4.10", "Filipenses 3.3", "Salmo 95.6", "Salmo 22.27"]
    },
    {
      id: "adoracao-maria",
      nome: "Adoração a Maria",
      descricao: "A prática de venerar Maria, mãe de Jesus",
      refs: ["João 2.5", "Êxodo 20.3-6", "Juízes 10.6", "1 Samuel 7.3-4", "1 Reis 11.5", "Jeremias 44.16-25"]
    },
  
    // ===== ADULTÉRIO =====
    {
      id: "adulterio",
      nome: "Adultério",
      descricao: "A relação sexual entre uma pessoa casada e alguém que não é seu cônjuge",
      refs: ["Êxodo 20.14", "Levítico 20.10", "Provérbios 6.32", "Mateus 5.27-28", "Mateus 19.9", "Marcos 10.11-12", "Gálatas 5.19-21"]
    },
  
    // ===== ADVERSIDADE =====
    {
      id: "adversidade",
      nome: "Adversidade",
      descricao: "Situações de dificuldade, sofrimento e oposição",
      refs: ["1 Pedro 5.8", "Provérbios 24.10", "Mateus 5.25", "Salmo 31.7-9", "Isaías 54.17", "Hebreus 13.6", "Lucas 18.7"]
    },
  
    // ===== ALEGRIA =====
    {
      id: "alegria",
      nome: "Alegria",
      descricao: "O estado de contentamento e satisfação que vem do Senhor",
      refs: ["Neemias 8.10", "Salmo 51.12", "Salmo 126.5", "João 15.11", "1 Tessalonicenses 2.19-20", "Salmo 28.7", "Filipenses 4.4"]
    },
  
    // ===== AMOR =====
    {
      id: "amor",
      nome: "Amor",
      descricao: "O amor ágape, o amor sacrificial e incondicional de Deus e o amor que devemos ter uns pelos outros",
      refs: ["Mateus 22.37-39", "Êxodo 20.6", "Salmo 31.23", "2 João 1.5-6", "1 João 4.19-20", "Mateus 5.44", "Efésios 5.25"]
    },
  
    // ===== ANJOS =====
    {
      id: "anjos",
      nome: "Anjos",
      descricao: "Seres espirituais criados por Deus para servi-Lo e proteger os crentes",
      refs: ["Hebreus 1.4", "Salmo 8.5", "Salmo 68.17", "Mateus 25.41", "Mateus 26.53", "Marcos 1.13", "Apocalipse 12.7-9"]
    },
  
    // ===== ANTICRISTO =====
    {
      id: "anticristo",
      nome: "Anticristo",
      descricao: "O líder mundial que se oporá a Cristo nos últimos dias",
      refs: ["2 Tessalonicenses 2.3-4", "Daniel 7.23-28", "Daniel 8.23-25", "Apocalipse 13.1-18", "Apocalipse 14.9-11", "Apocalipse 17.8-18", "Apocalipse 19.19-20"]
    },
  
    // ===== APOSTASIA =====
    {
      id: "apostasia",
      nome: "Apostasia",
      descricao: "O abandono da fé cristã e a rejeição da verdade",
      refs: ["2 Tessalonicenses 2.3", "Lucas 8.13", "Lucas 18.8", "2 Timóteo 3.1-7", "1 Timóteo 4.1-3", "2 Pedro 3.3-7", "Apocalipse 13.3-4"]
    },
  
    // ===== ARMAGEDOM =====
    {
      id: "armagedom",
      nome: "Armagedom",
      descricao: "A batalha final entre o bem e o mal no fim dos tempos",
      refs: ["Apocalipse 16.13-16", "Apocalipse 19.17-21", "Juízes 5.19-20", "Zacarias 12.11-14", "Zacarias 14.2-3", "Joel 3.9-16", "Sofonias 3.8-9"]
    },
  
    // ===== ARREBATAMENTO =====
    {
      id: "arrebatamento",
      nome: "Arrebatamento",
      descricao: "O evento em que os crentes serão levados para encontrar o Senhor nos ares",
      refs: ["1 Coríntios 15.51-52", "1 Tessalonicenses 4.13-18", "João 14.1-3", "João 11.23-25", "1 Tessalonicenses 1.10", "Cantares 2.8-10", "Apocalipse 4.1"]
    },
  
    // ===== ARREPENDIMENTO =====
    {
      id: "arrependimento",
      nome: "Arrependimento",
      descricao: "A mudança de mente e coração que leva a se afastar do pecado e se voltar para Deus",
      refs: ["Atos 17.30-31", "Lucas 13.3", "2 Coríntios 7.9-10", "Mateus 3.8", "Atos 26.20", "Salmo 51", "Marcos 9.13"]
    },
  
    // ===== ATEÍSMO =====
    {
      id: "ateismo",
      nome: "Ateísmo",
      descricao: "A negação da existência de Deus",
      refs: ["Salmo 14.1", "Gênesis 1.1", "Romanos 1.19-28", "Salmo 19.1-6", "Salmo 10.4", "Efésios 2.12", "Jó 22.17"]
    },
  
    // ===== AUTO-NEGAÇÃO =====
    {
      id: "auto-negacao",
      nome: "Auto-Negação",
      descricao: "O ato de renunciar a si mesmo e aos desejos egoístas para seguir a Cristo",
      refs: ["Lucas 9.23", "Tito 2.12", "Romanos 1.8-13", "Romanos 15.1", "Atos 20.24", "Marcos 8.35", "Apocalipse 12.11"]
    },
  
    // ===== BATISMO =====
    {
      id: "batismo",
      nome: "Batismo",
      descricao: "A ordenança de imersão em água como símbolo da morte, sepultamento e ressurreição com Cristo",
      refs: ["Mateus 28.18-20", "Atos 8.12-13", "Atos 8.37-38", "Mateus 3.13-17", "Atos 9.18", "Atos 16.33", "1 Coríntios 1.13-17"]
    },
  
    // ===== BATISMO NO ESPÍRITO SANTO =====
    {
      id: "batismo-espirito",
      nome: "Batismo no Espírito Santo",
      descricao: "O batismo com o Espírito Santo prometido por Jesus",
      refs: ["Mateus 3.11-12", "Atos 1.5", "1 Coríntios 12.13", "Efésios 4.5", "Gálatas 3.27", "Romanos 6.3-4", "Mateus 20.22-23"]
    },
  
    // ===== BÍBLIA =====
    {
      id: "biblia-ensino",
      nome: "Bíblia, Ensino e Doutrina",
      descricao: "O ensino e a doutrina contidos nas Escrituras",
      refs: ["1 João 2.27", "Mateus 7.29", "Mateus 28.19-20", "1 Timóteo 3.2", "2 Timóteo 2.2", "1 Samuel 12.23", "Deuteronômio 6.6-7"]
    },
    {
      id: "biblia-estudar",
      nome: "Bíblia, Estudar",
      descricao: "O estudo diligente das Escrituras",
      refs: ["2 Timóteo 2.15", "João 5.39", "Atos 17.11", "Isaías 8.20", "2 Timóteo 3.15-17", "1 Pedro 1.10-11", "Oséias 4.6"]
    },
    {
      id: "biblia-pregar",
      nome: "Bíblia, Pregar",
      descricao: "A pregação da Palavra de Deus",
      refs: ["2 Timóteo 4.2", "Romanos 10.14-15", "Atos 8.35", "1 Coríntios 1.17-23", "Mateus 4.17", "Salmo 40.9", "Isaías 61.1-3"]
    },
  
    // ===== CEIA DO SENHOR =====
    {
      id: "ceia-senhor",
      nome: "Ceia do Senhor",
      descricao: "A celebração da morte de Cristo através do pão e do vinho",
      refs: ["Mateus 26.26-29", "Marcos 14.22-25", "Lucas 22.19-20", "1 Coríntios 10.21", "1 Coríntios 11.23-26", "Deuteronômio 10.9-11", "Deuteronômio 32.32-33"]
    },
  
    // ===== COMPAIXÃO =====
    {
      id: "compaixao",
      nome: "Compaixão",
      descricao: "A misericórdia e compaixão de Deus e a que devemos ter uns pelos outros",
      refs: ["Judas 1.22", "1 Pedro 3.8-9", "Lucas 15.20", "Mateus 14.14", "Salmo 78.38", "Salmo 86.15", "Lamentações 3.32"]
    },
  
    // ===== CONFISSÃO =====
    {
      id: "confissao",
      nome: "Confissão",
      descricao: "O ato de reconhecer e declarar os pecados a Deus e uns aos outros",
      refs: ["Provérbios 28.13", "1 João 1.9", "Salmo 32.5", "Salmo 51.1-19", "Mateus 10.32-33", "Romanos 10.9", "Romanos 14.11"]
    },
  
    // ===== CONTENTAMENTO =====
    {
      id: "contentamento",
      nome: "Contentamento",
      descricao: "A satisfação com o que Deus proveu, sem desejar mais",
      refs: ["Filipenses 4.11", "1 Timóteo 6.6-8", "Lucas 3.14", "Hebreus 13.5", "Provérbios 23.17-18", "Gênesis 33.9", "Provérbios 27.23-27"]
    },
  
    // ===== CORAGEM =====
    {
      id: "coragem",
      nome: "Coragem",
      descricao: "A força e determinação para enfrentar o medo e a adversidade",
      refs: ["2 Samuel 10.12", "Salmo 27.14", "Salmo 31.24", "Filipenses 4.13", "Josué 1.9", "Deuteronômio 31.6", "2 Crônicas 15.8"]
    },
  
    // ===== CRIAÇÃO =====
    {
      id: "criacao",
      nome: "Criação",
      descricao: "A obra de Deus ao criar o mundo e a humanidade",
      refs: ["Gênesis 1.1", "Colossenses 1.16-18", "João 1.1-3", "Hebreus 1.1-3", "Romanos 1.19-20", "Marcos 10.6", "Marcos 13.19"]
    },
  
    // ===== DINHEIRO =====
    {
      id: "dinheiro",
      nome: "Dinheiro",
      descricao: "A atitude correta em relação ao dinheiro e riquezas",
      refs: ["1 Timóteo 6.10", "1 Timóteo 6.17", "Lucas 18.24", "Lucas 16.11", "Provérbios 11.4", "Salmo 37.16", "Salmo 62.10"]
    },
  
    // ===== DISCIPLINA =====
    {
      id: "disciplina",
      nome: "Disciplina",
      descricao: "A correção que Deus aplica aos Seus filhos para o crescimento",
      refs: ["1 Coríntios 11.30-32", "Salmo 94.12", "Provérbios 3.11-12", "Hebreus 12.5-11", "Apocalipse 3.19"]
    },
  
    // ===== DIVINDADE DE CRISTO =====
    {
      id: "divindade-cristo",
      nome: "Divindade de Cristo",
      descricao: "A doutrina de que Jesus Cristo é Deus",
      refs: ["1 João 5.7", "João 1.1-3", "João 1.14", "João 8.58", "João 10.30", "Zacarias 12.10", "Mateus 1.23", "Colossenses 1.13-18"]
    },
  
    // ===== DIVÓRCIO =====
    {
      id: "divorcio",
      nome: "Divórcio",
      descricao: "A dissolução do casamento permitida em certas circunstâncias",
      refs: ["Mateus 5.31-32", "Mateus 19.3-9", "Marcos 10.1-12", "Malaquias 2.16", "Romanos 7.1-3", "Lucas 16.18", "1 Coríntios 7.1-15"]
    },
  
    // ===== DÍZIMO =====
    {
      id: "dizimo",
      nome: "Dízimo",
      descricao: "A devolução da décima parte da renda a Deus",
      refs: ["Gênesis 14.20", "Gênesis 28.22", "Levítico 27.30-32", "Números 18.21-28", "Deuteronômio 14.22", "2 Coríntios 9.7", "Lucas 6.38"]
    },
  
    // ===== DOENÇA =====
    {
      id: "doenca",
      nome: "Doença",
      descricao: "O sofrimento físico e a cura divina",
      refs: ["2 Coríntios 12.7-10", "Salmo 103.3", "Jeremias 17.14", "Isaías 58.1-8", "Tiago 5.14-15", "Êxodo 23.25", "Mateus 25.36-46"]
    },
  
    // ===== ESPÍRITO SANTO =====
    {
      id: "espirito-santo",
      nome: "Espírito Santo",
      descricao: "A terceira pessoa da Trindade, que habita e capacita os crentes",
      refs: ["Efésios 4.30", "João 14.16-26", "João 15.26", "João 16.13", "Romanos 14.17", "Hebreus 9.14", "2 Coríntios 1.22"]
    },
  
    // ===== EVANGELHO =====
    {
      id: "evangelho",
      nome: "Evangelho",
      descricao: "A boa nova da salvação através de Jesus Cristo",
      refs: ["1 Coríntios 15.1-4", "Romanos 1.16", "Romanos 10.15", "1 Coríntios 1.17", "Efésios 6.15", "Gálatas 1.8", "2 Coríntios 11.4"]
    },
  
    // ===== FALSOS PROFETAS =====
    {
      id: "falsos-profetas",
      nome: "Falsos Profetas",
      descricao: "Aqueles que falsamente afirmam falar em nome de Deus",
      refs: ["Mateus 7.15-20", "Mateus 24.11", "Mateus 24.24", "2 Pedro 2.1", "1 João 4.1", "Deuteronômio 18.20-22", "Romanos 16.17-18", "Apocalipse 19.20"]
    },
  
    // ===== FÉ =====
    {
      id: "fe",
      nome: "Fé",
      descricao: "A confiança e crença em Deus e em Suas promessas",
      refs: ["Romanos 10.17", "Efésios 2.8-9", "Hebreus 11.1", "2 Coríntios 5.7", "Romanos 1.17", "Gálatas 2.20", "Romanos 4.20-21"]
    },
  
    // ===== FILHOS =====
    {
      id: "filhos",
      nome: "Filhos",
      descricao: "A responsabilidade dos pais em criar os filhos no caminho do Senhor",
      refs: ["Marcos 10.14", "Salmo 127.3-5", "Provérbios 17.6", "Provérbios 31.28", "Deuteronômio 1.39", "Lucas 2.52", "Gênesis 1.28"]
    },
    {
      id: "filhos-responsabilidade",
      nome: "Filhos, Responsabilidade dos",
      descricao: "A responsabilidade dos filhos para com os pais",
      refs: ["Efésios 6.1-3", "Êxodo 20.12", "Provérbios 1.10", "Provérbios 6.20", "Provérbios 23.22", "Provérbios 23.26", "Colossenses 3.20"]
    },
  
    // ===== FORNICAÇÃO =====
    {
      id: "fornicacao",
      nome: "Fornicação",
      descricao: "A relação sexual fora do casamento",
      refs: ["Atos 15.20", "Atos 15.29", "1 Coríntios 6.13-20", "1 Tessalonicenses 4.3", "Colossenses 3.5", "Efésios 5.3", "1 Coríntios 7.2", "Apocalipse 9.21"]
    },
  
    // ===== FRUTO DO ESPÍRITO =====
    {
      id: "fruto-espirito",
      nome: "Fruto do Espírito",
      descricao: "As virtudes produzidas pelo Espírito Santo na vida do crente",
      refs: ["Gálatas 5.22-23", "João 15.5", "Romanos 8.9", "Colossenses 3.12-14", "Efésios 5.9", "Tiago 3.17", "1 Coríntios 13.4-7"]
    },
  
    // ===== FUMAR =====
    {
      id: "fumar",
      nome: "Fumar (Cigarro)",
      descricao: "A prática de fumar e seu impacto no corpo como templo do Espírito",
      refs: ["1 Coríntios 10.31", "1 Tessalonicenses 5.22", "Provérbios 16.27", "2 Coríntios 6.17", "Romanos 14.21", "1 Coríntios 6.19-20", "Romanos 12.1"]
    },
  
    // ===== GLOBALISMO =====
    {
      id: "globalismo",
      nome: "Globalismo",
      descricao: "A tendência mundial de unificação política e religiosa nos últimos dias",
      refs: ["Sofonias 3.8-9", "Mateus 13.40-42", "Apocalipse 13.3", "Apocalipse 13.16-18", "Apocalipse 12.9", "Apocalipse 16.14", "Miqueias 4.11-13", "Provérbios 11.21"]
    },
  
    // ===== GRAÇA =====
    {
      id: "graca",
      nome: "Graça",
      descricao: "O favor imerecido de Deus concedido aos pecadores",
      refs: ["Gênesis 6.8", "Salmo 84.11", "João 1.14", "Atos 15.11", "Romanos 6.14-18", "Romanos 11.5-6", "Efésios 2.8-9"]
    },
  
    // ===== GRANDE TRIBULAÇÃO =====
    {
      id: "grande-tribulacao",
      nome: "Grande Tribulação",
      descricao: "O período de sofrimento antes da volta de Cristo",
      refs: ["Apocalipse 7.14", "Apocalipse 6.1-19.21", "Daniel 9.27", "Mateus 24.15-21", "Deuteronômio 4.30", "Jeremias 30.7", "1 Tessalonicenses 5.9"]
    },
  
    // ===== HOMOSSEXUALIDADE =====
    {
      id: "homossexualidade",
      nome: "Homossexualidade",
      descricao: "A prática sexual entre pessoas do mesmo sexo",
      refs: ["Romanos 1.26-27", "Levítico 18.22", "Levítico 20.13", "1 Coríntios 6.9-10", "Gênesis 19.5-7", "Deuteronômio 23.17", "1 Timóteo 1.9-10"]
    },
  
    // ===== HUMILDADE =====
    {
      id: "humildade",
      nome: "Humildade",
      descricao: "A virtude de reconhecer a própria pequenez diante de Deus e dos outros",
      refs: ["Romanos 12.3", "Mateus 18.3", "Tiago 4.6", "Tiago 4.10", "1 Pedro 5.6", "Colossenses 3.12", "Provérbios 15.33", "Provérbios 22.4"]
    },
  
    // ===== IDOLATRIA =====
    {
      id: "idolatria",
      nome: "Idolatria",
      descricao: "A adoração de ídolos ou qualquer coisa que tome o lugar de Deus",
      refs: ["Levítico 19.4", "Salmo 115.4-8", "Ezequiel 14.1-9", "1 Coríntios 10.14", "Gálatas 5.19-21", "1 Samuel 15.23", "Colossenses 3.5"]
    },
  
    // ===== INFERNO =====
    {
      id: "inferno",
      nome: "Inferno",
      descricao: "O lugar de punição eterna para os ímpios",
      refs: ["Lucas 16.23", "Mateus 5.22", "Salmo 9.17", "2 Pedro 2.4", "Apocalipse 20.13-15", "Marcos 9.42-48", "Deuteronômio 32.22"]
    },
  
    // ===== INIMIGOS =====
    {
      id: "inimigos",
      nome: "Inimigos",
      descricao: "Como tratar aqueles que se opõem a nós",
      refs: ["Mateus 5.43-44", "Salmo 18", "Miqueias 7.8", "Romanos 12.20", "Romanos 5.10", "Tiago 4.4", "1 Coríntios 15.26"]
    },
  
    // ===== INSPIRAÇÃO DA ESCRITURA =====
    {
      id: "inspiracao-escritura",
      nome: "Inspiração da Escritura",
      descricao: "A doutrina de que as Escrituras são inspiradas por Deus",
      refs: ["2 Timóteo 3.16-17", "2 Pedro 1.19-21", "Hebreus 4.12", "2 Samuel 23.2", "Atos 28.25", "1 Tessalonicenses 2.13", "Lucas 1.70"]
    },
  
    // ===== IRA =====
    {
      id: "ira",
      nome: "Ira",
      descricao: "A ira como pecado e a necessidade de controle",
      refs: ["Efésios 4.31", "Tiago 1.19-20", "Provérbios 15.1", "Provérbios 16.32", "Eclesiastes 7.9", "Salmo 37.8", "Colossenses 3.8"]
    },
  
    // ===== JEJUM =====
    {
      id: "jejum",
      nome: "Jejum",
      descricao: "A prática de abster-se de comida por propósitos espirituais",
      refs: ["Isaías 58", "Mateus 6.16-18", "Jonas 3.5-10", "Lucas 5.33-35", "2 Coríntios 6.5", "2 Coríntios 11.27", "Mateus 17.21"]
    },
  
    // ===== JULGAMENTO =====
    {
      id: "julgamento-final",
      nome: "Julgamento Final",
      descricao: "O julgamento final de Deus sobre toda a humanidade",
      refs: ["Apocalipse 20.11-15", "Romanos 2.16", "Atos 17.31", "Daniel 7.9-10", "Eclesiastes 12.14", "Mateus 12.36", "1 Coríntios 6.3"]
    },
    {
      id: "julgar",
      nome: "Julgar ou não julgar",
      descricao: "A instrução de não julgar os outros hipocritamente",
      refs: ["Mateus 7.1-5", "João 7.24", "1 Coríntios 2.15", "Malaquias 3.18", "1 Tessalonicenses 5.21", "1 João 4.1", "Provérbios 21.3"]
    },
  
    // ===== JUSTIFICAÇÃO =====
    {
      id: "justificacao",
      nome: "Justificação",
      descricao: "O ato de Deus declarar o pecador justo pela fé em Cristo",
      refs: ["Romanos 4.5-8", "Salmo 32.1-2", "Miqueias 6.5", "2 Coríntios 5.21", "Romanos 5.18-19", "Filipenses 3.9", "Romanos 3.24-28"]
    },
  
    // ===== LÍNGUA =====
    {
      id: "lingua",
      nome: "Língua",
      descricao: "O poder das palavras e a necessidade de controlar a língua",
      refs: ["Tiago 3.1-18", "Salmo 39.1", "Salmo 141.3", "Provérbios 10.20", "Provérbios 18.21", "Provérbios 21.23", "Mateus 12.36-37"]
    },
  
    // ===== LOUVOR =====
    {
      id: "louvor",
      nome: "Louvor",
      descricao: "A expressão de adoração e gratidão a Deus",
      refs: ["Hebreus 13.15", "Deuteronômio 10.21", "Salmo 9.1-2", "Salmo 35.18", "Salmo 150", "1 Pedro 2.9", "Apocalipse 19.5"]
    },
  
    // ===== MANSIDÃO =====
    {
      id: "mansidao",
      nome: "Mansidão",
      descricao: "A virtude de ser gentil, humilde e controlado",
      refs: ["Isaías 11.4", "1 Pedro 3.4", "1 Pedro 3.15", "Salmo 147.6", "Tiago 1.21", "Tiago 3.13", "Gálatas 5.22-23"]
    },
  
    // ===== MISERICÓRDIA =====
    {
      id: "misericordia",
      nome: "Misericórdia",
      descricao: "A compaixão de Deus e a que devemos ter uns pelos outros",
      refs: ["Tito 3.5", "Efésios 2.4", "Mateus 5.7", "Tiago 3.17", "Hebreus 4.16", "Salmo 136.1-26", "Salmo 89.14"]
    },
  
    // ===== MISSÕES =====
    {
      id: "missoes",
      nome: "Missões",
      descricao: "O chamado para levar o evangelho a todas as nações",
      refs: ["Lucas 10.1-2", "João 20.21", "Mateus 28.18-20", "Romanos 10.13-15", "Atos 9.15", "Atos 13.2-3", "Isaías 61.1"]
    },
  
    // ===== MORTE =====
    {
      id: "morte",
      nome: "Morte",
      descricao: "A separação da alma do corpo e a esperança da ressurreição",
      refs: ["Hebreus 9.27", "Tiago 1.15", "Romanos 6.23", "Gênesis 2.17", "Salmo 23.4", "Apocalipse 21.4", "1 Coríntios 15.55"]
    },
  
    // ===== OBEDIÊNCIA =====
    {
      id: "obediencia",
      nome: "Obediência",
      descricao: "A submissão à vontade de Deus",
      refs: ["1 Samuel 15.22", "Atos 5.29", "Deuteronômio 5.29", "Deuteronômio 11.26-28", "Tiago 1.22", "Salmo 18.44", "Lucas 6.46"]
    },
  
    // ===== ORAÇÃO =====
    {
      id: "oracao",
      nome: "Oração",
      descricao: "A comunicação com Deus",
      refs: ["1 Tessalonicenses 5.17", "Lucas 18.1-8", "1 Timóteo 2.8", "Mateus 21.22", "2 Crônicas 7.14", "Efésios 6.18", "Salmo 66.18"]
    },
  
    // ===== PACIÊNCIA =====
    {
      id: "paciencia",
      nome: "Paciência",
      descricao: "A perseverança e longanimidade diante das provações",
      refs: ["Romanos 5.3-4", "Tiago 1.2-4", "Salmo 27.14", "Salmo 37.7-10", "Salmo 40.1", "Gálatas 6.9", "Provérbios 20.22"]
    },
  
    // ===== PALAVRA DE DEUS =====
    {
      id: "palavra-deus",
      nome: "Palavra de Deus",
      descricao: "A Escritura como a revelação de Deus",
      refs: ["Hebreus 4.12", "Salmo 119.89", "Lucas 4.4", "2 Timóteo 3.16-17", "João 17.17", "Provérbios 30.5", "Salmo 119.11"]
    },
  
    // ===== PAZ =====
    {
      id: "paz",
      nome: "Paz",
      descricao: "A paz que vem de Deus e a busca pela paz com os outros",
      refs: ["Isaías 57.21", "1 Tessalonicenses 5.3", "Romanos 3.17", "Romanos 4.5", "Romanos 5.1", "Romanos 14.17", "Filipenses 4.7"]
    },
  
    // ===== PECADO =====
    {
      id: "pecado",
      nome: "Pecado",
      descricao: "A transgressão da lei de Deus",
      refs: ["1 João 3.4", "Romanos 6.12-18", "Romanos 7.7-25", "Romanos 14.23", "Gênesis 4.7", "Efésios 4.26", "Tiago 4.17"]
    },
  
    // ===== PERDÃO =====
    {
      id: "perdao",
      nome: "Perdão",
      descricao: "A ação de perdoar e ser perdoado por Deus",
      refs: ["Salmo 86.5", "Mateus 18.21-22", "Marcos 11.25-26", "Lucas 17.3-4", "Lucas 23.34", "Colossenses 3.13", "1 João 1.9"]
    },
  
    // ===== PERSEGUIÇÃO =====
    {
      id: "perseguicao",
      nome: "Perseguição",
      descricao: "O sofrimento por causa da fé em Cristo",
      refs: ["2 Timóteo 3.12", "Romanos 12.14", "Mateus 5.44", "João 15.20", "2 Coríntios 2.17-18", "Tiago 5.10-11", "Jeremias 17.18"]
    },
  
    // ===== PREGUIÇA =====
    {
      id: "preguica",
      nome: "Preguiça",
      descricao: "A negligência e falta de diligência",
      refs: ["2 Tessalonicenses 3.10-12", "Provérbios 20.13", "Provérbios 24.30-34", "Provérbios 10.4-5", "Provérbios 28.19", "Efésios 4.28", "Romanos 12.11"]
    },
  
    // ===== PROVidÊNCIA =====
    {
      id: "providencia",
      nome: "Providência de Deus",
      descricao: "O cuidado e provisão de Deus para Seus filhos",
      refs: ["Filipenses 4.19", "Mateus 6.30-33", "2 Coríntios 9.8-10", "Salmo 23", "1 Crônicas 29.12", "Salmo 78.19-22", "1 Timóteo 5.8"]
    },
  
    // ===== REDENÇÃO =====
    {
      id: "redencao",
      nome: "Redenção",
      descricao: "O resgate da humanidade do pecado através de Cristo",
      refs: ["Salmo 71.23", "Jó 19.25", "Romanos 3.24", "1 Pedro 1.18", "Colossenses 1.14", "Gálatas 3.13", "Romanos 8.23"]
    },
  
    // ===== RESSURREIÇÃO =====
    {
      id: "ressurreicao",
      nome: "Ressurreição",
      descricao: "A ressurreição de Cristo e a esperança da ressurreição dos crentes",
      refs: ["Mateus 28.6-7", "Jó 19.25-26", "Apocalipse 20.6", "1 Coríntios 15", "João 5.28-29", "Isaías 26.17", "Mateus 22.23-30"]
    },
  
    // ===== SABEDORIA =====
    {
      id: "sabedoria",
      nome: "Sabedoria",
      descricao: "A sabedoria que vem de Deus",
      refs: ["Provérbios 3.13", "Provérbios 4.7", "Provérbios 8.11", "Salmo 111.10", "Tiago 1.5", "Jó 38.12-28", "Mateus 10.16"]
    },
  
    // ===== SACRIFÍCIO =====
    {
      id: "sacrificio",
      nome: "Sacrifício",
      descricao: "Oferecer a vida como serviço a Deus",
      refs: ["Romanos 12.1-3", "Salmo 107.22", "1 Pedro 2.5", "Salmo 51.17", "Marcos 12.33", "Hebreus 13.15-16", "Hebreus 10.12"]
    },
  
    // ===== SALVAÇÃO =====
    {
      id: "salvacao",
      nome: "Salvação",
      descricao: "O livramento do pecado e suas consequências através de Cristo",
      refs: ["Lucas 19.10", "1 Timóteo 1.15", "Hebreus 7.25", "Romanos 10.9-13", "Efésios 2.8-9", "João 12.47", "Atos 16.30-31"]
    },
  
    // ===== SANTIFICAÇÃO =====
    {
      id: "santificacao",
      nome: "Santificação",
      descricao: "O processo de ser tornado santo e separado para Deus",
      refs: ["João 17.17", "1 Coríntios 6.11", "1 Tessalonicenses 4.4", "1 Tessalonicenses 5.23", "Hebreus 2.11", "Hebreus 10.10-14", "Hebreus 13.12"]
    },
  
    // ===== SATANÁS =====
    {
      id: "satanas",
      nome: "Satanás",
      descricao: "O adversário de Deus e dos crentes",
      refs: ["Isaías 14.12-15", "Ezequiel 28.13-19", "1 Pedro 5.8", "Apocalipse 12.9", "2 Coríntios 4.4", "Tiago 4.7", "Apocalipse 20.20"]
    },
  
    // ===== SEGURANÇA ETERNA =====
    {
      id: "seguranca-eterna",
      nome: "Segurança Eterna",
      descricao: "A certeza de que os crentes são eternamente seguros em Cristo",
      refs: ["João 10.28-29", "João 6.37", "Romanos 8.38-39", "Hebreus 13.5", "Efésios 4.30", "Filipenses 1.6", "Salmo 89.20-37"]
    },
  
    // ===== SOFRIMENTO =====
    {
      id: "sofrimento",
      nome: "Sofrimento",
      descricao: "O sofrimento como parte da vida cristã",
      refs: ["2 Timóteo 3.12", "Romanos 8.18", "2 Coríntios 4.17", "1 Pedro 2.19-21", "1 Pedro 4.13-19", "Tiago 5.10", "Salmo 119.71"]
    },
  
    // ===== TEMOR DE DEUS =====
    {
      id: "temor-deus",
      nome: "Temor de Deus",
      descricao: "O temor reverente a Deus",
      refs: ["Deuteronômio 5.29", "Provérbios 15.16", "Eclesiastes 12.13", "Romanos 3.18", "Salmo 111.10", "Jeremias 10.7", "Apocalipse 15.4"]
    },
  
    // ===== TENTAÇÃO =====
    {
      id: "tentacao",
      nome: "Tentação",
      descricao: "A tentação e como resistir a ela",
      refs: ["Provérbios 1.10", "Tiago 1.12-14", "1 Coríntios 10.13", "Mateus 26.41", "Mateus 4.1-11", "Hebreus 2.18", "Hebreus 4.15-16"]
    },
  
    // ===== TESTEMUNHAR =====
    {
      id: "testemunhar",
      nome: "Testemunhar",
      descricao: "O chamado para testemunhar de Cristo",
      refs: ["Atos 1.8", "Romanos 10.11", "Provérbios 11.30", "João 15.27", "Mateus 28.19-20", "Atos 5.32", "Atos 13.31"]
    },
  
    // ===== TRINDADE =====
    {
      id: "trindade",
      nome: "Trindade",
      descricao: "A doutrina de Deus como Pai, Filho e Espírito Santo",
      refs: ["1 João 5.7", "Mateus 28.19", "2 Coríntios 13.14", "Mateus 3.13-17", "Gênesis 1.26", "Gênesis 11.7", "Romanos 1.20"]
    },
  
    // ===== VIDA ETERNA =====
    {
      id: "vida-eterna",
      nome: "Vida Eterna",
      descricao: "A vida eterna prometida aos que creem em Cristo",
      refs: ["João 3.16", "João 5.24", "João 10.28", "João 11.26", "Tito 1.2", "1 João 5.11-13", "Romanos 6.23"]
    }
  ];
  
  // ============================================
  // FUNÇÕES AUXILIARES
  // ============================================
  
  function buscarTopicoPorId(id) {
    return topicosBiblicos.find(t => t.id === id) || null;
  }
  
  function buscarTopicoPorNome(nome) {
    return topicosBiblicos.find(t => t.nome === nome) || null;
  }
  
  function buscarTopicosPorTag(tag) {
    return topicosBiblicos.filter(t => t.descricao.toLowerCase().includes(tag.toLowerCase()));
  }
  
  function buscarTopicosPorReferencia(ref) {
    return topicosBiblicos.filter(t => t.refs.includes(ref));
  }
  
  function listarTopicos() {
    return topicosBiblicos.map(t => t.nome);
  }
  
  function listarTopicosCompleto() {
    return topicosBiblicos;
  }
  
  // ============================================
  // EXPORTAÇÃO
  // ============================================
  
  if (typeof window !== "undefined") {
    window.topicosBiblicos = topicosBiblicos;
    window.buscarTopicoPorId = buscarTopicoPorId;
    window.buscarTopicoPorNome = buscarTopicoPorNome;
    window.buscarTopicosPorTag = buscarTopicosPorTag;
    window.buscarTopicosPorReferencia = buscarTopicosPorReferencia;
    window.listarTopicos = listarTopicos;
    window.listarTopicosCompleto = listarTopicosCompleto;
  }
  
  if (typeof module !== "undefined") {
    module.exports = {
      topicosBiblicos,
      buscarTopicoPorId,
      buscarTopicoPorNome,
      buscarTopicosPorTag,
      buscarTopicosPorReferencia,
      listarTopicos,
      listarTopicosCompleto
    };
  }
  
  console.log("📌 Tópicos bíblicos carregados!");
  console.log("📊 Total de tópicos: " + topicosBiblicos.length);