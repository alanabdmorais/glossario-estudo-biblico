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
  },

// 122. Atos 2.42
{
  id: "at2.42",
  referencia: "At 2.42",
  local: "Jerusalém / Judéia (Israel)",
  paisAtual: "Israel",
  lider: "Pedro",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  data: "~30 d.C.",
  antes: "Cerca de 3.000 pessoas haviam se convertido no dia de Pentecostes após a pregação de Pedro. Eles foram batizados e se juntaram à comunidade cristã primitiva.",
  versiculo: "✅ E perseveravam na doutrina dos apóstolos, e na comunhão, e no partir do pão, e nas orações.",
  depois: "A igreja primitiva crescia diariamente. Os novos convertidos vendiam suas propriedades e repartiam com os necessitados. O Senhor acrescentava à igreja os que iam sendo salvos.",
  tags: "doutrina / comunhão / oração / partir do pão",
  assuntos: ["igreja-primitiva", "pentecostes", "jerusalem"]
},

// 123. Atos 2.46
{
  id: "at2.46",
  referencia: "At 2.46",
  local: "Jerusalém / Judéia (Israel)",
  paisAtual: "Israel",
  lider: "Pedro",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  data: "~30 d.C.",
  antes: "Os primeiros cristãos dedicavam-se ao ensino dos apóstolos, à comunhão e às orações. Havia um senso de comunidade e partilha entre eles.",
  versiculo: "✅ E, perseverando unânimes todos os dias no templo, e partindo o pão em casa, comiam juntos com alegria e singeleza de coração.",
  depois: "A igreja mantinha tanto o culto público no templo quanto os encontros nas casas. A alegria e a generosidade marcavam sua comunhão. Deus acrescentava novas pessoas diariamente.",
  tags: "templo / casa / alegria / comunhão",
  assuntos: ["igreja-primitiva", "jerusalem", "comunhao"]
},

// 124. Colossenses 1.23
{
  id: "cl1.23",
  referencia: "Cl 1.23",
  local: "Roma / Itália",
  paisAtual: "Itália",
  lider: "Paulo",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  data: "~60-62 d.C.",
  antes: "Paulo escreve aos colossenses sobre a supremacia de Cristo. Ele os exorta a permanecerem firmes na fé, sem se desviarem da esperança do evangelho.",
  versiculo: "✅ Se, na verdade, permanecerdes fundados e firmes na fé, e não vos moverdes da esperança do evangelho que ouvistes, e que foi pregado a toda criatura que está debaixo do céu; e do qual eu, Paulo, sou feito ministro.",
  depois: "O evangelho já havia se espalhado por todo o mundo conhecido na época de Paulo. A mensagem de Cristo não era um movimento local, mas universal. Paulo se via como ministro desse evangelho global.",
  tags: "evangelho / pregação / universal / permanecer",
  assuntos: ["roma", "paulo", "evangelho", "universalidade"]
},

// 125. Efésios 1.22-23
{
  id: "ef1.22",
  referencia: "Ef 1.22-23",
  local: "Roma / Itália",
  paisAtual: "Itália",
  lider: "Paulo",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  data: "~60-62 d.C.",
  antes: "Paulo ora para que os efésios conheçam o poder de Deus manifestado em Cristo. Ele descreve a posição exaltada de Cristo após a ressurreição.",
  versiculo: "✅ E sujeitou todas as coisas debaixo de seus pés, e sobre todas as coisas o constituiu como cabeça da igreja, que é o seu corpo, a plenitude daquele que cumpre tudo em todos.",
  depois: "Cristo é a cabeça e a igreja é o corpo. A igreja não é apenas seguidora de Cristo, mas Sua plenitude - Ele Se expressa através dela. Esta é uma das declarações mais elevadas sobre a igreja no Novo Testamento.",
  tags: "cabeça / corpo / igreja / plenitude",
  assuntos: ["roma", "paulo", "igreja", "corpo-de-cristo"]
},

// 126. Efésios 2.19
{
  id: "ef2.19",
  referencia: "Ef 2.19",
  local: "Roma / Itália",
  paisAtual: "Itália",
  lider: "Paulo",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  data: "~60-62 d.C.",
  antes: "Paulo explica que tanto judeus quanto gentios foram reconciliados com Deus através da cruz. Antes, os gentios eram estrangeiros e excluídos das alianças.",
  versiculo: "✅ Assim que já não sois estrangeiros, nem forasteiros, mas concidadãos dos santos e da família de Deus.",
  depois: "A igreja é uma nova família, onde judeus e gentios são membros da mesma casa. Não há mais divisão étnica ou religiosa. Todos têm igual acesso a Deus através de Cristo.",
  tags: "família / concidadãos / santos / unidade",
  assuntos: ["roma", "paulo", "familia-deus", "unidade-igreja"]
},

// 127. Efésios 2.20
{
  id: "ef2.20",
  referencia: "Ef 2.20",
  local: "Roma / Itália",
  paisAtual: "Itália",
  lider: "Paulo",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  data: "~60-62 d.C.",
  antes: "Paulo continua a metáfora da igreja como edifício. Os gentios não eram mais estrangeiros, mas agora faziam parte da construção espiritual.",
  versiculo: "✅ Edificados sobre o fundamento dos apóstolos e dos profetas, de que Jesus Cristo é a principal pedra da esquina.",
  depois: "A igreja é comparada a um edifício. Os apóstolos e profetas são o fundamento (porque receberam e transmitiram a revelação), e Cristo é a pedra angular que sustenta e alinha toda a construção.",
  tags: "fundamento / apóstolos / profetas / pedra angular",
  assuntos: ["roma", "paulo", "igreja", "apostolos"]
},

// 128. Gálatas 6.10
{
  id: "gl6.10",
  referencia: "Gl 6.10",
  local: "Galácia / Ásia Menor (Turquia)",
  paisAtual: "Turquia",
  lider: "Paulo",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  data: "~49-55 d.C.",
  antes: "Paulo conclui a carta aos Gálatas com exortações práticas. Ele falou sobre semear no Espírito, sobre restaurar os caídos e sobre compartilhar cargas.",
  versiculo: "✅ Então, enquanto temos tempo, façamos bem a todos, mas principalmente aos domésticos da fé.",
  depois: "A prioridade do bem é para todos, mas especialmente para a família da fé - a igreja. Paulo reconhece que o amor cristão começa dentro da comunidade, mas não se limita a ela.",
  tags: "fazer bem / família da fé / prioridade",
  assuntos: ["galacia", "paulo", "amor-cristao", "comunidade"]
},

// 129. Hebreus 10.25
{
  id: "hb10.25",
  referencia: "Hb 10.25",
  local: "Roma / Itália",
  paisAtual: "Itália",
  lider: "",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  data: "~60-65 d.C.",
  antes: "O autor de Hebreus exorta os cristãos a se aproximarem de Deus com coração sincero. Eles estavam enfrentando perseguição e alguns estavam abandonando a comunhão.",
  versiculo: "✅ Não deixando a nossa congregação, como é costume de alguns; antes, admoestando-nos uns aos outros; e tanto mais quanto vedes que se vai aproximando aquele dia.",
  depois: "A exortação mútua e a reunião regular são essenciais para a perseverança, especialmente em tempos de perseguição. O autor alerta que o dia do juízo está se aproximando, o que torna a comunhão ainda mais necessária.",
  tags: "congregação / exortação / dia / comunhão",
  assuntos: ["roma", "autor-hebreus", "comunhao", "perseveranca"]
},

// 130. Mateus 16.18
{
  id: "mt16.18",
  referencia: "Mt 16.18",
  local: "Cesareia de Filipe / Galileia (Israel)",
  paisAtual: "Israel",
  lider: "Jesus",
  liderReinado: "",
  periodo: "Período Romano",
  periodoDatas: "63 a.C. - 70 d.C.",
  data: "~29-30 d.C.",
  antes: "Jesus perguntou aos discípulos quem os homens diziam que Ele era. Após várias respostas, Pedro confessou: 'Tu és o Cristo, o Filho do Deus vivo'.",
  versiculo: "✅ Pois também eu te digo que tu és Pedro, e sobre esta pedra edificarei a minha igreja, e as portas do inferno não prevalecerão contra ela.",
  depois: "Esta é a primeira vez que Jesus usa a palavra 'igreja' (ekklesia). A 'pedra' sobre a qual a igreja é edificada é a confissão de Pedro de que Jesus é o Cristo. As portas do inferno - imagem de um forte sitiado - não prevalecerão.",
  tags: "igreja / pedra / portas do inferno / confissão",
  assuntos: ["cesareia-filipe", "jesus", "igreja", "pedro"]
},

// 131. Mateus 28.20
{
  id: "mt28.20",
  referencia: "Mt 28.20",
  local: "Galileia / Monte designado por Jesus (Israel)",
  paisAtual: "Israel",
  lider: "Jesus",
  liderReinado: "",
  periodo: "Período Romano",
  periodoDatas: "63 a.C. - 70 d.C.",
  data: "~30 d.C.",
  antes: "Após a ressurreição, Jesus encontrou os discípulos na Galileia. Ele lhes deu a Grande Comissão: 'Ide, fazei discípulos de todas as nações, batizando-os... ensinando-os'.",
  versiculo: "✅ Ensinando-os a guardar todas as coisas que eu vos tenho mandado; e eis que eu estou convosco todos os dias, até à consumação dos séculos.",
  depois: "A promessa da presença constante de Jesus sustenta a missão da igreja. Ele não abandonou seus discípulos. A mesma presença que esteve com os apóstolos continua com a igreja até o fim dos tempos.",
  tags: "presença / sempre / Jesus / comissionamento",
  assuntos: ["galileia", "jesus", "grande-comissao", "presenca-divina"]
},

// 132. Romanos 12.5
{
  id: "rm12.5",
  referencia: "Rm 12.5",
  local: "Corinto / Acaia (Grécia)",
  paisAtual: "Grécia",
  lider: "Paulo",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  data: "~57 d.C.",
  antes: "Paulo exorta os romanos a apresentarem seus corpos como sacrifício vivo. Ele começa a descrever como os dons devem funcionar no corpo de Cristo.",
  versiculo: "✅ Assim nós, que somos muitos, somos um só corpo em Cristo, mas individualmente somos membros uns dos outros.",
  depois: "A unidade no corpo não significa uniformidade. Cada membro tem uma função diferente, mas todos pertencem uns aos outros. Esta interdependência elimina o orgulho e a inveja na igreja.",
  tags: "membros / uns dos outros / corpo / interdependência",
  assuntos: ["corinto", "paulo", "corpo-de-cristo", "unidade-igreja"]
},

// 133. Romanos 16.5
{
  id: "rm16.5",
  referencia: "Rm 16.5",
  local: "Corinto / Acaia (Grécia)",
  paisAtual: "Grécia",
  lider: "Paulo",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  data: "~57 d.C.",
  antes: "Paulo termina a carta aos Romanos com saudações pessoais. Ele lista muitos colaboradores, mostrando seu apreço pela equipe que trabalhou com ele.",
  versiculo: "✅ Saudai também a igreja que está em sua casa. Saudai a Epêneto, meu amado, que é as primícias da Acaia em Cristo.",
  depois: "As igrejas domésticas eram comuns no cristianismo primitivo, já que não haviam construções dedicadas ao culto. Priscila e Áquila também tinham uma igreja em sua casa. O cristianismo cresceu através dessas comunidades familiares.",
  tags: "igreja em casa / saudações / Priscila / Áquila",
  assuntos: ["corinto", "paulo", "igreja-domestica", "comunidade"]
},

// 134. Atos 2.4
{
  id: "at2.4",
  referencia: "At 2.4",
  local: "Jerusalém / Judéia (Israel)",
  paisAtual: "Israel",
  lider: "Pedro",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  data: "~30 d.C.",
  antes: "Os apóstolos estavam reunidos no cenáculo no dia de Pentecostes. De repente, veio um som do céu como de um vento impetuoso, e línguas como de fogo repousaram sobre cada um deles.",
  versiculo: "✅ E todos foram cheios do Espírito Santo, e começaram a falar noutras línguas, conforme o Espírito Santo lhes concedia que falassem.",
  depois: "O cumprimento da promessa de Jesus (Atos 1.8) inaugurou a era da igreja. A capacitação do Espírito permitiu que os discípulos falassem em línguas, testemunhando a grandeza de Deus aos peregrinos de várias nações.",
  tags: "Pentecostes / Espírito Santo / línguas / capacitação",
  assuntos: ["jerusalem", "pentecostes", "espirito-santo", "igreja-primitiva"]
},

// 135. Atos 2.5
{
  id: "at2.5",
  referencia: "At 2.5",
  local: "Jerusalém / Judéia (Israel)",
  paisAtual: "Israel",
  lider: "Pedro",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  data: "~30 d.C.",
  antes: "Os discípulos começaram a falar em outras línguas pelo poder do Espírito Santo. O som atraiu uma multidão que se reuniu para entender o que estava acontecendo.",
  versiculo: "✅ E em Jerusalém estavam habitando judeus, varões religiosos, de todas as nações que estão debaixo do céu.",
  depois: "A diáspora judaica (judeus espalhados pelo império) havia retornado a Jerusalém para a festa de Pentecostes. Eles testemunharam o evento e ouviram o evangelho em suas próprias línguas, levando a mensagem de volta às suas comunidades.",
  tags: "judeus / nações / Pentecostes / diáspora",
  assuntos: ["jerusalem", "pentecostes", "judeus", "diaspora"]
},

// 136. Atos 2.6-8
{
  id: "at2.6",
  referencia: "At 2.6-8",
  local: "Jerusalém / Judéia (Israel)",
  paisAtual: "Israel",
  lider: "Pedro",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  data: "~30 d.C.",
  antes: "O barulho do derramamento do Espírito atraiu uma grande multidão. Os peregrinos estavam confusos porque cada um ouvia os discípulos falando em sua própria língua.",
  versiculo: "⚠️ E, feito aquele som, ajuntou-se uma multidão, e estava confusa, porque cada um os ouvia falar na sua própria língua. E todos se maravilhavam e se admiravam, dizendo uns aos outros: Porventura não são galileus todos esses que estão falando? Como, pois, os ouvimos, cada um na nossa própria língua em que somos nascidos?",
  depois: "O milagre de Pentecostes foi auditivo, não apenas vocal. Os ouvintes ouviam em suas línguas nativas o que os discípulos diziam. Isso simbolizava que o evangelho era para todas as nações, revertendo a confusão de línguas de Babel.",
  tags: "línguas / galileus / milagre / nações",
  assuntos: ["jerusalem", "pentecostes", "milagre", "linguas"]
},

// 137. Atos 2.9-11
{
  id: "at2.9",
  referencia: "At 2.9-11",
  local: "Jerusalém / Judéia (Israel)",
  paisAtual: "Israel",
  lider: "Pedro",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  data: "~30 d.C.",
  antes: "A multidão estava confusa e maravilhada porque cada um ouvia os discípulos falando em sua própria língua. Eles se perguntavam como galileus podiam falar tantas línguas.",
  versiculo: "⚠️ Partos, medos, elamitas; e os que habitam na Mesopotâmia, Judéia, Capadócia, Ponto, Ásia, Frígia, Panfília, Egito, partes da Líbia, junto a Cirene, e forasteiros romanos, judeus e prosélitos, cretenses e árabes; todos os ouvimos falar em nossas próprias línguas as grandezas de Deus.",
  depois: "A lista de 15 nações representa todo o mundo conhecido na época - do Oriente (Partos, Medos) ao Ocidente (Roma), do Norte (Ponto, Ásia) ao Sul (Egito, Líbia). O evangelho começou em Jerusalém, mas seu destino era o mundo inteiro.",
  tags: "nações / línguas / lista / universalidade",
  assuntos: ["jerusalem", "pentecostes", "universalidade", "evangelho"]
},

// 138. Joel 2.28
{
  id: "jl2.28",
  referencia: "Jl 2.28",
  local: "Judá (Israel)",
  paisAtual: "Israel",
  lider: "Joel",
  liderReinado: "",
  periodo: "Profetas Menores",
  periodoDatas: "~835-796 a.C.",
  data: "~830 a.C.",
  antes: "Joel profetizou sobre um juízo iminente de gafanhotos, mas também sobre um derramamento futuro do Espírito que inauguraria uma nova era.",
  versiculo: "✅ E há de ser que, depois, derramarei o meu Espírito sobre toda a carne; e vossos filhos e vossas filhas profetizarão, os vossos velhos sonharão sonhos, os vossos jovens terão visões.",
  depois: "Pedro citou esta profecia em Atos 2.17-21 como sendo cumprida em Pentecostes. O derramamento não seria mais restrito a profetas ou reis, mas sobre 'toda a carne' - homens e mulheres, jovens e velhos, judeus e gentios.",
  tags: "derramamento / Espírito / profecia / Pentecostes",
  assuntos: ["juda", "joel", "espirito-santo", "profecia", "pentecostes"]
},

// 139. Levítico 23.15-16
{
  id: "lv23.15",
  referencia: "Lv 23.15-16",
  local: "Sinai / Deserto (Egito/Israel)",
  paisAtual: "Egito/Israel",
  lider: "Moisés",
  liderReinado: "",
  periodo: "Êxodo e Conquista",
  periodoDatas: "~1446-1400 a.C.",
  data: "~1446 a.C.",
  antes: "Deus instruiu Moisés sobre as festas do Senhor. Depois da Páscoa e dos Pães Ázimos, vinha a festa das Semanas (Pentecostes), cinquenta dias depois.",
  versiculo: "✅ Também contareis desde o dia seguinte ao sábado, desde o dia em que trouxerdes o molho da oferta de movimento, sete semanas inteiras serão. Até ao dia seguinte ao sétimo sábado, contareis cinquenta dias; então oferecereis nova oferta de manjares ao Senhor.",
  depois: "Pentecostes (do grego 'pentekoste' = quinquagésimo) era uma festa de colheita. Era também uma das três festas de peregrinação, quando os judeus iam a Jerusalém. Foi neste contexto que o Espírito Santo foi derramado.",
  tags: "Pentecostes / festa / semanas / colheita",
  assuntos: ["sinai", "moises", "pentecostes", "festas-biblicas"]
},

// 140. 1 Coríntios 1.2
{
  id: "1co1.2",
  referencia: "1 Co 1.2",
  local: "Corinto / Acaia (Grécia)",
  paisAtual: "Grécia",
  lider: "Paulo",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  data: "~55 d.C.",
  antes: "Paulo inicia sua primeira carta aos coríntios com saudações. Ele escreve para uma igreja que ele havia fundado em sua segunda viagem missionária.",
  versiculo: "✅ À igreja de Deus que está em Corinto, aos santificados em Cristo Jesus, chamados santos, com todos os que em todo lugar invocam o nome de nosso Senhor Jesus Cristo, Senhor deles e nosso.",
  depois: "Paulo distingue a igreja local (em Corinto) da igreja universal (todos os que invocam o nome de Cristo). A carta abordaria problemas específicos da igreja coríntia: divisões, imoralidade, litígios, dons e a ressurreição.",
  tags: "igreja / Corinto / santos / chamados",
  assuntos: ["corinto", "paulo", "igreja-local", "igreja-universal"]
},

// 141. Atos 20.28
{
  id: "at20.28",
  referencia: "At 20.28",
  local: "Mileto / Ásia Menor (Turquia)",
  paisAtual: "Turquia",
  lider: "Paulo",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  data: "~57 d.C.",
  antes: "Paulo convocou os anciãos da igreja de Éfeso para encontrá-lo em Mileto. Ele sabia que seria preso em Jerusalém e não os veria novamente.",
  versiculo: "✅ Olhai, pois, por vós e por todo o rebanho sobre que o Espírito Santo vos constituiu bispos, para apascentardes a igreja de Deus, que ele resgatou com seu próprio sangue.",
  depois: "Paulo exorta os líderes a cuidarem da igreja, que Deus comprou com o sangue de Cristo. A imagem é pastoral: a igreja é um rebanho, os líderes são pastores, e o preço pago foi o sangue do próprio Filho de Deus.",
  tags: "bispos / apascentar / igreja / sangue",
  assuntos: ["mileto", "paulo", "lideranca-igreja", "pastoral"]
},

// 142. Colossenses 1.18
{
  id: "cl1.18",
  referencia: "Cl 1.18",
  local: "Roma / Itália",
  paisAtual: "Itália",
  lider: "Paulo",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  data: "~60-62 d.C.",
  antes: "Paulo escreve um dos mais elevados hinos cristológicos sobre a supremacia de Cristo. Ele é a imagem do Deus invisível, o primogênito de toda criação.",
  versiculo: "✅ E ele é a cabeça do corpo, da igreja; é o princípio, o primogênito dentre os mortos, para que em tudo tenha a preeminência.",
  depois: "Cristo é a cabeça, a igreja é o corpo. Ele tem a preeminência em tudo: na criação (primogênito de toda criação) e na redenção (primogênito dentre os mortos). A igreja existe para manifestar a supremacia de Cristo.",
  tags: "cabeça / corpo / primogênito / preeminência",
  assuntos: ["roma", "paulo", "cristo", "igreja", "supremacia"]
},

// 143. Hebreus 13.17
{
  id: "hb13.17",
  referencia: "Hb 13.17",
  local: "Roma / Itália",
  paisAtual: "Itália",
  lider: "",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  data: "~60-65 d.C.",
  antes: "O autor de Hebreus dá instruções práticas para a vida cristã. Ele aborda o amor fraternal, a hospitalidade, o casamento e o contentamento.",
  versiculo: "✅ Obedecei a vossos pastores e sujeitai-vos a eles; porque velam por vossas almas, como quem há de dar conta delas; para que o façam com alegria e não gemendo, porque isso não vos seria útil.",
  depois: "A liderança da igreja tem responsabilidade diante de Deus pelas almas sob seus cuidados. A resposta da congregação deve ser obediência e submissão voluntária. Quando os líderes lideram com alegria, toda a igreja se beneficia.",
  tags: "obedecer / pastores / vigiar / dar contas",
  assuntos: ["roma", "autor-hebreus", "lideranca", "igreja-local"]
},

// 144. Apocalipse 19.7-8
{
  id: "ap19.7",
  referencia: "Ap 19.7-8",
  local: "Patmos / Ilhas do Egeu (Grécia)",
  paisAtual: "Grécia",
  lider: "João",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  data: "~95 d.C.",
  antes: "João ouve uma grande multidão no céu celebrando a queda da Babilônia e a vitória de Deus. Há sons de aleluia e adoração.",
  versiculo: "✅ Regozijemo-nos, e alegremo-nos, e demos-lhe glória; porque vindas são as bodas do Cordeiro, e já a sua esposa se preparou. E foi-lhe dado que se vestisse de linho fino, puro e resplandecente; porque o linho fino são as justiças dos santos.",
  depois: "A igreja é apresentada como a noiva do Cordeiro (Cristo). As bodas representam a união final e eterna entre Cristo e Sua igreja. O vestido de linho fino representa as obras justas dos santos - a evidência da salvação, não o meio dela.",
  tags: "bodas / Cordeiro / noiva / justiças",
  assuntos: ["patmos", "joao", "noiva-de-cristo", "apocalipse", "escatologia"]
},

// 145. Apocalipse 21.2
{
  id: "ap21.2",
  referencia: "Ap 21.2",
  local: "Patmos / Ilhas do Egeu (Grécia)",
  paisAtual: "Grécia",
  lider: "João",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  data: "~95 d.C.",
  antes: "João vê um novo céu e uma nova terra. O primeiro céu e a primeira terra passaram, e o mar já não existe. Deus habitará com os homens.",
  versiculo: "✅ E eu, João, vi a santa cidade, a nova Jerusalém, que de Deus descia do céu, aparelhada como uma esposa adornada para o seu marido.",
  depois: "A nova Jerusalém é a imagem final da igreja - a noiva de Cristo, preparada e adornada para o encontro com seu marido. A cidade celestial não é apenas um lugar, mas um povo - a comunidade redimida em união perfeita com Deus.",
  tags: "nova Jerusalém / noiva / cidade santa / esposa",
  assuntos: ["patmos", "joao", "nova-jerusalem", "apocalipse", "escatologia"]
},

// 146. Atos 9.4
{
  id: "at9.4",
  referencia: "At 9.4",
  local: "Damasco / Síria",
  paisAtual: "Síria",
  lider: "Saulo/Paulo",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  data: "~34-35 d.C.",
  antes: "Saulo (Paulo) estava a caminho de Damasco com autorização para prender cristãos. Ele perseguia a igreja ferozmente, achando que estava servindo a Deus.",
  versiculo: "✅ E, caindo em terra, ouviu uma voz que lhe dizia: Saulo, Saulo, por que me persegues?",
  depois: "Ao perguntar 'Quem és, Senhor?', Saulo descobre que perseguir a igreja é perseguir o próprio Cristo. A identificação entre Cristo e Sua igreja é tão íntima que o que se faz à igreja se faz a Ele. Esta foi a virada na vida de Paulo.",
  tags: "perseguição / Saulo / igreja / Cristo",
  assuntos: ["damasco", "paulo", "conversao", "igreja", "perseguicao"]
},

// 147. Efésios 5.25
{
  id: "ef5.25",
  referencia: "Ef 5.25",
  local: "Roma / Itália",
  paisAtual: "Itália",
  lider: "Paulo",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  data: "~60-62 d.C.",
  antes: "Paulo instrui sobre relacionamentos familiares: esposas devem se sujeitar aos maridos, e maridos devem amar suas esposas. O casamento é um mistério que aponta para Cristo e a igreja.",
  versiculo: "✅ Vós, maridos, amai vossas mulheres, como também Cristo amou a igreja e a si mesmo se entregou por ela.",
  depois: "O amor de Cristo pela igreja é o padrão do amor conjugal. Ele não é um amor sentimental ou egoísta, mas sacrificial - 'se entregou por ela'. A cruz é a expressão máxima do amor de Cristo por Sua igreja.",
  tags: "amar / igreja / entregou / sacrifício",
  assuntos: ["roma", "paulo", "amor-cristo", "igreja", "casamento"]
},

// 148. Efésios 5.27
{
  id: "ef5.27",
  referencia: "Ef 5.27",
  local: "Roma / Itália",
  paisAtual: "Itália",
  lider: "Paulo",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  data: "~60-62 d.C.",
  antes: "Paulo continua descrevendo o amor sacrificial de Cristo pela igreja. Ele não apenas morreu por ela, mas também a purifica e santifica.",
  versiculo: "✅ Para a apresentar a si mesmo igreja gloriosa, sem mácula, nem ruga, nem coisa semelhante, mas santa e irrepreensível.",
  depois: "O objetivo final de Cristo para a igreja é apresentá-la perfeita a Si mesmo. A santificação é obra contínua de Cristo através da Palavra e do Espírito. A igreja será sem mácula (moralmente pura), sem ruga (eternamente jovem), santa e irrepreensível.",
  tags: "igreja / gloriosa / sem mácula / santa",
  assuntos: ["roma", "paulo", "igreja", "santificacao", "gloria"]
},

// 149. Oséias 2.19-20
{
  id: "os2.19",
  referencia: "Os 2.19-20",
  local: "Israel / Reino do Norte",
  paisAtual: "Israel",
  lider: "Jeroboão II",
  liderReinado: "793-753 a.C.",
  periodo: "Reino Dividido (Norte)",
  periodoDatas: "930-722 a.C.",
  data: "~755-715 a.C.",
  antes: "Deus, através de Oséias, usa o casamento do profeta com uma prostituta (Gômer) como metáfora do relacionamento de Deus com Israel infiel. Deus promete restaurar a aliança.",
  versiculo: "✅ E desposar-te-ei comigo para sempre; desposar-te-ei comigo em justiça, e em juízo, e em benignidade, e em misericórdias. E desposar-te-ei comigo em fidelidade, e conhecerás ao Senhor.",
  depois: "O amor de Deus por Israel é como um casamento. Apesar da infidelidade de Israel (idolatria), Deus promete restaurar a aliança. Esta imagem prepara o Novo Testamento, onde a igreja é a noiva de Cristo - um relacionamento de amor eterno baseado em justiça, juízo, benignidade, misericórdia e fidelidade.",
  tags: "desposar / noiva / aliança / fidelidade",
  assuntos: ["israel", "oseias", "alianca", "noiva-de-deus", "amor-divino"]
},

// 150. 1 Coríntios 3.16
{
  id: "1co3.16",
  referencia: "1 Co 3.16",
  local: "Corinto / Acaia (Grécia)",
  paisAtual: "Grécia",
  lider: "Paulo",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  data: "~55 d.C.",
  antes: "Paulo está corrigindo divisões na igreja de Corinto. Alguns seguiam Paulo, outros Apolo, outros Cefas. Ele argumenta que todos são servos de Deus e que a igreja é o templo de Deus.",
  versiculo: "✅ Não sabeis vós que sois o templo de Deus e que o Espírito de Deus habita em vós?",
  depois: "A igreja não é um edifício físico, mas um templo espiritual onde Deus habita. O Espírito Santo não habita em templos feitos por mãos humanas, mas no povo de Deus. Esta verdade exige santidade e respeito mútuo entre os crentes.",
  tags: "templo / Deus / habitação / Espírito",
  assuntos: ["corinto", "paulo", "igreja", "templo-deus"]
},

// 151. 1 Coríntios 12.7
{
  id: "1co12.7",
  referencia: "1 Co 12.7",
  local: "Corinto / Acaia (Grécia)",
  paisAtual: "Grécia",
  lider: "Paulo",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  data: "~55 d.C.",
  antes: "Paulo introduz o tema dos dons espirituais em Corinto. Havia competição e orgulho em relação aos dons, especialmente o dom de línguas.",
  versiculo: "✅ Mas a manifestação do Espírito é dada a cada um para o que for útil.",
  depois: "O propósito dos dons não é exaltação pessoal, mas utilidade para a comunidade. Cada dom é uma manifestação do Espírito para o bem comum. Paulo usará essa verdade para corrigir os abusos em Corinto.",
  tags: "dons / manifestação / Espírito / utilidade",
  assuntos: ["corinto", "paulo", "dons-espirituais", "comunidade"]
},

// 152. 1 Coríntios 12.12
{
  id: "1co12.12",
  referencia: "1 Co 12.12",
  local: "Corinto / Acaia (Grécia)",
  paisAtual: "Grécia",
  lider: "Paulo",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  data: "~55 d.C.",
  antes: "Paulo usa a metáfora do corpo humano para ensinar sobre a unidade e diversidade na igreja. Os coríntios estavam divididos e competindo entre si.",
  versiculo: "✅ Porque, assim como o corpo é um e tem muitos membros, e todos os membros, sendo muitos, são um só corpo, assim é Cristo também.",
  depois: "A igreja é como um corpo com muitos membros que funcionam juntos. Cada membro é necessário e tem uma função única. A diversidade não é problema, mas força. A unidade não significa uniformidade.",
  tags: "corpo / membros / unidade / diversidade",
  assuntos: ["corinto", "paulo", "corpo-de-cristo", "unidade-igreja"]
},

// 153. 1 Coríntios 12.27
{
  id: "1co12.27",
  referencia: "1 Co 12.27",
  local: "Corinto / Acaia (Grécia)",
  paisAtual: "Grécia",
  lider: "Paulo",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  data: "~55 d.C.",
  antes: "Paulo conclui sua argumentação sobre o corpo de Cristo. Ele já explicou que muitos membros formam um corpo e que todos são necessários.",
  versiculo: "✅ Ora, vós sois o corpo de Cristo, e individualmente seus membros.",
  depois: "Esta é uma das declarações mais diretas sobre a identidade da igreja. Os crentes não são apenas seguidores de Cristo; eles são o próprio corpo de Cristo na terra. Cada um tem um papel único e indispensável.",
  tags: "corpo / Cristo / membros / identidade",
  assuntos: ["corinto", "paulo", "corpo-de-cristo", "igreja"]
},

// 154. 1 Pedro 2.5
{
  id: "1pe2.5",
  referencia: "1 Pe 2.5",
  local: "Roma / Itália",
  paisAtual: "Itália",
  lider: "Pedro",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  data: "~60-65 d.C.",
  antes: "Pedro escreve aos cristãos dispersos enfrentando perseguição. Ele os lembra de sua identidade como pedras vivas em construção espiritual.",
  versiculo: "✅ Vós também, como pedras vivas, sois edificados casa espiritual e sacerdócio santo, para oferecer sacrifícios espirituais agradáveis a Deus por Jesus Cristo.",
  depois: "Cada crente é uma 'pedra viva' na construção da igreja. Diferente de um templo de pedras mortas, a igreja é feita de pessoas vivas. Todos são sacerdotes com acesso direto a Deus, oferecendo vidas como sacrifícios espirituais.",
  tags: "pedras vivas / sacerdócio / templo / espiritual",
  assuntos: ["roma", "pedro", "igreja", "sacerdocio"]
},

// 155. 1 Tessalonicenses 5.11
{
  id: "1ts5.11",
  referencia: "1 Ts 5.11",
  local: "Corinto / Acaia (Grécia)",
  paisAtual: "Grécia",
  lider: "Paulo",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  data: "~50-51 d.C.",
  antes: "Paulo conclui sua primeira carta aos tessalonicenses com exortações práticas sobre a vida cristã e a esperança da volta de Cristo.",
  versiculo: "✅ Por isso, exortai-vos uns aos outros e edificai-vos reciprocamente, como também estais fazendo.",
  depois: "A exortação mútua e a edificação são responsabilidades de todos os crentes, não apenas dos líderes. A igreja cresce quando os membros se encorajam mutuamente. Esta é uma das marcas da comunidade cristã saudável.",
  tags: "exortação / edificação / mútuo / encorajamento",
  assuntos: ["corinto", "paulo", "comunidade", "edificacao"]
},

// 156. Apocalipse 7.9
{
  id: "ap7.9",
  referencia: "Ap 7.9",
  local: "Patmos / Ilhas do Egeu (Grécia)",
  paisAtual: "Grécia",
  lider: "João",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  data: "~95 d.C.",
  antes: "João vê uma visão dos 144.000 selados de Israel. Depois, uma multidão incontável de todas as nações aparece diante do trono de Deus.",
  versiculo: "✅ Depois destas coisas, olhei, e eis grande multidão que ninguém podia contar, de todas as nações, tribos, povos e línguas, em pé diante do trono e diante do Cordeiro, vestidos de vestes brancas, com palmas nas mãos.",
  depois: "A igreja universal é composta de pessoas de todas as nações, tribos, povos e línguas. A salvação não é exclusiva de um grupo étnico. A diversidade é celebrada na adoração celestial.",
  tags: "multidão / nações / tribos / línguas",
  assuntos: ["patmos", "joao", "igreja-universal", "apocalipse"]
},

// 157. Atos 1.3
{
  id: "at1.3",
  referencia: "At 1.3",
  local: "Jerusalém / Judéia (Israel)",
  paisAtual: "Israel",
  lider: "Jesus",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  data: "~30 d.C.",
  antes: "Lucas escreve a Teófilo sobre o que Jesus começou a fazer e ensinar. Após a ressurreição, Jesus apareceu aos apóstolos durante quarenta dias.",
  versiculo: "✅ Aos quais também, depois de ter padecido, se apresentou vivo, com muitas e infalíveis provas, sendo visto por eles durante quarenta dias, falando das coisas concernentes ao reino de Deus.",
  depois: "Jesus passou quarenta dias ensinando os apóstolos sobre o reino de Deus antes de ascender ao céu. Este período preparou-os para a missão que receberiam em Pentecostes. O reino de Deus era o tema central de Seu ensino pós-ressurreição.",
  tags: "quarenta dias / reino de Deus / ressurreição",
  assuntos: ["jerusalem", "jesus", "ressurreicao", "reino-deus"]
},

// 158. Atos 1.4-5
{
  id: "at1.4",
  referencia: "At 1.4-5",
  local: "Jerusalém / Judéia (Israel)",
  paisAtual: "Israel",
  lider: "Jesus",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  data: "~30 d.C.",
  antes: "Jesus estava reunido com os apóstolos antes de Sua ascensão. Eles perguntaram se Ele restauraria o reino a Israel naquele momento.",
  versiculo: "✅ E, estando com eles, determinou-lhes que não se ausentassem de Jerusalém, mas que esperassem a promessa do Pai, que, disse ele, de mim ouvistes. Porque, na verdade, João batizou com água, mas vós sereis batizados com o Espírito Santo, não muito depois destes dias.",
  depois: "Jesus ordenou que os discípulos esperassem em Jerusalém pela promessa do Pai - o batismo com o Espírito Santo. O dom do Espírito seria a capacitação para a missão de serem testemunhas em Jerusalém, Judeia, Samaria e até os confins da terra.",
  tags: "promessa / batismo / Espírito Santo / espera",
  assuntos: ["jerusalem", "jesus", "espirito-santo", "pentecostes"]
},

// 159. Atos 1.14
{
  id: "at1.14",
  referencia: "At 1.14",
  local: "Jerusalém / Judéia (Israel)",
  paisAtual: "Israel",
  lider: "Pedro",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  data: "~30 d.C.",
  antes: "Após a ascensão de Jesus, os apóstolos voltaram para Jerusalém. Eles se reuniram no cenáculo, onde estavam hospedados, junto com outras mulheres e os irmãos de Jesus.",
  versiculo: "✅ Todos estes perseveravam unanimemente em oração e súplica, com as mulheres, e Maria, mãe de Jesus, e com seus irmãos.",
  depois: "A igreja primitiva nasceu da oração. Cerca de 120 pessoas estavam reunidas em oração constante, aguardando a promessa do Espírito Santo. A unidade e a perseverança em oração prepararam o cenário para o derramamento de Pentecostes.",
  tags: "oração / unânime / discípulos / espera",
  assuntos: ["jerusalem", "igreja-primitiva", "oracao", "pentecostes"]
},

// 160. Atos 2.1
{
  id: "at2.1",
  referencia: "At 2.1",
  local: "Jerusalém / Judéia (Israel)",
  paisAtual: "Israel",
  lider: "Pedro",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  data: "~30 d.C.",
  antes: "Os discípulos estavam reunidos em Jerusalém, obedecendo à ordem de Jesus de esperar a promessa do Pai. Eles perseveravam em oração.",
  versiculo: "✅ E, ao cumprir-se o dia de Pentecostes, estavam todos reunidos no mesmo lugar.",
  depois: "Pentecostes era uma das três festas de peregrinação judaica, celebrada cinquenta dias após a Páscoa. Foi neste contexto que o Espírito Santo foi derramado. O cumprimento da promessa de Jesus inaugurou a era da igreja.",
  tags: "Pentecostes / cumprimento / dia / promessa",
  assuntos: ["jerusalem", "pentecostes", "espirito-santo", "igreja-primitiva"]
},

// 161. Atos 2.11
{
  id: "at2.11",
  referencia: "At 2.11",
  local: "Jerusalém / Judéia (Israel)",
  paisAtual: "Israel",
  lider: "Pedro",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  data: "~30 d.C.",
  antes: "A multidão estava confusa porque cada um ouvia os discípulos falando em sua própria língua. Eles listaram as várias nações representadas.",
  versiculo: "✅ Cretenses e árabes, todos os ouvimos falar em nossas próprias línguas as grandezas de Deus.",
  depois: "Os peregrinos não ouviram palavras vazias, mas 'as grandezas de Deus'. O evangelho começou a ser proclamado em todas as línguas, revertendo a confusão de Babel. A mensagem era sobre as maravilhas de Deus, especialmente a ressurreição de Cristo.",
  tags: "maravilhas / Deus / línguas / grandezas",
  assuntos: ["jerusalem", "pentecostes", "evangelho", "linguas"]
},

// 162. Atos 2.16-17
{
  id: "at2.16",
  referencia: "At 2.16-17",
  local: "Jerusalém / Judéia (Israel)",
  paisAtual: "Israel",
  lider: "Pedro",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  data: "~30 d.C.",
  antes: "Alguns zombavam dos discípulos, dizendo que estavam embriagados. Pedro se levantou para explicar o que estava acontecendo.",
  versiculo: "✅ Mas isto é o que foi dito pelo profeta Joel: E nos últimos dias acontecerá, diz Deus, que do meu Espírito derramarei sobre toda a carne.",
  depois: "Pedro cita Joel 2.28-32 para explicar Pentecostes. O derramamento do Espírito não era embriaguez, mas o cumprimento da profecia. A era dos 'últimos dias' havia começado com a vinda do Espírito.",
  tags: "Joel / profecia / últimos dias / derramamento",
  assuntos: ["jerusalem", "pedro", "profecia", "pentecostes", "joel"]
},

// 163. Atos 2.22-23
{
  id: "at2.22",
  referencia: "At 2.22-23",
  local: "Jerusalém / Judéia (Israel)",
  paisAtual: "Israel",
  lider: "Pedro",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  data: "~30 d.C.",
  antes: "Pedro começa a pregar o evangelho após citar a profecia de Joel. Ele conecta o derramamento do Espírito com a vida, morte e ressurreição de Jesus.",
  versiculo: "✅ Varões israelitas, ouvi estas palavras: A Jesus Nazareno, varão aprovado por Deus entre vós com milagres, prodígios e sinais, que Deus por ele fez no meio de vós, como vós mesmos bem sabeis; a este, que foi entregue pelo determinado conselho e presciência de Deus, vós crucificastes e matastes pelas mãos de injustos.",
  depois: "Pedro proclama que Jesus era aprovado por Deus através de milagres e sinais. A cruz não foi um acidente, mas parte do plano de Deus. Os ouvintes foram confrontados com sua culpa na crucificação.",
  tags: "Jesus / nazareno / crucificado / milagres",
  assuntos: ["jerusalem", "pedro", "evangelho", "cruz", "ressurreicao"]
},

// 164. Atos 2.24
{
  id: "at2.24",
  referencia: "At 2.24",
  local: "Jerusalém / Judéia (Israel)",
  paisAtual: "Israel",
  lider: "Pedro",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  data: "~30 d.C.",
  antes: "Pedro continua seu sermão, explicando que Jesus foi crucificado por homens injustos, mas Deus o ressuscitou.",
  versiculo: "✅ Ao qual Deus ressuscitou, soltas as dores da morte, pois não era possível que fosse retido por ela.",
  depois: "A ressurreição não foi um milagre qualquer. Era 'impossível' que a morte retivesse Jesus porque Ele era o Santo de Deus. Pedro cita o Salmo 16 para provar que Davi profetizou a ressurreição do Messias.",
  tags: "ressurreição / morte / libertou / impossível",
  assuntos: ["jerusalem", "pedro", "ressurreicao", "evangelho"]
},

// 165. Atos 2.32-36
{
  id: "at2.32",
  referencia: "At 2.32-36",
  local: "Jerusalém / Judéia (Israel)",
  paisAtual: "Israel",
  lider: "Pedro",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  data: "~30 d.C.",
  antes: "Pedro conclui sua argumentação mostrando que Davi não poderia estar falando de si mesmo, pois ele morreu e foi sepultado. Davi falava do Messias.",
  versiculo: "⚠️ Deus ressuscitou a este Jesus, do que todos nós somos testemunhas. Exaltado, pois, à destra de Deus, e tendo recebido do Pai a promessa do Espírito Santo, derramou isto que vós agora vedes e ouvis. Porque Davi não subiu aos céus, mas ele mesmo diz: Disse o Senhor ao meu Senhor: Assenta-te à minha direita, até que eu ponha os teus inimigos por escabelo de teus pés. Saiba, pois, com certeza toda a casa de Israel que a este Jesus, a quem vós crucificastes, Deus o fez Senhor e Cristo.",
  depois: "Pedro conclui com três verdades: Jesus ressuscitou, Jesus foi exaltado à direita de Deus, e Jesus derramou o Espírito Santo. A conclusão: Jesus é Senhor e Cristo. A multidão, compungida, perguntou: 'Que faremos?'",
  tags: "testemunhas / exaltado / Senhor / Cristo",
  assuntos: ["jerusalem", "pedro", "pentecostes", "evangelho"]
},

// 166. Atos 2.37
{
  id: "at2.37",
  referencia: "At 2.37",
  local: "Jerusalém / Judéia (Israel)",
  paisAtual: "Israel",
  lider: "Pedro",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  data: "~30 d.C.",
  antes: "Pedro acabou de declarar que Jesus, a quem crucificaram, foi feito Senhor e Cristo pelo Deus. A mensagem foi direta e confrontadora.",
  versiculo: "✅ E, ouvindo eles isto, compungiram-se em seu coração, e perguntaram a Pedro e aos demais apóstolos: Homens irmãos, que faremos?",
  depois: "A pregação de Pedro produziu convicção de pecado. 'Compungir-se' significa ser cortado no coração. Eles não perguntaram 'o que aconteceu?' mas 'o que faremos?'. A pregação exigia uma resposta.",
  tags: "compungidos / coração / perguntaram / resposta",
  assuntos: ["jerusalem", "pedro", "conviccao", "arrependimento"]
},

// 167. Atos 2.38
{
  id: "at2.38",
  referencia: "At 2.38",
  local: "Jerusalém / Judéia (Israel)",
  paisAtual: "Israel",
  lider: "Pedro",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  data: "~30 d.C.",
  antes: "A multidão perguntou a Pedro o que deveriam fazer após serem convencidos de seu pecado contra Jesus.",
  versiculo: "✅ E Pedro lhes disse: Arrependei-vos, e cada um de vós seja batizado em nome de Jesus Cristo, para perdão dos pecados; e recebereis o dom do Espírito Santo.",
  depois: "A resposta de Pedro é o primeiro convite ao evangelho após Pentecostes. Duas ações: arrependimento (mudança de mente) e batismo (identificação pública com Cristo). Duas promessas: perdão dos pecados e o dom do Espírito Santo.",
  tags: "arrependei / batismo / perdão / Espírito Santo",
  assuntos: ["jerusalem", "pedro", "evangelho", "arrependimento", "batismo"]
},

// 168. Atos 2.41
{
  id: "at2.41",
  referencia: "At 2.41",
  local: "Jerusalém / Judéia (Israel)",
  paisAtual: "Israel",
  lider: "Pedro",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  data: "~30 d.C.",
  antes: "Pedro pregou com muitas outras palavras, exortando-os a se salvarem da geração perversa. A mensagem foi clara e urgente.",
  versiculo: "✅ De sorte que foram batizados os que de bom grado receberam a sua palavra; e naquele dia agregaram-se quase três mil almas.",
  depois: "O resultado foi impressionante: 3.000 pessoas se converteram e foram batizadas. A igreja primitiva nasceu com um crescimento exponencial. 'De bom grado' indica que não houve coerção - eles receberam a palavra voluntariamente.",
  tags: "batizados / três mil / almas / conversão",
  assuntos: ["jerusalem", "pedro", "igreja-primitiva", "pentecostes"]
},

// 169. Atos 9.4
{
  id: "at9.4",
  referencia: "At 9.4",
  local: "Damasco / Síria",
  paisAtual: "Síria",
  lider: "Saulo/Paulo",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  data: "~34-35 d.C.",
  antes: "Saulo (Paulo) estava a caminho de Damasco com autorização para prender cristãos. Ele perseguia a igreja ferozmente, achando que estava servindo a Deus.",
  versiculo: "✅ E, caindo em terra, ouviu uma voz que lhe dizia: Saulo, Saulo, por que me persegues?",
  depois: "Ao perguntar 'Quem és, Senhor?', Saulo descobre que perseguir a igreja é perseguir o próprio Cristo. A identificação entre Cristo e Sua igreja é tão íntima que o que se faz à igreja se faz a Ele. Esta foi a virada na vida de Paulo.",
  tags: "perseguição / Saulo / igreja / Cristo",
  assuntos: ["damasco", "paulo", "conversao", "igreja", "perseguicao"]
},

// 170. Atos 20.28
{
  id: "at20.28",
  referencia: "At 20.28",
  local: "Mileto / Ásia Menor (Turquia)",
  paisAtual: "Turquia",
  lider: "Paulo",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  data: "~57 d.C.",
  antes: "Paulo convocou os anciãos da igreja de Éfeso para encontrá-lo em Mileto. Ele sabia que seria preso em Jerusalém e não os veria novamente.",
  versiculo: "✅ Olhai, pois, por vós e por todo o rebanho sobre que o Espírito Santo vos constituiu bispos, para apascentardes a igreja de Deus, que ele resgatou com seu próprio sangue.",
  depois: "Paulo exorta os líderes a cuidarem da igreja, que Deus comprou com o sangue de Cristo. A imagem é pastoral: a igreja é um rebanho, os líderes são pastores, e o preço pago foi o sangue do próprio Filho de Deus.",
  tags: "bispos / apascentar / igreja / sangue",
  assuntos: ["mileto", "paulo", "lideranca-igreja", "pastoral"]
},

// 171. Colossenses 1.18
{
  id: "cl1.18",
  referencia: "Cl 1.18",
  local: "Roma / Itália",
  paisAtual: "Itália",
  lider: "Paulo",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  data: "~60-62 d.C.",
  antes: "Paulo escreve um dos mais elevados hinos cristológicos sobre a supremacia de Cristo. Ele é a imagem do Deus invisível, o primogênito de toda criação.",
  versiculo: "✅ E ele é a cabeça do corpo, da igreja; é o princípio, o primogênito dentre os mortos, para que em tudo tenha a preeminência.",
  depois: "Cristo é a cabeça, a igreja é o corpo. Ele tem a preeminência em tudo: na criação (primogênito de toda criação) e na redenção (primogênito dentre os mortos). A igreja existe para manifestar a supremacia de Cristo.",
  tags: "cabeça / corpo / primogênito / preeminência",
  assuntos: ["roma", "paulo", "cristo", "igreja", "supremacia"]
},

// 172. Colossenses 1.23
{
  id: "cl1.23",
  referencia: "Cl 1.23",
  local: "Roma / Itália",
  paisAtual: "Itália",
  lider: "Paulo",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  data: "~60-62 d.C.",
  antes: "Paulo escreve aos colossenses sobre a supremacia de Cristo. Ele os exorta a permanecerem firmes na fé, sem se desviarem da esperança do evangelho.",
  versiculo: "✅ Se, na verdade, permanecerdes fundados e firmes na fé, e não vos moverdes da esperança do evangelho que ouvistes, e que foi pregado a toda criatura que está debaixo do céu; e do qual eu, Paulo, sou feito ministro.",
  depois: "O evangelho já havia se espalhado por todo o mundo conhecido na época de Paulo. A mensagem de Cristo não era um movimento local, mas universal. Paulo se via como ministro desse evangelho global.",
  tags: "evangelho / pregação / universal / permanecer",
  assuntos: ["roma", "paulo", "evangelho", "universalidade"]
},

// 173. Efésios 1.22-23
{
  id: "ef1.22",
  referencia: "Ef 1.22-23",
  local: "Roma / Itália",
  paisAtual: "Itália",
  lider: "Paulo",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  data: "~60-62 d.C.",
  antes: "Paulo ora para que os efésios conheçam o poder de Deus manifestado em Cristo. Ele descreve a posição exaltada de Cristo após a ressurreição.",
  versiculo: "✅ E sujeitou todas as coisas debaixo de seus pés, e sobre todas as coisas o constituiu como cabeça da igreja, que é o seu corpo, a plenitude daquele que cumpre tudo em todos.",
  depois: "Cristo é a cabeça e a igreja é o corpo. A igreja não é apenas seguidora de Cristo, mas Sua plenitude - Ele Se expressa através dela. Esta é uma das declarações mais elevadas sobre a igreja no Novo Testamento.",
  tags: "cabeça / corpo / igreja / plenitude",
  assuntos: ["roma", "paulo", "igreja", "corpo-de-cristo"]
},

// 174. Efésios 2.19
{
  id: "ef2.19",
  referencia: "Ef 2.19",
  local: "Roma / Itália",
  paisAtual: "Itália",
  lider: "Paulo",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  data: "~60-62 d.C.",
  antes: "Paulo explica que tanto judeus quanto gentios foram reconciliados com Deus através da cruz. Antes, os gentios eram estrangeiros e excluídos das alianças.",
  versiculo: "✅ Assim que já não sois estrangeiros, nem forasteiros, mas concidadãos dos santos e da família de Deus.",
  depois: "A igreja é uma nova família, onde judeus e gentios são membros da mesma casa. Não há mais divisão étnica ou religiosa. Todos têm igual acesso a Deus através de Cristo.",
  tags: "família / concidadãos / santos / unidade",
  assuntos: ["roma", "paulo", "familia-deus", "unidade-igreja"]
},

// 175. Efésios 2.20
{
  id: "ef2.20",
  referencia: "Ef 2.20",
  local: "Roma / Itália",
  paisAtual: "Itália",
  lider: "Paulo",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  data: "~60-62 d.C.",
  antes: "Paulo continua a metáfora da igreja como edifício. Os gentios não eram mais estrangeiros, mas agora faziam parte da construção espiritual.",
  versiculo: "✅ Edificados sobre o fundamento dos apóstolos e dos profetas, de que Jesus Cristo é a principal pedra da esquina.",
  depois: "A igreja é comparada a um edifício. Os apóstolos e profetas são o fundamento (porque receberam e transmitiram a revelação), e Cristo é a pedra angular que sustenta e alinha toda a construção.",
  tags: "fundamento / apóstolos / profetas / pedra angular",
  assuntos: ["roma", "paulo", "igreja", "apostolos"]
},

// 176. Efésios 5.25
{
  id: "ef5.25",
  referencia: "Ef 5.25",
  local: "Roma / Itália",
  paisAtual: "Itália",
  lider: "Paulo",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  data: "~60-62 d.C.",
  antes: "Paulo instrui sobre relacionamentos familiares: esposas devem se sujeitar aos maridos, e maridos devem amar suas esposas. O casamento é um mistério que aponta para Cristo e a igreja.",
  versiculo: "✅ Vós, maridos, amai vossas mulheres, como também Cristo amou a igreja e a si mesmo se entregou por ela.",
  depois: "O amor de Cristo pela igreja é o padrão do amor conjugal. Ele não é um amor sentimental ou egoísta, mas sacrificial - 'se entregou por ela'. A cruz é a expressão máxima do amor de Cristo por Sua igreja.",
  tags: "amar / igreja / entregou / sacrifício",
  assuntos: ["roma", "paulo", "amor-cristo", "igreja", "casamento"]
},

// 177. Efésios 5.27
{
  id: "ef5.27",
  referencia: "Ef 5.27",
  local: "Roma / Itália",
  paisAtual: "Itália",
  lider: "Paulo",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  data: "~60-62 d.C.",
  antes: "Paulo continua descrevendo o amor sacrificial de Cristo pela igreja. Ele não apenas morreu por ela, mas também a purifica e santifica.",
  versiculo: "✅ Para a apresentar a si mesmo igreja gloriosa, sem mácula, nem ruga, nem coisa semelhante, mas santa e irrepreensível.",
  depois: "O objetivo final de Cristo para a igreja é apresentá-la perfeita a Si mesmo. A santificação é obra contínua de Cristo através da Palavra e do Espírito. A igreja será sem mácula (moralmente pura), sem ruga (eternamente jovem), santa e irrepreensível.",
  tags: "igreja / gloriosa / sem mácula / santa",
  assuntos: ["roma", "paulo", "igreja", "santificacao", "gloria"]
},

// 178. Gálatas 6.10
{
  id: "gl6.10",
  referencia: "Gl 6.10",
  local: "Galácia / Ásia Menor (Turquia)",
  paisAtual: "Turquia",
  lider: "Paulo",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  data: "~49-55 d.C.",
  antes: "Paulo conclui a carta aos Gálatas com exortações práticas. Ele falou sobre semear no Espírito, sobre restaurar os caídos e sobre compartilhar cargas.",
  versiculo: "✅ Então, enquanto temos tempo, façamos bem a todos, mas principalmente aos domésticos da fé.",
  depois: "A prioridade do bem é para todos, mas especialmente para a família da fé - a igreja. Paulo reconhece que o amor cristão começa dentro da comunidade, mas não se limita a ela.",
  tags: "fazer bem / família da fé / prioridade",
  assuntos: ["galacia", "paulo", "amor-cristao", "comunidade"]
},

// 179. Hebreus 10.25
{
  id: "hb10.25",
  referencia: "Hb 10.25",
  local: "Roma / Itália",
  paisAtual: "Itália",
  lider: "",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  data: "~60-65 d.C.",
  antes: "O autor de Hebreus exorta os cristãos a se aproximarem de Deus com coração sincero. Eles estavam enfrentando perseguição e alguns estavam abandonando a comunhão.",
  versiculo: "✅ Não deixando a nossa congregação, como é costume de alguns; antes, admoestando-nos uns aos outros; e tanto mais quanto vedes que se vai aproximando aquele dia.",
  depois: "A exortação mútua e a reunião regular são essenciais para a perseverança, especialmente em tempos de perseguição. O autor alerta que o dia do juízo está se aproximando, o que torna a comunhão ainda mais necessária.",
  tags: "congregação / exortação / dia / comunhão",
  assuntos: ["roma", "autor-hebreus", "comunhao", "perseveranca"]
},

// 180. Hebreus 13.17
{
  id: "hb13.17",
  referencia: "Hb 13.17",
  local: "Roma / Itália",
  paisAtual: "Itália",
  lider: "",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  data: "~60-65 d.C.",
  antes: "O autor de Hebreus dá instruções práticas para a vida cristã. Ele aborda o amor fraternal, a hospitalidade, o casamento e o contentamento.",
  versiculo: "✅ Obedecei a vossos pastores e sujeitai-vos a eles; porque velam por vossas almas, como quem há de dar conta delas; para que o façam com alegria e não gemendo, porque isso não vos seria útil.",
  depois: "A liderança da igreja tem responsabilidade diante de Deus pelas almas sob seus cuidados. A resposta da congregação deve ser obediência e submissão voluntária. Quando os líderes lideram com alegria, toda a igreja se beneficia.",
  tags: "obedecer / pastores / vigiar / dar contas",
  assuntos: ["roma", "autor-hebreus", "lideranca", "igreja-local"]
},

// 181. Joel 2.28
{
  id: "jl2.28",
  referencia: "Jl 2.28",
  local: "Judá (Israel)",
  paisAtual: "Israel",
  lider: "Joel",
  liderReinado: "",
  periodo: "Profetas Menores",
  periodoDatas: "~835-796 a.C.",
  data: "~830 a.C.",
  antes: "Joel profetizou sobre um juízo iminente de gafanhotos, mas também sobre um derramamento futuro do Espírito que inauguraria uma nova era.",
  versiculo: "✅ E há de ser que, depois, derramarei o meu Espírito sobre toda a carne; e vossos filhos e vossas filhas profetizarão, os vossos velhos sonharão sonhos, os vossos jovens terão visões.",
  depois: "Pedro citou esta profecia em Atos 2.17-21 como sendo cumprida em Pentecostes. O derramamento não seria mais restrito a profetas ou reis, mas sobre 'toda a carne' - homens e mulheres, jovens e velhos, judeus e gentios.",
  tags: "derramamento / Espírito / profecia / Pentecostes",
  assuntos: ["juda", "joel", "espirito-santo", "profecia", "pentecostes"]
},

// 182. Levítico 23.15-16
{
  id: "lv23.15",
  referencia: "Lv 23.15-16",
  local: "Sinai / Deserto (Egito/Israel)",
  paisAtual: "Egito/Israel",
  lider: "Moisés",
  liderReinado: "",
  periodo: "Êxodo e Conquista",
  periodoDatas: "~1446-1400 a.C.",
  data: "~1446 a.C.",
  antes: "Deus instruiu Moisés sobre as festas do Senhor. Depois da Páscoa e dos Pães Ázimos, vinha a festa das Semanas (Pentecostes), cinquenta dias depois.",
  versiculo: "✅ Também contareis desde o dia seguinte ao sábado, desde o dia em que trouxerdes o molho da oferta de movimento, sete semanas inteiras serão. Até ao dia seguinte ao sétimo sábado, contareis cinquenta dias; então oferecereis nova oferta de manjares ao Senhor.",
  depois: "Pentecostes (do grego 'pentekoste' = quinquagésimo) era uma festa de colheita. Era também uma das três festas de peregrinação, quando os judeus iam a Jerusalém. Foi neste contexto que o Espírito Santo foi derramado.",
  tags: "Pentecostes / festa / semanas / colheita",
  assuntos: ["sinai", "moises", "pentecostes", "festas-biblicas"]
},

// 183. Mateus 16.18
{
  id: "mt16.18",
  referencia: "Mt 16.18",
  local: "Cesareia de Filipe / Galileia (Israel)",
  paisAtual: "Israel",
  lider: "Jesus",
  liderReinado: "",
  periodo: "Período Romano",
  periodoDatas: "63 a.C. - 70 d.C.",
  data: "~29-30 d.C.",
  antes: "Jesus perguntou aos discípulos quem os homens diziam que Ele era. Após várias respostas, Pedro confessou: 'Tu és o Cristo, o Filho do Deus vivo'.",
  versiculo: "✅ Pois também eu te digo que tu és Pedro, e sobre esta pedra edificarei a minha igreja, e as portas do inferno não prevalecerão contra ela.",
  depois: "Esta é a primeira vez que Jesus usa a palavra 'igreja' (ekklesia). A 'pedra' sobre a qual a igreja é edificada é a confissão de Pedro de que Jesus é o Cristo. As portas do inferno - imagem de um forte sitiado - não prevalecerão.",
  tags: "igreja / pedra / portas do inferno / confissão",
  assuntos: ["cesareia-filipe", "jesus", "igreja", "pedro"]
},

// 184. Mateus 28.20
{
  id: "mt28.20",
  referencia: "Mt 28.20",
  local: "Galileia / Monte designado por Jesus (Israel)",
  paisAtual: "Israel",
  lider: "Jesus",
  liderReinado: "",
  periodo: "Período Romano",
  periodoDatas: "63 a.C. - 70 d.C.",
  data: "~30 d.C.",
  antes: "Após a ressurreição, Jesus encontrou os discípulos na Galileia. Ele lhes deu a Grande Comissão: 'Ide, fazei discípulos de todas as nações, batizando-os... ensinando-os'.",
  versiculo: "✅ Ensinando-os a guardar todas as coisas que eu vos tenho mandado; e eis que eu estou convosco todos os dias, até à consumação dos séculos.",
  depois: "A promessa da presença constante de Jesus sustenta a missão da igreja. Ele não abandonou seus discípulos. A mesma presença que esteve com os apóstolos continua com a igreja até o fim dos tempos.",
  tags: "presença / sempre / Jesus / comissionamento",
  assuntos: ["galileia", "jesus", "grande-comissao", "presenca-divina"]
},

// 185. Oséias 2.19-20
{
  id: "os2.19",
  referencia: "Os 2.19-20",
  local: "Israel / Reino do Norte",
  paisAtual: "Israel",
  lider: "Jeroboão II",
  liderReinado: "793-753 a.C.",
  periodo: "Reino Dividido (Norte)",
  periodoDatas: "930-722 a.C.",
  data: "~755-715 a.C.",
  antes: "Deus, através de Oséias, usa o casamento do profeta com uma prostituta (Gômer) como metáfora do relacionamento de Deus com Israel infiel. Deus promete restaurar a aliança.",
  versiculo: "✅ E desposar-te-ei comigo para sempre; desposar-te-ei comigo em justiça, e em juízo, e em benignidade, e em misericórdias. E desposar-te-ei comigo em fidelidade, e conhecerás ao Senhor.",
  depois: "O amor de Deus por Israel é como um casamento. Apesar da infidelidade de Israel (idolatria), Deus promete restaurar a aliança. Esta imagem prepara o Novo Testamento, onde a igreja é a noiva de Cristo - um relacionamento de amor eterno baseado em justiça, juízo, benignidade, misericórdia e fidelidade.",
  tags: "desposar / noiva / aliança / fidelidade",
  assuntos: ["israel", "oseias", "alianca", "noiva-de-deus", "amor-divino"]
},

// 186. Romanos 12.5
{
  id: "rm12.5",
  referencia: "Rm 12.5",
  local: "Corinto / Acaia (Grécia)",
  paisAtual: "Grécia",
  lider: "Paulo",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  data: "~57 d.C.",
  antes: "Paulo exorta os romanos a apresentarem seus corpos como sacrifício vivo. Ele começa a descrever como os dons devem funcionar no corpo de Cristo.",
  versiculo: "✅ Assim nós, que somos muitos, somos um só corpo em Cristo, mas individualmente somos membros uns dos outros.",
  depois: "A unidade no corpo não significa uniformidade. Cada membro tem uma função diferente, mas todos pertencem uns aos outros. Esta interdependência elimina o orgulho e a inveja na igreja.",
  tags: "membros / uns dos outros / corpo / interdependência",
  assuntos: ["corinto", "paulo", "corpo-de-cristo", "unidade-igreja"]
},

// 187. Romanos 16.5
{
  id: "rm16.5",
  referencia: "Rm 16.5",
  local: "Corinto / Acaia (Grécia)",
  paisAtual: "Grécia",
  lider: "Paulo",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  data: "~57 d.C.",
  antes: "Paulo termina a carta aos Romanos com saudações pessoais. Ele lista muitos colaboradores, mostrando seu apreço pela equipe que trabalhou com ele.",
  versiculo: "✅ Saudai também a igreja que está em sua casa. Saudai a Epêneto, meu amado, que é as primícias da Acaia em Cristo.",
  depois: "As igrejas domésticas eram comuns no cristianismo primitivo, já que não haviam construções dedicadas ao culto. Priscila e Áquila também tinham uma igreja em sua casa. O cristianismo cresceu através dessas comunidades familiares.",
  tags: "igreja em casa / saudações / Priscila / Áquila",
  assuntos: ["corinto", "paulo", "igreja-domestica", "comunidade"]
},
// 188. Atos 2.1-4
{
  id: "at2.1-4",
  referencia: "At 2.1-4",
  local: "Jerusalém / Judéia (Israel)",
  paisAtual: "Israel",
  lider: "Pedro",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  data: "~30 d.C.",
  antes: "Os discípulos estavam reunidos em Jerusalém, obedecendo à ordem de Jesus de esperar a promessa do Pai. Cerca de 120 pessoas perseveravam em oração no cenáculo. Era o dia de Pentecostes, uma das três festas de peregrinação judaica.",
  versiculo: "✅ E, ao cumprir-se o dia de Pentecostes, estavam todos reunidos no mesmo lugar. E de repente veio do céu um som, como de um vento impetuoso, e encheu toda a casa onde estavam assentados. E foram vistas por eles línguas repartidas, como que de fogo, e pousaram sobre cada um deles. E todos foram cheios do Espírito Santo, e começaram a falar noutras línguas, conforme o Espírito Santo lhes concedia que falassem.",
  depois: "Este é o relato do nascimento da igreja. O vento representa o Espírito vivificador, o fogo representa a purificação e a presença divina, e as línguas representam a universalidade do evangelho. A promessa de Jesus (Atos 1.8) foi cumprida, e a era da igreja foi inaugurada.",
  tags: "Pentecostes / Espírito Santo / línguas / vento / fogo",
  assuntos: ["jerusalem", "pentecostes", "espirito-santo", "igreja-primitiva"]
},
// 189. Colossenses 1.16-17
{
  id: "cl1.16-17",
  referencia: "Cl 1.16-17",
  local: "Roma / Itália (Itália)",
  paisAtual: "Itália",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~60-62 d.C.",
  antes: "Paulo estava preso em Roma, escrevendo cartas às igrejas. Em Colossos, surgiam ensinamentos que diminuíam a pessoa de Cristo, misturando elementos judaicos e filosofias gregas. Paulo escreve para afirmar a supremacia absoluta de Cristo sobre toda a criação.",
  versiculo: "⚠️ Porque nele foram criadas todas as coisas que há nos céus e na terra, visíveis e invisíveis, sejam tronos, sejam dominações, sejam principados, sejam potestades; tudo foi criado por ele e para ele. E ele é antes de todas as coisas, e todas as coisas subsistem por ele.",
  depois: "Este hino cristológico tornou-se um dos textos mais importantes sobre a supremacia de Cristo. A igreja primitiva usou estas verdades para combater o gnosticismo e outras heresias que diminuíam a divindade de Cristo. Até hoje, é referência para a compreensão da relação entre Criador e criação.",
  tags: "criação / subsistência / tudo foi criado por Ele",
  assuntos: ["roma", "paulo", "colossenses", "supremacia-cristo", "criacao"]
},

// 190. Hebreus 1.3
{
  id: "hb1.3",
  referencia: "Hb 1.3",
  local: "Roma / Itália (Itália)",
  paisAtual: "Itália",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~60-65 d.C.",
  antes: "O autor de Hebreus escreve a judeus cristãos que estavam tentados a voltar ao judaísmo por causa da perseguição. Ele começa a carta afirmando que Deus falou pelo Filho, que é muito superior aos anjos e a Moisés.",
  versiculo: "✅ O qual, sendo o resplendor da sua glória e a expressa imagem da sua pessoa, e sustentando todas as coisas pela palavra do seu poder, havendo feito por si mesmo a purificação dos nossos pecados, assentou-se à destra da Majestade nas alturas.",
  depois: "O autor argumenta que se a mensagem dos anjos era firme, muito mais a mensagem do Filho. A purificação dos pecados já foi realizada - não há mais necessidade de sacrifícios. Cristo está assentado à direita de Deus, aguardando até que seus inimigos sejam postos por escabelo de seus pés.",
  tags: "sustentação / palavra do seu poder / universo",
  assuntos: ["roma", "autor-hebreus", "cristo", "supremacia", "sacrificio"]
},

// 191. Salmo 121.4
{
  id: "sl121.4",
  referencia: "Sl 121.4",
  local: "Jerusalém / Judá (Israel)",
  paisAtual: "Israel",
  lider: "Davi",
  liderReinado: "1010-970 a.C.",
  periodo: "Reino Unido",
  periodoDatas: "1010-970 a.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~1000 a.C.",
  antes: "Este é um cântico de peregrinação (Salmo 120-134), usado pelos peregrinos que subiam a Jerusalém para as festas. A viagem era perigosa, com montanhas e desertos. O peregrino olha para as montanhas e se pergunta de onde virá o socorro.",
  versiculo: "✅ Eis que não tosquenejará nem dormirá o guarda de Israel.",
  depois: "O salmo afirma que Deus não é como os guardas humanos que dormem. Ele está sempre vigilante. A conclusão é uma bênção: 'O Senhor guardará a tua saída e a tua entrada, desde agora e para sempre'. Este salmo tem sido uma fonte de grande conforto para os crentes em todas as épocas.",
  tags: "vigilante / guarda de Israel / não dormita",
  assuntos: ["jerusalem", "salmos", "davi", "providencia-divina", "confianca"]
},

// 192. João 14.13
{
  id: "jo14.13",
  referencia: "Jo 14.13",
  local: "Jerusalém / Judéia (Israel)",
  paisAtual: "Israel",
  lider: "Tibério",
  liderReinado: "14-37 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~30 d.C.",
  antes: "Jesus está no cenáculo com os discípulos na véspera de sua morte. Filipe pediu: 'Mostra-nos o Pai'. Jesus responde que quem o vê, vê o Pai. Ele então fala sobre a oração e o poder do Seu nome.",
  versiculo: "✅ E tudo quanto pedirdes em meu nome, isso farei, para que o Pai seja glorificado no Filho.",
  depois: "A promessa de oração respondida tem uma condição: 'em meu nome'. Não é uma fórmula mágica, mas orar de acordo com o caráter e a vontade de Jesus. O propósito final não é nossa satisfação, mas a glória do Pai. A oração cristã é cristocêntrica e teocêntrica.",
  tags: "oração / resposta / pedir em meu nome",
  assuntos: ["jerusalem", "jesus", "oracao", "nome-de-jesus", "gloria-deus"]
},

// 193. Isaías 41.10
{
  id: "is41.10",
  referencia: "Is 41.10",
  local: "Jerusalém / Judá (Israel)",
  paisAtual: "Israel",
  lider: "Ezequias",
  liderReinado: "715-686 a.C.",
  periodo: "Reino de Judá (Sul)",
  periodoDatas: "930-586 a.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~700 a.C.",
  antes: "Isaías profetiza durante o cerco de Jerusalém pelos assírios. O rei Ezequias e o povo estão aterrorizados. Deus encoraja Israel: 'Não temas, porque eu sou contigo'. O versículo faz parte de uma seção de consolo.",
  versiculo: "✅ Não temas, porque eu sou contigo; não te assombres, porque eu sou teu Deus; eu te fortaleço, e te ajudo, e te sustento com a destra da minha justiça.",
  depois: "Este versículo tem sido uma fonte de encorajamento para incontáveis crentes ao longo dos séculos. A promessa inclui quatro ações divinas: fortalecer, ajudar, sustentar e a presença da justiça de Deus. O 'não temas' é o mandamento mais repetido nas Escrituras.",
  tags: "não temas / auxílio / justiça",
  assuntos: ["jerusalem", "isaias", "encorajamento", "confianca", "presenca-divina"]
},

// 194. Mateus 10.29-30
{
  id: "mt10.29-30",
  referencia: "Mt 10.29-30",
  local: "Galileia (Israel)",
  paisAtual: "Israel",
  lider: "Tibério",
  liderReinado: "14-37 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~28 d.C.",
  antes: "Jesus está enviando os doze discípulos em missão. Ele os adverte sobre perseguições, prisões e até morte. Para encorajá-los, ele fala do cuidado de Deus pelos detalhes da criação.",
  versiculo: "✅ Não se vendem dois passarinhos por um ceitil? e nenhum deles cairá em terra sem a vontade de vosso Pai. E até mesmo os cabelos da vossa cabeça estão todos contados.",
  depois: "Os pardais eram as aves mais baratas do mercado - dois por uma moeda de pouco valor. Se Deus cuida de algo tão insignificante, quanto mais cuidará de seus discípulos que estão fazendo Sua obra. A conclusão: 'Não temais, pois mais valeis vós do que muitos passarinhos'.",
  tags: "pardais / cabelos contados / cuidado divino",
  assuntos: ["galileia", "jesus", "providencia-divina", "confianca", "cuidado-deus"]
},

// 195. Salmo 139.7-10
{
  id: "sl139.7-10",
  referencia: "Sl 139.7-10",
  local: "Jerusalém / Judá (Israel)",
  paisAtual: "Israel",
  lider: "Davi",
  liderReinado: "1010-970 a.C.",
  periodo: "Reino Unido",
  periodoDatas: "1010-970 a.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~1000 a.C.",
  antes: "Davi reflete sobre o conhecimento íntimo que Deus tem dele. Deus conhece seus pensamentos, suas palavras e suas ações. Não há como esconder nada do Criador. Davi então considera a impossibilidade de fugir da presença divina.",
  versiculo: "⚠️ Para onde me irei do teu espírito, ou para onde fugirei da tua face? Se subir ao céu, ali tu estás; se fizer no inferno a minha cama, eis que tu ali estás também. Se tomar as asas da alva, se habitar nas extremidades do mar, até ali me guiará a tua mão e me susterá a tua destra.",
  depois: "Davi conclui que não há esconderijo possível. Nem o céu, nem o inferno, nem o oriente (asas da alva), nem o ocidente (extremidades do mar) podem separar alguém de Deus. Para o crente, isso é conforto; para o ímpio, é advertência. O salmo termina com um pedido para que Deus examine o coração.",
  tags: "onipresença / Espírito / fuga impossível",
  assuntos: ["jerusalem", "salmos", "davi", "onipresenca", "conhecimento-deus"]
},

// 196. Mateus 10.29
{
  id: "mt10.29",
  referencia: "Mt 10.29",
  local: "Galileia (Israel)",
  paisAtual: "Israel",
  lider: "Tibério",
  liderReinado: "14-37 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~28 d.C.",
  antes: "Jesus está instruindo os discípulos antes de enviá-los em missão. Ele fala sobre perseguição e necessidade de confiança em Deus. Os discípulos poderiam pensar que Deus não se importa com suas pequenas vidas.",
  versiculo: "✅ Não se vendem dois passarinhos por um ceitil? e nenhum deles cairá em terra sem a vontade de vosso Pai.",
  depois: "Jesus usa o exemplo mais simples para ensinar sobre a providência divina. Se Deus cuida dos pardais - aves de pouco valor comercial - quanto mais cuidará de seus discípulos. Este ensino contrasta com a visão deísta de um Deus distante e desinteressado.",
  tags: "providência contínua / pardal / Pai celestial",
  assuntos: ["galileia", "jesus", "providencia-divina", "cuidado-deus", "confianca"]
},

// 197. Provérbios 3.5
{
  id: "pv3.5",
  referencia: "Pv 3.5",
  local: "Jerusalém / Judá (Israel)",
  paisAtual: "Israel",
  lider: "Salomão",
  liderReinado: "970-930 a.C.",
  periodo: "Reino Unido",
  periodoDatas: "1010-970 a.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~950 a.C.",
  antes: "Salomão escreve provérbios para seu filho, instruindo-o sobre a sabedoria prática. O capítulo 3 é uma exortação à confiança em Deus, contrastando com a autossuficiência humana.",
  versiculo: "✅ Confia no Senhor de todo o teu coração e não te estribes no teu próprio entendimento.",
  depois: "Este é um dos versículos mais citados sobre confiança em Deus. A confiança deve ser 'de todo o coração' - total, não parcial. A alternativa é confiar no 'próprio entendimento' - a sabedoria humana limitada. O versículo seguinte promete: 'Reconhece-o em todos os teus caminhos, e ele endireitará as tuas veredas'.",
  tags: "providência contínua / confiança / não te estribes",
  assuntos: ["jerusalem", "salomao", "proverbios", "confianca", "sabedoria-divina"]
},

// 198. Jeremias 33.3
{
  id: "jr33.3",
  referencia: "Jr 33.3",
  local: "Jerusalém / Judá (Israel)",
  paisAtual: "Israel",
  lider: "Zedequias",
  liderReinado: "597-586 a.C.",
  periodo: "Reino de Judá (Sul)",
  periodoDatas: "930-586 a.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~587 a.C.",
  antes: "Jeremias está preso no pátio da guarda durante o cerco final de Jerusalém pelos babilônios. A cidade está prestes a cair. Deus ordena que Jeremias ore, prometendo revelar coisas grandes e ocultas.",
  versiculo: "✅ Clama a mim, e responder-te-ei, e anunciar-te-ei coisas grandes e firmes, que não sabes.",
  depois: "Deus responde à oração de Jeremias revelando que a restauração virá após o exílio. Ele promete curar a cidade, trazer prosperidade e levantar um 'Renovo de justiça' - uma profecia messiânica. A oração é a chave para receber revelação divina.",
  tags: "Deus que age / clama / responderei",
  assuntos: ["jerusalem", "jeremias", "oracao", "revelacao", "restauracao"]
},

// 199. Êxodo 2.24-25
{
  id: "ex2.24-25",
  referencia: "Êx 2.24-25",
  local: "Egito / Delta do Nilo (Egito)",
  paisAtual: "Egito",
  lider: "Faraó (nome não especificado)",
  liderReinado: "~1525-1500 a.C.",
  periodo: "Êxodo e Conquista",
  periodoDatas: "~1446-1400 a.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~1446 a.C.",
  antes: "Israel estava escravizado no Egito há décadas. O faraó havia ordenado a morte de todos os meninos hebreus. Moisés havia fugido para Midiã. O povo gemeu e clamou a Deus por causa da opressão.",
  versiculo: "✅ E ouviu Deus o seu gemido, e lembrou-se Deus da sua aliança com Abraão, com Isaque e com Jacó. E viu Deus os filhos de Israel, e atentou para a sua condição.",
  depois: "Deus responde ao clamor de Israel. Ele 'lembrou-se' da aliança - não que tivesse esquecido, mas agora age com base nela. Este é o prelúdio para o chamado de Moisés na sarça ardente e o êxodo. Deus vê, ouve e age em favor do seu povo.",
  tags: "Deus que age / gemido / lembrou-se",
  assuntos: ["egito", "exodo", "moises", "alianca", "libertacao"]
},

// 200. João 1.14
{
  id: "jo1.14",
  referencia: "Jo 1.14",
  local: "Éfeso / Ásia Menor (Turquia)",
  paisAtual: "Turquia",
  lider: "Domiciano",
  liderReinado: "81-96 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~90 d.C.",
  antes: "João abre seu evangelho com um prólogo sobre o Verbo (Logos) que estava com Deus e era Deus. O Verbo criou todas as coisas. João Batista testemunhou sobre a luz. Agora João anuncia a encarnação.",
  versiculo: "✅ E o Verbo se fez carne, e habitou entre nós, e vimos a sua glória, como a glória do Unigênito do Pai, cheio de graça e de verdade.",
  depois: "A encarnação é o ponto central da fé cristã. Deus não permaneceu distante, mas tornou-se humano. 'Habitou' significa 'tabernaculou' - Deus acampou entre nós, como no tabernáculo no deserto. João e os outros apóstolos testemunharam esta glória.",
  tags: "Deus que age / Verbo se fez carne / habitou",
  assuntos: ["efeso", "joao", "encarnacao", "verbo", "cristo"]
},

// 201. Hebreus 1.1-2
{
  id: "hb1.1-2",
  referencia: "Hb 1.1-2",
  local: "Roma / Itália (Itália)",
  paisAtual: "Itália",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~60-65 d.C.",
  antes: "O autor de Hebreus escreve a judeus cristãos que estavam tentados a voltar ao judaísmo. Eles respeitavam os profetas do Antigo Testamento, mas estavam perdendo a visão da superioridade de Cristo.",
  versiculo: "✅ Havendo Deus antigamente falado muitas vezes e de muitas maneiras aos pais pelos profetas, a nós falou-nos nestes últimos dias pelo Filho, a quem constituiu herdeiro de tudo, por quem fez também o mundo.",
  depois: "O autor estabelece um contraste: a revelação antiga (profetas, múltiplas vezes, múltiplas maneiras) versus a revelação final (pelo Filho, uma vez, de maneira definitiva). O Filho é o herdeiro de tudo e o agente da criação. A carta então demonstra a superioridade do Filho sobre os anjos, Moisés e o sistema sacrificial.",
  tags: "revelação especial / profetas / Filho",
  assuntos: ["roma", "autor-hebreus", "revelacao", "cristo", "supremacia"]
},

// 202. Salmo 103.13-14
{
  id: "sl103.13-14",
  referencia: "Sl 103.13-14",
  local: "Jerusalém / Judá (Israel)",
  paisAtual: "Israel",
  lider: "Davi",
  liderReinado: "1010-970 a.C.",
  periodo: "Reino Unido",
  periodoDatas: "1010-970 a.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~1000 a.C.",
  antes: "Davi bendiz a Deus por todos os seus benefícios: perdão, cura, redenção, amor e misericórdia. Ele contrasta o amor de Deus com a fragilidade humana. O salmo é uma celebração da compaixão divina.",
  versiculo: "✅ Como um pai se compadece de seus filhos, assim o Senhor se compadece daqueles que o temem. Pois ele conhece a nossa estrutura; lembra-se de que somos pó.",
  depois: "A imagem do pai compassivo contrasta com a visão de um Deus distante ou severo. Deus conhece nossa fragilidade - 'somos pó' - e age com compaixão. O salmo conclui com um chamado universal para bendizer ao Senhor, desde os anjos até toda a criação.",
  tags: "Deus relojoeiro / compaixão / conhece nossa estrutura",
  assuntos: ["jerusalem", "salmos", "davi", "compaixao-divina", "fragilidade-humana"]
},

// 203. Mateus 4.23-25
{
  id: "mt4.23-25",
  referencia: "Mt 4.23-25",
  local: "Galileia (Israel)",
  paisAtual: "Israel",
  lider: "Tibério",
  liderReinado: "14-37 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~28 d.C.",
  antes: "Jesus acabou de chamar os primeiros discípulos (Pedro, André, Tiago e João) e de vencer as tentações no deserto. Agora ele inicia seu ministério público na Galileia, uma região com muitas cidades e vilarejos.",
  versiculo: "✅ E percorria Jesus toda a Galileia, ensinando nas sinagogas, pregando o evangelho do reino, e curando toda sorte de enfermidades e moléstias entre o povo. E a sua fama correu por toda a Síria; e traziam-lhe todos os que padeciam, acometidos de várias enfermidades e tormentos, os endemoninhados, os lunáticos e os paralíticos; e ele os curava. E seguia-o uma grande multidão da Galileia, e de Decápolis, e de Jerusalém, e da Judéia, e dalém do Jordão.",
  depois: "Este resumo mostra as três atividades principais de Jesus: ensinar, pregar e curar. As multidões vinham de toda a região - não apenas da Galileia, mas também da Decápolis (cidades greco-romanas), Jerusalém (centro religioso) e além do Jordão (Pereia). O ministério de Jesus atraiu judeus e gentios.",
  tags: "negação dos milagres / curas / multidões",
  assuntos: ["galileia", "jesus", "milagres", "cura", "evangelho"]
},

// 204. Mateus 8.23-27
{
  id: "mt8.23-27",
  referencia: "Mt 8.23-27",
  local: "Mar da Galileia (Israel)",
  paisAtual: "Israel",
  lider: "Tibério",
  liderReinado: "14-37 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~28 d.C.",
  antes: "Jesus havia ensinado sobre o custo do discipulado. Ele entrou no barco com seus discípulos para atravessar o Mar da Galileia. Repentinamente, uma grande tempestade se levantou - comum na região devido à geografia do lago cercado por montanhas.",
  versiculo: "✅ E, entrando ele no barco, seus discípulos o seguiram. E eis que no mar se levantou uma grande tempestade, de sorte que o barco era coberto pelas ondas; ele, porém, estava dormindo. E os discípulos, aproximando-se, o despertaram, dizendo: Senhor, salva-nos! Que perecemos? E ele disse-lhes: Por que temeis, homens de pouca fé? Então, levantando-se, repreendeu os ventos e o mar, e seguiu-se uma grande bonança. E aqueles homens se maravilharam, dizendo: Quem é este, que até os ventos e o mar lhe obedecem?",
  depois: "Os discípulos, muitos deles pescadores experientes, estavam aterrorizados. Jesus dormia tranquilamente, demonstrando confiança no Pai. Ao acordá-lo, eles reconheceram sua necessidade: 'Salva-nos! Que perecemos'. Jesus responde com uma pergunta sobre a falta de fé. O milagre revela a autoridade divina de Cristo sobre as forças da natureza.",
  tags: "negação dos milagres / acalma a tempestade / ventos",
  assuntos: ["mar-galileia", "jesus", "milagres", "tempestade", "autoridade-divina"]
},

// 205. Marcos 4.35-41
{
  id: "mc4.35-41",
  referencia: "Mc 4.35-41",
  local: "Mar da Galileia (Israel)",
  paisAtual: "Israel",
  lider: "Tibério",
  liderReinado: "14-37 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~28 d.C.",
  antes: "Jesus havia passado o dia ensinando à beira do mar usando parábolas. Ao entardecer, ele disse aos discípulos: 'Passemos para a outra margem'. Eles entraram no barco com ele, exaustos após um longo dia.",
  versiculo: "✅ E, naquele dia, sendo já tarde, disse-lhes: Passemos para a outra margem. E eles, deixando a multidão, o levaram consigo, assim como estava, no barco; e havia também com ele outros barquinhos. E levantou-se grande temporal de vento, e as ondas batiam dentro do barco, de modo que já se enchia. E ele estava na popa dormindo sobre uma almofada; e despertaram-no, dizendo-lhe: Mestre, não se te dá que pereçamos? E ele, despertando, repreendeu o vento, e disse ao mar: Cala-te, aquieta-te. E o vento se aquietou, e houve grande bonança. E disse-lhes: Por que sois tão tímidos? Ainda não tendes fé? E eles sentiram grande temor, e diziam uns aos outros: Quem é este, que até o vento e o mar lhe obedecem?",
  depois: "Marcos acrescenta detalhes que Mateus não inclui: 'outros barquinhos' acompanhavam, Jesus dormia sobre uma almofada na popa, e os discípulos perguntaram 'Não se te dá que pereçamos?'. A pergunta revela tanto medo quanto um senso de abandono. Jesus repreende o vento e o mar com autoridade divina. A reação dos discípulos é 'grande temor' - não medo da tempestade, mas temor reverente diante do poder divino manifestado.",
  tags: "negação dos milagres / mar se acalma / quem é este",
  assuntos: ["mar-galileia", "jesus", "milagres", "tempestade", "divindade-cristo"]
},

// 206. Lucas 7.11-17
{
  id: "lc7.11-17",
  referencia: "Lc 7.11-17",
  local: "Naim / Galileia (Israel)",
  paisAtual: "Israel",
  lider: "Tibério",
  liderReinado: "14-37 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~28 d.C.",
  antes: "Jesus estava em Cafarnaum, onde curou o servo do centurião. Depois, foi para a cidade de Naim, cerca de 40 km ao sul. Ao se aproximar da porta da cidade, encontrou um cortejo fúnebre saindo.",
  versiculo: "✅ E aconteceu que, no dia seguinte, ele foi à cidade chamada Naim, e com ele iam muitos dos seus discípulos e uma grande multidão. E, quando chegou perto da porta da cidade, eis que levavam um defunto, filho único de sua mãe, que era viúva; e com ela ia uma grande multidão da cidade. E, vendo-a, o Senhor moveu-se de íntima compaixão por ela, e disse-lhe: Não chores. E, chegando-se, tocou no esquife (e os que o levavam pararam), e disse: Jovem, eu te digo: Levanta-te. E o defunto assentou-se, e começou a falar. E ele o entregou à sua mãe.",
  depois: "Este é o primeiro relato de ressurreição nos evangelhos sinóticos. A situação era especialmente trágica: a viúva já havia perdido o marido, e agora perdia seu único filho - sua única fonte de sustento. Jesus age com compaixão antes mesmo de qualquer pedido. O toque no esquife (caixão aberto) o tornaria cerimonialmente impuro, mas Jesus transcende as leis de pureza. A notícia se espalhou por toda a Judeia.",
  tags: "negação dos milagres / ressurreição do filho da viúva / Naim",
  assuntos: ["naim", "jesus", "milagres", "ressurreicao", "compaixao"]
},

// 207. Lucas 8.40-56
{
  id: "lc8.40-56",
  referencia: "Lc 8.40-56",
  local: "Cafarnaum / Galileia (Israel)",
  paisAtual: "Israel",
  lider: "Tibério",
  liderReinado: "14-37 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~28 d.C.",
  antes: "Jesus retornou de Gadara, onde havia expulsado demônios. Uma multidão o esperava em Cafarnaum. Dois milagres se entrelaçam: a cura da mulher com hemorragia e a ressurreição da filha de Jairo, um dos líderes da sinagoga.",
  versiculo: "⚠️ E aconteceu que, quando Jesus voltou, a multidão o recebeu, porque todos o estavam esperando. E eis que chegou um varão de nome Jairo, que era príncipe da sinagoga; e, prostrando-se aos pés de Jesus, rogava-lhe que entrasse em sua casa; porque tinha uma filha única, quase doze anos, que estava à morte. E, indo ele, a multidão o apertava. E uma mulher que tinha um fluxo de sangue, havia doze anos, e havia gasto com os médicos toda a sua fazenda, e por nenhum pudera ser curada, chegando-se por detrás, tocou na orla da sua veste, e logo cessou o seu fluxo de sangue. E disse Jesus: Quem é que me tocou? E, negando todos, disse Pedro e os que estavam com ele: Mestre, a multidão te aperta e te oprime. Mas Jesus disse: Alguém me tocou, porque bem conheço que de mim saiu virtude. Então, a mulher, vendo que não podia ocultar-se, aproximou-se tremendo e, prostrando-se ante ele, declarou-lhe diante de todo o povo a causa por que lhe havia tocado, e como logo sarara. E ele lhe disse: Tem bom ânimo, filha, a tua fé te salvou; vai em paz. Estando ele ainda falando, chegou um do príncipe da sinagoga, dizendo: A tua filha já está morta; não incomodes o Mestre. Porém Jesus, ouvindo isso, respondeu-lhe: Não temas; crê somente, e será salva. E, entrando na casa, não permitiu que entrasse com ele ninguém, senão Pedro, Tiago e João, e o pai e a mãe da menina. E todos choravam e a pranteavam; mas ele disse: Não choreis; não está morta, mas dorme. E riam-se dele, sabendo que estava morta. Porém ele, levando-a pela mão, exclamou, dizendo: Menina, levanta-te. E o seu espírito voltou, e ela logo se levantou; e Jesus mandou que lhe desse de comer.",
  depois: "Os dois milagres estão conectados pelo número 12: a mulher sofreu por 12 anos, a menina tinha 12 anos. Ambos os casos envolvem impureza cerimonial (hemorragia e contato com morto), mas Jesus a ignora. A mulher curou-se pelo toque da fé, e Jesus a chama de 'filha'. Jairo é encorajado: 'Não temas; crê somente'. A morte é chamada de sono, apontando para a ressurreição futura.",
  tags: "negação dos milagres / filha de Jairo / hemorroíssa",
  assuntos: ["cafarnaum", "jesus", "milagres", "ressurreicao", "cura"]
},

// 208. Romanos 3.10-12
{
  id: "rm3.10-12",
  referencia: "Rm 3.10-12",
  local: "Corinto / Acaia (Grécia)",
  paisAtual: "Grécia",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~57 d.C.",
  antes: "Paulo tem argumentado que tanto judeus quanto gentios estão sob o pecado. Ele cita uma catena (corrente) de versículos do Antigo Testamento (Salmos e Isaías) para provar que ninguém é justo por si mesmo.",
  versiculo: "✅ Como está escrito: Não há justo, nem um sequer. Não há quem entenda; não há quem busque a Deus. Todos se extraviaram e juntamente se fizeram inúteis; não há quem faça o bem, não há nem um sequer.",
  depois: "Paulo conclui que 'todos pecaram e destituídos estão da glória de Deus' (Rm 3.23). A conclusão não é desespero, mas a necessidade da justificação pela fé, independentemente das obras da lei. A citação mostra a universalidade do pecado - nenhum ser humano é naturalmente justo, entende a Deus ou O busca.",
  tags: "moral natural / não há justo / todos se extraviaram",
  assuntos: ["corinto", "paulo", "pecado-universal", "depravacao-total", "justificacao"]
},

// 209. Mateus 6.26-30
{
  id: "mt6.26-30",
  referencia: "Mt 6.26-30",
  local: "Monte das Bem-aventuranças / Galileia (Israel)",
  paisAtual: "Israel",
  lider: "Tibério",
  liderReinado: "14-37 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~28 d.C.",
  antes: "Jesus está ensinando no Sermão da Montanha. Ele acabara de ensinar sobre o perigo da ansiedade em relação às riquezas, dizendo que ninguém pode servir a dois senhores: Deus e o dinheiro.",
  versiculo: "⚠️ Olhai para as aves do céu, que nem semeiam, nem ceifam, nem ajuntam em celeiros; e vosso Pai celestial as alimenta. Não tendes vós muito mais valor do que elas? E qual de vós, por mais que pense, pode acrescentar um côvado à sua estatura? E, quanto ao vestuário, por que andais cuidadosos? Olhai para os lírios do campo, como eles crescem; não trabalham nem fiam; e eu vos digo que nem mesmo Salomão, em toda a sua glória, se vestiu como qualquer deles. Pois, se Deus assim veste a erva do campo, que hoje existe e amanhã é lançada no forno, não vos vestirá muito mais a vós, homens de pouca fé?",
  depois: "Jesus ensina que a ansiedade é desnecessária porque Deus cuida da criação. A conclusão: 'Buscai primeiro o reino de Deus e a sua justiça, e todas estas coisas vos serão acrescentadas'. A ansiedade revela 'pouca fé' - não ausência, mas imaturidade. A confiança na providência divina liberta da escravidão das preocupações materiais.",
  tags: "providência contínua / aves do céu / lírios do campo",
  assuntos: ["galileia", "jesus", "providencia-divina", "ansiedade", "confianca"]
},

// 210. João 14.13-14
{
  id: "jo14.13-14",
  referencia: "Jo 14.13-14",
  local: "Jerusalém / Judéia (Israel)",
  paisAtual: "Israel",
  lider: "Tibério",
  liderReinado: "14-37 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~30 d.C.",
  antes: "Jesus está no cenáculo, na véspera de sua morte. Ele acabou de dizer que quem crê nele fará as obras que ele faz, e até maiores. A oração é o meio pelo qual essas obras serão realizadas.",
  versiculo: "✅ E tudo quanto pedirdes em meu nome, isso farei, para que o Pai seja glorificado no Filho. Se pedirdes alguma coisa em meu nome, eu o farei.",
  depois: "A repetição enfatiza a certeza da promessa. Orar 'em meu nome' não é uma fórmula mágica, mas orar de acordo com o caráter, a vontade e a autoridade de Jesus. O propósito da oração respondida é a glória do Pai. A oração cristã é cristocêntrica e teocêntrica.",
  tags: "O Deus que age / resposta a oração",
  assuntos: ["jerusalem", "jesus", "oracao", "nome-de-jesus", "gloria-deus"]
},

// 211. Isaías 45.5
{
  id: "is45.5",
  referencia: "Is 45.5",
  local: "Babilônia / Mesopotâmia (Iraque)",
  paisAtual: "Iraque",
  lider: "Ciro, o Grande",
  liderReinado: "559-530 a.C.",
  periodo: "Império Persa",
  periodoDatas: "550-330 a.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~540 a.C.",
  antes: "Isaías profetiza sobre Ciro, o rei persa que libertaria Israel do exílio babilônico. Deus declara sua soberania sobre todos os reinos. Ciro é chamado de 'ungido' do Senhor, mesmo sendo um governante pagão.",
  versiculo: "✅ Eu sou o Senhor, e não há outro; fora de mim não há Deus; eu te cingirei, ainda que tu me não conheças.",
  depois: "Deus declara sua unicidade absoluta. Não há outros deuses. A soberania de Deus se estende sobre todos os eventos históricos, incluindo a ascensão de Ciro. Mesmo que Ciro não conhecesse a Deus, Deus o usaria para libertar seu povo. Este versículo é fundamental para a teologia monoteísta.",
  tags: "convite à confiança / Eu sou o Senhor / não há outro",
  assuntos: ["babilonia", "isaias", "monoteismo", "soberania-divina", "ciro"]
},

// 212. Sofonias 3.17
{
  id: "sf3.17",
  referencia: "Sf 3.17",
  local: "Jerusalém / Judá (Israel)",
  paisAtual: "Israel",
  lider: "Josias",
  liderReinado: "640-609 a.C.",
  periodo: "Reino de Judá (Sul)",
  periodoDatas: "930-586 a.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~630 a.C.",
  antes: "Sofonias profetizou durante o reinado de Josias, antes da reforma religiosa. O livro começa com juízo severo contra Judá e as nações, mas termina com uma promessa de restauração e alegria divina sobre o povo remanescente.",
  versiculo: "✅ O Senhor teu Deus está no meio de ti, poderoso para te salvar; ele se deleitará em ti com alegria; calar-se-á por seu amor, regozijar-se-á em ti com júbilo.",
  depois: "Esta é uma das imagens mais ternas de Deus no Antigo Testamento. Deus não é apenas poderoso para salvar, mas 'se deleita' em seu povo com alegria. 'Calar-se-á por seu amor' pode significar que Deus descansa em seu amor por nós, ou que renova seu amor silenciosamente. O regozijo de Deus é comparado ao júbilo de uma festa de casamento.",
  tags: "convite à confiança / Deus poderoso para salvar / exulta de alegria",
  assuntos: ["jerusalem", "sofonias", "amor-divino", "alegria-deus", "salvacao"]
},

// 213. Jeremias 23.23
{
  id: "jr23.23",
  referencia: "Jr 23.23",
  local: "Jerusalém / Judá (Israel)",
  paisAtual: "Israel",
  lider: "Zedequias",
  liderReinado: "597-586 a.C.",
  periodo: "Reino de Judá (Sul)",
  periodoDatas: "930-586 a.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~590-580 a.C.",
  antes: "Jeremias confronta os falsos profetas que diziam 'Paz, paz' quando não havia paz. Eles pensavam que Deus estava longe e não via seus pecados. Deus responde com uma pergunta retórica.",
  versiculo: "✅ Sou eu apenas Deus de perto, diz o Senhor, e não também Deus de longe?",
  depois: "Deus afirma que não é apenas um Deus local, limitado ao templo ou a Jerusalém. Ele é Deus de perto (presente, íntimo, conhecendo cada detalhe) e Deus de longe (transcendente, soberano sobre toda a criação). Os falsos profetas estavam errados em ambos os aspectos.",
  tags: "convite à confiança / Deus de perto / Deus de longe",
  assuntos: ["jerusalem", "jeremias", "onipresenca", "soberania-divina", "falsos-profetas"]
},
// 214. Hebreus 13.8
{
  id: "hb13.8",
  referencia: "Hb 13.8",
  local: "Roma / Itália (Itália)",
  paisAtual: "Itália",
  lider: "",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~60-65 d.C.",
  antes: "O autor de Hebreus está concluindo a carta com exortações práticas sobre amor fraternal, hospitalidade, casamento, contentamento e obediência aos líderes. Ele lembra os leitores dos seus líderes que já partiram e exorta que imitem sua fé.",
  versiculo: "✅ Jesus Cristo é o mesmo, ontem, e hoje, e eternamente.",
  depois: "Esta declaração da imutabilidade de Cristo serve como fundamento para todas as exortações práticas da carta. Diante de doutrinas estranhas e variadas, o crente pode confiar que Cristo não muda. O que Ele foi no passado (ontem), é agora (hoje) e será para sempre (eternamente).",
  tags: "imutabilidade / Jesus Cristo / ontem hoje sempre",
  assuntos: ["roma", "autor-hebreus", "imutabilidade-cristo", "confianca", "estabilidade"]
},
// 215. Apocalipse 3.17
{
  id: "ap3.17",
  referencia: "Ap 3.17",
  local: "Laodicéia / Ásia Menor (Turquia)",
  paisAtual: "Turquia",
  lider: "Domiciano",
  liderReinado: "81-96 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~95 d.C.",
  antes: "A igreja de Laodicéia era conhecida por sua riqueza. A cidade era um centro bancário e financeiro, famosa por seus tecidos de lã negra e por um colírio medicinal. A igreja refletia a opulência da cidade, mas estava espiritualmente empobrecida.",
  versiculo: "✅ Porquanto dizes: Rico sou, e estou enriquecido, e de nada tenho falta; e não sabes que és um desgraçado, e miserável, e pobre, e cego, e nu.",
  depois: "Jesus aconselha a igreja a comprar dele ouro refinado no fogo (verdadeira riqueza espiritual), vestes brancas (justiça) e colírio (discernimento espiritual). Aqueles que Ele ama, repreende e disciplina. A carta termina com uma promessa para os vencedores: sentar-se-ão no trono de Cristo.",
  tags: "Laodicéia / rico / miserável",
  assuntos: ["laodiceia", "apocalipse", "igreja-primitiva", "riqueza-espiritual"]
},

// 216. 1 Timóteo 6.6-8
{
  id: "1tm6.6-8",
  referencia: "1 Tm 6.6-8",
  local: "Éfeso / Ásia Menor (Turquia)",
  paisAtual: "Turquia",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~62-64 d.C.",
  antes: "Paulo escreve a Timóteo, seu filho na fé, que estava pastoreando a igreja em Éfeso. Havia falsos mestres que ensinavam que a piedade era fonte de lucro. Paulo contrasta essa visão com o verdadeiro contentamento.",
  versiculo: "✅ Mas é grande ganho a piedade com contentamento. Porque nada trouxemos para este mundo, e manifesto é que nada podemos levar dele. Tendo, porém, sustento e com que nos cobrirmos, estejamos com isso contentes.",
  depois: "Paulo continua advertindo que os que querem ser ricos caem em tentação e em muitos desejos tolos e prejudiciais. O amor ao dinheiro é a raiz de todos os males. O homem de Deus deve fugir dessas coisas e buscar justiça, piedade, fé, amor, perseverança e mansidão.",
  tags: "contentamento / suficiência / nada trouxemos",
  assuntos: ["efeso", "paulo", "contentamento", "piedade", "timoteo"]
},

// 217. 1 Timóteo 6.9
{
  id: "1tm6.9",
  referencia: "1 Tm 6.9",
  local: "Éfeso / Ásia Menor (Turquia)",
  paisAtual: "Turquia",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~62-64 d.C.",
  antes: "Paulo acabara de dizer que a piedade com contentamento é grande ganho. Agora ele contrasta aqueles que buscam enriquecer, mostrando os perigos dessa busca.",
  versiculo: "✅ Mas os que querem ser ricos caem em tentação, e em laço, e em muitas concupiscências loucas e nocivas, que submergem os homens na perdição e ruína.",
  depois: "Paulo afirma que o amor ao dinheiro é a raiz de todos os males. Muitos, cobiçando-o, se desviaram da fé e se traspassaram com muitas dores. Timóteo deve fugir dessas coisas e buscar a justiça e a piedade.",
  tags: "amor ao dinheiro / tentação / laço",
  assuntos: ["efeso", "paulo", "amor-dinheiro", "tentacao", "timoteo"]
},

// 218. Provérbios 23.4-5
{
  id: "pv23.4-5",
  referencia: "Pv 23.4-5",
  local: "Jerusalém / Judá (Israel)",
  paisAtual: "Israel",
  lider: "Salomão",
  liderReinado: "970-930 a.C.",
  periodo: "Reino Unido",
  periodoDatas: "1010-970 a.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~950 a.C.",
  antes: "Salomão escreve provérbios instruindo seu filho sobre a sabedoria prática. Este provérbio específico adverte contra a busca excessiva por riquezas, mostrando sua natureza passageira.",
  versiculo: "✅ Não te canses para enriquecer; e não apliques nisso o teu entendimento. Porventura fitarás os olhos naquilo que não é? Porque certamente isso fará para si asas, e como águia voará em direção ao céu.",
  depois: "O provérbio contrasta a busca por riquezas terrenas com a busca pela sabedoria. As riquezas são comparadas a algo que tem asas e voa como águia - desaparecem rapidamente e sem aviso. A verdadeira riqueza está na sabedoria e no temor do Senhor.",
  tags: "riquezas / voam / asas de águia",
  assuntos: ["jerusalem", "salomao", "proverbios", "riquezas", "fugacidade"]
},

// 219. Hebreus 13.5
{
  id: "hb13.5",
  referencia: "Hb 13.5",
  local: "Roma / Itália (Itália)",
  paisAtual: "Itália",
  lider: "",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~60-65 d.C.",
  antes: "O autor de Hebreus está concluindo a carta com exortações práticas sobre o amor fraternal, a hospitalidade e o casamento. Ele agora aborda o desprendimento dos bens materiais e a confiança na providência divina.",
  versiculo: "✅ Sejam vossos costumes sem avareza, contentando-vos com o que tendes; porque ele disse: Não te deixarei, nem te desampararei.",
  depois: "O autor cita Deuteronômio 31.6 e Josué 1.5, lembrando a promessa de Deus de nunca abandonar seu povo. Esta promessa é fundamento para o contentamento e para a ausência de avareza. O Senhor é nosso ajudador, e não precisamos temer o que os homens possam fazer.",
  tags: "desamparo / presença / nunca te deixarei",
  assuntos: ["roma", "autor-hebreus", "contentamento", "presenca-divina", "confianca"]
},

// 220. Mateus 16.24-26
{
  id: "mt16.24-26",
  referencia: "Mt 16.24-26",
  local: "Cesareia de Filipe / Galileia (Israel)",
  paisAtual: "Israel",
  lider: "Tibério",
  liderReinado: "14-37 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~29-30 d.C.",
  antes: "Pedro acabara de confessar que Jesus era o Cristo, o Filho do Deus vivo. Jesus então começou a ensinar sobre Seu sofrimento e morte iminentes. Pedro o repreendeu, e Jesus respondeu ensinando sobre o verdadeiro discipulado.",
  versiculo: "✅ Então disse Jesus aos seus discípulos: Se alguém quiser vir após mim, negue-se a si mesmo, tome a sua cruz, e siga-me. Porque qualquer que quiser salvar a sua vida perdê-la-á; mas qualquer que perder a sua vida por amor de mim, a achá-la-á. Pois que aproveitaria ao homem ganhar o mundo inteiro, se perdesse a sua alma? Ou que daria o homem em recompensa da sua alma?",
  depois: "Jesus ensina que o discipulado envolve renúncia e sacrifício. O paradoxo central: quem tenta preservar sua vida a perde, quem a perde por causa de Cristo a encontra. A pergunta retórica sobre ganhar o mundo e perder a alma confronta qualquer ambição materialista que desconsidere as realidades eternas.",
  tags: "negar a si mesmo / ganhar o mundo / perder a alma",
  assuntos: ["cesareia-filipe", "jesus", "discipulado", "renuncia", "salvacao"]
},

// 221. João 6.26
{
  id: "jo6.26",
  referencia: "Jo 6.26",
  local: "Cafarnaum / Galileia (Israel)",
  paisAtual: "Israel",
  lider: "Tibério",
  liderReinado: "14-37 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~28-29 d.C.",
  antes: "Jesus havia alimentado 5.000 pessoas com cinco pães e dois peixes. No dia seguinte, a multidão o procurou novamente, atravessando o mar de Tiberíades. Jesus percebeu a motivação errada por trás da busca deles.",
  versiculo: "✅ Jesus respondeu e disse-lhes: Na verdade, na verdade vos digo que me buscais, não pelos sinais que vistes, mas porque comestes do pão e vos saciastes.",
  depois: "Jesus os exorta a trabalhar não pela comida que perece, mas pela comida que permanece para a vida eterna. Isto introduz o discurso do 'pão da vida', onde Jesus se declara como o verdadeiro pão descido do céu. Muitos discípulos o abandonaram por causa deste ensino.",
  tags: "pão que perece / sinais / motivação errada",
  assuntos: ["cafarnaum", "jesus", "motivacao", "pao-da-vida", "milagres"]
},

// 222. 2 Coríntios 12.7-10
{
  id: "2co12.7-10",
  referencia: "2 Co 12.7-10",
  local: "Filipos / Macedônia (Grécia)",
  paisAtual: "Grécia",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~55-56 d.C.",
  antes: "Paulo falou de uma visão celestial que teve há quatorze anos. Para que não se exaltasse por causa da grandeza das revelações, Deus lhe deu um espinho na carne. Paulo rogou três vezes ao Senhor para que o removesse.",
  versiculo: "⚠️ E, para que não me exaltasse pelas excelência das revelações, foi-me dado um espinho na carne, a saber, um mensageiro de Satanás para me esbofetear, a fim de que não me exalte. Por causa disto, três vezes orei ao Senhor para que se desviasse de mim. E disse-me: A minha graça te basta, porque o meu poder se aperfeiçoa na tua fraqueza. De boa vontade, pois, me gloriarei nas minhas fraquezas, para que em mim habite o poder de Cristo. Por isso sinto prazer nas fraquezas, nas injúrias, nas necessidades, nas perseguições, nas angústias por amor de Cristo. Porque quando estou fraco, então sou forte.",
  depois: "Paulo aprendeu que o poder de Deus se aperfeiçoa na fraqueza humana. Em vez de pedir a remoção do espinho, ele passou a gloriar-se em suas fraquezas. Este ensinamento contrasta fortemente com a teologia da prosperidade, que vê o sofrimento como falta de fé.",
  tags: "espinho na carne / graça suficiente / gloriar-se",
  assuntos: ["filipos", "paulo", "sofrimento", "graça-divina", "fraqueza"]
},

// 223. 2 Coríntios 9.7
{
  id: "2co9.7",
  referencia: "2 Co 9.7",
  local: "Filipos / Macedônia (Grécia)",
  paisAtual: "Grécia",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~55-56 d.C.",
  antes: "Paulo estava organizando uma coleta para os santos pobres de Jerusalém. Ele instrui os coríntios sobre os princípios da generosidade cristã, que deve ser voluntária e alegre, não forçada ou por obrigação.",
  versiculo: "✅ Cada um contribua segundo propôs no seu coração, não com tristeza, nem por necessidade; porque Deus ama ao que dá com alegria.",
  depois: "Paulo afirma que Deus é poderoso para fazer abundar toda graça, para que tendo sempre suficiência em tudo, os coríntios transbordem em toda boa obra. A generosidade não empobrece, mas é sementeira para colheita de justiça.",
  tags: "dar / alegria / não por necessidade",
  assuntos: ["filipos", "paulo", "generosidade", "ofertas", "alegria"]
},

// 224. Lucas 1.9-58 (Zacarias e Isabel)
{
  id: "lc1.9-58",
  referencia: "Lc 1.9,58",
  local: "Hebrom / Judéia (Israel)",
  paisAtual: "Israel",
  lider: "Tibério",
  liderReinado: "14-37 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~5 a.C.",
  antes: "Zacarias e Isabel eram justos diante de Deus, vivendo irrepreensivelmente em todos os mandamentos. No entanto, Isabel era estéril e ambos eram avançados em idade. Zacarias estava servindo no templo como sacerdote quando o anjo Gabriel lhe apareceu.",
  versiculo: "⚠️ Zacarias era sacerdote da ordem de Abias, e Isabel, sua mulher, era das filhas de Arão. E eram ambos justos diante de Deus, andando em todos os mandamentos e preceitos do Senhor, irrepreensíveis. E não tinham filhos, porque Isabel era estéril, e ambos eram de idade avançada. Aconteceu que, exercendo ele o sacerdócio diante de Deus na ordem da sua turma, segundo o costume do sacerdócio, coube-lhe entrar no templo do Senhor para queimar incenso. E toda a multidão do povo estava fora, orando, à hora do incenso. E apareceu-lhe um anjo do Senhor, em pé à direita do altar do incenso. E Zacarias, vendo-o, turbou-se, e caiu temor sobre ele. Mas o anjo lhe disse: Zacarias, não temas, porque a tua oração foi ouvida; e Isabel, tua mulher, te dará à luz um filho, e lhe porás o nome de João. E terás prazer e alegria, e muitos se alegrarão no seu nascimento... E aconteceu que, no oitavo dia, vieram circuncidar o menino, e chamavam-no pelo nome de seu pai, Zacarias. E sua mãe, respondendo, disse: Não, mas será chamado João. E disseram-lhe: Nenhum há na tua parentela que se chame por este nome. E fizeram sinais a seu pai, para saber como queria que se chamasse. E ele, pedindo uma tabuinha, escreveu, dizendo: O seu nome é João. E todos se maravilharam. E logo a sua boca se abriu, e a sua língua se soltou; e falava, louvando a Deus. E veio temor sobre todos os seus vizinhos; e em toda a montanha da Judéia foram divulgadas todas estas coisas. E todos os que as ouviam as guardavam em seus corações, dizendo: Quem será, pois, este menino? E a mão do Senhor estava com ele. E Isabel, sua mãe, foi visitada por Maria, sua parenta, e exclamou: Bendita és tu entre as mulheres, e bendito é o fruto do teu ventre.",
  depois: "Zacarias e Isabel, mesmo sendo justos e pobres, foram abençoados por Deus com um filho na velhice - João Batista. Este exemplo mostra que a pobreza não é sinal de maldição, e que Deus abençoa os justos independentemente de sua condição financeira.",
  tags: "Zacarias / Isabel / pobres / justos",
  assuntos: ["hebron", "zacarias", "isabel", "joao-batista", "justica"]
},

// 225. 1 Timóteo 2.4
{
  id: "1tm2.4",
  referencia: "1 Tm 2.4",
  local: "Éfeso / Ásia Menor (Turquia)",
  paisAtual: "Turquia",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~62-64 d.C.",
  antes: "Paulo exorta que se façam orações por todos os homens, incluindo reis e autoridades. Deus deseja que todos os homens sejam salvos e cheguem ao conhecimento da verdade, não que todos sejam ricos.",
  versiculo: "✅ Que quer que todos os homens se salvem, e venham ao conhecimento da verdade.",
  depois: "Paulo enfatiza que há um só Deus e um só Mediador entre Deus e os homens, Jesus Cristo homem, que se deu em resgate por todos. A vontade de Deus é salvação, não prosperidade material. A verdadeira riqueza é espiritual.",
  tags: "Deus quer / todos / salvos",
  assuntos: ["efeso", "paulo", "salvacao", "vontade-deus", "verdade"]
},

// 226. 1 Timóteo 6.18
{
  id: "1tm6.18",
  referencia: "1 Tm 6.18",
  local: "Éfeso / Ásia Menor (Turquia)",
  paisAtual: "Turquia",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~62-64 d.C.",
  antes: "Paulo instrui Timóteo sobre como ensinar os ricos na igreja. Eles não devem ser orgulhosos nem confiar em riquezas incertas, mas em Deus.",
  versiculo: "✅ Que façam bem, enriqueçam em boas obras, generosos em dar, prontos a repartir.",
  depois: "Paulo conclui que procedendo assim, os ricos acumulam para si mesmos um bom fundamento para o futuro, para que possam alcançar a vida eterna. A verdadeira riqueza não está no que se possui, mas no que se compartilha.",
  tags: "ricos / boas obras / generosos",
  assuntos: ["efeso", "paulo", "generosidade", "boas-obras", "timoteo"]
},

// 227. Hebreus 12.6
{
  id: "hb12.6",
  referencia: "Hb 12.6",
  local: "Roma / Itália (Itália)",
  paisAtual: "Itália",
  lider: "",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~60-65 d.C.",
  antes: "O autor de Hebreus exorta os leitores a não desprezarem a disciplina do Senhor. O sofrimento não é sinal de falta de fé, mas de filiação divina.",
  versiculo: "✅ Porque o Senhor corrige o que ama, e açoita a qualquer que recebe por filho.",
  depois: "A disciplina é evidência de que somos filhos legítimos, não bastardos. Se suportamos a correção, Deus nos trata como filhos. O sofrimento produz fruto pacífico de justiça naqueles que são exercitados por ele.",
  tags: "disciplina / castiga / aceita",
  assuntos: ["roma", "autor-hebreus", "disciplina-divina", "sofrimento", "filiacao"]
},

// 228. Tiago 1.2-4
{
  id: "tg1.2-4",
  referencia: "Tg 1.2-4",
  local: "Jerusalém / Judéia (Israel)",
  paisAtual: "Israel",
  lider: "Tiago",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~45-50 d.C.",
  antes: "Tiago escreve aos judeus cristãos dispersos (diáspora), que enfrentavam perseguição e pobreza. Ele aborda o tema do sofrimento desde o início, ensinando que as provações têm propósito espiritual.",
  versiculo: "✅ Meus irmãos, tende por motivo de grande gozo o passar por várias provações, sabendo que a prova da vossa fé produz paciência; e a paciência tenha a sua obra perfeita, para que sejais perfeitos e completos, sem falta alguma.",
  depois: "Tiago não diz 'se' passardes por provações, mas 'quando'. As provações são inevitáveis. Ele ordena 'tende por motivo de grande gozo' — alegria não pelas provações em si, mas pelo resultado que produzem. A paciência (hypomone = perseverança) precisa ter sua obra completa para produzir maturidade.",
  tags: "provações / paciência / perfeito",
  assuntos: ["jerusalem", "tiago", "provações", "perseverança", "maturidade"]
},

// 229. Jeremias 17.9-11
{
  id: "jr17.9-11",
  referencia: "Jr 17.9-11",
  local: "Jerusalém / Judá (Israel)",
  paisAtual: "Israel",
  lider: "Zedequias",
  liderReinado: "597-586 a.C.",
  periodo: "Reino de Judá (Sul)",
  periodoDatas: "930-586 a.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~590-580 a.C.",
  antes: "Jeremias confronta o pecado de Judá, especialmente a confiança no homem e nos ídolos. Ele contrasta a maldição daqueles que confiam nos homens com a bênção daqueles que confiam no Senhor.",
  versiculo: "✅ Enganoso é o coração, mais do que todas as coisas, e perverso; quem o conhecerá? Eu, o Senhor, esquadrinho o coração, provo os rins, e isso para dar a cada um segundo os seus caminhos e segundo o fruto das suas obras. Como a perdiz que ajunta ovos que não pôs, assim é aquele que amontoa riquezas, mas não com justiça; no meio de seus dias as deixará, e no seu fim será louco.",
  depois: "Jeremias ensina que confiar em riquezas obtidas injustamente é loucura. A perdiz que choca ovos que não pôs perde o tempo e o esforço. Assim, aqueles que ajuntam riquezas sem justiça as perderão. O coração humano é enganoso e precisa ser examinado por Deus.",
  tags: "coração / enganoso / perdiz",
  assuntos: ["jerusalem", "jeremias", "coração", "riquezas", "justica"]
},

// 230. Provérbios 30.7-9
{
  id: "pv30.7-9",
  referencia: "Pv 30.7-9",
  local: "Jerusalém / Judá (Israel)",
  paisAtual: "Israel",
  lider: "Salomão",
  liderReinado: "970-930 a.C.",
  periodo: "Reino Unido",
  periodoDatas: "1010-970 a.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~950 a.C.",
  antes: "Agur, filho de Jaque, escreve estes provérbios. Ele expressa humildade diante de Deus e faz duas petições específicas sobre sua condição financeira, reconhecendo os perigos tanto da pobreza quanto da riqueza.",
  versiculo: "✅ Duas coisas te pedi; não mas negues, antes que morra: afasta de mim a falsidade e a mentira; não me dês nem a pobreza nem a riqueza; dá-me o pão que me é necessário; para que, por fartura, te não negue e diga: Quem é o Senhor? Ou que, empobrecido, não venha a furtar e tome o nome de Deus em vão.",
  depois: "Agur demonstra sabedoria prática ao pedir um meio-termo - o suficiente para viver. Ele reconhece os perigos espirituais de ambos os extremos: a riqueza pode levar ao orgulho e ao esquecimento de Deus; a pobreza extrema pode levar ao roubo e à blasfêmia. O contentamento está na provisão diária de Deus.",
  tags: "duas coisas / pobreza / riqueza",
  assuntos: ["jerusalem", "agur", "proverbios", "contentamento", "sabedoria"]
},

// 231. Jeremias 17 (capítulo inteiro)
{
  id: "jr17",
  referencia: "Jr 17",
  local: "Jerusalém / Judá (Israel)",
  paisAtual: "Israel",
  lider: "Zedequias",
  liderReinado: "597-586 a.C.",
  periodo: "Reino de Judá (Sul)",
  periodoDatas: "930-586 a.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~590-580 a.C.",
  antes: "O profeta Jeremias recebe a palavra do Senhor durante o reinado de Zedequias. O povo de Judá havia se desviado, confiando em ídolos e em alianças políticas, em vez de confiar no Senhor.",
  versiculo: "📖 O pecado de Judá está escrito com ponte de ferro, com ponta de diamante, gravado na tábua do seu coração. O Senhor declara maldito o homem que confia no homem e faz da carne o seu braço. Bendito o homem que confia no Senhor, cuja esperança é o Senhor. Ele é como árvore plantada junto às águas. Enganoso é o coração, mais do que todas as coisas. O Senhor esquadrinha o coração. Como a perdiz que ajunta ovos que não pôs, assim é aquele que amontoa riquezas sem justiça. O trono da glória é o lugar do nosso santuário. Ó Senhor, esperança de Israel, todos os que te deixam serão envergonhados. Cura-me, Senhor, e sararei. Guarda-nos. Eles me dizem: Onde está a palavra do Senhor? Mas eu não me apressei em ser pastor. Santifica-lhes o dia de sábado. Se diligentemente me ouvirdes, não entrareis pelas portas desta cidade.",
  depois: "Jeremias clama a Deus por cura e libertação. O capítulo termina com uma exortação a guardar o sábado como sinal da aliança. A confiança no homem versus confiança em Deus é o tema central, com a lição de que a verdadeira segurança não está nas riquezas, mas no relacionamento com o Senhor.",
  tags: "pecado de Judá / confiança no homem",
  assuntos: ["jerusalem", "jeremias", "confiança", "maldicao", "bencao"]
},

// 232. Provérbios 18.21
{
  id: "pv18.21",
  referencia: "Pv 18.21",
  local: "Jerusalém / Judá (Israel)",
  paisAtual: "Israel",
  lider: "Salomão",
  liderReinado: "970-930 a.C.",
  periodo: "Reino Unido",
  periodoDatas: "1010-970 a.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~950 a.C.",
  antes: "Salomão escreve provérbios sobre o poder das palavras. Este versículo específico destaca como a língua tem poder para construir ou destruir.",
  versiculo: "✅ A morte e a vida estão no poder da língua; e aquele que a ama comerá do seu fruto.",
  depois: "O livro de Provérbios consistentemente ensina que as palavras têm consequências. A fala sábia traz vida, cura e edificação; a fala tola traz destruição e morte. Este versículo é frequentemente citado pela teologia da prosperidade, mas deve ser entendido em seu contexto de sabedoria prática, não como fórmula mágica.",
  tags: "morte e vida / poder da língua",
  assuntos: ["jerusalem", "salomao", "proverbios", "palavras", "sabedoria"]
},

// 233. Malaquias 3.10
{
  id: "ml3.10",
  referencia: "Ml 3.10",
  local: "Jerusalém / Judá (Israel)",
  paisAtual: "Israel",
  lider: "Neemias",
  liderReinado: "",
  periodo: "Período Persa",
  periodoDatas: "539-332 a.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~430-420 a.C.",
  antes: "Malaquias profetiza após o exílio, quando o povo havia se tornado negligente nos dízimos e ofertas. Deus os acusa de roubar os dízimos e as ofertas, e os convida a prová-lo nesta área.",
  versiculo: "✅ Trazei todos os dízimos à casa do tesouro, para que haja mantimento na minha casa, e provai-me nisto, diz o Senhor dos Exércitos, se eu não vos abrir as janelas do céu, e não derramar sobre vós uma bênção tal que dela vos advenha a maior abastança.",
  depois: "Deus promete abençoar aqueles que são fiéis nos dízimos, abrindo as janelas do céu e repreendendo o devorador. Este versículo é amplamente usado pela teologia da prosperidade, mas deve ser entendido no contexto da aliança de Israel e do propósito de sustentar o templo e os sacerdotes.",
  tags: "dízimos / ofertas / janelas do céu",
  assuntos: ["jerusalem", "malaquias", "dizimos", "ofertas", "prova"]
},

// 234. João 16.33
{
  id: "jo16.33",
  referencia: "Jo 16.33",
  local: "Jerusalém / Judéia (Israel)",
  paisAtual: "Israel",
  lider: "Tibério",
  liderReinado: "14-37 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~30 d.C.",
  antes: "Jesus está falando com os discípulos na véspera de sua morte. Ele já havia anunciado que eles seriam espalhados e o deixariam sozinho. Ele os prepara para as tribulações que virão.",
  versiculo: "✅ Tenho-vos dito estas coisas, para que em mim tenhais paz; no mundo tereis aflições, mas tende bom ânimo; eu venci o mundo.",
  depois: "Jesus não promete ausência de aflições, mas paz nele em meio às aflições. Sua vitória sobre o mundo (pecado, morte e Satanás) é a base para o bom ânimo dos discípulos. O sofrimento não é sinal de falta de fé, mas parte da experiência cristã.",
  tags: "tribulação / paz / vencido o mundo",
  assuntos: ["jerusalem", "jesus", "paz", "tribulacao", "vitoria"]
},

// 235. Salmo 34.18
{
  id: "sl34.18",
  referencia: "Sl 34.18",
  local: "Israel / Judá (Israel)",
  paisAtual: "Israel",
  lider: "Davi",
  liderReinado: "1010-970 a.C.",
  periodo: "Reino Unido",
  periodoDatas: "1010-970 a.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~1000 a.C.",
  antes: "Davi escreve este salmo após ter escapado de Abimeleque (Aquis), fingindo loucura. Ele testemunha que Deus ouviu seu clamor e o livrou de todos os seus temores.",
  versiculo: "✅ Perto está o Senhor dos que têm o coração quebrantado, e salva os contritos de espírito.",
  depois: "Davi contrasta a face do Senhor contra os que praticam o mal com a proximidade de Deus aos quebrantados de coração. O salmo ensina que Deus não está distante do sofrimento humano, mas próximo dos que sofrem. O livramento pode vir, mas a promessa central é a presença de Deus na dor.",
  tags: "quebrantados / contritos / salva",
  assuntos: ["juda", "davi", "salmos", "sofrimento", "consolo"]
},

// 236. 1 Coríntios 6.9-10
{
  id: "1co6.9-10",
  referencia: "1 Co 6.9-10",
  local: "Corinto / Acaia (Grécia)",
  paisAtual: "Grécia",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~55 d.C.",
  antes: "Paulo está corrigindo a igreja de Corinto, que se orgulhava de sua sabedoria e tolerância com o pecado. Ele enumera os tipos de pecado que desqualificam alguém do reino de Deus.",
  versiculo: "✅ Não sabeis que os injustos não hão de herdar o reino de Deus? Não erreis: nem os devassos, nem os idólatras, nem os adúlteros, nem os efeminados, nem os sodomitas, nem os ladrões, nem os avarentos, nem os bêbados, nem os maldizentes, nem os roubadores herdarão o reino de Deus.",
  depois: "Paulo lembra aos coríntios que alguns deles foram assim, mas foram lavados, santificados e justificados em nome do Senhor Jesus. Ele os exorta a fugir da imoralidade sexual, pois seus corpos são templo do Espírito Santo.",
  tags: "injustos / não herdarão",
  assuntos: ["corinto", "paulo", "pecado", "reino-deus", "arrependimento"]
},

// 237. Gálatas 5.19-21
{
  id: "gl5.19-21",
  referencia: "Gl 5.19-21",
  local: "Galácia / Ásia Menor (Turquia)",
  paisAtual: "Turquia",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~49-55 d.C.",
  antes: "Paulo contrasta a carne e o Espírito. Ele lista as obras da carne para mostrar o que a natureza pecaminosa produz, em contraste com o fruto do Espírito.",
  versiculo: "✅ Porque as obras da carne são manifestas: adultério, fornicação, impureza, lascívia, idolatria, feitiçaria, inimizades, porfias, ciúmes, iras, discórdias, dissensões, facções, invejas, bebedices, glutonarias e coisas semelhantes a estas, as quais vos declaro, como já antes vos disse, que os que cometem tais coisas não herdarão o reino de Deus.",
  depois: "Paulo exorta os gálatas a andarem pelo Espírito. Se vivem pelo Espírito, devem também andar pelo Espírito. As obras da carne são evidentes, e aqueles que praticam tais coisas não herdarão o reino de Deus. O fruto do Espírito, por outro lado, é amor, alegria, paz, etc.",
  tags: "obras da carne / não herdarão",
  assuntos: ["galacia", "paulo", "obras-carne", "reino-deus", "espirito-santo"]
},

// 238. Efésios 5.5-6
{
  id: "ef5.5-6",
  referencia: "Ef 5.5-6",
  local: "Roma / Itália (Itália)",
  paisAtual: "Itália",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~60-62 d.C.",
  antes: "Paulo exorta os efésios a imitarem a Deus e a andarem em amor. Ele os adverte contra imoralidade sexual, impureza e avareza, que são impróprias para os santos.",
  versiculo: "✅ Porque bem sabeis isto: que nenhum devasso, ou impuro, ou avarento (que é idólatra), tem herança no reino de Cristo e de Deus. Ninguém vos engane com palavras vãs; porque por estas coisas vem a ira de Deus sobre os filhos da desobediência.",
  depois: "Paulo chama a avareza de idolatria, mostrando que o amor ao dinheiro desloca Deus do centro do coração. Os efésios devem andar como filhos da luz, discernindo o que é agradável ao Senhor, não participando das obras infrutíferas das trevas.",
  tags: "avarento / não tem herança",
  assuntos: ["roma", "paulo", "avareza", "idolatria", "reino-deus"]
},

// 239. 2 Coríntios 11.15
{
  id: "2co11.15",
  referencia: "2 Co 11.15",
  local: "Filipos / Macedônia (Grécia)",
  paisAtual: "Grécia",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~55-56 d.C.",
  antes: "Paulo defende seu apostolado contra falsos apóstolos que se disfarçam de apóstolos de Cristo. Ele mostra que Satanás também se disfarça de anjo de luz, e seus servos se disfarçam de servos da justiça.",
  versiculo: "✅ Não é, pois, muito, que os seus ministros também se transfigurem em ministros da justiça; o fim dos quais será conforme as suas obras.",
  depois: "Paulo adverte que a aparência enganosa desses falsos mestres não mudará seu destino final. O julgamento será de acordo com suas obras, não com sua aparência. A igreja deve discernir pela doutrina e pelo fruto, não pela aparência externa de piedade.",
  tags: "falsos apóstolos / fim será das obras",
  assuntos: ["filipos", "paulo", "falsos-apostolos", "discernimento", "juizo"]
},

// 240. Mateus 13.24-28 (parábola do joio)
{
  id: "mt13.24-28",
  referencia: "Mt 13.24-28",
  local: "Mar da Galileia / Cafarnaum (Israel)",
  paisAtual: "Israel",
  lider: "Tibério",
  liderReinado: "14-37 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~28 d.C.",
  antes: "Jesus está ensinando à beira do mar, sentado em um barco. Ele conta parábolas para ensinar sobre o reino dos céus. Após a parábola do semeador, ele conta a parábola do trigo e do joio.",
  versiculo: "⚠️ Propôs-lhes outra parábola, dizendo: O reino dos céus é semelhante a um homem que semeia boa semente no seu campo; mas, enquanto os homens dormiam, veio o seu inimigo, e semeou o joio no meio do trigo, e retirou-se. E, quando a erva cresceu e deu fruto, apareceu também o joio. Chegando os servos do pai de família, disseram-lhe: Senhor, não semeaste tu boa semente no teu campo? Por que tem, pois, joio? Ele, porém, lhes disse: Um inimigo é quem fez isto. E os servos lhe disseram: Queres, pois, que vamos arrancá-lo? Ele lhes disse: Não; para que, ao colher o joio, não arranqueis também com ele o trigo.",
  depois: "Jesus explica a parábola: o semeador é o Filho do Homem; o campo é o mundo; a boa semente são os filhos do reino; o joio são os filhos do maligno; o inimigo é o diabo; a colheita é o fim do mundo. Na separação final, os anjos arrancarão o joio e os lançarão na fornalha ardente.",
  tags: "joio / trigo / inimigo",
  assuntos: ["mar-galileia", "jesus", "parabolas", "joio-trigo", "discernimento"]
},

// 241. Mateus 13.36-43 (explicação do joio)
{
  id: "mt13.36-43",
  referencia: "Mt 13.36-43",
  local: "Cafarnaum / Casa (Israel)",
  paisAtual: "Israel",
  lider: "Tibério",
  liderReinado: "14-37 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~28 d.C.",
  antes: "Jesus havia contado várias parábolas à beira do mar, incluindo a parábola do trigo e do joio. Depois, deixou a multidão e entrou em casa. Os discípulos pediram que lhes explicasse a parábola.",
  versiculo: "⚠️ Então, deixando Jesus a multidão, foi para casa; e chegaram os seus discípulos, dizendo: Explica-nos a parábola do joio do campo. E ele, respondendo, disse-lhes: O que semeia a boa semente é o Filho do Homem; e o campo é o mundo; e a boa semente são os filhos do reino; e o joio são os filhos do maligno; e o inimigo que o semeou é o diabo; e a ceifa é o fim do mundo; e os ceifeiros são os anjos. Assim como o joio é colhido e queimado no fogo, assim será também no fim deste mundo. Mandará o Filho do Homem os seus anjos, e eles colherão do seu reino tudo o que causa escândalo e os que cometem iniquidade, e lançá-los-ão na fornalha de fogo; ali haverá choro e ranger de dentes. Então, os justos resplandecerão como o sol, no reino de seu Pai. Quem tem ouvidos para ouvir, ouça.",
  depois: "Jesus explica que o trigo e o joio crescerão juntos até a colheita final. Os servos não devem arrancar o joio prematuramente, para não prejudicar o trigo. No fim, os anjos farão a separação final. Os justos resplandecerão como o sol no reino de seu Pai.",
  tags: "explicação do joio / anjos",
  assuntos: ["cafarnaum", "jesus", "parabolas", "joio-trigo", "juizo-final"]
},

// 242. Mateus 6.19-21
{
  id: "mt6.19-21",
  referencia: "Mt 6.19-21",
  local: "Monte das Bem-aventuranças / Galileia (Israel)",
  paisAtual: "Israel",
  lider: "Tibério",
  liderReinado: "14-37 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~28 d.C.",
  antes: "Jesus está ensinando no Sermão da Montanha. Ele já falou sobre esmolas, oração e jejum. Agora aborda a questão dos tesouros terrenos versus tesouros celestiais.",
  versiculo: "✅ Não ajunteis tesouros na terra, onde a traça e a ferrugem consomem, e onde os ladrões minam e roubam; mas ajuntai tesouros no céu, onde nem a traça nem a ferrugem consomem, e onde os ladrões não minam nem roubam. Porque onde estiver o vosso tesouro, aí estará também o vosso coração.",
  depois: "Jesus ensina que a prioridade do crente deve ser os tesouros celestiais (justiça, bondade, amor, etc.), não os terrenos (riquezas materiais). O coração segue o tesouro. Este ensino fundamenta a confiança na providência divina que vem a seguir (não andeis ansiosos).",
  tags: "tesouros na terra / tesouros no céu",
  assuntos: ["galileia", "jesus", "tesouros", "coracao", "prioridades"]
},

// 243. Mateus 5.3
{
  id: "mt5.3",
  referencia: "Mt 5.3",
  local: "Monte das Bem-aventuranças / Galileia (Israel)",
  paisAtual: "Israel",
  lider: "Tibério",
  liderReinado: "14-37 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~28 d.C.",
  antes: "Jesus subiu ao monte e sentou-se, e seus discípulos se aproximaram. Ele começou a ensinar as bem-aventuranças, descrevendo o caráter dos cidadãos do reino dos céus.",
  versiculo: "✅ Bem-aventurados os pobres de espírito, porque deles é o reino dos céus.",
  depois: "A primeira bem-aventurança estabelece o fundamento do discipulado: reconhecer a própria pobreza espiritual e dependência de Deus. Os 'pobres de espírito' são aqueles que, como os publicanos na parábola, reconhecem sua necessidade de Deus. Este ensinamento contrasta com a teologia da prosperidade, que enfatiza a autossuficiência.",
  tags: "pobres de espírito / reino dos céus",
  assuntos: ["galileia", "jesus", "bem-aventuranças", "humildade", "dependencia"]
},

// 244. Efésios 1.3
{
  id: "ef1.3",
  referencia: "Ef 1.3",
  local: "Roma / Itália (Itália)",
  paisAtual: "Itália",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~60-62 d.C.",
  antes: "Paulo inicia sua carta aos efésios com uma bênção. Ele louva a Deus pelas bênçãos espirituais que os crentes têm em Cristo, enfatizando a natureza espiritual dessas bênçãos, não materiais.",
  versiculo: "✅ Bendito seja o Deus e Pai de nosso Senhor Jesus Cristo, o qual nos abençoou com todas as bênçãos espirituais nos lugares celestiais em Cristo.",
  depois: "Paulo então lista essas bênçãos espirituais: eleição antes da fundação do mundo, adoção como filhos, redenção pelo sangue, perdão dos pecados, conhecimento do mistério da vontade de Deus, selo do Espírito Santo. As bênçãos são espirituais, não materiais, e estão 'nos lugares celestiais', não na terra.",
  tags: "bênçãos espirituais / lugares celestiais",
  assuntos: ["roma", "paulo", "bencao-espiritual", "efesios", "redenção"]
},

// 245. Efésios 2.6
{
  id: "ef2.6",
  referencia: "Ef 2.6",
  local: "Roma / Itália (Itália)",
  paisAtual: "Itália",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~60-62 d.C.",
  antes: "Paulo descreve a condição anterior dos efésios: mortos em delitos e pecados, seguindo o príncipe das potestades do ar. Mas Deus, rico em misericórdia, os vivificou juntamente com Cristo.",
  versiculo: "✅ E nos ressuscitou juntamente com ele, e nos fez assentar nos lugares celestiais em Cristo Jesus.",
  depois: "A ressurreição e exaltação do crente com Cristo são realidades espirituais atuais, não apenas futuras. Os crentes estão posicionalmente assentados com Cristo nos lugares celestiais. A verdadeira bênção e posição do crente são espirituais, não materiais ou terrenas.",
  tags: "ressuscitou / assentou / lugares celestiais",
  assuntos: ["roma", "paulo", "ressurreicao", "exaltacao", "posicao-em-cristo"]
},

// 246. Romanos 8.26
{
  id: "rm8.26",
  referencia: "Rm 8.26",
  local: "Corinto / Acaia (Grécia)",
  paisAtual: "Grécia",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~57 d.C.",
  antes: "Paulo fala sobre o sofrimento presente e a glória futura. Ele descreve a criação aguardando a redenção, e os crentes aguardando a adoção, a redenção de seus corpos. Neste contexto de espera e sofrimento, o Espírito Santo ajuda os crentes em sua fraqueza.",
  versiculo: "✅ E da mesma forma também o Espírito nos ajuda em nossa fraqueza; porque não sabemos o que havemos de pedir como convém, mas o mesmo Espírito intercede por nós com gemidos inexprimíveis.",
  depois: "Paulo assegura que o Espírito Santo intercede pelos santos segundo a vontade de Deus. Esta é uma das grandes bênçãos espirituais do crente: a assistência do Espírito na oração, especialmente em tempos de fraqueza e sofrimento.",
  tags: "Espírito / ajuda / intercede",
  assuntos: ["corinto", "paulo", "espirito-santo", "oracao", "intercessao"]
},

// 247. Efésios 3.16
{
  id: "ef3.16",
  referencia: "Ef 3.16",
  local: "Roma / Itália (Itália)",
  paisAtual: "Itália",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~60-62 d.C.",
  antes: "Paulo ora pelos efésios, pedindo que sejam fortalecidos interiormente. Ele se ajoelha diante do Pai, de quem toda família nos céus e na terra recebe o nome.",
  versiculo: "✅ Que vos conceda, segundo as riquezas da sua glória, que sejais corroborados com poder pelo seu Espírito no homem interior.",
  depois: "Paulo pede que os efésios sejam fortalecidos no 'homem interior' (a vida espiritual interior) pelo Espírito Santo, não exteriormente com riquezas materiais. A verdadeira força e riqueza do crente são espirituais, resultando em Cristo habitando no coração pela fé.",
  tags: "fortalecido / Espírito / homem interior",
  assuntos: ["roma", "paulo", "forca-espiritual", "espirito-santo", "homem-interior"]
},

// 248. Romanos 8.37
{
  id: "rm8.37",
  referencia: "Rm 8.37",
  local: "Corinto / Acaia (Grécia)",
  paisAtual: "Grécia",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~57 d.C.",
  antes: "Paulo lista uma série de adversidades que os crentes podem enfrentar: tribulação, angústia, perseguição, fome, nudez, perigo, espada. Apesar de tudo isso, ele afirma que os crentes são mais que vencedores.",
  versiculo: "✅ Mas em todas estas coisas somos mais do que vencedores, por aquele que nos amou.",
  depois: "A vitória do crente não é ausência de dificuldades, mas vitória em meio a elas. O amor de Deus em Cristo é a base da certeza de que nada pode separar os crentes do amor de Deus - nem morte, nem vida, nem anjos, nem principados, nem coisas presentes, nem futuras, nem altura, nem profundidade.",
  tags: "mais que vencedores / amor de Deus",
  assuntos: ["corinto", "paulo", "vitoria", "amor-deus", "certeza"]
},

// 249. Lucas 19.10
{
  id: "lc19.10",
  referencia: "Lc 19.10",
  local: "Jericó / Judéia (Israel)",
  paisAtual: "Israel",
  lider: "Tibério",
  liderReinado: "14-37 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~30 d.C.",
  antes: "Jesus encontrou Zaqueu, um cobrador de impostos rico, que subiu em uma figueira para vê-lo. Jesus o chamou para descer e foi hospedar-se em sua casa. Zaqueu se arrependeu e prometeu restituir quatro vezes mais o que havia roubado.",
  versiculo: "✅ Porque o Filho do Homem veio buscar e salvar o que se havia perdido.",
  depois: "Jesus declara que a salvação veio à casa de Zaqueu naquele dia. A missão do Filho do Homem é buscar e salvar os perdidos, não enriquecer os já ricos. O evangelho é sobre salvação de almas, não sobre prosperidade material.",
  tags: "buscar / salvar / perdido",
  assuntos: ["jerico", "jesus", "salvacao", "missoes", "zaqueu"]
},

// 250. Salmo 23 (capítulo inteiro)
{
  id: "sl23",
  referencia: "Sl 23",
  local: "Israel / Judá (Israel)",
  paisAtual: "Israel",
  lider: "Davi",
  liderReinado: "1010-970 a.C.",
  periodo: "Reino Unido",
  periodoDatas: "1010-970 a.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~1000 a.C.",
  antes: "Davi, que foi pastor antes de ser rei, escreve este salmo baseado em sua experiência pessoal cuidando de ovelhas. Ele usa a metáfora do pastor para descrever o cuidado de Deus por seu povo.",
  versiculo: "📖 O Senhor é o meu pastor; nada me faltará. Deitar-me faz em verdes pastos, guia-me mansamente a águas tranquilas. Refrigera a minha alma; guia-me pelas veredas da justiça por amor do seu nome. Ainda que eu andasse pelo vale da sombra da morte, não temeria mal algum, porque tu estás comigo; a tua vara e o teu cajado me consolam. Preparas uma mesa perante mim na presença dos meus inimigos; unges a minha cabeça com óleo, o meu cálice transborda. Certamente que a bondade e a misericórdia me seguirão todos os dias da minha vida; e habitarei na casa do Senhor por longos dias.",
  depois: "O salmo é uma declaração de confiança na provisão, proteção e presença de Deus, mesmo em meio às dificuldades ('vale da sombra da morte'). A ênfase não está em riquezas materiais, mas na presença e cuidado pastoral de Deus. O salmo termina com a esperança de habitar na casa do Senhor para sempre.",
  tags: "pastor / nada me faltará / vale da sombra",
  assuntos: ["juda", "davi", "salmos", "confianca", "pastor-divino"]
},

// 251. Filipenses 4.11
{
  id: "fp4.11",
  referencia: "Fp 4.11",
  local: "Roma / Itália (Itália)",
  paisAtual: "Itália",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~60-62 d.C.",
  antes: "Paulo está escrevendo da prisão em Roma. Ele agradece aos filipenses pela generosidade deles, mas quer deixar claro que seu contentamento não depende das circunstâncias.",
  versiculo: "✅ Não digo isto por causa da necessidade, porque já aprendi a contentar-me com o que tenho.",
  depois: "Paulo explica que aprendeu a viver contente em toda e qualquer situação: tanto na humilhação quanto na abundância, tanto em fartura quanto em escassez. Ele pode todas as coisas naquele que o fortalece (Cristo). O contentamento é aprendido, não automático, e independe das circunstâncias externas.",
  tags: "aprendi / contentar / circunstâncias",
  assuntos: ["roma", "paulo", "contentamento", "aprendizado", "dependencia-cristo"]
},
// 252. Efésios 3.10
{
  id: "ef3.10",
  referencia: "Ef 3.10",
  local: "Roma / Itália (Itália)",
  paisAtual: "Itália",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~60-62 d.C.",
  antes: "Paulo está preso em Roma, escrevendo aos efésios sobre o mistério do evangelho revelado. Ele explica que judeus e gentios são um só corpo em Cristo. Agora ele revela o propósito cósmico da igreja.",
  versiculo: "✅ Para que agora, pela igreja, a multiforme sabedoria de Deus seja conhecida dos principados e potestades nos céus.",
  depois: "Paulo conclui que os efésios não devem desanimar com suas tribulações, pois elas são para a glória deles. Ele ora para que sejam fortalecidos interiormente, para que Cristo habite em seus corações pela fé. A igreja é o meio pelo qual Deus manifesta Sua sabedoria ao universo.",
  tags: "igreja / propósito / manifestação da sabedoria",
  assuntos: ["roma", "paulo", "igreja", "sabedoria-divina", "principados"]
},

// 253. Atos 2.47
{
  id: "at2.47",
  referencia: "At 2.47",
  local: "Jerusalém / Judéia (Israel)",
  paisAtual: "Israel",
  lider: "Pedro",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~30 d.C.",
  antes: "Cerca de 3.000 pessoas se converteram no dia de Pentecostes. A igreja primitiva se dedicava ao ensino dos apóstolos, à comunhão, ao partir do pão e às orações. Eles vendiam suas propriedades e repartiam com os necessitados.",
  versiculo: "✅ Louvando a Deus, e caindo na graça de todo o povo. E todos os dias acrescentava o Senhor à igreja aqueles que se haviam de salvar.",
  depois: "A igreja continuava crescendo diariamente. Os apóstolos realizavam muitos sinais e prodígios. Apesar das perseguições do Sinédrio, a igreja se mantinha unida em oração e o Senhor acrescentava novos convertidos. A adoração era o combustível do crescimento da igreja primitiva.",
  tags: "adoração / louvor / igreja primitiva",
  assuntos: ["jerusalem", "pedro", "adoracao", "igreja-primitiva", "crescimento"]
},

// 254. João 4.23
{
  id: "jo4.23",
  referencia: "Jo 4.23",
  local: "Samaria / Poço de Jacó (Israel)",
  paisAtual: "Israel",
  lider: "Tibério",
  liderReinado: "14-37 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~28 d.C.",
  antes: "Jesus estava viajando da Judéia para a Galileia e passou pela Samaria. Cansado da viagem, sentou-se junto ao poço de Jacó. Uma mulher samaritana veio tirar água, e Jesus pediu-lhe de beber, quebrando as barreiras raciais e religiosas da época.",
  versiculo: "✅ Mas a hora vem, e agora é, em que os verdadeiros adoradores adorarão o Pai em espírito e em verdade; porque o Pai procura a tais que assim o adorem.",
  depois: "Jesus revela que a adoração verdadeira não está mais limitada ao templo de Jerusalém ou ao monte Gerizim. O Pai busca adoradores que o adorem em espírito (pelo Espírito Santo) e em verdade (de acordo com a revelação de Cristo). A mulher samaritana crê e vai anunciar Jesus à cidade.",
  tags: "adoração / espírito / verdade",
  assuntos: ["samaria", "jesus", "adoracao", "espirito-santo", "verdade"]
},

// 255. Efésios 4.12
{
  id: "ef4.12",
  referencia: "Ef 4.12",
  local: "Roma / Itália (Itália)",
  paisAtual: "Itália",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~60-62 d.C.",
  antes: "Paulo lista os dons de liderança dados por Cristo à igreja: apóstolos, profetas, evangelistas, pastores e mestres. O propósito desses dons não é criar uma hierarquia, mas equipar a igreja para o serviço.",
  versiculo: "✅ Com o fim de aperfeiçoar os santos para a obra do ministério, para edificação do corpo de Cristo.",
  depois: "O objetivo final dos dons é que todos os crentes cheguem à unidade da fé e ao conhecimento do Filho de Deus, à medida da estatura da plenitude de Cristo. A igreja madura não é mais como crianças instáveis, levadas por todo vento de doutrina.",
  tags: "edificação / ministério / corpo de Cristo",
  assuntos: ["roma", "paulo", "edificacao", "dons-espirituais", "corpo-de-cristo"]
},

// 256. 1 Coríntios 14.26
{
  id: "1co14.26",
  referencia: "1 Co 14.26",
  local: "Corinto / Acaia (Grécia)",
  paisAtual: "Grécia",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~55 d.C.",
  antes: "A igreja de Corinto valorizava excessivamente o dom de línguas, causando confusão e desordem nas reuniões. Paulo instrui que tudo deve ser feito para edificação. Ele contrasta línguas não interpretadas com profecias que edificam a igreja.",
  versiculo: "✅ Que fareis, pois, irmãos? Quando vos ajuntais, cada um de vós tem salmo, tem doutrina, tem revelação, tem língua, tem interpretação. Faça-se tudo para edificação.",
  depois: "Paulo estabelece princípios de ordem no culto: falar em línguas deve ser limitado a dois ou três, e deve haver intérprete. As profecias também devem ser avaliadas. Deus não é Deus de confusão, mas de paz. Todo o culto deve visar a edificação da igreja.",
  tags: "edificação / dons / comunhão",
  assuntos: ["corinto", "paulo", "edificacao", "dons-espirituais", "ordem-no-culto"]
},

// 257. Mateus 28.19-20 (Grande Comissão)
{
  id: "mt28.19-20",
  referencia: "Mt 28.19-20",
  local: "Galileia / Monte designado por Jesus (Israel)",
  paisAtual: "Israel",
  lider: "Tibério",
  liderReinado: "14-37 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~30 d.C.",
  antes: "Jesus ressuscitou dos mortos e apareceu várias vezes aos discípulos. Os chefes dos sacerdotes haviam subornado os soldados para dizerem que o corpo de Jesus foi roubado. Jesus encontrou os discípulos na Galileia, no monte que designara.",
  versiculo: "✅ Portanto ide, ensinai todas as nações, batizando-as em nome do Pai, e do Filho, e do Espírito Santo; ensinando-as a guardar todas as coisas que eu vos tenho mandado; e eis que eu estou convosco todos os dias, até a consumação dos séculos.",
  depois: "Os discípulos obedeceram e começaram a pregar em Jerusalém, depois na Judéia, Samaria e até os confins da terra. A promessa da presença constante de Jesus sustentou a igreja através de perseguições e desafios. A Grande Comissão continua sendo o mandato missionário da igreja até hoje.",
  tags: "grande comissão / discipulado / missão",
  assuntos: ["galileia", "jesus", "grande-comissao", "discipulado", "missoes"]
},

// 258. Atos 1.8
{
  id: "at1.8",
  referencia: "At 1.8",
  local: "Monte das Oliveiras / Jerusalém (Israel)",
  paisAtual: "Israel",
  lider: "Jesus",
  liderReinado: "",
  periodo: "Período Romano",
  periodoDatas: "63 a.C. - 70 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~30 d.C.",
  antes: "Jesus passou quarenta dias após a ressurreição falando sobre o reino de Deus. Os discípulos perguntaram se Ele restauraria o reino a Israel naquele momento. Jesus respondeu que não lhes compete saber os tempos, mas que receberiam poder.",
  versiculo: "✅ Mas recebereis a virtude do Espírito Santo, que há de vir sobre vós; e ser-me-eis testemunhas, tanto em Jerusalém como em toda a Judéia e Samaria, e até aos confins da terra.",
  depois: "Após dizer isto, Jesus foi elevado ao céu, e uma nuvem o recebeu. Os discípulos ficaram olhando para o céu, e dois anjos apareceram prometendo que Jesus voltaria da mesma forma. Os discípulos voltaram para Jerusalém e perseveraram em oração no cenáculo até Pentecostes.",
  tags: "testemunhas / poder / Espírito Santo",
  assuntos: ["jerusalem", "jesus", "espirito-santo", "missoes", "testemunho"]
},

// 259. Mateus 5.13-14
{
  id: "mt5.13-14",
  referencia: "Mt 5.13-14",
  local: "Monte das Bem-aventuranças / Galileia (Israel)",
  paisAtual: "Israel",
  lider: "Tibério",
  liderReinado: "14-37 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~28 d.C.",
  antes: "Jesus está ensinando no Sermão da Montanha. Ele já havia pronunciado as bem-aventuranças, descrevendo o caráter dos cidadãos do reino. Agora ele aplica essas características à identidade pública dos discípulos.",
  versiculo: "✅ Vós sois o sal da terra; e se o sal for insípido, com que se há de salgar? Para nada mais presta senão para se lançar fora, e ser pisado pelos homens. Vós sois a luz do mundo; não se pode esconder uma cidade edificada sobre um monte.",
  depois: "Jesus continua: 'Assim resplandeça a vossa luz diante dos homens, para que vejam as vossas boas obras e glorifiquem a vosso Pai que está nos céus'. O sal preserva e dá sabor; a luz ilumina e guia. Os discípulos são chamados a influenciar o mundo, não a se isolar dele.",
  tags: "sal da terra / luz do mundo / testemunho",
  assuntos: ["galileia", "jesus", "sermao-montanha", "testemunho", "influencia"]
},

// 260. Mateus 5.14
{
  id: "mt5.14",
  referencia: "Mt 5.14",
  local: "Monte das Bem-aventuranças / Galileia (Israel)",
  paisAtual: "Israel",
  lider: "Tibério",
  liderReinado: "14-37 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~28 d.C.",
  antes: "Jesus acabou de dizer que os discípulos são o sal da terra. Agora ele usa a segunda metáfora: a luz. No contexto da Galileia, as cidades construídas no alto das colinas eram visíveis de longe, especialmente à noite com suas lamparinas acesas.",
  versiculo: "✅ Vós sois a luz do mundo; não se pode esconder uma cidade edificada sobre um monte.",
  depois: "A luz não pode ser escondida. Assim como uma cidade no monte é visível para todos, a vida do discípulo deve ser visível e iluminadora. A conclusão: 'Assim resplandeça a vossa luz diante dos homens, para que vejam as vossas boas obras e glorifiquem a vosso Pai que está nos céus'.",
  tags: "luz do mundo / cidade sobre o monte / missão",
  assuntos: ["galileia", "jesus", "sermao-montanha", "luz", "missao"]
},

// 261. Mateus 5.16
{
  id: "mt5.16",
  referencia: "Mt 5.16",
  local: "Monte das Bem-aventuranças / Galileia (Israel)",
  paisAtual: "Israel",
  lider: "Tibério",
  liderReinado: "14-37 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~28 d.C.",
  antes: "Jesus acabou de declarar que os discípulos são a luz do mundo. Agora ele explica como essa luz deve brilhar: através de boas obras visíveis, mas com o objetivo correto.",
  versiculo: "✅ Assim resplandeça a vossa luz diante dos homens, para que vejam as vossas boas obras e glorifiquem a vosso Pai que está nos céus.",
  depois: "As boas obras não devem ser para autoengrandecimento, mas para que outros glorifiquem a Deus. Este princípio equilibra a visibilidade do testemunho cristão com a humildade. O alvo final não é a reputação do discípulo, mas a glória do Pai.",
  tags: "boas obras / glorificar / luz",
  assuntos: ["galileia", "jesus", "sermao-montanha", "boas-obras", "gloria-deus"]
},

// 262. 1 Timóteo 2.1
{
  id: "1tm2.1",
  referencia: "1 Tm 2.1",
  local: "Éfeso / Ásia Menor (Turquia)",
  paisAtual: "Turquia",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~62-64 d.C.",
  antes: "Paulo escreve a Timóteo, que pastoreia a igreja em Éfeso. Havia falsos mestres ensinando doutrinas estranhas. Paulo instrui Timóteo sobre a ordem na igreja e a importância da oração intercessória.",
  versiculo: "✅ Admoesto-te, pois, antes de tudo, que se façam deprecações, orações, intercessões e ações de graças por todos os homens.",
  depois: "Paulo especifica que as orações devem ser feitas por reis e por todos os que estão em autoridade, para que tenhamos uma vida tranquila e sossegada. Isto é bom e agradável diante de Deus, que deseja que todos os homens sejam salvos e cheguem ao conhecimento da verdade.",
  tags: "oração / intercessão / autoridades",
  assuntos: ["efeso", "paulo", "oracao", "intercessao", "autoridades"]
},

// 263. Mateus 5.9
{
  id: "mt5.9",
  referencia: "Mt 5.9",
  local: "Monte das Bem-aventuranças / Galileia (Israel)",
  paisAtual: "Israel",
  lider: "Tibério",
  liderReinado: "14-37 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~28 d.C.",
  antes: "Jesus está proclamando as bem-aventuranças no Sermão da Montanha. Ele já falou sobre os pobres de espírito, os que choram, os mansos, os que têm fome e sede de justiça, os misericordiosos, os limpos de coração. Agora ele aborda os pacificadores.",
  versiculo: "✅ Bem-aventurados os pacificadores, porque eles serão chamados filhos de Deus.",
  depois: "Os pacificadores não são os que evitam conflitos a qualquer custo, mas os que ativamente promovem a reconciliação. Eles refletem o caráter de Deus, que em Cristo reconciliou o mundo consigo mesmo. Ser chamado 'filho de Deus' é receber a identidade e aprovação divinas.",
  tags: "pacificadores / filhos de Deus / paz",
  assuntos: ["galileia", "jesus", "bem-aventuranças", "paz", "reconciliacao"]
},

// 264. 2 Coríntios 5.18-19
{
  id: "2co5.18-19",
  referencia: "2 Co 5.18-19",
  local: "Filipos / Macedônia (Grécia)",
  paisAtual: "Grécia",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~55-56 d.C.",
  antes: "Paulo fala sobre a nova criação em Cristo. Quem está em Cristo é uma nova criatura, as coisas velhas já passaram. A reconciliação com Deus é o centro da mensagem do evangelho.",
  versiculo: "✅ Ora, tudo provém de Deus, que nos reconciliou consigo mesmo por Jesus Cristo, e nos deu o ministério da reconciliação. Isto é, Deus estava em Cristo reconciliando consigo o mundo, não lhes imputando os seus pecados; e pôs em nós a palavra da reconciliação.",
  depois: "Paulo conclui que somos embaixadores de Cristo, como se Deus estivesse rogando por nosso intermédio. Ele suplica aos coríntios que se reconciliem com Deus. O ministério da reconciliação é a missão confiada à igreja.",
  tags: "reconciliação / ministério / embaixadores",
  assuntos: ["filipos", "paulo", "reconciliacao", "ministerio", "embaixadores"]
},

// 265. João 16.33
{
  id: "jo16.33",
  referencia: "Jo 16.33",
  local: "Jerusalém / Judéia (Israel)",
  paisAtual: "Israel",
  lider: "Tibério",
  liderReinado: "14-37 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~30 d.C.",
  antes: "Jesus está falando com os discípulos na véspera de sua morte. Ele já havia anunciado que eles seriam espalhados e o deixariam sozinho. Ele os prepara para as tribulações que virão após sua partida.",
  versiculo: "✅ Tenho-vos dito estas coisas, para que em mim tenhais paz; no mundo tereis aflições, mas tende bom ânimo; eu venci o mundo.",
  depois: "Jesus não promete ausência de aflições, mas paz nele em meio às aflições. Sua vitória sobre o mundo (pecado, morte e Satanás) é a base para o bom ânimo dos discípulos. Esta promessa tem sustentado os cristãos através de séculos de perseguição.",
  tags: "paz / tribulação / vitória",
  assuntos: ["jerusalem", "jesus", "paz", "tribulacao", "vitoria"]
},

// 266. Mateus 5.13
{
  id: "mt5.13",
  referencia: "Mt 5.13",
  local: "Monte das Bem-aventuranças / Galileia (Israel)",
  paisAtual: "Israel",
  lider: "Tibério",
  liderReinado: "14-37 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~28 d.C.",
  antes: "Jesus inicia a seção sobre a identidade dos discípulos no mundo. Após as bem-aventuranças, ele agora os chama de 'sal da terra' e 'luz do mundo'. A metáfora do sal vem do contexto agrícola da Galileia.",
  versiculo: "✅ Vós sois o sal da terra; e se o sal for insípido, com que se há de salgar? Para nada mais presta senão para se lançar fora, e ser pisado pelos homens.",
  depois: "O sal tinha múltiplas funções: preservar os alimentos da decomposição, dar sabor e era usado em sacrifícios. Se o sal perde sua força, torna-se inútil. Assim, os discípulos devem manter seu caráter distintivo no mundo, preservando a verdade e dando sabor à sociedade.",
  tags: "sal da terra / preservar / sabor",
  assuntos: ["galileia", "jesus", "sermao-montanha", "sal", "influencia"]
},

// 267. Efésios 4.11-12
{
  id: "ef4.11-12",
  referencia: "Ef 4.11-12",
  local: "Roma / Itália (Itália)",
  paisAtual: "Itália",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~60-62 d.C.",
  antes: "Paulo está preso em Roma, escrevendo aos efésios sobre a unidade do corpo de Cristo. Ele já falou sobre a unidade da fé e do Espírito. Agora ele explica como os dons de liderança contribuem para essa unidade.",
  versiculo: "✅ E ele mesmo deu uns para apóstolos, e outros para profetas, e outros para evangelistas, e outros para pastores e doutores, para o aperfeiçoamento dos santos, para a obra do ministério, para edificação do corpo de Cristo.",
  depois: "Os dons de liderança não são para exaltação pessoal, mas para equipar a igreja. O objetivo é que todos os crentes cheguem à unidade da fé e ao conhecimento do Filho de Deus. A igreja madura não é mais como crianças instáveis, levadas por todo vento de doutrina.",
  tags: "dons / ministério / edificação",
  assuntos: ["roma", "paulo", "dons-espirituais", "ministerio", "edificacao"]
},

// 268. Atos 2.42-47
{
  id: "at2.42-47",
  referencia: "At 2.42-47",
  local: "Jerusalém / Judéia (Israel)",
  paisAtual: "Israel",
  lider: "Pedro",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~30 d.C.",
  antes: "Cerca de 3.000 pessoas se converteram no dia de Pentecostes após a pregação de Pedro. Eles foram batizados e se juntaram à comunidade cristã primitiva. Este resumo descreve o funcionamento da primeira igreja.",
  versiculo: "⚠️ E perseveravam na doutrina dos apóstolos, e na comunhão, e no partir do pão, e nas orações. E em toda a alma havia temor, e muitas maravilhas e sinais se faziam pelos apóstolos. Todos os que criam estavam juntos e tinham tudo em comum. Vendiam suas propriedades e bens e repartiam com todos, segundo cada um tinha necessidade. E perseverando unânimes todos os dias no templo, e partindo o pão em casa, comiam juntos com alegria e singeleza de coração, louvando a Deus e caindo na graça de todo o povo. E todos os dias acrescentava o Senhor à igreja aqueles que se haviam de salvar.",
  depois: "A igreja primitiva estabeleceu o padrão para a vida comunitária cristã: ensino apostólico, comunhão, partilha de bens, oração, adoração e evangelismo. Este modelo tem inspirado comunidades cristãs ao longo da história. O crescimento da igreja era resultado natural da vida comunitária autêntica.",
  tags: "igreja primitiva / comunhão / discipulado",
  assuntos: ["jerusalem", "pedro", "igreja-primitiva", "comunhao", "partilha"]
},

// 269. 2 Timóteo 3.16
{
  id: "2tm3.16",
  referencia: "2 Tm 3.16",
  local: "Roma / Itália (Itália)",
  paisAtual: "Itália",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~64-67 d.C.",
  antes: "Paulo está na prisão em Roma, próximo da morte. Ele escreve sua última carta a Timóteo, encorajando-o a permanecer fiel às Escrituras que aprendeu desde a infância, ensinado por sua avó Lóide e sua mãe Eunice.",
  versiculo: "✅ Toda Escritura é inspirada por Deus e útil para o ensino, para a repreensão, para a correção, para a educação na justiça.",
  depois: "O propósito das Escrituras é equipar o homem de Deus para toda boa obra. A inspiração (theopneustos = soprada por Deus) garante a autoridade das Escrituras. Paulo exorta Timóteo a pregar a palavra, a tempo e fora de tempo, porque virá tempo em que não suportarão a sã doutrina.",
  tags: "inspiração / ensino / correção",
  assuntos: ["roma", "paulo", "escrituras", "inspiracao", "ensino"]
},

// 270. Mateus 4.4
{
  id: "mt4.4",
  referencia: "Mt 4.4",
  local: "Deserto da Judéia (Israel)",
  paisAtual: "Israel",
  lider: "Tibério",
  liderReinado: "14-37 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~28 d.C.",
  antes: "Jesus foi levado pelo Espírito ao deserto para ser tentado pelo diabo. Jejuou quarenta dias e quarenta noites. O tentador se aproximou e o desafiou a transformar pedras em pães, apelando para sua fome física.",
  versiculo: "✅ Ele, porém, respondendo, disse: Está escrito: Nem só de pão viverá o homem, mas de toda a palavra que sai da boca de Deus.",
  depois: "Jesus cita Deuteronômio 8.3, lembrando como Deus alimentou Israel com o maná no deserto para ensinar que a verdadeira vida vem da Palavra de Deus. O diabo então tenta Jesus de outras formas, mas Ele resiste com as Escrituras. A Palavra de Deus é o alimento essencial para a vida espiritual.",
  tags: "pão / palavra de Deus / viver",
  assuntos: ["deserto-juda", "jesus", "palavra-deus", "tentacao", "vida-espiritual"]
},

// 271. Gálatas 6.2
{
  id: "gl6.2",
  referencia: "Gl 6.2",
  local: "Galácia / Ásia Menor (Turquia)",
  paisAtual: "Turquia",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~49-55 d.C.",
  antes: "Paulo conclui a carta aos Gálatas com exortações práticas sobre a vida em comunidade. Ele fala sobre restaurar os caídos com espírito de mansidão e sobre carregar as cargas uns dos outros.",
  versiculo: "✅ Levai as cargas uns dos outros, e assim cumprireis a lei de Cristo.",
  depois: "A 'lei de Cristo' é o mandamento do amor mútuo (João 13.34). Carregar as cargas uns dos outros é uma expressão prática desse amor. Paulo contrasta isso com a ideia de que cada um deve carregar o seu próprio fardo (responsabilidade pessoal), mostrando que há fardos que não podemos carregar sozinhos.",
  tags: "carregar cargas / lei de Cristo",
  assuntos: ["galacia", "paulo", "comunhao", "amor", "compartilhar"]
},

// 272. Romanos 12.15
{
  id: "rm12.15",
  referencia: "Rm 12.15",
  local: "Corinto / Acaia (Grécia)",
  paisAtual: "Grécia",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~57 d.C.",
  antes: "Paulo dá instruções sobre a vida em comunidade, exortando os romanos a amarem sinceramente, a se dedicarem uns aos outros com preferência, e a serem zelosos no serviço ao Senhor.",
  versiculo: "✅ Alegrai-vos com os que se alegram; e chorai com os que choram.",
  depois: "A empatia é a marca da comunidade cristã. Alegrar-se com os que se alegram requer ausência de inveja. Chorar com os que choram requer compaixão ativa. Paulo ensina que a comunidade cristã é um corpo onde os membros participam das alegrias e tristezas uns dos outros.",
  tags: "alegrar / chorar / empatia",
  assuntos: ["corinto", "paulo", "empatia", "comunhao", "amor"]
},

// 273. Hebreus 12.11
{
  id: "hb12.11",
  referencia: "Hb 12.11",
  local: "Roma / Itália (Itália)",
  paisAtual: "Itália",
  lider: "",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~60-65 d.C.",
  antes: "O autor de Hebreus exorta os leitores a suportarem a disciplina de Deus. Ele compara a disciplina divina à disciplina paterna, que é evidência de filiação, não de rejeição.",
  versiculo: "✅ E, na verdade, toda a correção, ao presente, não parece ser de gozo, mas de tristeza; mas depois produz um fruto pacífico de justiça nos que por ela são exercitados.",
  depois: "A disciplina divina, embora dolorosa no momento, tem um propósito positivo: produzir fruto de justiça e paz. O crescimento espiritual muitas vezes vem através do sofrimento e da correção. Os crentes são encorajados a não desmaiarem diante da disciplina, mas a se deixarem exercitar por ela.",
  tags: "disciplina / paz / justiça",
  assuntos: ["roma", "autor-hebreus", "disciplina-divina", "fruto-justica", "paciencia"]
},

// 274. 1 Coríntios 12.7
{
  id: "1co12.7",
  referencia: "1 Co 12.7",
  local: "Corinto / Acaia (Grécia)",
  paisAtual: "Grécia",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~55 d.C.",
  antes: "Paulo introduz o tema dos dons espirituais em Corinto. A igreja estava orgulhosa de seus dons, especialmente o dom de línguas, e havia competição e comparação entre os membros.",
  versiculo: "✅ Mas a manifestação do Espírito é dada a cada um para o que for útil.",
  depois: "O propósito dos dons não é exaltação pessoal, mas utilidade para a comunidade. Cada dom é uma manifestação do Espírito para o bem comum. Paulo usará essa verdade para corrigir os abusos em Corinto, mostrando que todos os dons são importantes para o corpo de Cristo.",
  tags: "dons / utilidade / bem comum",
  assuntos: ["corinto", "paulo", "dons-espirituais", "comunidade", "servir"]
},

// 275. 1 Pedro 2.2
{
  id: "1pe2.2",
  referencia: "1 Pe 2.2",
  local: "Roma / Itália (Itália)",
  paisAtual: "Itália",
  lider: "Pedro",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~60-65 d.C.",
  antes: "Pedro escreve a cristãos dispersos enfrentando perseguição. Ele os lembra de sua nova identidade em Cristo: eleitos, santos e amados. Agora ele os exorta a crescerem espiritualmente.",
  versiculo: "✅ Desejai afetuosamente, como meninos novamente nascidos, o leite racional, não falsificado, para que por ele vades crescendo.",
  depois: "Assim como um bebê deseja naturalmente o leite materno, o novo crente deve desejar a Palavra de Deus (o 'leite racional' ou 'leite espiritual'). O crescimento espiritual não é automático; requer desejo e ingestão constante da Palavra. Pedro contrasta isso com as falsificações do mundo.",
  tags: "leite espiritual / crescimento / salvação",
  assuntos: ["roma", "pedro", "crescimento-espiritual", "palavra-deus", "santificacao"]
},

// 276. Atos 4.20
{
  id: "at4.20",
  referencia: "At 4.20",
  local: "Jerusalém / Judéia (Israel)",
  paisAtual: "Israel",
  lider: "Pedro e João",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~30 d.C.",
  antes: "Pedro e João foram presos pelo Sinédrio após curar um homem coxo de nascença. Foram ameaçados e ordenados a não falar mais no nome de Jesus. Ao serem libertos, foram para os irmãos e relataram tudo.",
  versiculo: "✅ Porque não podemos deixar de falar do que temos visto e ouvido.",
  depois: "A igreja se reuniu em oração, e o lugar onde estavam tremeu; todos foram cheios do Espírito Santo e falavam a palavra de Deus com ousadia. A experiência pessoal com Cristo criou uma compulsão irresistível para testemunhar. A gratidão pela salvação transformou-se em missão.",
  tags: "testemunhar / não posso calar / visto e ouvido",
  assuntos: ["jerusalem", "pedro", "testemunho", "missao", "gratidao"]
},

// 278. 2 Timóteo 3.12
{
  id: "2tm3.12",
  referencia: "2 Tm 3.12",
  local: "Roma / Itália (Itália)",
  paisAtual: "Itália",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~64-67 d.C.",
  antes: "Paulo está na prisão em Roma, próximo da morte. Ele escreve sua última carta a Timóteo, advertindo sobre os últimos dias e a perseguição que viria sobre aqueles que vivem piedosamente. Os cristãos enfrentavam crescente oposição do Império Romano.",
  versiculo: "✅ E também todos os que piamente querem viver em Cristo Jesus padecerão perseguições.",
  depois: "Paulo exorta Timóteo a permanecer firme na fé, continuando nas Escrituras que aprendeu desde a infância. O apóstolo conclui que a vida cristã não é isenta de sofrimento, mas a perseguição é esperada para aqueles que vivem piedosamente.",
  tags: "aflições / viver piedosamente / perseguição",
  assuntos: ["roma", "paulo", "perseguicao", "piedade", "timoteo"]
},

// 279. Mateus 5.11-12
{
  id: "mt5.11-12",
  referencia: "Mt 5.11-12",
  local: "Monte das Bem-aventuranças / Galileia (Israel)",
  paisAtual: "Israel",
  lider: "Tibério",
  liderReinado: "14-37 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~28 d.C.",
  antes: "Jesus está ensinando o Sermão da Montanha. Ele já havia pronunciado as bem-aventuranças, incluindo 'Bem-aventurados os que são perseguidos por causa da justiça, porque deles é o reino dos céus'. Agora ele aplica isso diretamente aos discípulos.",
  versiculo: "✅ Bem-aventurados sois vós, quando vos injuriarem e perseguirem e, mentindo, disserem todo o mal contra vós por minha causa. Exultai e alegrai-vos, porque é grande o vosso galardão nos céus; porque assim perseguiram os profetas que foram antes de vós.",
  depois: "Jesus ensina que a perseguição não é uma maldição, mas uma bênção que coloca os discípulos na mesma linhagem dos profetas do Antigo Testamento. A recompensa no céu é grande para aqueles que sofrem por causa do evangelho.",
  tags: "perseguidos / recompensa / alegrai-vos",
  assuntos: ["galileia", "jesus", "perseguicao", "bem-aventuranças", "galardao"]
},

// 280. Hebreus 11.38
{
  id: "hb11.38",
  referencia: "Hb 11.38",
  local: "Roma / Itália (Itália)",
  paisAtual: "Itália",
  lider: "",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~60-65 d.C.",
  antes: "O autor de Hebreus está listando os heróis da fé no capítulo 11. Ele menciona aqueles que sofreram perseguições severas: foram apedrejados, serrados ao meio, mortos à espada, andaram vestidos de peles de ovelhas e cabras, destituídos, aflitos e maltratados.",
  versiculo: "✅ (Dos quais o mundo não era digno.) Errante pelos desertos, e montes, e pelas covas e cavernas da terra.",
  depois: "O autor conclui que todos esses heróis, embora aprovados pela fé, não alcançaram a promessa. Deus proveu algo melhor para nós, para que eles não fossem aperfeiçoados sem nós. O capítulo 12 então exorta os crentes a correrem com perseverança a carreira que lhes está proposta.",
  tags: "mundo / não é digno / fé",
  assuntos: ["roma", "autor-hebreus", "perseguicao", "herois-da-fe", "sofrimento"]
},

// 281. 2 Coríntios 2.14-17
{
  id: "2co2.14-17",
  referencia: "2 Co 2.14-17",
  local: "Filipos / Macedônia (Grécia)",
  paisAtual: "Grécia",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~55-56 d.C.",
  antes: "Paulo está descrevendo sua experiência como apóstolo. Ele usa uma metáfora poderosa do mundo romano: o triunfo militar, um desfile de vitória onde o general vitorioso liderava seus prisioneiros e soldados, enquanto o incenso era queimado.",
  versiculo: "⚠️ Mas graças a Deus, que sempre nos faz triunfar em Cristo, e por nós manifesta em todo o lugar o cheiro do seu conhecimento. Porque para Deus somos o bom cheiro de Cristo, nos que se salvam e nos que se perdem. Para uns certamente cheiro de morte para morte; mas para outros cheiro de vida para vida. E para estas coisas, quem é suficiente? Porque não somos como muitos, que falsificam a palavra de Deus; antes, é com sinceridade, mas como de Deus, falamos na presença de Deus, em Cristo.",
  depois: "Paulo contrasta a pregação sincera do evangelho com a falsificação promovida por falsos mestres. O evangelho é como um incenso que traz vida para uns e morte para outros, dependendo da resposta de cada coração. Paulo afirma sua integridade no ministério.",
  tags: "triunfo / fragrância / Cristo",
  assuntos: ["filipos", "paulo", "evangelho", "falsos-mestres", "sinceridade"]
},

// 282. Atos 8.18-20
{
  id: "at8.18-20",
  referencia: "At 8.18-20",
  local: "Samaria (Israel)",
  paisAtual: "Israel",
  lider: "Simão",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~35-36 d.C.",
  antes: "Filipe havia pregado em Samaria e muitos creram, incluindo Simão, o mágico, que havia encantado o povo com suas artes. Simão foi batizado, mas estava mais interessado no poder dos apóstolos do que na salvação. Pedro e João foram enviados a Samaria para que os novos convertidos recebessem o Espírito Santo.",
  versiculo: "✅ Vendo, pois, Simão que pela imposição das mãos dos apóstolos era dado o Espírito Santo, ofereceu-lhes dinheiro, dizendo: Dai-me também a mim esse poder, para que aquele sobre quem eu impuser as mãos receba o Espírito Santo. Mas Pedro lhe disse: O teu dinheiro seja contigo para perdição, pois cuidaste que o dom de Deus se compra com dinheiro.",
  depois: "Simão ficou aterrorizado com a repreensão de Pedro e pediu que orassem por ele para que nada do que Pedro disse lhe sobreviesse. Este episódio deu origem ao termo 'simonia' - a compra ou venda de coisas sagradas. A igreja sempre rejeitou a comercialização da fé.",
  tags: "Simão / mágico / dom / dinheiro",
  assuntos: ["samaria", "pedro", "simonia", "dom-espirito-santo", "comercializacao"]
},

// 283. 2 Coríntios 2.17
{
  id: "2co2.17",
  referencia: "2 Co 2.17",
  local: "Filipos / Macedônia (Grécia)",
  paisAtual: "Grécia",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~55-56 d.C.",
  antes: "Paulo acabara de descrever o evangelho como uma fragrância que traz vida ou morte. Agora ele contrasta sua pregação sincera com a de falsos mestres que mercantilizam a Palavra de Deus.",
  versiculo: "✅ Porque não somos como muitos, que falsificam a palavra de Deus; antes, é com sinceridade, mas como de Deus, falamos na presença de Deus, em Cristo.",
  depois: "Paulo reafirma sua integridade ministerial. Ele não é um 'mercadejador' da Palavra, mas fala com sinceridade diante de Deus. O termo grego para 'falsificam' (kapeleuontes) significa 'negociar', 'comercializar' - como um vendedor que adultera a mercadoria para obter lucro.",
  tags: "mercadejadores / Palavra / sinceridade",
  assuntos: ["filipos", "paulo", "integralidade", "falsos-mestres", "ministerio"]
},

// 284. Filipenses 3.10
{
  id: "fp3.10",
  referencia: "Fp 3.10",
  local: "Roma / Itália (Itália)",
  paisAtual: "Itália",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~60-62 d.C.",
  antes: "Paulo está preso em Roma, escrevendo aos filipenses. Ele contrasta sua antiga confiança na carne (como fariseu) com sua nova confiança em Cristo. Ele expressa o desejo de conhecer Cristo intimamente, mesmo que isso signifique participar de Seus sofrimentos.",
  versiculo: "✅ Para o conhecer, e o poder da sua ressurreição, e a comunicação das suas aflições, sendo feito conformável com a sua morte.",
  depois: "Paulo conclui que ele busca a justiça que vem pela fé, e o conhecimento de Cristo é o objetivo supremo de sua vida. Ele não considera que já tenha alcançado, mas prossegue para o alvo, que é o prêmio da soberana vocação de Deus em Cristo Jesus.",
  tags: "conhecer / Cristo / sofrimento / ressurreição",
  assuntos: ["roma", "paulo", "conhecimento-cristo", "sofrimento", "ressurreicao"]
},
// ============================================
// CONTEXTOS BÍBLICOS GENÉRICOS - CONTINUAÇÃO
// ============================================

// 285. 1 Coríntios 12.4-11
{
  id: "1co12.4-11",
  referencia: "1 Co 12.4-11",
  local: "Éfeso / Ásia Menor (Turquia)",
  paisAtual: "Turquia",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~55-56 d.C.",
  antes: "Paulo está tratando dos dons espirituais e da ordem no culto. Ele explica que há diversidade de dons, ministérios e operações, mas o mesmo Deus opera tudo. Ele enfatiza que a manifestação do Espírito é dada para o bem comum.",
  versiculo: "📖 1 Co 12.4-11: Ora, há diversidade de dons, mas o Espírito é o mesmo. E há diversidade de ministérios, mas o Senhor é o mesmo. E há diversidade de operações, mas é o mesmo Deus que opera tudo em todos. Mas a manifestação do Espírito é dada a cada um para o que for útil. Porque a um é dada pelo Espírito a palavra da sabedoria; a outro, pelo mesmo Espírito, a palavra da ciência; a outro, pelo mesmo Espírito, a fé; a outro, pelo mesmo Espírito, os dons de curar; a outro, a operação de maravilhas; a outro, a profecia; a outro, o dom de discernir os espíritos; a outro, a variedade de línguas; e a outro, a interpretação das línguas. Mas um só e o mesmo Espírito opera todas estas coisas, repartindo particularmente a cada um como quer.",
  depois: "Paulo continua ensinando sobre a unidade do corpo de Cristo, mostrando que todos os membros são necessários e que Deus organizou o corpo conforme Sua vontade. Ele introduz a metáfora do corpo com muitos membros, cada um com função específica.",
  tags: "dons / Espírito Santo / discernimento / ministérios",
  assuntos: ["efeso", "paulo", "dons-espirituais", "discernimento-de-espiritos", "unidade-da-igreja"]
},

// 286. 1 Coríntios 9.19-22
{
  id: "1co9.19-22",
  referencia: "1 Co 9.19-22",
  local: "Éfeso / Ásia Menor (Turquia)",
  paisAtual: "Turquia",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~55-56 d.C.",
  antes: "Paulo está defendendo seu apostolado e seu direito de receber sustento do evangelho. Ele mostra que renunciou voluntariamente a esse direito para não criar obstáculo ao evangelho. Ele argumenta que os que pregam o evangelho devem viver do evangelho.",
  versiculo: "📖 1 Co 9.19-22: Pois, sendo livre para com todos, fiz-me servo de todos para ganhar ainda mais. E fiz-me como judeu para os judeus, para ganhar os judeus; para os que estão debaixo da lei, como se estivesse debaixo da lei, para ganhar os que estão debaixo da lei; para os que estão sem lei, como se estivesse sem lei, para ganhar os que estão sem lei; fiz-me como fraco para os fracos, para ganhar os fracos. Fiz-me tudo para todos, para, por todos os meios, chegar a salvar alguns.",
  depois: "Paulo explica que tudo isso faz por amor ao evangelho, para ser participante dele. Ele usa a analogia dos atletas que se disciplinam para vencer uma corrida, mostrando que ele mesmo se disciplina para não ser desqualificado.",
  tags: "liberdade / servo / evangelho / adaptação",
  assuntos: ["efeso", "paulo", "evangelho", "adaptacao", "missao"]
},

// 287. 1 João 1.7
{
  id: "1jo1.7",
  referencia: "1 Jo 1.7",
  local: "Éfeso / Ásia Menor (Turquia)",
  paisAtual: "Turquia",
  lider: "Domiciano",
  liderReinado: "81-96 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~85-95 d.C.",
  antes: "João escreve sobre Deus que é luz e a comunhão com Ele. Ele afirma que Deus é luz e não há trevas nele. Aqueles que dizem ter comunhão com Ele e andam em trevas mentem.",
  versiculo: "✅ Mas, se andarmos na luz, como ele na luz está, temos comunhão uns com os outros, e o sangue de Jesus Cristo, seu Filho, nos purifica de todo o pecado.",
  depois: "João continua explicando que se confessarmos os nossos pecados, Deus é fiel e justo para nos perdoar e nos purificar de toda injustiça. Mas se dizermos que não pecamos, fazemos de Deus mentiroso e a Sua palavra não está em nós.",
  tags: "luz / comunhão / sangue / purificação / pecado",
  assuntos: ["efeso", "joao", "comunhao", "purificacao", "luz"]
},

// 288. 1 João 4.1
{
  id: "1jo4.1",
  referencia: "1 Jo 4.1",
  local: "Éfeso / Ásia Menor (Turquia)",
  paisAtual: "Turquia",
  lider: "Domiciano",
  liderReinado: "81-96 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~85-95 d.C.",
  antes: "João acaba de falar sobre a certeza da comunhão com Deus e a necessidade de crer no nome de Jesus. Ele trata do amor como evidência da filiação divina.",
  versiculo: "✅ Amados, não creiais a todo espírito, mas provai se os espíritos são de Deus, porque muitos falsos profetas têm saído pelo mundo.",
  depois: "João continua explicando o critério para discernir os espíritos: todo espírito que confessa que Jesus Cristo veio em carne é de Deus; e todo espírito que não confessa isso não é de Deus. Ele identifica isso como o espírito do anticristo.",
  tags: "espíritos / provar / discernimento / falsos profetas",
  assuntos: ["efeso", "joao", "discernimento-de-espiritos", "falsos-profetas", "anticristo"]
},

// 289. 1 Tessalonicenses 5.21
{
  id: "1ts5.21",
  referencia: "1 Ts 5.21",
  local: "Tessalônica / Macedônia (Grécia)",
  paisAtual: "Grécia",
  lider: "Cláudio",
  liderReinado: "41-54 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~50-51 d.C.",
  antes: "Paulo está concluindo sua primeira carta aos tessalonicenses com exortações práticas. Ele lista uma série de instruções curtas sobre vida cristã, incluindo alegrar-se sempre, orar sem cessar, dar graças em tudo, e não apagar o Espírito, nem desprezar as profecias.",
  versiculo: "✅ Examinai tudo; retende o bem.",
  depois: "Paulo conclui a exortação com a instrução: 'Abstende-vos de toda forma de mal'. Ele então ora pela santificação completa dos tessalonicenses, pedindo que Deus os preserve irrepreensíveis.",
  tags: "examinar / reter / bem / discernimento",
  assuntos: ["tessalonica", "paulo", "discernimento", "examinar", "bem"]
},

// 290. 2 João 9-11
{
  id: "2jo9-11",
  referencia: "2 Jo 9-11",
  local: "Éfeso / Ásia Menor (Turquia)",
  paisAtual: "Turquia",
  lider: "Domiciano",
  liderReinado: "81-96 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~85-95 d.C.",
  antes: "João escreve à senhora eleita e seus filhos, exortando-os a andarem em amor e obediência. Ele alerta sobre os enganadores que não confessam Jesus Cristo vindo em carne.",
  versiculo: "✅ Todo aquele que prevarica e não permanece na doutrina de Cristo não tem a Deus. Quem permanece na doutrina de Cristo, esse tem tanto o Pai como o Filho. Se alguém vem ter convosco e não traz esta doutrina, não o recebais em casa, nem tampouco o saudeis. Porque quem o saúda participa das suas más obras.",
  depois: "João indica que tem muitas coisas para escrever, mas prefere falar pessoalmente para que a alegria seja completa. Ele envia saudações dos filhos da irmã eleita.",
  tags: "doutrina / Cristo / receber / saudar / enganadores",
  assuntos: ["efeso", "joao", "doutrina-de-cristo", "falsos-mestres", "participacao"]
},

// 291. Hebreus 5.14
{
  id: "hb5.14",
  referencia: "Hb 5.14",
  local: "Roma / Itália (Itália)",
  paisAtual: "Itália",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~60-65 d.C.",
  antes: "O autor está discutindo o sacerdócio de Cristo e contrastando-o com o sacerdócio levítico. Ele critica os destinatários por ainda precisarem de leite e não de alimento sólido, mostrando que não estão maduros o suficiente para o ensino mais profundo.",
  versiculo: "✅ Mas o mantimento sólido é para os perfeitos, os quais, em razão do costume, têm os sentidos exercitados para discernir tanto o bem como o mal.",
  depois: "O autor continua argumentando que, após essa exortação, ele prosseguirá para temas mais profundos sobre o sacerdócio de Cristo, especificamente sobre a ordem de Melquisedeque, que é um assunto difícil de explicar.",
  tags: "alimento sólido / perfeitos / sentidos / exercitados / discernir / bem / mal",
  assuntos: ["roma", "autor-hebreus", "maturidade", "discernimento", "bem-mal"]
},

// 292. João 7.24
{
  id: "jo7.24",
  referencia: "Jo 7.24",
  local: "Jerusalém / Judeia (Israel)",
  paisAtual: "Israel",
  lider: "Tibério",
  liderReinado: "14-37 d.C.",
  periodo: "Período Romano",
  periodoDatas: "63 a.C. - 70 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~29-30 d.C.",
  antes: "Jesus está em Jerusalém durante a Festa dos Tabernáculos. Ele havia curado um homem no sábado, e os judeus estavam questionando se isso era lícito. Jesus responde a essa acusação, defendendo a obra que o Pai Lhe deu para fazer.",
  versiculo: "✅ Não julgueis segundo a aparência, mas julgai segundo a reta justiça.",
  depois: "Alguns dos habitantes de Jerusalém começam a especular sobre se Jesus seria o Cristo. A multidão está dividida sobre Ele, e alguns querem prendê-lo, mas ninguém o toca porque sua hora ainda não havia chegado.",
  tags: "aparência / julgar / reta justiça / discernimento",
  assuntos: ["jerusalem", "jesus", "julgamento", "justica", "discernimento"]
},

// 293. João 10.1-5
{
  id: "jo10.1-5",
  referencia: "Jo 10.1-5",
  local: "Jerusalém / Judeia (Israel)",
  paisAtual: "Israel",
  lider: "Tibério",
  liderReinado: "14-37 d.C.",
  periodo: "Período Romano",
  periodoDatas: "63 a.C. - 70 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~29-30 d.C.",
  antes: "Jesus acabara de curar um cego de nascença e confrontar os fariseus sobre a cegueira espiritual. Ele agora usa a metáfora do pastor e das ovelhas para ilustrar a relação entre Ele e Seus seguidores.",
  versiculo: "📖 Jo 10.1-5: Em verdade, em verdade vos digo que aquele que não entra pela porta no curral das ovelhas, mas sobe por outra parte, é ladrão e salteador. Mas aquele que entra pela porta é o pastor das ovelhas. A este o porteiro abre, e as ovelhas ouvem a sua voz, e ele chama pelo nome as suas ovelhas e as traz para fora. E, quando tira as suas ovelhas, vai adiante delas, e as ovelhas o seguem, porque conhecem a sua voz. Mas de modo nenhum seguirão o estranho, antes fugirão dele, porque não conhecem a voz dos estranhos.",
  depois: "Jesus explica que Ele é a porta das ovelhas e que todo aquele que entrar por Ele será salvo. Ele contrasta com os ladrões e salteadores que vieram antes, e afirma que veio para que as ovelhas tenham vida em abundância.",
  tags: "pastor / ovelhas / voz / porteiro / ladrão / salteador",
  assuntos: ["jerusalem", "jesus", "pastor", "ovelhas", "discernimento-de-voz"]
},

// 294. João 16.13
{
  id: "jo16.13",
  referencia: "Jo 16.13",
  local: "Jerusalém / Judeia (Israel)",
  paisAtual: "Israel",
  lider: "Tibério",
  liderReinado: "14-37 d.C.",
  periodo: "Período Romano",
  periodoDatas: "63 a.C. - 70 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~29-30 d.C.",
  antes: "Jesus está em seu discurso de despedida com os discípulos na véspera de sua crucificação. Ele lhes prometeu o Consolador, o Espírito Santo, e agora explica com mais detalhes o papel que o Espírito desempenharia após Sua partida.",
  versiculo: "✅ Mas, quando vier aquele Espírito de verdade, ele vos guiará em toda a verdade; porque não falará de si mesmo, mas dirá tudo o que tiver ouvido, e vos anunciará o que há de vir.",
  depois: "Jesus continua falando sobre o Espírito Santo: 'Ele me glorificará, porque há de receber do que é meu, e vo-lo há de anunciar. Tudo quanto o Pai tem é meu; por isso eu disse que ele há de receber do que é meu e vo-lo há de anunciar'.",
  tags: "Espírito Santo / verdade / guiar / anunciar",
  assuntos: ["jerusalem", "jesus", "espirito-santo", "verdade", "guia"]
},

// 295. Jeremias 17.9
{
  id: "jr17.9",
  referencia: "Jr 17.9",
  local: "Jerusalém / Judá (Israel)",
  paisAtual: "Israel",
  lider: "Jeoaquim",
  liderReinado: "609-598 a.C.",
  periodo: "Reino de Judá",
  periodoDatas: "930-586 a.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~608-605 a.C.",
  antes: "Jeremias está profetizando durante o reinado de Jeoaquim. Ele denuncia o pecado de Judá e a confiança do povo em alianças humanas em vez de confiar no Senhor. O capítulo 17 é uma coleção de advertências sobre a maldição da confiança no homem.",
  versiculo: "✅ Enganoso é o coração, mais do que todas as coisas, e perverso; quem o conhecerá?",
  depois: "Jeremias declara que Deus sonda o coração e prova os rins, para dar a cada um segundo os seus caminhos e segundo o fruto das suas obras. Ele contrasta o homem que confia no Senhor com aquele que confia no homem, mostrando a bênção de confiar em Deus.",
  tags: "coração / enganoso / perverso / conhecer / discipulado",
  assuntos: ["jerusalem", "jeremias", "coracao", "enganoso", "discernimento-de-coracao"]
},

// 296. Lucas 6.11
{
  id: "lc6.11",
  referencia: "Lc 6.11",
  local: "Cafarnaum / Galileia (Israel)",
  paisAtual: "Israel",
  lider: "Tibério",
  liderReinado: "14-37 d.C.",
  periodo: "Período Romano",
  periodoDatas: "63 a.C. - 70 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~28-29 d.C.",
  antes: "Jesus está na sinagoga em dia de sábado e encontra um homem com a mão direita atrofiada. Os escribas e fariseus observam para ver se Ele o curaria no sábado, procurando motivo para acusá-lo.",
  versiculo: "✅ Eles, porém, se encheram de ira e conferenciaram uns com os outros sobre o que fariam a Jesus.",
  depois: "Jesus escolhe doze apóstolos entre seus discípulos. Ele desce a um lugar plano, onde uma grande multidão vêm ouvi-lo e ser curada. É quando Ele profere o ensino conhecido como 'Sermão da Planície'.",
  tags: "ira / conferenciar / Jesus / fariseus / sábado",
  assuntos: ["cafarnaum", "jesus", "fariseus", "ira", "conspiracao"]
},

// 297. Lucas 8.18
{
  id: "lc8.18",
  referencia: "Lc 8.18",
  local: "Galileia (Israel)",
  paisAtual: "Israel",
  lider: "Tibério",
  liderReinado: "14-37 d.C.",
  periodo: "Período Romano",
  periodoDatas: "63 a.C. - 70 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~28-29 d.C.",
  antes: "Jesus acabara de contar a parábola do semeador e explicá-la aos discípulos. Ele os adverte sobre como ouvir, pois a palavra de Deus é como uma semente que precisa ser recebida com cuidado.",
  versiculo: "✅ Vede, pois, como ouvis; porque a qualquer que tiver, ser-lhe-á dado, e a qualquer que não tiver, até o que parece ter ser-lhe-á tirado.",
  depois: "A mãe e os irmãos de Jesus vêm vê-lo, mas não podem alcançá-lo por causa da multidão. Jesus aproveita a ocasião para ensinar sobre quem são sua mãe e seus irmãos - aqueles que ouvem a palavra de Deus e a praticam.",
  tags: "ouvir / atentar / guardar / praticar",
  assuntos: ["galileia", "jesus", "ouvir", "discipulado", "praticar"]
},

// 298. Marcos 4.24
{
  id: "mc4.24",
  referencia: "Mc 4.24",
  local: "Galileia (Israel)",
  paisAtual: "Israel",
  lider: "Tibério",
  liderReinado: "14-37 d.C.",
  periodo: "Período Romano",
  periodoDatas: "63 a.C. - 70 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~28-29 d.C.",
  antes: "Jesus está ensinando à beira-mar, usando parábolas para transmitir verdades espirituais. Ele acabara de contar a parábola do semeador e a explicação sobre o propósito das parábolas.",
  versiculo: "✅ E dizia-lhes: Atentai para o que ouvis. Com a medida com que medirdes vos medirão a vós, e ainda se vos acrescentará.",
  depois: "Jesus continua com a parábola da semente que cresce automaticamente, mostrando como o reino de Deus se desenvolve misteriosamente. Ele segue com a parábola do grão de mostarda, ilustrando a pequenez do começo do reino e seu grande crescimento final.",
  tags: "atentar / ouvir / medir / acrescentar",
  assuntos: ["galileia", "jesus", "ouvir", "medida", "discipulado"]
},

// 299. Marcos 8.15
{
  id: "mc8.15",
  referencia: "Mc 8.15",
  local: "Dalmanuta / Galileia (Israel)",
  paisAtual: "Israel",
  lider: "Tibério",
  liderReinado: "14-37 d.C.",
  periodo: "Período Romano",
  periodoDatas: "63 a.C. - 70 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~29-30 d.C.",
  antes: "Jesus acabara de alimentar quatro mil pessoas com sete pães e alguns peixes. Os fariseus haviam pedido um sinal do céu, e Jesus os repreendeu. Os discípulos então se esquecem de levar pão e têm apenas um pão no barco.",
  versiculo: "✅ E Jesus lhes advertiu, dizendo: Olhai, guardai-vos do fermento dos fariseus e do fermento de Herodes.",
  depois: "Os discípulos confundem a advertência com a falta de pão. Jesus os repreende por não entenderem o significado dos milagres que Ele realizou. Ele cura um cego em Betsaida, e depois pergunta aos discípulos quem eles dizem que Ele é - momento da confissão de Pedro.",
  tags: "fermento / fariseus / Herodes / guardar-se",
  assuntos: ["dalmanuta", "jesus", "fermento", "fariseus", "herodes"]
},

// 300. Marcos 13.5
{
  id: "mc13.5",
  referencia: "Mc 13.5",
  local: "Monte das Oliveiras / Jerusalém (Israel)",
  paisAtual: "Israel",
  lider: "Tibério",
  liderReinado: "14-37 d.C.",
  periodo: "Período Romano",
  periodoDatas: "63 a.C. - 70 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~29-30 d.C.",
  antes: "Jesus acabara de profetizar a destruição do templo. Ao sair do templo, seus discípulos lhe mostram as grandiosas pedras da construção, e Jesus prediz que todas seriam derrubadas. O cenário é o Monte das Oliveiras.",
  versiculo: "✅ E Jesus, respondendo, começou a dizer-lhes: Vede que ninguém vos engane.",
  depois: "Jesus continua o discurso profético sobre os sinais do fim, mencionando guerras, terremotos, fomes e perseguições. Ele adverte sobre falsos cristos e falsos profetas, e fala sobre a necessidade de perseverança até o fim.",
  tags: "enganar / falso / cristo / guerras / perseguição",
  assuntos: ["monte-das-oliveiras", "jesus", "falsos-cristos", "sinais", "perseveranca"]
},

// 301. Marcos 13.23
{
  id: "mc13.23",
  referencia: "Mc 13.23",
  local: "Monte das Oliveiras / Jerusalém (Israel)",
  paisAtual: "Israel",
  lider: "Tibério",
  liderReinado: "14-37 d.C.",
  periodo: "Período Romano",
  periodoDatas: "63 a.C. - 70 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~29-30 d.C.",
  antes: "Jesus continua seu discurso profético no Monte das Oliveiras, advertindo sobre os sinais do fim, as perseguições e o cuidado com os falsos cristos e falsos profetas que farão sinais e prodígios para enganar.",
  versiculo: "✅ Vós, pois, guardai-vos; eis que tudo vos tenho predito.",
  depois: "Jesus fala sobre a vinda do Filho do Homem com grande poder e glória. Ele usa a parábola da figueira para mostrar que, quando virem essas coisas, saberão que o tempo está próximo. Ele conclui enfatizando que suas palavras não passarão, e que ninguém sabe o dia nem a hora, apenas o Pai.",
  tags: "guardar / predito / sinais / falsos / profetas",
  assuntos: ["monte-das-oliveiras", "jesus", "sinais", "falsos-profetas", "predicao"]
},

// 302. Mateus 7.15
{
  id: "mt7.15",
  referencia: "Mt 7.15",
  local: "Galileia (Israel)",
  paisAtual: "Israel",
  lider: "Tibério",
  liderReinado: "14-37 d.C.",
  periodo: "Período Romano",
  periodoDatas: "63 a.C. - 70 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~28-29 d.C.",
  antes: "Jesus está pregando o Sermão do Monte, ensinando sobre o reino de Deus e as bem-aventuranças. Ele acabara de falar sobre a porta estreita e o caminho apertado que conduzem à vida.",
  versiculo: "✅ Acautelai-vos dos falsos profetas, que vêm a vós vestidos como ovelhas, mas interiormente são lobos devoradores.",
  depois: "Jesus continua ensinando que os falsos profetas serão conhecidos pelos seus frutos. Ele usa o exemplo de que uma árvore boa não dá frutos maus, e uma árvore má não dá frutos bons. Ele conclui que nem todo aquele que diz 'Senhor, Senhor' entrará no reino dos céus, mas aquele que faz a vontade do Pai.",
  tags: "falsos profetas / ovelhas / lobos / frutos",
  assuntos: ["galileia", "jesus", "falsos-profetas", "discernimento", "frutos"]
},

// 303. Mateus 24.4
{
  id: "mt24.4",
  referencia: "Mt 24.4",
  local: "Monte das Oliveiras / Jerusalém (Israel)",
  paisAtual: "Israel",
  lider: "Tibério",
  liderReinado: "14-37 d.C.",
  periodo: "Período Romano",
  periodoDatas: "63 a.C. - 70 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~29-30 d.C.",
  antes: "Jesus saiu do templo, e seus discípulos lhe mostram as construções do templo. Jesus profetiza que não ficará pedra sobre pedra. No Monte das Oliveiras, os discípulos perguntam sobre o sinal de sua vinda e do fim do mundo.",
  versiculo: "✅ E Jesus, respondendo, disse-lhes: Acautelai-vos, que ninguém vos engane.",
  depois: "Jesus continua explicando que muitos virão em seu nome dizendo 'Eu sou o Cristo', e enganarão a muitos. Ele fala sobre guerras, rumores de guerras, fomes, terremotos, e a necessidade de perseverança até o fim.",
  tags: "enganar / falso / Cristo / sinais / guerras",
  assuntos: ["monte-das-oliveiras", "jesus", "enganos", "sinais", "falsos-cristos"]
},

// 304. Mateus 24.24
{
  id: "mt24.24",
  referencia: "Mt 24.24",
  local: "Monte das Oliveiras / Jerusalém (Israel)",
  paisAtual: "Israel",
  lider: "Tibério",
  liderReinado: "14-37 d.C.",
  periodo: "Período Romano",
  periodoDatas: "63 a.C. - 70 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~29-30 d.C.",
  antes: "Jesus está no Monte das Oliveiras, continuando seu discurso profético sobre os sinais do fim. Ele já havia falado sobre guerras e perseguições, e agora alerta especificamente sobre falsos cristos e falsos profetas.",
  versiculo: "✅ Porque surgirão falsos cristos e falsos profetas, e farão tão grandes sinais e prodígios que, se possível fora, enganariam até os escolhidos.",
  depois: "Jesus adverte os discípulos: 'Eis que eu vo-lo tenho dito. Portanto, se alguém vos disser: Eis que o Cristo está no deserto, não saiais; ou: Ei-lo no interior da casa, não acrediteis.' Ele enfatiza que a vinda do Filho do Homem será como o relâmpago, visível a todos.",
  tags: "falsos cristos / falsos profetas / sinais / prodígios / engano",
  assuntos: ["monte-das-oliveiras", "jesus", "falsos-cristos", "falsos-profetas", "sinais-e-prodigios"]
},

// 305. Salmos 119.18
{
  id: "sl119.18",
  referencia: "Sl 119.18",
  local: "Israel / Judá (Israel)",
  paisAtual: "Israel",
  lider: "Diversos reis de Judá",
  liderReinado: "",
  periodo: "Período dos Salmos",
  periodoDatas: "~1000-400 a.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~1000-400 a.C.",
  antes: "O salmo 119 é uma meditação sobre a Lei do Senhor. O versículo 17 é uma oração pedindo que Deus trate com bondade e preserve a vida do salmista, para que ele possa guardar a palavra.",
  versiculo: "✅ Abre os meus olhos, para que veja as maravilhas da tua lei.",
  depois: "O salmista continua pedindo entendimento: 'Sou peregrino na terra; não escondas de mim os teus mandamentos. A minha alma está consumida de desejar a todo tempo os teus juízos.' Ele expressa anseio pela sabedoria divina.",
  tags: "olhos / ver / maravilhas / lei / entendimento",
  assuntos: ["israel", "salmista", "lei-de-deus", "entendimento", "discernimento"]
},

// 306. Tiago 1.5
{
  id: "tg1.5",
  referencia: "Tg 1.5",
  local: "Jerusalém / Judeia (Israel)",
  paisAtual: "Israel",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~45-50 d.C.",
  antes: "Tiago inicia sua carta com exortações sobre a alegria nas provações, pois a prova da fé produz perseverança. Ele explica que a perseverança deve ter ação completa para que o crente seja perfeito e completo.",
  versiculo: "✅ E, se algum de vós tem falta de sabedoria, peça-a a Deus, que a todos dá liberalmente e não o lança em rosto; e ser-lhe-á dada.",
  depois: "Tiago explica que se deve pedir com fé, sem duvidar, porque aquele que duvida é como a onda do mar, levada pelo vento. Ele adverte que o homem que duvida não deve pensar que receberá algo do Senhor.",
  tags: "sabedoria / pedir / Deus / liberalmente / fé",
  assuntos: ["jerusalem", "tiago", "sabedoria", "oração", "fé"]
},

// 307. Tiago 1.22
{
  id: "tg1.22",
  referencia: "Tg 1.22",
  local: "Jerusalém / Judeia (Israel)",
  paisAtual: "Israel",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~45-50 d.C.",
  antes: "Tiago acaba de falar sobre ouvir a palavra e recebê-la com mansidão. Ele alerta para não apenas ouvir a palavra, mas praticá-la, e que a ira do homem não produz a justiça de Deus.",
  versiculo: "✅ E sede cumpridores da palavra, e não somente ouvintes, enganando-vos a vós mesmos.",
  depois: "Tiago usa a ilustração de um homem que se olha no espelho e, ao se retirar, esquece sua aparência. Ele contrasta isso com aquele que olha atentamente para a lei perfeita da liberdade e nela persevera, sendo abençoado em suas obras.",
  tags: "cumpridores / ouvintes / enganar / praticar",
  assuntos: ["jerusalem", "tiago", "praticar", "ouvir", "enganar"]
},

// 308. Tiago 1.27
{
  id: "tg1.27",
  referencia: "Tg 1.27",
  local: "Jerusalém / Judeia (Israel)",
  paisAtual: "Israel",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~45-50 d.C.",
  antes: "Tiago está concluindo seus ensinamentos sobre a prática da palavra. Ele já havia falado sobre a necessidade de conter a língua, visitar órfãos e viúvas, e manter-se incontaminado pelo mundo.",
  versiculo: "✅ A religião pura e imaculada para com Deus, o Pai, é esta: Visitar os órfãos e as viúvas nas suas tribulações, e guardar-se incontaminado do mundo.",
  depois: "Tiago continua no capítulo 2 alertando contra a acepção de pessoas, mostrando que a fé sem obras é morta. Ele usa o exemplo de que a fé deve ser demonstrada em ações concretas de amor e misericórdia.",
  tags: "religião pura / órfãos / viúvas / incontaminado / mundo",
  assuntos: ["jerusalem", "tiago", "religiao-pura", "assistencia", "pureza"]
},
// 309. Hebreus 5.14
{
  id: "hb5.14",
  referencia: "Hb 5.14",
  local: "Roma / Itália (Itália)",
  paisAtual: "Itália",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~60-65 d.C.",
  antes: "O autor está discutindo o sacerdócio de Cristo e contrastando-o com o sacerdócio levítico. Ele critica os destinatários por ainda precisarem de leite e não de alimento sólido, mostrando que não estão maduros o suficiente para o ensino mais profundo.",
  versiculo: "✅ Mas o mantimento sólido é para os perfeitos, os quais, em razão do costume, têm os sentidos exercitados para discernir tanto o bem como o mal.",
  depois: "O autor continua argumentando que, após essa exortação, ele prosseguirá para temas mais profundos sobre o sacerdócio de Cristo, especificamente sobre a ordem de Melquisedeque, que é um assunto difícil de explicar.",
  tags: "alimento sólido / perfeitos / sentidos / exercitados / discernir / bem / mal",
  assuntos: ["roma", "autor-hebreus", "maturidade", "discernimento", "bem-mal"]
},

// 310. 1 João 4.1
{
  id: "1jo4.1",
  referencia: "1 Jo 4.1",
  local: "Éfeso / Ásia Menor (Turquia)",
  paisAtual: "Turquia",
  lider: "Domiciano",
  liderReinado: "81-96 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~85-95 d.C.",
  antes: "João acaba de falar sobre a certeza da comunhão com Deus e a necessidade de crer no nome de Jesus. Ele trata do amor como evidência da filiação divina.",
  versiculo: "✅ Amados, não creiais a todo espírito, mas provai se os espíritos são de Deus, porque muitos falsos profetas têm saído pelo mundo.",
  depois: "João continua explicando o critério para discernir os espíritos: todo espírito que confessa que Jesus Cristo veio em carne é de Deus; e todo espírito que não confessa isso não é de Deus. Ele identifica isso como o espírito do anticristo.",
  tags: "espíritos / provar / discernimento / falsos profetas",
  assuntos: ["efeso", "joao", "discernimento-de-espiritos", "falsos-profetas", "anticristo"]
},

// 311. Mateus 24.24
{
  id: "mt24.24",
  referencia: "Mt 24.24",
  local: "Monte das Oliveiras / Jerusalém (Israel)",
  paisAtual: "Israel",
  lider: "Tibério",
  liderReinado: "14-37 d.C.",
  periodo: "Período Romano",
  periodoDatas: "63 a.C. - 70 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~29-30 d.C.",
  antes: "Jesus está no Monte das Oliveiras, continuando seu discurso profético sobre os sinais do fim. Ele já havia falado sobre guerras e perseguições, e agora alerta especificamente sobre falsos cristos e falsos profetas.",
  versiculo: "✅ Porque surgirão falsos cristos e falsos profetas, e farão tão grandes sinais e prodígios que, se possível fora, enganariam até os escolhidos.",
  depois: "Jesus adverte os discípulos: 'Eis que eu vo-lo tenho dito. Portanto, se alguém vos disser: Eis que o Cristo está no deserto, não saiais; ou: Ei-lo no interior da casa, não acrediteis.' Ele enfatiza que a vinda do Filho do Homem será como o relâmpago, visível a todos.",
  tags: "falsos cristos / falsos profetas / sinais / prodígios / engano",
  assuntos: ["monte-das-oliveiras", "jesus", "falsos-cristos", "falsos-profetas", "sinais-e-prodigios"]
},

// 312. João 7.24
{
  id: "jo7.24",
  referencia: "Jo 7.24",
  local: "Jerusalém / Judeia (Israel)",
  paisAtual: "Israel",
  lider: "Tibério",
  liderReinado: "14-37 d.C.",
  periodo: "Período Romano",
  periodoDatas: "63 a.C. - 70 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~29-30 d.C.",
  antes: "Jesus está em Jerusalém durante a Festa dos Tabernáculos. Ele havia curado um homem no sábado, e os judeus estavam questionando se isso era lícito. Jesus responde a essa acusação, defendendo a obra que o Pai Lhe deu para fazer.",
  versiculo: "✅ Não julgueis segundo a aparência, mas julgai segundo a reta justiça.",
  depois: "Alguns dos habitantes de Jerusalém começam a especular sobre se Jesus seria o Cristo. A multidão está dividida sobre Ele, e alguns querem prendê-lo, mas ninguém o toca porque sua hora ainda não havia chegado.",
  tags: "aparência / julgar / reta justiça / discernimento",
  assuntos: ["jerusalem", "jesus", "julgamento", "justica", "discernimento"]
},

// 313. João 16.13
{
  id: "jo16.13",
  referencia: "Jo 16.13",
  local: "Jerusalém / Judeia (Israel)",
  paisAtual: "Israel",
  lider: "Tibério",
  liderReinado: "14-37 d.C.",
  periodo: "Período Romano",
  periodoDatas: "63 a.C. - 70 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~29-30 d.C.",
  antes: "Jesus está em seu discurso de despedida com os discípulos na véspera de sua crucificação. Ele lhes prometeu o Consolador, o Espírito Santo, e agora explica com mais detalhes o papel que o Espírito desempenharia após Sua partida.",
  versiculo: "✅ Mas, quando vier aquele Espírito de verdade, ele vos guiará em toda a verdade; porque não falará de si mesmo, mas dirá tudo o que tiver ouvido, e vos anunciará o que há de vir.",
  depois: "Jesus continua falando sobre o Espírito Santo: 'Ele me glorificará, porque há de receber do que é meu, e vo-lo há de anunciar. Tudo quanto o Pai tem é meu; por isso eu disse que ele há de receber do que é meu e vo-lo há de anunciar'.",
  tags: "Espírito Santo / verdade / guiar / anunciar",
  assuntos: ["jerusalem", "jesus", "espirito-santo", "verdade", "guia"]
},

// 314. Tiago 1.5
{
  id: "tg1.5",
  referencia: "Tg 1.5",
  local: "Jerusalém / Judeia (Israel)",
  paisAtual: "Israel",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~45-50 d.C.",
  antes: "Tiago inicia sua carta com exortações sobre a alegria nas provações, pois a prova da fé produz perseverança. Ele explica que a perseverança deve ter ação completa para que o crente seja perfeito e completo.",
  versiculo: "✅ E, se algum de vós tem falta de sabedoria, peça-a a Deus, que a todos dá liberalmente e não o lança em rosto; e ser-lhe-á dada.",
  depois: "Tiago explica que se deve pedir com fé, sem duvidar, porque aquele que duvida é como a onda do mar, levada pelo vento. Ele adverte que o homem que duvida não deve pensar que receberá algo do Senhor.",
  tags: "sabedoria / pedir / Deus / liberalmente / fé",
  assuntos: ["jerusalem", "tiago", "sabedoria", "oração", "fé"]
},

// 315. 1 Tessalonicenses 5.21
{
  id: "1ts5.21",
  referencia: "1 Ts 5.21",
  local: "Tessalônica / Macedônia (Grécia)",
  paisAtual: "Grécia",
  lider: "Cláudio",
  liderReinado: "41-54 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~50-51 d.C.",
  antes: "Paulo está concluindo sua primeira carta aos tessalonicenses com exortações práticas. Ele lista uma série de instruções curtas sobre vida cristã, incluindo alegrar-se sempre, orar sem cessar, dar graças em tudo, e não apagar o Espírito, nem desprezar as profecias.",
  versiculo: "✅ Examinai tudo; retende o bem.",
  depois: "Paulo conclui a exortação com a instrução: 'Abstende-vos de toda forma de mal'. Ele então ora pela santificação completa dos tessalonicenses, pedindo que Deus os preserve irrepreensíveis.",
  tags: "examinar / reter / bem / discernimento",
  assuntos: ["tessalonica", "paulo", "discernimento", "examinar", "bem"]
},

// 316. 1 Coríntios 12.4-11
{
  id: "1co12.4-11",
  referencia: "1 Co 12.4-11",
  local: "Éfeso / Ásia Menor (Turquia)",
  paisAtual: "Turquia",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~55-56 d.C.",
  antes: "Paulo está tratando dos dons espirituais e da ordem no culto. Ele explica que há diversidade de dons, ministérios e operações, mas o mesmo Deus opera tudo. Ele enfatiza que a manifestação do Espírito é dada para o bem comum.",
  versiculo: "📖 1 Co 12.4-11: Ora, há diversidade de dons, mas o Espírito é o mesmo. E há diversidade de ministérios, mas o Senhor é o mesmo. E há diversidade de operações, mas é o mesmo Deus que opera tudo em todos. Mas a manifestação do Espírito é dada a cada um para o que for útil. Porque a um é dada pelo Espírito a palavra da sabedoria; a outro, pelo mesmo Espírito, a palavra da ciência; a outro, pelo mesmo Espírito, a fé; a outro, pelo mesmo Espírito, os dons de curar; a outro, a operação de maravilhas; a outro, a profecia; a outro, o dom de discernir os espíritos; a outro, a variedade de línguas; e a outro, a interpretação das línguas. Mas um só e o mesmo Espírito opera todas estas coisas, repartindo particularmente a cada um como quer.",
  depois: "Paulo continua ensinando sobre a unidade do corpo de Cristo, mostrando que todos os membros são necessários e que Deus organizou o corpo conforme Sua vontade. Ele introduz a metáfora do corpo com muitos membros, cada um com função específica.",
  tags: "dons / Espírito Santo / discernimento / ministérios",
  assuntos: ["efeso", "paulo", "dons-espirituais", "discernimento-de-espiritos", "unidade-da-igreja"]
},

// 317. Mateus 7.15
{
  id: "mt7.15",
  referencia: "Mt 7.15",
  local: "Galileia (Israel)",
  paisAtual: "Israel",
  lider: "Tibério",
  liderReinado: "14-37 d.C.",
  periodo: "Período Romano",
  periodoDatas: "63 a.C. - 70 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~28-29 d.C.",
  antes: "Jesus está pregando o Sermão do Monte, ensinando sobre o reino de Deus e as bem-aventuranças. Ele acabara de falar sobre a porta estreita e o caminho apertado que conduzem à vida.",
  versiculo: "✅ Acautelai-vos dos falsos profetas, que vêm a vós vestidos como ovelhas, mas interiormente são lobos devoradores.",
  depois: "Jesus continua ensinando que os falsos profetas serão conhecidos pelos seus frutos. Ele usa o exemplo de que uma árvore boa não dá frutos maus, e uma árvore má não dá frutos bons. Ele conclui que nem todo aquele que diz 'Senhor, Senhor' entrará no reino dos céus, mas aquele que faz a vontade do Pai.",
  tags: "falsos profetas / ovelhas / lobos / frutos",
  assuntos: ["galileia", "jesus", "falsos-profetas", "discernimento", "frutos"]
},

// 318. Marcos 4.24
{
  id: "mc4.24",
  referencia: "Mc 4.24",
  local: "Galileia (Israel)",
  paisAtual: "Israel",
  lider: "Tibério",
  liderReinado: "14-37 d.C.",
  periodo: "Período Romano",
  periodoDatas: "63 a.C. - 70 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~28-29 d.C.",
  antes: "Jesus está ensinando à beira-mar, usando parábolas para transmitir verdades espirituais. Ele acabara de contar a parábola do semeador e a explicação sobre o propósito das parábolas.",
  versiculo: "✅ E dizia-lhes: Atentai para o que ouvis. Com a medida com que medirdes vos medirão a vós, e ainda se vos acrescentará.",
  depois: "Jesus continua com a parábola da semente que cresce automaticamente, mostrando como o reino de Deus se desenvolve misteriosamente. Ele segue com a parábola do grão de mostarda, ilustrando a pequenez do começo do reino e seu grande crescimento final.",
  tags: "atentar / ouvir / medir / acrescentar",
  assuntos: ["galileia", "jesus", "ouvir", "medida", "discipulado"]
},

// 319. Marcos 8.15
{
  id: "mc8.15",
  referencia: "Mc 8.15",
  local: "Dalmanuta / Galileia (Israel)",
  paisAtual: "Israel",
  lider: "Tibério",
  liderReinado: "14-37 d.C.",
  periodo: "Período Romano",
  periodoDatas: "63 a.C. - 70 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~29-30 d.C.",
  antes: "Jesus acabara de alimentar quatro mil pessoas com sete pães e alguns peixes. Os fariseus haviam pedido um sinal do céu, e Jesus os repreendeu. Os discípulos então se esquecem de levar pão e têm apenas um pão no barco.",
  versiculo: "✅ E Jesus lhes advertiu, dizendo: Olhai, guardai-vos do fermento dos fariseus e do fermento de Herodes.",
  depois: "Os discípulos confundem a advertência com a falta de pão. Jesus os repreende por não entenderem o significado dos milagres que Ele realizou. Ele cura um cego em Betsaida, e depois pergunta aos discípulos quem eles dizem que Ele é - momento da confissão de Pedro.",
  tags: "fermento / fariseus / Herodes / guardar-se",
  assuntos: ["dalmanuta", "jesus", "fermento", "fariseus", "herodes"]
},

// 320. Mateus 24.4
{
  id: "mt24.4",
  referencia: "Mt 24.4",
  local: "Monte das Oliveiras / Jerusalém (Israel)",
  paisAtual: "Israel",
  lider: "Tibério",
  liderReinado: "14-37 d.C.",
  periodo: "Período Romano",
  periodoDatas: "63 a.C. - 70 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~29-30 d.C.",
  antes: "Jesus saiu do templo, e seus discípulos lhe mostram as construções do templo. Jesus profetiza que não ficará pedra sobre pedra. No Monte das Oliveiras, os discípulos perguntam sobre o sinal de sua vinda e do fim do mundo.",
  versiculo: "✅ E Jesus, respondendo, disse-lhes: Acautelai-vos, que ninguém vos engane.",
  depois: "Jesus continua explicando que muitos virão em seu nome dizendo 'Eu sou o Cristo', e enganarão a muitos. Ele fala sobre guerras, rumores de guerras, fomes, terremotos, e a necessidade de perseverança até o fim.",
  tags: "enganar / falso / Cristo / sinais / guerras",
  assuntos: ["monte-das-oliveiras", "jesus", "enganos", "sinais", "falsos-cristos"]
},

// 321. Marcos 13.5
{
  id: "mc13.5",
  referencia: "Mc 13.5",
  local: "Monte das Oliveiras / Jerusalém (Israel)",
  paisAtual: "Israel",
  lider: "Tibério",
  liderReinado: "14-37 d.C.",
  periodo: "Período Romano",
  periodoDatas: "63 a.C. - 70 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~29-30 d.C.",
  antes: "Jesus acabara de profetizar a destruição do templo. Ao sair do templo, seus discípulos lhe mostram as grandiosas pedras da construção, e Jesus prediz que todas seriam derrubadas. O cenário é o Monte das Oliveiras.",
  versiculo: "✅ E Jesus, respondendo, começou a dizer-lhes: Vede que ninguém vos engane.",
  depois: "Jesus continua o discurso profético sobre os sinais do fim, mencionando guerras, terremotos, fomes e perseguições. Ele adverte sobre falsos cristos e falsos profetas, e fala sobre a necessidade de perseverança até o fim.",
  tags: "enganar / falso / cristo / guerras / perseguição",
  assuntos: ["monte-das-oliveiras", "jesus", "falsos-cristos", "sinais", "perseveranca"]
},

// 322. Marcos 13.23
{
  id: "mc13.23",
  referencia: "Mc 13.23",
  local: "Monte das Oliveiras / Jerusalém (Israel)",
  paisAtual: "Israel",
  lider: "Tibério",
  liderReinado: "14-37 d.C.",
  periodo: "Período Romano",
  periodoDatas: "63 a.C. - 70 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~29-30 d.C.",
  antes: "Jesus continua seu discurso profético no Monte das Oliveiras, advertindo sobre os sinais do fim, as perseguições e o cuidado com os falsos cristos e falsos profetas que farão sinais e prodígios para enganar.",
  versiculo: "✅ Vós, pois, guardai-vos; eis que tudo vos tenho predito.",
  depois: "Jesus fala sobre a vinda do Filho do Homem com grande poder e glória. Ele usa a parábola da figueira para mostrar que, quando virem essas coisas, saberão que o tempo está próximo. Ele conclui enfatizando que suas palavras não passarão, e que ninguém sabe o dia nem a hora, apenas o Pai.",
  tags: "guardar / predito / sinais / falsos / profetas",
  assuntos: ["monte-das-oliveiras", "jesus", "sinais", "falsos-profetas", "predicao"]
},

// 323. João 10.1-5
{
  id: "jo10.1-5",
  referencia: "Jo 10.1-5",
  local: "Jerusalém / Judeia (Israel)",
  paisAtual: "Israel",
  lider: "Tibério",
  liderReinado: "14-37 d.C.",
  periodo: "Período Romano",
  periodoDatas: "63 a.C. - 70 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~29-30 d.C.",
  antes: "Jesus acabara de curar um cego de nascença e confrontar os fariseus sobre a cegueira espiritual. Ele agora usa a metáfora do pastor e das ovelhas para ilustrar a relação entre Ele e Seus seguidores.",
  versiculo: "📖 Jo 10.1-5: Em verdade, em verdade vos digo que aquele que não entra pela porta no curral das ovelhas, mas sobe por outra parte, é ladrão e salteador. Mas aquele que entra pela porta é o pastor das ovelhas. A este o porteiro abre, e as ovelhas ouvem a sua voz, e ele chama pelo nome as suas ovelhas e as traz para fora. E, quando tira as suas ovelhas, vai adiante delas, e as ovelhas o seguem, porque conhecem a sua voz. Mas de modo nenhum seguirão o estranho, antes fugirão dele, porque não conhecem a voz dos estranhos.",
  depois: "Jesus explica que Ele é a porta das ovelhas e que todo aquele que entrar por Ele será salvo. Ele contrasta com os ladrões e salteadores que vieram antes, e afirma que veio para que as ovelhas tenham vida em abundância.",
  tags: "pastor / ovelhas / voz / porteiro / ladrão / salteador",
  assuntos: ["jerusalem", "jesus", "pastor", "ovelhas", "discernimento-de-voz"]
},

// 324. 1 Coríntios 9.19-22
{
  id: "1co9.19-22",
  referencia: "1 Co 9.19-22",
  local: "Éfeso / Ásia Menor (Turquia)",
  paisAtual: "Turquia",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~55-56 d.C.",
  antes: "Paulo está defendendo seu apostolado e seu direito de receber sustento do evangelho. Ele mostra que renunciou voluntariamente a esse direito para não criar obstáculo ao evangelho. Ele argumenta que os que pregam o evangelho devem viver do evangelho.",
  versiculo: "📖 1 Co 9.19-22: Pois, sendo livre para com todos, fiz-me servo de todos para ganhar ainda mais. E fiz-me como judeu para os judeus, para ganhar os judeus; para os que estão debaixo da lei, como se estivesse debaixo da lei, para ganhar os que estão debaixo da lei; para os que estão sem lei, como se estivesse sem lei, para ganhar os que estão sem lei; fiz-me como fraco para os fracos, para ganhar os fracos. Fiz-me tudo para todos, para, por todos os meios, chegar a salvar alguns.",
  depois: "Paulo explica que tudo isso faz por amor ao evangelho, para ser participante dele. Ele usa a analogia dos atletas que se disciplinam para vencer uma corrida, mostrando que ele mesmo se disciplina para não ser desqualificado.",
  tags: "liberdade / servo / evangelho / adaptação",
  assuntos: ["efeso", "paulo", "evangelho", "adaptacao", "missao"]
},

// 325. 2 João 9-11
{
  id: "2jo9-11",
  referencia: "2 Jo 9-11",
  local: "Éfeso / Ásia Menor (Turquia)",
  paisAtual: "Turquia",
  lider: "Domiciano",
  liderReinado: "81-96 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~85-95 d.C.",
  antes: "João escreve à senhora eleita e seus filhos, exortando-os a andarem em amor e obediência. Ele alerta sobre os enganadores que não confessam Jesus Cristo vindo em carne.",
  versiculo: "✅ Todo aquele que prevarica e não permanece na doutrina de Cristo não tem a Deus. Quem permanece na doutrina de Cristo, esse tem tanto o Pai como o Filho. Se alguém vem ter convosco e não traz esta doutrina, não o recebais em casa, nem tampouco o saudeis. Porque quem o saúda participa das suas más obras.",
  depois: "João indica que tem muitas coisas para escrever, mas prefere falar pessoalmente para que a alegria seja completa. Ele envia saudações dos filhos da irmã eleita.",
  tags: "doutrina / Cristo / receber / saudar / enganadores",
  assuntos: ["efeso", "joao", "doutrina-de-cristo", "falsos-mestres", "participacao"]
},

// 326. Salmos 119.18
{
  id: "sl119.18",
  referencia: "Sl 119.18",
  local: "Israel / Judá (Israel)",
  paisAtual: "Israel",
  lider: "Diversos reis de Judá",
  liderReinado: "",
  periodo: "Período dos Salmos",
  periodoDatas: "~1000-400 a.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~1000-400 a.C.",
  antes: "O salmo 119 é uma meditação sobre a Lei do Senhor. O versículo 17 é uma oração pedindo que Deus trate com bondade e preserve a vida do salmista, para que ele possa guardar a palavra.",
  versiculo: "✅ Abre os meus olhos, para que veja as maravilhas da tua lei.",
  depois: "O salmista continua pedindo entendimento: 'Sou peregrino na terra; não escondas de mim os teus mandamentos. A minha alma está consumida de desejar a todo tempo os teus juízos.' Ele expressa anseio pela sabedoria divina.",
  tags: "olhos / ver / maravilhas / lei / entendimento",
  assuntos: ["israel", "salmista", "lei-de-deus", "entendimento", "discernimento"]
},

// 327. 1 Coríntios 12.10
{
  id: "1co12.10",
  referencia: "1 Co 12.10",
  local: "Éfeso / Ásia Menor (Turquia)",
  paisAtual: "Turquia",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~55-56 d.C.",
  antes: "Paulo está listando os diversos dons espirituais que o Espírito Santo distribui. Ele menciona a palavra da sabedoria, a palavra da ciência, a fé, os dons de curar, a operação de maravilhas, a profecia, e então chega ao dom de discernir os espíritos.",
  versiculo: "✅ E a outro, a operação de maravilhas; e a outro, a profecia; e a outro, o dom de discernir os espíritos; e a outro, a variedade de línguas; e a outro, a interpretação das línguas.",
  depois: "Paulo continua dizendo que um só e o mesmo Espírito opera todas estas coisas, repartindo particularmente a cada um como quer. Ele então introduz a metáfora do corpo com muitos membros, mostrando que todos são necessários para o funcionamento da igreja.",
  tags: "dons / discernir / espíritos / profecia / línguas",
  assuntos: ["efeso", "paulo", "discernimento-de-espiritos", "dons-espirituais", "profecia"]
},

// 328. Jeremias 17.9
{
  id: "jr17.9",
  referencia: "Jr 17.9",
  local: "Jerusalém / Judá (Israel)",
  paisAtual: "Israel",
  lider: "Jeoaquim",
  liderReinado: "609-598 a.C.",
  periodo: "Reino de Judá",
  periodoDatas: "930-586 a.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~608-605 a.C.",
  antes: "Jeremias está profetizando durante o reinado de Jeoaquim. Ele denuncia o pecado de Judá e a confiança do povo em alianças humanas em vez de confiar no Senhor. O capítulo 17 é uma coleção de advertências sobre a maldição da confiança no homem.",
  versiculo: "✅ Enganoso é o coração, mais do que todas as coisas, e perverso; quem o conhecerá?",
  depois: "Jeremias declara que Deus sonda o coração e prova os rins, para dar a cada um segundo os seus caminhos e segundo o fruto das suas obras. Ele contrasta o homem que confia no Senhor com aquele que confia no homem, mostrando a bênção de confiar em Deus.",
  tags: "coração / enganoso / perverso / conhecer / discipulado",
  assuntos: ["jerusalem", "jeremias", "coracao", "enganoso", "discernimento-de-coracao"]
},

// 329. Tiago 1.22
{
  id: "tg1.22",
  referencia: "Tg 1.22",
  local: "Jerusalém / Judeia (Israel)",
  paisAtual: "Israel",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~45-50 d.C.",
  antes: "Tiago acaba de falar sobre ouvir a palavra e recebê-la com mansidão. Ele alerta para não apenas ouvir a palavra, mas praticá-la, e que a ira do homem não produz a justiça de Deus.",
  versiculo: "✅ E sede cumpridores da palavra, e não somente ouvintes, enganando-vos a vós mesmos.",
  depois: "Tiago usa a ilustração de um homem que se olha no espelho e, ao se retirar, esquece sua aparência. Ele contrasta isso com aquele que olha atentamente para a lei perfeita da liberdade e nela persevera, sendo abençoado em suas obras.",
  tags: "cumpridores / ouvintes / enganar / praticar",
  assuntos: ["jerusalem", "tiago", "praticar", "ouvir", "enganar"]
},

// 330. 1 João 1.7
{
  id: "1jo1.7",
  referencia: "1 Jo 1.7",
  local: "Éfeso / Ásia Menor (Turquia)",
  paisAtual: "Turquia",
  lider: "Domiciano",
  liderReinado: "81-96 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~85-95 d.C.",
  antes: "João escreve sobre Deus que é luz e a comunhão com Ele. Ele afirma que Deus é luz e não há trevas nele. Aqueles que dizem ter comunhão com Ele e andam em trevas mentem.",
  versiculo: "✅ Mas, se andarmos na luz, como ele na luz está, temos comunhão uns com os outros, e o sangue de Jesus Cristo, seu Filho, nos purifica de todo o pecado.",
  depois: "João continua explicando que se confessarmos os nossos pecados, Deus é fiel e justo para nos perdoar e nos purificar de toda injustiça. Mas se dizermos que não pecamos, fazemos de Deus mentiroso e a Sua palavra não está em nós.",
  tags: "luz / comunhão / sangue / purificação / pecado",
  assuntos: ["efeso", "joao", "comunhao", "purificacao", "luz"]
},

// 331. Lucas 6.11
{
  id: "lc6.11",
  referencia: "Lc 6.11",
  local: "Cafarnaum / Galileia (Israel)",
  paisAtual: "Israel",
  lider: "Tibério",
  liderReinado: "14-37 d.C.",
  periodo: "Período Romano",
  periodoDatas: "63 a.C. - 70 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~28-29 d.C.",
  antes: "Jesus está na sinagoga em dia de sábado e encontra um homem com a mão direita atrofiada. Os escribas e fariseus observam para ver se Ele o curaria no sábado, procurando motivo para acusá-lo.",
  versiculo: "✅ Eles, porém, se encheram de ira e conferenciaram uns com os outros sobre o que fariam a Jesus.",
  depois: "Jesus escolhe doze apóstolos entre seus discípulos. Ele desce a um lugar plano, onde uma grande multidão vêm ouvi-lo e ser curada. É quando Ele profere o ensino conhecido como 'Sermão da Planície'.",
  tags: "ira / conferenciar / Jesus / fariseus / sábado",
  assuntos: ["cafarnaum", "jesus", "fariseus", "ira", "conspiracao"]
},

// 332. Lucas 8.18
{
  id: "lc8.18",
  referencia: "Lc 8.18",
  local: "Galileia (Israel)",
  paisAtual: "Israel",
  lider: "Tibério",
  liderReinado: "14-37 d.C.",
  periodo: "Período Romano",
  periodoDatas: "63 a.C. - 70 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~28-29 d.C.",
  antes: "Jesus acabara de contar a parábola do semeador e explicá-la aos discípulos. Ele os adverte sobre como ouvir, pois a palavra de Deus é como uma semente que precisa ser recebida com cuidado.",
  versiculo: "✅ Vede, pois, como ouvis; porque a qualquer que tiver, ser-lhe-á dado, e a qualquer que não tiver, até o que parece ter ser-lhe-á tirado.",
  depois: "A mãe e os irmãos de Jesus vêm vê-lo, mas não podem alcançá-lo por causa da multidão. Jesus aproveita a ocasião para ensinar sobre quem são sua mãe e seus irmãos - aqueles que ouvem a palavra de Deus e a praticam.",
  tags: "ouvir / atentar / guardar / praticar",
  assuntos: ["galileia", "jesus", "ouvir", "discipulado", "praticar"]
}
];


// ============================================
// ÍNDICE DE CONTEXTOS BÍBLICOS ATUALIZADO
// Organizado por ordem alfabética de ID
// Total: 332 contextos
// ============================================

const indiceContextos = {
  // ==================== NOVO TESTAMENTO ====================
  
  // 1 Coríntios
  "1co1.18": { numero: 7, referencia: "1 Co 1.18" },
  "1co1.2": { numero: 140, referencia: "1 Co 1.2" },
  "1co1.7": { numero: 14, referencia: "1 Co 1.7" },
  "1co12.11": { numero: 20, referencia: "1 Co 12.11" },
  "1co12.12": { numero: 152, referencia: "1 Co 12.12" },
  "1co12.27": { numero: 153, referencia: "1 Co 12.27" },
  "1co12.31": { numero: 21, referencia: "1 Co 12.31" },
  "1co12.4-11": { numero: 316, referencia: "1 Co 12.4-11" },
  "1co12.7": { numero: 151, referencia: "1 Co 12.7" },
  "1co12.10": { numero: 327, referencia: "1 Co 12.10" },
  "1co13.1": { numero: 22, referencia: "1 Co 13.1-3" },
  "1co13.4": { numero: 23, referencia: "1 Co 13.4-7" },
  "1co14.26": { numero: 256, referencia: "1 Co 14.26" },
  "1co2.16": { numero: 17, referencia: "1 Co 2.16" },
  "1co2.4": { numero: 15, referencia: "1 Co 2.4" },
  "1co2.5": { numero: 16, referencia: "1 Co 2.5" },
  "1co3.16": { numero: 150, referencia: "1 Co 3.16" },
  "1co3.3": { numero: 18, referencia: "1 Co 3.3" },
  "1co4.20": { numero: 19, referencia: "1 Co 4.20" },
  "1co6.9-10": { numero: 236, referencia: "1 Co 6.9-10" },
  "1co9.16": { numero: 277, referencia: "1 Co 9.16" },
  "1co9.19-22": { numero: 324, referencia: "1 Co 9.19-22" },
  "1co9.25": { numero: 8, referencia: "1 Co 9.25" },
  
  // 1 João
  "1jo1.7": { numero: 330, referencia: "1 Jo 1.7" },
  "1jo4.1": { numero: 310, referencia: "1 Jo 4.1" },
  
  // 1 Pedro
  "1pe2.2": { numero: 275, referencia: "1 Pe 2.2" },
  "1pe2.5": { numero: 154, referencia: "1 Pe 2.5" },
  "1pe2.9": { numero: 78, referencia: "1 Pe 2.9" },
  "1pe4.10": { numero: 79, referencia: "1 Pe 4.10" },
  
  // 1 Reis
  "1rs18.40": { numero: 113, referencia: "1 Rs 18.40" },
  
  // 1 Tessalonicenses
  "1ts5.11": { numero: 155, referencia: "1 Ts 5.11" },
  "1ts5.21": { numero: 315, referencia: "1 Ts 5.21" },
  
  // 1 Timóteo
  "1tm2.1": { numero: 262, referencia: "1 Tm 2.1" },
  "1tm2.4": { numero: 225, referencia: "1 Tm 2.4" },
  "1tm4.12": { numero: 71, referencia: "1 Tm 4.12" },
  "1tm4.7": { numero: 70, referencia: "1 Tm 4.7-8" },
  "1tm6.18": { numero: 226, referencia: "1 Tm 6.18" },
  "1tm6.5": { numero: 72, referencia: "1 Tm 6.5-10" },
  "1tm6.6-8": { numero: 216, referencia: "1 Tm 6.6-8" },
  "1tm6.9": { numero: 217, referencia: "1 Tm 6.9" },
  
  // 2 Coríntios
  "2co1.18": { numero: 24, referencia: "2 Co 1.18" },
  "2co2.14": { numero: 25, referencia: "2 Co 2.14-17" },
  "2co2.14-17": { numero: 278, referencia: "2 Co 2.14-17" },
  "2co2.17": { numero: 279, referencia: "2 Co 2.17" },
  "2co3.18": { numero: 26, referencia: "2 Co 3.18" },
  "2co4.18": { numero: 29, referencia: "2 Co 4.18" },
  "2co4.2": { numero: 27, referencia: "2 Co 4.2" },
  "2co4.4": { numero: 28, referencia: "2 Co 4.4" },
  "2co5.18-19": { numero: 264, referencia: "2 Co 5.18-19" },
  "2co9.7": { numero: 223, referencia: "2 Co 9.7" },
  "2co11.15": { numero: 239, referencia: "2 Co 11.15" },
  "2co12.12": { numero: 30, referencia: "2 Co 12.12" },
  "2co12.7-10": { numero: 222, referencia: "2 Co 12.7-10" },
  "2co12.7-9": { numero: 43, referencia: "2 Co 12.7-9" },
  
  // 2 João
  "2jo9-11": { numero: 325, referencia: "2 Jo 9-11" },
  
  // 2 Timóteo
  "2tm3.12": { numero: 280, referencia: "2 Tm 3.12" },
  "2tm3.15-16": { numero: 73, referencia: "2 Tm 3.15-16" },
  "2tm3.16": { numero: 74, referencia: "2 Tm 3.16-17" },
  "2tm4.3": { numero: 75, referencia: "2 Tm 4.3" },
  
  // 3 João
  "3jo1.5": { numero: 105, referencia: "3 Jo 1.5" },
  
  // Apocalipse
  "ap19.7": { numero: 144, referencia: "Ap 19.7-8" },
  "ap2.10": { numero: 9, referencia: "Ap 2.10" },
  "ap21.2": { numero: 145, referencia: "Ap 21.2" },
  "ap3.17": { numero: 215, referencia: "Ap 3.17" },
  "ap7.9": { numero: 156, referencia: "Ap 7.9" },
  
  // Atos
  "at1.14": { numero: 159, referencia: "At 1.14" },
  "at1.3": { numero: 157, referencia: "At 1.3" },
  "at1.4": { numero: 158, referencia: "At 1.4-5" },
  "at1.8": { numero: 258, referencia: "At 1.8" },
  "at17.24-27": { numero: 4, referencia: "At 17.24-27" },
  "at2.1": { numero: 160, referencia: "At 2.1" },
  "at2.1-4": { numero: 188, referencia: "At 2.1-4" },
  "at2.11": { numero: 161, referencia: "At 2.11" },
  "at2.16": { numero: 162, referencia: "At 2.16-17" },
  "at2.22": { numero: 163, referencia: "At 2.22-23" },
  "at2.24": { numero: 164, referencia: "At 2.24" },
  "at2.29": { numero: 1, referencia: "At 2.29-33" },
  "at2.32": { numero: 165, referencia: "At 2.32-36" },
  "at2.36": { numero: 2, referencia: "At 2.36-41" },
  "at2.37": { numero: 166, referencia: "At 2.37" },
  "at2.38": { numero: 167, referencia: "At 2.38" },
  "at2.4": { numero: 134, referencia: "At 2.4" },
  "at2.41": { numero: 168, referencia: "At 2.41" },
  "at2.42": { numero: 122, referencia: "At 2.42" },
  "at2.42-47": { numero: 268, referencia: "At 2.42-47" },
  "at2.44-47": { numero: 64, referencia: "At 2.44-47" },
  "at2.46": { numero: 123, referencia: "At 2.46" },
  "at2.47": { numero: 253, referencia: "At 2.47" },
  "at2.5": { numero: 135, referencia: "At 2.5" },
  "at2.6": { numero: 136, referencia: "At 2.6-8" },
  "at2.9": { numero: 137, referencia: "At 2.9-11" },
  "at20.18": { numero: 13, referencia: "At 20.18" },
  "at20.28": { numero: 170, referencia: "At 20.28" },
  "at4.13": { numero: 3, referencia: "At 4.13" },
  "at4.20": { numero: 276, referencia: "At 4.20" },
  "at4.29": { numero: 11, referencia: "At 4.29-30" },
  "at5.12": { numero: 12, referencia: "At 5.12-14" },
  "at8.18-20": { numero: 281, referencia: "At 8.18-20" },
  "at9.4": { numero: 169, referencia: "At 9.4" },
  
  // Colossenses
  "cl1.10": { numero: 85, referencia: "Cl 1.10" },
  "cl1.16-17": { numero: 189, referencia: "Cl 1.16-17" },
  "cl1.18": { numero: 171, referencia: "Cl 1.18" },
  "cl1.23": { numero: 172, referencia: "Cl 1.23" },
  "cl3.12": { numero: 86, referencia: "Cl 3.12-13" },
  "cl3.13": { numero: 87, referencia: "Cl 3.13" },
  "cl4.2": { numero: 88, referencia: "Cl 4.2" },
  
  // Deuteronômio
  "dt13.3": { numero: 106, referencia: "Dt 13.3" },
  
  // Efésios
  "ef1.22": { numero: 173, referencia: "Ef 1.22-23" },
  "ef1.3": { numero: 244, referencia: "Ef 1.3" },
  "ef2.19": { numero: 174, referencia: "Ef 2.19" },
  "ef2.20": { numero: 175, referencia: "Ef 2.20" },
  "ef2.6": { numero: 245, referencia: "Ef 2.6" },
  "ef3.10": { numero: 252, referencia: "Ef 3.10" },
  "ef3.16": { numero: 247, referencia: "Ef 3.16" },
  "ef4.11-12": { numero: 267, referencia: "Ef 4.11-12" },
  "ef4.12": { numero: 255, referencia: "Ef 4.12" },
  "ef4.13": { numero: 41, referencia: "Ef 4.13-15" },
  "ef4.14": { numero: 69, referencia: "Ef 4.14-15" },
  "ef4.2": { numero: 40, referencia: "Ef 4.2-3" },
  "ef4.32": { numero: 42, referencia: "Ef 4.32" },
  "ef5.25": { numero: 176, referencia: "Ef 5.25" },
  "ef5.26": { numero: 44, referencia: "Ef 5.26" },
  "ef5.27": { numero: 177, referencia: "Ef 5.27" },
  "ef5.5-6": { numero: 238, referencia: "Ef 5.5-6" },
  "ef5.9": { numero: 43, referencia: "Ef 5.9" },
  
  // Êxodo
  "ex2.24-25": { numero: 199, referencia: "Êx 2.24-25" },
  
  // Filipenses
  "fp1.11": { numero: 46, referencia: "Fp 1.11" },
  "fp1.6": { numero: 45, referencia: "Fp 1.6" },
  "fp2.3": { numero: 47, referencia: "Fp 2.3-5" },
  "fp3.10": { numero: 282, referencia: "Fp 3.10" },
  "fp4.11": { numero: 251, referencia: "Fp 4.11" },
  "fp4.12": { numero: 18, referencia: "Fp 4.12" },
  "fp4.4": { numero: 48, referencia: "Fp 4.4" },
  "fp4.7": { numero: 49, referencia: "Fp 4.7" },
  
  // Gálatas
  "gl1.10": { numero: 5, referencia: "Gl 1.10" },
  "gl4.19": { numero: 50, referencia: "Gl 4.19" },
  "gl5.16": { numero: 52, referencia: "Gl 5.16" },
  "gl5.19": { numero: 53, referencia: "Gl 5.19-21" },
  "gl5.19-21": { numero: 237, referencia: "Gl 5.19-21" },
  "gl5.22": { numero: 54, referencia: "Gl 5.22-23" },
  "gl5.22a": { numero: 55, referencia: "Gl 5.22-23a" },
  "gl5.25": { numero: 56, referencia: "Gl 5.25" },
  "gl5.8": { numero: 51, referencia: "Gl 5.8" },
  "gl6.10": { numero: 178, referencia: "Gl 6.10" },
  "gl6.2": { numero: 271, referencia: "Gl 6.2" },
  "gl6.9": { numero: 57, referencia: "Gl 6.9" },
  
  // Gênesis
  "gn1.1": { numero: 10, referencia: "Gn 1.1" },
  
  // Hebreus
  "hb1.1-2": { numero: 201, referencia: "Hb 1.1-2" },
  "hb1.3": { numero: 190, referencia: "Hb 1.3" },
  "hb10.25": { numero: 179, referencia: "Hb 10.25" },
  "hb11.38": { numero: 283, referencia: "Hb 11.38" },
  "hb11.6": { numero: 90, referencia: "Hb 11.6" },
  "hb12.1": { numero: 91, referencia: "Hb 12.1" },
  "hb12.11": { numero: 92, referencia: "Hb 12.11" },
  "hb12.6": { numero: 227, referencia: "Hb 12.6" },
  "hb13.17": { numero: 180, referencia: "Hb 13.17" },
  "hb13.5": { numero: 219, referencia: "Hb 13.5" },
  "hb13.8": { numero: 214, referencia: "Hb 13.8" },
  "hb2.4": { numero: 89, referencia: "Hb 2.4" },
  "hb5.14": { numero: 309, referencia: "Hb 5.14" },
  
  // Isaías
  "is41.10": { numero: 193, referencia: "Is 41.10" },
  "is45.5": { numero: 211, referencia: "Is 45.5" },
  "is55.11": { numero: 107, referencia: "Is 55.11" },
  
  // João
  "jo1.14": { numero: 200, referencia: "Jo 1.14" },
  "jo1.9-10": { numero: 93, referencia: "Jo 1.9-10" },
  "jo10.1-5": { numero: 323, referencia: "Jo 10.1-5" },
  "jo13.34": { numero: 95, referencia: "Jo 13.34" },
  "jo13.35": { numero: 96, referencia: "Jo 13.35" },
  "jo14.13": { numero: 192, referencia: "Jo 14.13" },
  "jo14.13-14": { numero: 210, referencia: "Jo 14.13-14" },
  "jo14.27": { numero: 97, referencia: "Jo 14.27" },
  "jo14.6": { numero: 31, referencia: "Jo 14.6" },
  "jo15.1": { numero: 98, referencia: "Jo 15.1-2" },
  "jo15.4": { numero: 99, referencia: "Jo 15.4-5" },
  "jo15.5": { numero: 100, referencia: "Jo 15.5" },
  "jo15.8": { numero: 101, referencia: "Jo 15.8" },
  "jo16.13": { numero: 313, referencia: "Jo 16.13" },
  "jo16.33": { numero: 234, referencia: "Jo 16.33" },
  "jo16.4": { numero: 102, referencia: "Jo 16.4" },
  "jo17.17": { numero: 32, referencia: "Jo 17.17" },
  "jo4.23": { numero: 254, referencia: "Jo 4.23" },
  "jo6.26": { numero: 221, referencia: "Jo 6.26" },
  "jo6.67": { numero: 94, referencia: "Jo 6.67" },
  "jo7.24": { numero: 312, referencia: "Jo 7.24" },
  
  // Joel
  "jl2.28": { numero: 181, referencia: "Jl 2.28" },
  
  // Jeremias
  "jr14.14": { numero: 109, referencia: "Jr 14.14" },
  "jr17": { numero: 231, referencia: "Jr 17" },
  "jr17.9": { numero: 328, referencia: "Jr 17.9" },
  "jr17.9-11": { numero: 229, referencia: "Jr 17.9-11" },
  "jr23.23": { numero: 213, referencia: "Jr 23.23" },
  "jr33.3": { numero: 198, referencia: "Jr 33.3" },
  "jr6.16": { numero: 108, referencia: "Jr 6.16" },
  
  // Lucas
  "lc1.9-58": { numero: 224, referencia: "Lc 1.9,58" },
  "lc10.19": { numero: 103, referencia: "Lc 10.19" },
  "lc19.10": { numero: 249, referencia: "Lc 19.10" },
  "lc22.42": { numero: 37, referencia: "Lc 22.42" },
  "lc6.11": { numero: 331, referencia: "Lc 6.11" },
  "lc7.11-17": { numero: 206, referencia: "Lc 7.11-17" },
  "lc8.18": { numero: 332, referencia: "Lc 8.18" },
  "lc8.40-56": { numero: 207, referencia: "Lc 8.40-56" },
  
  // Levítico
  "lv23.15": { numero: 182, referencia: "Lv 23.15-16" },
  
  // Marcos
  "mc13.23": { numero: 322, referencia: "Mc 13.23" },
  "mc13.5": { numero: 321, referencia: "Mc 13.5" },
  "mc4.24": { numero: 318, referencia: "Mc 4.24" },
  "mc4.35-41": { numero: 205, referencia: "Mc 4.35-41" },
  "mc8.15": { numero: 319, referencia: "Mc 8.15" },
  "mc8.34": { numero: 104, referencia: "Mc 8.34-35" },
  
  // Malaquias
  "ml3.10": { numero: 233, referencia: "Ml 3.10" },
  
  // Mateus
  "mt10.29": { numero: 196, referencia: "Mt 10.29" },
  "mt10.29-30": { numero: 194, referencia: "Mt 10.29-30" },
  "mt10.8": { numero: 63, referencia: "Mt 10.8" },
  "mt11.29": { numero: 36, referencia: "Mt 11.29" },
  "mt13.24-28": { numero: 240, referencia: "Mt 13.24-28" },
  "mt13.36-43": { numero: 241, referencia: "Mt 13.36-43" },
  "mt16.18": { numero: 183, referencia: "Mt 16.18" },
  "mt16.24-26": { numero: 220, referencia: "Mt 16.24-26" },
  "mt23": { numero: 37, referencia: "Mt 23" },
  "mt23.27": { numero: 38, referencia: "Mt 23.27-28" },
  "mt24.11": { numero: 39, referencia: "Mt 24.11,24" },
  "mt24.24": { numero: 311, referencia: "Mt 24.24" },
  "mt24.4": { numero: 320, referencia: "Mt 24.4" },
  "mt25.21": { numero: 65, referencia: "Mt 25.21" },
  "mt28.19-20": { numero: 257, referencia: "Mt 28.19-20" },
  "mt28.20": { numero: 184, referencia: "Mt 28.20" },
  "mt4.23-25": { numero: 203, referencia: "Mt 4.23-25" },
  "mt4.4": { numero: 270, referencia: "Mt 4.4" },
  "mt5.11-12": { numero: 284, referencia: "Mt 5.11-12" },
  "mt5.13": { numero: 266, referencia: "Mt 5.13" },
  "mt5.13-14": { numero: 259, referencia: "Mt 5.13-14" },
  "mt5.14": { numero: 260, referencia: "Mt 5.14" },
  "mt5.16": { numero: 261, referencia: "Mt 5.16" },
  "mt5.3": { numero: 243, referencia: "Mt 5.3" },
  "mt5.9": { numero: 263, referencia: "Mt 5.9" },
  "mt6.10": { numero: 36, referencia: "Mt 6.10" },
  "mt6.19-21": { numero: 242, referencia: "Mt 6.19-21" },
  "mt6.25-34": { numero: 23, referencia: "Mateus 6.25-34" },
  "mt6.26-30": { numero: 209, referencia: "Mt 6.26-30" },
  "mt7.15": { numero: 317, referencia: "Mt 7.15" },
  "mt7.16": { numero: 33, referencia: "Mt 7.16-20" },
  "mt7.21": { numero: 34, referencia: "Mt 7.21-23" },
  "mt7.22": { numero: 35, referencia: "Mt 7.22-23" },
  "mt8.23-27": { numero: 204, referencia: "Mt 8.23-27" },
  
  // Neemias
  "ne6.12": { numero: 110, referencia: "Ne 6.12" },
  "ne8.10": { numero: 111, referencia: "Ne 8.10" },
  
  // Oséias
  "os2.19": { numero: 185, referencia: "Os 2.19-20" },
  "os4.1": { numero: 112, referencia: "Os 4.1" },
  
  // Provérbios
  "pv18.21": { numero: 232, referencia: "Pv 18.21" },
  "pv23.4-5": { numero: 218, referencia: "Pv 23.4,5" },
  "pv30.7-9": { numero: 230, referencia: "Pv 30.7-9" },
  "pv3.5": { numero: 197, referencia: "Pv 3.5" },
  
  // Romanos
  "rm1": { numero: 6, referencia: "Rm 1" },
  "rm1.18-21": { numero: 61, referencia: "Rm 1.18-21" },
  "rm1.19": { numero: 58, referencia: "Rm 1.19" },
  "rm1.20": { numero: 59, referencia: "Rm 1.20" },
  "rm1.22": { numero: 60, referencia: "Rm 1.22" },
  "rm12.15": { numero: 272, referencia: "Rm 12.15" },
  "rm12.18": { numero: 68, referencia: "Rm 12.18" },
  "rm12.2": { numero: 67, referencia: "Rm 12.2" },
  "rm12.5": { numero: 186, referencia: "Rm 12.5" },
  "rm16.5": { numero: 187, referencia: "Rm 16.5" },
  "rm2.21": { numero: 62, referencia: "Rm 2.21-24" },
  "rm3.10-12": { numero: 208, referencia: "Rm 3.10-12" },
  "rm3.11": { numero: 63, referencia: "Rm 3.11" },
  "rm8.18": { numero: 64, referencia: "Rm 8.18" },
  "rm8.26": { numero: 246, referencia: "Rm 8.26" },
  "rm8.28": { numero: 65, referencia: "Rm 8.28" },
  "rm8.29": { numero: 66, referencia: "Rm 8.29" },
  "rm8.37": { numero: 248, referencia: "Rm 8.37" },
  
  // Sofonias
  "sf3.17": { numero: 212, referencia: "Sf 3.17" },
  
  // Salmos
  "sl1.2": { numero: 114, referencia: "Sl 1.2-3" },
  "sl10.4": { numero: 115, referencia: "Sl 10.4" },
  "sl103.13-14": { numero: 202, referencia: "Sl 103.13-14" },
  "sl119.18": { numero: 326, referencia: "Sl 119.18" },
  "sl121.4": { numero: 191, referencia: "Sl 121.4" },
  "sl139.7-10": { numero: 195, referencia: "Sl 139.7-10" },
  "sl14": { numero: 118, referencia: "Sl 14" },
  "sl14.1": { numero: 116, referencia: "Sl 14.1" },
  "sl14.1-3": { numero: 117, referencia: "Sl 14.1-3" },
  "sl16.11": { numero: 120, referencia: "Sl 16.11" },
  "sl19.1": { numero: 119, referencia: "Sl 19.1" },
  "sl23": { numero: 250, referencia: "Sl 23" },
  "sl34.18": { numero: 235, referencia: "Sl 34.18" },
  "sl42.1": { numero: 121, referencia: "Sl 42.1" },
  
  // Tiago
  "tg1.19": { numero: 81, referencia: "Tg 1.19" },
  "tg1.2": { numero: 80, referencia: "Tg 1.2-4" },
  "tg1.2-4": { numero: 228, referencia: "Tg 1.2-4" },
  "tg1.21": { numero: 82, referencia: "Tg 1.21" },
  "tg1.22": { numero: 329, referencia: "Tg 1.22" },
  "tg1.27": { numero: 308, referencia: "Tg 1.27" },
  "tg1.5": { numero: 314, referencia: "Tg 1.5" },
  "tg3.17": { numero: 83, referencia: "Tg 3.17" },
  "tg5.7": { numero: 84, referencia: "Tg 5.7-8" },
  
  // Tito
  "tt2.12": { numero: 77, referencia: "Tt 2.12" },
  "tt2.7": { numero: 76, referencia: "Tt 2.7-8" }
};

// ============================================
// FUNÇÃO PARA BUSCAR POR ÍNDICE
// ============================================

function buscarPorIndice(id) {
  if (indiceContextos[id]) {
    return indiceContextos[id];
  }
  return null;
}

function listarTodosIndices() {
  return Object.keys(indiceContextos).sort();
}

// Exporta o índice também
if (typeof window !== 'undefined') {
  window.indiceContextos = indiceContextos;
  window.buscarPorIndice = buscarPorIndice;
  window.listarTodosIndices = listarTodosIndices;
}

console.log(`📑 Índice de contextos carregado com ${Object.keys(indiceContextos).length} entradas!`);


// ============================================
// FUNÇÃO PARA FORMATAR CABEÇALHO
// ============================================

function formatarCabecalho(ctx) {
  let cabecalho = `📖 ${ctx.referencia}`;
  
  if (ctx.data && ctx.data !== "") {
    cabecalho += ` | 📅 ${ctx.data}`;
  }
  
  if (ctx.local && ctx.local !== "") {
    cabecalho += ` | 🚩 ${ctx.local}`;
  }
  
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
  
  if (ctx.periodoHumanidade && ctx.periodoHumanidade !== "") {
    cabecalho += ` | 🏰 ${ctx.periodoHumanidade}`;
    if (ctx.periodoHumanidadeDatas && ctx.periodoHumanidadeDatas !== "") {
      cabecalho += ` (${ctx.periodoHumanidadeDatas})`;
    }
  }
  
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