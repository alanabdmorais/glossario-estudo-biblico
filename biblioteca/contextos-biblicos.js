// ============================================
// BIBLIOTECA DE CONTEXTOS BÍBLICOS
// ORDEM DE CHEGADA (cresce no final do array)
// ============================================

const bibliotecaContextos = [
  // ==================== PRIMEIROS REGISTROS (ORDEM DE CHEGADA) ====================
  
  // 1. Atos 2.29-33
  {
    id: "at2.29",
    referencia: "At 2.29-33",
    local: "Jerusalém / Judéia (Israel)",
    paisAtual: "Israel",
    lider: "Pedro",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~30 d.C.",
    antes: "Os apóstolos estavam reunidos no cenáculo em Jerusalém no dia de Pentecostes, escondidos com medo dos judeus. O Espírito Santo havia descido em forma de línguas de fogo, e eles começaram a falar em outras línguas. A multidão se reuniu, confusa e maravilhada. Alguns zombavam, dizendo que estavam embriagados.",
    versiculo: "⚠️ Homens irmãos, seja-me lícito dizer-vos livremente acerca do patriarca Davi, que ele morreu e foi sepultado, e a sua sepultura está entre nós até ao dia de hoje. Sendo ele profeta, sabendo que Deus lhe havia prometido com juramento que do fruto dos seus lombos, segundo a carne, levantaria o Cristo, para o assentar sobre o seu trono; vendo-o antes, falou da ressurreição de Cristo, que a sua alma não foi deixada no inferno, nem a sua carne viu corrupção. A este Jesus ressuscitou Deus, do que todos nós somos testemunhas. Exaltado, pois, à destra de Deus, e tendo recebido do Pai a promessa do Espírito Santo, derramou isto que vós agora vedes e ouvis.",
    depois: "Pedro explica que Davi morreu e foi sepultado, ao contrário de Jesus que ressuscitou. Cerca de 3.000 pessoas se converteram naquele dia, foram batizadas e se juntaram à igreja primitiva.",
    tags: "testemunho / Davi / ressurreição",
    assuntos: ["judaismo", "rei-davi"]
  },

  // 2. Atos 2.36-41
  {
    id: "at2.36",
    referencia: "At 2.36-41",
    local: "Jerusalém / Judéia (Israel)",
    paisAtual: "Israel",
    lider: "Pedro",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~30 d.C.",
    antes: "Pedro acabara de explicar a profecia de Joel sobre o derramamento do Espírito e de mostrar como Davi profetizou sobre a ressurreição de Cristo. A multidão estava atônita e começava a crer.",
    versiculo: "⚠️ Saiba, pois, com certeza toda a casa de Israel que a este Jesus, a quem vós crucificastes, Deus o fez Senhor e Cristo. E, ouvindo eles isto, compungiram-se em seu coração, e perguntaram a Pedro e aos demais apóstolos: Homens irmãos, que faremos? E Pedro lhes disse: Arrependei-vos, e cada um de vós seja batizado em nome de Jesus Cristo, para perdão dos pecados; e recebereis o dom do Espírito Santo. Porque a promessa vos diz respeito a vós, a vossos filhos, e a todos os que estão longe, a tantos quantos Deus nosso Senhor chamar. E com muitas outras palavras isto testificava, e os exortava, dizendo: Salvai-vos desta geração perversa. De sorte que foram batizados os que de bom grado receberam a sua palavra; e naquele dia agregaram-se quase três mil almas.",
    depois: "Cerca de 3.000 pessoas se converteram, foram batizadas e se juntaram à igreja primitiva, dedicando-se ao ensino dos apóstolos, à comunhão, ao partir do pão e às orações.",
    tags: "Pentecostes / Pedro / conversão",
    assuntos: ["judaismo", "pentecostes", "igreja-primitiva"]
  },

  // 3. Atos 4.13
  {
    id: "at4.13",
    referencia: "At 4.13",
    local: "Jerusalém / Judéia (Israel)",
    paisAtual: "Israel",
    lider: "Pedro e João",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~30 d.C.",
    antes: "Pedro e João haviam curado um homem coxo de nascença na porta do Templo chamada Formosa. Foram presos pelo Sinédrio e levados a julgamento. Os líderes religiosos estavam perplexos com o milagre e com a coragem dos dois pescadores.",
    versiculo: "✅ Então, vendo a ousadia de Pedro e João, e percebendo que eram homens iletrados e incultos, se maravilharam; e os reconheceram que haviam estado com Jesus.",
    depois: "Os líderes religiosos ficaram sem saber o que fazer. Mandaram Pedro e João saírem do Sinédrio e discutiram entre si. Por fim, os ameaçaram e os soltaram, pois não podiam negar o milagre. Pedro e João voltaram para os irmãos e relataram tudo.",
    tags: "ousadia / Pedro e João / estado com Jesus",
    assuntos: ["judaismo", "sinédrio", "apostolos"]
  },

  // 4. Atos 17.24-27 (Atenas - importante para filosofia)
  {
    id: "at17.24-27",
    referencia: "At 17.24-27",
    local: "Atenas / Ática (Grécia)",
    paisAtual: "Grécia",
    lider: "Paulo",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~50-51 d.C.",
    antes: "Atenas já havia perdido sua glória política, mas continuava sendo o centro intelectual do Império Romano. O Areópago era o tribunal e local de debates filosóficos. Epicuristas e estoicos dominavam o pensamento grego. Paulo foi levado ao Areópago por curiosos que queriam ouvir suas ideias.",
    versiculo: "✅ O Deus que fez o mundo e tudo o que nele há, sendo Senhor do céu e da terra, não habita em templos feitos por mãos de homens; nem tão pouco é servido por mãos de homens, como que necessitando de alguma coisa; pois ele mesmo é quem dá a todos a vida, e a respiração, e todas as coisas; e de um só sangue fez toda a geração dos homens, para habitar sobre toda a face da terra, determinando os tempos já dantes ordenados, e os limites da sua habitação; para que buscassem ao Senhor, se porventura, tateando, o pudessem achar; ainda que não está longe de cada um de nós.",
    depois: "Alguns zombaram quando Paulo falou da ressurreição, mas outros creram, incluindo Dionísio, membro do Areópago, e uma mulher chamada Dâmaris. A pregação de Paulo em Atenas gerou poucos frutos comparada a Corinto, mas estabeleceu um precedente para o diálogo entre fé e filosofia.",
    tags: "revelação / busca por Deus / propósito",
    assuntos: ["atenas", "areopago", "filosofia-grega", "estoicismo", "epicurismo", "paulo"]
  },

  // 5. Gálatas 1.10 (Galácia - celtas)
  {
    id: "gl1.10",
    referencia: "Gl 1.10",
    local: "Galácia / Ásia Menor (Turquia)",
    paisAtual: "Turquia",
    lider: "Paulo",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~49-55 d.C.",
    antes: "Após Paulo sair da Galácia, falsos mestres (judaizantes) chegaram ensinando que os cristãos gentios precisavam seguir a Lei de Moisés para serem salvos. Paulo escreve a carta defendendo seu apostolado e a justificação pela fé.",
    versiculo: "✅ Porque, persuado eu agora a homens ou a Deus? ou busco agradar a homens? Se estivesse ainda agradando aos homens, não seria servo de Cristo.",
    depois: "A carta aos Gálatas tornou-se um dos textos fundamentais para a compreensão da justificação pela fé, influenciando profundamente a teologia de Agostinho, Lutero e a Reforma Protestante.",
    tags: "autenticidade / evangelho / aprovação divina",
    assuntos: ["galacia", "celtas", "paulo", "justificacao-pela-fe"]
  },

  // 6. Romanos 1 (capítulo inteiro - síntèse)
  {
    id: "rm1",
    referencia: "Rm 1",
    local: "Corinto / Acaia (Grécia)",
    paisAtual: "Grécia",
    lider: "Paulo",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~57 d.C.",
    antes: "Paulo escreve aos cristãos em Roma, uma igreja que ele não havia fundado. Ele apresenta o evangelho de forma sistemática, mostrando que todos — judeus e gentios — estão sob o pecado e precisam da justificação pela fé.",
    versiculo: "📖 Paulo declara o evangelho como poder de Deus para salvação. Ele descreve a ira de Deus contra toda impiedade e injustiça dos homens que suprimem a verdade pela injustiça. A criação revela o poder e a divindade de Deus, tornando os homens indesculpáveis. Contudo, eles não O glorificaram nem Lhe deram graças, mas se tornaram vãos em seus pensamentos. Entregaram-se à impureza, trocaram a verdade de Deus pela mentira e adoraram a criatura em lugar do Criador. Deus os entregou a paixões infames e a uma mente reprovada.",
    depois: "Paulo conclui que todos, judeus e gentios, estão sob o pecado e precisam da justificação pela fé. Romanos tornou-se um dos livros mais influentes da história do cristianismo, sendo fundamental para Agostinho, Lutero, Calvino e para o movimento evangélico.",
    tags: "ira de Deus / pecado / revelação natural",
    assuntos: ["corinto", "paulo", "justificacao-pela-fe", "estoicismo", "epicurismo"]
  },

  // 7. 1 Coríntios 1.18 (Corinto - filosofia vs cruz)
  {
    id: "1co1.18",
    referencia: "1 Co 1.18",
    local: "Corinto / Acaia (Grécia)",
    paisAtual: "Grécia",
    lider: "Paulo",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~55 d.C.",
    antes: "Corinto era uma cidade portuária famosa por sua riqueza, imoralidade e diversidade cultural. Os coríntios valorizavam muito a retórica e a sabedoria filosófica grega. Havia divisões na igreja, com grupos seguindo Paulo, Apolo, Cefas e Cristo.",
    versiculo: "✅ Porque a palavra da cruz é loucura para os que perecem; mas para os que se salvam, para nós, é o poder de Deus.",
    depois: "Paulo argumenta que o evangelho não se baseia na sabedoria humana, mas no poder de Deus. A mensagem da cruz confronta o orgulho intelectual e oferece salvação aos humildes.",
    tags: "cruz / poder de Deus / loucura",
    assuntos: ["corinto", "filosofia-grega", "paulo", "retorica-grega"]
  },

  // 8. 1 Coríntios 9.25 (Jogos Ístmicos)
  {
    id: "1co9.25",
    referencia: "1 Co 9.25",
    local: "Corinto / Acaia (Grécia)",
    paisAtual: "Grécia",
    lider: "Paulo",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~55 d.C.",
    antes: "Corinto sediada os Jogos Ístmicos, um dos quatro grandes jogos pan-helênicos, realizados a cada dois anos. Os atletas treinavam rigorosamente e se abstinham de muitos prazeres para competir.",
    versiculo: "✅ Todo atleta que luta de tudo se abstém; eles o fazem para alcançar uma coroa corruptível; nós, porém, uma incorruptível.",
    depois: "Paulo usa a metáfora dos jogos para ensinar sobre o domínio próprio e a perseverança na vida cristã. A coroa corruptível (pinheiro) dos jogos contrasta com a coroa incorruptível da vida eterna.",
    tags: "domínio próprio / coroa / luta / atleta",
    assuntos: ["corinto", "jogos-istmicos", "cultura-grega"]
  },

  // 9. Apocalipse 2.10 (Patmos - perseguição)
  {
    id: "ap2.10",
    referencia: "Ap 2.10",
    local: "Patmos / Ilhas do Egeu (Grécia)",
    paisAtual: "Grécia",
    lider: "João",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~95 d.C.",
    antes: "O imperador Domiciano instituiu o culto ao imperador, exigindo que todos o adorassem como um deus. Os cristãos que recusavam eram perseguidos, presos ou exilados. João foi exilado na ilha de Patmos.",
    versiculo: "✅ Sê fiel até à morte, e dar-te-ei a coroa da vida.",
    depois: "A promessa da coroa da vida ecoava os jogos atléticos gregos. Para os cristãos perseguidos, a fidelidade até a morte seria recompensada com a vida eterna. A mensagem de Apocalipse fortaleceu os mártires nos séculos seguintes.",
    tags: "fidelidade / coroa / vida / perseguição",
    assuntos: ["patmos", "imperio-romano", "perseguicao-crista", "domiciano"]
  },

  // 10. Gênesis 1.1 (criação)
  {
    id: "gn1.1",
    referencia: "Gn 1.1",
    local: "Oriente Médio",
    paisAtual: "Oriente Médio",
    lider: "",
    liderReinado: "",
    periodo: "Patriarcas",
    periodoDatas: "~2166-1800 a.C.",
    data: "~1446-1406 a.C.",
    antes: "Os mitos de criação do Antigo Oriente Próximo (Enuma Elish na Mesopotâmia, mitos egípcios) descreviam origens violentas, com deuses lutando entre si. A criação era vista como resultado de conflitos cósmicos.",
    versiculo: "✅ No princípio criou Deus os céus e a terra.",
    depois: "Gênesis apresenta uma visão radicalmente diferente: um único Deus cria tudo com ordem e propósito. O ser humano é criado à imagem de Deus, com dignidade e responsabilidade sobre a criação. Este versículo fundamenta a cosmovisão judaico-cristã.",
    tags: "criação / princípio / Deus criou",
    assuntos: ["criacionismo", "cosmogonia", "mesopotamia", "hebreus"]
  },

  // 11. Atos 4.29-30
  {
    id: "at4.29",
    referencia: "At 4.29-30",
    local: "Jerusalém / Judéia (Israel)",
    paisAtual: "Israel",
    lider: "Pedro e João",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~30 d.C.",
    antes: "Pedro e João foram libertos pelo Sinédrio com ameaças. Voltaram para os irmãos e relataram tudo. A igreja se reuniu em oração, reconhecendo que as ameaças dos líderes religiosos eram reais e que precisavam de ousadia divina para continuar pregando.",
    versiculo: "✅ Agora, pois, ó Senhor, olha para as suas ameaças, e concede aos teus servos que falem a tua palavra com toda a ousadia; enquanto estendes a tua mão para curar, e para que se façam sinais e prodígios pelo nome de teu santo Filho Jesus.",
    depois: "Após a oração, o lugar onde estavam reunidos tremeu, e todos foram cheios do Espírito Santo. A igreja continuou pregando com ousadia, e muitos sinais e prodígios eram feitos pelos apóstolos.",
    tags: "oração / ousadia / sinais",
    assuntos: ["igreja-primitiva", "oracao", "sinais-prodigios"]
  },

  // 12. Atos 5.12-14
  {
    id: "at5.12",
    referencia: "At 5.12-14",
    local: "Jerusalém / Judéia (Israel)",
    paisAtual: "Israel",
    lider: "Apóstolos",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~30 d.C.",
    antes: "A igreja primitiva crescia rapidamente, mas também enfrentava problemas internos (Ananias e Safira) e externos (perseguição do Sinédrio). Os apóstolos realizavam muitos sinais e prodígios, atraindo ainda mais pessoas.",
    versiculo: "✅ E muitos sinais e prodígios eram feitos entre o povo pelas mãos dos apóstolos. E estavam todos unanimemente no alpendre de Salomão. Dos outros, nenhum ousava ajuntar-se a eles; mas o povo os tinha em grande estima. E a multidão dos que criam no Senhor, tanto homens como mulheres, cada vez mais se ajuntava.",
    depois: "A igreja continuava crescendo. Muitos doentes eram trazidos às ruas para que pelo menos a sombra de Pedro os cobrisse. Todos eram curados. Os líderes religiosos ficaram cada vez mais incomodados com o crescimento da igreja.",
    tags: "sinais / crescimento / apóstolos",
    assuntos: ["igreja-primitiva", "apostolos", "sinais-prodigios"]
  },

  // 13. Atos 20.18
  {
    id: "at20.18",
    referencia: "At 20.18",
    local: "Mileto / Ásia Menor (Turquia)",
    paisAtual: "Turquia",
    lider: "Paulo",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~57 d.C.",
    antes: "Paulo estava a caminho de Jerusalém, sabendo que o aguardavam prisões e sofrimentos. Ele convocou os anciãos da igreja de Éfeso para encontrá-lo em Mileto, evitando passar por Éfeso para não atrasar sua viagem.",
    versiculo: "✅ E, chegando a eles, disse-lhes: Vós bem sabeis como, desde o primeiro dia em que entrei na Ásia, me portei no meio de vós em todo o tempo.",
    depois: "Paulo faz um discurso de despedida emocionante, lembrando seu serviço fiel, as lágrimas e as perseguições. Ele afirma que não se considera culpado do sangue de ninguém, pois anunciou todo o conselho de Deus. Os anciãos choram e se despedem dele, sabendo que não o verão novamente.",
    tags: "testemunho / Paulo / despedida",
    assuntos: ["paulo", "mileto", "efeso", "anciãos"]
  },

  // 14. 1 Coríntios 1.7
  {
    id: "1co1.7",
    referencia: "1 Co 1.7",
    local: "Corinto / Acaia (Grécia)",
    paisAtual: "Grécia",
    lider: "Paulo",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~55 d.C.",
    antes: "Corinto era famosa por seus dons artísticos e culturais. Paulo usa essa imagem para falar dos dons espirituais. A igreja em Corinto era rica em dons, mas imatura em caráter.",
    versiculo: "✅ De maneira que não vos falte nenhum dom, esperando a manifestação de nosso Senhor Jesus Cristo.",
    depois: "Paulo exorta os coríntios a usarem os dons para edificação da igreja, com ordem e amor. A ênfase não deve ser nos dons em si, mas na espera vigilante pela volta de Cristo.",
    tags: "dons / espera / manifestação / Cristo",
    assuntos: ["corinto", "dons-espirituais", "paulo"]
  },

  // 15. 1 Coríntios 2.4
  {
    id: "1co2.4",
    referencia: "1 Co 2.4",
    local: "Corinto / Acaia (Grécia)",
    paisAtual: "Grécia",
    lider: "Paulo",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~55 d.C.",
    antes: "Os coríntios valorizavam muito a retórica e a eloquência. Havia oradores famosos que cobravam altos preços por seus discursos persuasivos. Paulo contrasta sua pregação com esses oradores.",
    versiculo: "✅ A minha palavra e a minha pregação não consistiram em palavras persuasivas de sabedoria humana, mas em demonstração do Espírito e de poder.",
    depois: "Paulo mostra que o poder do evangelho não está na habilidade oratória do pregador, mas na ação do Espírito Santo. A fé dos coríntios não se baseia na sabedoria humana, mas no poder de Deus.",
    tags: "poder divino / pregação / Espírito",
    assuntos: ["corinto", "paulo", "espirito-santo", "retorica-grega"]
  },

  // 16. 1 Coríntios 2.5
  {
    id: "1co2.5",
    referencia: "1 Co 2.5",
    local: "Corinto / Acaia (Grécia)",
    paisAtual: "Grécia",
    lider: "Paulo",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~55 d.C.",
    antes: "Paulo continua explicando por que sua pregação evitou a sabedoria humana. O objetivo não era impressionar, mas edificar uma fé sólida e duradoura.",
    versiculo: "✅ Para que a vossa fé não se apoiasse em sabedoria de homens, mas no poder de Deus.",
    depois: "A fé que se apoia na sabedoria humana desmorona diante das dificuldades. A fé que se apoia no poder de Deus resiste às provações e perseguições. Este princípio orientou a pregação de Paulo em toda sua carreira.",
    tags: "fé / poder de Deus / sabedoria humana",
    assuntos: ["corinto", "paulo", "fe-crista"]
  },

  // 17. 1 Coríntios 2.16
  {
    id: "1co2.16",
    referencia: "1 Co 2.16",
    local: "Corinto / Acaia (Grécia)",
    paisAtual: "Grécia",
    lider: "Paulo",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~55 d.C.",
    antes: "Paulo cita Isaías 40.13, que pergunta retoricamente quem conhece a mente do Senhor. No contexto do Antigo Testamento, ninguém poderia instruir a Deus.",
    versiculo: "✅ Porque quem conheceu a mente do Senhor, para que possa instruí-lo? Mas nós temos a mente de Cristo.",
    depois: "Pelo Espírito Santo, os crentes têm acesso à mente e ao entendimento de Cristo. Isso não significa que sabemos tudo, mas que temos a mente de Cristo como princípio orientador. O Espírito nos dá discernimento espiritual.",
    tags: "mente / Cristo / entendimento",
    assuntos: ["corinto", "paulo", "espirito-santo", "discernimento"]
  },

  // 18. 1 Coríntios 3.3
  {
    id: "1co3.3",
    referencia: "1 Co 3.3",
    local: "Corinto / Acaia (Grécia)",
    paisAtual: "Grécia",
    lider: "Paulo",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~55 d.C.",
    antes: "Havia divisões na igreja de Corinto. Alguns diziam 'sou de Paulo', outros 'sou de Apolo', outros 'sou de Cefas', e ainda outros 'sou de Cristo'. Paulo confronta essas divisões como carnais.",
    versiculo: "✅ Porque ainda sois carnais; pois, havendo entre vós inveja, contendas e dissensões, não sois porventura carnais, e não andais segundo os homens?",
    depois: "Paulo exorta os coríntios a superarem suas divisões, reconhecendo que tanto Paulo quanto Apolo são apenas servos de Deus. O importante é Deus, que dá o crescimento. A unidade na igreja deve refletir a unidade de Cristo.",
    tags: "carnal / ciúmes / divisões",
    assuntos: ["corinto", "paulo", "unidade-igreja", "divisoes"]
  },

  // 19. 1 Coríntios 4.20
  {
    id: "1co4.20",
    referencia: "1 Co 4.20",
    local: "Corinto / Acaia (Grécia)",
    paisAtual: "Grécia",
    lider: "Paulo",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~55 d.C.",
    antes: "Alguns coríntios estavam se tornando arrogantes, confiando em suas palavras e retórica, mas sem o poder que acompanha o verdadeiro evangelho.",
    versiculo: "✅ Porque o reino de Deus não consiste em palavras, mas em poder.",
    depois: "Paulo contrasta a arrogância dos que se orgulham de palavras com o verdadeiro poder do reino de Deus, manifestado em vidas transformadas, milagres e na atuação do Espírito Santo. As palavras sem poder são vazias.",
    tags: "reino de Deus / poder / palavras",
    assuntos: ["corinto", "paulo", "reino-deus", "poder-divino"]
  },

  // 20. 1 Coríntios 12.11
  {
    id: "1co12.11",
    referencia: "1 Co 12.11",
    local: "Corinto / Acaia (Grécia)",
    paisAtual: "Grécia",
    lider: "Paulo",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~55 d.C.",
    antes: "Os coríntios estavam orgulhosos de seus dons espirituais, especialmente o dom de línguas. Havia competição e comparação entre os membros da igreja.",
    versiculo: "✅ Mas um só e o mesmo Espírito opera todas estas coisas, repartindo particularmente a cada um como quer.",
    depois: "Paulo enfatiza que a distribuição dos dons é soberana. O Espírito dá como quer, não como o homem merece ou pede. Isso elimina o orgulho, pois nenhum dom é conquistado. Todos os dons são importantes para o corpo de Cristo.",
    tags: "dons / Espírito / repartir",
    assuntos: ["corinto", "dons-espirituais", "espirito-santo"]
  },

  // 21. 1 Coríntios 12.31
  {
    id: "1co12.31",
    referencia: "1 Co 12.31",
    local: "Corinto / Acaia (Grécia)",
    paisAtual: "Grécia",
    lider: "Paulo",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~55 d.C.",
    antes: "Paulo acabou de listar os dons espirituais (palavra da sabedoria, palavra da ciência, fé, dons de curar, operação de maravilhas, profecia, discernimento de espíritos, variedade de línguas, interpretação das línguas).",
    versiculo: "✅ Portanto, procurai com zelo os melhores dons; e eu vos mostrarei um caminho mais excelente.",
    depois: "Paulo instrui os coríntios a procurarem os melhores dons, mas anuncia que há algo ainda melhor: 'um caminho mais excelente' — o amor. Isso introduz o famoso capítulo 13 de 1 Coríntios, que descreve a superioridade do amor sobre todos os dons.",
    tags: "dons / melhores / caminho",
    assuntos: ["corinto", "dons-espirituais", "amor", "paulo"]
  },

  // 22. 1 Coríntios 13.1-3 (mais de 4 versículos - síntese)
  {
    id: "1co13.1",
    referencia: "1 Co 13.1-3",
    local: "Corinto / Acaia (Grécia)",
    paisAtual: "Grécia",
    lider: "Paulo",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~55 d.C.",
    antes: "Os coríntios estavam orgulhosos de seus dons espirituais. Paulo mostra que os dons sem amor são vazios e inúteis, independentemente de quão impressionantes sejam.",
    versiculo: "⚠️ Ainda que eu falasse as línguas dos homens e dos anjos, e não tivesse amor, seria como o metal que soa ou como o sino que tine. E ainda que tivesse o dom de profecia, e conhecesse todos os mistérios e toda a ciência, e ainda que tivesse toda a fé, de maneira tal que transportasse os montes, e não tivesse amor, nada seria. E ainda que distribuísse toda a minha fortuna para sustento dos pobres, e ainda que entregasse o meu corpo para ser queimado, e não tivesse amor, nada disso me aproveitaria.",
    depois: "Paulo estabelece o amor como o fundamento de todos os dons. Sem amor, os dons são barulho vazio, nada significam, e nada aproveitam. Este capítulo é conhecido como o 'hino ao amor' e é frequentemente lido em casamentos e celebrações cristãs.",
    tags: "amor / dons / nada sou / vazio",
    assuntos: ["corinto", "amor", "dons-espirituais", "paulo"]
  },

  // 23. 1 Coríntios 13.4-7 (mais de 4 versículos - síntese)
  {
    id: "1co13.4",
    referencia: "1 Co 13.4-7",
    local: "Corinto / Acaia (Grécia)",
    paisAtual: "Grécia",
    lider: "Paulo",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~55 d.C.",
    antes: "Após afirmar que o amor é superior a todos os dons, Paulo agora descreve as características do amor. Ele lista 15 características, muitas delas contrastando diretamente com o comportamento dos coríntios.",
    versiculo: "⚠️ O amor é sofredor, é benigno; o amor não é invejoso; não se vangloria, não se ensoberbece, não se porta inconvenientemente, não busca os seus interesses, não se irrita, não suspeita mal; não folga com a injustiça, mas folga com a verdade; tudo sofre, tudo crê, tudo espera, tudo suporta.",
    depois: "Os coríntios eram invejosos, orgulhosos, buscavam seus próprios interesses, irritavam-se facilmente. Paulo mostra que o amor é o oposto de tudo isso. O amor é paciente, bondoso, humilde, altruísta, controlado, justo, confiante, esperançoso e perseverante.",
    tags: "amor / benignidade / paciência / humildade",
    assuntos: ["corinto", "amor", "virtudes", "paulo"]
  },

  // 24. 2 Coríntios 1.18
  {
    id: "2co1.18",
    referencia: "2 Co 1.18",
    local: "Filipos / Macedônia (Grécia)",
    paisAtual: "Grécia",
    lider: "Paulo",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~55-56 d.C.",
    antes: "Paulo havia mudado seus planos de viagem para Corinto, o que gerou críticas de falsos mestres que o acusavam de ser inconstante e mentiroso. Paulo defende sua integridade.",
    versiculo: "✅ Antes, como Deus é fiel, a nossa palavra para convosco não foi sim e não.",
    depois: "Paulo argumenta que sua mudança de planos foi por amor e consideração, não por inconstância. A mensagem que ele pregou — o evangelho — é sempre 'sim' em Cristo, consistente e verdadeira, independentemente de seus planos de viagem.",
    tags: "fidelidade / palavra / verdade / consistência",
    assuntos: ["filipos", "paulo", "integridade", "evangelho"]
  },

  // 25. 2 Coríntios 2.14-17 (mais de 4 versículos - síntese)
  {
    id: "2co2.14",
    referencia: "2 Co 2.14-17",
    local: "Filipos / Macedônia (Grécia)",
    paisAtual: "Grécia",
    lider: "Paulo",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~55-56 d.C.",
    antes: "Paulo está descrevendo sua experiência como apóstolo. Ele usa uma metáfora poderosa do mundo romano: o triunfo militar, um desfile de vitória com incenso.",
    versiculo: "⚠️ Mas graças a Deus, que sempre nos faz triunfar em Cristo, e por nós manifesta em todo o lugar o cheiro do seu conhecimento. Porque para Deus somos o bom cheiro de Cristo, nos que se salvam e nos que se perdem. Para uns certamente cheiro de morte para morte; mas para outros cheiro de vida para vida. E para estas coisas, quem é suficiente? Porque não somos como muitos, que falsificam a palavra de Deus; antes, é com sinceridade, mas como de Deus, falamos na presença de Deus, em Cristo.",
    depois: "Paulo contrasta a pregação sincera do evangelho com a falsificação promovida por falsos mestres. O evangelho é como um incenso que traz vida para uns e morte para outros, dependendo da resposta de cada coração.",
    tags: "evangelho / fragrância / triunfo",
    assuntos: ["filipos", "paulo", "evangelho", "falsos-mestres"]
  },

  // 26. 2 Coríntios 3.18
  {
    id: "2co3.18",
    referencia: "2 Co 3.18",
    local: "Filipos / Macedônia (Grécia)",
    paisAtual: "Grécia",
    lider: "Paulo",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~55-56 d.C.",
    antes: "Paulo contrasta a glória passageira da antiga aliança (Lei de Moisés) com a glória permanente da nova aliança (Espírito). Moisés cobria o rosto com um véu porque a glória se desvanecia.",
    versiculo: "✅ Mas todos nós, com rosto descoberto, refletindo como um espelho a glória do Senhor, somos transformados de glória em glória na mesma imagem, como pelo Espírito do Senhor.",
    depois: "Na nova aliança, não há véu. Os crentes podem contemplar a glória de Deus com rosto descoberto, sendo transformados gradualmente à imagem de Cristo. Essa transformação é obra do Espírito Santo.",
    tags: "transformação / glória / Espírito",
    assuntos: ["filipos", "paulo", "espirito-santo", "transformacao", "nova-alianca"]
  },

  // 27. 2 Coríntios 4.2
  {
    id: "2co4.2",
    referencia: "2 Co 4.2",
    local: "Filipos / Macedônia (Grécia)",
    paisAtual: "Grécia",
    lider: "Paulo",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~55-56 d.C.",
    antes: "Paulo estava sendo acusado por falsos mestres em Corinto de ser astuto, enganador e de falsificar a palavra de Deus. Ele defende sua integridade ministerial.",
    versiculo: "✅ Antes, rejeitamos as coisas que, por vergonha, se ocultam, não andando com astúcia nem falsificando a palavra de Deus; antes, pela manifestação da verdade, nos recomendamos à consciência de qualquer homem, diante de Deus.",
    depois: "Paulo afirma que seu ministério é caracterizado por integridade, transparência e fidelidade à verdade. Ele não precisa de métodos enganosos para ganhar seguidores. A verdade do evangelho se recomenda por si mesma à consciência dos ouvintes.",
    tags: "integridade / verdade / falsificação / consciência",
    assuntos: ["filipos", "paulo", "integridade", "verdade"]
  },

  // 28. 2 Coríntios 4.4
  {
    id: "2co4.4",
    referencia: "2 Co 4.4",
    local: "Filipos / Macedônia (Grécia)",
    paisAtual: "Grécia",
    lider: "Paulo",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~55-56 d.C.",
    antes: "Paulo explica por que algumas pessoas não creem no evangelho. Apesar da clara manifestação da verdade, há uma oposição espiritual.",
    versiculo: "✅ Nos quais o deus deste século cegou os entendimentos dos incrédulos, para que lhes não resplandeça a luz do evangelho da glória de Cristo.",
    depois: "Satanás é chamado de 'deus deste século' porque exerce influência sobre o mundo incrédulo. Ele cega os entendimentos para que as pessoas não vejam a luz do evangelho. A salvação depende da ação divina que remove essa cegueira.",
    tags: "deus deste século / cegueira / incredulidade",
    assuntos: ["filipos", "paulo", "satanas", "cegueira-espiritual", "evangelho"]
  },

  // 29. 2 Coríntios 4.18
  {
    id: "2co4.18",
    referencia: "2 Co 4.18",
    local: "Filipos / Macedônia (Grécia)",
    paisAtual: "Grécia",
    lider: "Paulo",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~55-56 d.C.",
    antes: "Paulo sofria perseguição, prisões, naufrágios e muitas dificuldades. Ele encoraja os coríntios a não desanimarem diante das tribulações.",
    versiculo: "✅ Não atentando nós nas coisas que se veem, mas nas que se não veem; porque as que se veem são temporais, e as que se não veem são eternas.",
    depois: "Paulo ensina uma perspectiva celestial: foque no que você não vê (as coisas eternas), não no que você vê (as dificuldades temporais). Essa perspectiva transforma o sofrimento em leveza e prepara uma glória eterna incomparável.",
    tags: "eterno / temporal / perspectiva / renúncia",
    assuntos: ["filipos", "paulo", "eternidade", "perspectiva-crista", "sofrimento"]
  },

  // 30. 2 Coríntios 12.12
  {
    id: "2co12.12",
    referencia: "2 Co 12.12",
    local: "Filipos / Macedônia (Grécia)",
    paisAtual: "Grécia",
    lider: "Paulo",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~55-56 d.C.",
    antes: "Falsos mestres em Corinto questionavam o apostolado de Paulo, dizendo que ele não era um verdadeiro apóstolo como Pedro ou Tiago. Paulo defende seu apostolado.",
    versiculo: "✅ Os sinais do meu apostolado foram operados entre vós com toda a paciência, por sinais, prodígios e milagres.",
    depois: "Paulo lembra aos coríntios que Deus confirmou seu ministério com sinais, prodígios e milagres — as marcas genuínas de um apóstolo. A paciência em meio às perseguições também é um sinal de seu caráter apostólico.",
    tags: "sinais / apostolado / milagres",
    assuntos: ["filipos", "paulo", "apostolado", "sinais-prodigios", "milagres"]
  },

  // 31. João 14.6
  {
    id: "jo14.6",
    referencia: "Jo 14.6",
    local: "Jerusalém / Judéia (Israel)",
    paisAtual: "Israel",
    lider: "Jesus",
    liderReinado: "",
    periodo: "Período Romano",
    periodoDatas: "63 a.C. - 70 d.C.",
    data: "~30 d.C.",
    antes: "Jesus está no cenáculo com os discípulos na véspera de sua morte. Tomé havia perguntado: 'Senhor, não sabemos para onde vais; como podemos saber o caminho?'",
    versiculo: "✅ Disse-lhe Jesus: Eu sou o caminho, e a verdade, e a vida; ninguém vem ao Pai, senão por mim.",
    depois: "Esta declaração é uma das mais exclusivistas do Novo Testamento. Jesus não aponta para um caminho — Ele é o caminho. Não há outra maneira de chegar a Deus. Esta afirmação tem sido central na teologia cristã e controversa no diálogo inter-religioso.",
    tags: "caminho / verdade / vida",
    assuntos: ["jerusalem", "jesus", "exclusividade-crista", "salvacao"]
  },

  // 32. João 17.17
  {
    id: "jo17.17",
    referencia: "Jo 17.17",
    local: "Jerusalém / Judéia (Israel)",
    paisAtual: "Israel",
    lider: "Jesus",
    liderReinado: "",
    periodo: "Período Romano",
    periodoDatas: "63 a.C. - 70 d.C.",
    data: "~30 d.C.",
    antes: "Jesus ora pelos discípulos na véspera de sua morte (conhecida como oração sacerdotal). Ele pede ao Pai que os proteja e os santifique.",
    versiculo: "✅ Santifica-os na verdade; a tua palavra é a verdade.",
    depois: "Jesus afirma que a Palavra de Deus é a própria verdade. A santificação (separação para Deus) vem pela verdade — a Palavra de Deus. O crente é santificado à medida que se submete à verdade das Escrituras.",
    tags: "santificação / verdade / Palavra",
    assuntos: ["jerusalem", "jesus", "santificacao", "palavra-deus", "verdade"]
  },

  // 33. Mateus 7.16-20 (mais de 4 versículos - síntese)
  {
    id: "mt7.16",
    referencia: "Mt 7.16-20",
    local: "Galileia / Monte das Bem-aventuranças (Israel)",
    paisAtual: "Israel",
    lider: "Jesus",
    liderReinado: "",
    periodo: "Período Romano",
    periodoDatas: "63 a.C. - 70 d.C.",
    data: "~28 d.C.",
    antes: "Jesus está ensinando no Sermão da Montanha. Ele adverte sobre falsos profetas que se parecem com ovelhas, mas por dentro são lobos devoradores.",
    versiculo: "⚠️ Por seus frutos os conhecereis. Porventura colhem-se uvas dos espinheiros, ou figos dos cardos? Assim, toda árvore boa produz bons frutos, e toda árvore má produz maus frutos. Não pode a árvore boa dar maus frutos, nem a árvore má dar bons frutos. Toda árvore que não dá bom fruto corta-se e lança-se no fogo. Portanto, pelos seus frutos os conhecereis.",
    depois: "Jesus ensina que o critério de identificação de falsos profetas é o fruto, não a aparência ou o discurso. A árvore é conhecida pelo seu fruto. Este princípio tem sido usado para discernir líderes e ministérios genuínos ao longo da história da igreja.",
    tags: "fruto / árvore / reconhecimento / falsos profetas",
    assuntos: ["galileia", "jesus", "discernimento", "falsos-profetas", "fruto-espirito"]
  },

  // 34. Mateus 7.21-23 (mais de 4 versículos - síntese)
  {
    id: "mt7.21",
    referencia: "Mt 7.21-23",
    local: "Galileia / Monte das Bem-aventuranças (Israel)",
    paisAtual: "Israel",
    lider: "Jesus",
    liderReinado: "",
    periodo: "Período Romano",
    periodoDatas: "63 a.C. - 70 d.C.",
    data: "~28 d.C.",
    antes: "Jesus está concluindo o Sermão da Montanha. Ele já falou sobre falsos profetas; agora fala sobre falsos discípulos.",
    versiculo: "⚠️ Nem todo o que me diz: Senhor, Senhor! entrará no reino dos céus, mas aquele que faz a vontade de meu Pai, que está nos céus. Muitos me dirão naquele dia: Senhor, Senhor, não profetizamos em teu nome? e em teu nome não expulsamos demônios? e em teu nome não fizemos muitas maravilhas? E então lhes direi claramente: Nunca vos conheci; apartai-vos de mim, vós que praticais a iniquidade.",
    depois: "Jesus adverte que não basta confessar com os lábios ou fazer obras impressionantes. Resultados exteriores (profecia, exorcismos, milagres) não garantem aprovação divina se houver desobediência à vontade de Deus. O critério final é fazer a vontade do Pai.",
    tags: "obediência / vontade de Deus / falsos crentes",
    assuntos: ["galileia", "jesus", "obediencia", "falsos-crentes", "discernimento"]
  },

  // 35. Mateus 7.22-23
  {
    id: "mt7.22",
    referencia: "Mt 7.22-23",
    local: "Galileia / Monte das Bem-aventuranças (Israel)",
    paisAtual: "Israel",
    lider: "Jesus",
    liderReinado: "",
    periodo: "Período Romano",
    periodoDatas: "63 a.C. - 70 d.C.",
    data: "~28 d.C.",
    antes: "Jesus está concluindo o Sermão da Montanha. Ele acabou de falar sobre falsos profetas e falsos discípulos. Agora descreve o dia do julgamento.",
    versiculo: "✅ Muitos me dirão naquele dia: Senhor, Senhor, não profetizamos em teu nome? e em teu nome não expulsamos demônios? e em teu nome não fizemos muitas maravilhas? E então lhes direi claramente: Nunca vos conheci; apartai-vos de mim, vós que praticais a iniquidade.",
    depois: "Jesus adverte que resultados exteriores (profecia, exorcismos, milagres) não são prova de aprovação divina se houver desvio da verdade e da obediência. O conhecimento íntimo com Cristo é mais importante do que obras impressionantes.",
    tags: "aprovação divina / resultados / hipocrisia",
    assuntos: ["galileia", "jesus", "discernimento", "falsos-crentes"]
  },

  // 36. Mateus 11.29
  {
    id: "mt11.29",
    referencia: "Mt 11.29",
    local: "Galileia (Israel)",
    paisAtual: "Israel",
    lider: "Jesus",
    liderReinado: "",
    periodo: "Período Romano",
    periodoDatas: "63 a.C. - 70 d.C.",
    data: "~28 d.C.",
    antes: "Jesus denuncia as cidades que rejeitaram Seus milagres (Corazim, Betsaida, Cafarnaum). Em contraste, Ele ora ao Pai e convida os cansados a virem a Ele.",
    versiculo: "✅ Tomai sobre vós o meu jugo, e aprendei de mim, que sou manso e humilde de coração; e encontrareis descanso para as vossas almas.",
    depois: "O jugo era uma metáfora judaica para submissão à Lei. Jesus oferece um jugo suave — obediência a Ele. A mansidão e humildade são as marcas do verdadeiro discipulado. O descanso prometido é paz interior mesmo em meio às lutas.",
    tags: "mansidão / humildade / descanso / jugo",
    assuntos: ["galileia", "jesus", "discipulado", "mansidao", "humildade"]
  },

  // 37. Mateus 23 (capítulo inteiro - síntese)
  {
    id: "mt23",
    referencia: "Mt 23",
    local: "Jerusalém / Templo (Israel)",
    paisAtual: "Israel",
    lider: "Jesus",
    liderReinado: "",
    periodo: "Período Romano",
    periodoDatas: "63 a.C. - 70 d.C.",
    data: "~30 d.C.",
    antes: "Jesus está na semana final antes de sua morte. Ele confronta os líderes religiosos — escribas e fariseus — que se opõem a Ele e impõem fardos pesados sobre o povo.",
    versiculo: "📖 Jesus pronuncia sete 'ais' contra a hipocrisia dos escribas e fariseus. Ele os acusa de: fechar o reino dos céus aos homens, devorar as casas das viúvas, fazer longas orações por pretexto, percorrer terra e mar para fazer um prosélito, ensinar que juramentos podem ser quebrados, preocupar-se com o dízimo mas negligenciar a justiça, a misericórdia e a fé, limpar o exterior mas estar cheios de rapina e intemperança, ser como sepulcros caiados - bonitos por fora mas cheios de ossos e podridão, e construir túmulos para os profetas enquanto seus pais os mataram.",
    depois: "Este discurso é uma das críticas mais severas de Jesus à hipocrisia religiosa. Ele chama os fariseus de 'sepulcros caiados' e 'raça de víboras'. O capítulo termina com Jesus lamentando sobre Jerusalém, que mata os profetas.",
    tags: "hipocrisia / escribas / fariseus",
    assuntos: ["jerusalem", "jesus", "hipocrisia", "fariseus", "lideranca-religiosa"]
  },

  // 38. Mateus 23.27-28
  {
    id: "mt23.27",
    referencia: "Mt 23.27-28",
    local: "Jerusalém / Templo (Israel)",
    paisAtual: "Israel",
    lider: "Jesus",
    liderReinado: "",
    periodo: "Período Romano",
    periodoDatas: "63 a.C. - 70 d.C.",
    data: "~30 d.C.",
    antes: "Jesus já pronunciou vários 'ais' contra os fariseus. Ele está no auge de sua denúncia da hipocrisia religiosa.",
    versiculo: "✅ Ai de vós, escribas e fariseus, hipócritas! porque sois semelhantes aos sepulcros caiados, que por fora realmente parecem formosos, mas por dentro estão cheios de ossos de mortos e de toda imundícia.",
    depois: "Os sepulcros caiados eram túmulos pintados de branco, bonitos por fora, mas cheios de podridão por dentro. Jesus usa esta imagem poderosa para descrever a hipocrisia: aparência piedosa externa, mas coração corrompido internamente.",
    tags: "sepulcros caiados / hipocrisia",
    assuntos: ["jerusalem", "jesus", "hipocrisia", "fariseus"]
  },

  // 39. Mateus 24.11,24
  {
    id: "mt24.11",
    referencia: "Mt 24.11,24",
    local: "Monte das Oliveiras (Israel)",
    paisAtual: "Israel",
    lider: "Jesus",
    liderReinado: "",
    periodo: "Período Romano",
    periodoDatas: "63 a.C. - 70 d.C.",
    data: "~30 d.C.",
    antes: "Jesus está no Discurso Escatológico (Monte das Oliveiras), respondendo às perguntas dos discípulos sobre o fim dos tempos e sua volta.",
    versiculo: "✅ E muitos falsos profetas se levantarão, e enganarão a muitos. Porque surgirão falsos cristos e falsos profetas, e farão tão grandes sinais e prodígios, que, se possível fora, enganariam até os escolhidos.",
    depois: "Jesus adverte que nos últimos dias haverá engano religioso intenso. Os falsos profetas não serão óbvios — eles farão sinais e prodígios enganosos. Os escolhidos (verdadeiros crentes) não serão enganados porque estão enraizados na verdade.",
    tags: "falsos profetas / sinais enganosos / escolhidos",
    assuntos: ["monte-das-oliveiras", "jesus", "escatologia", "falsos-profetas", "discernimento"]
  },

  // 40. Efésios 4.2-3
  {
    id: "ef4.2",
    referencia: "Ef 4.2-3",
    local: "Roma / Itália",
    paisAtual: "Itália",
    lider: "Paulo",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~60-62 d.C.",
    antes: "Paulo está preso em Roma. Ele escreve aos efésios sobre a unidade da igreja. Antes de listar os dons, ele exorta às virtudes que mantêm a unidade.",
    versiculo: "✅ Com toda a humildade e mansidão, com longanimidade, suportando-vos uns aos outros em amor, procurando guardar a unidade do Espírito pelo vínculo da paz.",
    depois: "A unidade não é automática — precisa ser guardada. As virtudes necessárias são humildade, mansidão, paciência, tolerância e amor. A paz é o vínculo que mantém a unidade. Estas virtudes contrastam com o orgulho e a impaciência comuns nas igrejas.",
    tags: "humildade / unidade / paz",
    assuntos: ["roma", "paulo", "unidade-igreja", "humildade", "paz"]
  },

  // 41. Efésios 4.13-15 (mais de 4 versículos - síntese)
  {
    id: "ef4.13",
    referencia: "Ef 4.13-15",
    local: "Roma / Itália",
    paisAtual: "Itália",
    lider: "Paulo",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~60-62 d.C.",
    antes: "Paulo acabou de listar os dons de liderança (apóstolos, profetas, evangelistas, pastores e mestres). Agora explica o propósito desses dons.",
    versiculo: "⚠️ Até que todos cheguemos à unidade da fé e do conhecimento do Filho de Deus, à medida da estatura da plenitude de Cristo, para que não sejamos mais meninos inconstantes, levados em roda por todo vento de doutrina, pela astúcia dos homens, segundo o engano que anda à espreita. Mas, seguindo a verdade em amor, cresçamos em tudo naquele que é a cabeça, Cristo.",
    depois: "O objetivo final dos dons é a unidade, maturidade e estabilidade doutrinária. O crente maduro não é levado por qualquer vento de doutrina ou engano. O crescimento deve ser em amor e verdade, tendo Cristo como cabeça.",
    tags: "unidade / conhecimento / verdade",
    assuntos: ["roma", "paulo", "dons-espirituais", "maturidade", "unidade-igreja"]
  },

  // 42. Efésios 4.32
  {
    id: "ef4.32",
    referencia: "Ef 4.32",
    local: "Roma / Itália",
    paisAtual: "Itália",
    lider: "Paulo",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~60-62 d.C.",
    antes: "Paulo instrui os efésios a abandonarem amargura, ira, clamor e maldade. Ele contrasta o comportamento da velha natureza com a nova natureza em Cristo.",
    versiculo: "✅ Antes, sede uns para com os outros benignos, misericordiosos, perdoando-vos uns aos outros, como também Deus vos perdoou em Cristo.",
    depois: "O padrão do perdão cristão é o perdão que recebemos de Deus. Devemos perdoar uns aos outros da mesma forma que Deus nos perdoou — completamente e sem reservas. A bondade e a misericórdia devem caracterizar os relacionamentos cristãos.",
    tags: "bondade / perdão / Deus",
    assuntos: ["roma", "paulo", "perdao", "bondade", "misericordia"]
  },

  // 43. Efésios 5.9
  {
    id: "ef5.9",
    referencia: "Ef 5.9",
    local: "Roma / Itália",
    paisAtual: "Itália",
    lider: "Paulo",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~60-62 d.C.",
    antes: "Paulo exorta os efésios a andarem como filhos da luz, em contraste com as obras infrutíferas das trevas (imoralidade, impureza, avareza).",
    versiculo: "✅ Porque o fruto da luz consiste em toda a bondade, e justiça, e verdade.",
    depois: "O fruto da luz (vida em Cristo) é bondade, justiça e verdade — três virtudes que refletem o caráter de Deus. Estas contrastam diretamente com as obras das trevas. O crente deve expor as trevas e viver como luz no mundo.",
    tags: "bondade / justiça / verdade / luz",
    assuntos: ["roma", "paulo", "luz", "virtudes", "justica"]
  },

  // 44. Efésios 5.26
  {
    id: "ef5.26",
    referencia: "Ef 5.26",
    local: "Roma / Itália",
    paisAtual: "Itália",
    lider: "Paulo",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~60-62 d.C.",
    antes: "Paulo explica o amor de Cristo pela igreja usando o casamento como metáfora. Cristo amou a igreja e se entregou por ela.",
    versiculo: "✅ Para a santificar, purificando-a com a lavagem da água, pela palavra.",
    depois: "A santificação da igreja ocorre pela 'lavagem da água pela palavra' — o batismo e o ensino das Escrituras. Cristo purifica sua igreja para apresentá-la a si mesmo como igreja gloriosa, sem mancha ou ruga.",
    tags: "lavar / água / Palavra",
    assuntos: ["roma", "paulo", "santificacao", "palavra-deus", "igreja"]
  },

  // 45. Filipenses 1.6
  {
    id: "fp1.6",
    referencia: "Fp 1.6",
    local: "Roma / Itália",
    paisAtual: "Itália",
    lider: "Paulo",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~60-62 d.C.",
    antes: "Paulo está preso em Roma, mas escreve uma carta alegre aos filipenses. Ele agradece pela parceria deles no evangelho desde o primeiro dia.",
    versiculo: "✅ Tendo por certo isto mesmo: que aquele que em vós começou a boa obra a aperfeiçoará até o dia de Jesus Cristo.",
    depois: "Paulo confia na fidelidade de Deus para completar a obra que Ele mesmo começou. Esta certeza dá segurança aos filipenses que enfrentavam perseguição. A obra da salvação é iniciada e completada por Deus.",
    tags: "começou / completará / Cristo",
    assuntos: ["roma", "paulo", "fidelidade-deus", "salvacao", "perseveranca"]
  },

  // 46. Filipenses 1.11
  {
    id: "fp1.11",
    referencia: "Fp 1.11",
    local: "Roma / Itália",
    paisAtual: "Itália",
    lider: "Paulo",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~60-62 d.C.",
    antes: "Paulo ora para que os filipenses sejam puros e inculpáveis no dia de Cristo, cheios do fruto da justiça.",
    versiculo: "✅ Cheios dos frutos de justiça, que são por Jesus Cristo, para glória e louvor de Deus.",
    depois: "Os frutos da justiça não são produzidos pelo esforço humano, mas vêm por Jesus Cristo. O propósito final de nossa vida e boas obras é a glória e louvor de Deus, não o autoengrandecimento.",
    tags: "fruto / justiça / glória",
    assuntos: ["roma", "paulo", "justica", "gloria-deus", "fruto-espirito"]
  },

  // 47. Filipenses 2.3-5 (até 4 versículos - integral)
  {
    id: "fp2.3",
    referencia: "Fp 2.3-5",
    local: "Roma / Itália",
    paisAtual: "Itália",
    lider: "Paulo",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~60-62 d.C.",
    antes: "Paulo exorta os filipenses à humildade e à unidade. Havia indícios de rivalidade e orgulho na igreja de Filipos.",
    versiculo: "✅ Nada façais por contenda ou por vanglória, mas com humildade cada um considere os outros superiores a si mesmo. Não atente cada um para o que é propriamente seu, mas cada qual também para o que é dos outros. Tende em vós o mesmo sentimento que houve também em Cristo Jesus.",
    depois: "Paulo dá a motivação prática da humildade, usando o exemplo de Cristo que se humilhou na encarnação e na morte de cruz. Este é o famoso 'hino cristológico' que descreve a kenosis (esvaziamento) de Cristo.",
    tags: "humildade / exemplo / Cristo",
    assuntos: ["roma", "paulo", "humildade", "exemplo-cristo", "unidade-igreja"]
  },

  // 48. Filipenses 4.4
  {
    id: "fp4.4",
    referencia: "Fp 4.4",
    local: "Roma / Itália",
    paisAtual: "Itália",
    lider: "Paulo",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~60-62 d.C.",
    antes: "Paulo está preso em Roma, acorrentado a um soldado, aguardando julgamento que pode levar à morte. Mesmo assim, ele ordena alegria.",
    versiculo: "✅ Regozijai-vos sempre no Senhor; outra vez digo, regozijai-vos.",
    depois: "A alegria cristã não depende das circunstâncias. Paulo está na cadeia, mas ordena alegria. A fonte da alegria é 'no Senhor', não nas circunstâncias favoráveis. Esta é uma das marcas distintivas do cristianismo.",
    tags: "alegria / regozijo / Senhor",
    assuntos: ["roma", "paulo", "alegria", "fe-circunstancias", "perseveranca"]
  },

  // 49. Filipenses 4.7
  {
    id: "fp4.7",
    referencia: "Fp 4.7",
    local: "Roma / Itália",
    paisAtual: "Itália",
    lider: "Paulo",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~60-62 d.C.",
    antes: "Paulo acabou de instruir sobre a oração: 'Não estejais ansiosos... em tudo, pela oração e súplica, com ações de graças, apresentai vossos pedidos a Deus'.",
    versiculo: "✅ E a paz de Deus, que excede todo o entendimento, guardará os vossos corações e os vossos pensamentos em Cristo Jesus.",
    depois: "A paz de Deus é o resultado imediato da oração e gratidão. Ela 'guarda' (como sentinelas guardam uma cidade) os corações e pensamentos dos crentes. Esta paz não pode ser explicada pela lógica humana — excede todo entendimento.",
    tags: "paz / guarda / entendimento / oração",
    assuntos: ["roma", "paulo", "paz-deus", "oracao", "gratidao"]
  },

  // 50. Gálatas 4.19
  {
    id: "gl4.19",
    referencia: "Gl 4.19",
    local: "Galácia / Ásia Menor (Turquia)",
    paisAtual: "Turquia",
    lider: "Paulo",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~49-55 d.C.",
    antes: "Paulo está profundamente preocupado com os gálatas que estão voltando à Lei de Moisés depois de terem recebido o Espírito pela fé.",
    versiculo: "✅ Meus filhos, por quem de novo sinto as dores de parto, até que Cristo seja formado em vós.",
    depois: "Paulo usa a metáfora do parto para expressar sua angústia pastoral. Ele já deu à luz os gálatas espiritualmente, mas agora sente dores de parto novamente porque eles estão se desviando. O objetivo é que Cristo seja formado neles — crescimento espiritual contínuo.",
    tags: "formação / Cristo / dores",
    assuntos: ["galacia", "paulo", "formacao-cristo", "cuidado-pastoral", "evangelho"]
  },

  // 51. Gálatas 5.8
  {
    id: "gl5.8",
    referencia: "Gl 5.8",
    local: "Galácia / Ásia Menor (Turquia)",
    paisAtual: "Turquia",
    lider: "Paulo",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~49-55 d.C.",
    antes: "Paulo está confrontando os gálatas que estavam sendo persuadidos por falsos mestres a seguir a Lei de Moisés. A persuasão deles era forte e convincente.",
    versiculo: "✅ Esta persuasão não vem daquele que vos chamou.",
    depois: "Paulo afirma que a fonte da persuasão dos falsos mestres não é Deus. A verdadeira chamada de Deus leva à liberdade em Cristo, não à escravidão da Lei. Este versículo ajuda os crentes a discernir a origem das doutrinas que ouvem.",
    tags: "persuasão / falsos mestres / chamado de Deus",
    assuntos: ["galacia", "paulo", "falsos-mestres", "discernimento"]
  },

  // 52. Gálatas 5.16
  {
    id: "gl5.16",
    referencia: "Gl 5.16",
    local: "Galácia / Ásia Menor (Turquia)",
    paisAtual: "Turquia",
    lider: "Paulo",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~49-55 d.C.",
    antes: "Paulo está introduzindo o contraste entre carne e Espírito. Ele acabou de dizer que a liberdade cristã não deve ser usada para a carne, mas para servir uns aos outros pelo amor.",
    versiculo: "✅ Digo, porém: Andai pelo Espírito, e não haveis de satisfazer os desejos da carne.",
    depois: "Andar pelo Espírito significa viver em dependência diária do Espírito Santo. Quando isso acontece, os desejos da carne (natureza pecaminosa) não têm domínio sobre o crente. Esta é a chave para a vida cristã vitoriosa.",
    tags: "andar / Espírito / carne",
    assuntos: ["galacia", "paulo", "espirito-santo", "vida-espiritual", "carne-espirito"]
  },

  // 53. Gálatas 5.19-21 (mais de 4 versículos - síntese)
  {
    id: "gl5.19",
    referencia: "Gl 5.19-21",
    local: "Galácia / Ásia Menor (Turquia)",
    paisAtual: "Turquia",
    lider: "Paulo",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~49-55 d.C.",
    antes: "Paulo acabou de dizer: 'Andai pelo Espírito e não satisfareis os desejos da carne'. Ele agora exemplifica o que a carne produz, listando 15 obras da carne.",
    versiculo: "⚠️ Porque as obras da carne são manifestas: adultério, fornicação, impureza, lascívia, idolatria, feitiçaria, inimizades, porfias, ciúmes, iras, discórdias, dissensões, facções, invejas, bebedices, glutonarias e coisas semelhantes a estas, as quais vos declaro, como já antes vos disse, que os que cometem tais coisas não herdarão o reino de Deus.",
    depois: "A lista das obras da carne inclui pecados sexuais, religiosos (idolatria, feitiçaria), relacionais (inimizades, ciúmes, iras, discórdias) e de excesso (bebedices, glutonarias). Paulo é enfático: os que praticam tais coisas não herdarão o reino de Deus.",
    tags: "obras da carne / governo / vida",
    assuntos: ["galacia", "paulo", "obras-carne", "pecado", "reino-deus"]
  },

  // 54. Gálatas 5.22-23
  {
    id: "gl5.22",
    referencia: "Gl 5.22-23",
    local: "Galácia / Ásia Menor (Turquia)",
    paisAtual: "Turquia",
    lider: "Paulo",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~49-55 d.C.",
    antes: "Após listar as obras da carne (imoralidade, idolatria, inimizades), Paulo agora contrasta com o fruto do Espírito. Falsos mestres haviam chegado na Galácia depois que Paulo saiu.",
    versiculo: "✅ Mas o fruto do Espírito é: amor, alegria, paz, longanimidade, benignidade, bondade, fidelidade, mansidão, domínio próprio; contra estas coisas não há lei.",
    depois: "Ao contrário das 'obras' da carne (plural), o Espírito produz um único 'fruto' (singular) com nove virtudes. A lei não é contra o fruto do Espírito. Este é um dos textos mais conhecidos sobre o caráter cristão.",
    tags: "fruto do Espírito / virtudes / caráter",
    assuntos: ["galacia", "paulo", "fruto-espirito", "virtudes", "carater-cristao"]
  },

  // 55. Gálatas 5.22-23a
  {
    id: "gl5.22a",
    referencia: "Gl 5.22-23a",
    local: "Galácia / Ásia Menor (Turquia)",
    paisAtual: "Turquia",
    lider: "Paulo",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~49-55 d.C.",
    antes: "Mesmo contexto do versículo anterior. Esta versão é usada como versículo-chave em muitas lições.",
    versiculo: "✅ Mas o fruto do Espírito é: amor, alegria, paz, longanimidade, benignidade, bondade, fidelidade, mansidão, domínio próprio.",
    depois: "As nove virtudes do fruto do Espírito são: amor (ágape), alegria (chara), paz (eirene), paciência (makrothymia), benignidade (chrestotes), bondade (agathosyne), fidelidade (pistis), mansidão (prautes), domínio próprio (enkrateia).",
    tags: "fruto do Espírito / versículo-chave / nove virtudes",
    assuntos: ["galacia", "paulo", "fruto-espirito", "versiculo-chave"]
  },

  // 56. Gálatas 5.25
  {
    id: "gl5.25",
    referencia: "Gl 5.25",
    local: "Galácia / Ásia Menor (Turquia)",
    paisAtual: "Turquia",
    lider: "Paulo",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~49-55 d.C.",
    antes: "Paulo acabou de contrastar as obras da carne (versículos 19-21) com o fruto do Espírito (versículos 22-23). Ele conclui a seção com esta exortação prática.",
    versiculo: "✅ Se vivemos pelo Espírito, andemos também pelo Espírito.",
    depois: "A vida espiritual não é apenas uma posição (viver pelo Espírito), mas também uma prática diária (andar pelo Espírito). 'Andar' no grego (stoicheo) implica ordem, disciplina e direção. O crente deve alinhar seus passos com a direção do Espírito.",
    tags: "andar / Espírito / viver",
    assuntos: ["galacia", "paulo", "vida-espiritual", "andar-espirito"]
  },

  // 57. Gálatas 6.9
  {
    id: "gl6.9",
    referencia: "Gl 6.9",
    local: "Galácia / Ásia Menor (Turquia)",
    paisAtual: "Turquia",
    lider: "Paulo",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~49-55 d.C.",
    antes: "Paulo está concluindo a carta aos Gálatas. Ele acabou de falar sobre semear na carne ou no Espírito. Agora exorta os gálatas a não desanimarem na prática do bem.",
    versiculo: "✅ E não nos cansemos de fazer o bem, porque a seu tempo ceifaremos, se não desanimarmos.",
    depois: "Fazer o bem pode ser desgastante, especialmente quando não vemos resultados imediatos. Paulo promete que haverá uma colheita no tempo certo. A perseverança é a chave para experimentar a recompensa divina.",
    tags: "bem / desanimar / ceifar",
    assuntos: ["galacia", "paulo", "perseveranca", "fazer-o-bem", "colheita"]
  },

  // 58. Romanos 1.19
  {
    id: "rm1.19",
    referencia: "Rm 1.19",
    local: "Corinto / Acaia (Grécia)",
    paisAtual: "Grécia",
    lider: "Paulo",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~57 d.C.",
    antes: "Paulo argumenta que o conhecimento de Deus está disponível a todas as pessoas. Ele está estabelecendo a culpabilidade universal da humanidade.",
    versiculo: "✅ Porquanto o que de Deus se pode conhecer neles se manifesto, porque Deus lhes manifestou.",
    depois: "Deus não se escondeu. Ele se manifestou de forma que todos podem conhecer algo sobre Ele. A criação e a consciência são evidências suficientes para tornar os homens responsáveis por sua resposta a Deus.",
    tags: "revelação / conhecimento de Deus / manifesto",
    assuntos: ["corinto", "paulo", "revelacao-natural", "conhecimento-deus"]
  },

  // 59. Romanos 1.20
  {
    id: "rm1.20",
    referencia: "Rm 1.20",
    local: "Corinto / Acaia (Grécia)",
    paisAtual: "Grécia",
    lider: "Paulo",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~57 d.C.",
    antes: "Paulo continua seu argumento sobre a revelação natural de Deus. Ele agora declara que os atributos invisíveis de Deus são claramente vistos através da criação.",
    versiculo: "✅ Porque as suas coisas invisíveis, desde a criação do mundo, tanto o seu eterno poder como a sua divindade, se entendem e claramente se veem pelas coisas que estão criadas.",
    depois: "A criação não prova apenas que Deus existe, mas revela seus atributos: poder eterno e divindade. Ninguém tem desculpa para não reconhecer a Deus. Este versículo é fundamental para a teologia da revelação natural.",
    tags: "criação / poder divino / atributos",
    assuntos: ["corinto", "paulo", "revelacao-natural", "criacao", "atributos-deus"]
  },

  // 60. Romanos 1.22
  {
    id: "rm1.22",
    referencia: "Rm 1.22",
    local: "Corinto / Acaia (Grécia)",
    paisAtual: "Grécia",
    lider: "Paulo",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~57 d.C.",
    antes: "Paulo descreve a queda da humanidade: embora conhecessem a Deus, não o glorificaram. Em vez disso, se tornaram vãos em seus pensamentos.",
    versiculo: "✅ Dizendo-se sábios, tornaram-se loucos.",
    depois: "A ironia da queda: quanto mais os seres humanos se arrogam sábios (especialmente os filósofos gregos), mais se tornam tolos. A verdadeira sabedoria começa com o temor do Senhor. A sabedoria sem Deus é tolice.",
    tags: "orgulho / sabedoria / loucura",
    assuntos: ["corinto", "paulo", "sabedoria-humana", "orgulho", "tolice"]
  },

  // 61. Romanos 1.18-21 (mais de 4 versículos - síntese)
  {
    id: "rm1.18-21",
    referencia: "Rm 1.18-21",
    local: "Corinto / Acaia (Grécia)",
    paisAtual: "Grécia",
    lider: "Paulo",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~57 d.C.",
    antes: "Paulo estabelece a necessidade da salvação ao mostrar que a humanidade conhece a Deus pela criação, mas suprime essa verdade em injustiça.",
    versiculo: "⚠️ Porque a ira de Deus se revela do céu contra toda impiedade e injustiça dos homens que detêm a verdade em injustiça. Porquanto o que de Deus se pode conhecer neles se manifesta, porque Deus lhes manifestou. Porque as suas coisas invisíveis, desde a criação do mundo, tanto o seu eterno poder como a sua divindade, se entendem e claramente se veem pelas coisas que estão criadas, para que eles fiquem inescusáveis. Porquanto, tendo conhecido a Deus, não o glorificaram como Deus, nem lhe deram graças, antes em seus discursos se desvaneceram, e o seu coração insensato se obscureceu.",
    depois: "Este é um dos textos mais importantes sobre a revelação natural. Deus se revelou na criação, mas os homens suprimiram essa verdade. A consequência é a ira de Deus e a entrega aos desejos pecaminosos.",
    tags: "ira de Deus / criação / conhecimento",
    assuntos: ["corinto", "paulo", "ira-deus", "revelacao-natural", "pecado"]
  },

  // 62. Romanos 2.21-24 (mais de 4 versículos - síntese)
  {
    id: "rm2.21",
    referencia: "Rm 2.21-24",
    local: "Corinto / Acaia (Grécia)",
    paisAtual: "Grécia",
    lider: "Paulo",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~57 d.C.",
    antes: "Paulo confronta a hipocrisia judaica. Os judeus se orgulhavam da Lei, mas eles mesmos a desobedeciam.",
    versiculo: "⚠️ Tu, pois, que ensinas a outrem, não te ensinas a ti mesmo? Tu que pregas que não se deve furtar, furtas? Tu que dizes que não se deve adulterar, adulteras? Tu que abominas os ídolos, cometes sacrilégio? Tu que te glorias na lei, desonras a Deus pela transgressão da lei? Porque, como está escrito, por causa de vós o nome de Deus é blasfemado entre os gentios.",
    depois: "Paulo expõe a hipocrisia: ensinar sem praticar. Quando líderes religiosos vivem em contradição com o que ensinam, o nome de Deus é blasfemado entre os incrédulos. Este princípio aplica-se a todos os líderes cristãos.",
    tags: "ensinar / praticar / exemplo",
    assuntos: ["corinto", "paulo", "hipocrisia", "exemplo", "lideranca-crista"]
  },

  // 63. Romanos 3.11
  {
    id: "rm3.11",
    referencia: "Rm 3.11",
    local: "Corinto / Acaia (Grécia)",
    paisAtual: "Grécia",
    lider: "Paulo",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~57 d.C.",
    antes: "Paulo cita o Salmo 14 e Salmo 53 para mostrar que toda a humanidade está sob o pecado. Ninguém é justo por si mesmo.",
    versiculo: "✅ Não há quem entenda; não há quem busque a Deus.",
    depois: "A consequência do pecado é universal: ninguém naturalmente entende as coisas espirituais ou busca a Deus. A iniciativa da salvação parte de Deus, não do homem. Este versículo fundamenta a doutrina da depravação total.",
    tags: "natureza pecaminosa / afastamento de Deus",
    assuntos: ["corinto", "paulo", "depravacao-total", "pecado", "busca-por-deus"]
  },

  // 64. Romanos 8.18
  {
    id: "rm8.18",
    referencia: "Rm 8.18",
    local: "Corinto / Acaia (Grécia)",
    paisAtual: "Grécia",
    lider: "Paulo",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~57 d.C.",
    antes: "Paulo reconhece a realidade do sofrimento presente. Ele já falou sobre a glória futura que aguarda os crentes.",
    versiculo: "✅ Porque para mim tenho por certo que as aflições deste tempo presente não são para comparar com a glória que em nós há de ser revelada.",
    depois: "Paulo não nega o sofrimento — ele o reconhece. Mas ele o compara com a glória futura. A glória é tão superior ao sofrimento que torna o sofrimento presente leve e momentâneo. Esta é a perspectiva que sustenta os crentes nas tribulações.",
    tags: "sofrimento / glória / futuro",
    assuntos: ["corinto", "paulo", "sofrimento", "gloria-futura", "esperanca"]
  },

  // 65. Romanos 8.28
  {
    id: "rm8.28",
    referencia: "Rm 8.28",
    local: "Corinto / Acaia (Grécia)",
    paisAtual: "Grécia",
    lider: "Paulo",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~57 d.C.",
    antes: "Paulo declara que Deus usa até mesmo as dificuldades para o bem daqueles que O amam. Isso responde ao problema do mal e do sofrimento.",
    versiculo: "✅ E sabemos que todas as coisas contribuem juntamente para o bem daqueles que amam a Deus, daqueles que são chamados segundo o seu propósito.",
    depois: "Não é que todas as coisas sejam boas em si mesmas. Mas Deus, em sua soberania, faz com que todas as coisas (incluindo o mal e o sofrimento) cooperem para o bem dos que O amam. Este versículo é um dos mais preciosos para os crentes em meio às dificuldades.",
    tags: "propósito / bem / amor a Deus",
    assuntos: ["corinto", "paulo", "soberania-deus", "proposito-divino", "sofrimento"]
  },

  // 66. Romanos 8.29
  {
    id: "rm8.29",
    referencia: "Rm 8.29",
    local: "Corinto / Acaia (Grécia)",
    paisAtual: "Grécia",
    lider: "Paulo",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~57 d.C.",
    antes: "Paulo explica o propósito final da predestinação. Ele está descrevendo o plano de Deus para os crentes.",
    versiculo: "✅ Porque os que dantes conheceu, também os predestinou para serem conformes à imagem de seu Filho.",
    depois: "O alvo da predestinação não é apenas a salvação, mas a conformidade com a imagem de Cristo. Deus quer que os crentes se tornem semelhantes a Jesus em caráter. Este é o propósito final da vida cristã.",
    tags: "predestinado / imagem / Cristo",
    assuntos: ["corinto", "paulo", "predestinacao", "imagem-cristo", "santificacao"]
  },

  // 67. Romanos 12.2
  {
    id: "rm12.2",
    referencia: "Rm 12.2",
    local: "Corinto / Acaia (Grécia)",
    paisAtual: "Grécia",
    lider: "Paulo",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~57 d.C.",
    antes: "Paulo acabou de exortar os romanos a apresentarem seus corpos como sacrifício vivo. Ele agora explica o conteúdo dessa apresentação.",
    versiculo: "✅ E não vos conformeis com este mundo, mas transformai-vos pela renovação da vossa mente, para que experimenteis qual seja a boa, agradável e perfeita vontade de Deus.",
    depois: "Há duas partes: (1) não se conformar com o mundo (pressão externa), (2) transformar-se pela renovação da mente (mudança interna). O resultado é experimentar a vontade de Deus — boa, agradável e perfeita. Este é um dos versículos mais citados sobre a vida cristã.",
    tags: "mente / renovar / vontade",
    assuntos: ["corinto", "paulo", "renovacao-mente", "vontade-deus", "nao-conformidade"]
  },

  // 68. Romanos 12.18
  {
    id: "rm12.18",
    referencia: "Rm 12.18",
    local: "Corinto / Acaia (Grécia)",
    paisAtual: "Grécia",
    lider: "Paulo",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~57 d.C.",
    antes: "Paulo está dando instruções sobre como viver em comunidade. Ele já falou sobre abençoar perseguidores e viver em harmonia.",
    versiculo: "✅ Se for possível, quanto depender de vós, tende paz com todos os homens.",
    depois: "Paulo reconhece que a paz nem sempre depende apenas de nós — 'se for possível'. Mas exorta os crentes a fazerem tudo ao seu alcance para viver em paz. A paz deve ser buscada ativamente, mas não às custas da verdade ou da justiça.",
    tags: "paz / todos / possível",
    assuntos: ["corinto", "paulo", "paz", "relacionamentos", "convivencia"]
  },

  // 69. Efésios 4.14-15 (mais de 4 versículos - síntese)
  {
    id: "ef4.14",
    referencia: "Ef 4.14-15",
    local: "Roma / Itália",
    paisAtual: "Itália",
    lider: "Paulo",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~60-62 d.C.",
    antes: "Paulo explica o propósito dos dons de liderança: maturidade e estabilidade, para não serem mais como crianças instáveis.",
    versiculo: "⚠️ Para que não sejamos mais meninos inconstantes, levados em roda por todo vento de doutrina, pela astúcia dos homens, segundo o engano que anda à espreita. Mas, seguindo a verdade em amor, cresçamos em tudo naquele que é a cabeça, Cristo.",
    depois: "A instabilidade doutrinária é comparada a crianças sendo levadas por qualquer vento. A maturidade traz estabilidade. O crescimento deve ocorrer 'seguindo a verdade em amor' — verdade e amor não são opostos, mas complementares.",
    tags: "doutrina / verdade / crescimento",
    assuntos: ["roma", "paulo", "maturidade-crista", "doutrina", "verdade"]
  },

  // 70. 1 Timóteo 4.7-8
  {
    id: "1tm4.7",
    referencia: "1 Tm 4.7-8",
    local: "Éfeso / Ásia Menor (Turquia)",
    paisAtual: "Turquia",
    lider: "Paulo",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~62-64 d.C.",
    antes: "Paulo instrui Timóteo, um jovem líder, sobre como pastorear a igreja em Éfeso. Havia falsos mestres ensinando doutrinas estranhas.",
    versiculo: "✅ Exercita-te na piedade. Porque o exercício corporal para pouco aproveita, mas a piedade para tudo é proveitosa, tendo a promessa da vida presente e da futura.",
    depois: "Paulo contrasta o exercício físico (ginástica), que tem proveito limitado, com o exercício espiritual (piedade), que tem proveito para esta vida e para a vindoura. A piedade não é opcional, mas essencial para a vida cristã.",
    tags: "exercício / piedade / promessa",
    assuntos: ["efeso", "paulo", "piedade", "disciplina-espiritual", "timoteo"]
  },

  // 71. 1 Timóteo 4.12
  {
    id: "1tm4.12",
    referencia: "1 Tm 4.12",
    local: "Éfeso / Ásia Menor (Turquia)",
    paisAtual: "Turquia",
    lider: "Paulo",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~62-64 d.C.",
    antes: "Timóteo era jovem liderando a igreja em Éfeso, onde havia anciãos mais velhos. Paulo o encoraja a não se deixar intimidar pela idade.",
    versiculo: "✅ Ninguém despreze a tua mocidade; mas sê o exemplo dos fiéis na palavra, no trato, no amor, no espírito, na fé, na pureza.",
    depois: "Em vez de exigir respeito, Timóteo deveria conquistá-lo sendo exemplo em seis áreas: palavra (fala), trato (comportamento), amor (ágape), espírito (entusiasmo espiritual), fé (confiança em Deus), pureza (santidade). A idade não é desculpa para falta de exemplo.",
    tags: "exemplo / palavra / pureza",
    assuntos: ["efeso", "paulo", "exemplo", "lideranca", "timoteo"]
  },

  // 72. 1 Timóteo 6.5-10 (mais de 4 versículos - síntese)
  {
    id: "1tm6.5",
    referencia: "1 Tm 6.5-10",
    local: "Éfeso / Ásia Menor (Turquia)",
    paisAtual: "Turquia",
    lider: "Paulo",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~62-64 d.C.",
    antes: "Paulo adverte Timóteo sobre falsos mestres que ensinam por ganância. Eles tratam a piedade como fonte de lucro.",
    versiculo: "⚠️ Mas os que querem ser ricos caem em tentação, e em laço, e em muitas concupiscências loucas e nocivas, que submergem os homens na perdição e ruína. Porque o amor ao dinheiro é a raiz de toda espécie de males; e nessa cobiça alguns se desviaram da fé, e se traspassaram a si mesmos com muitas dores.",
    depois: "Paulo adverte que o amor ao dinheiro (não o dinheiro em si) é a raiz de todos os males. Muitos se desviaram da fé por causa da cobiça. O contentamento é uma virtude maior do que a riqueza.",
    tags: "amor ao dinheiro / raiz de todos os males",
    assuntos: ["efeso", "paulo", "amor-dinheiro", "avareza", "contentamento"]
  },

  // 73. 2 Timóteo 3.15-16
  {
    id: "2tm3.15-16",
    referencia: "2 Tm 3.15-16",
    local: "Roma / Itália",
    paisAtual: "Itália",
    lider: "Paulo",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~64-67 d.C.",
    antes: "Paulo está na prisão em Roma, próximo da morte. Ele lembra Timóteo que conhece as Escrituras desde a infância (ensinado por sua avó e mãe).",
    versiculo: "✅ E que desde a tua meninice sabes as sagradas Escrituras, que podem fazer-te sábia para a salvação, pela fé que há em Cristo Jesus. Toda Escritura é inspirada por Deus.",
    depois: "As Escrituras têm dois propósitos: fazer sábio para a salvação (o evangelho) e ser útil para o crescimento cristão (ensino, repreensão, correção, educação na justiça). A inspiração divina garante sua autoridade.",
    tags: "Escritura / sabedoria / salvação",
    assuntos: ["roma", "paulo", "escrituras", "inspiracao", "autoridade-biblica"]
  },

  // 74. 2 Timóteo 3.16-17
  {
    id: "2tm3.16",
    referencia: "2 Tm 3.16-17",
    local: "Roma / Itália",
    paisAtual: "Itália",
    lider: "Paulo",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~64-67 d.C.",
    antes: "Paulo exorta Timóteo a continuar nas Escrituras que aprendeu desde a infância. Esta é uma das declarações mais claras da inspiração das Escrituras.",
    versiculo: "✅ Toda Escritura é inspirada por Deus e útil para o ensino, para a repreensão, para a correção, para a educação na justiça, a fim de que o homem de Deus seja perfeito e perfeitamente habilitado para toda boa obra.",
    depois: "A inspiração (theopneustos = soprada por Deus) torna as Escrituras úteis para quatro funções: ensino (doutrina), repreensão (convicção do pecado), correção (restauração), educação na justiça (treinamento em retidão). O resultado é o crente capacitado para toda boa obra.",
    tags: "Escritura / ensino / perfeito",
    assuntos: ["roma", "paulo", "inspiracao-biblica", "autoridade-biblica", "escrituras"]
  },

  // 75. 2 Timóteo 4.3
  {
    id: "2tm4.3",
    referencia: "2 Tm 4.3",
    local: "Roma / Itália",
    paisAtual: "Itália",
    lider: "Paulo",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~64-67 d.C.",
    antes: "Paulo adverte Timóteo sobre os últimos dias. As pessoas rejeitarão a sã doutrina e buscarão mestres que digam o que querem ouvir.",
    versiculo: "✅ Porque virá tempo em que não suportarão a sã doutrina; mas, tendo comichão nos ouvidos, amontoarão para si doutores conforme as suas próprias concupiscências.",
    depois: "A 'sã doutrina' (ensino saudável) será rejeitada. As pessoas buscarão mestres que agradem seus ouvidos ('comichão') e que justifiquem seus desejos pecaminosos. Este é um fenômeno que se tornou comum em muitas igrejas contemporâneas.",
    tags: "relativização / doutrina / falsos mestres",
    assuntos: ["roma", "paulo", "sa-doutrina", "falsos-mestres", "relativismo"]
  },

  // 76. Tito 2.7-8
  {
    id: "tt2.7",
    referencia: "Tt 2.7-8",
    local: "Creta / Mar Mediterrâneo (Grécia)",
    paisAtual: "Grécia",
    lider: "Paulo",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~63-65 d.C.",
    antes: "Paulo diz que Tito deve ensinar com autoridade. Os cretenses tinham má fama (Epimênides: 'cretenses, sempre mentirosos').",
    versiculo: "✅ Em tudo te dá por exemplo de boas obras; na doutrina mostra incorrupção, gravidade, sinceridade, linguagem sã e irrepreensível, para que o adversário se envergonhe, não tendo nenhum mal que dizer de nós.",
    depois: "Tito deve ser o padrão, o exemplo vivo de boas obras. A vida do líder deve ser tão íntegra que os opositores não tenham fundamento para criticar a fé. A pregação é confirmada pela prática.",
    tags: "exemplo / ensino / integridade",
    assuntos: ["creta", "paulo", "exemplo", "lideranca-crista", "integridade"]
  },

  // 77. Tito 2.12
  {
    id: "tt2.12",
    referencia: "Tt 2.12",
    local: "Creta / Mar Mediterrâneo (Grécia)",
    paisAtual: "Grécia",
    lider: "Paulo",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~63-65 d.C.",
    antes: "Paulo instrui Tito sobre como ensinar diferentes grupos. O fundamento é a graça de Deus, que capacita a viver de maneira diferente.",
    versiculo: "✅ Ensinando-nos que, renunciando à impiedade e às paixões mundanas, vivamos neste presente século sóbria, justa e piamente.",
    depois: "A graça de Deus nos ensina a dizer 'não' à impiedade e aos desejos mundanos, e 'sim' à vida sóbria, justa e piedosa. A vida cristã tem três dimensões: pessoal (sóbria), social (justa) e espiritual (piedosa).",
    tags: "domínio próprio / justiça / piedade / renúncia",
    assuntos: ["creta", "paulo", "graça-deus", "vida-crista", "renuncia"]
  },

  // 78. 1 Pedro 2.9
  {
    id: "1pe2.9",
    referencia: "1 Pe 2.9",
    local: "Roma / Itália",
    paisAtual: "Itália",
    lider: "Pedro",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~60-65 d.C.",
    antes: "Pedro escreve a cristãos dispersos pelo Império, enfrentando perseguição. Ele descreve a identidade dos cristãos usando termos do Antigo Testamento.",
    versiculo: "✅ Mas vós sois a geração eleita, o sacerdócio real, a nação santa, o povo adquirido, para que anuncieis as virtudes daquele que vos chamou das trevas para a sua maravilhosa luz.",
    depois: "Quatro títulos descrevem a identidade cristã: geração eleita (escolhida por Deus), sacerdócio real (acesso direto a Deus), nação santa (separada para Deus), povo adquirido (propriedade de Deus). O propósito é proclamar as virtudes de Deus. A identidade precede a missão.",
    tags: "sacerdócio / nação santa / luz",
    assuntos: ["roma", "pedro", "identidade-crista", "sacerdocio", "missao"]
  },

  // 79. 1 Pedro 4.10
  {
    id: "1pe4.10",
    referencia: "1 Pe 4.10",
    local: "Roma / Itália",
    paisAtual: "Itália",
    lider: "Pedro",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~60-65 d.C.",
    antes: "Pedro chama os crentes a servirem uns aos outros com os dons recebidos, como mordomos da graça, pois o fim de todas as coisas está próximo.",
    versiculo: "✅ Cada um administre aos outros o dom como o recebeu, como bons despenseiros da multiforme graça de Deus.",
    depois: "Os dons são recebidos, não conquistados. Somos 'despenseiros' (mordomos) da graça de Deus — administradores responsáveis. A graça é 'multiforme' (poikilos = variada, colorida), manifestando-se de diferentes maneiras através de diferentes dons. O propósito é servir uns aos outros.",
    tags: "dons / servir / mordomo",
    assuntos: ["roma", "pedro", "dons-espirituais", "mordomia", "servir"]
  },

  // 80. Tiago 1.2-4
  {
    id: "tg1.2",
    referencia: "Tg 1.2-4",
    local: "Jerusalém / Judéia (Israel)",
    paisAtual: "Israel",
    lider: "Tiago",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~45-50 d.C.",
    antes: "Tiago escreve aos judeus cristãos dispersos (diáspora), que enfrentavam perseguição e pobreza. Ele aborda o tema do sofrimento desde o início.",
    versiculo: "✅ Meus irmãos, tende por motivo de grande gozo o passar por várias provações, sabendo que a prova da vossa fé produz paciência; e a paciência tenha a sua obra perfeita, para que sejais perfeitos e completos, sem falta alguma.",
    depois: "Tiago não diz 'se' passardes por provações, mas 'quando'. As provações são inevitáveis. Ele ordena 'tende por motivo de grande gozo' — alegria não pelas provações em si, mas pelo resultado que produzem. A paciência (hypomone = perseverança) precisa ter sua obra completa para produzir maturidade.",
    tags: "provação / paciência / perfeito",
    assuntos: ["jerusalem", "tiago", "provações", "perseverança", "maturidade"]
  },

  // 81. Tiago 1.19
  {
    id: "tg1.19",
    referencia: "Tg 1.19",
    local: "Jerusalém / Judéia (Israel)",
    paisAtual: "Israel",
    lider: "Tiago",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~45-50 d.C.",
    antes: "Tiago dá instruções práticas sobre como receber a Palavra. Ele contrasta a resposta humana à Palavra com a resposta adequada.",
    versiculo: "✅ Portanto, meus amados irmãos, todo o homem seja pronto para ouvir, tardio para falar, tardio para se irar.",
    depois: "Três instruções: (1) pronto para ouvir — disposição para aprender, (2) tardio para falar — controlar as palavras, (3) tardio para se irar — dominar a raiva. A ira não produz a justiça de Deus. Este princípio é fundamental para relacionamentos saudáveis.",
    tags: "ouvir / falar / ira",
    assuntos: ["jerusalem", "tiago", "sabedoria", "controle-emocional", "comunicacao"]
  },

  // 82. Tiago 1.21
  {
    id: "tg1.21",
    referencia: "Tg 1.21",
    local: "Jerusalém / Judéia (Israel)",
    paisAtual: "Israel",
    lider: "Tiago",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~45-50 d.C.",
    antes: "Tiago instrui os crentes sobre como receber a Palavra. A imagem de 'despojar-se' era comum no batismo, quando a pessoa tirava as roupas velhas.",
    versiculo: "✅ Pelo que, despojando-vos de toda imundícia e acúmulo de malícia, recebei com mansidão a palavra em vós implantada, a qual é poderosa para salvar as vossas almas.",
    depois: "Há duas ações: despojar-se (remover impurezas e malícia) e receber (a Palavra com mansidão). A Palavra já está 'implantada' — foi semeada. Deve ser recebida com humildade. Ela tem poder para salvar (salvação presente e futura).",
    tags: "mansidão / palavra / salvação / receber",
    assuntos: ["jerusalem", "tiago", "palavra-deus", "mansidao", "salvacao"]
  },

  // 83. Tiago 3.17
  {
    id: "tg3.17",
    referencia: "Tg 3.17",
    local: "Jerusalém / Judéia (Israel)",
    paisAtual: "Israel",
    lider: "Tiago",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~45-50 d.C.",
    antes: "Tiago contrasta a sabedoria terrena (inveja amarga, facciosa) com a sabedoria celestial, que produz paz e bons frutos.",
    versiculo: "✅ Mas a sabedoria que do alto vem é primeiramente pura, depois pacífica, moderada, tratável, cheia de misericórdia e de bons frutos, sem parcialidade e sem hipocrisia.",
    depois: "A sabedoria celestial tem sete características: (1) pura, (2) pacífica, (3) moderada (razoável, indulgente), (4) tratável (aberta ao diálogo), (5) cheia de misericórdia e bons frutos, (6) sem parcialidade, (7) sem hipocrisia. Esta sabedoria é prática, não apenas teórica.",
    tags: "sabedoria / pura / paz",
    assuntos: ["jerusalem", "tiago", "sabedoria-divina", "fruto-espirito", "paz"]
  },

  // 84. Tiago 5.7-8
  {
    id: "tg5.7",
    referencia: "Tg 5.7-8",
    local: "Jerusalém / Judéia (Israel)",
    paisAtual: "Israel",
    lider: "Tiago",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~45-50 d.C.",
    antes: "Tiago encoraja os oprimidos a esperarem pacientemente pela vinda do Senhor. Ele usa a analogia do agricultor que espera pela chuva.",
    versiculo: "✅ Sede vós também pacientes, fortalecei os vossos corações, porque a vinda do Senhor está próxima.",
    depois: "A paciência do agricultor é a metáfora para a paciência cristã. O agricultor espera pela chuva temporã (outono) e serôdia (primavera). Ele não pode apressar o processo. Da mesma forma, os crentes devem esperar pacientemente pela volta de Cristo, fortalecendo seus corações.",
    tags: "paciência / fruto / vinda",
    assuntos: ["jerusalem", "tiago", "paciencia", "volta-cristo", "esperanca"]
  },

  // 85. Colossenses 1.10
  {
    id: "cl1.10",
    referencia: "Cl 1.10",
    local: "Roma / Itália",
    paisAtual: "Itália",
    lider: "Paulo",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~60-62 d.C.",
    antes: "Paulo ora para que os colossenses sejam cheios do conhecimento da vontade de Deus. O propósito é que vivam de maneira digna.",
    versiculo: "✅ Para que possais andar dignamente diante do Senhor, agradando-lhe em tudo, frutificando em toda boa obra, e crescendo no conhecimento de Deus.",
    depois: "Quatro resultados de conhecer a vontade de Deus: (1) andar dignamente, (2) agradar a Deus em tudo, (3) frutificar em toda boa obra, (4) crescer no conhecimento de Deus. O conhecimento não é estático — deve aumentar continuamente.",
    tags: "andar / digno / fruto",
    assuntos: ["roma", "paulo", "vontade-deus", "vida-digna", "crescimento"]
  },

  // 86. Colossenses 3.12-13 (mais de 4 versículos - síntese)
  {
    id: "cl3.12",
    referencia: "Cl 3.12-13",
    local: "Roma / Itália",
    paisAtual: "Itália",
    lider: "Paulo",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~60-62 d.C.",
    antes: "Paulo contrasta o que 'matar' (imoralidade, ira) com o que 'vestir' (compaixão, bondade, humildade, paciência e perdão).",
    versiculo: "⚠️ Revesti-vos, pois, como eleitos de Deus, santos e amados, de entranhas de misericórdia, de benignidade, humildade, mansidão, longanimidade; suportando-vos uns aos outros, e perdoando-vos uns aos outros, se alguém tiver queixa contra outro; assim como Cristo vos perdoou, assim fazei vós também.",
    depois: "A base para estas virtudes é a identidade do crente: 'eleitos de Deus, santos e amados'. As virtudes incluem compaixão, bondade, humildade, mansidão, paciência, tolerância e perdão. O padrão do perdão é o próprio perdão de Cristo.",
    tags: "paciência / perdão / suportar / misericórdia",
    assuntos: ["roma", "paulo", "virtudes", "perdao", "paciencia"]
  },

  // 87. Colossenses 3.13
  {
    id: "cl3.13",
    referencia: "Cl 3.13",
    local: "Roma / Itália",
    paisAtual: "Itália",
    lider: "Paulo",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~60-62 d.C.",
    antes: "Paulo especifica o perdão na comunidade cristã em Colossos, que enfrentava tensões internas.",
    versiculo: "✅ Suportando-vos uns aos outros, e perdoando-vos uns aos outros, se alguém tiver queixa contra outro; assim como Cristo vos perdoou, assim fazei vós também.",
    depois: "O perdão não é opcional no corpo de Cristo. A base para perdoar os outros é o perdão que recebemos de Cristo. Se Cristo nos perdoou completamente, devemos fazer o mesmo. A 'queixa' reconhece que ofensas reais ocorrem — não se trata de ignorar o problema, mas de perdoar.",
    tags: "perdão / queixa / Senhor",
    assuntos: ["roma", "paulo", "perdao", "comunidade-crista", "reconciliacao"]
  },

  // 88. Colossenses 4.2
  {
    id: "cl4.2",
    referencia: "Cl 4.2",
    local: "Roma / Itália",
    paisAtual: "Itália",
    lider: "Paulo",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~60-62 d.C.",
    antes: "Paulo dá instruções finais sobre oração, mesmo estando preso em Roma. Ele destaca perseverança, vigilância e ações de graças.",
    versiculo: "✅ Perseverai na oração, vigiando com ações de graças.",
    depois: "Três características da oração: (1) perseverança — continuar orando mesmo sem respostas imediatas, (2) vigilância — estar alerta, atento à direção de Deus, (3) ações de graças — oração não é apenas pedir, mas agradecer. A oração deve ser constante, não ocasional.",
    tags: "orar / vigilância / ação",
    assuntos: ["roma", "paulo", "oracao", "perseveranca", "gratidao"]
  },

  // 89. Hebreus 2.4
  {
    id: "hb2.4",
    referencia: "Hb 2.4",
    local: "Roma / Itália",
    paisAtual: "Itália",
    lider: "",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~60-65 d.C.",
    antes: "O autor de Hebreus afirma que Deus confirmou a mensagem da salvação com sinais, prodígios e dons do Espírito Santo.",
    versiculo: "✅ Testificando Deus juntamente com eles, por sinais, e prodígios, e várias maravilhas, e dons do Espírito Santo, distribuídos por sua vontade.",
    depois: "Deus não apenas falou a mensagem, mas a confirmou com três tipos de evidências sobrenaturais: sinais (indicações do poder divino), prodígios (eventos que causam admiração) e dons do Espírito (distribuídos soberanamente). A vontade divina determina a distribuição.",
    tags: "sinais / prodígios / dons",
    assuntos: ["roma", "autor-hebreus", "sinais-prodigios", "dons-espirituais"]
  },

  // 90. Hebreus 11.6
  {
    id: "hb11.6",
    referencia: "Hb 11.6",
    local: "Roma / Itália",
    paisAtual: "Itália",
    lider: "",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~60-65 d.C.",
    antes: "O autor define a fé essencialmente. Ele está listando os heróis da fé no capítulo 11, mas antes define o que é fé.",
    versiculo: "✅ Ora, sem fé é impossível agradar a Deus; porque é necessário que aquele que se aproxima de Deus creia que ele existe, e que é galardoador dos que o buscam.",
    depois: "Dois elementos essenciais da fé: (1) crer que Deus existe — convicção sobre a realidade de Deus, (2) crer que Ele recompensa os que o buscam — confiança no caráter bom de Deus. Sem estes dois, não é possível agradar a Deus.",
    tags: "fé / existência de Deus / recompensador",
    assuntos: ["roma", "autor-hebreus", "fe", "existencia-deus", "buscar-deus"]
  },

  // 91. Hebreus 12.1
  {
    id: "hb12.1",
    referencia: "Hb 12.1",
    local: "Roma / Itália",
    paisAtual: "Itália",
    lider: "",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~60-65 d.C.",
    antes: "O autor lista os heróis da fé no capítulo 11. Eles são a 'nuvem de testemunhas' que rodeia os leitores, exortando-os a correr com paciência.",
    versiculo: "✅ Portanto, também nós, visto que estamos rodeados de uma tão grande nuvem de testemunhas, deixemos todo o peso e o pecado que tão de perto nos rodeia, e corramos com paciência a carreira que nos está proposta.",
    depois: "A vida cristã é comparada a uma corrida de estádio. Duas coisas precisam ser deixadas: (1) todo peso — qualquer coisa que atrapalhe, mesmo que não seja pecado, (2) o pecado — especialmente o que mais nos assedia. A corrida requer paciência (perseverança).",
    tags: "peso / pecado / carreira",
    assuntos: ["roma", "autor-hebreus", "perseveranca", "vida-crista", "pecado"]
  },

  // 92. Hebreus 12.11
  {
    id: "hb12.11",
    referencia: "Hb 12.11",
    local: "Roma / Itália",
    paisAtual: "Itália",
    lider: "",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~60-65 d.C.",
    antes: "O autor explica que a disciplina de Deus, embora dolorosa no momento, produz fruto de justiça e paz a longo prazo. Os resultados não são imediatos.",
    versiculo: "✅ E, na verdade, toda a correção, ao presente, não parece ser de gozo, mas de tristeza; mas depois produz um fruto pacífico de justiça nos que por ela são exercitados.",
    depois: "Há um contraste entre o presente (tristeza) e o futuro (fruto pacífico de justiça). A disciplina não é agradável no momento, mas é necessária. O fruto é colhido por 'aqueles que por ela são exercitados' — a disciplina precisa ser recebida e aplicada para produzir fruto.",
    tags: "disciplina / fruto / justiça",
    assuntos: ["roma", "autor-hebreus", "disciplina-divina", "fruto-justica", "paciencia"]
  },

  // 93. João 1.9-10
  {
    id: "jo1.9-10",
    referencia: "Jo 1.9-10",
    local: "Éfeso / Ásia Menor (Turquia)",
    paisAtual: "Turquia",
    lider: "João",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~90-95 d.C.",
    antes: "João abre seu evangelho declarando que a Luz verdadeira (Jesus) veio ao mundo que Ele mesmo criou, mas o mundo não O reconheceu.",
    versiculo: "✅ Ali estava a luz verdadeira, que alumia a todo o homem que vem ao mundo. Estava no mundo, e o mundo foi feito por ele, e o mundo não o conheceu.",
    depois: "A 'luz verdadeira' contrasta com as luzes falsas (filosofias, religiões). A luz ilumina 'todo homem' — a oferta do evangelho é universal. A tragédia é que o mundo (kosmos) não reconheceu seu Criador. João estabelece o tema da rejeição de Cristo.",
    tags: "Luz verdadeira / revelação / Cristo",
    assuntos: ["efeso", "joao", "luz-mundo", "revelacao", "cristo"]
  },

  // 94. João 6.67
  {
    id: "jo6.67",
    referencia: "Jo 6.67",
    local: "Cafarnaum / Galileia (Israel)",
    paisAtual: "Israel",
    lider: "Jesus",
    liderReinado: "",
    periodo: "Período Romano",
    periodoDatas: "63 a.C. - 70 d.C.",
    data: "~28-29 d.C.",
    antes: "Após um discurso difícil sobre comer Sua carne e beber Seu sangue, muitos discípulos abandonaram Jesus. Eles acharam o ensino 'duro'.",
    versiculo: "✅ Então disse Jesus aos doze: Quereis vós também retirar-vos?",
    depois: "Jesus não adapta sua mensagem para reter seguidores. Ele pergunta aos doze se também querem ir embora. A pergunta força os discípulos a decidirem: seguir por conveniência ou por convicção? Pedro responde: 'Para quem iremos? Tu tens palavras de vida eterna'.",
    tags: "discípulos / permanência / fidelidade",
    assuntos: ["cafarnaum", "jesus", "discipulado", "fidelidade", "permanencia"]
  },

  // 95. João 13.34
  {
    id: "jo13.34",
    referencia: "Jo 13.34",
    local: "Jerusalém / Judéia (Israel)",
    paisAtual: "Israel",
    lider: "Jesus",
    liderReinado: "",
    periodo: "Período Romano",
    periodoDatas: "63 a.C. - 70 d.C.",
    data: "~30 d.C.",
    antes: "Jesus acabou de lavar os pés dos discípulos, um ato de humildade e serviço. Judas já saiu para traí-Lo. Agora Jesus institui o amor mútuo como o mandamento distintivo.",
    versiculo: "✅ Um novo mandamento vos dou: Que vos ameis uns aos outros; como eu vos amei, que também vós uns aos outros vos ameis.",
    depois: "O mandamento é 'novo' porque o padrão é novo: 'como eu vos amei'. O amor de Jesus é sacrificial (até a morte) e iniciativa (amou primeiro). O amor cristão deve refletir este padrão. Este é o distintivo da comunidade cristã.",
    tags: "mandamento / amor / novo",
    assuntos: ["jerusalem", "jesus", "amor", "mandamento", "comunidade-crista"]
  },

  // 96. João 13.35
  {
    id: "jo13.35",
    referencia: "Jo 13.35",
    local: "Jerusalém / Judéia (Israel)",
    paisAtual: "Israel",
    lider: "Jesus",
    liderReinado: "",
    periodo: "Período Romano",
    periodoDatas: "63 a.C. - 70 d.C.",
    data: "~30 d.C.",
    antes: "Na mesma noite, os discípulos juraram lealdade a Jesus. Horas depois, todos o abandonariam e Pedro chegaria a negá-lo três vezes.",
    versiculo: "✅ Nisto todos conhecerão que sois meus discípulos, se vos amardes uns aos outros.",
    depois: "A marca do discipulado não é doutrina (embora importante), não é milagres, não é sucesso — é amor mútuo. O amor é a evidência pública de que alguém é discípulo de Jesus. Infelizmente, os discípulos falhariam neste teste ainda naquela noite.",
    tags: "amor / discípulos / lealdade / negação",
    assuntos: ["jerusalem", "jesus", "amor", "discipulado", "testemunho"]
  },

  // 97. João 14.27
  {
    id: "jo14.27",
    referencia: "Jo 14.27",
    local: "Jerusalém / Judéia (Israel)",
    paisAtual: "Israel",
    lider: "Jesus",
    liderReinado: "",
    periodo: "Período Romano",
    periodoDatas: "63 a.C. - 70 d.C.",
    data: "~30 d.C.",
    antes: "Jesus acabou de anunciar que Judas o trairia e que Pedro o negaria três vezes. Os discípulos estão angustiados com a partida iminente de Jesus.",
    versiculo: "✅ Deixo-vos a paz, a minha paz vos dou; não vo-la dou como o mundo a dá. Não se turbe o vosso coração, nem se atemorize.",
    depois: "A paz de Jesus é diferente da paz do mundo. A paz do mundo é superficial (ausência de conflito) ou circunstancial (depende das situações). A paz de Jesus é profunda (no coração) e permanente (independente das circunstâncias). Os discípulos não precisam temer.",
    tags: "paz / não turbe / confiança / conforto",
    assuntos: ["jerusalem", "jesus", "paz", "consolo", "confianca"]
  },

  // 98. João 15.1-2
  {
    id: "jo15.1",
    referencia: "Jo 15.1-2",
    local: "Jerusalém / Judéia (Israel)",
    paisAtual: "Israel",
    lider: "Jesus",
    liderReinado: "",
    periodo: "Período Romano",
    periodoDatas: "63 a.C. - 70 d.C.",
    data: "~30 d.C.",
    antes: "Jesus está falando na véspera de Sua morte. Ele usa a videira como metáfora para ensinar sobre o relacionamento com o Pai.",
    versiculo: "✅ Eu sou a videira verdadeira, e meu Pai é o agricultor. Toda vara em mim que não dá fruto, ele a corta; e toda que dá fruto, a poda, para que dê mais fruto.",
    depois: "A videira verdadeira contrasta com as videiras falsas (Israel infiel no AT). O Pai é o agricultor que cuida da videira. Duas ações: (1) corta os ramos infrutíferos, (2) poda os ramos frutíferos. A poda é dolorosa, mas necessária para mais fruto. O objetivo não é apenas fruto, mas 'mais fruto'.",
    tags: "podar / fruto / limpar",
    assuntos: ["jerusalem", "jesus", "videira", "fruto", "podar"]
  },

  // 99. João 15.4-5 (mais de 4 versículos - síntese)
  {
    id: "jo15.4",
    referencia: "Jo 15.4-5",
    local: "Jerusalém / Judéia (Israel)",
    paisAtual: "Israel",
    lider: "Jesus",
    liderReinado: "",
    periodo: "Período Romano",
    periodoDatas: "63 a.C. - 70 d.C.",
    data: "~30 d.C.",
    antes: "Jesus acaba de apresentar a metáfora da videira (Ele) e do Pai (agricultor). Agora explica a necessidade de permanência.",
    versiculo: "⚠️ Permanecei em mim, e eu permanecerei em vós. Como a vara de si mesma não pode dar fruto, se não permanecer na videira, assim também vós, se não permanecerdes em mim. Eu sou a videira, vós as varas; quem permanece em mim e eu nele, esse dá muito fruto; porque sem mim nada podeis fazer.",
    depois: "A permanência é mútua: 'Permanecei em mim, e eu permanecerei em vós'. A imagem do ramo na videira mostra que o fruto não vem do esforço do ramo, mas da seiva que vem da videira. 'Sem mim nada podeis fazer' — não apenas 'não muito', mas 'nada'. A dependência de Cristo é total.",
    tags: "permanecer / fruto / videira",
    assuntos: ["jerusalem", "jesus", "permanencia", "dependencia-cristo", "fruto"]
  },

  // 100. João 15.5
  {
    id: "jo15.5",
    referencia: "Jo 15.5",
    local: "Jerusalém / Judéia (Israel)",
    paisAtual: "Israel",
    lider: "Jesus",
    liderReinado: "",
    periodo: "Período Romano",
    periodoDatas: "63 a.C. - 70 d.C.",
    data: "~30 d.C.",
    antes: "Jesus está falando na véspera de Sua morte, no cenáculo. Ele usa a videira como metáfora para ensinar dependência total dEle.",
    versiculo: "✅ Eu sou a videira, vós as varas; quem está em mim, e eu nele, esse dá muito fruto; porque sem mim nada podeis fazer.",
    depois: "Esta é a declaração mais direta sobre a dependência de Cristo. Quatro verdades: (1) Jesus é a videira (fonte), (2) somos os ramos (dependentes), (3) fruto abundante é possível ('muito fruto'), (4) sem Ele, nada podemos fazer. O 'nada' inclui até mesmo o início da vida cristã (salvação) e o crescimento contínuo (santificação).",
    tags: "videira / fruto / permanecer",
    assuntos: ["jerusalem", "jesus", "dependencia-cristo", "fruto", "videira"]
  },

  // 101. João 15.8
  {
    id: "jo15.8",
    referencia: "Jo 15.8",
    local: "Jerusalém / Judéia (Israel)",
    paisAtual: "Israel",
    lider: "Jesus",
    liderReinado: "",
    periodo: "Período Romano",
    periodoDatas: "63 a.C. - 70 d.C.",
    data: "~30 d.C.",
    antes: "Jesus explica o propósito de permanecer nEle: produzir fruto que glorifica o Pai e confirma o discipulado.",
    versiculo: "✅ Nisto é glorificado meu Pai, que deis muito fruto; e assim vos tornareis meus discípulos.",
    depois: "O propósito do fruto é a glória do Pai, não a autoglorificação. O fruto também confirma o discipulado — não prova a salvação, mas evidencia que o discípulo está genuinamente conectado à videira. 'Muito fruto' é o padrão para a glória de Deus.",
    tags: "fruto / discípulo / glorificar",
    assuntos: ["jerusalem", "jesus", "fruto", "gloria-deus", "discipulado"]
  },

  // 102. João 16.4
  {
    id: "jo16.4",
    referencia: "Jo 16.4",
    local: "Jerusalém / Judéia (Israel)",
    paisAtual: "Israel",
    lider: "Jesus",
    liderReinado: "",
    periodo: "Período Romano",
    periodoDatas: "63 a.C. - 70 d.C.",
    data: "~30 d.C.",
    antes: "Jesus está falando na véspera de Sua morte, preparando os discípulos para a perseguição que viria. Ele os avisa de antemão.",
    versiculo: "✅ Mas isto vos tenho dito, para que, quando chegar aquela hora, vos lembreis de que já vo-lo tinha dito. Não vo-lo disse desde o princípio, porque estava convosco.",
    depois: "Jesus avisa com antecedência para que, quando a perseguição vier, os discípulos lembrem que Ele já havia predito. O aviso prévio fortalece a fé no momento da crise. Ele não disse antes porque estava com eles como protetor, mas agora partiria.",
    tags: "revelação / Cristo / advertência",
    assuntos: ["jerusalem", "jesus", "advertencia", "perseguicao", "preparacao"]
  },

  // 103. Lucas 10.19
  {
    id: "lc10.19",
    referencia: "Lc 10.19",
    local: "Galileia (Israel)",
    paisAtual: "Israel",
    lider: "Jesus",
    liderReinado: "",
    periodo: "Período Romano",
    periodoDatas: "63 a.C. - 70 d.C.",
    data: "~28 d.C.",
    antes: "Jesus fala aos setenta discípulos que enviou em missão, dando-lhes autoridade espiritual sobre as forças malignas.",
    versiculo: "✅ Eis que vos dou poder para pisar serpentes e escorpiões, e sobre toda força do inimigo, e nada vos fará dano algum.",
    depois: "O poder dado por Jesus é autoridade sobre as forças do inimigo. 'Serpentes e escorpiões' são símbolos de forças malignas. A promessa 'nada vos fará dano' não significa ausência de perseguição, mas proteção espiritual. O foco não deve estar no poder, mas no fato de que os nomes dos discípulos estão escritos nos céus.",
    tags: "autoridade / poder / inimigo",
    assuntos: ["galileia", "jesus", "autoridade-espiritual", "poder-divino"]
  },

  // 104. Marcos 8.34-35
  {
    id: "mc8.34",
    referencia: "Mc 8.34-35",
    local: "Cesareia de Filipe (Israel)",
    paisAtual: "Israel",
    lider: "Jesus",
    liderReinado: "",
    periodo: "Período Romano",
    periodoDatas: "63 a.C. - 70 d.C.",
    data: "~29-30 d.C.",
    antes: "Pedro acabara de confessar que Jesus era o Cristo. Jesus então começa a ensinar sobre Seu sofrimento e morte iminentes. Pedro o repreende, e Jesus responde com este ensino sobre renúncia.",
    versiculo: "✅ E chamando a si a multidão, com os seus discípulos, disse-lhes: Se alguém quiser vir após mim, negue-se a si mesmo, tome a sua cruz, e siga-me. Porque qualquer que quiser salvar a sua vida perdê-la-á, mas qualquer que perder a sua vida por amor de mim e do evangelho, essa a salvará.",
    depois: "Três condições para o discipulado: (1) negar-se a si mesmo — dizer 'não' ao ego, (2) tomar a sua cruz — aceitar sofrimento e morte para seguir Cristo, (3) seguir a Jesus — obedecer e imitá-Lo. O paradoxo: quem tenta preservar sua vida (egoisticamente) a perde; quem perde a vida (por Cristo) a salva.",
    tags: "renúncia / cruz / discipulado",
    assuntos: ["cesareia-filipe", "jesus", "discipulado", "renuncia", "cruz"]
  },

  // 105. 3 João 1.5
  {
    id: "3jo1.5",
    referencia: "3 Jo 1.5",
    local: "Éfeso / Ásia Menor (Turquia)",
    paisAtual: "Turquia",
    lider: "João",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~90-95 d.C.",
    antes: "João escreve para elogiar Gaio, que tem acolhido os irmãos missionários, contrastando com Diótrefes que os rejeita.",
    versiculo: "✅ Amado, procedes fielmente em tudo o que fazes para com os irmãos, e para com os estranhos.",
    depois: "A hospitalidade de Gaio é destacada: ele acolhe 'irmãos' (crentes conhecidos) e 'estranhos' (missionários desconhecidos). A fidelidade é demonstrada em ações práticas, não apenas em palavras. Este versículo mostra a importância da hospitalidade no ministério da igreja primitiva.",
    tags: "fidelidade / amor / irmãos / hospitalidade",
    assuntos: ["efeso", "joao", "hospitalidade", "fidelidade", "missao"]
  },

  // 106. Deuteronômio 13.3
  {
    id: "dt13.3",
    referencia: "Dt 13.3",
    local: "Moabe / Planícies de Moabe (Jordânia)",
    paisAtual: "Jordânia",
    lider: "Moisés",
    liderReinado: "",
    periodo: "Êxodo e Conquista",
    periodoDatas: "~1446-1400 a.C.",
    data: "~1406 a.C.",
    antes: "Moisés adverte sobre falsos profetas. Deus permite essas provações para testar a fidelidade e o amor do povo.",
    versiculo: "✅ Não ouvirás as palavras daquele profeta ou sonhador; porquanto o Senhor vosso Deus vos prova, para saber se amais o Senhor vosso Deus de todo o vosso coração e de toda a vossa alma.",
    depois: "Deus permite falsos profetas como um teste de fidelidade. O propósito do teste é revelar o que está no coração: se o povo realmente ama a Deus acima de tudo. A resposta correta é rejeitar o falso profeta, mesmo que seus sinais se cumpram.",
    tags: "provação / fidelidade / falsos profetas",
    assuntos: ["moabe", "moises", "provação", "fidelidade", "falsos-profetas"]
  },

  // 107. Isaías 55.11
  {
    id: "is55.11",
    referencia: "Is 55.11",
    local: "Judá (Israel)",
    paisAtual: "Israel",
    lider: "Ezequias",
    liderReinado: "715-686 a.C.",
    periodo: "Reino de Judá (Sul)",
    periodoDatas: "930-586 a.C.",
    data: "~740-700 a.C.",
    antes: "Isaías declara que a Palavra de Deus é eficaz e sempre cumpre seu propósito, mesmo quando os resultados não são imediatamente visíveis.",
    versiculo: "✅ Assim será a minha palavra, que sair da minha boca: ela não voltará para mim vazia, antes fará o que me apraz, e prosperará naquilo para que a enviei.",
    depois: "A Palavra de Deus é comparada à chuva que rega a terra e produz fruto. Ela não volta vazia — sempre cumpre o propósito para o qual foi enviada. Este versículo tem sido uma grande fonte de encorajamento para pregadores e missionários que nem sempre veem resultados imediatos.",
    tags: "palavra eficaz / propósito",
    assuntos: ["juda", "isaias", "palavra-deus", "eficacia", "proposito-divino"]
  },

  // 108. Jeremias 6.16
  {
    id: "jr6.16",
    referencia: "Jr 6.16",
    local: "Judá / Jerusalém (Israel)",
    paisAtual: "Israel",
    lider: "Zedequias",
    liderReinado: "597-586 a.C.",
    periodo: "Reino de Judá (Sul)",
    periodoDatas: "930-586 a.C.",
    data: "~626-586 a.C.",
    antes: "Jeremias chama o povo a voltar aos caminhos antigos de obediência a Deus, em contraste com os caminhos novos de idolatria.",
    versiculo: "✅ Assim diz o Senhor: Parai nos caminhos, e vede, e perguntai pelas veredas antigas, qual é o bom caminho, andai por ele e encontrareis descanso para as vossas almas.",
    depois: "O povo havia se desviado dos caminhos de Deus. Jeremias os exorta a parar, ver, perguntar e andar. O 'bom caminho' é o caminho antigo da obediência à aliança. A promessa é 'descanso para as almas' — paz e segurança. Mas o povo respondeu: 'Não andaremos nele'.",
    tags: "caminhos antigos / descanso",
    assuntos: ["jerusalem", "jeremias", "obediencia", "caminhos-deus", "descanso"]
  },

  // 109. Jeremias 14.14
  {
    id: "jr14.14",
    referencia: "Jr 14.14",
    local: "Judá / Jerusalém (Israel)",
    paisAtual: "Israel",
    lider: "Zedequias",
    liderReinado: "597-586 a.C.",
    periodo: "Reino de Judá (Sul)",
    periodoDatas: "930-586 a.C.",
    data: "~626-586 a.C.",
    antes: "Jeremias denuncia os falsos profetas que profetizam paz quando Deus está trazendo juízo por causa do pecado do povo.",
    versiculo: "✅ E disse-me o Senhor: Os profetas profetizam falsamente em meu nome; nunca os enviei, nem lhes dei ordem, nem lhes falei; visão falsa, adivinhação, vaidade e engano do seu coração é o que eles vos profetizam.",
    depois: "Deus afirma claramente: 'Nunca os enviei'. Os falsos profetas falam por conta própria. Suas mensagens são caracterizadas por: visão falsa (não vêm de Deus), adivinhação (métodos pagãos), vaidade (vazias, sem conteúdo), engano do coração (originadas em si mesmos).",
    tags: "falsos profetas / engano / Jeremias",
    assuntos: ["jerusalem", "jeremias", "falsos-profetas", "engano", "discernimento"]
  },

  // 110. Neemias 6.12
  {
    id: "ne6.12",
    referencia: "Ne 6.12",
    local: "Jerusalém / Judá (Israel)",
    paisAtual: "Israel",
    lider: "Neemias",
    liderReinado: "",
    periodo: "Período Persa",
    periodoDatas: "539-332 a.C.",
    data: "~444 a.C.",
    antes: "Neemias descobre que o falso profeta Semaías foi contratado pelos inimigos (Tobias e Sambalate) para assustá-lo e fazê-lo pecar.",
    versiculo: "✅ E entendi que Deus não o enviara, mas que ele profetizou contra mim porque Tobias e Sambalate o assalariaram.",
    depois: "Neemias usa o discernimento espiritual para perceber que a profecia de Semaías não vinha de Deus. O teste revelou a motivação errada (suborno). Este é um exemplo bíblico de como discernir falsos profetas: examinar a mensagem, a motivação e as circunstâncias.",
    tags: "Neemias / falsos profetas / discernimento",
    assuntos: ["jerusalem", "neemias", "discernimento", "falsos-profetas", "perseveranca"]
  },

  // 111. Neemias 8.10
  {
    id: "ne8.10",
    referencia: "Ne 8.10",
    local: "Jerusalém / Judá (Israel)",
    paisAtual: "Israel",
    lider: "Neemias",
    liderReinado: "",
    periodo: "Período Persa",
    periodoDatas: "539-332 a.C.",
    data: "~444 a.C.",
    antes: "Durante o exílio, o povo esqueceu a Lei. Quando os muros foram reconstruídos, encontraram os rolos antigos da Lei e os leram. O povo percebeu sua desobediência e chorou em arrependimento.",
    versiculo: "✅ Então lhes disse: Ide, comei as gorduras, e bebei as doçuras, e enviai porções aos que não têm nada preparado; porque este dia é consagrado ao nosso Senhor; portanto não vos entristeçais, porque a alegria do Senhor é a vossa força.",
    depois: "Neemias transforma o luto em celebração. A alegria do Senhor não é uma alegria qualquer, mas uma força que sustenta o povo. A ordem inclui cuidar dos pobres ('enviai porções aos que não têm nada'). Este versículo é frequentemente citado como fonte de ânimo e força.",
    tags: "alegria / gozo / Senhor / força",
    assuntos: ["jerusalem", "neemias", "alegria", "força", "celebração"]
  },

  // 112. Oséias 4.1
  {
    id: "os4.1",
    referencia: "Os 4.1",
    local: "Israel / Reino do Norte",
    paisAtual: "Israel",
    lider: "Jeroboão II",
    liderReinado: "793-753 a.C.",
    periodo: "Reino Dividido (Norte)",
    periodoDatas: "930-722 a.C.",
    data: "~755-715 a.C.",
    antes: "Oséias traz a acusação divina contra Israel: falta de verdade, misericórdia e conhecimento de Deus — a base para o juízo iminente.",
    versiculo: "✅ Ouvi a palavra do Senhor, vós, filhos de Israel, porque o Senhor tem uma contenda com os habitantes da terra; porque na terra não há verdade, nem misericórdia, nem conhecimento de Deus.",
    depois: "A acusação enumera três faltas fundamentais: verdade (em hebraico 'emet' — fidelidade, confiabilidade), misericórdia (hesed — amor leal da aliança), conhecimento de Deus (da'at — conhecimento íntimo, relacional). Sem estas virtudes, a sociedade se desintegra. O juízo é inevitável.",
    tags: "Oséias / contenda / conhecimento de Deus",
    assuntos: ["israel", "oseias", "verdade", "misericordia", "conhecimento-deus"]
  },

  // 113. 1 Reis 18.40
  {
    id: "1rs18.40",
    referencia: "1 Rs 18.40",
    local: "Monte Carmelo / Israel",
    paisAtual: "Israel",
    lider: "Acabe",
    liderReinado: "874-853 a.C.",
    periodo: "Reino Dividido (Norte)",
    periodoDatas: "930-722 a.C.",
    data: "~870 a.C.",
    antes: "Após o confronto no Monte Carmelo, onde Deus respondeu com fogo, Elias executa os profetas de Baal que haviam desviado Israel.",
    versiculo: "✅ E Elias lhes disse: Prendei os profetas de Baal; que nenhum deles escape. E eles os prenderam; e Elias os fez descer ao ribeiro de Quisom, e ali os matou.",
    depois: "Este é um dos episódios mais severos do Antigo Testamento. O confronto entre Elias e os profetas de Baal era uma guerra espiritual pelo coração de Israel. A execução dos falsos profetas era necessária para purificar a adoração e remover a influência da idolatria.",
    tags: "Elias / profetas de Baal / carmelo",
    assuntos: ["monte-carmelo", "elias", "idolatria", "falsos-profetas", "confronto"]
  },

  // 114. Salmo 1.2-3
  {
    id: "sl1.2",
    referencia: "Sl 1.2-3",
    local: "Israel / Judá (Israel)",
    paisAtual: "Israel",
    lider: "Davi",
    liderReinado: "1010-970 a.C.",
    periodo: "Reino Unido",
    periodoDatas: "1010-970 a.C.",
    data: "~1010-970 a.C.",
    antes: "O Salmo 1 contrasta o justo com o ímpio. O justo medita na Lei constantemente. O resultado é estabilidade e frutificação.",
    versiculo: "✅ Antes, tem o seu prazer na lei do Senhor, e na sua lei medita de dia e de noite. Pois será como a árvore plantada junto a ribeiros de águas, a qual dá o seu fruto na estação própria.",
    depois: "A árvore plantada junto às águas é a imagem da estabilidade e prosperidade espiritual. Ela tem suprimento constante (ribeiro), produz fruto na época certa (não fora de tempo), e suas folhas não murcham (vitalidade contínua). A meditação na Lei é a fonte da vida abundante.",
    tags: "meditação / fruto / rio",
    assuntos: ["juda", "davi", "meditação", "fruto", "palavra-deus"]
  },

  // 115. Salmo 10.4
  {
    id: "sl10.4",
    referencia: "Sl 10.4",
    local: "Israel / Judá (Israel)",
    paisAtual: "Israel",
    lider: "Davi",
    liderReinado: "1010-970 a.C.",
    periodo: "Reino Unido",
    periodoDatas: "1010-970 a.C.",
    data: "~1010-970 a.C.",
    antes: "Davi descreve a atitude do ímpio que, por orgulho e arrogância, rejeita a Deus e age como se Ele não existisse.",
    versiculo: "✅ O ímpio, na sua soberba, não investiga; todos os seus pensamentos são: Não há Deus.",
    depois: "O ímpio não apenas rejeita a Deus intelectualmente, mas vive como se Deus não existisse (ateísmo prático). A raiz do ateísmo é o orgulho — o ímpio não quer prestar contas a ninguém. Este salmo antecipa o argumento de Paulo em Romanos 1 sobre a supressão da verdade.",
    tags: "orgulho / ímpio / não busca a Deus",
    assuntos: ["juda", "davi", "ateismo", "orgulho", "impio"]
  },
  
  // 116. Salmo 14.1
  {
    id: "sl14.1",
    referencia: "Sl 14.1",
    local: "Israel / Judá (Israel)",
    paisAtual: "Israel",
    lider: "Davi",
    liderReinado: "1010-970 a.C.",
    periodo: "Reino Unido",
    periodoDatas: "1010-970 a.C.",
    data: "~1000 a.C.",
    antes: "Davi escreve este salmo contrastando o ímpio que nega Deus com o justo que O busca. O salmista descreve a corrupção moral da humanidade que rejeita o Criador.",
    versiculo: "✅ Disse o insensato no seu coração: Não há Deus. Têm-se corrompido, fazem-se abomináveis em suas obras; não há quem faça o bem.",
    depois: "Paulo cita este versículo em Romanos 3.10-12 para provar que todos, judeus e gentios, estão sob o pecado e precisam da justificação pela fé.",
    tags: "ateísmo / louco / negação de Deus",
    assuntos: ["ateismo", "salmos", "davi", "pecado-universal"]
  },

  // 117. Salmo 14.1-3
  {
    id: "sl14.1-3",
    referencia: "Sl 14.1-3",
    local: "Israel / Judá (Israel)",
    paisAtual: "Israel",
    lider: "Davi",
    liderReinado: "1010-970 a.C.",
    periodo: "Reino Unido",
    periodoDatas: "1010-970 a.C.",
    data: "~1000 a.C.",
    antes: "Davi reflete sobre a corrupção da humanidade. O salmo contrasta a insensatez do ímpio que diz 'não há Deus' com o justo que busca ao Senhor.",
    versiculo: "⚠️ Disse o insensato no seu coração: Não há Deus. Têm-se corrompido, fazem-se abomináveis em suas obras; não há quem faça o bem. O Senhor olhou desde os céus para os filhos dos homens, para ver se havia algum que tivesse entendimento e buscasse a Deus. Desviaram-se todos e juntamente se corromperam; não há quem faça o bem, não há nem um sequer.",
    depois: "Este salmo é citado por Paulo em Romanos 3.10-12 como prova da universalidade do pecado. O apóstolo usa este texto para mostrar que todos necessitam da graça de Deus.",
    tags: "ateísmo / corrupção / universalidade do pecado",
    assuntos: ["ateismo", "salmos", "davi", "depravacao-total"]
  },

  // 118. Salmo 14 (capítulo inteiro)
  {
    id: "sl14",
    referencia: "Sl 14",
    local: "Israel / Judá (Israel)",
    paisAtual: "Israel",
    lider: "Davi",
    liderReinado: "1010-970 a.C.",
    periodo: "Reino Unido",
    periodoDatas: "1010-970 a.C.",
    data: "~1000 a.C.",
    antes: "Davi escreve um salmo sapiencial que contrasta o justo e o ímpio. A descrição da corrupção humana é tão forte que Paulo a usa para fundamentar a doutrina do pecado universal.",
    versiculo: "📖 Disse o insensato no seu coração: Não há Deus. Têm-se corrompido, fazem-se abomináveis em suas obras; não há quem faça o bem. O Senhor olhou desde os céus para os filhos dos homens, para ver se havia algum que tivesse entendimento e buscasse a Deus. Desviaram-se todos e juntamente se corromperam; não há quem faça o bem, não há nem um sequer. Não terão conhecimento os que praticam a iniquidade, os quais comem o meu povo como se comessem pão? Eles não invocam ao Senhor. Ali se acharam em grande pavor, porque Deus está na geração dos justos. Vós envergonhais o conselho dos pobres, porquanto o Senhor é o seu refúgio. Oh! Se de Sião tivera já saído a salvação de Israel! Quando o Senhor fizer voltar os cativos do seu povo, se regozijará Jacó e se alegrará Israel.",
    depois: "Paulo cita este salmo em Romanos 3.10-12. O apóstolo usa o texto para provar que todos os seres humanos, sem exceção, estão sob o domínio do pecado e necessitam da redenção em Cristo. O salmo termina com uma nota de esperança: a salvação vem de Sião.",
    tags: "ateísmo / loucura / negação de Deus / universalidade do pecado",
    assuntos: ["ateismo", "salmos", "davi", "depravacao-total", "justificacao-pela-fe"]
  },

  // 119. Salmo 19.1
  {
    id: "sl19.1",
    referencia: "Sl 19.1",
    local: "Israel / Judá (Israel)",
    paisAtual: "Israel",
    lider: "Davi",
    liderReinado: "1010-970 a.C.",
    periodo: "Reino Unido",
    periodoDatas: "1010-970 a.C.",
    data: "~1000 a.C.",
    antes: "Davi contempla a criação e vê nela a revelação do poder e da glória de Deus. A natureza é um testemunho universal do Criador, acessível a todos os povos e culturas.",
    versiculo: "✅ Os céus declaram a glória de Deus; e o firmamento anuncia a obra das suas mãos.",
    depois: "Paulo usa este princípio em Romanos 1.19-20 para argumentar que todos os seres humanos têm conhecimento de Deus através da criação, tornando-os indesculpáveis por não o glorificarem. A revelação natural é suficiente para condenar, mas não para salvar.",
    tags: "natureza / céus / glória de Deus / revelação natural",
    assuntos: ["revelacao-natural", "criacao", "salmos", "davi", "apologetica"]
  },

  // 120. Salmo 16.11
  {
    id: "sl16.11",
    referencia: "Sl 16.11",
    local: "Israel / Judá (Israel)",
    paisAtual: "Israel",
    lider: "Davi",
    liderReinado: "1010-970 a.C.",
    periodo: "Reino Unido",
    periodoDatas: "1010-970 a.C.",
    data: "~1000 a.C.",
    antes: "Davi expressa sua confiança em Deus. Ele contrasta os ídolos e os prazeres passageiros com a alegria verdadeira que só se encontra na presença de Deus.",
    versiculo: "✅ Tu me farás conhecer a vereda da vida; na tua presença há plenitude de alegria; à tua direita há delícias perpetuamente.",
    depois: "Pedro cita este salmo em Atos 2.25-28 para provar a ressurreição de Cristo. Davi profetizou que o Santo de Deus não veria corrupção — cumprido em Jesus. O salmo também revela que a verdadeira alegria e o sentido da vida estão em Deus, não nas coisas materiais.",
    tags: "alegria / vida / presença de Deus / ressurreição",
    assuntos: ["alegria", "presenca-deus", "salmos", "davi", "ressurreicao"]
  },

  // 121. Salmo 42.1
  {
    id: "sl42.1",
    referencia: "Sl 42.1",
    local: "Israel / Judá (Israel)",
    paisAtual: "Israel",
    lider: "",
    liderReinado: "",
    periodo: "Reino Unido / Reino Dividido",
    periodoDatas: "1010-586 a.C.",
    data: "~século X-V a.C.",
    antes: "O salmista está longe de Jerusalém, possivelmente exilado ou fugindo de perseguidores. Ele expressa uma profunda sede espiritual por Deus, comparando-a à sede física de um cervo por água.",
    versiculo: "✅ Assim como o cervo anseia por correntes de água, assim a minha alma anseia por ti, ó Deus.",
    depois: "Este versículo tem sido usado ao longo da história para expressar o desejo humano por Deus. Agostinho escreveu: 'Fizeste-nos para ti, Senhor, e o nosso coração está inquieto enquanto não descansar em ti'. O salmo ensina que o vazio existencial só pode ser preenchido pela presença de Deus.",
    tags: "sede de Deus / vazio / anseio / espiritualidade",
    assuntos: ["sede-de-deus", "vazio-existencial", "salmos", "adoracao", "espiritualidade"]
  }
];

// ============================================
// FUNÇÃO PARA FORMATAR CABEÇALHO
// ============================================

function formatarCabecalho(ctx) {
  let cabecalho = `📖 ${ctx.referencia} | 🚩 ${ctx.local}`;
  
  if (ctx.lider && ctx.lider !== "") {
    cabecalho += ` | 👑 ${ctx.lider}`;
    if (ctx.liderReinado && ctx.liderReinado !== "") {
      cabecalho += ` (${ctx.liderReinado})`;
    }
  }
  
  if (ctx.periodo && ctx.periodo !== "") {
    cabecalho += ` | 📜 ${ctx.periodo}`;
    if (ctx.periodoDatas && ctx.periodoDatas !== "") {
      cabecalho += ` (${ctx.periodoDatas})`;
    }
  }
  
  cabecalho += ` | 📅 ${ctx.data}`;
  
  return cabecalho;
}

// ============================================
// MAPA NEUTRO (SEM MARCAÇÕES)
// ============================================

const mapaConfig = {
  centro: [20, 0],
  zoom: 2,
  marcadores: []
};

// ============================================
// FUNÇÃO PARA ADICIONAR NOVOS CONTEXTOS (ordem de chegada)
// ============================================

function adicionarContexto(novoContexto) {
  if (!novoContexto.id || !novoContexto.referencia) {
    console.error("❌ Contexto inválido: id e referencia são obrigatórios");
    return false;
  }
  
  // Verifica se já existe
  const existe = bibliotecaContextos.some(ctx => ctx.id === novoContexto.id);
  if (existe) {
    console.warn(`⚠️ Contexto "${novoContexto.id}" já existe. Use editarContexto() para modificar.`);
    return false;
  }
  
  bibliotecaContextos.push(novoContexto);
  console.log(`✅ Contexto "${novoContexto.id}" adicionado ao final da lista.`);
  return true;
}

// ============================================
// FUNÇÕES DE BUSCA
// ============================================

function buscarContextoPorId(id) {
  return bibliotecaContextos.find(ctx => ctx.id === id);
}

function buscarContextosPorLocal(local) {
  return bibliotecaContextos.filter(ctx => ctx.local.includes(local));
}

function buscarContextosPorAssunto(assuntoId) {
  return bibliotecaContextos.filter(ctx => ctx.assuntos && ctx.assuntos.includes(assuntoId));
}

// ============================================
// EXPORTAÇÃO
// ============================================

// Monta o mapa de acesso rápido por id (objeto, não array)
const contextosBiblicosMap = {};
bibliotecaContextos.forEach(function(ctx) {
  contextosBiblicosMap[ctx.id] = ctx;
});

if (typeof window !== 'undefined') {
  // Mantém o array original (compatibilidade)
  window.contextosBiblicos = bibliotecaContextos;
  // Adiciona o mapa por id para acesso direto
  window.contextosBiblicosMap = contextosBiblicosMap;
  window.adicionarContexto = adicionarContexto;
  window.buscarContextoPorId = buscarContextoPorId;
  window.buscarContextosPorLocal = buscarContextosPorLocal;
  window.buscarContextosPorAssunto = buscarContextosPorAssunto;
  window.formatarCabecalho = formatarCabecalho;
}

console.log(`📖 biblioteca-contextos-biblicos.js carregado com sucesso!`);
console.log(`📊 Total de contextos: ${bibliotecaContextos.length}`);
console.log(`🗂️ Mapa de IDs disponível em window.contextosBiblicosMap`);
console.log(`📋 IDs no mapa: ${Object.keys(contextosBiblicosMap).join(', ')}`);