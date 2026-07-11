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
    referencia: "Pv 23.4,5",
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

  // 224. Lucas 1.9,58 (Zacarias e Isabel)
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

  // 228. Tiago 1.2-4 (versão estendida)
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

  // 237. Gálatas 5.19-21 (versão com referência estendida)
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
    depois: "Paulo explica que aprendeu a viver contente em toda e qualquer situação: tanto na humilhação quanto na abundância, tanto em fartura quanto em escassez. O contentamento é aprendido, não automático, e independe das circunstâncias externas.",
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
    depois: "Paulo conclui que os efésios não devem desanimar com suas tribulações, pois elas são para a glória deles. A igreja é o meio pelo qual Deus manifesta Sua sabedoria ao universo.",
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
    data: "~30 d.C.",
    antes: "A igreja primitiva se dedicava ao ensino dos apóstolos, à comunhão, ao partir do pão e às orações. Eles vendiam suas propriedades e repartiam com os necessitados.",
    versiculo: "✅ Louvando a Deus, e caindo na graça de todo o povo. E todos os dias acrescentava o Senhor à igreja aqueles que se haviam de salvar.",
    depois: "A adoração era o combustível do crescimento da igreja primitiva. O Senhor acrescentava novos convertidos diariamente.",
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
    data: "~28 d.C.",
    antes: "Jesus estava viajando pela Samaria. Uma mulher samaritana veio tirar água, e Jesus pediu-lhe de beber, quebrando as barreiras raciais e religiosas da época.",
    versiculo: "✅ Mas a hora vem, e agora é, em que os verdadeiros adoradores adorarão o Pai em espírito e em verdade; porque o Pai procura a tais que assim o adorem.",
    depois: "Jesus revela que a adoração verdadeira não está mais limitada ao templo de Jerusalém ou ao monte Gerizim. O Pai busca adoradores que o adorem em espírito e em verdade.",
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
    data: "~60-62 d.C.",
    antes: "Paulo lista os dons de liderança dados por Cristo à igreja. O propósito desses dons não é criar uma hierarquia, mas equipar a igreja para o serviço.",
    versiculo: "✅ Com o fim de aperfeiçoar os santos para a obra do ministério, para edificação do corpo de Cristo.",
    depois: "O objetivo final dos dons é que todos os crentes cheguem à unidade da fé e ao conhecimento do Filho de Deus, à medida da estatura da plenitude de Cristo.",
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
    data: "~55 d.C.",
    antes: "A igreja de Corinto valorizava excessivamente o dom de línguas, causando confusão e desordem nas reuniões. Paulo instrui que tudo deve ser feito para edificação.",
    versiculo: "✅ Que fareis, pois, irmãos? Quando vos ajuntais, cada um de vós tem salmo, tem doutrina, tem revelação, tem língua, tem interpretação. Faça-se tudo para edificação.",
    depois: "Paulo estabelece princípios de ordem no culto. Deus não é Deus de confusão, mas de paz. Todo o culto deve visar a edificação da igreja.",
    tags: "edificação / dons / comunhão",
    assuntos: ["corinto", "paulo", "edificacao", "dons-espirituais", "ordem-no-culto"]
  },

  // 257. Mateus 28.19-20
  {
    id: "mt28.19-20",
    referencia: "Mt 28.19-20",
    local: "Galileia / Monte designado por Jesus (Israel)",
    paisAtual: "Israel",
    lider: "Tibério",
    liderReinado: "14-37 d.C.",
    periodo: "Período Romano",
    periodoDatas: "63 a.C. - 70 d.C.",
    data: "~30 d.C.",
    antes: "Jesus ressuscitou dos mortos e apareceu várias vezes aos discípulos. Jesus encontrou os discípulos na Galileia, no monte que designara.",
    versiculo: "✅ Portanto ide, ensinai todas as nações, batizando-as em nome do Pai, e do Filho, e do Espírito Santo; ensinando-as a guardar todas as coisas que eu vos tenho mandado; e eis que eu estou convosco todos os dias, até a consumação dos séculos.",
    depois: "Os discípulos obedeceram e começaram a pregar em Jerusalém, depois na Judéia, Samaria e até os confins da terra. A Grande Comissão continua sendo o mandato missionário da igreja até hoje.",
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
    data: "~30 d.C.",
    antes: "Jesus passou quarenta dias após a ressurreição falando sobre o reino de Deus. Os discípulos perguntaram se Ele restauraria o reino a Israel.",
    versiculo: "✅ Mas recebereis a virtude do Espírito Santo, que há de vir sobre vós; e ser-me-eis testemunhas, tanto em Jerusalém como em toda a Judéia e Samaria, e até aos confins da terra.",
    depois: "Após dizer isto, Jesus foi elevado ao céu. Os discípulos voltaram para Jerusalém e perseveraram em oração no cenáculo até Pentecostes.",
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
    periodo: "Período Romano",
    periodoDatas: "63 a.C. - 70 d.C.",
    data: "~28 d.C.",
    antes: "Jesus está ensinando no Sermão da Montanha. Ele aplica as bem-aventuranças à identidade pública dos discípulos.",
    versiculo: "✅ Vós sois o sal da terra; e se o sal for insípido, com que se há de salgar? Para nada mais presta senão para se lançar fora, e ser pisado pelos homens. Vós sois a luz do mundo; não se pode esconder uma cidade edificada sobre um monte.",
    depois: "O sal preserva e dá sabor; a luz ilumina e guia. Os discípulos são chamados a influenciar o mundo, não a se isolar dele.",
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
    periodo: "Período Romano",
    periodoDatas: "63 a.C. - 70 d.C.",
    data: "~28 d.C.",
    antes: "Jesus usa a metáfora da luz. As cidades construídas no alto das colinas eram visíveis de longe, especialmente à noite com suas lamparinas acesas.",
    versiculo: "✅ Vós sois a luz do mundo; não se pode esconder uma cidade edificada sobre um monte.",
    depois: "A luz não pode ser escondida. Assim como uma cidade no monte é visível para todos, a vida do discípulo deve ser visível e iluminadora.",
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
    periodo: "Período Romano",
    periodoDatas: "63 a.C. - 70 d.C.",
    data: "~28 d.C.",
    antes: "Jesus declarou que os discípulos são a luz do mundo. Agora explica como essa luz deve brilhar: através de boas obras visíveis, com o objetivo correto.",
    versiculo: "✅ Assim resplandeça a vossa luz diante dos homens, para que vejam as vossas boas obras e glorifiquem a vosso Pai que está nos céus.",
    depois: "As boas obras não devem ser para autoengrandecimento, mas para que outros glorifiquem a Deus. O alvo final não é a reputação do discípulo, mas a glória do Pai.",
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
    data: "~62-64 d.C.",
    antes: "Paulo escreve a Timóteo sobre a ordem na igreja e a importância da oração intercessória.",
    versiculo: "✅ Admoesto-te, pois, antes de tudo, que se façam deprecações, orações, intercessões e ações de graças por todos os homens.",
    depois: "As orações devem ser feitas por reis e por todos os que estão em autoridade, para que tenhamos uma vida tranquila e sossegada. Deus deseja que todos os homens sejam salvos.",
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
    periodo: "Período Romano",
    periodoDatas: "63 a.C. - 70 d.C.",
    data: "~28 d.C.",
    antes: "Jesus está proclamando as bem-aventuranças no Sermão da Montanha. Ele já falou sobre os pobres de espírito, os que choram, os mansos, os misericordiosos e os limpos de coração.",
    versiculo: "✅ Bem-aventurados os pacificadores, porque eles serão chamados filhos de Deus.",
    depois: "Os pacificadores são os que ativamente promovem a reconciliação, refletindo o caráter de Deus que em Cristo reconciliou o mundo consigo mesmo.",
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
    data: "~55-56 d.C.",
    antes: "Paulo fala sobre a nova criação em Cristo. A reconciliação com Deus é o centro da mensagem do evangelho.",
    versiculo: "✅ Ora, tudo provém de Deus, que nos reconciliou consigo mesmo por Jesus Cristo, e nos deu o ministério da reconciliação. Isto é, Deus estava em Cristo reconciliando consigo o mundo, não lhes imputando os seus pecados; e pôs em nós a palavra da reconciliação.",
    depois: "Somos embaixadores de Cristo. O ministério da reconciliação é a missão confiada à igreja.",
    tags: "reconciliação / ministério / embaixadores",
    assuntos: ["filipos", "paulo", "reconciliacao", "ministerio", "embaixadores"]
  },

  // 265. João 16.33 (versão com periodoHumanidade)
  {
    id: "jo16.33b",
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
    antes: "Jesus está falando com os discípulos na véspera de sua morte, preparando-os para as tribulações que virão após sua partida.",
    versiculo: "✅ Tenho-vos dito estas coisas, para que em mim tenhais paz; no mundo tereis aflições, mas tende bom ânimo; eu venci o mundo.",
    depois: "Jesus não promete ausência de aflições, mas paz nele em meio às aflições. Sua vitória sobre o mundo é a base para o bom ânimo dos discípulos.",
    tags: "tribulação / paz / vitória",
    assuntos: ["jerusalem", "jesus", "paz", "tribulacao", "vitoria"]
  },

  // 266. Mateus 5.13 (versão simples, id próprio)
  {
    id: "mt5.13",
    referencia: "Mt 5.13",
    local: "Monte das Bem-aventuranças / Galileia (Israel)",
    paisAtual: "Israel",
    lider: "Tibério",
    liderReinado: "14-37 d.C.",
    periodo: "Período Romano",
    periodoDatas: "63 a.C. - 70 d.C.",
    data: "~28 d.C.",
    antes: "Jesus inicia a seção sobre a identidade dos discípulos no mundo, chamando-os de 'sal da terra'.",
    versiculo: "✅ Vós sois o sal da terra; e se o sal for insípido, com que se há de salgar? Para nada mais presta senão para se lançar fora, e ser pisado pelos homens.",
    depois: "O sal preserva, dá sabor e era usado em sacrifícios. Se o sal perde sua força, torna-se inútil. Os discípulos devem manter seu caráter distintivo no mundo.",
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
    data: "~60-62 d.C.",
    antes: "Paulo explica como os dons de liderança contribuem para a unidade do corpo de Cristo.",
    versiculo: "✅ E ele mesmo deu uns para apóstolos, e outros para profetas, e outros para evangelistas, e outros para pastores e doutores, para o aperfeiçoamento dos santos, para a obra do ministério, para edificação do corpo de Cristo.",
    depois: "Os dons de liderança não são para exaltação pessoal, mas para equipar a igreja para o serviço.",
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
    data: "~30 d.C.",
    antes: "Cerca de 3.000 pessoas se converteram no dia de Pentecostes. Este resumo descreve o funcionamento da primeira igreja.",
    versiculo: "⚠️ E perseveravam na doutrina dos apóstolos, e na comunhão, e no partir do pão, e nas orações. E em toda a alma havia temor, e muitas maravilhas e sinais se faziam pelos apóstolos. Todos os que criam estavam juntos e tinham tudo em comum. Vendiam suas propriedades e bens e repartiam com todos, segundo cada um tinha necessidade. E perseverando unânimes todos os dias no templo, e partindo o pão em casa, comiam juntos com alegria e singeleza de coração, louvando a Deus e caindo na graça de todo o povo. E todos os dias acrescentava o Senhor à igreja aqueles que se haviam de salvar.",
    depois: "A igreja primitiva estabeleceu o padrão para a vida comunitária cristã: ensino apostólico, comunhão, partilha de bens, oração, adoração e evangelismo.",
    tags: "igreja primitiva / comunhão / discipulado",
    assuntos: ["jerusalem", "pedro", "igreja-primitiva", "comunhao", "partilha"]
  },

  // 269. 2 Timóteo 3.16 (entrada com campos periodoHumanidade — complementar à #74)
  {
    id: "2tm3.16b",
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
    antes: "Paulo está na prisão em Roma, próximo da morte. Ele escreve sua última carta a Timóteo, encorajando-o a permanecer fiel às Escrituras.",
    versiculo: "✅ Toda Escritura é inspirada por Deus e útil para o ensino, para a repreensão, para a correção, para a educação na justiça.",
    depois: "O propósito das Escrituras é equipar o homem de Deus para toda boa obra. A inspiração (theopneustos = soprada por Deus) garante a autoridade das Escrituras.",
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
    periodo: "Período Romano",
    periodoDatas: "63 a.C. - 70 d.C.",
    data: "~28 d.C.",
    antes: "Jesus foi levado pelo Espírito ao deserto para ser tentado pelo diabo. O tentador o desafiou a transformar pedras em pães.",
    versiculo: "✅ Ele, porém, respondendo, disse: Está escrito: Nem só de pão viverá o homem, mas de toda a palavra que sai da boca de Deus.",
    depois: "Jesus cita Deuteronômio 8.3. A Palavra de Deus é o alimento essencial para a vida espiritual. O diabo tentou Jesus mais duas vezes, mas Ele resistiu com as Escrituras.",
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
    data: "~49-55 d.C.",
    antes: "Paulo conclui a carta aos Gálatas com exortações sobre restaurar os caídos e carregar as cargas uns dos outros.",
    versiculo: "✅ Levai as cargas uns dos outros, e assim cumprireis a lei de Cristo.",
    depois: "A 'lei de Cristo' é o mandamento do amor mútuo. Carregar as cargas uns dos outros é uma expressão prática desse amor.",
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
    data: "~57 d.C.",
    antes: "Paulo dá instruções sobre a vida em comunidade, exortando os romanos a amarem sinceramente.",
    versiculo: "✅ Alegrai-vos com os que se alegram; e chorai com os que choram.",
    depois: "A empatia é a marca da comunidade cristã. Alegrar-se com os que se alegram requer ausência de inveja. Chorar com os que choram requer compaixão ativa.",
    tags: "alegrar / chorar / empatia",
    assuntos: ["corinto", "paulo", "empatia", "comunhao", "amor"]
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
    data: "~60-65 d.C.",
    antes: "Pedro escreve a cristãos dispersos enfrentando perseguição, exortando-os a crescerem espiritualmente.",
    versiculo: "✅ Desejai afetuosamente, como meninos novamente nascidos, o leite racional, não falsificado, para que por ele vades crescendo.",
    depois: "O novo crente deve desejar a Palavra de Deus como um bebê deseja o leite. O crescimento espiritual não é automático; requer desejo e ingestão constante da Palavra.",
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
    data: "~30 d.C.",
    antes: "Pedro e João foram presos pelo Sinédrio após curar um homem coxo. Ameaçados de não falar mais no nome de Jesus, responderam:",
    versiculo: "✅ Porque não podemos deixar de falar do que temos visto e ouvido.",
    depois: "A experiência pessoal com Cristo criou uma compulsão irresistível para testemunhar. A gratidão pela salvação transformou-se em missão.",
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
    data: "~64-67 d.C.",
    antes: "Paulo está na prisão em Roma, advertindo sobre os últimos dias e a perseguição esperada para os que vivem piedosamente.",
    versiculo: "✅ E também todos os que piamente querem viver em Cristo Jesus padecerão perseguições.",
    depois: "A vida cristã não é isenta de sofrimento. A perseguição é esperada para aqueles que vivem piedosamente.",
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
    periodo: "Período Romano",
    periodoDatas: "63 a.C. - 70 d.C.",
    data: "~28 d.C.",
    antes: "Jesus já havia proclamado as bem-aventuranças. Agora aplica diretamente aos discípulos a questão da perseguição.",
    versiculo: "✅ Bem-aventurados sois vós, quando vos injuriarem e perseguirem e, mentindo, disserem todo o mal contra vós por minha causa. Exultai e alegrai-vos, porque é grande o vosso galardão nos céus; porque assim perseguiram os profetas que foram antes de vós.",
    depois: "A perseguição não é uma maldição, mas coloca os discípulos na mesma linhagem dos profetas do Antigo Testamento. A recompensa no céu é grande para os que sofrem por causa do evangelho.",
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
    data: "~60-65 d.C.",
    antes: "O autor de Hebreus lista heróis da fé que sofreram perseguições severas: apedrejados, serrados ao meio, mortos à espada.",
    versiculo: "✅ (Dos quais o mundo não era digno.) Errante pelos desertos, e montes, e pelas covas e cavernas da terra.",
    depois: "Todos esses heróis, embora aprovados pela fé, não alcançaram a promessa em vida. Deus proveu algo melhor para nós.",
    tags: "mundo / não é digno / fé",
    assuntos: ["roma", "autor-hebreus", "perseguicao", "herois-da-fe", "sofrimento"]
  },

  // 281. 2 Coríntios 2.14-17 (versão com periodoHumanidade)
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
    antes: "Paulo descreve sua experiência como apóstolo usando a metáfora do triunfo militar romano, onde o incenso era queimado no desfile.",
    versiculo: "⚠️ Mas graças a Deus, que sempre nos faz triunfar em Cristo, e por nós manifesta em todo o lugar o cheiro do seu conhecimento. Porque para Deus somos o bom cheiro de Cristo, nos que se salvam e nos que se perdem. Para uns certamente cheiro de morte para morte; mas para outros cheiro de vida para vida. E para estas coisas, quem é suficiente? Porque não somos como muitos, que falsificam a palavra de Deus; antes, é com sinceridade, mas como de Deus, falamos na presença de Deus, em Cristo.",
    depois: "Paulo contrasta a pregação sincera do evangelho com a falsificação promovida por falsos mestres. O evangelho é como um incenso que traz vida para uns e morte para outros.",
    tags: "triunfo / fragrância / Cristo / sinceridade",
    assuntos: ["filipos", "paulo", "evangelho", "falsos-mestres", "sinceridade"]
  },

  // 282. Atos 8.18-20
  {
    id: "at8.18-20",
    referencia: "At 8.18-20",
    local: "Samaria (Israel)",
    paisAtual: "Israel",
    lider: "Pedro",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    data: "~35-36 d.C.",
    antes: "Filipe pregou em Samaria e muitos creram. Simão, o mágico, foi batizado mas estava mais interessado no poder dos apóstolos. Pedro e João foram enviados para que os novos convertidos recebessem o Espírito Santo.",
    versiculo: "✅ Vendo, pois, Simão que pela imposição das mãos dos apóstolos era dado o Espírito Santo, ofereceu-lhes dinheiro, dizendo: Dai-me também a mim esse poder, para que aquele sobre quem eu impuser as mãos receba o Espírito Santo. Mas Pedro lhe disse: O teu dinheiro seja contigo para perdição, pois cuidaste que o dom de Deus se compra com dinheiro.",
    depois: "Este episódio deu origem ao termo 'simonia' - a compra ou venda de coisas sagradas. A igreja sempre rejeitou a comercialização da fé.",
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
    data: "~55-56 d.C.",
    antes: "Paulo contrasta sua pregação sincera com a de falsos mestres que mercantilizam a Palavra de Deus.",
    versiculo: "✅ Porque não somos como muitos, que falsificam a palavra de Deus; antes, é com sinceridade, mas como de Deus, falamos na presença de Deus, em Cristo.",
    depois: "Paulo reafirma sua integridade ministerial. O grego 'kapeleuontes' (falsificam) significa comercializar — como um vendedor que adultera a mercadoria para obter lucro.",
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
    data: "~60-62 d.C.",
    antes: "Paulo contrasta sua antiga confiança na carne (como fariseu) com sua nova confiança em Cristo, expressando o desejo de conhecê-Lo intimamente.",
    versiculo: "✅ Para o conhecer, e o poder da sua ressurreição, e a comunicação das suas aflições, sendo feito conformável com a sua morte.",
    depois: "Paulo não considera que já tenha alcançado, mas prossegue para o alvo: o prêmio da soberana vocação de Deus em Cristo Jesus.",
    tags: "conhecer / Cristo / sofrimento / ressurreição",
    assuntos: ["roma", "paulo", "conhecimento-cristo", "sofrimento", "ressurreicao"]
  },
    // ==================== CONTINUAÇÃO DOS NOVOS CONTEXTOS (A PARTIR DO ID 285) ====================

  // 285. 1 Pedro 5.2
  {
    id: "1pe5.2",
    referencia: "1 Pe 5.2",
    local: "Roma / Itália (Itália)",
    paisAtual: "Itália",
    lider: "Nero",
    liderReinado: "54-68 d.C.",
    periodo: "Império Romano",
    periodoDatas: "27 a.C. - 476 d.C.",
    periodoHumanidade: "Idade Antiga",
    periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
    data: "~60-65 d.C.",
    antes: "Pedro escrevia aos presbíteros (anciãos) das igrejas, exortando-os como alguém que também era presbítero e testemunha dos sofrimentos de Cristo.",
    versiculo: "✅ Apascentai o rebanho de Deus, que está entre vós, tendo cuidado dele, não por força, mas voluntariamente; nem por torpe ganância, mas de ânimo pronto.",
    depois: "Pedro exorta os presbíteros a não dominarem sobre o rebanho, mas a serem exemplos para ele. Quando o Sumo Pastor aparecer, eles receberão a coroa da glória que não murcha.",
    tags: "pastores / rebanho / voluntário / exemplo",
    assuntos: ["roma", "pedro", "pastoral", "lideranca-igreja"]
  },

  // 286. 1 Pedro 5.4
  {
    id: "1pe5.4",
    referencia: "1 Pe 5.4",
    local: "Roma / Itália (Itália)",
    paisAtual: "Itália",
    lider: "Nero",
    liderReinado: "54-68 d.C.",
    periodo: "Império Romano",
    periodoDatas: "27 a.C. - 476 d.C.",
    periodoHumanidade: "Idade Antiga",
    periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
    data: "~60-65 d.C.",
    antes: "Pedro havia instruído os presbíteros sobre como pastorear o rebanho de Deus. Ele agora fala sobre a recompensa futura para aqueles que servem fielmente.",
    versiculo: "✅ E, quando aparecer o Sumo Pastor, alcançareis a incorruptível coroa da glória.",
    depois: "Pedro exorta os mais jovens a se submeterem aos mais velhos e todos a vestirem a humildade. Ele conclui que Deus resiste aos soberbos, mas dá graça aos humildes.",
    tags: "sumo pastor / coroa / glória / incorruptível",
    assuntos: ["roma", "pedro", "pastoral", "galardao"]
  },

  // 287. Atos 20.28-29
  {
    id: "at20.28-29",
    referencia: "At 20.28-29",
    local: "Mileto / Ásia Menor (Turquia)",
    paisAtual: "Turquia",
    lider: "Nero",
    liderReinado: "54-68 d.C.",
    periodo: "Império Romano",
    periodoDatas: "27 a.C. - 476 d.C.",
    periodoHumanidade: "Idade Antiga",
    periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
    data: "~57 d.C.",
    antes: "Paulo convocou os anciãos da igreja de Éfeso para encontrá-lo em Mileto. Ele sabia que não os veria novamente e fez um discurso de despedida.",
    versiculo: "⚠️ Paulo exorta os anciãos a cuidarem de si mesmos e de todo o rebanho sobre o qual o Espírito Santo os constituiu bispos. Ele os adverte que depois de sua partida entrarão entre eles lobos vorazes que não pouparão o rebanho. Também alerta que dentre os próprios anciãos se levantarão homens falando coisas pervertidas para atrair discípulos após si.",
    depois: "Paulo os lembra que por três anos não cessou de advertir cada um com lágrimas. Ele os entrega a Deus e à palavra da sua graça, que pode edificá-los e dar-lhes herança entre os santos.",
    tags: "anciãos / bispos / rebanho / lobos",
    assuntos: ["mileto", "paulo", "lideranca-igreja", "pastoral", "falsos-mestres"]
  },

  // 288. Atos 20.29
  {
    id: "at20.29",
    referencia: "At 20.29",
    local: "Mileto / Ásia Menor (Turquia)",
    paisAtual: "Turquia",
    lider: "Nero",
    liderReinado: "54-68 d.C.",
    periodo: "Império Romano",
    periodoDatas: "27 a.C. - 476 d.C.",
    periodoHumanidade: "Idade Antiga",
    periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
    data: "~57 d.C.",
    antes: "Paulo estava se despedindo dos anciãos de Éfeso em Mileto. Ele os exortou a cuidarem do rebanho e agora faz uma advertência específica sobre o futuro.",
    versiculo: "✅ Porque eu sei isto: que, depois da minha partida, entrarão no meio de vós lobos cruéis, que não pouparão o rebanho.",
    depois: "Paulo continua advertindo que até mesmo dentre os próprios anciãos se levantarão homens falando coisas pervertidas para atrair discípulos. Ele os lembra de sua fidelidade por três anos e os entrega a Deus.",
    tags: "lobos / rebanho / partida / cruéis",
    assuntos: ["mileto", "paulo", "pastoral", "falsos-mestres"]
  },

  // 289. Atos 6.1-4
  {
    id: "at6.1-4",
    referencia: "At 6.1-4",
    local: "Jerusalém / Judéia (Israel)",
    paisAtual: "Israel",
    lider: "Apóstolos",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    periodoHumanidade: "Idade Antiga",
    periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
    data: "~30-35 d.C.",
    antes: "A igreja primitiva crescia rapidamente em Jerusalém. Os crentes compartilhavam tudo em comum, mas uma queixa surgiu entre os judeus helenistas e os hebreus.",
    versiculo: "⚠️ Nesses dias, multiplicando-se os discípulos, houve murmuração dos gregos contra os hebreus, porque as suas viúvas eram desprezadas no serviço cotidiano. Os doze convocaram a multidão dos discípulos e disseram que não era razoável que deixassem a palavra de Deus para servir às mesas. Eles escolheram sete homens de boa reputação, cheios do Espírito Santo e de sabedoria, para este serviço, enquanto os apóstolos se dedicariam à oração e ao ministério da palavra.",
    depois: "Este relato escolheu como primeiros diáconos Estevão, Filipe, Prócoro, Nicanor, Timão, Pármenas e Nicolau. A palavra de Deus crescia, e multiplicava-se o número dos discípulos em Jerusalém.",
    tags: "diáconos / serviço / mesas / oração",
    assuntos: ["jerusalem", "apostolos", "diaconato", "igreja-primitiva"]
  },

  // 290. Hebreus 13.20
  {
    id: "hb13.20",
    referencia: "Hb 13.20",
    local: "Roma / Itália (Itália)",
    paisAtual: "Itália",
    lider: "",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    periodoHumanidade: "Idade Antiga",
    periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
    data: "~60-65 d.C.",
    antes: "O autor de Hebreus estava concluindo a carta com exortações práticas e uma bênção final. Ele havia falado sobre obediência aos líderes e sobre a graça divina.",
    versiculo: "✅ Ora, o Deus de paz, que pelo sangue da aliança eterna tornou a trazer dentre os mortos a nosso Senhor Jesus Cristo, grande pastor das ovelhas.",
    depois: "O autor conclui com uma oração para que Deus aperfeiçoe os leitores em toda boa obra, fazendo neles o que é agradável diante dele. A carta termina com saudações e uma bênção.",
    tags: "Deus de paz / sangue / aliança / pastor",
    assuntos: ["roma", "autor-hebreus", "alianca", "pastor-divino"]
  },

  // 291. 1 Coríntios 12.5
  {
    id: "1co12.5",
    referencia: "1 Co 12.5",
    local: "Corinto / Acaia (Grécia)",
    paisAtual: "Grécia",
    lider: "Nero",
    liderReinado: "54-68 d.C.",
    periodo: "Império Romano",
    periodoDatas: "27 a.C. - 476 d.C.",
    periodoHumanidade: "Idade Antiga",
    periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
    data: "~55 d.C.",
    antes: "Paulo inicia a discussão sobre os dons espirituais. Ele quer que os coríntios entendam a diversidade e a unidade na distribuição dos dons.",
    versiculo: "✅ E há diversidade de ministérios, mas o mesmo Senhor.",
    depois: "Paulo continua dizendo que há diversidade de operações, mas o mesmo Deus opera tudo em todos. A manifestação do Espírito é dada a cada um para o proveito comum.",
    tags: "ministérios / diversidade / Senhor",
    assuntos: ["corinto", "paulo", "dons-espirituais", "ministerio"]
  },

  // 292. Efésios 4.11
  {
    id: "ef4.11",
    referencia: "Ef 4.11",
    local: "Roma / Itália (Itália)",
    paisAtual: "Itália",
    lider: "Nero",
    liderReinado: "54-68 d.C.",
    periodo: "Império Romano",
    periodoDatas: "27 a.C. - 476 d.C.",
    periodoHumanidade: "Idade Antiga",
    periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
    data: "~60-62 d.C.",
    antes: "Paulo havia falado sobre a unidade da fé e do conhecimento do Filho de Deus. Ele agora lista os dons de liderança que Cristo deu à igreja.",
    versiculo: "✅ E ele mesmo deu uns para apóstolos, e outros para profetas, e outros para evangelistas, e outros para pastores e doutores.",
    depois: "Paulo explica o propósito desses dons: aperfeiçoar os santos para a obra do ministério, para edificação do corpo de Cristo, até que todos cheguem à unidade da fé.",
    tags: "apóstolos / profetas / evangelistas / pastores",
    assuntos: ["roma", "paulo", "dons-espirituais", "lideranca-igreja"]
  },

  // 293. Efésios 4.13
  {
    id: "ef4.13b",
    referencia: "Ef 4.13",
    local: "Roma / Itália (Itália)",
    paisAtual: "Itália",
    lider: "Nero",
    liderReinado: "54-68 d.C.",
    periodo: "Império Romano",
    periodoDatas: "27 a.C. - 476 d.C.",
    periodoHumanidade: "Idade Antiga",
    periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
    data: "~60-62 d.C.",
    antes: "Paulo listou os dons de liderança dados por Cristo à igreja. Ele agora explica o objetivo final desses dons.",
    versiculo: "✅ Até que todos cheguemos à unidade da fé e do conhecimento do Filho de Deus, ao estado de homem perfeito, à medida da estatura da plenitude de Cristo.",
    depois: "Paulo exorta os efésios a não serem mais meninos inconstantes, levados por todo vento de doutrina. Em vez disso, devem crescer em tudo naquele que é a cabeça, Cristo.",
    tags: "unidade / fé / conhecimento / perfeito",
    assuntos: ["roma", "paulo", "maturidade-crista", "unidade-igreja"]
  },

  // 294. Salmo 150.1-6
  {
    id: "sl150.1-6",
    referencia: "Sl 150.1-6",
    local: "Jerusalém / Judá (Israel)",
    paisAtual: "Israel",
    lider: "Davi",
    liderReinado: "1010-970 a.C.",
    periodo: "Reino Unido",
    periodoDatas: "1010-970 a.C.",
    periodoHumanidade: "Idade Antiga",
    periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
    data: "~1000 a.C.",
    antes: "Este é o salmo final do Saltério. Davi convoca toda a criação a louvar a Deus com todos os instrumentos musicais disponíveis no culto do templo.",
    versiculo: "📖 O Salmo 150 convoca todo ser vivente a louvar ao Senhor. O salmista lista nove instrumentos musicais: trombeta, saltério, harpa, adufe, dança, instrumentos de cordas, órgão, címbalos sonoros e címbalos retumbantes. Ele declara que o louvor deve ser oferecido no santuário e no firmamento do seu poder. Tudo o que tem fôlego deve louvar ao Senhor.",
    depois: "A tradição judaica e cristã adotou este salmo como o clímax da adoração litúrgica. Ele é frequentemente recitado no final dos serviços de louvor e em celebrações festivas.",
    tags: "louvor / instrumentos / fôlego / adoração",
    assuntos: ["jerusalem", "salmos", "davi", "adoracao", "louvor"]
  },

  // 295. Marcos 10.45
  {
    id: "mc10.45",
    referencia: "Mc 10.45",
    local: "Cafarnaum / Galileia (Israel)",
    paisAtual: "Israel",
    lider: "Tibério",
    liderReinado: "14-37 d.C.",
    periodo: "Império Romano",
    periodoDatas: "27 a.C. - 476 d.C.",
    periodoHumanidade: "Idade Antiga",
    periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
    data: "~29-30 d.C.",
    antes: "Tiago e João haviam pedido lugares de honra no reino de Jesus. Os outros discípulos se indignaram com o pedido, e Jesus os chamou para ensinar sobre o verdadeiro serviço.",
    versiculo: "✅ Porque o Filho do Homem também não veio para ser servido, mas para servir, e para dar a sua vida em resgate de muitos.",
    depois: "Jesus curou um cego chamado Bartimeu em Jericó. O cego clamou por misericórdia, e Jesus o curou, restaurando sua visão. O homem seguiu Jesus pelo caminho.",
    tags: "servir / resgate / Filho do Homem / vida",
    assuntos: ["cafarnaum", "jesus", "servico", "redenção"]
  },

  // 296. Gálatas 6.1
  {
    id: "gl6.1",
    referencia: "Gl 6.1",
    local: "Galácia / Ásia Menor (Turquia)",
    paisAtual: "Turquia",
    lider: "Nero",
    liderReinado: "54-68 d.C.",
    periodo: "Império Romano",
    periodoDatas: "27 a.C. - 476 d.C.",
    periodoHumanidade: "Idade Antiga",
    periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
    data: "~49-55 d.C.",
    antes: "Paulo estava concluindo a carta aos Gálatas. Ele havia falado sobre a liberdade cristã e o andar no Espírito. Agora ele dá instruções práticas sobre como restaurar os que caem.",
    versiculo: "✅ Irmãos, se alguém for surpreendido nalguma ofensa, vós, que sois espirituais, encorrigi-o com espírito de mansidão; e guarda-te a ti mesmo, para que também não sejas tentado.",
    depois: "Paulo instrui os gálatas a carregarem as cargas uns dos outros, cumprindo assim a lei de Cristo. Ele alerta que ninguém se engane a si mesmo, pois o que semeia, também colherá.",
    tags: "restaurar / mansidão / tentação / espiritual",
    assuntos: ["galacia", "paulo", "restauracao", "comunidade-crista"]
  },

  // 297. 1 Pedro 1.16
  {
    id: "1pe1.16",
    referencia: "1 Pe 1.16",
    local: "Roma / Itália (Itália)",
    paisAtual: "Itália",
    lider: "Nero",
    liderReinado: "54-68 d.C.",
    periodo: "Império Romano",
    periodoDatas: "27 a.C. - 476 d.C.",
    periodoHumanidade: "Idade Antiga",
    periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
    data: "~60-65 d.C.",
    antes: "Pedro escrevia aos cristãos dispersos, exortando-os a viverem como santos. Ele citava o Antigo Testamento para mostrar que a santidade sempre foi o padrão de Deus.",
    versiculo: "✅ Porquanto está escrito: Sede santos, porque eu sou santo.",
    depois: "Pedro exorta os cristãos a invocarem a Deus como Pai, vivendo com temor durante o tempo de peregrinação. Eles foram resgatos não com coisas corruptíveis, mas com o precioso sangue de Cristo.",
    tags: "santidade / santo / imitação / Deus",
    assuntos: ["roma", "pedro", "santificacao", "santidade"]
  },

  // 298. 1 Pedro 1.15-16
  {
    id: "1pe1.15-16",
    referencia: "1 Pe 1.15-16",
    local: "Roma / Itália (Itália)",
    paisAtual: "Itália",
    lider: "Nero",
    liderReinado: "54-68 d.C.",
    periodo: "Império Romano",
    periodoDatas: "27 a.C. - 476 d.C.",
    periodoHumanidade: "Idade Antiga",
    periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
    data: "~60-65 d.C.",
    antes: "Pedro havia exortado os cristãos a prepararem suas mentes para a ação, sendo sóbrios e esperando na graça. Ele os lembra que foram redimidos pelo sangue de Cristo.",
    versiculo: "⚠️ Pedro exorta os cristãos a serem santos em toda a sua maneira de viver, como filhos obedientes que não se conformam com as paixões que tinham antes. Ele cita o Antigo Testamento: 'Sede santos, porque eu sou santo'. A santidade deve caracterizar a vida do crente, pois Deus, que os chamou, é santo.",
    depois: "Pedro continua ensinando que os cristãos devem invocar a Deus como Pai, vivendo com temor durante o tempo de peregrinação. Eles foram resgatos não com ouro ou prata, mas com o sangue de Cristo.",
    tags: "santidade / obediência / conformação / paixões",
    assuntos: ["roma", "pedro", "santificacao", "santidade"]
  },

  // 299. 1 Pedro 2.12
  {
    id: "1pe2.12",
    referencia: "1 Pe 2.12",
    local: "Roma / Itália (Itália)",
    paisAtual: "Itália",
    lider: "Nero",
    liderReinado: "54-68 d.C.",
    periodo: "Império Romano",
    periodoDatas: "27 a.C. - 476 d.C.",
    periodoHumanidade: "Idade Antiga",
    periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
    data: "~60-65 d.C.",
    antes: "Pedro exortou os cristãos a se absterem das paixões carnais que combatem contra a alma. Ele os chama de estrangeiros e peregrinos neste mundo.",
    versiculo: "✅ Tendo o vosso procedimento honesto entre os gentios, para que, naquilo em que falam mal de vós, como de malfeitores, glorifiquem a Deus no dia da visitação, pelas boas obras que em vós contemplarem.",
    depois: "Pedro continua ensinando sobre submissão às autoridades humanas e a todos os homens por amor do Senhor. Ele usa o exemplo de Cristo, que sofreu injustamente, como modelo para os cristãos.",
    tags: "procedimento / gentios / testemunho / boas obras",
    assuntos: ["roma", "pedro", "testemunho-cristao", "missao"]
  },

  // 300. 1 Coríntios 5.6
  {
    id: "1co5.6",
    referencia: "1 Co 5.6",
    local: "Corinto / Acaia (Grécia)",
    paisAtual: "Grécia",
    lider: "Nero",
    liderReinado: "54-68 d.C.",
    periodo: "Império Romano",
    periodoDatas: "27 a.C. - 476 d.C.",
    periodoHumanidade: "Idade Antiga",
    periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
    data: "~55 d.C.",
    antes: "Paulo havia ouvido que havia imoralidade sexual na igreja de Corinto, algo que nem mesmo entre os gentios era tolerado. Ele escreve para corrigir essa situação.",
    versiculo: "✅ Não é boa a vossa jactância. Não sabeis que um pouco de fermento leveda toda a massa?",
    depois: "Paulo ordena que a igreja remova o malfeitor do meio deles. Ele usa a metáfora do fermento para mostrar como o pecado não tratado contamina toda a comunidade.",
    tags: "fermento / massa / jactância / contaminação",
    assuntos: ["corinto", "paulo", "pecado", "disciplina-igreja"]
  },

  // 301. 1 Coríntios 9.22
  {
    id: "1co9.22",
    referencia: "1 Co 9.22",
    local: "Corinto / Acaia (Grécia)",
    paisAtual: "Grécia",
    lider: "Nero",
    liderReinado: "54-68 d.C.",
    periodo: "Império Romano",
    periodoDatas: "27 a.C. - 476 d.C.",
    periodoHumanidade: "Idade Antiga",
    periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
    data: "~55 d.C.",
    antes: "Paulo estava defendendo seu direito de receber sustento do evangelho, mas ele se absteve desse direito para não colocar obstáculos ao evangelho.",
    versiculo: "✅ Para com os fracos me fiz fraco, para ganhar os fracos; fiz-me tudo para todos, para por todos os meios chegar a salvar alguns.",
    depois: "Paulo explica que ele faz tudo por causa do evangelho, para ser participante dele com os outros. Ele se disciplina para não se tornar reprovado após ter pregado.",
    tags: "ganhar / fraco / tudo / salvar",
    assuntos: ["corinto", "paulo", "evangelho", "adaptacao"]
  },

  // 302. Isaías 5.20
  {
    id: "is5.20",
    referencia: "Is 5.20",
    local: "Jerusalém / Judá (Israel)",
    paisAtual: "Israel",
    lider: "Ezequias",
    liderReinado: "715-686 a.C.",
    periodo: "Reino de Judá (Sul)",
    periodoDatas: "930-586 a.C.",
    periodoHumanidade: "Idade Antiga",
    periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
    data: "~740-700 a.C.",
    antes: "Isaías proferia um cântico contra o povo de Judá. Ele listava seis 'ais' contra os pecados do povo, incluindo a inversão de valores morais.",
    versiculo: "✅ Ai dos que ao mal chamam bem, e ao bem mal; que fazem das trevas luz, e da luz trevas; e fazem do amargo doce, e do doce amargo!",
    depois: "Isaías continua os seis ais, denunciando os sábios aos seus próprios olhos e os heróis para beber vinho. O profeta anuncia que o povo será levado cativo por causa de sua desobediência.",
    tags: "mal / bem / trevas / luz / inversão",
    assuntos: ["jerusalem", "isaias", "justica", "pecado"]
  },

  // 303. Tiago 5.16
  {
    id: "tg5.16",
    referencia: "Tg 5.16",
    local: "Jerusalém / Judéia (Israel)",
    paisAtual: "Israel",
    lider: "Tiago",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    periodoHumanidade: "Idade Antiga",
    periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
    data: "~45-50 d.C.",
    antes: "Tiago havia instruído sobre a oração da fé para curar os doentes. Ele falou sobre o óleo, a oração e o perdão dos pecados.",
    versiculo: "✅ Confessai, pois, os vossos pecados uns aos outros, e orai uns pelos outros, para que sareis. A oração do justo pode muito em seus efeitos.",
    depois: "Tiago usa o exemplo de Elias para mostrar o poder da oração. Ele era homem sujeito às mesmas paixões que nós, mas orou fervorosamente para que não chovesse, e assim aconteceu.",
    tags: "confissão / oração / justo / efeitos",
    assuntos: ["jerusalem", "tiago", "confissao", "oração", "comunhao"]
  },

  // 304. Tiago 1.27
  {
    id: "tg1.27",
    referencia: "Tg 1.27",
    local: "Jerusalém / Judéia (Israel)",
    paisAtual: "Israel",
    lider: "Tiago",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    periodoHumanidade: "Idade Antiga",
    periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
    data: "~45-50 d.C.",
    antes: "Tiago havia falado sobre ouvir e praticar a palavra. Ele distingue a religião pura e sem mácula diante de Deus.",
    versiculo: "✅ A religião pura e imaculada para com Deus e Pai, é esta: Visitar os órfãos e as viúvas nas suas tribulações, e guardar-se da corrupção do mundo.",
    depois: "Tiago exorta os irmãos a não fazerem acepção de pessoas. A fé verdadeira se manifesta em obras práticas de amor e justiça.",
    tags: "religião / órfãos / viúvas / mundo",
    assuntos: ["jerusalem", "tiago", "justica-social", "religiao-pura"]
  },

  // 305. Tiago 4.7
  {
    id: "tg4.7",
    referencia: "Tg 4.7",
    local: "Jerusalém / Judéia (Israel)",
    paisAtual: "Israel",
    lider: "Tiago",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    periodoHumanidade: "Idade Antiga",
    periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
    data: "~45-50 d.C.",
    antes: "Tiago havia confrontado os conflitos e brigas entre os crentes, que vinham das paixões que guerreavam dentro deles. Ele os exortou a se humilhar diante de Deus.",
    versiculo: "✅ Sujeitai-vos, pois, a Deus; resisti ao diabo, e ele fugirá de vós.",
    depois: "Tiago continua exortando os irmãos a se chegarem a Deus, e ele se chegará a eles. Eles devem purificar as mãos e os corações, e humilhar-se diante do Senhor.",
    tags: "sujeitar / resistir / diabo / fugir",
    assuntos: ["jerusalem", "tiago", "resistencia", "diabo"]
  },

  // 306. João 8.11
  {
    id: "jo8.11",
    referencia: "Jo 8.11",
    local: "Jerusalém / Judéia (Israel)",
    paisAtual: "Israel",
    lider: "Tibério",
    liderReinado: "14-37 d.C.",
    periodo: "Império Romano",
    periodoDatas: "27 a.C. - 476 d.C.",
    periodoHumanidade: "Idade Antiga",
    periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
    data: "~28-29 d.C.",
    antes: "Jesus estava ensinando no templo quando os escribas e fariseus trouxeram uma mulher apanhada em adultério. Eles a colocaram no meio e perguntaram a Jesus se ela deveria ser apedrejada.",
    versiculo: "✅ E ela disse: Ninguém, Senhor. E Jesus lhe disse: Nem eu te condeno; vai-te, e não peques mais.",
    depois: "Jesus é a luz do mundo. Ele continuou ensinando no templo, declarando que quem o segue não anda em trevas, mas terá a luz da vida.",
    tags: "adultério / condenação / perdão / pecado",
    assuntos: ["jerusalem", "jesus", "perdao", "misericordia"]
  },

  // 307. João 8.12
  {
    id: "jo8.12",
    referencia: "Jo 8.12",
    local: "Jerusalém / Judéia (Israel)",
    paisAtual: "Israel",
    lider: "Tibério",
    liderReinado: "14-37 d.C.",
    periodo: "Império Romano",
    periodoDatas: "27 a.C. - 476 d.C.",
    periodoHumanidade: "Idade Antiga",
    periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
    data: "~28-29 d.C.",
    antes: "Jesus havia acabado de perdoar a mulher adúltera e os escribas e fariseus haviam se retirado. Jesus continuou seu ensino no templo.",
    versiculo: "✅ Falou-lhes, pois, Jesus outra vez, dizendo: Eu sou a luz do mundo; quem me segue não andará em trevas, mas terá a luz da vida.",
    depois: "Os fariseus contestaram Jesus, dizendo que seu testemunho não era válido. Jesus respondeu que seu testemunho era verdadeiro porque sabia de onde vinha e para onde ia.",
    tags: "luz / trevas / seguir / vida",
    assuntos: ["jerusalem", "jesus", "luz", "discipulado"]
  },

  // 308. João 15.18-19
  {
    id: "jo15.18-19",
    referencia: "Jo 15.18-19",
    local: "Jerusalém / Judéia (Israel)",
    paisAtual: "Israel",
    lider: "Tibério",
    liderReinado: "14-37 d.C.",
    periodo: "Império Romano",
    periodoDatas: "27 a.C. - 476 d.C.",
    periodoHumanidade: "Idade Antiga",
    periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
    data: "~30 d.C.",
    antes: "Jesus estava falando com os discípulos na véspera de sua morte. Ele havia falado sobre a videira verdadeira, a permanência e o amor. Agora ele aborda o ódio do mundo.",
    versiculo: "⚠️ Jesus adverte os discípulos que o mundo os odiará, mas que isso não é surpresa, pois odiou primeiro a ele. Se fossem do mundo, o mundo amaria o que é seu; mas porque não são do mundo, mas ele os escolheu do mundo, o mundo os odeia. A perseguição é inevitável para aqueles que seguem a Cristo.",
    depois: "Jesus continua dizendo que lembrarão da palavra que ele lhes disse: 'Não é o servo maior do que o seu senhor'. Se perseguiram a ele, também perseguirão a eles. O Espírito Santo testemunhará deles.",
    tags: "mundo / ódio / escolhidos / perseguição",
    assuntos: ["jerusalem", "jesus", "perseguicao", "mundo"]
  },

  // 309. Mateus 7.3-5
  {
    id: "mt7.3-5",
    referencia: "Mt 7.3-5",
    local: "Galileia / Monte das Bem-aventuranças (Israel)",
    paisAtual: "Israel",
    lider: "Tibério",
    liderReinado: "14-37 d.C.",
    periodo: "Império Romano",
    periodoDatas: "27 a.C. - 476 d.C.",
    periodoHumanidade: "Idade Antiga",
    periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
    data: "~28 d.C.",
    antes: "Jesus estava ensinando no Sermão da Montanha. Ele havia falado sobre julgar os outros e agora ensina sobre a hipocrisia de julgar sem examinar a si mesmo.",
    versiculo: "⚠️ Jesus ensina que não devemos julgar os outros para não sermos julgados. Ele usa a imagem de um cisco no olho do irmão e uma trave no próprio olho. Antes de tirar o cisco do olho do irmão, deve-se primeiro tirar a trave do próprio olho. Só então se pode ver claramente para ajudar o irmão.",
    depois: "Jesus conclui que não se deve dar coisas santas aos cães nem atirar pérolas aos porcos. Ele ensina sobre a oração e a regra de ouro.",
    tags: "cisco / trave / hipocrisia / julgar",
    assuntos: ["galileia", "jesus", "julgamento", "hipocrisia"]
  },

  // 310. 2 Coríntios 2.6-8
  {
    id: "2co2.6-8",
    referencia: "2 Co 2.6-8",
    local: "Filipos / Macedônia (Grécia)",
    paisAtual: "Grécia",
    lider: "Nero",
    liderReinado: "54-68 d.C.",
    periodo: "Império Romano",
    periodoDatas: "27 a.C. - 476 d.C.",
    periodoHumanidade: "Idade Antiga",
    periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
    data: "~55-56 d.C.",
    antes: "Paulo estava escrevendo sobre a disciplina na igreja de Corinto. Havia um homem que havia pecado e foi disciplinado pela igreja. Paulo agora instrui sobre a restauração.",
    versiculo: "⚠️ Paulo instrui os coríntios a perdoarem e confortarem o homem que havia sido disciplinado, para que não seja consumido por excessiva tristeza. Ele os exorta a confirmar o amor para com ele. A disciplina deve ser seguida de restauração e perdão.",
    depois: "Paulo escreve para provar a obediência dos coríntios. Ele os perdoa também para que Satanás não obtenha vantagem sobre eles. A igreja deve ser uma comunidade de graça e restauração.",
    tags: "perdão / conforto / restauração / amor",
    assuntos: ["filipos", "paulo", "disciplina-igreja", "restauracao"]
  },

  // 311. 1 Timóteo 1.15
  {
    id: "1tm1.15",
    referencia: "1 Tm 1.15",
    local: "Éfeso / Ásia Menor (Turquia)",
    paisAtual: "Turquia",
    lider: "Nero",
    liderReinado: "54-68 d.C.",
    periodo: "Império Romano",
    periodoDatas: "27 a.C. - 476 d.C.",
    periodoHumanidade: "Idade Antiga",
    periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
    data: "~62-64 d.C.",
    antes: "Paulo escreve a Timóteo, seu filho na fé, para orientá-lo sobre o ministério em Éfeso. Ele fala sobre falsos mestres e a importância da sã doutrina.",
    versiculo: "✅ Fiel é esta palavra, e digna de toda a aceitação: que Cristo Jesus veio ao mundo para salvar os pecadores, dos quais eu sou o principal.",
    depois: "Paulo diz que recebeu misericórdia para que Cristo mostrasse nele toda a sua longanimidade, para exemplo dos que haviam de crer nele para a vida eterna.",
    tags: "fiel / palavra / salvar / pecadores",
    assuntos: ["efeso", "paulo", "salvacao", "misericordia"]
  },

  // 312. Romanos 3.23
  {
    id: "rm3.23",
    referencia: "Rm 3.23",
    local: "Corinto / Acaia (Grécia)",
    paisAtual: "Grécia",
    lider: "Nero",
    liderReinado: "54-68 d.C.",
    periodo: "Império Romano",
    periodoDatas: "27 a.C. - 476 d.C.",
    periodoHumanidade: "Idade Antiga",
    periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
    data: "~57 d.C.",
    antes: "Paulo havia estabelecido que todos, judeus e gentios, estão sob o pecado. Ele citou o Antigo Testamento para provar a universalidade do pecado.",
    versiculo: "✅ Porque todos pecaram e destituídos estão da glória de Deus.",
    depois: "Paulo continua explicando que a justificação é gratuita pela graça, mediante a redenção que há em Cristo Jesus. Deus o propôs como propiciação através da fé em seu sangue.",
    tags: "pecado / glória / destituídos / universal",
    assuntos: ["corinto", "paulo", "pecado-universal", "depravacao-total"]
  },

  // 313. Ezequiel 33.7-9
  {
    id: "ez33.7-9",
    referencia: "Ez 33.7-9",
    local: "Babilônia / Mesopotâmia (Iraque)",
    paisAtual: "Iraque",
    lider: "Nabucodonosor",
    liderReinado: "605-562 a.C.",
    periodo: "Exílio Babilônico",
    periodoDatas: "586-539 a.C.",
    periodoHumanidade: "Idade Antiga",
    periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
    data: "~570-560 a.C.",
    antes: "Ezequiel estava exilado na Babilônia com o povo de Judá. Deus o chama para ser sentinela sobre a casa de Israel, advertindo o povo sobre o pecado e o juízo.",
    versiculo: "⚠️ Deus constitui Ezequiel como atalaia para a casa de Israel. Ele deve ouvir a palavra de Deus e advertir os ímpios de seus caminhos. Se ele não advertir o ímpio, o ímpio morrerá em seu pecado, mas o sangue do ímpio será requerido das mãos do atalaia. Mas se ele advertir o ímpio e ele não se converter, o ímpio morrerá em seu pecado, e o atalaia livrará sua alma.",
    depois: "Ezequiel é instruído a dizer ao povo que a justiça do justo não o livrará no dia da transgressão, nem a impiedade do ímpio o fará cair no dia em que se converter. O arrependimento é sempre possível.",
    tags: "atalaia / advertência / ímpio / justo",
    assuntos: ["babilonia", "ezequiel", "profecia", "arrependimento"]
  },

  // 314. Ezequiel 33.7
  {
    id: "ez33.7",
    referencia: "Ez 33.7",
    local: "Babilônia / Mesopotâmia (Iraque)",
    paisAtual: "Iraque",
    lider: "Nabucodonosor",
    liderReinado: "605-562 a.C.",
    periodo: "Exílio Babilônico",
    periodoDatas: "586-539 a.C.",
    periodoHumanidade: "Idade Antiga",
    periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
    data: "~570-560 d.C.",
    antes: "Ezequiel recebe a palavra do Senhor sobre seu papel como profeta. Deus o estabelece como sentinela sobre a casa de Israel.",
    versiculo: "✅ Assim, pois, ó filho do homem, te constituí por atalaia sobre a casa de Israel; tu, pois, ouvirás a palavra da minha boca, e os advertirás da minha parte.",
    depois: "Deus explica a responsabilidade do atalaia: se ele não advertir o ímpio, o sangue do ímpio será requerido de sua mão. Mas se ele advertir e o ímpio não se converter, o atalaia livrará sua alma.",
    tags: "atalaia / advertir / palavra / sentinela",
    assuntos: ["babilonia", "ezequiel", "profecia", "responsabilidade"]
  },

  // 315. Lucas 4.18-19
  {
    id: "lc4.18-19",
    referencia: "Lc 4.18-19",
    local: "Nazaré / Galileia (Israel)",
    paisAtual: "Israel",
    lider: "Tibério",
    liderReinado: "14-37 d.C.",
    periodo: "Império Romano",
    periodoDatas: "27 a.C. - 476 d.C.",
    periodoHumanidade: "Idade Antiga",
    periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
    data: "~27-28 d.C.",
    antes: "Jesus estava na sinagoga de Nazaré, onde foi criado. Ele levantou-se para ler as Escrituras e recebeu o livro do profeta Isaías. Ele encontrou o lugar onde estava escrito sobre o ungido do Senhor.",
    versiculo: "⚠️ Jesus lê a passagem de Isaías 61: \"O Espírito do Senhor é sobre mim, porque me ungiu para anunciar boas novas aos pobres; enviou-me para proclamar libertação aos cativos e restauração da vista aos cegos; para pôr em liberdade os oprimidos; para proclamar o ano aceitável do Senhor.\" Ele então fecha o livro e declara que a Escritura se cumpriu naquele dia.",
    depois: "Todos na sinagoga se maravilharam com as palavras de graça que saíam de sua boca. Mas quando Jesus começou a mencionar que nenhum profeta é aceito em sua própria terra, a multidão se enfureceu e tentou lançá-lo do precipício.",
    tags: "ungido / boas novas / libertação / cegos",
    assuntos: ["nazare", "jesus", "missao", "profecia"]
  },

  // 316. Cl 4.5-6
  {
    id: "cl4.5-6",
    referencia: "Cl 4.5-6",
    local: "Roma / Itália (Itália)",
    paisAtual: "Itália",
    lider: "Nero",
    liderReinado: "54-68 d.C.",
    periodo: "Império Romano",
    periodoDatas: "27 a.C. - 476 d.C.",
    periodoHumanidade: "Idade Antiga",
    periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
    data: "~60-62 d.C.",
    antes: "Paulo estava concluindo a carta aos Colossenses com exortações sobre oração e comportamento cristão. Ele pede oração para a abertura da porta da palavra.",
    versiculo: "✅ Andai com sabedoria para com os que estão de fora, remindo o tempo. A vossa palavra seja sempre agradável, temperada com sal, para que saibais como vos convém responder a cada um.",
    depois: "Paulo termina a carta com saudações pessoais de seus companheiros: Tíquico, Onésimo, Aristarco, Marcos, Justo, Epafras, Lucas e Demas. Ele pede que a carta seja lida também na igreja dos laodicenses.",
    tags: "sabedoria / tempo / sal / responder",
    assuntos: ["roma", "paulo", "comportamento-cristao", "evangelismo"]
  },

  // 317. Jeremias 6.14
  {
    id: "jr6.14",
    referencia: "Jr 6.14",
    local: "Jerusalém / Judá (Israel)",
    paisAtual: "Israel",
    lider: "Zedequias",
    liderReinado: "597-586 a.C.",
    periodo: "Reino de Judá (Sul)",
    periodoDatas: "930-586 a.C.",
    periodoHumanidade: "Idade Antiga",
    periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
    data: "~626-586 a.C.",
    antes: "Jeremias profetizava contra Judá por causa de sua desobediência e falsa confiança no templo. O profeta anuncia um juízo iminente por causa do pecado do povo.",
    versiculo: "✅ E curam a ferida da filha do meu povo, dizendo: Paz, paz; quando não há paz.",
    depois: "Jeremias continua denunciando a falsa profecia dos líderes que diziam que tudo estava bem quando Deus estava prestes a trazer juízo. O povo se envergonha de suas abominações, mas não se envergonha verdadeiramente.",
    tags: "ferida / paz / falsos profetas / juízo",
    assuntos: ["jerusalem", "jeremias", "falsos-profetas", "juizo"]
  },

  // 318. Atos 17.6-7
  {
    id: "at17.6-7",
    referencia: "At 17.6-7",
    local: "Tessalônica / Macedônia (Grécia)",
    paisAtual: "Grécia",
    lider: "Nero",
    liderReinado: "54-68 d.C.",
    periodo: "Império Romano",
    periodoDatas: "27 a.C. - 476 d.C.",
    periodoHumanidade: "Idade Antiga",
    periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
    data: "~49-50 d.C.",
    antes: "Paulo e Silas estavam pregando em Tessalônica. Alguns judeus se convenceram, mas outros, movidos por inveja, formaram uma multidão para causar tumulto.",
    versiculo: "✅ E, não os achando, trouxeram Jasom e alguns irmãos à presença dos magistrados, clamando: Estes que têm alvoroçado o mundo, chegaram também aqui; aos quais Jasom recolheu; e todos estes procedem contra os decretos de César, dizendo que há outro rei, Jesus.",
    depois: "A multidão e os magistrados ficaram perturbados com essas palavras. Jasom e os outros foram soltos mediante fiança. Paulo e Silas partiram para Bereia, onde foram recebidos com nobreza.",
    tags: "alvoroço / mundo / César / Jesus",
    assuntos: ["tessalonica", "paulo", "perseguicao", "evangelho"]
  },

  // 319. Atos 3.19
  {
    id: "at3.19",
    referencia: "At 3.19",
    local: "Jerusalém / Judéia (Israel)",
    paisAtual: "Israel",
    lider: "Pedro",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    periodoHumanidade: "Idade Antiga",
    periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
    data: "~30 d.C.",
    antes: "Pedro e João haviam curado um homem coxo na porta do templo. O povo se reuniu, maravilhado, e Pedro começou a pregar sobre Jesus e a necessidade de arrependimento.",
    versiculo: "✅ Arrependei-vos, pois, e convertei-vos, para que sejam apagados os vossos pecados, e venham assim os tempos de refrigério pela presença do Senhor.",
    depois: "Pedro continua explicando que Deus enviaria Jesus, que havia sido anunciado desde os profetas. Ele conclui que todos os profetas, desde Samuel, anunciaram estes dias.",
    tags: "arrependimento / conversão / pecados / refrigério",
    assuntos: ["jerusalem", "pedro", "arrependimento", "conversao"]
  },

  // 320. Efésios 2.8-9
  {
    id: "ef2.8-9",
    referencia: "Ef 2.8-9",
    local: "Roma / Itália (Itália)",
    paisAtual: "Itália",
    lider: "Nero",
    liderReinado: "54-68 d.C.",
    periodo: "Império Romano",
    periodoDatas: "27 a.C. - 476 d.C.",
    periodoHumanidade: "Idade Antiga",
    periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
    data: "~60-62 d.C.",
    antes: "Paulo havia descrito a condição anterior dos efésios: mortos em delitos e pecados. Ele explicou que Deus, por sua grande misericórdia, os vivificou com Cristo.",
    versiculo: "⚠️ Paulo declara que a salvação é pela graça, por meio da fé, e que isso não vem do homem, mas é dom de Deus. Não vem das obras, para que ninguém se glorie. Os crentes são criação de Deus, feitos para boas obras que Deus preparou para que andassem nelas.",
    depois: "Paulo continua explicando que os efésios, que antes estavam longe de Deus, agora foram aproximados pelo sangue de Cristo. Ele derrubou a parede de separação entre judeus e gentios.",
    tags: "graça / fé / dom / obras",
    assuntos: ["roma", "paulo", "salvação", "graça", "fé"]
  },

  // 321. Efésios 4.31-32
  {
    id: "ef4.31-32",
    referencia: "Ef 4.31-32",
    local: "Roma / Itália (Itália)",
    paisAtual: "Itália",
    lider: "Nero",
    liderReinado: "54-68 d.C.",
    periodo: "Império Romano",
    periodoDatas: "27 a.C. - 476 d.C.",
    periodoHumanidade: "Idade Antiga",
    periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
    data: "~60-62 d.C.",
    antes: "Paulo havia instruído os efésios sobre a renovação da mente e a verdade no amor. Ele falou sobre a necessidade de abandonar as práticas da velha natureza.",
    versiculo: "⚠️ Paulo exorta os efésios a abandonarem toda amargura, ira, clamor e maldade. Em vez disso, devem ser bondosos e misericordiosos, perdoando uns aos outros, assim como Deus em Cristo os perdoou. O perdão cristão é modelado pelo perdão divino.",
    depois: "Paulo continua instruindo sobre a imitação de Deus como filhos amados. Eles devem andar em amor, como Cristo os amou, e andar como filhos da luz.",
    tags: "amargura / ira / bondade / perdão",
    assuntos: ["roma", "paulo", "perdao", "bondade", "misericordia"]
  },

  // 322. Efésios 4.4-6
  {
    id: "ef4.4-6",
    referencia: "Ef 4.4-6",
    local: "Roma / Itália (Itália)",
    paisAtual: "Itália",
    lider: "Nero",
    liderReinado: "54-68 d.C.",
    periodo: "Império Romano",
    periodoDatas: "27 a.C. - 476 d.C.",
    periodoHumanidade: "Idade Antiga",
    periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
    data: "~60-62 d.C.",
    antes: "Paulo exortava os efésios a viverem de maneira digna da vocação, com humildade, mansidão e longanimidade. Ele agora explica a base da unidade da igreja.",
    versiculo: "⚠️ Paulo declara que há um só corpo e um só Espírito, uma só esperança da vocação, um só Senhor, uma só fé, um só batismo, um só Deus e Pai de todos, que é sobre todos, por todos e em todos. A unidade da igreja não é opcional, mas é fundamentada na própria natureza de Deus.",
    depois: "Paulo explica que Cristo deu dons à igreja para edificação do corpo. Cada membro recebeu graça segundo a medida do dom de Cristo.",
    tags: "unidade / corpo / Espírito / Senhor",
    assuntos: ["roma", "paulo", "unidade-igreja", "trindade"]
  },

  // 323. Mateus 6.6,16
  {
    id: "mt6.6-16",
    referencia: "Mt 6.6,16",
    local: "Monte das Bem-aventuranças / Galileia (Israel)",
    paisAtual: "Israel",
    lider: "Tibério",
    liderReinado: "14-37 d.C.",
    periodo: "Império Romano",
    periodoDatas: "27 a.C. - 476 d.C.",
    periodoHumanidade: "Idade Antiga",
    periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
    data: "~28 d.C.",
    antes: "Jesus estava ensinando no Sermão da Montanha sobre a oração, o jejum e a esmola. Ele contrastava a prática dos hipócritas com a verdadeira devoção.",
    versiculo: "✅ Mas tu, quando orares, entra no teu aposento e, fechando a tua porta, ora a teu Pai que está em secreto; e teu Pai, que vê em secreto, te recompensará publicamente. E, quando jejuardes, não vos mostreis aos homens com semblante triste, como os hipócritas; pois eles desfiguram o rosto para que os homens vejam que estão jejuando. Em verdade vos digo que já receberam a sua recompensa.",
    depois: "Jesus ensina o Pai Nosso como modelo de oração. Ele também instrui sobre o perdão, o jejum e a prioridade do reino.",
    tags: "oração / jejum / secreto / recompensa",
    assuntos: ["galileia", "jesus", "oracao", "jejum", "devoção"]
  },

  // 324. Filipenses 4.15-16
  {
    id: "fp4.15-16",
    referencia: "Fp 4.15-16",
    local: "Roma / Itália (Itália)",
    paisAtual: "Itália",
    lider: "Nero",
    liderReinado: "54-68 d.C.",
    periodo: "Império Romano",
    periodoDatas: "27 a.C. - 476 d.C.",
    periodoHumanidade: "Idade Antiga",
    periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
    data: "~60-62 d.C.",
    antes: "Paulo agradecia aos filipenses pela generosidade deles para com seu ministério. Ele havia recebido ofertas deles e agora expressa sua gratidão.",
    versiculo: "✅ E vós bem sabeis também, ó filipenses, que, no princípio do evangelho, quando parti da Macedônia, nenhuma igreja comunicou comigo no sentido de dar e receber, senão vós somente. Porque também uma e outra vez me mandastes o necessário a Tessalônica.",
    depois: "Paulo não busca o dom em si, mas o fruto que abunda para a conta dos filipenses. Ele os chama de 'aromático perfume, sacrifício aceitável e agradável a Deus'. Deus suprirá todas as suas necessidades.",
    tags: "comunhão / dar / receber / oferta",
    assuntos: ["roma", "paulo", "generosidade", "comunhão"]
  },

  // 325. Hebreus 12.2
  {
    id: "hb12.2",
    referencia: "Hb 12.2",
    local: "Roma / Itália (Itália)",
    paisAtual: "Itália",
    lider: "",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    periodoHumanidade: "Idade Antiga",
    periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
    data: "~60-65 d.C.",
    antes: "O autor de Hebreus havia falado sobre a nuvem de testemunhas que rodeia os crentes. Ele exorta os leitores a correrem a carreira que lhes está proposta.",
    versiculo: "✅ Olhando para Jesus, autor e consumador da fé, o qual, pelo gozo que lhe estava proposto, suportou a cruz, desprezando a afronta, e assentou-se à destra do trono de Deus.",
    depois: "O autor encoraja os leitores a não desanimarem quando são reprovados. A disciplina do Senhor é sinal de filiação. O sofrimento produz fruto pacífico de justiça.",
    tags: "autor / consumador / fé / cruz",
    assuntos: ["roma", "autor-hebreus", "perseverança", "fe", "cruz"]
  },

  // 326. Apocalipse 12.11
  {
    id: "ap12.11",
    referencia: "Ap 12.11",
    local: "Patmos / Ilhas do Egeu (Grécia)",
    paisAtual: "Grécia",
    lider: "João",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    periodoHumanidade: "Idade Antiga",
    periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
    data: "~95 d.C.",
    antes: "João vê uma visão de uma mulher (Israel) e um dragão (Satanás). O dragão acusa os irmãos dia e noite, mas eles o vencem.",
    versiculo: "✅ E eles o venceram pelo sangue do Cordeiro e pela palavra do seu testemunho; e não amaram as suas vidas até à morte.",
    depois: "Os céus se alegram, mas a terra e o mar têm ai, porque o diabo desceu a eles com grande ira, sabendo que tem pouco tempo. O dragão persegue a mulher.",
    tags: "sangue / testemunho / morte / vitória",
    assuntos: ["patmos", "joao", "apocalipse", "martirio", "vitoria"]
  },

  // 327. João 17.21
  {
    id: "jo17.21",
    referencia: "Jo 17.21",
    local: "Jerusalém / Judéia (Israel)",
    paisAtual: "Israel",
    lider: "Tibério",
    liderReinado: "14-37 d.C.",
    periodo: "Império Romano",
    periodoDatas: "27 a.C. - 476 d.C.",
    periodoHumanidade: "Idade Antiga",
    periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
    data: "~30 d.C.",
    antes: "Jesus ora pelos discípulos na véspera de sua morte. Ele ora por sua unidade, assim como ele e o Pai são um.",
    versiculo: "✅ Para que todos sejam um; assim como tu, ó Pai, o és em mim, e eu em ti, que também eles sejam um em nós, para que o mundo creia que tu me enviaste.",
    depois: "Jesus continua orando para que os discípulos estejam com ele e vejam sua glória. Ele ora para que o amor com que o Pai o amou esteja neles.",
    tags: "unidade / Pai / Filho / mundo",
    assuntos: ["jerusalem", "jesus", "unidade-igreja", "oração"]
  },

  // 328. 1 João 1.8
  {
    id: "1jo1.8",
    referencia: "1 Jo 1.8",
    local: "Éfeso / Ásia Menor (Turquia)",
    paisAtual: "Turquia",
    lider: "Domiciano",
    liderReinado: "81-96 d.C.",
    periodo: "Império Romano",
    periodoDatas: "27 a.C. - 476 d.C.",
    periodoHumanidade: "Idade Antiga",
    periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
    data: "~90-95 d.C.",
    antes: "João escreve sobre o que ouviu, viu e contemplou da Palavra da vida. Ele proclama que Deus é luz e não há trevas nele.",
    versiculo: "✅ Se dissermos que não temos pecado, enganamo-nos a nós mesmos, e não há verdade em nós.",
    depois: "João continua dizendo que se confessarmos os nossos pecados, Deus é fiel e justo para nos perdoar e nos purificar de toda injustiça. A confissão é necessária para a comunhão com Deus.",
    tags: "pecado / verdade / confissão / engano",
    assuntos: ["efeso", "joao", "confissao", "pecado", "verdade"]
  },

  // 329. Provérbios 11.14
  {
    id: "pv11.14",
    referencia: "Pv 11.14",
    local: "Jerusalém / Judá (Israel)",
    paisAtual: "Israel",
    lider: "Salomão",
    liderReinado: "970-930 a.C.",
    periodo: "Reino Unido",
    periodoDatas: "1010-970 a.C.",
    periodoHumanidade: "Idade Antiga",
    periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
    data: "~950 a.C.",
    antes: "Salomão escreve provérbios sobre a justiça e a sabedoria. Ele contrasta a sabedoria com a insensatez, a justiça com a injustiça.",
    versiculo: "✅ Não havendo sábios conselho, o povo cai; mas no multidão de conselheiros há segurança.",
    depois: "Salomão continua ensinando sobre a importância da sabedoria prática na liderança. O conselho múltiplo traz estabilidade e segurança.",
    tags: "conselho / segurança / sábios / povo",
    assuntos: ["jerusalem", "salomao", "proverbios", "sabedoria"]
  },

  // 330. Romanos 5.3-4
  {
    id: "rm5.3-4",
    referencia: "Rm 5.3-4",
    local: "Corinto / Acaia (Grécia)",
    paisAtual: "Grécia",
    lider: "Nero",
    liderReinado: "54-68 d.C.",
    periodo: "Império Romano",
    periodoDatas: "27 a.C. - 476 d.C.",
    periodoHumanidade: "Idade Antiga",
    periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
    data: "~57 d.C.",
    antes: "Paulo havia explicado a justificação pela fé e a paz com Deus. Ele exulta na esperança da glória de Deus e agora fala sobre as tribulações.",
    versiculo: "⚠️ Paulo declara que não apenas nos gloriamos na esperança, mas também nas tribulações, sabendo que a tribulação produz paciência, a paciência produz experiência, e a experiência produz esperança. A esperança não confunde, porque o amor de Deus é derramado em nossos corações pelo Espírito Santo que nos foi dado.",
    depois: "Paulo conclui que, se quando éramos inimigos fomos reconciliados com Deus pela morte de seu Filho, muito mais, sendo reconciliados, seremos salvos pela sua vida.",
    tags: "tribulação / paciência / experiência / esperança",
    assuntos: ["corinto", "paulo", "sofrimento", "perseverança", "esperança"]
  },

  // 331. Atos 15
  {
    id: "at15",
    referencia: "At 15",
    local: "Jerusalém / Judéia (Israel)",
    paisAtual: "Israel",
    lider: "Pedro, Tiago, Paulo",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    periodoHumanidade: "Idade Antiga",
    periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
    data: "~48-49 d.C.",
    antes: "Alguns homens da Judeia estavam ensinando que os gentios precisavam ser circuncidados e guardar a lei de Moisés para serem salvos. Paulo e Barnabé foram a Jerusalém para discutir essa questão com os apóstolos e anciãos.",
    versiculo: "📖 O Concílio de Jerusalém reúne apóstolos e anciãos para decidir sobre a salvação dos gentios. Pedro testemunha que Deus purificou os corações dos gentios pela fé, sem distinção. Tiago cita Amós para mostrar que Deus restauraria a tenda de Davi e que os gentios buscariam o Senhor. A decisão final: não impor fardo além das coisas essenciais: abster-se de idolatria, sangue, carne sufocada e imoralidade sexual. A carta é enviada às igrejas, trazendo grande alegria.",
    depois: "Paulo e Barnabé continuam sua viagem, mas têm um desentendimento sobre João Marcos, separando-se. Barnabé leva Marcos para Chipre, e Paulo escolhe Silas e vai para a Síria e Cilícia.",
    tags: "concílio / gentios / lei / decisão",
    assuntos: ["jerusalem", "apostolos", "concílio", "gentios", "lei"]
  },

  // 332. Atos 11.22
  {
    id: "at11.22",
    referencia: "At 11.22",
    local: "Antioquia / Síria (Síria)",
    paisAtual: "Síria",
    lider: "Pedro",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    periodoHumanidade: "Idade Antiga",
    periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
    data: "~35-40 d.C.",
    antes: "A perseguição que surgiu após a morte de Estevão espalhou os crentes. Alguns deles, que eram de Chipre e Cirene, chegaram a Antioquia e começaram a pregar aos gentios.",
    versiculo: "✅ E esta notícia chegou aos ouvidos da igreja que estava em Jerusalém; e enviaram Barnabé a Antioquia.",
    depois: "Barnabé chegou a Antioquia, viu a graça de Deus, e se alegrou. Ele exortou todos a permanecerem fiéis ao Senhor. Barnabé então foi a Tarso buscar Paulo e trouxe-o para Antioquia.",
    tags: "Antioquia / Barnabé / gentios / pregação",
    assuntos: ["antioquia", "igreja-primitiva", "barnabe", "missoes"]
  },

  // 333. Atos 17.26-27
  {
    id: "at17.26-27",
    referencia: "At 17.26-27",
    local: "Atenas / Ática (Grécia)",
    paisAtual: "Grécia",
    lider: "Nero",
    liderReinado: "54-68 d.C.",
    periodo: "Império Romano",
    periodoDatas: "27 a.C. - 476 d.C.",
    periodoHumanidade: "Idade Antiga",
    periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
    data: "~50-51 d.C.",
    antes: "Paulo estava no Areópago em Atenas, onde os filósofos epicuristas e estoicos o levaram para ouvir sua mensagem. Ele observou o altar 'Ao Deus desconhecido'.",
    versiculo: "⚠️ Paulo declara que Deus fez de um só sangue toda a humanidade para habitar sobre a terra, determinando os tempos e os limites de sua habitação. Ele fez isso para que buscassem a Deus, se porventura, tateando, o pudessem achar, ainda que não está longe de cada um de nós.",
    depois: "Paulo cita poetas gregos ('Nele vivemos, nos movemos e existimos') para mostrar que os atenienses já reconheciam a existência de Deus. Ele conclama todos ao arrependimento, pois Deus julgará o mundo com justiça por meio de Jesus ressuscitado.",
    tags: "humanidade / tempos / limites / busca",
    assuntos: ["atenas", "paulo", "humanidade", "busca-por-deus", "areopago"]
  },

  // 334. 1 Coríntios 12.4-6
  {
    id: "1co12.4-6",
    referencia: "1 Co 12.4-6",
    local: "Corinto / Acaia (Grécia)",
    paisAtual: "Grécia",
    lider: "Nero",
    liderReinado: "54-68 d.C.",
    periodo: "Império Romano",
    periodoDatas: "27 a.C. - 476 d.C.",
    periodoHumanidade: "Idade Antiga",
    periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
    data: "~55 d.C.",
    antes: "Paulo introduz o tema dos dons espirituais. Ele quer que os coríntios entendam que os dons vêm de Deus e são para o bem comum.",
    versiculo: "⚠️ Paulo declara que há diversidade de dons, mas o mesmo Espírito; diversidade de ministérios, mas o mesmo Senhor; e diversidade de operações, mas o mesmo Deus, que opera tudo em todos. A diversidade não é divisão, pois vem da mesma fonte divina.",
    depois: "Paulo explica que a manifestação do Espírito é dada a cada um para o proveito comum. Ele lista nove dons espirituais e enfatiza que o Espírito distribui como quer.",
    tags: "dons / Espírito / ministérios / operações",
    assuntos: ["corinto", "paulo", "dons-espirituais", "trindade"]
  },

  // 335. 2 Coríntios 9.6-7
  {
    id: "2co9.6-7",
    referencia: "2 Co 9.6-7",
    local: "Filipos / Macedônia (Grécia)",
    paisAtual: "Grécia",
    lider: "Nero",
    liderReinado: "54-68 d.C.",
    periodo: "Império Romano",
    periodoDatas: "27 a.C. - 476 d.C.",
    periodoHumanidade: "Idade Antiga",
    periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
    data: "~55-56 d.C.",
    antes: "Paulo estava organizando uma coleta para os santos pobres de Jerusalém. Ele já havia falado sobre o exemplo dos macedônios e agora instrui os coríntios sobre a generosidade.",
    versiculo: "⚠️ Paulo ensina que aquele que semeia pouco, pouco colherá; e o que semeia com abundância, com abundância colherá. Cada um deve dar como propôs no coração, não com tristeza nem por necessidade, porque Deus ama a quem dá com alegria.",
    depois: "Paulo afirma que Deus é poderoso para fazer abundar toda graça, para que tendo sempre suficiência em tudo, os coríntios transbordem em toda boa obra. A generosidade é uma sementeira para colheita de justiça.",
    tags: "semear / colher / alegria / generosidade",
    assuntos: ["filipos", "paulo", "generosidade", "ofertas", "alegria"]
  },

  // 336. 2 Coríntios 8.3-4
  {
    id: "2co8.3-4",
    referencia: "2 Co 8.3-4",
    local: "Filipos / Macedônia (Grécia)",
    paisAtual: "Grécia",
    lider: "Nero",
    liderReinado: "54-68 d.C.",
    periodo: "Império Romano",
    periodoDatas: "27 a.C. - 476 d.C.",
    periodoHumanidade: "Idade Antiga",
    periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
    data: "~55-56 d.C.",
    antes: "Paulo escreve sobre a generosidade das igrejas da Macedônia para a coleta dos santos em Jerusalém. Eles deram abundantemente apesar de sua pobreza.",
    versiculo: "✅ Porque, segundo o seu poder (o que eu testifico) e ainda acima do seu poder, deram voluntariamente, pedindo-nos com muito rogo a graça de participarem neste serviço que se faz para os santos.",
    depois: "Paulo relata que os macedônios primeiro se deram ao Senhor e depois à igreja, pela vontade de Deus. Ele usa este exemplo para encorajar os coríntios a completarem sua oferta.",
    tags: "Macedônia / oferta / graça / serviço",
    assuntos: ["filipos", "paulo", "generosidade", "ofertas", "macedonia"]
  },

  // 337. Atos 11.29-30
  {
    id: "at11.29-30",
    referencia: "At 11.29-30",
    local: "Antioquia / Síria (Síria)",
    paisAtual: "Síria",
    lider: "Barnabé e Saulo",
    liderReinado: "",
    periodo: "Igreja Primitiva",
    periodoDatas: "30-100 d.C.",
    periodoHumanidade: "Idade Antiga",
    periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
    data: "~45-46 d.C.",
    antes: "Ágabo, um profeta, veio de Jerusalém a Antioquia e profetizou que haveria grande fome em todo o mundo, o que ocorreu no tempo de Cláudio. Os discípulos em Antioquia decidiram ajudar os irmãos na Judeia.",
    versiculo: "✅ Os discípulos, pois, determinaram mandar, cada um conforme as suas posses, algum socorro para os irmãos que habitavam na Judeia. O que eles com efeito fizeram, enviando-o aos anciãos por mão de Barnabé e Saulo.",
    depois: "Barnabé e Saulo entregaram a oferta aos anciãos em Jerusalém e depois retornaram a Antioquia. Este foi o primeiro grande ato de generosidade entre as igrejas.",
    tags: "Antioquia / fome / socorro / anciãos",
    assuntos: ["antioquia", "generosidade", "comunhao", "ofertas"]
  },
  // ==================== CONTINUAÇÃO DOS NOVOS CONTEXTOS (A PARTIR DO ID 338) ====================

// 338. Hebreus 10.25
{
  id: "hb10.25",
  referencia: "Hb 10.25",
  local: "Roma / Itália (Itália)",
  paisAtual: "Itália",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~60-65 d.C.",
  antes: "O autor de Hebreus exorta os cristãos a se aproximarem de Deus com coração sincero e plena certeza de fé. Eles estavam enfrentando perseguição e alguns estavam abandonando a comunhão, preferindo se isolar para evitar riscos.",
  versiculo: "✅ Não deixando a nossa congregação, como é costume de alguns; antes, admoestando-nos uns aos outros; e tanto mais quanto vedes que se vai aproximando aquele dia.",
  depois: "O autor conclui que os cristãos devem perseverar na fé, lembrando-se do dia em que foram iluminados e suportaram grande combate de aflições. Ele os encoraja a não perderem a confiança, que tem grande galardão.",
  tags: "congregação / exortação / dia / comunhão",
  assuntos: ["roma", "autor-hebreus", "comunhao", "perseveranca", "igreja"]
},
// 339. Atos 2.42
{
  id: "at2.42",
  referencia: "At 2.42",
  local: "Jerusalém / Judéia (Israel)",
  paisAtual: "Israel",
  lider: "Pedro",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~30 d.C.",
  antes: "Cerca de 3.000 pessoas haviam se convertido no dia de Pentecostes após a pregação de Pedro. Eles foram batizados e se juntaram à comunidade cristã primitiva. A multidão estava unida e compartilhava tudo em comum.",
  versiculo: "✅ E perseveravam na doutrina dos apóstolos, e na comunhão, e no partir do pão, e nas orações.",
  depois: "A igreja primitiva crescia diariamente. Os novos convertidos vendiam suas propriedades e bens e repartiam com os necessitados. O Senhor acrescentava à igreja os que iam sendo salvos. A comunhão fraterna e a oração eram a marca da comunidade cristã.",
  tags: "doutrina / comunhão / oração / partir do pão",
  assuntos: ["jerusalem", "pedro", "igreja-primitiva", "comunhao", "pentecostes"]
},
// 340. Mateus 28.19-20
{
  id: "mt28.19-20",
  referencia: "Mt 28.19-20",
  local: "Galileia / Monte designado por Jesus (Israel)",
  paisAtual: "Israel",
  lider: "Tibério",
  liderReinado: "14-37 d.C.",
  periodo: "Período Romano",
  periodoDatas: "63 a.C. - 70 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~30 d.C.",
  antes: "Jesus ressuscitou dos mortos e apareceu várias vezes aos discípulos. As mulheres haviam encontrado o túmulo vazio e um anjo anunciou que Jesus havia ressuscitado. Os discípulos foram à Galileia, conforme Jesus havia ordenado.",
  versiculo: "✅ Portanto ide, ensinai todas as nações, batizando-as em nome do Pai, e do Filho, e do Espírito Santo; ensinando-as a guardar todas as coisas que eu vos tenho mandado; e eis que eu estou convosco todos os dias, até a consumação dos séculos.",
  depois: "Os discípulos obedeceram e começaram a pregar em Jerusalém, depois na Judéia, Samaria e até os confins da terra. A Grande Comissão continua sendo o mandato missionário da igreja até hoje, e a promessa da presença de Cristo sustenta a missão.",
  tags: "grande comissão / discipulado / missão / presença",
  assuntos: ["galileia", "jesus", "grande-comissao", "discipulado", "missoes"]
},
// 341. Atos 2.41
{
  id: "at2.41",
  referencia: "At 2.41",
  local: "Jerusalém / Judéia (Israel)",
  paisAtual: "Israel",
  lider: "Pedro",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~30 d.C.",
  antes: "Pedro pregou com muitas outras palavras, exortando a multidão a se salvar da geração perversa. O sermão foi poderoso e confrontador, levando muitos à convicção de pecado.",
  versiculo: "✅ De sorte que foram batizados os que de bom grado receberam a sua palavra; e naquele dia agregaram-se quase três mil almas.",
  depois: "Os três mil novos convertidos se dedicaram ao ensino dos apóstolos, à comunhão, ao partir do pão e às orações. A igreja primitiva nasceu com um crescimento exponencial e estabeleceu o padrão para a vida comunitária cristã.",
  tags: "batizados / três mil / almas / conversão",
  assuntos: ["jerusalem", "pedro", "igreja-primitiva", "pentecostes", "conversao"]
},
// 342. Atos 1.14
{
  id: "at1.14",
  referencia: "At 1.14",
  local: "Jerusalém / Judéia (Israel)",
  paisAtual: "Israel",
  lider: "Jesus / Pedro",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~30 d.C.",
  antes: "Após a ascensão de Jesus, os apóstolos voltaram para Jerusalém. Eles se reuniram no cenáculo, onde estavam hospedados, junto com outras mulheres, Maria (mãe de Jesus) e os irmãos de Jesus. Cerca de 120 pessoas estavam reunidas.",
  versiculo: "✅ Todos estes perseveravam unanimemente em oração e súplica, com as mulheres, e Maria, mãe de Jesus, e com seus irmãos.",
  depois: "Pedro se levantou no meio dos irmãos e propôs a escolha de alguém para substituir Judas. Escolheram Matias, que foi contado com os onze apóstolos. A igreja continuou em oração até o dia de Pentecostes.",
  tags: "oração / unânime / discípulos / espera",
  assuntos: ["jerusalem", "igreja-primitiva", "oracao", "pentecostes", "discipulos"]
},
// 343. Romanos 12.5
{
  id: "rm12.5",
  referencia: "Rm 12.5",
  local: "Corinto / Acaia (Grécia)",
  paisAtual: "Grécia",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~57 d.C.",
  antes: "Paulo exorta os romanos a apresentarem seus corpos como sacrifício vivo, santo e agradável a Deus. Ele começa a descrever como os dons devem funcionar no corpo de Cristo, usando a metáfora do corpo humano.",
  versiculo: "✅ Assim nós, que somos muitos, somos um só corpo em Cristo, mas individualmente somos membros uns dos outros.",
  depois: "Paulo continua explicando que os dons são dados para o bem comum: profecia, ministério, ensino, exortação, generosidade, liderança e misericórdia. Cada membro deve exercer seu dom com zelo e alegria.",
  tags: "membros / uns dos outros / corpo / interdependência",
  assuntos: ["corinto", "paulo", "corpo-de-cristo", "unidade-igreja", "dons-espirituais"]
},
// 344. Colossenses 1.18
{
  id: "cl1.18",
  referencia: "Cl 1.18",
  local: "Roma / Itália (Itália)",
  paisAtual: "Itália",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~60-62 d.C.",
  antes: "Paulo escreve um dos mais elevados hinos cristológicos sobre a supremacia de Cristo. Ele é a imagem do Deus invisível, o primogênito de toda criação, por quem e para quem todas as coisas foram criadas.",
  versiculo: "✅ E ele é a cabeça do corpo, da igreja; é o princípio, o primogênito dentre os mortos, para que em tudo tenha a preeminência.",
  depois: "Paulo continua afirmando que Cristo reconciliou todas as coisas consigo mesmo, por meio do sangue da cruz. Os colossenses, que antes eram estrangeiros e inimigos, agora foram reconciliados para serem apresentados santos e irrepreensíveis.",
  tags: "cabeça / corpo / primogênito / preeminência",
  assuntos: ["roma", "paulo", "cristo", "igreja", "supremacia"]
},
// 345. Efésios 1.22-23
{
  id: "ef1.22-23",
  referencia: "Ef 1.22-23",
  local: "Roma / Itália (Itália)",
  paisAtual: "Itália",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~60-62 d.C.",
  antes: "Paulo ora para que os efésios conheçam o poder de Deus manifestado em Cristo. Ele descreve a posição exaltada de Cristo após a ressurreição, quando Deus o ressuscitou e o assentou à sua direita nos céus.",
  versiculo: "✅ E sujeitou todas as coisas debaixo de seus pés, e sobre todas as coisas o constituiu como cabeça da igreja, que é o seu corpo, a plenitude daquele que cumpre tudo em todos.",
  depois: "Paulo explica que os efésios, que antes estavam mortos em seus delitos e pecados, foram vivificados com Cristo. A igreja é o corpo de Cristo, e Ele a preenche com sua plenitude.",
  tags: "cabeça / corpo / igreja / plenitude",
  assuntos: ["roma", "paulo", "igreja", "corpo-de-cristo", "supremacia-cristo"]
},
// 346. Atos 2.1-4
{
  id: "at2.1-4",
  referencia: "At 2.1-4",
  local: "Jerusalém / Judéia (Israel)",
  paisAtual: "Israel",
  lider: "Pedro",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~30 d.C.",
  antes: "Os discípulos estavam reunidos em Jerusalém, obedecendo à ordem de Jesus de esperar a promessa do Pai. Cerca de 120 pessoas perseveravam em oração no cenáculo. Era o dia de Pentecostes, uma das três festas de peregrinação judaica.",
  versiculo: "⚠️ E, ao cumprir-se o dia de Pentecostes, estavam todos reunidos no mesmo lugar. E de repente veio do céu um som, como de um vento impetuoso, e encheu toda a casa onde estavam assentados. E foram vistas por eles línguas repartidas, como que de fogo, e pousaram sobre cada um deles. E todos foram cheios do Espírito Santo, e começaram a falar noutras línguas, conforme o Espírito Santo lhes concedia que falassem.",
  depois: "O barulho atraiu uma multidão de peregrinos de várias nações. Cada um ouvia os discípulos falando em sua própria língua. Alguns zombavam, dizendo que estavam embriagados. Pedro então se levantou e pregou o primeiro sermão da igreja cristã.",
  tags: "Pentecostes / Espírito Santo / línguas / vento / fogo",
  assuntos: ["jerusalem", "pentecostes", "espirito-santo", "igreja-primitiva", "milagre"]
},
// 347. Atos 2.5
{
  id: "at2.5",
  referencia: "At 2.5",
  local: "Jerusalém / Judéia (Israel)",
  paisAtual: "Israel",
  lider: "Pedro",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~30 d.C.",
  antes: "Os discípulos começaram a falar em outras línguas pelo poder do Espírito Santo. O som do vento impetuoso atraiu a atenção da multidão que estava em Jerusalém para a festa de Pentecostes.",
  versiculo: "✅ E em Jerusalém estavam habitando judeus, varões religiosos, de todas as nações que estão debaixo do céu.",
  depois: "A multidão se reuniu, confusa porque cada um ouvia os discípulos falando em sua própria língua. Eles se maravilhavam e perguntavam: 'Não são galileus todos esses que estão falando?'",
  tags: "judeus / nações / Pentecostes / diáspora",
  assuntos: ["jerusalem", "pentecostes", "judeus", "diaspora", "milagre"]
},
// 348. Atos 2.6-8
{
  id: "at2.6-8",
  referencia: "At 2.6-8",
  local: "Jerusalém / Judéia (Israel)",
  paisAtual: "Israel",
  lider: "Pedro",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~30 d.C.",
  antes: "O barulho do derramamento do Espírito atraiu uma grande multidão. Os peregrinos estavam confusos porque cada um ouvia os discípulos falando em sua própria língua.",
  versiculo: "✅ E, feito aquele som, ajuntou-se uma multidão, e estava confusa, porque cada um os ouvia falar na sua própria língua. E todos se maravilhavam e se admiravam, dizendo uns aos outros: Porventura não são galileus todos esses que estão falando? Como, pois, os ouvimos, cada um na nossa própria língua em que somos nascidos?",
  depois: "O milagre de Pentecostes foi auditivo, não apenas vocal. Os ouvintes ouviam em suas línguas nativas o que os discípulos diziam. Isso simbolizava que o evangelho era para todas as nações, revertendo a confusão de línguas de Babel.",
  tags: "línguas / galileus / milagre / nações",
  assuntos: ["jerusalem", "pentecostes", "milagre", "linguas", "evangelho"]
},
// 349. Atos 2.9-11
{
  id: "at2.9-11",
  referencia: "At 2.9-11",
  local: "Jerusalém / Judéia (Israel)",
  paisAtual: "Israel",
  lider: "Pedro",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~30 d.C.",
  antes: "A multidão estava confusa e maravilhada porque cada um ouvia os discípulos falando em sua própria língua. Eles se perguntavam como galileus podiam falar tantas línguas.",
  versiculo: "✅ Partos, medos, elamitas; e os que habitam na Mesopotâmia, Judéia, Capadócia, Ponto e Ásia, Frígia e Panfília, Egito e partes da Líbia, junto a Cirene, e forasteiros romanos, judeus e prosélitos, cretenses e árabes; todos os ouvimos falar em nossas próprias línguas as grandezas de Deus.",
  depois: "A lista de 15 nações representa todo o mundo conhecido na época - do Oriente (Partos, Medos) ao Ocidente (Roma), do Norte (Ponto, Ásia) ao Sul (Egito, Líbia). O evangelho começou em Jerusalém, mas seu destino era o mundo inteiro.",
  tags: "nações / línguas / lista / universalidade",
  assuntos: ["jerusalem", "pentecostes", "universalidade", "evangelho", "linguas"]
},
// 350. Atos 2.11
{
  id: "at2.11",
  referencia: "At 2.11",
  local: "Jerusalém / Judéia (Israel)",
  paisAtual: "Israel",
  lider: "Pedro",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~30 d.C.",
  antes: "A multidão estava confusa porque cada um ouvia os discípulos falando em sua própria língua. Eles listaram as várias nações representadas.",
  versiculo: "✅ Cretenses e árabes, todos os ouvimos falar em nossas próprias línguas as grandezas de Deus.",
  depois: "Os peregrinos não ouviram palavras vazias, mas 'as grandezas de Deus'. O evangelho começou a ser proclamado em todas as línguas, revertendo a confusão de Babel. A mensagem era sobre as maravilhas de Deus, especialmente a ressurreição de Cristo.",
  tags: "maravilhas / Deus / línguas / grandezas",
  assuntos: ["jerusalem", "pentecostes", "evangelho", "linguas", "milagre"]
},
// 351. Atos 2.16-17
{
  id: "at2.16-17",
  referencia: "At 2.16-17",
  local: "Jerusalém / Judéia (Israel)",
  paisAtual: "Israel",
  lider: "Pedro",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~30 d.C.",
  antes: "Alguns zombavam dos discípulos, dizendo que estavam embriagados. Pedro se levantou para explicar o que estava acontecendo.",
  versiculo: "✅ Mas isto é o que foi dito pelo profeta Joel: E nos últimos dias acontecerá, diz Deus, que do meu Espírito derramarei sobre toda a carne.",
  depois: "Pedro cita Joel 2.28-32 para explicar Pentecostes. O derramamento do Espírito não era embriaguez, mas o cumprimento da profecia. A era dos 'últimos dias' havia começado com a vinda do Espírito.",
  tags: "Joel / profecia / últimos dias / derramamento",
  assuntos: ["jerusalem", "pedro", "profecia", "pentecostes", "joel"]
},
// 352. Atos 2.22-23
{
  id: "at2.22-23",
  referencia: "At 2.22-23",
  local: "Jerusalém / Judéia (Israel)",
  paisAtual: "Israel",
  lider: "Pedro",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~30 d.C.",
  antes: "Pedro começa a pregar o evangelho após citar a profecia de Joel. Ele conecta o derramamento do Espírito com a vida, morte e ressurreição de Jesus.",
  versiculo: "✅ Varões israelitas, ouvi estas palavras: A Jesus Nazareno, varão aprovado por Deus entre vós com milagres, prodígios e sinais, que Deus por ele fez no meio de vós, como vós mesmos bem sabeis; a este, que foi entregue pelo determinado conselho e presciência de Deus, vós crucificastes e matastes pelas mãos de injustos.",
  depois: "Pedro proclama que Jesus era aprovado por Deus através de milagres e sinais. A cruz não foi um acidente, mas parte do plano de Deus. Os ouvintes foram confrontados com sua culpa na crucificação.",
  tags: "Jesus / nazareno / crucificado / milagres",
  assuntos: ["jerusalem", "pedro", "evangelho", "cruz", "ressurreicao"]
},
// 353. Atos 2.24
{
  id: "at2.24",
  referencia: "At 2.24",
  local: "Jerusalém / Judéia (Israel)",
  paisAtual: "Israel",
  lider: "Pedro",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~30 d.C.",
  antes: "Pedro continua seu sermão, explicando que Jesus foi crucificado por homens injustos, mas Deus o ressuscitou.",
  versiculo: "✅ Ao qual Deus ressuscitou, soltas as dores da morte, pois não era possível que fosse retido por ela.",
  depois: "A ressurreição não foi um milagre qualquer. Era 'impossível' que a morte retivesse Jesus porque Ele era o Santo de Deus. Pedro cita o Salmo 16 para provar que Davi profetizou a ressurreição do Messias.",
  tags: "ressurreição / morte / libertou / impossível",
  assuntos: ["jerusalem", "pedro", "ressurreicao", "evangelho", "profecia"]
},
// 354. Atos 2.29-33
{
  id: "at2.29-33",
  referencia: "At 2.29-33",
  local: "Jerusalém / Judéia (Israel)",
  paisAtual: "Israel",
  lider: "Pedro",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~30 d.C.",
  antes: "Os apóstolos estavam reunidos no cenáculo em Jerusalém no dia de Pentecostes, escondidos com medo dos judeus. O Espírito Santo havia descido em forma de línguas de fogo, e eles começaram a falar em outras línguas. A multidão se reuniu, confusa e maravilhada. Alguns zombavam, dizendo que estavam embriagados.",
  versiculo: "✅ Homens irmãos, seja-me lícito dizer-vos livremente acerca do patriarca Davi, que ele morreu e foi sepultado, e a sua sepultura está entre nós até ao dia de hoje. Sendo ele profeta, sabendo que Deus lhe havia prometido com juramento que do fruto dos seus lombos, segundo a carne, levantaria o Cristo, para o assentar sobre o seu trono; vendo-o antes, falou da ressurreição de Cristo, que a sua alma não foi deixada no inferno, nem a sua carne viu corrupção. A este Jesus ressuscitou Deus, do que todos nós somos testemunhas. Exaltado, pois, à destra de Deus, e tendo recebido do Pai a promessa do Espírito Santo, derramou isto que vós agora vedes e ouvis.",
  depois: "Pedro explica que Davi morreu e foi sepultado, ao contrário de Jesus que ressuscitou. Cerca de 3.000 pessoas se converteram naquele dia, foram batizadas e se juntaram à igreja primitiva.",
  tags: "testemunho / Davi / ressurreição",
  assuntos: ["judaismo", "rei-davi", "jerusalem", "pedro", "pentecostes"]
},
// 355. Atos 2.32-36
{
  id: "at2.32-36",
  referencia: "At 2.32-36",
  local: "Jerusalém / Judéia (Israel)",
  paisAtual: "Israel",
  lider: "Pedro",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~30 d.C.",
  antes: "Pedro conclui sua argumentação mostrando que Davi não poderia estar falando de si mesmo, pois ele morreu e foi sepultado. Davi falava do Messias.",
  versiculo: "✅ Deus ressuscitou a este Jesus, do que todos nós somos testemunhas. Exaltado, pois, à destra de Deus, e tendo recebido do Pai a promessa do Espírito Santo, derramou isto que vós agora vedes e ouvis. Porque Davi não subiu aos céus, mas ele mesmo diz: Disse o Senhor ao meu Senhor: Assenta-te à minha direita, até que eu ponha os teus inimigos por escabelo de teus pés. Saiba, pois, com certeza toda a casa de Israel que a este Jesus, a quem vós crucificastes, Deus o fez Senhor e Cristo.",
  depois: "Pedro conclui com três verdades: Jesus ressuscitou, Jesus foi exaltado à direita de Deus, e Jesus derramou o Espírito Santo. A conclusão: Jesus é Senhor e Cristo. A multidão, compungida, perguntou: 'Que faremos?'",
  tags: "testemunhas / exaltado / Senhor / Cristo",
  assuntos: ["jerusalem", "pedro", "pentecostes", "evangelho", "ressurreicao"]
},
// 356. Atos 2.37
{
  id: "at2.37",
  referencia: "At 2.37",
  local: "Jerusalém / Judéia (Israel)",
  paisAtual: "Israel",
  lider: "Pedro",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~30 d.C.",
  antes: "Pedro acabou de declarar que Jesus, a quem crucificaram, foi feito Senhor e Cristo por Deus. A mensagem foi direta e confrontadora.",
  versiculo: "✅ E, ouvindo eles isto, compungiram-se em seu coração, e perguntaram a Pedro e aos demais apóstolos: Homens irmãos, que faremos?",
  depois: "A pregação de Pedro produziu convicção de pecado. 'Compungir-se' significa ser cortado no coração. Eles não perguntaram 'o que aconteceu?' mas 'o que faremos?'. A pregação exigia uma resposta.",
  tags: "compungidos / coração / perguntaram / resposta",
  assuntos: ["jerusalem", "pedro", "conviccao", "arrependimento", "pentecostes"]
},
// 357. Atos 2.38
{
  id: "at2.38",
  referencia: "At 2.38",
  local: "Jerusalém / Judéia (Israel)",
  paisAtual: "Israel",
  lider: "Pedro",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~30 d.C.",
  antes: "A multidão perguntou a Pedro o que deveriam fazer após serem convencidos de seu pecado contra Jesus.",
  versiculo: "✅ E Pedro lhes disse: Arrependei-vos, e cada um de vós seja batizado em nome de Jesus Cristo, para perdão dos pecados; e recebereis o dom do Espírito Santo.",
  depois: "A resposta de Pedro é o primeiro convite ao evangelho após Pentecostes. Duas ações: arrependimento (mudança de mente) e batismo (identificação pública com Cristo). Duas promessas: perdão dos pecados e o dom do Espírito Santo.",
  tags: "arrependei / batismo / perdão / Espírito Santo",
  assuntos: ["jerusalem", "pedro", "evangelho", "arrependimento", "batismo"]
},
// 358. Atos 1.3
{
  id: "at1.3",
  referencia: "At 1.3",
  local: "Jerusalém / Judéia (Israel)",
  paisAtual: "Israel",
  lider: "Jesus",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~30 d.C.",
  antes: "Lucas escreve a Teófilo sobre o que Jesus começou a fazer e ensinar. Após a ressurreição, Jesus apareceu aos apóstolos durante quarenta dias.",
  versiculo: "✅ Aos quais também, depois de ter padecido, se apresentou vivo, com muitas e infalíveis provas, sendo visto por eles durante quarenta dias, falando das coisas concernentes ao reino de Deus.",
  depois: "Jesus passou quarenta dias ensinando os apóstolos sobre o reino de Deus antes de ascender ao céu. Este período preparou-os para a missão que receberiam em Pentecostes. O reino de Deus era o tema central de Seu ensino pós-ressurreição.",
  tags: "quarenta dias / reino de Deus / ressurreição",
  assuntos: ["jerusalem", "jesus", "ressurreicao", "reino-deus", "apostolos"]
},
// 359. Atos 1.4-5
{
  id: "at1.4-5",
  referencia: "At 1.4-5",
  local: "Jerusalém / Judéia (Israel)",
  paisAtual: "Israel",
  lider: "Jesus",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~30 d.C.",
  antes: "Jesus estava reunido com os apóstolos antes de Sua ascensão. Eles perguntaram se Ele restauraria o reino a Israel naquele momento.",
  versiculo: "✅ E, estando com eles, determinou-lhes que não se ausentassem de Jerusalém, mas que esperassem a promessa do Pai, que, disse ele, de mim ouvistes. Porque, na verdade, João batizou com água, mas vós sereis batizados com o Espírito Santo, não muito depois destes dias.",
  depois: "Jesus ordenou que os discípulos esperassem em Jerusalém pela promessa do Pai - o batismo com o Espírito Santo. O dom do Espírito seria a capacitação para a missão de serem testemunhas em Jerusalém, Judeia, Samaria e até os confins da terra.",
  tags: "promessa / batismo / Espírito Santo / espera",
  assuntos: ["jerusalem", "jesus", "espirito-santo", "pentecostes", "missao"]
},
// 360. Atos 4.13
{
  id: "at4.13",
  referencia: "At 4.13",
  local: "Jerusalém / Judéia (Israel)",
  paisAtual: "Israel",
  lider: "Pedro e João",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~30 d.C.",
  antes: "Pedro e João haviam curado um homem coxo de nascença na porta do Templo chamada Formosa. Foram presos pelo Sinédrio e levados a julgamento. Os líderes religiosos estavam perplexos com o milagre e com a coragem dos dois pescadores.",
  versiculo: "✅ Então, vendo a ousadia de Pedro e João, e percebendo que eram homens iletrados e incultos, se maravilharam; e os reconheceram que haviam estado com Jesus.",
  depois: "Os líderes religiosos ficaram sem saber o que fazer. Mandaram Pedro e João saírem do Sinédrio e discutiram entre si. Por fim, os ameaçaram e os soltaram, pois não podiam negar o milagre. Pedro e João voltaram para os irmãos e relataram tudo.",
  tags: "ousadia / Pedro e João / estado com Jesus",
  assuntos: ["judaismo", "sinédrio", "apostolos", "jerusalem", "milagre"]
},
// 361. Atos 4.29-30
{
  id: "at4.29-30",
  referencia: "At 4.29-30",
  local: "Jerusalém / Judéia (Israel)",
  paisAtual: "Israel",
  lider: "Pedro e João",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~30 d.C.",
  antes: "Pedro e João foram libertos pelo Sinédrio com ameaças. Voltaram para os irmãos e relataram tudo. A igreja se reuniu em oração, reconhecendo que as ameaças dos líderes religiosos eram reais e que precisavam de ousadia divina para continuar pregando.",
  versiculo: "✅ Agora, pois, ó Senhor, olha para as suas ameaças, e concede aos teus servos que falem a tua palavra com toda a ousadia; enquanto estendes a tua mão para curar, e para que se façam sinais e prodígios pelo nome de teu santo Filho Jesus.",
  depois: "Após a oração, o lugar onde estavam reunidos tremeu, e todos foram cheios do Espírito Santo. A igreja continuou pregando com ousadia, e muitos sinais e prodígios eram feitos pelos apóstolos.",
  tags: "oração / ousadia / sinais",
  assuntos: ["igreja-primitiva", "oracao", "sinais-prodigios", "jerusalem", "apostolos"]
},
// 362. Atos 5.12-14
{
  id: "at5.12-14",
  referencia: "At 5.12-14",
  local: "Jerusalém / Judéia (Israel)",
  paisAtual: "Israel",
  lider: "Apóstolos",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~30 d.C.",
  antes: "A igreja primitiva crescia rapidamente, mas também enfrentava problemas internos (Ananias e Safira) e externos (perseguição do Sinédrio). Os apóstolos realizavam muitos sinais e prodígios, atraindo ainda mais pessoas.",
  versiculo: "✅ E muitos sinais e prodígios eram feitos entre o povo pelas mãos dos apóstolos. E estavam todos unanimemente no alpendre de Salomão. Dos outros, nenhum ousava ajuntar-se a eles; mas o povo os tinha em grande estima. E a multidão dos que criam no Senhor, tanto homens como mulheres, cada vez mais se ajuntava.",
  depois: "A igreja continuava crescendo. Muitos doentes eram trazidos às ruas para que pelo menos a sombra de Pedro os cobrisse. Todos eram curados. Os líderes religiosos ficaram cada vez mais incomodados com o crescimento da igreja.",
  tags: "sinais / crescimento / apóstolos",
  assuntos: ["igreja-primitiva", "apostolos", "sinais-prodigios", "jerusalem", "crescimento"]
},
// 363. Atos 20.18
{
  id: "at20.18",
  referencia: "At 20.18",
  local: "Mileto / Ásia Menor (Turquia)",
  paisAtual: "Turquia",
  lider: "Paulo",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~57 d.C.",
  antes: "Paulo estava a caminho de Jerusalém, sabendo que o aguardavam prisões e sofrimentos. Ele convocou os anciãos da igreja de Éfeso para encontrá-lo em Mileto, evitando passar por Éfeso para não atrasar sua viagem.",
  versiculo: "✅ E, chegando a eles, disse-lhes: Vós bem sabeis como, desde o primeiro dia em que entrei na Ásia, me portei no meio de vós em todo o tempo.",
  depois: "Paulo faz um discurso de despedida emocionante, lembrando seu serviço fiel, as lágrimas e as perseguições. Ele afirma que não se considera culpado do sangue de ninguém, pois anunciou todo o conselho de Deus. Os anciãos choram e se despedem dele, sabendo que não o verão novamente.",
  tags: "testemunho / Paulo / despedida",
  assuntos: ["paulo", "mileto", "efeso", "anciãos", "igreja-primitiva"]
},
// 364. Atos 20.28
{
  id: "at20.28",
  referencia: "At 20.28",
  local: "Mileto / Ásia Menor (Turquia)",
  paisAtual: "Turquia",
  lider: "Paulo",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~57 d.C.",
  antes: "Paulo convocou os anciãos da igreja de Éfeso para encontrá-lo em Mileto. Ele sabia que seria preso em Jerusalém e não os veria novamente.",
  versiculo: "✅ Olhai, pois, por vós e por todo o rebanho sobre que o Espírito Santo vos constituiu bispos, para apascentardes a igreja de Deus, que ele resgatou com seu próprio sangue.",
  depois: "Paulo exorta os líderes a cuidarem da igreja, que Deus comprou com o sangue de Cristo. A imagem é pastoral: a igreja é um rebanho, os líderes são pastores, e o preço pago foi o sangue do próprio Filho de Deus.",
  tags: "bispos / apascentar / igreja / sangue",
  assuntos: ["mileto", "paulo", "lideranca-igreja", "pastoral", "igreja"]
},
// 365. Atos 9.4
{
  id: "at9.4",
  referencia: "At 9.4",
  local: "Damasco / Síria",
  paisAtual: "Síria",
  lider: "Saulo/Paulo",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~34-35 d.C.",
  antes: "Saulo (Paulo) estava a caminho de Damasco com autorização para prender cristãos. Ele perseguia a igreja ferozmente, achando que estava servindo a Deus.",
  versiculo: "✅ E, caindo em terra, ouviu uma voz que lhe dizia: Saulo, Saulo, por que me persegues?",
  depois: "Ao perguntar 'Quem és, Senhor?', Saulo descobre que perseguir a igreja é perseguir o próprio Cristo. A identificação entre Cristo e Sua igreja é tão íntima que o que se faz à igreja se faz a Ele. Esta foi a virada na vida de Paulo.",
  tags: "perseguição / Saulo / igreja / Cristo",
  assuntos: ["damasco", "paulo", "conversao", "igreja", "perseguicao"]
},
// 366. 1 Coríntios 1.2
{
  id: "1co1.2",
  referencia: "1 Co 1.2",
  local: "Corinto / Acaia (Grécia)",
  paisAtual: "Grécia",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~55 d.C.",
  antes: "Paulo inicia sua primeira carta aos coríntios com saudações. Ele escreve para uma igreja que ele havia fundado em sua segunda viagem missionária.",
  versiculo: "✅ À igreja de Deus que está em Corinto, aos santificados em Cristo Jesus, chamados santos, com todos os que em todo lugar invocam o nome de nosso Senhor Jesus Cristo, Senhor deles e nosso.",
  depois: "Paulo distingue a igreja local (em Corinto) da igreja universal (todos os que invocam o nome de Cristo). A carta abordaria problemas específicos da igreja coríntia: divisões, imoralidade, litígios, dons e a ressurreição.",
  tags: "igreja / Corinto / santos / chamados",
  assuntos: ["corinto", "paulo", "igreja-local", "igreja-universal", "santificacao"]
},
// 367. 1 Coríntios 12.4-6
{
  id: "1co12.4-6",
  referencia: "1 Co 12.4-6",
  local: "Corinto / Acaia (Grécia)",
  paisAtual: "Grécia",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~55 d.C.",
  antes: "Paulo introduz o tema dos dons espirituais. Ele quer que os coríntios entendam que os dons vêm de Deus e são para o bem comum.",
  versiculo: "✅ Ora, há diversidade de dons, mas o mesmo Espírito. E há diversidade de ministérios, mas o mesmo Senhor. E há diversidade de operações, mas é o mesmo Deus que opera tudo em todos.",
  depois: "Paulo explica que a manifestação do Espírito é dada a cada um para o proveito comum. Ele lista nove dons espirituais e enfatiza que o Espírito distribui como quer.",
  tags: "dons / Espírito / ministérios / operações",
  assuntos: ["corinto", "paulo", "dons-espirituais", "trindade", "igreja"]
},
// 368. 1 Coríntios 12.5
{
  id: "1co12.5",
  referencia: "1 Co 12.5",
  local: "Corinto / Acaia (Grécia)",
  paisAtual: "Grécia",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~55 d.C.",
  antes: "Paulo inicia a discussão sobre os dons espirituais. Ele quer que os coríntios entendam a diversidade e a unidade na distribuição dos dons.",
  versiculo: "✅ E há diversidade de ministérios, mas o mesmo Senhor.",
  depois: "Paulo continua dizendo que há diversidade de operações, mas o mesmo Deus opera tudo em todos. A manifestação do Espírito é dada a cada um para o proveito comum.",
  tags: "ministérios / diversidade / Senhor",
  assuntos: ["corinto", "paulo", "dons-espirituais", "ministerio", "unidade-igreja"]
},
// 369. 1 Coríntios 12.7
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
  antes: "Paulo introduz o tema dos dons espirituais em Corinto. Havia competição e orgulho em relação aos dons, especialmente o dom de línguas.",
  versiculo: "✅ Mas a manifestação do Espírito é dada a cada um para o que for útil.",
  depois: "O propósito dos dons não é exaltação pessoal, mas utilidade para a comunidade. Cada dom é uma manifestação do Espírito para o bem comum. Paulo usará essa verdade para corrigir os abusos em Corinto.",
  tags: "dons / manifestação / Espírito / utilidade",
  assuntos: ["corinto", "paulo", "dons-espirituais", "comunidade", "igreja"]
},
// 370. 1 Coríntios 12.12
{
  id: "1co12.12",
  referencia: "1 Co 12.12",
  local: "Corinto / Acaia (Grécia)",
  paisAtual: "Grécia",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~55 d.C.",
  antes: "Paulo usa a metáfora do corpo humano para ensinar sobre a unidade e diversidade na igreja. Os coríntios estavam divididos e competindo entre si.",
  versiculo: "✅ Porque, assim como o corpo é um e tem muitos membros, e todos os membros, sendo muitos, são um só corpo, assim é Cristo também.",
  depois: "A igreja é como um corpo com muitos membros que funcionam juntos. Cada membro é necessário e tem uma função única. A diversidade não é problema, mas força. A unidade não significa uniformidade.",
  tags: "corpo / membros / unidade / diversidade",
  assuntos: ["corinto", "paulo", "corpo-de-cristo", "unidade-igreja", "igreja"]
},
// 371. 1 Coríntios 12.27
{
  id: "1co12.27",
  referencia: "1 Co 12.27",
  local: "Corinto / Acaia (Grécia)",
  paisAtual: "Grécia",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~55 d.C.",
  antes: "Paulo conclui sua argumentação sobre o corpo de Cristo. Ele já explicou que muitos membros formam um corpo e que todos são necessários.",
  versiculo: "✅ Ora, vós sois o corpo de Cristo, e individualmente seus membros.",
  depois: "Esta é uma das declarações mais diretas sobre a identidade da igreja. Os crentes não são apenas seguidores de Cristo; eles são o próprio corpo de Cristo na terra. Cada um tem um papel único e indispensável.",
  tags: "corpo / Cristo / membros / identidade",
  assuntos: ["corinto", "paulo", "corpo-de-cristo", "igreja", "identidade-crista"]
},
// 372. 1 Coríntios 12.14-18
{
  id: "1co12.14-18",
  referencia: "1 Co 12.14-18",
  local: "Corinto / Acaia (Grécia)",
  paisAtual: "Grécia",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~55 d.C.",
  antes: "Paulo usa a metáfora do corpo para ensinar sobre a diversidade de dons na igreja. Ele quer corrigir o orgulho e a competição entre os coríntios.",
  versiculo: "⚠️ Pois também o corpo não é um só membro, mas muitos. Se o pé disser: Porque não sou mão, não sou do corpo; não é por isso do corpo? E se a orelha disser: Porque não sou olho, não sou do corpo; não é por isso do corpo? Se todo o corpo fosse olho, onde estaria o ouvido? Se todo fosse ouvido, onde estaria o olfato? Mas agora Deus colocou os membros no corpo, cada um deles como quis.",
  depois: "Paulo argumenta que todos os membros são necessários, mesmo os que parecem mais frágeis. A diversidade é obra de Deus, e cada membro tem um propósito específico no corpo de Cristo.",
  tags: "membros / diversidade / função / corpo",
  assuntos: ["corinto", "paulo", "corpo-de-cristo", "diversidade", "unidade-igreja"]
},
// 373. 1 Coríntios 12.21
{
  id: "1co12.21",
  referencia: "1 Co 12.21",
  local: "Corinto / Acaia (Grécia)",
  paisAtual: "Grécia",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~55 d.C.",
  antes: "Paulo continua a metáfora do corpo para ensinar sobre interdependência na igreja. Cada membro depende dos outros.",
  versiculo: "✅ E o olho não pode dizer à mão: Não tenho necessidade de ti; nem ainda a cabeça aos pés: Não tenho necessidade de vós.",
  depois: "Paulo argumenta que os membros que parecem mais fracos são necessários. Deus deu maior honra aos que tinham menos, para que não haja divisão no corpo. Todos devem cuidar uns dos outros.",
  tags: "interdependência / membros / cuidado / corpo",
  assuntos: ["corinto", "paulo", "corpo-de-cristo", "interdependencia", "comunhao"]
},
// 374. 1 Coríntios 12.31
{
  id: "1co12.31",
  referencia: "1 Co 12.31",
  local: "Corinto / Acaia (Grécia)",
  paisAtual: "Grécia",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~55 d.C.",
  antes: "Paulo acabou de listar os dons espirituais (palavra da sabedoria, palavra da ciência, fé, dons de curar, operação de maravilhas, profecia, discernimento de espíritos, variedade de línguas, interpretação das línguas).",
  versiculo: "✅ Portanto, procurai com zelo os melhores dons; e eu vos mostrarei um caminho mais excelente.",
  depois: "Paulo instrui os coríntios a procurarem os melhores dons, mas anuncia que há algo ainda melhor: 'um caminho mais excelente' — o amor. Isso introduz o famoso capítulo 13 de 1 Coríntios, que descreve a superioridade do amor sobre todos os dons.",
  tags: "dons / melhores / caminho",
  assuntos: ["corinto", "paulo", "dons-espirituais", "amor", "superioridade"]
},
// 375. 1 Coríntios 13.1-3
{
  id: "1co13.1-3",
  referencia: "1 Co 13.1-3",
  local: "Corinto / Acaia (Grécia)",
  paisAtual: "Grécia",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~55 d.C.",
  antes: "Os coríntios estavam orgulhosos de seus dons espirituais. Paulo mostra que os dons sem amor são vazios e inúteis, independentemente de quão impressionantes sejam.",
  versiculo: "⚠️ Ainda que eu falasse as línguas dos homens e dos anjos, e não tivesse amor, seria como o metal que soa ou como o sino que tine. E ainda que tivesse o dom de profecia, e conhecesse todos os mistérios e toda a ciência, e ainda que tivesse toda a fé, de maneira tal que transportasse os montes, e não tivesse amor, nada seria. E ainda que distribuísse toda a minha fortuna para sustento dos pobres, e ainda que entregasse o meu corpo para ser queimado, e não tivesse amor, nada disso me aproveitaria.",
  depois: "Paulo estabelece o amor como o fundamento de todos os dons. Sem amor, os dons são barulho vazio, nada significam, e nada aproveitam. Este capítulo é conhecido como o 'hino ao amor' e é frequentemente lido em casamentos e celebrações cristãs.",
  tags: "amor / dons / nada sou / vazio",
  assuntos: ["corinto", "amor", "dons-espirituais", "paulo", "superioridade"]
},
// 376. 1 Coríntios 13.4-7
{
  id: "1co13.4-7",
  referencia: "1 Co 13.4-7",
  local: "Corinto / Acaia (Grécia)",
  paisAtual: "Grécia",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~55 d.C.",
  antes: "Após afirmar que o amor é superior a todos os dons, Paulo agora descreve as características do amor. Ele lista 15 características, muitas delas contrastando diretamente com o comportamento dos coríntios.",
  versiculo: "⚠️ O amor é sofredor, é benigno; o amor não é invejoso; não se vangloria, não se ensoberbece, não se porta inconvenientemente, não busca os seus interesses, não se irrita, não suspeita mal; não folga com a injustiça, mas folga com a verdade; tudo sofre, tudo crê, tudo espera, tudo suporta.",
  depois: "Os coríntios eram invejosos, orgulhosos, buscavam seus próprios interesses, irritavam-se facilmente. Paulo mostra que o amor é o oposto de tudo isso. O amor é paciente, bondoso, humilde, altruísta, controlado, justo, confiante, esperançoso e perseverante.",
  tags: "amor / benignidade / paciência / humildade",
  assuntos: ["corinto", "amor", "virtudes", "paulo", "carater-cristao"]
},
// 377. 1 Coríntios 14.26
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
  antes: "A igreja de Corinto valorizava excessivamente o dom de línguas, causando confusão e desordem nas reuniões. Paulo instrui que tudo deve ser feito para edificação.",
  versiculo: "✅ Que fareis, pois, irmãos? Quando vos ajuntais, cada um de vós tem salmo, tem doutrina, tem revelação, tem língua, tem interpretação. Faça-se tudo para edificação.",
  depois: "Paulo estabelece princípios de ordem no culto. Deus não é Deus de confusão, mas de paz. Todo o culto deve visar a edificação da igreja.",
  tags: "edificação / dons / comunhão",
  assuntos: ["corinto", "paulo", "edificacao", "dons-espirituais", "ordem-no-culto"]
},
// 378. 1 Coríntios 1.7
{
  id: "1co1.7",
  referencia: "1 Co 1.7",
  local: "Corinto / Acaia (Grécia)",
  paisAtual: "Grécia",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~55 d.C.",
  antes: "Corinto era famosa por seus dons artísticos e culturais. Paulo usa essa imagem para falar dos dons espirituais. A igreja em Corinto era rica em dons, mas imatura em caráter.",
  versiculo: "✅ De maneira que não vos falte nenhum dom, esperando a manifestação de nosso Senhor Jesus Cristo.",
  depois: "Paulo exorta os coríntios a usarem os dons para edificação da igreja, com ordem e amor. A ênfase não deve ser nos dons em si, mas na espera vigilante pela volta de Cristo.",
  tags: "dons / espera / manifestação / Cristo",
  assuntos: ["corinto", "dons-espirituais", "paulo", "espera", "volta-cristo"]
},
// 379. 1 Coríntios 2.4
{
  id: "1co2.4",
  referencia: "1 Co 2.4",
  local: "Corinto / Acaia (Grécia)",
  paisAtual: "Grécia",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~55 d.C.",
  antes: "Os coríntios valorizavam muito a retórica e a eloquência. Havia oradores famosos que cobravam altos preços por seus discursos persuasivos. Paulo contrasta sua pregação com esses oradores.",
  versiculo: "✅ A minha palavra e a minha pregação não consistiram em palavras persuasivas de sabedoria humana, mas em demonstração do Espírito e de poder.",
  depois: "Paulo mostra que o poder do evangelho não está na habilidade oratória do pregador, mas na ação do Espírito Santo. A fé dos coríntios não se baseia na sabedoria humana, mas no poder de Deus.",
  tags: "poder divino / pregação / Espírito",
  assuntos: ["corinto", "paulo", "espirito-santo", "retorica-grega", "evangelho"]
},
// 380. 1 Coríntios 2.5
{
  id: "1co2.5",
  referencia: "1 Co 2.5",
  local: "Corinto / Acaia (Grécia)",
  paisAtual: "Grécia",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~55 d.C.",
  antes: "Paulo continua explicando por que sua pregação evitou a sabedoria humana. O objetivo não era impressionar, mas edificar uma fé sólida e duradoura.",
  versiculo: "✅ Para que a vossa fé não se apoiasse em sabedoria de homens, mas no poder de Deus.",
  depois: "A fé que se apoia na sabedoria humana desmorona diante das dificuldades. A fé que se apoia no poder de Deus resiste às provações e perseguições. Este princípio orientou a pregação de Paulo em toda sua carreira.",
  tags: "fé / poder de Deus / sabedoria humana",
  assuntos: ["corinto", "paulo", "fe-crista", "poder-divino", "evangelho"]
},
// 381. 1 Coríntios 2.16
{
  id: "1co2.16",
  referencia: "1 Co 2.16",
  local: "Corinto / Acaia (Grécia)",
  paisAtual: "Grécia",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~55 d.C.",
  antes: "Paulo cita Isaías 40.13, que pergunta retoricamente quem conhece a mente do Senhor. No contexto do Antigo Testamento, ninguém poderia instruir a Deus.",
  versiculo: "✅ Porque quem conheceu a mente do Senhor, para que possa instruí-lo? Mas nós temos a mente de Cristo.",
  depois: "Pelo Espírito Santo, os crentes têm acesso à mente e ao entendimento de Cristo. Isso não significa que sabemos tudo, mas que temos a mente de Cristo como princípio orientador. O Espírito nos dá discernimento espiritual.",
  tags: "mente / Cristo / entendimento",
  assuntos: ["corinto", "paulo", "espirito-santo", "discernimento", "sabedoria"]
},
// 382. 1 Coríntios 3.3
{
  id: "1co3.3",
  referencia: "1 Co 3.3",
  local: "Corinto / Acaia (Grécia)",
  paisAtual: "Grécia",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~55 d.C.",
  antes: "Havia divisões na igreja de Corinto. Alguns diziam 'sou de Paulo', outros 'sou de Apolo', outros 'sou de Cefas', e ainda outros 'sou de Cristo'. Paulo confronta essas divisões como carnais.",
  versiculo: "✅ Porque ainda sois carnais; pois, havendo entre vós inveja, contendas e dissensões, não sois porventura carnais, e não andais segundo os homens?",
  depois: "Paulo exorta os coríntios a superarem suas divisões, reconhecendo que tanto Paulo quanto Apolo são apenas servos de Deus. O importante é Deus, que dá o crescimento. A unidade na igreja deve refletir a unidade de Cristo.",
  tags: "carnal / ciúmes / divisões",
  assuntos: ["corinto", "paulo", "unidade-igreja", "divisoes", "igreja"]
},
// 383. 1 Coríntios 3.16
{
  id: "1co3.16",
  referencia: "1 Co 3.16",
  local: "Corinto / Acaia (Grécia)",
  paisAtual: "Grécia",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~55 d.C.",
  antes: "Paulo está corrigindo divisões na igreja de Corinto. Alguns seguiam Paulo, outros Apolo, outros Cefas. Ele argumenta que todos são servos de Deus e que a igreja é o templo de Deus.",
  versiculo: "✅ Não sabeis vós que sois o templo de Deus e que o Espírito de Deus habita em vós?",
  depois: "A igreja não é um edifício físico, mas um templo espiritual onde Deus habita. O Espírito Santo não habita em templos feitos por mãos humanas, mas no povo de Deus. Esta verdade exige santidade e respeito mútuo entre os crentes.",
  tags: "templo / Deus / habitação / Espírito",
  assuntos: ["corinto", "paulo", "igreja", "templo-deus", "espirito-santo"]
},
// 384. 1 Coríntios 4.20
{
  id: "1co4.20",
  referencia: "1 Co 4.20",
  local: "Corinto / Acaia (Grécia)",
  paisAtual: "Grécia",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~55 d.C.",
  antes: "Alguns coríntios estavam se tornando arrogantes, confiando em suas palavras e retórica, mas sem o poder que acompanha o verdadeiro evangelho.",
  versiculo: "✅ Porque o reino de Deus não consiste em palavras, mas em poder.",
  depois: "Paulo contrasta a arrogância dos que se orgulham de palavras com o verdadeiro poder do reino de Deus, manifestado em vidas transformadas, milagres e na atuação do Espírito Santo. As palavras sem poder são vazias.",
  tags: "reino de Deus / poder / palavras",
  assuntos: ["corinto", "paulo", "reino-deus", "poder-divino", "evangelho"]
},
// 385. 1 Coríntios 5.6
{
  id: "1co5.6",
  referencia: "1 Co 5.6",
  local: "Corinto / Acaia (Grécia)",
  paisAtual: "Grécia",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~55 d.C.",
  antes: "Paulo havia ouvido que havia imoralidade sexual na igreja de Corinto, algo que nem mesmo entre os gentios era tolerado. Ele escreve para corrigir essa situação.",
  versiculo: "✅ Não é boa a vossa jactância. Não sabeis que um pouco de fermento leveda toda a massa?",
  depois: "Paulo ordena que a igreja remova o malfeitor do meio deles. Ele usa a metáfora do fermento para mostrar como o pecado não tratado contamina toda a comunidade.",
  tags: "fermento / massa / jactância / contaminação",
  assuntos: ["corinto", "paulo", "pecado", "disciplina-igreja", "igreja"]
},
// 386. 1 Coríntios 6.9-10
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
  versiculo: "⚠️ Não sabeis que os injustos não hão de herdar o reino de Deus? Não erreis: nem os devassos, nem os idólatras, nem os adúlteros, nem os efeminados, nem os sodomitas, nem os ladrões, nem os avarentos, nem os bêbados, nem os maldizentes, nem os roubadores herdarão o reino de Deus.",
  depois: "Paulo lembra aos coríntios que alguns deles foram assim, mas foram lavados, santificados e justificados em nome do Senhor Jesus. Ele os exorta a fugir da imoralidade sexual, pois seus corpos são templo do Espírito Santo.",
  tags: "injustos / não herdarão / pecado",
  assuntos: ["corinto", "paulo", "pecado", "reino-deus", "arrependimento"]
},
// 387. 1 Coríntios 9.22
{
  id: "1co9.22",
  referencia: "1 Co 9.22",
  local: "Corinto / Acaia (Grécia)",
  paisAtual: "Grécia",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~55 d.C.",
  antes: "Paulo estava defendendo seu direito de receber sustento do evangelho, mas ele se absteve desse direito para não colocar obstáculos ao evangelho.",
  versiculo: "✅ Para com os fracos me fiz fraco, para ganhar os fracos; fiz-me tudo para todos, para por todos os meios chegar a salvar alguns.",
  depois: "Paulo explica que ele faz tudo por causa do evangelho, para ser participante dele com os outros. Ele se disciplina para não se tornar reprovado após ter pregado.",
  tags: "ganhar / fraco / tudo / salvar",
  assuntos: ["corinto", "paulo", "evangelho", "adaptacao", "missao"]
},
// 388. 1 Coríntios 9.25
{
  id: "1co9.25",
  referencia: "1 Co 9.25",
  local: "Corinto / Acaia (Grécia)",
  paisAtual: "Grécia",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~55 d.C.",
  antes: "Corinto sediada os Jogos Ístmicos, um dos quatro grandes jogos pan-helênicos, realizados a cada dois anos. Os atletas treinavam rigorosamente e se abstinham de muitos prazeres para competir.",
  versiculo: "✅ Todo atleta que luta de tudo se abstém; eles o fazem para alcançar uma coroa corruptível; nós, porém, uma incorruptível.",
  depois: "Paulo usa a metáfora dos jogos para ensinar sobre o domínio próprio e a perseverança na vida cristã. A coroa corruptível (pinheiro) dos jogos contrasta com a coroa incorruptível da vida eterna.",
  tags: "domínio próprio / coroa / luta / atleta",
  assuntos: ["corinto", "jogos-istmicos", "cultura-grega", "paulo", "perseveranca"]
},
// 389. 1 Coríntios 10.16
{
  id: "1co10.16",
  referencia: "1 Co 10.16",
  local: "Corinto / Acaia (Grécia)",
  paisAtual: "Grécia",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~55 d.C.",
  antes: "Paulo fala sobre a participação na Ceia do Senhor e a comunhão com Cristo. Ele usa o exemplo de Israel no deserto para ensinar sobre a comunhão.",
  versiculo: "✅ Porventura o cálice de bênção que abençoamos não é a comunhão do sangue de Cristo? O pão que partimos não é a comunhão do corpo de Cristo?",
  depois: "Paulo explica que participar da Ceia é ter comunhão com Cristo e com os irmãos. Ele adverte contra a participação indigna e a necessidade de examinar a si mesmo antes de comer do pão e beber do cálice.",
  tags: "ceia / comunhão / sangue de cristo / corpo",
  assuntos: ["corinto", "paulo", "ceia-do-senhor", "comunhao", "sacramento"]
},
// 390. 1 Coríntios 10.16-17
{
  id: "1co10.16-17",
  referencia: "1 Co 10.16-17",
  local: "Corinto / Acaia (Grécia)",
  paisAtual: "Grécia",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~55 d.C.",
  antes: "Paulo ensina sobre a Ceia do Senhor, mostrando que ela é uma participação no corpo e no sangue de Cristo. A Ceia também é um ato de comunhão com os irmãos.",
  versiculo: "✅ Porventura o cálice de bênção que abençoamos não é a comunhão do sangue de Cristo? O pão que partimos não é a comunhão do corpo de Cristo? Porque nós, sendo muitos, somos um só pão e um só corpo; porque todos participamos do mesmo pão.",
  depois: "Paulo conclui que a Ceia do Senhor é um ato de comunhão e unidade entre os irmãos. Todos participam do mesmo pão e, portanto, são um só corpo em Cristo. A Ceia é um sinal visível da unidade da igreja.",
  tags: "comunhão / unidade / um só pão / ceia",
  assuntos: ["corinto", "paulo", "comunhao", "unidade-igreja", "ceia-do-senhor"]
},
// 391. 1 Coríntios 11.26
{
  id: "1co11.26",
  referencia: "1 Co 11.26",
  local: "Corinto / Acaia (Grécia)",
  paisAtual: "Grécia",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~55 d.C.",
  antes: "Paulo estava corrigindo os abusos na Ceia do Senhor em Corinto. Havia divisões e alguns estavam comendo e bebendo indignamente, sem discernir o corpo do Senhor.",
  versiculo: "✅ Porque todas as vezes que comerdes este pão e beberdes este cálice anunciais a morte do Senhor, até que venha.",
  depois: "Paulo exorta os coríntios a se examinarem antes de participar da Ceia. Quem come e bebe sem discernir o corpo do Senhor, come e bebe juízo para si. A Ceia aponta para a morte de Cristo e para sua volta.",
  tags: "ceia / morte de cristo / segunda vinda / proclamação",
  assuntos: ["corinto", "paulo", "ceia-do-senhor", "morte-cristo", "volta-cristo"]
},
// 392. 1 Coríntios 12.11
{
  id: "1co12.11",
  referencia: "1 Co 12.11",
  local: "Corinto / Acaia (Grécia)",
  paisAtual: "Grécia",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~55 d.C.",
  antes: "Os coríntios estavam orgulhosos de seus dons espirituais, especialmente o dom de línguas. Havia competição e comparação entre os membros da igreja.",
  versiculo: "✅ Mas um só e o mesmo Espírito opera todas estas coisas, repartindo particularmente a cada um como quer.",
  depois: "Paulo enfatiza que a distribuição dos dons é soberana. O Espírito dá como quer, não como o homem merece ou pede. Isso elimina o orgulho, pois nenhum dom é conquistado. Todos os dons são importantes para o corpo de Cristo.",
  tags: "dons / Espírito / repartir / soberania",
  assuntos: ["corinto", "dons-espirituais", "espirito-santo", "soberania-divina", "igreja"]
},
// 393. Efésios 4.13
{
  id: "ef4.13b",
  referencia: "Ef 4.13",
  local: "Roma / Itália (Itália)",
  paisAtual: "Itália",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~60-62 d.C.",
  antes: "Paulo listou os dons de liderança dados por Cristo à igreja. Ele agora explica o objetivo final desses dons.",
  versiculo: "✅ Até que todos cheguemos à unidade da fé e do conhecimento do Filho de Deus, ao estado de homem perfeito, à medida da estatura da plenitude de Cristo.",
  depois: "Paulo exorta os efésios a não serem mais meninos inconstantes, levados por todo vento de doutrina. Em vez disso, devem crescer em tudo naquele que é a cabeça, Cristo.",
  tags: "unidade / fé / conhecimento / perfeito",
  assuntos: ["roma", "paulo", "maturidade-crista", "unidade-igreja", "plenitude"]
},
// 394. Efésios 4.11
{
  id: "ef4.11",
  referencia: "Ef 4.11",
  local: "Roma / Itália (Itália)",
  paisAtual: "Itália",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~60-62 d.C.",
  antes: "Paulo havia falado sobre a unidade da fé e do conhecimento do Filho de Deus. Ele agora lista os dons de liderança que Cristo deu à igreja.",
  versiculo: "✅ E ele mesmo deu uns para apóstolos, e outros para profetas, e outros para evangelistas, e outros para pastores e doutores.",
  depois: "Paulo explica o propósito desses dons: aperfeiçoar os santos para a obra do ministério, para edificação do corpo de Cristo, até que todos cheguem à unidade da fé.",
  tags: "apóstolos / profetas / evangelistas / pastores",
  assuntos: ["roma", "paulo", "dons-espirituais", "lideranca-igreja", "ministerio"]
},
// 395. Efésios 4.11-12
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
  antes: "Paulo explica como os dons de liderança contribuem para a unidade do corpo de Cristo.",
  versiculo: "✅ E ele mesmo deu uns para apóstolos, e outros para profetas, e outros para evangelistas, e outros para pastores e doutores, para o aperfeiçoamento dos santos, para a obra do ministério, para edificação do corpo de Cristo.",
  depois: "Os dons de liderança não são para exaltação pessoal, mas para equipar a igreja para o serviço.",
  tags: "dons / ministério / edificação",
  assuntos: ["roma", "paulo", "dons-espirituais", "ministerio", "edificacao"]
},
// 396. Efésios 4.12
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
  antes: "Paulo lista os dons de liderança dados por Cristo à igreja. O propósito desses dons não é criar uma hierarquia, mas equipar a igreja para o serviço.",
  versiculo: "✅ Com o fim de aperfeiçoar os santos para a obra do ministério, para edificação do corpo de Cristo.",
  depois: "O objetivo final dos dons é que todos os crentes cheguem à unidade da fé e ao conhecimento do Filho de Deus, à medida da estatura da plenitude de Cristo.",
  tags: "edificação / ministério / corpo de Cristo",
  assuntos: ["roma", "paulo", "edificacao", "dons-espirituais", "corpo-de-cristo"]
},
// 397. Efésios 4.13-15
{
  id: "ef4.13-15",
  referencia: "Ef 4.13-15",
  local: "Roma / Itália (Itália)",
  paisAtual: "Itália",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~60-62 d.C.",
  antes: "Paulo acabou de listar os dons de liderança (apóstolos, profetas, evangelistas, pastores e mestres). Agora explica o propósito desses dons.",
  versiculo: "⚠️ Até que todos cheguemos à unidade da fé e do conhecimento do Filho de Deus, à medida da estatura da plenitude de Cristo, para que não sejamos mais meninos inconstantes, levados em roda por todo vento de doutrina, pela astúcia dos homens, segundo o engano que anda à espreita. Mas, seguindo a verdade em amor, cresçamos em tudo naquele que é a cabeça, Cristo.",
  depois: "O objetivo final dos dons é a unidade, maturidade e estabilidade doutrinária. O crente maduro não é levado por qualquer vento de doutrina ou engano. O crescimento deve ser em amor e verdade, tendo Cristo como cabeça.",
  tags: "unidade / conhecimento / verdade / maturidade",
  assuntos: ["roma", "paulo", "dons-espirituais", "maturidade", "unidade-igreja"]
},
// 398. Efésios 4.14-15
{
  id: "ef4.14-15",
  referencia: "Ef 4.14-15",
  local: "Roma / Itália (Itália)",
  paisAtual: "Itália",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~60-62 d.C.",
  antes: "Paulo explica o propósito dos dons de liderança: maturidade e estabilidade, para não serem mais como crianças instáveis.",
  versiculo: "⚠️ Para que não sejamos mais meninos inconstantes, levados em roda por todo vento de doutrina, pela astúcia dos homens, segundo o engano que anda à espreita. Mas, seguindo a verdade em amor, cresçamos em tudo naquele que é a cabeça, Cristo.",
  depois: "A instabilidade doutrinária é comparada a crianças sendo levadas por qualquer vento. A maturidade traz estabilidade. O crescimento deve ocorrer 'seguindo a verdade em amor' — verdade e amor não são opostos, mas complementares.",
  tags: "doutrina / verdade / crescimento / amor",
  assuntos: ["roma", "paulo", "maturidade-crista", "doutrina", "verdade"]
},
// 399. Efésios 4.2-3
{
  id: "ef4.2-3",
  referencia: "Ef 4.2-3",
  local: "Roma / Itália (Itália)",
  paisAtual: "Itália",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~60-62 d.C.",
  antes: "Paulo está preso em Roma. Ele escreve aos efésios sobre a unidade da igreja. Antes de listar os dons, ele exorta às virtudes que mantêm a unidade.",
  versiculo: "✅ Com toda a humildade e mansidão, com longanimidade, suportando-vos uns aos outros em amor, procurando guardar a unidade do Espírito pelo vínculo da paz.",
  depois: "A unidade não é automática — precisa ser guardada. As virtudes necessárias são humildade, mansidão, paciência, tolerância e amor. A paz é o vínculo que mantém a unidade. Estas virtudes contrastam com o orgulho e a impaciência comuns nas igrejas.",
  tags: "humildade / unidade / paz",
  assuntos: ["roma", "paulo", "unidade-igreja", "humildade", "paz"]
},
// 400. Efésios 4.3
{
  id: "ef4.3",
  referencia: "Ef 4.3",
  local: "Roma / Itália (Itália)",
  paisAtual: "Itália",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~60-62 d.C.",
  antes: "Paulo exorta os efésios a viverem de maneira digna da vocação, com humildade, mansidão e longanimidade. Ele agora explica a base da unidade da igreja.",
  versiculo: "✅ Procurando guardar a unidade do Espírito pelo vínculo da paz.",
  depois: "A unidade da igreja é uma obra do Espírito que deve ser guardada. O vínculo que mantém essa unidade é a paz. Não é uma paz passiva, mas ativa, que exige esforço e compromisso.",
  tags: "unidade / paz / esforço / vínculo",
  assuntos: ["roma", "paulo", "unidade-igreja", "paz", "espirito-santo"]
},
// 401. Efésios 4.4-6
{
  id: "ef4.4-6",
  referencia: "Ef 4.4-6",
  local: "Roma / Itália (Itália)",
  paisAtual: "Itália",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~60-62 d.C.",
  antes: "Paulo exortava os efésios a viverem de maneira digna da vocação, com humildade, mansidão e longanimidade. Ele agora explica a base da unidade da igreja.",
  versiculo: "✅ Há um só corpo e um só Espírito, como também fostes chamados em uma só esperança da vossa vocação; um só Senhor, uma só fé, um só batismo; um só Deus e Pai de todos, o qual é sobre todos, e por todos, e em todos.",
  depois: "Paulo explica que Cristo deu dons à igreja para edificação do corpo. Cada membro recebeu graça segundo a medida do dom de Cristo.",
  tags: "unidade / corpo / Espírito / Senhor",
  assuntos: ["roma", "paulo", "unidade-igreja", "trindade", "igreja"]
},
// 402. Efésios 4.25
{
  id: "ef4.25",
  referencia: "Ef 4.25",
  local: "Roma / Itália (Itália)",
  paisAtual: "Itália",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~60-62 d.C.",
  antes: "Paulo exorta os efésios a abandonarem a mentira e a falarem a verdade. Ele enfatiza que a verdade é essencial para a unidade do corpo de Cristo.",
  versiculo: "✅ Por isso, deixando a mentira, fale cada um a verdade com o seu próximo; pois somos membros uns dos outros.",
  depois: "Paulo continua instruindo sobre a santidade prática: não pecar com a ira, não dar lugar ao diabo, não furtar, mas trabalhar. A verdade e a honestidade são marcas da comunidade cristã.",
  tags: "verdade / membros / comunhão / honestidade",
  assuntos: ["roma", "paulo", "verdade", "comunhao", "corpo-de-cristo"]
},
// 403. Efésios 4.29
{
  id: "ef4.29",
  referencia: "Ef 4.29",
  local: "Roma / Itália (Itália)",
  paisAtual: "Itália",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~60-62 d.C.",
  antes: "Paulo instrui os efésios sobre o uso da linguagem. A fala deve ser edificante, não destrutiva.",
  versiculo: "✅ Não saia da vossa boca nenhuma palavra torpe, mas só a que for boa para promover a edificação, para que dê graça aos que a ouvem.",
  depois: "Paulo exorta os efésios a não entristecerem o Espírito Santo. Eles devem abandonar amargura, ira e clamor, e serem bondosos e misericordiosos, perdoando uns aos outros.",
  tags: "fofoca / edificação / graça / palavras",
  assuntos: ["roma", "paulo", "comunicacao", "edificacao", "sabedoria"]
},
// 404. Efésios 4.31-32
{
  id: "ef4.31-32",
  referencia: "Ef 4.31-32",
  local: "Roma / Itália (Itália)",
  paisAtual: "Itália",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~60-62 d.C.",
  antes: "Paulo havia instruído os efésios sobre a renovação da mente e a verdade no amor. Ele falou sobre a necessidade de abandonar as práticas da velha natureza.",
  versiculo: "⚠️ Toda amargura, e ira, e cólera, e clamor, e blasfêmia seja tirada de entre vós, bem como toda malícia. Antes, sede uns para com os outros benignos, misericordiosos, perdoando-vos uns aos outros, como também Deus vos perdoou em Cristo.",
  depois: "Paulo continua instruindo sobre a imitação de Deus como filhos amados. Eles devem andar em amor, como Cristo os amou, e andar como filhos da luz.",
  tags: "amargura / ira / bondade / perdão",
  assuntos: ["roma", "paulo", "perdao", "bondade", "misericordia"]
},
// 405. Efésios 4.32
{
  id: "ef4.32",
  referencia: "Ef 4.32",
  local: "Roma / Itália (Itália)",
  paisAtual: "Itália",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~60-62 d.C.",
  antes: "Paulo instrui os efésios a abandonarem amargura, ira, clamor e maldade. Ele contrasta o comportamento da velha natureza com a nova natureza em Cristo.",
  versiculo: "✅ Antes, sede uns para com os outros benignos, misericordiosos, perdoando-vos uns aos outros, como também Deus vos perdoou em Cristo.",
  depois: "O padrão do perdão cristão é o perdão que recebemos de Deus. Devemos perdoar uns aos outros da mesma forma que Deus nos perdoou — completamente e sem reservas. A bondade e a misericórdia devem caracterizar os relacionamentos cristãos.",
  tags: "bondade / perdão / Deus / misericórdia",
  assuntos: ["roma", "paulo", "perdao", "bondade", "misericordia"]
},
// 406. Efésios 5.5-6
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
  tags: "avarento / não tem herança / ira de Deus",
  assuntos: ["roma", "paulo", "avareza", "idolatria", "reino-deus"]
},
// 407. Efésios 5.9
{
  id: "ef5.9",
  referencia: "Ef 5.9",
  local: "Roma / Itália (Itália)",
  paisAtual: "Itália",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~60-62 d.C.",
  antes: "Paulo exorta os efésios a andarem como filhos da luz, em contraste com as obras infrutíferas das trevas (imoralidade, impureza, avareza).",
  versiculo: "✅ Porque o fruto da luz consiste em toda a bondade, e justiça, e verdade.",
  depois: "O fruto da luz (vida em Cristo) é bondade, justiça e verdade — três virtudes que refletem o caráter de Deus. Estas contrastam diretamente com as obras das trevas. O crente deve expor as trevas e viver como luz no mundo.",
  tags: "bondade / justiça / verdade / luz",
  assuntos: ["roma", "paulo", "luz", "virtudes", "justica"]
},
// 408. Efésios 5.11
{
  id: "ef5.11",
  referencia: "Ef 5.11",
  local: "Roma / Itália (Itália)",
  paisAtual: "Itália",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~60-62 d.C.",
  antes: "Paulo exorta os efésios a andarem como filhos da luz. Eles devem rejeitar as obras infrutíferas das trevas.",
  versiculo: "✅ E não comuniqueis com as obras infrutuosas das trevas, mas antes reprovai-as.",
  depois: "Paulo explica que é vergonhoso até mesmo falar das coisas que os desobedientes fazem em segredo. A luz revela tudo, e o que é manifestado pela luz torna-se luz. O crente deve viver como luz no mundo.",
  tags: "trevas / reprovar / luz / obras",
  assuntos: ["roma", "paulo", "luz", "trevas", "discernimento"]
},
// 409. Efésios 5.26
{
  id: "ef5.26",
  referencia: "Ef 5.26",
  local: "Roma / Itália (Itália)",
  paisAtual: "Itália",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~60-62 d.C.",
  antes: "Paulo explica o amor de Cristo pela igreja usando o casamento como metáfora. Cristo amou a igreja e se entregou por ela.",
  versiculo: "✅ Para a santificar, purificando-a com a lavagem da água, pela palavra.",
  depois: "A santificação da igreja ocorre pela 'lavagem da água pela palavra' — o batismo e o ensino das Escrituras. Cristo purifica sua igreja para apresentá-la a si mesmo como igreja gloriosa, sem mancha ou ruga.",
  tags: "lavar / água / Palavra",
  assuntos: ["roma", "paulo", "santificacao", "palavra-deus", "igreja"]
},
// 410. Efésios 5.27
{
  id: "ef5.27",
  referencia: "Ef 5.27",
  local: "Roma / Itália (Itália)",
  paisAtual: "Itália",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~60-62 d.C.",
  antes: "Paulo continua descrevendo o amor sacrificial de Cristo pela igreja. Ele não apenas morreu por ela, mas também a purifica e santifica.",
  versiculo: "✅ Para a apresentar a si mesmo igreja gloriosa, sem mácula, nem ruga, nem coisa semelhante, mas santa e irrepreensível.",
  depois: "O objetivo final de Cristo para a igreja é apresentá-la perfeita a Si mesmo. A santificação é obra contínua de Cristo através da Palavra e do Espírito. A igreja será sem mácula (moralmente pura), sem ruga (eternamente jovem), santa e irrepreensível.",
  tags: "igreja / gloriosa / sem mácula / santa",
  assuntos: ["roma", "paulo", "igreja", "santificacao", "gloria"]
},
// 411. Efésios 6.18
{
  id: "ef6.18",
  referencia: "Ef 6.18",
  local: "Roma / Itália (Itália)",
  paisAtual: "Itália",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~60-62 d.C.",
  antes: "Paulo instrui os efésios sobre a armadura de Deus. Após descrever cada peça da armadura, ele conclui com uma exortação à oração.",
  versiculo: "✅ Orando em todo o tempo com toda oração e súplica no Espírito, e vigiando nisto com toda perseverança e súplica por todos os santos.",
  depois: "Paulo pede oração específica por ele, para que tenha ousadia para pregar o evangelho. Ele conclui a carta com saudações e uma bênção.",
  tags: "oração / vigilância / intercessão / perseverança",
  assuntos: ["roma", "paulo", "oracao", "intercessao", "batalha-espiritual"]
},
// 412. Efésios 2.8-9
{
  id: "ef2.8-9",
  referencia: "Ef 2.8-9",
  local: "Roma / Itália (Itália)",
  paisAtual: "Itália",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~60-62 d.C.",
  antes: "Paulo havia descrito a condição anterior dos efésios: mortos em delitos e pecados. Ele explicou que Deus, por sua grande misericórdia, os vivificou com Cristo.",
  versiculo: "✅ Porque pela graça sois salvos, por meio da fé; e isto não vem de vós, é dom de Deus. Não vem das obras, para que ninguém se glorie.",
  depois: "Paulo continua explicando que os efésios, que antes estavam longe de Deus, agora foram aproximados pelo sangue de Cristo. Ele derrubou a parede de separação entre judeus e gentios.",
  tags: "graça / fé / dom / obras",
  assuntos: ["roma", "paulo", "salvação", "graça", "fé"]
},
// 413. Efésios 2.6
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
// 414. Efésios 1.3
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
  tags: "bênçãos espirituais / lugares celestiais / eleição",
  assuntos: ["roma", "paulo", "bencao-espiritual", "efesios", "redenção"]
},
// 415. Efésios 3.10
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
  depois: "Paulo conclui que os efésios não devem desanimar com suas tribulações, pois elas são para a glória deles. Ele ora para que sejam fortalecidos interiormente, para que Cristo habite em seus corações pela fé.",
  tags: "igreja / propósito / manifestação da sabedoria",
  assuntos: ["roma", "paulo", "igreja", "sabedoria-divina", "principados"]
},
// 416. Efésios 3.16
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
// 417. Filipenses 1.6
{
  id: "fp1.6",
  referencia: "Fp 1.6",
  local: "Roma / Itália (Itália)",
  paisAtual: "Itália",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~60-62 d.C.",
  antes: "Paulo está preso em Roma, mas escreve uma carta alegre aos filipenses. Ele agradece pela parceria deles no evangelho desde o primeiro dia.",
  versiculo: "✅ Tendo por certo isto mesmo: que aquele que em vós começou a boa obra a aperfeiçoará até o dia de Jesus Cristo.",
  depois: "Paulo confia na fidelidade de Deus para completar a obra que Ele mesmo começou. Esta certeza dá segurança aos filipenses que enfrentavam perseguição. A obra da salvação é iniciada e completada por Deus.",
  tags: "começou / completará / Cristo / fidelidade",
  assuntos: ["roma", "paulo", "fidelidade-deus", "salvacao", "perseveranca"]
},
// 418. Filipenses 1.11
{
  id: "fp1.11",
  referencia: "Fp 1.11",
  local: "Roma / Itália (Itália)",
  paisAtual: "Itália",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~60-62 d.C.",
  antes: "Paulo ora para que os filipenses sejam puros e inculpáveis no dia de Cristo, cheios do fruto da justiça.",
  versiculo: "✅ Cheios dos frutos de justiça, que são por Jesus Cristo, para glória e louvor de Deus.",
  depois: "Os frutos da justiça não são produzidos pelo esforço humano, mas vêm por Jesus Cristo. O propósito final de nossa vida e boas obras é a glória e louvor de Deus, não o autoengrandecimento.",
  tags: "fruto / justiça / glória / louvor",
  assuntos: ["roma", "paulo", "justica", "gloria-deus", "fruto-espirito"]
},
// 419. Filipenses 2.3-4
{
  id: "fp2.3-4",
  referencia: "Fp 2.3-4",
  local: "Roma / Itália (Itália)",
  paisAtual: "Itália",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~60-62 d.C.",
  antes: "Paulo exorta os filipenses à humildade e à unidade. Havia indícios de rivalidade e orgulho na igreja de Filipos.",
  versiculo: "✅ Nada façais por contenda ou por vanglória, mas com humildade cada um considere os outros superiores a si mesmo. Não atente cada um para o que é propriamente seu, mas cada qual também para o que é dos outros.",
  depois: "Paulo dá a motivação prática da humildade, usando o exemplo de Cristo que se humilhou na encarnação e na morte de cruz. Este é o famoso 'hino cristológico' que descreve a kenosis (esvaziamento) de Cristo.",
  tags: "humildade / exemplo / Cristo",
  assuntos: ["roma", "paulo", "humildade", "exemplo-cristo", "unidade-igreja"]
},
// 420. Filipenses 2.3-5
{
  id: "fp2.3-5",
  referencia: "Fp 2.3-5",
  local: "Roma / Itália (Itália)",
  paisAtual: "Itália",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~60-62 d.C.",
  antes: "Paulo exorta os filipenses à humildade e à unidade. Havia indícios de rivalidade e orgulho na igreja de Filipos.",
  versiculo: "✅ Nada façais por contenda ou por vanglória, mas com humildade cada um considere os outros superiores a si mesmo. Não atente cada um para o que é propriamente seu, mas cada qual também para o que é dos outros. Tende em vós o mesmo sentimento que houve também em Cristo Jesus.",
  depois: "Paulo usa o exemplo de Cristo que se humilhou na encarnação e na morte de cruz. Este é o famoso 'hino cristológico' que descreve a kenosis (esvaziamento) de Cristo.",
  tags: "humildade / exemplo / Cristo / sentimento",
  assuntos: ["roma", "paulo", "humildade", "exemplo-cristo", "unidade-igreja"]
},
// 421. Filipenses 2.15
{
  id: "fp2.15",
  referencia: "Fp 2.15",
  local: "Roma / Itália (Itália)",
  paisAtual: "Itália",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~60-62 d.C.",
  antes: "Paulo exorta os filipenses a fazerem todas as coisas sem murmurações nem contendas, para que sejam irrepreensíveis e sinceros, filhos de Deus inculpáveis no meio de uma geração perversa.",
  versiculo: "✅ Para que sejais irrepreensíveis e sinceros, filhos de Deus inculpáveis no meio de uma geração corrupta e perversa, entre a qual resplandeceis como astros no mundo.",
  depois: "Paulo os exorta a reter a palavra da vida, para que no dia de Cristo ele possa gloriar-se de que não correu em vão. A vida dos filipenses deve ser um testemunho brilhante no meio da escuridão do mundo.",
  tags: "luz / mundo / irrepreensível / testemunho",
  assuntos: ["roma", "paulo", "luz", "testemunho", "santidade"]
},
// 422. Filipenses 4.4
{
  id: "fp4.4",
  referencia: "Fp 4.4",
  local: "Roma / Itália (Itália)",
  paisAtual: "Itália",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~60-62 d.C.",
  antes: "Paulo está preso em Roma, acorrentado a um soldado, aguardando julgamento que pode levar à morte. Mesmo assim, ele ordena alegria.",
  versiculo: "✅ Regozijai-vos sempre no Senhor; outra vez digo, regozijai-vos.",
  depois: "A alegria cristã não depende das circunstâncias. Paulo está na cadeia, mas ordena alegria. A fonte da alegria é 'no Senhor', não nas circunstâncias favoráveis. Esta é uma das marcas distintivas do cristianismo.",
  tags: "alegria / regozijo / Senhor",
  assuntos: ["roma", "paulo", "alegria", "fe-circunstancias", "perseveranca"]
},
// 423. Filipenses 4.7
{
  id: "fp4.7",
  referencia: "Fp 4.7",
  local: "Roma / Itália (Itália)",
  paisAtual: "Itália",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~60-62 d.C.",
  antes: "Paulo acabou de instruir sobre a oração: 'Não estejais ansiosos... em tudo, pela oração e súplica, com ações de graças, apresentai vossos pedidos a Deus'.",
  versiculo: "✅ E a paz de Deus, que excede todo o entendimento, guardará os vossos corações e os vossos pensamentos em Cristo Jesus.",
  depois: "A paz de Deus é o resultado imediato da oração e gratidão. Ela 'guarda' (como sentinelas guardam uma cidade) os corações e pensamentos dos crentes. Esta paz não pode ser explicada pela lógica humana — excede todo entendimento.",
  tags: "paz / guarda / entendimento / oração",
  assuntos: ["roma", "paulo", "paz-deus", "oracao", "gratidao"]
},
// 424. Filipenses 4.11
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
  depois: "Paulo explica que aprendeu a viver contente em toda e qualquer situação: tanto na humilhação quanto na abundância, tanto em fartura quanto em escassez. O contentamento é aprendido, não automático, e independe das circunstâncias externas.",
  tags: "aprendi / contentar / circunstâncias",
  assuntos: ["roma", "paulo", "contentamento", "aprendizado", "dependencia-cristo"]
},
// 425. Filipenses 4.15-16
{
  id: "fp4.15-16",
  referencia: "Fp 4.15-16",
  local: "Roma / Itália (Itália)",
  paisAtual: "Itália",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~60-62 d.C.",
  antes: "Paulo agradecia aos filipenses pela generosidade deles para com seu ministério. Ele havia recebido ofertas deles e agora expressa sua gratidão.",
  versiculo: "✅ E vós bem sabeis também, ó filipenses, que, no princípio do evangelho, quando parti da Macedônia, nenhuma igreja comunicou comigo no sentido de dar e receber, senão vós somente. Porque também uma e outra vez me mandastes o necessário a Tessalônica.",
  depois: "Paulo não busca o dom em si, mas o fruto que abunda para a conta dos filipenses. Ele os chama de 'aromático perfume, sacrifício aceitável e agradável a Deus'. Deus suprirá todas as suas necessidades.",
  tags: "comunhão / dar / receber / oferta",
  assuntos: ["roma", "paulo", "generosidade", "comunhão", "ofertas"]
},
// 426. Colossenses 1.10
{
  id: "cl1.10",
  referencia: "Cl 1.10",
  local: "Roma / Itália (Itália)",
  paisAtual: "Itália",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~60-62 d.C.",
  antes: "Paulo ora para que os colossenses sejam cheios do conhecimento da vontade de Deus. O propósito é que vivam de maneira digna.",
  versiculo: "✅ Para que possais andar dignamente diante do Senhor, agradando-lhe em tudo, frutificando em toda boa obra, e crescendo no conhecimento de Deus.",
  depois: "Quatro resultados de conhecer a vontade de Deus: (1) andar dignamente, (2) agradar a Deus em tudo, (3) frutificar em toda boa obra, (4) crescer no conhecimento de Deus. O conhecimento não é estático — deve aumentar continuamente.",
  tags: "andar / digno / fruto / conhecimento",
  assuntos: ["roma", "paulo", "vontade-deus", "vida-digna", "crescimento"]
},
// 427. Colossenses 1.16-17
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
// 428. Colossenses 1.23
{
  id: "cl1.23",
  referencia: "Cl 1.23",
  local: "Roma / Itália (Itália)",
  paisAtual: "Itália",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~60-62 d.C.",
  antes: "Paulo escreve aos colossenses sobre a supremacia de Cristo. Ele os exorta a permanecerem firmes na fé, sem se desviarem da esperança do evangelho.",
  versiculo: "✅ Se, na verdade, permanecerdes fundados e firmes na fé, e não vos moverdes da esperança do evangelho que ouvistes, e que foi pregado a toda criatura que está debaixo do céu; e do qual eu, Paulo, sou feito ministro.",
  depois: "O evangelho já havia se espalhado por todo o mundo conhecido na época de Paulo. A mensagem de Cristo não era um movimento local, mas universal. Paulo se via como ministro desse evangelho global.",
  tags: "evangelho / pregação / universal / permanecer",
  assuntos: ["roma", "paulo", "evangelho", "universalidade", "perseveranca"]
},
// 429. Colossenses 2.12
{
  id: "cl2.12",
  referencia: "Cl 2.12",
  local: "Roma / Itália (Itália)",
  paisAtual: "Itália",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~60-62 d.C.",
  antes: "Paulo ensina que os colossenses foram sepultados com Cristo no batismo e com ele ressuscitaram pela fé. Ele combate a ideia de que a circuncisão física é necessária para a salvação.",
  versiculo: "✅ Sepultados com ele no batismo, nele também ressuscitastes pela fé no poder de Deus, que o ressuscitou dentre os mortos.",
  depois: "Paulo explica que os colossenses, que estavam mortos em seus pecados, foram vivificados com Cristo. Ele perdoou todas as suas transgressões e cancelou o certificado de dívida que era contra eles, pregando-o na cruz.",
  tags: "batismo / sepultamento / ressurreição / fé",
  assuntos: ["roma", "paulo", "batismo", "ressurreicao", "salvacao"]
},
// 430. Colossenses 3.12-13
{
  id: "cl3.12-13",
  referencia: "Cl 3.12-13",
  local: "Roma / Itália (Itália)",
  paisAtual: "Itália",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~60-62 d.C.",
  antes: "Paulo contrasta o que 'matar' (imoralidade, ira) com o que 'vestir' (compaixão, bondade, humildade, paciência e perdão).",
  versiculo: "⚠️ Revesti-vos, pois, como eleitos de Deus, santos e amados, de entranhas de misericórdia, de benignidade, humildade, mansidão, longanimidade; suportando-vos uns aos outros, e perdoando-vos uns aos outros, se alguém tiver queixa contra outro; assim como Cristo vos perdoou, assim fazei vós também.",
  depois: "A base para estas virtudes é a identidade do crente: 'eleitos de Deus, santos e amados'. As virtudes incluem compaixão, bondade, humildade, mansidão, paciência, tolerância e perdão. O padrão do perdão é o próprio perdão de Cristo.",
  tags: "paciência / perdão / suportar / misericórdia",
  assuntos: ["roma", "paulo", "virtudes", "perdao", "paciencia"]
},
// 431. Colossenses 3.13
{
  id: "cl3.13",
  referencia: "Cl 3.13",
  local: "Roma / Itália (Itália)",
  paisAtual: "Itália",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~60-62 d.C.",
  antes: "Paulo especifica o perdão na comunidade cristã em Colossos, que enfrentava tensões internas.",
  versiculo: "✅ Suportando-vos uns aos outros, e perdoando-vos uns aos outros, se alguém tiver queixa contra outro; assim como Cristo vos perdoou, assim fazei vós também.",
  depois: "O perdão não é opcional no corpo de Cristo. A base para perdoar os outros é o perdão que recebemos de Cristo. Se Cristo nos perdoou completamente, devemos fazer o mesmo. A 'queixa' reconhece que ofensas reais ocorrem — não se trata de ignorar o problema, mas de perdoar.",
  tags: "perdão / queixa / Senhor / reconciliação",
  assuntos: ["roma", "paulo", "perdao", "comunidade-crista", "reconciliacao"]
},
// 432. Colossenses 4.2
{
  id: "cl4.2",
  referencia: "Cl 4.2",
  local: "Roma / Itália (Itália)",
  paisAtual: "Itália",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~60-62 d.C.",
  antes: "Paulo dá instruções finais sobre oração, mesmo estando preso em Roma. Ele destaca perseverança, vigilância e ações de graças.",
  versiculo: "✅ Perseverai na oração, vigiando com ações de graças.",
  depois: "Três características da oração: (1) perseverança — continuar orando mesmo sem respostas imediatas, (2) vigilância — estar alerta, atento à direção de Deus, (3) ações de graças — oração não é apenas pedir, mas agradecer. A oração deve ser constante, não ocasional.",
  tags: "orar / vigilância / ação / perseverança",
  assuntos: ["roma", "paulo", "oracao", "perseveranca", "gratidao"]
},
// 433. Colossenses 4.5-6
{
  id: "cl4.5-6",
  referencia: "Cl 4.5-6",
  local: "Roma / Itália (Itália)",
  paisAtual: "Itália",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~60-62 d.C.",
  antes: "Paulo estava concluindo a carta aos Colossenses com exortações sobre oração e comportamento cristão. Ele pede oração para a abertura da porta da palavra.",
  versiculo: "✅ Andai com sabedoria para com os que estão de fora, remindo o tempo. A vossa palavra seja sempre agradável, temperada com sal, para que saibais como vos convém responder a cada um.",
  depois: "Paulo termina a carta com saudações pessoais de seus companheiros: Tíquico, Onésimo, Aristarco, Marcos, Justo, Epafras, Lucas e Demas. Ele pede que a carta seja lida também na igreja dos laodicenses.",
  tags: "sabedoria / tempo / sal / responder",
  assuntos: ["roma", "paulo", "comportamento-cristao", "evangelismo", "missao"]
},
// 434. Gálatas 4.19
{
  id: "gl4.19",
  referencia: "Gl 4.19",
  local: "Galácia / Ásia Menor (Turquia)",
  paisAtual: "Turquia",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~49-55 d.C.",
  antes: "Paulo está profundamente preocupado com os gálatas que estão voltando à Lei de Moisés depois de terem recebido o Espírito pela fé.",
  versiculo: "✅ Meus filhos, por quem de novo sinto as dores de parto, até que Cristo seja formado em vós.",
  depois: "Paulo usa a metáfora do parto para expressar sua angústia pastoral. Ele já deu à luz os gálatas espiritualmente, mas agora sente dores de parto novamente porque eles estão se desviando. O objetivo é que Cristo seja formado neles — crescimento espiritual contínuo.",
  tags: "formação / Cristo / dores / angústia",
  assuntos: ["galacia", "paulo", "formacao-cristo", "cuidado-pastoral", "evangelho"]
},
// 435. Gálatas 5.8
{
  id: "gl5.8",
  referencia: "Gl 5.8",
  local: "Galácia / Ásia Menor (Turquia)",
  paisAtual: "Turquia",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~49-55 d.C.",
  antes: "Paulo está confrontando os gálatas que estavam sendo persuadidos por falsos mestres a seguir a Lei de Moisés. A persuasão deles era forte e convincente.",
  versiculo: "✅ Esta persuasão não vem daquele que vos chamou.",
  depois: "Paulo afirma que a fonte da persuasão dos falsos mestres não é Deus. A verdadeira chamada de Deus leva à liberdade em Cristo, não à escravidão da Lei. Este versículo ajuda os crentes a discernir a origem das doutrinas que ouvem.",
  tags: "persuasão / falsos mestres / chamado de Deus",
  assuntos: ["galacia", "paulo", "falsos-mestres", "discernimento", "evangelho"]
},
// 436. Gálatas 5.13
{
  id: "gl5.13",
  referencia: "Gl 5.13",
  local: "Galácia / Ásia Menor (Turquia)",
  paisAtual: "Turquia",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~49-55 d.C.",
  antes: "Paulo exorta os gálatas a usarem sua liberdade em Cristo para servir uns aos outros, não para satisfazer a carne.",
  versiculo: "✅ Porque vós, irmãos, fostes chamados à liberdade; somente não useis da liberdade para dar ocasião à carne, mas servi-vos uns aos outros pelo amor.",
  depois: "Paulo resume toda a Lei em um só mandamento: 'Amarás ao teu próximo como a ti mesmo'. A liberdade cristã não é licenciosidade, mas oportunidade para servir em amor.",
  tags: "liberdade / servir / amor / ocasião",
  assuntos: ["galacia", "paulo", "liberdade-crista", "servico", "amor"]
},
// 437. Gálatas 5.16
{
  id: "gl5.16",
  referencia: "Gl 5.16",
  local: "Galácia / Ásia Menor (Turquia)",
  paisAtual: "Turquia",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~49-55 d.C.",
  antes: "Paulo está introduzindo o contraste entre carne e Espírito. Ele acabou de dizer que a liberdade cristã não deve ser usada para a carne, mas para servir uns aos outros pelo amor.",
  versiculo: "✅ Digo, porém: Andai pelo Espírito, e não haveis de satisfazer os desejos da carne.",
  depois: "Andar pelo Espírito significa viver em dependência diária do Espírito Santo. Quando isso acontece, os desejos da carne (natureza pecaminosa) não têm domínio sobre o crente. Esta é a chave para a vida cristã vitoriosa.",
  tags: "andar / Espírito / carne / domínio",
  assuntos: ["galacia", "paulo", "espirito-santo", "vida-espiritual", "carne-espirito"]
},
// 438. Gálatas 5.19-21
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
  antes: "Paulo acabou de dizer: 'Andai pelo Espírito e não satisfareis os desejos da carne'. Ele agora exemplifica o que a carne produz, listando 15 obras da carne.",
  versiculo: "⚠️ Porque as obras da carne são manifestas: adultério, fornicação, impureza, lascívia, idolatria, feitiçaria, inimizades, porfias, ciúmes, iras, discórdias, dissensões, facções, invejas, bebedices, glutonarias e coisas semelhantes a estas, as quais vos declaro, como já antes vos disse, que os que cometem tais coisas não herdarão o reino de Deus.",
  depois: "A lista das obras da carne inclui pecados sexuais, religiosos (idolatria, feitiçaria), relacionais (inimizades, ciúmes, iras, discórdias) e de excesso (bebedices, glutonarias). Paulo é enfático: os que praticam tais coisas não herdarão o reino de Deus.",
  tags: "obras da carne / governo / vida / pecado",
  assuntos: ["galacia", "paulo", "obras-carne", "pecado", "reino-deus"]
},
// 439. Gálatas 5.22-23
{
  id: "gl5.22-23",
  referencia: "Gl 5.22-23",
  local: "Galácia / Ásia Menor (Turquia)",
  paisAtual: "Turquia",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~49-55 d.C.",
  antes: "Após listar as obras da carne (imoralidade, idolatria, inimizades), Paulo agora contrasta com o fruto do Espírito. Falsos mestres haviam chegado na Galácia depois que Paulo saiu.",
  versiculo: "✅ Mas o fruto do Espírito é: amor, alegria, paz, longanimidade, benignidade, bondade, fidelidade, mansidão, domínio próprio; contra estas coisas não há lei.",
  depois: "Ao contrário das 'obras' da carne (plural), o Espírito produz um único 'fruto' (singular) com nove virtudes. A lei não é contra o fruto do Espírito. Este é um dos textos mais conhecidos sobre o caráter cristão.",
  tags: "fruto do Espírito / virtudes / caráter",
  assuntos: ["galacia", "paulo", "fruto-espirito", "virtudes", "carater-cristao"]
},
// 440. Gálatas 5.25
{
  id: "gl5.25",
  referencia: "Gl 5.25",
  local: "Galácia / Ásia Menor (Turquia)",
  paisAtual: "Turquia",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~49-55 d.C.",
  antes: "Paulo acabou de contrastar as obras da carne (versículos 19-21) com o fruto do Espírito (versículos 22-23). Ele conclui a seção com esta exortação prática.",
  versiculo: "✅ Se vivemos pelo Espírito, andemos também pelo Espírito.",
  depois: "A vida espiritual não é apenas uma posição (viver pelo Espírito), mas também uma prática diária (andar pelo Espírito). 'Andar' no grego (stoicheo) implica ordem, disciplina e direção. O crente deve alinhar seus passos com a direção do Espírito.",
  tags: "andar / Espírito / viver / disciplina",
  assuntos: ["galacia", "paulo", "vida-espiritual", "andar-espirito", "disciplina"]
},
// 441. Gálatas 6.1
{
  id: "gl6.1",
  referencia: "Gl 6.1",
  local: "Galácia / Ásia Menor (Turquia)",
  paisAtual: "Turquia",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~49-55 d.C.",
  antes: "Paulo estava concluindo a carta aos Gálatas. Ele havia falado sobre a liberdade cristã e o andar no Espírito. Agora ele dá instruções práticas sobre como restaurar os que caem.",
  versiculo: "✅ Irmãos, se alguém for surpreendido nalguma ofensa, vós, que sois espirituais, encorrigi-o com espírito de mansidão; e guarda-te a ti mesmo, para que também não sejas tentado.",
  depois: "Paulo instrui os gálatas a carregarem as cargas uns dos outros, cumprindo assim a lei de Cristo. Ele alerta que ninguém se engane a si mesmo, pois o que semeia, também colherá.",
  tags: "restaurar / mansidão / tentação / espiritual",
  assuntos: ["galacia", "paulo", "restauracao", "comunidade-crista", "mansidao"]
},
// 442. Gálatas 6.2
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
  antes: "Paulo conclui a carta aos Gálatas com exortações sobre restaurar os caídos e carregar as cargas uns dos outros.",
  versiculo: "✅ Levai as cargas uns dos outros, e assim cumprireis a lei de Cristo.",
  depois: "A 'lei de Cristo' é o mandamento do amor mútuo. Carregar as cargas uns dos outros é uma expressão prática desse amor.",
  tags: "carregar cargas / lei de Cristo / amor",
  assuntos: ["galacia", "paulo", "comunhao", "amor", "compartilhar"]
},
// 443. Gálatas 6.9
{
  id: "gl6.9",
  referencia: "Gl 6.9",
  local: "Galácia / Ásia Menor (Turquia)",
  paisAtual: "Turquia",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~49-55 d.C.",
  antes: "Paulo está concluindo a carta aos Gálatas. Ele acabou de falar sobre semear na carne ou no Espírito. Agora exorta os gálatas a não desanimarem na prática do bem.",
  versiculo: "✅ E não nos cansemos de fazer o bem, porque a seu tempo ceifaremos, se não desanimarmos.",
  depois: "Fazer o bem pode ser desgastante, especialmente quando não vemos resultados imediatos. Paulo promete que haverá uma colheita no tempo certo. A perseverança é a chave para experimentar a recompensa divina.",
  tags: "bem / desanimar / ceifar / perseverança",
  assuntos: ["galacia", "paulo", "perseveranca", "fazer-o-bem", "colheita"]
},
// 444. Gálatas 6.10
{
  id: "gl6.10",
  referencia: "Gl 6.10",
  local: "Galácia / Ásia Menor (Turquia)",
  paisAtual: "Turquia",
  lider: "Nero",
  liderReinado: "54-68 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~49-55 d.C.",
  antes: "Paulo conclui a carta aos Gálatas com exortações práticas. Ele falou sobre semear no Espírito, sobre restaurar os caídos e sobre compartilhar cargas.",
  versiculo: "✅ Então, enquanto temos tempo, façamos bem a todos, mas principalmente aos domésticos da fé.",
  depois: "A prioridade do bem é para todos, mas especialmente para a família da fé - a igreja. Paulo reconhece que o amor cristão começa dentro da comunidade, mas não se limita a ela.",
  tags: "fazer bem / família da fé / prioridade",
  assuntos: ["galacia", "paulo", "amor-cristao", "comunidade", "generosidade"]
},


// 445. Hebreus 5.14
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
  data: "~64-68 d.C.",
  antes: "O autor de Hebreus repreende os destinatários por ainda precisarem de leite espiritual, quando deveriam ser maduros. Ele distingue entre o ensino elementar para iniciantes e o alimento sólido para os que cresceram na fé.",
  versiculo: "✅ Mas o mantimento sólido é para os perfeitos, os quais, em razão do costume, têm os sentidos exercitados para discernir tanto o bem como o mal.",
  depois: "O autor passa a falar da doutrina mais profunda, exortando os crentes a deixarem os princípios elementares e avançarem para a maturidade em Cristo.",
  tags: "discernimento / maturidade / sentidos / bem / mal",
  assuntos: ["hebreus", "maturidade-crista", "discernimento", "vida-espiritual"]
},

// 446. 1 João 4.1
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
  antes: "João acabou de ensinar sobre o amor como evidência de que conhecemos a Deus. Ele agora adverte sobre falsos profetas que circulam entre as igrejas, pedindo cautela espiritual.",
  versiculo: "✅ Amados, não creiais a todo o espírito, mas provai os espíritos se são de Deus; porque muitos falsos profetas têm saído pelo mundo.",
  depois: "João fornece o critério para testar os espíritos: todo espírito que confessa que Jesus Cristo veio em carne é de Deus; o que não confessa não é de Deus.",
  tags: "espíritos / provar / falsos profetas / discernimento",
  assuntos: ["efeso", "joao", "falsos-profetas", "discernimento", "teste-espiritual"]
},

// 447. Mateus 24.24
{
  id: "mt24.24",
  referencia: "Mt 24.24",
  local: "Monte das Oliveiras / Jerusalém (Israel)",
  paisAtual: "Israel",
  lider: "Tibério",
  liderReinado: "14-37 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~30 d.C.",
  antes: "Jesus está no Monte das Oliveiras respondendo aos discípulos sobre os sinais do fim dos tempos e da destruição de Jerusalém. Ele já alertou sobre guerras, perseguições e o abominável desolador.",
  versiculo: "✅ Porque surgirão falsos cristos e falsos profetas, e farão grandes sinais e prodígios, para enganar, se possível, até os eleitos.",
  depois: "Jesus instrui os discípulos a não acreditarem quando lhes disserem que o Cristo está no deserto ou em câmaras secretas, pois a vinda do Filho do Homem será visível como o relâmpago.",
  tags: "falsos cristos / falsos profetas / sinais / engano / eleitos",
  assuntos: ["monte-oliveiras", "jerusalem", "jesus", "escatologia", "falsos-profetas"]
},

// 448. João 7.24
{
  id: "jo7.24",
  referencia: "Jo 7.24",
  local: "Jerusalém / Judeia (Israel)",
  paisAtual: "Israel",
  lider: "Tibério",
  liderReinado: "14-37 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~29-30 d.C.",
  antes: "Jesus ensina no templo durante a Festa dos Tabernáculos. A multidão debate se Ele é o Cristo. Jesus defende sua cura de um paralítico no sábado, argumentando que os judeus circuncidam no sábado sem quebrar a lei.",
  versiculo: "✅ Não julgueis segundo as aparências, mas julgai com juízo justo.",
  depois: "Após esse ensino, alguns queriam prender Jesus, mas ninguém lançou mão dele. O povo se divide: alguns creem nele, outros duvidam.",
  tags: "julgamento / aparências / juízo justo / discernimento",
  assuntos: ["jerusalem", "jesus", "festa-tabernaculos", "julgamento", "discernimento"]
},

// 449. João 16.13
{
  id: "jo16.13",
  referencia: "Jo 16.13",
  local: "Jerusalém / Judeia (Israel)",
  paisAtual: "Israel",
  lider: "Tibério",
  liderReinado: "14-37 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~30 d.C.",
  antes: "Jesus está no aposento alto na última ceia, confortando os discípulos antes de sua prisão. Ele promete enviar o Consolador e explica o papel do Espírito Santo na vida dos crentes.",
  versiculo: "✅ Mas quando vier o Espírito da verdade, ele vos guiará em toda a verdade; porque não falará de si mesmo, mas dirá tudo o que tiver ouvido, e vos anunciará as coisas que hão de vir.",
  depois: "Jesus explica que o Espírito o glorificará, pois receberá do que é de Jesus e o anunciará aos discípulos. Ele anuncia que em breve não o verão mais, mas que sua tristeza se tornará alegria.",
  tags: "Espírito Santo / verdade / guiar / consolador",
  assuntos: ["jerusalem", "jesus", "espirito-santo", "verdade", "consolador"]
},

// 450. Tiago 1.5
{
  id: "tg1.5",
  referencia: "Tg 1.5",
  local: "Jerusalém / Judeia (Israel)",
  paisAtual: "Israel",
  lider: "Cláudio",
  liderReinado: "41-54 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~45-50 d.C.",
  antes: "Tiago acabou de falar sobre as provações como meio de desenvolver a perseverança e a fé. Ele reconhece que nas tribulações o crente pode não saber como proceder, por isso oferece esta promessa.",
  versiculo: "✅ E, se algum de vós tem falta de sabedoria, peça-a a Deus, que a todos dá liberalmente e não censura, e ser-lhe-á dada.",
  depois: "Tiago acrescenta que o pedido deve ser feito com fé, sem duvidar — pois quem duvida é como uma onda do mar impelida pelo vento.",
  tags: "sabedoria / pedir / Deus / fé / generosidade",
  assuntos: ["jerusalem", "tiago", "sabedoria", "oracao", "fe"]
},

// 451. 1 Tessalonicenses 5.21
{
  id: "1ts5.21",
  referencia: "1 Ts 5.21",
  local: "Corinto / Acaia (Grécia)",
  paisAtual: "Grécia",
  lider: "Cláudio",
  liderReinado: "41-54 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~50-51 d.C.",
  antes: "Paulo encerra a carta com exortações práticas à igreja: não apagar o Espírito, não desprezar profecias, e agora essa instrução fundamental sobre discernimento espiritual.",
  versiculo: "✅ Examinai tudo. Retende o bem.",
  depois: "Paulo completa a exortação pedindo que se abstenham de toda aparência do mal, e que o próprio Deus da paz os santifique completamente.",
  tags: "examinar / reter / bem / discernimento / profecias",
  assuntos: ["corinto", "paulo", "tessalonica", "discernimento", "santificacao"]
},

// 452. 1 Coríntios 12.4-11
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
  data: "~54-55 d.C.",
  antes: "Paulo aborda o problema dos dons espirituais na igreja de Corinto, onde havia divisões por causa deles. Ele ensina que ninguém pode dizer 'Jesus é Senhor' senão pelo Espírito Santo.",
  versiculo: "⚠️ Há diversidade de dons, mas o mesmo Espírito; diversidade de ministérios, mas o mesmo Senhor; diversidade de operações, mas o mesmo Deus que opera tudo em todos. A manifestação do Espírito é dada a cada um para o bem comum. (vv. 4-7)",
  depois: "Paulo usa a metáfora do corpo para ensinar que cada membro tem sua função. Assim como o corpo tem muitas partes, a igreja tem muitos membros com dons diferentes, mas todos formam um só corpo em Cristo.",
  tags: "dons / Espírito Santo / diversidade / ministérios / corpo",
  assuntos: ["efeso", "paulo", "corinto", "dons-espirituais", "espirito-santo", "corpo-cristo"]
},

// 453. Mateus 7.15
{
  id: "mt7.15",
  referencia: "Mt 7.15",
  local: "Monte das Bem-aventuranças / Galileia (Israel)",
  paisAtual: "Israel",
  lider: "Tibério",
  liderReinado: "14-37 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~28-30 d.C.",
  antes: "No Sermão do Monte, Jesus falou sobre o caminho largo e o caminho estreito. Agora adverte sobre aqueles que se apresentam como guias, mas são perigosos.",
  versiculo: "✅ Acautelai-vos dos falsos profetas, que se vos aproximam disfarçados em vestes de ovelhas, mas por dentro são lobos roubadores.",
  depois: "Jesus diz que pelos frutos os conhecereis. Uma árvore boa produz bons frutos; uma árvore má, maus frutos. Assim se reconhece o verdadeiro do falso.",
  tags: "falsos profetas / lobos / ovelhas / discernimento / frutos",
  assuntos: ["galilaia", "jesus", "sermao-monte", "falsos-profetas", "discernimento"]
},

// 454. Marcos 4.24
{
  id: "mc4.24",
  referencia: "Mc 4.24",
  local: "Galileia (Israel)",
  paisAtual: "Israel",
  lider: "Tibério",
  liderReinado: "14-37 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~28-30 d.C.",
  antes: "Jesus acabou de contar as parábolas da semente e da candeeira. Ele explica que tudo o que está oculto será manifestado. Agora exorta os discípulos sobre como ouvir.",
  versiculo: "✅ Também lhes dizia: Atendei ao que ouvis. Com a medida com que medirdes vos será medido, e ser-vos-á dado de mais.",
  depois: "Jesus continua ensinando que quem tem, mais lhe será dado; e quem não tem, até o que tem lhe será tirado. Ele conta a parábola do crescimento da semente.",
  tags: "ouvir / cuidado / medida / atenção",
  assuntos: ["galilaia", "jesus", "parabolas", "ouvir", "discernimento"]
},

// 455. Marcos 8.15
{
  id: "mc8.15",
  referencia: "Mc 8.15",
  local: "Mar da Galileia / Galileia (Israel)",
  paisAtual: "Israel",
  lider: "Tibério",
  liderReinado: "14-37 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~28-30 d.C.",
  antes: "Os fariseus pedem um sinal do céu para testar Jesus. Ele recusa e parte de barco com os discípulos. Os discípulos se preocupam por não terem pão — e Jesus aproveita para dar este aviso.",
  versiculo: "✅ E advertia-os: Vede, acautelai-vos do levedo dos fariseus e do levedo de Herodes.",
  depois: "Os discípulos entendem erroneamente que Jesus fala de pão literal. Jesus os corrige, lembrando os milagres dos pães e peixes, e pergunta por que ainda não entendem.",
  tags: "levedo / fariseus / Herodes / cautela / hipocrisia",
  assuntos: ["galilaia", "jesus", "fariseus", "herodes", "discernimento"]
},

// 456. Mateus 24.4
{
  id: "mt24.4",
  referencia: "Mt 24.4",
  local: "Monte das Oliveiras / Jerusalém (Israel)",
  paisAtual: "Israel",
  lider: "Tibério",
  liderReinado: "14-37 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~30 d.C.",
  antes: "Os discípulos perguntam a Jesus sobre os sinais de sua vinda e do fim dos tempos, após ele anunciar a destruição do templo. Esta é a abertura do discurso escatológico de Jesus.",
  versiculo: "✅ Jesus respondeu: Vede que ninguém vos engane.",
  depois: "Jesus lista os primeiros sinais: falsos cristos, guerras, rumores de guerras, nações levantando-se umas contra as outras, fomes e terremotos — mas diz que ainda não é o fim.",
  tags: "engano / alertas / fim dos tempos / cuidado",
  assuntos: ["monte-oliveiras", "jerusalem", "jesus", "escatologia", "falsos-cristos"]
},

// 457. Lucas 6.11
{
  id: "lc6.11",
  referencia: "Lc 6.11",
  local: "Galileia (Israel)",
  paisAtual: "Israel",
  lider: "Tibério",
  liderReinado: "14-37 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~28-30 d.C.",
  antes: "Jesus cura a mão seca de um homem na sinagoga no sábado, respondendo à pergunta provocativa dos escribas e fariseus sobre ser lícito curar no sábado.",
  versiculo: "✅ Eles, porém, encheram-se de furor e discutiam entre si o que fariam a Jesus.",
  depois: "Jesus sai para o monte a orar e passa a noite em oração a Deus. Na manhã seguinte, chama seus discípulos e escolhe doze deles, a quem também chama apóstolos.",
  tags: "fariseus / furor / rejeição / discernimento / oposição",
  assuntos: ["galilaia", "jesus", "fariseus", "sabado", "oposicao"]
},

// 458. Lucas 8.18
{
  id: "lc8.18",
  referencia: "Lc 8.18",
  local: "Galileia (Israel)",
  paisAtual: "Israel",
  lider: "Tibério",
  liderReinado: "14-37 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~28-30 d.C.",
  antes: "Jesus acabou de explicar o propósito das parábolas — revelar aos que têm ouvidos para ouvir e ocultar dos que não prestam atenção. Ele fala da parábola da candeeira.",
  versiculo: "✅ Cuidai, pois, do modo como ouvis; porque a qualquer que tiver, dar-se-lhe-á; e a qualquer que não tiver, até o que pensa ter lhe será tirado.",
  depois: "A mãe e os irmãos de Jesus chegam querendo falar com ele. Jesus aproveita para ensinar que sua verdadeira família são os que ouvem e praticam a palavra de Deus.",
  tags: "ouvir / cuidado / atenção / receber / perder",
  assuntos: ["galilaia", "jesus", "parabolas", "ouvir", "palavra"]
},

// 459. Marcos 13.5
{
  id: "mc13.5",
  referencia: "Mc 13.5",
  local: "Monte das Oliveiras / Jerusalém (Israel)",
  paisAtual: "Israel",
  lider: "Tibério",
  liderReinado: "14-37 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~30 d.C.",
  antes: "Os discípulos admiram a beleza do templo, e Jesus anuncia sua destruição. Pedro, Tiago, João e André perguntam em particular quando isso acontecerá e quais serão os sinais.",
  versiculo: "✅ Jesus, respondendo, começou a dizer-lhes: Vede que ninguém vos engane.",
  depois: "Jesus lista os sinais: falsos cristos, guerras, terremotos, fomes, perseguições — e exorta os discípulos a permanecerem firmes até o fim.",
  tags: "engano / alertas / fim dos tempos / falsos cristos",
  assuntos: ["monte-oliveiras", "jerusalem", "jesus", "escatologia", "discernimento"]
},

// 460. Marcos 13.23
{
  id: "mc13.23",
  referencia: "Mc 13.23",
  local: "Monte das Oliveiras / Jerusalém (Israel)",
  paisAtual: "Israel",
  lider: "Tibério",
  liderReinado: "14-37 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~30 d.C.",
  antes: "Jesus descreveu a grande tribulação e o surgimento de falsos cristos e falsos profetas que farão sinais para enganar até os eleitos, se possível.",
  versiculo: "✅ Mas vós, vede; eu vos tenho predito tudo.",
  depois: "Jesus passa a descrever sua própria vinda gloriosa: o sol escurecerá, a lua não dará sua luz, e o Filho do Homem virá nas nuvens com grande poder e glória.",
  tags: "profecia / alerta / falsos / predito / discernimento",
  assuntos: ["monte-oliveiras", "jerusalem", "jesus", "escatologia", "profecias"]
},

// 461. João 10.1-5
{
  id: "jo10.1-5",
  referencia: "Jo 10.1-5",
  local: "Jerusalém / Judeia (Israel)",
  paisAtual: "Israel",
  lider: "Tibério",
  liderReinado: "14-37 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~29-30 d.C.",
  antes: "Jesus acabou de curar o cego de nascença e debater com os fariseus sobre quem realmente enxerga espiritualmente. Ele agora usa a metáfora do redil para descrever sua relação com os seus.",
  versiculo: "⚠️ Em verdade, em verdade vos digo: quem não entra pela porta no redil das ovelhas, mas sobe por outro lugar, esse é ladrão e salteador. Mas o que entra pela porta é o pastor das ovelhas. A este o porteiro abre, e as ovelhas ouvem a sua voz; e ele chama as suas ovelhas pelo nome e as conduz para fora. Quando tira para fora todas as suas ovelhas, vai adiante delas, e as ovelhas o seguem, porque conhecem a sua voz. Mas não seguirão um estranho; pelo contrário, fugirão dele, porque não conhecem a voz dos estranhos. (vv. 1-5)",
  depois: "Os fariseus não entendem a parábola. Jesus então explica claramente que ele é a porta das ovelhas e que os que vieram antes dele eram ladrões — alusão aos falsos líderes religiosos.",
  tags: "ovelhas / voz / pastor / ladrão / discernimento",
  assuntos: ["jerusalem", "jesus", "bom-pastor", "discernimento", "falsos-lideres"]
},

// 462. 1 Coríntios 9.19-22
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
  data: "~54-55 d.C.",
  antes: "Paulo defende seu apostolado e explica que abriu mão de seus direitos para não ser obstáculo ao evangelho. Ele não recebe salário para manter a liberdade de servir a todos.",
  versiculo: "⚠️ Porque, sendo livre de todos, fiz-me servo de todos, para ganhar o maior número. Para os judeus fiz-me como judeu, a fim de ganhar os judeus... Para os fracos, fiz-me fraco, a fim de ganhar os fracos. Fiz-me tudo para todos, para por todos os meios chegar a salvar alguns. (vv. 19-22)",
  depois: "Paulo conclui dizendo que faz tudo pelo evangelho, para ser participante das suas bênçãos. Ele usa a metáfora do atleta para falar de autodisciplina espiritual.",
  tags: "motivação / servir / ganhar / todos / evangelho",
  assuntos: ["efeso", "paulo", "corinto", "apostolado", "evangelismo", "motivacao"]
},

// 463. 2 João 9-11
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
  antes: "João escreve à senhora eleita e seus filhos, alertando sobre enganadores que não confessam que Jesus Cristo veio em carne. Ele exorta a guardar o que foi ensinado desde o princípio.",
  versiculo: "⚠️ Qualquer que se adianta e não permanece na doutrina de Cristo não tem a Deus; quem permanece na doutrina de Cristo tem tanto o Pai como o Filho. Se alguém vier ter convosco e não trouxer esta doutrina, não o recebais em casa, nem lhe deis as boas-vindas; porque aquele que lhe dá as boas-vindas comunga nas suas obras más. (vv. 9-11)",
  depois: "João encerra a carta dizendo que tem muitas coisas a escrever, mas prefere falar pessoalmente para que o gozo seja completo.",
  tags: "doutrina / Cristo / permanecer / falsos / receber",
  assuntos: ["efeso", "joao", "doutrina-crista", "falsos-mestres", "discernimento"]
},

// 464. Salmos 119.18
{
  id: "sl119.18",
  referencia: "Sl 119.18",
  local: "Jerusalém / Judeia (Israel)",
  paisAtual: "Israel",
  lider: "Desconhecido",
  liderReinado: "",
  periodo: "Período do Segundo Templo",
  periodoDatas: "516 a.C. - 70 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~450-400 a.C.",
  antes: "O Salmo 119 é o maior salmo da Bíblia, todo dedicado à meditação na lei de Deus. Esta estrofe (Ayin) é uma oração pessoal pedindo iluminação divina para compreender as maravilhas da lei.",
  versiculo: "✅ Descobre os meus olhos, para que eu veja as maravilhas da tua lei.",
  depois: "O salmista continua pedindo que Deus lhe mostre os seus caminhos, confessando que sua alma está apegada ao pó e pedindo que Deus o vivifique.",
  tags: "olhos / maravilhas / lei / iluminação / palavra",
  assuntos: ["jerusalem", "salmos", "palavra-deus", "oracao", "iluminacao"]
},

// 465. 1 Coríntios 12.10
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
  data: "~54-55 d.C.",
  antes: "Paulo lista os dons do Espírito Santo distribuídos a cada crente conforme a vontade do Espírito. Ele enumera palavra de sabedoria, ciência, fé, cura, operação de milagres, e então este dom.",
  versiculo: "✅ A outro, a operação de milagres; a outro, profecia; a outro, o dom de discernir os espíritos; a outro, variedade de línguas; e a outro, a interpretação das línguas.",
  depois: "Paulo conclui que todos esses dons são operados pelo único e mesmo Espírito, que os distribui a cada um como quer. Ele então introduz a metáfora do corpo.",
  tags: "discernimento / espíritos / dons / línguas / profecia",
  assuntos: ["efeso", "paulo", "corinto", "dons-espirituais", "discernimento", "espirito-santo"]
},

// 466. Jeremias 17.9
{
  id: "jr17.9",
  referencia: "Jr 17.9",
  local: "Jerusalém / Judeia (Israel)",
  paisAtual: "Israel",
  lider: "Jeoaquim",
  liderReinado: "609-598 a.C.",
  periodo: "Reino de Judá",
  periodoDatas: "930-586 a.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~627-586 a.C.",
  antes: "Jeremias fala sobre a maldição de quem confia no homem e a bênção de quem confia em Deus. Ele usa a imagem da árvore plantada junto à água para descrever o homem que confia no Senhor.",
  versiculo: "✅ O coração é enganoso mais do que todas as coisas, e desesperadamente corrupto; quem o conhecerá?",
  depois: "Deus responde: 'Eu, o Senhor, esquadrinho o coração e provo os rins, para dar a cada um segundo os seus caminhos e segundo o fruto das suas obras.'",
  tags: "coração / enganoso / corrupto / conhecer / Deus",
  assuntos: ["jerusalem", "jeremias", "coracao-humano", "pecado", "soberania-deus"]
},

// 467. Tiago 1.22
{
  id: "tg1.22",
  referencia: "Tg 1.22",
  local: "Jerusalém / Judeia (Israel)",
  paisAtual: "Israel",
  lider: "Cláudio",
  liderReinado: "41-54 d.C.",
  periodo: "Império Romano",
  periodoDatas: "27 a.C. - 476 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~45-50 d.C.",
  antes: "Tiago acabou de exortar a receber com mansidão a palavra implantada, capaz de salvar as almas. Agora tira a consequência prática: não basta ouvir — é preciso fazer.",
  versiculo: "✅ Sede, porém, praticantes da palavra e não somente ouvintes, enganando-vos a vós mesmos.",
  depois: "Tiago usa a ilustração do espelho: quem ouve a palavra mas não a pratica é como alguém que olha seu rosto no espelho e logo se esquece de como é. Mas o que pratica a lei perfeita da liberdade será bem-aventurado.",
  tags: "palavra / fazedores / ouvintes / enganados / prática",
  assuntos: ["jerusalem", "tiago", "palavra-deus", "obediencia", "pratica"]
},

// 468. 1 João 1.7
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
  antes: "João introduz a carta afirmando que o que foi desde o princípio — a vida eterna manifestada em Jesus — ele viu e testifica. Ele distingue quem anda na luz de quem anda nas trevas.",
  versiculo: "✅ Mas, se andarmos na luz, como ele está na luz, temos comunhão uns com os outros, e o sangue de Jesus Cristo, seu Filho, nos purifica de todo pecado.",
  depois: "João continua: se dissermos que não temos pecado, enganamos a nós mesmos. Mas se confessarmos nossos pecados, ele é fiel e justo para perdoar e purificar de toda injustiça.",
  tags: "luz / andar / comunhão / sangue / purificação",
  assuntos: ["efeso", "joao", "luz", "comunhao", "purificacao", "perdao"]
},

// ==================== NOVOS CONTEXTOS — LIÇÃO 1, 3T2026 (LIVRO DE JUÍZES) ====================
// A partir daqui, o campo "versiculo" NÃO é mais preenchido:
// a passagem bíblica passa a ser buscada em tempo real via API na página.

// 338. Josué 24.26-30
{
  id: "js24.26-30",
  referencia: "Js 24.26-30",
  local: "Siquém / Efraim (Cisjordânia)",
  paisAtual: "Cisjordânia",
  lider: "Josué",
  liderReinado: "",
  periodo: "Conquista de Canaã",
  periodoDatas: "~1406-1380 a.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~1380 a.C.",
  antes: "Josué, já idoso, reuniu todas as tribos de Israel em Siquém para renovar a aliança com o Senhor, relembrando toda a história da libertação e conquista, e desafiando o povo a escolher a quem serviriam.",
  versiculo: "",
  depois: "Josué escreveu as palavras da aliança no livro da Lei de Deus, ergueu uma pedra como testemunho, despediu o povo e morreu pouco depois, sendo sepultado em Timnate-Sera, no monte Efraim.",
  tags: "aliança / pedra testemunho / morte de Josué / Timnate-Sera",
  assuntos: ["siquem", "josue", "conquista-canaa", "alianca"]
},

// 339. Juízes 1.1
{
  id: "jz1.1",
  referencia: "Jz 1.1",
  local: "Canaã (Terra Prometida)",
  paisAtual: "Israel / Cisjordânia",
  lider: "(sem líder central)",
  liderReinado: "",
  periodo: "Período dos Juízes",
  periodoDatas: "~1380-1050 a.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~1380 a.C.",
  antes: "Josué havia morrido sem deixar um sucessor. As doze tribos ainda precisavam completar a conquista de suas respectivas porções de terra, e não havia liderança central sobre a nação.",
  versiculo: "",
  depois: "Os filhos de Israel perguntam ao Senhor quem deverá subir primeiro para lutar contra os cananeus. O Senhor responde que Judá subirá primeiro, dando início ao período marcado por ciclos de infidelidade e libertação que caracterizam o livro de Juízes.",
  tags: "morte de Josué / vazio de liderança / consulta ao Senhor",
  assuntos: ["canaa", "juizes", "conquista-canaa", "tribos-de-israel"]
},

// 340. Juízes 17.6 (= 21.25)
{
  id: "jz17.6",
  referencia: "Jz 17.6",
  local: "Monte Efraim (Canaã)",
  paisAtual: "Cisjordânia",
  lider: "(sem líder central)",
  liderReinado: "",
  periodo: "Período dos Juízes",
  periodoDatas: "~1380-1050 a.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~1200-1100 a.C.",
  antes: "O livro de Juízes narra o episódio de Mica, do monte Efraim, que fabricou ídolos e contratou um levita para ser seu próprio sacerdote particular — um sintoma da desordem religiosa da época.",
  versiculo: "",
  depois: "Esta frase, repetida em Jz 21.25, resume o tema central do livro: a ausência de uma liderança centralizada e fiel a Deus levou o povo a uma relatividade moral generalizada, cada um seguindo seus próprios critérios.",
  tags: "não havia rei / cada qual fazia o que parecia direito / relativismo moral",
  assuntos: ["monte-efraim", "juizes", "idolatria", "mica"]
},

// 341. Josué 23 (capítulo)
{
  id: "js23",
  referencia: "Js 23",
  local: "Siquém / Efraim (Cisjordânia)",
  paisAtual: "Cisjordânia",
  lider: "Josué",
  liderReinado: "",
  periodo: "Conquista de Canaã",
  periodoDatas: "~1406-1380 a.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~1380 a.C.",
  antes: "Já idoso e próximo da morte, Josué convocou os líderes de Israel — anciãos, cabeças, juízes e oficiais — para um último discurso, relembrando as vitórias que o Senhor concedera à nação.",
  versiculo: "",
  depois: "Josué exorta o povo a se apegar ao Senhor, a não se misturar com as nações remanescentes nem servir a seus deuses, alertando que a desobediência traria a ira de Deus e a perda da terra.",
  tags: "discurso de despedida / fidelidade exclusiva / advertência final",
  assuntos: ["siquem", "josue", "conquista-canaa", "fidelidade"]
},

// 342. Juízes 2.16-18
{
  id: "jz2.16",
  referencia: "Jz 2.16-18",
  local: "Canaã (Terra Prometida)",
  paisAtual: "Israel / Cisjordânia",
  lider: "(diversos juízes)",
  liderReinado: "",
  periodo: "Período dos Juízes",
  periodoDatas: "~1380-1050 a.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~1380-1050 a.C.",
  antes: "O narrador de Juízes introduz, em termos gerais, o padrão que se repetirá ao longo de todo o livro: o povo abandona o Senhor, é entregue a opressores e sofre muito por sua desobediência.",
  versiculo: "",
  depois: "Movido de compaixão pelos gemidos do povo oprimido, o Senhor levanta juízes que os livram da mão dos que os saqueavam. Contudo, o texto observa que essa libertação durava apenas enquanto o juiz vivia.",
  tags: "juízes / libertação / compaixão / instrumentos de Deus",
  assuntos: ["juizes", "libertacao", "compaixao-divina"]
},

// 343. Juízes 2.11-15 (ciclo da apostasia)
{
  id: "jz2.11-13",
  referencia: "Jz 2.11-15",
  local: "Canaã (Terra Prometida)",
  paisAtual: "Israel / Cisjordânia",
  lider: "(sem líder central)",
  liderReinado: "",
  periodo: "Período dos Juízes",
  periodoDatas: "~1380-1050 a.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~1380-1050 a.C.",
  antes: "Após a morte de Josué e da geração que testemunhou as obras do Senhor, uma nova geração se levantou que não conhecia o Senhor nem as maravilhas que ele fizera por Israel.",
  versiculo: "",
  depois: "Os filhos de Israel fizeram o que era mau aos olhos do Senhor e serviram a Baal, abandonando o Deus de seus pais. Em sua ira, o Senhor os entregou nas mãos de saqueadores e inimigos ao redor, e eles não puderam mais resistir.",
  tags: "infidelidade / idolatria / Baal / opressão / ciclo de Juízes",
  assuntos: ["juizes", "idolatria", "baal", "ciclo-apostasia"]
},

// 344. Juízes 21.25
{
  id: "jz21.25",
  referencia: "Jz 21.25",
  local: "Canaã (Terra Prometida)",
  paisAtual: "Israel / Cisjordânia",
  lider: "(sem líder central)",
  liderReinado: "",
  periodo: "Período dos Juízes",
  periodoDatas: "~1380-1050 a.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~1100-1050 a.C.",
  antes: "O livro de Juízes termina narrando o episódio sombrio da guerra civil contra a tribo de Benjamim e a crise pela falta de esposas para os benjamitas sobreviventes, um dos relatos mais violentos do Antigo Testamento.",
  versiculo: "",
  depois: "Este versículo final resume todo o livro: sem um rei ou liderança centralizada e fiel a Deus, cada pessoa vivia segundo seus próprios critérios morais — preparando o cenário para a futura monarquia de Israel.",
  tags: "não havia rei / cada um fazia o que era reto / fechamento do livro",
  assuntos: ["juizes", "monarquia", "relativismo-moral"]
},

// 345. Hebreus 11.32
{
  id: "hb11.32",
  referencia: "Hb 11.32",
  local: "Roma / Itália ou Jerusalém (destinatários judeus)",
  paisAtual: "Itália",
  lider: "",
  liderReinado: "",
  periodo: "Igreja Primitiva",
  periodoDatas: "30-100 d.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~60-70 d.C.",
  antes: "O autor de Hebreus percorre a chamada 'galeria da fé', citando patriarcas e profetas que, pela fé, agradaram a Deus, incluindo referências à travessia do Mar Vermelho e à queda dos muros de Jericó.",
  versiculo: "",
  depois: "O autor declara que o tempo lhe faltaria para contar sobre Gideão, Baraque, Sansão, Jefté, Davi, Samuel e os profetas — todos exemplos de homens usados por Deus apesar de suas limitações humanas.",
  tags: "galeria da fé / juízes / heróis da fé",
  assuntos: ["hebreus", "fe", "juizes", "galeria-da-fe"]
},

// 346. Juízes 6.34 (Gideão)
{
  id: "jz6.34",
  referencia: "Jz 6.34",
  local: "Ofra / Manassés (Canaã)",
  paisAtual: "Cisjordânia",
  lider: "Gideão",
  liderReinado: "",
  periodo: "Período dos Juízes",
  periodoDatas: "~1380-1050 a.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~1200 a.C.",
  antes: "Israel estava sendo oprimido pelos midianitas havia sete anos. Gideão, um homem inseguro da tribo de Manassés, foi chamado pelo anjo do Senhor para libertar o povo, exigindo sinais antes de confiar no chamado.",
  versiculo: "",
  depois: "Revestido pelo Espírito do Senhor, Gideão convoca seu clã e as tribos vizinhas para a guerra contra os midianitas, culminando na vitória com apenas 300 homens em Jz 7.",
  tags: "Espírito do Senhor se apoderou de / Gideão / midianitas",
  assuntos: ["ofra", "gideao", "midianitas", "juizes"]
},

// 347. Juízes 14.6 (Sansão)
{
  id: "jz14.6",
  referencia: "Jz 14.6",
  local: "Timna / Filístia (Canaã)",
  paisAtual: "Israel",
  lider: "Sansão",
  liderReinado: "",
  periodo: "Período dos Juízes",
  periodoDatas: "~1380-1050 a.C.",
  periodoHumanidade: "Idade Antiga",
  periodoHumanidadeDatas: "4000 a.C. - 476 d.C.",
  data: "~1100 a.C.",
  antes: "Sansão, nazireu desde o nascimento, caminhava para Timna a fim de se casar com uma mulher filisteia, contra a vontade de seus pais, quando um leão novo rugiu contra ele.",
  versiculo: "",
  depois: "O Espírito do Senhor se apoderou dele e ele despedaçou o leão com as mãos como quem despedaça um cabrito, sem contar nada a seus pais — um prenúncio de sua força sobrenatural e de seu caráter impulsivo.",
  tags: "Espírito do Senhor se apoderou de / Sansão / força sobrenatural",
  assuntos: ["timna", "sansao", "filisteus", "juizes"]
},
];

// ============================================
// ÍNDICE DE CONTEXTOS BÍBLICOS
// SEPARADO POR TESTAMENTO E LIVRO (ORDEM ALFABÉTICA)
// ============================================

// ============================================
// 📜 ANTIGO TESTAMENTO
// ============================================

const indiceAntigoTestamento = {
  // ========== DEUTERONÔMIO ==========
  "dt13.3": { numero: 106, referencia: "Dt 13.3" },
  "dt3.10": { numero: 469, referencia: "Dt 3.10" },
  "dt19.12": { numero: 470, referencia: "Dt 19.12" },
  "dt21.2": { numero: 471, referencia: "Dt 21.2,18-20" },
  "dt22.15": { numero: 472, referencia: "Dt 22.15" },
  "dt25.7": { numero: 473, referencia: "Dt 25.7" },
  "dt31.9": { numero: 474, referencia: "Dt 31.9" },

  // ========== ÊXODO ==========
  "ex2.24-25": { numero: 199, referencia: "Êx 2.24-25" },
  "ex19.7": { numero: 475, referencia: "Êx 19.7" },

  // ========== JOSUÉ ==========
  "js1.1-9": { numero: 476, referencia: "Js 1.1-9" },
  "js3.1-17": { numero: 477, referencia: "Js 3.1-17" },
  "js3.14-17": { numero: 478, referencia: "Js 3.14-17" },
  "js13.1": { numero: 479, referencia: "Js 13.1" },
  "js21.1-41": { numero: 480, referencia: "Js 21.1-41" },
  "js23": { numero: 481, referencia: "Js 23" },
  "js23.3": { numero: 482, referencia: "Js 23.3" },
  "js23.11": { numero: 483, referencia: "Js 23.11" },
  "js24.15": { numero: 484, referencia: "Js 24.15" },
  "js24.26-30": { numero: 485, referencia: "Js 24.26-30" },
  "js24.29": { numero: 486, referencia: "Js 24.29" },

  // ========== JUÍZES ==========
  "jz1.1": { numero: 487, referencia: "Jz 1.1" },
  "jz2.11-13": { numero: 488, referencia: "Jz 2.11-15" },
  "jz2.16": { numero: 489, referencia: "Jz 2.16-18" },
  "jz2.18": { numero: 490, referencia: "Jz 2.18" },
  "jz2.20-23": { numero: 491, referencia: "Jz 2.20-23" },
  "jz3.9": { numero: 492, referencia: "Jz 3.9" },
  "jz3.10": { numero: 493, referencia: "Jz 3.10" },
  "jz3.15": { numero: 494, referencia: "Jz 3.15" },
  "jz6.34": { numero: 495, referencia: "Jz 6.34" },
  "jz10.10": { numero: 496, referencia: "Jz 10.10" },
  "jz11.29": { numero: 497, referencia: "Jz 11.29" },
  "jz13.25": { numero: 498, referencia: "Jz 13.25" },
  "jz14.6": { numero: 499, referencia: "Jz 14.6" },
  "jz17.6": { numero: 500, referencia: "Jz 17.6" },
  "jz21.25": { numero: 501, referencia: "Jz 21.25" },

  // ========== LEVÍTICO (adicional) ==========
  "lv10.11": { numero: 502, referencia: "Lv 10.11" },

  // ========== NÚMEROS ==========
  "nm35.1-8": { numero: 503, referencia: "Nm 35.1-8" },

  // ========== EZEQUIEL ==========
  "ez33.7": { numero: 314, referencia: "Ez 33.7" },
  "ez33.7-9": { numero: 313, referencia: "Ez 33.7-9" },

  // ========== GÊNESIS ==========
  "gn1.1": { numero: 10, referencia: "Gn 1.1" },

  // ========== ISAÍAS ==========
  "is41.10": { numero: 193, referencia: "Is 41.10" },
  "is45.5": { numero: 211, referencia: "Is 45.5" },
  "is5.20": { numero: 302, referencia: "Is 5.20" },
  "is55.11": { numero: 107, referencia: "Is 55.11" },

  // ========== JEREMIAS ==========
  "jr14.14": { numero: 109, referencia: "Jr 14.14" },
  "jr17": { numero: 231, referencia: "Jr 17" },
  "jr17.9-11": { numero: 229, referencia: "Jr 17.9-11" },
  "jr23.23": { numero: 213, referencia: "Jr 23.23" },
  "jr33.3": { numero: 198, referencia: "Jr 33.3" },
  "jr6.14": { numero: 317, referencia: "Jr 6.14" },
  "jr6.16": { numero: 108, referencia: "Jr 6.16" },
  "jr17.9": { numero: 466, referencia: "Jr 17.9" },

  // ========== JOEL ==========
  "jl2.28": { numero: 138, referencia: "Jl 2.28" },

  // ========== LEVÍTICO ==========
  "lv23.15": { numero: 139, referencia: "Lv 23.15-16" },

  // ========== MALAQUIAS ==========
  "ml3.10": { numero: 233, referencia: "Ml 3.10" },

  // ========== NEEMIAS ==========
  "ne6.12": { numero: 110, referencia: "Ne 6.12" },
  "ne8.10": { numero: 111, referencia: "Ne 8.10" },

  // ========== OSÉIAS ==========
  "os2.19": { numero: 149, referencia: "Os 2.19-20" },
  "os4.1": { numero: 112, referencia: "Os 4.1" },

  // ========== PROVÉRBIOS ==========
  "pv11.14": { numero: 329, referencia: "Pv 11.14" },
  "pv18.21": { numero: 232, referencia: "Pv 18.21" },
  "pv23.4-5": { numero: 218, referencia: "Pv 23.4,5" },
  "pv3.5": { numero: 197, referencia: "Pv 3.5" },
  "pv30.7-9": { numero: 230, referencia: "Pv 30.7-9" },

  // ========== 1 REIS ==========
  "1rs18.40": { numero: 113, referencia: "1 Rs 18.40" },

  // ========== SALMOS ==========
  "sl1.2": { numero: 114, referencia: "Sl 1.2-3" },
  "sl10.4": { numero: 115, referencia: "Sl 10.4" },
  "sl103.13-14": { numero: 202, referencia: "Sl 103.13-14" },
  "sl121.4": { numero: 191, referencia: "Sl 121.4" },
  "sl139.7-10": { numero: 195, referencia: "Sl 139.7-10" },
  "sl14": { numero: 118, referencia: "Sl 14" },
  "sl14.1": { numero: 116, referencia: "Sl 14.1" },
  "sl14.1-3": { numero: 117, referencia: "Sl 14.1-3" },
  "sl150.1-6": { numero: 294, referencia: "Sl 150.1-6" },
  "sl16.11": { numero: 120, referencia: "Sl 16.11" },
  "sl19.1": { numero: 119, referencia: "Sl 19.1" },
  "sl23": { numero: 250, referencia: "Sl 23" },
  "sl34.18": { numero: 235, referencia: "Sl 34.18" },
  "sl42.1": { numero: 121, referencia: "Sl 42.1" },
  "sl119.18": { numero: 464, referencia: "Sl 119.18" },

  // ========== SOFONIAS ==========
  "sf3.17": { numero: 212, referencia: "Sf 3.17" }
};

// ============================================
// ✝️ NOVO TESTAMENTO
// ============================================

const indiceNovoTestamento = {
  // ========== 1 CORÍNTIOS ==========
  "1co1.18": { numero: 7, referencia: "1 Co 1.18" },
  "1co1.2": { numero: 366, referencia: "1 Co 1.2" },
  "1co1.7": { numero: 378, referencia: "1 Co 1.7" },
  "1co12.11": { numero: 392, referencia: "1 Co 12.11" },
  "1co12.12": { numero: 370, referencia: "1 Co 12.12" },
  "1co12.27": { numero: 371, referencia: "1 Co 12.27" },
  "1co12.31": { numero: 374, referencia: "1 Co 12.31" },
  "1co12.4-6": { numero: 367, referencia: "1 Co 12.4-6" },
  "1co12.5": { numero: 368, referencia: "1 Co 12.5" },
  "1co12.7": { numero: 369, referencia: "1 Co 12.7" },
  "1co12.14-18": { numero: 372, referencia: "1 Co 12.14-18" },
  "1co12.21": { numero: 373, referencia: "1 Co 12.21" },
  "1co13.1": { numero: 375, referencia: "1 Co 13.1-3" },
  "1co13.4": { numero: 376, referencia: "1 Co 13.4-7" },
  "1co14.26": { numero: 377, referencia: "1 Co 14.26" },
  "1co2.16": { numero: 381, referencia: "1 Co 2.16" },
  "1co2.4": { numero: 379, referencia: "1 Co 2.4" },
  "1co2.5": { numero: 380, referencia: "1 Co 2.5" },
  "1co3.16": { numero: 383, referencia: "1 Co 3.16" },
  "1co3.3": { numero: 382, referencia: "1 Co 3.3" },
  "1co4.20": { numero: 384, referencia: "1 Co 4.20" },
  "1co5.6": { numero: 385, referencia: "1 Co 5.6" },
  "1co6.9-10": { numero: 386, referencia: "1 Co 6.9-10" },
  "1co9.22": { numero: 387, referencia: "1 Co 9.22" },
  "1co9.25": { numero: 388, referencia: "1 Co 9.25" },
  "1co10.16": { numero: 389, referencia: "1 Co 10.16" },
  "1co10.16-17": { numero: 390, referencia: "1 Co 10.16-17" },
  "1co11.26": { numero: 391, referencia: "1 Co 11.26" },
  "1co13.1-3": { numero: 375, referencia: "1 Co 13.1-3" },
  "1co13.4-7": { numero: 376, referencia: "1 Co 13.4-7" },
  "1co12.4-11": { numero: 452, referencia: "1 Co 12.4-11" },
  "1co9.19-22": { numero: 462, referencia: "1 Co 9.19-22" },
  "1co12.10": { numero: 465, referencia: "1 Co 12.10" },

  // ========== 1 JOÃO ==========
  "1jo1.8": { numero: 328, referencia: "1 Jo 1.8" },
  "1jo4.1": { numero: 446, referencia: "1 Jo 4.1" },
  "1jo1.7": { numero: 468, referencia: "1 Jo 1.7" },

  // ========== 2 JOÃO ==========
  "2jo9-11": { numero: 463, referencia: "2 Jo 9-11" },

  // ========== 1 PEDRO ==========
  "1pe1.15-16": { numero: 298, referencia: "1 Pe 1.15-16" },
  "1pe1.16": { numero: 297, referencia: "1 Pe 1.16" },
  "1pe2.12": { numero: 299, referencia: "1 Pe 2.12" },
  "1pe2.2": { numero: 275, referencia: "1 Pe 2.2" },
  "1pe2.5": { numero: 154, referencia: "1 Pe 2.5" },
  "1pe2.9": { numero: 78, referencia: "1 Pe 2.9" },
  "1pe4.10": { numero: 79, referencia: "1 Pe 4.10" },
  "1pe5.2": { numero: 285, referencia: "1 Pe 5.2" },
  "1pe5.4": { numero: 286, referencia: "1 Pe 5.4" },

  // ========== 1 TIMÓTEO ==========
  "1tm1.15": { numero: 311, referencia: "1 Tm 1.15" },
  "1tm2.1": { numero: 262, referencia: "1 Tm 2.1" },
  "1tm2.4": { numero: 225, referencia: "1 Tm 2.4" },
  "1tm4.12": { numero: 71, referencia: "1 Tm 4.12" },
  "1tm4.7": { numero: 70, referencia: "1 Tm 4.7-8" },
  "1tm6.18": { numero: 226, referencia: "1 Tm 6.18" },
  "1tm6.5": { numero: 72, referencia: "1 Tm 6.5-10" },
  "1tm6.6-8": { numero: 216, referencia: "1 Tm 6.6-8" },
  "1tm6.9": { numero: 217, referencia: "1 Tm 6.9" },

  // ========== 1 TESSALONICENSES ==========
  "1ts5.11": { numero: 155, referencia: "1 Ts 5.11" },
  "1ts5.21": { numero: 451, referencia: "1 Ts 5.21" },

  // ========== 2 CORÍNTIOS ==========
  "2co1.18": { numero: 24, referencia: "2 Co 1.18" },
  "2co11.15": { numero: 239, referencia: "2 Co 11.15" },
  "2co12.12": { numero: 30, referencia: "2 Co 12.12" },
  "2co12.7-10": { numero: 222, referencia: "2 Co 12.7-10" },
  "2co2.14": { numero: 25, referencia: "2 Co 2.14-17" },
  "2co2.14-17": { numero: 281, referencia: "2 Co 2.14-17" },
  "2co2.17": { numero: 283, referencia: "2 Co 2.17" },
  "2co2.6-8": { numero: 310, referencia: "2 Co 2.6-8" },
  "2co3.18": { numero: 26, referencia: "2 Co 3.18" },
  "2co4.18": { numero: 29, referencia: "2 Co 4.18" },
  "2co4.2": { numero: 27, referencia: "2 Co 4.2" },
  "2co4.4": { numero: 28, referencia: "2 Co 4.4" },
  "2co5.18-19": { numero: 264, referencia: "2 Co 5.18-19" },
  "2co8.3-4": { numero: 336, referencia: "2 Co 8.3-4" },
  "2co9.6-7": { numero: 335, referencia: "2 Co 9.6-7" },
  "2co9.7": { numero: 223, referencia: "2 Co 9.7" },

  // ========== 2 TIMÓTEO ==========
  "2tm3.12": { numero: 278, referencia: "2 Tm 3.12" },
  "2tm3.15-16": { numero: 73, referencia: "2 Tm 3.15-16" },
  "2tm3.16": { numero: 74, referencia: "2 Tm 3.16-17" },
  "2tm3.16b": { numero: 269, referencia: "2 Tm 3.16" },
  "2tm4.3": { numero: 75, referencia: "2 Tm 4.3" },

  // ========== 3 JOÃO ==========
  "3jo1.5": { numero: 105, referencia: "3 Jo 1.5" },

  // ========== APOCALIPSE ==========
  "ap12.11": { numero: 326, referencia: "Ap 12.11" },
  "ap19.7": { numero: 144, referencia: "Ap 19.7-8" },
  "ap2.10": { numero: 9, referencia: "Ap 2.10" },
  "ap21.2": { numero: 145, referencia: "Ap 21.2" },
  "ap3.17": { numero: 215, referencia: "Ap 3.17" },
  "ap7.9": { numero: 156, referencia: "Ap 7.9" },

  // ========== ATOS ==========
  "at1.14": { numero: 342, referencia: "At 1.14" },
  "at1.3": { numero: 358, referencia: "At 1.3" },
  "at1.4": { numero: 359, referencia: "At 1.4-5" },
  "at1.8": { numero: 258, referencia: "At 1.8" },
  "at11.22": { numero: 332, referencia: "At 11.22" },
  "at11.29-30": { numero: 337, referencia: "At 11.29-30" },
  "at15": { numero: 331, referencia: "At 15" },
  "at17.24-27": { numero: 4, referencia: "At 17.24-27" },
  "at17.26-27": { numero: 333, referencia: "At 17.26-27" },
  "at17.6-7": { numero: 318, referencia: "At 17.6-7" },
  "at2.1": { numero: 160, referencia: "At 2.1" },
  "at2.1-4": { numero: 346, referencia: "At 2.1-4" },
  "at2.11": { numero: 350, referencia: "At 2.11" },
  "at2.16": { numero: 351, referencia: "At 2.16-17" },
  "at2.22": { numero: 352, referencia: "At 2.22-23" },
  "at2.24": { numero: 353, referencia: "At 2.24" },
  "at2.29": { numero: 354, referencia: "At 2.29-33" },
  "at2.32": { numero: 355, referencia: "At 2.32-36" },
  "at2.36": { numero: 2, referencia: "At 2.36-41" },
  "at2.37": { numero: 356, referencia: "At 2.37" },
  "at2.38": { numero: 357, referencia: "At 2.38" },
  "at2.4": { numero: 134, referencia: "At 2.4" },
  "at2.41": { numero: 341, referencia: "At 2.41" },
  "at2.42": { numero: 339, referencia: "At 2.42" },
  "at2.42-47": { numero: 268, referencia: "At 2.42-47" },
  "at2.46": { numero: 123, referencia: "At 2.46" },
  "at2.47": { numero: 253, referencia: "At 2.47" },
  "at2.5": { numero: 347, referencia: "At 2.5" },
  "at2.6": { numero: 348, referencia: "At 2.6-8" },
  "at2.9": { numero: 349, referencia: "At 2.9-11" },
  "at20.18": { numero: 363, referencia: "At 20.18" },
  "at20.28": { numero: 364, referencia: "At 20.28" },
  "at20.28-29": { numero: 287, referencia: "At 20.28-29" },
  "at20.29": { numero: 288, referencia: "At 20.29" },
  "at3.19": { numero: 319, referencia: "At 3.19" },
  "at4.13": { numero: 360, referencia: "At 4.13" },
  "at4.20": { numero: 276, referencia: "At 4.20" },
  "at4.29": { numero: 361, referencia: "At 4.29-30" },
  "at5.12": { numero: 362, referencia: "At 5.12-14" },
  "at6.1-4": { numero: 289, referencia: "At 6.1-4" },
  "at8.18-20": { numero: 282, referencia: "At 8.18-20" },
  "at9.4": { numero: 365, referencia: "At 9.4" },
  "at2.6-8": { numero: 348, referencia: "At 2.6-8" },
  "at2.9-11": { numero: 349, referencia: "At 2.9-11" },
  "at2.16-17": { numero: 351, referencia: "At 2.16-17" },
  "at2.22-23": { numero: 352, referencia: "At 2.22-23" },
  "at2.29-33": { numero: 354, referencia: "At 2.29-33" },
  "at2.32-36": { numero: 355, referencia: "At 2.32-36" },
  "at1.4-5": { numero: 359, referencia: "At 1.4-5" },
  "at4.29-30": { numero: 361, referencia: "At 4.29-30" },
  "at5.12-14": { numero: 362, referencia: "At 5.12-14" },

  // ========== COLOSSENSES ==========
  "cl1.10": { numero: 426, referencia: "Cl 1.10" },
  "cl1.16-17": { numero: 427, referencia: "Cl 1.16-17" },
  "cl1.18": { numero: 344, referencia: "Cl 1.18" },
  "cl1.23": { numero: 428, referencia: "Cl 1.23" },
  "cl2.12": { numero: 429, referencia: "Cl 2.12" },
  "cl3.12": { numero: 430, referencia: "Cl 3.12-13" },
  "cl3.13": { numero: 431, referencia: "Cl 3.13" },
  "cl4.2": { numero: 432, referencia: "Cl 4.2" },
  "cl4.5-6": { numero: 433, referencia: "Cl 4.5-6" },
  "cl3.12-13": { numero: 430, referencia: "Cl 3.12-13" },

  // ========== EFÉSIOS ==========
  "ef1.22": { numero: 345, referencia: "Ef 1.22-23" },
  "ef1.3": { numero: 414, referencia: "Ef 1.3" },
  "ef2.19": { numero: 126, referencia: "Ef 2.19" },
  "ef2.20": { numero: 127, referencia: "Ef 2.20" },
  "ef2.6": { numero: 413, referencia: "Ef 2.6" },
  "ef2.8-9": { numero: 412, referencia: "Ef 2.8-9" },
  "ef3.10": { numero: 415, referencia: "Ef 3.10" },
  "ef3.16": { numero: 416, referencia: "Ef 3.16" },
  "ef4.11": { numero: 394, referencia: "Ef 4.11" },
  "ef4.11-12": { numero: 395, referencia: "Ef 4.11-12" },
  "ef4.12": { numero: 396, referencia: "Ef 4.12" },
  "ef4.13": { numero: 397, referencia: "Ef 4.13-15" },
  "ef4.13b": { numero: 393, referencia: "Ef 4.13" },
  "ef4.14": { numero: 398, referencia: "Ef 4.14-15" },
  "ef4.2": { numero: 399, referencia: "Ef 4.2-3" },
  "ef4.31-32": { numero: 404, referencia: "Ef 4.31-32" },
  "ef4.32": { numero: 405, referencia: "Ef 4.32" },
  "ef4.4-6": { numero: 401, referencia: "Ef 4.4-6" },
  "ef4.25": { numero: 402, referencia: "Ef 4.25" },
  "ef4.29": { numero: 403, referencia: "Ef 4.29" },
  "ef5.25": { numero: 147, referencia: "Ef 5.25" },
  "ef5.26": { numero: 409, referencia: "Ef 5.26" },
  "ef5.27": { numero: 410, referencia: "Ef 5.27" },
  "ef5.5-6": { numero: 406, referencia: "Ef 5.5-6" },
  "ef5.9": { numero: 407, referencia: "Ef 5.9" },
  "ef5.11": { numero: 408, referencia: "Ef 5.11" },
  "ef6.18": { numero: 411, referencia: "Ef 6.18" },
  "ef4.3": { numero: 400, referencia: "Ef 4.3" },
  "ef1.22-23": { numero: 345, referencia: "Ef 1.22-23" },
  "ef4.13-15": { numero: 397, referencia: "Ef 4.13-15" },
  "ef4.14-15": { numero: 398, referencia: "Ef 4.14-15" },
  "ef4.2-3": { numero: 399, referencia: "Ef 4.2-3" },

  // ========== FILIPENSES ==========
  "fp1.11": { numero: 418, referencia: "Fp 1.11" },
  "fp1.6": { numero: 417, referencia: "Fp 1.6" },
  "fp2.3": { numero: 420, referencia: "Fp 2.3-5" },
  "fp2.3-4": { numero: 419, referencia: "Fp 2.3-4" },
  "fp2.15": { numero: 421, referencia: "Fp 2.15" },
  "fp3.10": { numero: 284, referencia: "Fp 3.10" },
  "fp4.11": { numero: 424, referencia: "Fp 4.11" },
  "fp4.15-16": { numero: 425, referencia: "Fp 4.15-16" },
  "fp4.4": { numero: 422, referencia: "Fp 4.4" },
  "fp4.7": { numero: 423, referencia: "Fp 4.7" },
  "fp2.3-5": { numero: 420, referencia: "Fp 2.3-5" },

  // ========== GÁLATAS ==========
  "gl1.10": { numero: 5, referencia: "Gl 1.10" },
  "gl4.19": { numero: 434, referencia: "Gl 4.19" },
  "gl5.16": { numero: 437, referencia: "Gl 5.16" },
  "gl5.19": { numero: 438, referencia: "Gl 5.19-21" },
  "gl5.19-21": { numero: 438, referencia: "Gl 5.19-21" },
  "gl5.22": { numero: 439, referencia: "Gl 5.22-23" },
  "gl5.22a": { numero: 55, referencia: "Gl 5.22-23a" },
  "gl5.25": { numero: 440, referencia: "Gl 5.25" },
  "gl5.8": { numero: 435, referencia: "Gl 5.8" },
  "gl5.13": { numero: 436, referencia: "Gl 5.13" },
  "gl6.1": { numero: 441, referencia: "Gl 6.1" },
  "gl6.10": { numero: 444, referencia: "Gl 6.10" },
  "gl6.2": { numero: 442, referencia: "Gl 6.2" },
  "gl6.9": { numero: 443, referencia: "Gl 6.9" },
  "gl5.22-23": { numero: 439, referencia: "Gl 5.22-23" },

  // ========== HEBREUS ==========
  "hb10.25": { numero: 338, referencia: "Hb 10.25" },
  "hb11.38": { numero: 280, referencia: "Hb 11.38" },
  "hb11.6": { numero: 90, referencia: "Hb 11.6" },
  "hb12.1": { numero: 91, referencia: "Hb 12.1" },
  "hb12.11": { numero: 92, referencia: "Hb 12.11" },
  "hb12.2": { numero: 325, referencia: "Hb 12.2" },
  "hb12.6": { numero: 227, referencia: "Hb 12.6" },
  "hb13.17": { numero: 143, referencia: "Hb 13.17" },
  "hb13.20": { numero: 290, referencia: "Hb 13.20" },
  "hb13.5": { numero: 219, referencia: "Hb 13.5" },
  "hb13.8": { numero: 214, referencia: "Hb 13.8" },
  "hb1.1-2": { numero: 201, referencia: "Hb 1.1-2" },
  "hb1.3": { numero: 190, referencia: "Hb 1.3" },
  "hb2.4": { numero: 89, referencia: "Hb 2.4" },
  "hb5.14": { numero: 445, referencia: "Hb 5.14" },
  "hb11.32": { numero: 504, referencia: "Hb 11.32" },

  // ========== JOÃO ==========
  "jo1.14": { numero: 200, referencia: "Jo 1.14" },
  "jo1.9-10": { numero: 93, referencia: "Jo 1.9-10" },
  "jo13.34": { numero: 95, referencia: "Jo 13.34" },
  "jo13.35": { numero: 96, referencia: "Jo 13.35" },
  "jo14.13": { numero: 192, referencia: "Jo 14.13" },
  "jo14.13-14": { numero: 210, referencia: "Jo 14.13-14" },
  "jo14.27": { numero: 97, referencia: "Jo 14.27" },
  "jo14.6": { numero: 31, referencia: "Jo 14.6" },
  "jo15.1": { numero: 98, referencia: "Jo 15.1-2" },
  "jo15.18-19": { numero: 308, referencia: "Jo 15.18-19" },
  "jo15.4": { numero: 99, referencia: "Jo 15.4-5" },
  "jo15.5": { numero: 100, referencia: "Jo 15.5" },
  "jo15.8": { numero: 101, referencia: "Jo 15.8" },
  "jo16.33": { numero: 234, referencia: "Jo 16.33" },
  "jo16.33b": { numero: 265, referencia: "Jo 16.33" },
  "jo16.4": { numero: 102, referencia: "Jo 16.4" },
  "jo17.17": { numero: 32, referencia: "Jo 17.17" },
  "jo17.21": { numero: 327, referencia: "Jo 17.21" },
  "jo4.23": { numero: 254, referencia: "Jo 4.23" },
  "jo6.26": { numero: 221, referencia: "Jo 6.26" },
  "jo6.67": { numero: 94, referencia: "Jo 6.67" },
  "jo8.11": { numero: 306, referencia: "Jo 8.11" },
  "jo8.12": { numero: 307, referencia: "Jo 8.12" },
  "jo7.24": { numero: 448, referencia: "Jo 7.24" },
  "jo16.13": { numero: 449, referencia: "Jo 16.13" },
  "jo10.1-5": { numero: 461, referencia: "Jo 10.1-5" },

  // ========== LUCAS ==========
  "lc10.19": { numero: 103, referencia: "Lc 10.19" },
  "lc19.10": { numero: 249, referencia: "Lc 19.10" },
  "lc4.18-19": { numero: 315, referencia: "Lc 4.18-19" },
  "lc7.11-17": { numero: 206, referencia: "Lc 7.11-17" },
  "lc8.40-56": { numero: 207, referencia: "Lc 8.40-56" },
  "lc1.9-58": { numero: 224, referencia: "Lc 1.9,58" },
  "lc6.11": { numero: 457, referencia: "Lc 6.11" },
  "lc8.18": { numero: 458, referencia: "Lc 8.18" },

  // ========== MARCOS ==========
  "mc10.45": { numero: 295, referencia: "Mc 10.45" },
  "mc4.35-41": { numero: 205, referencia: "Mc 4.35-41" },
  "mc8.34": { numero: 104, referencia: "Mc 8.34-35" },
  "mc4.24": { numero: 454, referencia: "Mc 4.24" },
  "mc8.15": { numero: 455, referencia: "Mc 8.15" },
  "mc13.5": { numero: 459, referencia: "Mc 13.5" },
  "mc13.23": { numero: 460, referencia: "Mc 13.23" },

  // ========== MATEUS ==========
  "mt10.29": { numero: 196, referencia: "Mt 10.29" },
  "mt10.29-30": { numero: 194, referencia: "Mt 10.29-30" },
  "mt11.29": { numero: 36, referencia: "Mt 11.29" },
  "mt13.24-28": { numero: 240, referencia: "Mt 13.24-28" },
  "mt13.36-43": { numero: 241, referencia: "Mt 13.36-43" },
  "mt16.18": { numero: 130, referencia: "Mt 16.18" },
  "mt16.24-26": { numero: 220, referencia: "Mt 16.24-26" },
  "mt23": { numero: 37, referencia: "Mt 23" },
  "mt23.27": { numero: 38, referencia: "Mt 23.27-28" },
  "mt24.11": { numero: 39, referencia: "Mt 24.11,24" },
  "mt28.19-20": { numero: 340, referencia: "Mt 28.19-20" },
  "mt28.20": { numero: 131, referencia: "Mt 28.20" },
  "mt4.23-25": { numero: 203, referencia: "Mt 4.23-25" },
  "mt4.4": { numero: 270, referencia: "Mt 4.4" },
  "mt5.11-12": { numero: 279, referencia: "Mt 5.11-12" },
  "mt5.13": { numero: 266, referencia: "Mt 5.13" },
  "mt5.13-14": { numero: 259, referencia: "Mt 5.13-14" },
  "mt5.14": { numero: 260, referencia: "Mt 5.14" },
  "mt5.16": { numero: 261, referencia: "Mt 5.16" },
  "mt5.3": { numero: 243, referencia: "Mt 5.3" },
  "mt5.9": { numero: 263, referencia: "Mt 5.9" },
  "mt6.19-21": { numero: 242, referencia: "Mt 6.19-21" },
  "mt6.26-30": { numero: 209, referencia: "Mt 6.26-30" },
  "mt6.6-16": { numero: 323, referencia: "Mt 6.6,16" },
  "mt7.16": { numero: 33, referencia: "Mt 7.16-20" },
  "mt7.21": { numero: 34, referencia: "Mt 7.21-23" },
  "mt7.22": { numero: 35, referencia: "Mt 7.22-23" },
  "mt7.3-5": { numero: 309, referencia: "Mt 7.3-5" },
  "mt8.23-27": { numero: 204, referencia: "Mt 8.23-27" },
  "mt24.24": { numero: 447, referencia: "Mt 24.24" },
  "mt7.15": { numero: 453, referencia: "Mt 7.15" },
  "mt24.4": { numero: 456, referencia: "Mt 24.4" },

  // ========== ROMANOS ==========
  "rm1": { numero: 6, referencia: "Rm 1" },
  "rm1.18-21": { numero: 61, referencia: "Rm 1.18-21" },
  "rm1.19": { numero: 58, referencia: "Rm 1.19" },
  "rm1.20": { numero: 59, referencia: "Rm 1.20" },
  "rm1.22": { numero: 60, referencia: "Rm 1.22" },
  "rm12.15": { numero: 272, referencia: "Rm 12.15" },
  "rm12.18": { numero: 68, referencia: "Rm 12.18" },
  "rm12.2": { numero: 67, referencia: "Rm 12.2" },
  "rm12.5": { numero: 343, referencia: "Rm 12.5" },
  "rm16.5": { numero: 133, referencia: "Rm 16.5" },
  "rm2.21": { numero: 62, referencia: "Rm 2.21-24" },
  "rm3.10-12": { numero: 208, referencia: "Rm 3.10-12" },
  "rm3.11": { numero: 63, referencia: "Rm 3.11" },
  "rm3.23": { numero: 312, referencia: "Rm 3.23" },
  "rm5.3-4": { numero: 330, referencia: "Rm 5.3-4" },
  "rm8.18": { numero: 64, referencia: "Rm 8.18" },
  "rm8.26": { numero: 246, referencia: "Rm 8.26" },
  "rm8.28": { numero: 65, referencia: "Rm 8.28" },
  "rm8.29": { numero: 66, referencia: "Rm 8.29" },
  "rm8.37": { numero: 248, referencia: "Rm 8.37" },

  // ========== TIAGO ==========
  "tg1.19": { numero: 81, referencia: "Tg 1.19" },
  "tg1.2": { numero: 80, referencia: "Tg 1.2-4" },
  "tg1.2-4": { numero: 228, referencia: "Tg 1.2-4" },
  "tg1.21": { numero: 82, referencia: "Tg 1.21" },
  "tg1.27": { numero: 304, referencia: "Tg 1.27" },
  "tg3.17": { numero: 83, referencia: "Tg 3.17" },
  "tg4.7": { numero: 305, referencia: "Tg 4.7" },
  "tg5.16": { numero: 303, referencia: "Tg 5.16" },
  "tg5.7": { numero: 84, referencia: "Tg 5.7-8" },
  "tg1.5": { numero: 450, referencia: "Tg 1.5" },
  "tg1.22": { numero: 467, referencia: "Tg 1.22" },

  // ========== TITO ==========
  "tt2.12": { numero: 77, referencia: "Tt 2.12" },
  "tt2.7": { numero: 76, referencia: "Tt 2.7-8" }
};

// ============================================
// ÍNDICE COMPLETO (UNIFICADO)
// ============================================

const indiceContextos = {
  ...indiceAntigoTestamento,
  ...indiceNovoTestamento
};

// ============================================
// FUNÇÕES AUXILIARES
// ============================================

function buscarPorTestamento(tipo) {
  if (tipo === "AT") return indiceAntigoTestamento;
  if (tipo === "NT") return indiceNovoTestamento;
  return null;
}

function listarLivrosAntigoTestamento() {
  const livros = {};
  Object.keys(indiceAntigoTestamento).forEach(id => {
    const ref = indiceAntigoTestamento[id].referencia;
    const livro = ref.split(" ")[0];
    if (!livros[livro]) livros[livro] = [];
    livros[livro].push(id);
  });
  return livros;
}

function listarLivrosNovoTestamento() {
  const livros = {};
  Object.keys(indiceNovoTestamento).forEach(id => {
    const ref = indiceNovoTestamento[id].referencia;
    const livro = ref.split(" ")[0];
    if (!livros[livro]) livros[livro] = [];
    livros[livro].push(id);
  });
  return livros;
}

// ============================================
// EXPORTAÇÃO
// ============================================

if (typeof window !== "undefined") {
  window.indiceAntigoTestamento = indiceAntigoTestamento;
  window.indiceNovoTestamento = indiceNovoTestamento;
  window.indiceContextos = indiceContextos;
  window.buscarPorTestamento = buscarPorTestamento;
  window.listarLivrosAntigoTestamento = listarLivrosAntigoTestamento;
  window.listarLivrosNovoTestamento = listarLivrosNovoTestamento;
}

if (typeof module !== "undefined") {
  module.exports = {
    indiceAntigoTestamento,
    indiceNovoTestamento,
    indiceContextos,
    buscarPorTestamento,
    listarLivrosAntigoTestamento,
    listarLivrosNovoTestamento
  };
}

console.log("📊 Índice por Testamento carregado!");
console.log("📜 Antigo Testamento: " + Object.keys(indiceAntigoTestamento).length + " entradas");
console.log("✝️ Novo Testamento: " + Object.keys(indiceNovoTestamento).length + " entradas");
console.log("📚 Total: " + Object.keys(indiceContextos).length + " entradas");

// ============================================
// FUNÇÕES AUXILIARES PARA O ÍNDICE
// ============================================

function buscarPorTestamento(tipo) {
  if (tipo === "AT") return indiceAntigoTestamento;
  if (tipo === "NT") return indiceNovoTestamento;
  return null;
}

function listarLivrosAntigoTestamento() {
  const livros = {};
  Object.keys(indiceAntigoTestamento).forEach(id => {
    const ref = indiceAntigoTestamento[id].referencia;
    const livro = ref.split(" ")[0];
    if (!livros[livro]) livros[livro] = [];
    livros[livro].push(id);
  });
  return livros;
}

function listarLivrosNovoTestamento() {
  const livros = {};
  Object.keys(indiceNovoTestamento).forEach(id => {
    const ref = indiceNovoTestamento[id].referencia;
    const livro = ref.split(" ")[0];
    if (!livros[livro]) livros[livro] = [];
    livros[livro].push(id);
  });
  return livros;
}

// ============================================
// EXPORTAÇÃO
// ============================================

if (typeof window !== "undefined") {
  window.indiceAntigoTestamento = indiceAntigoTestamento;
  window.indiceNovoTestamento = indiceNovoTestamento;
  window.indiceContextos = indiceContextos;
  window.buscarPorTestamento = buscarPorTestamento;
  window.listarLivrosAntigoTestamento = listarLivrosAntigoTestamento;
  window.listarLivrosNovoTestamento = listarLivrosNovoTestamento;
}

if (typeof module !== "undefined") {
  module.exports = {
    indiceAntigoTestamento,
    indiceNovoTestamento,
    indiceContextos,
    buscarPorTestamento,
    listarLivrosAntigoTestamento,
    listarLivrosNovoTestamento
  };
}

console.log("📊 Índice por Testamento carregado!");
console.log("📜 Antigo Testamento: " + Object.keys(indiceAntigoTestamento).length + " entradas");
console.log("✝️ Novo Testamento: " + Object.keys(indiceNovoTestamento).length + " entradas");
console.log("📚 Total: " + Object.keys(indiceContextos).length + " entradas");

// ============================================
// FUNÇÕES AUXILIARES PARA O ÍNDICE
// ============================================

function buscarPorTestamento(tipo) {
  if (tipo === "AT") return indiceAntigoTestamento;
  if (tipo === "NT") return indiceNovoTestamento;
  return null;
}

function listarLivrosAntigoTestamento() {
  const livros = {};
  Object.keys(indiceAntigoTestamento).forEach(id => {
    const ref = indiceAntigoTestamento[id].referencia;
    const livro = ref.split(" ")[0];
    if (!livros[livro]) livros[livro] = [];
    livros[livro].push(id);
  });
  return livros;
}

function listarLivrosNovoTestamento() {
  const livros = {};
  Object.keys(indiceNovoTestamento).forEach(id => {
    const ref = indiceNovoTestamento[id].referencia;
    const livro = ref.split(" ")[0];
    if (!livros[livro]) livros[livro] = [];
    livros[livro].push(id);
  });
  return livros;
}

// ============================================
// EXPORTAÇÃO
// ============================================

if (typeof window !== "undefined") {
  window.indiceAntigoTestamento = indiceAntigoTestamento;
  window.indiceNovoTestamento = indiceNovoTestamento;
  window.indiceContextos = indiceContextos;
  window.buscarPorTestamento = buscarPorTestamento;
  window.listarLivrosAntigoTestamento = listarLivrosAntigoTestamento;
  window.listarLivrosNovoTestamento = listarLivrosNovoTestamento;
}

if (typeof module !== "undefined") {
  module.exports = {
    indiceAntigoTestamento,
    indiceNovoTestamento,
    indiceContextos,
    buscarPorTestamento,
    listarLivrosAntigoTestamento,
    listarLivrosNovoTestamento
  };
}

console.log("📊 Índice por Testamento carregado!");
console.log("📜 Antigo Testamento: " + Object.keys(indiceAntigoTestamento).length + " entradas");
console.log("✝️ Novo Testamento: " + Object.keys(indiceNovoTestamento).length + " entradas");
console.log("📚 Total: " + Object.keys(indiceContextos).length + " entradas");

// ============================================
// FUNÇÕES AUXILIARES PARA O ÍNDICE
// ============================================

function buscarPorTestamento(tipo) {
  if (tipo === "AT") return indiceAntigoTestamento;
  if (tipo === "NT") return indiceNovoTestamento;
  return null;
}

function listarLivrosAntigoTestamento() {
  const livros = {};
  Object.keys(indiceAntigoTestamento).forEach(id => {
    const ref = indiceAntigoTestamento[id].referencia;
    const livro = ref.split(" ")[0];
    if (!livros[livro]) livros[livro] = [];
    livros[livro].push(id);
  });
  return livros;
}

function listarLivrosNovoTestamento() {
  const livros = {};
  Object.keys(indiceNovoTestamento).forEach(id => {
    const ref = indiceNovoTestamento[id].referencia;
    const livro = ref.split(" ")[0];
    if (!livros[livro]) livros[livro] = [];
    livros[livro].push(id);
  });
  return livros;
}

// ============================================
// EXPORTAÇÃO
// ============================================

if (typeof window !== "undefined") {
  window.indiceAntigoTestamento = indiceAntigoTestamento;
  window.indiceNovoTestamento = indiceNovoTestamento;
  window.indiceContextos = indiceContextos;
  window.buscarPorTestamento = buscarPorTestamento;
  window.listarLivrosAntigoTestamento = listarLivrosAntigoTestamento;
  window.listarLivrosNovoTestamento = listarLivrosNovoTestamento;
}

if (typeof module !== "undefined") {
  module.exports = {
    indiceAntigoTestamento,
    indiceNovoTestamento,
    indiceContextos,
    buscarPorTestamento,
    listarLivrosAntigoTestamento,
    listarLivrosNovoTestamento
  };
}

console.log("📊 Índice por Testamento carregado!");
console.log("📜 Antigo Testamento: " + Object.keys(indiceAntigoTestamento).length + " entradas");
console.log("✝️ Novo Testamento: " + Object.keys(indiceNovoTestamento).length + " entradas");
console.log("📚 Total: " + Object.keys(indiceContextos).length + " entradas");

// ============================================
// MAPA DE ACESSO RÁPIDO POR ID
// ============================================
const contextosBiblicosMap = {};
bibliotecaContextos.forEach(function(ctx) {
  contextosBiblicosMap[ctx.id] = ctx;
});

// ============================================
// FUNÇÕES AUXILIARES
// ============================================
function formatarCabecalho(ctx) {
  let h = "📖 " + ctx.referencia;
  if (ctx.data)          h += " | 📅 " + ctx.data;
  if (ctx.local)         h += " | 🚩 " + ctx.local;
  if (ctx.lider)         h += " | 👑 " + ctx.lider + (ctx.liderReinado ? " (" + ctx.liderReinado + ")" : "");
  if (ctx.periodo)       h += " | 📜 " + ctx.periodo + (ctx.periodoDatas ? " (" + ctx.periodoDatas + ")" : "");
  if (ctx.periodoHumanidade) h += " | 🏰 " + ctx.periodoHumanidade + (ctx.periodoHumanidadeDatas ? " (" + ctx.periodoHumanidadeDatas + ")" : "");
  return h;
}

function buscarContextoPorId(id)         { return bibliotecaContextos.find(function(c){ return c.id === id; }); }
function buscarContextosPorLocal(local)   { return bibliotecaContextos.filter(function(c){ return c.local && c.local.includes(local); }); }
function buscarContextosPorAssunto(a)     { return bibliotecaContextos.filter(function(c){ return c.assuntos && c.assuntos.includes(a); }); }
function buscarPorIndice(id)             { return indiceContextos[id] || null; }
function listarTodosIndices()            { return Object.keys(indiceContextos).sort(); }

function adicionarContexto(novo) {
  if (!novo.id || !novo.referencia) { console.error("❌ id e referencia são obrigatórios"); return false; }
  if (contextosBiblicosMap[novo.id]) { console.warn("⚠️ ID \"" + novo.id + "\" já existe."); return false; }
  bibliotecaContextos.push(novo);
  indiceContextos[novo.id] = { numero: bibliotecaContextos.length, referencia: novo.referencia };
  contextosBiblicosMap[novo.id] = novo;
  return true;
}

// ============================================
// EXPORTAÇÃO (browser + Node)
// ============================================
if (typeof window !== "undefined") {
  window.bibliotecaContextos    = bibliotecaContextos;
  window.contextosBiblicosMap   = contextosBiblicosMap;
  window.indiceContextos        = indiceContextos;
  window.adicionarContexto      = adicionarContexto;
  window.buscarContextoPorId    = buscarContextoPorId;
  window.buscarContextosPorLocal   = buscarContextosPorLocal;
  window.buscarContextosPorAssunto = buscarContextosPorAssunto;
  window.buscarPorIndice        = buscarPorIndice;
  window.listarTodosIndices     = listarTodosIndices;
  window.formatarCabecalho      = formatarCabecalho;
}
if (typeof module !== "undefined") {
  module.exports = {
    bibliotecaContextos, contextosBiblicosMap, indiceContextos,
    adicionarContexto, buscarContextoPorId, buscarContextosPorLocal,
    buscarContextosPorAssunto, buscarPorIndice, listarTodosIndices, formatarCabecalho
  };
}

console.log("📖 contextos-biblicos.js carregado com sucesso!");
console.log("📊 Total de contextos: " + bibliotecaContextos.length);
console.log("🗂️  IDs únicos no índice: " + Object.keys(indiceContextos).length);
