// ============================================
// 📑 TÍTULOS BÍBLICOS (subtítulos de seção)
// Extraído da Bíblia Almeida Revista e Corrigida (ARC)
// Total de entradas: 2858 | 66 livros
//
// Papel desta biblioteca: dar um título de seção (estilo ARC)
// para qualquer referência/intervalo de versículos, útil para
// exibir na página de contexto bíblico (dominical/teologia) e
// para funções de busca/preview de passagem.
// ============================================

const titulosBiblicos = {
  "gn1.1-31": {
    id: "gn1.1-31",
    referencia: "Gn 1.1-31",
    livro: "Gênesis",
    capitulo: 1,
    vIni: 1,
    vFim: 31,
    titulo: "A criação dos céus e da terra e de tudo o que neles há"
  },
  "gn2.4-17": {
    id: "gn2.4-17",
    referencia: "Gn 2.4-17",
    livro: "Gênesis",
    capitulo: 2,
    vIni: 4,
    vFim: 17,
    titulo: "A formação do homem"
  },
  "gn2.18-25": {
    id: "gn2.18-25",
    referencia: "Gn 2.18-25",
    livro: "Gênesis",
    capitulo: 2,
    vIni: 18,
    vFim: 25,
    titulo: "A formação da mulher"
  },
  "gn3.1-24": {
    id: "gn3.1-24",
    referencia: "Gn 3.1-24",
    livro: "Gênesis",
    capitulo: 3,
    vIni: 1,
    vFim: 24,
    titulo: "A queda do homem"
  },
  "gn4.1-7": {
    id: "gn4.1-7",
    referencia: "Gn 4.1-7",
    livro: "Gênesis",
    capitulo: 4,
    vIni: 1,
    vFim: 7,
    titulo: "Abel e Caim"
  },
  "gn4.8-16": {
    id: "gn4.8-16",
    referencia: "Gn 4.8-16",
    livro: "Gênesis",
    capitulo: 4,
    vIni: 8,
    vFim: 16,
    titulo: "O primeiro homicídio"
  },
  "gn4.17-26": {
    id: "gn4.17-26",
    referencia: "Gn 4.17-26",
    livro: "Gênesis",
    capitulo: 4,
    vIni: 17,
    vFim: 26,
    titulo: "Descendentes de Caim"
  },
  "gn5.1-32": {
    id: "gn5.1-32",
    referencia: "Gn 5.1-32",
    livro: "Gênesis",
    capitulo: 5,
    vIni: 1,
    vFim: 32,
    titulo: "Descendentes de Adão"
  },
  "gn6.1-10": {
    id: "gn6.1-10",
    referencia: "Gn 6.1-10",
    livro: "Gênesis",
    capitulo: 6,
    vIni: 1,
    vFim: 10,
    titulo: "A corrupção do gênero humano"
  },
  "gn6.11-22": {
    id: "gn6.11-22",
    referencia: "Gn 6.11-22",
    livro: "Gênesis",
    capitulo: 6,
    vIni: 11,
    vFim: 22,
    titulo: "Deus anuncia o dilúvio"
  },
  "gn7.1-16": {
    id: "gn7.1-16",
    referencia: "Gn 7.1-16",
    livro: "Gênesis",
    capitulo: 7,
    vIni: 1,
    vFim: 16,
    titulo: "Noé e sua família entram na arca"
  },
  "gn7.17-24": {
    id: "gn7.17-24",
    referencia: "Gn 7.17-24",
    livro: "Gênesis",
    capitulo: 7,
    vIni: 17,
    vFim: 24,
    titulo: "O dilúvio"
  },
  "gn8.1-5": {
    id: "gn8.1-5",
    referencia: "Gn 8.1-5",
    livro: "Gênesis",
    capitulo: 8,
    vIni: 1,
    vFim: 5,
    titulo: "Diminuem as águas do dilúvio"
  },
  "gn8.6-12": {
    id: "gn8.6-12",
    referencia: "Gn 8.6-12",
    livro: "Gênesis",
    capitulo: 8,
    vIni: 6,
    vFim: 12,
    titulo: "Noé solta um corvo e depois uma pomba"
  },
  "gn8.13-19": {
    id: "gn8.13-19",
    referencia: "Gn 8.13-19",
    livro: "Gênesis",
    capitulo: 8,
    vIni: 13,
    vFim: 19,
    titulo: "Noé e sua família saem da arca"
  },
  "gn8.20-22": {
    id: "gn8.20-22",
    referencia: "Gn 8.20-22",
    livro: "Gênesis",
    capitulo: 8,
    vIni: 20,
    vFim: 22,
    titulo: "Noé levanta um altar"
  },
  "gn9.1-19": {
    id: "gn9.1-19",
    referencia: "Gn 9.1-19",
    livro: "Gênesis",
    capitulo: 9,
    vIni: 1,
    vFim: 19,
    titulo: "A aliança de Deus com Noé"
  },
  "gn9.20-29": {
    id: "gn9.20-29",
    referencia: "Gn 9.20-29",
    livro: "Gênesis",
    capitulo: 9,
    vIni: 20,
    vFim: 29,
    titulo: "Noé pronuncia bênção e maldição"
  },
  "gn10.1-32": {
    id: "gn10.1-32",
    referencia: "Gn 10.1-32",
    livro: "Gênesis",
    capitulo: 10,
    vIni: 1,
    vFim: 32,
    titulo: "Descendentes dos filhos de Noé"
  },
  "gn11.1-9": {
    id: "gn11.1-9",
    referencia: "Gn 11.1-9",
    livro: "Gênesis",
    capitulo: 11,
    vIni: 1,
    vFim: 9,
    titulo: "A torre de Babel"
  },
  "gn11.1-32": {
    id: "gn11.1-32",
    referencia: "Gn 11.1-32",
    livro: "Gênesis",
    capitulo: 11,
    vIni: 1,
    vFim: 32,
    titulo: "Descendentes de Sem"
  },
  "gn12.1-9": {
    id: "gn12.1-9",
    referencia: "Gn 12.1-9",
    livro: "Gênesis",
    capitulo: 12,
    vIni: 1,
    vFim: 9,
    titulo: "Deus chama Abrão e lhe faz promessas"
  },
  "gn12.10-20": {
    id: "gn12.10-20",
    referencia: "Gn 12.10-20",
    livro: "Gênesis",
    capitulo: 12,
    vIni: 10,
    vFim: 20,
    titulo: "Abrão no Egito"
  },
  "gn13.1-13": {
    id: "gn13.1-13",
    referencia: "Gn 13.1-13",
    livro: "Gênesis",
    capitulo: 13,
    vIni: 1,
    vFim: 13,
    titulo: "Abrão e Ló separam-se"
  },
  "gn13.14-18": {
    id: "gn13.14-18",
    referencia: "Gn 13.14-18",
    livro: "Gênesis",
    capitulo: 13,
    vIni: 14,
    vFim: 18,
    titulo: "O SENHOR promete a Abrão a terra de Canaã"
  },
  "gn14.1-11": {
    id: "gn14.1-11",
    referencia: "Gn 14.1-11",
    livro: "Gênesis",
    capitulo: 14,
    vIni: 1,
    vFim: 11,
    titulo: "Guerra de quatro reis contra cinco"
  },
  "gn14.12-17": {
    id: "gn14.12-17",
    referencia: "Gn 14.12-17",
    livro: "Gênesis",
    capitulo: 14,
    vIni: 12,
    vFim: 17,
    titulo: "Ló é levado cativo"
  },
  "gn14.18-24": {
    id: "gn14.18-24",
    referencia: "Gn 14.18-24",
    livro: "Gênesis",
    capitulo: 14,
    vIni: 18,
    vFim: 24,
    titulo: "Melquisedeque abençoa a Abrão"
  },
  "gn15.1-11": {
    id: "gn15.1-11",
    referencia: "Gn 15.1-11",
    livro: "Gênesis",
    capitulo: 15,
    vIni: 1,
    vFim: 11,
    titulo: "Deus anima a Abrão e lhe promete um filho"
  },
  "gn15.12-21": {
    id: "gn15.12-21",
    referencia: "Gn 15.12-21",
    livro: "Gênesis",
    capitulo: 15,
    vIni: 12,
    vFim: 21,
    titulo: "O SENHOR entra em aliança com Abrão"
  },
  "gn16.1-14": {
    id: "gn16.1-14",
    referencia: "Gn 16.1-14",
    livro: "Gênesis",
    capitulo: 16,
    vIni: 1,
    vFim: 14,
    titulo: "Sarai e Agar"
  },
  "gn16.15-16": {
    id: "gn16.15-16",
    referencia: "Gn 16.15-16",
    livro: "Gênesis",
    capitulo: 16,
    vIni: 15,
    vFim: 16,
    titulo: "Nascimento de Ismael"
  },
  "gn17.1-8": {
    id: "gn17.1-8",
    referencia: "Gn 17.1-8",
    livro: "Gênesis",
    capitulo: 17,
    vIni: 1,
    vFim: 8,
    titulo: "Deus muda o nome de Abrão"
  },
  "gn17.9-14": {
    id: "gn17.9-14",
    referencia: "Gn 17.9-14",
    livro: "Gênesis",
    capitulo: 17,
    vIni: 9,
    vFim: 14,
    titulo: "Institui-se a circuncisão"
  },
  "gn17.15-22": {
    id: "gn17.15-22",
    referencia: "Gn 17.15-22",
    livro: "Gênesis",
    capitulo: 17,
    vIni: 15,
    vFim: 22,
    titulo: "Deus muda o nome de Sarai"
  },
  "gn17.23-27": {
    id: "gn17.23-27",
    referencia: "Gn 17.23-27",
    livro: "Gênesis",
    capitulo: 17,
    vIni: 23,
    vFim: 27,
    titulo: "Pratica-se a circuncisão"
  },
  "gn18.1-15": {
    id: "gn18.1-15",
    referencia: "Gn 18.1-15",
    livro: "Gênesis",
    capitulo: 18,
    vIni: 1,
    vFim: 15,
    titulo: "O SENHOR e dois anjos aparecem a Abraão"
  },
  "gn18.16-21": {
    id: "gn18.16-21",
    referencia: "Gn 18.16-21",
    livro: "Gênesis",
    capitulo: 18,
    vIni: 16,
    vFim: 21,
    titulo: "Deus anuncia a destruição de Sodoma e Gomorra"
  },
  "gn18.22-33": {
    id: "gn18.22-33",
    referencia: "Gn 18.22-33",
    livro: "Gênesis",
    capitulo: 18,
    vIni: 22,
    vFim: 33,
    titulo: "Abraão intercede junto a Deus pelos homens"
  },
  "gn19.1-22": {
    id: "gn19.1-22",
    referencia: "Gn 19.1-22",
    livro: "Gênesis",
    capitulo: 19,
    vIni: 1,
    vFim: 22,
    titulo: "Ló recebe em sua casa os dois anjos"
  },
  "gn19.23-29": {
    id: "gn19.23-29",
    referencia: "Gn 19.23-29",
    livro: "Gênesis",
    capitulo: 19,
    vIni: 23,
    vFim: 29,
    titulo: "A destruição de Sodoma e Gomorra"
  },
  "gn19.30-38": {
    id: "gn19.30-38",
    referencia: "Gn 19.30-38",
    livro: "Gênesis",
    capitulo: 19,
    vIni: 30,
    vFim: 38,
    titulo: "A origem dos moabitas e dos amonitas"
  },
  "gn20.1-18": {
    id: "gn20.1-18",
    referencia: "Gn 20.1-18",
    livro: "Gênesis",
    capitulo: 20,
    vIni: 1,
    vFim: 18,
    titulo: "Abraão e Sara peregrinam em Gerar"
  },
  "gn21.1-7": {
    id: "gn21.1-7",
    referencia: "Gn 21.1-7",
    livro: "Gênesis",
    capitulo: 21,
    vIni: 1,
    vFim: 7,
    titulo: "O nascimento de Isaque"
  },
  "gn21.8-21": {
    id: "gn21.8-21",
    referencia: "Gn 21.8-21",
    livro: "Gênesis",
    capitulo: 21,
    vIni: 8,
    vFim: 21,
    titulo: "Agar no deserto"
  },
  "gn21.22-34": {
    id: "gn21.22-34",
    referencia: "Gn 21.22-34",
    livro: "Gênesis",
    capitulo: 21,
    vIni: 22,
    vFim: 34,
    titulo: "Abraão faz aliança com Abimeleque"
  },
  "gn22.1-19": {
    id: "gn22.1-19",
    referencia: "Gn 22.1-19",
    livro: "Gênesis",
    capitulo: 22,
    vIni: 1,
    vFim: 19,
    titulo: "Deus prova Abraão"
  },
  "gn22.20-24": {
    id: "gn22.20-24",
    referencia: "Gn 22.20-24",
    livro: "Gênesis",
    capitulo: 22,
    vIni: 20,
    vFim: 24,
    titulo: "Descendência de Naor"
  },
  "gn23.1-20": {
    id: "gn23.1-20",
    referencia: "Gn 23.1-20",
    livro: "Gênesis",
    capitulo: 23,
    vIni: 1,
    vFim: 20,
    titulo: "A morte de Sara"
  },
  "gn24.1-14": {
    id: "gn24.1-14",
    referencia: "Gn 24.1-14",
    livro: "Gênesis",
    capitulo: 24,
    vIni: 1,
    vFim: 14,
    titulo: "Abraão manda seu servo buscar uma mulher para Isaque"
  },
  "gn24.15-51": {
    id: "gn24.15-51",
    referencia: "Gn 24.15-51",
    livro: "Gênesis",
    capitulo: 24,
    vIni: 15,
    vFim: 51,
    titulo: "O encontro de Rebeca"
  },
  "gn24.52-67": {
    id: "gn24.52-67",
    referencia: "Gn 24.52-67",
    livro: "Gênesis",
    capitulo: 24,
    vIni: 52,
    vFim: 67,
    titulo: "O casamento de Isaque e Rebeca"
  },
  "gn25.1-6": {
    id: "gn25.1-6",
    referencia: "Gn 25.1-6",
    livro: "Gênesis",
    capitulo: 25,
    vIni: 1,
    vFim: 6,
    titulo: "Descendentes de Abraão e Quetura"
  },
  "gn25.7-11": {
    id: "gn25.7-11",
    referencia: "Gn 25.7-11",
    livro: "Gênesis",
    capitulo: 25,
    vIni: 7,
    vFim: 11,
    titulo: "A morte de Abraão"
  },
  "gn25.1-18": {
    id: "gn25.1-18",
    referencia: "Gn 25.1-18",
    livro: "Gênesis",
    capitulo: 25,
    vIni: 1,
    vFim: 18,
    titulo: "Descendentes de Ismael"
  },
  "gn25.19-26": {
    id: "gn25.19-26",
    referencia: "Gn 25.19-26",
    livro: "Gênesis",
    capitulo: 25,
    vIni: 19,
    vFim: 26,
    titulo: "Descendentes de Isaque"
  },
  "gn25.27-34": {
    id: "gn25.27-34",
    referencia: "Gn 25.27-34",
    livro: "Gênesis",
    capitulo: 25,
    vIni: 27,
    vFim: 34,
    titulo: "Esaú vende o seu direito de primogenitura"
  },
  "gn26.1-25": {
    id: "gn26.1-25",
    referencia: "Gn 26.1-25",
    livro: "Gênesis",
    capitulo: 26,
    vIni: 1,
    vFim: 25,
    titulo: "Isaque na terra dos filisteus"
  },
  "gn26.26-35": {
    id: "gn26.26-35",
    referencia: "Gn 26.26-35",
    livro: "Gênesis",
    capitulo: 26,
    vIni: 26,
    vFim: 35,
    titulo: "Isaque faz aliança com Abimeleque"
  },
  "gn27.1-46": {
    id: "gn27.1-46",
    referencia: "Gn 27.1-46",
    livro: "Gênesis",
    capitulo: 27,
    vIni: 1,
    vFim: 46,
    titulo: "Isaque abençoa a Jacó e a Esaú"
  },
  "gn28.1-9": {
    id: "gn28.1-9",
    referencia: "Gn 28.1-9",
    livro: "Gênesis",
    capitulo: 28,
    vIni: 1,
    vFim: 9,
    titulo: "A fuga de Jacó"
  },
  "gn28.10-17": {
    id: "gn28.10-17",
    referencia: "Gn 28.10-17",
    livro: "Gênesis",
    capitulo: 28,
    vIni: 10,
    vFim: 17,
    titulo: "A visão da escada"
  },
  "gn28.18-22": {
    id: "gn28.18-22",
    referencia: "Gn 28.18-22",
    livro: "Gênesis",
    capitulo: 28,
    vIni: 18,
    vFim: 22,
    titulo: "A coluna de Betel"
  },
  "gn29.1-20": {
    id: "gn29.1-20",
    referencia: "Gn 29.1-20",
    livro: "Gênesis",
    capitulo: 29,
    vIni: 1,
    vFim: 20,
    titulo: "Jacó encontra-se com Raquel"
  },
  "gn29.21-30": {
    id: "gn29.21-30",
    referencia: "Gn 29.21-30",
    livro: "Gênesis",
    capitulo: 29,
    vIni: 21,
    vFim: 30,
    titulo: "Lia e Raquel"
  },
  "gn29.31-35": {
    id: "gn29.31-35",
    referencia: "Gn 29.31-35",
    livro: "Gênesis",
    capitulo: 29,
    vIni: 31,
    vFim: 35,
    titulo: "Os filhos de Jacó"
  },
  "gn30.27-36": {
    id: "gn30.27-36",
    referencia: "Gn 30.27-36",
    livro: "Gênesis",
    capitulo: 30,
    vIni: 27,
    vFim: 36,
    titulo: "Labão faz novo pacto com Jacó"
  },
  "gn30.37-43": {
    id: "gn30.37-43",
    referencia: "Gn 30.37-43",
    livro: "Gênesis",
    capitulo: 30,
    vIni: 37,
    vFim: 43,
    titulo: "Jacó se enriquece"
  },
  "gn31.1-23": {
    id: "gn31.1-23",
    referencia: "Gn 31.1-23",
    livro: "Gênesis",
    capitulo: 31,
    vIni: 1,
    vFim: 23,
    titulo: "Jacó retorna à terra de seus pais"
  },
  "gn31.24-42": {
    id: "gn31.24-42",
    referencia: "Gn 31.24-42",
    livro: "Gênesis",
    capitulo: 31,
    vIni: 24,
    vFim: 42,
    titulo: "Labão segue no encalço de Jacó"
  },
  "gn31.43-55": {
    id: "gn31.43-55",
    referencia: "Gn 31.43-55",
    livro: "Gênesis",
    capitulo: 31,
    vIni: 43,
    vFim: 55,
    titulo: "A aliança entre Labão e Jacó"
  },
  "gn32.3-21": {
    id: "gn32.3-21",
    referencia: "Gn 32.3-21",
    livro: "Gênesis",
    capitulo: 32,
    vIni: 3,
    vFim: 21,
    titulo: "Jacó reconcilia-se com Esaú"
  },
  "gn32.22-32": {
    id: "gn32.22-32",
    referencia: "Gn 32.22-32",
    livro: "Gênesis",
    capitulo: 32,
    vIni: 22,
    vFim: 32,
    titulo: "Jacó luta com Deus e transpõe o vau de Jaboque"
  },
  "gn33.1-17": {
    id: "gn33.1-17",
    referencia: "Gn 33.1-17",
    livro: "Gênesis",
    capitulo: 33,
    vIni: 1,
    vFim: 17,
    titulo: "O encontro de Esaú e Jacó"
  },
  "gn33.18-20": {
    id: "gn33.18-20",
    referencia: "Gn 33.18-20",
    livro: "Gênesis",
    capitulo: 33,
    vIni: 18,
    vFim: 20,
    titulo: "Jacó chega a Siquém"
  },
  "gn34.1-24": {
    id: "gn34.1-24",
    referencia: "Gn 34.1-24",
    livro: "Gênesis",
    capitulo: 34,
    vIni: 1,
    vFim: 24,
    titulo: "Diná e os siquemitas"
  },
  "gn34.25-31": {
    id: "gn34.25-31",
    referencia: "Gn 34.25-31",
    livro: "Gênesis",
    capitulo: 34,
    vIni: 25,
    vFim: 31,
    titulo: "A traição de Simeão e Levi"
  },
  "gn35.1-15": {
    id: "gn35.1-15",
    referencia: "Gn 35.1-15",
    livro: "Gênesis",
    capitulo: 35,
    vIni: 1,
    vFim: 15,
    titulo: "Jacó erige um altar em Betel"
  },
  "gn35.16-22": {
    id: "gn35.16-22",
    referencia: "Gn 35.16-22",
    livro: "Gênesis",
    capitulo: 35,
    vIni: 16,
    vFim: 22,
    titulo: "O nascimento de Benjamim e a morte de Raquel"
  },
  "gn35.1-29": {
    id: "gn35.1-29",
    referencia: "Gn 35.1-29",
    livro: "Gênesis",
    capitulo: 35,
    vIni: 1,
    vFim: 29,
    titulo: "Descendentes de Jacó"
  },
  "gn36.1-19": {
    id: "gn36.1-19",
    referencia: "Gn 36.1-19",
    livro: "Gênesis",
    capitulo: 36,
    vIni: 1,
    vFim: 19,
    titulo: "Os descendentes de Esaú"
  },
  "gn36.1-30": {
    id: "gn36.1-30",
    referencia: "Gn 36.1-30",
    livro: "Gênesis",
    capitulo: 36,
    vIni: 1,
    vFim: 30,
    titulo: "Descendentes de Seir"
  },
  "gn36.1-43": {
    id: "gn36.1-43",
    referencia: "Gn 36.1-43",
    livro: "Gênesis",
    capitulo: 36,
    vIni: 1,
    vFim: 43,
    titulo: "Reis e príncipes de Edom"
  },
  "gn37.1-36": {
    id: "gn37.1-36",
    referencia: "Gn 37.1-36",
    livro: "Gênesis",
    capitulo: 37,
    vIni: 1,
    vFim: 36,
    titulo: "José vendido pelos irmãos"
  },
  "gn38.1-30": {
    id: "gn38.1-30",
    referencia: "Gn 38.1-30",
    livro: "Gênesis",
    capitulo: 38,
    vIni: 1,
    vFim: 30,
    titulo: "Judá e Tamar"
  },
  "gn39.1-23": {
    id: "gn39.1-23",
    referencia: "Gn 39.1-23",
    livro: "Gênesis",
    capitulo: 39,
    vIni: 1,
    vFim: 23,
    titulo: "José na casa de Potifar"
  },
  "gn40.1-8": {
    id: "gn40.1-8",
    referencia: "Gn 40.1-8",
    livro: "Gênesis",
    capitulo: 40,
    vIni: 1,
    vFim: 8,
    titulo: "José na prisão interpreta dois sonhos"
  },
  "gn40.9-15": {
    id: "gn40.9-15",
    referencia: "Gn 40.9-15",
    livro: "Gênesis",
    capitulo: 40,
    vIni: 9,
    vFim: 15,
    titulo: "O sonho do copeiro-chefe"
  },
  "gn40.16-23": {
    id: "gn40.16-23",
    referencia: "Gn 40.16-23",
    livro: "Gênesis",
    capitulo: 40,
    vIni: 16,
    vFim: 23,
    titulo: "O sonho do padeiro-chefe"
  },
  "gn41.1-36": {
    id: "gn41.1-36",
    referencia: "Gn 41.1-36",
    livro: "Gênesis",
    capitulo: 41,
    vIni: 1,
    vFim: 36,
    titulo: "José interpreta os sonhos de Faraó"
  },
  "gn41.37-57": {
    id: "gn41.37-57",
    referencia: "Gn 41.37-57",
    livro: "Gênesis",
    capitulo: 41,
    vIni: 37,
    vFim: 57,
    titulo: "José como governador do Egito"
  },
  "gn42.1-24": {
    id: "gn42.1-24",
    referencia: "Gn 42.1-24",
    livro: "Gênesis",
    capitulo: 42,
    vIni: 1,
    vFim: 24,
    titulo: "Os irmãos de José descem ao Egito"
  },
  "gn42.25-38": {
    id: "gn42.25-38",
    referencia: "Gn 42.25-38",
    livro: "Gênesis",
    capitulo: 42,
    vIni: 25,
    vFim: 38,
    titulo: "Os irmãos de José regressam do Egito"
  },
  "gn43.1-14": {
    id: "gn43.1-14",
    referencia: "Gn 43.1-14",
    livro: "Gênesis",
    capitulo: 43,
    vIni: 1,
    vFim: 14,
    titulo: "Os irmãos de José descem outra vez ao Egito"
  },
  "gn43.15-34": {
    id: "gn43.15-34",
    referencia: "Gn 43.15-34",
    livro: "Gênesis",
    capitulo: 43,
    vIni: 15,
    vFim: 34,
    titulo: "José hospeda seus irmãos"
  },
  "gn44.1-13": {
    id: "gn44.1-13",
    referencia: "Gn 44.1-13",
    livro: "Gênesis",
    capitulo: 44,
    vIni: 1,
    vFim: 13,
    titulo: "Estratagema de José para deter seus irmãos"
  },
  "gn44.14-34": {
    id: "gn44.14-34",
    referencia: "Gn 44.14-34",
    livro: "Gênesis",
    capitulo: 44,
    vIni: 14,
    vFim: 34,
    titulo: "A defesa de Judá"
  },
  "gn45.1-15": {
    id: "gn45.1-15",
    referencia: "Gn 45.1-15",
    livro: "Gênesis",
    capitulo: 45,
    vIni: 1,
    vFim: 15,
    titulo: "José dá-se a conhecer a seus irmãos"
  },
  "gn45.16-28": {
    id: "gn45.16-28",
    referencia: "Gn 45.16-28",
    livro: "Gênesis",
    capitulo: 45,
    vIni: 16,
    vFim: 28,
    titulo: "Faraó ouve falar dos irmãos de José"
  },
  "gn46.1-27": {
    id: "gn46.1-27",
    referencia: "Gn 46.1-27",
    livro: "Gênesis",
    capitulo: 46,
    vIni: 1,
    vFim: 27,
    titulo: "Jacó e toda a sua família descem para o Egito"
  },
  "gn46.28-34": {
    id: "gn46.28-34",
    referencia: "Gn 46.28-34",
    livro: "Gênesis",
    capitulo: 46,
    vIni: 28,
    vFim: 34,
    titulo: "O encontro de José com seu pai"
  },
  "gn47.1-12": {
    id: "gn47.1-12",
    referencia: "Gn 47.1-12",
    livro: "Gênesis",
    capitulo: 47,
    vIni: 1,
    vFim: 12,
    titulo: "Israel é apresentado a Faraó"
  },
  "gn47.13-31": {
    id: "gn47.13-31",
    referencia: "Gn 47.13-31",
    livro: "Gênesis",
    capitulo: 47,
    vIni: 13,
    vFim: 31,
    titulo: "José compra toda a terra do Egito para Faraó"
  },
  "gn48.1-10": {
    id: "gn48.1-10",
    referencia: "Gn 48.1-10",
    livro: "Gênesis",
    capitulo: 48,
    vIni: 1,
    vFim: 10,
    titulo: "Jacó adoece"
  },
  "gn48.11-22": {
    id: "gn48.11-22",
    referencia: "Gn 48.11-22",
    livro: "Gênesis",
    capitulo: 48,
    vIni: 11,
    vFim: 22,
    titulo: "Jacó abençoa José e os filhos deste"
  },
  "gn49.1-33": {
    id: "gn49.1-33",
    referencia: "Gn 49.1-33",
    livro: "Gênesis",
    capitulo: 49,
    vIni: 1,
    vFim: 33,
    titulo: "Bênçãos proféticas de Jacó"
  },
  "gn50.1-14": {
    id: "gn50.1-14",
    referencia: "Gn 50.1-14",
    livro: "Gênesis",
    capitulo: 50,
    vIni: 1,
    vFim: 14,
    titulo: "A lamentação por Jacó e o seu enterro"
  },
  "gn50.15-22": {
    id: "gn50.15-22",
    referencia: "Gn 50.15-22",
    livro: "Gênesis",
    capitulo: 50,
    vIni: 15,
    vFim: 22,
    titulo: "A magnanimidade de José para com seus irmãos"
  },
  "gn50.23-26": {
    id: "gn50.23-26",
    referencia: "Gn 50.23-26",
    livro: "Gênesis",
    capitulo: 50,
    vIni: 23,
    vFim: 26,
    titulo: "A morte de José"
  },
  "êx1.1-14": {
    id: "êx1.1-14",
    referencia: "Êx 1.1-14",
    livro: "Êxodo",
    capitulo: 1,
    vIni: 1,
    vFim: 14,
    titulo: "Os descendentes de Jacó no Egito"
  },
  "êx1.15-22": {
    id: "êx1.15-22",
    referencia: "Êx 1.15-22",
    livro: "Êxodo",
    capitulo: 1,
    vIni: 15,
    vFim: 22,
    titulo: "As parteiras desobedecem a Faraó"
  },
  "êx2.1-10": {
    id: "êx2.1-10",
    referencia: "Êx 2.1-10",
    livro: "Êxodo",
    capitulo: 2,
    vIni: 1,
    vFim: 10,
    titulo: "Nascimento e educação de Moisés"
  },
  "êx2.11-22": {
    id: "êx2.11-22",
    referencia: "Êx 2.11-22",
    livro: "Êxodo",
    capitulo: 2,
    vIni: 11,
    vFim: 22,
    titulo: "Moisés mata um egípcio e foge para Midiã"
  },
  "êx2.23-25": {
    id: "êx2.23-25",
    referencia: "Êx 2.23-25",
    livro: "Êxodo",
    capitulo: 2,
    vIni: 23,
    vFim: 25,
    titulo: "A morte do rei do Egito"
  },
  "êx3.1-22": {
    id: "êx3.1-22",
    referencia: "Êx 3.1-22",
    livro: "Êxodo",
    capitulo: 3,
    vIni: 1,
    vFim: 22,
    titulo: "Deus fala com Moisés do meio da sarça ardente"
  },
  "êx4.1-17": {
    id: "êx4.1-17",
    referencia: "Êx 4.1-17",
    livro: "Êxodo",
    capitulo: 4,
    vIni: 1,
    vFim: 17,
    titulo: "Deus concede poderes a Moisés"
  },
  "êx4.18-31": {
    id: "êx4.18-31",
    referencia: "Êx 4.18-31",
    livro: "Êxodo",
    capitulo: 4,
    vIni: 18,
    vFim: 31,
    titulo: "Moisés regressa ao Egito"
  },
  "êx5.1-5": {
    id: "êx5.1-5",
    referencia: "Êx 5.1-5",
    livro: "Êxodo",
    capitulo: 5,
    vIni: 1,
    vFim: 5,
    titulo: "Moisés e Arão falam a Faraó"
  },
  "êx5.6-14": {
    id: "êx5.6-14",
    referencia: "Êx 5.6-14",
    livro: "Êxodo",
    capitulo: 5,
    vIni: 6,
    vFim: 14,
    titulo: "Faraó aflige os israelitas"
  },
  "êx5.15-23": {
    id: "êx5.15-23",
    referencia: "Êx 5.15-23",
    livro: "Êxodo",
    capitulo: 5,
    vIni: 15,
    vFim: 23,
    titulo: "Os israelitas queixam-se de Moisés e Arão"
  },
  "êx6.2-13": {
    id: "êx6.2-13",
    referencia: "Êx 6.2-13",
    livro: "Êxodo",
    capitulo: 6,
    vIni: 2,
    vFim: 13,
    titulo: "Deus promete livrar os israelitas"
  },
  "êx6.14-27": {
    id: "êx6.14-27",
    referencia: "Êx 6.14-27",
    livro: "Êxodo",
    capitulo: 6,
    vIni: 14,
    vFim: 27,
    titulo: "Genealogias de Moisés e Arão"
  },
  "êx6.28-30": {
    id: "êx6.28-30",
    referencia: "Êx 6.28-30",
    livro: "Êxodo",
    capitulo: 6,
    vIni: 28,
    vFim: 30,
    titulo: "Moisés fala novamente a Faraó"
  },
  "êx7.14-25": {
    id: "êx7.14-25",
    referencia: "Êx 7.14-25",
    livro: "Êxodo",
    capitulo: 7,
    vIni: 14,
    vFim: 25,
    titulo: "Primeira praga: as águas tornam-se em sangue"
  },
  "êx8.1-15": {
    id: "êx8.1-15",
    referencia: "Êx 8.1-15",
    livro: "Êxodo",
    capitulo: 8,
    vIni: 1,
    vFim: 15,
    titulo: "Segunda praga: rãs"
  },
  "êx8.16-19": {
    id: "êx8.16-19",
    referencia: "Êx 8.16-19",
    livro: "Êxodo",
    capitulo: 8,
    vIni: 16,
    vFim: 19,
    titulo: "Terceira praga: piolhos"
  },
  "êx8.20-32": {
    id: "êx8.20-32",
    referencia: "Êx 8.20-32",
    livro: "Êxodo",
    capitulo: 8,
    vIni: 20,
    vFim: 32,
    titulo: "Quarta praga: moscas"
  },
  "êx9.1-7": {
    id: "êx9.1-7",
    referencia: "Êx 9.1-7",
    livro: "Êxodo",
    capitulo: 9,
    vIni: 1,
    vFim: 7,
    titulo: "Quinta praga: peste nos animais"
  },
  "êx9.8-12": {
    id: "êx9.8-12",
    referencia: "Êx 9.8-12",
    livro: "Êxodo",
    capitulo: 9,
    vIni: 8,
    vFim: 12,
    titulo: "Sexta praga: úlceras"
  },
  "êx9.13-35": {
    id: "êx9.13-35",
    referencia: "Êx 9.13-35",
    livro: "Êxodo",
    capitulo: 9,
    vIni: 13,
    vFim: 35,
    titulo: "Sétima praga: chuva de pedras"
  },
  "êx10.1-20": {
    id: "êx10.1-20",
    referencia: "Êx 10.1-20",
    livro: "Êxodo",
    capitulo: 10,
    vIni: 1,
    vFim: 20,
    titulo: "Oitava praga: gafanhotos"
  },
  "êx10.21-29": {
    id: "êx10.21-29",
    referencia: "Êx 10.21-29",
    livro: "Êxodo",
    capitulo: 10,
    vIni: 21,
    vFim: 29,
    titulo: "Nona praga: trevas"
  },
  "êx11.1-10": {
    id: "êx11.1-10",
    referencia: "Êx 11.1-10",
    livro: "Êxodo",
    capitulo: 11,
    vIni: 1,
    vFim: 10,
    titulo: "Deus anuncia a décima praga"
  },
  "êx12.1-28": {
    id: "êx12.1-28",
    referencia: "Êx 12.1-28",
    livro: "Êxodo",
    capitulo: 12,
    vIni: 1,
    vFim: 28,
    titulo: "A instituição da Páscoa"
  },
  "êx12.29-36": {
    id: "êx12.29-36",
    referencia: "Êx 12.29-36",
    livro: "Êxodo",
    capitulo: 12,
    vIni: 29,
    vFim: 36,
    titulo: "Décima praga: morte dos primogênitos"
  },
  "êx12.37-51": {
    id: "êx12.37-51",
    referencia: "Êx 12.37-51",
    livro: "Êxodo",
    capitulo: 12,
    vIni: 37,
    vFim: 51,
    titulo: "A saída dos israelitas do Egito"
  },
  "êx13.1-16": {
    id: "êx13.1-16",
    referencia: "Êx 13.1-16",
    livro: "Êxodo",
    capitulo: 13,
    vIni: 1,
    vFim: 16,
    titulo: "Consagração dos primogênitos"
  },
  "êx13.17-22": {
    id: "êx13.17-22",
    referencia: "Êx 13.17-22",
    livro: "Êxodo",
    capitulo: 13,
    vIni: 17,
    vFim: 22,
    titulo: "Deus guia o povo pelo caminho"
  },
  "êx14.1-14": {
    id: "êx14.1-14",
    referencia: "Êx 14.1-14",
    livro: "Êxodo",
    capitulo: 14,
    vIni: 1,
    vFim: 14,
    titulo: "Perseguição de Israel"
  },
  "êx14.15-25": {
    id: "êx14.15-25",
    referencia: "Êx 14.15-25",
    livro: "Êxodo",
    capitulo: 14,
    vIni: 15,
    vFim: 25,
    titulo: "A passagem pelo meio do mar"
  },
  "êx14.26-31": {
    id: "êx14.26-31",
    referencia: "Êx 14.26-31",
    livro: "Êxodo",
    capitulo: 14,
    vIni: 26,
    vFim: 31,
    titulo: "Os egípcios perecem no mar"
  },
  "êx15.1-19": {
    id: "êx15.1-19",
    referencia: "Êx 15.1-19",
    livro: "Êxodo",
    capitulo: 15,
    vIni: 1,
    vFim: 19,
    titulo: "O cântico de Moisés"
  },
  "êx15.20-21": {
    id: "êx15.20-21",
    referencia: "Êx 15.20-21",
    livro: "Êxodo",
    capitulo: 15,
    vIni: 20,
    vFim: 21,
    titulo: "Antífona de Miriã e das mulheres"
  },
  "êx15.22-27": {
    id: "êx15.22-27",
    referencia: "Êx 15.22-27",
    livro: "Êxodo",
    capitulo: 15,
    vIni: 22,
    vFim: 27,
    titulo: "As águas amargas tornam-se doces"
  },
  "êx16.1-10": {
    id: "êx16.1-10",
    referencia: "Êx 16.1-10",
    livro: "Êxodo",
    capitulo: 16,
    vIni: 1,
    vFim: 10,
    titulo: "Deus manda o maná"
  },
  "êx16.11-21": {
    id: "êx16.11-21",
    referencia: "Êx 16.11-21",
    livro: "Êxodo",
    capitulo: 16,
    vIni: 11,
    vFim: 21,
    titulo: "Deus manda codornizes"
  },
  "êx16.22-36": {
    id: "êx16.22-36",
    referencia: "Êx 16.22-36",
    livro: "Êxodo",
    capitulo: 16,
    vIni: 22,
    vFim: 36,
    titulo: "O povo de Israel recolhe o maná"
  },
  "êx17.1-7": {
    id: "êx17.1-7",
    referencia: "Êx 17.1-7",
    livro: "Êxodo",
    capitulo: 17,
    vIni: 1,
    vFim: 7,
    titulo: "A água da rocha em Refidim"
  },
  "êx17.8-16": {
    id: "êx17.8-16",
    referencia: "Êx 17.8-16",
    livro: "Êxodo",
    capitulo: 17,
    vIni: 8,
    vFim: 16,
    titulo: "Amaleque peleja contra os israelitas"
  },
  "êx18.1-12": {
    id: "êx18.1-12",
    referencia: "Êx 18.1-12",
    livro: "Êxodo",
    capitulo: 18,
    vIni: 1,
    vFim: 12,
    titulo: "O sogro de Moisés traz-lhe sua mulher e seus filhos"
  },
  "êx18.13-27": {
    id: "êx18.13-27",
    referencia: "Êx 18.13-27",
    livro: "Êxodo",
    capitulo: 18,
    vIni: 13,
    vFim: 27,
    titulo: "A nomeação de auxiliares"
  },
  "êx19.1-25": {
    id: "êx19.1-25",
    referencia: "Êx 19.1-25",
    livro: "Êxodo",
    capitulo: 19,
    vIni: 1,
    vFim: 25,
    titulo: "Deus fala com Moisés no monte Sinai"
  },
  "êx20.1-17": {
    id: "êx20.1-17",
    referencia: "Êx 20.1-17",
    livro: "Êxodo",
    capitulo: 20,
    vIni: 1,
    vFim: 17,
    titulo: "Os dez mandamentos"
  },
  "êx20.18-21": {
    id: "êx20.18-21",
    referencia: "Êx 20.18-21",
    livro: "Êxodo",
    capitulo: 20,
    vIni: 18,
    vFim: 21,
    titulo: "Moisés, mediador entre Deus e o povo"
  },
  "êx20.22-26": {
    id: "êx20.22-26",
    referencia: "Êx 20.22-26",
    livro: "Êxodo",
    capitulo: 20,
    vIni: 22,
    vFim: 26,
    titulo: "Leis acerca dos altares"
  },
  "êx21.1-11": {
    id: "êx21.1-11",
    referencia: "Êx 21.1-11",
    livro: "Êxodo",
    capitulo: 21,
    vIni: 1,
    vFim: 11,
    titulo: "Leis acerca dos servos"
  },
  "êx21.12-36": {
    id: "êx21.12-36",
    referencia: "Êx 21.12-36",
    livro: "Êxodo",
    capitulo: 21,
    vIni: 12,
    vFim: 36,
    titulo: "Leis acerca da violência"
  },
  "êx22.1-15": {
    id: "êx22.1-15",
    referencia: "Êx 22.1-15",
    livro: "Êxodo",
    capitulo: 22,
    vIni: 1,
    vFim: 15,
    titulo: "Leis acerca da propriedade"
  },
  "êx22.16-31": {
    id: "êx22.16-31",
    referencia: "Êx 22.16-31",
    livro: "Êxodo",
    capitulo: 22,
    vIni: 16,
    vFim: 31,
    titulo: "Leis civis e religiosas"
  },
  "êx23.1-5": {
    id: "êx23.1-5",
    referencia: "Êx 23.1-5",
    livro: "Êxodo",
    capitulo: 23,
    vIni: 1,
    vFim: 5,
    titulo: "O testemunho falso e a injúria"
  },
  "êx23.6-9": {
    id: "êx23.6-9",
    referencia: "Êx 23.6-9",
    livro: "Êxodo",
    capitulo: 23,
    vIni: 6,
    vFim: 9,
    titulo: "Deveres dos juízes"
  },
  "êx23.10-11": {
    id: "êx23.10-11",
    referencia: "Êx 23.10-11",
    livro: "Êxodo",
    capitulo: 23,
    vIni: 10,
    vFim: 11,
    titulo: "O Ano de Descanso"
  },
  "êx23.12-13": {
    id: "êx23.12-13",
    referencia: "Êx 23.12-13",
    livro: "Êxodo",
    capitulo: 23,
    vIni: 12,
    vFim: 13,
    titulo: "O Sábado"
  },
  "êx23.14-19": {
    id: "êx23.14-19",
    referencia: "Êx 23.14-19",
    livro: "Êxodo",
    capitulo: 23,
    vIni: 14,
    vFim: 19,
    titulo: "As três festas"
  },
  "êx23.20-33": {
    id: "êx23.20-33",
    referencia: "Êx 23.20-33",
    livro: "Êxodo",
    capitulo: 23,
    vIni: 20,
    vFim: 33,
    titulo: "Deus promete a posse da terra"
  },
  "êx24.1-11": {
    id: "êx24.1-11",
    referencia: "Êx 24.1-11",
    livro: "Êxodo",
    capitulo: 24,
    vIni: 1,
    vFim: 11,
    titulo: "A aliança de Deus com Israel"
  },
  "êx24.12-18": {
    id: "êx24.12-18",
    referencia: "Êx 24.12-18",
    livro: "Êxodo",
    capitulo: 24,
    vIni: 12,
    vFim: 18,
    titulo: "Moisés e os anciãos sobem novamente ao monte"
  },
  "êx25.1-9": {
    id: "êx25.1-9",
    referencia: "Êx 25.1-9",
    livro: "Êxodo",
    capitulo: 25,
    vIni: 1,
    vFim: 9,
    titulo: "Deus manda trazer ofertas para o tabernáculo"
  },
  "êx25.10-16": {
    id: "êx25.10-16",
    referencia: "Êx 25.10-16",
    livro: "Êxodo",
    capitulo: 25,
    vIni: 10,
    vFim: 16,
    titulo: "A arca"
  },
  "êx25.17-22": {
    id: "êx25.17-22",
    referencia: "Êx 25.17-22",
    livro: "Êxodo",
    capitulo: 25,
    vIni: 17,
    vFim: 22,
    titulo: "O propiciatório"
  },
  "êx25.23-30": {
    id: "êx25.23-30",
    referencia: "Êx 25.23-30",
    livro: "Êxodo",
    capitulo: 25,
    vIni: 23,
    vFim: 30,
    titulo: "A mesa"
  },
  "êx25.31-40": {
    id: "êx25.31-40",
    referencia: "Êx 25.31-40",
    livro: "Êxodo",
    capitulo: 25,
    vIni: 31,
    vFim: 40,
    titulo: "O candelabro"
  },
  "êx26.1-13": {
    id: "êx26.1-13",
    referencia: "Êx 26.1-13",
    livro: "Êxodo",
    capitulo: 26,
    vIni: 1,
    vFim: 13,
    titulo: "As cortinas do tabernáculo"
  },
  "êx26.14-30": {
    id: "êx26.14-30",
    referencia: "Êx 26.14-30",
    livro: "Êxodo",
    capitulo: 26,
    vIni: 14,
    vFim: 30,
    titulo: "A coberta de peles e as tábuas"
  },
  "êx26.31-37": {
    id: "êx26.31-37",
    referencia: "Êx 26.31-37",
    livro: "Êxodo",
    capitulo: 26,
    vIni: 31,
    vFim: 37,
    titulo: "O véu, o reposteiro e as colunas"
  },
  "êx27.1-8": {
    id: "êx27.1-8",
    referencia: "Êx 27.1-8",
    livro: "Êxodo",
    capitulo: 27,
    vIni: 1,
    vFim: 8,
    titulo: "O altar do holocausto"
  },
  "êx27.9-19": {
    id: "êx27.9-19",
    referencia: "Êx 27.9-19",
    livro: "Êxodo",
    capitulo: 27,
    vIni: 9,
    vFim: 19,
    titulo: "O átrio do tabernáculo"
  },
  "êx27.20-21": {
    id: "êx27.20-21",
    referencia: "Êx 27.20-21",
    livro: "Êxodo",
    capitulo: 27,
    vIni: 20,
    vFim: 21,
    titulo: "O azeite para o candelabro"
  },
  "êx28.1": {
    id: "êx28.1",
    referencia: "Êx 28.1",
    livro: "Êxodo",
    capitulo: 28,
    vIni: 1,
    vFim: 1,
    titulo: "Deus escolhe Arão e seus filhos para sacerdotes"
  },
  "êx28.2-43": {
    id: "êx28.2-43",
    referencia: "Êx 28.2-43",
    livro: "Êxodo",
    capitulo: 28,
    vIni: 2,
    vFim: 43,
    titulo: "As vestes sacerdotais"
  },
  "êx29.1-37": {
    id: "êx29.1-37",
    referencia: "Êx 29.1-37",
    livro: "Êxodo",
    capitulo: 29,
    vIni: 1,
    vFim: 37,
    titulo: "O sacrifício e as cerimônias da consagração"
  },
  "êx29.38-46": {
    id: "êx29.38-46",
    referencia: "Êx 29.38-46",
    livro: "Êxodo",
    capitulo: 29,
    vIni: 38,
    vFim: 46,
    titulo: "Ofertas contínuas"
  },
  "êx30.1-10": {
    id: "êx30.1-10",
    referencia: "Êx 30.1-10",
    livro: "Êxodo",
    capitulo: 30,
    vIni: 1,
    vFim: 10,
    titulo: "O altar do incenso"
  },
  "êx30.11-16": {
    id: "êx30.11-16",
    referencia: "Êx 30.11-16",
    livro: "Êxodo",
    capitulo: 30,
    vIni: 11,
    vFim: 16,
    titulo: "O pagamento do resgate"
  },
  "êx30.17-21": {
    id: "êx30.17-21",
    referencia: "Êx 30.17-21",
    livro: "Êxodo",
    capitulo: 30,
    vIni: 17,
    vFim: 21,
    titulo: "A bacia de bronze"
  },
  "êx30.22-33": {
    id: "êx30.22-33",
    referencia: "Êx 30.22-33",
    livro: "Êxodo",
    capitulo: 30,
    vIni: 22,
    vFim: 33,
    titulo: "O óleo da santa unção"
  },
  "êx30.34-38": {
    id: "êx30.34-38",
    referencia: "Êx 30.34-38",
    livro: "Êxodo",
    capitulo: 30,
    vIni: 34,
    vFim: 38,
    titulo: "O incenso sagrado"
  },
  "êx31.1-11": {
    id: "êx31.1-11",
    referencia: "Êx 31.1-11",
    livro: "Êxodo",
    capitulo: 31,
    vIni: 1,
    vFim: 11,
    titulo: "Os artífices da obra do tabernáculo"
  },
  "êx31.12-18": {
    id: "êx31.12-18",
    referencia: "Êx 31.12-18",
    livro: "Êxodo",
    capitulo: 31,
    vIni: 12,
    vFim: 18,
    titulo: "O sábado santo e as duas tábuas do Testemunho"
  },
  "êx32.1-10": {
    id: "êx32.1-10",
    referencia: "Êx 32.1-10",
    livro: "Êxodo",
    capitulo: 32,
    vIni: 1,
    vFim: 10,
    titulo: "O bezerro de ouro"
  },
  "êx32.11-24": {
    id: "êx32.11-24",
    referencia: "Êx 32.11-24",
    livro: "Êxodo",
    capitulo: 32,
    vIni: 11,
    vFim: 24,
    titulo: "Moisés intercede pelo povo"
  },
  "êx32.25-29": {
    id: "êx32.25-29",
    referencia: "Êx 32.25-29",
    livro: "Êxodo",
    capitulo: 32,
    vIni: 25,
    vFim: 29,
    titulo: "Moisés manda matar os idólatras"
  },
  "êx32.30-35": {
    id: "êx32.30-35",
    referencia: "Êx 32.30-35",
    livro: "Êxodo",
    capitulo: 32,
    vIni: 30,
    vFim: 35,
    titulo: "Moisés intercede pelo povo"
  },
  "êx33.1-11": {
    id: "êx33.1-11",
    referencia: "Êx 33.1-11",
    livro: "Êxodo",
    capitulo: 33,
    vIni: 1,
    vFim: 11,
    titulo: "O Anjo de Deus irá adiante do povo"
  },
  "êx33.12-16": {
    id: "êx33.12-16",
    referencia: "Êx 33.12-16",
    livro: "Êxodo",
    capitulo: 33,
    vIni: 12,
    vFim: 16,
    titulo: "Moisés roga a Deus a sua presença"
  },
  "êx33.17-23": {
    id: "êx33.17-23",
    referencia: "Êx 33.17-23",
    livro: "Êxodo",
    capitulo: 33,
    vIni: 17,
    vFim: 23,
    titulo: "Moisés roga a Deus que lhe mostre a sua glória"
  },
  "êx34.1-9": {
    id: "êx34.1-9",
    referencia: "Êx 34.1-9",
    livro: "Êxodo",
    capitulo: 34,
    vIni: 1,
    vFim: 9,
    titulo: "As segundas tábuas da lei"
  },
  "êx34.10-17": {
    id: "êx34.10-17",
    referencia: "Êx 34.10-17",
    livro: "Êxodo",
    capitulo: 34,
    vIni: 10,
    vFim: 17,
    titulo: "Deus faz uma aliança e admoesta contra a infidelidade"
  },
  "êx34.18-28": {
    id: "êx34.18-28",
    referencia: "Êx 34.18-28",
    livro: "Êxodo",
    capitulo: 34,
    vIni: 18,
    vFim: 28,
    titulo: "As três festas"
  },
  "êx34.29-35": {
    id: "êx34.29-35",
    referencia: "Êx 34.29-35",
    livro: "Êxodo",
    capitulo: 34,
    vIni: 29,
    vFim: 35,
    titulo: "O rosto de Moisés resplandece"
  },
  "êx35.1-3": {
    id: "êx35.1-3",
    referencia: "Êx 35.1-3",
    livro: "Êxodo",
    capitulo: 35,
    vIni: 1,
    vFim: 3,
    titulo: "O Sábado"
  },
  "êx35.4-9": {
    id: "êx35.4-9",
    referencia: "Êx 35.4-9",
    livro: "Êxodo",
    capitulo: 35,
    vIni: 4,
    vFim: 9,
    titulo: "Deus manda trazer ofertas para o tabernáculo"
  },
  "êx35.10-19": {
    id: "êx35.10-19",
    referencia: "Êx 35.10-19",
    livro: "Êxodo",
    capitulo: 35,
    vIni: 10,
    vFim: 19,
    titulo: "Os utensílios do tabernáculo"
  },
  "êx35.20-29": {
    id: "êx35.20-29",
    referencia: "Êx 35.20-29",
    livro: "Êxodo",
    capitulo: 35,
    vIni: 20,
    vFim: 29,
    titulo: "A prontidão do povo em trazer ofertas"
  },
  "êx35.30-35": {
    id: "êx35.30-35",
    referencia: "Êx 35.30-35",
    livro: "Êxodo",
    capitulo: 35,
    vIni: 30,
    vFim: 35,
    titulo: "Deus chama a Bezalel e a Aoliabe"
  },
  "êx36.2-7": {
    id: "êx36.2-7",
    referencia: "Êx 36.2-7",
    livro: "Êxodo",
    capitulo: 36,
    vIni: 2,
    vFim: 7,
    titulo: "Moisés entrega aos obreiros as ofertas do povo"
  },
  "êx36.8-19": {
    id: "êx36.8-19",
    referencia: "Êx 36.8-19",
    livro: "Êxodo",
    capitulo: 36,
    vIni: 8,
    vFim: 19,
    titulo: "As cortinas do tabernáculo"
  },
  "êx36.20-34": {
    id: "êx36.20-34",
    referencia: "Êx 36.20-34",
    livro: "Êxodo",
    capitulo: 36,
    vIni: 20,
    vFim: 34,
    titulo: "A coberta de peles e as tábuas"
  },
  "êx36.35-38": {
    id: "êx36.35-38",
    referencia: "Êx 36.35-38",
    livro: "Êxodo",
    capitulo: 36,
    vIni: 35,
    vFim: 38,
    titulo: "O véu, o reposteiro e as colunas"
  },
  "êx37.1-5": {
    id: "êx37.1-5",
    referencia: "Êx 37.1-5",
    livro: "Êxodo",
    capitulo: 37,
    vIni: 1,
    vFim: 5,
    titulo: "A arca"
  },
  "êx37.6-9": {
    id: "êx37.6-9",
    referencia: "Êx 37.6-9",
    livro: "Êxodo",
    capitulo: 37,
    vIni: 6,
    vFim: 9,
    titulo: "O propiciatório"
  },
  "êx37.10-16": {
    id: "êx37.10-16",
    referencia: "Êx 37.10-16",
    livro: "Êxodo",
    capitulo: 37,
    vIni: 10,
    vFim: 16,
    titulo: "A mesa"
  },
  "êx37.17-24": {
    id: "êx37.17-24",
    referencia: "Êx 37.17-24",
    livro: "Êxodo",
    capitulo: 37,
    vIni: 17,
    vFim: 24,
    titulo: "O candelabro"
  },
  "êx37.25-28": {
    id: "êx37.25-28",
    referencia: "Êx 37.25-28",
    livro: "Êxodo",
    capitulo: 37,
    vIni: 25,
    vFim: 28,
    titulo: "O altar do incenso"
  },
  "êx37.29": {
    id: "êx37.29",
    referencia: "Êx 37.29",
    livro: "Êxodo",
    capitulo: 37,
    vIni: 29,
    vFim: 29,
    titulo: "O óleo sagrado e o incenso santo"
  },
  "êx38.1-7": {
    id: "êx38.1-7",
    referencia: "Êx 38.1-7",
    livro: "Êxodo",
    capitulo: 38,
    vIni: 1,
    vFim: 7,
    titulo: "O altar do holocausto"
  },
  "êx38.8": {
    id: "êx38.8",
    referencia: "Êx 38.8",
    livro: "Êxodo",
    capitulo: 38,
    vIni: 8,
    vFim: 8,
    titulo: "A bacia de bronze"
  },
  "êx38.9-20": {
    id: "êx38.9-20",
    referencia: "Êx 38.9-20",
    livro: "Êxodo",
    capitulo: 38,
    vIni: 9,
    vFim: 20,
    titulo: "O átrio e o reposteiro"
  },
  "êx38.21-31": {
    id: "êx38.21-31",
    referencia: "Êx 38.21-31",
    livro: "Êxodo",
    capitulo: 38,
    vIni: 21,
    vFim: 31,
    titulo: "A enumeração das coisas do tabernáculo"
  },
  "êx39.1-31": {
    id: "êx39.1-31",
    referencia: "Êx 39.1-31",
    livro: "Êxodo",
    capitulo: 39,
    vIni: 1,
    vFim: 31,
    titulo: "As vestes dos sacerdotes"
  },
  "êx39.32-43": {
    id: "êx39.32-43",
    referencia: "Êx 39.32-43",
    livro: "Êxodo",
    capitulo: 39,
    vIni: 32,
    vFim: 43,
    titulo: "Os utensílios do tabernáculo completados"
  },
  "êx40.1-15": {
    id: "êx40.1-15",
    referencia: "Êx 40.1-15",
    livro: "Êxodo",
    capitulo: 40,
    vIni: 1,
    vFim: 15,
    titulo: "Deus manda Moisés levantar o tabernáculo"
  },
  "êx40.16-33": {
    id: "êx40.16-33",
    referencia: "Êx 40.16-33",
    livro: "Êxodo",
    capitulo: 40,
    vIni: 16,
    vFim: 33,
    titulo: "O tabernáculo é levantado"
  },
  "êx40.34-38": {
    id: "êx40.34-38",
    referencia: "Êx 40.34-38",
    livro: "Êxodo",
    capitulo: 40,
    vIni: 34,
    vFim: 38,
    titulo: "A nuvem cobre o tabernáculo"
  },
  "lv1.1-17": {
    id: "lv1.1-17",
    referencia: "Lv 1.1-17",
    livro: "Levítico",
    capitulo: 1,
    vIni: 1,
    vFim: 17,
    titulo: "Os holocaustos"
  },
  "lv2.1-16": {
    id: "lv2.1-16",
    referencia: "Lv 2.1-16",
    livro: "Levítico",
    capitulo: 2,
    vIni: 1,
    vFim: 16,
    titulo: "As ofertas de manjares"
  },
  "lv3.1-17": {
    id: "lv3.1-17",
    referencia: "Lv 3.1-17",
    livro: "Levítico",
    capitulo: 3,
    vIni: 1,
    vFim: 17,
    titulo: "Os sacrifícios pacíficos"
  },
  "lv4.1-12": {
    id: "lv4.1-12",
    referencia: "Lv 4.1-12",
    livro: "Levítico",
    capitulo: 4,
    vIni: 1,
    vFim: 12,
    titulo: "O sacrifício pelos pecados por ignorância dos sacerdotes"
  },
  "lv4.13-21": {
    id: "lv4.13-21",
    referencia: "Lv 4.13-21",
    livro: "Levítico",
    capitulo: 4,
    vIni: 13,
    vFim: 21,
    titulo: "Os sacrifícios pelos pecados por ignorância de toda a congregação"
  },
  "lv4.22-26": {
    id: "lv4.22-26",
    referencia: "Lv 4.22-26",
    livro: "Levítico",
    capitulo: 4,
    vIni: 22,
    vFim: 26,
    titulo: "Os sacrifícios pelos pecados por ignorância de um príncipe"
  },
  "lv4.27-35": {
    id: "lv4.27-35",
    referencia: "Lv 4.27-35",
    livro: "Levítico",
    capitulo: 4,
    vIni: 27,
    vFim: 35,
    titulo: "Os sacrifícios pelos pecados por ignorância de qualquer pessoa"
  },
  "lv5.1-13": {
    id: "lv5.1-13",
    referencia: "Lv 5.1-13",
    livro: "Levítico",
    capitulo: 5,
    vIni: 1,
    vFim: 13,
    titulo: "O sacrifício pelos pecados ocultos"
  },
  "lv5.14-16": {
    id: "lv5.14-16",
    referencia: "Lv 5.14-16",
    livro: "Levítico",
    capitulo: 5,
    vIni: 14,
    vFim: 16,
    titulo: "O sacrifício pelo sacrilégio"
  },
  "lv5.17-19": {
    id: "lv5.17-19",
    referencia: "Lv 5.17-19",
    livro: "Levítico",
    capitulo: 5,
    vIni: 17,
    vFim: 19,
    titulo: "O sacrifício pelos pecados de ignorância"
  },
  "lv6.1-7": {
    id: "lv6.1-7",
    referencia: "Lv 6.1-7",
    livro: "Levítico",
    capitulo: 6,
    vIni: 1,
    vFim: 7,
    titulo: "O sacrifício pelos pecados voluntários"
  },
  "lv6.8-13": {
    id: "lv6.8-13",
    referencia: "Lv 6.8-13",
    livro: "Levítico",
    capitulo: 6,
    vIni: 8,
    vFim: 13,
    titulo: "A lei do holocausto"
  },
  "lv6.14-18": {
    id: "lv6.14-18",
    referencia: "Lv 6.14-18",
    livro: "Levítico",
    capitulo: 6,
    vIni: 14,
    vFim: 18,
    titulo: "A lei da oferta de manjares"
  },
  "lv6.19-23": {
    id: "lv6.19-23",
    referencia: "Lv 6.19-23",
    livro: "Levítico",
    capitulo: 6,
    vIni: 19,
    vFim: 23,
    titulo: "A oferta na consagração dos sacerdotes"
  },
  "lv6.24-30": {
    id: "lv6.24-30",
    referencia: "Lv 6.24-30",
    livro: "Levítico",
    capitulo: 6,
    vIni: 24,
    vFim: 30,
    titulo: "A lei da oferta pelo pecado"
  },
  "lv7.1-10": {
    id: "lv7.1-10",
    referencia: "Lv 7.1-10",
    livro: "Levítico",
    capitulo: 7,
    vIni: 1,
    vFim: 10,
    titulo: "A lei da oferta pela culpa"
  },
  "lv7.11-21": {
    id: "lv7.11-21",
    referencia: "Lv 7.11-21",
    livro: "Levítico",
    capitulo: 7,
    vIni: 11,
    vFim: 21,
    titulo: "A lei das ofertas pacíficas"
  },
  "lv7.22-27": {
    id: "lv7.22-27",
    referencia: "Lv 7.22-27",
    livro: "Levítico",
    capitulo: 7,
    vIni: 22,
    vFim: 27,
    titulo: "Deus proíbe comer gordura e sangue"
  },
  "lv7.28-38": {
    id: "lv7.28-38",
    referencia: "Lv 7.28-38",
    livro: "Levítico",
    capitulo: 7,
    vIni: 28,
    vFim: 38,
    titulo: "A porção dos sacerdotes"
  },
  "lv8.1-36": {
    id: "lv8.1-36",
    referencia: "Lv 8.1-36",
    livro: "Levítico",
    capitulo: 8,
    vIni: 1,
    vFim: 36,
    titulo: "A consagração de Arão e de seus filhos"
  },
  "lv9.1-24": {
    id: "lv9.1-24",
    referencia: "Lv 9.1-24",
    livro: "Levítico",
    capitulo: 9,
    vIni: 1,
    vFim: 24,
    titulo: "Arão oferece sacrifícios por si e pelo povo"
  },
  "lv10.1-7": {
    id: "lv10.1-7",
    referencia: "Lv 10.1-7",
    livro: "Levítico",
    capitulo: 10,
    vIni: 1,
    vFim: 7,
    titulo: "Nadabe e Abiú morrem diante do SENHOR"
  },
  "lv10.8-20": {
    id: "lv10.8-20",
    referencia: "Lv 10.8-20",
    livro: "Levítico",
    capitulo: 10,
    vIni: 8,
    vFim: 20,
    titulo: "Deveres e porções dos sacerdotes"
  },
  "lv11.1-47": {
    id: "lv11.1-47",
    referencia: "Lv 11.1-47",
    livro: "Levítico",
    capitulo: 11,
    vIni: 1,
    vFim: 47,
    titulo: "Leis sobre os animais limpos e os imundos"
  },
  "lv12.1-8": {
    id: "lv12.1-8",
    referencia: "Lv 12.1-8",
    livro: "Levítico",
    capitulo: 12,
    vIni: 1,
    vFim: 8,
    titulo: "A purificação da mulher depois do parto"
  },
  "lv13.1-59": {
    id: "lv13.1-59",
    referencia: "Lv 13.1-59",
    livro: "Levítico",
    capitulo: 13,
    vIni: 1,
    vFim: 59,
    titulo: "As leis acerca da lepra"
  },
  "lv14.1-32": {
    id: "lv14.1-32",
    referencia: "Lv 14.1-32",
    livro: "Levítico",
    capitulo: 14,
    vIni: 1,
    vFim: 32,
    titulo: "A lei acerca do leproso depois de sarado"
  },
  "lv14.33-57": {
    id: "lv14.33-57",
    referencia: "Lv 14.33-57",
    livro: "Levítico",
    capitulo: 14,
    vIni: 33,
    vFim: 57,
    titulo: "A lei acerca da lepra numa casa"
  },
  "lv15.1-33": {
    id: "lv15.1-33",
    referencia: "Lv 15.1-33",
    livro: "Levítico",
    capitulo: 15,
    vIni: 1,
    vFim: 33,
    titulo: "Imundícias do homem e da mulher"
  },
  "lv16.1-10": {
    id: "lv16.1-10",
    referencia: "Lv 16.1-10",
    livro: "Levítico",
    capitulo: 16,
    vIni: 1,
    vFim: 10,
    titulo: "O Dia da Expiação"
  },
  "lv16.11-14": {
    id: "lv16.11-14",
    referencia: "Lv 16.11-14",
    livro: "Levítico",
    capitulo: 16,
    vIni: 11,
    vFim: 14,
    titulo: "O sacrifício pelo próprio sumo sacerdote"
  },
  "lv16.15-28": {
    id: "lv16.15-28",
    referencia: "Lv 16.15-28",
    livro: "Levítico",
    capitulo: 16,
    vIni: 15,
    vFim: 28,
    titulo: "O sacrifício pelo povo"
  },
  "lv16.29-34": {
    id: "lv16.29-34",
    referencia: "Lv 16.29-34",
    livro: "Levítico",
    capitulo: 16,
    vIni: 29,
    vFim: 34,
    titulo: "A Festa anual das Expiações"
  },
  "lv17.1-9": {
    id: "lv17.1-9",
    referencia: "Lv 17.1-9",
    livro: "Levítico",
    capitulo: 17,
    vIni: 1,
    vFim: 9,
    titulo: "Leis referentes à matança dos animais"
  },
  "lv17.10-16": {
    id: "lv17.10-16",
    referencia: "Lv 17.10-16",
    livro: "Levítico",
    capitulo: 17,
    vIni: 10,
    vFim: 16,
    titulo: "A proibição de comer sangue"
  },
  "lv18.1-18": {
    id: "lv18.1-18",
    referencia: "Lv 18.1-18",
    livro: "Levítico",
    capitulo: 18,
    vIni: 1,
    vFim: 18,
    titulo: "Casamentos ilícitos"
  },
  "lv18.19-30": {
    id: "lv18.19-30",
    referencia: "Lv 18.19-30",
    livro: "Levítico",
    capitulo: 18,
    vIni: 19,
    vFim: 30,
    titulo: "Uniões abomináveis"
  },
  "lv19.1-34": {
    id: "lv19.1-34",
    referencia: "Lv 19.1-34",
    livro: "Levítico",
    capitulo: 19,
    vIni: 1,
    vFim: 34,
    titulo: "A repetição de diversas leis"
  },
  "lv19.35-37": {
    id: "lv19.35-37",
    referencia: "Lv 19.35-37",
    livro: "Levítico",
    capitulo: 19,
    vIni: 35,
    vFim: 37,
    titulo: "Pesos e medidas justos"
  },
  "lv20.1-27": {
    id: "lv20.1-27",
    referencia: "Lv 20.1-27",
    livro: "Levítico",
    capitulo: 20,
    vIni: 1,
    vFim: 27,
    titulo: "As penas de diversos crimes"
  },
  "lv21.1-24": {
    id: "lv21.1-24",
    referencia: "Lv 21.1-24",
    livro: "Levítico",
    capitulo: 21,
    vIni: 1,
    vFim: 24,
    titulo: "Leis para os sacerdotes"
  },
  "lv22.1-16": {
    id: "lv22.1-16",
    referencia: "Lv 22.1-16",
    livro: "Levítico",
    capitulo: 22,
    vIni: 1,
    vFim: 16,
    titulo: "A lei acerca de comer coisas santas"
  },
  "lv22.17-33": {
    id: "lv22.17-33",
    referencia: "Lv 22.17-33",
    livro: "Levítico",
    capitulo: 22,
    vIni: 17,
    vFim: 33,
    titulo: "Os animais sacrificados devem ser sem defeito"
  },
  "lv23.1-2": {
    id: "lv23.1-2",
    referencia: "Lv 23.1-2",
    livro: "Levítico",
    capitulo: 23,
    vIni: 1,
    vFim: 2,
    titulo: "As festas solenes do SENHOR"
  },
  "lv23.3": {
    id: "lv23.3",
    referencia: "Lv 23.3",
    livro: "Levítico",
    capitulo: 23,
    vIni: 3,
    vFim: 3,
    titulo: "O Sábado"
  },
  "lv23.4-8": {
    id: "lv23.4-8",
    referencia: "Lv 23.4-8",
    livro: "Levítico",
    capitulo: 23,
    vIni: 4,
    vFim: 8,
    titulo: "A Páscoa"
  },
  "lv23.9-14": {
    id: "lv23.9-14",
    referencia: "Lv 23.9-14",
    livro: "Levítico",
    capitulo: 23,
    vIni: 9,
    vFim: 14,
    titulo: "As Primícias"
  },
  "lv23.15-25": {
    id: "lv23.15-25",
    referencia: "Lv 23.15-25",
    livro: "Levítico",
    capitulo: 23,
    vIni: 15,
    vFim: 25,
    titulo: "O Pentecostes"
  },
  "lv23.26-32": {
    id: "lv23.26-32",
    referencia: "Lv 23.26-32",
    livro: "Levítico",
    capitulo: 23,
    vIni: 26,
    vFim: 32,
    titulo: "O Dia da Expiação"
  },
  "lv23.33-44": {
    id: "lv23.33-44",
    referencia: "Lv 23.33-44",
    livro: "Levítico",
    capitulo: 23,
    vIni: 33,
    vFim: 44,
    titulo: "A Festa dos Tabernáculos"
  },
  "lv24.1-4": {
    id: "lv24.1-4",
    referencia: "Lv 24.1-4",
    livro: "Levítico",
    capitulo: 24,
    vIni: 1,
    vFim: 4,
    titulo: "O azeite para o candelabro"
  },
  "lv24.5-9": {
    id: "lv24.5-9",
    referencia: "Lv 24.5-9",
    livro: "Levítico",
    capitulo: 24,
    vIni: 5,
    vFim: 9,
    titulo: "O pão para a mesa do SENHOR"
  },
  "lv24.10-23": {
    id: "lv24.10-23",
    referencia: "Lv 24.10-23",
    livro: "Levítico",
    capitulo: 24,
    vIni: 10,
    vFim: 23,
    titulo: "A pena do pecado de blasfêmia"
  },
  "lv25.1-7": {
    id: "lv25.1-7",
    referencia: "Lv 25.1-7",
    livro: "Levítico",
    capitulo: 25,
    vIni: 1,
    vFim: 7,
    titulo: "O Ano de Descanso"
  },
  "lv25.8-34": {
    id: "lv25.8-34",
    referencia: "Lv 25.8-34",
    livro: "Levítico",
    capitulo: 25,
    vIni: 8,
    vFim: 34,
    titulo: "O Ano do Jubileu"
  },
  "lv25.35-38": {
    id: "lv25.35-38",
    referencia: "Lv 25.35-38",
    livro: "Levítico",
    capitulo: 25,
    vIni: 35,
    vFim: 38,
    titulo: "Leis a favor dos pobres"
  },
  "lv25.39-55": {
    id: "lv25.39-55",
    referencia: "Lv 25.39-55",
    livro: "Levítico",
    capitulo: 25,
    vIni: 39,
    vFim: 55,
    titulo: "Leis a favor dos escravos"
  },
  "lv26.1-2": {
    id: "lv26.1-2",
    referencia: "Lv 26.1-2",
    livro: "Levítico",
    capitulo: 26,
    vIni: 1,
    vFim: 2,
    titulo: "Admoestação contra a idolatria"
  },
  "lv26.3-13": {
    id: "lv26.3-13",
    referencia: "Lv 26.3-13",
    livro: "Levítico",
    capitulo: 26,
    vIni: 3,
    vFim: 13,
    titulo: "Bênçãos decorrentes da obediência"
  },
  "lv26.14-46": {
    id: "lv26.14-46",
    referencia: "Lv 26.14-46",
    livro: "Levítico",
    capitulo: 26,
    vIni: 14,
    vFim: 46,
    titulo: "Os castigos da desobediência"
  },
  "lv27.1-15": {
    id: "lv27.1-15",
    referencia: "Lv 27.1-15",
    livro: "Levítico",
    capitulo: 27,
    vIni: 1,
    vFim: 15,
    titulo: "Votos particulares e a avaliação deles"
  },
  "lv27.16-27": {
    id: "lv27.16-27",
    referencia: "Lv 27.16-27",
    livro: "Levítico",
    capitulo: 27,
    vIni: 16,
    vFim: 27,
    titulo: "Voto de um campo e o resgate dele"
  },
  "lv27.28-29": {
    id: "lv27.28-29",
    referencia: "Lv 27.28-29",
    livro: "Levítico",
    capitulo: 27,
    vIni: 28,
    vFim: 29,
    titulo: "Não há resgate para certas coisas consagradas"
  },
  "lv27.30-34": {
    id: "lv27.30-34",
    referencia: "Lv 27.30-34",
    livro: "Levítico",
    capitulo: 27,
    vIni: 30,
    vFim: 34,
    titulo: "Sobre as dízimas"
  },
  "nm1.1-46": {
    id: "nm1.1-46",
    referencia: "Nm 1.1-46",
    livro: "Números",
    capitulo: 1,
    vIni: 1,
    vFim: 46,
    titulo: "Deus manda Moisés levantar o censo de Israel"
  },
  "nm1.47-54": {
    id: "nm1.47-54",
    referencia: "Nm 1.47-54",
    livro: "Números",
    capitulo: 1,
    vIni: 47,
    vFim: 54,
    titulo: "Os levitas não são contados"
  },
  "nm2.1-34": {
    id: "nm2.1-34",
    referencia: "Nm 2.1-34",
    livro: "Números",
    capitulo: 2,
    vIni: 1,
    vFim: 34,
    titulo: "A ordem das tribos no acampamento"
  },
  "nm3.1-39": {
    id: "nm3.1-39",
    referencia: "Nm 3.1-39",
    livro: "Números",
    capitulo: 3,
    vIni: 1,
    vFim: 39,
    titulo: "Número e ofício dos levitas"
  },
  "nm3.40-51": {
    id: "nm3.40-51",
    referencia: "Nm 3.40-51",
    livro: "Números",
    capitulo: 3,
    vIni: 40,
    vFim: 51,
    titulo: "O resgate dos primogênitos"
  },
  "nm4.1-20": {
    id: "nm4.1-20",
    referencia: "Nm 4.1-20",
    livro: "Números",
    capitulo: 4,
    vIni: 1,
    vFim: 20,
    titulo: "Deveres dos coatitas"
  },
  "nm4.21-28": {
    id: "nm4.21-28",
    referencia: "Nm 4.21-28",
    livro: "Números",
    capitulo: 4,
    vIni: 21,
    vFim: 28,
    titulo: "Deveres dos gersonitas"
  },
  "nm4.29-33": {
    id: "nm4.29-33",
    referencia: "Nm 4.29-33",
    livro: "Números",
    capitulo: 4,
    vIni: 29,
    vFim: 33,
    titulo: "Deveres dos filhos de Merari"
  },
  "nm4.34-37": {
    id: "nm4.34-37",
    referencia: "Nm 4.34-37",
    livro: "Números",
    capitulo: 4,
    vIni: 34,
    vFim: 37,
    titulo: "Número dos coatitas"
  },
  "nm4.38-41": {
    id: "nm4.38-41",
    referencia: "Nm 4.38-41",
    livro: "Números",
    capitulo: 4,
    vIni: 38,
    vFim: 41,
    titulo: "Número dos filhos de Gérson"
  },
  "nm4.42-45": {
    id: "nm4.42-45",
    referencia: "Nm 4.42-45",
    livro: "Números",
    capitulo: 4,
    vIni: 42,
    vFim: 45,
    titulo: "Número dos filhos de Merari"
  },
  "nm4.46-49": {
    id: "nm4.46-49",
    referencia: "Nm 4.46-49",
    livro: "Números",
    capitulo: 4,
    vIni: 46,
    vFim: 49,
    titulo: "Número de todos os levitas"
  },
  "nm5.1-4": {
    id: "nm5.1-4",
    referencia: "Nm 5.1-4",
    livro: "Números",
    capitulo: 5,
    vIni: 1,
    vFim: 4,
    titulo: "O leproso e o imundo são lançados fora do arraial"
  },
  "nm5.5-10": {
    id: "nm5.5-10",
    referencia: "Nm 5.5-10",
    livro: "Números",
    capitulo: 5,
    vIni: 5,
    vFim: 10,
    titulo: "A lei da restituição"
  },
  "nm5.11-31": {
    id: "nm5.11-31",
    referencia: "Nm 5.11-31",
    livro: "Números",
    capitulo: 5,
    vIni: 11,
    vFim: 31,
    titulo: "A prova da mulher suspeita de adultério"
  },
  "nm6.1-21": {
    id: "nm6.1-21",
    referencia: "Nm 6.1-21",
    livro: "Números",
    capitulo: 6,
    vIni: 1,
    vFim: 21,
    titulo: "A lei do nazireado"
  },
  "nm6.22-27": {
    id: "nm6.22-27",
    referencia: "Nm 6.22-27",
    livro: "Números",
    capitulo: 6,
    vIni: 22,
    vFim: 27,
    titulo: "A bênção sacerdotal"
  },
  "nm7.1-89": {
    id: "nm7.1-89",
    referencia: "Nm 7.1-89",
    livro: "Números",
    capitulo: 7,
    vIni: 1,
    vFim: 89,
    titulo: "As ofertas dos príncipes na dedicação do altar"
  },
  "nm8.1-4": {
    id: "nm8.1-4",
    referencia: "Nm 8.1-4",
    livro: "Números",
    capitulo: 8,
    vIni: 1,
    vFim: 4,
    titulo: "As sete lâmpadas do santuário"
  },
  "nm8.5-26": {
    id: "nm8.5-26",
    referencia: "Nm 8.5-26",
    livro: "Números",
    capitulo: 8,
    vIni: 5,
    vFim: 26,
    titulo: "A consagração dos levitas"
  },
  "nm9.1-14": {
    id: "nm9.1-14",
    referencia: "Nm 9.1-14",
    livro: "Números",
    capitulo: 9,
    vIni: 1,
    vFim: 14,
    titulo: "A celebração da Páscoa"
  },
  "nm9.15-23": {
    id: "nm9.15-23",
    referencia: "Nm 9.15-23",
    livro: "Números",
    capitulo: 9,
    vIni: 15,
    vFim: 23,
    titulo: "A nuvem sobre o tabernáculo"
  },
  "nm10.1-10": {
    id: "nm10.1-10",
    referencia: "Nm 10.1-10",
    livro: "Números",
    capitulo: 10,
    vIni: 1,
    vFim: 10,
    titulo: "As duas trombetas de prata"
  },
  "nm10.11-28": {
    id: "nm10.11-28",
    referencia: "Nm 10.11-28",
    livro: "Números",
    capitulo: 10,
    vIni: 11,
    vFim: 28,
    titulo: "Os israelitas partem do Sinai"
  },
  "nm10.29-36": {
    id: "nm10.29-36",
    referencia: "Nm 10.29-36",
    livro: "Números",
    capitulo: 10,
    vIni: 29,
    vFim: 36,
    titulo: "Moisés roga a Hobabe que vá com eles"
  },
  "nm11.1-9": {
    id: "nm11.1-9",
    referencia: "Nm 11.1-9",
    livro: "Números",
    capitulo: 11,
    vIni: 1,
    vFim: 9,
    titulo: "As murmurações dos israelitas"
  },
  "nm11.10-15": {
    id: "nm11.10-15",
    referencia: "Nm 11.10-15",
    livro: "Números",
    capitulo: 11,
    vIni: 10,
    vFim: 15,
    titulo: "Moisés acha pesado o seu cargo"
  },
  "nm11.16-30": {
    id: "nm11.16-30",
    referencia: "Nm 11.16-30",
    livro: "Números",
    capitulo: 11,
    vIni: 16,
    vFim: 30,
    titulo: "Deus designa setenta anciãos para ajudarem Moisés"
  },
  "nm11.31-35": {
    id: "nm11.31-35",
    referencia: "Nm 11.31-35",
    livro: "Números",
    capitulo: 11,
    vIni: 31,
    vFim: 35,
    titulo: "Deus manda codornizes"
  },
  "nm12.1-16": {
    id: "nm12.1-16",
    referencia: "Nm 12.1-16",
    livro: "Números",
    capitulo: 12,
    vIni: 1,
    vFim: 16,
    titulo: "A sedição de Miriã e Arão"
  },
  "nm13.1-24": {
    id: "nm13.1-24",
    referencia: "Nm 13.1-24",
    livro: "Números",
    capitulo: 13,
    vIni: 1,
    vFim: 24,
    titulo: "Doze homens são enviados para espiar a terra de Canaã"
  },
  "nm13.25-33": {
    id: "nm13.25-33",
    referencia: "Nm 13.25-33",
    livro: "Números",
    capitulo: 13,
    vIni: 25,
    vFim: 33,
    titulo: "O relatório dos espias recebido com incredulidade"
  },
  "nm14.1-12": {
    id: "nm14.1-12",
    referencia: "Nm 14.1-12",
    livro: "Números",
    capitulo: 14,
    vIni: 1,
    vFim: 12,
    titulo: "Sedição do povo"
  },
  "nm14.13-19": {
    id: "nm14.13-19",
    referencia: "Nm 14.13-19",
    livro: "Números",
    capitulo: 14,
    vIni: 13,
    vFim: 19,
    titulo: "Moisés intercede pelo povo"
  },
  "nm14.20-38": {
    id: "nm14.20-38",
    referencia: "Nm 14.20-38",
    livro: "Números",
    capitulo: 14,
    vIni: 20,
    vFim: 38,
    titulo: "O castigo dado por Deus"
  },
  "nm14.39-45": {
    id: "nm14.39-45",
    referencia: "Nm 14.39-45",
    livro: "Números",
    capitulo: 14,
    vIni: 39,
    vFim: 45,
    titulo: "O povo derrotado em Horma"
  },
  "nm15.1-21": {
    id: "nm15.1-21",
    referencia: "Nm 15.1-21",
    livro: "Números",
    capitulo: 15,
    vIni: 1,
    vFim: 21,
    titulo: "Leis a respeito de ofertas"
  },
  "nm15.22-31": {
    id: "nm15.22-31",
    referencia: "Nm 15.22-31",
    livro: "Números",
    capitulo: 15,
    vIni: 22,
    vFim: 31,
    titulo: "Os sacrifícios pelos pecados por ignorância"
  },
  "nm15.32-36": {
    id: "nm15.32-36",
    referencia: "Nm 15.32-36",
    livro: "Números",
    capitulo: 15,
    vIni: 32,
    vFim: 36,
    titulo: "Castigo pela violação do sábado"
  },
  "nm15.37-41": {
    id: "nm15.37-41",
    referencia: "Nm 15.37-41",
    livro: "Números",
    capitulo: 15,
    vIni: 37,
    vFim: 41,
    titulo: "A lei acerca das borlas das vestes"
  },
  "nm16.1-19": {
    id: "nm16.1-19",
    referencia: "Nm 16.1-19",
    livro: "Números",
    capitulo: 16,
    vIni: 1,
    vFim: 19,
    titulo: "A rebelião de Corá, Datã e Abirão"
  },
  "nm16.20-40": {
    id: "nm16.20-40",
    referencia: "Nm 16.20-40",
    livro: "Números",
    capitulo: 16,
    vIni: 20,
    vFim: 40,
    titulo: "Os rebeldes castigados"
  },
  "nm16.41-50": {
    id: "nm16.41-50",
    referencia: "Nm 16.41-50",
    livro: "Números",
    capitulo: 16,
    vIni: 41,
    vFim: 50,
    titulo: "Novo tumulto e seu castigo"
  },
  "nm17.1-13": {
    id: "nm17.1-13",
    referencia: "Nm 17.1-13",
    livro: "Números",
    capitulo: 17,
    vIni: 1,
    vFim: 13,
    titulo: "O bordão de Arão floresce"
  },
  "nm18.1-20": {
    id: "nm18.1-20",
    referencia: "Nm 18.1-20",
    livro: "Números",
    capitulo: 18,
    vIni: 1,
    vFim: 20,
    titulo: "Deveres e direitos dos sacerdotes"
  },
  "nm18.21-32": {
    id: "nm18.21-32",
    referencia: "Nm 18.21-32",
    livro: "Números",
    capitulo: 18,
    vIni: 21,
    vFim: 32,
    titulo: "Os dízimos e os levitas"
  },
  "nm19.1-22": {
    id: "nm19.1-22",
    referencia: "Nm 19.1-22",
    livro: "Números",
    capitulo: 19,
    vIni: 1,
    vFim: 22,
    titulo: "A água purificadora"
  },
  "nm20.1": {
    id: "nm20.1",
    referencia: "Nm 20.1",
    livro: "Números",
    capitulo: 20,
    vIni: 1,
    vFim: 1,
    titulo: "A morte de Miriã"
  },
  "nm20.2-13": {
    id: "nm20.2-13",
    referencia: "Nm 20.2-13",
    livro: "Números",
    capitulo: 20,
    vIni: 2,
    vFim: 13,
    titulo: "Moisés fere a rocha em Meribá"
  },
  "nm20.14-21": {
    id: "nm20.14-21",
    referencia: "Nm 20.14-21",
    livro: "Números",
    capitulo: 20,
    vIni: 14,
    vFim: 21,
    titulo: "Moisés solicita passagem por Edom"
  },
  "nm20.22-29": {
    id: "nm20.22-29",
    referencia: "Nm 20.22-29",
    livro: "Números",
    capitulo: 20,
    vIni: 22,
    vFim: 29,
    titulo: "A morte de Arão"
  },
  "nm21.1-3": {
    id: "nm21.1-3",
    referencia: "Nm 21.1-3",
    livro: "Números",
    capitulo: 21,
    vIni: 1,
    vFim: 3,
    titulo: "Derrota do rei de Arade"
  },
  "nm21.4-9": {
    id: "nm21.4-9",
    referencia: "Nm 21.4-9",
    livro: "Números",
    capitulo: 21,
    vIni: 4,
    vFim: 9,
    titulo: "A serpente de bronze"
  },
  "nm21.10-20": {
    id: "nm21.10-20",
    referencia: "Nm 21.10-20",
    livro: "Números",
    capitulo: 21,
    vIni: 10,
    vFim: 20,
    titulo: "Jornadas dos israelitas"
  },
  "nm21.21-30": {
    id: "nm21.21-30",
    referencia: "Nm 21.21-30",
    livro: "Números",
    capitulo: 21,
    vIni: 21,
    vFim: 30,
    titulo: "Vitória sobre Seom, rei de Hesbom"
  },
  "nm21.31-35": {
    id: "nm21.31-35",
    referencia: "Nm 21.31-35",
    livro: "Números",
    capitulo: 21,
    vIni: 31,
    vFim: 35,
    titulo: "Vitória sobre Ogue, rei de Basã"
  },
  "nm22.1-20": {
    id: "nm22.1-20",
    referencia: "Nm 22.1-20",
    livro: "Números",
    capitulo: 22,
    vIni: 1,
    vFim: 20,
    titulo: "Balaque envia mensageiros a Balaão"
  },
  "nm22.21-41": {
    id: "nm22.21-41",
    referencia: "Nm 22.21-41",
    livro: "Números",
    capitulo: 22,
    vIni: 21,
    vFim: 41,
    titulo: "O Anjo do SENHOR e a jumenta de Balaão"
  },
  "nm23.1-12": {
    id: "nm23.1-12",
    referencia: "Nm 23.1-12",
    livro: "Números",
    capitulo: 23,
    vIni: 1,
    vFim: 12,
    titulo: "Balaão abençoa a Israel pela primeira vez"
  },
  "nm23.13-30": {
    id: "nm23.13-30",
    referencia: "Nm 23.13-30",
    livro: "Números",
    capitulo: 23,
    vIni: 13,
    vFim: 30,
    titulo: "Balaão abençoa a Israel pela segunda vez"
  },
  "nm24.1-14": {
    id: "nm24.1-14",
    referencia: "Nm 24.1-14",
    livro: "Números",
    capitulo: 24,
    vIni: 1,
    vFim: 14,
    titulo: "Balaão abençoa a Israel pela terceira vez"
  },
  "nm24.15-25": {
    id: "nm24.15-25",
    referencia: "Nm 24.15-25",
    livro: "Números",
    capitulo: 24,
    vIni: 15,
    vFim: 25,
    titulo: "A profecia de Balaão. A estrela de Jacó"
  },
  "nm25.1-18": {
    id: "nm25.1-18",
    referencia: "Nm 25.1-18",
    livro: "Números",
    capitulo: 25,
    vIni: 1,
    vFim: 18,
    titulo: "A adoração a Baal-Peor e o zelo de Fineias"
  },
  "nm26.1-51": {
    id: "nm26.1-51",
    referencia: "Nm 26.1-51",
    livro: "Números",
    capitulo: 26,
    vIni: 1,
    vFim: 51,
    titulo: "O censo de todos os israelitas"
  },
  "nm26.52-56": {
    id: "nm26.52-56",
    referencia: "Nm 26.52-56",
    livro: "Números",
    capitulo: 26,
    vIni: 52,
    vFim: 56,
    titulo: "A lei acerca da divisão da terra"
  },
  "nm26.57-65": {
    id: "nm26.57-65",
    referencia: "Nm 26.57-65",
    livro: "Números",
    capitulo: 26,
    vIni: 57,
    vFim: 65,
    titulo: "O censo dos levitas"
  },
  "nm27.1-11": {
    id: "nm27.1-11",
    referencia: "Nm 27.1-11",
    livro: "Números",
    capitulo: 27,
    vIni: 1,
    vFim: 11,
    titulo: "A lei acerca dos direitos de filhas herdeiras. As filhas de Zelofeade"
  },
  "nm27.12-17": {
    id: "nm27.12-17",
    referencia: "Nm 27.12-17",
    livro: "Números",
    capitulo: 27,
    vIni: 12,
    vFim: 17,
    titulo: "Deus prediz a morte de Moisés"
  },
  "nm27.18-23": {
    id: "nm27.18-23",
    referencia: "Nm 27.18-23",
    livro: "Números",
    capitulo: 27,
    vIni: 18,
    vFim: 23,
    titulo: "Josué designado sucessor de Moisés"
  },
  "nm28.1-31": {
    id: "nm28.1-31",
    referencia: "Nm 28.1-31",
    livro: "Números",
    capitulo: 28,
    vIni: 1,
    vFim: 31,
    titulo: "Ofertas contínuas"
  },
  "nm29.1-40": {
    id: "nm29.1-40",
    referencia: "Nm 29.1-40",
    livro: "Números",
    capitulo: 29,
    vIni: 1,
    vFim: 40,
    titulo: "Ofertas nas outras festas solenes"
  },
  "nm30.1-16": {
    id: "nm30.1-16",
    referencia: "Nm 30.1-16",
    livro: "Números",
    capitulo: 30,
    vIni: 1,
    vFim: 16,
    titulo: "Acerca de votos"
  },
  "nm31.1-12": {
    id: "nm31.1-12",
    referencia: "Nm 31.1-12",
    livro: "Números",
    capitulo: 31,
    vIni: 1,
    vFim: 12,
    titulo: "A vitória sobre os midianitas"
  },
  "nm31.13-18": {
    id: "nm31.13-18",
    referencia: "Nm 31.13-18",
    livro: "Números",
    capitulo: 31,
    vIni: 13,
    vFim: 18,
    titulo: "O tratamento dos cativos"
  },
  "nm31.19-24": {
    id: "nm31.19-24",
    referencia: "Nm 31.19-24",
    livro: "Números",
    capitulo: 31,
    vIni: 19,
    vFim: 24,
    titulo: "A purificação dos soldados e da presa"
  },
  "nm31.25-47": {
    id: "nm31.25-47",
    referencia: "Nm 31.25-47",
    livro: "Números",
    capitulo: 31,
    vIni: 25,
    vFim: 47,
    titulo: "A divisão da presa"
  },
  "nm31.48-54": {
    id: "nm31.48-54",
    referencia: "Nm 31.48-54",
    livro: "Números",
    capitulo: 31,
    vIni: 48,
    vFim: 54,
    titulo: "A oferta voluntária dos capitães"
  },
  "nm32.1-32": {
    id: "nm32.1-32",
    referencia: "Nm 32.1-32",
    livro: "Números",
    capitulo: 32,
    vIni: 1,
    vFim: 32,
    titulo: "Duas tribos e meia desejam habitar na Transjordânia"
  },
  "nm32.33-42": {
    id: "nm32.33-42",
    referencia: "Nm 32.33-42",
    livro: "Números",
    capitulo: 32,
    vIni: 33,
    vFim: 42,
    titulo: "Distribuição da Transjordânia"
  },
  "nm33.1-37": {
    id: "nm33.1-37",
    referencia: "Nm 33.1-37",
    livro: "Números",
    capitulo: 33,
    vIni: 1,
    vFim: 37,
    titulo: "Os acampamentos desde o Egito"
  },
  "nm33.38-49": {
    id: "nm33.38-49",
    referencia: "Nm 33.38-49",
    livro: "Números",
    capitulo: 33,
    vIni: 38,
    vFim: 49,
    titulo: "A morte de Arão"
  },
  "nm33.50-56": {
    id: "nm33.50-56",
    referencia: "Nm 33.50-56",
    livro: "Números",
    capitulo: 33,
    vIni: 50,
    vFim: 56,
    titulo: "Deus manda lançar fora os moradores de Canaã"
  },
  "nm34.1-15": {
    id: "nm34.1-15",
    referencia: "Nm 34.1-15",
    livro: "Números",
    capitulo: 34,
    vIni: 1,
    vFim: 15,
    titulo: "Os confins da terra"
  },
  "nm34.16-29": {
    id: "nm34.16-29",
    referencia: "Nm 34.16-29",
    livro: "Números",
    capitulo: 34,
    vIni: 16,
    vFim: 29,
    titulo: "Os homens que devem repartir a terra"
  },
  "nm35.1-8": {
    id: "nm35.1-8",
    referencia: "Nm 35.1-8",
    livro: "Números",
    capitulo: 35,
    vIni: 1,
    vFim: 8,
    titulo: "As cidades dos levitas"
  },
  "nm35.9-15": {
    id: "nm35.9-15",
    referencia: "Nm 35.9-15",
    livro: "Números",
    capitulo: 35,
    vIni: 9,
    vFim: 15,
    titulo: "Seis cidades de refúgio"
  },
  "nm35.16-21": {
    id: "nm35.16-21",
    referencia: "Nm 35.16-21",
    livro: "Números",
    capitulo: 35,
    vIni: 16,
    vFim: 21,
    titulo: "Execução do homicida"
  },
  "nm35.22-34": {
    id: "nm35.22-34",
    referencia: "Nm 35.22-34",
    livro: "Números",
    capitulo: 35,
    vIni: 22,
    vFim: 34,
    titulo: "Privilégios oferecidos pelas cidades de refúgio"
  },
  "nm36.1-13": {
    id: "nm36.1-13",
    referencia: "Nm 36.1-13",
    livro: "Números",
    capitulo: 36,
    vIni: 1,
    vFim: 13,
    titulo: "Casamento de herdeiras"
  },
  "dt1.1-8": {
    id: "dt1.1-8",
    referencia: "Dt 1.1-8",
    livro: "Deuteronômio",
    capitulo: 1,
    vIni: 1,
    vFim: 8,
    titulo: "O Primeiro Discurso de Moisés na Planície do Jordão Moisés conta a história de Israel"
  },
  "dt1.9-18": {
    id: "dt1.9-18",
    referencia: "Dt 1.9-18",
    livro: "Deuteronômio",
    capitulo: 1,
    vIni: 9,
    vFim: 18,
    titulo: "A nomeação de auxiliares"
  },
  "dt1.19-25": {
    id: "dt1.19-25",
    referencia: "Dt 1.19-25",
    livro: "Deuteronômio",
    capitulo: 1,
    vIni: 19,
    vFim: 25,
    titulo: "Doze homens foram enviados para espiar a terra de Canaã"
  },
  "dt1.26-33": {
    id: "dt1.26-33",
    referencia: "Dt 1.26-33",
    livro: "Deuteronômio",
    capitulo: 1,
    vIni: 26,
    vFim: 33,
    titulo: "O relatório dos espias recebido com incredulidade"
  },
  "dt1.34-40": {
    id: "dt1.34-40",
    referencia: "Dt 1.34-40",
    livro: "Deuteronômio",
    capitulo: 1,
    vIni: 34,
    vFim: 40,
    titulo: "O castigo de Deus"
  },
  "dt1.41-46": {
    id: "dt1.41-46",
    referencia: "Dt 1.41-46",
    livro: "Deuteronômio",
    capitulo: 1,
    vIni: 41,
    vFim: 46,
    titulo: "O povo derrotado em Horma"
  },
  "dt2.1-15": {
    id: "dt2.1-15",
    referencia: "Dt 2.1-15",
    livro: "Deuteronômio",
    capitulo: 2,
    vIni: 1,
    vFim: 15,
    titulo: "A jornada de Cades até Zerede"
  },
  "dt2.16-25": {
    id: "dt2.16-25",
    referencia: "Dt 2.16-25",
    livro: "Deuteronômio",
    capitulo: 2,
    vIni: 16,
    vFim: 25,
    titulo: "A travessia de Ar e Arnom"
  },
  "dt2.26-37": {
    id: "dt2.26-37",
    referencia: "Dt 2.26-37",
    livro: "Deuteronômio",
    capitulo: 2,
    vIni: 26,
    vFim: 37,
    titulo: "Vitória sobre Seom, rei de Hesbom"
  },
  "dt3.1-11": {
    id: "dt3.1-11",
    referencia: "Dt 3.1-11",
    livro: "Deuteronômio",
    capitulo: 3,
    vIni: 1,
    vFim: 11,
    titulo: "Vitória sobre Ogue, rei de Basã"
  },
  "dt3.12-22": {
    id: "dt3.12-22",
    referencia: "Dt 3.12-22",
    livro: "Deuteronômio",
    capitulo: 3,
    vIni: 12,
    vFim: 22,
    titulo: "Distribuição da Transjordânia"
  },
  "dt3.23-29": {
    id: "dt3.23-29",
    referencia: "Dt 3.23-29",
    livro: "Deuteronômio",
    capitulo: 3,
    vIni: 23,
    vFim: 29,
    titulo: "A oração de Moisés para entrar em Canaã"
  },
  "dt4.1-40": {
    id: "dt4.1-40",
    referencia: "Dt 4.1-40",
    livro: "Deuteronômio",
    capitulo: 4,
    vIni: 1,
    vFim: 40,
    titulo: "Moisés exorta o povo à obediência"
  },
  "dt4.41-43": {
    id: "dt4.41-43",
    referencia: "Dt 4.41-43",
    livro: "Deuteronômio",
    capitulo: 4,
    vIni: 41,
    vFim: 43,
    titulo: "Três cidades de refúgio"
  },
  "dt4.44-49": {
    id: "dt4.44-49",
    referencia: "Dt 4.44-49",
    livro: "Deuteronômio",
    capitulo: 4,
    vIni: 44,
    vFim: 49,
    titulo: "O Segundo Discurso de Moisés Moisés conta a história da legislação"
  },
  "dt5.1-21": {
    id: "dt5.1-21",
    referencia: "Dt 5.1-21",
    livro: "Deuteronômio",
    capitulo: 5,
    vIni: 1,
    vFim: 21,
    titulo: "A repetição dos dez mandamentos"
  },
  "dt5.22-33": {
    id: "dt5.22-33",
    referencia: "Dt 5.22-33",
    livro: "Deuteronômio",
    capitulo: 5,
    vIni: 22,
    vFim: 33,
    titulo: "Moisés, mediador entre Deus e o povo"
  },
  "dt6.1-25": {
    id: "dt6.1-25",
    referencia: "Dt 6.1-25",
    livro: "Deuteronômio",
    capitulo: 6,
    vIni: 1,
    vFim: 25,
    titulo: "O fim da lei é a obediência"
  },
  "dt7.1-11": {
    id: "dt7.1-11",
    referencia: "Dt 7.1-11",
    livro: "Deuteronômio",
    capitulo: 7,
    vIni: 1,
    vFim: 11,
    titulo: "Admoestações contra a infidelidade"
  },
  "dt7.12-26": {
    id: "dt7.12-26",
    referencia: "Dt 7.12-26",
    livro: "Deuteronômio",
    capitulo: 7,
    vIni: 12,
    vFim: 26,
    titulo: "Bênçãos decorrentes da obediência"
  },
  "dt9.1-5": {
    id: "dt9.1-5",
    referencia: "Dt 9.1-5",
    livro: "Deuteronômio",
    capitulo: 9,
    vIni: 1,
    vFim: 5,
    titulo: "Moisés lembra aos israelitas o socorro divino"
  },
  "dt9.6-24": {
    id: "dt9.6-24",
    referencia: "Dt 9.6-24",
    livro: "Deuteronômio",
    capitulo: 9,
    vIni: 6,
    vFim: 24,
    titulo: "As infidelidades de Israel"
  },
  "dt9.25-29": {
    id: "dt9.25-29",
    referencia: "Dt 9.25-29",
    livro: "Deuteronômio",
    capitulo: 9,
    vIni: 25,
    vFim: 29,
    titulo: "Moisés intercede pelo povo"
  },
  "dt10.1-5": {
    id: "dt10.1-5",
    referencia: "Dt 10.1-5",
    livro: "Deuteronômio",
    capitulo: 10,
    vIni: 1,
    vFim: 5,
    titulo: "As segundas tábuas da lei"
  },
  "dt10.6-11": {
    id: "dt10.6-11",
    referencia: "Dt 10.6-11",
    livro: "Deuteronômio",
    capitulo: 10,
    vIni: 6,
    vFim: 11,
    titulo: "Da vocação da tribo de Levi"
  },
  "dt10.12-22": {
    id: "dt10.12-22",
    referencia: "Dt 10.12-22",
    livro: "Deuteronômio",
    capitulo: 10,
    vIni: 12,
    vFim: 22,
    titulo: "Exortação à obediência"
  },
  "dt11.8-25": {
    id: "dt11.8-25",
    referencia: "Dt 11.8-25",
    livro: "Deuteronômio",
    capitulo: 11,
    vIni: 8,
    vFim: 25,
    titulo: "Os benefícios da obediência"
  },
  "dt11.26-32": {
    id: "dt11.26-32",
    referencia: "Dt 11.26-32",
    livro: "Deuteronômio",
    capitulo: 11,
    vIni: 26,
    vFim: 32,
    titulo: "A bênção e a maldição"
  },
  "dt12.1-14": {
    id: "dt12.1-14",
    referencia: "Dt 12.1-14",
    livro: "Deuteronômio",
    capitulo: 12,
    vIni: 1,
    vFim: 14,
    titulo: "O lugar do culto verdadeiro"
  },
  "dt12.15-32": {
    id: "dt12.15-32",
    referencia: "Dt 12.15-32",
    livro: "Deuteronômio",
    capitulo: 12,
    vIni: 15,
    vFim: 32,
    titulo: "De como comer a carne e as ofertas"
  },
  "dt13.1-18": {
    id: "dt13.1-18",
    referencia: "Dt 13.1-18",
    livro: "Deuteronômio",
    capitulo: 13,
    vIni: 1,
    vFim: 18,
    titulo: "Contra os falsos profetas e os idólatras"
  },
  "dt14.1-2": {
    id: "dt14.1-2",
    referencia: "Dt 14.1-2",
    livro: "Deuteronômio",
    capitulo: 14,
    vIni: 1,
    vFim: 2,
    titulo: "Mutilação do corpo proibida"
  },
  "dt14.3-21": {
    id: "dt14.3-21",
    referencia: "Dt 14.3-21",
    livro: "Deuteronômio",
    capitulo: 14,
    vIni: 3,
    vFim: 21,
    titulo: "Leis sobre os animais limpos e os imundos"
  },
  "dt14.22-29": {
    id: "dt14.22-29",
    referencia: "Dt 14.22-29",
    livro: "Deuteronômio",
    capitulo: 14,
    vIni: 22,
    vFim: 29,
    titulo: "Os dízimos para o serviço do SENHOR"
  },
  "dt15.1-6": {
    id: "dt15.1-6",
    referencia: "Dt 15.1-6",
    livro: "Deuteronômio",
    capitulo: 15,
    vIni: 1,
    vFim: 6,
    titulo: "O ano da remissão"
  },
  "dt15.7-11": {
    id: "dt15.7-11",
    referencia: "Dt 15.7-11",
    livro: "Deuteronômio",
    capitulo: 15,
    vIni: 7,
    vFim: 11,
    titulo: "Leis a favor dos pobres"
  },
  "dt15.12-18": {
    id: "dt15.12-18",
    referencia: "Dt 15.12-18",
    livro: "Deuteronômio",
    capitulo: 15,
    vIni: 12,
    vFim: 18,
    titulo: "Leis acerca dos servos"
  },
  "dt15.19-23": {
    id: "dt15.19-23",
    referencia: "Dt 15.19-23",
    livro: "Deuteronômio",
    capitulo: 15,
    vIni: 19,
    vFim: 23,
    titulo: "Leis acerca dos primogênitos do gado"
  },
  "dt16.1-8": {
    id: "dt16.1-8",
    referencia: "Dt 16.1-8",
    livro: "Deuteronômio",
    capitulo: 16,
    vIni: 1,
    vFim: 8,
    titulo: "As três festas dos judeus A Páscoa"
  },
  "dt16.9-12": {
    id: "dt16.9-12",
    referencia: "Dt 16.9-12",
    livro: "Deuteronômio",
    capitulo: 16,
    vIni: 9,
    vFim: 12,
    titulo: "O Pentecostes"
  },
  "dt16.13-17": {
    id: "dt16.13-17",
    referencia: "Dt 16.13-17",
    livro: "Deuteronômio",
    capitulo: 16,
    vIni: 13,
    vFim: 17,
    titulo: "Os Tabernáculos"
  },
  "dt16.18-22": {
    id: "dt16.18-22",
    referencia: "Dt 16.18-22",
    livro: "Deuteronômio",
    capitulo: 16,
    vIni: 18,
    vFim: 22,
    titulo: "Deveres dos juízes"
  },
  "dt17.1-7": {
    id: "dt17.1-7",
    referencia: "Dt 17.1-7",
    livro: "Deuteronômio",
    capitulo: 17,
    vIni: 1,
    vFim: 7,
    titulo: "O castigo da idolatria"
  },
  "dt17.8-13": {
    id: "dt17.8-13",
    referencia: "Dt 17.8-13",
    livro: "Deuteronômio",
    capitulo: 17,
    vIni: 8,
    vFim: 13,
    titulo: "Julgamento de questões difíceis"
  },
  "dt17.14-20": {
    id: "dt17.14-20",
    referencia: "Dt 17.14-20",
    livro: "Deuteronômio",
    capitulo: 17,
    vIni: 14,
    vFim: 20,
    titulo: "A eleição e os deveres de um rei"
  },
  "dt18.1-8": {
    id: "dt18.1-8",
    referencia: "Dt 18.1-8",
    livro: "Deuteronômio",
    capitulo: 18,
    vIni: 1,
    vFim: 8,
    titulo: "A herança e os direitos dos sacerdotes e dos levitas"
  },
  "dt18.9-14": {
    id: "dt18.9-14",
    referencia: "Dt 18.9-14",
    livro: "Deuteronômio",
    capitulo: 18,
    vIni: 9,
    vFim: 14,
    titulo: "Contra os adivinhos e os feiticeiros"
  },
  "dt18.15-22": {
    id: "dt18.15-22",
    referencia: "Dt 18.15-22",
    livro: "Deuteronômio",
    capitulo: 18,
    vIni: 15,
    vFim: 22,
    titulo: "A promessa do grande profeta"
  },
  "dt19.1-4": {
    id: "dt19.1-4",
    referencia: "Dt 19.1-4",
    livro: "Deuteronômio",
    capitulo: 19,
    vIni: 1,
    vFim: 4,
    titulo: "Seis cidades de refúgio"
  },
  "dt19.5-10": {
    id: "dt19.5-10",
    referencia: "Dt 19.5-10",
    livro: "Deuteronômio",
    capitulo: 19,
    vIni: 5,
    vFim: 10,
    titulo: "Privilégios oferecidos pelas cidades de refúgio"
  },
  "dt19.11-13": {
    id: "dt19.11-13",
    referencia: "Dt 19.11-13",
    livro: "Deuteronômio",
    capitulo: 19,
    vIni: 11,
    vFim: 13,
    titulo: "Execução do homicida"
  },
  "dt19.14-21": {
    id: "dt19.14-21",
    referencia: "Dt 19.14-21",
    livro: "Deuteronômio",
    capitulo: 19,
    vIni: 14,
    vFim: 21,
    titulo: "Acerca dos limites e das testemunhas"
  },
  "dt20.1-20": {
    id: "dt20.1-20",
    referencia: "Dt 20.1-20",
    livro: "Deuteronômio",
    capitulo: 20,
    vIni: 1,
    vFim: 20,
    titulo: "Acerca da guerra"
  },
  "dt21.1-9": {
    id: "dt21.1-9",
    referencia: "Dt 21.1-9",
    livro: "Deuteronômio",
    capitulo: 21,
    vIni: 1,
    vFim: 9,
    titulo: "Expiação por morte cujo autor é desconhecido"
  },
  "dt21.10-14": {
    id: "dt21.10-14",
    referencia: "Dt 21.10-14",
    livro: "Deuteronômio",
    capitulo: 21,
    vIni: 10,
    vFim: 14,
    titulo: "Acerca da mulher prisioneira"
  },
  "dt21.15-17": {
    id: "dt21.15-17",
    referencia: "Dt 21.15-17",
    livro: "Deuteronômio",
    capitulo: 21,
    vIni: 15,
    vFim: 17,
    titulo: "O direito do primogênito"
  },
  "dt21.18-21": {
    id: "dt21.18-21",
    referencia: "Dt 21.18-21",
    livro: "Deuteronômio",
    capitulo: 21,
    vIni: 18,
    vFim: 21,
    titulo: "Acerca dos filhos desobedientes"
  },
  "dt21.22-23": {
    id: "dt21.22-23",
    referencia: "Dt 21.22-23",
    livro: "Deuteronômio",
    capitulo: 21,
    vIni: 22,
    vFim: 23,
    titulo: "Os cadáveres serão tirados do patíbulo"
  },
  "dt22.1-4": {
    id: "dt22.1-4",
    referencia: "Dt 22.1-4",
    livro: "Deuteronômio",
    capitulo: 22,
    vIni: 1,
    vFim: 4,
    titulo: "Acerca do que se perdeu"
  },
  "dt22.5-11": {
    id: "dt22.5-11",
    referencia: "Dt 22.5-11",
    livro: "Deuteronômio",
    capitulo: 22,
    vIni: 5,
    vFim: 11,
    titulo: "Diversas leis"
  },
  "dt22.12": {
    id: "dt22.12",
    referencia: "Dt 22.12",
    livro: "Deuteronômio",
    capitulo: 22,
    vIni: 12,
    vFim: 12,
    titulo: "A lei acerca das borlas"
  },
  "dt22.13-30": {
    id: "dt22.13-30",
    referencia: "Dt 22.13-30",
    livro: "Deuteronômio",
    capitulo: 22,
    vIni: 13,
    vFim: 30,
    titulo: "Leis da castidade e do casamento"
  },
  "dt23.1-8": {
    id: "dt23.1-8",
    referencia: "Dt 23.1-8",
    livro: "Deuteronômio",
    capitulo: 23,
    vIni: 1,
    vFim: 8,
    titulo: "Pessoas excluídas das assembleias santas"
  },
  "dt23.9-14": {
    id: "dt23.9-14",
    referencia: "Dt 23.9-14",
    livro: "Deuteronômio",
    capitulo: 23,
    vIni: 9,
    vFim: 14,
    titulo: "Limpeza do acampamento"
  },
  "dt23.15-20": {
    id: "dt23.15-20",
    referencia: "Dt 23.15-20",
    livro: "Deuteronômio",
    capitulo: 23,
    vIni: 15,
    vFim: 20,
    titulo: "Acerca de fugitivos, prostitutas e usura"
  },
  "dt23.21-25": {
    id: "dt23.21-25",
    referencia: "Dt 23.21-25",
    livro: "Deuteronômio",
    capitulo: 23,
    vIni: 21,
    vFim: 25,
    titulo: "Acerca de votos"
  },
  "dt24.1-4": {
    id: "dt24.1-4",
    referencia: "Dt 24.1-4",
    livro: "Deuteronômio",
    capitulo: 24,
    vIni: 1,
    vFim: 4,
    titulo: "Acerca do divórcio"
  },
  "dt24.5-22": {
    id: "dt24.5-22",
    referencia: "Dt 24.5-22",
    livro: "Deuteronômio",
    capitulo: 24,
    vIni: 5,
    vFim: 22,
    titulo: "Leis de caráter humanitário"
  },
  "dt25.1-4": {
    id: "dt25.1-4",
    referencia: "Dt 25.1-4",
    livro: "Deuteronômio",
    capitulo: 25,
    vIni: 1,
    vFim: 4,
    titulo: "A pena de açoites"
  },
  "dt25.5-12": {
    id: "dt25.5-12",
    referencia: "Dt 25.5-12",
    livro: "Deuteronômio",
    capitulo: 25,
    vIni: 5,
    vFim: 12,
    titulo: "O levirato"
  },
  "dt25.13-16": {
    id: "dt25.13-16",
    referencia: "Dt 25.13-16",
    livro: "Deuteronômio",
    capitulo: 25,
    vIni: 13,
    vFim: 16,
    titulo: "Pesos e medidas justos"
  },
  "dt25.17-19": {
    id: "dt25.17-19",
    referencia: "Dt 25.17-19",
    livro: "Deuteronômio",
    capitulo: 25,
    vIni: 17,
    vFim: 19,
    titulo: "Amaleque será destruído"
  },
  "dt26.1-11": {
    id: "dt26.1-11",
    referencia: "Dt 26.1-11",
    livro: "Deuteronômio",
    capitulo: 26,
    vIni: 1,
    vFim: 11,
    titulo: "As primícias da terra"
  },
  "dt26.12-15": {
    id: "dt26.12-15",
    referencia: "Dt 26.12-15",
    livro: "Deuteronômio",
    capitulo: 26,
    vIni: 12,
    vFim: 15,
    titulo: "Os dízimos"
  },
  "dt26.16-19": {
    id: "dt26.16-19",
    referencia: "Dt 26.16-19",
    livro: "Deuteronômio",
    capitulo: 26,
    vIni: 16,
    vFim: 19,
    titulo: "Exortação à obediência"
  },
  "dt27.1-10": {
    id: "dt27.1-10",
    referencia: "Dt 27.1-10",
    livro: "Deuteronômio",
    capitulo: 27,
    vIni: 1,
    vFim: 10,
    titulo: "O Terceiro Discurso de Moisés Solene promulgação da lei"
  },
  "dt27.11-26": {
    id: "dt27.11-26",
    referencia: "Dt 27.11-26",
    livro: "Deuteronômio",
    capitulo: 27,
    vIni: 11,
    vFim: 26,
    titulo: "Maldições do monte Ebal"
  },
  "dt28.1-14": {
    id: "dt28.1-14",
    referencia: "Dt 28.1-14",
    livro: "Deuteronômio",
    capitulo: 28,
    vIni: 1,
    vFim: 14,
    titulo: "As bênçãos decorrentes da obediência"
  },
  "dt28.15-68": {
    id: "dt28.15-68",
    referencia: "Dt 28.15-68",
    livro: "Deuteronômio",
    capitulo: 28,
    vIni: 15,
    vFim: 68,
    titulo: "Os castigos da desobediência"
  },
  "dt29.1-29": {
    id: "dt29.1-29",
    referencia: "Dt 29.1-29",
    livro: "Deuteronômio",
    capitulo: 29,
    vIni: 1,
    vFim: 29,
    titulo: "O Quarto Discurso de Moisés Deus faz nova aliança com o povo"
  },
  "dt30.1-14": {
    id: "dt30.1-14",
    referencia: "Dt 30.1-14",
    livro: "Deuteronômio",
    capitulo: 30,
    vIni: 1,
    vFim: 14,
    titulo: "Promessas de misericórdia"
  },
  "dt30.15-20": {
    id: "dt30.15-20",
    referencia: "Dt 30.15-20",
    livro: "Deuteronômio",
    capitulo: 30,
    vIni: 15,
    vFim: 20,
    titulo: "A vida ou a morte"
  },
  "dt31.1-8": {
    id: "dt31.1-8",
    referencia: "Dt 31.1-8",
    livro: "Deuteronômio",
    capitulo: 31,
    vIni: 1,
    vFim: 8,
    titulo: "As Últimas Disposições Josué, sucessor de Moisés"
  },
  "dt31.9-13": {
    id: "dt31.9-13",
    referencia: "Dt 31.9-13",
    livro: "Deuteronômio",
    capitulo: 31,
    vIni: 9,
    vFim: 13,
    titulo: "A lei deve ser lida ao povo de sete em sete anos"
  },
  "dt31.14-23": {
    id: "dt31.14-23",
    referencia: "Dt 31.14-23",
    livro: "Deuteronômio",
    capitulo: 31,
    vIni: 14,
    vFim: 23,
    titulo: "A futura rebeldia de Israel"
  },
  "dt31.24-29": {
    id: "dt31.24-29",
    referencia: "Dt 31.24-29",
    livro: "Deuteronômio",
    capitulo: 31,
    vIni: 24,
    vFim: 29,
    titulo: "O Livro da Lei posto ao lado da arca"
  },
  "dt31.30": {
    id: "dt31.30",
    referencia: "Dt 31.30",
    livro: "Deuteronômio",
    capitulo: 31,
    vIni: 30,
    vFim: 30,
    titulo: "O cântico de Moisés"
  },
  "dt32.48-52": {
    id: "dt32.48-52",
    referencia: "Dt 32.48-52",
    livro: "Deuteronômio",
    capitulo: 32,
    vIni: 48,
    vFim: 52,
    titulo: "O Último Dia da Vida de Moisés Moisés vê do monte Nebo a terra de Canaã"
  },
  "dt33.1-29": {
    id: "dt33.1-29",
    referencia: "Dt 33.1-29",
    livro: "Deuteronômio",
    capitulo: 33,
    vIni: 1,
    vFim: 29,
    titulo: "A bênção de Moisés"
  },
  "dt34.1-12": {
    id: "dt34.1-12",
    referencia: "Dt 34.1-12",
    livro: "Deuteronômio",
    capitulo: 34,
    vIni: 1,
    vFim: 12,
    titulo: "A morte de Moisés"
  },
  "js1.1-9": {
    id: "js1.1-9",
    referencia: "Js 1.1-9",
    livro: "Josué",
    capitulo: 1,
    vIni: 1,
    vFim: 9,
    titulo: "Deus fala a Josué e anima-o"
  },
  "js1.10-18": {
    id: "js1.10-18",
    referencia: "Js 1.10-18",
    livro: "Josué",
    capitulo: 1,
    vIni: 10,
    vFim: 18,
    titulo: "Preparação para atravessar o Jordão"
  },
  "js2.1-24": {
    id: "js2.1-24",
    referencia: "Js 2.1-24",
    livro: "Josué",
    capitulo: 2,
    vIni: 1,
    vFim: 24,
    titulo: "Espias mandados a Jericó. Raabe"
  },
  "js3.1-17": {
    id: "js3.1-17",
    referencia: "Js 3.1-17",
    livro: "Josué",
    capitulo: 3,
    vIni: 1,
    vFim: 17,
    titulo: "A passagem do Jordão"
  },
  "js4.1-24": {
    id: "js4.1-24",
    referencia: "Js 4.1-24",
    livro: "Josué",
    capitulo: 4,
    vIni: 1,
    vFim: 24,
    titulo: "As doze pedras tiradas do meio do Jordão"
  },
  "js5.1-9": {
    id: "js5.1-9",
    referencia: "Js 5.1-9",
    livro: "Josué",
    capitulo: 5,
    vIni: 1,
    vFim: 9,
    titulo: "A circuncisão dos filhos de Israel"
  },
  "js5.10-12": {
    id: "js5.10-12",
    referencia: "Js 5.10-12",
    livro: "Josué",
    capitulo: 5,
    vIni: 10,
    vFim: 12,
    titulo: "Celebra-se a Páscoa"
  },
  "js5.13-15": {
    id: "js5.13-15",
    referencia: "Js 5.13-15",
    livro: "Josué",
    capitulo: 5,
    vIni: 13,
    vFim: 15,
    titulo: "Deus aparece a Josué"
  },
  "js6.1-21": {
    id: "js6.1-21",
    referencia: "Js 6.1-21",
    livro: "Josué",
    capitulo: 6,
    vIni: 1,
    vFim: 21,
    titulo: "A destruição de Jericó"
  },
  "js6.22-27": {
    id: "js6.22-27",
    referencia: "Js 6.22-27",
    livro: "Josué",
    capitulo: 6,
    vIni: 22,
    vFim: 27,
    titulo: "Raabe é salva"
  },
  "js7.1-26": {
    id: "js7.1-26",
    referencia: "Js 7.1-26",
    livro: "Josué",
    capitulo: 7,
    vIni: 1,
    vFim: 26,
    titulo: "Os israelitas derrotados em Ai. Acã"
  },
  "js8.1-29": {
    id: "js8.1-29",
    referencia: "Js 8.1-29",
    livro: "Josué",
    capitulo: 8,
    vIni: 1,
    vFim: 29,
    titulo: "Ai é destruída"
  },
  "js8.30-35": {
    id: "js8.30-35",
    referencia: "Js 8.30-35",
    livro: "Josué",
    capitulo: 8,
    vIni: 30,
    vFim: 35,
    titulo: "Renovação da aliança"
  },
  "js9.1-27": {
    id: "js9.1-27",
    referencia: "Js 9.1-27",
    livro: "Josué",
    capitulo: 9,
    vIni: 1,
    vFim: 27,
    titulo: "O estratagema dos gibeonitas"
  },
  "js10.1-5": {
    id: "js10.1-5",
    referencia: "Js 10.1-5",
    livro: "Josué",
    capitulo: 10,
    vIni: 1,
    vFim: 5,
    titulo: "Gibeão sitiada por cinco reis"
  },
  "js10.6-11": {
    id: "js10.6-11",
    referencia: "Js 10.6-11",
    livro: "Josué",
    capitulo: 10,
    vIni: 6,
    vFim: 11,
    titulo: "Josué socorre a Gibeão"
  },
  "js10.12-15": {
    id: "js10.12-15",
    referencia: "Js 10.12-15",
    livro: "Josué",
    capitulo: 10,
    vIni: 12,
    vFim: 15,
    titulo: "O sol e a lua são detidos"
  },
  "js10.16-27": {
    id: "js10.16-27",
    referencia: "Js 10.16-27",
    livro: "Josué",
    capitulo: 10,
    vIni: 16,
    vFim: 27,
    titulo: "Josué prende os cinco reis e mata-os"
  },
  "js10.28-43": {
    id: "js10.28-43",
    referencia: "Js 10.28-43",
    livro: "Josué",
    capitulo: 10,
    vIni: 28,
    vFim: 43,
    titulo: "Josué vence mais sete reis"
  },
  "js11.1-23": {
    id: "js11.1-23",
    referencia: "Js 11.1-23",
    livro: "Josué",
    capitulo: 11,
    vIni: 1,
    vFim: 23,
    titulo: "Outras vitórias de Josué"
  },
  "js12.1-6": {
    id: "js12.1-6",
    referencia: "Js 12.1-6",
    livro: "Josué",
    capitulo: 12,
    vIni: 1,
    vFim: 6,
    titulo: "Os reis vencidos por Moisés"
  },
  "js12.7-24": {
    id: "js12.7-24",
    referencia: "Js 12.7-24",
    livro: "Josué",
    capitulo: 12,
    vIni: 7,
    vFim: 24,
    titulo: "Os reis vencidos por Josué"
  },
  "js13.1-13": {
    id: "js13.1-13",
    referencia: "Js 13.1-13",
    livro: "Josué",
    capitulo: 13,
    vIni: 1,
    vFim: 13,
    titulo: "As terras ainda não conquistadas"
  },
  "js13.14-33": {
    id: "js13.14-33",
    referencia: "Js 13.14-33",
    livro: "Josué",
    capitulo: 13,
    vIni: 14,
    vFim: 33,
    titulo: "As heranças distribuídas por Moisés"
  },
  "js14.1-5": {
    id: "js14.1-5",
    referencia: "Js 14.1-5",
    livro: "Josué",
    capitulo: 14,
    vIni: 1,
    vFim: 5,
    titulo: "A terra de Canaã distribuída por sorte"
  },
  "js14.6-15": {
    id: "js14.6-15",
    referencia: "Js 14.6-15",
    livro: "Josué",
    capitulo: 14,
    vIni: 6,
    vFim: 15,
    titulo: "Josué dá Hebrom a Calebe"
  },
  "js15.1-12": {
    id: "js15.1-12",
    referencia: "Js 15.1-12",
    livro: "Josué",
    capitulo: 15,
    vIni: 1,
    vFim: 12,
    titulo: "As heranças das nove tribos e meia. A herança de Judá"
  },
  "js15.13-19": {
    id: "js15.13-19",
    referencia: "Js 15.13-19",
    livro: "Josué",
    capitulo: 15,
    vIni: 13,
    vFim: 19,
    titulo: "Calebe conquista Hebrom"
  },
  "js15.20-63": {
    id: "js15.20-63",
    referencia: "Js 15.20-63",
    livro: "Josué",
    capitulo: 15,
    vIni: 20,
    vFim: 63,
    titulo: "As cidades de Judá"
  },
  "js16.1-10": {
    id: "js16.1-10",
    referencia: "Js 16.1-10",
    livro: "Josué",
    capitulo: 16,
    vIni: 1,
    vFim: 10,
    titulo: "A herança de Efraim"
  },
  "js17.1-18": {
    id: "js17.1-18",
    referencia: "Js 17.1-18",
    livro: "Josué",
    capitulo: 17,
    vIni: 1,
    vFim: 18,
    titulo: "A herança da meia tribo de Manassés"
  },
  "js18.1-10": {
    id: "js18.1-10",
    referencia: "Js 18.1-10",
    livro: "Josué",
    capitulo: 18,
    vIni: 1,
    vFim: 10,
    titulo: "O resto da terra dividido em sete partes"
  },
  "js18.11-20": {
    id: "js18.11-20",
    referencia: "Js 18.11-20",
    livro: "Josué",
    capitulo: 18,
    vIni: 11,
    vFim: 20,
    titulo: "A herança de Benjamim"
  },
  "js18.21-28": {
    id: "js18.21-28",
    referencia: "Js 18.21-28",
    livro: "Josué",
    capitulo: 18,
    vIni: 21,
    vFim: 28,
    titulo: "As cidades de Benjamim"
  },
  "js19.1-9": {
    id: "js19.1-9",
    referencia: "Js 19.1-9",
    livro: "Josué",
    capitulo: 19,
    vIni: 1,
    vFim: 9,
    titulo: "A herança de Simeão"
  },
  "js19.10-16": {
    id: "js19.10-16",
    referencia: "Js 19.10-16",
    livro: "Josué",
    capitulo: 19,
    vIni: 10,
    vFim: 16,
    titulo: "A herança de Zebulom"
  },
  "js19.17-23": {
    id: "js19.17-23",
    referencia: "Js 19.17-23",
    livro: "Josué",
    capitulo: 19,
    vIni: 17,
    vFim: 23,
    titulo: "A herança de Issacar"
  },
  "js19.24-31": {
    id: "js19.24-31",
    referencia: "Js 19.24-31",
    livro: "Josué",
    capitulo: 19,
    vIni: 24,
    vFim: 31,
    titulo: "A herança de Aser"
  },
  "js19.32-39": {
    id: "js19.32-39",
    referencia: "Js 19.32-39",
    livro: "Josué",
    capitulo: 19,
    vIni: 32,
    vFim: 39,
    titulo: "A herança de Naftali"
  },
  "js19.40-48": {
    id: "js19.40-48",
    referencia: "Js 19.40-48",
    livro: "Josué",
    capitulo: 19,
    vIni: 40,
    vFim: 48,
    titulo: "A herança de Dã"
  },
  "js19.49-51": {
    id: "js19.49-51",
    referencia: "Js 19.49-51",
    livro: "Josué",
    capitulo: 19,
    vIni: 49,
    vFim: 51,
    titulo: "A herança de Josué"
  },
  "js20.1-9": {
    id: "js20.1-9",
    referencia: "Js 20.1-9",
    livro: "Josué",
    capitulo: 20,
    vIni: 1,
    vFim: 9,
    titulo: "Estabelecem-se as cidades de refúgio"
  },
  "js21.1-45": {
    id: "js21.1-45",
    referencia: "Js 21.1-45",
    livro: "Josué",
    capitulo: 21,
    vIni: 1,
    vFim: 45,
    titulo: "As cidades dos levitas"
  },
  "js22.1-9": {
    id: "js22.1-9",
    referencia: "Js 22.1-9",
    livro: "Josué",
    capitulo: 22,
    vIni: 1,
    vFim: 9,
    titulo: "Josué abençoa e manda para casa as duas tribos e meia"
  },
  "js22.10-34": {
    id: "js22.10-34",
    referencia: "Js 22.10-34",
    livro: "Josué",
    capitulo: 22,
    vIni: 10,
    vFim: 34,
    titulo: "O altar junto ao Jordão"
  },
  "js23.1-16": {
    id: "js23.1-16",
    referencia: "Js 23.1-16",
    livro: "Josué",
    capitulo: 23,
    vIni: 1,
    vFim: 16,
    titulo: "Josué exorta o povo a observar a Lei do Senhor"
  },
  "js24.1-13": {
    id: "js24.1-13",
    referencia: "Js 24.1-13",
    livro: "Josué",
    capitulo: 24,
    vIni: 1,
    vFim: 13,
    titulo: "Josué despede-se do povo"
  },
  "js24.14-25": {
    id: "js24.14-25",
    referencia: "Js 24.14-25",
    livro: "Josué",
    capitulo: 24,
    vIni: 14,
    vFim: 25,
    titulo: "Renovação da aliança"
  },
  "js24.26-28": {
    id: "js24.26-28",
    referencia: "Js 24.26-28",
    livro: "Josué",
    capitulo: 24,
    vIni: 26,
    vFim: 28,
    titulo: "A pedra-testemunha"
  },
  "js24.29-33": {
    id: "js24.29-33",
    referencia: "Js 24.29-33",
    livro: "Josué",
    capitulo: 24,
    vIni: 29,
    vFim: 33,
    titulo: "A morte de Josué e de Eleazar"
  },
  "jz3.28": {
    id: "jz3.28",
    referencia: "Jz 3.28",
    livro: "Juízes",
    capitulo: 3,
    vIni: 28,
    vFim: 28,
    titulo: "Otoniel Eúde"
  },
  "jz4.19": {
    id: "jz4.19",
    referencia: "Jz 4.19",
    livro: "Juízes",
    capitulo: 4,
    vIni: 19,
    vFim: 19,
    titulo: "Débora"
  },
  "jz5.2-31": {
    id: "jz5.2-31",
    referencia: "Jz 5.2-31",
    livro: "Juízes",
    capitulo: 5,
    vIni: 2,
    vFim: 31,
    titulo: "O Cântico de Débora"
  },
  "jz6.13-16": {
    id: "jz6.13-16",
    referencia: "Jz 6.13-16",
    livro: "Juízes",
    capitulo: 6,
    vIni: 13,
    vFim: 16,
    titulo: "Gideão"
  },
  "jz8.7": {
    id: "jz8.7",
    referencia: "Jz 8.7",
    livro: "Juízes",
    capitulo: 8,
    vIni: 7,
    vFim: 7,
    titulo: "A Derrota de Zeba e Zalmuna"
  },
  "jz8.23": {
    id: "jz8.23",
    referencia: "Jz 8.23",
    livro: "Juízes",
    capitulo: 8,
    vIni: 23,
    vFim: 23,
    titulo: "O Manto Sacerdotal de Gideão"
  },
  "jz9.2-16": {
    id: "jz9.2-16",
    referencia: "Jz 9.2-16",
    livro: "Juízes",
    capitulo: 9,
    vIni: 2,
    vFim: 16,
    titulo: "Abimeleque"
  },
  "jz13.12-22": {
    id: "jz13.12-22",
    referencia: "Jz 13.12-22",
    livro: "Juízes",
    capitulo: 13,
    vIni: 12,
    vFim: 22,
    titulo: "O Nascimento de Sansão"
  },
  "jz14.12": {
    id: "jz14.12",
    referencia: "Jz 14.12",
    livro: "Juízes",
    capitulo: 14,
    vIni: 12,
    vFim: 12,
    titulo: "O Casamento de Sansão"
  },
  "jz15.2-13": {
    id: "jz15.2-13",
    referencia: "Jz 15.2-13",
    livro: "Juízes",
    capitulo: 15,
    vIni: 2,
    vFim: 13,
    titulo: "A Vingança de Sansão"
  },
  "jz17.10": {
    id: "jz17.10",
    referencia: "Jz 17.10",
    livro: "Juízes",
    capitulo: 17,
    vIni: 10,
    vFim: 10,
    titulo: "Os Ídolos de Mica"
  },
  "jz19.20": {
    id: "jz19.20",
    referencia: "Jz 19.20",
    livro: "Juízes",
    capitulo: 19,
    vIni: 20,
    vFim: 20,
    titulo: "O Levita e a Morte da sua Concubina"
  },
  "jz20.3": {
    id: "jz20.3",
    referencia: "Jz 20.3",
    livro: "Juízes",
    capitulo: 20,
    vIni: 3,
    vFim: 3,
    titulo: "A Guerra entre os Israelitas e os Benjamitas"
  },
  "jz21.3-11": {
    id: "jz21.3-11",
    referencia: "Jz 21.3-11",
    livro: "Juízes",
    capitulo: 21,
    vIni: 3,
    vFim: 11,
    titulo: "Mulheres para os Benjamitas"
  },
  "rt1.1-22": {
    id: "rt1.1-22",
    referencia: "Rt 1.1-22",
    livro: "Rute",
    capitulo: 1,
    vIni: 1,
    vFim: 22,
    titulo: "Noemi e Rute"
  },
  "rt2.1-7": {
    id: "rt2.1-7",
    referencia: "Rt 2.1-7",
    livro: "Rute",
    capitulo: 2,
    vIni: 1,
    vFim: 7,
    titulo: "Rute vai rebuscar espigas"
  },
  "rt2.8-23": {
    id: "rt2.8-23",
    referencia: "Rt 2.8-23",
    livro: "Rute",
    capitulo: 2,
    vIni: 8,
    vFim: 23,
    titulo: "Boaz fala a Rute benignamente"
  },
  "rt3.1-5": {
    id: "rt3.1-5",
    referencia: "Rt 3.1-5",
    livro: "Rute",
    capitulo: 3,
    vIni: 1,
    vFim: 5,
    titulo: "Rute e Boaz na eira"
  },
  "rt3.6-18": {
    id: "rt3.6-18",
    referencia: "Rt 3.6-18",
    livro: "Rute",
    capitulo: 3,
    vIni: 6,
    vFim: 18,
    titulo: "Boaz promete a Rute casar com ela"
  },
  "rt4.1-12": {
    id: "rt4.1-12",
    referencia: "Rt 4.1-12",
    livro: "Rute",
    capitulo: 4,
    vIni: 1,
    vFim: 12,
    titulo: "Boaz casa com Rute"
  },
  "rt4.13-22": {
    id: "rt4.13-22",
    referencia: "Rt 4.13-22",
    livro: "Rute",
    capitulo: 4,
    vIni: 13,
    vFim: 22,
    titulo: "Rute dá à luz Obede"
  },
  "1sm1.1-8": {
    id: "1sm1.1-8",
    referencia: "1Sm 1.1-8",
    livro: "1 Samuel",
    capitulo: 1,
    vIni: 1,
    vFim: 8,
    titulo: "Elcana e suas mulheres"
  },
  "1sm1.9-18": {
    id: "1sm1.9-18",
    referencia: "1Sm 1.9-18",
    livro: "1 Samuel",
    capitulo: 1,
    vIni: 9,
    vFim: 18,
    titulo: "A oração e o voto de Ana"
  },
  "1sm1.19-28": {
    id: "1sm1.19-28",
    referencia: "1Sm 1.19-28",
    livro: "1 Samuel",
    capitulo: 1,
    vIni: 19,
    vFim: 28,
    titulo: "Nasce Samuel e é consagrado a Deus"
  },
  "1sm2.1-11": {
    id: "1sm2.1-11",
    referencia: "1Sm 2.1-11",
    livro: "1 Samuel",
    capitulo: 2,
    vIni: 1,
    vFim: 11,
    titulo: "O cântico de Ana"
  },
  "1sm2.12-17": {
    id: "1sm2.12-17",
    referencia: "1Sm 2.12-17",
    livro: "1 Samuel",
    capitulo: 2,
    vIni: 12,
    vFim: 17,
    titulo: "Os crimes dos filhos de Eli"
  },
  "1sm2.18-21": {
    id: "1sm2.18-21",
    referencia: "1Sm 2.18-21",
    livro: "1 Samuel",
    capitulo: 2,
    vIni: 18,
    vFim: 21,
    titulo: "A mocidade de Samuel"
  },
  "1sm2.22-26": {
    id: "1sm2.22-26",
    referencia: "1Sm 2.22-26",
    livro: "1 Samuel",
    capitulo: 2,
    vIni: 22,
    vFim: 26,
    titulo: "Eli repreende os seus filhos"
  },
  "1sm2.27-36": {
    id: "1sm2.27-36",
    referencia: "1Sm 2.27-36",
    livro: "1 Samuel",
    capitulo: 2,
    vIni: 27,
    vFim: 36,
    titulo: "Profecia contra a casa de Eli"
  },
  "1sm3.1-14": {
    id: "1sm3.1-14",
    referencia: "1Sm 3.1-14",
    livro: "1 Samuel",
    capitulo: 3,
    vIni: 1,
    vFim: 14,
    titulo: "Deus fala com Samuel numa visão"
  },
  "1sm3.15-21": {
    id: "1sm3.15-21",
    referencia: "1Sm 3.15-21",
    livro: "1 Samuel",
    capitulo: 3,
    vIni: 15,
    vFim: 21,
    titulo: "Samuel conta a visão a Eli"
  },
  "1sm4.1-4": {
    id: "1sm4.1-4",
    referencia: "1Sm 4.1-4",
    livro: "1 Samuel",
    capitulo: 4,
    vIni: 1,
    vFim: 4,
    titulo: "Os filisteus vencem os israelitas"
  },
  "1sm4.5-11": {
    id: "1sm4.5-11",
    referencia: "1Sm 4.5-11",
    livro: "1 Samuel",
    capitulo: 4,
    vIni: 5,
    vFim: 11,
    titulo: "A arca é tomada. Hofni e Fineias são mortos"
  },
  "1sm4.12-22": {
    id: "1sm4.12-22",
    referencia: "1Sm 4.12-22",
    livro: "1 Samuel",
    capitulo: 4,
    vIni: 12,
    vFim: 22,
    titulo: "A morte de Eli"
  },
  "1sm5.1-12": {
    id: "1sm5.1-12",
    referencia: "1Sm 5.1-12",
    livro: "1 Samuel",
    capitulo: 5,
    vIni: 1,
    vFim: 12,
    titulo: "A arca na casa de Dagom"
  },
  "1sm6.1-9": {
    id: "1sm6.1-9",
    referencia: "1Sm 6.1-9",
    livro: "1 Samuel",
    capitulo: 6,
    vIni: 1,
    vFim: 9,
    titulo: "Os filisteus enviam a arca para fora da sua terra"
  },
  "1sm6.10-18": {
    id: "1sm6.10-18",
    referencia: "1Sm 6.10-18",
    livro: "1 Samuel",
    capitulo: 6,
    vIni: 10,
    vFim: 18,
    titulo: "A arca chega a Bete-Semes"
  },
  "1sm6.19-21": {
    id: "1sm6.19-21",
    referencia: "1Sm 6.19-21",
    livro: "1 Samuel",
    capitulo: 6,
    vIni: 19,
    vFim: 21,
    titulo: "A arca chega a Quiriate-Jearim"
  },
  "1sm7.2-4": {
    id: "1sm7.2-4",
    referencia: "1Sm 7.2-4",
    livro: "1 Samuel",
    capitulo: 7,
    vIni: 2,
    vFim: 4,
    titulo: "Exortação de Samuel ao arrependimento"
  },
  "1sm7.5-17": {
    id: "1sm7.5-17",
    referencia: "1Sm 7.5-17",
    livro: "1 Samuel",
    capitulo: 7,
    vIni: 5,
    vFim: 17,
    titulo: "Os filisteus são vencidos"
  },
  "1sm8.1-22": {
    id: "1sm8.1-22",
    referencia: "1Sm 8.1-22",
    livro: "1 Samuel",
    capitulo: 8,
    vIni: 1,
    vFim: 22,
    titulo: "Os israelitas pedem um rei"
  },
  "1sm9.1-27": {
    id: "1sm9.1-27",
    referencia: "1Sm 9.1-27",
    livro: "1 Samuel",
    capitulo: 9,
    vIni: 1,
    vFim: 27,
    titulo: "Saul busca as jumentas extraviadas e vai ter com Samuel"
  },
  "1sm10.1-8": {
    id: "1sm10.1-8",
    referencia: "1Sm 10.1-8",
    livro: "1 Samuel",
    capitulo: 10,
    vIni: 1,
    vFim: 8,
    titulo: "Samuel unge a Saul rei de Israel"
  },
  "1sm10.9-16": {
    id: "1sm10.9-16",
    referencia: "1Sm 10.9-16",
    livro: "1 Samuel",
    capitulo: 10,
    vIni: 9,
    vFim: 16,
    titulo: "Saul entre os profetas"
  },
  "1sm10.17-27": {
    id: "1sm10.17-27",
    referencia: "1Sm 10.17-27",
    livro: "1 Samuel",
    capitulo: 10,
    vIni: 17,
    vFim: 27,
    titulo: "Saul escolhido rei"
  },
  "1sm11.1-11": {
    id: "1sm11.1-11",
    referencia: "1Sm 11.1-11",
    livro: "1 Samuel",
    capitulo: 11,
    vIni: 1,
    vFim: 11,
    titulo: "Saul vence os amonitas"
  },
  "1sm11.12-15": {
    id: "1sm11.12-15",
    referencia: "1Sm 11.12-15",
    livro: "1 Samuel",
    capitulo: 11,
    vIni: 12,
    vFim: 15,
    titulo: "Saul proclamado rei"
  },
  "1sm12.1-25": {
    id: "1sm12.1-25",
    referencia: "1Sm 12.1-25",
    livro: "1 Samuel",
    capitulo: 12,
    vIni: 1,
    vFim: 25,
    titulo: "Samuel resigna o seu cargo"
  },
  "1sm13.1-7": {
    id: "1sm13.1-7",
    referencia: "1Sm 13.1-7",
    livro: "1 Samuel",
    capitulo: 13,
    vIni: 1,
    vFim: 7,
    titulo: "Guerra entre os israelitas e os filisteus"
  },
  "1sm13.8-23": {
    id: "1sm13.8-23",
    referencia: "1Sm 13.8-23",
    livro: "1 Samuel",
    capitulo: 13,
    vIni: 8,
    vFim: 23,
    titulo: "Saul oferece sacrifícios e é reprovado por Samuel"
  },
  "1sm14.1-23": {
    id: "1sm14.1-23",
    referencia: "1Sm 14.1-23",
    livro: "1 Samuel",
    capitulo: 14,
    vIni: 1,
    vFim: 23,
    titulo: "A vitória de Jônatas sobre os filisteus"
  },
  "1sm14.24-35": {
    id: "1sm14.24-35",
    referencia: "1Sm 14.24-35",
    livro: "1 Samuel",
    capitulo: 14,
    vIni: 24,
    vFim: 35,
    titulo: "O voto de Saul"
  },
  "1sm14.36-52": {
    id: "1sm14.36-52",
    referencia: "1Sm 14.36-52",
    livro: "1 Samuel",
    capitulo: 14,
    vIni: 36,
    vFim: 52,
    titulo: "Jônatas salvo pelo povo"
  },
  "1sm15.1-31": {
    id: "1sm15.1-31",
    referencia: "1Sm 15.1-31",
    livro: "1 Samuel",
    capitulo: 15,
    vIni: 1,
    vFim: 31,
    titulo: "A desobediência de Saul e a sua rejeição"
  },
  "1sm15.32-35": {
    id: "1sm15.32-35",
    referencia: "1Sm 15.32-35",
    livro: "1 Samuel",
    capitulo: 15,
    vIni: 32,
    vFim: 35,
    titulo: "Samuel mata a Agague"
  },
  "1sm16.1-13": {
    id: "1sm16.1-13",
    referencia: "1Sm 16.1-13",
    livro: "1 Samuel",
    capitulo: 16,
    vIni: 1,
    vFim: 13,
    titulo: "Samuel enviado a Jessé"
  },
  "1sm16.14-23": {
    id: "1sm16.14-23",
    referencia: "1Sm 16.14-23",
    livro: "1 Samuel",
    capitulo: 16,
    vIni: 14,
    vFim: 23,
    titulo: "Davi tange sua harpa perante Saul"
  },
  "1sm17.1-11": {
    id: "1sm17.1-11",
    referencia: "1Sm 17.1-11",
    livro: "1 Samuel",
    capitulo: 17,
    vIni: 1,
    vFim: 11,
    titulo: "O desafio de Golias"
  },
  "1sm17.12-23": {
    id: "1sm17.12-23",
    referencia: "1Sm 17.12-23",
    livro: "1 Samuel",
    capitulo: 17,
    vIni: 12,
    vFim: 23,
    titulo: "Davi enviado a seus irmãos"
  },
  "1sm17.24-30": {
    id: "1sm17.24-30",
    referencia: "1Sm 17.24-30",
    livro: "1 Samuel",
    capitulo: 17,
    vIni: 24,
    vFim: 30,
    titulo: "O gigante Golias insulta os israelitas"
  },
  "1sm17.31-40": {
    id: "1sm17.31-40",
    referencia: "1Sm 17.31-40",
    livro: "1 Samuel",
    capitulo: 17,
    vIni: 31,
    vFim: 40,
    titulo: "Davi dispõe-se a pelejar contra o gigante"
  },
  "1sm17.41-58": {
    id: "1sm17.41-58",
    referencia: "1Sm 17.41-58",
    livro: "1 Samuel",
    capitulo: 17,
    vIni: 41,
    vFim: 58,
    titulo: "Davi encontra-se com o gigante e mata-o"
  },
  "1sm18.1-6": {
    id: "1sm18.1-6",
    referencia: "1Sm 18.1-6",
    livro: "1 Samuel",
    capitulo: 18,
    vIni: 1,
    vFim: 6,
    titulo: "A amizade de Jônatas para com Davi"
  },
  "1sm18.7-16": {
    id: "1sm18.7-16",
    referencia: "1Sm 18.7-16",
    livro: "1 Samuel",
    capitulo: 18,
    vIni: 7,
    vFim: 16,
    titulo: "O cântico das mulheres indigna a Saul"
  },
  "1sm18.17-19": {
    id: "1sm18.17-19",
    referencia: "1Sm 18.17-19",
    livro: "1 Samuel",
    capitulo: 18,
    vIni: 17,
    vFim: 19,
    titulo: "Saul intenta matar a Davi pela astúcia"
  },
  "1sm18.20-30": {
    id: "1sm18.20-30",
    referencia: "1Sm 18.20-30",
    livro: "1 Samuel",
    capitulo: 18,
    vIni: 20,
    vFim: 30,
    titulo: "Mical ama a Davi e casa com ele"
  },
  "1sm19.1-7": {
    id: "1sm19.1-7",
    referencia: "1Sm 19.1-7",
    livro: "1 Samuel",
    capitulo: 19,
    vIni: 1,
    vFim: 7,
    titulo: "Jônatas intercede por Davi"
  },
  "1sm19.8-11": {
    id: "1sm19.8-11",
    referencia: "1Sm 19.8-11",
    livro: "1 Samuel",
    capitulo: 19,
    vIni: 8,
    vFim: 11,
    titulo: "Saul procura, de novo, matar a Davi"
  },
  "1sm19.12-17": {
    id: "1sm19.12-17",
    referencia: "1Sm 19.12-17",
    livro: "1 Samuel",
    capitulo: 19,
    vIni: 12,
    vFim: 17,
    titulo: "Mical engana a seu pai e salva a Davi"
  },
  "1sm19.18-24": {
    id: "1sm19.18-24",
    referencia: "1Sm 19.18-24",
    livro: "1 Samuel",
    capitulo: 19,
    vIni: 18,
    vFim: 24,
    titulo: "Saul e seus mensageiros profetizam"
  },
  "1sm20.1-11": {
    id: "1sm20.1-11",
    referencia: "1Sm 20.1-11",
    livro: "1 Samuel",
    capitulo: 20,
    vIni: 1,
    vFim: 11,
    titulo: "A amizade entre Davi e Jônatas"
  },
  "1sm20.12-29": {
    id: "1sm20.12-29",
    referencia: "1Sm 20.12-29",
    livro: "1 Samuel",
    capitulo: 20,
    vIni: 12,
    vFim: 29,
    titulo: "Jônatas faz aliança com Davi"
  },
  "1sm20.30-34": {
    id: "1sm20.30-34",
    referencia: "1Sm 20.30-34",
    livro: "1 Samuel",
    capitulo: 20,
    vIni: 30,
    vFim: 34,
    titulo: "Saul irado contra Jônatas"
  },
  "1sm20.35-43": {
    id: "1sm20.35-43",
    referencia: "1Sm 20.35-43",
    livro: "1 Samuel",
    capitulo: 20,
    vIni: 35,
    vFim: 43,
    titulo: "Jônatas despede-se de Davi"
  },
  "1sm21.1-9": {
    id: "1sm21.1-9",
    referencia: "1Sm 21.1-9",
    livro: "1 Samuel",
    capitulo: 21,
    vIni: 1,
    vFim: 9,
    titulo: "Davi vai ter com o sacerdote Aimeleque"
  },
  "1sm21.10-15": {
    id: "1sm21.10-15",
    referencia: "1Sm 21.10-15",
    livro: "1 Samuel",
    capitulo: 21,
    vIni: 10,
    vFim: 15,
    titulo: "Davi foge para Aquis, rei de Gate"
  },
  "1sm22.1-5": {
    id: "1sm22.1-5",
    referencia: "1Sm 22.1-5",
    livro: "1 Samuel",
    capitulo: 22,
    vIni: 1,
    vFim: 5,
    titulo: "Davi esconde-se em Adulão e em Moabe"
  },
  "1sm22.6-19": {
    id: "1sm22.6-19",
    referencia: "1Sm 22.6-19",
    livro: "1 Samuel",
    capitulo: 22,
    vIni: 6,
    vFim: 19,
    titulo: "Saul mata todos os sacerdotes de Nobe"
  },
  "1sm22.20-23": {
    id: "1sm22.20-23",
    referencia: "1Sm 22.20-23",
    livro: "1 Samuel",
    capitulo: 22,
    vIni: 20,
    vFim: 23,
    titulo: "Abiatar refugia-se com Davi"
  },
  "1sm23.1-14": {
    id: "1sm23.1-14",
    referencia: "1Sm 23.1-14",
    livro: "1 Samuel",
    capitulo: 23,
    vIni: 1,
    vFim: 14,
    titulo: "Davi livra a Queila"
  },
  "1sm23.15-18": {
    id: "1sm23.15-18",
    referencia: "1Sm 23.15-18",
    livro: "1 Samuel",
    capitulo: 23,
    vIni: 15,
    vFim: 18,
    titulo: "Davi e Jônatas renovam a aliança"
  },
  "1sm23.19-29": {
    id: "1sm23.19-29",
    referencia: "1Sm 23.19-29",
    livro: "1 Samuel",
    capitulo: 23,
    vIni: 19,
    vFim: 29,
    titulo: "A traição dos zifeus"
  },
  "1sm24.1-22": {
    id: "1sm24.1-22",
    referencia: "1Sm 24.1-22",
    livro: "1 Samuel",
    capitulo: 24,
    vIni: 1,
    vFim: 22,
    titulo: "Davi poupa a vida de Saul"
  },
  "1sm25.1": {
    id: "1sm25.1",
    referencia: "1Sm 25.1",
    livro: "1 Samuel",
    capitulo: 25,
    vIni: 1,
    vFim: 1,
    titulo: "A morte de Samuel"
  },
  "1sm25.2-17": {
    id: "1sm25.2-17",
    referencia: "1Sm 25.2-17",
    livro: "1 Samuel",
    capitulo: 25,
    vIni: 2,
    vFim: 17,
    titulo: "Davi e Nabal"
  },
  "1sm25.18-35": {
    id: "1sm25.18-35",
    referencia: "1Sm 25.18-35",
    livro: "1 Samuel",
    capitulo: 25,
    vIni: 18,
    vFim: 35,
    titulo: "Abigail apazigua a Davi"
  },
  "1sm25.36-38": {
    id: "1sm25.36-38",
    referencia: "1Sm 25.36-38",
    livro: "1 Samuel",
    capitulo: 25,
    vIni: 36,
    vFim: 38,
    titulo: "A morte de Nabal"
  },
  "1sm25.39-44": {
    id: "1sm25.39-44",
    referencia: "1Sm 25.39-44",
    livro: "1 Samuel",
    capitulo: 25,
    vIni: 39,
    vFim: 44,
    titulo: "Davi casa com Abigail"
  },
  "1sm26.1-16": {
    id: "1sm26.1-16",
    referencia: "1Sm 26.1-16",
    livro: "1 Samuel",
    capitulo: 26,
    vIni: 1,
    vFim: 16,
    titulo: "Davi, outra vez, poupa a vida de Saul"
  },
  "1sm26.17-25": {
    id: "1sm26.17-25",
    referencia: "1Sm 26.17-25",
    livro: "1 Samuel",
    capitulo: 26,
    vIni: 17,
    vFim: 25,
    titulo: "Saul, outra vez, se reconcilia com Davi"
  },
  "1sm27.1-12": {
    id: "1sm27.1-12",
    referencia: "1Sm 27.1-12",
    livro: "1 Samuel",
    capitulo: 27,
    vIni: 1,
    vFim: 12,
    titulo: "Davi, outra vez, com Aquis, rei de Gate"
  },
  "1sm28.1-25": {
    id: "1sm28.1-25",
    referencia: "1Sm 28.1-25",
    livro: "1 Samuel",
    capitulo: 28,
    vIni: 1,
    vFim: 25,
    titulo: "Saul consulta a médium de En-Dor"
  },
  "1sm29.1-11": {
    id: "1sm29.1-11",
    referencia: "1Sm 29.1-11",
    livro: "1 Samuel",
    capitulo: 29,
    vIni: 1,
    vFim: 11,
    titulo: "Os filisteus desconfiam de Davi"
  },
  "1sm30.1-6": {
    id: "1sm30.1-6",
    referencia: "1Sm 30.1-6",
    livro: "1 Samuel",
    capitulo: 30,
    vIni: 1,
    vFim: 6,
    titulo: "Ziclague é saqueada pelos amalequitas"
  },
  "1sm30.7-20": {
    id: "1sm30.7-20",
    referencia: "1Sm 30.7-20",
    livro: "1 Samuel",
    capitulo: 30,
    vIni: 7,
    vFim: 20,
    titulo: "Davi livra os cativos"
  },
  "1sm30.21-31": {
    id: "1sm30.21-31",
    referencia: "1Sm 30.21-31",
    livro: "1 Samuel",
    capitulo: 30,
    vIni: 21,
    vFim: 31,
    titulo: "Davi estabelece a lei da divisão da presa"
  },
  "1sm31.1-7": {
    id: "1sm31.1-7",
    referencia: "1Sm 31.1-7",
    livro: "1 Samuel",
    capitulo: 31,
    vIni: 1,
    vFim: 7,
    titulo: "A derrota de Israel e a morte de Saul"
  },
  "1sm31.1-13": {
    id: "1sm31.1-13",
    referencia: "1Sm 31.1-13",
    livro: "1 Samuel",
    capitulo: 31,
    vIni: 1,
    vFim: 13,
    titulo: "A sepultura de Saul"
  },
  "2sm1.1-10": {
    id: "2sm1.1-10",
    referencia: "2Sm 1.1-10",
    livro: "2 Samuel",
    capitulo: 1,
    vIni: 1,
    vFim: 10,
    titulo: "Davi recebe a notícia da derrota e da morte de Saul"
  },
  "2sm1.11-16": {
    id: "2sm1.11-16",
    referencia: "2Sm 1.11-16",
    livro: "2 Samuel",
    capitulo: 1,
    vIni: 11,
    vFim: 16,
    titulo: "Davi manda matar o amalequita"
  },
  "2sm1.17-27": {
    id: "2sm1.17-27",
    referencia: "2Sm 1.17-27",
    livro: "2 Samuel",
    capitulo: 1,
    vIni: 17,
    vFim: 27,
    titulo: "O lamento de Davi por Saul e Jônatas"
  },
  "2sm2.1-7": {
    id: "2sm2.1-7",
    referencia: "2Sm 2.1-7",
    livro: "2 Samuel",
    capitulo: 2,
    vIni: 1,
    vFim: 7,
    titulo: "Davi é aclamado rei de Judá"
  },
  "2sm2.8-11": {
    id: "2sm2.8-11",
    referencia: "2Sm 2.8-11",
    livro: "2 Samuel",
    capitulo: 2,
    vIni: 8,
    vFim: 11,
    titulo: "Abner faz Isbosete rei de Israel"
  },
  "2sm2.12-17": {
    id: "2sm2.12-17",
    referencia: "2Sm 2.12-17",
    livro: "2 Samuel",
    capitulo: 2,
    vIni: 12,
    vFim: 17,
    titulo: "Vitória de Davi sobre Isbosete"
  },
  "2sm2.18-23": {
    id: "2sm2.18-23",
    referencia: "2Sm 2.18-23",
    livro: "2 Samuel",
    capitulo: 2,
    vIni: 18,
    vFim: 23,
    titulo: "Abner mata a Asael"
  },
  "2sm2.24-32": {
    id: "2sm2.24-32",
    referencia: "2Sm 2.24-32",
    livro: "2 Samuel",
    capitulo: 2,
    vIni: 24,
    vFim: 32,
    titulo: "Joabe persegue os homens de Abner"
  },
  "2sm3.1-5": {
    id: "2sm3.1-5",
    referencia: "2Sm 3.1-5",
    livro: "2 Samuel",
    capitulo: 3,
    vIni: 1,
    vFim: 5,
    titulo: "A família de Davi em Hebrom"
  },
  "2sm3.6-21": {
    id: "2sm3.6-21",
    referencia: "2Sm 3.6-21",
    livro: "2 Samuel",
    capitulo: 3,
    vIni: 6,
    vFim: 21,
    titulo: "Abner faz aliança com Davi"
  },
  "2sm3.22-30": {
    id: "2sm3.22-30",
    referencia: "2Sm 3.22-30",
    livro: "2 Samuel",
    capitulo: 3,
    vIni: 22,
    vFim: 30,
    titulo: "Joabe mata a Abner à traição"
  },
  "2sm3.31-39": {
    id: "2sm3.31-39",
    referencia: "2Sm 3.31-39",
    livro: "2 Samuel",
    capitulo: 3,
    vIni: 31,
    vFim: 39,
    titulo: "Davi lamenta a morte de Abner"
  },
  "2sm4.1-12": {
    id: "2sm4.1-12",
    referencia: "2Sm 4.1-12",
    livro: "2 Samuel",
    capitulo: 4,
    vIni: 1,
    vFim: 12,
    titulo: "A morte de Isbosete"
  },
  "2sm5.1-5": {
    id: "2sm5.1-5",
    referencia: "2Sm 5.1-5",
    livro: "2 Samuel",
    capitulo: 5,
    vIni: 1,
    vFim: 5,
    titulo: "Davi é ungido rei de todo o Israel"
  },
  "2sm5.1-10": {
    id: "2sm5.1-10",
    referencia: "2Sm 5.1-10",
    livro: "2 Samuel",
    capitulo: 5,
    vIni: 1,
    vFim: 10,
    titulo: "Davi conquista Sião"
  },
  "2sm5.1-12": {
    id: "2sm5.1-12",
    referencia: "2Sm 5.1-12",
    livro: "2 Samuel",
    capitulo: 5,
    vIni: 1,
    vFim: 12,
    titulo: "O reinado de Davi reconhecido por Hirão"
  },
  "2sm5.1-16": {
    id: "2sm5.1-16",
    referencia: "2Sm 5.1-16",
    livro: "2 Samuel",
    capitulo: 5,
    vIni: 1,
    vFim: 16,
    titulo: "Os filhos de Davi que nasceram em Jerusalém"
  },
  "2sm5.1-25": {
    id: "2sm5.1-25",
    referencia: "2Sm 5.1-25",
    livro: "2 Samuel",
    capitulo: 5,
    vIni: 1,
    vFim: 25,
    titulo: "Davi derrota os filisteus"
  },
  "2sm6.1-11": {
    id: "2sm6.1-11",
    referencia: "2Sm 6.1-11",
    livro: "2 Samuel",
    capitulo: 6,
    vIni: 1,
    vFim: 11,
    titulo: "Davi traz para Jerusalém a arca"
  },
  "2sm6.1-19": {
    id: "2sm6.1-19",
    referencia: "2Sm 6.1-19",
    livro: "2 Samuel",
    capitulo: 6,
    vIni: 1,
    vFim: 19,
    titulo: "A arca é levada para Jerusalém"
  },
  "2sm6.20-23": {
    id: "2sm6.20-23",
    referencia: "2Sm 6.20-23",
    livro: "2 Samuel",
    capitulo: 6,
    vIni: 20,
    vFim: 23,
    titulo: "Mical repreendida por Davi"
  },
  "2sm7.1-17": {
    id: "2sm7.1-17",
    referencia: "2Sm 7.1-17",
    livro: "2 Samuel",
    capitulo: 7,
    vIni: 1,
    vFim: 17,
    titulo: "A aliança do Senhor com Davi"
  },
  "2sm7.1-29": {
    id: "2sm7.1-29",
    referencia: "2Sm 7.1-29",
    livro: "2 Samuel",
    capitulo: 7,
    vIni: 1,
    vFim: 29,
    titulo: "Ações de graças de Davi"
  },
  "2sm8.1-14": {
    id: "2sm8.1-14",
    referencia: "2Sm 8.1-14",
    livro: "2 Samuel",
    capitulo: 8,
    vIni: 1,
    vFim: 14,
    titulo: "Diversas vitórias de Davi"
  },
  "2sm8.2-18": {
    id: "2sm8.2-18",
    referencia: "2Sm 8.2-18",
    livro: "2 Samuel",
    capitulo: 8,
    vIni: 2,
    vFim: 18,
    titulo: "Oficiais de Davi"
  },
  "2sm9.1-13": {
    id: "2sm9.1-13",
    referencia: "2Sm 9.1-13",
    livro: "2 Samuel",
    capitulo: 9,
    vIni: 1,
    vFim: 13,
    titulo: "A bondade de Davi para com o filho de Jônatas"
  },
  "2sm10.1-19": {
    id: "2sm10.1-19",
    referencia: "2Sm 10.1-19",
    livro: "2 Samuel",
    capitulo: 10,
    vIni: 1,
    vFim: 19,
    titulo: "Davi derrota os amonitas e os siros"
  },
  "2sm11.1-5": {
    id: "2sm11.1-5",
    referencia: "2Sm 11.1-5",
    livro: "2 Samuel",
    capitulo: 11,
    vIni: 1,
    vFim: 5,
    titulo: "Davi comete adultério com Bate-Seba"
  },
  "2sm11.6-13": {
    id: "2sm11.6-13",
    referencia: "2Sm 11.6-13",
    livro: "2 Samuel",
    capitulo: 11,
    vIni: 6,
    vFim: 13,
    titulo: "Davi e Urias"
  },
  "2sm11.14-25": {
    id: "2sm11.14-25",
    referencia: "2Sm 11.14-25",
    livro: "2 Samuel",
    capitulo: 11,
    vIni: 14,
    vFim: 25,
    titulo: "A morte de Urias"
  },
  "2sm11.26-27": {
    id: "2sm11.26-27",
    referencia: "2Sm 11.26-27",
    livro: "2 Samuel",
    capitulo: 11,
    vIni: 26,
    vFim: 27,
    titulo: "Davi casa com Bate-Seba"
  },
  "2sm12.1-15": {
    id: "2sm12.1-15",
    referencia: "2Sm 12.1-15",
    livro: "2 Samuel",
    capitulo: 12,
    vIni: 1,
    vFim: 15,
    titulo: "Natã repreende a Davi"
  },
  "2sm12.16-25": {
    id: "2sm12.16-25",
    referencia: "2Sm 12.16-25",
    livro: "2 Samuel",
    capitulo: 12,
    vIni: 16,
    vFim: 25,
    titulo: "A morte do filho de Bate-Seba"
  },
  "2sm12.1-31": {
    id: "2sm12.1-31",
    referencia: "2Sm 12.1-31",
    livro: "2 Samuel",
    capitulo: 12,
    vIni: 1,
    vFim: 31,
    titulo: "Davi conquista Rabá"
  },
  "2sm13.1-22": {
    id: "2sm13.1-22",
    referencia: "2Sm 13.1-22",
    livro: "2 Samuel",
    capitulo: 13,
    vIni: 1,
    vFim: 22,
    titulo: "O incesto de Amnom"
  },
  "2sm13.23-36": {
    id: "2sm13.23-36",
    referencia: "2Sm 13.23-36",
    livro: "2 Samuel",
    capitulo: 13,
    vIni: 23,
    vFim: 36,
    titulo: "Absalão mata a Amnom"
  },
  "2sm13.37-39": {
    id: "2sm13.37-39",
    referencia: "2Sm 13.37-39",
    livro: "2 Samuel",
    capitulo: 13,
    vIni: 37,
    vFim: 39,
    titulo: "Absalão foge para Talmai"
  },
  "2sm14.1-24": {
    id: "2sm14.1-24",
    referencia: "2Sm 14.1-24",
    livro: "2 Samuel",
    capitulo: 14,
    vIni: 1,
    vFim: 24,
    titulo: "Absalão volta para Jerusalém"
  },
  "2sm14.25-27": {
    id: "2sm14.25-27",
    referencia: "2Sm 14.25-27",
    livro: "2 Samuel",
    capitulo: 14,
    vIni: 25,
    vFim: 27,
    titulo: "A beleza de Absalão"
  },
  "2sm14.28-33": {
    id: "2sm14.28-33",
    referencia: "2Sm 14.28-33",
    livro: "2 Samuel",
    capitulo: 14,
    vIni: 28,
    vFim: 33,
    titulo: "Absalão admitido à presença de Davi"
  },
  "2sm15.1-18": {
    id: "2sm15.1-18",
    referencia: "2Sm 15.1-18",
    livro: "2 Samuel",
    capitulo: 15,
    vIni: 1,
    vFim: 18,
    titulo: "A revolta de Absalão e a fuga de Davi"
  },
  "2sm15.19-23": {
    id: "2sm15.19-23",
    referencia: "2Sm 15.19-23",
    livro: "2 Samuel",
    capitulo: 15,
    vIni: 19,
    vFim: 23,
    titulo: "A lealdade de Itai"
  },
  "2sm15.24-37": {
    id: "2sm15.24-37",
    referencia: "2Sm 15.24-37",
    livro: "2 Samuel",
    capitulo: 15,
    vIni: 24,
    vFim: 37,
    titulo: "Zadoque, Abiatar e Husai voltam para Jerusalém"
  },
  "2sm16.1-4": {
    id: "2sm16.1-4",
    referencia: "2Sm 16.1-4",
    livro: "2 Samuel",
    capitulo: 16,
    vIni: 1,
    vFim: 4,
    titulo: "Davi e Ziba"
  },
  "2sm16.5-14": {
    id: "2sm16.5-14",
    referencia: "2Sm 16.5-14",
    livro: "2 Samuel",
    capitulo: 16,
    vIni: 5,
    vFim: 14,
    titulo: "Davi amaldiçoado por Simei"
  },
  "2sm16.15-19": {
    id: "2sm16.15-19",
    referencia: "2Sm 16.15-19",
    livro: "2 Samuel",
    capitulo: 16,
    vIni: 15,
    vFim: 19,
    titulo: "Husai professa lealdade a Absalão"
  },
  "2sm16.20-23": {
    id: "2sm16.20-23",
    referencia: "2Sm 16.20-23",
    livro: "2 Samuel",
    capitulo: 16,
    vIni: 20,
    vFim: 23,
    titulo: "Absalão e as concubinas de Davi"
  },
  "2sm17.1-26": {
    id: "2sm17.1-26",
    referencia: "2Sm 17.1-26",
    livro: "2 Samuel",
    capitulo: 17,
    vIni: 1,
    vFim: 26,
    titulo: "O conselho de Aitofel e de Husai"
  },
  "2sm17.27-29": {
    id: "2sm17.27-29",
    referencia: "2Sm 17.27-29",
    livro: "2 Samuel",
    capitulo: 17,
    vIni: 27,
    vFim: 29,
    titulo: "A vitória do exército de Davi sobre o de Absalão"
  },
  "2sm18.9-18": {
    id: "2sm18.9-18",
    referencia: "2Sm 18.9-18",
    livro: "2 Samuel",
    capitulo: 18,
    vIni: 9,
    vFim: 18,
    titulo: "A morte de Absalão"
  },
  "2sm18.19-33": {
    id: "2sm18.19-33",
    referencia: "2Sm 18.19-33",
    livro: "2 Samuel",
    capitulo: 18,
    vIni: 19,
    vFim: 33,
    titulo: "Davi chora amargamente a morte de Absalão"
  },
  "2sm19.1-10": {
    id: "2sm19.1-10",
    referencia: "2Sm 19.1-10",
    livro: "2 Samuel",
    capitulo: 19,
    vIni: 1,
    vFim: 10,
    titulo: "Joabe reprova a Davi"
  },
  "2sm19.11-15": {
    id: "2sm19.11-15",
    referencia: "2Sm 19.11-15",
    livro: "2 Samuel",
    capitulo: 19,
    vIni: 11,
    vFim: 15,
    titulo: "Davi volta para Jerusalém"
  },
  "2sm19.16-23": {
    id: "2sm19.16-23",
    referencia: "2Sm 19.16-23",
    livro: "2 Samuel",
    capitulo: 19,
    vIni: 16,
    vFim: 23,
    titulo: "Simei encontra-se com Davi"
  },
  "2sm19.24-30": {
    id: "2sm19.24-30",
    referencia: "2Sm 19.24-30",
    livro: "2 Samuel",
    capitulo: 19,
    vIni: 24,
    vFim: 30,
    titulo: "Mefibosete encontra-se com Davi"
  },
  "2sm19.31-43": {
    id: "2sm19.31-43",
    referencia: "2Sm 19.31-43",
    livro: "2 Samuel",
    capitulo: 19,
    vIni: 31,
    vFim: 43,
    titulo: "Barzilai encontra-se com Davi"
  },
  "2sm20.1-22": {
    id: "2sm20.1-22",
    referencia: "2Sm 20.1-22",
    livro: "2 Samuel",
    capitulo: 20,
    vIni: 1,
    vFim: 22,
    titulo: "A sedição de Seba e a sua morte"
  },
  "2sm20.2-26": {
    id: "2sm20.2-26",
    referencia: "2Sm 20.2-26",
    livro: "2 Samuel",
    capitulo: 20,
    vIni: 2,
    vFim: 26,
    titulo: "Oficiais de Davi"
  },
  "2sm21.1-14": {
    id: "2sm21.1-14",
    referencia: "2Sm 21.1-14",
    livro: "2 Samuel",
    capitulo: 21,
    vIni: 1,
    vFim: 14,
    titulo: "Vingados os gibeonitas"
  },
  "2sm21.1-22": {
    id: "2sm21.1-22",
    referencia: "2Sm 21.1-22",
    livro: "2 Samuel",
    capitulo: 21,
    vIni: 1,
    vFim: 22,
    titulo: "Gigantes mortos pelos homens de Davi"
  },
  "2sm22.1-51": {
    id: "2sm22.1-51",
    referencia: "2Sm 22.1-51",
    livro: "2 Samuel",
    capitulo: 22,
    vIni: 1,
    vFim: 51,
    titulo: "Cântico de Davi em ações de graças"
  },
  "2sm23.1-7": {
    id: "2sm23.1-7",
    referencia: "2Sm 23.1-7",
    livro: "2 Samuel",
    capitulo: 23,
    vIni: 1,
    vFim: 7,
    titulo: "As últimas palavras de Davi"
  },
  "2sm23.1-39": {
    id: "2sm23.1-39",
    referencia: "2Sm 23.1-39",
    livro: "2 Samuel",
    capitulo: 23,
    vIni: 1,
    vFim: 39,
    titulo: "Os valentes de Davi"
  },
  "2sm24.1-9": {
    id: "2sm24.1-9",
    referencia: "2Sm 24.1-9",
    livro: "2 Samuel",
    capitulo: 24,
    vIni: 1,
    vFim: 9,
    titulo: "O levantamento do censo"
  },
  "2sm24.1-17": {
    id: "2sm24.1-17",
    referencia: "2Sm 24.1-17",
    livro: "2 Samuel",
    capitulo: 24,
    vIni: 1,
    vFim: 17,
    titulo: "Davi escolhe o castigo"
  },
  "2sm24.1-25": {
    id: "2sm24.1-25",
    referencia: "2Sm 24.1-25",
    livro: "2 Samuel",
    capitulo: 24,
    vIni: 1,
    vFim: 25,
    titulo: "Davi erige um altar na eira de Araúna"
  },
  "1rs1.1-4": {
    id: "1rs1.1-4",
    referencia: "1Rs 1.1-4",
    livro: "1 Reis",
    capitulo: 1,
    vIni: 1,
    vFim: 4,
    titulo: "A velhice de Davi"
  },
  "1rs1.5-10": {
    id: "1rs1.5-10",
    referencia: "1Rs 1.5-10",
    livro: "1 Reis",
    capitulo: 1,
    vIni: 5,
    vFim: 10,
    titulo: "Adonias usurpa o trono"
  },
  "1rs1.11-31": {
    id: "1rs1.11-31",
    referencia: "1Rs 1.11-31",
    livro: "1 Reis",
    capitulo: 1,
    vIni: 11,
    vFim: 31,
    titulo: "Natã e Bate-Seba advogam a causa de Salomão"
  },
  "1rs1.32-40": {
    id: "1rs1.32-40",
    referencia: "1Rs 1.32-40",
    livro: "1 Reis",
    capitulo: 1,
    vIni: 32,
    vFim: 40,
    titulo: "Salomão é constituído rei"
  },
  "1rs1.41-49": {
    id: "1rs1.41-49",
    referencia: "1Rs 1.41-49",
    livro: "1 Reis",
    capitulo: 1,
    vIni: 41,
    vFim: 49,
    titulo: "Adonias e seus adeptos alarmam-se"
  },
  "1rs1.50-53": {
    id: "1rs1.50-53",
    referencia: "1Rs 1.50-53",
    livro: "1 Reis",
    capitulo: 1,
    vIni: 50,
    vFim: 53,
    titulo: "Adonias pede indulto"
  },
  "1rs2.1-12": {
    id: "1rs2.1-12",
    referencia: "1Rs 2.1-12",
    livro: "1 Reis",
    capitulo: 2,
    vIni: 1,
    vFim: 12,
    titulo: "Davi dá instruções a Salomão e morre"
  },
  "1rs2.13-25": {
    id: "1rs2.13-25",
    referencia: "1Rs 2.13-25",
    livro: "1 Reis",
    capitulo: 2,
    vIni: 13,
    vFim: 25,
    titulo: "Morte de Adonias"
  },
  "1rs2.26-27": {
    id: "1rs2.26-27",
    referencia: "1Rs 2.26-27",
    livro: "1 Reis",
    capitulo: 2,
    vIni: 26,
    vFim: 27,
    titulo: "Expulso o sacerdote Abiatar"
  },
  "1rs2.28-35": {
    id: "1rs2.28-35",
    referencia: "1Rs 2.28-35",
    livro: "1 Reis",
    capitulo: 2,
    vIni: 28,
    vFim: 35,
    titulo: "Morte de Joabe"
  },
  "1rs2.36-46": {
    id: "1rs2.36-46",
    referencia: "1Rs 2.36-46",
    livro: "1 Reis",
    capitulo: 2,
    vIni: 36,
    vFim: 46,
    titulo: "Morte de Simei"
  },
  "1rs3.1-2": {
    id: "1rs3.1-2",
    referencia: "1Rs 3.1-2",
    livro: "1 Reis",
    capitulo: 3,
    vIni: 1,
    vFim: 2,
    titulo: "Salomão casa com a filha de Faraó"
  },
  "1rs3.2-15": {
    id: "1rs3.2-15",
    referencia: "1Rs 3.2-15",
    livro: "1 Reis",
    capitulo: 3,
    vIni: 2,
    vFim: 15,
    titulo: "Salomão pede a Deus sabedoria"
  },
  "1rs3.16-28": {
    id: "1rs3.16-28",
    referencia: "1Rs 3.16-28",
    livro: "1 Reis",
    capitulo: 3,
    vIni: 16,
    vFim: 28,
    titulo: "Salomão julga a causa de duas mulheres"
  },
  "1rs4.1-19": {
    id: "1rs4.1-19",
    referencia: "1Rs 4.1-19",
    livro: "1 Reis",
    capitulo: 4,
    vIni: 1,
    vFim: 19,
    titulo: "Os oficiais de Salomão"
  },
  "1rs4.20-28": {
    id: "1rs4.20-28",
    referencia: "1Rs 4.20-28",
    livro: "1 Reis",
    capitulo: 4,
    vIni: 20,
    vFim: 28,
    titulo: "A prosperidade do reino de Salomão"
  },
  "1rs4.29-34": {
    id: "1rs4.29-34",
    referencia: "1Rs 4.29-34",
    livro: "1 Reis",
    capitulo: 4,
    vIni: 29,
    vFim: 34,
    titulo: "A sabedoria de Salomão"
  },
  "1rs5.2-12": {
    id: "1rs5.2-12",
    referencia: "1Rs 5.2-12",
    livro: "1 Reis",
    capitulo: 5,
    vIni: 2,
    vFim: 12,
    titulo: "Salomão faz aliança com Hirão"
  },
  "1rs5.2-18": {
    id: "1rs5.2-18",
    referencia: "1Rs 5.2-18",
    livro: "1 Reis",
    capitulo: 5,
    vIni: 2,
    vFim: 18,
    titulo: "Os preparativos para edificar o templo"
  },
  "1rs6.2-13": {
    id: "1rs6.2-13",
    referencia: "1Rs 6.2-13",
    livro: "1 Reis",
    capitulo: 6,
    vIni: 2,
    vFim: 13,
    titulo: "Salomão edifica o templo"
  },
  "1rs6.14-22": {
    id: "1rs6.14-22",
    referencia: "1Rs 6.14-22",
    livro: "1 Reis",
    capitulo: 6,
    vIni: 14,
    vFim: 22,
    titulo: "O Santo dos Santos"
  },
  "1rs6.2-28": {
    id: "1rs6.2-28",
    referencia: "1Rs 6.2-28",
    livro: "1 Reis",
    capitulo: 6,
    vIni: 2,
    vFim: 28,
    titulo: "Os dois querubins"
  },
  "1rs6.29-38": {
    id: "1rs6.29-38",
    referencia: "1Rs 6.29-38",
    livro: "1 Reis",
    capitulo: 6,
    vIni: 29,
    vFim: 38,
    titulo: "Ornamentação das paredes e das portas"
  },
  "1rs7.1-14": {
    id: "1rs7.1-14",
    referencia: "1Rs 7.1-14",
    livro: "1 Reis",
    capitulo: 7,
    vIni: 1,
    vFim: 14,
    titulo: "Salomão edifica palácios reais"
  },
  "1rs7.2-22": {
    id: "1rs7.2-22",
    referencia: "1Rs 7.2-22",
    livro: "1 Reis",
    capitulo: 7,
    vIni: 2,
    vFim: 22,
    titulo: "As duas colunas do templo"
  },
  "1rs7.2-26": {
    id: "1rs7.2-26",
    referencia: "1Rs 7.2-26",
    livro: "1 Reis",
    capitulo: 7,
    vIni: 2,
    vFim: 26,
    titulo: "O mar de fundição"
  },
  "1rs7.2-50": {
    id: "1rs7.2-50",
    referencia: "1Rs 7.2-50",
    livro: "1 Reis",
    capitulo: 7,
    vIni: 2,
    vFim: 50,
    titulo: "Outros utensílios para o templo"
  },
  "1rs7.2-51": {
    id: "1rs7.2-51",
    referencia: "1Rs 7.2-51",
    livro: "1 Reis",
    capitulo: 7,
    vIni: 2,
    vFim: 51,
    titulo: "As dádivas de Davi colocadas no templo"
  },
  "1rs8.2-11": {
    id: "1rs8.2-11",
    referencia: "1Rs 8.2-11",
    livro: "1 Reis",
    capitulo: 8,
    vIni: 2,
    vFim: 11,
    titulo: "Salomão traz para o templo a arca"
  },
  "1rs8.2-21": {
    id: "1rs8.2-21",
    referencia: "1Rs 8.2-21",
    livro: "1 Reis",
    capitulo: 8,
    vIni: 2,
    vFim: 21,
    titulo: "Salomão fala ao povo"
  },
  "1rs8.2-53": {
    id: "1rs8.2-53",
    referencia: "1Rs 8.2-53",
    livro: "1 Reis",
    capitulo: 8,
    vIni: 2,
    vFim: 53,
    titulo: "Salomão ora a Deus"
  },
  "1rs8.54-61": {
    id: "1rs8.54-61",
    referencia: "1Rs 8.54-61",
    livro: "1 Reis",
    capitulo: 8,
    vIni: 54,
    vFim: 61,
    titulo: "Salomão abençoa ao povo"
  },
  "1rs8.2-66": {
    id: "1rs8.2-66",
    referencia: "1Rs 8.2-66",
    livro: "1 Reis",
    capitulo: 8,
    vIni: 2,
    vFim: 66,
    titulo: "A conclusão da solenidade"
  },
  "1rs9.2-9": {
    id: "1rs9.2-9",
    referencia: "1Rs 9.2-9",
    livro: "1 Reis",
    capitulo: 9,
    vIni: 2,
    vFim: 9,
    titulo: "A aliança do Senhor com Salomão"
  },
  "1rs9.2-28": {
    id: "1rs9.2-28",
    referencia: "1Rs 9.2-28",
    livro: "1 Reis",
    capitulo: 9,
    vIni: 2,
    vFim: 28,
    titulo: "As demais atividades de Salomão"
  },
  "1rs10.2-13": {
    id: "1rs10.2-13",
    referencia: "1Rs 10.2-13",
    livro: "1 Reis",
    capitulo: 10,
    vIni: 2,
    vFim: 13,
    titulo: "A rainha de Sabá visita a Salomão"
  },
  "1rs10.2-29": {
    id: "1rs10.2-29",
    referencia: "1Rs 10.2-29",
    livro: "1 Reis",
    capitulo: 10,
    vIni: 2,
    vFim: 29,
    titulo: "As riquezas de Salomão"
  },
  "1rs11.1-8": {
    id: "1rs11.1-8",
    referencia: "1Rs 11.1-8",
    livro: "1 Reis",
    capitulo: 11,
    vIni: 1,
    vFim: 8,
    titulo: "A idolatria de Salomão"
  },
  "1rs11.9-13": {
    id: "1rs11.9-13",
    referencia: "1Rs 11.9-13",
    livro: "1 Reis",
    capitulo: 11,
    vIni: 9,
    vFim: 13,
    titulo: "A ira de Deus contra Salomão"
  },
  "1rs11.14-25": {
    id: "1rs11.14-25",
    referencia: "1Rs 11.14-25",
    livro: "1 Reis",
    capitulo: 11,
    vIni: 14,
    vFim: 25,
    titulo: "Deus suscita adversários contra Salomão"
  },
  "1rs11.26-40": {
    id: "1rs11.26-40",
    referencia: "1Rs 11.26-40",
    livro: "1 Reis",
    capitulo: 11,
    vIni: 26,
    vFim: 40,
    titulo: "Aías prediz a Jeroboão que este reinará sobre Israel"
  },
  "1rs11.2-43": {
    id: "1rs11.2-43",
    referencia: "1Rs 11.2-43",
    livro: "1 Reis",
    capitulo: 11,
    vIni: 2,
    vFim: 43,
    titulo: "A morte de Salomão"
  },
  "1rs12.2-15": {
    id: "1rs12.2-15",
    referencia: "1Rs 12.2-15",
    livro: "1 Reis",
    capitulo: 12,
    vIni: 2,
    vFim: 15,
    titulo: "Roboão causa separação entre as tribos"
  },
  "1rs12.2-20": {
    id: "1rs12.2-20",
    referencia: "1Rs 12.2-20",
    livro: "1 Reis",
    capitulo: 12,
    vIni: 2,
    vFim: 20,
    titulo: "Dez tribos seguem Jeroboão"
  },
  "1rs12.2-24": {
    id: "1rs12.2-24",
    referencia: "1Rs 12.2-24",
    livro: "1 Reis",
    capitulo: 12,
    vIni: 2,
    vFim: 24,
    titulo: "Deus proíbe que Roboão peleje contra as dez tribos"
  },
  "1rs12.25-33": {
    id: "1rs12.25-33",
    referencia: "1Rs 12.25-33",
    livro: "1 Reis",
    capitulo: 12,
    vIni: 25,
    vFim: 33,
    titulo: "A idolatria de Jeroboão"
  },
  "1rs13.1-10": {
    id: "1rs13.1-10",
    referencia: "1Rs 13.1-10",
    livro: "1 Reis",
    capitulo: 13,
    vIni: 1,
    vFim: 10,
    titulo: "Um profeta prediz contra o altar"
  },
  "1rs13.11-32": {
    id: "1rs13.11-32",
    referencia: "1Rs 13.11-32",
    livro: "1 Reis",
    capitulo: 13,
    vIni: 11,
    vFim: 32,
    titulo: "A desobediência e o castigo do profeta"
  },
  "1rs13.33-34": {
    id: "1rs13.33-34",
    referencia: "1Rs 13.33-34",
    livro: "1 Reis",
    capitulo: 13,
    vIni: 33,
    vFim: 34,
    titulo: "A persistência de Jeroboão no pecado"
  },
  "1rs14.1-20": {
    id: "1rs14.1-20",
    referencia: "1Rs 14.1-20",
    livro: "1 Reis",
    capitulo: 14,
    vIni: 1,
    vFim: 20,
    titulo: "A profecia de Aías contra Jeroboão"
  },
  "1rs14.2-31": {
    id: "1rs14.2-31",
    referencia: "1Rs 14.2-31",
    livro: "1 Reis",
    capitulo: 14,
    vIni: 2,
    vFim: 31,
    titulo: "O reinado de Roboão, de Judá"
  },
  "1rs15.2-8": {
    id: "1rs15.2-8",
    referencia: "1Rs 15.2-8",
    livro: "1 Reis",
    capitulo: 15,
    vIni: 2,
    vFim: 8,
    titulo: "O reinado de Abias, de Judá"
  },
  "1rs15.2-24": {
    id: "1rs15.2-24",
    referencia: "1Rs 15.2-24",
    livro: "1 Reis",
    capitulo: 15,
    vIni: 2,
    vFim: 24,
    titulo: "O reinado de Asa, de Judá"
  },
  "1rs15.25-32": {
    id: "1rs15.25-32",
    referencia: "1Rs 15.25-32",
    livro: "1 Reis",
    capitulo: 15,
    vIni: 25,
    vFim: 32,
    titulo: "O mau reinado de Nadabe, de Israel"
  },
  "1rs15.33-34": {
    id: "1rs15.33-34",
    referencia: "1Rs 15.33-34",
    livro: "1 Reis",
    capitulo: 15,
    vIni: 33,
    vFim: 34,
    titulo: "O reinado de Baasa, de Israel"
  },
  "1rs16.1-7": {
    id: "1rs16.1-7",
    referencia: "1Rs 16.1-7",
    livro: "1 Reis",
    capitulo: 16,
    vIni: 1,
    vFim: 7,
    titulo: "A profecia de Jeú contra Baasa"
  },
  "1rs16.8-14": {
    id: "1rs16.8-14",
    referencia: "1Rs 16.8-14",
    livro: "1 Reis",
    capitulo: 16,
    vIni: 8,
    vFim: 14,
    titulo: "O reinado de Elá, de Israel, e a conspiração de Zinri"
  },
  "1rs16.15-20": {
    id: "1rs16.15-20",
    referencia: "1Rs 16.15-20",
    livro: "1 Reis",
    capitulo: 16,
    vIni: 15,
    vFim: 20,
    titulo: "O reinado de Zinri, de Israel"
  },
  "1rs16.21-28": {
    id: "1rs16.21-28",
    referencia: "1Rs 16.21-28",
    livro: "1 Reis",
    capitulo: 16,
    vIni: 21,
    vFim: 28,
    titulo: "O reinado de Onri, de Israel"
  },
  "1rs16.29-34": {
    id: "1rs16.29-34",
    referencia: "1Rs 16.29-34",
    livro: "1 Reis",
    capitulo: 16,
    vIni: 29,
    vFim: 34,
    titulo: "O reinado de Acabe, de Israel. Seu casamento com Jezabel"
  },
  "1rs17.1-7": {
    id: "1rs17.1-7",
    referencia: "1Rs 17.1-7",
    livro: "1 Reis",
    capitulo: 17,
    vIni: 1,
    vFim: 7,
    titulo: "Elias prediz grande seca. Corvos o sustentam"
  },
  "1rs17.8-24": {
    id: "1rs17.8-24",
    referencia: "1Rs 17.8-24",
    livro: "1 Reis",
    capitulo: 17,
    vIni: 8,
    vFim: 24,
    titulo: "Elias e a viúva de Sarepta"
  },
  "1rs18.1-19": {
    id: "1rs18.1-19",
    referencia: "1Rs 18.1-19",
    livro: "1 Reis",
    capitulo: 18,
    vIni: 1,
    vFim: 19,
    titulo: "Elias apresenta-se diante de Acabe"
  },
  "1rs18.20-40": {
    id: "1rs18.20-40",
    referencia: "1Rs 18.20-40",
    livro: "1 Reis",
    capitulo: 18,
    vIni: 20,
    vFim: 40,
    titulo: "Elias e os profetas de Baal no monte Carmelo"
  },
  "1rs18.41-46": {
    id: "1rs18.41-46",
    referencia: "1Rs 18.41-46",
    livro: "1 Reis",
    capitulo: 18,
    vIni: 41,
    vFim: 46,
    titulo: "Elias ora para que chova"
  },
  "1rs19.1-18": {
    id: "1rs19.1-18",
    referencia: "1Rs 19.1-18",
    livro: "1 Reis",
    capitulo: 19,
    vIni: 1,
    vFim: 18,
    titulo: "Elias no monte Horebe"
  },
  "1rs19.19-21": {
    id: "1rs19.19-21",
    referencia: "1Rs 19.19-21",
    livro: "1 Reis",
    capitulo: 19,
    vIni: 19,
    vFim: 21,
    titulo: "A vocação de Eliseu"
  },
  "1rs20.1-43": {
    id: "1rs20.1-43",
    referencia: "1Rs 20.1-43",
    livro: "1 Reis",
    capitulo: 20,
    vIni: 1,
    vFim: 43,
    titulo: "Acabe derrota os siros"
  },
  "1rs21.1-7": {
    id: "1rs21.1-7",
    referencia: "1Rs 21.1-7",
    livro: "1 Reis",
    capitulo: 21,
    vIni: 1,
    vFim: 7,
    titulo: "Nabote recusa vender a sua vinha a Acabe"
  },
  "1rs21.8-16": {
    id: "1rs21.8-16",
    referencia: "1Rs 21.8-16",
    livro: "1 Reis",
    capitulo: 21,
    vIni: 8,
    vFim: 16,
    titulo: "Jezabel ordena a morte de Nabote"
  },
  "1rs21.17-29": {
    id: "1rs21.17-29",
    referencia: "1Rs 21.17-29",
    livro: "1 Reis",
    capitulo: 21,
    vIni: 17,
    vFim: 29,
    titulo: "Elias ameaça a Acabe e Jezabel"
  },
  "1rs22.2-4": {
    id: "1rs22.2-4",
    referencia: "1Rs 22.2-4",
    livro: "1 Reis",
    capitulo: 22,
    vIni: 2,
    vFim: 4,
    titulo: "Aliança entre Josafá, de Judá, e Acabe"
  },
  "1rs22.2-12": {
    id: "1rs22.2-12",
    referencia: "1Rs 22.2-12",
    livro: "1 Reis",
    capitulo: 22,
    vIni: 2,
    vFim: 12,
    titulo: "As profecias dos falsos profetas"
  },
  "1rs22.2-28": {
    id: "1rs22.2-28",
    referencia: "1Rs 22.2-28",
    livro: "1 Reis",
    capitulo: 22,
    vIni: 2,
    vFim: 28,
    titulo: "A profecia de Micaías"
  },
  "1rs22.2-40": {
    id: "1rs22.2-40",
    referencia: "1Rs 22.2-40",
    livro: "1 Reis",
    capitulo: 22,
    vIni: 2,
    vFim: 40,
    titulo: "A morte de Acabe"
  },
  "1rs22.2-51": {
    id: "1rs22.2-51",
    referencia: "1Rs 22.2-51",
    livro: "1 Reis",
    capitulo: 22,
    vIni: 2,
    vFim: 51,
    titulo: "O reinado e a morte de Josafá"
  },
  "1rs22.52-54": {
    id: "1rs22.52-54",
    referencia: "1Rs 22.52-54",
    livro: "1 Reis",
    capitulo: 22,
    vIni: 52,
    vFim: 54,
    titulo: "O reinado de Acazias, de Israel"
  },
  "2rs1.1-8": {
    id: "2rs1.1-8",
    referencia: "2Rs 1.1-8",
    livro: "2 Reis",
    capitulo: 1,
    vIni: 1,
    vFim: 8,
    titulo: "Acazias e o profeta Elias"
  },
  "2rs1.9-16": {
    id: "2rs1.9-16",
    referencia: "2Rs 1.9-16",
    livro: "2 Reis",
    capitulo: 1,
    vIni: 9,
    vFim: 16,
    titulo: "Elias e os três capitães"
  },
  "2rs1.17-18": {
    id: "2rs1.17-18",
    referencia: "2Rs 1.17-18",
    livro: "2 Reis",
    capitulo: 1,
    vIni: 17,
    vFim: 18,
    titulo: "A morte de Acazias"
  },
  "2rs2.1-8": {
    id: "2rs2.1-8",
    referencia: "2Rs 2.1-8",
    livro: "2 Reis",
    capitulo: 2,
    vIni: 1,
    vFim: 8,
    titulo: "Eliseu é sucessor de Elias"
  },
  "2rs2.9-14": {
    id: "2rs2.9-14",
    referencia: "2Rs 2.9-14",
    livro: "2 Reis",
    capitulo: 2,
    vIni: 9,
    vFim: 14,
    titulo: "Elias é elevado ao céu"
  },
  "2rs2.15-18": {
    id: "2rs2.15-18",
    referencia: "2Rs 2.15-18",
    livro: "2 Reis",
    capitulo: 2,
    vIni: 15,
    vFim: 18,
    titulo: "Os discípulos dos profetas procuram Elias"
  },
  "2rs2.19-22": {
    id: "2rs2.19-22",
    referencia: "2Rs 2.19-22",
    livro: "2 Reis",
    capitulo: 2,
    vIni: 19,
    vFim: 22,
    titulo: "Eliseu torna saudáveis as águas de Jericó"
  },
  "2rs2.23-25": {
    id: "2rs2.23-25",
    referencia: "2Rs 2.23-25",
    livro: "2 Reis",
    capitulo: 2,
    vIni: 23,
    vFim: 25,
    titulo: "Rapazinhos zombam de Eliseu"
  },
  "2rs3.1-3": {
    id: "2rs3.1-3",
    referencia: "2Rs 3.1-3",
    livro: "2 Reis",
    capitulo: 3,
    vIni: 1,
    vFim: 3,
    titulo: "O reinado de Jorão sobre Israel"
  },
  "2rs3.4-20": {
    id: "2rs3.4-20",
    referencia: "2Rs 3.4-20",
    livro: "2 Reis",
    capitulo: 3,
    vIni: 4,
    vFim: 20,
    titulo: "Eliseu prediz a vitória sobre Moabe"
  },
  "2rs3.21-27": {
    id: "2rs3.21-27",
    referencia: "2Rs 3.21-27",
    livro: "2 Reis",
    capitulo: 3,
    vIni: 21,
    vFim: 27,
    titulo: "A derrota de Moabe"
  },
  "2rs4.1-7": {
    id: "2rs4.1-7",
    referencia: "2Rs 4.1-7",
    livro: "2 Reis",
    capitulo: 4,
    vIni: 1,
    vFim: 7,
    titulo: "Eliseu aumenta o azeite da viúva"
  },
  "2rs4.8-37": {
    id: "2rs4.8-37",
    referencia: "2Rs 4.8-37",
    livro: "2 Reis",
    capitulo: 4,
    vIni: 8,
    vFim: 37,
    titulo: "Eliseu e a sunamita"
  },
  "2rs4.38-41": {
    id: "2rs4.38-41",
    referencia: "2Rs 4.38-41",
    livro: "2 Reis",
    capitulo: 4,
    vIni: 38,
    vFim: 41,
    titulo: "A morte que havia na panela é tirada"
  },
  "2rs4.42-44": {
    id: "2rs4.42-44",
    referencia: "2Rs 4.42-44",
    livro: "2 Reis",
    capitulo: 4,
    vIni: 42,
    vFim: 44,
    titulo: "Vinte pães satisfazem a cem homens"
  },
  "2rs5.1-19": {
    id: "2rs5.1-19",
    referencia: "2Rs 5.1-19",
    livro: "2 Reis",
    capitulo: 5,
    vIni: 1,
    vFim: 19,
    titulo: "Naamã é curado de lepra"
  },
  "2rs5.20-27": {
    id: "2rs5.20-27",
    referencia: "2Rs 5.20-27",
    livro: "2 Reis",
    capitulo: 5,
    vIni: 20,
    vFim: 27,
    titulo: "Geazi é atacado de lepra"
  },
  "2rs6.1-7": {
    id: "2rs6.1-7",
    referencia: "2Rs 6.1-7",
    livro: "2 Reis",
    capitulo: 6,
    vIni: 1,
    vFim: 7,
    titulo: "Eliseu faz flutuar um machado"
  },
  "2rs6.8-23": {
    id: "2rs6.8-23",
    referencia: "2Rs 6.8-23",
    livro: "2 Reis",
    capitulo: 6,
    vIni: 8,
    vFim: 23,
    titulo: "A ação de Eliseu na guerra contra os siros"
  },
  "2rs6.24-30": {
    id: "2rs6.24-30",
    referencia: "2Rs 6.24-30",
    livro: "2 Reis",
    capitulo: 6,
    vIni: 24,
    vFim: 30,
    titulo: "Reina fome em Samaria"
  },
  "2rs6.31-33": {
    id: "2rs6.31-33",
    referencia: "2Rs 6.31-33",
    livro: "2 Reis",
    capitulo: 6,
    vIni: 31,
    vFim: 33,
    titulo: "Eliseu prediz a abundância de víveres"
  },
  "2rs7.3-15": {
    id: "2rs7.3-15",
    referencia: "2Rs 7.3-15",
    livro: "2 Reis",
    capitulo: 7,
    vIni: 3,
    vFim: 15,
    titulo: "Quatro leprosos revelam a fuga dos siros"
  },
  "2rs7.16-20": {
    id: "2rs7.16-20",
    referencia: "2Rs 7.16-20",
    livro: "2 Reis",
    capitulo: 7,
    vIni: 16,
    vFim: 20,
    titulo: "Cumpriu-se a profecia de Eliseu"
  },
  "2rs8.1-6": {
    id: "2rs8.1-6",
    referencia: "2Rs 8.1-6",
    livro: "2 Reis",
    capitulo: 8,
    vIni: 1,
    vFim: 6,
    titulo: "Restaurados os bens da sunamita"
  },
  "2rs8.7-15": {
    id: "2rs8.7-15",
    referencia: "2Rs 8.7-15",
    livro: "2 Reis",
    capitulo: 8,
    vIni: 7,
    vFim: 15,
    titulo: "Eliseu e Hazael de Damasco"
  },
  "2rs8.2-24": {
    id: "2rs8.2-24",
    referencia: "2Rs 8.2-24",
    livro: "2 Reis",
    capitulo: 8,
    vIni: 2,
    vFim: 24,
    titulo: "O reinado de Jeorão"
  },
  "2rs8.2-29": {
    id: "2rs8.2-29",
    referencia: "2Rs 8.2-29",
    livro: "2 Reis",
    capitulo: 8,
    vIni: 2,
    vFim: 29,
    titulo: "O reinado de Acazias"
  },
  "2rs9.1-13": {
    id: "2rs9.1-13",
    referencia: "2Rs 9.1-13",
    livro: "2 Reis",
    capitulo: 9,
    vIni: 1,
    vFim: 13,
    titulo: "Jeú é ungido rei de Israel"
  },
  "2rs9.14-29": {
    id: "2rs9.14-29",
    referencia: "2Rs 9.14-29",
    livro: "2 Reis",
    capitulo: 9,
    vIni: 14,
    vFim: 29,
    titulo: "Jeú mata a Jorão e a Acazias"
  },
  "2rs9.30-37": {
    id: "2rs9.30-37",
    referencia: "2Rs 9.30-37",
    livro: "2 Reis",
    capitulo: 9,
    vIni: 30,
    vFim: 37,
    titulo: "A morte de Jezabel"
  },
  "2rs10.1-14": {
    id: "2rs10.1-14",
    referencia: "2Rs 10.1-14",
    livro: "2 Reis",
    capitulo: 10,
    vIni: 1,
    vFim: 14,
    titulo: "Jeú extermina a casa de Acabe"
  },
  "2rs10.15-17": {
    id: "2rs10.15-17",
    referencia: "2Rs 10.15-17",
    livro: "2 Reis",
    capitulo: 10,
    vIni: 15,
    vFim: 17,
    titulo: "Jeú encontra a Jonadabe"
  },
  "2rs10.18-31": {
    id: "2rs10.18-31",
    referencia: "2Rs 10.18-31",
    livro: "2 Reis",
    capitulo: 10,
    vIni: 18,
    vFim: 31,
    titulo: "Jeú mata os adoradores de Baal"
  },
  "2rs10.32-36": {
    id: "2rs10.32-36",
    referencia: "2Rs 10.32-36",
    livro: "2 Reis",
    capitulo: 10,
    vIni: 32,
    vFim: 36,
    titulo: "A morte de Jeú"
  },
  "2rs11.2-3": {
    id: "2rs11.2-3",
    referencia: "2Rs 11.2-3",
    livro: "2 Reis",
    capitulo: 11,
    vIni: 2,
    vFim: 3,
    titulo: "Atalia usurpa o trono de Judá"
  },
  "2rs11.2-12": {
    id: "2rs11.2-12",
    referencia: "2Rs 11.2-12",
    livro: "2 Reis",
    capitulo: 11,
    vIni: 2,
    vFim: 12,
    titulo: "Joás ungido rei de Judá"
  },
  "2rs11.2-16": {
    id: "2rs11.2-16",
    referencia: "2Rs 11.2-16",
    livro: "2 Reis",
    capitulo: 11,
    vIni: 2,
    vFim: 16,
    titulo: "A morte de Atalia"
  },
  "2rs11.2-21": {
    id: "2rs11.2-21",
    referencia: "2Rs 11.2-21",
    livro: "2 Reis",
    capitulo: 11,
    vIni: 2,
    vFim: 21,
    titulo: "A aliança de Joiada"
  },
  "2rs12.2-19": {
    id: "2rs12.2-19",
    referencia: "2Rs 12.2-19",
    livro: "2 Reis",
    capitulo: 12,
    vIni: 2,
    vFim: 19,
    titulo: "O reinado de Joás"
  },
  "2rs12.2-21": {
    id: "2rs12.2-21",
    referencia: "2Rs 12.2-21",
    livro: "2 Reis",
    capitulo: 12,
    vIni: 2,
    vFim: 21,
    titulo: "A conspiração contra o rei Joás"
  },
  "2rs13.1-9": {
    id: "2rs13.1-9",
    referencia: "2Rs 13.1-9",
    livro: "2 Reis",
    capitulo: 13,
    vIni: 1,
    vFim: 9,
    titulo: "O reinado de Jeoacaz"
  },
  "2rs13.10-13": {
    id: "2rs13.10-13",
    referencia: "2Rs 13.10-13",
    livro: "2 Reis",
    capitulo: 13,
    vIni: 10,
    vFim: 13,
    titulo: "O reinado de Jeoás"
  },
  "2rs13.14-25": {
    id: "2rs13.14-25",
    referencia: "2Rs 13.14-25",
    livro: "2 Reis",
    capitulo: 13,
    vIni: 14,
    vFim: 25,
    titulo: "A profecia final e morte de Eliseu"
  },
  "2rs14.2-6": {
    id: "2rs14.2-6",
    referencia: "2Rs 14.2-6",
    livro: "2 Reis",
    capitulo: 14,
    vIni: 2,
    vFim: 6,
    titulo: "O reinado de Amazias, de Judá"
  },
  "2rs14.2-7": {
    id: "2rs14.2-7",
    referencia: "2Rs 14.2-7",
    livro: "2 Reis",
    capitulo: 14,
    vIni: 2,
    vFim: 7,
    titulo: "Amazias vence os edomitas"
  },
  "2rs14.2-14": {
    id: "2rs14.2-14",
    referencia: "2Rs 14.2-14",
    livro: "2 Reis",
    capitulo: 14,
    vIni: 2,
    vFim: 14,
    titulo: "Amazias derrotado por Jeoás"
  },
  "2rs14.15-16": {
    id: "2rs14.15-16",
    referencia: "2Rs 14.15-16",
    livro: "2 Reis",
    capitulo: 14,
    vIni: 15,
    vFim: 16,
    titulo: "A morte de Jeoás, rei de Israel"
  },
  "2rs14.2-22": {
    id: "2rs14.2-22",
    referencia: "2Rs 14.2-22",
    livro: "2 Reis",
    capitulo: 14,
    vIni: 2,
    vFim: 22,
    titulo: "A morte de Amazias, rei de Judá"
  },
  "2rs14.23-29": {
    id: "2rs14.23-29",
    referencia: "2Rs 14.23-29",
    livro: "2 Reis",
    capitulo: 14,
    vIni: 23,
    vFim: 29,
    titulo: "O reinado de Jeroboão II, de Israel"
  },
  "2rs15.2-4": {
    id: "2rs15.2-4",
    referencia: "2Rs 15.2-4",
    livro: "2 Reis",
    capitulo: 15,
    vIni: 2,
    vFim: 4,
    titulo: "O reinado de Azarias, de Judá"
  },
  "2rs15.2-7": {
    id: "2rs15.2-7",
    referencia: "2Rs 15.2-7",
    livro: "2 Reis",
    capitulo: 15,
    vIni: 2,
    vFim: 7,
    titulo: "Azarias é atacado de lepra"
  },
  "2rs15.8-12": {
    id: "2rs15.8-12",
    referencia: "2Rs 15.8-12",
    livro: "2 Reis",
    capitulo: 15,
    vIni: 8,
    vFim: 12,
    titulo: "O reinado de Zacarias, de Israel"
  },
  "2rs15.13-16": {
    id: "2rs15.13-16",
    referencia: "2Rs 15.13-16",
    livro: "2 Reis",
    capitulo: 15,
    vIni: 13,
    vFim: 16,
    titulo: "O reinado de Salum, de Israel"
  },
  "2rs15.17-22": {
    id: "2rs15.17-22",
    referencia: "2Rs 15.17-22",
    livro: "2 Reis",
    capitulo: 15,
    vIni: 17,
    vFim: 22,
    titulo: "O reinado de Menaém, de Israel"
  },
  "2rs15.23-26": {
    id: "2rs15.23-26",
    referencia: "2Rs 15.23-26",
    livro: "2 Reis",
    capitulo: 15,
    vIni: 23,
    vFim: 26,
    titulo: "O reinado de Pecaías, de Israel"
  },
  "2rs15.27-31": {
    id: "2rs15.27-31",
    referencia: "2Rs 15.27-31",
    livro: "2 Reis",
    capitulo: 15,
    vIni: 27,
    vFim: 31,
    titulo: "O reinado de Peca, de Israel"
  },
  "2rs15.2-38": {
    id: "2rs15.2-38",
    referencia: "2Rs 15.2-38",
    livro: "2 Reis",
    capitulo: 15,
    vIni: 2,
    vFim: 38,
    titulo: "O reinado de Jotão, de Judá"
  },
  "2rs16.2-4": {
    id: "2rs16.2-4",
    referencia: "2Rs 16.2-4",
    livro: "2 Reis",
    capitulo: 16,
    vIni: 2,
    vFim: 4,
    titulo: "O reinado de Acaz, de Judá"
  },
  "2rs16.5-9": {
    id: "2rs16.5-9",
    referencia: "2Rs 16.5-9",
    livro: "2 Reis",
    capitulo: 16,
    vIni: 5,
    vFim: 9,
    titulo: "Acaz pede socorro aos assírios"
  },
  "2rs16.2-18": {
    id: "2rs16.2-18",
    referencia: "2Rs 16.2-18",
    livro: "2 Reis",
    capitulo: 16,
    vIni: 2,
    vFim: 18,
    titulo: "A idolatria de Acaz"
  },
  "2rs16.2-20": {
    id: "2rs16.2-20",
    referencia: "2Rs 16.2-20",
    livro: "2 Reis",
    capitulo: 16,
    vIni: 2,
    vFim: 20,
    titulo: "A morte de Acaz"
  },
  "2rs17.1-2": {
    id: "2rs17.1-2",
    referencia: "2Rs 17.1-2",
    livro: "2 Reis",
    capitulo: 17,
    vIni: 1,
    vFim: 2,
    titulo: "O reinado de Oseias, de Israel"
  },
  "2rs17.3-6": {
    id: "2rs17.3-6",
    referencia: "2Rs 17.3-6",
    livro: "2 Reis",
    capitulo: 17,
    vIni: 3,
    vFim: 6,
    titulo: "A queda de Samaria e o cativeiro de Israel"
  },
  "2rs17.7-23": {
    id: "2rs17.7-23",
    referencia: "2Rs 17.7-23",
    livro: "2 Reis",
    capitulo: 17,
    vIni: 7,
    vFim: 23,
    titulo: "A causa do cativeiro"
  },
  "2rs17.24-28": {
    id: "2rs17.24-28",
    referencia: "2Rs 17.24-28",
    livro: "2 Reis",
    capitulo: 17,
    vIni: 24,
    vFim: 28,
    titulo: "O rei da Assíria renova a população de Samaria"
  },
  "2rs17.29-41": {
    id: "2rs17.29-41",
    referencia: "2Rs 17.29-41",
    livro: "2 Reis",
    capitulo: 17,
    vIni: 29,
    vFim: 41,
    titulo: "O culto misto dos samaritanos"
  },
  "2rs18.2-12": {
    id: "2rs18.2-12",
    referencia: "2Rs 18.2-12",
    livro: "2 Reis",
    capitulo: 18,
    vIni: 2,
    vFim: 12,
    titulo: "O reinado de Ezequias, de Judá"
  },
  "2rs18.2-18": {
    id: "2rs18.2-18",
    referencia: "2Rs 18.2-18",
    livro: "2 Reis",
    capitulo: 18,
    vIni: 2,
    vFim: 18,
    titulo: "Senaqueribe invade Judá"
  },
  "2rs18.2-37": {
    id: "2rs18.2-37",
    referencia: "2Rs 18.2-37",
    livro: "2 Reis",
    capitulo: 18,
    vIni: 2,
    vFim: 37,
    titulo: "Rabsaqué afronta a Ezequias e ao Senhor"
  },
  "2rs19.1-7": {
    id: "2rs19.1-7",
    referencia: "2Rs 19.1-7",
    livro: "2 Reis",
    capitulo: 19,
    vIni: 1,
    vFim: 7,
    titulo: "Ezequias consulta a Isaías"
  },
  "2rs19.8-13": {
    id: "2rs19.8-13",
    referencia: "2Rs 19.8-13",
    livro: "2 Reis",
    capitulo: 19,
    vIni: 8,
    vFim: 13,
    titulo: "A carta do rei da Assíria"
  },
  "2rs19.14-19": {
    id: "2rs19.14-19",
    referencia: "2Rs 19.14-19",
    livro: "2 Reis",
    capitulo: 19,
    vIni: 14,
    vFim: 19,
    titulo: "A oração de Ezequias"
  },
  "2rs19.20-34": {
    id: "2rs19.20-34",
    referencia: "2Rs 19.20-34",
    livro: "2 Reis",
    capitulo: 19,
    vIni: 20,
    vFim: 34,
    titulo: "O profeta conforta a Ezequias"
  },
  "2rs19.2-37": {
    id: "2rs19.2-37",
    referencia: "2Rs 19.2-37",
    livro: "2 Reis",
    capitulo: 19,
    vIni: 2,
    vFim: 37,
    titulo: "A destruição do exército dos assírios"
  },
  "2rs20.2-11": {
    id: "2rs20.2-11",
    referencia: "2Rs 20.2-11",
    livro: "2 Reis",
    capitulo: 20,
    vIni: 2,
    vFim: 11,
    titulo: "A doença de Ezequias e a sua cura maravilhosa"
  },
  "2rs20.12-19": {
    id: "2rs20.12-19",
    referencia: "2Rs 20.12-19",
    livro: "2 Reis",
    capitulo: 20,
    vIni: 12,
    vFim: 19,
    titulo: "A embaixada da Babilônia"
  },
  "2rs20.2-21": {
    id: "2rs20.2-21",
    referencia: "2Rs 20.2-21",
    livro: "2 Reis",
    capitulo: 20,
    vIni: 2,
    vFim: 21,
    titulo: "A morte de Ezequias"
  },
  "2rs21.2-9": {
    id: "2rs21.2-9",
    referencia: "2Rs 21.2-9",
    livro: "2 Reis",
    capitulo: 21,
    vIni: 2,
    vFim: 9,
    titulo: "O reinado de Manassés, de Judá"
  },
  "2rs21.10-16": {
    id: "2rs21.10-16",
    referencia: "2Rs 21.10-16",
    livro: "2 Reis",
    capitulo: 21,
    vIni: 10,
    vFim: 16,
    titulo: "O juízo a respeito de Judá"
  },
  "2rs21.2-18": {
    id: "2rs21.2-18",
    referencia: "2Rs 21.2-18",
    livro: "2 Reis",
    capitulo: 21,
    vIni: 2,
    vFim: 18,
    titulo: "A morte de Manassés"
  },
  "2rs21.2-26": {
    id: "2rs21.2-26",
    referencia: "2Rs 21.2-26",
    livro: "2 Reis",
    capitulo: 21,
    vIni: 2,
    vFim: 26,
    titulo: "O reinado de Amom, de Judá"
  },
  "2rs22.2": {
    id: "2rs22.2",
    referencia: "2Rs 22.2",
    livro: "2 Reis",
    capitulo: 22,
    vIni: 2,
    vFim: 2,
    titulo: "O reinado de Josias"
  },
  "2rs22.2-7": {
    id: "2rs22.2-7",
    referencia: "2Rs 22.2-7",
    livro: "2 Reis",
    capitulo: 22,
    vIni: 2,
    vFim: 7,
    titulo: "O rei repara o templo"
  },
  "2rs22.2-10": {
    id: "2rs22.2-10",
    referencia: "2Rs 22.2-10",
    livro: "2 Reis",
    capitulo: 22,
    vIni: 2,
    vFim: 10,
    titulo: "Hilquias acha o Livro da Lei"
  },
  "2rs22.2-20": {
    id: "2rs22.2-20",
    referencia: "2Rs 22.2-20",
    livro: "2 Reis",
    capitulo: 22,
    vIni: 2,
    vFim: 20,
    titulo: "Josias manda consultar a profetisa Hulda"
  },
  "2rs23.2-3": {
    id: "2rs23.2-3",
    referencia: "2Rs 23.2-3",
    livro: "2 Reis",
    capitulo: 23,
    vIni: 2,
    vFim: 3,
    titulo: "Josias renova a aliança ante o Senhor"
  },
  "2rs23.2-14": {
    id: "2rs23.2-14",
    referencia: "2Rs 23.2-14",
    livro: "2 Reis",
    capitulo: 23,
    vIni: 2,
    vFim: 14,
    titulo: "A purificação do templo e do culto"
  },
  "2rs23.15-20": {
    id: "2rs23.15-20",
    referencia: "2Rs 23.15-20",
    livro: "2 Reis",
    capitulo: 23,
    vIni: 15,
    vFim: 20,
    titulo: "Profanado e derribado o altar de Betel"
  },
  "2rs23.2-23": {
    id: "2rs23.2-23",
    referencia: "2Rs 23.2-23",
    livro: "2 Reis",
    capitulo: 23,
    vIni: 2,
    vFim: 23,
    titulo: "A celebração da Páscoa"
  },
  "2rs23.24-27": {
    id: "2rs23.24-27",
    referencia: "2Rs 23.24-27",
    livro: "2 Reis",
    capitulo: 23,
    vIni: 24,
    vFim: 27,
    titulo: "A piedade de Josias"
  },
  "2rs23.2-30": {
    id: "2rs23.2-30",
    referencia: "2Rs 23.2-30",
    livro: "2 Reis",
    capitulo: 23,
    vIni: 2,
    vFim: 30,
    titulo: "A morte de Josias"
  },
  "2rs23.2-35": {
    id: "2rs23.2-35",
    referencia: "2Rs 23.2-35",
    livro: "2 Reis",
    capitulo: 23,
    vIni: 2,
    vFim: 35,
    titulo: "O reinado e deposição de Joacaz"
  },
  "2rs23.2-37": {
    id: "2rs23.2-37",
    referencia: "2Rs 23.2-37",
    livro: "2 Reis",
    capitulo: 23,
    vIni: 2,
    vFim: 37,
    titulo: "O reinado de Jeoaquim"
  },
  "2rs24.2-9": {
    id: "2rs24.2-9",
    referencia: "2Rs 24.2-9",
    livro: "2 Reis",
    capitulo: 24,
    vIni: 2,
    vFim: 9,
    titulo: "O reinado de Joaquim"
  },
  "2rs24.10-17": {
    id: "2rs24.10-17",
    referencia: "2Rs 24.10-17",
    livro: "2 Reis",
    capitulo: 24,
    vIni: 10,
    vFim: 17,
    titulo: "Nabucodonosor leva cativa a nobreza de Jerusalém"
  },
  "2rs24.2-19": {
    id: "2rs24.2-19",
    referencia: "2Rs 24.2-19",
    livro: "2 Reis",
    capitulo: 24,
    vIni: 2,
    vFim: 19,
    titulo: "O reinado de Zedequias"
  },
  "2rs24.20": {
    id: "2rs24.20",
    referencia: "2Rs 24.20",
    livro: "2 Reis",
    capitulo: 24,
    vIni: 20,
    vFim: 20,
    titulo: "A queda de Jerusalém"
  },
  "2rs25.2-22": {
    id: "2rs25.2-22",
    referencia: "2Rs 25.2-22",
    livro: "2 Reis",
    capitulo: 25,
    vIni: 2,
    vFim: 22,
    titulo: "O cativeiro de Judá"
  },
  "2rs25.23-26": {
    id: "2rs25.23-26",
    referencia: "2Rs 25.23-26",
    livro: "2 Reis",
    capitulo: 25,
    vIni: 23,
    vFim: 26,
    titulo: "Ismael mata a Gedalias"
  },
  "2rs25.27-30": {
    id: "2rs25.27-30",
    referencia: "2Rs 25.27-30",
    livro: "2 Reis",
    capitulo: 25,
    vIni: 27,
    vFim: 30,
    titulo: "Libertado e honrado o rei Joaquim"
  },
  "1cr1.1-4": {
    id: "1cr1.1-4",
    referencia: "1Cr 1.1-4",
    livro: "1 Crônicas",
    capitulo: 1,
    vIni: 1,
    vFim: 4,
    titulo: "Descendentes de Adão"
  },
  "1cr1.5-23": {
    id: "1cr1.5-23",
    referencia: "1Cr 1.5-23",
    livro: "1 Crônicas",
    capitulo: 1,
    vIni: 5,
    vFim: 23,
    titulo: "Descendentes dos filhos de Noé"
  },
  "1cr1.24-27": {
    id: "1cr1.24-27",
    referencia: "1Cr 1.24-27",
    livro: "1 Crônicas",
    capitulo: 1,
    vIni: 24,
    vFim: 27,
    titulo: "Descendentes de Sem"
  },
  "1cr1.28-31": {
    id: "1cr1.28-31",
    referencia: "1Cr 1.28-31",
    livro: "1 Crônicas",
    capitulo: 1,
    vIni: 28,
    vFim: 31,
    titulo: "Descendentes de Ismael"
  },
  "1cr1.32-34": {
    id: "1cr1.32-34",
    referencia: "1Cr 1.32-34",
    livro: "1 Crônicas",
    capitulo: 1,
    vIni: 32,
    vFim: 34,
    titulo: "Descendentes de Abraão e Quetura"
  },
  "1cr1.35-37": {
    id: "1cr1.35-37",
    referencia: "1Cr 1.35-37",
    livro: "1 Crônicas",
    capitulo: 1,
    vIni: 35,
    vFim: 37,
    titulo: "Descendentes de Esaú"
  },
  "1cr1.38-42": {
    id: "1cr1.38-42",
    referencia: "1Cr 1.38-42",
    livro: "1 Crônicas",
    capitulo: 1,
    vIni: 38,
    vFim: 42,
    titulo: "Descendentes de Seir"
  },
  "1cr1.43-54": {
    id: "1cr1.43-54",
    referencia: "1Cr 1.43-54",
    livro: "1 Crônicas",
    capitulo: 1,
    vIni: 43,
    vFim: 54,
    titulo: "Reis e príncipes de Edom"
  },
  "1cr2.1-2": {
    id: "1cr2.1-2",
    referencia: "1Cr 2.1-2",
    livro: "1 Crônicas",
    capitulo: 2,
    vIni: 1,
    vFim: 2,
    titulo: "Descendentes de Jacó"
  },
  "1cr2.3-55": {
    id: "1cr2.3-55",
    referencia: "1Cr 2.3-55",
    livro: "1 Crônicas",
    capitulo: 2,
    vIni: 3,
    vFim: 55,
    titulo: "Descendentes de Judá"
  },
  "1cr3.2-9": {
    id: "1cr3.2-9",
    referencia: "1Cr 3.2-9",
    livro: "1 Crônicas",
    capitulo: 3,
    vIni: 2,
    vFim: 9,
    titulo: "Filhos de Davi"
  },
  "1cr3.10-24": {
    id: "1cr3.10-24",
    referencia: "1Cr 3.10-24",
    livro: "1 Crônicas",
    capitulo: 3,
    vIni: 10,
    vFim: 24,
    titulo: "Descendentes de Salomão"
  },
  "1cr4.1-23": {
    id: "1cr4.1-23",
    referencia: "1Cr 4.1-23",
    livro: "1 Crônicas",
    capitulo: 4,
    vIni: 1,
    vFim: 23,
    titulo: "Descendentes de Judá"
  },
  "1cr4.24-43": {
    id: "1cr4.24-43",
    referencia: "1Cr 4.24-43",
    livro: "1 Crônicas",
    capitulo: 4,
    vIni: 24,
    vFim: 43,
    titulo: "Descendentes de Simeão"
  },
  "1cr5.1-10": {
    id: "1cr5.1-10",
    referencia: "1Cr 5.1-10",
    livro: "1 Crônicas",
    capitulo: 5,
    vIni: 1,
    vFim: 10,
    titulo: "Descendentes de Rúben"
  },
  "1cr5.11-17": {
    id: "1cr5.11-17",
    referencia: "1Cr 5.11-17",
    livro: "1 Crônicas",
    capitulo: 5,
    vIni: 11,
    vFim: 17,
    titulo: "Descendentes de Gade"
  },
  "1cr5.18-26": {
    id: "1cr5.18-26",
    referencia: "1Cr 5.18-26",
    livro: "1 Crônicas",
    capitulo: 5,
    vIni: 18,
    vFim: 26,
    titulo: "A história das tribos transjordânicas"
  },
  "1cr6.1-30": {
    id: "1cr6.1-30",
    referencia: "1Cr 6.1-30",
    livro: "1 Crônicas",
    capitulo: 6,
    vIni: 1,
    vFim: 30,
    titulo: "Descendentes de Levi"
  },
  "1cr6.31-48": {
    id: "1cr6.31-48",
    referencia: "1Cr 6.31-48",
    livro: "1 Crônicas",
    capitulo: 6,
    vIni: 31,
    vFim: 48,
    titulo: "Cantores levitas"
  },
  "1cr6.49-53": {
    id: "1cr6.49-53",
    referencia: "1Cr 6.49-53",
    livro: "1 Crônicas",
    capitulo: 6,
    vIni: 49,
    vFim: 53,
    titulo: "Descendentes de Arão"
  },
  "1cr6.54-81": {
    id: "1cr6.54-81",
    referencia: "1Cr 6.54-81",
    livro: "1 Crônicas",
    capitulo: 6,
    vIni: 54,
    vFim: 81,
    titulo: "As cidades dos levitas"
  },
  "1cr7.1-5": {
    id: "1cr7.1-5",
    referencia: "1Cr 7.1-5",
    livro: "1 Crônicas",
    capitulo: 7,
    vIni: 1,
    vFim: 5,
    titulo: "Descendentes de Issacar"
  },
  "1cr7.6-13": {
    id: "1cr7.6-13",
    referencia: "1Cr 7.6-13",
    livro: "1 Crônicas",
    capitulo: 7,
    vIni: 6,
    vFim: 13,
    titulo: "Descendentes de Benjamim"
  },
  "1cr7.14-19": {
    id: "1cr7.14-19",
    referencia: "1Cr 7.14-19",
    livro: "1 Crônicas",
    capitulo: 7,
    vIni: 14,
    vFim: 19,
    titulo: "Descendentes de Manassés"
  },
  "1cr7.20-29": {
    id: "1cr7.20-29",
    referencia: "1Cr 7.20-29",
    livro: "1 Crônicas",
    capitulo: 7,
    vIni: 20,
    vFim: 29,
    titulo: "Descendentes de Efraim"
  },
  "1cr7.30-40": {
    id: "1cr7.30-40",
    referencia: "1Cr 7.30-40",
    livro: "1 Crônicas",
    capitulo: 7,
    vIni: 30,
    vFim: 40,
    titulo: "Descendentes de Aser"
  },
  "1cr8.1-40": {
    id: "1cr8.1-40",
    referencia: "1Cr 8.1-40",
    livro: "1 Crônicas",
    capitulo: 8,
    vIni: 1,
    vFim: 40,
    titulo: "Descendentes de Benjamim"
  },
  "1cr9.1-44": {
    id: "1cr9.1-44",
    referencia: "1Cr 9.1-44",
    livro: "1 Crônicas",
    capitulo: 9,
    vIni: 1,
    vFim: 44,
    titulo: "Habitantes de Jerusalém depois do cativeiro"
  },
  "1cr10.1-7": {
    id: "1cr10.1-7",
    referencia: "1Cr 10.1-7",
    livro: "1 Crônicas",
    capitulo: 10,
    vIni: 1,
    vFim: 7,
    titulo: "A derrota de Israel e a morte de Saul"
  },
  "1cr10.1-14": {
    id: "1cr10.1-14",
    referencia: "1Cr 10.1-14",
    livro: "1 Crônicas",
    capitulo: 10,
    vIni: 1,
    vFim: 14,
    titulo: "A sepultura de Saul"
  },
  "1cr11.2-3": {
    id: "1cr11.2-3",
    referencia: "1Cr 11.2-3",
    livro: "1 Crônicas",
    capitulo: 11,
    vIni: 2,
    vFim: 3,
    titulo: "Davi é ungido rei"
  },
  "1cr11.2-9": {
    id: "1cr11.2-9",
    referencia: "1Cr 11.2-9",
    livro: "1 Crônicas",
    capitulo: 11,
    vIni: 2,
    vFim: 9,
    titulo: "Davi conquista a Sião"
  },
  "1cr11.2-47": {
    id: "1cr11.2-47",
    referencia: "1Cr 11.2-47",
    livro: "1 Crônicas",
    capitulo: 11,
    vIni: 2,
    vFim: 47,
    titulo: "Os valentes de Davi"
  },
  "1cr12.1-22": {
    id: "1cr12.1-22",
    referencia: "1Cr 12.1-22",
    livro: "1 Crônicas",
    capitulo: 12,
    vIni: 1,
    vFim: 22,
    titulo: "O exército de Davi"
  },
  "1cr12.23-40": {
    id: "1cr12.23-40",
    referencia: "1Cr 12.23-40",
    livro: "1 Crônicas",
    capitulo: 12,
    vIni: 23,
    vFim: 40,
    titulo: "O exército que proclamou a Davi rei em Hebrom"
  },
  "1cr13.1-4": {
    id: "1cr13.1-4",
    referencia: "1Cr 13.1-4",
    livro: "1 Crônicas",
    capitulo: 13,
    vIni: 1,
    vFim: 4,
    titulo: "Davi dispõe-se a trazer a arca para Jerusalém"
  },
  "1cr13.2-14": {
    id: "1cr13.2-14",
    referencia: "1Cr 13.2-14",
    livro: "1 Crônicas",
    capitulo: 13,
    vIni: 2,
    vFim: 14,
    titulo: "Davi procura trazer a arca"
  },
  "1cr14.2": {
    id: "1cr14.2",
    referencia: "1Cr 14.2",
    livro: "1 Crônicas",
    capitulo: 14,
    vIni: 2,
    vFim: 2,
    titulo: "O reinado de Davi reconhecido por Hirão"
  },
  "1cr14.2-7": {
    id: "1cr14.2-7",
    referencia: "1Cr 14.2-7",
    livro: "1 Crônicas",
    capitulo: 14,
    vIni: 2,
    vFim: 7,
    titulo: "Os filhos de Davi que nasceram em Jerusalém"
  },
  "1cr14.2-17": {
    id: "1cr14.2-17",
    referencia: "1Cr 14.2-17",
    livro: "1 Crônicas",
    capitulo: 14,
    vIni: 2,
    vFim: 17,
    titulo: "Davi derrota os filisteus"
  },
  "1cr15.1-15": {
    id: "1cr15.1-15",
    referencia: "1Cr 15.1-15",
    livro: "1 Crônicas",
    capitulo: 15,
    vIni: 1,
    vFim: 15,
    titulo: "Os levitas designados para levarem a arca"
  },
  "1cr15.16-24": {
    id: "1cr15.16-24",
    referencia: "1Cr 15.16-24",
    livro: "1 Crônicas",
    capitulo: 15,
    vIni: 16,
    vFim: 24,
    titulo: "Designados os músicos para o templo"
  },
  "1cr15.25-28": {
    id: "1cr15.25-28",
    referencia: "1Cr 15.25-28",
    livro: "1 Crônicas",
    capitulo: 15,
    vIni: 25,
    vFim: 28,
    titulo: "A arca é levada para Jerusalém"
  },
  "1cr15.2-29": {
    id: "1cr15.2-29",
    referencia: "1Cr 15.2-29",
    livro: "1 Crônicas",
    capitulo: 15,
    vIni: 2,
    vFim: 29,
    titulo: "Mical despreza a Davi"
  },
  "1cr16.1-6": {
    id: "1cr16.1-6",
    referencia: "1Cr 16.1-6",
    livro: "1 Crônicas",
    capitulo: 16,
    vIni: 1,
    vFim: 6,
    titulo: "Oferta de sacrifícios"
  },
  "1cr16.7-36": {
    id: "1cr16.7-36",
    referencia: "1Cr 16.7-36",
    livro: "1 Crônicas",
    capitulo: 16,
    vIni: 7,
    vFim: 36,
    titulo: "Salmo de Davi em ações de graças"
  },
  "1cr16.37-43": {
    id: "1cr16.37-43",
    referencia: "1Cr 16.37-43",
    livro: "1 Crônicas",
    capitulo: 16,
    vIni: 37,
    vFim: 43,
    titulo: "Outros dispositivos para o culto"
  },
  "1cr17.2-15": {
    id: "1cr17.2-15",
    referencia: "1Cr 17.2-15",
    livro: "1 Crônicas",
    capitulo: 17,
    vIni: 2,
    vFim: 15,
    titulo: "A aliança do Senhor com Davi"
  },
  "1cr17.2-27": {
    id: "1cr17.2-27",
    referencia: "1Cr 17.2-27",
    livro: "1 Crônicas",
    capitulo: 17,
    vIni: 2,
    vFim: 27,
    titulo: "Ações de graças de Davi"
  },
  "1cr18.2-13": {
    id: "1cr18.2-13",
    referencia: "1Cr 18.2-13",
    livro: "1 Crônicas",
    capitulo: 18,
    vIni: 2,
    vFim: 13,
    titulo: "Diversas vitórias de Davi"
  },
  "1cr18.2-17": {
    id: "1cr18.2-17",
    referencia: "1Cr 18.2-17",
    livro: "1 Crônicas",
    capitulo: 18,
    vIni: 2,
    vFim: 17,
    titulo: "Oficiais de Davi"
  },
  "1cr19.2-19": {
    id: "1cr19.2-19",
    referencia: "1Cr 19.2-19",
    livro: "1 Crônicas",
    capitulo: 19,
    vIni: 2,
    vFim: 19,
    titulo: "Davi derrota os amonitas e os siros"
  },
  "1cr20.2-3": {
    id: "1cr20.2-3",
    referencia: "1Cr 20.2-3",
    livro: "1 Crônicas",
    capitulo: 20,
    vIni: 2,
    vFim: 3,
    titulo: "Davi conquista a Rabá"
  },
  "1cr20.2-8": {
    id: "1cr20.2-8",
    referencia: "1Cr 20.2-8",
    livro: "1 Crônicas",
    capitulo: 20,
    vIni: 2,
    vFim: 8,
    titulo: "Gigantes mortos pelos homens de Davi"
  },
  "1cr21.2-6": {
    id: "1cr21.2-6",
    referencia: "1Cr 21.2-6",
    livro: "1 Crônicas",
    capitulo: 21,
    vIni: 2,
    vFim: 6,
    titulo: "O levantamento do censo"
  },
  "1cr21.2-17": {
    id: "1cr21.2-17",
    referencia: "1Cr 21.2-17",
    livro: "1 Crônicas",
    capitulo: 21,
    vIni: 2,
    vFim: 17,
    titulo: "Davi escolhe o castigo"
  },
  "1cr21.2-27": {
    id: "1cr21.2-27",
    referencia: "1Cr 21.2-27",
    livro: "1 Crônicas",
    capitulo: 21,
    vIni: 2,
    vFim: 27,
    titulo: "Davi erige um altar na eira de Ornã"
  },
  "1cr21.28-30": {
    id: "1cr21.28-30",
    referencia: "1Cr 21.28-30",
    livro: "1 Crônicas",
    capitulo: 21,
    vIni: 28,
    vFim: 30,
    titulo: "O lugar do templo"
  },
  "1cr22.1-5": {
    id: "1cr22.1-5",
    referencia: "1Cr 22.1-5",
    livro: "1 Crônicas",
    capitulo: 22,
    vIni: 1,
    vFim: 5,
    titulo: "Davi faz preparativos para edificar o templo"
  },
  "1cr22.6-19": {
    id: "1cr22.6-19",
    referencia: "1Cr 22.6-19",
    livro: "1 Crônicas",
    capitulo: 22,
    vIni: 6,
    vFim: 19,
    titulo: "Ordens de Davi a Salomão"
  },
  "1cr23.1-32": {
    id: "1cr23.1-32",
    referencia: "1Cr 23.1-32",
    livro: "1 Crônicas",
    capitulo: 23,
    vIni: 1,
    vFim: 32,
    titulo: "Os turnos e funções dos levitas"
  },
  "1cr24.1-31": {
    id: "1cr24.1-31",
    referencia: "1Cr 24.1-31",
    livro: "1 Crônicas",
    capitulo: 24,
    vIni: 1,
    vFim: 31,
    titulo: "Os turnos dos sacerdotes"
  },
  "1cr25.1-31": {
    id: "1cr25.1-31",
    referencia: "1Cr 25.1-31",
    livro: "1 Crônicas",
    capitulo: 25,
    vIni: 1,
    vFim: 31,
    titulo: "Função dos cantores"
  },
  "1cr26.1-19": {
    id: "1cr26.1-19",
    referencia: "1Cr 26.1-19",
    livro: "1 Crônicas",
    capitulo: 26,
    vIni: 1,
    vFim: 19,
    titulo: "Os porteiros"
  },
  "1cr26.20-28": {
    id: "1cr26.20-28",
    referencia: "1Cr 26.20-28",
    livro: "1 Crônicas",
    capitulo: 26,
    vIni: 20,
    vFim: 28,
    titulo: "Os guardas dos tesouros"
  },
  "1cr26.29-32": {
    id: "1cr26.29-32",
    referencia: "1Cr 26.29-32",
    livro: "1 Crônicas",
    capitulo: 26,
    vIni: 29,
    vFim: 32,
    titulo: "Os oficiais e os juízes"
  },
  "1cr27.1-15": {
    id: "1cr27.1-15",
    referencia: "1Cr 27.1-15",
    livro: "1 Crônicas",
    capitulo: 27,
    vIni: 1,
    vFim: 15,
    titulo: "Os turnos de serviço para cada mês"
  },
  "1cr27.16-24": {
    id: "1cr27.16-24",
    referencia: "1Cr 27.16-24",
    livro: "1 Crônicas",
    capitulo: 27,
    vIni: 16,
    vFim: 24,
    titulo: "Os chefes das tribos"
  },
  "1cr27.25-31": {
    id: "1cr27.25-31",
    referencia: "1Cr 27.25-31",
    livro: "1 Crônicas",
    capitulo: 27,
    vIni: 25,
    vFim: 31,
    titulo: "Os administradores das possessões de Davi"
  },
  "1cr27.32-34": {
    id: "1cr27.32-34",
    referencia: "1Cr 27.32-34",
    livro: "1 Crônicas",
    capitulo: 27,
    vIni: 32,
    vFim: 34,
    titulo: "Os conselheiros do rei"
  },
  "1cr28.1-10": {
    id: "1cr28.1-10",
    referencia: "1Cr 28.1-10",
    livro: "1 Crônicas",
    capitulo: 28,
    vIni: 1,
    vFim: 10,
    titulo: "Davi apresenta a Salomão como seu sucessor"
  },
  "1cr28.11-21": {
    id: "1cr28.11-21",
    referencia: "1Cr 28.11-21",
    livro: "1 Crônicas",
    capitulo: 28,
    vIni: 11,
    vFim: 21,
    titulo: "Davi dá a Salomão a planta do templo"
  },
  "1cr29.1-9": {
    id: "1cr29.1-9",
    referencia: "1Cr 29.1-9",
    livro: "1 Crônicas",
    capitulo: 29,
    vIni: 1,
    vFim: 9,
    titulo: "As ofertas de Davi e dos príncipes"
  },
  "1cr29.10-22": {
    id: "1cr29.10-22",
    referencia: "1Cr 29.10-22",
    livro: "1 Crônicas",
    capitulo: 29,
    vIni: 10,
    vFim: 22,
    titulo: "Oração de Davi"
  },
  "1cr29.23-25": {
    id: "1cr29.23-25",
    referencia: "1Cr 29.23-25",
    livro: "1 Crônicas",
    capitulo: 29,
    vIni: 23,
    vFim: 25,
    titulo: "Salomão proclamado rei"
  },
  "1cr29.26-30": {
    id: "1cr29.26-30",
    referencia: "1Cr 29.26-30",
    livro: "1 Crônicas",
    capitulo: 29,
    vIni: 26,
    vFim: 30,
    titulo: "A morte de Davi"
  },
  "2cr1.1-5": {
    id: "2cr1.1-5",
    referencia: "2Cr 1.1-5",
    livro: "2 Crônicas",
    capitulo: 1,
    vIni: 1,
    vFim: 5,
    titulo: "Salomão oferece sacrifícios em Gibeão"
  },
  "2cr1.1-13": {
    id: "2cr1.1-13",
    referencia: "2Cr 1.1-13",
    livro: "2 Crônicas",
    capitulo: 1,
    vIni: 1,
    vFim: 13,
    titulo: "Salomão pede a Deus sabedoria"
  },
  "2cr1.1-17": {
    id: "2cr1.1-17",
    referencia: "2Cr 1.1-17",
    livro: "2 Crônicas",
    capitulo: 1,
    vIni: 1,
    vFim: 17,
    titulo: "As riquezas de Salomão"
  },
  "2cr2.1-16": {
    id: "2cr2.1-16",
    referencia: "2Cr 2.1-16",
    livro: "2 Crônicas",
    capitulo: 2,
    vIni: 1,
    vFim: 16,
    titulo: "Salomão faz aliança com Hirão"
  },
  "2cr2.1-18": {
    id: "2cr2.1-18",
    referencia: "2Cr 2.1-18",
    livro: "2 Crônicas",
    capitulo: 2,
    vIni: 1,
    vFim: 18,
    titulo: "Os preparativos para edificar o templo"
  },
  "2cr3.1-9": {
    id: "2cr3.1-9",
    referencia: "2Cr 3.1-9",
    livro: "2 Crônicas",
    capitulo: 3,
    vIni: 1,
    vFim: 9,
    titulo: "Salomão edifica o templo"
  },
  "2cr3.1-14": {
    id: "2cr3.1-14",
    referencia: "2Cr 3.1-14",
    livro: "2 Crônicas",
    capitulo: 3,
    vIni: 1,
    vFim: 14,
    titulo: "Os dois querubins"
  },
  "2cr3.1-17": {
    id: "2cr3.1-17",
    referencia: "2Cr 3.1-17",
    livro: "2 Crônicas",
    capitulo: 3,
    vIni: 1,
    vFim: 17,
    titulo: "As duas colunas"
  },
  "2cr4.1-5": {
    id: "2cr4.1-5",
    referencia: "2Cr 4.1-5",
    livro: "2 Crônicas",
    capitulo: 4,
    vIni: 1,
    vFim: 5,
    titulo: "O mar de fundição"
  },
  "2cr4.1-22": {
    id: "2cr4.1-22",
    referencia: "2Cr 4.1-22",
    livro: "2 Crônicas",
    capitulo: 4,
    vIni: 1,
    vFim: 22,
    titulo: "Outros utensílios para o templo"
  },
  "2cr5.1": {
    id: "2cr5.1",
    referencia: "2Cr 5.1",
    livro: "2 Crônicas",
    capitulo: 5,
    vIni: 1,
    vFim: 1,
    titulo: "As dádivas de Davi colocadas no templo"
  },
  "2cr5.1-14": {
    id: "2cr5.1-14",
    referencia: "2Cr 5.1-14",
    livro: "2 Crônicas",
    capitulo: 5,
    vIni: 1,
    vFim: 14,
    titulo: "Salomão traz para o templo a arca"
  },
  "2cr6.1-11": {
    id: "2cr6.1-11",
    referencia: "2Cr 6.1-11",
    livro: "2 Crônicas",
    capitulo: 6,
    vIni: 1,
    vFim: 11,
    titulo: "Salomão fala ao povo"
  },
  "2cr6.1-42": {
    id: "2cr6.1-42",
    referencia: "2Cr 6.1-42",
    livro: "2 Crônicas",
    capitulo: 6,
    vIni: 1,
    vFim: 42,
    titulo: "Salomão ora a Deus"
  },
  "2cr7.1-3": {
    id: "2cr7.1-3",
    referencia: "2Cr 7.1-3",
    livro: "2 Crônicas",
    capitulo: 7,
    vIni: 1,
    vFim: 3,
    titulo: "A glória de Deus enche o templo"
  },
  "2cr7.1-10": {
    id: "2cr7.1-10",
    referencia: "2Cr 7.1-10",
    livro: "2 Crônicas",
    capitulo: 7,
    vIni: 1,
    vFim: 10,
    titulo: "A conclusão da solenidade"
  },
  "2cr7.1-22": {
    id: "2cr7.1-22",
    referencia: "2Cr 7.1-22",
    livro: "2 Crônicas",
    capitulo: 7,
    vIni: 1,
    vFim: 22,
    titulo: "A aliança do Senhor com Salomão"
  },
  "2cr8.1-18": {
    id: "2cr8.1-18",
    referencia: "2Cr 8.1-18",
    livro: "2 Crônicas",
    capitulo: 8,
    vIni: 1,
    vFim: 18,
    titulo: "As demais atividades de Salomão"
  },
  "2cr9.1-12": {
    id: "2cr9.1-12",
    referencia: "2Cr 9.1-12",
    livro: "2 Crônicas",
    capitulo: 9,
    vIni: 1,
    vFim: 12,
    titulo: "A rainha de Sabá visita a Salomão"
  },
  "2cr9.1-28": {
    id: "2cr9.1-28",
    referencia: "2Cr 9.1-28",
    livro: "2 Crônicas",
    capitulo: 9,
    vIni: 1,
    vFim: 28,
    titulo: "As riquezas de Salomão"
  },
  "2cr9.1-31": {
    id: "2cr9.1-31",
    referencia: "2Cr 9.1-31",
    livro: "2 Crônicas",
    capitulo: 9,
    vIni: 1,
    vFim: 31,
    titulo: "A morte de Salomão"
  },
  "2cr10.1-15": {
    id: "2cr10.1-15",
    referencia: "2Cr 10.1-15",
    livro: "2 Crônicas",
    capitulo: 10,
    vIni: 1,
    vFim: 15,
    titulo: "Roboão causa separação entre as tribos"
  },
  "2cr10.1-19": {
    id: "2cr10.1-19",
    referencia: "2Cr 10.1-19",
    livro: "2 Crônicas",
    capitulo: 10,
    vIni: 1,
    vFim: 19,
    titulo: "Dez tribos seguem Jeroboão"
  },
  "2cr11.1-4": {
    id: "2cr11.1-4",
    referencia: "2Cr 11.1-4",
    livro: "2 Crônicas",
    capitulo: 11,
    vIni: 1,
    vFim: 4,
    titulo: "Deus proíbe que Roboão peleje contra as dez tribos"
  },
  "2cr11.5-12": {
    id: "2cr11.5-12",
    referencia: "2Cr 11.5-12",
    livro: "2 Crônicas",
    capitulo: 11,
    vIni: 5,
    vFim: 12,
    titulo: "As cidades fortificadas de Roboão"
  },
  "2cr11.13-17": {
    id: "2cr11.13-17",
    referencia: "2Cr 11.13-17",
    livro: "2 Crônicas",
    capitulo: 11,
    vIni: 13,
    vFim: 17,
    titulo: "Sacerdotes e levitas vêm a Jerusalém"
  },
  "2cr11.18-23": {
    id: "2cr11.18-23",
    referencia: "2Cr 11.18-23",
    livro: "2 Crônicas",
    capitulo: 11,
    vIni: 18,
    vFim: 23,
    titulo: "A família de Roboão"
  },
  "2cr12.1-12": {
    id: "2cr12.1-12",
    referencia: "2Cr 12.1-12",
    livro: "2 Crônicas",
    capitulo: 12,
    vIni: 1,
    vFim: 12,
    titulo: "A invasão de Sisaque"
  },
  "2cr12.1-16": {
    id: "2cr12.1-16",
    referencia: "2Cr 12.1-16",
    livro: "2 Crônicas",
    capitulo: 12,
    vIni: 1,
    vFim: 16,
    titulo: "O reinado de Roboão"
  },
  "2cr13.1-22": {
    id: "2cr13.1-22",
    referencia: "2Cr 13.1-22",
    livro: "2 Crônicas",
    capitulo: 13,
    vIni: 1,
    vFim: 22,
    titulo: "O reinado de Abias"
  },
  "2cr14.1-8": {
    id: "2cr14.1-8",
    referencia: "2Cr 14.1-8",
    livro: "2 Crônicas",
    capitulo: 14,
    vIni: 1,
    vFim: 8,
    titulo: "O reinado de Asa"
  },
  "2cr14.9-15": {
    id: "2cr14.9-15",
    referencia: "2Cr 14.9-15",
    livro: "2 Crônicas",
    capitulo: 14,
    vIni: 9,
    vFim: 15,
    titulo: "Asa vence a Zerá, o etíope"
  },
  "2cr15.1-19": {
    id: "2cr15.1-19",
    referencia: "2Cr 15.1-19",
    livro: "2 Crônicas",
    capitulo: 15,
    vIni: 1,
    vFim: 19,
    titulo: "As reformas religiosas de Asa"
  },
  "2cr16.1-6": {
    id: "2cr16.1-6",
    referencia: "2Cr 16.1-6",
    livro: "2 Crônicas",
    capitulo: 16,
    vIni: 1,
    vFim: 6,
    titulo: "Asa faz aliança com o rei da Síria"
  },
  "2cr16.7-11": {
    id: "2cr16.7-11",
    referencia: "2Cr 16.7-11",
    livro: "2 Crônicas",
    capitulo: 16,
    vIni: 7,
    vFim: 11,
    titulo: "Asa repreendido por Hanani"
  },
  "2cr16.1-14": {
    id: "2cr16.1-14",
    referencia: "2Cr 16.1-14",
    livro: "2 Crônicas",
    capitulo: 16,
    vIni: 1,
    vFim: 14,
    titulo: "A morte de Asa"
  },
  "2cr17.1-19": {
    id: "2cr17.1-19",
    referencia: "2Cr 17.1-19",
    livro: "2 Crônicas",
    capitulo: 17,
    vIni: 1,
    vFim: 19,
    titulo: "Estabelecido o reinado de Josafá"
  },
  "2cr18.1-3": {
    id: "2cr18.1-3",
    referencia: "2Cr 18.1-3",
    livro: "2 Crônicas",
    capitulo: 18,
    vIni: 1,
    vFim: 3,
    titulo: "Aliança entre Josafá e Acabe"
  },
  "2cr18.1-11": {
    id: "2cr18.1-11",
    referencia: "2Cr 18.1-11",
    livro: "2 Crônicas",
    capitulo: 18,
    vIni: 1,
    vFim: 11,
    titulo: "As promessas dos falsos profetas"
  },
  "2cr18.1-27": {
    id: "2cr18.1-27",
    referencia: "2Cr 18.1-27",
    livro: "2 Crônicas",
    capitulo: 18,
    vIni: 1,
    vFim: 27,
    titulo: "A profecia de Micaías"
  },
  "2cr18.1-34": {
    id: "2cr18.1-34",
    referencia: "2Cr 18.1-34",
    livro: "2 Crônicas",
    capitulo: 18,
    vIni: 1,
    vFim: 34,
    titulo: "A morte de Acabe"
  },
  "2cr19.1-3": {
    id: "2cr19.1-3",
    referencia: "2Cr 19.1-3",
    livro: "2 Crônicas",
    capitulo: 19,
    vIni: 1,
    vFim: 3,
    titulo: "O profeta Jeú repreende a Josafá"
  },
  "2cr19.4-11": {
    id: "2cr19.4-11",
    referencia: "2Cr 19.4-11",
    livro: "2 Crônicas",
    capitulo: 19,
    vIni: 4,
    vFim: 11,
    titulo: "Nomeação de juízes"
  },
  "2cr20.1-30": {
    id: "2cr20.1-30",
    referencia: "2Cr 20.1-30",
    livro: "2 Crônicas",
    capitulo: 20,
    vIni: 1,
    vFim: 30,
    titulo: "A vitória de Josafá sobre Moabe e Amom"
  },
  "2cr20.1-37": {
    id: "2cr20.1-37",
    referencia: "2Cr 20.1-37",
    livro: "2 Crônicas",
    capitulo: 20,
    vIni: 1,
    vFim: 37,
    titulo: "O reinado e a morte de Josafá"
  },
  "2cr21.2-20": {
    id: "2cr21.2-20",
    referencia: "2Cr 21.2-20",
    livro: "2 Crônicas",
    capitulo: 21,
    vIni: 2,
    vFim: 20,
    titulo: "O reinado de Jeorão"
  },
  "2cr22.2-6": {
    id: "2cr22.2-6",
    referencia: "2Cr 22.2-6",
    livro: "2 Crônicas",
    capitulo: 22,
    vIni: 2,
    vFim: 6,
    titulo: "O reinado de Acazias"
  },
  "2cr22.7-9": {
    id: "2cr22.7-9",
    referencia: "2Cr 22.7-9",
    livro: "2 Crônicas",
    capitulo: 22,
    vIni: 7,
    vFim: 9,
    titulo: "Jeú mata a Acazias"
  },
  "2cr22.2-12": {
    id: "2cr22.2-12",
    referencia: "2Cr 22.2-12",
    livro: "2 Crônicas",
    capitulo: 22,
    vIni: 2,
    vFim: 12,
    titulo: "Atalia usurpa o trono"
  },
  "2cr23.2-11": {
    id: "2cr23.2-11",
    referencia: "2Cr 23.2-11",
    livro: "2 Crônicas",
    capitulo: 23,
    vIni: 2,
    vFim: 11,
    titulo: "Joás ungido rei de Judá"
  },
  "2cr23.2-15": {
    id: "2cr23.2-15",
    referencia: "2Cr 23.2-15",
    livro: "2 Crônicas",
    capitulo: 23,
    vIni: 2,
    vFim: 15,
    titulo: "A morte de Atalia"
  },
  "2cr23.2-21": {
    id: "2cr23.2-21",
    referencia: "2Cr 23.2-21",
    livro: "2 Crônicas",
    capitulo: 23,
    vIni: 2,
    vFim: 21,
    titulo: "A aliança de Joiada"
  },
  "2cr24.2-16": {
    id: "2cr24.2-16",
    referencia: "2Cr 24.2-16",
    livro: "2 Crônicas",
    capitulo: 24,
    vIni: 2,
    vFim: 16,
    titulo: "O reinado de Joás"
  },
  "2cr24.17-22": {
    id: "2cr24.17-22",
    referencia: "2Cr 24.17-22",
    livro: "2 Crônicas",
    capitulo: 24,
    vIni: 17,
    vFim: 22,
    titulo: "Zacarias morto pelo rei"
  },
  "2cr24.23-24": {
    id: "2cr24.23-24",
    referencia: "2Cr 24.23-24",
    livro: "2 Crônicas",
    capitulo: 24,
    vIni: 23,
    vFim: 24,
    titulo: "O juízo de Deus sobre Joás"
  },
  "2cr24.2-27": {
    id: "2cr24.2-27",
    referencia: "2Cr 24.2-27",
    livro: "2 Crônicas",
    capitulo: 24,
    vIni: 2,
    vFim: 27,
    titulo: "A conspiração contra o rei Joás"
  },
  "2cr25.2-4": {
    id: "2cr25.2-4",
    referencia: "2Cr 25.2-4",
    livro: "2 Crônicas",
    capitulo: 25,
    vIni: 2,
    vFim: 4,
    titulo: "O reinado de Amazias"
  },
  "2cr25.2-13": {
    id: "2cr25.2-13",
    referencia: "2Cr 25.2-13",
    livro: "2 Crônicas",
    capitulo: 25,
    vIni: 2,
    vFim: 13,
    titulo: "Amazias vence os edomitas"
  },
  "2cr25.14-16": {
    id: "2cr25.14-16",
    referencia: "2Cr 25.14-16",
    livro: "2 Crônicas",
    capitulo: 25,
    vIni: 14,
    vFim: 16,
    titulo: "Deus repreende Amazias por ser este idólatra"
  },
  "2cr25.2-24": {
    id: "2cr25.2-24",
    referencia: "2Cr 25.2-24",
    livro: "2 Crônicas",
    capitulo: 25,
    vIni: 2,
    vFim: 24,
    titulo: "Amazias derrotado por Jeoás"
  },
  "2cr25.2-28": {
    id: "2cr25.2-28",
    referencia: "2Cr 25.2-28",
    livro: "2 Crônicas",
    capitulo: 25,
    vIni: 2,
    vFim: 28,
    titulo: "A morte de Amazias, de Judá"
  },
  "2cr26.2-15": {
    id: "2cr26.2-15",
    referencia: "2Cr 26.2-15",
    livro: "2 Crônicas",
    capitulo: 26,
    vIni: 2,
    vFim: 15,
    titulo: "O reinado de Uzias"
  },
  "2cr26.2-23": {
    id: "2cr26.2-23",
    referencia: "2Cr 26.2-23",
    livro: "2 Crônicas",
    capitulo: 26,
    vIni: 2,
    vFim: 23,
    titulo: "Uzias é atacado de lepra"
  },
  "2cr27.2-9": {
    id: "2cr27.2-9",
    referencia: "2Cr 27.2-9",
    livro: "2 Crônicas",
    capitulo: 27,
    vIni: 2,
    vFim: 9,
    titulo: "O reinado de Jotão"
  },
  "2cr28.2-15": {
    id: "2cr28.2-15",
    referencia: "2Cr 28.2-15",
    livro: "2 Crônicas",
    capitulo: 28,
    vIni: 2,
    vFim: 15,
    titulo: "O reinado de Acaz"
  },
  "2cr28.2-21": {
    id: "2cr28.2-21",
    referencia: "2Cr 28.2-21",
    livro: "2 Crônicas",
    capitulo: 28,
    vIni: 2,
    vFim: 21,
    titulo: "Acaz pede socorro aos assírios"
  },
  "2cr28.2-25": {
    id: "2cr28.2-25",
    referencia: "2Cr 28.2-25",
    livro: "2 Crônicas",
    capitulo: 28,
    vIni: 2,
    vFim: 25,
    titulo: "A idolatria de Acaz"
  },
  "2cr28.2-27": {
    id: "2cr28.2-27",
    referencia: "2Cr 28.2-27",
    livro: "2 Crônicas",
    capitulo: 28,
    vIni: 2,
    vFim: 27,
    titulo: "A morte de Acaz"
  },
  "2cr29.2-11": {
    id: "2cr29.2-11",
    referencia: "2Cr 29.2-11",
    livro: "2 Crônicas",
    capitulo: 29,
    vIni: 2,
    vFim: 11,
    titulo: "Ezequias manda abrir o templo"
  },
  "2cr29.12-19": {
    id: "2cr29.12-19",
    referencia: "2Cr 29.12-19",
    livro: "2 Crônicas",
    capitulo: 29,
    vIni: 12,
    vFim: 19,
    titulo: "Os levitas purificam o templo"
  },
  "2cr29.20-36": {
    id: "2cr29.20-36",
    referencia: "2Cr 29.20-36",
    livro: "2 Crônicas",
    capitulo: 29,
    vIni: 20,
    vFim: 36,
    titulo: "Ezequias restabelece o culto de Deus"
  },
  "2cr30.1-27": {
    id: "2cr30.1-27",
    referencia: "2Cr 30.1-27",
    livro: "2 Crônicas",
    capitulo: 30,
    vIni: 1,
    vFim: 27,
    titulo: "A celebração da Páscoa"
  },
  "2cr31.2-21": {
    id: "2cr31.2-21",
    referencia: "2Cr 31.2-21",
    livro: "2 Crônicas",
    capitulo: 31,
    vIni: 2,
    vFim: 21,
    titulo: "Ezequias regula as contribuições para os sacerdotes e os levitas"
  },
  "2cr32.2-8": {
    id: "2cr32.2-8",
    referencia: "2Cr 32.2-8",
    livro: "2 Crônicas",
    capitulo: 32,
    vIni: 2,
    vFim: 8,
    titulo: "Ezequias prepara-se para resistir a Senaqueribe"
  },
  "2cr32.2-20": {
    id: "2cr32.2-20",
    referencia: "2Cr 32.2-20",
    livro: "2 Crônicas",
    capitulo: 32,
    vIni: 2,
    vFim: 20,
    titulo: "Senaqueribe afronta a Ezequias e ao Senhor"
  },
  "2cr32.2-23": {
    id: "2cr32.2-23",
    referencia: "2Cr 32.2-23",
    livro: "2 Crônicas",
    capitulo: 32,
    vIni: 2,
    vFim: 23,
    titulo: "A destruição do exército dos assírios"
  },
  "2cr32.2-31": {
    id: "2cr32.2-31",
    referencia: "2Cr 32.2-31",
    livro: "2 Crônicas",
    capitulo: 32,
    vIni: 2,
    vFim: 31,
    titulo: "Doença de Ezequias"
  },
  "2cr32.2-33": {
    id: "2cr32.2-33",
    referencia: "2Cr 32.2-33",
    livro: "2 Crônicas",
    capitulo: 32,
    vIni: 2,
    vFim: 33,
    titulo: "A morte de Ezequias"
  },
  "2cr33.2-9": {
    id: "2cr33.2-9",
    referencia: "2Cr 33.2-9",
    livro: "2 Crônicas",
    capitulo: 33,
    vIni: 2,
    vFim: 9,
    titulo: "O reinado de Manassés"
  },
  "2cr33.10-17": {
    id: "2cr33.10-17",
    referencia: "2Cr 33.10-17",
    livro: "2 Crônicas",
    capitulo: 33,
    vIni: 10,
    vFim: 17,
    titulo: "O cativeiro de Manassés e sua oração"
  },
  "2cr33.2-20": {
    id: "2cr33.2-20",
    referencia: "2Cr 33.2-20",
    livro: "2 Crônicas",
    capitulo: 33,
    vIni: 2,
    vFim: 20,
    titulo: "A morte de Manassés"
  },
  "2cr33.2-25": {
    id: "2cr33.2-25",
    referencia: "2Cr 33.2-25",
    livro: "2 Crônicas",
    capitulo: 33,
    vIni: 2,
    vFim: 25,
    titulo: "O reinado de Amom"
  },
  "2cr34.2": {
    id: "2cr34.2",
    referencia: "2Cr 34.2",
    livro: "2 Crônicas",
    capitulo: 34,
    vIni: 2,
    vFim: 2,
    titulo: "O reinado de Josias"
  },
  "2cr34.2-7": {
    id: "2cr34.2-7",
    referencia: "2Cr 34.2-7",
    livro: "2 Crônicas",
    capitulo: 34,
    vIni: 2,
    vFim: 7,
    titulo: "A purificação do templo e do culto"
  },
  "2cr34.2-13": {
    id: "2cr34.2-13",
    referencia: "2Cr 34.2-13",
    livro: "2 Crônicas",
    capitulo: 34,
    vIni: 2,
    vFim: 13,
    titulo: "O rei repara o templo"
  },
  "2cr34.2-18": {
    id: "2cr34.2-18",
    referencia: "2Cr 34.2-18",
    livro: "2 Crônicas",
    capitulo: 34,
    vIni: 2,
    vFim: 18,
    titulo: "Hilquias acha o Livro da Lei"
  },
  "2cr34.2-28": {
    id: "2cr34.2-28",
    referencia: "2Cr 34.2-28",
    livro: "2 Crônicas",
    capitulo: 34,
    vIni: 2,
    vFim: 28,
    titulo: "Josias manda consultar a profetisa Hulda"
  },
  "2cr34.2-33": {
    id: "2cr34.2-33",
    referencia: "2Cr 34.2-33",
    livro: "2 Crônicas",
    capitulo: 34,
    vIni: 2,
    vFim: 33,
    titulo: "Josias renova a aliança ante o Senhor"
  },
  "2cr35.2-19": {
    id: "2cr35.2-19",
    referencia: "2Cr 35.2-19",
    livro: "2 Crônicas",
    capitulo: 35,
    vIni: 2,
    vFim: 19,
    titulo: "A celebração da Páscoa"
  },
  "2cr35.2-27": {
    id: "2cr35.2-27",
    referencia: "2Cr 35.2-27",
    livro: "2 Crônicas",
    capitulo: 35,
    vIni: 2,
    vFim: 27,
    titulo: "A morte de Josias no vale de Megido"
  },
  "2cr36.2-5": {
    id: "2cr36.2-5",
    referencia: "2Cr 36.2-5",
    livro: "2 Crônicas",
    capitulo: 36,
    vIni: 2,
    vFim: 5,
    titulo: "O reinado e deposição de Joacaz"
  },
  "2cr36.2-8": {
    id: "2cr36.2-8",
    referencia: "2Cr 36.2-8",
    livro: "2 Crônicas",
    capitulo: 36,
    vIni: 2,
    vFim: 8,
    titulo: "O reinado de Jeoaquim"
  },
  "2cr36.2-10": {
    id: "2cr36.2-10",
    referencia: "2Cr 36.2-10",
    livro: "2 Crônicas",
    capitulo: 36,
    vIni: 2,
    vFim: 10,
    titulo: "O reinado de Joaquim"
  },
  "2cr36.2-16": {
    id: "2cr36.2-16",
    referencia: "2Cr 36.2-16",
    livro: "2 Crônicas",
    capitulo: 36,
    vIni: 2,
    vFim: 16,
    titulo: "O reinado de Zedequias"
  },
  "2cr36.2-21": {
    id: "2cr36.2-21",
    referencia: "2Cr 36.2-21",
    livro: "2 Crônicas",
    capitulo: 36,
    vIni: 2,
    vFim: 21,
    titulo: "O cativeiro de Judá"
  },
  "2cr36.22-23": {
    id: "2cr36.22-23",
    referencia: "2Cr 36.22-23",
    livro: "2 Crônicas",
    capitulo: 36,
    vIni: 22,
    vFim: 23,
    titulo: "O decreto de Ciro"
  },
  "ed1.1-11": {
    id: "ed1.1-11",
    referencia: "Ed 1.1-11",
    livro: "Esdras",
    capitulo: 1,
    vIni: 1,
    vFim: 11,
    titulo: "O decreto de Ciro"
  },
  "ed2.1-70": {
    id: "ed2.1-70",
    referencia: "Ed 2.1-70",
    livro: "Esdras",
    capitulo: 2,
    vIni: 1,
    vFim: 70,
    titulo: "A lista dos que voltaram da Babilônia"
  },
  "ed3.1-7": {
    id: "ed3.1-7",
    referencia: "Ed 3.1-7",
    livro: "Esdras",
    capitulo: 3,
    vIni: 1,
    vFim: 7,
    titulo: "É levantado o altar"
  },
  "ed3.8-13": {
    id: "ed3.8-13",
    referencia: "Ed 3.8-13",
    livro: "Esdras",
    capitulo: 3,
    vIni: 8,
    vFim: 13,
    titulo: "Lançados os alicerces do templo"
  },
  "ed4.1-24": {
    id: "ed4.1-24",
    referencia: "Ed 4.1-24",
    livro: "Esdras",
    capitulo: 4,
    vIni: 1,
    vFim: 24,
    titulo: "Os inimigos fazem parar a construção do templo"
  },
  "ed5.1-5": {
    id: "ed5.1-5",
    referencia: "Ed 5.1-5",
    livro: "Esdras",
    capitulo: 5,
    vIni: 1,
    vFim: 5,
    titulo: "As exortações de Ageu e Zacarias"
  },
  "ed5.6-17": {
    id: "ed5.6-17",
    referencia: "Ed 5.6-17",
    livro: "Esdras",
    capitulo: 5,
    vIni: 6,
    vFim: 17,
    titulo: "Os adversários consultam Dario"
  },
  "ed6.1-12": {
    id: "ed6.1-12",
    referencia: "Ed 6.1-12",
    livro: "Esdras",
    capitulo: 6,
    vIni: 1,
    vFim: 12,
    titulo: "O decreto de Dario"
  },
  "ed6.13-15": {
    id: "ed6.13-15",
    referencia: "Ed 6.13-15",
    livro: "Esdras",
    capitulo: 6,
    vIni: 13,
    vFim: 15,
    titulo: "Completado o templo"
  },
  "ed6.16-18": {
    id: "ed6.16-18",
    referencia: "Ed 6.16-18",
    livro: "Esdras",
    capitulo: 6,
    vIni: 16,
    vFim: 18,
    titulo: "A dedicação do templo"
  },
  "ed6.19-22": {
    id: "ed6.19-22",
    referencia: "Ed 6.19-22",
    livro: "Esdras",
    capitulo: 6,
    vIni: 19,
    vFim: 22,
    titulo: "A celebração da Páscoa"
  },
  "ed7.1-28": {
    id: "ed7.1-28",
    referencia: "Ed 7.1-28",
    livro: "Esdras",
    capitulo: 7,
    vIni: 1,
    vFim: 28,
    titulo: "Artaxerxes envia Esdras a Jerusalém"
  },
  "ed8.1-14": {
    id: "ed8.1-14",
    referencia: "Ed 8.1-14",
    livro: "Esdras",
    capitulo: 8,
    vIni: 1,
    vFim: 14,
    titulo: "A lista dos que voltaram com Esdras"
  },
  "ed8.15-20": {
    id: "ed8.15-20",
    referencia: "Ed 8.15-20",
    livro: "Esdras",
    capitulo: 8,
    vIni: 15,
    vFim: 20,
    titulo: "Esdras manda buscar levitas"
  },
  "ed8.21-23": {
    id: "ed8.21-23",
    referencia: "Ed 8.21-23",
    livro: "Esdras",
    capitulo: 8,
    vIni: 21,
    vFim: 23,
    titulo: "O jejum"
  },
  "ed8.24-30": {
    id: "ed8.24-30",
    referencia: "Ed 8.24-30",
    livro: "Esdras",
    capitulo: 8,
    vIni: 24,
    vFim: 30,
    titulo: "A entrega das contribuições aos sacerdotes"
  },
  "ed8.31-36": {
    id: "ed8.31-36",
    referencia: "Ed 8.31-36",
    livro: "Esdras",
    capitulo: 8,
    vIni: 31,
    vFim: 36,
    titulo: "A chegada a Jerusalém"
  },
  "ed9.1-15": {
    id: "ed9.1-15",
    referencia: "Ed 9.1-15",
    livro: "Esdras",
    capitulo: 9,
    vIni: 1,
    vFim: 15,
    titulo: "A oração e confissão de Esdras"
  },
  "ed10.1-44": {
    id: "ed10.1-44",
    referencia: "Ed 10.1-44",
    livro: "Esdras",
    capitulo: 10,
    vIni: 1,
    vFim: 44,
    titulo: "Os israelitas despedem suas mulheres heteias"
  },
  "ne1.1-11": {
    id: "ne1.1-11",
    referencia: "Ne 1.1-11",
    livro: "Neemias",
    capitulo: 1,
    vIni: 1,
    vFim: 11,
    titulo: "Neemias ora por Jerusalém"
  },
  "ne2.1-10": {
    id: "ne2.1-10",
    referencia: "Ne 2.1-10",
    livro: "Neemias",
    capitulo: 2,
    vIni: 1,
    vFim: 10,
    titulo: "Neemias mandado a Jerusalém"
  },
  "ne2.11-20": {
    id: "ne2.11-20",
    referencia: "Ne 2.11-20",
    livro: "Neemias",
    capitulo: 2,
    vIni: 11,
    vFim: 20,
    titulo: "Neemias anima o povo a reedificar os muros"
  },
  "ne3.1-32": {
    id: "ne3.1-32",
    referencia: "Ne 3.1-32",
    livro: "Neemias",
    capitulo: 3,
    vIni: 1,
    vFim: 32,
    titulo: "Os que trabalharam na reedificação dos muros"
  },
  "ne4.1-23": {
    id: "ne4.1-23",
    referencia: "Ne 4.1-23",
    livro: "Neemias",
    capitulo: 4,
    vIni: 1,
    vFim: 23,
    titulo: "A defesa contra os adversários"
  },
  "ne5.1-12": {
    id: "ne5.1-12",
    referencia: "Ne 5.1-12",
    livro: "Neemias",
    capitulo: 5,
    vIni: 1,
    vFim: 12,
    titulo: "Medidas contra a usura"
  },
  "ne5.13-19": {
    id: "ne5.13-19",
    referencia: "Ne 5.13-19",
    livro: "Neemias",
    capitulo: 5,
    vIni: 13,
    vFim: 19,
    titulo: "O bom exemplo de Neemias"
  },
  "ne6.1-14": {
    id: "ne6.1-14",
    referencia: "Ne 6.1-14",
    livro: "Neemias",
    capitulo: 6,
    vIni: 1,
    vFim: 14,
    titulo: "Os inimigos conspiram para intimidar Neemias"
  },
  "ne6.15-19": {
    id: "ne6.15-19",
    referencia: "Ne 6.15-19",
    livro: "Neemias",
    capitulo: 6,
    vIni: 15,
    vFim: 19,
    titulo: "Terminada a reconstrução do muro"
  },
  "ne7.1-4": {
    id: "ne7.1-4",
    referencia: "Ne 7.1-4",
    livro: "Neemias",
    capitulo: 7,
    vIni: 1,
    vFim: 4,
    titulo: "Neemias estabelece guardas em Jerusalém"
  },
  "ne7.5-69": {
    id: "ne7.5-69",
    referencia: "Ne 7.5-69",
    livro: "Neemias",
    capitulo: 7,
    vIni: 5,
    vFim: 69,
    titulo: "A relação dos que voltaram a Jerusalém"
  },
  "ne7.70-73": {
    id: "ne7.70-73",
    referencia: "Ne 7.70-73",
    livro: "Neemias",
    capitulo: 7,
    vIni: 70,
    vFim: 73,
    titulo: "Contribuições para o templo"
  },
  "ne8.1-12": {
    id: "ne8.1-12",
    referencia: "Ne 8.1-12",
    livro: "Neemias",
    capitulo: 8,
    vIni: 1,
    vFim: 12,
    titulo: "Esdras lê a Lei diante do povo"
  },
  "ne8.13-18": {
    id: "ne8.13-18",
    referencia: "Ne 8.13-18",
    livro: "Neemias",
    capitulo: 8,
    vIni: 13,
    vFim: 18,
    titulo: "A Festa dos Tabernáculos"
  },
  "ne9.1-37": {
    id: "ne9.1-37",
    referencia: "Ne 9.1-37",
    livro: "Neemias",
    capitulo: 9,
    vIni: 1,
    vFim: 37,
    titulo: "Arrependimento e confissão de pecados"
  },
  "ne9.38": {
    id: "ne9.38",
    referencia: "Ne 9.38",
    livro: "Neemias",
    capitulo: 9,
    vIni: 38,
    vFim: 38,
    titulo: "A aliança do povo sobre guardar a Lei"
  },
  "ne11.1-19": {
    id: "ne11.1-19",
    referencia: "Ne 11.1-19",
    livro: "Neemias",
    capitulo: 11,
    vIni: 1,
    vFim: 19,
    titulo: "Relação dos que habitaram em Jerusalém"
  },
  "ne11.20-24": {
    id: "ne11.20-24",
    referencia: "Ne 11.20-24",
    livro: "Neemias",
    capitulo: 11,
    vIni: 20,
    vFim: 24,
    titulo: "Os que habitaram nas cidades de Judá"
  },
  "ne11.25-36": {
    id: "ne11.25-36",
    referencia: "Ne 11.25-36",
    livro: "Neemias",
    capitulo: 11,
    vIni: 25,
    vFim: 36,
    titulo: "Os residentes nas aldeias"
  },
  "ne12.1-26": {
    id: "ne12.1-26",
    referencia: "Ne 12.1-26",
    livro: "Neemias",
    capitulo: 12,
    vIni: 1,
    vFim: 26,
    titulo: "Os sacerdotes que vieram para Jerusalém"
  },
  "ne12.27-43": {
    id: "ne12.27-43",
    referencia: "Ne 12.27-43",
    livro: "Neemias",
    capitulo: 12,
    vIni: 27,
    vFim: 43,
    titulo: "A dedicação dos muros"
  },
  "ne12.44-47": {
    id: "ne12.44-47",
    referencia: "Ne 12.44-47",
    livro: "Neemias",
    capitulo: 12,
    vIni: 44,
    vFim: 47,
    titulo: "A manutenção dos sacerdotes e levitas"
  },
  "ne13.1-3": {
    id: "ne13.1-3",
    referencia: "Ne 13.1-3",
    livro: "Neemias",
    capitulo: 13,
    vIni: 1,
    vFim: 3,
    titulo: "Os estrangeiros separados de Israel"
  },
  "ne13.4-9": {
    id: "ne13.4-9",
    referencia: "Ne 13.4-9",
    livro: "Neemias",
    capitulo: 13,
    vIni: 4,
    vFim: 9,
    titulo: "Tobias expulso do templo"
  },
  "ne13.10-14": {
    id: "ne13.10-14",
    referencia: "Ne 13.10-14",
    livro: "Neemias",
    capitulo: 13,
    vIni: 10,
    vFim: 14,
    titulo: "Restaurada a manutenção dos levitas"
  },
  "ne13.15-22": {
    id: "ne13.15-22",
    referencia: "Ne 13.15-22",
    livro: "Neemias",
    capitulo: 13,
    vIni: 15,
    vFim: 22,
    titulo: "Restabelecimento da observância do sábado"
  },
  "ne13.23-29": {
    id: "ne13.23-29",
    referencia: "Ne 13.23-29",
    livro: "Neemias",
    capitulo: 13,
    vIni: 23,
    vFim: 29,
    titulo: "Condenação do casamento misto"
  },
  "ne13.30-31": {
    id: "ne13.30-31",
    referencia: "Ne 13.30-31",
    livro: "Neemias",
    capitulo: 13,
    vIni: 30,
    vFim: 31,
    titulo: "As reformas de Neemias"
  },
  "et1.1-9": {
    id: "et1.1-9",
    referencia: "Et 1.1-9",
    livro: "Ester",
    capitulo: 1,
    vIni: 1,
    vFim: 9,
    titulo: "O banquete de Assuero"
  },
  "et1.10-22": {
    id: "et1.10-22",
    referencia: "Et 1.10-22",
    livro: "Ester",
    capitulo: 1,
    vIni: 10,
    vFim: 22,
    titulo: "Vasti, a rainha, recusa assistir ao banquete"
  },
  "et2.1-20": {
    id: "et2.1-20",
    referencia: "Et 2.1-20",
    livro: "Ester",
    capitulo: 2,
    vIni: 1,
    vFim: 20,
    titulo: "Ester feita rainha"
  },
  "et2.21-23": {
    id: "et2.21-23",
    referencia: "Et 2.21-23",
    livro: "Ester",
    capitulo: 2,
    vIni: 21,
    vFim: 23,
    titulo: "Mordecai descobre uma conspiração"
  },
  "et3.1-6": {
    id: "et3.1-6",
    referencia: "Et 3.1-6",
    livro: "Ester",
    capitulo: 3,
    vIni: 1,
    vFim: 6,
    titulo: "Mordecai odiado por Hamã"
  },
  "et3.7-11": {
    id: "et3.7-11",
    referencia: "Et 3.7-11",
    livro: "Ester",
    capitulo: 3,
    vIni: 7,
    vFim: 11,
    titulo: "Hamã pretende matar todos os judeus"
  },
  "et3.12-15": {
    id: "et3.12-15",
    referencia: "Et 3.12-15",
    livro: "Ester",
    capitulo: 3,
    vIni: 12,
    vFim: 15,
    titulo: "O rei decreta a morte dos judeus"
  },
  "et4.1-17": {
    id: "et4.1-17",
    referencia: "Et 4.1-17",
    livro: "Ester",
    capitulo: 4,
    vIni: 1,
    vFim: 17,
    titulo: "Ester promete interceder pelo seu povo"
  },
  "et5.1-14": {
    id: "et5.1-14",
    referencia: "Et 5.1-14",
    livro: "Ester",
    capitulo: 5,
    vIni: 1,
    vFim: 14,
    titulo: "Ester convida ao rei e Hamã para um banquete"
  },
  "et6.1-14": {
    id: "et6.1-14",
    referencia: "Et 6.1-14",
    livro: "Ester",
    capitulo: 6,
    vIni: 1,
    vFim: 14,
    titulo: "Hamã forçado a honrar a Mordecai"
  },
  "et7.1-10": {
    id: "et7.1-10",
    referencia: "Et 7.1-10",
    livro: "Ester",
    capitulo: 7,
    vIni: 1,
    vFim: 10,
    titulo: "Ester denuncia a Hamã, que é enforcado"
  },
  "et8.1-17": {
    id: "et8.1-17",
    referencia: "Et 8.1-17",
    livro: "Ester",
    capitulo: 8,
    vIni: 1,
    vFim: 17,
    titulo: "Os judeus são autorizados a resistir"
  },
  "et9.1-15": {
    id: "et9.1-15",
    referencia: "Et 9.1-15",
    livro: "Ester",
    capitulo: 9,
    vIni: 1,
    vFim: 15,
    titulo: "Os judeus matam aos seus inimigos"
  },
  "et9.16-32": {
    id: "et9.16-32",
    referencia: "Et 9.16-32",
    livro: "Ester",
    capitulo: 9,
    vIni: 16,
    vFim: 32,
    titulo: "A Festa de Purim"
  },
  "et10.1-3": {
    id: "et10.1-3",
    referencia: "Et 10.1-3",
    livro: "Ester",
    capitulo: 10,
    vIni: 1,
    vFim: 3,
    titulo: "O renome de Mordecai"
  },
  "jó1.1-12": {
    id: "jó1.1-12",
    referencia: "Jó 1.1-12",
    livro: "Jó",
    capitulo: 1,
    vIni: 1,
    vFim: 12,
    titulo: "A virtude e riqueza de Jó"
  },
  "jó1.13-22": {
    id: "jó1.13-22",
    referencia: "Jó 1.13-22",
    livro: "Jó",
    capitulo: 1,
    vIni: 13,
    vFim: 22,
    titulo: "As aflições e a paciência de Jó"
  },
  "jó3.1-26": {
    id: "jó3.1-26",
    referencia: "Jó 3.1-26",
    livro: "Jó",
    capitulo: 3,
    vIni: 1,
    vFim: 26,
    titulo: "Jó amaldiçoa o seu nascimento"
  },
  "jó4.1-21": {
    id: "jó4.1-21",
    referencia: "Jó 4.1-21",
    livro: "Jó",
    capitulo: 4,
    vIni: 1,
    vFim: 21,
    titulo: "Elifaz repreende a Jó"
  },
  "jó5.1-27": {
    id: "jó5.1-27",
    referencia: "Jó 5.1-27",
    livro: "Jó",
    capitulo: 5,
    vIni: 1,
    vFim: 27,
    titulo: "Elifaz exorta a Jó a que busque a Deus"
  },
  "jó6.1-30": {
    id: "jó6.1-30",
    referencia: "Jó 6.1-30",
    livro: "Jó",
    capitulo: 6,
    vIni: 1,
    vFim: 30,
    titulo: "Jó justifica as suas queixas"
  },
  "jó7.1-21": {
    id: "jó7.1-21",
    referencia: "Jó 7.1-21",
    livro: "Jó",
    capitulo: 7,
    vIni: 1,
    vFim: 21,
    titulo: "Jó contende com Deus"
  },
  "jó8.1-22": {
    id: "jó8.1-22",
    referencia: "Jó 8.1-22",
    livro: "Jó",
    capitulo: 8,
    vIni: 1,
    vFim: 22,
    titulo: "Bildade afirma a justiça de Deus"
  },
  "jó9.1-35": {
    id: "jó9.1-35",
    referencia: "Jó 9.1-35",
    livro: "Jó",
    capitulo: 9,
    vIni: 1,
    vFim: 35,
    titulo: "Jó é incapaz de responder a Deus"
  },
  "jó10.1-22": {
    id: "jó10.1-22",
    referencia: "Jó 10.1-22",
    livro: "Jó",
    capitulo: 10,
    vIni: 1,
    vFim: 22,
    titulo: "Jó protesta contra a severidade de Deus"
  },
  "jó11.1-20": {
    id: "jó11.1-20",
    referencia: "Jó 11.1-20",
    livro: "Jó",
    capitulo: 11,
    vIni: 1,
    vFim: 20,
    titulo: "Zofar acusa a Jó de iniquidade"
  },
  "jó12.1-25": {
    id: "jó12.1-25",
    referencia: "Jó 12.1-25",
    livro: "Jó",
    capitulo: 12,
    vIni: 1,
    vFim: 25,
    titulo: "Jó se defende das acusações de seus amigos"
  },
  "jó13.1-28": {
    id: "jó13.1-28",
    referencia: "Jó 13.1-28",
    livro: "Jó",
    capitulo: 13,
    vIni: 1,
    vFim: 28,
    titulo: "Jó defende a sua integridade"
  },
  "jó14.1-22": {
    id: "jó14.1-22",
    referencia: "Jó 14.1-22",
    livro: "Jó",
    capitulo: 14,
    vIni: 1,
    vFim: 22,
    titulo: "Jó medita sobre a brevidade da vida"
  },
  "jó15.1-16": {
    id: "jó15.1-16",
    referencia: "Jó 15.1-16",
    livro: "Jó",
    capitulo: 15,
    vIni: 1,
    vFim: 16,
    titulo: "Elifaz acusa a Jó de impiedade"
  },
  "jó15.17-35": {
    id: "jó15.17-35",
    referencia: "Jó 15.17-35",
    livro: "Jó",
    capitulo: 15,
    vIni: 17,
    vFim: 35,
    titulo: "Elifaz mostra o justo castigo dos perversos"
  },
  "jó16.1-22": {
    id: "jó16.1-22",
    referencia: "Jó 16.1-22",
    livro: "Jó",
    capitulo: 16,
    vIni: 1,
    vFim: 22,
    titulo: "Jó se queixa do trato de Deus"
  },
  "jó17.1-16": {
    id: "jó17.1-16",
    referencia: "Jó 17.1-16",
    livro: "Jó",
    capitulo: 17,
    vIni: 1,
    vFim: 16,
    titulo: "Jó nada mais espera desta vida"
  },
  "jó18.1-21": {
    id: "jó18.1-21",
    referencia: "Jó 18.1-21",
    livro: "Jó",
    capitulo: 18,
    vIni: 1,
    vFim: 21,
    titulo: "Bildade descreve a sorte do perverso"
  },
  "jó19.1-29": {
    id: "jó19.1-29",
    referencia: "Jó 19.1-29",
    livro: "Jó",
    capitulo: 19,
    vIni: 1,
    vFim: 29,
    titulo: "Jó, embora sofrendo, sabe que seu Redentor vive"
  },
  "jó20.1-29": {
    id: "jó20.1-29",
    referencia: "Jó 20.1-29",
    livro: "Jó",
    capitulo: 20,
    vIni: 1,
    vFim: 29,
    titulo: "Zofar descreve as calamidades dos perversos"
  },
  "jó21.1-34": {
    id: "jó21.1-34",
    referencia: "Jó 21.1-34",
    livro: "Jó",
    capitulo: 21,
    vIni: 1,
    vFim: 34,
    titulo: "Jó descreve a prosperidade dos perversos"
  },
  "jó22.1-30": {
    id: "jó22.1-30",
    referencia: "Jó 22.1-30",
    livro: "Jó",
    capitulo: 22,
    vIni: 1,
    vFim: 30,
    titulo: "Elifaz acusa a Jó de grandes pecados"
  },
  "jó23.1-17": {
    id: "jó23.1-17",
    referencia: "Jó 23.1-17",
    livro: "Jó",
    capitulo: 23,
    vIni: 1,
    vFim: 17,
    titulo: "Jó deseja apresentar-se perante Deus"
  },
  "jó24.1-25": {
    id: "jó24.1-25",
    referencia: "Jó 24.1-25",
    livro: "Jó",
    capitulo: 24,
    vIni: 1,
    vFim: 25,
    titulo: "Jó contesta que os perversos muitas vezes não são castigados"
  },
  "jó25.1-6": {
    id: "jó25.1-6",
    referencia: "Jó 25.1-6",
    livro: "Jó",
    capitulo: 25,
    vIni: 1,
    vFim: 6,
    titulo: "Bildade nega que o homem possa justificar-se diante de Deus"
  },
  "jó26.1-14": {
    id: "jó26.1-14",
    referencia: "Jó 26.1-14",
    livro: "Jó",
    capitulo: 26,
    vIni: 1,
    vFim: 14,
    titulo: "Jó afirma a soberania de Deus"
  },
  "jó27.1-23": {
    id: "jó27.1-23",
    referencia: "Jó 27.1-23",
    livro: "Jó",
    capitulo: 27,
    vIni: 1,
    vFim: 23,
    titulo: "Jó descreve a sorte dos perversos"
  },
  "jó28.1-11": {
    id: "jó28.1-11",
    referencia: "Jó 28.1-11",
    livro: "Jó",
    capitulo: 28,
    vIni: 1,
    vFim: 11,
    titulo: "O homem apropria-se das riquezas da terra"
  },
  "jó28.12-28": {
    id: "jó28.12-28",
    referencia: "Jó 28.12-28",
    livro: "Jó",
    capitulo: 28,
    vIni: 12,
    vFim: 28,
    titulo: "A verdadeira sabedoria é dom de Deus"
  },
  "jó29.1-25": {
    id: "jó29.1-25",
    referencia: "Jó 29.1-25",
    livro: "Jó",
    capitulo: 29,
    vIni: 1,
    vFim: 25,
    titulo: "Jó lembra-se do seu primeiro estado feliz"
  },
  "jó30.1-31": {
    id: "jó30.1-31",
    referencia: "Jó 30.1-31",
    livro: "Jó",
    capitulo: 30,
    vIni: 1,
    vFim: 31,
    titulo: "Jó lamenta a miséria em que caiu"
  },
  "jó31.1-40": {
    id: "jó31.1-40",
    referencia: "Jó 31.1-40",
    livro: "Jó",
    capitulo: 31,
    vIni: 1,
    vFim: 40,
    titulo: "Jó declara sua integridade"
  },
  "jó32.1-5": {
    id: "jó32.1-5",
    referencia: "Jó 32.1-5",
    livro: "Jó",
    capitulo: 32,
    vIni: 1,
    vFim: 5,
    titulo: "Eliú irado contra Jó e seus três amigos"
  },
  "jó32.6-22": {
    id: "jó32.6-22",
    referencia: "Jó 32.6-22",
    livro: "Jó",
    capitulo: 32,
    vIni: 6,
    vFim: 22,
    titulo: "Eliú vinga o seu direito de responder a Jó"
  },
  "jó33.1-33": {
    id: "jó33.1-33",
    referencia: "Jó 33.1-33",
    livro: "Jó",
    capitulo: 33,
    vIni: 1,
    vFim: 33,
    titulo: "Eliú repreende a Jó"
  },
  "jó34.1-37": {
    id: "jó34.1-37",
    referencia: "Jó 34.1-37",
    livro: "Jó",
    capitulo: 34,
    vIni: 1,
    vFim: 37,
    titulo: "Eliú justifica a Deus"
  },
  "jó35.1-16": {
    id: "jó35.1-16",
    referencia: "Jó 35.1-16",
    livro: "Jó",
    capitulo: 35,
    vIni: 1,
    vFim: 16,
    titulo: "Deus não ouve os aflitos, porque estes não têm fé"
  },
  "jó36.1-23": {
    id: "jó36.1-23",
    referencia: "Jó 36.1-23",
    livro: "Jó",
    capitulo: 36,
    vIni: 1,
    vFim: 23,
    titulo: "No sofrer do homem, Deus lhe visa o bem"
  },
  "jó36.24-33": {
    id: "jó36.24-33",
    referencia: "Jó 36.24-33",
    livro: "Jó",
    capitulo: 36,
    vIni: 24,
    vFim: 33,
    titulo: "Eliú exalta a majestade de Deus"
  },
  "jó38.1-41": {
    id: "jó38.1-41",
    referencia: "Jó 38.1-41",
    livro: "Jó",
    capitulo: 38,
    vIni: 1,
    vFim: 41,
    titulo: "O Senhor convence a Jó de ignorância"
  },
  "jó40.3-5": {
    id: "jó40.3-5",
    referencia: "Jó 40.3-5",
    livro: "Jó",
    capitulo: 40,
    vIni: 3,
    vFim: 5,
    titulo: "A resposta humilde de Jó"
  },
  "jó40.6-24": {
    id: "jó40.6-24",
    referencia: "Jó 40.6-24",
    livro: "Jó",
    capitulo: 40,
    vIni: 6,
    vFim: 24,
    titulo: "As manifestações do poder de Deus"
  },
  "jó42.1-5": {
    id: "jó42.1-5",
    referencia: "Jó 42.1-5",
    livro: "Jó",
    capitulo: 42,
    vIni: 1,
    vFim: 5,
    titulo: "A confissão de Jó"
  },
  "jó42.7-9": {
    id: "jó42.7-9",
    referencia: "Jó 42.7-9",
    livro: "Jó",
    capitulo: 42,
    vIni: 7,
    vFim: 9,
    titulo: "Deus repreende os três amigos de Jó"
  },
  "jó42.10-17": {
    id: "jó42.10-17",
    referencia: "Jó 42.10-17",
    livro: "Jó",
    capitulo: 42,
    vIni: 10,
    vFim: 17,
    titulo: "Deus restaura a prosperidade de Jó"
  },
  "sl1.1-6": {
    id: "sl1.1-6",
    referencia: "Sl 1.1-6",
    livro: "Salmos",
    capitulo: 1,
    vIni: 1,
    vFim: 6,
    titulo: "Os justos e os ímpios"
  },
  "sl2.1-12": {
    id: "sl2.1-12",
    referencia: "Sl 2.1-12",
    livro: "Salmos",
    capitulo: 2,
    vIni: 1,
    vFim: 12,
    titulo: "O reinado do Ungido de Deus"
  },
  "sl3.2-8": {
    id: "sl3.2-8",
    referencia: "Sl 3.2-8",
    livro: "Salmos",
    capitulo: 3,
    vIni: 2,
    vFim: 8,
    titulo: "Confiança em Deus, na adversidade"
  },
  "sl4.1-8": {
    id: "sl4.1-8",
    referencia: "Sl 4.1-8",
    livro: "Salmos",
    capitulo: 4,
    vIni: 1,
    vFim: 8,
    titulo: "Confiança em Deus, na angústia"
  },
  "sl5.1-12": {
    id: "sl5.1-12",
    referencia: "Sl 5.1-12",
    livro: "Salmos",
    capitulo: 5,
    vIni: 1,
    vFim: 12,
    titulo: "Proteção contra os ímpios"
  },
  "sl6.1-10": {
    id: "sl6.1-10",
    referencia: "Sl 6.1-10",
    livro: "Salmos",
    capitulo: 6,
    vIni: 1,
    vFim: 10,
    titulo: "Davi recorre à misericórdia de Deus"
  },
  "sl7.1-17": {
    id: "sl7.1-17",
    referencia: "Sl 7.1-17",
    livro: "Salmos",
    capitulo: 7,
    vIni: 1,
    vFim: 17,
    titulo: "Deus defende o justo contra o ímpio"
  },
  "sl8.1-9": {
    id: "sl8.1-9",
    referencia: "Sl 8.1-9",
    livro: "Salmos",
    capitulo: 8,
    vIni: 1,
    vFim: 9,
    titulo: "A glória divina e a dignidade do filho do homem"
  },
  "sl9.1-20": {
    id: "sl9.1-20",
    referencia: "Sl 9.1-20",
    livro: "Salmos",
    capitulo: 9,
    vIni: 1,
    vFim: 20,
    titulo: "Ações de graças"
  },
  "sl10.1-18": {
    id: "sl10.1-18",
    referencia: "Sl 10.1-18",
    livro: "Salmos",
    capitulo: 10,
    vIni: 1,
    vFim: 18,
    titulo: "A derrubada dos ímpios"
  },
  "sl11.1-7": {
    id: "sl11.1-7",
    referencia: "Sl 11.1-7",
    livro: "Salmos",
    capitulo: 11,
    vIni: 1,
    vFim: 7,
    titulo: "O Senhor é forte refúgio"
  },
  "sl12.1-8": {
    id: "sl12.1-8",
    referencia: "Sl 12.1-8",
    livro: "Salmos",
    capitulo: 12,
    vIni: 1,
    vFim: 8,
    titulo: "Auxílio contra a falsidade"
  },
  "sl13.1-6": {
    id: "sl13.1-6",
    referencia: "Sl 13.1-6",
    livro: "Salmos",
    capitulo: 13,
    vIni: 1,
    vFim: 6,
    titulo: "Oração de fé"
  },
  "sl14.1-7": {
    id: "sl14.1-7",
    referencia: "Sl 14.1-7",
    livro: "Salmos",
    capitulo: 14,
    vIni: 1,
    vFim: 7,
    titulo: "A corrupção do pecador e sua redenção"
  },
  "sl15.1-5": {
    id: "sl15.1-5",
    referencia: "Sl 15.1-5",
    livro: "Salmos",
    capitulo: 15,
    vIni: 1,
    vFim: 5,
    titulo: "O cidadão dos céus"
  },
  "sl16.1-11": {
    id: "sl16.1-11",
    referencia: "Sl 16.1-11",
    livro: "Salmos",
    capitulo: 16,
    vIni: 1,
    vFim: 11,
    titulo: "O Santo de Deus"
  },
  "sl17.1-15": {
    id: "sl17.1-15",
    referencia: "Sl 17.1-15",
    livro: "Salmos",
    capitulo: 17,
    vIni: 1,
    vFim: 15,
    titulo: "Súplica pela proteção divina"
  },
  "sl18.1-50": {
    id: "sl18.1-50",
    referencia: "Sl 18.1-50",
    livro: "Salmos",
    capitulo: 18,
    vIni: 1,
    vFim: 50,
    titulo: "Vitória e domínio"
  },
  "sl19.1-14": {
    id: "sl19.1-14",
    referencia: "Sl 19.1-14",
    livro: "Salmos",
    capitulo: 19,
    vIni: 1,
    vFim: 14,
    titulo: "A excelência da criação e da palavra de Deus"
  },
  "sl20.1-9": {
    id: "sl20.1-9",
    referencia: "Sl 20.1-9",
    livro: "Salmos",
    capitulo: 20,
    vIni: 1,
    vFim: 9,
    titulo: "Oração a favor do rei"
  },
  "sl21.1-13": {
    id: "sl21.1-13",
    referencia: "Sl 21.1-13",
    livro: "Salmos",
    capitulo: 21,
    vIni: 1,
    vFim: 13,
    titulo: "Ações de graças pela vitória"
  },
  "sl22.1-31": {
    id: "sl22.1-31",
    referencia: "Sl 22.1-31",
    livro: "Salmos",
    capitulo: 22,
    vIni: 1,
    vFim: 31,
    titulo: "Sofrimento e vitória do Messias"
  },
  "sl23.1-6": {
    id: "sl23.1-6",
    referencia: "Sl 23.1-6",
    livro: "Salmos",
    capitulo: 23,
    vIni: 1,
    vFim: 6,
    titulo: "O Senhor é o meu pastor"
  },
  "sl24.1-10": {
    id: "sl24.1-10",
    referencia: "Sl 24.1-10",
    livro: "Salmos",
    capitulo: 24,
    vIni: 1,
    vFim: 10,
    titulo: "A vinda do Rei da Glória"
  },
  "sl25.1-22": {
    id: "sl25.1-22",
    referencia: "Sl 25.1-22",
    livro: "Salmos",
    capitulo: 25,
    vIni: 1,
    vFim: 22,
    titulo: "Oração por auxílio divino"
  },
  "sl26.1-12": {
    id: "sl26.1-12",
    referencia: "Sl 26.1-12",
    livro: "Salmos",
    capitulo: 26,
    vIni: 1,
    vFim: 12,
    titulo: "Apelo do justo"
  },
  "sl27.1-14": {
    id: "sl27.1-14",
    referencia: "Sl 27.1-14",
    livro: "Salmos",
    capitulo: 27,
    vIni: 1,
    vFim: 14,
    titulo: "Anelo pela presença de Deus"
  },
  "sl28.1-9": {
    id: "sl28.1-9",
    referencia: "Sl 28.1-9",
    livro: "Salmos",
    capitulo: 28,
    vIni: 1,
    vFim: 9,
    titulo: "Súplica e ações de graças"
  },
  "sl29.1-11": {
    id: "sl29.1-11",
    referencia: "Sl 29.1-11",
    livro: "Salmos",
    capitulo: 29,
    vIni: 1,
    vFim: 11,
    titulo: "A voz de Deus na tempestade"
  },
  "sl30.1-12": {
    id: "sl30.1-12",
    referencia: "Sl 30.1-12",
    livro: "Salmos",
    capitulo: 30,
    vIni: 1,
    vFim: 12,
    titulo: "Ações de graças pela libertação da morte"
  },
  "sl31.1-24": {
    id: "sl31.1-24",
    referencia: "Sl 31.1-24",
    livro: "Salmos",
    capitulo: 31,
    vIni: 1,
    vFim: 24,
    titulo: "Lamentos e louvor"
  },
  "sl32.1-11": {
    id: "sl32.1-11",
    referencia: "Sl 32.1-11",
    livro: "Salmos",
    capitulo: 32,
    vIni: 1,
    vFim: 11,
    titulo: "A bem-aventurança de quem recebe o perdão"
  },
  "sl33.1-22": {
    id: "sl33.1-22",
    referencia: "Sl 33.1-22",
    livro: "Salmos",
    capitulo: 33,
    vIni: 1,
    vFim: 22,
    titulo: "Louvor ao Criador e Preservador"
  },
  "sl34.1-22": {
    id: "sl34.1-22",
    referencia: "Sl 34.1-22",
    livro: "Salmos",
    capitulo: 34,
    vIni: 1,
    vFim: 22,
    titulo: "Provai que o Senhor é bom!"
  },
  "sl35.1-28": {
    id: "sl35.1-28",
    referencia: "Sl 35.1-28",
    livro: "Salmos",
    capitulo: 35,
    vIni: 1,
    vFim: 28,
    titulo: "Castigo dos adversários"
  },
  "sl36.1-12": {
    id: "sl36.1-12",
    referencia: "Sl 36.1-12",
    livro: "Salmos",
    capitulo: 36,
    vIni: 1,
    vFim: 12,
    titulo: "Malícia humana e benignidade divina"
  },
  "sl37.1-40": {
    id: "sl37.1-40",
    referencia: "Sl 37.1-40",
    livro: "Salmos",
    capitulo: 37,
    vIni: 1,
    vFim: 40,
    titulo: "Temporária, a felicidade dos perversos"
  },
  "sl38.1-22": {
    id: "sl38.1-22",
    referencia: "Sl 38.1-22",
    livro: "Salmos",
    capitulo: 38,
    vIni: 1,
    vFim: 22,
    titulo: "Arrependimento do pecador"
  },
  "sl39.1-13": {
    id: "sl39.1-13",
    referencia: "Sl 39.1-13",
    livro: "Salmos",
    capitulo: 39,
    vIni: 1,
    vFim: 13,
    titulo: "A vaidade da vida"
  },
  "sl40.1-17": {
    id: "sl40.1-17",
    referencia: "Sl 40.1-17",
    livro: "Salmos",
    capitulo: 40,
    vIni: 1,
    vFim: 17,
    titulo: "Oração para livramento"
  },
  "sl41.1-13": {
    id: "sl41.1-13",
    referencia: "Sl 41.1-13",
    livro: "Salmos",
    capitulo: 41,
    vIni: 1,
    vFim: 13,
    titulo: "A calúnia dos inimigos e o socorro de Deus"
  },
  "sl42.1-11": {
    id: "sl42.1-11",
    referencia: "Sl 42.1-11",
    livro: "Salmos",
    capitulo: 42,
    vIni: 1,
    vFim: 11,
    titulo: "A alma anela por Deus"
  },
  "sl43.1-5": {
    id: "sl43.1-5",
    referencia: "Sl 43.1-5",
    livro: "Salmos",
    capitulo: 43,
    vIni: 1,
    vFim: 5,
    titulo: "Desejos pelo santuário"
  },
  "sl44.1-26": {
    id: "sl44.1-26",
    referencia: "Sl 44.1-26",
    livro: "Salmos",
    capitulo: 44,
    vIni: 1,
    vFim: 26,
    titulo: "Apelo por auxílio divino"
  },
  "sl45.1-17": {
    id: "sl45.1-17",
    referencia: "Sl 45.1-17",
    livro: "Salmos",
    capitulo: 45,
    vIni: 1,
    vFim: 17,
    titulo: "O Ungido de Deus e a sua noiva"
  },
  "sl46.1-11": {
    id: "sl46.1-11",
    referencia: "Sl 46.1-11",
    livro: "Salmos",
    capitulo: 46,
    vIni: 1,
    vFim: 11,
    titulo: "Deus é o nosso refúgio e fortaleza"
  },
  "sl47.1-9": {
    id: "sl47.1-9",
    referencia: "Sl 47.1-9",
    livro: "Salmos",
    capitulo: 47,
    vIni: 1,
    vFim: 9,
    titulo: "Deus, o Rei da terra"
  },
  "sl48.1-14": {
    id: "sl48.1-14",
    referencia: "Sl 48.1-14",
    livro: "Salmos",
    capitulo: 48,
    vIni: 1,
    vFim: 14,
    titulo: "A cidade de Deus"
  },
  "sl49.1-20": {
    id: "sl49.1-20",
    referencia: "Sl 49.1-20",
    livro: "Salmos",
    capitulo: 49,
    vIni: 1,
    vFim: 20,
    titulo: "A vaidade do homem"
  },
  "sl50.1-23": {
    id: "sl50.1-23",
    referencia: "Sl 50.1-23",
    livro: "Salmos",
    capitulo: 50,
    vIni: 1,
    vFim: 23,
    titulo: "A essência do culto a Deus"
  },
  "sl51.2-19": {
    id: "sl51.2-19",
    referencia: "Sl 51.2-19",
    livro: "Salmos",
    capitulo: 51,
    vIni: 2,
    vFim: 19,
    titulo: "Confissão e arrependimento"
  },
  "sl52.1-9": {
    id: "sl52.1-9",
    referencia: "Sl 52.1-9",
    livro: "Salmos",
    capitulo: 52,
    vIni: 1,
    vFim: 9,
    titulo: "Condenação do ímpio"
  },
  "sl53.1-6": {
    id: "sl53.1-6",
    referencia: "Sl 53.1-6",
    livro: "Salmos",
    capitulo: 53,
    vIni: 1,
    vFim: 6,
    titulo: "A corrupção do pecador e sua redenção"
  },
  "sl54.1-7": {
    id: "sl54.1-7",
    referencia: "Sl 54.1-7",
    livro: "Salmos",
    capitulo: 54,
    vIni: 1,
    vFim: 7,
    titulo: "Apelo para o socorro divino"
  },
  "sl55.1-23": {
    id: "sl55.1-23",
    referencia: "Sl 55.1-23",
    livro: "Salmos",
    capitulo: 55,
    vIni: 1,
    vFim: 23,
    titulo: "Que os traidores sejam destruídos"
  },
  "sl56.1-13": {
    id: "sl56.1-13",
    referencia: "Sl 56.1-13",
    livro: "Salmos",
    capitulo: 56,
    vIni: 1,
    vFim: 13,
    titulo: "Conforto na perseguição"
  },
  "sl57.1-11": {
    id: "sl57.1-11",
    referencia: "Sl 57.1-11",
    livro: "Salmos",
    capitulo: 57,
    vIni: 1,
    vFim: 11,
    titulo: "Louvor pela benignidade divina"
  },
  "sl58.1-11": {
    id: "sl58.1-11",
    referencia: "Sl 58.1-11",
    livro: "Salmos",
    capitulo: 58,
    vIni: 1,
    vFim: 11,
    titulo: "A sorte dos ímpios"
  },
  "sl59.1-17": {
    id: "sl59.1-17",
    referencia: "Sl 59.1-17",
    livro: "Salmos",
    capitulo: 59,
    vIni: 1,
    vFim: 17,
    titulo: "Súplica em prol de libertação"
  },
  "sl60.2-12": {
    id: "sl60.2-12",
    referencia: "Sl 60.2-12",
    livro: "Salmos",
    capitulo: 60,
    vIni: 2,
    vFim: 12,
    titulo: "Oração em tempos de guerra Vs. 5-12: Salmo 108.6-13"
  },
  "sl61.2-8": {
    id: "sl61.2-8",
    referencia: "Sl 61.2-8",
    livro: "Salmos",
    capitulo: 61,
    vIni: 2,
    vFim: 8,
    titulo: "Oração pelo rei"
  },
  "sl62.1-12": {
    id: "sl62.1-12",
    referencia: "Sl 62.1-12",
    livro: "Salmos",
    capitulo: 62,
    vIni: 1,
    vFim: 12,
    titulo: "Exortação à confiança"
  },
  "sl63.2-11": {
    id: "sl63.2-11",
    referencia: "Sl 63.2-11",
    livro: "Salmos",
    capitulo: 63,
    vIni: 2,
    vFim: 11,
    titulo: "Buscando a Deus"
  },
  "sl64.1-10": {
    id: "sl64.1-10",
    referencia: "Sl 64.1-10",
    livro: "Salmos",
    capitulo: 64,
    vIni: 1,
    vFim: 10,
    titulo: "Proteção contra os inimigos"
  },
  "sl65.1-13": {
    id: "sl65.1-13",
    referencia: "Sl 65.1-13",
    livro: "Salmos",
    capitulo: 65,
    vIni: 1,
    vFim: 13,
    titulo: "Ações de graças pelas bênçãos das searas"
  },
  "sl66.1-20": {
    id: "sl66.1-20",
    referencia: "Sl 66.1-20",
    livro: "Salmos",
    capitulo: 66,
    vIni: 1,
    vFim: 20,
    titulo: "Ofertas de gratidão"
  },
  "sl67.1-7": {
    id: "sl67.1-7",
    referencia: "Sl 67.1-7",
    livro: "Salmos",
    capitulo: 67,
    vIni: 1,
    vFim: 7,
    titulo: "As nações rendem graças"
  },
  "sl68.1-35": {
    id: "sl68.1-35",
    referencia: "Sl 68.1-35",
    livro: "Salmos",
    capitulo: 68,
    vIni: 1,
    vFim: 35,
    titulo: "A vitória de Deus sobre os seus inimigos"
  },
  "sl69.1-36": {
    id: "sl69.1-36",
    referencia: "Sl 69.1-36",
    livro: "Salmos",
    capitulo: 69,
    vIni: 1,
    vFim: 36,
    titulo: "O lamento do Messias"
  },
  "sl70.1-5": {
    id: "sl70.1-5",
    referencia: "Sl 70.1-5",
    livro: "Salmos",
    capitulo: 70,
    vIni: 1,
    vFim: 5,
    titulo: "Petição por auxílio divino"
  },
  "sl71.1-24": {
    id: "sl71.1-24",
    referencia: "Sl 71.1-24",
    livro: "Salmos",
    capitulo: 71,
    vIni: 1,
    vFim: 24,
    titulo: "Súplicas de um ancião"
  },
  "sl72.1-20": {
    id: "sl72.1-20",
    referencia: "Sl 72.1-20",
    livro: "Salmos",
    capitulo: 72,
    vIni: 1,
    vFim: 20,
    titulo: "O rei justo e o seu reinado eterno"
  },
  "sl73.1-28": {
    id: "sl73.1-28",
    referencia: "Sl 73.1-28",
    livro: "Salmos",
    capitulo: 73,
    vIni: 1,
    vFim: 28,
    titulo: "O problema da prosperidade dos maus"
  },
  "sl74.1-23": {
    id: "sl74.1-23",
    referencia: "Sl 74.1-23",
    livro: "Salmos",
    capitulo: 74,
    vIni: 1,
    vFim: 23,
    titulo: "Lamento por causa da profanação"
  },
  "sl75.1-10": {
    id: "sl75.1-10",
    referencia: "Sl 75.1-10",
    livro: "Salmos",
    capitulo: 75,
    vIni: 1,
    vFim: 10,
    titulo: "Deus é juiz"
  },
  "sl76.1-12": {
    id: "sl76.1-12",
    referencia: "Sl 76.1-12",
    livro: "Salmos",
    capitulo: 76,
    vIni: 1,
    vFim: 12,
    titulo: "A majestade e o poder de Deus"
  },
  "sl77.1-20": {
    id: "sl77.1-20",
    referencia: "Sl 77.1-20",
    livro: "Salmos",
    capitulo: 77,
    vIni: 1,
    vFim: 20,
    titulo: "As grandes obras e a misericórdia de Deus"
  },
  "sl78.1-72": {
    id: "sl78.1-72",
    referencia: "Sl 78.1-72",
    livro: "Salmos",
    capitulo: 78,
    vIni: 1,
    vFim: 72,
    titulo: "A providência divina na história do seu povo"
  },
  "sl79.1-13": {
    id: "sl79.1-13",
    referencia: "Sl 79.1-13",
    livro: "Salmos",
    capitulo: 79,
    vIni: 1,
    vFim: 13,
    titulo: "O povo pede castigo contra os inimigos"
  },
  "sl80.1-19": {
    id: "sl80.1-19",
    referencia: "Sl 80.1-19",
    livro: "Salmos",
    capitulo: 80,
    vIni: 1,
    vFim: 19,
    titulo: "Pedindo restaurações"
  },
  "sl81.1-16": {
    id: "sl81.1-16",
    referencia: "Sl 81.1-16",
    livro: "Salmos",
    capitulo: 81,
    vIni: 1,
    vFim: 16,
    titulo: "Exortação a louvor e obediência"
  },
  "sl82.1-8": {
    id: "sl82.1-8",
    referencia: "Sl 82.1-8",
    livro: "Salmos",
    capitulo: 82,
    vIni: 1,
    vFim: 8,
    titulo: "Increpadas a injustiça e a parcialidade dos juízes"
  },
  "sl83.1-18": {
    id: "sl83.1-18",
    referencia: "Sl 83.1-18",
    livro: "Salmos",
    capitulo: 83,
    vIni: 1,
    vFim: 18,
    titulo: "Julgamento de Deus contra as nações inimigas"
  },
  "sl84.1-12": {
    id: "sl84.1-12",
    referencia: "Sl 84.1-12",
    livro: "Salmos",
    capitulo: 84,
    vIni: 1,
    vFim: 12,
    titulo: "Saudades do templo"
  },
  "sl85.1-13": {
    id: "sl85.1-13",
    referencia: "Sl 85.1-13",
    livro: "Salmos",
    capitulo: 85,
    vIni: 1,
    vFim: 13,
    titulo: "Pede-se o perdão de Deus"
  },
  "sl86.1-17": {
    id: "sl86.1-17",
    referencia: "Sl 86.1-17",
    livro: "Salmos",
    capitulo: 86,
    vIni: 1,
    vFim: 17,
    titulo: "Súplica e confiança"
  },
  "sl87.1-7": {
    id: "sl87.1-7",
    referencia: "Sl 87.1-7",
    livro: "Salmos",
    capitulo: 87,
    vIni: 1,
    vFim: 7,
    titulo: "Jerusalém, amada de Deus"
  },
  "sl88.1-18": {
    id: "sl88.1-18",
    referencia: "Sl 88.1-18",
    livro: "Salmos",
    capitulo: 88,
    vIni: 1,
    vFim: 18,
    titulo: "Lamentação de um atribulado"
  },
  "sl89.1-51": {
    id: "sl89.1-51",
    referencia: "Sl 89.1-51",
    livro: "Salmos",
    capitulo: 89,
    vIni: 1,
    vFim: 51,
    titulo: "Promessa do reino messiânico a Davi"
  },
  "sl90.1-17": {
    id: "sl90.1-17",
    referencia: "Sl 90.1-17",
    livro: "Salmos",
    capitulo: 90,
    vIni: 1,
    vFim: 17,
    titulo: "A eternidade de Deus e a transitoriedade do homem"
  },
  "sl91.1-16": {
    id: "sl91.1-16",
    referencia: "Sl 91.1-16",
    livro: "Salmos",
    capitulo: 91,
    vIni: 1,
    vFim: 16,
    titulo: "Sob a sombra do Altíssimo"
  },
  "sl92.1-15": {
    id: "sl92.1-15",
    referencia: "Sl 92.1-15",
    livro: "Salmos",
    capitulo: 92,
    vIni: 1,
    vFim: 15,
    titulo: "Hino de gratidão a Deus"
  },
  "sl93.1-5": {
    id: "sl93.1-5",
    referencia: "Sl 93.1-5",
    livro: "Salmos",
    capitulo: 93,
    vIni: 1,
    vFim: 5,
    titulo: "O poder e a majestade de Deus"
  },
  "sl94.1-23": {
    id: "sl94.1-23",
    referencia: "Sl 94.1-23",
    livro: "Salmos",
    capitulo: 94,
    vIni: 1,
    vFim: 23,
    titulo: "Apelo para a justiça de Deus"
  },
  "sl95.1-11": {
    id: "sl95.1-11",
    referencia: "Sl 95.1-11",
    livro: "Salmos",
    capitulo: 95,
    vIni: 1,
    vFim: 11,
    titulo: "Convite a louvar o Senhor"
  },
  "sl96.1-13": {
    id: "sl96.1-13",
    referencia: "Sl 96.1-13",
    livro: "Salmos",
    capitulo: 96,
    vIni: 1,
    vFim: 13,
    titulo: "Tributo à glória e majestade de Deus"
  },
  "sl97.1-12": {
    id: "sl97.1-12",
    referencia: "Sl 97.1-12",
    livro: "Salmos",
    capitulo: 97,
    vIni: 1,
    vFim: 12,
    titulo: "A majestade e o domínio de Deus"
  },
  "sl98.1-9": {
    id: "sl98.1-9",
    referencia: "Sl 98.1-9",
    livro: "Salmos",
    capitulo: 98,
    vIni: 1,
    vFim: 9,
    titulo: "A justiça do Senhor"
  },
  "sl99.1-9": {
    id: "sl99.1-9",
    referencia: "Sl 99.1-9",
    livro: "Salmos",
    capitulo: 99,
    vIni: 1,
    vFim: 9,
    titulo: "A santidade de Deus"
  },
  "sl100.1-5": {
    id: "sl100.1-5",
    referencia: "Sl 100.1-5",
    livro: "Salmos",
    capitulo: 100,
    vIni: 1,
    vFim: 5,
    titulo: "Hino de ingresso ao templo"
  },
  "sl101.2-8": {
    id: "sl101.2-8",
    referencia: "Sl 101.2-8",
    livro: "Salmos",
    capitulo: 101,
    vIni: 2,
    vFim: 8,
    titulo: "Modelo de bom rei"
  },
  "sl102.1-28": {
    id: "sl102.1-28",
    referencia: "Sl 102.1-28",
    livro: "Salmos",
    capitulo: 102,
    vIni: 1,
    vFim: 28,
    titulo: "Arrependimento e esperança"
  },
  "sl103.1-22": {
    id: "sl103.1-22",
    referencia: "Sl 103.1-22",
    livro: "Salmos",
    capitulo: 103,
    vIni: 1,
    vFim: 22,
    titulo: "A misericórdia de Deus"
  },
  "sl104.1-35": {
    id: "sl104.1-35",
    referencia: "Sl 104.1-35",
    livro: "Salmos",
    capitulo: 104,
    vIni: 1,
    vFim: 35,
    titulo: "Louvor ao Deus criador"
  },
  "sl105.1-45": {
    id: "sl105.1-45",
    referencia: "Sl 105.1-45",
    livro: "Salmos",
    capitulo: 105,
    vIni: 1,
    vFim: 45,
    titulo: "As maravilhosas obras do Senhor a favor de Israel"
  },
  "sl106.1-48": {
    id: "sl106.1-48",
    referencia: "Sl 106.1-48",
    livro: "Salmos",
    capitulo: 106,
    vIni: 1,
    vFim: 48,
    titulo: "A graça de Deus e a ingratidão de Israel"
  },
  "sl107.1-43": {
    id: "sl107.1-43",
    referencia: "Sl 107.1-43",
    livro: "Salmos",
    capitulo: 107,
    vIni: 1,
    vFim: 43,
    titulo: "Deus salva de todas as tribulações"
  },
  "sl108.1-13": {
    id: "sl108.1-13",
    referencia: "Sl 108.1-13",
    livro: "Salmos",
    capitulo: 108,
    vIni: 1,
    vFim: 13,
    titulo: "Deus concede vitória ao seu povo"
  },
  "sl109.1-31": {
    id: "sl109.1-31",
    referencia: "Sl 109.1-31",
    livro: "Salmos",
    capitulo: 109,
    vIni: 1,
    vFim: 31,
    titulo: "Imprecações contra os inimigos"
  },
  "sl110.1-7": {
    id: "sl110.1-7",
    referencia: "Sl 110.1-7",
    livro: "Salmos",
    capitulo: 110,
    vIni: 1,
    vFim: 7,
    titulo: "O reino e o sacerdócio do Messias"
  },
  "sl111.1-10": {
    id: "sl111.1-10",
    referencia: "Sl 111.1-10",
    livro: "Salmos",
    capitulo: 111,
    vIni: 1,
    vFim: 10,
    titulo: "As obras magníficas de Deus"
  },
  "sl112.1-10": {
    id: "sl112.1-10",
    referencia: "Sl 112.1-10",
    livro: "Salmos",
    capitulo: 112,
    vIni: 1,
    vFim: 10,
    titulo: "Promessa da vida futura aos piedosos"
  },
  "sl113.1-9": {
    id: "sl113.1-9",
    referencia: "Sl 113.1-9",
    livro: "Salmos",
    capitulo: 113,
    vIni: 1,
    vFim: 9,
    titulo: "O Senhor, o maior e mais digno objeto de louvor"
  },
  "sl114.1-8": {
    id: "sl114.1-8",
    referencia: "Sl 114.1-8",
    livro: "Salmos",
    capitulo: 114,
    vIni: 1,
    vFim: 8,
    titulo: "As maravilhas do êxodo"
  },
  "sl115.1-18": {
    id: "sl115.1-18",
    referencia: "Sl 115.1-18",
    livro: "Salmos",
    capitulo: 115,
    vIni: 1,
    vFim: 18,
    titulo: "Honras somente a Deus"
  },
  "sl116.1-19": {
    id: "sl116.1-19",
    referencia: "Sl 116.1-19",
    livro: "Salmos",
    capitulo: 116,
    vIni: 1,
    vFim: 19,
    titulo: "Salmo de ações de graças"
  },
  "sl117.1-2": {
    id: "sl117.1-2",
    referencia: "Sl 117.1-2",
    livro: "Salmos",
    capitulo: 117,
    vIni: 1,
    vFim: 2,
    titulo: "Todos os povos devem louvar ao Senhor"
  },
  "sl118.1-29": {
    id: "sl118.1-29",
    referencia: "Sl 118.1-29",
    livro: "Salmos",
    capitulo: 118,
    vIni: 1,
    vFim: 29,
    titulo: "A alegria dos justos pelo Salvador"
  },
  "sl119.1-176": {
    id: "sl119.1-176",
    referencia: "Sl 119.1-176",
    livro: "Salmos",
    capitulo: 119,
    vIni: 1,
    vFim: 176,
    titulo: "Excelência da lei divina"
  },
  "sl120.1-7": {
    id: "sl120.1-7",
    referencia: "Sl 120.1-7",
    livro: "Salmos",
    capitulo: 120,
    vIni: 1,
    vFim: 7,
    titulo: "Contra as más línguas"
  },
  "sl121.1-8": {
    id: "sl121.1-8",
    referencia: "Sl 121.1-8",
    livro: "Salmos",
    capitulo: 121,
    vIni: 1,
    vFim: 8,
    titulo: "Deus, o fiel guarda dos homens"
  },
  "sl122.1-9": {
    id: "sl122.1-9",
    referencia: "Sl 122.1-9",
    livro: "Salmos",
    capitulo: 122,
    vIni: 1,
    vFim: 9,
    titulo: "Oração pela paz de Jerusalém"
  },
  "sl123.1-4": {
    id: "sl123.1-4",
    referencia: "Sl 123.1-4",
    livro: "Salmos",
    capitulo: 123,
    vIni: 1,
    vFim: 4,
    titulo: "Solicitude por auxílio divino"
  },
  "sl124.1-8": {
    id: "sl124.1-8",
    referencia: "Sl 124.1-8",
    livro: "Salmos",
    capitulo: 124,
    vIni: 1,
    vFim: 8,
    titulo: "Deus, nosso protetor e libertador"
  },
  "sl125.1-5": {
    id: "sl125.1-5",
    referencia: "Sl 125.1-5",
    livro: "Salmos",
    capitulo: 125,
    vIni: 1,
    vFim: 5,
    titulo: "Fé inabalável"
  },
  "sl126.1-6": {
    id: "sl126.1-6",
    referencia: "Sl 126.1-6",
    livro: "Salmos",
    capitulo: 126,
    vIni: 1,
    vFim: 6,
    titulo: "Consolo para os que choram"
  },
  "sl127.1-5": {
    id: "sl127.1-5",
    referencia: "Sl 127.1-5",
    livro: "Salmos",
    capitulo: 127,
    vIni: 1,
    vFim: 5,
    titulo: "Todo bem procede de Deus"
  },
  "sl128.1-6": {
    id: "sl128.1-6",
    referencia: "Sl 128.1-6",
    livro: "Salmos",
    capitulo: 128,
    vIni: 1,
    vFim: 6,
    titulo: "Temor de Deus e felicidade no lar"
  },
  "sl129.1-8": {
    id: "sl129.1-8",
    referencia: "Sl 129.1-8",
    livro: "Salmos",
    capitulo: 129,
    vIni: 1,
    vFim: 8,
    titulo: "Recordação de libertações"
  },
  "sl130.1-8": {
    id: "sl130.1-8",
    referencia: "Sl 130.1-8",
    livro: "Salmos",
    capitulo: 130,
    vIni: 1,
    vFim: 8,
    titulo: "Das profundezas clamo ao Senhor"
  },
  "sl131.1-3": {
    id: "sl131.1-3",
    referencia: "Sl 131.1-3",
    livro: "Salmos",
    capitulo: 131,
    vIni: 1,
    vFim: 3,
    titulo: "Calma em Deus"
  },
  "sl132.1-18": {
    id: "sl132.1-18",
    referencia: "Sl 132.1-18",
    livro: "Salmos",
    capitulo: 132,
    vIni: 1,
    vFim: 18,
    titulo: "Uma promessa antiga"
  },
  "sl133.1-3": {
    id: "sl133.1-3",
    referencia: "Sl 133.1-3",
    livro: "Salmos",
    capitulo: 133,
    vIni: 1,
    vFim: 3,
    titulo: "A excelência da união fraternal"
  },
  "sl134.1-3": {
    id: "sl134.1-3",
    referencia: "Sl 134.1-3",
    livro: "Salmos",
    capitulo: 134,
    vIni: 1,
    vFim: 3,
    titulo: "Convocando ao culto vespertino"
  },
  "sl135.1-21": {
    id: "sl135.1-21",
    referencia: "Sl 135.1-21",
    livro: "Salmos",
    capitulo: 135,
    vIni: 1,
    vFim: 21,
    titulo: "Louvores a Deus"
  },
  "sl136.1-26": {
    id: "sl136.1-26",
    referencia: "Sl 136.1-26",
    livro: "Salmos",
    capitulo: 136,
    vIni: 1,
    vFim: 26,
    titulo: "A misericórdia de Deus"
  },
  "sl137.1-9": {
    id: "sl137.1-9",
    referencia: "Sl 137.1-9",
    livro: "Salmos",
    capitulo: 137,
    vIni: 1,
    vFim: 9,
    titulo: "Saudades da pátria"
  },
  "sl138.1-8": {
    id: "sl138.1-8",
    referencia: "Sl 138.1-8",
    livro: "Salmos",
    capitulo: 138,
    vIni: 1,
    vFim: 8,
    titulo: "Graças a Deus por sua fidelidade"
  },
  "sl139.1-24": {
    id: "sl139.1-24",
    referencia: "Sl 139.1-24",
    livro: "Salmos",
    capitulo: 139,
    vIni: 1,
    vFim: 24,
    titulo: "Deus onisciente e onipotente"
  },
  "sl140.1-13": {
    id: "sl140.1-13",
    referencia: "Sl 140.1-13",
    livro: "Salmos",
    capitulo: 140,
    vIni: 1,
    vFim: 13,
    titulo: "Contra inimigos e perfídias"
  },
  "sl141.1-10": {
    id: "sl141.1-10",
    referencia: "Sl 141.1-10",
    livro: "Salmos",
    capitulo: 141,
    vIni: 1,
    vFim: 10,
    titulo: "Oração vespertina por santificação e proteção"
  },
  "sl142.1-7": {
    id: "sl142.1-7",
    referencia: "Sl 142.1-7",
    livro: "Salmos",
    capitulo: 142,
    vIni: 1,
    vFim: 7,
    titulo: "Oração no meio de grande perigo"
  },
  "sl143.1-12": {
    id: "sl143.1-12",
    referencia: "Sl 143.1-12",
    livro: "Salmos",
    capitulo: 143,
    vIni: 1,
    vFim: 12,
    titulo: "Súplica por libertação"
  },
  "sl144.1-15": {
    id: "sl144.1-15",
    referencia: "Sl 144.1-15",
    livro: "Salmos",
    capitulo: 144,
    vIni: 1,
    vFim: 15,
    titulo: "Ações de graças pela proteção de Deus"
  },
  "sl145.1-21": {
    id: "sl145.1-21",
    referencia: "Sl 145.1-21",
    livro: "Salmos",
    capitulo: 145,
    vIni: 1,
    vFim: 21,
    titulo: "A bondade, grandeza e providência de Deus"
  },
  "sl146.1-10": {
    id: "sl146.1-10",
    referencia: "Sl 146.1-10",
    livro: "Salmos",
    capitulo: 146,
    vIni: 1,
    vFim: 10,
    titulo: "A fraqueza do homem e a fidelidade de Deus"
  },
  "sl147.1-20": {
    id: "sl147.1-20",
    referencia: "Sl 147.1-20",
    livro: "Salmos",
    capitulo: 147,
    vIni: 1,
    vFim: 20,
    titulo: "Louvor ao Deus Todo-Poderoso"
  },
  "sl148.1-14": {
    id: "sl148.1-14",
    referencia: "Sl 148.1-14",
    livro: "Salmos",
    capitulo: 148,
    vIni: 1,
    vFim: 14,
    titulo: "Um coro de aleluias"
  },
  "sl149.1-9": {
    id: "sl149.1-9",
    referencia: "Sl 149.1-9",
    livro: "Salmos",
    capitulo: 149,
    vIni: 1,
    vFim: 9,
    titulo: "Os fiéis louvam a Deus"
  },
  "sl150.1-6": {
    id: "sl150.1-6",
    referencia: "Sl 150.1-6",
    livro: "Salmos",
    capitulo: 150,
    vIni: 1,
    vFim: 6,
    titulo: "Doxologia final"
  },
  "pv1.1-7": {
    id: "pv1.1-7",
    referencia: "Pv 1.1-7",
    livro: "Provérbios",
    capitulo: 1,
    vIni: 1,
    vFim: 7,
    titulo: "Uso dos provérbios"
  },
  "pv1.8-19": {
    id: "pv1.8-19",
    referencia: "Pv 1.8-19",
    livro: "Provérbios",
    capitulo: 1,
    vIni: 8,
    vFim: 19,
    titulo: "Contra as seduções dos pecadores"
  },
  "pv1.20-33": {
    id: "pv1.20-33",
    referencia: "Pv 1.20-33",
    livro: "Provérbios",
    capitulo: 1,
    vIni: 20,
    vFim: 33,
    titulo: "Clama a Sabedoria"
  },
  "pv2.1-22": {
    id: "pv2.1-22",
    referencia: "Pv 2.1-22",
    livro: "Provérbios",
    capitulo: 2,
    vIni: 1,
    vFim: 22,
    titulo: "A excelência da sabedoria"
  },
  "pv3.1-35": {
    id: "pv3.1-35",
    referencia: "Pv 3.1-35",
    livro: "Provérbios",
    capitulo: 3,
    vIni: 1,
    vFim: 35,
    titulo: "Exortações da Sabedoria a obedecer ao Senhor"
  },
  "pv4.1-27": {
    id: "pv4.1-27",
    referencia: "Pv 4.1-27",
    livro: "Provérbios",
    capitulo: 4,
    vIni: 1,
    vFim: 27,
    titulo: "Exortação paternal"
  },
  "pv5.1-23": {
    id: "pv5.1-23",
    referencia: "Pv 5.1-23",
    livro: "Provérbios",
    capitulo: 5,
    vIni: 1,
    vFim: 23,
    titulo: "Advertência contra a lascívia"
  },
  "pv6.1-5": {
    id: "pv6.1-5",
    referencia: "Pv 6.1-5",
    livro: "Provérbios",
    capitulo: 6,
    vIni: 1,
    vFim: 5,
    titulo: "Advertência contra o servir de fiador"
  },
  "pv6.6-11": {
    id: "pv6.6-11",
    referencia: "Pv 6.6-11",
    livro: "Provérbios",
    capitulo: 6,
    vIni: 6,
    vFim: 11,
    titulo: "Advertência contra a preguiça"
  },
  "pv6.12-19": {
    id: "pv6.12-19",
    referencia: "Pv 6.12-19",
    livro: "Provérbios",
    capitulo: 6,
    vIni: 12,
    vFim: 19,
    titulo: "Advertência contra a maldade"
  },
  "pv6.20-35": {
    id: "pv6.20-35",
    referencia: "Pv 6.20-35",
    livro: "Provérbios",
    capitulo: 6,
    vIni: 20,
    vFim: 35,
    titulo: "Advertência contra a mulher adúltera"
  },
  "pv7.1-27": {
    id: "pv7.1-27",
    referencia: "Pv 7.1-27",
    livro: "Provérbios",
    capitulo: 7,
    vIni: 1,
    vFim: 27,
    titulo: "Mais advertências contra a mulher adúltera"
  },
  "pv8.1-21": {
    id: "pv8.1-21",
    referencia: "Pv 8.1-21",
    livro: "Provérbios",
    capitulo: 8,
    vIni: 1,
    vFim: 21,
    titulo: "A excelência da Sabedoria"
  },
  "pv8.22-36": {
    id: "pv8.22-36",
    referencia: "Pv 8.22-36",
    livro: "Provérbios",
    capitulo: 8,
    vIni: 22,
    vFim: 36,
    titulo: "A eternidade da Sabedoria"
  },
  "pv9.1-12": {
    id: "pv9.1-12",
    referencia: "Pv 9.1-12",
    livro: "Provérbios",
    capitulo: 9,
    vIni: 1,
    vFim: 12,
    titulo: "O banquete da Sabedoria"
  },
  "pv9.13-18": {
    id: "pv9.13-18",
    referencia: "Pv 9.13-18",
    livro: "Provérbios",
    capitulo: 9,
    vIni: 13,
    vFim: 18,
    titulo: "O convite da mulher-loucura"
  },
  "pv10.1-32": {
    id: "pv10.1-32",
    referencia: "Pv 10.1-32",
    livro: "Provérbios",
    capitulo: 10,
    vIni: 1,
    vFim: 32,
    titulo: "O justo em contraste com o perverso"
  },
  "pv22.17-29": {
    id: "pv22.17-29",
    referencia: "Pv 22.17-29",
    livro: "Provérbios",
    capitulo: 22,
    vIni: 17,
    vFim: 29,
    titulo: "Preceitos e admoestações dos sábios"
  },
  "pv24.23-34": {
    id: "pv24.23-34",
    referencia: "Pv 24.23-34",
    livro: "Provérbios",
    capitulo: 24,
    vIni: 23,
    vFim: 34,
    titulo: "Mais alguns provérbios dos sábios"
  },
  "pv25.1-28": {
    id: "pv25.1-28",
    referencia: "Pv 25.1-28",
    livro: "Provérbios",
    capitulo: 25,
    vIni: 1,
    vFim: 28,
    titulo: "Símiles e lições morais"
  },
  "pv28.1-28": {
    id: "pv28.1-28",
    referencia: "Pv 28.1-28",
    livro: "Provérbios",
    capitulo: 28,
    vIni: 1,
    vFim: 28,
    titulo: "Provérbios antitéticos"
  },
  "pv30.1-33": {
    id: "pv30.1-33",
    referencia: "Pv 30.1-33",
    livro: "Provérbios",
    capitulo: 30,
    vIni: 1,
    vFim: 33,
    titulo: "As palavras de Agur"
  },
  "pv31.1-9": {
    id: "pv31.1-9",
    referencia: "Pv 31.1-9",
    livro: "Provérbios",
    capitulo: 31,
    vIni: 1,
    vFim: 9,
    titulo: "Conselhos para o rei Lemuel"
  },
  "pv31.10-31": {
    id: "pv31.10-31",
    referencia: "Pv 31.10-31",
    livro: "Provérbios",
    capitulo: 31,
    vIni: 10,
    vFim: 31,
    titulo: "O louvor da mulher virtuosa"
  },
  "ec1.1-3": {
    id: "ec1.1-3",
    referencia: "Ec 1.1-3",
    livro: "Eclesiastes",
    capitulo: 1,
    vIni: 1,
    vFim: 3,
    titulo: "Tudo é vaidade"
  },
  "ec1.4-11": {
    id: "ec1.4-11",
    referencia: "Ec 1.4-11",
    livro: "Eclesiastes",
    capitulo: 1,
    vIni: 4,
    vFim: 11,
    titulo: "A eterna mesmice"
  },
  "ec1.12-18": {
    id: "ec1.12-18",
    referencia: "Ec 1.12-18",
    livro: "Eclesiastes",
    capitulo: 1,
    vIni: 12,
    vFim: 18,
    titulo: "A experiência do Pregador"
  },
  "ec2.1-11": {
    id: "ec2.1-11",
    referencia: "Ec 2.1-11",
    livro: "Eclesiastes",
    capitulo: 2,
    vIni: 1,
    vFim: 11,
    titulo: "A vaidade das possessões"
  },
  "ec2.12-17": {
    id: "ec2.12-17",
    referencia: "Ec 2.12-17",
    livro: "Eclesiastes",
    capitulo: 2,
    vIni: 12,
    vFim: 17,
    titulo: "A vaidade da sabedoria"
  },
  "ec2.18-26": {
    id: "ec2.18-26",
    referencia: "Ec 2.18-26",
    livro: "Eclesiastes",
    capitulo: 2,
    vIni: 18,
    vFim: 26,
    titulo: "A vaidade do trabalho"
  },
  "ec3.1-8": {
    id: "ec3.1-8",
    referencia: "Ec 3.1-8",
    livro: "Eclesiastes",
    capitulo: 3,
    vIni: 1,
    vFim: 8,
    titulo: "Tempo para tudo"
  },
  "ec3.9-15": {
    id: "ec3.9-15",
    referencia: "Ec 3.9-15",
    livro: "Eclesiastes",
    capitulo: 3,
    vIni: 9,
    vFim: 15,
    titulo: "O homem não conhece o seu tempo determinado"
  },
  "ec3.16-22": {
    id: "ec3.16-22",
    referencia: "Ec 3.16-22",
    livro: "Eclesiastes",
    capitulo: 3,
    vIni: 16,
    vFim: 22,
    titulo: "Semelhança aparente na morte entre homens e animais"
  },
  "ec4.1-16": {
    id: "ec4.1-16",
    referencia: "Ec 4.1-16",
    livro: "Eclesiastes",
    capitulo: 4,
    vIni: 1,
    vFim: 16,
    titulo: "As tribulações da vida"
  },
  "ec5.1-7": {
    id: "ec5.1-7",
    referencia: "Ec 5.1-7",
    livro: "Eclesiastes",
    capitulo: 5,
    vIni: 1,
    vFim: 7,
    titulo: "A loucura de votos precipitados"
  },
  "ec5.8-20": {
    id: "ec5.8-20",
    referencia: "Ec 5.8-20",
    livro: "Eclesiastes",
    capitulo: 5,
    vIni: 8,
    vFim: 20,
    titulo: "A vaidade das riquezas"
  },
  "ec7.1-14": {
    id: "ec7.1-14",
    referencia: "Ec 7.1-14",
    livro: "Eclesiastes",
    capitulo: 7,
    vIni: 1,
    vFim: 14,
    titulo: "Comparadas a sabedoria e a loucura"
  },
  "ec7.15-22": {
    id: "ec7.15-22",
    referencia: "Ec 7.15-22",
    livro: "Eclesiastes",
    capitulo: 7,
    vIni: 15,
    vFim: 22,
    titulo: "A moderação em tudo é boa"
  },
  "ec7.23-29": {
    id: "ec7.23-29",
    referencia: "Ec 7.23-29",
    livro: "Eclesiastes",
    capitulo: 7,
    vIni: 23,
    vFim: 29,
    titulo: "Avaliação da mulher enganosa"
  },
  "ec8.1-9": {
    id: "ec8.1-9",
    referencia: "Ec 8.1-9",
    livro: "Eclesiastes",
    capitulo: 8,
    vIni: 1,
    vFim: 9,
    titulo: "A submissão diante do rei"
  },
  "ec8.10-17": {
    id: "ec8.10-17",
    referencia: "Ec 8.10-17",
    livro: "Eclesiastes",
    capitulo: 8,
    vIni: 10,
    vFim: 17,
    titulo: "As desigualdades na vida"
  },
  "ec9.1-10": {
    id: "ec9.1-10",
    referencia: "Ec 9.1-10",
    livro: "Eclesiastes",
    capitulo: 9,
    vIni: 1,
    vFim: 10,
    titulo: "A sorte parece ser a mesma para todos"
  },
  "ec9.11-12": {
    id: "ec9.11-12",
    referencia: "Ec 9.11-12",
    livro: "Eclesiastes",
    capitulo: 9,
    vIni: 11,
    vFim: 12,
    titulo: "Trabalhos sem recompensa"
  },
  "ec9.13-18": {
    id: "ec9.13-18",
    referencia: "Ec 9.13-18",
    livro: "Eclesiastes",
    capitulo: 9,
    vIni: 13,
    vFim: 18,
    titulo: "Exemplo que ilustra esta verdade"
  },
  "ec10.1-20": {
    id: "ec10.1-20",
    referencia: "Ec 10.1-20",
    livro: "Eclesiastes",
    capitulo: 10,
    vIni: 1,
    vFim: 20,
    titulo: "A excelência da sabedoria"
  },
  "ec11.1-8": {
    id: "ec11.1-8",
    referencia: "Ec 11.1-8",
    livro: "Eclesiastes",
    capitulo: 11,
    vIni: 1,
    vFim: 8,
    titulo: "O procedimento prudente do sábio"
  },
  "ec11.9-10": {
    id: "ec11.9-10",
    referencia: "Ec 11.9-10",
    livro: "Eclesiastes",
    capitulo: 11,
    vIni: 9,
    vFim: 10,
    titulo: "A mocidade"
  },
  "ec12.1-8": {
    id: "ec12.1-8",
    referencia: "Ec 12.1-8",
    livro: "Eclesiastes",
    capitulo: 12,
    vIni: 1,
    vFim: 8,
    titulo: "A velhice"
  },
  "ec12.9-14": {
    id: "ec12.9-14",
    referencia: "Ec 12.9-14",
    livro: "Eclesiastes",
    capitulo: 12,
    vIni: 9,
    vFim: 14,
    titulo: "Conclusão"
  },
  "ct1.2-17": {
    id: "ct1.2-17",
    referencia: "Ct 1.2-17",
    livro: "Cântico",
    capitulo: 1,
    vIni: 2,
    vFim: 17,
    titulo: "Primeiro cântico"
  },
  "ct2.8-17": {
    id: "ct2.8-17",
    referencia: "Ct 2.8-17",
    livro: "Cântico",
    capitulo: 2,
    vIni: 8,
    vFim: 17,
    titulo: "Segundo cântico"
  },
  "ct3.6-11": {
    id: "ct3.6-11",
    referencia: "Ct 3.6-11",
    livro: "Cântico",
    capitulo: 3,
    vIni: 6,
    vFim: 11,
    titulo: "Terceiro cântico"
  },
  "ct5.2-16": {
    id: "ct5.2-16",
    referencia: "Ct 5.2-16",
    livro: "Cântico",
    capitulo: 5,
    vIni: 2,
    vFim: 16,
    titulo: "Quarto cântico"
  },
  "ct6.4-13": {
    id: "ct6.4-13",
    referencia: "Ct 6.4-13",
    livro: "Cântico",
    capitulo: 6,
    vIni: 4,
    vFim: 13,
    titulo: "Quinto cântico"
  },
  "ct8.5-14": {
    id: "ct8.5-14",
    referencia: "Ct 8.5-14",
    livro: "Cântico",
    capitulo: 8,
    vIni: 5,
    vFim: 14,
    titulo: "Sexto cântico"
  },
  "is1.1-9": {
    id: "is1.1-9",
    referencia: "Is 1.1-9",
    livro: "Isaías",
    capitulo: 1,
    vIni: 1,
    vFim: 9,
    titulo: "A nação pecaminosa"
  },
  "is1.10-17": {
    id: "is1.10-17",
    referencia: "Is 1.10-17",
    livro: "Isaías",
    capitulo: 1,
    vIni: 10,
    vFim: 17,
    titulo: "Condenado o culto hipócrita"
  },
  "is1.18-20": {
    id: "is1.18-20",
    referencia: "Is 1.18-20",
    livro: "Isaías",
    capitulo: 1,
    vIni: 18,
    vFim: 20,
    titulo: "O convite da graça"
  },
  "is1.21-31": {
    id: "is1.21-31",
    referencia: "Is 1.21-31",
    livro: "Isaías",
    capitulo: 1,
    vIni: 21,
    vFim: 31,
    titulo: "O julgamento e a redenção de Jerusalém"
  },
  "is2.1-5": {
    id: "is2.1-5",
    referencia: "Is 2.1-5",
    livro: "Isaías",
    capitulo: 2,
    vIni: 1,
    vFim: 5,
    titulo: "A glória futura do Israel espiritual"
  },
  "is2.6-22": {
    id: "is2.6-22",
    referencia: "Is 2.6-22",
    livro: "Isaías",
    capitulo: 2,
    vIni: 6,
    vFim: 22,
    titulo: "Abatido o orgulho dos homens"
  },
  "is3.1-15": {
    id: "is3.1-15",
    referencia: "Is 3.1-15",
    livro: "Isaías",
    capitulo: 3,
    vIni: 1,
    vFim: 15,
    titulo: "Julgamento de Judá e de Jerusalém"
  },
  "is3.16-26": {
    id: "is3.16-26",
    referencia: "Is 3.16-26",
    livro: "Isaías",
    capitulo: 3,
    vIni: 16,
    vFim: 26,
    titulo: "Julgamento das filhas de Sião"
  },
  "is4.2-6": {
    id: "is4.2-6",
    referencia: "Is 4.2-6",
    livro: "Isaías",
    capitulo: 4,
    vIni: 2,
    vFim: 6,
    titulo: "O reinado do Renovo do Senhor"
  },
  "is5.1-7": {
    id: "is5.1-7",
    referencia: "Is 5.1-7",
    livro: "Isaías",
    capitulo: 5,
    vIni: 1,
    vFim: 7,
    titulo: "A parábola da vinha má"
  },
  "is5.8-30": {
    id: "is5.8-30",
    referencia: "Is 5.8-30",
    livro: "Isaías",
    capitulo: 5,
    vIni: 8,
    vFim: 30,
    titulo: "Ais contra os perversos"
  },
  "is6.1-13": {
    id: "is6.1-13",
    referencia: "Is 6.1-13",
    livro: "Isaías",
    capitulo: 6,
    vIni: 1,
    vFim: 13,
    titulo: "A visão de Isaías e o seu chamamento"
  },
  "is7.1-9": {
    id: "is7.1-9",
    referencia: "Is 7.1-9",
    livro: "Isaías",
    capitulo: 7,
    vIni: 1,
    vFim: 9,
    titulo: "Profecia contra Israel e a Síria"
  },
  "is7.10-16": {
    id: "is7.10-16",
    referencia: "Is 7.10-16",
    livro: "Isaías",
    capitulo: 7,
    vIni: 10,
    vFim: 16,
    titulo: "A promessa a respeito de Emanuel"
  },
  "is7.17-25": {
    id: "is7.17-25",
    referencia: "Is 7.17-25",
    livro: "Isaías",
    capitulo: 7,
    vIni: 17,
    vFim: 25,
    titulo: "Males sobre Jerusalém"
  },
  "is8.1-8": {
    id: "is8.1-8",
    referencia: "Is 8.1-8",
    livro: "Isaías",
    capitulo: 8,
    vIni: 1,
    vFim: 8,
    titulo: "A invasão dos assírios"
  },
  "is8.9-22": {
    id: "is8.9-22",
    referencia: "Is 8.9-22",
    livro: "Isaías",
    capitulo: 8,
    vIni: 9,
    vFim: 22,
    titulo: "O Senhor é a nossa esperança"
  },
  "is9.1-7": {
    id: "is9.1-7",
    referencia: "Is 9.1-7",
    livro: "Isaías",
    capitulo: 9,
    vIni: 1,
    vFim: 7,
    titulo: "O nascimento e o reino do Príncipe da Paz"
  },
  "is9.8-21": {
    id: "is9.8-21",
    referencia: "Is 9.8-21",
    livro: "Isaías",
    capitulo: 9,
    vIni: 8,
    vFim: 21,
    titulo: "Profecia contra o reino de Israel"
  },
  "is10.5-34": {
    id: "is10.5-34",
    referencia: "Is 10.5-34",
    livro: "Isaías",
    capitulo: 10,
    vIni: 5,
    vFim: 34,
    titulo: "Profecia contra a Assíria"
  },
  "is11.1-10": {
    id: "is11.1-10",
    referencia: "Is 11.1-10",
    livro: "Isaías",
    capitulo: 11,
    vIni: 1,
    vFim: 10,
    titulo: "O reinado pacífico do rebento de Jessé"
  },
  "is11.11-16": {
    id: "is11.11-16",
    referencia: "Is 11.11-16",
    livro: "Isaías",
    capitulo: 11,
    vIni: 11,
    vFim: 16,
    titulo: "A nova glória de Israel"
  },
  "is12.1-6": {
    id: "is12.1-6",
    referencia: "Is 12.1-6",
    livro: "Isaías",
    capitulo: 12,
    vIni: 1,
    vFim: 6,
    titulo: "Canto de louvor pela restauração de Israel"
  },
  "is13.1-22": {
    id: "is13.1-22",
    referencia: "Is 13.1-22",
    livro: "Isaías",
    capitulo: 13,
    vIni: 1,
    vFim: 22,
    titulo: "Profecia contra a Babilônia"
  },
  "is14.1-23": {
    id: "is14.1-23",
    referencia: "Is 14.1-23",
    livro: "Isaías",
    capitulo: 14,
    vIni: 1,
    vFim: 23,
    titulo: "Hino triunfal sobre a queda da Babilônia"
  },
  "is14.24-27": {
    id: "is14.24-27",
    referencia: "Is 14.24-27",
    livro: "Isaías",
    capitulo: 14,
    vIni: 24,
    vFim: 27,
    titulo: "Profecia contra os assírios"
  },
  "is14.28-32": {
    id: "is14.28-32",
    referencia: "Is 14.28-32",
    livro: "Isaías",
    capitulo: 14,
    vIni: 28,
    vFim: 32,
    titulo: "Profecia contra os filisteus"
  },
  "is15.1-9": {
    id: "is15.1-9",
    referencia: "Is 15.1-9",
    livro: "Isaías",
    capitulo: 15,
    vIni: 1,
    vFim: 9,
    titulo: "Profecia contra Moabe"
  },
  "is17.1-14": {
    id: "is17.1-14",
    referencia: "Is 17.1-14",
    livro: "Isaías",
    capitulo: 17,
    vIni: 1,
    vFim: 14,
    titulo: "Profecia contra Damasco e Efraim"
  },
  "is18.1-7": {
    id: "is18.1-7",
    referencia: "Is 18.1-7",
    livro: "Isaías",
    capitulo: 18,
    vIni: 1,
    vFim: 7,
    titulo: "Profecia contra a Etiópia"
  },
  "is19.1-25": {
    id: "is19.1-25",
    referencia: "Is 19.1-25",
    livro: "Isaías",
    capitulo: 19,
    vIni: 1,
    vFim: 25,
    titulo: "Profecia contra o Egito"
  },
  "is20.1-6": {
    id: "is20.1-6",
    referencia: "Is 20.1-6",
    livro: "Isaías",
    capitulo: 20,
    vIni: 1,
    vFim: 6,
    titulo: "Profecia do cativeiro dos egípcios e dos etíopes"
  },
  "is21.1-10": {
    id: "is21.1-10",
    referencia: "Is 21.1-10",
    livro: "Isaías",
    capitulo: 21,
    vIni: 1,
    vFim: 10,
    titulo: "Profecia contra a Babilônia"
  },
  "is21.11-12": {
    id: "is21.11-12",
    referencia: "Is 21.11-12",
    livro: "Isaías",
    capitulo: 21,
    vIni: 11,
    vFim: 12,
    titulo: "Profecia contra Dumá"
  },
  "is21.13-17": {
    id: "is21.13-17",
    referencia: "Is 21.13-17",
    livro: "Isaías",
    capitulo: 21,
    vIni: 13,
    vFim: 17,
    titulo: "Profecia contra a Arábia"
  },
  "is22.1-14": {
    id: "is22.1-14",
    referencia: "Is 22.1-14",
    livro: "Isaías",
    capitulo: 22,
    vIni: 1,
    vFim: 14,
    titulo: "Profecia contra Jerusalém"
  },
  "is22.15-25": {
    id: "is22.15-25",
    referencia: "Is 22.15-25",
    livro: "Isaías",
    capitulo: 22,
    vIni: 15,
    vFim: 25,
    titulo: "Sebna é degradado. Eliaquim é exaltado"
  },
  "is23.1-18": {
    id: "is23.1-18",
    referencia: "Is 23.1-18",
    livro: "Isaías",
    capitulo: 23,
    vIni: 1,
    vFim: 18,
    titulo: "Profecia contra Tiro"
  },
  "is24.14-16": {
    id: "is24.14-16",
    referencia: "Is 24.14-16",
    livro: "Isaías",
    capitulo: 24,
    vIni: 14,
    vFim: 16,
    titulo: "A alegria dos justos"
  },
  "is24.17-23": {
    id: "is24.17-23",
    referencia: "Is 24.17-23",
    livro: "Isaías",
    capitulo: 24,
    vIni: 17,
    vFim: 23,
    titulo: "A ruína dos transgressores"
  },
  "is25.1-12": {
    id: "is25.1-12",
    referencia: "Is 25.1-12",
    livro: "Isaías",
    capitulo: 25,
    vIni: 1,
    vFim: 12,
    titulo: "Cântico de louvor pela misericórdia divina"
  },
  "is26.1-21": {
    id: "is26.1-21",
    referencia: "Is 26.1-21",
    livro: "Isaías",
    capitulo: 26,
    vIni: 1,
    vFim: 21,
    titulo: "Cântico de confiança na proteção divina"
  },
  "is27.1-13": {
    id: "is27.1-13",
    referencia: "Is 27.1-13",
    livro: "Isaías",
    capitulo: 27,
    vIni: 1,
    vFim: 13,
    titulo: "Deus ama ao seu povo e o salva"
  },
  "is28.1-6": {
    id: "is28.1-6",
    referencia: "Is 28.1-6",
    livro: "Isaías",
    capitulo: 28,
    vIni: 1,
    vFim: 6,
    titulo: "Será castigada a impenitência de Efraim"
  },
  "is28.7-22": {
    id: "is28.7-22",
    referencia: "Is 28.7-22",
    livro: "Isaías",
    capitulo: 28,
    vIni: 7,
    vFim: 22,
    titulo: "Contra os habitantes de Jerusalém"
  },
  "is28.23-29": {
    id: "is28.23-29",
    referencia: "Is 28.23-29",
    livro: "Isaías",
    capitulo: 28,
    vIni: 23,
    vFim: 29,
    titulo: "Deus é grande em sabedoria"
  },
  "is29.1-8": {
    id: "is29.1-8",
    referencia: "Is 29.1-8",
    livro: "Isaías",
    capitulo: 29,
    vIni: 1,
    vFim: 8,
    titulo: "Jerusalém e seus inimigos"
  },
  "is29.9-16": {
    id: "is29.9-16",
    referencia: "Is 29.9-16",
    livro: "Isaías",
    capitulo: 29,
    vIni: 9,
    vFim: 16,
    titulo: "A cegueira espiritual e a hipocrisia do povo"
  },
  "is29.17-24": {
    id: "is29.17-24",
    referencia: "Is 29.17-24",
    livro: "Isaías",
    capitulo: 29,
    vIni: 17,
    vFim: 24,
    titulo: "A redenção de Israel"
  },
  "is30.1-17": {
    id: "is30.1-17",
    referencia: "Is 30.1-17",
    livro: "Isaías",
    capitulo: 30,
    vIni: 1,
    vFim: 17,
    titulo: "Contra a aliança com o Egito"
  },
  "is30.18-26": {
    id: "is30.18-26",
    referencia: "Is 30.18-26",
    livro: "Isaías",
    capitulo: 30,
    vIni: 18,
    vFim: 26,
    titulo: "Promessas consoladoras para Sião"
  },
  "is30.27-33": {
    id: "is30.27-33",
    referencia: "Is 30.27-33",
    livro: "Isaías",
    capitulo: 30,
    vIni: 27,
    vFim: 33,
    titulo: "O julgamento da Assíria"
  },
  "is31.1-9": {
    id: "is31.1-9",
    referencia: "Is 31.1-9",
    livro: "Isaías",
    capitulo: 31,
    vIni: 1,
    vFim: 9,
    titulo: "O Egito é homem e não deus"
  },
  "is32.1-8": {
    id: "is32.1-8",
    referencia: "Is 32.1-8",
    livro: "Isaías",
    capitulo: 32,
    vIni: 1,
    vFim: 8,
    titulo: "O reinado do justo Rei"
  },
  "is32.9-20": {
    id: "is32.9-20",
    referencia: "Is 32.9-20",
    livro: "Isaías",
    capitulo: 32,
    vIni: 9,
    vFim: 20,
    titulo: "Advertências contra as mulheres de Jerusalém"
  },
  "is33.1-24": {
    id: "is33.1-24",
    referencia: "Is 33.1-24",
    livro: "Isaías",
    capitulo: 33,
    vIni: 1,
    vFim: 24,
    titulo: "A aflição e o livramento de Jerusalém"
  },
  "is34.1-17": {
    id: "is34.1-17",
    referencia: "Is 34.1-17",
    livro: "Isaías",
    capitulo: 34,
    vIni: 1,
    vFim: 17,
    titulo: "A indignação de Deus contra as nações"
  },
  "is35.1-10": {
    id: "is35.1-10",
    referencia: "Is 35.1-10",
    livro: "Isaías",
    capitulo: 35,
    vIni: 1,
    vFim: 10,
    titulo: "A felicidade na Sião futura"
  },
  "is36.2-3": {
    id: "is36.2-3",
    referencia: "Is 36.2-3",
    livro: "Isaías",
    capitulo: 36,
    vIni: 2,
    vFim: 3,
    titulo: "Senaqueribe invade Judá"
  },
  "is36.2-22": {
    id: "is36.2-22",
    referencia: "Is 36.2-22",
    livro: "Isaías",
    capitulo: 36,
    vIni: 2,
    vFim: 22,
    titulo: "Rabsaqué afronta a Ezequias e ao Senhor"
  },
  "is37.2-7": {
    id: "is37.2-7",
    referencia: "Is 37.2-7",
    livro: "Isaías",
    capitulo: 37,
    vIni: 2,
    vFim: 7,
    titulo: "Ezequias consulta a Isaías"
  },
  "is37.2-13": {
    id: "is37.2-13",
    referencia: "Is 37.2-13",
    livro: "Isaías",
    capitulo: 37,
    vIni: 2,
    vFim: 13,
    titulo: "A carta do rei da Assíria"
  },
  "is37.2-20": {
    id: "is37.2-20",
    referencia: "Is 37.2-20",
    livro: "Isaías",
    capitulo: 37,
    vIni: 2,
    vFim: 20,
    titulo: "A oração de Ezequias"
  },
  "is37.2-35": {
    id: "is37.2-35",
    referencia: "Is 37.2-35",
    livro: "Isaías",
    capitulo: 37,
    vIni: 2,
    vFim: 35,
    titulo: "O profeta conforta a Ezequias"
  },
  "is37.2-38": {
    id: "is37.2-38",
    referencia: "Is 37.2-38",
    livro: "Isaías",
    capitulo: 37,
    vIni: 2,
    vFim: 38,
    titulo: "A destruição do exército dos assírios"
  },
  "is38.2-8": {
    id: "is38.2-8",
    referencia: "Is 38.2-8",
    livro: "Isaías",
    capitulo: 38,
    vIni: 2,
    vFim: 8,
    titulo: "A doença de Ezequias e a sua cura maravilhosa"
  },
  "is38.9-22": {
    id: "is38.9-22",
    referencia: "Is 38.9-22",
    livro: "Isaías",
    capitulo: 38,
    vIni: 9,
    vFim: 22,
    titulo: "Cântico de Ezequias"
  },
  "is39.2-8": {
    id: "is39.2-8",
    referencia: "Is 39.2-8",
    livro: "Isaías",
    capitulo: 39,
    vIni: 2,
    vFim: 8,
    titulo: "A embaixada da Babilônia"
  },
  "is40.1-11": {
    id: "is40.1-11",
    referencia: "Is 40.1-11",
    livro: "Isaías",
    capitulo: 40,
    vIni: 1,
    vFim: 11,
    titulo: "O Senhor vem"
  },
  "is40.12-31": {
    id: "is40.12-31",
    referencia: "Is 40.12-31",
    livro: "Isaías",
    capitulo: 40,
    vIni: 12,
    vFim: 31,
    titulo: "A majestade do Senhor"
  },
  "is41.1-20": {
    id: "is41.1-20",
    referencia: "Is 41.1-20",
    livro: "Isaías",
    capitulo: 41,
    vIni: 1,
    vFim: 20,
    titulo: "Deus suscita o Redentor"
  },
  "is41.21-29": {
    id: "is41.21-29",
    referencia: "Is 41.21-29",
    livro: "Isaías",
    capitulo: 41,
    vIni: 21,
    vFim: 29,
    titulo: "O Senhor prova a sua grandeza"
  },
  "is42.1-9": {
    id: "is42.1-9",
    referencia: "Is 42.1-9",
    livro: "Isaías",
    capitulo: 42,
    vIni: 1,
    vFim: 9,
    titulo: "O Servo do Senhor"
  },
  "is42.10-17": {
    id: "is42.10-17",
    referencia: "Is 42.10-17",
    livro: "Isaías",
    capitulo: 42,
    vIni: 10,
    vFim: 17,
    titulo: "Cântico de louvor pela salvação do povo"
  },
  "is42.19-25": {
    id: "is42.19-25",
    referencia: "Is 42.19-25",
    livro: "Isaías",
    capitulo: 42,
    vIni: 19,
    vFim: 25,
    titulo: "Lamento sobre a cegueira de Israel"
  },
  "is43.1-13": {
    id: "is43.1-13",
    referencia: "Is 43.1-13",
    livro: "Isaías",
    capitulo: 43,
    vIni: 1,
    vFim: 13,
    titulo: "Só Deus resgata Israel"
  },
  "is43.14-21": {
    id: "is43.14-21",
    referencia: "Is 43.14-21",
    livro: "Isaías",
    capitulo: 43,
    vIni: 14,
    vFim: 21,
    titulo: "Libertação do jugo da Babilônia"
  },
  "is43.22-28": {
    id: "is43.22-28",
    referencia: "Is 43.22-28",
    livro: "Isaías",
    capitulo: 43,
    vIni: 22,
    vFim: 28,
    titulo: "A misericórdia do Senhor"
  },
  "is44.1-8": {
    id: "is44.1-8",
    referencia: "Is 44.1-8",
    livro: "Isaías",
    capitulo: 44,
    vIni: 1,
    vFim: 8,
    titulo: "O Senhor é o único Deus"
  },
  "is44.9-20": {
    id: "is44.9-20",
    referencia: "Is 44.9-20",
    livro: "Isaías",
    capitulo: 44,
    vIni: 9,
    vFim: 20,
    titulo: "A loucura da idolatria"
  },
  "is44.21-28": {
    id: "is44.21-28",
    referencia: "Is 44.21-28",
    livro: "Isaías",
    capitulo: 44,
    vIni: 21,
    vFim: 28,
    titulo: "A promessa de livramento"
  },
  "is45.1-7": {
    id: "is45.1-7",
    referencia: "Is 45.1-7",
    livro: "Isaías",
    capitulo: 45,
    vIni: 1,
    vFim: 7,
    titulo: "Ciro, o libertador de Israel"
  },
  "is45.8-18": {
    id: "is45.8-18",
    referencia: "Is 45.8-18",
    livro: "Isaías",
    capitulo: 45,
    vIni: 8,
    vFim: 18,
    titulo: "O Senhor é o Criador"
  },
  "is45.19-25": {
    id: "is45.19-25",
    referencia: "Is 45.19-25",
    livro: "Isaías",
    capitulo: 45,
    vIni: 19,
    vFim: 25,
    titulo: "O Senhor e os ídolos"
  },
  "is46.1-13": {
    id: "is46.1-13",
    referencia: "Is 46.1-13",
    livro: "Isaías",
    capitulo: 46,
    vIni: 1,
    vFim: 13,
    titulo: "A queda dos ídolos da Babilônia"
  },
  "is47.1-15": {
    id: "is47.1-15",
    referencia: "Is 47.1-15",
    livro: "Isaías",
    capitulo: 47,
    vIni: 1,
    vFim: 15,
    titulo: "A queda de Babilônia"
  },
  "is48.1-22": {
    id: "is48.1-22",
    referencia: "Is 48.1-22",
    livro: "Isaías",
    capitulo: 48,
    vIni: 1,
    vFim: 22,
    titulo: "Repreendida a infidelidade de Israel"
  },
  "is49.1-7": {
    id: "is49.1-7",
    referencia: "Is 49.1-7",
    livro: "Isaías",
    capitulo: 49,
    vIni: 1,
    vFim: 7,
    titulo: "O Servo do Senhor é a luz dos gentios"
  },
  "is49.8-26": {
    id: "is49.8-26",
    referencia: "Is 49.8-26",
    livro: "Isaías",
    capitulo: 49,
    vIni: 8,
    vFim: 26,
    titulo: "Prometida a restauração de Israel"
  },
  "is50.1-11": {
    id: "is50.1-11",
    referencia: "Is 50.1-11",
    livro: "Isaías",
    capitulo: 50,
    vIni: 1,
    vFim: 11,
    titulo: "O Servo do Senhor, ultrajado mas fiel"
  },
  "is51.1-23": {
    id: "is51.1-23",
    referencia: "Is 51.1-23",
    livro: "Isaías",
    capitulo: 51,
    vIni: 1,
    vFim: 23,
    titulo: "Palavra de conforto para Sião"
  },
  "is52.13-15": {
    id: "is52.13-15",
    referencia: "Is 52.13-15",
    livro: "Isaías",
    capitulo: 52,
    vIni: 13,
    vFim: 15,
    titulo: "O sofrimento vicário do Servo do Senhor"
  },
  "is54.1-17": {
    id: "is54.1-17",
    referencia: "Is 54.1-17",
    livro: "Isaías",
    capitulo: 54,
    vIni: 1,
    vFim: 17,
    titulo: "O futuro glorioso de Sião"
  },
  "is55.1-13": {
    id: "is55.1-13",
    referencia: "Is 55.1-13",
    livro: "Isaías",
    capitulo: 55,
    vIni: 1,
    vFim: 13,
    titulo: "Graça oferecida gratuitamente a todos"
  },
  "is56.1-8": {
    id: "is56.1-8",
    referencia: "Is 56.1-8",
    livro: "Isaías",
    capitulo: 56,
    vIni: 1,
    vFim: 8,
    titulo: "A vocação dos gentios"
  },
  "is56.9-12": {
    id: "is56.9-12",
    referencia: "Is 56.9-12",
    livro: "Isaías",
    capitulo: 56,
    vIni: 9,
    vFim: 12,
    titulo: "Ai dos guias cegos de Israel!"
  },
  "is57.1-13": {
    id: "is57.1-13",
    referencia: "Is 57.1-13",
    livro: "Isaías",
    capitulo: 57,
    vIni: 1,
    vFim: 13,
    titulo: "Condenada a idolatria de Israel"
  },
  "is57.14-21": {
    id: "is57.14-21",
    referencia: "Is 57.14-21",
    livro: "Isaías",
    capitulo: 57,
    vIni: 14,
    vFim: 21,
    titulo: "Mensagem de paz para os arrependidos"
  },
  "is58.1-14": {
    id: "is58.1-14",
    referencia: "Is 58.1-14",
    livro: "Isaías",
    capitulo: 58,
    vIni: 1,
    vFim: 14,
    titulo: "Observância devida do jejum"
  },
  "is59.1-21": {
    id: "is59.1-21",
    referencia: "Is 59.1-21",
    livro: "Isaías",
    capitulo: 59,
    vIni: 1,
    vFim: 21,
    titulo: "Confissão da maldade nacional"
  },
  "is60.1-22": {
    id: "is60.1-22",
    referencia: "Is 60.1-22",
    livro: "Isaías",
    capitulo: 60,
    vIni: 1,
    vFim: 22,
    titulo: "A glória da nova Jerusalém"
  },
  "is61.1-11": {
    id: "is61.1-11",
    referencia: "Is 61.1-11",
    livro: "Isaías",
    capitulo: 61,
    vIni: 1,
    vFim: 11,
    titulo: "As boas-novas da salvação"
  },
  "is62.1-12": {
    id: "is62.1-12",
    referencia: "Is 62.1-12",
    livro: "Isaías",
    capitulo: 62,
    vIni: 1,
    vFim: 12,
    titulo: "Jerusalém, a noiva do Senhor"
  },
  "is63.1-6": {
    id: "is63.1-6",
    referencia: "Is 63.1-6",
    livro: "Isaías",
    capitulo: 63,
    vIni: 1,
    vFim: 6,
    titulo: "Deus vinga o seu povo"
  },
  "is63.7-19": {
    id: "is63.7-19",
    referencia: "Is 63.7-19",
    livro: "Isaías",
    capitulo: 63,
    vIni: 7,
    vFim: 19,
    titulo: "A última oração do profeta"
  },
  "is65.1-7": {
    id: "is65.1-7",
    referencia: "Is 65.1-7",
    livro: "Isaías",
    capitulo: 65,
    vIni: 1,
    vFim: 7,
    titulo: "A resposta de Deus: rejeitados os rebeldes"
  },
  "is65.8-16": {
    id: "is65.8-16",
    referencia: "Is 65.8-16",
    livro: "Isaías",
    capitulo: 65,
    vIni: 8,
    vFim: 16,
    titulo: "A resposta de Deus: salvo o restante fiel"
  },
  "is65.17-25": {
    id: "is65.17-25",
    referencia: "Is 65.17-25",
    livro: "Isaías",
    capitulo: 65,
    vIni: 17,
    vFim: 25,
    titulo: "Novos céus e nova terra"
  },
  "is66.1-9": {
    id: "is66.1-9",
    referencia: "Is 66.1-9",
    livro: "Isaías",
    capitulo: 66,
    vIni: 1,
    vFim: 9,
    titulo: "Excluídos da nova Jerusalém os que praticam falsa religião"
  },
  "is66.10-24": {
    id: "is66.10-24",
    referencia: "Is 66.10-24",
    livro: "Isaías",
    capitulo: 66,
    vIni: 10,
    vFim: 24,
    titulo: "A felicidade eterna de Sião"
  },
  "jr1.1-10": {
    id: "jr1.1-10",
    referencia: "Jr 1.1-10",
    livro: "Jeremias",
    capitulo: 1,
    vIni: 1,
    vFim: 10,
    titulo: "A vocação de Jeremias"
  },
  "jr1.11-12": {
    id: "jr1.11-12",
    referencia: "Jr 1.11-12",
    livro: "Jeremias",
    capitulo: 1,
    vIni: 11,
    vFim: 12,
    titulo: "A visão da vara de amendoeira"
  },
  "jr1.13-19": {
    id: "jr1.13-19",
    referencia: "Jr 1.13-19",
    livro: "Jeremias",
    capitulo: 1,
    vIni: 13,
    vFim: 19,
    titulo: "A visão da panela ao fogo"
  },
  "jr2.1-8": {
    id: "jr2.1-8",
    referencia: "Jr 2.1-8",
    livro: "Jeremias",
    capitulo: 2,
    vIni: 1,
    vFim: 8,
    titulo: "O amor de Deus e a rebeldia do povo"
  },
  "jr2.9-19": {
    id: "jr2.9-19",
    referencia: "Jr 2.9-19",
    livro: "Jeremias",
    capitulo: 2,
    vIni: 9,
    vFim: 19,
    titulo: "Perfídia sem exemplo"
  },
  "jr2.20-37": {
    id: "jr2.20-37",
    referencia: "Jr 2.20-37",
    livro: "Jeremias",
    capitulo: 2,
    vIni: 20,
    vFim: 37,
    titulo: "Israel adorou a Baal"
  },
  "jr3.1-13": {
    id: "jr3.1-13",
    referencia: "Jr 3.1-13",
    livro: "Jeremias",
    capitulo: 3,
    vIni: 1,
    vFim: 13,
    titulo: "A clemência de Deus, apesar da infidelidade do povo"
  },
  "jr3.14-25": {
    id: "jr3.14-25",
    referencia: "Jr 3.14-25",
    livro: "Jeremias",
    capitulo: 3,
    vIni: 14,
    vFim: 25,
    titulo: "O povo exortado a arrepender-se"
  },
  "jr4.5-31": {
    id: "jr4.5-31",
    referencia: "Jr 4.5-31",
    livro: "Jeremias",
    capitulo: 4,
    vIni: 5,
    vFim: 31,
    titulo: "Vem do Norte o mal"
  },
  "jr5.1-31": {
    id: "jr5.1-31",
    referencia: "Jr 5.1-31",
    livro: "Jeremias",
    capitulo: 5,
    vIni: 1,
    vFim: 31,
    titulo: "Os pecados de Jerusalém e de Judá"
  },
  "jr6.1-8": {
    id: "jr6.1-8",
    referencia: "Jr 6.1-8",
    livro: "Jeremias",
    capitulo: 6,
    vIni: 1,
    vFim: 8,
    titulo: "Jerusalém será sitiada"
  },
  "jr6.9-21": {
    id: "jr6.9-21",
    referencia: "Jr 6.9-21",
    livro: "Jeremias",
    capitulo: 6,
    vIni: 9,
    vFim: 21,
    titulo: "As iniquidades de Jerusalém são a causa de sua queda"
  },
  "jr6.22-26": {
    id: "jr6.22-26",
    referencia: "Jr 6.22-26",
    livro: "Jeremias",
    capitulo: 6,
    vIni: 22,
    vFim: 26,
    titulo: "O inimigo do Norte"
  },
  "jr6.27-30": {
    id: "jr6.27-30",
    referencia: "Jr 6.27-30",
    livro: "Jeremias",
    capitulo: 6,
    vIni: 27,
    vFim: 30,
    titulo: "O trabalho inútil de Jeremias"
  },
  "jr7.1-15": {
    id: "jr7.1-15",
    referencia: "Jr 7.1-15",
    livro: "Jeremias",
    capitulo: 7,
    vIni: 1,
    vFim: 15,
    titulo: "O templo não protege a nação iníqua"
  },
  "jr7.16-20": {
    id: "jr7.16-20",
    referencia: "Jr 7.16-20",
    livro: "Jeremias",
    capitulo: 7,
    vIni: 16,
    vFim: 20,
    titulo: "A intercessão do profeta não salvará o povo rebelde"
  },
  "jr7.21-28": {
    id: "jr7.21-28",
    referencia: "Jr 7.21-28",
    livro: "Jeremias",
    capitulo: 7,
    vIni: 21,
    vFim: 28,
    titulo: "A mera multiplicação dos sacrifícios é debalde"
  },
  "jr7.29-34": {
    id: "jr7.29-34",
    referencia: "Jr 7.29-34",
    livro: "Jeremias",
    capitulo: 7,
    vIni: 29,
    vFim: 34,
    titulo: "Judá rejeitado por Deus"
  },
  "jr8.4-17": {
    id: "jr8.4-17",
    referencia: "Jr 8.4-17",
    livro: "Jeremias",
    capitulo: 8,
    vIni: 4,
    vFim: 17,
    titulo: "O castigo é inevitável"
  },
  "jr8.18-22": {
    id: "jr8.18-22",
    referencia: "Jr 8.18-22",
    livro: "Jeremias",
    capitulo: 8,
    vIni: 18,
    vFim: 22,
    titulo: "A dor do profeta por causa da ruína do povo"
  },
  "jr9.7-22": {
    id: "jr9.7-22",
    referencia: "Jr 9.7-22",
    livro: "Jeremias",
    capitulo: 9,
    vIni: 7,
    vFim: 22,
    titulo: "Ameaças de ruína e exílio"
  },
  "jr9.23-26": {
    id: "jr9.23-26",
    referencia: "Jr 9.23-26",
    livro: "Jeremias",
    capitulo: 9,
    vIni: 23,
    vFim: 26,
    titulo: "Conhecer a Deus constitui a glória do homem"
  },
  "jr10.1-16": {
    id: "jr10.1-16",
    referencia: "Jr 10.1-16",
    livro: "Jeremias",
    capitulo: 10,
    vIni: 1,
    vFim: 16,
    titulo: "Contraste entre o Senhor e os ídolos"
  },
  "jr10.17-25": {
    id: "jr10.17-25",
    referencia: "Jr 10.17-25",
    livro: "Jeremias",
    capitulo: 10,
    vIni: 17,
    vFim: 25,
    titulo: "Lamento sobre a desolação de Judá"
  },
  "jr11.1-17": {
    id: "jr11.1-17",
    referencia: "Jr 11.1-17",
    livro: "Jeremias",
    capitulo: 11,
    vIni: 1,
    vFim: 17,
    titulo: "A aliança é violada"
  },
  "jr11.18-23": {
    id: "jr11.18-23",
    referencia: "Jr 11.18-23",
    livro: "Jeremias",
    capitulo: 11,
    vIni: 18,
    vFim: 23,
    titulo: "Conspiração contra Jeremias"
  },
  "jr12.1-4": {
    id: "jr12.1-4",
    referencia: "Jr 12.1-4",
    livro: "Jeremias",
    capitulo: 12,
    vIni: 1,
    vFim: 4,
    titulo: "A queixa de Jeremias"
  },
  "jr12.5-6": {
    id: "jr12.5-6",
    referencia: "Jr 12.5-6",
    livro: "Jeremias",
    capitulo: 12,
    vIni: 5,
    vFim: 6,
    titulo: "A resposta de Deus"
  },
  "jr12.7-13": {
    id: "jr12.7-13",
    referencia: "Jr 12.7-13",
    livro: "Jeremias",
    capitulo: 12,
    vIni: 7,
    vFim: 13,
    titulo: "Deus castiga os devastadores do país"
  },
  "jr12.14-17": {
    id: "jr12.14-17",
    referencia: "Jr 12.14-17",
    livro: "Jeremias",
    capitulo: 12,
    vIni: 14,
    vFim: 17,
    titulo: "As finalidades do castigo de Deus"
  },
  "jr13.1-11": {
    id: "jr13.1-11",
    referencia: "Jr 13.1-11",
    livro: "Jeremias",
    capitulo: 13,
    vIni: 1,
    vFim: 11,
    titulo: "O cinto de linho"
  },
  "jr13.12-14": {
    id: "jr13.12-14",
    referencia: "Jr 13.12-14",
    livro: "Jeremias",
    capitulo: 13,
    vIni: 12,
    vFim: 14,
    titulo: "O jarro quebrado"
  },
  "jr13.15-27": {
    id: "jr13.15-27",
    referencia: "Jr 13.15-27",
    livro: "Jeremias",
    capitulo: 13,
    vIni: 15,
    vFim: 27,
    titulo: "Apelo e ameaças finais"
  },
  "jr14.1-6": {
    id: "jr14.1-6",
    referencia: "Jr 14.1-6",
    livro: "Jeremias",
    capitulo: 14,
    vIni: 1,
    vFim: 6,
    titulo: "Grande seca em Judá"
  },
  "jr14.7-12": {
    id: "jr14.7-12",
    referencia: "Jr 14.7-12",
    livro: "Jeremias",
    capitulo: 14,
    vIni: 7,
    vFim: 12,
    titulo: "Rejeitada a primeira intercessão de Jeremias"
  },
  "jr14.13-18": {
    id: "jr14.13-18",
    referencia: "Jr 14.13-18",
    livro: "Jeremias",
    capitulo: 14,
    vIni: 13,
    vFim: 18,
    titulo: "Rejeitada a segunda intercessão de Jeremias"
  },
  "jr14.19-22": {
    id: "jr14.19-22",
    referencia: "Jr 14.19-22",
    livro: "Jeremias",
    capitulo: 14,
    vIni: 19,
    vFim: 22,
    titulo: "Rejeitada, em absoluto, a terceira intercessão de Jeremias"
  },
  "jr15.10-21": {
    id: "jr15.10-21",
    referencia: "Jr 15.10-21",
    livro: "Jeremias",
    capitulo: 15,
    vIni: 10,
    vFim: 21,
    titulo: "O Senhor conforta ao seu profeta"
  },
  "jr16.1-21": {
    id: "jr16.1-21",
    referencia: "Jr 16.1-21",
    livro: "Jeremias",
    capitulo: 16,
    vIni: 1,
    vFim: 21,
    titulo: "A vida solitária do profeta, figura do povo"
  },
  "jr17.1-11": {
    id: "jr17.1-11",
    referencia: "Jr 17.1-11",
    livro: "Jeremias",
    capitulo: 17,
    vIni: 1,
    vFim: 11,
    titulo: "O pecado engana e destrói"
  },
  "jr17.12-18": {
    id: "jr17.12-18",
    referencia: "Jr 17.12-18",
    livro: "Jeremias",
    capitulo: 17,
    vIni: 12,
    vFim: 18,
    titulo: "Jeremias clama a Deus que o socorra dos seus inimigos"
  },
  "jr17.19-27": {
    id: "jr17.19-27",
    referencia: "Jr 17.19-27",
    livro: "Jeremias",
    capitulo: 17,
    vIni: 19,
    vFim: 27,
    titulo: "A santificação do sábado"
  },
  "jr18.1-17": {
    id: "jr18.1-17",
    referencia: "Jr 18.1-17",
    livro: "Jeremias",
    capitulo: 18,
    vIni: 1,
    vFim: 17,
    titulo: "O vaso do oleiro"
  },
  "jr18.18-23": {
    id: "jr18.18-23",
    referencia: "Jr 18.18-23",
    livro: "Jeremias",
    capitulo: 18,
    vIni: 18,
    vFim: 23,
    titulo: "O profeta ora contra seus inimigos"
  },
  "jr19.1-15": {
    id: "jr19.1-15",
    referencia: "Jr 19.1-15",
    livro: "Jeremias",
    capitulo: 19,
    vIni: 1,
    vFim: 15,
    titulo: "A botija quebrada"
  },
  "jr20.1-6": {
    id: "jr20.1-6",
    referencia: "Jr 20.1-6",
    livro: "Jeremias",
    capitulo: 20,
    vIni: 1,
    vFim: 6,
    titulo: "Amaldiçoado Pasur, que meteu o profeta no tronco"
  },
  "jr20.7-13": {
    id: "jr20.7-13",
    referencia: "Jr 20.7-13",
    livro: "Jeremias",
    capitulo: 20,
    vIni: 7,
    vFim: 13,
    titulo: "O lamento do profeta"
  },
  "jr20.14-18": {
    id: "jr20.14-18",
    referencia: "Jr 20.14-18",
    livro: "Jeremias",
    capitulo: 20,
    vIni: 14,
    vFim: 18,
    titulo: "Jeremias amaldiçoa o dia de seu nascimento"
  },
  "jr21.1-14": {
    id: "jr21.1-14",
    referencia: "Jr 21.1-14",
    livro: "Jeremias",
    capitulo: 21,
    vIni: 1,
    vFim: 14,
    titulo: "Predita a destruição de Jerusalém por Nabucodonosor"
  },
  "jr22.1-9": {
    id: "jr22.1-9",
    referencia: "Jr 22.1-9",
    livro: "Jeremias",
    capitulo: 22,
    vIni: 1,
    vFim: 9,
    titulo: "Profecia contra a casa real de Judá"
  },
  "jr22.10-12": {
    id: "jr22.10-12",
    referencia: "Jr 22.10-12",
    livro: "Jeremias",
    capitulo: 22,
    vIni: 10,
    vFim: 12,
    titulo: "Contra Salum, rei de Judá"
  },
  "jr22.13-23": {
    id: "jr22.13-23",
    referencia: "Jr 22.13-23",
    livro: "Jeremias",
    capitulo: 22,
    vIni: 13,
    vFim: 23,
    titulo: "Contra Jeoaquim, rei de Judá"
  },
  "jr22.24-30": {
    id: "jr22.24-30",
    referencia: "Jr 22.24-30",
    livro: "Jeremias",
    capitulo: 22,
    vIni: 24,
    vFim: 30,
    titulo: "Contra Jeconias, rei de Judá"
  },
  "jr23.1-4": {
    id: "jr23.1-4",
    referencia: "Jr 23.1-4",
    livro: "Jeremias",
    capitulo: 23,
    vIni: 1,
    vFim: 4,
    titulo: "Profecia contra os maus pastores"
  },
  "jr23.5-8": {
    id: "jr23.5-8",
    referencia: "Jr 23.5-8",
    livro: "Jeremias",
    capitulo: 23,
    vIni: 5,
    vFim: 8,
    titulo: "Profecia sobre o Renovo de Davi"
  },
  "jr23.9-40": {
    id: "jr23.9-40",
    referencia: "Jr 23.9-40",
    livro: "Jeremias",
    capitulo: 23,
    vIni: 9,
    vFim: 40,
    titulo: "Contra os falsos profetas"
  },
  "jr24.1-10": {
    id: "jr24.1-10",
    referencia: "Jr 24.1-10",
    livro: "Jeremias",
    capitulo: 24,
    vIni: 1,
    vFim: 10,
    titulo: "A visão dos dois cestos de figos"
  },
  "jr25.1-14": {
    id: "jr25.1-14",
    referencia: "Jr 25.1-14",
    livro: "Jeremias",
    capitulo: 25,
    vIni: 1,
    vFim: 14,
    titulo: "Setenta anos de cativeiro"
  },
  "jr25.15-38": {
    id: "jr25.15-38",
    referencia: "Jr 25.15-38",
    livro: "Jeremias",
    capitulo: 25,
    vIni: 15,
    vFim: 38,
    titulo: "O cálice da ira de Deus contra as nações"
  },
  "jr26.1-19": {
    id: "jr26.1-19",
    referencia: "Jr 26.1-19",
    livro: "Jeremias",
    capitulo: 26,
    vIni: 1,
    vFim: 19,
    titulo: "Jeremias ameaçado de morte"
  },
  "jr26.20-24": {
    id: "jr26.20-24",
    referencia: "Jr 26.20-24",
    livro: "Jeremias",
    capitulo: 26,
    vIni: 20,
    vFim: 24,
    titulo: "A execução do profeta Urias"
  },
  "jr27.1-22": {
    id: "jr27.1-22",
    referencia: "Jr 27.1-22",
    livro: "Jeremias",
    capitulo: 27,
    vIni: 1,
    vFim: 22,
    titulo: "Os canzis simbólicos"
  },
  "jr28.1-17": {
    id: "jr28.1-17",
    referencia: "Jr 28.1-17",
    livro: "Jeremias",
    capitulo: 28,
    vIni: 1,
    vFim: 17,
    titulo: "A luta de Jeremias com o falso profeta Hananias"
  },
  "jr29.1-32": {
    id: "jr29.1-32",
    referencia: "Jr 29.1-32",
    livro: "Jeremias",
    capitulo: 29,
    vIni: 1,
    vFim: 32,
    titulo: "A carta de Jeremias aos cativos da Babilônia"
  },
  "jr30.1-24": {
    id: "jr30.1-24",
    referencia: "Jr 30.1-24",
    livro: "Jeremias",
    capitulo: 30,
    vIni: 1,
    vFim: 24,
    titulo: "Deus promete trazer do cativeiro o seu povo"
  },
  "jr31.1-30": {
    id: "jr31.1-30",
    referencia: "Jr 31.1-30",
    livro: "Jeremias",
    capitulo: 31,
    vIni: 1,
    vFim: 30,
    titulo: "Lamento transformado em júbilo"
  },
  "jr31.31-40": {
    id: "jr31.31-40",
    referencia: "Jr 31.31-40",
    livro: "Jeremias",
    capitulo: 31,
    vIni: 31,
    vFim: 40,
    titulo: "Firmada nova aliança com Israel"
  },
  "jr32.1-15": {
    id: "jr32.1-15",
    referencia: "Jr 32.1-15",
    livro: "Jeremias",
    capitulo: 32,
    vIni: 1,
    vFim: 15,
    titulo: "Jeremias compra um campo em Anatote"
  },
  "jr32.16-25": {
    id: "jr32.16-25",
    referencia: "Jr 32.16-25",
    livro: "Jeremias",
    capitulo: 32,
    vIni: 16,
    vFim: 25,
    titulo: "Jeremias pede esclarecimentos a Deus"
  },
  "jr32.27-44": {
    id: "jr32.27-44",
    referencia: "Jr 32.27-44",
    livro: "Jeremias",
    capitulo: 32,
    vIni: 27,
    vFim: 44,
    titulo: "A resposta de Deus"
  },
  "jr33.1-13": {
    id: "jr33.1-13",
    referencia: "Jr 33.1-13",
    livro: "Jeremias",
    capitulo: 33,
    vIni: 1,
    vFim: 13,
    titulo: "Promessas de paz e prosperidade"
  },
  "jr33.14-26": {
    id: "jr33.14-26",
    referencia: "Jr 33.14-26",
    livro: "Jeremias",
    capitulo: 33,
    vIni: 14,
    vFim: 26,
    titulo: "Repetição da promessa do Renovo de Davi"
  },
  "jr34.1-7": {
    id: "jr34.1-7",
    referencia: "Jr 34.1-7",
    livro: "Jeremias",
    capitulo: 34,
    vIni: 1,
    vFim: 7,
    titulo: "Prediz-se a sorte de Zedequias"
  },
  "jr34.8-22": {
    id: "jr34.8-22",
    referencia: "Jr 34.8-22",
    livro: "Jeremias",
    capitulo: 34,
    vIni: 8,
    vFim: 22,
    titulo: "As ameaças de Deus por causa da escravatura"
  },
  "jr35.1-19": {
    id: "jr35.1-19",
    referencia: "Jr 35.1-19",
    livro: "Jeremias",
    capitulo: 35,
    vIni: 1,
    vFim: 19,
    titulo: "A fidelidade dos recabitas"
  },
  "jr36.1-10": {
    id: "jr36.1-10",
    referencia: "Jr 36.1-10",
    livro: "Jeremias",
    capitulo: 36,
    vIni: 1,
    vFim: 10,
    titulo: "O rolo de Jeremias é lido no templo"
  },
  "jr36.11-19": {
    id: "jr36.11-19",
    referencia: "Jr 36.11-19",
    livro: "Jeremias",
    capitulo: 36,
    vIni: 11,
    vFim: 19,
    titulo: "O rolo é lido diante dos príncipes"
  },
  "jr36.20-26": {
    id: "jr36.20-26",
    referencia: "Jr 36.20-26",
    livro: "Jeremias",
    capitulo: 36,
    vIni: 20,
    vFim: 26,
    titulo: "O rei lança o rolo no fogo"
  },
  "jr36.27-32": {
    id: "jr36.27-32",
    referencia: "Jr 36.27-32",
    livro: "Jeremias",
    capitulo: 36,
    vIni: 27,
    vFim: 32,
    titulo: "Baruque reescreve o rolo"
  },
  "jr37.1-21": {
    id: "jr37.1-21",
    referencia: "Jr 37.1-21",
    livro: "Jeremias",
    capitulo: 37,
    vIni: 1,
    vFim: 21,
    titulo: "Jeremias na prisão"
  },
  "jr38.1-13": {
    id: "jr38.1-13",
    referencia: "Jr 38.1-13",
    livro: "Jeremias",
    capitulo: 38,
    vIni: 1,
    vFim: 13,
    titulo: "O etíope Ebede-Meleque salva Jeremias da cisterna"
  },
  "jr38.14-28": {
    id: "jr38.14-28",
    referencia: "Jr 38.14-28",
    livro: "Jeremias",
    capitulo: 38,
    vIni: 14,
    vFim: 28,
    titulo: "Zedequias consulta o profeta"
  },
  "jr39.2-10": {
    id: "jr39.2-10",
    referencia: "Jr 39.2-10",
    livro: "Jeremias",
    capitulo: 39,
    vIni: 2,
    vFim: 10,
    titulo: "Nabucodonosor toma Jerusalém"
  },
  "jr39.11-18": {
    id: "jr39.11-18",
    referencia: "Jr 39.11-18",
    livro: "Jeremias",
    capitulo: 39,
    vIni: 11,
    vFim: 18,
    titulo: "Nabucodonosor cuida de Jeremias"
  },
  "jr40.1-12": {
    id: "jr40.1-12",
    referencia: "Jr 40.1-12",
    livro: "Jeremias",
    capitulo: 40,
    vIni: 1,
    vFim: 12,
    titulo: "Jeremias e os restantes do povo ficam com Gedalias"
  },
  "jr40.13-16": {
    id: "jr40.13-16",
    referencia: "Jr 40.13-16",
    livro: "Jeremias",
    capitulo: 40,
    vIni: 13,
    vFim: 16,
    titulo: "Ismael conspira contra Gedalias"
  },
  "jr41.11-18": {
    id: "jr41.11-18",
    referencia: "Jr 41.11-18",
    livro: "Jeremias",
    capitulo: 41,
    vIni: 11,
    vFim: 18,
    titulo: "Joanã livra os cativos"
  },
  "jr42.1-22": {
    id: "jr42.1-22",
    referencia: "Jr 42.1-22",
    livro: "Jeremias",
    capitulo: 42,
    vIni: 1,
    vFim: 22,
    titulo: "Jeremias exorta o povo a não ir ao Egito"
  },
  "jr43.1-7": {
    id: "jr43.1-7",
    referencia: "Jr 43.1-7",
    livro: "Jeremias",
    capitulo: 43,
    vIni: 1,
    vFim: 7,
    titulo: "Jeremias é levado ao Egito pelo povo"
  },
  "jr43.8-13": {
    id: "jr43.8-13",
    referencia: "Jr 43.8-13",
    livro: "Jeremias",
    capitulo: 43,
    vIni: 8,
    vFim: 13,
    titulo: "Jeremias profetiza a conquista do Egito por Nabucodonosor"
  },
  "jr44.1-14": {
    id: "jr44.1-14",
    referencia: "Jr 44.1-14",
    livro: "Jeremias",
    capitulo: 44,
    vIni: 1,
    vFim: 14,
    titulo: "Repreendida a infidelidade dos judeus no Egito"
  },
  "jr44.15-19": {
    id: "jr44.15-19",
    referencia: "Jr 44.15-19",
    livro: "Jeremias",
    capitulo: 44,
    vIni: 15,
    vFim: 19,
    titulo: "Jeremias é contraditado"
  },
  "jr44.20-30": {
    id: "jr44.20-30",
    referencia: "Jr 44.20-30",
    livro: "Jeremias",
    capitulo: 44,
    vIni: 20,
    vFim: 30,
    titulo: "Jeremias prediz castigo"
  },
  "jr45.1-5": {
    id: "jr45.1-5",
    referencia: "Jr 45.1-5",
    livro: "Jeremias",
    capitulo: 45,
    vIni: 1,
    vFim: 5,
    titulo: "A mensagem de Jeremias a Baruque"
  },
  "jr46.1-28": {
    id: "jr46.1-28",
    referencia: "Jr 46.1-28",
    livro: "Jeremias",
    capitulo: 46,
    vIni: 1,
    vFim: 28,
    titulo: "Profecia a respeito do Egito"
  },
  "jr47.1-7": {
    id: "jr47.1-7",
    referencia: "Jr 47.1-7",
    livro: "Jeremias",
    capitulo: 47,
    vIni: 1,
    vFim: 7,
    titulo: "Profecia a respeito dos filisteus"
  },
  "jr48.1-47": {
    id: "jr48.1-47",
    referencia: "Jr 48.1-47",
    livro: "Jeremias",
    capitulo: 48,
    vIni: 1,
    vFim: 47,
    titulo: "Profecia a respeito de Moabe"
  },
  "jr49.1-6": {
    id: "jr49.1-6",
    referencia: "Jr 49.1-6",
    livro: "Jeremias",
    capitulo: 49,
    vIni: 1,
    vFim: 6,
    titulo: "Profecia a respeito dos amonitas"
  },
  "jr49.7-13": {
    id: "jr49.7-13",
    referencia: "Jr 49.7-13",
    livro: "Jeremias",
    capitulo: 49,
    vIni: 7,
    vFim: 13,
    titulo: "Profecia a respeito dos edomitas"
  },
  "jr49.14-22": {
    id: "jr49.14-22",
    referencia: "Jr 49.14-22",
    livro: "Jeremias",
    capitulo: 49,
    vIni: 14,
    vFim: 22,
    titulo: "Os pecados e o castigo de Edom"
  },
  "jr49.23-27": {
    id: "jr49.23-27",
    referencia: "Jr 49.23-27",
    livro: "Jeremias",
    capitulo: 49,
    vIni: 23,
    vFim: 27,
    titulo: "Profecia a respeito de Damasco"
  },
  "jr49.28-33": {
    id: "jr49.28-33",
    referencia: "Jr 49.28-33",
    livro: "Jeremias",
    capitulo: 49,
    vIni: 28,
    vFim: 33,
    titulo: "Profecia a respeito da Arábia"
  },
  "jr49.34-39": {
    id: "jr49.34-39",
    referencia: "Jr 49.34-39",
    livro: "Jeremias",
    capitulo: 49,
    vIni: 34,
    vFim: 39,
    titulo: "Profecia a respeito dos elamitas"
  },
  "jr50.1-46": {
    id: "jr50.1-46",
    referencia: "Jr 50.1-46",
    livro: "Jeremias",
    capitulo: 50,
    vIni: 1,
    vFim: 46,
    titulo: "Profecia a respeito da Babilônia"
  },
  "jr51.1-64": {
    id: "jr51.1-64",
    referencia: "Jr 51.1-64",
    livro: "Jeremias",
    capitulo: 51,
    vIni: 1,
    vFim: 64,
    titulo: "O poder e a queda da Babilônia"
  },
  "jr52.2-30": {
    id: "jr52.2-30",
    referencia: "Jr 52.2-30",
    livro: "Jeremias",
    capitulo: 52,
    vIni: 2,
    vFim: 30,
    titulo: "A queda de Jerusalém e o cativeiro de Judá"
  },
  "jr52.2-34": {
    id: "jr52.2-34",
    referencia: "Jr 52.2-34",
    livro: "Jeremias",
    capitulo: 52,
    vIni: 2,
    vFim: 34,
    titulo: "Libertado e honrado o rei Joaquim"
  },
  "lm1.1-22": {
    id: "lm1.1-22",
    referencia: "Lm 1.1-22",
    livro: "Lamentações",
    capitulo: 1,
    vIni: 1,
    vFim: 22,
    titulo: "Jerusalém destruída e desolada"
  },
  "lm2.1-22": {
    id: "lm2.1-22",
    referencia: "Lm 2.1-22",
    livro: "Lamentações",
    capitulo: 2,
    vIni: 1,
    vFim: 22,
    titulo: "As tristezas de Sião provêm do Senhor"
  },
  "lm3.1-21": {
    id: "lm3.1-21",
    referencia: "Lm 3.1-21",
    livro: "Lamentações",
    capitulo: 3,
    vIni: 1,
    vFim: 21,
    titulo: "Convidado o povo a reconhecer o seu pecado"
  },
  "lm3.22-66": {
    id: "lm3.22-66",
    referencia: "Lm 3.22-66",
    livro: "Lamentações",
    capitulo: 3,
    vIni: 22,
    vFim: 66,
    titulo: "Esperança de auxílio pela misericórdia de Deus"
  },
  "lm4.1-22": {
    id: "lm4.1-22",
    referencia: "Lm 4.1-22",
    livro: "Lamentações",
    capitulo: 4,
    vIni: 1,
    vFim: 22,
    titulo: "Os sofrimentos do cerco"
  },
  "lm5.1-22": {
    id: "lm5.1-22",
    referencia: "Lm 5.1-22",
    livro: "Lamentações",
    capitulo: 5,
    vIni: 1,
    vFim: 22,
    titulo: "Os fiéis pedem misericórdia"
  },
  "ez1.1-14": {
    id: "ez1.1-14",
    referencia: "Ez 1.1-14",
    livro: "Ezequiel",
    capitulo: 1,
    vIni: 1,
    vFim: 14,
    titulo: "A visão dos quatro querubins"
  },
  "ez1.15-25": {
    id: "ez1.15-25",
    referencia: "Ez 1.15-25",
    livro: "Ezequiel",
    capitulo: 1,
    vIni: 15,
    vFim: 25,
    titulo: "A visão das quatro rodas"
  },
  "ez1.26-28": {
    id: "ez1.26-28",
    referencia: "Ez 1.26-28",
    livro: "Ezequiel",
    capitulo: 1,
    vIni: 26,
    vFim: 28,
    titulo: "A visão da glória divina"
  },
  "ez2.1-7": {
    id: "ez2.1-7",
    referencia: "Ez 2.1-7",
    livro: "Ezequiel",
    capitulo: 2,
    vIni: 1,
    vFim: 7,
    titulo: "A vocação de Ezequiel"
  },
  "ez2.8-10": {
    id: "ez2.8-10",
    referencia: "Ez 2.8-10",
    livro: "Ezequiel",
    capitulo: 2,
    vIni: 8,
    vFim: 10,
    titulo: "Visão do rolo de um livro"
  },
  "ez3.4-15": {
    id: "ez3.4-15",
    referencia: "Ez 3.4-15",
    livro: "Ezequiel",
    capitulo: 3,
    vIni: 4,
    vFim: 15,
    titulo: "O comissionamento do profeta"
  },
  "ez3.16-27": {
    id: "ez3.16-27",
    referencia: "Ez 3.16-27",
    livro: "Ezequiel",
    capitulo: 3,
    vIni: 16,
    vFim: 27,
    titulo: "O atalaia de Israel"
  },
  "ez4.1-17": {
    id: "ez4.1-17",
    referencia: "Ez 4.1-17",
    livro: "Ezequiel",
    capitulo: 4,
    vIni: 1,
    vFim: 17,
    titulo: "O cerco simbólico de Jerusalém"
  },
  "ez5.5-17": {
    id: "ez5.5-17",
    referencia: "Ez 5.5-17",
    livro: "Ezequiel",
    capitulo: 5,
    vIni: 5,
    vFim: 17,
    titulo: "As causas do cerco de Jerusalém"
  },
  "ez6.1-14": {
    id: "ez6.1-14",
    referencia: "Ez 6.1-14",
    livro: "Ezequiel",
    capitulo: 6,
    vIni: 1,
    vFim: 14,
    titulo: "Profecia contra a idolatria de Israel"
  },
  "ez7.1-27": {
    id: "ez7.1-27",
    referencia: "Ez 7.1-27",
    livro: "Ezequiel",
    capitulo: 7,
    vIni: 1,
    vFim: 27,
    titulo: "O fim vem! O fim vem!"
  },
  "ez8.1-18": {
    id: "ez8.1-18",
    referencia: "Ez 8.1-18",
    livro: "Ezequiel",
    capitulo: 8,
    vIni: 1,
    vFim: 18,
    titulo: "Visão das abominações em Jerusalém"
  },
  "ez9.1-11": {
    id: "ez9.1-11",
    referencia: "Ez 9.1-11",
    livro: "Ezequiel",
    capitulo: 9,
    vIni: 1,
    vFim: 11,
    titulo: "Os castigos de Jerusalém"
  },
  "ez10.1-8": {
    id: "ez10.1-8",
    referencia: "Ez 10.1-8",
    livro: "Ezequiel",
    capitulo: 10,
    vIni: 1,
    vFim: 8,
    titulo: "A visão das brasas de fogo"
  },
  "ez10.9-17": {
    id: "ez10.9-17",
    referencia: "Ez 10.9-17",
    livro: "Ezequiel",
    capitulo: 10,
    vIni: 9,
    vFim: 17,
    titulo: "A visão das quatro rodas"
  },
  "ez10.18-22": {
    id: "ez10.18-22",
    referencia: "Ez 10.18-22",
    livro: "Ezequiel",
    capitulo: 10,
    vIni: 18,
    vFim: 22,
    titulo: "A glória de Deus abandona o templo"
  },
  "ez11.1-13": {
    id: "ez11.1-13",
    referencia: "Ez 11.1-13",
    livro: "Ezequiel",
    capitulo: 11,
    vIni: 1,
    vFim: 13,
    titulo: "O juízo de Deus contra os chefes do povo"
  },
  "ez11.14-25": {
    id: "ez11.14-25",
    referencia: "Ez 11.14-25",
    livro: "Ezequiel",
    capitulo: 11,
    vIni: 14,
    vFim: 25,
    titulo: "Promessa da restauração de Israel"
  },
  "ez12.1-28": {
    id: "ez12.1-28",
    referencia: "Ez 12.1-28",
    livro: "Ezequiel",
    capitulo: 12,
    vIni: 1,
    vFim: 28,
    titulo: "O profeta descreve o cativeiro"
  },
  "ez13.1-16": {
    id: "ez13.1-16",
    referencia: "Ez 13.1-16",
    livro: "Ezequiel",
    capitulo: 13,
    vIni: 1,
    vFim: 16,
    titulo: "Profecia contra os falsos profetas"
  },
  "ez13.17-23": {
    id: "ez13.17-23",
    referencia: "Ez 13.17-23",
    livro: "Ezequiel",
    capitulo: 13,
    vIni: 17,
    vFim: 23,
    titulo: "Contra as falsas profetisas"
  },
  "ez14.1-11": {
    id: "ez14.1-11",
    referencia: "Ez 14.1-11",
    livro: "Ezequiel",
    capitulo: 14,
    vIni: 1,
    vFim: 11,
    titulo: "O castigo dos idólatras"
  },
  "ez14.12-23": {
    id: "ez14.12-23",
    referencia: "Ez 14.12-23",
    livro: "Ezequiel",
    capitulo: 14,
    vIni: 12,
    vFim: 23,
    titulo: "A justiça dos castigos de Deus"
  },
  "ez15.1-8": {
    id: "ez15.1-8",
    referencia: "Ez 15.1-8",
    livro: "Ezequiel",
    capitulo: 15,
    vIni: 1,
    vFim: 8,
    titulo: "Jerusalém é qual videira inútil"
  },
  "ez16.1-63": {
    id: "ez16.1-63",
    referencia: "Ez 16.1-63",
    livro: "Ezequiel",
    capitulo: 16,
    vIni: 1,
    vFim: 63,
    titulo: "A infidelidade de Jerusalém"
  },
  "ez17.1-24": {
    id: "ez17.1-24",
    referencia: "Ez 17.1-24",
    livro: "Ezequiel",
    capitulo: 17,
    vIni: 1,
    vFim: 24,
    titulo: "A parábola das duas águias e da videira"
  },
  "ez18.1-32": {
    id: "ez18.1-32",
    referencia: "Ez 18.1-32",
    livro: "Ezequiel",
    capitulo: 18,
    vIni: 1,
    vFim: 32,
    titulo: "A responsabilidade é pessoal"
  },
  "ez19.1-9": {
    id: "ez19.1-9",
    referencia: "Ez 19.1-9",
    livro: "Ezequiel",
    capitulo: 19,
    vIni: 1,
    vFim: 9,
    titulo: "A parábola do leão enjaulado"
  },
  "ez19.10-14": {
    id: "ez19.10-14",
    referencia: "Ez 19.10-14",
    livro: "Ezequiel",
    capitulo: 19,
    vIni: 10,
    vFim: 14,
    titulo: "A parábola da videira arruinada"
  },
  "ez20.1-44": {
    id: "ez20.1-44",
    referencia: "Ez 20.1-44",
    livro: "Ezequiel",
    capitulo: 20,
    vIni: 1,
    vFim: 44,
    titulo: "As abominações da casa de Israel depois do êxodo"
  },
  "ez20.45-49": {
    id: "ez20.45-49",
    referencia: "Ez 20.45-49",
    livro: "Ezequiel",
    capitulo: 20,
    vIni: 45,
    vFim: 49,
    titulo: "A profecia contra o Sul"
  },
  "ez21.1-32": {
    id: "ez21.1-32",
    referencia: "Ez 21.1-32",
    livro: "Ezequiel",
    capitulo: 21,
    vIni: 1,
    vFim: 32,
    titulo: "A espada do Senhor"
  },
  "ez22.1-31": {
    id: "ez22.1-31",
    referencia: "Ez 22.1-31",
    livro: "Ezequiel",
    capitulo: 22,
    vIni: 1,
    vFim: 31,
    titulo: "As abominações de Jerusalém"
  },
  "ez23.1-49": {
    id: "ez23.1-49",
    referencia: "Ez 23.1-49",
    livro: "Ezequiel",
    capitulo: 23,
    vIni: 1,
    vFim: 49,
    titulo: "Oolá e Oolibá, as duas meretrizes"
  },
  "ez24.1-14": {
    id: "ez24.1-14",
    referencia: "Ez 24.1-14",
    livro: "Ezequiel",
    capitulo: 24,
    vIni: 1,
    vFim: 14,
    titulo: "A parábola da panela"
  },
  "ez24.15-27": {
    id: "ez24.15-27",
    referencia: "Ez 24.15-27",
    livro: "Ezequiel",
    capitulo: 24,
    vIni: 15,
    vFim: 27,
    titulo: "A viuvez de Ezequiel"
  },
  "ez25.1-7": {
    id: "ez25.1-7",
    referencia: "Ez 25.1-7",
    livro: "Ezequiel",
    capitulo: 25,
    vIni: 1,
    vFim: 7,
    titulo: "Profecia contra Amom"
  },
  "ez25.8-11": {
    id: "ez25.8-11",
    referencia: "Ez 25.8-11",
    livro: "Ezequiel",
    capitulo: 25,
    vIni: 8,
    vFim: 11,
    titulo: "Profecia contra Moabe"
  },
  "ez25.12-14": {
    id: "ez25.12-14",
    referencia: "Ez 25.12-14",
    livro: "Ezequiel",
    capitulo: 25,
    vIni: 12,
    vFim: 14,
    titulo: "Profecia contra Edom"
  },
  "ez25.15-17": {
    id: "ez25.15-17",
    referencia: "Ez 25.15-17",
    livro: "Ezequiel",
    capitulo: 25,
    vIni: 15,
    vFim: 17,
    titulo: "Profecia contra a Filístia"
  },
  "ez26.1-21": {
    id: "ez26.1-21",
    referencia: "Ez 26.1-21",
    livro: "Ezequiel",
    capitulo: 26,
    vIni: 1,
    vFim: 21,
    titulo: "Profecia contra Tiro"
  },
  "ez27.1-36": {
    id: "ez27.1-36",
    referencia: "Ez 27.1-36",
    livro: "Ezequiel",
    capitulo: 27,
    vIni: 1,
    vFim: 36,
    titulo: "Lamentação sobre Tiro"
  },
  "ez28.1-10": {
    id: "ez28.1-10",
    referencia: "Ez 28.1-10",
    livro: "Ezequiel",
    capitulo: 28,
    vIni: 1,
    vFim: 10,
    titulo: "Profecia contra o rei de Tiro"
  },
  "ez28.11-19": {
    id: "ez28.11-19",
    referencia: "Ez 28.11-19",
    livro: "Ezequiel",
    capitulo: 28,
    vIni: 11,
    vFim: 19,
    titulo: "Outra lamentação contra o rei de Tiro"
  },
  "ez28.20-26": {
    id: "ez28.20-26",
    referencia: "Ez 28.20-26",
    livro: "Ezequiel",
    capitulo: 28,
    vIni: 20,
    vFim: 26,
    titulo: "Profecia contra Sidom"
  },
  "ez29.1-21": {
    id: "ez29.1-21",
    referencia: "Ez 29.1-21",
    livro: "Ezequiel",
    capitulo: 29,
    vIni: 1,
    vFim: 21,
    titulo: "Profecia contra o Egito"
  },
  "ez30.1-26": {
    id: "ez30.1-26",
    referencia: "Ez 30.1-26",
    livro: "Ezequiel",
    capitulo: 30,
    vIni: 1,
    vFim: 26,
    titulo: "O Egito será conquistado pela Babilônia"
  },
  "ez31.1-18": {
    id: "ez31.1-18",
    referencia: "Ez 31.1-18",
    livro: "Ezequiel",
    capitulo: 31,
    vIni: 1,
    vFim: 18,
    titulo: "O destino do Egito"
  },
  "ez32.1-16": {
    id: "ez32.1-16",
    referencia: "Ez 32.1-16",
    livro: "Ezequiel",
    capitulo: 32,
    vIni: 1,
    vFim: 16,
    titulo: "Lamentação contra Faraó, rei do Egito"
  },
  "ez32.17-32": {
    id: "ez32.17-32",
    referencia: "Ez 32.17-32",
    livro: "Ezequiel",
    capitulo: 32,
    vIni: 17,
    vFim: 32,
    titulo: "Os egípcios com outras nações no além"
  },
  "ez33.1-20": {
    id: "ez33.1-20",
    referencia: "Ez 33.1-20",
    livro: "Ezequiel",
    capitulo: 33,
    vIni: 1,
    vFim: 20,
    titulo: "O dever do verdadeiro atalaia"
  },
  "ez33.21-33": {
    id: "ez33.21-33",
    referencia: "Ez 33.21-33",
    livro: "Ezequiel",
    capitulo: 33,
    vIni: 21,
    vFim: 33,
    titulo: "O castigo de Israel por causa da sua presunção"
  },
  "ez34.1-10": {
    id: "ez34.1-10",
    referencia: "Ez 34.1-10",
    livro: "Ezequiel",
    capitulo: 34,
    vIni: 1,
    vFim: 10,
    titulo: "Profecia contra os pastores infiéis de Israel"
  },
  "ez34.11-31": {
    id: "ez34.11-31",
    referencia: "Ez 34.11-31",
    livro: "Ezequiel",
    capitulo: 34,
    vIni: 11,
    vFim: 31,
    titulo: "O cuidado do Senhor pelo seu rebanho"
  },
  "ez35.1-15": {
    id: "ez35.1-15",
    referencia: "Ez 35.1-15",
    livro: "Ezequiel",
    capitulo: 35,
    vIni: 1,
    vFim: 15,
    titulo: "Profecia contra o monte Seir"
  },
  "ez36.1-15": {
    id: "ez36.1-15",
    referencia: "Ez 36.1-15",
    livro: "Ezequiel",
    capitulo: 36,
    vIni: 1,
    vFim: 15,
    titulo: "Profecia aos montes de Israel"
  },
  "ez36.16-38": {
    id: "ez36.16-38",
    referencia: "Ez 36.16-38",
    livro: "Ezequiel",
    capitulo: 36,
    vIni: 16,
    vFim: 38,
    titulo: "A restauração de Israel"
  },
  "ez37.1-14": {
    id: "ez37.1-14",
    referencia: "Ez 37.1-14",
    livro: "Ezequiel",
    capitulo: 37,
    vIni: 1,
    vFim: 14,
    titulo: "A visão de um vale de ossos secos"
  },
  "ez37.15-28": {
    id: "ez37.15-28",
    referencia: "Ez 37.15-28",
    livro: "Ezequiel",
    capitulo: 37,
    vIni: 15,
    vFim: 28,
    titulo: "Reunião de Judá e Israel"
  },
  "ez38.1-13": {
    id: "ez38.1-13",
    referencia: "Ez 38.1-13",
    livro: "Ezequiel",
    capitulo: 38,
    vIni: 1,
    vFim: 13,
    titulo: "Profecia contra Gogue"
  },
  "ez38.14-23": {
    id: "ez38.14-23",
    referencia: "Ez 38.14-23",
    livro: "Ezequiel",
    capitulo: 38,
    vIni: 14,
    vFim: 23,
    titulo: "Gogue invadirá Israel"
  },
  "ez39.1-10": {
    id: "ez39.1-10",
    referencia: "Ez 39.1-10",
    livro: "Ezequiel",
    capitulo: 39,
    vIni: 1,
    vFim: 10,
    titulo: "A queda de Gogue"
  },
  "ez39.11-16": {
    id: "ez39.11-16",
    referencia: "Ez 39.11-16",
    livro: "Ezequiel",
    capitulo: 39,
    vIni: 11,
    vFim: 16,
    titulo: "O sepultamento das hordas de Gogue"
  },
  "ez39.17-29": {
    id: "ez39.17-29",
    referencia: "Ez 39.17-29",
    livro: "Ezequiel",
    capitulo: 39,
    vIni: 17,
    vFim: 29,
    titulo: "O grande sacrifício do Senhor"
  },
  "ez40.1-49": {
    id: "ez40.1-49",
    referencia: "Ez 40.1-49",
    livro: "Ezequiel",
    capitulo: 40,
    vIni: 1,
    vFim: 49,
    titulo: "A visão do templo"
  },
  "ez43.1-9": {
    id: "ez43.1-9",
    referencia: "Ez 43.1-9",
    livro: "Ezequiel",
    capitulo: 43,
    vIni: 1,
    vFim: 9,
    titulo: "A glória do Senhor enche o templo"
  },
  "ez43.10-17": {
    id: "ez43.10-17",
    referencia: "Ez 43.10-17",
    livro: "Ezequiel",
    capitulo: 43,
    vIni: 10,
    vFim: 17,
    titulo: "O altar dos holocaustos"
  },
  "ez43.18-27": {
    id: "ez43.18-27",
    referencia: "Ez 43.18-27",
    livro: "Ezequiel",
    capitulo: 43,
    vIni: 18,
    vFim: 27,
    titulo: "A consagração do altar"
  },
  "ez44.1-14": {
    id: "ez44.1-14",
    referencia: "Ez 44.1-14",
    livro: "Ezequiel",
    capitulo: 44,
    vIni: 1,
    vFim: 14,
    titulo: "Reformas no ministério do santuário"
  },
  "ez44.15-27": {
    id: "ez44.15-27",
    referencia: "Ez 44.15-27",
    livro: "Ezequiel",
    capitulo: 44,
    vIni: 15,
    vFim: 27,
    titulo: "Os deveres dos sacerdotes"
  },
  "ez44.28-31": {
    id: "ez44.28-31",
    referencia: "Ez 44.28-31",
    livro: "Ezequiel",
    capitulo: 44,
    vIni: 28,
    vFim: 31,
    titulo: "A repartição das terras"
  },
  "ez45.9-17": {
    id: "ez45.9-17",
    referencia: "Ez 45.9-17",
    livro: "Ezequiel",
    capitulo: 45,
    vIni: 9,
    vFim: 17,
    titulo: "Deveres dos magistrados"
  },
  "ez45.18-20": {
    id: "ez45.18-20",
    referencia: "Ez 45.18-20",
    livro: "Ezequiel",
    capitulo: 45,
    vIni: 18,
    vFim: 20,
    titulo: "Ofertas no Ano-Novo"
  },
  "ez45.21-25": {
    id: "ez45.21-25",
    referencia: "Ez 45.21-25",
    livro: "Ezequiel",
    capitulo: 45,
    vIni: 21,
    vFim: 25,
    titulo: "Na Páscoa"
  },
  "ez46.1-8": {
    id: "ez46.1-8",
    referencia: "Ez 46.1-8",
    livro: "Ezequiel",
    capitulo: 46,
    vIni: 1,
    vFim: 8,
    titulo: "Nos sábados e Festas da Lua Nova"
  },
  "ez46.9-24": {
    id: "ez46.9-24",
    referencia: "Ez 46.9-24",
    livro: "Ezequiel",
    capitulo: 46,
    vIni: 9,
    vFim: 24,
    titulo: "Instruções referentes às ofertas"
  },
  "ez47.1-12": {
    id: "ez47.1-12",
    referencia: "Ez 47.1-12",
    livro: "Ezequiel",
    capitulo: 47,
    vIni: 1,
    vFim: 12,
    titulo: "A torrente das águas purificadoras"
  },
  "ez47.13-23": {
    id: "ez47.13-23",
    referencia: "Ez 47.13-23",
    livro: "Ezequiel",
    capitulo: 47,
    vIni: 13,
    vFim: 23,
    titulo: "As fronteiras da terra de Israel"
  },
  "ez48.1-12": {
    id: "ez48.1-12",
    referencia: "Ez 48.1-12",
    livro: "Ezequiel",
    capitulo: 48,
    vIni: 1,
    vFim: 12,
    titulo: "Os limites de sete tribos"
  },
  "ez48.13-14": {
    id: "ez48.13-14",
    referencia: "Ez 48.13-14",
    livro: "Ezequiel",
    capitulo: 48,
    vIni: 13,
    vFim: 14,
    titulo: "Os limites dos sacerdotes e dos levitas"
  },
  "ez48.15-20": {
    id: "ez48.15-20",
    referencia: "Ez 48.15-20",
    livro: "Ezequiel",
    capitulo: 48,
    vIni: 15,
    vFim: 20,
    titulo: "Os limites da cidade"
  },
  "ez48.21-22": {
    id: "ez48.21-22",
    referencia: "Ez 48.21-22",
    livro: "Ezequiel",
    capitulo: 48,
    vIni: 21,
    vFim: 22,
    titulo: "Os limites do príncipe"
  },
  "ez48.23-29": {
    id: "ez48.23-29",
    referencia: "Ez 48.23-29",
    livro: "Ezequiel",
    capitulo: 48,
    vIni: 23,
    vFim: 29,
    titulo: "Os limites das outras cinco tribos"
  },
  "ez48.30-35": {
    id: "ez48.30-35",
    referencia: "Ez 48.30-35",
    livro: "Ezequiel",
    capitulo: 48,
    vIni: 30,
    vFim: 35,
    titulo: "As portas da cidade"
  },
  "dn1.1-21": {
    id: "dn1.1-21",
    referencia: "Dn 1.1-21",
    livro: "Daniel",
    capitulo: 1,
    vIni: 1,
    vFim: 21,
    titulo: "A educação de Daniel e de seus companheiros"
  },
  "dn2.1-49": {
    id: "dn2.1-49",
    referencia: "Dn 2.1-49",
    livro: "Daniel",
    capitulo: 2,
    vIni: 1,
    vFim: 49,
    titulo: "Daniel interpreta o sonho de Nabucodonosor"
  },
  "dn3.1-30": {
    id: "dn3.1-30",
    referencia: "Dn 3.1-30",
    livro: "Daniel",
    capitulo: 3,
    vIni: 1,
    vFim: 30,
    titulo: "Livrados os companheiros de Daniel da fornalha de fogo"
  },
  "dn4.1-37": {
    id: "dn4.1-37",
    referencia: "Dn 4.1-37",
    livro: "Daniel",
    capitulo: 4,
    vIni: 1,
    vFim: 37,
    titulo: "A loucura de Nabucodonosor"
  },
  "dn5.1-31": {
    id: "dn5.1-31",
    referencia: "Dn 5.1-31",
    livro: "Daniel",
    capitulo: 5,
    vIni: 1,
    vFim: 31,
    titulo: "A escritura na parede"
  },
  "dn6.1-28": {
    id: "dn6.1-28",
    referencia: "Dn 6.1-28",
    livro: "Daniel",
    capitulo: 6,
    vIni: 1,
    vFim: 28,
    titulo: "Daniel na cova dos leões"
  },
  "dn7.1-28": {
    id: "dn7.1-28",
    referencia: "Dn 7.1-28",
    livro: "Daniel",
    capitulo: 7,
    vIni: 1,
    vFim: 28,
    titulo: "O sonho sobre os quatro animais"
  },
  "dn8.1-27": {
    id: "dn8.1-27",
    referencia: "Dn 8.1-27",
    livro: "Daniel",
    capitulo: 8,
    vIni: 1,
    vFim: 27,
    titulo: "A visão sobre um carneiro e um bode"
  },
  "dn9.1-19": {
    id: "dn9.1-19",
    referencia: "Dn 9.1-19",
    livro: "Daniel",
    capitulo: 9,
    vIni: 1,
    vFim: 19,
    titulo: "A oração de Daniel pelo povo"
  },
  "dn9.20-27": {
    id: "dn9.20-27",
    referencia: "Dn 9.20-27",
    livro: "Daniel",
    capitulo: 9,
    vIni: 20,
    vFim: 27,
    titulo: "A profecia das setenta semanas"
  },
  "dn10.1-9": {
    id: "dn10.1-9",
    referencia: "Dn 10.1-9",
    livro: "Daniel",
    capitulo: 10,
    vIni: 1,
    vFim: 9,
    titulo: "A visão de Daniel no rio Tigre"
  },
  "dn10.10-21": {
    id: "dn10.10-21",
    referencia: "Dn 10.10-21",
    livro: "Daniel",
    capitulo: 10,
    vIni: 10,
    vFim: 21,
    titulo: "Daniel é consolado"
  },
  "dn11.1-45": {
    id: "dn11.1-45",
    referencia: "Dn 11.1-45",
    livro: "Daniel",
    capitulo: 11,
    vIni: 1,
    vFim: 45,
    titulo: "Os reis do Norte e do Sul"
  },
  "dn12.1-13": {
    id: "dn12.1-13",
    referencia: "Dn 12.1-13",
    livro: "Daniel",
    capitulo: 12,
    vIni: 1,
    vFim: 13,
    titulo: "O tempo do fim"
  },
  "os1.1-11": {
    id: "os1.1-11",
    referencia: "Os 1.1-11",
    livro: "Oseias",
    capitulo: 1,
    vIni: 1,
    vFim: 11,
    titulo: "O casamento de Oseias, símbolo da infidelidade de Israel"
  },
  "os2.2-23": {
    id: "os2.2-23",
    referencia: "Os 2.2-23",
    livro: "Oseias",
    capitulo: 2,
    vIni: 2,
    vFim: 23,
    titulo: "A infidelidade do povo e a fidelidade de Deus"
  },
  "os3.1-5": {
    id: "os3.1-5",
    referencia: "Os 3.1-5",
    livro: "Oseias",
    capitulo: 3,
    vIni: 1,
    vFim: 5,
    titulo: "A longanimidade de Deus"
  },
  "os4.1-19": {
    id: "os4.1-19",
    referencia: "Os 4.1-19",
    livro: "Oseias",
    capitulo: 4,
    vIni: 1,
    vFim: 19,
    titulo: "Corrupção geral de Israel"
  },
  "os5.1-14": {
    id: "os5.1-14",
    referencia: "Os 5.1-14",
    livro: "Oseias",
    capitulo: 5,
    vIni: 1,
    vFim: 14,
    titulo: "Repreensão contra sacerdotes e príncipes"
  },
  "os5.15": {
    id: "os5.15",
    referencia: "Os 5.15",
    livro: "Oseias",
    capitulo: 5,
    vIni: 15,
    vFim: 15,
    titulo: "Conversão insincera"
  },
  "os7.1-16": {
    id: "os7.1-16",
    referencia: "Os 7.1-16",
    livro: "Oseias",
    capitulo: 7,
    vIni: 1,
    vFim: 16,
    titulo: "Iniquidade dos reis e príncipes"
  },
  "os8.1-14": {
    id: "os8.1-14",
    referencia: "Os 8.1-14",
    livro: "Oseias",
    capitulo: 8,
    vIni: 1,
    vFim: 14,
    titulo: "O castigo está próximo"
  },
  "os9.1-17": {
    id: "os9.1-17",
    referencia: "Os 9.1-17",
    livro: "Oseias",
    capitulo: 9,
    vIni: 1,
    vFim: 17,
    titulo: "Israel já antes castigado"
  },
  "os10.1-15": {
    id: "os10.1-15",
    referencia: "Os 10.1-15",
    livro: "Oseias",
    capitulo: 10,
    vIni: 1,
    vFim: 15,
    titulo: "Israel semeou malícia e segará destruição"
  },
  "os11.1-12": {
    id: "os11.1-12",
    referencia: "Os 11.1-12",
    livro: "Oseias",
    capitulo: 11,
    vIni: 1,
    vFim: 12,
    titulo: "O amor de Deus Pai. A ingratidão de Israel"
  },
  "os12.1-14": {
    id: "os12.1-14",
    referencia: "Os 12.1-14",
    livro: "Oseias",
    capitulo: 12,
    vIni: 1,
    vFim: 14,
    titulo: "Jacó, modelo para o povo de Israel"
  },
  "os13.1-16": {
    id: "os13.1-16",
    referencia: "Os 13.1-16",
    livro: "Oseias",
    capitulo: 13,
    vIni: 1,
    vFim: 16,
    titulo: "Castigo definitivo"
  },
  "os14.1-8": {
    id: "os14.1-8",
    referencia: "Os 14.1-8",
    livro: "Oseias",
    capitulo: 14,
    vIni: 1,
    vFim: 8,
    titulo: "Promessas de perdão"
  },
  "os14.9": {
    id: "os14.9",
    referencia: "Os 14.9",
    livro: "Oseias",
    capitulo: 14,
    vIni: 9,
    vFim: 9,
    titulo: "Apelo final"
  },
  "jl1.1-20": {
    id: "jl1.1-20",
    referencia: "Jl 1.1-20",
    livro: "Joel",
    capitulo: 1,
    vIni: 1,
    vFim: 20,
    titulo: "A carestia causada pelo gafanhoto e pela seca"
  },
  "jl2.12-27": {
    id: "jl2.12-27",
    referencia: "Jl 2.12-27",
    livro: "Joel",
    capitulo: 2,
    vIni: 12,
    vFim: 27,
    titulo: "A misericórdia do Senhor"
  },
  "jl2.28-32": {
    id: "jl2.28-32",
    referencia: "Jl 2.28-32",
    livro: "Joel",
    capitulo: 2,
    vIni: 28,
    vFim: 32,
    titulo: "Promessa do derramamento do Espírito"
  },
  "jl3.1-17": {
    id: "jl3.1-17",
    referencia: "Jl 3.1-17",
    livro: "Joel",
    capitulo: 3,
    vIni: 1,
    vFim: 17,
    titulo: "Os juízos de Deus sobre as nações inimigas"
  },
  "jl3.18-21": {
    id: "jl3.18-21",
    referencia: "Jl 3.18-21",
    livro: "Joel",
    capitulo: 3,
    vIni: 18,
    vFim: 21,
    titulo: "A restauração de Israel"
  },
  "am1.1-15": {
    id: "am1.1-15",
    referencia: "Am 1.1-15",
    livro: "Amós",
    capitulo: 1,
    vIni: 1,
    vFim: 15,
    titulo: "Ameaças contra diversas nações"
  },
  "am2.4-5": {
    id: "am2.4-5",
    referencia: "Am 2.4-5",
    livro: "Amós",
    capitulo: 2,
    vIni: 4,
    vFim: 5,
    titulo: "Ameaças contra Judá"
  },
  "am2.6-16": {
    id: "am2.6-16",
    referencia: "Am 2.6-16",
    livro: "Amós",
    capitulo: 2,
    vIni: 6,
    vFim: 16,
    titulo: "Ameaças contra Israel"
  },
  "am3.1-15": {
    id: "am3.1-15",
    referencia: "Am 3.1-15",
    livro: "Amós",
    capitulo: 3,
    vIni: 1,
    vFim: 15,
    titulo: "O castigo contra a maldade de Israel"
  },
  "am4.1-3": {
    id: "am4.1-3",
    referencia: "Am 4.1-3",
    livro: "Amós",
    capitulo: 4,
    vIni: 1,
    vFim: 3,
    titulo: "Ameaças contra as mulheres de Samaria"
  },
  "am4.4-13": {
    id: "am4.4-13",
    referencia: "Am 4.4-13",
    livro: "Amós",
    capitulo: 4,
    vIni: 4,
    vFim: 13,
    titulo: "A cegueira espiritual de Israel"
  },
  "am5.1-20": {
    id: "am5.1-20",
    referencia: "Am 5.1-20",
    livro: "Amós",
    capitulo: 5,
    vIni: 1,
    vFim: 20,
    titulo: "Buscai a Deus e vivei"
  },
  "am5.21-27": {
    id: "am5.21-27",
    referencia: "Am 5.21-27",
    livro: "Amós",
    capitulo: 5,
    vIni: 21,
    vFim: 27,
    titulo: "Deus exige justiça e não sacrifícios"
  },
  "am6.1-14": {
    id: "am6.1-14",
    referencia: "Am 6.1-14",
    livro: "Amós",
    capitulo: 6,
    vIni: 1,
    vFim: 14,
    titulo: "A corrupção e a destruição de Israel"
  },
  "am7.1-9": {
    id: "am7.1-9",
    referencia: "Am 7.1-9",
    livro: "Amós",
    capitulo: 7,
    vIni: 1,
    vFim: 9,
    titulo: "A visão do gafanhoto, do fogo e do prumo"
  },
  "am7.10-17": {
    id: "am7.10-17",
    referencia: "Am 7.10-17",
    livro: "Amós",
    capitulo: 7,
    vIni: 10,
    vFim: 17,
    titulo: "Amós acusado como conspirador"
  },
  "am8.1-3": {
    id: "am8.1-3",
    referencia: "Am 8.1-3",
    livro: "Amós",
    capitulo: 8,
    vIni: 1,
    vFim: 3,
    titulo: "A visão de um cesto de frutos"
  },
  "am8.4-14": {
    id: "am8.4-14",
    referencia: "Am 8.4-14",
    livro: "Amós",
    capitulo: 8,
    vIni: 4,
    vFim: 14,
    titulo: "A ruína de Israel está perto"
  },
  "am9.1-10": {
    id: "am9.1-10",
    referencia: "Am 9.1-10",
    livro: "Amós",
    capitulo: 9,
    vIni: 1,
    vFim: 10,
    titulo: "Os juízos de Deus são inevitáveis"
  },
  "am9.11-15": {
    id: "am9.11-15",
    referencia: "Am 9.11-15",
    livro: "Amós",
    capitulo: 9,
    vIni: 11,
    vFim: 15,
    titulo: "Restauração do Israel espiritual"
  },
  "ob1.1-14": {
    id: "ob1.1-14",
    referencia: "Ob 1.1-14",
    livro: "Obadias",
    capitulo: 1,
    vIni: 1,
    vFim: 14,
    titulo: "Os pecados e o castigo de Edom"
  },
  "ob1.15-21": {
    id: "ob1.15-21",
    referencia: "Ob 1.15-21",
    livro: "Obadias",
    capitulo: 1,
    vIni: 15,
    vFim: 21,
    titulo: "A restauração e felicidade de Israel"
  },
  "jn1.1-17": {
    id: "jn1.1-17",
    referencia: "Jn 1.1-17",
    livro: "Jonas",
    capitulo: 1,
    vIni: 1,
    vFim: 17,
    titulo: "A vocação de Jonas, a sua fuga e o seu castigo"
  },
  "jn2.1-10": {
    id: "jn2.1-10",
    referencia: "Jn 2.1-10",
    livro: "Jonas",
    capitulo: 2,
    vIni: 1,
    vFim: 10,
    titulo: "A oração de Jonas no ventre do peixe"
  },
  "jn3.1-4": {
    id: "jn3.1-4",
    referencia: "Jn 3.1-4",
    livro: "Jonas",
    capitulo: 3,
    vIni: 1,
    vFim: 4,
    titulo: "Jonas prega em Nínive"
  },
  "jn3.5-10": {
    id: "jn3.5-10",
    referencia: "Jn 3.5-10",
    livro: "Jonas",
    capitulo: 3,
    vIni: 5,
    vFim: 10,
    titulo: "O arrependimento dos ninivitas"
  },
  "jn4.1-5": {
    id: "jn4.1-5",
    referencia: "Jn 4.1-5",
    livro: "Jonas",
    capitulo: 4,
    vIni: 1,
    vFim: 5,
    titulo: "O descontentamento de Jonas"
  },
  "jn4.6-11": {
    id: "jn4.6-11",
    referencia: "Jn 4.6-11",
    livro: "Jonas",
    capitulo: 4,
    vIni: 6,
    vFim: 11,
    titulo: "A lição do Senhor"
  },
  "mq1.1-16": {
    id: "mq1.1-16",
    referencia: "Mq 1.1-16",
    livro: "Miqueias",
    capitulo: 1,
    vIni: 1,
    vFim: 16,
    titulo: "Ameaças contra Israel e Judá"
  },
  "mq2.1-5": {
    id: "mq2.1-5",
    referencia: "Mq 2.1-5",
    livro: "Miqueias",
    capitulo: 2,
    vIni: 1,
    vFim: 5,
    titulo: "Ai dos opressores gananciosos"
  },
  "mq2.6-11": {
    id: "mq2.6-11",
    referencia: "Mq 2.6-11",
    livro: "Miqueias",
    capitulo: 2,
    vIni: 6,
    vFim: 11,
    titulo: "Contra os falsos profetas"
  },
  "mq2.12-13": {
    id: "mq2.12-13",
    referencia: "Mq 2.12-13",
    livro: "Miqueias",
    capitulo: 2,
    vIni: 12,
    vFim: 13,
    titulo: "O Senhor congrega o restante de Israel"
  },
  "mq3.1-12": {
    id: "mq3.1-12",
    referencia: "Mq 3.1-12",
    livro: "Miqueias",
    capitulo: 3,
    vIni: 1,
    vFim: 12,
    titulo: "Ameaças contra os chefes, os sacerdotes e os falsos profetas"
  },
  "mq4.1-13": {
    id: "mq4.1-13",
    referencia: "Mq 4.1-13",
    livro: "Miqueias",
    capitulo: 4,
    vIni: 1,
    vFim: 13,
    titulo: "O anúncio do chamamento dos gentios"
  },
  "mq5.2-15": {
    id: "mq5.2-15",
    referencia: "Mq 5.2-15",
    livro: "Miqueias",
    capitulo: 5,
    vIni: 2,
    vFim: 15,
    titulo: "O nascimento do Messias e o seu reinado"
  },
  "mq6.1-8": {
    id: "mq6.1-8",
    referencia: "Mq 6.1-8",
    livro: "Miqueias",
    capitulo: 6,
    vIni: 1,
    vFim: 8,
    titulo: "Deus e seu povo em juízo"
  },
  "mq6.9-16": {
    id: "mq6.9-16",
    referencia: "Mq 6.9-16",
    livro: "Miqueias",
    capitulo: 6,
    vIni: 9,
    vFim: 16,
    titulo: "A injustiça terá seu castigo"
  },
  "mq7.1-7": {
    id: "mq7.1-7",
    referencia: "Mq 7.1-7",
    livro: "Miqueias",
    capitulo: 7,
    vIni: 1,
    vFim: 7,
    titulo: "A corrupção moral de Israel"
  },
  "mq7.8-20": {
    id: "mq7.8-20",
    referencia: "Mq 7.8-20",
    livro: "Miqueias",
    capitulo: 7,
    vIni: 8,
    vFim: 20,
    titulo: "O Senhor se compadece de Israel"
  },
  "na1.1-15": {
    id: "na1.1-15",
    referencia: "Na 1.1-15",
    livro: "Naum",
    capitulo: 1,
    vIni: 1,
    vFim: 15,
    titulo: "A ira e a misericórdia de Deus"
  },
  "na2.1-13": {
    id: "na2.1-13",
    referencia: "Na 2.1-13",
    livro: "Naum",
    capitulo: 2,
    vIni: 1,
    vFim: 13,
    titulo: "O cerco e a tomada de Nínive"
  },
  "na3.1-19": {
    id: "na3.1-19",
    referencia: "Na 3.1-19",
    livro: "Naum",
    capitulo: 3,
    vIni: 1,
    vFim: 19,
    titulo: "A ruína completa de Nínive"
  },
  "hc1.1-4": {
    id: "hc1.1-4",
    referencia: "Hc 1.1-4",
    livro: "Habacuque",
    capitulo: 1,
    vIni: 1,
    vFim: 4,
    titulo: "A iniquidade de Judá"
  },
  "hc1.5-11": {
    id: "hc1.5-11",
    referencia: "Hc 1.5-11",
    livro: "Habacuque",
    capitulo: 1,
    vIni: 5,
    vFim: 11,
    titulo: "Judá será castigado pelos caldeus"
  },
  "hc1.12-17": {
    id: "hc1.12-17",
    referencia: "Hc 1.12-17",
    livro: "Habacuque",
    capitulo: 1,
    vIni: 12,
    vFim: 17,
    titulo: "A intercessão do profeta"
  },
  "hc2.1-5": {
    id: "hc2.1-5",
    referencia: "Hc 2.1-5",
    livro: "Habacuque",
    capitulo: 2,
    vIni: 1,
    vFim: 5,
    titulo: "A resposta do Senhor"
  },
  "hc2.6-20": {
    id: "hc2.6-20",
    referencia: "Hc 2.6-20",
    livro: "Habacuque",
    capitulo: 2,
    vIni: 6,
    vFim: 20,
    titulo: "Cinco ais sobre os caldeus"
  },
  "hc3.1-19": {
    id: "hc3.1-19",
    referencia: "Hc 3.1-19",
    livro: "Habacuque",
    capitulo: 3,
    vIni: 1,
    vFim: 19,
    titulo: "A oração de Habacuque"
  },
  "sf1.1-6": {
    id: "sf1.1-6",
    referencia: "Sf 1.1-6",
    livro: "Sofonias",
    capitulo: 1,
    vIni: 1,
    vFim: 6,
    titulo: "Ameaças contra Judá e Jerusalém"
  },
  "sf1.7-18": {
    id: "sf1.7-18",
    referencia: "Sf 1.7-18",
    livro: "Sofonias",
    capitulo: 1,
    vIni: 7,
    vFim: 18,
    titulo: "O dia da ira do Senhor"
  },
  "sf2.1-7": {
    id: "sf2.1-7",
    referencia: "Sf 2.1-7",
    livro: "Sofonias",
    capitulo: 2,
    vIni: 1,
    vFim: 7,
    titulo: "Ameaças contra os filisteus"
  },
  "sf2.8-11": {
    id: "sf2.8-11",
    referencia: "Sf 2.8-11",
    livro: "Sofonias",
    capitulo: 2,
    vIni: 8,
    vFim: 11,
    titulo: "Ameaças contra Moabe e Amom"
  },
  "sf2.12-15": {
    id: "sf2.12-15",
    referencia: "Sf 2.12-15",
    livro: "Sofonias",
    capitulo: 2,
    vIni: 12,
    vFim: 15,
    titulo: "Ameaças contra a Etiópia e a Assíria"
  },
  "sf3.1-7": {
    id: "sf3.1-7",
    referencia: "Sf 3.1-7",
    livro: "Sofonias",
    capitulo: 3,
    vIni: 1,
    vFim: 7,
    titulo: "Ameaças contra Jerusalém"
  },
  "sf3.8-20": {
    id: "sf3.8-20",
    referencia: "Sf 3.8-20",
    livro: "Sofonias",
    capitulo: 3,
    vIni: 8,
    vFim: 20,
    titulo: "A salvação da filha de Jerusalém"
  },
  "ag1.1-11": {
    id: "ag1.1-11",
    referencia: "Ag 1.1-11",
    livro: "Ageu",
    capitulo: 1,
    vIni: 1,
    vFim: 11,
    titulo: "Ageu exorta o povo a reedificar o templo"
  },
  "ag1.12-15": {
    id: "ag1.12-15",
    referencia: "Ag 1.12-15",
    livro: "Ageu",
    capitulo: 1,
    vIni: 12,
    vFim: 15,
    titulo: "O povo atende ao Senhor"
  },
  "ag2.1-9": {
    id: "ag2.1-9",
    referencia: "Ag 2.1-9",
    livro: "Ageu",
    capitulo: 2,
    vIni: 1,
    vFim: 9,
    titulo: "A glória do segundo templo"
  },
  "ag2.10-19": {
    id: "ag2.10-19",
    referencia: "Ag 2.10-19",
    livro: "Ageu",
    capitulo: 2,
    vIni: 10,
    vFim: 19,
    titulo: "Repreendida a infidelidade do povo"
  },
  "ag2.20-23": {
    id: "ag2.20-23",
    referencia: "Ag 2.20-23",
    livro: "Ageu",
    capitulo: 2,
    vIni: 20,
    vFim: 23,
    titulo: "A promessa do Senhor a Zorobabel"
  },
  "zc1.1-6": {
    id: "zc1.1-6",
    referencia: "Zc 1.1-6",
    livro: "Zacarias",
    capitulo: 1,
    vIni: 1,
    vFim: 6,
    titulo: "Exortação ao arrependimento"
  },
  "zc1.7-17": {
    id: "zc1.7-17",
    referencia: "Zc 1.7-17",
    livro: "Zacarias",
    capitulo: 1,
    vIni: 7,
    vFim: 17,
    titulo: "A primeira visão: os cavalos"
  },
  "zc1.18-21": {
    id: "zc1.18-21",
    referencia: "Zc 1.18-21",
    livro: "Zacarias",
    capitulo: 1,
    vIni: 18,
    vFim: 21,
    titulo: "A segunda visão: os quatro chifres e os quatro ferreiros"
  },
  "zc2.1-5": {
    id: "zc2.1-5",
    referencia: "Zc 2.1-5",
    livro: "Zacarias",
    capitulo: 2,
    vIni: 1,
    vFim: 5,
    titulo: "A terceira visão: Jerusalém é medida"
  },
  "zc2.6-13": {
    id: "zc2.6-13",
    referencia: "Zc 2.6-13",
    livro: "Zacarias",
    capitulo: 2,
    vIni: 6,
    vFim: 13,
    titulo: "Israel exortado a voltar para Sião"
  },
  "zc3.1-10": {
    id: "zc3.1-10",
    referencia: "Zc 3.1-10",
    livro: "Zacarias",
    capitulo: 3,
    vIni: 1,
    vFim: 10,
    titulo: "A quarta visão: o sumo sacerdote Josué"
  },
  "zc4.1-14": {
    id: "zc4.1-14",
    referencia: "Zc 4.1-14",
    livro: "Zacarias",
    capitulo: 4,
    vIni: 1,
    vFim: 14,
    titulo: "A quinta visão: o candelabro de ouro entre duas oliveiras"
  },
  "zc5.1-4": {
    id: "zc5.1-4",
    referencia: "Zc 5.1-4",
    livro: "Zacarias",
    capitulo: 5,
    vIni: 1,
    vFim: 4,
    titulo: "A sexta visão: o rolo voante"
  },
  "zc5.5-11": {
    id: "zc5.5-11",
    referencia: "Zc 5.5-11",
    livro: "Zacarias",
    capitulo: 5,
    vIni: 5,
    vFim: 11,
    titulo: "A sétima visão: a mulher e o efa"
  },
  "zc6.1-8": {
    id: "zc6.1-8",
    referencia: "Zc 6.1-8",
    livro: "Zacarias",
    capitulo: 6,
    vIni: 1,
    vFim: 8,
    titulo: "A oitava visão: os quatro carros"
  },
  "zc6.9-15": {
    id: "zc6.9-15",
    referencia: "Zc 6.9-15",
    livro: "Zacarias",
    capitulo: 6,
    vIni: 9,
    vFim: 15,
    titulo: "A coroação de Josué. O Renovo"
  },
  "zc7.1-7": {
    id: "zc7.1-7",
    referencia: "Zc 7.1-7",
    livro: "Zacarias",
    capitulo: 7,
    vIni: 1,
    vFim: 7,
    titulo: "O jejum que não agrada a Deus"
  },
  "zc7.8-14": {
    id: "zc7.8-14",
    referencia: "Zc 7.8-14",
    livro: "Zacarias",
    capitulo: 7,
    vIni: 8,
    vFim: 14,
    titulo: "A desobediência foi a causa do cativeiro"
  },
  "zc8.1-23": {
    id: "zc8.1-23",
    referencia: "Zc 8.1-23",
    livro: "Zacarias",
    capitulo: 8,
    vIni: 1,
    vFim: 23,
    titulo: "Sião restaurada"
  },
  "zc9.1-8": {
    id: "zc9.1-8",
    referencia: "Zc 9.1-8",
    livro: "Zacarias",
    capitulo: 9,
    vIni: 1,
    vFim: 8,
    titulo: "O castigo de diversos povos"
  },
  "zc9.9-17": {
    id: "zc9.9-17",
    referencia: "Zc 9.9-17",
    livro: "Zacarias",
    capitulo: 9,
    vIni: 9,
    vFim: 17,
    titulo: "O Rei vem de Sião"
  },
  "zc10.1-12": {
    id: "zc10.1-12",
    referencia: "Zc 10.1-12",
    livro: "Zacarias",
    capitulo: 10,
    vIni: 1,
    vFim: 12,
    titulo: "Deus abençoará Judá e Israel"
  },
  "zc11.4-14": {
    id: "zc11.4-14",
    referencia: "Zc 11.4-14",
    livro: "Zacarias",
    capitulo: 11,
    vIni: 4,
    vFim: 14,
    titulo: "A parábola do bom pastor"
  },
  "zc11.15-17": {
    id: "zc11.15-17",
    referencia: "Zc 11.15-17",
    livro: "Zacarias",
    capitulo: 11,
    vIni: 15,
    vFim: 17,
    titulo: "A parábola do pastor insensato"
  },
  "zc12.1-9": {
    id: "zc12.1-9",
    referencia: "Zc 12.1-9",
    livro: "Zacarias",
    capitulo: 12,
    vIni: 1,
    vFim: 9,
    titulo: "A salvação de Jerusalém"
  },
  "zc12.10-14": {
    id: "zc12.10-14",
    referencia: "Zc 12.10-14",
    livro: "Zacarias",
    capitulo: 12,
    vIni: 10,
    vFim: 14,
    titulo: "O arrependimento dos habitantes de Jerusalém"
  },
  "zc13.1-6": {
    id: "zc13.1-6",
    referencia: "Zc 13.1-6",
    livro: "Zacarias",
    capitulo: 13,
    vIni: 1,
    vFim: 6,
    titulo: "Eliminados os ídolos e os falsos profetas"
  },
  "zc13.7-9": {
    id: "zc13.7-9",
    referencia: "Zc 13.7-9",
    livro: "Zacarias",
    capitulo: 13,
    vIni: 7,
    vFim: 9,
    titulo: "Ferido o pastor de Deus"
  },
  "zc14.1-15": {
    id: "zc14.1-15",
    referencia: "Zc 14.1-15",
    livro: "Zacarias",
    capitulo: 14,
    vIni: 1,
    vFim: 15,
    titulo: "O juízo sobre Jerusalém e seus opressores"
  },
  "zc14.16-21": {
    id: "zc14.16-21",
    referencia: "Zc 14.16-21",
    livro: "Zacarias",
    capitulo: 14,
    vIni: 16,
    vFim: 21,
    titulo: "A glória futura da cidade de Deus"
  },
  "ml1.1-5": {
    id: "ml1.1-5",
    referencia: "Ml 1.1-5",
    livro: "Malaquias",
    capitulo: 1,
    vIni: 1,
    vFim: 5,
    titulo: "O amor do Senhor por Jacó"
  },
  "ml1.6-14": {
    id: "ml1.6-14",
    referencia: "Ml 1.6-14",
    livro: "Malaquias",
    capitulo: 1,
    vIni: 6,
    vFim: 14,
    titulo: "O Senhor reprova os sacerdotes"
  },
  "ml2.1-9": {
    id: "ml2.1-9",
    referencia: "Ml 2.1-9",
    livro: "Malaquias",
    capitulo: 2,
    vIni: 1,
    vFim: 9,
    titulo: "O castigo dos sacerdotes"
  },
  "ml2.10-16": {
    id: "ml2.10-16",
    referencia: "Ml 2.10-16",
    livro: "Malaquias",
    capitulo: 2,
    vIni: 10,
    vFim: 16,
    titulo: "Advertência contra a infidelidade conjugal"
  },
  "ml2.17": {
    id: "ml2.17",
    referencia: "Ml 2.17",
    livro: "Malaquias",
    capitulo: 2,
    vIni: 17,
    vFim: 17,
    titulo: "A vinda do Senhor precedida pelo seu Anjo"
  },
  "ml3.6-12": {
    id: "ml3.6-12",
    referencia: "Ml 3.6-12",
    livro: "Malaquias",
    capitulo: 3,
    vIni: 6,
    vFim: 12,
    titulo: "O roubo no tocante aos dízimos e às ofertas"
  },
  "ml3.13-18": {
    id: "ml3.13-18",
    referencia: "Ml 3.13-18",
    livro: "Malaquias",
    capitulo: 3,
    vIni: 13,
    vFim: 18,
    titulo: "A diferença entre o justo e o perverso"
  },
  "ml4.1-6": {
    id: "ml4.1-6",
    referencia: "Ml 4.1-6",
    livro: "Malaquias",
    capitulo: 4,
    vIni: 1,
    vFim: 6,
    titulo: "O sol da justiça e seu precursor"
  },
  "mt1.1-18": {
    id: "mt1.1-18",
    referencia: "Mt 1.1-18",
    livro: "Mateus",
    capitulo: 1,
    vIni: 1,
    vFim: 18,
    titulo: "A genealogia de Jesus Cristo"
  },
  "mt1.19-25": {
    id: "mt1.19-25",
    referencia: "Mt 1.19-25",
    livro: "Mateus",
    capitulo: 1,
    vIni: 19,
    vFim: 25,
    titulo: "O nascimento de Jesus Cristo"
  },
  "mt2.1-12": {
    id: "mt2.1-12",
    referencia: "Mt 2.1-12",
    livro: "Mateus",
    capitulo: 2,
    vIni: 1,
    vFim: 12,
    titulo: "A visita dos magos"
  },
  "mt2.13-15": {
    id: "mt2.13-15",
    referencia: "Mt 2.13-15",
    livro: "Mateus",
    capitulo: 2,
    vIni: 13,
    vFim: 15,
    titulo: "A fuga para o Egito"
  },
  "mt2.16-18": {
    id: "mt2.16-18",
    referencia: "Mt 2.16-18",
    livro: "Mateus",
    capitulo: 2,
    vIni: 16,
    vFim: 18,
    titulo: "A matança dos inocentes"
  },
  "mt2.19-23": {
    id: "mt2.19-23",
    referencia: "Mt 2.19-23",
    livro: "Mateus",
    capitulo: 2,
    vIni: 19,
    vFim: 23,
    titulo: "A volta do Egito"
  },
  "mt3.1-10": {
    id: "mt3.1-10",
    referencia: "Mt 3.1-10",
    livro: "Mateus",
    capitulo: 3,
    vIni: 1,
    vFim: 10,
    titulo: "A pregação de João Batista"
  },
  "mt3.11-12": {
    id: "mt3.11-12",
    referencia: "Mt 3.11-12",
    livro: "Mateus",
    capitulo: 3,
    vIni: 11,
    vFim: 12,
    titulo: "João dá testemunho de Cristo"
  },
  "mt3.13-17": {
    id: "mt3.13-17",
    referencia: "Mt 3.13-17",
    livro: "Mateus",
    capitulo: 3,
    vIni: 13,
    vFim: 17,
    titulo: "O batismo de Jesus"
  },
  "mt4.1-11": {
    id: "mt4.1-11",
    referencia: "Mt 4.1-11",
    livro: "Mateus",
    capitulo: 4,
    vIni: 1,
    vFim: 11,
    titulo: "A tentação de Jesus"
  },
  "mt4.12-17": {
    id: "mt4.12-17",
    referencia: "Mt 4.12-17",
    livro: "Mateus",
    capitulo: 4,
    vIni: 12,
    vFim: 17,
    titulo: "Jesus volta para a Galileia"
  },
  "mt4.18-22": {
    id: "mt4.18-22",
    referencia: "Mt 4.18-22",
    livro: "Mateus",
    capitulo: 4,
    vIni: 18,
    vFim: 22,
    titulo: "A vocação de discípulos"
  },
  "mt4.23-25": {
    id: "mt4.23-25",
    referencia: "Mt 4.23-25",
    livro: "Mateus",
    capitulo: 4,
    vIni: 23,
    vFim: 25,
    titulo: "Jesus prega por toda a Galileia e cura muitos enfermos"
  },
  "mt5.1-12": {
    id: "mt5.1-12",
    referencia: "Mt 5.1-12",
    livro: "Mateus",
    capitulo: 5,
    vIni: 1,
    vFim: 12,
    titulo: "O sermão do monte"
  },
  "mt5.13": {
    id: "mt5.13",
    referencia: "Mt 5.13",
    livro: "Mateus",
    capitulo: 5,
    vIni: 13,
    vFim: 13,
    titulo: "Os discípulos, o sal da terra"
  },
  "mt5.14-16": {
    id: "mt5.14-16",
    referencia: "Mt 5.14-16",
    livro: "Mateus",
    capitulo: 5,
    vIni: 14,
    vFim: 16,
    titulo: "Os discípulos, a luz do mundo"
  },
  "mt5.17-20": {
    id: "mt5.17-20",
    referencia: "Mt 5.17-20",
    livro: "Mateus",
    capitulo: 5,
    vIni: 17,
    vFim: 20,
    titulo: "Jesus não veio revogar a Lei, mas cumprir"
  },
  "mt5.21-26": {
    id: "mt5.21-26",
    referencia: "Mt 5.21-26",
    livro: "Mateus",
    capitulo: 5,
    vIni: 21,
    vFim: 26,
    titulo: "Jesus completa o que foi dito aos antigos Do homicídio"
  },
  "mt5.27-32": {
    id: "mt5.27-32",
    referencia: "Mt 5.27-32",
    livro: "Mateus",
    capitulo: 5,
    vIni: 27,
    vFim: 32,
    titulo: "Do adultério"
  },
  "mt5.33-37": {
    id: "mt5.33-37",
    referencia: "Mt 5.33-37",
    livro: "Mateus",
    capitulo: 5,
    vIni: 33,
    vFim: 37,
    titulo: "Dos juramentos"
  },
  "mt5.39-42": {
    id: "mt5.39-42",
    referencia: "Mt 5.39-42",
    livro: "Mateus",
    capitulo: 5,
    vIni: 39,
    vFim: 42,
    titulo: "Da vingança"
  },
  "mt5.43-48": {
    id: "mt5.43-48",
    referencia: "Mt 5.43-48",
    livro: "Mateus",
    capitulo: 5,
    vIni: 43,
    vFim: 48,
    titulo: "Do amor ao próximo"
  },
  "mt6.1": {
    id: "mt6.1",
    referencia: "Mt 6.1",
    livro: "Mateus",
    capitulo: 6,
    vIni: 1,
    vFim: 1,
    titulo: "A prática da justiça"
  },
  "mt6.2-4": {
    id: "mt6.2-4",
    referencia: "Mt 6.2-4",
    livro: "Mateus",
    capitulo: 6,
    vIni: 2,
    vFim: 4,
    titulo: "Como se deve dar esmolas"
  },
  "mt6.5-8": {
    id: "mt6.5-8",
    referencia: "Mt 6.5-8",
    livro: "Mateus",
    capitulo: 6,
    vIni: 5,
    vFim: 8,
    titulo: "Como se deve orar"
  },
  "mt6.9-16": {
    id: "mt6.9-16",
    referencia: "Mt 6.9-16",
    livro: "Mateus",
    capitulo: 6,
    vIni: 9,
    vFim: 16,
    titulo: "A oração dominical"
  },
  "mt6.17-18": {
    id: "mt6.17-18",
    referencia: "Mt 6.17-18",
    livro: "Mateus",
    capitulo: 6,
    vIni: 17,
    vFim: 18,
    titulo: "Como jejuar"
  },
  "mt6.19-21": {
    id: "mt6.19-21",
    referencia: "Mt 6.19-21",
    livro: "Mateus",
    capitulo: 6,
    vIni: 19,
    vFim: 21,
    titulo: "Os tesouros no céu"
  },
  "mt6.22-23": {
    id: "mt6.22-23",
    referencia: "Mt 6.22-23",
    livro: "Mateus",
    capitulo: 6,
    vIni: 22,
    vFim: 23,
    titulo: "A luz e as trevas"
  },
  "mt6.24": {
    id: "mt6.24",
    referencia: "Mt 6.24",
    livro: "Mateus",
    capitulo: 6,
    vIni: 24,
    vFim: 24,
    titulo: "Os dois senhores"
  },
  "mt6.25-34": {
    id: "mt6.25-34",
    referencia: "Mt 6.25-34",
    livro: "Mateus",
    capitulo: 6,
    vIni: 25,
    vFim: 34,
    titulo: "A ansiosa solicitude pela vida"
  },
  "mt7.1-5": {
    id: "mt7.1-5",
    referencia: "Mt 7.1-5",
    livro: "Mateus",
    capitulo: 7,
    vIni: 1,
    vFim: 5,
    titulo: "O juízo temerário é proibido"
  },
  "mt7.6": {
    id: "mt7.6",
    referencia: "Mt 7.6",
    livro: "Mateus",
    capitulo: 7,
    vIni: 6,
    vFim: 6,
    titulo: "Não deis o que é santo aos cães"
  },
  "mt7.7-12": {
    id: "mt7.7-12",
    referencia: "Mt 7.7-12",
    livro: "Mateus",
    capitulo: 7,
    vIni: 7,
    vFim: 12,
    titulo: "Jesus incita a orar"
  },
  "mt7.13-14": {
    id: "mt7.13-14",
    referencia: "Mt 7.13-14",
    livro: "Mateus",
    capitulo: 7,
    vIni: 13,
    vFim: 14,
    titulo: "As duas estradas"
  },
  "mt7.15-23": {
    id: "mt7.15-23",
    referencia: "Mt 7.15-23",
    livro: "Mateus",
    capitulo: 7,
    vIni: 15,
    vFim: 23,
    titulo: "Os falsos profetas"
  },
  "mt7.24-27": {
    id: "mt7.24-27",
    referencia: "Mt 7.24-27",
    livro: "Mateus",
    capitulo: 7,
    vIni: 24,
    vFim: 27,
    titulo: "Os dois fundamentos"
  },
  "mt7.28-29": {
    id: "mt7.28-29",
    referencia: "Mt 7.28-29",
    livro: "Mateus",
    capitulo: 7,
    vIni: 28,
    vFim: 29,
    titulo: "O fim do sermão do monte"
  },
  "mt8.1-4": {
    id: "mt8.1-4",
    referencia: "Mt 8.1-4",
    livro: "Mateus",
    capitulo: 8,
    vIni: 1,
    vFim: 4,
    titulo: "A cura de um leproso"
  },
  "mt8.5-13": {
    id: "mt8.5-13",
    referencia: "Mt 8.5-13",
    livro: "Mateus",
    capitulo: 8,
    vIni: 5,
    vFim: 13,
    titulo: "A cura do criado de um centurião"
  },
  "mt8.14-15": {
    id: "mt8.14-15",
    referencia: "Mt 8.14-15",
    livro: "Mateus",
    capitulo: 8,
    vIni: 14,
    vFim: 15,
    titulo: "A cura da sogra de Pedro"
  },
  "mt8.16-17": {
    id: "mt8.16-17",
    referencia: "Mt 8.16-17",
    livro: "Mateus",
    capitulo: 8,
    vIni: 16,
    vFim: 17,
    titulo: "Muitas outras curas"
  },
  "mt8.18-22": {
    id: "mt8.18-22",
    referencia: "Mt 8.18-22",
    livro: "Mateus",
    capitulo: 8,
    vIni: 18,
    vFim: 22,
    titulo: "Jesus põe à prova os que querem segui-lo"
  },
  "mt8.23-27": {
    id: "mt8.23-27",
    referencia: "Mt 8.23-27",
    livro: "Mateus",
    capitulo: 8,
    vIni: 23,
    vFim: 27,
    titulo: "Jesus acalma uma tempestade"
  },
  "mt8.28-34": {
    id: "mt8.28-34",
    referencia: "Mt 8.28-34",
    livro: "Mateus",
    capitulo: 8,
    vIni: 28,
    vFim: 34,
    titulo: "A cura de dois endemoninhados gadarenos"
  },
  "mt9.1-8": {
    id: "mt9.1-8",
    referencia: "Mt 9.1-8",
    livro: "Mateus",
    capitulo: 9,
    vIni: 1,
    vFim: 8,
    titulo: "A cura de um paralítico em Cafarnaum"
  },
  "mt9.9": {
    id: "mt9.9",
    referencia: "Mt 9.9",
    livro: "Mateus",
    capitulo: 9,
    vIni: 9,
    vFim: 9,
    titulo: "A vocação de Mateus"
  },
  "mt9.10-13": {
    id: "mt9.10-13",
    referencia: "Mt 9.10-13",
    livro: "Mateus",
    capitulo: 9,
    vIni: 10,
    vFim: 13,
    titulo: "Jesus come com pecadores"
  },
  "mt9.14-17": {
    id: "mt9.14-17",
    referencia: "Mt 9.14-17",
    livro: "Mateus",
    capitulo: 9,
    vIni: 14,
    vFim: 17,
    titulo: "Do jejum"
  },
  "mt9.18": {
    id: "mt9.18",
    referencia: "Mt 9.18",
    livro: "Mateus",
    capitulo: 9,
    vIni: 18,
    vFim: 18,
    titulo: "O pedido de um chefe"
  },
  "mt9.19-22": {
    id: "mt9.19-22",
    referencia: "Mt 9.19-22",
    livro: "Mateus",
    capitulo: 9,
    vIni: 19,
    vFim: 22,
    titulo: "A cura de uma mulher enferma"
  },
  "mt9.23-26": {
    id: "mt9.23-26",
    referencia: "Mt 9.23-26",
    livro: "Mateus",
    capitulo: 9,
    vIni: 23,
    vFim: 26,
    titulo: "A ressurreição da filha de Jairo"
  },
  "mt9.27-31": {
    id: "mt9.27-31",
    referencia: "Mt 9.27-31",
    livro: "Mateus",
    capitulo: 9,
    vIni: 27,
    vFim: 31,
    titulo: "A cura de dois cegos"
  },
  "mt9.32-34": {
    id: "mt9.32-34",
    referencia: "Mt 9.32-34",
    livro: "Mateus",
    capitulo: 9,
    vIni: 32,
    vFim: 34,
    titulo: "A cura de um mudo endemoninhado. A blasfêmia dos fariseus"
  },
  "mt9.35-38": {
    id: "mt9.35-38",
    referencia: "Mt 9.35-38",
    livro: "Mateus",
    capitulo: 9,
    vIni: 35,
    vFim: 38,
    titulo: "Jesus ia por toda parte fazendo o bem. A seara e os trabalhadores"
  },
  "mt10.1-4": {
    id: "mt10.1-4",
    referencia: "Mt 10.1-4",
    livro: "Mateus",
    capitulo: 10,
    vIni: 1,
    vFim: 4,
    titulo: "A escolha dos doze apóstolos Os seus nomes"
  },
  "mt10.5-15": {
    id: "mt10.5-15",
    referencia: "Mt 10.5-15",
    livro: "Mateus",
    capitulo: 10,
    vIni: 5,
    vFim: 15,
    titulo: "As instruções para os doze"
  },
  "mt10.16-23": {
    id: "mt10.16-23",
    referencia: "Mt 10.16-23",
    livro: "Mateus",
    capitulo: 10,
    vIni: 16,
    vFim: 23,
    titulo: "As admoestações"
  },
  "mt10.24-33": {
    id: "mt10.24-33",
    referencia: "Mt 10.24-33",
    livro: "Mateus",
    capitulo: 10,
    vIni: 24,
    vFim: 33,
    titulo: "Os estímulos"
  },
  "mt10.34-39": {
    id: "mt10.34-39",
    referencia: "Mt 10.34-39",
    livro: "Mateus",
    capitulo: 10,
    vIni: 34,
    vFim: 39,
    titulo: "As dificuldades"
  },
  "mt10.40-42": {
    id: "mt10.40-42",
    referencia: "Mt 10.40-42",
    livro: "Mateus",
    capitulo: 10,
    vIni: 40,
    vFim: 42,
    titulo: "As recompensas"
  },
  "mt11.1": {
    id: "mt11.1",
    referencia: "Mt 11.1",
    livro: "Mateus",
    capitulo: 11,
    vIni: 1,
    vFim: 1,
    titulo: "Jesus prega nas cidades"
  },
  "mt11.2-6": {
    id: "mt11.2-6",
    referencia: "Mt 11.2-6",
    livro: "Mateus",
    capitulo: 11,
    vIni: 2,
    vFim: 6,
    titulo: "João envia mensageiros a Jesus"
  },
  "mt11.7-19": {
    id: "mt11.7-19",
    referencia: "Mt 11.7-19",
    livro: "Mateus",
    capitulo: 11,
    vIni: 7,
    vFim: 19,
    titulo: "Jesus dá testemunho de João"
  },
  "mt11.20-24": {
    id: "mt11.20-24",
    referencia: "Mt 11.20-24",
    livro: "Mateus",
    capitulo: 11,
    vIni: 20,
    vFim: 24,
    titulo: "Ai das cidades impenitentes!"
  },
  "mt11.25-27": {
    id: "mt11.25-27",
    referencia: "Mt 11.25-27",
    livro: "Mateus",
    capitulo: 11,
    vIni: 25,
    vFim: 27,
    titulo: "Jesus, o Salvador dos humildes"
  },
  "mt11.28-30": {
    id: "mt11.28-30",
    referencia: "Mt 11.28-30",
    livro: "Mateus",
    capitulo: 11,
    vIni: 28,
    vFim: 30,
    titulo: "Vinde a mim"
  },
  "mt12.1-8": {
    id: "mt12.1-8",
    referencia: "Mt 12.1-8",
    livro: "Mateus",
    capitulo: 12,
    vIni: 1,
    vFim: 8,
    titulo: "Jesus é senhor do sábado"
  },
  "mt12.9-14": {
    id: "mt12.9-14",
    referencia: "Mt 12.9-14",
    livro: "Mateus",
    capitulo: 12,
    vIni: 9,
    vFim: 14,
    titulo: "O homem da mão ressequida"
  },
  "mt12.15-21": {
    id: "mt12.15-21",
    referencia: "Mt 12.15-21",
    livro: "Mateus",
    capitulo: 12,
    vIni: 15,
    vFim: 21,
    titulo: "Jesus se retira"
  },
  "mt12.22-32": {
    id: "mt12.22-32",
    referencia: "Mt 12.22-32",
    livro: "Mateus",
    capitulo: 12,
    vIni: 22,
    vFim: 32,
    titulo: "A cura de um endemoninhado cego e mudo. A blasfêmia dos fariseus. Jesus se defende"
  },
  "mt12.33-37": {
    id: "mt12.33-37",
    referencia: "Mt 12.33-37",
    livro: "Mateus",
    capitulo: 12,
    vIni: 33,
    vFim: 37,
    titulo: "Árvores e seus frutos"
  },
  "mt12.38-42": {
    id: "mt12.38-42",
    referencia: "Mt 12.38-42",
    livro: "Mateus",
    capitulo: 12,
    vIni: 38,
    vFim: 42,
    titulo: "O sinal de Jonas"
  },
  "mt12.43-45": {
    id: "mt12.43-45",
    referencia: "Mt 12.43-45",
    livro: "Mateus",
    capitulo: 12,
    vIni: 43,
    vFim: 45,
    titulo: "A estratégia de Satanás"
  },
  "mt12.46-50": {
    id: "mt12.46-50",
    referencia: "Mt 12.46-50",
    livro: "Mateus",
    capitulo: 12,
    vIni: 46,
    vFim: 50,
    titulo: "A família de Jesus"
  },
  "mt13.1-9": {
    id: "mt13.1-9",
    referencia: "Mt 13.1-9",
    livro: "Mateus",
    capitulo: 13,
    vIni: 1,
    vFim: 9,
    titulo: "A parábola do semeador"
  },
  "mt13.10-23": {
    id: "mt13.10-23",
    referencia: "Mt 13.10-23",
    livro: "Mateus",
    capitulo: 13,
    vIni: 10,
    vFim: 23,
    titulo: "A explicação da parábola"
  },
  "mt13.24-30": {
    id: "mt13.24-30",
    referencia: "Mt 13.24-30",
    livro: "Mateus",
    capitulo: 13,
    vIni: 24,
    vFim: 30,
    titulo: "A parábola do joio"
  },
  "mt13.31-32": {
    id: "mt13.31-32",
    referencia: "Mt 13.31-32",
    livro: "Mateus",
    capitulo: 13,
    vIni: 31,
    vFim: 32,
    titulo: "A parábola do grão de mostarda"
  },
  "mt13.33": {
    id: "mt13.33",
    referencia: "Mt 13.33",
    livro: "Mateus",
    capitulo: 13,
    vIni: 33,
    vFim: 33,
    titulo: "A parábola do fermento"
  },
  "mt13.34-35": {
    id: "mt13.34-35",
    referencia: "Mt 13.34-35",
    livro: "Mateus",
    capitulo: 13,
    vIni: 34,
    vFim: 35,
    titulo: "Por que Jesus falou por parábolas"
  },
  "mt13.36-43": {
    id: "mt13.36-43",
    referencia: "Mt 13.36-43",
    livro: "Mateus",
    capitulo: 13,
    vIni: 36,
    vFim: 43,
    titulo: "A explicação da parábola do joio"
  },
  "mt13.44": {
    id: "mt13.44",
    referencia: "Mt 13.44",
    livro: "Mateus",
    capitulo: 13,
    vIni: 44,
    vFim: 44,
    titulo: "A parábola do tesouro escondido"
  },
  "mt13.45-46": {
    id: "mt13.45-46",
    referencia: "Mt 13.45-46",
    livro: "Mateus",
    capitulo: 13,
    vIni: 45,
    vFim: 46,
    titulo: "A parábola da pérola"
  },
  "mt13.47-50": {
    id: "mt13.47-50",
    referencia: "Mt 13.47-50",
    livro: "Mateus",
    capitulo: 13,
    vIni: 47,
    vFim: 50,
    titulo: "A parábola da rede"
  },
  "mt13.51-52": {
    id: "mt13.51-52",
    referencia: "Mt 13.51-52",
    livro: "Mateus",
    capitulo: 13,
    vIni: 51,
    vFim: 52,
    titulo: "Coisas novas e velhas"
  },
  "mt13.53-58": {
    id: "mt13.53-58",
    referencia: "Mt 13.53-58",
    livro: "Mateus",
    capitulo: 13,
    vIni: 53,
    vFim: 58,
    titulo: "Jesus prega em Nazaré. É rejeitado pelos seus"
  },
  "mt14.1-12": {
    id: "mt14.1-12",
    referencia: "Mt 14.1-12",
    livro: "Mateus",
    capitulo: 14,
    vIni: 1,
    vFim: 12,
    titulo: "A morte de João Batista"
  },
  "mt14.13-21": {
    id: "mt14.13-21",
    referencia: "Mt 14.13-21",
    livro: "Mateus",
    capitulo: 14,
    vIni: 13,
    vFim: 21,
    titulo: "A primeira multiplicação de pães e peixes"
  },
  "mt14.22-33": {
    id: "mt14.22-33",
    referencia: "Mt 14.22-33",
    livro: "Mateus",
    capitulo: 14,
    vIni: 22,
    vFim: 33,
    titulo: "Jesus anda por sobre o mar"
  },
  "mt14.34-36": {
    id: "mt14.34-36",
    referencia: "Mt 14.34-36",
    livro: "Mateus",
    capitulo: 14,
    vIni: 34,
    vFim: 36,
    titulo: "Jesus em Genesaré"
  },
  "mt15.1-20": {
    id: "mt15.1-20",
    referencia: "Mt 15.1-20",
    livro: "Mateus",
    capitulo: 15,
    vIni: 1,
    vFim: 20,
    titulo: "Jesus e a tradição dos anciãos. O que contamina o homem"
  },
  "mt15.21-28": {
    id: "mt15.21-28",
    referencia: "Mt 15.21-28",
    livro: "Mateus",
    capitulo: 15,
    vIni: 21,
    vFim: 28,
    titulo: "A mulher cananeia"
  },
  "mt15.29-31": {
    id: "mt15.29-31",
    referencia: "Mt 15.29-31",
    livro: "Mateus",
    capitulo: 15,
    vIni: 29,
    vFim: 31,
    titulo: "Jesus volta para o mar da Galileia e cura muitos enfermos"
  },
  "mt15.32-39": {
    id: "mt15.32-39",
    referencia: "Mt 15.32-39",
    livro: "Mateus",
    capitulo: 15,
    vIni: 32,
    vFim: 39,
    titulo: "A segunda multiplicação de pães e peixes"
  },
  "mt16.1-4": {
    id: "mt16.1-4",
    referencia: "Mt 16.1-4",
    livro: "Mateus",
    capitulo: 16,
    vIni: 1,
    vFim: 4,
    titulo: "Os fariseus e os saduceus pedem um sinal do céu"
  },
  "mt16.5-12": {
    id: "mt16.5-12",
    referencia: "Mt 16.5-12",
    livro: "Mateus",
    capitulo: 16,
    vIni: 5,
    vFim: 12,
    titulo: "O fermento dos fariseus e dos saduceus"
  },
  "mt16.13-20": {
    id: "mt16.13-20",
    referencia: "Mt 16.13-20",
    livro: "Mateus",
    capitulo: 16,
    vIni: 13,
    vFim: 20,
    titulo: "A confissão de Pedro"
  },
  "mt16.21-23": {
    id: "mt16.21-23",
    referencia: "Mt 16.21-23",
    livro: "Mateus",
    capitulo: 16,
    vIni: 21,
    vFim: 23,
    titulo: "Jesus prediz a sua morte e ressurreição"
  },
  "mt16.24-28": {
    id: "mt16.24-28",
    referencia: "Mt 16.24-28",
    livro: "Mateus",
    capitulo: 16,
    vIni: 24,
    vFim: 28,
    titulo: "O discípulo de Cristo deve levar a sua cruz"
  },
  "mt17.1-8": {
    id: "mt17.1-8",
    referencia: "Mt 17.1-8",
    livro: "Mateus",
    capitulo: 17,
    vIni: 1,
    vFim: 8,
    titulo: "A transfiguração"
  },
  "mt17.9-13": {
    id: "mt17.9-13",
    referencia: "Mt 17.9-13",
    livro: "Mateus",
    capitulo: 17,
    vIni: 9,
    vFim: 13,
    titulo: "A vinda de Elias"
  },
  "mt17.14-21": {
    id: "mt17.14-21",
    referencia: "Mt 17.14-21",
    livro: "Mateus",
    capitulo: 17,
    vIni: 14,
    vFim: 21,
    titulo: "A cura de um jovem possesso"
  },
  "mt17.22-23": {
    id: "mt17.22-23",
    referencia: "Mt 17.22-23",
    livro: "Mateus",
    capitulo: 17,
    vIni: 22,
    vFim: 23,
    titulo: "De novo Jesus prediz a sua morte e ressurreição"
  },
  "mt17.24-27": {
    id: "mt17.24-27",
    referencia: "Mt 17.24-27",
    livro: "Mateus",
    capitulo: 17,
    vIni: 24,
    vFim: 27,
    titulo: "Jesus paga imposto"
  },
  "mt18.1-5": {
    id: "mt18.1-5",
    referencia: "Mt 18.1-5",
    livro: "Mateus",
    capitulo: 18,
    vIni: 1,
    vFim: 5,
    titulo: "O maior no reino dos céus"
  },
  "mt18.6-9": {
    id: "mt18.6-9",
    referencia: "Mt 18.6-9",
    livro: "Mateus",
    capitulo: 18,
    vIni: 6,
    vFim: 9,
    titulo: "Os tropeços"
  },
  "mt18.10-14": {
    id: "mt18.10-14",
    referencia: "Mt 18.10-14",
    livro: "Mateus",
    capitulo: 18,
    vIni: 10,
    vFim: 14,
    titulo: "A parábola da ovelha perdida"
  },
  "mt18.15-20": {
    id: "mt18.15-20",
    referencia: "Mt 18.15-20",
    livro: "Mateus",
    capitulo: 18,
    vIni: 15,
    vFim: 20,
    titulo: "Como se deve tratar a um irmão culpado"
  },
  "mt18.21-22": {
    id: "mt18.21-22",
    referencia: "Mt 18.21-22",
    livro: "Mateus",
    capitulo: 18,
    vIni: 21,
    vFim: 22,
    titulo: "Quantas vezes se deve perdoar a um irmão"
  },
  "mt18.23-35": {
    id: "mt18.23-35",
    referencia: "Mt 18.23-35",
    livro: "Mateus",
    capitulo: 18,
    vIni: 23,
    vFim: 35,
    titulo: "A parábola do credor incompassivo"
  },
  "mt19.1-2": {
    id: "mt19.1-2",
    referencia: "Mt 19.1-2",
    livro: "Mateus",
    capitulo: 19,
    vIni: 1,
    vFim: 2,
    titulo: "Jesus atravessa o Jordão"
  },
  "mt19.3-12": {
    id: "mt19.3-12",
    referencia: "Mt 19.3-12",
    livro: "Mateus",
    capitulo: 19,
    vIni: 3,
    vFim: 12,
    titulo: "A questão do divórcio"
  },
  "mt19.13-15": {
    id: "mt19.13-15",
    referencia: "Mt 19.13-15",
    livro: "Mateus",
    capitulo: 19,
    vIni: 13,
    vFim: 15,
    titulo: "Jesus abençoa as crianças"
  },
  "mt19.16-22": {
    id: "mt19.16-22",
    referencia: "Mt 19.16-22",
    livro: "Mateus",
    capitulo: 19,
    vIni: 16,
    vFim: 22,
    titulo: "O jovem rico"
  },
  "mt19.23-30": {
    id: "mt19.23-30",
    referencia: "Mt 19.23-30",
    livro: "Mateus",
    capitulo: 19,
    vIni: 23,
    vFim: 30,
    titulo: "O perigo das riquezas"
  },
  "mt20.1-16": {
    id: "mt20.1-16",
    referencia: "Mt 20.1-16",
    livro: "Mateus",
    capitulo: 20,
    vIni: 1,
    vFim: 16,
    titulo: "A parábola dos trabalhadores na vinha"
  },
  "mt20.17-19": {
    id: "mt20.17-19",
    referencia: "Mt 20.17-19",
    livro: "Mateus",
    capitulo: 20,
    vIni: 17,
    vFim: 19,
    titulo: "Jesus ainda outra vez prediz sua morte e ressurreição"
  },
  "mt20.20-28": {
    id: "mt20.20-28",
    referencia: "Mt 20.20-28",
    livro: "Mateus",
    capitulo: 20,
    vIni: 20,
    vFim: 28,
    titulo: "O pedido da mãe de Tiago e João"
  },
  "mt20.29-34": {
    id: "mt20.29-34",
    referencia: "Mt 20.29-34",
    livro: "Mateus",
    capitulo: 20,
    vIni: 29,
    vFim: 34,
    titulo: "A cura de dois cegos de Jericó"
  },
  "mt21.1-11": {
    id: "mt21.1-11",
    referencia: "Mt 21.1-11",
    livro: "Mateus",
    capitulo: 21,
    vIni: 1,
    vFim: 11,
    titulo: "A entrada triunfal de Jesus em Jerusalém"
  },
  "mt21.12-13": {
    id: "mt21.12-13",
    referencia: "Mt 21.12-13",
    livro: "Mateus",
    capitulo: 21,
    vIni: 12,
    vFim: 13,
    titulo: "A purificação do templo"
  },
  "mt21.14-17": {
    id: "mt21.14-17",
    referencia: "Mt 21.14-17",
    livro: "Mateus",
    capitulo: 21,
    vIni: 14,
    vFim: 17,
    titulo: "Jesus efetua curas no templo"
  },
  "mt21.18-22": {
    id: "mt21.18-22",
    referencia: "Mt 21.18-22",
    livro: "Mateus",
    capitulo: 21,
    vIni: 18,
    vFim: 22,
    titulo: "A figueira sem fruto"
  },
  "mt21.23-27": {
    id: "mt21.23-27",
    referencia: "Mt 21.23-27",
    livro: "Mateus",
    capitulo: 21,
    vIni: 23,
    vFim: 27,
    titulo: "A autoridade de Jesus e o batismo de João"
  },
  "mt21.28-32": {
    id: "mt21.28-32",
    referencia: "Mt 21.28-32",
    livro: "Mateus",
    capitulo: 21,
    vIni: 28,
    vFim: 32,
    titulo: "A parábola dos dois filhos"
  },
  "mt21.33-46": {
    id: "mt21.33-46",
    referencia: "Mt 21.33-46",
    livro: "Mateus",
    capitulo: 21,
    vIni: 33,
    vFim: 46,
    titulo: "A parábola dos lavradores maus"
  },
  "mt22.1-14": {
    id: "mt22.1-14",
    referencia: "Mt 22.1-14",
    livro: "Mateus",
    capitulo: 22,
    vIni: 1,
    vFim: 14,
    titulo: "A parábola das bodas"
  },
  "mt22.15-22": {
    id: "mt22.15-22",
    referencia: "Mt 22.15-22",
    livro: "Mateus",
    capitulo: 22,
    vIni: 15,
    vFim: 22,
    titulo: "A questão do tributo"
  },
  "mt22.23-33": {
    id: "mt22.23-33",
    referencia: "Mt 22.23-33",
    livro: "Mateus",
    capitulo: 22,
    vIni: 23,
    vFim: 33,
    titulo: "Os saduceus e a ressurreição"
  },
  "mt22.34-40": {
    id: "mt22.34-40",
    referencia: "Mt 22.34-40",
    livro: "Mateus",
    capitulo: 22,
    vIni: 34,
    vFim: 40,
    titulo: "O grande mandamento"
  },
  "mt22.41-46": {
    id: "mt22.41-46",
    referencia: "Mt 22.41-46",
    livro: "Mateus",
    capitulo: 22,
    vIni: 41,
    vFim: 46,
    titulo: "O Cristo, Filho de Davi"
  },
  "mt23.1-12": {
    id: "mt23.1-12",
    referencia: "Mt 23.1-12",
    livro: "Mateus",
    capitulo: 23,
    vIni: 1,
    vFim: 12,
    titulo: "Jesus censura os escribas e os fariseus"
  },
  "mt23.13-36": {
    id: "mt23.13-36",
    referencia: "Mt 23.13-36",
    livro: "Mateus",
    capitulo: 23,
    vIni: 13,
    vFim: 36,
    titulo: "Várias advertências de Jesus"
  },
  "mt23.37-39": {
    id: "mt23.37-39",
    referencia: "Mt 23.37-39",
    livro: "Mateus",
    capitulo: 23,
    vIni: 37,
    vFim: 39,
    titulo: "O lamento sobre Jerusalém"
  },
  "mt24.1-2": {
    id: "mt24.1-2",
    referencia: "Mt 24.1-2",
    livro: "Mateus",
    capitulo: 24,
    vIni: 1,
    vFim: 2,
    titulo: "O sermão profético"
  },
  "mt24.3-14": {
    id: "mt24.3-14",
    referencia: "Mt 24.3-14",
    livro: "Mateus",
    capitulo: 24,
    vIni: 3,
    vFim: 14,
    titulo: "O princípio das dores"
  },
  "mt24.15-28": {
    id: "mt24.15-28",
    referencia: "Mt 24.15-28",
    livro: "Mateus",
    capitulo: 24,
    vIni: 15,
    vFim: 28,
    titulo: "A grande tribulação"
  },
  "mt24.29-31": {
    id: "mt24.29-31",
    referencia: "Mt 24.29-31",
    livro: "Mateus",
    capitulo: 24,
    vIni: 29,
    vFim: 31,
    titulo: "A vinda do Filho do Homem"
  },
  "mt24.32-44": {
    id: "mt24.32-44",
    referencia: "Mt 24.32-44",
    livro: "Mateus",
    capitulo: 24,
    vIni: 32,
    vFim: 44,
    titulo: "A parábola da figueira. Exortação à vigilância"
  },
  "mt24.45-51": {
    id: "mt24.45-51",
    referencia: "Mt 24.45-51",
    livro: "Mateus",
    capitulo: 24,
    vIni: 45,
    vFim: 51,
    titulo: "A parábola do bom servo e do mau"
  },
  "mt25.1-13": {
    id: "mt25.1-13",
    referencia: "Mt 25.1-13",
    livro: "Mateus",
    capitulo: 25,
    vIni: 1,
    vFim: 13,
    titulo: "A parábola das dez virgens"
  },
  "mt25.14-30": {
    id: "mt25.14-30",
    referencia: "Mt 25.14-30",
    livro: "Mateus",
    capitulo: 25,
    vIni: 14,
    vFim: 30,
    titulo: "A parábola dos talentos"
  },
  "mt25.31-46": {
    id: "mt25.31-46",
    referencia: "Mt 25.31-46",
    livro: "Mateus",
    capitulo: 25,
    vIni: 31,
    vFim: 46,
    titulo: "O grande julgamento"
  },
  "mt26.1-5": {
    id: "mt26.1-5",
    referencia: "Mt 26.1-5",
    livro: "Mateus",
    capitulo: 26,
    vIni: 1,
    vFim: 5,
    titulo: "O plano para tirar a vida de Jesus"
  },
  "mt26.6-13": {
    id: "mt26.6-13",
    referencia: "Mt 26.6-13",
    livro: "Mateus",
    capitulo: 26,
    vIni: 6,
    vFim: 13,
    titulo: "Jesus ungido em Betânia"
  },
  "mt26.14-16": {
    id: "mt26.14-16",
    referencia: "Mt 26.14-16",
    livro: "Mateus",
    capitulo: 26,
    vIni: 14,
    vFim: 16,
    titulo: "O pacto da traição"
  },
  "mt26.17-19": {
    id: "mt26.17-19",
    referencia: "Mt 26.17-19",
    livro: "Mateus",
    capitulo: 26,
    vIni: 17,
    vFim: 19,
    titulo: "Os discípulos preparam a Páscoa"
  },
  "mt26.20-25": {
    id: "mt26.20-25",
    referencia: "Mt 26.20-25",
    livro: "Mateus",
    capitulo: 26,
    vIni: 20,
    vFim: 25,
    titulo: "O traidor é indicado"
  },
  "mt26.26-30": {
    id: "mt26.26-30",
    referencia: "Mt 26.26-30",
    livro: "Mateus",
    capitulo: 26,
    vIni: 26,
    vFim: 30,
    titulo: "A Ceia do Senhor"
  },
  "mt26.31-35": {
    id: "mt26.31-35",
    referencia: "Mt 26.31-35",
    livro: "Mateus",
    capitulo: 26,
    vIni: 31,
    vFim: 35,
    titulo: "Pedro é avisado"
  },
  "mt26.36-46": {
    id: "mt26.36-46",
    referencia: "Mt 26.36-46",
    livro: "Mateus",
    capitulo: 26,
    vIni: 36,
    vFim: 46,
    titulo: "Jesus no Getsêmani"
  },
  "mt26.47-56": {
    id: "mt26.47-56",
    referencia: "Mt 26.47-56",
    livro: "Mateus",
    capitulo: 26,
    vIni: 47,
    vFim: 56,
    titulo: "Jesus é preso"
  },
  "mt26.57-68": {
    id: "mt26.57-68",
    referencia: "Mt 26.57-68",
    livro: "Mateus",
    capitulo: 26,
    vIni: 57,
    vFim: 68,
    titulo: "Jesus perante o Sinédrio"
  },
  "mt26.69-75": {
    id: "mt26.69-75",
    referencia: "Mt 26.69-75",
    livro: "Mateus",
    capitulo: 26,
    vIni: 69,
    vFim: 75,
    titulo: "Pedro nega a Jesus"
  },
  "mt27.1-2": {
    id: "mt27.1-2",
    referencia: "Mt 27.1-2",
    livro: "Mateus",
    capitulo: 27,
    vIni: 1,
    vFim: 2,
    titulo: "Jesus entregue a Pilatos"
  },
  "mt27.3-10": {
    id: "mt27.3-10",
    referencia: "Mt 27.3-10",
    livro: "Mateus",
    capitulo: 27,
    vIni: 3,
    vFim: 10,
    titulo: "O suicídio de Judas"
  },
  "mt27.11-26": {
    id: "mt27.11-26",
    referencia: "Mt 27.11-26",
    livro: "Mateus",
    capitulo: 27,
    vIni: 11,
    vFim: 26,
    titulo: "Jesus perante Pilatos"
  },
  "mt27.27-31": {
    id: "mt27.27-31",
    referencia: "Mt 27.27-31",
    livro: "Mateus",
    capitulo: 27,
    vIni: 27,
    vFim: 31,
    titulo: "Jesus entregue aos soldados"
  },
  "mt27.32": {
    id: "mt27.32",
    referencia: "Mt 27.32",
    livro: "Mateus",
    capitulo: 27,
    vIni: 32,
    vFim: 32,
    titulo: "Simão leva a cruz do Senhor"
  },
  "mt27.33-44": {
    id: "mt27.33-44",
    referencia: "Mt 27.33-44",
    livro: "Mateus",
    capitulo: 27,
    vIni: 33,
    vFim: 44,
    titulo: "A crucificação"
  },
  "mt27.45-56": {
    id: "mt27.45-56",
    referencia: "Mt 27.45-56",
    livro: "Mateus",
    capitulo: 27,
    vIni: 45,
    vFim: 56,
    titulo: "A morte de Jesus"
  },
  "mt27.57-61": {
    id: "mt27.57-61",
    referencia: "Mt 27.57-61",
    livro: "Mateus",
    capitulo: 27,
    vIni: 57,
    vFim: 61,
    titulo: "O sepultamento de Jesus"
  },
  "mt27.62-66": {
    id: "mt27.62-66",
    referencia: "Mt 27.62-66",
    livro: "Mateus",
    capitulo: 27,
    vIni: 62,
    vFim: 66,
    titulo: "A guarda do sepulcro"
  },
  "mt28.1-10": {
    id: "mt28.1-10",
    referencia: "Mt 28.1-10",
    livro: "Mateus",
    capitulo: 28,
    vIni: 1,
    vFim: 10,
    titulo: "A ressurreição de Jesus. Seu aparecimento às mulheres"
  },
  "mt28.11-15": {
    id: "mt28.11-15",
    referencia: "Mt 28.11-15",
    livro: "Mateus",
    capitulo: 28,
    vIni: 11,
    vFim: 15,
    titulo: "Os judeus subornam os guardas"
  },
  "mt28.16-17": {
    id: "mt28.16-17",
    referencia: "Mt 28.16-17",
    livro: "Mateus",
    capitulo: 28,
    vIni: 16,
    vFim: 17,
    titulo: "Jesus aparece aos discípulos na Galileia"
  },
  "mt28.18-20": {
    id: "mt28.18-20",
    referencia: "Mt 28.18-20",
    livro: "Mateus",
    capitulo: 28,
    vIni: 18,
    vFim: 20,
    titulo: "A Grande Comissão"
  },
  "mc1.2-6": {
    id: "mc1.2-6",
    referencia: "Mc 1.2-6",
    livro: "Marcos",
    capitulo: 1,
    vIni: 2,
    vFim: 6,
    titulo: "João Batista"
  },
  "mc1.7-8": {
    id: "mc1.7-8",
    referencia: "Mc 1.7-8",
    livro: "Marcos",
    capitulo: 1,
    vIni: 7,
    vFim: 8,
    titulo: "João dá testemunho de Jesus"
  },
  "mc1.9-11": {
    id: "mc1.9-11",
    referencia: "Mc 1.9-11",
    livro: "Marcos",
    capitulo: 1,
    vIni: 9,
    vFim: 11,
    titulo: "O batismo de Jesus"
  },
  "mc1.12-13": {
    id: "mc1.12-13",
    referencia: "Mc 1.12-13",
    livro: "Marcos",
    capitulo: 1,
    vIni: 12,
    vFim: 13,
    titulo: "A tentação de Jesus"
  },
  "mc1.14-15": {
    id: "mc1.14-15",
    referencia: "Mc 1.14-15",
    livro: "Marcos",
    capitulo: 1,
    vIni: 14,
    vFim: 15,
    titulo: "Jesus volta para a Galileia"
  },
  "mc1.16-20": {
    id: "mc1.16-20",
    referencia: "Mc 1.16-20",
    livro: "Marcos",
    capitulo: 1,
    vIni: 16,
    vFim: 20,
    titulo: "A vocação de discípulos"
  },
  "mc1.21-28": {
    id: "mc1.21-28",
    referencia: "Mc 1.21-28",
    livro: "Marcos",
    capitulo: 1,
    vIni: 21,
    vFim: 28,
    titulo: "A cura de um endemoninhado em Cafarnaum"
  },
  "mc1.29-31": {
    id: "mc1.29-31",
    referencia: "Mc 1.29-31",
    livro: "Marcos",
    capitulo: 1,
    vIni: 29,
    vFim: 31,
    titulo: "A cura da sogra de Pedro"
  },
  "mc1.32-34": {
    id: "mc1.32-34",
    referencia: "Mc 1.32-34",
    livro: "Marcos",
    capitulo: 1,
    vIni: 32,
    vFim: 34,
    titulo: "Muitas outras curas"
  },
  "mc1.35-39": {
    id: "mc1.35-39",
    referencia: "Mc 1.35-39",
    livro: "Marcos",
    capitulo: 1,
    vIni: 35,
    vFim: 39,
    titulo: "Jesus se retira para orar"
  },
  "mc1.40-45": {
    id: "mc1.40-45",
    referencia: "Mc 1.40-45",
    livro: "Marcos",
    capitulo: 1,
    vIni: 40,
    vFim: 45,
    titulo: "A cura de um leproso"
  },
  "mc2.1-12": {
    id: "mc2.1-12",
    referencia: "Mc 2.1-12",
    livro: "Marcos",
    capitulo: 2,
    vIni: 1,
    vFim: 12,
    titulo: "A cura de um paralítico em Cafarnaum"
  },
  "mc2.13-14": {
    id: "mc2.13-14",
    referencia: "Mc 2.13-14",
    livro: "Marcos",
    capitulo: 2,
    vIni: 13,
    vFim: 14,
    titulo: "A vocação de Levi"
  },
  "mc2.15-17": {
    id: "mc2.15-17",
    referencia: "Mc 2.15-17",
    livro: "Marcos",
    capitulo: 2,
    vIni: 15,
    vFim: 17,
    titulo: "Jesus come com pecadores"
  },
  "mc2.18-22": {
    id: "mc2.18-22",
    referencia: "Mc 2.18-22",
    livro: "Marcos",
    capitulo: 2,
    vIni: 18,
    vFim: 22,
    titulo: "Do jejum"
  },
  "mc2.23-28": {
    id: "mc2.23-28",
    referencia: "Mc 2.23-28",
    livro: "Marcos",
    capitulo: 2,
    vIni: 23,
    vFim: 28,
    titulo: "Jesus é senhor do sábado"
  },
  "mc3.1-6": {
    id: "mc3.1-6",
    referencia: "Mc 3.1-6",
    livro: "Marcos",
    capitulo: 3,
    vIni: 1,
    vFim: 6,
    titulo: "O homem da mão ressequida"
  },
  "mc3.7-12": {
    id: "mc3.7-12",
    referencia: "Mc 3.7-12",
    livro: "Marcos",
    capitulo: 3,
    vIni: 7,
    vFim: 12,
    titulo: "Jesus se retira. A cura de muitos à beira-mar"
  },
  "mc3.13-19": {
    id: "mc3.13-19",
    referencia: "Mc 3.13-19",
    livro: "Marcos",
    capitulo: 3,
    vIni: 13,
    vFim: 19,
    titulo: "A escolha dos doze apóstolos. Os seus nomes"
  },
  "mc3.20-30": {
    id: "mc3.20-30",
    referencia: "Mc 3.20-30",
    livro: "Marcos",
    capitulo: 3,
    vIni: 20,
    vFim: 30,
    titulo: "A blasfêmia dos escribas"
  },
  "mc3.31-35": {
    id: "mc3.31-35",
    referencia: "Mc 3.31-35",
    livro: "Marcos",
    capitulo: 3,
    vIni: 31,
    vFim: 35,
    titulo: "A família de Jesus"
  },
  "mc4.1-9": {
    id: "mc4.1-9",
    referencia: "Mc 4.1-9",
    livro: "Marcos",
    capitulo: 4,
    vIni: 1,
    vFim: 9,
    titulo: "A parábola do semeador"
  },
  "mc4.10-20": {
    id: "mc4.10-20",
    referencia: "Mc 4.10-20",
    livro: "Marcos",
    capitulo: 4,
    vIni: 10,
    vFim: 20,
    titulo: "A explicação da parábola"
  },
  "mc4.21-25": {
    id: "mc4.21-25",
    referencia: "Mc 4.21-25",
    livro: "Marcos",
    capitulo: 4,
    vIni: 21,
    vFim: 25,
    titulo: "A parábola da candeia"
  },
  "mc4.26-29": {
    id: "mc4.26-29",
    referencia: "Mc 4.26-29",
    livro: "Marcos",
    capitulo: 4,
    vIni: 26,
    vFim: 29,
    titulo: "A parábola da semente"
  },
  "mc4.30-32": {
    id: "mc4.30-32",
    referencia: "Mc 4.30-32",
    livro: "Marcos",
    capitulo: 4,
    vIni: 30,
    vFim: 32,
    titulo: "A parábola do grão de mostarda"
  },
  "mc4.33-34": {
    id: "mc4.33-34",
    referencia: "Mc 4.33-34",
    livro: "Marcos",
    capitulo: 4,
    vIni: 33,
    vFim: 34,
    titulo: "Por que Jesus falou por parábolas"
  },
  "mc4.35-41": {
    id: "mc4.35-41",
    referencia: "Mc 4.35-41",
    livro: "Marcos",
    capitulo: 4,
    vIni: 35,
    vFim: 41,
    titulo: "Jesus acalma uma tempestade"
  },
  "mc5.1-14": {
    id: "mc5.1-14",
    referencia: "Mc 5.1-14",
    livro: "Marcos",
    capitulo: 5,
    vIni: 1,
    vFim: 14,
    titulo: "A cura do endemoninhado geraseno"
  },
  "mc5.15-20": {
    id: "mc5.15-20",
    referencia: "Mc 5.15-20",
    livro: "Marcos",
    capitulo: 5,
    vIni: 15,
    vFim: 20,
    titulo: "Os gerasenos rejeitam a Jesus"
  },
  "mc5.21-24": {
    id: "mc5.21-24",
    referencia: "Mc 5.21-24",
    livro: "Marcos",
    capitulo: 5,
    vIni: 21,
    vFim: 24,
    titulo: "O pedido de Jairo"
  },
  "mc5.25-34": {
    id: "mc5.25-34",
    referencia: "Mc 5.25-34",
    livro: "Marcos",
    capitulo: 5,
    vIni: 25,
    vFim: 34,
    titulo: "A cura de uma mulher enferma"
  },
  "mc5.35-43": {
    id: "mc5.35-43",
    referencia: "Mc 5.35-43",
    livro: "Marcos",
    capitulo: 5,
    vIni: 35,
    vFim: 43,
    titulo: "A ressurreição da filha de Jairo"
  },
  "mc6.1-6": {
    id: "mc6.1-6",
    referencia: "Mc 6.1-6",
    livro: "Marcos",
    capitulo: 6,
    vIni: 1,
    vFim: 6,
    titulo: "Jesus prega em Nazaré. É rejeitado pelos seus"
  },
  "mc6.7-13": {
    id: "mc6.7-13",
    referencia: "Mc 6.7-13",
    livro: "Marcos",
    capitulo: 6,
    vIni: 7,
    vFim: 13,
    titulo: "As instruções para os doze"
  },
  "mc6.14-29": {
    id: "mc6.14-29",
    referencia: "Mc 6.14-29",
    livro: "Marcos",
    capitulo: 6,
    vIni: 14,
    vFim: 29,
    titulo: "A morte de João Batista"
  },
  "mc6.30-44": {
    id: "mc6.30-44",
    referencia: "Mc 6.30-44",
    livro: "Marcos",
    capitulo: 6,
    vIni: 30,
    vFim: 44,
    titulo: "A primeira multiplicação de pães e peixes"
  },
  "mc6.45-52": {
    id: "mc6.45-52",
    referencia: "Mc 6.45-52",
    livro: "Marcos",
    capitulo: 6,
    vIni: 45,
    vFim: 52,
    titulo: "Jesus anda por sobre o mar"
  },
  "mc6.53-56": {
    id: "mc6.53-56",
    referencia: "Mc 6.53-56",
    livro: "Marcos",
    capitulo: 6,
    vIni: 53,
    vFim: 56,
    titulo: "Jesus em Genesaré"
  },
  "mc7.1-23": {
    id: "mc7.1-23",
    referencia: "Mc 7.1-23",
    livro: "Marcos",
    capitulo: 7,
    vIni: 1,
    vFim: 23,
    titulo: "Jesus e a tradição dos anciãos. O que contamina o homem"
  },
  "mc7.24-30": {
    id: "mc7.24-30",
    referencia: "Mc 7.24-30",
    livro: "Marcos",
    capitulo: 7,
    vIni: 24,
    vFim: 30,
    titulo: "A mulher siro-fenícia"
  },
  "mc7.31-37": {
    id: "mc7.31-37",
    referencia: "Mc 7.31-37",
    livro: "Marcos",
    capitulo: 7,
    vIni: 31,
    vFim: 37,
    titulo: "A cura de um surdo e gago"
  },
  "mc8.1-10": {
    id: "mc8.1-10",
    referencia: "Mc 8.1-10",
    livro: "Marcos",
    capitulo: 8,
    vIni: 1,
    vFim: 10,
    titulo: "A segunda multiplicação de pães e peixes"
  },
  "mc8.11-13": {
    id: "mc8.11-13",
    referencia: "Mc 8.11-13",
    livro: "Marcos",
    capitulo: 8,
    vIni: 11,
    vFim: 13,
    titulo: "Os fariseus pedem um sinal do céu"
  },
  "mc8.14-21": {
    id: "mc8.14-21",
    referencia: "Mc 8.14-21",
    livro: "Marcos",
    capitulo: 8,
    vIni: 14,
    vFim: 21,
    titulo: "O fermento dos fariseus e o de Herodes"
  },
  "mc8.22-26": {
    id: "mc8.22-26",
    referencia: "Mc 8.22-26",
    livro: "Marcos",
    capitulo: 8,
    vIni: 22,
    vFim: 26,
    titulo: "A cura de um cego em Betsaida"
  },
  "mc8.27-30": {
    id: "mc8.27-30",
    referencia: "Mc 8.27-30",
    livro: "Marcos",
    capitulo: 8,
    vIni: 27,
    vFim: 30,
    titulo: "A confissão de Pedro"
  },
  "mc8.31-33": {
    id: "mc8.31-33",
    referencia: "Mc 8.31-33",
    livro: "Marcos",
    capitulo: 8,
    vIni: 31,
    vFim: 33,
    titulo: "Jesus prediz a sua morte e ressurreição"
  },
  "mc8.34-38": {
    id: "mc8.34-38",
    referencia: "Mc 8.34-38",
    livro: "Marcos",
    capitulo: 8,
    vIni: 34,
    vFim: 38,
    titulo: "O discípulo de Jesus deve levar a sua cruz"
  },
  "mc9.2-8": {
    id: "mc9.2-8",
    referencia: "Mc 9.2-8",
    livro: "Marcos",
    capitulo: 9,
    vIni: 2,
    vFim: 8,
    titulo: "A transfiguração"
  },
  "mc9.9-13": {
    id: "mc9.9-13",
    referencia: "Mc 9.9-13",
    livro: "Marcos",
    capitulo: 9,
    vIni: 9,
    vFim: 13,
    titulo: "A vinda de Elias"
  },
  "mc9.14-29": {
    id: "mc9.14-29",
    referencia: "Mc 9.14-29",
    livro: "Marcos",
    capitulo: 9,
    vIni: 14,
    vFim: 29,
    titulo: "A cura de um jovem possesso"
  },
  "mc9.30-32": {
    id: "mc9.30-32",
    referencia: "Mc 9.30-32",
    livro: "Marcos",
    capitulo: 9,
    vIni: 30,
    vFim: 32,
    titulo: "De novo Jesus prediz a sua morte e ressurreição"
  },
  "mc9.33-37": {
    id: "mc9.33-37",
    referencia: "Mc 9.33-37",
    livro: "Marcos",
    capitulo: 9,
    vIni: 33,
    vFim: 37,
    titulo: "O maior no reino dos céus"
  },
  "mc9.38-41": {
    id: "mc9.38-41",
    referencia: "Mc 9.38-41",
    livro: "Marcos",
    capitulo: 9,
    vIni: 38,
    vFim: 41,
    titulo: "Jesus ensina a tolerância e a caridade"
  },
  "mc9.42-48": {
    id: "mc9.42-48",
    referencia: "Mc 9.42-48",
    livro: "Marcos",
    capitulo: 9,
    vIni: 42,
    vFim: 48,
    titulo: "Os tropeços"
  },
  "mc9.49-50": {
    id: "mc9.49-50",
    referencia: "Mc 9.49-50",
    livro: "Marcos",
    capitulo: 9,
    vIni: 49,
    vFim: 50,
    titulo: "Os discípulos, o sal da terra"
  },
  "mc10.1": {
    id: "mc10.1",
    referencia: "Mc 10.1",
    livro: "Marcos",
    capitulo: 10,
    vIni: 1,
    vFim: 1,
    titulo: "Jesus atravessa o Jordão"
  },
  "mc10.2-12": {
    id: "mc10.2-12",
    referencia: "Mc 10.2-12",
    livro: "Marcos",
    capitulo: 10,
    vIni: 2,
    vFim: 12,
    titulo: "A questão do divórcio"
  },
  "mc10.13-16": {
    id: "mc10.13-16",
    referencia: "Mc 10.13-16",
    livro: "Marcos",
    capitulo: 10,
    vIni: 13,
    vFim: 16,
    titulo: "Jesus abençoa as crianças"
  },
  "mc10.17-22": {
    id: "mc10.17-22",
    referencia: "Mc 10.17-22",
    livro: "Marcos",
    capitulo: 10,
    vIni: 17,
    vFim: 22,
    titulo: "O jovem rico"
  },
  "mc10.23-31": {
    id: "mc10.23-31",
    referencia: "Mc 10.23-31",
    livro: "Marcos",
    capitulo: 10,
    vIni: 23,
    vFim: 31,
    titulo: "O perigo das riquezas"
  },
  "mc10.32-34": {
    id: "mc10.32-34",
    referencia: "Mc 10.32-34",
    livro: "Marcos",
    capitulo: 10,
    vIni: 32,
    vFim: 34,
    titulo: "Jesus ainda outra vez prediz sua morte e ressurreição"
  },
  "mc10.35-45": {
    id: "mc10.35-45",
    referencia: "Mc 10.35-45",
    livro: "Marcos",
    capitulo: 10,
    vIni: 35,
    vFim: 45,
    titulo: "O pedido de Tiago e João"
  },
  "mc10.46-52": {
    id: "mc10.46-52",
    referencia: "Mc 10.46-52",
    livro: "Marcos",
    capitulo: 10,
    vIni: 46,
    vFim: 52,
    titulo: "A cura do cego de Jericó"
  },
  "mc11.1-11": {
    id: "mc11.1-11",
    referencia: "Mc 11.1-11",
    livro: "Marcos",
    capitulo: 11,
    vIni: 1,
    vFim: 11,
    titulo: "A entrada triunfal de Jesus em Jerusalém"
  },
  "mc11.12-14": {
    id: "mc11.12-14",
    referencia: "Mc 11.12-14",
    livro: "Marcos",
    capitulo: 11,
    vIni: 12,
    vFim: 14,
    titulo: "A figueira sem fruto"
  },
  "mc11.15-19": {
    id: "mc11.15-19",
    referencia: "Mc 11.15-19",
    livro: "Marcos",
    capitulo: 11,
    vIni: 15,
    vFim: 19,
    titulo: "A purificação do templo"
  },
  "mc11.20-26": {
    id: "mc11.20-26",
    referencia: "Mc 11.20-26",
    livro: "Marcos",
    capitulo: 11,
    vIni: 20,
    vFim: 26,
    titulo: "O poder da fé"
  },
  "mc11.27-33": {
    id: "mc11.27-33",
    referencia: "Mc 11.27-33",
    livro: "Marcos",
    capitulo: 11,
    vIni: 27,
    vFim: 33,
    titulo: "A autoridade de Jesus e o batismo de João"
  },
  "mc12.1-12": {
    id: "mc12.1-12",
    referencia: "Mc 12.1-12",
    livro: "Marcos",
    capitulo: 12,
    vIni: 1,
    vFim: 12,
    titulo: "A parábola dos lavradores maus"
  },
  "mc12.13-17": {
    id: "mc12.13-17",
    referencia: "Mc 12.13-17",
    livro: "Marcos",
    capitulo: 12,
    vIni: 13,
    vFim: 17,
    titulo: "A questão do tributo"
  },
  "mc12.18-27": {
    id: "mc12.18-27",
    referencia: "Mc 12.18-27",
    livro: "Marcos",
    capitulo: 12,
    vIni: 18,
    vFim: 27,
    titulo: "Os saduceus e a ressurreição"
  },
  "mc12.28-34": {
    id: "mc12.28-34",
    referencia: "Mc 12.28-34",
    livro: "Marcos",
    capitulo: 12,
    vIni: 28,
    vFim: 34,
    titulo: "O grande mandamento"
  },
  "mc12.35-37": {
    id: "mc12.35-37",
    referencia: "Mc 12.35-37",
    livro: "Marcos",
    capitulo: 12,
    vIni: 35,
    vFim: 37,
    titulo: "O Cristo, filho de Davi"
  },
  "mc12.38-40": {
    id: "mc12.38-40",
    referencia: "Mc 12.38-40",
    livro: "Marcos",
    capitulo: 12,
    vIni: 38,
    vFim: 40,
    titulo: "Jesus censura os escribas"
  },
  "mc12.41-44": {
    id: "mc12.41-44",
    referencia: "Mc 12.41-44",
    livro: "Marcos",
    capitulo: 12,
    vIni: 41,
    vFim: 44,
    titulo: "A oferta da viúva pobre"
  },
  "mc13.1-2": {
    id: "mc13.1-2",
    referencia: "Mc 13.1-2",
    livro: "Marcos",
    capitulo: 13,
    vIni: 1,
    vFim: 2,
    titulo: "O sermão profético"
  },
  "mc13.3-13": {
    id: "mc13.3-13",
    referencia: "Mc 13.3-13",
    livro: "Marcos",
    capitulo: 13,
    vIni: 3,
    vFim: 13,
    titulo: "O princípio das dores"
  },
  "mc13.14-23": {
    id: "mc13.14-23",
    referencia: "Mc 13.14-23",
    livro: "Marcos",
    capitulo: 13,
    vIni: 14,
    vFim: 23,
    titulo: "A grande tribulação"
  },
  "mc13.24-27": {
    id: "mc13.24-27",
    referencia: "Mc 13.24-27",
    livro: "Marcos",
    capitulo: 13,
    vIni: 24,
    vFim: 27,
    titulo: "A vinda do Filho do Homem"
  },
  "mc13.28-37": {
    id: "mc13.28-37",
    referencia: "Mc 13.28-37",
    livro: "Marcos",
    capitulo: 13,
    vIni: 28,
    vFim: 37,
    titulo: "A parábola da figueira. Exortação à vigilância"
  },
  "mc14.1-2": {
    id: "mc14.1-2",
    referencia: "Mc 14.1-2",
    livro: "Marcos",
    capitulo: 14,
    vIni: 1,
    vFim: 2,
    titulo: "O plano para tirar a vida de Jesus"
  },
  "mc14.3-9": {
    id: "mc14.3-9",
    referencia: "Mc 14.3-9",
    livro: "Marcos",
    capitulo: 14,
    vIni: 3,
    vFim: 9,
    titulo: "Jesus ungido em Betânia"
  },
  "mc14.10-11": {
    id: "mc14.10-11",
    referencia: "Mc 14.10-11",
    livro: "Marcos",
    capitulo: 14,
    vIni: 10,
    vFim: 11,
    titulo: "O pacto da traição"
  },
  "mc14.12-16": {
    id: "mc14.12-16",
    referencia: "Mc 14.12-16",
    livro: "Marcos",
    capitulo: 14,
    vIni: 12,
    vFim: 16,
    titulo: "Os discípulos preparam a Páscoa"
  },
  "mc14.17-21": {
    id: "mc14.17-21",
    referencia: "Mc 14.17-21",
    livro: "Marcos",
    capitulo: 14,
    vIni: 17,
    vFim: 21,
    titulo: "O traidor é indicado"
  },
  "mc14.22-26": {
    id: "mc14.22-26",
    referencia: "Mc 14.22-26",
    livro: "Marcos",
    capitulo: 14,
    vIni: 22,
    vFim: 26,
    titulo: "A Ceia do Senhor"
  },
  "mc14.27-31": {
    id: "mc14.27-31",
    referencia: "Mc 14.27-31",
    livro: "Marcos",
    capitulo: 14,
    vIni: 27,
    vFim: 31,
    titulo: "Pedro é avisado"
  },
  "mc14.32-42": {
    id: "mc14.32-42",
    referencia: "Mc 14.32-42",
    livro: "Marcos",
    capitulo: 14,
    vIni: 32,
    vFim: 42,
    titulo: "Jesus no Getsêmani"
  },
  "mc14.43-50": {
    id: "mc14.43-50",
    referencia: "Mc 14.43-50",
    livro: "Marcos",
    capitulo: 14,
    vIni: 43,
    vFim: 50,
    titulo: "Jesus é preso"
  },
  "mc14.51-52": {
    id: "mc14.51-52",
    referencia: "Mc 14.51-52",
    livro: "Marcos",
    capitulo: 14,
    vIni: 51,
    vFim: 52,
    titulo: "Jesus seguido por um jovem"
  },
  "mc14.53-65": {
    id: "mc14.53-65",
    referencia: "Mc 14.53-65",
    livro: "Marcos",
    capitulo: 14,
    vIni: 53,
    vFim: 65,
    titulo: "Jesus perante o Sinédrio"
  },
  "mc14.66-72": {
    id: "mc14.66-72",
    referencia: "Mc 14.66-72",
    livro: "Marcos",
    capitulo: 14,
    vIni: 66,
    vFim: 72,
    titulo: "Pedro nega a Jesus"
  },
  "mc15.1-15": {
    id: "mc15.1-15",
    referencia: "Mc 15.1-15",
    livro: "Marcos",
    capitulo: 15,
    vIni: 1,
    vFim: 15,
    titulo: "Jesus perante Pilatos"
  },
  "mc15.16-20": {
    id: "mc15.16-20",
    referencia: "Mc 15.16-20",
    livro: "Marcos",
    capitulo: 15,
    vIni: 16,
    vFim: 20,
    titulo: "Jesus entregue aos soldados"
  },
  "mc15.21": {
    id: "mc15.21",
    referencia: "Mc 15.21",
    livro: "Marcos",
    capitulo: 15,
    vIni: 21,
    vFim: 21,
    titulo: "Simão leva a cruz de Jesus"
  },
  "mc15.22-32": {
    id: "mc15.22-32",
    referencia: "Mc 15.22-32",
    livro: "Marcos",
    capitulo: 15,
    vIni: 22,
    vFim: 32,
    titulo: "A crucificação"
  },
  "mc15.33-41": {
    id: "mc15.33-41",
    referencia: "Mc 15.33-41",
    livro: "Marcos",
    capitulo: 15,
    vIni: 33,
    vFim: 41,
    titulo: "A morte de Jesus"
  },
  "mc15.42-47": {
    id: "mc15.42-47",
    referencia: "Mc 15.42-47",
    livro: "Marcos",
    capitulo: 15,
    vIni: 42,
    vFim: 47,
    titulo: "O sepultamento de Jesus"
  },
  "mc16.1-8": {
    id: "mc16.1-8",
    referencia: "Mc 16.1-8",
    livro: "Marcos",
    capitulo: 16,
    vIni: 1,
    vFim: 8,
    titulo: "A ressurreição de Jesus"
  },
  "mc16.9-11": {
    id: "mc16.9-11",
    referencia: "Mc 16.9-11",
    livro: "Marcos",
    capitulo: 16,
    vIni: 9,
    vFim: 11,
    titulo: "Jesus aparece a Maria Madalena"
  },
  "mc16.12-13": {
    id: "mc16.12-13",
    referencia: "Mc 16.12-13",
    livro: "Marcos",
    capitulo: 16,
    vIni: 12,
    vFim: 13,
    titulo: "Jesus aparece a dois de seus discípulos"
  },
  "mc16.14-18": {
    id: "mc16.14-18",
    referencia: "Mc 16.14-18",
    livro: "Marcos",
    capitulo: 16,
    vIni: 14,
    vFim: 18,
    titulo: "A ordem para a evangelização"
  },
  "mc16.19-20": {
    id: "mc16.19-20",
    referencia: "Mc 16.19-20",
    livro: "Marcos",
    capitulo: 16,
    vIni: 19,
    vFim: 20,
    titulo: "A ascensão de Jesus"
  },
  "lc1.1-4": {
    id: "lc1.1-4",
    referencia: "Lc 1.1-4",
    livro: "Lucas",
    capitulo: 1,
    vIni: 1,
    vFim: 4,
    titulo: "Prefácio"
  },
  "lc1.5-7": {
    id: "lc1.5-7",
    referencia: "Lc 1.5-7",
    livro: "Lucas",
    capitulo: 1,
    vIni: 5,
    vFim: 7,
    titulo: "Zacarias e Isabel"
  },
  "lc1.8-23": {
    id: "lc1.8-23",
    referencia: "Lc 1.8-23",
    livro: "Lucas",
    capitulo: 1,
    vIni: 8,
    vFim: 23,
    titulo: "Predições referentes a João Batista"
  },
  "lc1.24-25": {
    id: "lc1.24-25",
    referencia: "Lc 1.24-25",
    livro: "Lucas",
    capitulo: 1,
    vIni: 24,
    vFim: 25,
    titulo: "A felicidade de Isabel"
  },
  "lc1.26-38": {
    id: "lc1.26-38",
    referencia: "Lc 1.26-38",
    livro: "Lucas",
    capitulo: 1,
    vIni: 26,
    vFim: 38,
    titulo: "Predito o nascimento de Jesus"
  },
  "lc1.39-45": {
    id: "lc1.39-45",
    referencia: "Lc 1.39-45",
    livro: "Lucas",
    capitulo: 1,
    vIni: 39,
    vFim: 45,
    titulo: "Maria visita a Isabel"
  },
  "lc1.46-56": {
    id: "lc1.46-56",
    referencia: "Lc 1.46-56",
    livro: "Lucas",
    capitulo: 1,
    vIni: 46,
    vFim: 56,
    titulo: "O cântico de Maria"
  },
  "lc1.57-66": {
    id: "lc1.57-66",
    referencia: "Lc 1.57-66",
    livro: "Lucas",
    capitulo: 1,
    vIni: 57,
    vFim: 66,
    titulo: "O nascimento de João Batista"
  },
  "lc1.67-80": {
    id: "lc1.67-80",
    referencia: "Lc 1.67-80",
    livro: "Lucas",
    capitulo: 1,
    vIni: 67,
    vFim: 80,
    titulo: "O cântico de Zacarias"
  },
  "lc2.1-7": {
    id: "lc2.1-7",
    referencia: "Lc 2.1-7",
    livro: "Lucas",
    capitulo: 2,
    vIni: 1,
    vFim: 7,
    titulo: "O nascimento de Jesus Cristo"
  },
  "lc2.8-20": {
    id: "lc2.8-20",
    referencia: "Lc 2.8-20",
    livro: "Lucas",
    capitulo: 2,
    vIni: 8,
    vFim: 20,
    titulo: "Os anjos e os pastores"
  },
  "lc2.21": {
    id: "lc2.21",
    referencia: "Lc 2.21",
    livro: "Lucas",
    capitulo: 2,
    vIni: 21,
    vFim: 21,
    titulo: "A circuncisão de Jesus"
  },
  "lc2.22-24": {
    id: "lc2.22-24",
    referencia: "Lc 2.22-24",
    livro: "Lucas",
    capitulo: 2,
    vIni: 22,
    vFim: 24,
    titulo: "A apresentação de Jesus no templo"
  },
  "lc2.25-35": {
    id: "lc2.25-35",
    referencia: "Lc 2.25-35",
    livro: "Lucas",
    capitulo: 2,
    vIni: 25,
    vFim: 35,
    titulo: "O cântico de Simeão"
  },
  "lc2.36-38": {
    id: "lc2.36-38",
    referencia: "Lc 2.36-38",
    livro: "Lucas",
    capitulo: 2,
    vIni: 36,
    vFim: 38,
    titulo: "A profetisa Ana"
  },
  "lc2.39-40": {
    id: "lc2.39-40",
    referencia: "Lc 2.39-40",
    livro: "Lucas",
    capitulo: 2,
    vIni: 39,
    vFim: 40,
    titulo: "O menino Jesus em Nazaré"
  },
  "lc2.41-52": {
    id: "lc2.41-52",
    referencia: "Lc 2.41-52",
    livro: "Lucas",
    capitulo: 2,
    vIni: 41,
    vFim: 52,
    titulo: "O menino Jesus no meio dos doutores"
  },
  "lc3.1-14": {
    id: "lc3.1-14",
    referencia: "Lc 3.1-14",
    livro: "Lucas",
    capitulo: 3,
    vIni: 1,
    vFim: 14,
    titulo: "A pregação de João Batista"
  },
  "lc3.15-20": {
    id: "lc3.15-20",
    referencia: "Lc 3.15-20",
    livro: "Lucas",
    capitulo: 3,
    vIni: 15,
    vFim: 20,
    titulo: "João dá testemunho de Jesus"
  },
  "lc3.21-22": {
    id: "lc3.21-22",
    referencia: "Lc 3.21-22",
    livro: "Lucas",
    capitulo: 3,
    vIni: 21,
    vFim: 22,
    titulo: "O batismo de Jesus"
  },
  "lc3.23-38": {
    id: "lc3.23-38",
    referencia: "Lc 3.23-38",
    livro: "Lucas",
    capitulo: 3,
    vIni: 23,
    vFim: 38,
    titulo: "A genealogia de Jesus Cristo"
  },
  "lc4.1-13": {
    id: "lc4.1-13",
    referencia: "Lc 4.1-13",
    livro: "Lucas",
    capitulo: 4,
    vIni: 1,
    vFim: 13,
    titulo: "A tentação de Jesus"
  },
  "lc4.14-15": {
    id: "lc4.14-15",
    referencia: "Lc 4.14-15",
    livro: "Lucas",
    capitulo: 4,
    vIni: 14,
    vFim: 15,
    titulo: "Jesus volta para a Galileia e principia a sua missão"
  },
  "lc4.16-30": {
    id: "lc4.16-30",
    referencia: "Lc 4.16-30",
    livro: "Lucas",
    capitulo: 4,
    vIni: 16,
    vFim: 30,
    titulo: "Jesus prega em Nazaré. É rejeitado pelos seus"
  },
  "lc4.31-37": {
    id: "lc4.31-37",
    referencia: "Lc 4.31-37",
    livro: "Lucas",
    capitulo: 4,
    vIni: 31,
    vFim: 37,
    titulo: "A cura de um endemoninhado em Cafarnaum"
  },
  "lc4.38-39": {
    id: "lc4.38-39",
    referencia: "Lc 4.38-39",
    livro: "Lucas",
    capitulo: 4,
    vIni: 38,
    vFim: 39,
    titulo: "A cura da sogra de Pedro"
  },
  "lc4.40-41": {
    id: "lc4.40-41",
    referencia: "Lc 4.40-41",
    livro: "Lucas",
    capitulo: 4,
    vIni: 40,
    vFim: 41,
    titulo: "Muitas outras curas"
  },
  "lc4.42-44": {
    id: "lc4.42-44",
    referencia: "Lc 4.42-44",
    livro: "Lucas",
    capitulo: 4,
    vIni: 42,
    vFim: 44,
    titulo: "Jesus vai a um lugar deserto"
  },
  "lc5.1-11": {
    id: "lc5.1-11",
    referencia: "Lc 5.1-11",
    livro: "Lucas",
    capitulo: 5,
    vIni: 1,
    vFim: 11,
    titulo: "A pesca maravilhosa"
  },
  "lc5.12-15": {
    id: "lc5.12-15",
    referencia: "Lc 5.12-15",
    livro: "Lucas",
    capitulo: 5,
    vIni: 12,
    vFim: 15,
    titulo: "A cura de um leproso"
  },
  "lc5.17-26": {
    id: "lc5.17-26",
    referencia: "Lc 5.17-26",
    livro: "Lucas",
    capitulo: 5,
    vIni: 17,
    vFim: 26,
    titulo: "A cura de um paralítico em Cafarnaum"
  },
  "lc5.27-28": {
    id: "lc5.27-28",
    referencia: "Lc 5.27-28",
    livro: "Lucas",
    capitulo: 5,
    vIni: 27,
    vFim: 28,
    titulo: "A vocação de Levi"
  },
  "lc5.29-32": {
    id: "lc5.29-32",
    referencia: "Lc 5.29-32",
    livro: "Lucas",
    capitulo: 5,
    vIni: 29,
    vFim: 32,
    titulo: "Jesus come com pecadores"
  },
  "lc5.33-39": {
    id: "lc5.33-39",
    referencia: "Lc 5.33-39",
    livro: "Lucas",
    capitulo: 5,
    vIni: 33,
    vFim: 39,
    titulo: "Do jejum"
  },
  "lc6.1-5": {
    id: "lc6.1-5",
    referencia: "Lc 6.1-5",
    livro: "Lucas",
    capitulo: 6,
    vIni: 1,
    vFim: 5,
    titulo: "Jesus é senhor do sábado"
  },
  "lc6.6-11": {
    id: "lc6.6-11",
    referencia: "Lc 6.6-11",
    livro: "Lucas",
    capitulo: 6,
    vIni: 6,
    vFim: 11,
    titulo: "O homem da mão ressequida"
  },
  "lc6.12-16": {
    id: "lc6.12-16",
    referencia: "Lc 6.12-16",
    livro: "Lucas",
    capitulo: 6,
    vIni: 12,
    vFim: 16,
    titulo: "A escolha dos doze apóstolos. Os seus nomes"
  },
  "lc6.17-19": {
    id: "lc6.17-19",
    referencia: "Lc 6.17-19",
    livro: "Lucas",
    capitulo: 6,
    vIni: 17,
    vFim: 19,
    titulo: "Jesus cura muitos enfermos"
  },
  "lc6.20-23": {
    id: "lc6.20-23",
    referencia: "Lc 6.20-23",
    livro: "Lucas",
    capitulo: 6,
    vIni: 20,
    vFim: 23,
    titulo: "As bem-aventuranças"
  },
  "lc6.24-26": {
    id: "lc6.24-26",
    referencia: "Lc 6.24-26",
    livro: "Lucas",
    capitulo: 6,
    vIni: 24,
    vFim: 26,
    titulo: "Os ais"
  },
  "lc6.27-31": {
    id: "lc6.27-31",
    referencia: "Lc 6.27-31",
    livro: "Lucas",
    capitulo: 6,
    vIni: 27,
    vFim: 31,
    titulo: "Da vingança"
  },
  "lc6.32-36": {
    id: "lc6.32-36",
    referencia: "Lc 6.32-36",
    livro: "Lucas",
    capitulo: 6,
    vIni: 32,
    vFim: 36,
    titulo: "Do amor ao próximo"
  },
  "lc6.37-38": {
    id: "lc6.37-38",
    referencia: "Lc 6.37-38",
    livro: "Lucas",
    capitulo: 6,
    vIni: 37,
    vFim: 38,
    titulo: "O juízo temerário é proibido"
  },
  "lc6.39-42": {
    id: "lc6.39-42",
    referencia: "Lc 6.39-42",
    livro: "Lucas",
    capitulo: 6,
    vIni: 39,
    vFim: 42,
    titulo: "A parábola do cego que guia a outro cego"
  },
  "lc6.43-45": {
    id: "lc6.43-45",
    referencia: "Lc 6.43-45",
    livro: "Lucas",
    capitulo: 6,
    vIni: 43,
    vFim: 45,
    titulo: "Árvores e seus frutos"
  },
  "lc6.46-49": {
    id: "lc6.46-49",
    referencia: "Lc 6.46-49",
    livro: "Lucas",
    capitulo: 6,
    vIni: 46,
    vFim: 49,
    titulo: "Os dois fundamentos"
  },
  "lc7.1-10": {
    id: "lc7.1-10",
    referencia: "Lc 7.1-10",
    livro: "Lucas",
    capitulo: 7,
    vIni: 1,
    vFim: 10,
    titulo: "A cura do servo de um centurião"
  },
  "lc7.11-17": {
    id: "lc7.11-17",
    referencia: "Lc 7.11-17",
    livro: "Lucas",
    capitulo: 7,
    vIni: 11,
    vFim: 17,
    titulo: "A ressurreição do filho da viúva de Naim"
  },
  "lc7.18-23": {
    id: "lc7.18-23",
    referencia: "Lc 7.18-23",
    livro: "Lucas",
    capitulo: 7,
    vIni: 18,
    vFim: 23,
    titulo: "João envia mensageiros a Jesus"
  },
  "lc7.24-34": {
    id: "lc7.24-34",
    referencia: "Lc 7.24-34",
    livro: "Lucas",
    capitulo: 7,
    vIni: 24,
    vFim: 34,
    titulo: "Jesus dá testemunho de João"
  },
  "lc7.36-50": {
    id: "lc7.36-50",
    referencia: "Lc 7.36-50",
    livro: "Lucas",
    capitulo: 7,
    vIni: 36,
    vFim: 50,
    titulo: "A pecadora que ungiu os pés de Jesus"
  },
  "lc8.1-3": {
    id: "lc8.1-3",
    referencia: "Lc 8.1-3",
    livro: "Lucas",
    capitulo: 8,
    vIni: 1,
    vFim: 3,
    titulo: "As mulheres que assistiam Jesus"
  },
  "lc8.4-8": {
    id: "lc8.4-8",
    referencia: "Lc 8.4-8",
    livro: "Lucas",
    capitulo: 8,
    vIni: 4,
    vFim: 8,
    titulo: "A parábola do semeador"
  },
  "lc8.9-15": {
    id: "lc8.9-15",
    referencia: "Lc 8.9-15",
    livro: "Lucas",
    capitulo: 8,
    vIni: 9,
    vFim: 15,
    titulo: "A explicação da parábola"
  },
  "lc8.16-18": {
    id: "lc8.16-18",
    referencia: "Lc 8.16-18",
    livro: "Lucas",
    capitulo: 8,
    vIni: 16,
    vFim: 18,
    titulo: "A parábola da candeia"
  },
  "lc8.19-21": {
    id: "lc8.19-21",
    referencia: "Lc 8.19-21",
    livro: "Lucas",
    capitulo: 8,
    vIni: 19,
    vFim: 21,
    titulo: "A família de Jesus"
  },
  "lc8.22-25": {
    id: "lc8.22-25",
    referencia: "Lc 8.22-25",
    livro: "Lucas",
    capitulo: 8,
    vIni: 22,
    vFim: 25,
    titulo: "Jesus acalma uma tempestade"
  },
  "lc8.26-34": {
    id: "lc8.26-34",
    referencia: "Lc 8.26-34",
    livro: "Lucas",
    capitulo: 8,
    vIni: 26,
    vFim: 34,
    titulo: "A cura do endemoninhado geraseno"
  },
  "lc8.35-39": {
    id: "lc8.35-39",
    referencia: "Lc 8.35-39",
    livro: "Lucas",
    capitulo: 8,
    vIni: 35,
    vFim: 39,
    titulo: "Os gerasenos rejeitam Jesus"
  },
  "lc8.40-42": {
    id: "lc8.40-42",
    referencia: "Lc 8.40-42",
    livro: "Lucas",
    capitulo: 8,
    vIni: 40,
    vFim: 42,
    titulo: "O pedido de Jairo"
  },
  "lc8.43-48": {
    id: "lc8.43-48",
    referencia: "Lc 8.43-48",
    livro: "Lucas",
    capitulo: 8,
    vIni: 43,
    vFim: 48,
    titulo: "A cura de uma mulher enferma"
  },
  "lc8.49-56": {
    id: "lc8.49-56",
    referencia: "Lc 8.49-56",
    livro: "Lucas",
    capitulo: 8,
    vIni: 49,
    vFim: 56,
    titulo: "A ressurreição da filha de Jairo"
  },
  "lc9.1-6": {
    id: "lc9.1-6",
    referencia: "Lc 9.1-6",
    livro: "Lucas",
    capitulo: 9,
    vIni: 1,
    vFim: 6,
    titulo: "As instruções para os doze"
  },
  "lc9.7-9": {
    id: "lc9.7-9",
    referencia: "Lc 9.7-9",
    livro: "Lucas",
    capitulo: 9,
    vIni: 7,
    vFim: 9,
    titulo: "Herodes e João Batista"
  },
  "lc9.10-17": {
    id: "lc9.10-17",
    referencia: "Lc 9.10-17",
    livro: "Lucas",
    capitulo: 9,
    vIni: 10,
    vFim: 17,
    titulo: "A primeira multiplicação de pães e peixes"
  },
  "lc9.18-22": {
    id: "lc9.18-22",
    referencia: "Lc 9.18-22",
    livro: "Lucas",
    capitulo: 9,
    vIni: 18,
    vFim: 22,
    titulo: "A confissão de Pedro. Jesus prediz a própria morte"
  },
  "lc9.23-27": {
    id: "lc9.23-27",
    referencia: "Lc 9.23-27",
    livro: "Lucas",
    capitulo: 9,
    vIni: 23,
    vFim: 27,
    titulo: "O discípulo de Jesus deve levar a sua cruz"
  },
  "lc9.28-36": {
    id: "lc9.28-36",
    referencia: "Lc 9.28-36",
    livro: "Lucas",
    capitulo: 9,
    vIni: 28,
    vFim: 36,
    titulo: "A transfiguração"
  },
  "lc9.37-43": {
    id: "lc9.37-43",
    referencia: "Lc 9.37-43",
    livro: "Lucas",
    capitulo: 9,
    vIni: 37,
    vFim: 43,
    titulo: "A cura de um jovem possesso"
  },
  "lc9.44-45": {
    id: "lc9.44-45",
    referencia: "Lc 9.44-45",
    livro: "Lucas",
    capitulo: 9,
    vIni: 44,
    vFim: 45,
    titulo: "De novo prediz Jesus a sua morte"
  },
  "lc9.46-48": {
    id: "lc9.46-48",
    referencia: "Lc 9.46-48",
    livro: "Lucas",
    capitulo: 9,
    vIni: 46,
    vFim: 48,
    titulo: "O maior no reino dos céus"
  },
  "lc9.49-50": {
    id: "lc9.49-50",
    referencia: "Lc 9.49-50",
    livro: "Lucas",
    capitulo: 9,
    vIni: 49,
    vFim: 50,
    titulo: "Jesus ensina a tolerância e a caridade"
  },
  "lc9.51-56": {
    id: "lc9.51-56",
    referencia: "Lc 9.51-56",
    livro: "Lucas",
    capitulo: 9,
    vIni: 51,
    vFim: 56,
    titulo: "Os samaritanos não recebem Jesus"
  },
  "lc9.57-62": {
    id: "lc9.57-62",
    referencia: "Lc 9.57-62",
    livro: "Lucas",
    capitulo: 9,
    vIni: 57,
    vFim: 62,
    titulo: "Jesus põe à prova os que queriam segui-lo"
  },
  "lc10.1-12": {
    id: "lc10.1-12",
    referencia: "Lc 10.1-12",
    livro: "Lucas",
    capitulo: 10,
    vIni: 1,
    vFim: 12,
    titulo: "A missão dos setenta"
  },
  "lc10.13-16": {
    id: "lc10.13-16",
    referencia: "Lc 10.13-16",
    livro: "Lucas",
    capitulo: 10,
    vIni: 13,
    vFim: 16,
    titulo: "Ai das cidades impenitentes!"
  },
  "lc10.17-20": {
    id: "lc10.17-20",
    referencia: "Lc 10.17-20",
    livro: "Lucas",
    capitulo: 10,
    vIni: 17,
    vFim: 20,
    titulo: "O regresso dos setenta"
  },
  "lc10.21-24": {
    id: "lc10.21-24",
    referencia: "Lc 10.21-24",
    livro: "Lucas",
    capitulo: 10,
    vIni: 21,
    vFim: 24,
    titulo: "Jesus, o Salvador dos humildes"
  },
  "lc10.25-37": {
    id: "lc10.25-37",
    referencia: "Lc 10.25-37",
    livro: "Lucas",
    capitulo: 10,
    vIni: 25,
    vFim: 37,
    titulo: "O bom samaritano"
  },
  "lc10.38-42": {
    id: "lc10.38-42",
    referencia: "Lc 10.38-42",
    livro: "Lucas",
    capitulo: 10,
    vIni: 38,
    vFim: 42,
    titulo: "Marta e Maria"
  },
  "lc11.1-4": {
    id: "lc11.1-4",
    referencia: "Lc 11.1-4",
    livro: "Lucas",
    capitulo: 11,
    vIni: 1,
    vFim: 4,
    titulo: "A oração dominical"
  },
  "lc11.5-8": {
    id: "lc11.5-8",
    referencia: "Lc 11.5-8",
    livro: "Lucas",
    capitulo: 11,
    vIni: 5,
    vFim: 8,
    titulo: "A parábola do amigo importuno"
  },
  "lc11.9-13": {
    id: "lc11.9-13",
    referencia: "Lc 11.9-13",
    livro: "Lucas",
    capitulo: 11,
    vIni: 9,
    vFim: 13,
    titulo: "Jesus incita a orar"
  },
  "lc11.14-23": {
    id: "lc11.14-23",
    referencia: "Lc 11.14-23",
    livro: "Lucas",
    capitulo: 11,
    vIni: 14,
    vFim: 23,
    titulo: "A cura de um endemoninhado mudo. A blasfêmia dos fariseus. Jesus se defende"
  },
  "lc11.24-26": {
    id: "lc11.24-26",
    referencia: "Lc 11.24-26",
    livro: "Lucas",
    capitulo: 11,
    vIni: 24,
    vFim: 26,
    titulo: "A estratégia de Satanás"
  },
  "lc11.27-28": {
    id: "lc11.27-28",
    referencia: "Lc 11.27-28",
    livro: "Lucas",
    capitulo: 11,
    vIni: 27,
    vFim: 28,
    titulo: "A exclamação de uma mulher"
  },
  "lc11.29-32": {
    id: "lc11.29-32",
    referencia: "Lc 11.29-32",
    livro: "Lucas",
    capitulo: 11,
    vIni: 29,
    vFim: 32,
    titulo: "O sinal de Jonas"
  },
  "lc11.33-36": {
    id: "lc11.33-36",
    referencia: "Lc 11.33-36",
    livro: "Lucas",
    capitulo: 11,
    vIni: 33,
    vFim: 36,
    titulo: "A parábola da candeia"
  },
  "lc11.37-44": {
    id: "lc11.37-44",
    referencia: "Lc 11.37-44",
    livro: "Lucas",
    capitulo: 11,
    vIni: 37,
    vFim: 44,
    titulo: "Jesus censura os fariseus"
  },
  "lc11.45-52": {
    id: "lc11.45-52",
    referencia: "Lc 11.45-52",
    livro: "Lucas",
    capitulo: 11,
    vIni: 45,
    vFim: 52,
    titulo: "Ai dos intérpretes da Lei!"
  },
  "lc11.53-54": {
    id: "lc11.53-54",
    referencia: "Lc 11.53-54",
    livro: "Lucas",
    capitulo: 11,
    vIni: 53,
    vFim: 54,
    titulo: "O plano para tirar a vida de Jesus"
  },
  "lc12.1-12": {
    id: "lc12.1-12",
    referencia: "Lc 12.1-12",
    livro: "Lucas",
    capitulo: 12,
    vIni: 1,
    vFim: 12,
    titulo: "O fermento dos fariseus. Algumas admoestações"
  },
  "lc12.13-21": {
    id: "lc12.13-21",
    referencia: "Lc 12.13-21",
    livro: "Lucas",
    capitulo: 12,
    vIni: 13,
    vFim: 21,
    titulo: "Jesus reprova a avareza"
  },
  "lc12.22-34": {
    id: "lc12.22-34",
    referencia: "Lc 12.22-34",
    livro: "Lucas",
    capitulo: 12,
    vIni: 22,
    vFim: 34,
    titulo: "A ansiosa solicitude pela vida"
  },
  "lc12.35-48": {
    id: "lc12.35-48",
    referencia: "Lc 12.35-48",
    livro: "Lucas",
    capitulo: 12,
    vIni: 35,
    vFim: 48,
    titulo: "A parábola do servo vigilante"
  },
  "lc12.49-53": {
    id: "lc12.49-53",
    referencia: "Lc 12.49-53",
    livro: "Lucas",
    capitulo: 12,
    vIni: 49,
    vFim: 53,
    titulo: "Jesus traz fogo e dissensão à terra"
  },
  "lc12.54-59": {
    id: "lc12.54-59",
    referencia: "Lc 12.54-59",
    livro: "Lucas",
    capitulo: 12,
    vIni: 54,
    vFim: 59,
    titulo: "Os sinais dos tempos"
  },
  "lc13.1-5": {
    id: "lc13.1-5",
    referencia: "Lc 13.1-5",
    livro: "Lucas",
    capitulo: 13,
    vIni: 1,
    vFim: 5,
    titulo: "A morte dos galileus e a queda da torre de Siloé"
  },
  "lc13.6-9": {
    id: "lc13.6-9",
    referencia: "Lc 13.6-9",
    livro: "Lucas",
    capitulo: 13,
    vIni: 6,
    vFim: 9,
    titulo: "A parábola da figueira estéril"
  },
  "lc13.10-17": {
    id: "lc13.10-17",
    referencia: "Lc 13.10-17",
    livro: "Lucas",
    capitulo: 13,
    vIni: 10,
    vFim: 17,
    titulo: "A cura de uma enferma"
  },
  "lc13.18-19": {
    id: "lc13.18-19",
    referencia: "Lc 13.18-19",
    livro: "Lucas",
    capitulo: 13,
    vIni: 18,
    vFim: 19,
    titulo: "A parábola do grão de mostarda"
  },
  "lc13.20-21": {
    id: "lc13.20-21",
    referencia: "Lc 13.20-21",
    livro: "Lucas",
    capitulo: 13,
    vIni: 20,
    vFim: 21,
    titulo: "A parábola do fermento"
  },
  "lc13.22-30": {
    id: "lc13.22-30",
    referencia: "Lc 13.22-30",
    livro: "Lucas",
    capitulo: 13,
    vIni: 22,
    vFim: 30,
    titulo: "A porta estreita"
  },
  "lc13.31-35": {
    id: "lc13.31-35",
    referencia: "Lc 13.31-35",
    livro: "Lucas",
    capitulo: 13,
    vIni: 31,
    vFim: 35,
    titulo: "A mensagem de Jesus a Herodes. O lamento sobre Jerusalém"
  },
  "lc14.1-6": {
    id: "lc14.1-6",
    referencia: "Lc 14.1-6",
    livro: "Lucas",
    capitulo: 14,
    vIni: 1,
    vFim: 6,
    titulo: "A cura de um hidrópico"
  },
  "lc14.7-14": {
    id: "lc14.7-14",
    referencia: "Lc 14.7-14",
    livro: "Lucas",
    capitulo: 14,
    vIni: 7,
    vFim: 14,
    titulo: "Os primeiros lugares"
  },
  "lc14.15-24": {
    id: "lc14.15-24",
    referencia: "Lc 14.15-24",
    livro: "Lucas",
    capitulo: 14,
    vIni: 15,
    vFim: 24,
    titulo: "A parábola da grande ceia"
  },
  "lc14.25-33": {
    id: "lc14.25-33",
    referencia: "Lc 14.25-33",
    livro: "Lucas",
    capitulo: 14,
    vIni: 25,
    vFim: 33,
    titulo: "O serviço de Cristo exige abnegação"
  },
  "lc14.34-35": {
    id: "lc14.34-35",
    referencia: "Lc 14.34-35",
    livro: "Lucas",
    capitulo: 14,
    vIni: 34,
    vFim: 35,
    titulo: "Os discípulos, sal da terra"
  },
  "lc15.1-2": {
    id: "lc15.1-2",
    referencia: "Lc 15.1-2",
    livro: "Lucas",
    capitulo: 15,
    vIni: 1,
    vFim: 2,
    titulo: "Jesus recebe pecadores"
  },
  "lc15.3-7": {
    id: "lc15.3-7",
    referencia: "Lc 15.3-7",
    livro: "Lucas",
    capitulo: 15,
    vIni: 3,
    vFim: 7,
    titulo: "A parábola da ovelha perdida"
  },
  "lc15.8-10": {
    id: "lc15.8-10",
    referencia: "Lc 15.8-10",
    livro: "Lucas",
    capitulo: 15,
    vIni: 8,
    vFim: 10,
    titulo: "A parábola da dracma perdida"
  },
  "lc15.11-32": {
    id: "lc15.11-32",
    referencia: "Lc 15.11-32",
    livro: "Lucas",
    capitulo: 15,
    vIni: 11,
    vFim: 32,
    titulo: "A parábola do filho pródigo"
  },
  "lc16.1-13": {
    id: "lc16.1-13",
    referencia: "Lc 16.1-13",
    livro: "Lucas",
    capitulo: 16,
    vIni: 1,
    vFim: 13,
    titulo: "A parábola do administrador infiel"
  },
  "lc16.14-17": {
    id: "lc16.14-17",
    referencia: "Lc 16.14-17",
    livro: "Lucas",
    capitulo: 16,
    vIni: 14,
    vFim: 17,
    titulo: "Jesus reprova os fariseus"
  },
  "lc16.18": {
    id: "lc16.18",
    referencia: "Lc 16.18",
    livro: "Lucas",
    capitulo: 16,
    vIni: 18,
    vFim: 18,
    titulo: "Acerca do divórcio"
  },
  "lc16.19-31": {
    id: "lc16.19-31",
    referencia: "Lc 16.19-31",
    livro: "Lucas",
    capitulo: 16,
    vIni: 19,
    vFim: 31,
    titulo: "O rico e o mendigo"
  },
  "lc17.1-2": {
    id: "lc17.1-2",
    referencia: "Lc 17.1-2",
    livro: "Lucas",
    capitulo: 17,
    vIni: 1,
    vFim: 2,
    titulo: "Os tropeços"
  },
  "lc17.3-10": {
    id: "lc17.3-10",
    referencia: "Lc 17.3-10",
    livro: "Lucas",
    capitulo: 17,
    vIni: 3,
    vFim: 10,
    titulo: "Quantas vezes se deve perdoar a um irmão"
  },
  "lc17.11-19": {
    id: "lc17.11-19",
    referencia: "Lc 17.11-19",
    livro: "Lucas",
    capitulo: 17,
    vIni: 11,
    vFim: 19,
    titulo: "A cura de dez leprosos"
  },
  "lc17.20-37": {
    id: "lc17.20-37",
    referencia: "Lc 17.20-37",
    livro: "Lucas",
    capitulo: 17,
    vIni: 20,
    vFim: 37,
    titulo: "A vinda do reino de Deus"
  },
  "lc18.1-8": {
    id: "lc18.1-8",
    referencia: "Lc 18.1-8",
    livro: "Lucas",
    capitulo: 18,
    vIni: 1,
    vFim: 8,
    titulo: "A parábola do juiz iníquo"
  },
  "lc18.9-14": {
    id: "lc18.9-14",
    referencia: "Lc 18.9-14",
    livro: "Lucas",
    capitulo: 18,
    vIni: 9,
    vFim: 14,
    titulo: "A parábola do fariseu e o publicano"
  },
  "lc18.15-17": {
    id: "lc18.15-17",
    referencia: "Lc 18.15-17",
    livro: "Lucas",
    capitulo: 18,
    vIni: 15,
    vFim: 17,
    titulo: "Jesus abençoa as crianças"
  },
  "lc18.18-23": {
    id: "lc18.18-23",
    referencia: "Lc 18.18-23",
    livro: "Lucas",
    capitulo: 18,
    vIni: 18,
    vFim: 23,
    titulo: "O jovem rico"
  },
  "lc18.24-30": {
    id: "lc18.24-30",
    referencia: "Lc 18.24-30",
    livro: "Lucas",
    capitulo: 18,
    vIni: 24,
    vFim: 30,
    titulo: "O perigo das riquezas"
  },
  "lc18.31-34": {
    id: "lc18.31-34",
    referencia: "Lc 18.31-34",
    livro: "Lucas",
    capitulo: 18,
    vIni: 31,
    vFim: 34,
    titulo: "Jesus outra vez prediz sua morte e ressurreição"
  },
  "lc18.35-43": {
    id: "lc18.35-43",
    referencia: "Lc 18.35-43",
    livro: "Lucas",
    capitulo: 18,
    vIni: 35,
    vFim: 43,
    titulo: "A cura do cego de Jericó"
  },
  "lc19.1-10": {
    id: "lc19.1-10",
    referencia: "Lc 19.1-10",
    livro: "Lucas",
    capitulo: 19,
    vIni: 1,
    vFim: 10,
    titulo: "Zaqueu, o publicano"
  },
  "lc19.11-27": {
    id: "lc19.11-27",
    referencia: "Lc 19.11-27",
    livro: "Lucas",
    capitulo: 19,
    vIni: 11,
    vFim: 27,
    titulo: "A parábola das dez minas"
  },
  "lc19.28-40": {
    id: "lc19.28-40",
    referencia: "Lc 19.28-40",
    livro: "Lucas",
    capitulo: 19,
    vIni: 28,
    vFim: 40,
    titulo: "A entrada triunfal de Jesus em Jerusalém"
  },
  "lc19.41-44": {
    id: "lc19.41-44",
    referencia: "Lc 19.41-44",
    livro: "Lucas",
    capitulo: 19,
    vIni: 41,
    vFim: 44,
    titulo: "Jesus chora à vista de Jerusalém"
  },
  "lc19.45-46": {
    id: "lc19.45-46",
    referencia: "Lc 19.45-46",
    livro: "Lucas",
    capitulo: 19,
    vIni: 45,
    vFim: 46,
    titulo: "A purificação do templo"
  },
  "lc19.47-48": {
    id: "lc19.47-48",
    referencia: "Lc 19.47-48",
    livro: "Lucas",
    capitulo: 19,
    vIni: 47,
    vFim: 48,
    titulo: "O Mestre ensina no templo"
  },
  "lc20.1-8": {
    id: "lc20.1-8",
    referencia: "Lc 20.1-8",
    livro: "Lucas",
    capitulo: 20,
    vIni: 1,
    vFim: 8,
    titulo: "A autoridade de Jesus e o batismo de João"
  },
  "lc20.9-18": {
    id: "lc20.9-18",
    referencia: "Lc 20.9-18",
    livro: "Lucas",
    capitulo: 20,
    vIni: 9,
    vFim: 18,
    titulo: "A parábola dos lavradores maus"
  },
  "lc20.19-26": {
    id: "lc20.19-26",
    referencia: "Lc 20.19-26",
    livro: "Lucas",
    capitulo: 20,
    vIni: 19,
    vFim: 26,
    titulo: "A questão do tributo"
  },
  "lc20.27-40": {
    id: "lc20.27-40",
    referencia: "Lc 20.27-40",
    livro: "Lucas",
    capitulo: 20,
    vIni: 27,
    vFim: 40,
    titulo: "Os saduceus e a ressurreição"
  },
  "lc20.41-44": {
    id: "lc20.41-44",
    referencia: "Lc 20.41-44",
    livro: "Lucas",
    capitulo: 20,
    vIni: 41,
    vFim: 44,
    titulo: "O Cristo, filho de Davi"
  },
  "lc20.45-47": {
    id: "lc20.45-47",
    referencia: "Lc 20.45-47",
    livro: "Lucas",
    capitulo: 20,
    vIni: 45,
    vFim: 47,
    titulo: "Jesus censura os escribas"
  },
  "lc21.1-4": {
    id: "lc21.1-4",
    referencia: "Lc 21.1-4",
    livro: "Lucas",
    capitulo: 21,
    vIni: 1,
    vFim: 4,
    titulo: "A oferta da viúva pobre"
  },
  "lc21.5-6": {
    id: "lc21.5-6",
    referencia: "Lc 21.5-6",
    livro: "Lucas",
    capitulo: 21,
    vIni: 5,
    vFim: 6,
    titulo: "A destruição do templo"
  },
  "lc21.7-19": {
    id: "lc21.7-19",
    referencia: "Lc 21.7-19",
    livro: "Lucas",
    capitulo: 21,
    vIni: 7,
    vFim: 19,
    titulo: "O princípio das dores"
  },
  "lc21.20-24": {
    id: "lc21.20-24",
    referencia: "Lc 21.20-24",
    livro: "Lucas",
    capitulo: 21,
    vIni: 20,
    vFim: 24,
    titulo: "Jerusalém sitiada"
  },
  "lc21.25-28": {
    id: "lc21.25-28",
    referencia: "Lc 21.25-28",
    livro: "Lucas",
    capitulo: 21,
    vIni: 25,
    vFim: 28,
    titulo: "A vinda do Filho do Homem"
  },
  "lc21.29-36": {
    id: "lc21.29-36",
    referencia: "Lc 21.29-36",
    livro: "Lucas",
    capitulo: 21,
    vIni: 29,
    vFim: 36,
    titulo: "A parábola da figueira. Exortação à vigilância"
  },
  "lc21.37-38": {
    id: "lc21.37-38",
    referencia: "Lc 21.37-38",
    livro: "Lucas",
    capitulo: 21,
    vIni: 37,
    vFim: 38,
    titulo: "O povo vai ter com Jesus para o ouvir"
  },
  "lc22.1-2": {
    id: "lc22.1-2",
    referencia: "Lc 22.1-2",
    livro: "Lucas",
    capitulo: 22,
    vIni: 1,
    vFim: 2,
    titulo: "O plano para tirar a vida de Jesus"
  },
  "lc22.3-6": {
    id: "lc22.3-6",
    referencia: "Lc 22.3-6",
    livro: "Lucas",
    capitulo: 22,
    vIni: 3,
    vFim: 6,
    titulo: "O pacto da traição"
  },
  "lc22.7-13": {
    id: "lc22.7-13",
    referencia: "Lc 22.7-13",
    livro: "Lucas",
    capitulo: 22,
    vIni: 7,
    vFim: 13,
    titulo: "Os discípulos preparam a Páscoa"
  },
  "lc22.14-18": {
    id: "lc22.14-18",
    referencia: "Lc 22.14-18",
    livro: "Lucas",
    capitulo: 22,
    vIni: 14,
    vFim: 18,
    titulo: "A última Páscoa"
  },
  "lc22.19-23": {
    id: "lc22.19-23",
    referencia: "Lc 22.19-23",
    livro: "Lucas",
    capitulo: 22,
    vIni: 19,
    vFim: 23,
    titulo: "A Ceia do Senhor"
  },
  "lc22.24-30": {
    id: "lc22.24-30",
    referencia: "Lc 22.24-30",
    livro: "Lucas",
    capitulo: 22,
    vIni: 24,
    vFim: 30,
    titulo: "Seja o maior como o menor"
  },
  "lc22.31-34": {
    id: "lc22.31-34",
    referencia: "Lc 22.31-34",
    livro: "Lucas",
    capitulo: 22,
    vIni: 31,
    vFim: 34,
    titulo: "Pedro é avisado"
  },
  "lc22.35-38": {
    id: "lc22.35-38",
    referencia: "Lc 22.35-38",
    livro: "Lucas",
    capitulo: 22,
    vIni: 35,
    vFim: 38,
    titulo: "As duas espadas"
  },
  "lc22.39-46": {
    id: "lc22.39-46",
    referencia: "Lc 22.39-46",
    livro: "Lucas",
    capitulo: 22,
    vIni: 39,
    vFim: 46,
    titulo: "Jesus no Getsêmani"
  },
  "lc22.47-53": {
    id: "lc22.47-53",
    referencia: "Lc 22.47-53",
    livro: "Lucas",
    capitulo: 22,
    vIni: 47,
    vFim: 53,
    titulo: "Jesus é preso"
  },
  "lc22.54-62": {
    id: "lc22.54-62",
    referencia: "Lc 22.54-62",
    livro: "Lucas",
    capitulo: 22,
    vIni: 54,
    vFim: 62,
    titulo: "Pedro nega a Jesus"
  },
  "lc22.63-65": {
    id: "lc22.63-65",
    referencia: "Lc 22.63-65",
    livro: "Lucas",
    capitulo: 22,
    vIni: 63,
    vFim: 65,
    titulo: "Os guardas zombam de Jesus"
  },
  "lc22.66-71": {
    id: "lc22.66-71",
    referencia: "Lc 22.66-71",
    livro: "Lucas",
    capitulo: 22,
    vIni: 66,
    vFim: 71,
    titulo: "Jesus perante o Sinédrio"
  },
  "lc23.1-7": {
    id: "lc23.1-7",
    referencia: "Lc 23.1-7",
    livro: "Lucas",
    capitulo: 23,
    vIni: 1,
    vFim: 7,
    titulo: "Jesus perante Pilatos"
  },
  "lc23.8-12": {
    id: "lc23.8-12",
    referencia: "Lc 23.8-12",
    livro: "Lucas",
    capitulo: 23,
    vIni: 8,
    vFim: 12,
    titulo: "Jesus perante Herodes"
  },
  "lc23.13-25": {
    id: "lc23.13-25",
    referencia: "Lc 23.13-25",
    livro: "Lucas",
    capitulo: 23,
    vIni: 13,
    vFim: 25,
    titulo: "Jesus outra vez perante Pilatos"
  },
  "lc23.26": {
    id: "lc23.26",
    referencia: "Lc 23.26",
    livro: "Lucas",
    capitulo: 23,
    vIni: 26,
    vFim: 26,
    titulo: "Simão leva a cruz de Jesus"
  },
  "lc23.27-32": {
    id: "lc23.27-32",
    referencia: "Lc 23.27-32",
    livro: "Lucas",
    capitulo: 23,
    vIni: 27,
    vFim: 32,
    titulo: "Jesus rumo ao Calvário"
  },
  "lc23.33-38": {
    id: "lc23.33-38",
    referencia: "Lc 23.33-38",
    livro: "Lucas",
    capitulo: 23,
    vIni: 33,
    vFim: 38,
    titulo: "A crucificação"
  },
  "lc23.39-43": {
    id: "lc23.39-43",
    referencia: "Lc 23.39-43",
    livro: "Lucas",
    capitulo: 23,
    vIni: 39,
    vFim: 43,
    titulo: "Os dois malfeitores"
  },
  "lc23.44-49": {
    id: "lc23.44-49",
    referencia: "Lc 23.44-49",
    livro: "Lucas",
    capitulo: 23,
    vIni: 44,
    vFim: 49,
    titulo: "A morte de Jesus"
  },
  "lc23.50-56": {
    id: "lc23.50-56",
    referencia: "Lc 23.50-56",
    livro: "Lucas",
    capitulo: 23,
    vIni: 50,
    vFim: 56,
    titulo: "O sepultamento de Jesus"
  },
  "lc24.1-11": {
    id: "lc24.1-11",
    referencia: "Lc 24.1-11",
    livro: "Lucas",
    capitulo: 24,
    vIni: 1,
    vFim: 11,
    titulo: "A ressurreição de Jesus"
  },
  "lc24.13-35": {
    id: "lc24.13-35",
    referencia: "Lc 24.13-35",
    livro: "Lucas",
    capitulo: 24,
    vIni: 13,
    vFim: 35,
    titulo: "Os discípulos no caminho de Emaús"
  },
  "lc24.36-43": {
    id: "lc24.36-43",
    referencia: "Lc 24.36-43",
    livro: "Lucas",
    capitulo: 24,
    vIni: 36,
    vFim: 43,
    titulo: "Jesus aparece aos discípulos"
  },
  "lc24.44-49": {
    id: "lc24.44-49",
    referencia: "Lc 24.44-49",
    livro: "Lucas",
    capitulo: 24,
    vIni: 44,
    vFim: 49,
    titulo: "Jesus explica as Escrituras"
  },
  "lc24.50-53": {
    id: "lc24.50-53",
    referencia: "Lc 24.50-53",
    livro: "Lucas",
    capitulo: 24,
    vIni: 50,
    vFim: 53,
    titulo: "A ascensão de Jesus"
  },
  "jo1.1-14": {
    id: "jo1.1-14",
    referencia: "Jo 1.1-14",
    livro: "João",
    capitulo: 1,
    vIni: 1,
    vFim: 14,
    titulo: "A encarnação do Verbo"
  },
  "jo1.15-18": {
    id: "jo1.15-18",
    referencia: "Jo 1.15-18",
    livro: "João",
    capitulo: 1,
    vIni: 15,
    vFim: 18,
    titulo: "O testemunho de João Batista"
  },
  "jo1.19-28": {
    id: "jo1.19-28",
    referencia: "Jo 1.19-28",
    livro: "João",
    capitulo: 1,
    vIni: 19,
    vFim: 28,
    titulo: "João Batista repete o seu testemunho"
  },
  "jo1.29-31": {
    id: "jo1.29-31",
    referencia: "Jo 1.29-31",
    livro: "João",
    capitulo: 1,
    vIni: 29,
    vFim: 31,
    titulo: "João Batista torna a repetir o seu testemunho"
  },
  "jo1.32-34": {
    id: "jo1.32-34",
    referencia: "Jo 1.32-34",
    livro: "João",
    capitulo: 1,
    vIni: 32,
    vFim: 34,
    titulo: "O batismo de Jesus"
  },
  "jo1.35-42": {
    id: "jo1.35-42",
    referencia: "Jo 1.35-42",
    livro: "João",
    capitulo: 1,
    vIni: 35,
    vFim: 42,
    titulo: "Dois discípulos de João Batista seguem Jesus"
  },
  "jo1.43-51": {
    id: "jo1.43-51",
    referencia: "Jo 1.43-51",
    livro: "João",
    capitulo: 1,
    vIni: 43,
    vFim: 51,
    titulo: "Filipe e Natanael"
  },
  "jo2.1-12": {
    id: "jo2.1-12",
    referencia: "Jo 2.1-12",
    livro: "João",
    capitulo: 2,
    vIni: 1,
    vFim: 12,
    titulo: "As bodas em Caná da Galileia"
  },
  "jo2.13-22": {
    id: "jo2.13-22",
    referencia: "Jo 2.13-22",
    livro: "João",
    capitulo: 2,
    vIni: 13,
    vFim: 22,
    titulo: "Jesus purifica o templo"
  },
  "jo2.23-25": {
    id: "jo2.23-25",
    referencia: "Jo 2.23-25",
    livro: "João",
    capitulo: 2,
    vIni: 23,
    vFim: 25,
    titulo: "Muitos creem em Jesus"
  },
  "jo3.1-15": {
    id: "jo3.1-15",
    referencia: "Jo 3.1-15",
    livro: "João",
    capitulo: 3,
    vIni: 1,
    vFim: 15,
    titulo: "Nicodemos visita a Jesus"
  },
  "jo3.16-21": {
    id: "jo3.16-21",
    referencia: "Jo 3.16-21",
    livro: "João",
    capitulo: 3,
    vIni: 16,
    vFim: 21,
    titulo: "A missão do Filho"
  },
  "jo3.22-30": {
    id: "jo3.22-30",
    referencia: "Jo 3.22-30",
    livro: "João",
    capitulo: 3,
    vIni: 22,
    vFim: 30,
    titulo: "Outro testemunho de João Batista"
  },
  "jo3.31-36": {
    id: "jo3.31-36",
    referencia: "Jo 3.31-36",
    livro: "João",
    capitulo: 3,
    vIni: 31,
    vFim: 36,
    titulo: "O Filho em relação ao mundo"
  },
  "jo4.1-18": {
    id: "jo4.1-18",
    referencia: "Jo 4.1-18",
    livro: "João",
    capitulo: 4,
    vIni: 1,
    vFim: 18,
    titulo: "A mulher de Samaria"
  },
  "jo4.19-30": {
    id: "jo4.19-30",
    referencia: "Jo 4.19-30",
    livro: "João",
    capitulo: 4,
    vIni: 19,
    vFim: 30,
    titulo: "A verdadeira adoração"
  },
  "jo4.31-38": {
    id: "jo4.31-38",
    referencia: "Jo 4.31-38",
    livro: "João",
    capitulo: 4,
    vIni: 31,
    vFim: 38,
    titulo: "A ceifa e os ceifeiros"
  },
  "jo4.39-42": {
    id: "jo4.39-42",
    referencia: "Jo 4.39-42",
    livro: "João",
    capitulo: 4,
    vIni: 39,
    vFim: 42,
    titulo: "Muitos samaritanos creem em Jesus"
  },
  "jo4.43-45": {
    id: "jo4.43-45",
    referencia: "Jo 4.43-45",
    livro: "João",
    capitulo: 4,
    vIni: 43,
    vFim: 45,
    titulo: "Jesus volta à Galileia"
  },
  "jo4.46-54": {
    id: "jo4.46-54",
    referencia: "Jo 4.46-54",
    livro: "João",
    capitulo: 4,
    vIni: 46,
    vFim: 54,
    titulo: "A cura do filho de um oficial do rei"
  },
  "jo5.1-18": {
    id: "jo5.1-18",
    referencia: "Jo 5.1-18",
    livro: "João",
    capitulo: 5,
    vIni: 1,
    vFim: 18,
    titulo: "A cura de um paralítico"
  },
  "jo5.19-47": {
    id: "jo5.19-47",
    referencia: "Jo 5.19-47",
    livro: "João",
    capitulo: 5,
    vIni: 19,
    vFim: 47,
    titulo: "Jesus explica a sua missão"
  },
  "jo6.1-15": {
    id: "jo6.1-15",
    referencia: "Jo 6.1-15",
    livro: "João",
    capitulo: 6,
    vIni: 1,
    vFim: 15,
    titulo: "A multiplicação de pães e peixes"
  },
  "jo6.16-21": {
    id: "jo6.16-21",
    referencia: "Jo 6.16-21",
    livro: "João",
    capitulo: 6,
    vIni: 16,
    vFim: 21,
    titulo: "Jesus anda por sobre o mar"
  },
  "jo6.22-40": {
    id: "jo6.22-40",
    referencia: "Jo 6.22-40",
    livro: "João",
    capitulo: 6,
    vIni: 22,
    vFim: 40,
    titulo: "Jesus, o pão da vida"
  },
  "jo6.41-59": {
    id: "jo6.41-59",
    referencia: "Jo 6.41-59",
    livro: "João",
    capitulo: 6,
    vIni: 41,
    vFim: 59,
    titulo: "A murmuração dos judeus"
  },
  "jo6.60-65": {
    id: "jo6.60-65",
    referencia: "Jo 6.60-65",
    livro: "João",
    capitulo: 6,
    vIni: 60,
    vFim: 65,
    titulo: "Os discípulos escandalizados"
  },
  "jo6.66-71": {
    id: "jo6.66-71",
    referencia: "Jo 6.66-71",
    livro: "João",
    capitulo: 6,
    vIni: 66,
    vFim: 71,
    titulo: "Muitos discípulos se retiram"
  },
  "jo7.1-9": {
    id: "jo7.1-9",
    referencia: "Jo 7.1-9",
    livro: "João",
    capitulo: 7,
    vIni: 1,
    vFim: 9,
    titulo: "A incredulidade dos irmãos de Jesus"
  },
  "jo7.10-13": {
    id: "jo7.10-13",
    referencia: "Jo 7.10-13",
    livro: "João",
    capitulo: 7,
    vIni: 10,
    vFim: 13,
    titulo: "Jesus na Festa dos Tabernáculos"
  },
  "jo7.14-24": {
    id: "jo7.14-24",
    referencia: "Jo 7.14-24",
    livro: "João",
    capitulo: 7,
    vIni: 14,
    vFim: 24,
    titulo: "A controvérsia entre Jesus e os judeus"
  },
  "jo7.25-36": {
    id: "jo7.25-36",
    referencia: "Jo 7.25-36",
    livro: "João",
    capitulo: 7,
    vIni: 25,
    vFim: 36,
    titulo: "Os guardas mandados para prender Jesus"
  },
  "jo7.37-44": {
    id: "jo7.37-44",
    referencia: "Jo 7.37-44",
    livro: "João",
    capitulo: 7,
    vIni: 37,
    vFim: 44,
    titulo: "Jesus, a fonte da água viva"
  },
  "jo7.45-53": {
    id: "jo7.45-53",
    referencia: "Jo 7.45-53",
    livro: "João",
    capitulo: 7,
    vIni: 45,
    vFim: 53,
    titulo: "Os guardas voltam sem Jesus"
  },
  "jo8.1-11": {
    id: "jo8.1-11",
    referencia: "Jo 8.1-11",
    livro: "João",
    capitulo: 8,
    vIni: 1,
    vFim: 11,
    titulo: "A mulher adúltera"
  },
  "jo8.12-20": {
    id: "jo8.12-20",
    referencia: "Jo 8.12-20",
    livro: "João",
    capitulo: 8,
    vIni: 12,
    vFim: 20,
    titulo: "Jesus, a luz do mundo"
  },
  "jo8.21-59": {
    id: "jo8.21-59",
    referencia: "Jo 8.21-59",
    livro: "João",
    capitulo: 8,
    vIni: 21,
    vFim: 59,
    titulo: "Jesus defende a sua missão e autoridade"
  },
  "jo9.1-12": {
    id: "jo9.1-12",
    referencia: "Jo 9.1-12",
    livro: "João",
    capitulo: 9,
    vIni: 1,
    vFim: 12,
    titulo: "A cura de um cego de nascença"
  },
  "jo9.13-34": {
    id: "jo9.13-34",
    referencia: "Jo 9.13-34",
    livro: "João",
    capitulo: 9,
    vIni: 13,
    vFim: 34,
    titulo: "Os fariseus interrogam o cego"
  },
  "jo9.35-41": {
    id: "jo9.35-41",
    referencia: "Jo 9.35-41",
    livro: "João",
    capitulo: 9,
    vIni: 35,
    vFim: 41,
    titulo: "Jesus revela-se ao cego"
  },
  "jo10.1-18": {
    id: "jo10.1-18",
    referencia: "Jo 10.1-18",
    livro: "João",
    capitulo: 10,
    vIni: 1,
    vFim: 18,
    titulo: "Jesus, o bom pastor"
  },
  "jo10.19-21": {
    id: "jo10.19-21",
    referencia: "Jo 10.19-21",
    livro: "João",
    capitulo: 10,
    vIni: 19,
    vFim: 21,
    titulo: "Nova dissensão entre os judeus"
  },
  "jo10.22-42": {
    id: "jo10.22-42",
    referencia: "Jo 10.22-42",
    livro: "João",
    capitulo: 10,
    vIni: 22,
    vFim: 42,
    titulo: "A Festa da Dedicação. Jesus é interrogado"
  },
  "jo11.1-46": {
    id: "jo11.1-46",
    referencia: "Jo 11.1-46",
    livro: "João",
    capitulo: 11,
    vIni: 1,
    vFim: 46,
    titulo: "A ressurreição de Lázaro"
  },
  "jo11.47-57": {
    id: "jo11.47-57",
    referencia: "Jo 11.47-57",
    livro: "João",
    capitulo: 11,
    vIni: 47,
    vFim: 57,
    titulo: "O plano para tirar a vida de Jesus"
  },
  "jo12.1-8": {
    id: "jo12.1-8",
    referencia: "Jo 12.1-8",
    livro: "João",
    capitulo: 12,
    vIni: 1,
    vFim: 8,
    titulo: "Jesus ungido por Maria em Betânia"
  },
  "jo12.9-11": {
    id: "jo12.9-11",
    referencia: "Jo 12.9-11",
    livro: "João",
    capitulo: 12,
    vIni: 9,
    vFim: 11,
    titulo: "O plano para tirar a vida de Lázaro"
  },
  "jo12.12-19": {
    id: "jo12.12-19",
    referencia: "Jo 12.12-19",
    livro: "João",
    capitulo: 12,
    vIni: 12,
    vFim: 19,
    titulo: "A entrada triunfal de Jesus em Jerusalém"
  },
  "jo12.20-36": {
    id: "jo12.20-36",
    referencia: "Jo 12.20-36",
    livro: "João",
    capitulo: 12,
    vIni: 20,
    vFim: 36,
    titulo: "Alguns gregos desejam ver Jesus"
  },
  "jo12.37-43": {
    id: "jo12.37-43",
    referencia: "Jo 12.37-43",
    livro: "João",
    capitulo: 12,
    vIni: 37,
    vFim: 43,
    titulo: "A explicação da incredulidade dos judeus"
  },
  "jo12.44-50": {
    id: "jo12.44-50",
    referencia: "Jo 12.44-50",
    livro: "João",
    capitulo: 12,
    vIni: 44,
    vFim: 50,
    titulo: "O resumo do ensino de Jesus"
  },
  "jo13.1-11": {
    id: "jo13.1-11",
    referencia: "Jo 13.1-11",
    livro: "João",
    capitulo: 13,
    vIni: 1,
    vFim: 11,
    titulo: "Jesus lava os pés aos discípulos"
  },
  "jo13.12-20": {
    id: "jo13.12-20",
    referencia: "Jo 13.12-20",
    livro: "João",
    capitulo: 13,
    vIni: 12,
    vFim: 20,
    titulo: "Uma lição de humildade"
  },
  "jo13.21-30": {
    id: "jo13.21-30",
    referencia: "Jo 13.21-30",
    livro: "João",
    capitulo: 13,
    vIni: 21,
    vFim: 30,
    titulo: "O traidor indicado"
  },
  "jo13.31-35": {
    id: "jo13.31-35",
    referencia: "Jo 13.31-35",
    livro: "João",
    capitulo: 13,
    vIni: 31,
    vFim: 35,
    titulo: "O novo mandamento"
  },
  "jo13.36-38": {
    id: "jo13.36-38",
    referencia: "Jo 13.36-38",
    livro: "João",
    capitulo: 13,
    vIni: 36,
    vFim: 38,
    titulo: "Pedro é avisado"
  },
  "jo14.1-15": {
    id: "jo14.1-15",
    referencia: "Jo 14.1-15",
    livro: "João",
    capitulo: 14,
    vIni: 1,
    vFim: 15,
    titulo: "Jesus conforta os discípulos"
  },
  "jo14.16-31": {
    id: "jo14.16-31",
    referencia: "Jo 14.16-31",
    livro: "João",
    capitulo: 14,
    vIni: 16,
    vFim: 31,
    titulo: "Jesus promete outro Consolador"
  },
  "jo15.1-27": {
    id: "jo15.1-27",
    referencia: "Jo 15.1-27",
    livro: "João",
    capitulo: 15,
    vIni: 1,
    vFim: 27,
    titulo: "A videira e os ramos"
  },
  "jo16.1-24": {
    id: "jo16.1-24",
    referencia: "Jo 16.1-24",
    livro: "João",
    capitulo: 16,
    vIni: 1,
    vFim: 24,
    titulo: "A missão do Consolador"
  },
  "jo16.25-33": {
    id: "jo16.25-33",
    referencia: "Jo 16.25-33",
    livro: "João",
    capitulo: 16,
    vIni: 25,
    vFim: 33,
    titulo: "Palavras de despedida"
  },
  "jo17.1-26": {
    id: "jo17.1-26",
    referencia: "Jo 17.1-26",
    livro: "João",
    capitulo: 17,
    vIni: 1,
    vFim: 26,
    titulo: "A oração sacerdotal de Jesus"
  },
  "jo18.1-11": {
    id: "jo18.1-11",
    referencia: "Jo 18.1-11",
    livro: "João",
    capitulo: 18,
    vIni: 1,
    vFim: 11,
    titulo: "Jesus no Getsêmani"
  },
  "jo18.12-14": {
    id: "jo18.12-14",
    referencia: "Jo 18.12-14",
    livro: "João",
    capitulo: 18,
    vIni: 12,
    vFim: 14,
    titulo: "Jesus perante Anás"
  },
  "jo18.15-18": {
    id: "jo18.15-18",
    referencia: "Jo 18.15-18",
    livro: "João",
    capitulo: 18,
    vIni: 15,
    vFim: 18,
    titulo: "Pedro nega a Jesus"
  },
  "jo18.19-24": {
    id: "jo18.19-24",
    referencia: "Jo 18.19-24",
    livro: "João",
    capitulo: 18,
    vIni: 19,
    vFim: 24,
    titulo: "Anás interroga a Jesus"
  },
  "jo18.25-27": {
    id: "jo18.25-27",
    referencia: "Jo 18.25-27",
    livro: "João",
    capitulo: 18,
    vIni: 25,
    vFim: 27,
    titulo: "De novo, Pedro nega a Jesus"
  },
  "jo18.28-32": {
    id: "jo18.28-32",
    referencia: "Jo 18.28-32",
    livro: "João",
    capitulo: 18,
    vIni: 28,
    vFim: 32,
    titulo: "Jesus perante Pilatos"
  },
  "jo18.33-40": {
    id: "jo18.33-40",
    referencia: "Jo 18.33-40",
    livro: "João",
    capitulo: 18,
    vIni: 33,
    vFim: 40,
    titulo: "Pilatos interroga a Jesus"
  },
  "jo19.17-22": {
    id: "jo19.17-22",
    referencia: "Jo 19.17-22",
    livro: "João",
    capitulo: 19,
    vIni: 17,
    vFim: 22,
    titulo: "A crucificação"
  },
  "jo19.23-27": {
    id: "jo19.23-27",
    referencia: "Jo 19.23-27",
    livro: "João",
    capitulo: 19,
    vIni: 23,
    vFim: 27,
    titulo: "Os soldados deitam sortes"
  },
  "jo19.28-30": {
    id: "jo19.28-30",
    referencia: "Jo 19.28-30",
    livro: "João",
    capitulo: 19,
    vIni: 28,
    vFim: 30,
    titulo: "A morte de Jesus"
  },
  "jo19.31-37": {
    id: "jo19.31-37",
    referencia: "Jo 19.31-37",
    livro: "João",
    capitulo: 19,
    vIni: 31,
    vFim: 37,
    titulo: "Um soldado abre o lado de Jesus com uma lança"
  },
  "jo19.38-42": {
    id: "jo19.38-42",
    referencia: "Jo 19.38-42",
    livro: "João",
    capitulo: 19,
    vIni: 38,
    vFim: 42,
    titulo: "O sepultamento de Jesus"
  },
  "jo20.1-10": {
    id: "jo20.1-10",
    referencia: "Jo 20.1-10",
    livro: "João",
    capitulo: 20,
    vIni: 1,
    vFim: 10,
    titulo: "A ressurreição de Jesus"
  },
  "jo20.11-18": {
    id: "jo20.11-18",
    referencia: "Jo 20.11-18",
    livro: "João",
    capitulo: 20,
    vIni: 11,
    vFim: 18,
    titulo: "Jesus aparece a Maria Madalena"
  },
  "jo20.19-23": {
    id: "jo20.19-23",
    referencia: "Jo 20.19-23",
    livro: "João",
    capitulo: 20,
    vIni: 19,
    vFim: 23,
    titulo: "Jesus aparece aos discípulos"
  },
  "jo20.24-25": {
    id: "jo20.24-25",
    referencia: "Jo 20.24-25",
    livro: "João",
    capitulo: 20,
    vIni: 24,
    vFim: 25,
    titulo: "A incredulidade de Tomé"
  },
  "jo20.26-29": {
    id: "jo20.26-29",
    referencia: "Jo 20.26-29",
    livro: "João",
    capitulo: 20,
    vIni: 26,
    vFim: 29,
    titulo: "Jesus aparece novamente aos discípulos"
  },
  "jo20.30-31": {
    id: "jo20.30-31",
    referencia: "Jo 20.30-31",
    livro: "João",
    capitulo: 20,
    vIni: 30,
    vFim: 31,
    titulo: "O objetivo deste Evangelho"
  },
  "jo21.1-14": {
    id: "jo21.1-14",
    referencia: "Jo 21.1-14",
    livro: "João",
    capitulo: 21,
    vIni: 1,
    vFim: 14,
    titulo: "Jesus aparece a sete discípulos"
  },
  "jo21.15-23": {
    id: "jo21.15-23",
    referencia: "Jo 21.15-23",
    livro: "João",
    capitulo: 21,
    vIni: 15,
    vFim: 23,
    titulo: "Pedro é interrogado"
  },
  "jo21.24-25": {
    id: "jo21.24-25",
    referencia: "Jo 21.24-25",
    livro: "João",
    capitulo: 21,
    vIni: 24,
    vFim: 25,
    titulo: "O testemunho de João"
  },
  "at1.1-5": {
    id: "at1.1-5",
    referencia: "At 1.1-5",
    livro: "Atos",
    capitulo: 1,
    vIni: 1,
    vFim: 5,
    titulo: "Prólogo"
  },
  "at1.6-11": {
    id: "at1.6-11",
    referencia: "At 1.6-11",
    livro: "Atos",
    capitulo: 1,
    vIni: 6,
    vFim: 11,
    titulo: "A ascensão de Jesus"
  },
  "at1.12-14": {
    id: "at1.12-14",
    referencia: "At 1.12-14",
    livro: "Atos",
    capitulo: 1,
    vIni: 12,
    vFim: 14,
    titulo: "Os discípulos em Jerusalém"
  },
  "at1.15-26": {
    id: "at1.15-26",
    referencia: "At 1.15-26",
    livro: "Atos",
    capitulo: 1,
    vIni: 15,
    vFim: 26,
    titulo: "A escolha de Matias"
  },
  "at2.1-4": {
    id: "at2.1-4",
    referencia: "At 2.1-4",
    livro: "Atos",
    capitulo: 2,
    vIni: 1,
    vFim: 4,
    titulo: "A descida do Espírito Santo"
  },
  "at2.5-13": {
    id: "at2.5-13",
    referencia: "At 2.5-13",
    livro: "Atos",
    capitulo: 2,
    vIni: 5,
    vFim: 13,
    titulo: "O dom de línguas"
  },
  "at2.14-36": {
    id: "at2.14-36",
    referencia: "At 2.14-36",
    livro: "Atos",
    capitulo: 2,
    vIni: 14,
    vFim: 36,
    titulo: "O discurso de Pedro"
  },
  "at2.37-41": {
    id: "at2.37-41",
    referencia: "At 2.37-41",
    livro: "Atos",
    capitulo: 2,
    vIni: 37,
    vFim: 41,
    titulo: "Três mil batizados"
  },
  "at2.42-47": {
    id: "at2.42-47",
    referencia: "At 2.42-47",
    livro: "Atos",
    capitulo: 2,
    vIni: 42,
    vFim: 47,
    titulo: "Como viviam os convertidos"
  },
  "at3.1-10": {
    id: "at3.1-10",
    referencia: "At 3.1-10",
    livro: "Atos",
    capitulo: 3,
    vIni: 1,
    vFim: 10,
    titulo: "A cura de um coxo"
  },
  "at3.11-26": {
    id: "at3.11-26",
    referencia: "At 3.11-26",
    livro: "Atos",
    capitulo: 3,
    vIni: 11,
    vFim: 26,
    titulo: "O discurso de Pedro no templo"
  },
  "at4.1-4": {
    id: "at4.1-4",
    referencia: "At 4.1-4",
    livro: "Atos",
    capitulo: 4,
    vIni: 1,
    vFim: 4,
    titulo: "Pedro e João presos"
  },
  "at4.5-22": {
    id: "at4.5-22",
    referencia: "At 4.5-22",
    livro: "Atos",
    capitulo: 4,
    vIni: 5,
    vFim: 22,
    titulo: "Pedro e João perante o Sinédrio"
  },
  "at4.23-31": {
    id: "at4.23-31",
    referencia: "At 4.23-31",
    livro: "Atos",
    capitulo: 4,
    vIni: 23,
    vFim: 31,
    titulo: "A igreja em oração"
  },
  "at4.32-35": {
    id: "at4.32-35",
    referencia: "At 4.32-35",
    livro: "Atos",
    capitulo: 4,
    vIni: 32,
    vFim: 35,
    titulo: "A comunidade cristã"
  },
  "at4.36-37": {
    id: "at4.36-37",
    referencia: "At 4.36-37",
    livro: "Atos",
    capitulo: 4,
    vIni: 36,
    vFim: 37,
    titulo: "A oferta de Barnabé"
  },
  "at5.1-11": {
    id: "at5.1-11",
    referencia: "At 5.1-11",
    livro: "Atos",
    capitulo: 5,
    vIni: 1,
    vFim: 11,
    titulo: "Ananias e Safira"
  },
  "at5.12-16": {
    id: "at5.12-16",
    referencia: "At 5.12-16",
    livro: "Atos",
    capitulo: 5,
    vIni: 12,
    vFim: 16,
    titulo: "Os apóstolos fazem muitos milagres"
  },
  "at5.17-32": {
    id: "at5.17-32",
    referencia: "At 5.17-32",
    livro: "Atos",
    capitulo: 5,
    vIni: 17,
    vFim: 32,
    titulo: "A prisão dos apóstolos"
  },
  "at5.33-42": {
    id: "at5.33-42",
    referencia: "At 5.33-42",
    livro: "Atos",
    capitulo: 5,
    vIni: 33,
    vFim: 42,
    titulo: "O parecer de Gamaliel"
  },
  "at6.1-7": {
    id: "at6.1-7",
    referencia: "At 6.1-7",
    livro: "Atos",
    capitulo: 6,
    vIni: 1,
    vFim: 7,
    titulo: "A instituição dos diáconos"
  },
  "at6.8-15": {
    id: "at6.8-15",
    referencia: "At 6.8-15",
    livro: "Atos",
    capitulo: 6,
    vIni: 8,
    vFim: 15,
    titulo: "Estêvão perante o Sinédrio"
  },
  "at7.1-53": {
    id: "at7.1-53",
    referencia: "At 7.1-53",
    livro: "Atos",
    capitulo: 7,
    vIni: 1,
    vFim: 53,
    titulo: "A defesa de Estêvão"
  },
  "at7.54-60": {
    id: "at7.54-60",
    referencia: "At 7.54-60",
    livro: "Atos",
    capitulo: 7,
    vIni: 54,
    vFim: 60,
    titulo: "A morte de Estêvão"
  },
  "at8.2-3": {
    id: "at8.2-3",
    referencia: "At 8.2-3",
    livro: "Atos",
    capitulo: 8,
    vIni: 2,
    vFim: 3,
    titulo: "A primeira perseguição à igreja"
  },
  "at8.4-8": {
    id: "at8.4-8",
    referencia: "At 8.4-8",
    livro: "Atos",
    capitulo: 8,
    vIni: 4,
    vFim: 8,
    titulo: "Filipe prega em Samaria"
  },
  "at8.9-13": {
    id: "at8.9-13",
    referencia: "At 8.9-13",
    livro: "Atos",
    capitulo: 8,
    vIni: 9,
    vFim: 13,
    titulo: "Simão, o mágico"
  },
  "at8.14-25": {
    id: "at8.14-25",
    referencia: "At 8.14-25",
    livro: "Atos",
    capitulo: 8,
    vIni: 14,
    vFim: 25,
    titulo: "Pedro e João em Samaria"
  },
  "at8.26-40": {
    id: "at8.26-40",
    referencia: "At 8.26-40",
    livro: "Atos",
    capitulo: 8,
    vIni: 26,
    vFim: 40,
    titulo: "Filipe e o eunuco"
  },
  "at9.1-9": {
    id: "at9.1-9",
    referencia: "At 9.1-9",
    livro: "Atos",
    capitulo: 9,
    vIni: 1,
    vFim: 9,
    titulo: "A conversão de Saulo"
  },
  "at9.10-19": {
    id: "at9.10-19",
    referencia: "At 9.10-19",
    livro: "Atos",
    capitulo: 9,
    vIni: 10,
    vFim: 19,
    titulo: "A visita de Ananias"
  },
  "at9.20-25": {
    id: "at9.20-25",
    referencia: "At 9.20-25",
    livro: "Atos",
    capitulo: 9,
    vIni: 20,
    vFim: 25,
    titulo: "Saulo prega em Damasco"
  },
  "at9.26-30": {
    id: "at9.26-30",
    referencia: "At 9.26-30",
    livro: "Atos",
    capitulo: 9,
    vIni: 26,
    vFim: 30,
    titulo: "Saulo em Jerusalém e em Tarso"
  },
  "at9.31": {
    id: "at9.31",
    referencia: "At 9.31",
    livro: "Atos",
    capitulo: 9,
    vIni: 31,
    vFim: 31,
    titulo: "A igreja cresce"
  },
  "at9.32-35": {
    id: "at9.32-35",
    referencia: "At 9.32-35",
    livro: "Atos",
    capitulo: 9,
    vIni: 32,
    vFim: 35,
    titulo: "A cura de Eneias"
  },
  "at9.36-43": {
    id: "at9.36-43",
    referencia: "At 9.36-43",
    livro: "Atos",
    capitulo: 9,
    vIni: 36,
    vFim: 43,
    titulo: "A ressurreição de Dorcas"
  },
  "at10.1-8": {
    id: "at10.1-8",
    referencia: "At 10.1-8",
    livro: "Atos",
    capitulo: 10,
    vIni: 1,
    vFim: 8,
    titulo: "O centurião Cornélio"
  },
  "at10.9-16": {
    id: "at10.9-16",
    referencia: "At 10.9-16",
    livro: "Atos",
    capitulo: 10,
    vIni: 9,
    vFim: 16,
    titulo: "Pedro tem uma visão"
  },
  "at10.17-22": {
    id: "at10.17-22",
    referencia: "At 10.17-22",
    livro: "Atos",
    capitulo: 10,
    vIni: 17,
    vFim: 22,
    titulo: "Os enviados de Cornélio chegam a Jope"
  },
  "at10.23-43": {
    id: "at10.23-43",
    referencia: "At 10.23-43",
    livro: "Atos",
    capitulo: 10,
    vIni: 23,
    vFim: 43,
    titulo: "Pedro vai com eles"
  },
  "at10.44-48": {
    id: "at10.44-48",
    referencia: "At 10.44-48",
    livro: "Atos",
    capitulo: 10,
    vIni: 44,
    vFim: 48,
    titulo: "O Espírito Santo desce sobre os gentios"
  },
  "at11.1-18": {
    id: "at11.1-18",
    referencia: "At 11.1-18",
    livro: "Atos",
    capitulo: 11,
    vIni: 1,
    vFim: 18,
    titulo: "A defesa de Pedro"
  },
  "at11.19-26": {
    id: "at11.19-26",
    referencia: "At 11.19-26",
    livro: "Atos",
    capitulo: 11,
    vIni: 19,
    vFim: 26,
    titulo: "Os discípulos são chamados cristãos em Antioquia"
  },
  "at11.27-30": {
    id: "at11.27-30",
    referencia: "At 11.27-30",
    livro: "Atos",
    capitulo: 11,
    vIni: 27,
    vFim: 30,
    titulo: "Ágabo prediz grande fome"
  },
  "at12.1-8": {
    id: "at12.1-8",
    referencia: "At 12.1-8",
    livro: "Atos",
    capitulo: 12,
    vIni: 1,
    vFim: 8,
    titulo: "Herodes persegue a Tiago e a Pedro"
  },
  "at12.9-19": {
    id: "at12.9-19",
    referencia: "At 12.9-19",
    livro: "Atos",
    capitulo: 12,
    vIni: 9,
    vFim: 19,
    titulo: "Pedro é livre da prisão"
  },
  "at12.20-25": {
    id: "at12.20-25",
    referencia: "At 12.20-25",
    livro: "Atos",
    capitulo: 12,
    vIni: 20,
    vFim: 25,
    titulo: "A morte de Herodes"
  },
  "at13.1-3": {
    id: "at13.1-3",
    referencia: "At 13.1-3",
    livro: "Atos",
    capitulo: 13,
    vIni: 1,
    vFim: 3,
    titulo: "Barnabé e Saulo. A primeira viagem missionária"
  },
  "at13.4-12": {
    id: "at13.4-12",
    referencia: "At 13.4-12",
    livro: "Atos",
    capitulo: 13,
    vIni: 4,
    vFim: 12,
    titulo: "Elimas, o mágico"
  },
  "at13.13-15": {
    id: "at13.13-15",
    referencia: "At 13.13-15",
    livro: "Atos",
    capitulo: 13,
    vIni: 13,
    vFim: 15,
    titulo: "João Marcos volta a Jerusalém"
  },
  "at13.16-41": {
    id: "at13.16-41",
    referencia: "At 13.16-41",
    livro: "Atos",
    capitulo: 13,
    vIni: 16,
    vFim: 41,
    titulo: "O testemunho de Paulo em Antioquia"
  },
  "at13.42-43": {
    id: "at13.42-43",
    referencia: "At 13.42-43",
    livro: "Atos",
    capitulo: 13,
    vIni: 42,
    vFim: 43,
    titulo: "Instados a pregar no sábado seguinte"
  },
  "at13.44-52": {
    id: "at13.44-52",
    referencia: "At 13.44-52",
    livro: "Atos",
    capitulo: 13,
    vIni: 44,
    vFim: 52,
    titulo: "Paulo e Barnabé vão para os gentios"
  },
  "at14.1-7": {
    id: "at14.1-7",
    referencia: "At 14.1-7",
    livro: "Atos",
    capitulo: 14,
    vIni: 1,
    vFim: 7,
    titulo: "Paulo e Barnabé em Icônio"
  },
  "at14.8-18": {
    id: "at14.8-18",
    referencia: "At 14.8-18",
    livro: "Atos",
    capitulo: 14,
    vIni: 8,
    vFim: 18,
    titulo: "A cura de um coxo em Listra"
  },
  "at14.19-27": {
    id: "at14.19-27",
    referencia: "At 14.19-27",
    livro: "Atos",
    capitulo: 14,
    vIni: 19,
    vFim: 27,
    titulo: "Paulo é apedrejado"
  },
  "at15.1-5": {
    id: "at15.1-5",
    referencia: "At 15.1-5",
    livro: "Atos",
    capitulo: 15,
    vIni: 1,
    vFim: 5,
    titulo: "A controvérsia sobre a circuncisão de gentios"
  },
  "at15.6-11": {
    id: "at15.6-11",
    referencia: "At 15.6-11",
    livro: "Atos",
    capitulo: 15,
    vIni: 6,
    vFim: 11,
    titulo: "A reunião dos apóstolos e presbíteros em Jerusalém"
  },
  "at15.12-21": {
    id: "at15.12-21",
    referencia: "At 15.12-21",
    livro: "Atos",
    capitulo: 15,
    vIni: 12,
    vFim: 21,
    titulo: "O parecer de Tiago"
  },
  "at15.22-29": {
    id: "at15.22-29",
    referencia: "At 15.22-29",
    livro: "Atos",
    capitulo: 15,
    vIni: 22,
    vFim: 29,
    titulo: "A decisão enviada a Antioquia"
  },
  "at15.30-35": {
    id: "at15.30-35",
    referencia: "At 15.30-35",
    livro: "Atos",
    capitulo: 15,
    vIni: 30,
    vFim: 35,
    titulo: "A leitura da mensagem"
  },
  "at15.36-41": {
    id: "at15.36-41",
    referencia: "At 15.36-41",
    livro: "Atos",
    capitulo: 15,
    vIni: 36,
    vFim: 41,
    titulo: "A segunda viagem missionária. Separação entre Paulo e Barnabé"
  },
  "at16.1-5": {
    id: "at16.1-5",
    referencia: "At 16.1-5",
    livro: "Atos",
    capitulo: 16,
    vIni: 1,
    vFim: 5,
    titulo: "Paulo leva consigo a Timóteo"
  },
  "at16.6-10": {
    id: "at16.6-10",
    referencia: "At 16.6-10",
    livro: "Atos",
    capitulo: 16,
    vIni: 6,
    vFim: 10,
    titulo: "A visão em Trôade"
  },
  "at16.11-15": {
    id: "at16.11-15",
    referencia: "At 16.11-15",
    livro: "Atos",
    capitulo: 16,
    vIni: 11,
    vFim: 15,
    titulo: "Paulo em Filipos. Lídia convertida"
  },
  "at16.16-18": {
    id: "at16.16-18",
    referencia: "At 16.16-18",
    livro: "Atos",
    capitulo: 16,
    vIni: 16,
    vFim: 18,
    titulo: "A cura de uma jovem adivinhadora"
  },
  "at16.19-26": {
    id: "at16.19-26",
    referencia: "At 16.19-26",
    livro: "Atos",
    capitulo: 16,
    vIni: 19,
    vFim: 26,
    titulo: "Paulo e Silas açoitados e presos"
  },
  "at16.27-34": {
    id: "at16.27-34",
    referencia: "At 16.27-34",
    livro: "Atos",
    capitulo: 16,
    vIni: 27,
    vFim: 34,
    titulo: "A conversão do carcereiro"
  },
  "at16.35-40": {
    id: "at16.35-40",
    referencia: "At 16.35-40",
    livro: "Atos",
    capitulo: 16,
    vIni: 35,
    vFim: 40,
    titulo: "Paulo e Silas livres da prisão"
  },
  "at17.1-9": {
    id: "at17.1-9",
    referencia: "At 17.1-9",
    livro: "Atos",
    capitulo: 17,
    vIni: 1,
    vFim: 9,
    titulo: "Paulo e Silas em Tessalônica"
  },
  "at17.10-15": {
    id: "at17.10-15",
    referencia: "At 17.10-15",
    livro: "Atos",
    capitulo: 17,
    vIni: 10,
    vFim: 15,
    titulo: "Paulo e Silas em Bereia"
  },
  "at17.16-31": {
    id: "at17.16-31",
    referencia: "At 17.16-31",
    livro: "Atos",
    capitulo: 17,
    vIni: 16,
    vFim: 31,
    titulo: "O discurso de Paulo em Atenas"
  },
  "at17.32-34": {
    id: "at17.32-34",
    referencia: "At 17.32-34",
    livro: "Atos",
    capitulo: 17,
    vIni: 32,
    vFim: 34,
    titulo: "Uns zombam, outros creem"
  },
  "at18.1-4": {
    id: "at18.1-4",
    referencia: "At 18.1-4",
    livro: "Atos",
    capitulo: 18,
    vIni: 1,
    vFim: 4,
    titulo: "Paulo em Corinto"
  },
  "at18.5-11": {
    id: "at18.5-11",
    referencia: "At 18.5-11",
    livro: "Atos",
    capitulo: 18,
    vIni: 5,
    vFim: 11,
    titulo: "Paulo anuncia a Jesus"
  },
  "at18.12-17": {
    id: "at18.12-17",
    referencia: "At 18.12-17",
    livro: "Atos",
    capitulo: 18,
    vIni: 12,
    vFim: 17,
    titulo: "Paulo perante Gálio"
  },
  "at18.18-23": {
    id: "at18.18-23",
    referencia: "At 18.18-23",
    livro: "Atos",
    capitulo: 18,
    vIni: 18,
    vFim: 23,
    titulo: "O final da segunda viagem missionária de Paulo"
  },
  "at18.24-28": {
    id: "at18.24-28",
    referencia: "At 18.24-28",
    livro: "Atos",
    capitulo: 18,
    vIni: 24,
    vFim: 28,
    titulo: "A terceira viagem missionária de Paulo. Apolo em Éfeso"
  },
  "at19.1-7": {
    id: "at19.1-7",
    referencia: "At 19.1-7",
    livro: "Atos",
    capitulo: 19,
    vIni: 1,
    vFim: 7,
    titulo: "Paulo em Éfeso"
  },
  "at19.8-20": {
    id: "at19.8-20",
    referencia: "At 19.8-20",
    livro: "Atos",
    capitulo: 19,
    vIni: 8,
    vFim: 20,
    titulo: "Paulo na escola de Tirano"
  },
  "at19.21-22": {
    id: "at19.21-22",
    referencia: "At 19.21-22",
    livro: "Atos",
    capitulo: 19,
    vIni: 21,
    vFim: 22,
    titulo: "Paulo envia à Macedônia Timóteo e Erasto"
  },
  "at19.23-41": {
    id: "at19.23-41",
    referencia: "At 19.23-41",
    livro: "Atos",
    capitulo: 19,
    vIni: 23,
    vFim: 41,
    titulo: "Demétrio excita grande tumulto"
  },
  "at20.1-6": {
    id: "at20.1-6",
    referencia: "At 20.1-6",
    livro: "Atos",
    capitulo: 20,
    vIni: 1,
    vFim: 6,
    titulo: "De novo, Paulo visita a Macedônia e a Grécia"
  },
  "at20.7-12": {
    id: "at20.7-12",
    referencia: "At 20.7-12",
    livro: "Atos",
    capitulo: 20,
    vIni: 7,
    vFim: 12,
    titulo: "Paulo em Trôade"
  },
  "at20.13-16": {
    id: "at20.13-16",
    referencia: "At 20.13-16",
    livro: "Atos",
    capitulo: 20,
    vIni: 13,
    vFim: 16,
    titulo: "Paulo embarca em Assôs. Chega a Mileto"
  },
  "at20.17-35": {
    id: "at20.17-35",
    referencia: "At 20.17-35",
    livro: "Atos",
    capitulo: 20,
    vIni: 17,
    vFim: 35,
    titulo: "Em Mileto, fala aos presbíteros da igreja de Éfeso"
  },
  "at20.36-38": {
    id: "at20.36-38",
    referencia: "At 20.36-38",
    livro: "Atos",
    capitulo: 20,
    vIni: 36,
    vFim: 38,
    titulo: "Paulo ora com eles"
  },
  "at21.1-6": {
    id: "at21.1-6",
    referencia: "At 21.1-6",
    livro: "Atos",
    capitulo: 21,
    vIni: 1,
    vFim: 6,
    titulo: "Paulo chega a Tiro"
  },
  "at21.7-16": {
    id: "at21.7-16",
    referencia: "At 21.7-16",
    livro: "Atos",
    capitulo: 21,
    vIni: 7,
    vFim: 16,
    titulo: "Paulo em Cesareia"
  },
  "at21.17-26": {
    id: "at21.17-26",
    referencia: "At 21.17-26",
    livro: "Atos",
    capitulo: 21,
    vIni: 17,
    vFim: 26,
    titulo: "Paulo chega a Jerusalém"
  },
  "at21.27-40": {
    id: "at21.27-40",
    referencia: "At 21.27-40",
    livro: "Atos",
    capitulo: 21,
    vIni: 27,
    vFim: 40,
    titulo: "A prisão de Paulo"
  },
  "at22.1-21": {
    id: "at22.1-21",
    referencia: "At 22.1-21",
    livro: "Atos",
    capitulo: 22,
    vIni: 1,
    vFim: 21,
    titulo: "Paulo apresenta a sua defesa"
  },
  "at22.22-30": {
    id: "at22.22-30",
    referencia: "At 22.22-30",
    livro: "Atos",
    capitulo: 22,
    vIni: 22,
    vFim: 30,
    titulo: "Paulo livra-se de ser açoitado"
  },
  "at23.1-10": {
    id: "at23.1-10",
    referencia: "At 23.1-10",
    livro: "Atos",
    capitulo: 23,
    vIni: 1,
    vFim: 10,
    titulo: "Paulo perante o Sinédrio"
  },
  "at23.11": {
    id: "at23.11",
    referencia: "At 23.11",
    livro: "Atos",
    capitulo: 23,
    vIni: 11,
    vFim: 11,
    titulo: "O Senhor aparece a Paulo"
  },
  "at23.12-25": {
    id: "at23.12-25",
    referencia: "At 23.12-25",
    livro: "Atos",
    capitulo: 23,
    vIni: 12,
    vFim: 25,
    titulo: "A cilada dos judeus"
  },
  "at23.26-30": {
    id: "at23.26-30",
    referencia: "At 23.26-30",
    livro: "Atos",
    capitulo: 23,
    vIni: 26,
    vFim: 30,
    titulo: "A carta de Cláudio a Félix"
  },
  "at23.31-35": {
    id: "at23.31-35",
    referencia: "At 23.31-35",
    livro: "Atos",
    capitulo: 23,
    vIni: 31,
    vFim: 35,
    titulo: "Paulo no pretório de Herodes"
  },
  "at24.1-9": {
    id: "at24.1-9",
    referencia: "At 24.1-9",
    livro: "Atos",
    capitulo: 24,
    vIni: 1,
    vFim: 9,
    titulo: "Ananias e Tértulo acusam Paulo perante Félix"
  },
  "at24.10-21": {
    id: "at24.10-21",
    referencia: "At 24.10-21",
    livro: "Atos",
    capitulo: 24,
    vIni: 10,
    vFim: 21,
    titulo: "Paulo apresenta a sua defesa"
  },
  "at24.22-27": {
    id: "at24.22-27",
    referencia: "At 24.22-27",
    livro: "Atos",
    capitulo: 24,
    vIni: 22,
    vFim: 27,
    titulo: "Paulo perante Félix e Drusila"
  },
  "at25.1-12": {
    id: "at25.1-12",
    referencia: "At 25.1-12",
    livro: "Atos",
    capitulo: 25,
    vIni: 1,
    vFim: 12,
    titulo: "Paulo perante Festo. Apela para César"
  },
  "at25.13-22": {
    id: "at25.13-22",
    referencia: "At 25.13-22",
    livro: "Atos",
    capitulo: 25,
    vIni: 13,
    vFim: 22,
    titulo: "Festo expõe a Agripa o caso de Paulo"
  },
  "at25.23-27": {
    id: "at25.23-27",
    referencia: "At 25.23-27",
    livro: "Atos",
    capitulo: 25,
    vIni: 23,
    vFim: 27,
    titulo: "Festo, de novo, fala a Agripa"
  },
  "at26.1-23": {
    id: "at26.1-23",
    referencia: "At 26.1-23",
    livro: "Atos",
    capitulo: 26,
    vIni: 1,
    vFim: 23,
    titulo: "Paulo discursa perante o rei Agripa"
  },
  "at26.24-29": {
    id: "at26.24-29",
    referencia: "At 26.24-29",
    livro: "Atos",
    capitulo: 26,
    vIni: 24,
    vFim: 29,
    titulo: "Paulo é interrompido por Festo"
  },
  "at26.30-32": {
    id: "at26.30-32",
    referencia: "At 26.30-32",
    livro: "Atos",
    capitulo: 26,
    vIni: 30,
    vFim: 32,
    titulo: "Paulo teria sido solto, se não tivesse apelado para César"
  },
  "at27.1-8": {
    id: "at27.1-8",
    referencia: "At 27.1-8",
    livro: "Atos",
    capitulo: 27,
    vIni: 1,
    vFim: 8,
    titulo: "Paulo enviado para a Itália"
  },
  "at27.9-26": {
    id: "at27.9-26",
    referencia: "At 27.9-26",
    livro: "Atos",
    capitulo: 27,
    vIni: 9,
    vFim: 26,
    titulo: "Os perigos da viagem"
  },
  "at27.27-44": {
    id: "at27.27-44",
    referencia: "At 27.27-44",
    livro: "Atos",
    capitulo: 27,
    vIni: 27,
    vFim: 44,
    titulo: "O naufrágio"
  },
  "at28.1-6": {
    id: "at28.1-6",
    referencia: "At 28.1-6",
    livro: "Atos",
    capitulo: 28,
    vIni: 1,
    vFim: 6,
    titulo: "A ilha de Malta"
  },
  "at28.7-10": {
    id: "at28.7-10",
    referencia: "At 28.7-10",
    livro: "Atos",
    capitulo: 28,
    vIni: 7,
    vFim: 10,
    titulo: "Públio hospeda a Paulo"
  },
  "at28.11-15": {
    id: "at28.11-15",
    referencia: "At 28.11-15",
    livro: "Atos",
    capitulo: 28,
    vIni: 11,
    vFim: 15,
    titulo: "A continuação da viagem"
  },
  "at28.16-22": {
    id: "at28.16-22",
    referencia: "At 28.16-22",
    livro: "Atos",
    capitulo: 28,
    vIni: 16,
    vFim: 22,
    titulo: "Paulo em Roma"
  },
  "at28.23-29": {
    id: "at28.23-29",
    referencia: "At 28.23-29",
    livro: "Atos",
    capitulo: 28,
    vIni: 23,
    vFim: 29,
    titulo: "Paulo prega em Roma"
  },
  "at28.30-31": {
    id: "at28.30-31",
    referencia: "At 28.30-31",
    livro: "Atos",
    capitulo: 28,
    vIni: 30,
    vFim: 31,
    titulo: "Paulo prisioneiro durante dois anos"
  },
  "rm1.1-7": {
    id: "rm1.1-7",
    referencia: "Rm 1.1-7",
    livro: "Romanos",
    capitulo: 1,
    vIni: 1,
    vFim: 7,
    titulo: "Prefácio e saudação"
  },
  "rm1.8-15": {
    id: "rm1.8-15",
    referencia: "Rm 1.8-15",
    livro: "Romanos",
    capitulo: 1,
    vIni: 8,
    vFim: 15,
    titulo: "O amor de Paulo pelos cristãos de Roma. Seu desejo de vê-los"
  },
  "rm1.16-17": {
    id: "rm1.16-17",
    referencia: "Rm 1.16-17",
    livro: "Romanos",
    capitulo: 1,
    vIni: 16,
    vFim: 17,
    titulo: "O assunto da epístola: a justiça pela fé em Jesus Cristo"
  },
  "rm1.18-27": {
    id: "rm1.18-27",
    referencia: "Rm 1.18-27",
    livro: "Romanos",
    capitulo: 1,
    vIni: 18,
    vFim: 27,
    titulo: "A idolatria e depravação dos homens"
  },
  "rm1.28-32": {
    id: "rm1.28-32",
    referencia: "Rm 1.28-32",
    livro: "Romanos",
    capitulo: 1,
    vIni: 28,
    vFim: 32,
    titulo: "Entregues os gentios a reprováveis sentimentos"
  },
  "rm2.1-16": {
    id: "rm2.1-16",
    referencia: "Rm 2.1-16",
    livro: "Romanos",
    capitulo: 2,
    vIni: 1,
    vFim: 16,
    titulo: "Os gentios e os judeus igualmente culpados. O juízo de Deus"
  },
  "rm2.17-24": {
    id: "rm2.17-24",
    referencia: "Rm 2.17-24",
    livro: "Romanos",
    capitulo: 2,
    vIni: 17,
    vFim: 24,
    titulo: "Os judeus são indesculpáveis"
  },
  "rm2.25-29": {
    id: "rm2.25-29",
    referencia: "Rm 2.25-29",
    livro: "Romanos",
    capitulo: 2,
    vIni: 25,
    vFim: 29,
    titulo: "O verdadeiro israelita"
  },
  "rm3.1-8": {
    id: "rm3.1-8",
    referencia: "Rm 3.1-8",
    livro: "Romanos",
    capitulo: 3,
    vIni: 1,
    vFim: 8,
    titulo: "Paulo responde a objeções"
  },
  "rm3.9-18": {
    id: "rm3.9-18",
    referencia: "Rm 3.9-18",
    livro: "Romanos",
    capitulo: 3,
    vIni: 9,
    vFim: 18,
    titulo: "Todos os homens na condição de pecadores"
  },
  "rm3.19-20": {
    id: "rm3.19-20",
    referencia: "Rm 3.19-20",
    livro: "Romanos",
    capitulo: 3,
    vIni: 19,
    vFim: 20,
    titulo: "O judeu não constitui exceção"
  },
  "rm3.21-31": {
    id: "rm3.21-31",
    referencia: "Rm 3.21-31",
    livro: "Romanos",
    capitulo: 3,
    vIni: 21,
    vFim: 31,
    titulo: "A justificação pela fé em Jesus Cristo"
  },
  "rm4.1-25": {
    id: "rm4.1-25",
    referencia: "Rm 4.1-25",
    livro: "Romanos",
    capitulo: 4,
    vIni: 1,
    vFim: 25,
    titulo: "Abraão justificado pela fé"
  },
  "rm5.1-11": {
    id: "rm5.1-11",
    referencia: "Rm 5.1-11",
    livro: "Romanos",
    capitulo: 5,
    vIni: 1,
    vFim: 11,
    titulo: "A justificação pela fé e paz com Deus"
  },
  "rm5.12-21": {
    id: "rm5.12-21",
    referencia: "Rm 5.12-21",
    livro: "Romanos",
    capitulo: 5,
    vIni: 12,
    vFim: 21,
    titulo: "Adão e Cristo"
  },
  "rm6.1-14": {
    id: "rm6.1-14",
    referencia: "Rm 6.1-14",
    livro: "Romanos",
    capitulo: 6,
    vIni: 1,
    vFim: 14,
    titulo: "Livres do pecado pela graça"
  },
  "rm6.15-23": {
    id: "rm6.15-23",
    referencia: "Rm 6.15-23",
    livro: "Romanos",
    capitulo: 6,
    vIni: 15,
    vFim: 23,
    titulo: "A lei, a escravidão e a graça"
  },
  "rm7.1-6": {
    id: "rm7.1-6",
    referencia: "Rm 7.1-6",
    livro: "Romanos",
    capitulo: 7,
    vIni: 1,
    vFim: 6,
    titulo: "A analogia do casamento"
  },
  "rm7.7-25": {
    id: "rm7.7-25",
    referencia: "Rm 7.7-25",
    livro: "Romanos",
    capitulo: 7,
    vIni: 7,
    vFim: 25,
    titulo: "A lei e o pecado"
  },
  "rm8.1-11": {
    id: "rm8.1-11",
    referencia: "Rm 8.1-11",
    livro: "Romanos",
    capitulo: 8,
    vIni: 1,
    vFim: 11,
    titulo: "Nenhuma condenação. O pendor do Espírito"
  },
  "rm8.12-17": {
    id: "rm8.12-17",
    referencia: "Rm 8.12-17",
    livro: "Romanos",
    capitulo: 8,
    vIni: 12,
    vFim: 17,
    titulo: "Filhos e herdeiros"
  },
  "rm8.18-25": {
    id: "rm8.18-25",
    referencia: "Rm 8.18-25",
    livro: "Romanos",
    capitulo: 8,
    vIni: 18,
    vFim: 25,
    titulo: "Os sofrimentos do presente e as glórias do porvir"
  },
  "rm8.26-30": {
    id: "rm8.26-30",
    referencia: "Rm 8.26-30",
    livro: "Romanos",
    capitulo: 8,
    vIni: 26,
    vFim: 30,
    titulo: "A intercessão do Espírito"
  },
  "rm8.31-39": {
    id: "rm8.31-39",
    referencia: "Rm 8.31-39",
    livro: "Romanos",
    capitulo: 8,
    vIni: 31,
    vFim: 39,
    titulo: "As provas e a certeza do amor de Deus"
  },
  "rm9.1-5": {
    id: "rm9.1-5",
    referencia: "Rm 9.1-5",
    livro: "Romanos",
    capitulo: 9,
    vIni: 1,
    vFim: 5,
    titulo: "Paulo e a incredulidade dos judeus"
  },
  "rm9.6-13": {
    id: "rm9.6-13",
    referencia: "Rm 9.6-13",
    livro: "Romanos",
    capitulo: 9,
    vIni: 6,
    vFim: 13,
    titulo: "A rejeição de Israel não é incompatível com as promessas de Deus"
  },
  "rm9.14-18": {
    id: "rm9.14-18",
    referencia: "Rm 9.14-18",
    livro: "Romanos",
    capitulo: 9,
    vIni: 14,
    vFim: 18,
    titulo: "A rejeição de Israel não é incompatível com a justiça de Deus"
  },
  "rm9.19-29": {
    id: "rm9.19-29",
    referencia: "Rm 9.19-29",
    livro: "Romanos",
    capitulo: 9,
    vIni: 19,
    vFim: 29,
    titulo: "A soberania de Deus"
  },
  "rm9.30-33": {
    id: "rm9.30-33",
    referencia: "Rm 9.30-33",
    livro: "Romanos",
    capitulo: 9,
    vIni: 30,
    vFim: 33,
    titulo: "Israel é responsável pela sua rejeição"
  },
  "rm10.1-15": {
    id: "rm10.1-15",
    referencia: "Rm 10.1-15",
    livro: "Romanos",
    capitulo: 10,
    vIni: 1,
    vFim: 15,
    titulo: "Os judeus rejeitam a justiça de Deus"
  },
  "rm10.16-21": {
    id: "rm10.16-21",
    referencia: "Rm 10.16-21",
    livro: "Romanos",
    capitulo: 10,
    vIni: 16,
    vFim: 21,
    titulo: "Israel não pode alegar falta de oportunidade"
  },
  "rm11.1-10": {
    id: "rm11.1-10",
    referencia: "Rm 11.1-10",
    livro: "Romanos",
    capitulo: 11,
    vIni: 1,
    vFim: 10,
    titulo: "O futuro de Israel"
  },
  "rm11.11-24": {
    id: "rm11.11-24",
    referencia: "Rm 11.11-24",
    livro: "Romanos",
    capitulo: 11,
    vIni: 11,
    vFim: 24,
    titulo: "A rejeição de Israel não é final"
  },
  "rm11.25-32": {
    id: "rm11.25-32",
    referencia: "Rm 11.25-32",
    livro: "Romanos",
    capitulo: 11,
    vIni: 25,
    vFim: 32,
    titulo: "O último desígnio de Deus é misericórdia para com todos"
  },
  "rm11.33-36": {
    id: "rm11.33-36",
    referencia: "Rm 11.33-36",
    livro: "Romanos",
    capitulo: 11,
    vIni: 33,
    vFim: 36,
    titulo: "A maravilhosa sabedoria dos desígnios divinos"
  },
  "rm12.1-2": {
    id: "rm12.1-2",
    referencia: "Rm 12.1-2",
    livro: "Romanos",
    capitulo: 12,
    vIni: 1,
    vFim: 2,
    titulo: "A nova vida"
  },
  "rm12.3-8": {
    id: "rm12.3-8",
    referencia: "Rm 12.3-8",
    livro: "Romanos",
    capitulo: 12,
    vIni: 3,
    vFim: 8,
    titulo: "O devido uso de dons espirituais"
  },
  "rm12.9-21": {
    id: "rm12.9-21",
    referencia: "Rm 12.9-21",
    livro: "Romanos",
    capitulo: 12,
    vIni: 9,
    vFim: 21,
    titulo: "As virtudes recomendadas"
  },
  "rm13.1-7": {
    id: "rm13.1-7",
    referencia: "Rm 13.1-7",
    livro: "Romanos",
    capitulo: 13,
    vIni: 1,
    vFim: 7,
    titulo: "Da obediência às autoridades"
  },
  "rm13.8-10": {
    id: "rm13.8-10",
    referencia: "Rm 13.8-10",
    livro: "Romanos",
    capitulo: 13,
    vIni: 8,
    vFim: 10,
    titulo: "O amor ao próximo é o cumprimento da lei"
  },
  "rm13.11-14": {
    id: "rm13.11-14",
    referencia: "Rm 13.11-14",
    livro: "Romanos",
    capitulo: 13,
    vIni: 11,
    vFim: 14,
    titulo: "O dia está próximo"
  },
  "rm14.1-12": {
    id: "rm14.1-12",
    referencia: "Rm 14.1-12",
    livro: "Romanos",
    capitulo: 14,
    vIni: 1,
    vFim: 12,
    titulo: "A tolerância para com os fracos na fé"
  },
  "rm14.13-23": {
    id: "rm14.13-23",
    referencia: "Rm 14.13-23",
    livro: "Romanos",
    capitulo: 14,
    vIni: 13,
    vFim: 23,
    titulo: "A liberdade e a caridade"
  },
  "rm15.1-13": {
    id: "rm15.1-13",
    referencia: "Rm 15.1-13",
    livro: "Romanos",
    capitulo: 15,
    vIni: 1,
    vFim: 13,
    titulo: "A imitação a Cristo. A simpatia e o altruísmo"
  },
  "rm15.14-21": {
    id: "rm15.14-21",
    referencia: "Rm 15.14-21",
    livro: "Romanos",
    capitulo: 15,
    vIni: 14,
    vFim: 21,
    titulo: "A explicação de Paulo"
  },
  "rm15.22-29": {
    id: "rm15.22-29",
    referencia: "Rm 15.22-29",
    livro: "Romanos",
    capitulo: 15,
    vIni: 22,
    vFim: 29,
    titulo: "Os planos de Paulo"
  },
  "rm15.30-33": {
    id: "rm15.30-33",
    referencia: "Rm 15.30-33",
    livro: "Romanos",
    capitulo: 15,
    vIni: 30,
    vFim: 33,
    titulo: "Paulo pede as orações"
  },
  "rm16.1-2": {
    id: "rm16.1-2",
    referencia: "Rm 16.1-2",
    livro: "Romanos",
    capitulo: 16,
    vIni: 1,
    vFim: 2,
    titulo: "Paulo recomenda a Febe"
  },
  "rm16.3-16": {
    id: "rm16.3-16",
    referencia: "Rm 16.3-16",
    livro: "Romanos",
    capitulo: 16,
    vIni: 3,
    vFim: 16,
    titulo: "As saudações pessoais"
  },
  "rm16.17-20": {
    id: "rm16.17-20",
    referencia: "Rm 16.17-20",
    livro: "Romanos",
    capitulo: 16,
    vIni: 17,
    vFim: 20,
    titulo: "As admoestações"
  },
  "rm16.21-24": {
    id: "rm16.21-24",
    referencia: "Rm 16.21-24",
    livro: "Romanos",
    capitulo: 16,
    vIni: 21,
    vFim: 24,
    titulo: "As saudações dos companheiros"
  },
  "rm16.25-27": {
    id: "rm16.25-27",
    referencia: "Rm 16.25-27",
    livro: "Romanos",
    capitulo: 16,
    vIni: 25,
    vFim: 27,
    titulo: "A doxologia"
  },
  "1co1.1-3": {
    id: "1co1.1-3",
    referencia: "1Co 1.1-3",
    livro: "1 Coríntios",
    capitulo: 1,
    vIni: 1,
    vFim: 3,
    titulo: "Prefácio e saudação"
  },
  "1co1.4-9": {
    id: "1co1.4-9",
    referencia: "1Co 1.4-9",
    livro: "1 Coríntios",
    capitulo: 1,
    vIni: 4,
    vFim: 9,
    titulo: "Ação de graças"
  },
  "1co1.10-17": {
    id: "1co1.10-17",
    referencia: "1Co 1.10-17",
    livro: "1 Coríntios",
    capitulo: 1,
    vIni: 10,
    vFim: 17,
    titulo: "Exortação à unidade"
  },
  "1co1.18-25": {
    id: "1co1.18-25",
    referencia: "1Co 1.18-25",
    livro: "1 Coríntios",
    capitulo: 1,
    vIni: 18,
    vFim: 25,
    titulo: "A mensagem da cruz"
  },
  "1co1.26-29": {
    id: "1co1.26-29",
    referencia: "1Co 1.26-29",
    livro: "1 Coríntios",
    capitulo: 1,
    vIni: 26,
    vFim: 29,
    titulo: "A vocação dos santos"
  },
  "1co1.30-31": {
    id: "1co1.30-31",
    referencia: "1Co 1.30-31",
    livro: "1 Coríntios",
    capitulo: 1,
    vIni: 30,
    vFim: 31,
    titulo: "Valores de Cristo"
  },
  "1co2.1-5": {
    id: "1co2.1-5",
    referencia: "1Co 2.1-5",
    livro: "1 Coríntios",
    capitulo: 2,
    vIni: 1,
    vFim: 5,
    titulo: "O caráter da pregação de Paulo"
  },
  "1co2.6-16": {
    id: "1co2.6-16",
    referencia: "1Co 2.6-16",
    livro: "1 Coríntios",
    capitulo: 2,
    vIni: 6,
    vFim: 16,
    titulo: "A verdadeira sabedoria. O ensino do Espírito Santo"
  },
  "1co3.1-9": {
    id: "1co3.1-9",
    referencia: "1Co 3.1-9",
    livro: "1 Coríntios",
    capitulo: 3,
    vIni: 1,
    vFim: 9,
    titulo: "As dissensões demonstram a falta de espiritualidade"
  },
  "1co3.10-17": {
    id: "1co3.10-17",
    referencia: "1Co 3.10-17",
    livro: "1 Coríntios",
    capitulo: 3,
    vIni: 10,
    vFim: 17,
    titulo: "A responsabilidade dos que ensinam"
  },
  "1co3.18-23": {
    id: "1co3.18-23",
    referencia: "1Co 3.18-23",
    livro: "1 Coríntios",
    capitulo: 3,
    vIni: 18,
    vFim: 23,
    titulo: "A sabedoria humana sem valor"
  },
  "1co4.1-5": {
    id: "1co4.1-5",
    referencia: "1Co 4.1-5",
    livro: "1 Coríntios",
    capitulo: 4,
    vIni: 1,
    vFim: 5,
    titulo: "Os pregadores responsáveis a Deus"
  },
  "1co4.6-13": {
    id: "1co4.6-13",
    referencia: "1Co 4.6-13",
    livro: "1 Coríntios",
    capitulo: 4,
    vIni: 6,
    vFim: 13,
    titulo: "Uma reprovação severa"
  },
  "1co4.14-21": {
    id: "1co4.14-21",
    referencia: "1Co 4.14-21",
    livro: "1 Coríntios",
    capitulo: 4,
    vIni: 14,
    vFim: 21,
    titulo: "Paulo os admoesta como pai"
  },
  "1co5.1-13": {
    id: "1co5.1-13",
    referencia: "1Co 5.1-13",
    livro: "1 Coríntios",
    capitulo: 5,
    vIni: 1,
    vFim: 13,
    titulo: "A impureza da igreja de Corinto. Repreensões e exortações"
  },
  "1co6.1-11": {
    id: "1co6.1-11",
    referencia: "1Co 6.1-11",
    livro: "1 Coríntios",
    capitulo: 6,
    vIni: 1,
    vFim: 11,
    titulo: "Paulo censura o litígio entre os irmãos"
  },
  "1co6.12-20": {
    id: "1co6.12-20",
    referencia: "1Co 6.12-20",
    livro: "1 Coríntios",
    capitulo: 6,
    vIni: 12,
    vFim: 20,
    titulo: "A sensualidade é condenada"
  },
  "1co7.1-9": {
    id: "1co7.1-9",
    referencia: "1Co 7.1-9",
    livro: "1 Coríntios",
    capitulo: 7,
    vIni: 1,
    vFim: 9,
    titulo: "Respostas a perguntas acerca do casamento"
  },
  "1co7.10-24": {
    id: "1co7.10-24",
    referencia: "1Co 7.10-24",
    livro: "1 Coríntios",
    capitulo: 7,
    vIni: 10,
    vFim: 24,
    titulo: "A estabilidade da família"
  },
  "1co7.25-40": {
    id: "1co7.25-40",
    referencia: "1Co 7.25-40",
    livro: "1 Coríntios",
    capitulo: 7,
    vIni: 25,
    vFim: 40,
    titulo: "Problemas com respeito ao casamento em tempos de tribulação"
  },
  "1co8.1-13": {
    id: "1co8.1-13",
    referencia: "1Co 8.1-13",
    livro: "1 Coríntios",
    capitulo: 8,
    vIni: 1,
    vFim: 13,
    titulo: "Acerca das coisas sacrificadas aos ídolos"
  },
  "1co9.1-27": {
    id: "1co9.1-27",
    referencia: "1Co 9.1-27",
    livro: "1 Coríntios",
    capitulo: 9,
    vIni: 1,
    vFim: 27,
    titulo: "A liberdade e os direitos do apóstolo Paulo"
  },
  "1co10.1-13": {
    id: "1co10.1-13",
    referencia: "1Co 10.1-13",
    livro: "1 Coríntios",
    capitulo: 10,
    vIni: 1,
    vFim: 13,
    titulo: "Exemplos da história de Israel"
  },
  "1co10.14-22": {
    id: "1co10.14-22",
    referencia: "1Co 10.14-22",
    livro: "1 Coríntios",
    capitulo: 10,
    vIni: 14,
    vFim: 22,
    titulo: "O cristão deve fugir da idolatria"
  },
  "1co10.23-33": {
    id: "1co10.23-33",
    referencia: "1Co 10.23-33",
    livro: "1 Coríntios",
    capitulo: 10,
    vIni: 23,
    vFim: 33,
    titulo: "Os limites da liberdade cristã"
  },
  "1co11.2-16": {
    id: "1co11.2-16",
    referencia: "1Co 11.2-16",
    livro: "1 Coríntios",
    capitulo: 11,
    vIni: 2,
    vFim: 16,
    titulo: "O véu e seu uso na igreja de Corinto"
  },
  "1co11.17-34": {
    id: "1co11.17-34",
    referencia: "1Co 11.17-34",
    livro: "1 Coríntios",
    capitulo: 11,
    vIni: 17,
    vFim: 34,
    titulo: "Instrução quanto à celebração da Ceia do Senhor"
  },
  "1co12.1-11": {
    id: "1co12.1-11",
    referencia: "1Co 12.1-11",
    livro: "1 Coríntios",
    capitulo: 12,
    vIni: 1,
    vFim: 11,
    titulo: "Acerca de dons espirituais"
  },
  "1co12.12-31": {
    id: "1co12.12-31",
    referencia: "1Co 12.12-31",
    livro: "1 Coríntios",
    capitulo: 12,
    vIni: 12,
    vFim: 31,
    titulo: "A unidade orgânica da igreja"
  },
  "1co14.1-19": {
    id: "1co14.1-19",
    referencia: "1Co 14.1-19",
    livro: "1 Coríntios",
    capitulo: 14,
    vIni: 1,
    vFim: 19,
    titulo: "O dom de profecia é superior ao de línguas"
  },
  "1co14.20-25": {
    id: "1co14.20-25",
    referencia: "1Co 14.20-25",
    livro: "1 Coríntios",
    capitulo: 14,
    vIni: 20,
    vFim: 25,
    titulo: "Os dons em face dos visitantes na igreja"
  },
  "1co14.26-40": {
    id: "1co14.26-40",
    referencia: "1Co 14.26-40",
    livro: "1 Coríntios",
    capitulo: 14,
    vIni: 26,
    vFim: 40,
    titulo: "A necessidade de ordem no culto"
  },
  "1co15.1-19": {
    id: "1co15.1-19",
    referencia: "1Co 15.1-19",
    livro: "1 Coríntios",
    capitulo: 15,
    vIni: 1,
    vFim: 19,
    titulo: "A ressurreição de Cristo, penhor da nossa ressurreição"
  },
  "1co15.20-28": {
    id: "1co15.20-28",
    referencia: "1Co 15.20-28",
    livro: "1 Coríntios",
    capitulo: 15,
    vIni: 20,
    vFim: 28,
    titulo: "Cristo, as primícias dos que dormem"
  },
  "1co15.29-34": {
    id: "1co15.29-34",
    referencia: "1Co 15.29-34",
    livro: "1 Coríntios",
    capitulo: 15,
    vIni: 29,
    vFim: 34,
    titulo: "A ressurreição em relação à vida prática"
  },
  "1co15.35-49": {
    id: "1co15.35-49",
    referencia: "1Co 15.35-49",
    livro: "1 Coríntios",
    capitulo: 15,
    vIni: 35,
    vFim: 49,
    titulo: "Os ressuscitados terão corpo"
  },
  "1co15.50-58": {
    id: "1co15.50-58",
    referencia: "1Co 15.50-58",
    livro: "1 Coríntios",
    capitulo: 15,
    vIni: 50,
    vFim: 58,
    titulo: "Os vivos serão transformados"
  },
  "1co16.1-4": {
    id: "1co16.1-4",
    referencia: "1Co 16.1-4",
    livro: "1 Coríntios",
    capitulo: 16,
    vIni: 1,
    vFim: 4,
    titulo: "Acerca da coleta para os necessitados da Judeia"
  },
  "1co16.5-9": {
    id: "1co16.5-9",
    referencia: "1Co 16.5-9",
    livro: "1 Coríntios",
    capitulo: 16,
    vIni: 5,
    vFim: 9,
    titulo: "Os projetos de Paulo"
  },
  "1co16.10-12": {
    id: "1co16.10-12",
    referencia: "1Co 16.10-12",
    livro: "1 Coríntios",
    capitulo: 16,
    vIni: 10,
    vFim: 12,
    titulo: "Acerca de Timóteo e Apolo"
  },
  "1co16.13-14": {
    id: "1co16.13-14",
    referencia: "1Co 16.13-14",
    livro: "1 Coríntios",
    capitulo: 16,
    vIni: 13,
    vFim: 14,
    titulo: "As exortações finais"
  },
  "1co16.15-18": {
    id: "1co16.15-18",
    referencia: "1Co 16.15-18",
    livro: "1 Coríntios",
    capitulo: 16,
    vIni: 15,
    vFim: 18,
    titulo: "Estéfanas, Fortunato e Acaico"
  },
  "1co16.19-24": {
    id: "1co16.19-24",
    referencia: "1Co 16.19-24",
    livro: "1 Coríntios",
    capitulo: 16,
    vIni: 19,
    vFim: 24,
    titulo: "Saudações e a bênção"
  },
  "2co1.1-2": {
    id: "2co1.1-2",
    referencia: "2Co 1.1-2",
    livro: "2 Coríntios",
    capitulo: 1,
    vIni: 1,
    vFim: 2,
    titulo: "Prefácio e saudação"
  },
  "2co1.3-11": {
    id: "2co1.3-11",
    referencia: "2Co 1.3-11",
    livro: "2 Coríntios",
    capitulo: 1,
    vIni: 3,
    vFim: 11,
    titulo: "Ação de graças de Paulo pelo conforto divino"
  },
  "2co1.12-14": {
    id: "2co1.12-14",
    referencia: "2Co 1.12-14",
    livro: "2 Coríntios",
    capitulo: 1,
    vIni: 12,
    vFim: 14,
    titulo: "A sinceridade de Paulo"
  },
  "2co1.15-24": {
    id: "2co1.15-24",
    referencia: "2Co 1.15-24",
    livro: "2 Coríntios",
    capitulo: 1,
    vIni: 15,
    vFim: 24,
    titulo: "Paulo explica a sua demora em ir a Corinto"
  },
  "2co2.5-11": {
    id: "2co2.5-11",
    referencia: "2Co 2.5-11",
    livro: "2 Coríntios",
    capitulo: 2,
    vIni: 5,
    vFim: 11,
    titulo: "O penitente deve ser readmitido na igreja"
  },
  "2co2.12-13": {
    id: "2co2.12-13",
    referencia: "2Co 2.12-13",
    livro: "2 Coríntios",
    capitulo: 2,
    vIni: 12,
    vFim: 13,
    titulo: "A intranquilidade de Paulo não encontrando Tito"
  },
  "2co2.14-17": {
    id: "2co2.14-17",
    referencia: "2Co 2.14-17",
    livro: "2 Coríntios",
    capitulo: 2,
    vIni: 14,
    vFim: 17,
    titulo: "A vitória de Cristo no ministério apostólico"
  },
  "2co3.1-11": {
    id: "2co3.1-11",
    referencia: "2Co 3.1-11",
    livro: "2 Coríntios",
    capitulo: 3,
    vIni: 1,
    vFim: 11,
    titulo: "A excelência do ministério da nova aliança"
  },
  "2co3.12-18": {
    id: "2co3.12-18",
    referencia: "2Co 3.12-18",
    livro: "2 Coríntios",
    capitulo: 3,
    vIni: 12,
    vFim: 18,
    titulo: "Onde há o Espírito do Senhor, aí há liberdade"
  },
  "2co4.1-6": {
    id: "2co4.1-6",
    referencia: "2Co 4.1-6",
    livro: "2 Coríntios",
    capitulo: 4,
    vIni: 1,
    vFim: 6,
    titulo: "Paulo cumpre o seu ministério com fidelidade"
  },
  "2co4.7-15": {
    id: "2co4.7-15",
    referencia: "2Co 4.7-15",
    livro: "2 Coríntios",
    capitulo: 4,
    vIni: 7,
    vFim: 15,
    titulo: "O poder de Paulo vem só de Deus"
  },
  "2co4.16-18": {
    id: "2co4.16-18",
    referencia: "2Co 4.16-18",
    livro: "2 Coríntios",
    capitulo: 4,
    vIni: 16,
    vFim: 18,
    titulo: "O desígnio e efeito das aflições"
  },
  "2co5.1-10": {
    id: "2co5.1-10",
    referencia: "2Co 5.1-10",
    livro: "2 Coríntios",
    capitulo: 5,
    vIni: 1,
    vFim: 10,
    titulo: "Ausentes do corpo e presentes com o Senhor"
  },
  "2co5.11-17": {
    id: "2co5.11-17",
    referencia: "2Co 5.11-17",
    livro: "2 Coríntios",
    capitulo: 5,
    vIni: 11,
    vFim: 17,
    titulo: "O zelo apostólico de Paulo"
  },
  "2co5.18-21": {
    id: "2co5.18-21",
    referencia: "2Co 5.18-21",
    livro: "2 Coríntios",
    capitulo: 5,
    vIni: 18,
    vFim: 21,
    titulo: "O ministério da reconciliação"
  },
  "2co6.4-10": {
    id: "2co6.4-10",
    referencia: "2Co 6.4-10",
    livro: "2 Coríntios",
    capitulo: 6,
    vIni: 4,
    vFim: 10,
    titulo: "A abnegação de Paulo"
  },
  "2co6.11-13": {
    id: "2co6.11-13",
    referencia: "2Co 6.11-13",
    livro: "2 Coríntios",
    capitulo: 6,
    vIni: 11,
    vFim: 13,
    titulo: "O amor com amor se paga"
  },
  "2co6.14-18": {
    id: "2co6.14-18",
    referencia: "2Co 6.14-18",
    livro: "2 Coríntios",
    capitulo: 6,
    vIni: 14,
    vFim: 18,
    titulo: "Nenhuma comunhão com os incrédulos"
  },
  "2co7.2-4": {
    id: "2co7.2-4",
    referencia: "2Co 7.2-4",
    livro: "2 Coríntios",
    capitulo: 7,
    vIni: 2,
    vFim: 4,
    titulo: "O afeto de Paulo para com os coríntios"
  },
  "2co7.5-16": {
    id: "2co7.5-16",
    referencia: "2Co 7.5-16",
    livro: "2 Coríntios",
    capitulo: 7,
    vIni: 5,
    vFim: 16,
    titulo: "A chegada de Tito"
  },
  "2co8.1-15": {
    id: "2co8.1-15",
    referencia: "2Co 8.1-15",
    livro: "2 Coríntios",
    capitulo: 8,
    vIni: 1,
    vFim: 15,
    titulo: "A oferta das igrejas da Macedônia para os pobres da Judeia"
  },
  "2co8.16-24": {
    id: "2co8.16-24",
    referencia: "2Co 8.16-24",
    livro: "2 Coríntios",
    capitulo: 8,
    vIni: 16,
    vFim: 24,
    titulo: "O novo encargo de Tito"
  },
  "2co9.1-5": {
    id: "2co9.1-5",
    referencia: "2Co 9.1-5",
    livro: "2 Coríntios",
    capitulo: 9,
    vIni: 1,
    vFim: 5,
    titulo: "Instruções de Paulo em referência à grande coleta"
  },
  "2co9.6-15": {
    id: "2co9.6-15",
    referencia: "2Co 9.6-15",
    livro: "2 Coríntios",
    capitulo: 9,
    vIni: 6,
    vFim: 15,
    titulo: "A sementeira e a colheita"
  },
  "2co10.1-12": {
    id: "2co10.1-12",
    referencia: "2Co 10.1-12",
    livro: "2 Coríntios",
    capitulo: 10,
    vIni: 1,
    vFim: 12,
    titulo: "Paulo defende a sua autoridade apostólica"
  },
  "2co10.13-18": {
    id: "2co10.13-18",
    referencia: "2Co 10.13-18",
    livro: "2 Coríntios",
    capitulo: 10,
    vIni: 13,
    vFim: 18,
    titulo: "A esfera da ação missionária de Paulo"
  },
  "2co11.1-6": {
    id: "2co11.1-6",
    referencia: "2Co 11.1-6",
    livro: "2 Coríntios",
    capitulo: 11,
    vIni: 1,
    vFim: 6,
    titulo: "Paulo continua a sua defesa"
  },
  "2co11.7-15": {
    id: "2co11.7-15",
    referencia: "2Co 11.7-15",
    livro: "2 Coríntios",
    capitulo: 11,
    vIni: 7,
    vFim: 15,
    titulo: "O desprendimento do apóstolo"
  },
  "2co11.16-33": {
    id: "2co11.16-33",
    referencia: "2Co 11.16-33",
    livro: "2 Coríntios",
    capitulo: 11,
    vIni: 16,
    vFim: 33,
    titulo: "Os sofrimentos de Paulo por amor do evangelho"
  },
  "2co12.1-6": {
    id: "2co12.1-6",
    referencia: "2Co 12.1-6",
    livro: "2 Coríntios",
    capitulo: 12,
    vIni: 1,
    vFim: 6,
    titulo: "As visões e revelações do Senhor"
  },
  "2co12.7-10": {
    id: "2co12.7-10",
    referencia: "2Co 12.7-10",
    livro: "2 Coríntios",
    capitulo: 12,
    vIni: 7,
    vFim: 10,
    titulo: "O espinho na carne"
  },
  "2co12.11-13": {
    id: "2co12.11-13",
    referencia: "2Co 12.11-13",
    livro: "2 Coríntios",
    capitulo: 12,
    vIni: 11,
    vFim: 13,
    titulo: "As credenciais de um apóstolo"
  },
  "2co12.14-18": {
    id: "2co12.14-18",
    referencia: "2Co 12.14-18",
    livro: "2 Coríntios",
    capitulo: 12,
    vIni: 14,
    vFim: 18,
    titulo: "Paulo deseja visitá-los"
  },
  "2co12.19-21": {
    id: "2co12.19-21",
    referencia: "2Co 12.19-21",
    livro: "2 Coríntios",
    capitulo: 12,
    vIni: 19,
    vFim: 21,
    titulo: "Paulo apela para o juiz de todos"
  },
  "2co13.1-10": {
    id: "2co13.1-10",
    referencia: "2Co 13.1-10",
    livro: "2 Coríntios",
    capitulo: 13,
    vIni: 1,
    vFim: 10,
    titulo: "Paulo promete investigar e castigar"
  },
  "2co13.11-12": {
    id: "2co13.11-12",
    referencia: "2Co 13.11-12",
    livro: "2 Coríntios",
    capitulo: 13,
    vIni: 11,
    vFim: 12,
    titulo: "Saudações"
  },
  "2co13.13": {
    id: "2co13.13",
    referencia: "2Co 13.13",
    livro: "2 Coríntios",
    capitulo: 13,
    vIni: 13,
    vFim: 13,
    titulo: "A bênção"
  },
  "gl1.1-5": {
    id: "gl1.1-5",
    referencia: "Gl 1.1-5",
    livro: "Gálatas",
    capitulo: 1,
    vIni: 1,
    vFim: 5,
    titulo: "Prefácio e saudação"
  },
  "gl1.6-9": {
    id: "gl1.6-9",
    referencia: "Gl 1.6-9",
    livro: "Gálatas",
    capitulo: 1,
    vIni: 6,
    vFim: 9,
    titulo: "A inconstância dos gálatas"
  },
  "gl1.10-17": {
    id: "gl1.10-17",
    referencia: "Gl 1.10-17",
    livro: "Gálatas",
    capitulo: 1,
    vIni: 10,
    vFim: 17,
    titulo: "O evangelho que Paulo recebeu e pregou"
  },
  "gl1.18-24": {
    id: "gl1.18-24",
    referencia: "Gl 1.18-24",
    livro: "Gálatas",
    capitulo: 1,
    vIni: 18,
    vFim: 24,
    titulo: "Paulo vai a Jerusalém, Síria e Cilícia"
  },
  "gl2.1-10": {
    id: "gl2.1-10",
    referencia: "Gl 2.1-10",
    livro: "Gálatas",
    capitulo: 2,
    vIni: 1,
    vFim: 10,
    titulo: "O apostolado aos judeus e aos gentios"
  },
  "gl2.11-21": {
    id: "gl2.11-21",
    referencia: "Gl 2.11-21",
    livro: "Gálatas",
    capitulo: 2,
    vIni: 11,
    vFim: 21,
    titulo: "Paulo repreende a Pedro. A justificação pela fé em Cristo Jesus"
  },
  "gl3.1-5": {
    id: "gl3.1-5",
    referencia: "Gl 3.1-5",
    livro: "Gálatas",
    capitulo: 3,
    vIni: 1,
    vFim: 5,
    titulo: "Paulo apela para a experiência dos gálatas"
  },
  "gl3.6-14": {
    id: "gl3.6-14",
    referencia: "Gl 3.6-14",
    livro: "Gálatas",
    capitulo: 3,
    vIni: 6,
    vFim: 14,
    titulo: "A experiência de Abraão"
  },
  "gl3.15-22": {
    id: "gl3.15-22",
    referencia: "Gl 3.15-22",
    livro: "Gálatas",
    capitulo: 3,
    vIni: 15,
    vFim: 22,
    titulo: "A lei não pode invalidar a promessa"
  },
  "gl3.23-29": {
    id: "gl3.23-29",
    referencia: "Gl 3.23-29",
    livro: "Gálatas",
    capitulo: 3,
    vIni: 23,
    vFim: 29,
    titulo: "A tutela da lei para nos conduzir a Cristo"
  },
  "gl4.1-7": {
    id: "gl4.1-7",
    referencia: "Gl 4.1-7",
    livro: "Gálatas",
    capitulo: 4,
    vIni: 1,
    vFim: 7,
    titulo: "A nossa filiação em Cristo"
  },
  "gl4.8-11": {
    id: "gl4.8-11",
    referencia: "Gl 4.8-11",
    livro: "Gálatas",
    capitulo: 4,
    vIni: 8,
    vFim: 11,
    titulo: "O valor transitório dos ritos judaicos"
  },
  "gl4.12-20": {
    id: "gl4.12-20",
    referencia: "Gl 4.12-20",
    livro: "Gálatas",
    capitulo: 4,
    vIni: 12,
    vFim: 20,
    titulo: "A perplexidade de Paulo"
  },
  "gl4.21-31": {
    id: "gl4.21-31",
    referencia: "Gl 4.21-31",
    livro: "Gálatas",
    capitulo: 4,
    vIni: 21,
    vFim: 31,
    titulo: "Sara e Agar, alegoria das duas alianças"
  },
  "gl5.1-12": {
    id: "gl5.1-12",
    referencia: "Gl 5.1-12",
    livro: "Gálatas",
    capitulo: 5,
    vIni: 1,
    vFim: 12,
    titulo: "Ou a lei ou Cristo"
  },
  "gl5.13-15": {
    id: "gl5.13-15",
    referencia: "Gl 5.13-15",
    livro: "Gálatas",
    capitulo: 5,
    vIni: 13,
    vFim: 15,
    titulo: "A liberdade é limitada pelo amor"
  },
  "gl5.16-26": {
    id: "gl5.16-26",
    referencia: "Gl 5.16-26",
    livro: "Gálatas",
    capitulo: 5,
    vIni: 16,
    vFim: 26,
    titulo: "As obras da carne e o fruto do Espírito"
  },
  "gl6.1-5": {
    id: "gl6.1-5",
    referencia: "Gl 6.1-5",
    livro: "Gálatas",
    capitulo: 6,
    vIni: 1,
    vFim: 5,
    titulo: "O auxílio mútuo e a responsabilidade pessoal"
  },
  "gl6.6-11": {
    id: "gl6.6-11",
    referencia: "Gl 6.6-11",
    livro: "Gálatas",
    capitulo: 6,
    vIni: 6,
    vFim: 11,
    titulo: "O que o homem semear, isso também ceifará"
  },
  "gl6.12-17": {
    id: "gl6.12-17",
    referencia: "Gl 6.12-17",
    livro: "Gálatas",
    capitulo: 6,
    vIni: 12,
    vFim: 17,
    titulo: "Paulo gloria-se na cruz de Cristo"
  },
  "gl6.18": {
    id: "gl6.18",
    referencia: "Gl 6.18",
    livro: "Gálatas",
    capitulo: 6,
    vIni: 18,
    vFim: 18,
    titulo: "A bênção"
  },
  "ef1.1-2": {
    id: "ef1.1-2",
    referencia: "Ef 1.1-2",
    livro: "Efésios",
    capitulo: 1,
    vIni: 1,
    vFim: 2,
    titulo: "Prefácio e saudação"
  },
  "ef1.3-14": {
    id: "ef1.3-14",
    referencia: "Ef 1.3-14",
    livro: "Efésios",
    capitulo: 1,
    vIni: 3,
    vFim: 14,
    titulo: "As bênçãos de Deus em Cristo, autor da nossa redenção"
  },
  "ef1.15-23": {
    id: "ef1.15-23",
    referencia: "Ef 1.15-23",
    livro: "Efésios",
    capitulo: 1,
    vIni: 15,
    vFim: 23,
    titulo: "Paulo ora pelos crentes"
  },
  "ef2.1-10": {
    id: "ef2.1-10",
    referencia: "Ef 2.1-10",
    livro: "Efésios",
    capitulo: 2,
    vIni: 1,
    vFim: 10,
    titulo: "Do pecado para a salvação pela graça"
  },
  "ef2.11-22": {
    id: "ef2.11-22",
    referencia: "Ef 2.11-22",
    livro: "Efésios",
    capitulo: 2,
    vIni: 11,
    vFim: 22,
    titulo: "Os gentios e os judeus são unidos pela cruz de Cristo"
  },
  "ef3.1-13": {
    id: "ef3.1-13",
    referencia: "Ef 3.1-13",
    livro: "Efésios",
    capitulo: 3,
    vIni: 1,
    vFim: 13,
    titulo: "A vocação dos gentios e o apostolado de Paulo"
  },
  "ef3.14-21": {
    id: "ef3.14-21",
    referencia: "Ef 3.14-21",
    livro: "Efésios",
    capitulo: 3,
    vIni: 14,
    vFim: 21,
    titulo: "Paulo ora novamente"
  },
  "ef4.1-6": {
    id: "ef4.1-6",
    referencia: "Ef 4.1-6",
    livro: "Efésios",
    capitulo: 4,
    vIni: 1,
    vFim: 6,
    titulo: "A unidade da fé"
  },
  "ef4.7-16": {
    id: "ef4.7-16",
    referencia: "Ef 4.7-16",
    livro: "Efésios",
    capitulo: 4,
    vIni: 7,
    vFim: 16,
    titulo: "O santo ministério e o serviço dos santos"
  },
  "ef4.17-24": {
    id: "ef4.17-24",
    referencia: "Ef 4.17-24",
    livro: "Efésios",
    capitulo: 4,
    vIni: 17,
    vFim: 24,
    titulo: "A santidade cristã oposta à dissolução"
  },
  "ef4.25-32": {
    id: "ef4.25-32",
    referencia: "Ef 4.25-32",
    livro: "Efésios",
    capitulo: 4,
    vIni: 25,
    vFim: 32,
    titulo: "Exortações à santidade"
  },
  "ef5.3-21": {
    id: "ef5.3-21",
    referencia: "Ef 5.3-21",
    livro: "Efésios",
    capitulo: 5,
    vIni: 3,
    vFim: 21,
    titulo: "O fruto da luz e as obras das trevas"
  },
  "ef5.22-33": {
    id: "ef5.22-33",
    referencia: "Ef 5.22-33",
    livro: "Efésios",
    capitulo: 5,
    vIni: 22,
    vFim: 33,
    titulo: "O lar cristão: marido e mulher"
  },
  "ef6.1-4": {
    id: "ef6.1-4",
    referencia: "Ef 6.1-4",
    livro: "Efésios",
    capitulo: 6,
    vIni: 1,
    vFim: 4,
    titulo: "O lar cristão: filhos e pais"
  },
  "ef6.5-9": {
    id: "ef6.5-9",
    referencia: "Ef 6.5-9",
    livro: "Efésios",
    capitulo: 6,
    vIni: 5,
    vFim: 9,
    titulo: "O lar cristão: servos e senhores"
  },
  "ef6.10-20": {
    id: "ef6.10-20",
    referencia: "Ef 6.10-20",
    livro: "Efésios",
    capitulo: 6,
    vIni: 10,
    vFim: 20,
    titulo: "A armadura de Deus"
  },
  "ef6.21-22": {
    id: "ef6.21-22",
    referencia: "Ef 6.21-22",
    livro: "Efésios",
    capitulo: 6,
    vIni: 21,
    vFim: 22,
    titulo: "Tíquico"
  },
  "ef6.23-24": {
    id: "ef6.23-24",
    referencia: "Ef 6.23-24",
    livro: "Efésios",
    capitulo: 6,
    vIni: 23,
    vFim: 24,
    titulo: "A bênção"
  },
  "fp1.1-2": {
    id: "fp1.1-2",
    referencia: "Fp 1.1-2",
    livro: "Filipenses",
    capitulo: 1,
    vIni: 1,
    vFim: 2,
    titulo: "Prefácio e saudação"
  },
  "fp1.3-11": {
    id: "fp1.3-11",
    referencia: "Fp 1.3-11",
    livro: "Filipenses",
    capitulo: 1,
    vIni: 3,
    vFim: 11,
    titulo: "Ação de graças e súplicas em favor dos filipenses"
  },
  "fp1.12-26": {
    id: "fp1.12-26",
    referencia: "Fp 1.12-26",
    livro: "Filipenses",
    capitulo: 1,
    vIni: 12,
    vFim: 26,
    titulo: "A situação do apóstolo contribui para o progresso do evangelho"
  },
  "fp1.27-30": {
    id: "fp1.27-30",
    referencia: "Fp 1.27-30",
    livro: "Filipenses",
    capitulo: 1,
    vIni: 27,
    vFim: 30,
    titulo: "A unidade cristã na luta"
  },
  "fp2.1-4": {
    id: "fp2.1-4",
    referencia: "Fp 2.1-4",
    livro: "Filipenses",
    capitulo: 2,
    vIni: 1,
    vFim: 4,
    titulo: "Exortação ao amor fraternal e à humildade"
  },
  "fp2.5-11": {
    id: "fp2.5-11",
    referencia: "Fp 2.5-11",
    livro: "Filipenses",
    capitulo: 2,
    vIni: 5,
    vFim: 11,
    titulo: "O exemplo de Cristo na humilhação"
  },
  "fp2.12-18": {
    id: "fp2.12-18",
    referencia: "Fp 2.12-18",
    livro: "Filipenses",
    capitulo: 2,
    vIni: 12,
    vFim: 18,
    titulo: "O desenvolvimento da salvação"
  },
  "fp2.19-30": {
    id: "fp2.19-30",
    referencia: "Fp 2.19-30",
    livro: "Filipenses",
    capitulo: 2,
    vIni: 19,
    vFim: 30,
    titulo: "Paulo e seus companheiros Timóteo e Epafrodito"
  },
  "fp3.1": {
    id: "fp3.1",
    referencia: "Fp 3.1",
    livro: "Filipenses",
    capitulo: 3,
    vIni: 1,
    vFim: 1,
    titulo: "A exortação referente à alegria cristã"
  },
  "fp3.2-11": {
    id: "fp3.2-11",
    referencia: "Fp 3.2-11",
    livro: "Filipenses",
    capitulo: 3,
    vIni: 2,
    vFim: 11,
    titulo: "O aviso contra os falsos mestres"
  },
  "fp3.12-16": {
    id: "fp3.12-16",
    referencia: "Fp 3.12-16",
    livro: "Filipenses",
    capitulo: 3,
    vIni: 12,
    vFim: 16,
    titulo: "A soberana vocação"
  },
  "fp3.17-21": {
    id: "fp3.17-21",
    referencia: "Fp 3.17-21",
    livro: "Filipenses",
    capitulo: 3,
    vIni: 17,
    vFim: 21,
    titulo: "Os inimigos da cruz de Cristo"
  },
  "fp4.2-7": {
    id: "fp4.2-7",
    referencia: "Fp 4.2-7",
    livro: "Filipenses",
    capitulo: 4,
    vIni: 2,
    vFim: 7,
    titulo: "Apelo de Paulo para Evódia e Síntique. Regozijo e oração"
  },
  "fp4.8-9": {
    id: "fp4.8-9",
    referencia: "Fp 4.8-9",
    livro: "Filipenses",
    capitulo: 4,
    vIni: 8,
    vFim: 9,
    titulo: "O em que pensar"
  },
  "fp4.10-20": {
    id: "fp4.10-20",
    referencia: "Fp 4.10-20",
    livro: "Filipenses",
    capitulo: 4,
    vIni: 10,
    vFim: 20,
    titulo: "A gratidão de Paulo para com os filipenses"
  },
  "fp4.21-23": {
    id: "fp4.21-23",
    referencia: "Fp 4.21-23",
    livro: "Filipenses",
    capitulo: 4,
    vIni: 21,
    vFim: 23,
    titulo: "Saudações e bênção"
  },
  "cl1.1-2": {
    id: "cl1.1-2",
    referencia: "Cl 1.1-2",
    livro: "Colossenses",
    capitulo: 1,
    vIni: 1,
    vFim: 2,
    titulo: "Prefácio e saudação"
  },
  "cl1.3-7": {
    id: "cl1.3-7",
    referencia: "Cl 1.3-7",
    livro: "Colossenses",
    capitulo: 1,
    vIni: 3,
    vFim: 7,
    titulo: "Ação de graças"
  },
  "cl1.9-12": {
    id: "cl1.9-12",
    referencia: "Cl 1.9-12",
    livro: "Colossenses",
    capitulo: 1,
    vIni: 9,
    vFim: 12,
    titulo: "Paulo ora pelos colossenses"
  },
  "cl1.13-23": {
    id: "cl1.13-23",
    referencia: "Cl 1.13-23",
    livro: "Colossenses",
    capitulo: 1,
    vIni: 13,
    vFim: 23,
    titulo: "A excelência da pessoa e da obra de Cristo"
  },
  "cl1.24-29": {
    id: "cl1.24-29",
    referencia: "Cl 1.24-29",
    livro: "Colossenses",
    capitulo: 1,
    vIni: 24,
    vFim: 29,
    titulo: "A missão de Paulo. O mistério do evangelho"
  },
  "cl2.1-5": {
    id: "cl2.1-5",
    referencia: "Cl 2.1-5",
    livro: "Colossenses",
    capitulo: 2,
    vIni: 1,
    vFim: 5,
    titulo: "O interesse de Paulo pelos colossenses"
  },
  "cl2.6-7": {
    id: "cl2.6-7",
    referencia: "Cl 2.6-7",
    livro: "Colossenses",
    capitulo: 2,
    vIni: 6,
    vFim: 7,
    titulo: "O desejo de Paulo pelo progresso espiritual dos colossenses"
  },
  "cl2.8-15": {
    id: "cl2.8-15",
    referencia: "Cl 2.8-15",
    livro: "Colossenses",
    capitulo: 2,
    vIni: 8,
    vFim: 15,
    titulo: "A advertência contra falsos ensinos. A divindade de Cristo e a sua obra redentora"
  },
  "cl2.16-19": {
    id: "cl2.16-19",
    referencia: "Cl 2.16-19",
    livro: "Colossenses",
    capitulo: 2,
    vIni: 16,
    vFim: 19,
    titulo: "O cerimonialismo, sombra de coisas futuras"
  },
  "cl2.20-23": {
    id: "cl2.20-23",
    referencia: "Cl 2.20-23",
    livro: "Colossenses",
    capitulo: 2,
    vIni: 20,
    vFim: 23,
    titulo: "A obediência a tais práticas não vence o pecado"
  },
  "cl3.1-4": {
    id: "cl3.1-4",
    referencia: "Cl 3.1-4",
    livro: "Colossenses",
    capitulo: 3,
    vIni: 1,
    vFim: 4,
    titulo: "A união com Cristo glorificado"
  },
  "cl3.5-11": {
    id: "cl3.5-11",
    referencia: "Cl 3.5-11",
    livro: "Colossenses",
    capitulo: 3,
    vIni: 5,
    vFim: 11,
    titulo: "Os resultados dessa união. Os vícios devem ser abandonados"
  },
  "cl3.12-17": {
    id: "cl3.12-17",
    referencia: "Cl 3.12-17",
    livro: "Colossenses",
    capitulo: 3,
    vIni: 12,
    vFim: 17,
    titulo: "As virtudes devem ser cultivadas"
  },
  "cl3.18-25": {
    id: "cl3.18-25",
    referencia: "Cl 3.18-25",
    livro: "Colossenses",
    capitulo: 3,
    vIni: 18,
    vFim: 25,
    titulo: "Os deveres da família"
  },
  "cl4.2-6": {
    id: "cl4.2-6",
    referencia: "Cl 4.2-6",
    livro: "Colossenses",
    capitulo: 4,
    vIni: 2,
    vFim: 6,
    titulo: "A oração e a prudência"
  },
  "cl4.7-9": {
    id: "cl4.7-9",
    referencia: "Cl 4.7-9",
    livro: "Colossenses",
    capitulo: 4,
    vIni: 7,
    vFim: 9,
    titulo: "Tíquico e Onésimo"
  },
  "cl4.10-17": {
    id: "cl4.10-17",
    referencia: "Cl 4.10-17",
    livro: "Colossenses",
    capitulo: 4,
    vIni: 10,
    vFim: 17,
    titulo: "As saudações finais"
  },
  "cl4.18": {
    id: "cl4.18",
    referencia: "Cl 4.18",
    livro: "Colossenses",
    capitulo: 4,
    vIni: 18,
    vFim: 18,
    titulo: "Saudação pessoal. A bênção"
  },
  "1ts1.1": {
    id: "1ts1.1",
    referencia: "1Ts 1.1",
    livro: "1 Tessalonicenses",
    capitulo: 1,
    vIni: 1,
    vFim: 1,
    titulo: "Prefácio e saudação"
  },
  "1ts1.2-10": {
    id: "1ts1.2-10",
    referencia: "1Ts 1.2-10",
    livro: "1 Tessalonicenses",
    capitulo: 1,
    vIni: 2,
    vFim: 10,
    titulo: "Ação de graças"
  },
  "1ts2.1-12": {
    id: "1ts2.1-12",
    referencia: "1Ts 2.1-12",
    livro: "1 Tessalonicenses",
    capitulo: 2,
    vIni: 1,
    vFim: 12,
    titulo: "O proceder do apóstolo Paulo e seus cooperadores na evangelização de Tessalônica"
  },
  "1ts2.13-16": {
    id: "1ts2.13-16",
    referencia: "1Ts 2.13-16",
    livro: "1 Tessalonicenses",
    capitulo: 2,
    vIni: 13,
    vFim: 16,
    titulo: "O proceder fiel dos tessalonicenses nas tribulações"
  },
  "1ts2.17-20": {
    id: "1ts2.17-20",
    referencia: "1Ts 2.17-20",
    livro: "1 Tessalonicenses",
    capitulo: 2,
    vIni: 17,
    vFim: 20,
    titulo: "O interesse de Paulo pelos tessalonicenses"
  },
  "1ts3.1-10": {
    id: "1ts3.1-10",
    referencia: "1Ts 3.1-10",
    livro: "1 Tessalonicenses",
    capitulo: 3,
    vIni: 1,
    vFim: 10,
    titulo: "Paulo envia-lhes Timóteo. As boas notícias trazidas por este ao apóstolo"
  },
  "1ts3.11-13": {
    id: "1ts3.11-13",
    referencia: "1Ts 3.11-13",
    livro: "1 Tessalonicenses",
    capitulo: 3,
    vIni: 11,
    vFim: 13,
    titulo: "Oração de Paulo pelos tessalonicenses"
  },
  "1ts4.1-8": {
    id: "1ts4.1-8",
    referencia: "1Ts 4.1-8",
    livro: "1 Tessalonicenses",
    capitulo: 4,
    vIni: 1,
    vFim: 8,
    titulo: "Exortação à prática da santidade"
  },
  "1ts4.9-12": {
    id: "1ts4.9-12",
    referencia: "1Ts 4.9-12",
    livro: "1 Tessalonicenses",
    capitulo: 4,
    vIni: 9,
    vFim: 12,
    titulo: "Exortação à prática do amor fraternal"
  },
  "1ts4.13-18": {
    id: "1ts4.13-18",
    referencia: "1Ts 4.13-18",
    livro: "1 Tessalonicenses",
    capitulo: 4,
    vIni: 13,
    vFim: 18,
    titulo: "A situação dos mortos em Cristo e a vinda do Senhor"
  },
  "1ts5.1-3": {
    id: "1ts5.1-3",
    referencia: "1Ts 5.1-3",
    livro: "1 Tessalonicenses",
    capitulo: 5,
    vIni: 1,
    vFim: 3,
    titulo: "A vinda do Senhor é certa e repentina"
  },
  "1ts5.4-11": {
    id: "1ts5.4-11",
    referencia: "1Ts 5.4-11",
    livro: "1 Tessalonicenses",
    capitulo: 5,
    vIni: 4,
    vFim: 11,
    titulo: "A necessidade de vigilância"
  },
  "1ts5.12-22": {
    id: "1ts5.12-22",
    referencia: "1Ts 5.12-22",
    livro: "1 Tessalonicenses",
    capitulo: 5,
    vIni: 12,
    vFim: 22,
    titulo: "Diversos preceitos"
  },
  "1ts5.23-24": {
    id: "1ts5.23-24",
    referencia: "1Ts 5.23-24",
    livro: "1 Tessalonicenses",
    capitulo: 5,
    vIni: 23,
    vFim: 24,
    titulo: "O voto do apóstolo"
  },
  "1ts5.25-28": {
    id: "1ts5.25-28",
    referencia: "1Ts 5.25-28",
    livro: "1 Tessalonicenses",
    capitulo: 5,
    vIni: 25,
    vFim: 28,
    titulo: "A saudação final e a bênção"
  },
  "2ts1.1-2": {
    id: "2ts1.1-2",
    referencia: "2Ts 1.1-2",
    livro: "2 Tessalonicenses",
    capitulo: 1,
    vIni: 1,
    vFim: 2,
    titulo: "Prefácio e saudação"
  },
  "2ts1.3-12": {
    id: "2ts1.3-12",
    referencia: "2Ts 1.3-12",
    livro: "2 Tessalonicenses",
    capitulo: 1,
    vIni: 3,
    vFim: 12,
    titulo: "Ação de graças"
  },
  "2ts2.1-6": {
    id: "2ts2.1-6",
    referencia: "2Ts 2.1-6",
    livro: "2 Tessalonicenses",
    capitulo: 2,
    vIni: 1,
    vFim: 6,
    titulo: "A vinda do Senhor. A revelação da apostasia. O homem da iniquidade"
  },
  "2ts2.7-12": {
    id: "2ts2.7-12",
    referencia: "2Ts 2.7-12",
    livro: "2 Tessalonicenses",
    capitulo: 2,
    vIni: 7,
    vFim: 12,
    titulo: "O caráter do homem da iniquidade e a sua derrota"
  },
  "2ts2.13-17": {
    id: "2ts2.13-17",
    referencia: "2Ts 2.13-17",
    livro: "2 Tessalonicenses",
    capitulo: 2,
    vIni: 13,
    vFim: 17,
    titulo: "Ação de graças e exortação"
  },
  "2ts3.1-5": {
    id: "2ts3.1-5",
    referencia: "2Ts 3.1-5",
    livro: "2 Tessalonicenses",
    capitulo: 3,
    vIni: 1,
    vFim: 5,
    titulo: "Paulo pede as orações dos tessalonicenses"
  },
  "2ts3.6-16": {
    id: "2ts3.6-16",
    referencia: "2Ts 3.6-16",
    livro: "2 Tessalonicenses",
    capitulo: 3,
    vIni: 6,
    vFim: 16,
    titulo: "Exortação à prática de vários deveres cristãos pessoais, sociais e coletivos"
  },
  "2ts3.17-18": {
    id: "2ts3.17-18",
    referencia: "2Ts 3.17-18",
    livro: "2 Tessalonicenses",
    capitulo: 3,
    vIni: 17,
    vFim: 18,
    titulo: "A saudação final e a bênção"
  },
  "1tm1.1-2": {
    id: "1tm1.1-2",
    referencia: "1Tm 1.1-2",
    livro: "1 Timóteo",
    capitulo: 1,
    vIni: 1,
    vFim: 2,
    titulo: "Prefácio e saudação"
  },
  "1tm1.3-7": {
    id: "1tm1.3-7",
    referencia: "1Tm 1.3-7",
    livro: "1 Timóteo",
    capitulo: 1,
    vIni: 3,
    vFim: 7,
    titulo: "O ministério de Timóteo em Éfeso. Falsas doutrinas e suas características"
  },
  "1tm1.8-11": {
    id: "1tm1.8-11",
    referencia: "1Tm 1.8-11",
    livro: "1 Timóteo",
    capitulo: 1,
    vIni: 8,
    vFim: 11,
    titulo: "A lei e os seus objetivos"
  },
  "1tm1.12-17": {
    id: "1tm1.12-17",
    referencia: "1Tm 1.12-17",
    livro: "1 Timóteo",
    capitulo: 1,
    vIni: 12,
    vFim: 17,
    titulo: "A graça e a sua eficácia na experiência do apóstolo Paulo"
  },
  "1tm1.18-20": {
    id: "1tm1.18-20",
    referencia: "1Tm 1.18-20",
    livro: "1 Timóteo",
    capitulo: 1,
    vIni: 18,
    vFim: 20,
    titulo: "O bom combate"
  },
  "1tm2.1-7": {
    id: "1tm2.1-7",
    referencia: "1Tm 2.1-7",
    livro: "1 Timóteo",
    capitulo: 2,
    vIni: 1,
    vFim: 7,
    titulo: "A prática da oração por todos os homens. Um só Mediador"
  },
  "1tm2.8-15": {
    id: "1tm2.8-15",
    referencia: "1Tm 2.8-15",
    livro: "1 Timóteo",
    capitulo: 2,
    vIni: 8,
    vFim: 15,
    titulo: "Proceder conveniente no culto público"
  },
  "1tm3.1-13": {
    id: "1tm3.1-13",
    referencia: "1Tm 3.1-13",
    livro: "1 Timóteo",
    capitulo: 3,
    vIni: 1,
    vFim: 13,
    titulo: "As qualificações dos bispos e dos diáconos"
  },
  "1tm3.14-16": {
    id: "1tm3.14-16",
    referencia: "1Tm 3.14-16",
    livro: "1 Timóteo",
    capitulo: 3,
    vIni: 14,
    vFim: 16,
    titulo: "A igreja de Deus, coluna e baluarte da verdade. O grande mistério da piedade"
  },
  "1tm4.1-5": {
    id: "1tm4.1-5",
    referencia: "1Tm 4.1-5",
    livro: "1 Timóteo",
    capitulo: 4,
    vIni: 1,
    vFim: 5,
    titulo: "A apostasia nos últimos tempos"
  },
  "1tm4.6-16": {
    id: "1tm4.6-16",
    referencia: "1Tm 4.6-16",
    livro: "1 Timóteo",
    capitulo: 4,
    vIni: 6,
    vFim: 16,
    titulo: "Exortação à fidelidade e à diligência no ministério"
  },
  "1tm5.1-2": {
    id: "1tm5.1-2",
    referencia: "1Tm 5.1-2",
    livro: "1 Timóteo",
    capitulo: 5,
    vIni: 1,
    vFim: 2,
    titulo: "Os deveres dos pastores para com várias classes de pessoas"
  },
  "1tm5.3-16": {
    id: "1tm5.3-16",
    referencia: "1Tm 5.3-16",
    livro: "1 Timóteo",
    capitulo: 5,
    vIni: 3,
    vFim: 16,
    titulo: "Das viúvas"
  },
  "1tm5.17-25": {
    id: "1tm5.17-25",
    referencia: "1Tm 5.17-25",
    livro: "1 Timóteo",
    capitulo: 5,
    vIni: 17,
    vFim: 25,
    titulo: "Acerca dos presbíteros. Vários conselhos"
  },
  "1tm6.1-2": {
    id: "1tm6.1-2",
    referencia: "1Tm 6.1-2",
    livro: "1 Timóteo",
    capitulo: 6,
    vIni: 1,
    vFim: 2,
    titulo: "Dos senhores e dos servos"
  },
  "1tm6.3-10": {
    id: "1tm6.3-10",
    referencia: "1Tm 6.3-10",
    livro: "1 Timóteo",
    capitulo: 6,
    vIni: 3,
    vFim: 10,
    titulo: "Os falsos mestres e os perigos da riqueza"
  },
  "1tm6.11-16": {
    id: "1tm6.11-16",
    referencia: "1Tm 6.11-16",
    livro: "1 Timóteo",
    capitulo: 6,
    vIni: 11,
    vFim: 16,
    titulo: "Apelo para Timóteo"
  },
  "1tm6.17-19": {
    id: "1tm6.17-19",
    referencia: "1Tm 6.17-19",
    livro: "1 Timóteo",
    capitulo: 6,
    vIni: 17,
    vFim: 19,
    titulo: "Acerca dos ricos"
  },
  "1tm6.20-21": {
    id: "1tm6.20-21",
    referencia: "1Tm 6.20-21",
    livro: "1 Timóteo",
    capitulo: 6,
    vIni: 20,
    vFim: 21,
    titulo: "O conselho final e a bênção apostólica"
  },
  "2tm1.1-2": {
    id: "2tm1.1-2",
    referencia: "2Tm 1.1-2",
    livro: "2 Timóteo",
    capitulo: 1,
    vIni: 1,
    vFim: 2,
    titulo: "Prefácio e saudação"
  },
  "2tm1.3-5": {
    id: "2tm1.3-5",
    referencia: "2Tm 1.3-5",
    livro: "2 Timóteo",
    capitulo: 1,
    vIni: 3,
    vFim: 5,
    titulo: "Ação de graças"
  },
  "2tm1.6-14": {
    id: "2tm1.6-14",
    referencia: "2Tm 1.6-14",
    livro: "2 Timóteo",
    capitulo: 1,
    vIni: 6,
    vFim: 14,
    titulo: "A prática do zelo, da firmeza e da fidelidade"
  },
  "2tm1.15-18": {
    id: "2tm1.15-18",
    referencia: "2Tm 1.15-18",
    livro: "2 Timóteo",
    capitulo: 1,
    vIni: 15,
    vFim: 18,
    titulo: "A situação do apóstolo preso e o procedimento de alguns de seus colaboradores"
  },
  "2tm2.1-13": {
    id: "2tm2.1-13",
    referencia: "2Tm 2.1-13",
    livro: "2 Timóteo",
    capitulo: 2,
    vIni: 1,
    vFim: 13,
    titulo: "Os estímulos no combate da fé e no sofrimento por Cristo"
  },
  "2tm2.14-26": {
    id: "2tm2.14-26",
    referencia: "2Tm 2.14-26",
    livro: "2 Timóteo",
    capitulo: 2,
    vIni: 14,
    vFim: 26,
    titulo: "As falsas doutrinas e os falsos crentes. Como corrigi- los"
  },
  "2tm3.1-9": {
    id: "2tm3.1-9",
    referencia: "2Tm 3.1-9",
    livro: "2 Timóteo",
    capitulo: 3,
    vIni: 1,
    vFim: 9,
    titulo: "Os males e as corrupções dos últimos dias"
  },
  "2tm3.10-13": {
    id: "2tm3.10-13",
    referencia: "2Tm 3.10-13",
    livro: "2 Timóteo",
    capitulo: 3,
    vIni: 10,
    vFim: 13,
    titulo: "Paulo elogia a Timóteo por sua firmeza e o exorta a permanecer leal à verdade"
  },
  "2tm3.14-17": {
    id: "2tm3.14-17",
    referencia: "2Tm 3.14-17",
    livro: "2 Timóteo",
    capitulo: 3,
    vIni: 14,
    vFim: 17,
    titulo: "A inspiração, valor e utilidade das Santas Escrituras"
  },
  "2tm4.1-5": {
    id: "2tm4.1-5",
    referencia: "2Tm 4.1-5",
    livro: "2 Timóteo",
    capitulo: 4,
    vIni: 1,
    vFim: 5,
    titulo: "A fidelidade e o zelo na pregação"
  },
  "2tm4.6-8": {
    id: "2tm4.6-8",
    referencia: "2Tm 4.6-8",
    livro: "2 Timóteo",
    capitulo: 4,
    vIni: 6,
    vFim: 8,
    titulo: "O apóstolo prevê o seu martírio"
  },
  "2tm4.9-18": {
    id: "2tm4.9-18",
    referencia: "2Tm 4.9-18",
    livro: "2 Timóteo",
    capitulo: 4,
    vIni: 9,
    vFim: 18,
    titulo: "O apóstolo abandonado pelos homens, não por Deus"
  },
  "2tm4.19-22": {
    id: "2tm4.19-22",
    referencia: "2Tm 4.19-22",
    livro: "2 Timóteo",
    capitulo: 4,
    vIni: 19,
    vFim: 22,
    titulo: "As saudações finais e a bênção"
  },
  "tt1.1-4": {
    id: "tt1.1-4",
    referencia: "Tt 1.1-4",
    livro: "Tito",
    capitulo: 1,
    vIni: 1,
    vFim: 4,
    titulo: "Prefácio e saudação"
  },
  "tt1.5-9": {
    id: "tt1.5-9",
    referencia: "Tt 1.5-9",
    livro: "Tito",
    capitulo: 1,
    vIni: 5,
    vFim: 9,
    titulo: "Deveres e qualificações dos ministros"
  },
  "tt1.10-16": {
    id: "tt1.10-16",
    referencia: "Tt 1.10-16",
    livro: "Tito",
    capitulo: 1,
    vIni: 10,
    vFim: 16,
    titulo: "Os falsos mestres e as falsas doutrinas"
  },
  "tt2.1-10": {
    id: "tt2.1-10",
    referencia: "Tt 2.1-10",
    livro: "Tito",
    capitulo: 2,
    vIni: 1,
    vFim: 10,
    titulo: "Os deveres das várias classes de pessoas crentes"
  },
  "tt2.11-15": {
    id: "tt2.11-15",
    referencia: "Tt 2.11-15",
    livro: "Tito",
    capitulo: 2,
    vIni: 11,
    vFim: 15,
    titulo: "Os gloriosos benefícios da graça salvadora de Cristo"
  },
  "tt3.1-11": {
    id: "tt3.1-11",
    referencia: "Tt 3.1-11",
    livro: "Tito",
    capitulo: 3,
    vIni: 1,
    vFim: 11,
    titulo: "A obediência às autoridades. A salvação pela graça leva às boas obras"
  },
  "tt3.12-15": {
    id: "tt3.12-15",
    referencia: "Tt 3.12-15",
    livro: "Tito",
    capitulo: 3,
    vIni: 12,
    vFim: 15,
    titulo: "As recomendações particulares. As saudações finais. A bênção"
  },
  "tt3.1-3": {
    id: "tt3.1-3",
    referencia: "Tt 3.1-3",
    livro: "Tito",
    capitulo: 3,
    vIni: 1,
    vFim: 3,
    titulo: "Prefácio e saudação"
  },
  "tt3.4-7": {
    id: "tt3.4-7",
    referencia: "Tt 3.4-7",
    livro: "Tito",
    capitulo: 3,
    vIni: 4,
    vFim: 7,
    titulo: "Ação de graças"
  },
  "tt3.8-20": {
    id: "tt3.8-20",
    referencia: "Tt 3.8-20",
    livro: "Tito",
    capitulo: 3,
    vIni: 8,
    vFim: 20,
    titulo: "Paulo intercede em favor de Onésimo"
  },
  "tt3.21-25": {
    id: "tt3.21-25",
    referencia: "Tt 3.21-25",
    livro: "Tito",
    capitulo: 3,
    vIni: 21,
    vFim: 25,
    titulo: "Comunicações pessoais. Saudações e bênção"
  },
  "hb1.1-4": {
    id: "hb1.1-4",
    referencia: "Hb 1.1-4",
    livro: "Hebreus",
    capitulo: 1,
    vIni: 1,
    vFim: 4,
    titulo: "A revelação de Deus"
  },
  "hb1.5-14": {
    id: "hb1.5-14",
    referencia: "Hb 1.5-14",
    livro: "Hebreus",
    capitulo: 1,
    vIni: 5,
    vFim: 14,
    titulo: "Cristo é o Filho, os anjos são ministros"
  },
  "hb2.1-4": {
    id: "hb2.1-4",
    referencia: "Hb 2.1-4",
    livro: "Hebreus",
    capitulo: 2,
    vIni: 1,
    vFim: 4,
    titulo: "O perigo da negligência"
  },
  "hb2.5-18": {
    id: "hb2.5-18",
    referencia: "Hb 2.5-18",
    livro: "Hebreus",
    capitulo: 2,
    vIni: 5,
    vFim: 18,
    titulo: "Jesus coroado de glória: sumo sacerdote idôneo e compassivo"
  },
  "hb3.1-19": {
    id: "hb3.1-19",
    referencia: "Hb 3.1-19",
    livro: "Hebreus",
    capitulo: 3,
    vIni: 1,
    vFim: 19,
    titulo: "Cristo é superior a Moisés. O perigo da incredulidade e da desobediência"
  },
  "hb4.1-13": {
    id: "hb4.1-13",
    referencia: "Hb 4.1-13",
    livro: "Hebreus",
    capitulo: 4,
    vIni: 1,
    vFim: 13,
    titulo: "A entrada no descanso de Deus pela fé"
  },
  "hb4.14-16": {
    id: "hb4.14-16",
    referencia: "Hb 4.14-16",
    livro: "Hebreus",
    capitulo: 4,
    vIni: 14,
    vFim: 16,
    titulo: "Jesus, o sumo sacerdote que se compadece de nós"
  },
  "hb5.1-10": {
    id: "hb5.1-10",
    referencia: "Hb 5.1-10",
    livro: "Hebreus",
    capitulo: 5,
    vIni: 1,
    vFim: 10,
    titulo: "Cristo, superior ao sacerdócio da antiga aliança"
  },
  "hb5.11-14": {
    id: "hb5.11-14",
    referencia: "Hb 5.11-14",
    livro: "Hebreus",
    capitulo: 5,
    vIni: 11,
    vFim: 14,
    titulo: "Os cristãos hebreus não tinham progredido"
  },
  "hb6.1-3": {
    id: "hb6.1-3",
    referencia: "Hb 6.1-3",
    livro: "Hebreus",
    capitulo: 6,
    vIni: 1,
    vFim: 3,
    titulo: "Exortação ao progresso na fé"
  },
  "hb6.4-8": {
    id: "hb6.4-8",
    referencia: "Hb 6.4-8",
    livro: "Hebreus",
    capitulo: 6,
    vIni: 4,
    vFim: 8,
    titulo: "Os perigos espirituais"
  },
  "hb6.9-12": {
    id: "hb6.9-12",
    referencia: "Hb 6.9-12",
    livro: "Hebreus",
    capitulo: 6,
    vIni: 9,
    vFim: 12,
    titulo: "As coisas melhores e pertencentes à salvação"
  },
  "hb6.13-20": {
    id: "hb6.13-20",
    referencia: "Hb 6.13-20",
    livro: "Hebreus",
    capitulo: 6,
    vIni: 13,
    vFim: 20,
    titulo: "A imutabilidade da promessa de Deus"
  },
  "hb7.1-3": {
    id: "hb7.1-3",
    referencia: "Hb 7.1-3",
    livro: "Hebreus",
    capitulo: 7,
    vIni: 1,
    vFim: 3,
    titulo: "Melquisedeque, tipo de Cristo"
  },
  "hb7.4-10": {
    id: "hb7.4-10",
    referencia: "Hb 7.4-10",
    livro: "Hebreus",
    capitulo: 7,
    vIni: 4,
    vFim: 10,
    titulo: "O sacerdócio de Cristo é superior ao levítico"
  },
  "hb7.11-19": {
    id: "hb7.11-19",
    referencia: "Hb 7.11-19",
    livro: "Hebreus",
    capitulo: 7,
    vIni: 11,
    vFim: 19,
    titulo: "O sacerdócio levítico teve fim, mas o de Cristo é eterno"
  },
  "hb7.20-28": {
    id: "hb7.20-28",
    referencia: "Hb 7.20-28",
    livro: "Hebreus",
    capitulo: 7,
    vIni: 20,
    vFim: 28,
    titulo: "Cristo, sacerdote único e perfeito"
  },
  "hb8.1-13": {
    id: "hb8.1-13",
    referencia: "Hb 8.1-13",
    livro: "Hebreus",
    capitulo: 8,
    vIni: 1,
    vFim: 13,
    titulo: "A antiga aliança era o símbolo transitório da nova, superior e eterna, da qual Cristo é o mediador"
  },
  "hb9.1-10": {
    id: "hb9.1-10",
    referencia: "Hb 9.1-10",
    livro: "Hebreus",
    capitulo: 9,
    vIni: 1,
    vFim: 10,
    titulo: "Os ritos, ofertas e sacrifícios mosaicos eram imperfeitos e ineficazes"
  },
  "hb9.11-22": {
    id: "hb9.11-22",
    referencia: "Hb 9.11-22",
    livro: "Hebreus",
    capitulo: 9,
    vIni: 11,
    vFim: 22,
    titulo: "O sacrifício de Cristo não se repete, é perfeito e eficaz"
  },
  "hb9.23-28": {
    id: "hb9.23-28",
    referencia: "Hb 9.23-28",
    livro: "Hebreus",
    capitulo: 9,
    vIni: 23,
    vFim: 28,
    titulo: "O sacrifício de Cristo é eficaz para sempre"
  },
  "hb10.1-18": {
    id: "hb10.1-18",
    referencia: "Hb 10.1-18",
    livro: "Hebreus",
    capitulo: 10,
    vIni: 1,
    vFim: 18,
    titulo: "Os sacrifícios antigos eram humanos e transitórios. A expiação feita por Cristo é divina e permanente"
  },
  "hb10.19-25": {
    id: "hb10.19-25",
    referencia: "Hb 10.19-25",
    livro: "Hebreus",
    capitulo: 10,
    vIni: 19,
    vFim: 25,
    titulo: "O privilégio de acesso dos crentes à presença de Deus"
  },
  "hb10.26-31": {
    id: "hb10.26-31",
    referencia: "Hb 10.26-31",
    livro: "Hebreus",
    capitulo: 10,
    vIni: 26,
    vFim: 31,
    titulo: "O castigo do pecado voluntário"
  },
  "hb10.32-39": {
    id: "hb10.32-39",
    referencia: "Hb 10.32-39",
    livro: "Hebreus",
    capitulo: 10,
    vIni: 32,
    vFim: 39,
    titulo: "Apelo para o passado. A recompensa não tarda"
  },
  "hb11.1-3": {
    id: "hb11.1-3",
    referencia: "Hb 11.1-3",
    livro: "Hebreus",
    capitulo: 11,
    vIni: 1,
    vFim: 3,
    titulo: "A natureza da fé"
  },
  "hb11.4-40": {
    id: "hb11.4-40",
    referencia: "Hb 11.4-40",
    livro: "Hebreus",
    capitulo: 11,
    vIni: 4,
    vFim: 40,
    titulo: "Exemplos de fé extraídos do Antigo Testamento"
  },
  "hb12.1-3": {
    id: "hb12.1-3",
    referencia: "Hb 12.1-3",
    livro: "Hebreus",
    capitulo: 12,
    vIni: 1,
    vFim: 3,
    titulo: "Devemos imitar o exemplo de Cristo, que foi perseverante em meio às provações"
  },
  "hb12.4-13": {
    id: "hb12.4-13",
    referencia: "Hb 12.4-13",
    livro: "Hebreus",
    capitulo: 12,
    vIni: 4,
    vFim: 13,
    titulo: "As provações revelam o amor paternal de Deus para com seus filhos"
  },
  "hb12.14-17": {
    id: "hb12.14-17",
    referencia: "Hb 12.14-17",
    livro: "Hebreus",
    capitulo: 12,
    vIni: 14,
    vFim: 17,
    titulo: "A exortação à paz e à pureza"
  },
  "hb12.18-29": {
    id: "hb12.18-29",
    referencia: "Hb 12.18-29",
    livro: "Hebreus",
    capitulo: 12,
    vIni: 18,
    vFim: 29,
    titulo: "O contraste entre Sinai e Sião"
  },
  "hb13.1-6": {
    id: "hb13.1-6",
    referencia: "Hb 13.1-6",
    livro: "Hebreus",
    capitulo: 13,
    vIni: 1,
    vFim: 6,
    titulo: "Os deveres sociais"
  },
  "hb13.7-17": {
    id: "hb13.7-17",
    referencia: "Hb 13.7-17",
    livro: "Hebreus",
    capitulo: 13,
    vIni: 7,
    vFim: 17,
    titulo: "Os deveres espirituais"
  },
  "hb13.18-25": {
    id: "hb13.18-25",
    referencia: "Hb 13.18-25",
    livro: "Hebreus",
    capitulo: 13,
    vIni: 18,
    vFim: 25,
    titulo: "Algumas recomendações pessoais"
  },
  "tg1.1": {
    id: "tg1.1",
    referencia: "Tg 1.1",
    livro: "Tiago",
    capitulo: 1,
    vIni: 1,
    vFim: 1,
    titulo: "Prefácio e saudação"
  },
  "tg1.2-4": {
    id: "tg1.2-4",
    referencia: "Tg 1.2-4",
    livro: "Tiago",
    capitulo: 1,
    vIni: 2,
    vFim: 4,
    titulo: "Os benefícios das provações"
  },
  "tg1.5-8": {
    id: "tg1.5-8",
    referencia: "Tg 1.5-8",
    livro: "Tiago",
    capitulo: 1,
    vIni: 5,
    vFim: 8,
    titulo: "Como obter a sabedoria"
  },
  "tg1.9-11": {
    id: "tg1.9-11",
    referencia: "Tg 1.9-11",
    livro: "Tiago",
    capitulo: 1,
    vIni: 9,
    vFim: 11,
    titulo: "As circunstâncias terrenas são transitórias"
  },
  "tg1.12-15": {
    id: "tg1.12-15",
    referencia: "Tg 1.12-15",
    livro: "Tiago",
    capitulo: 1,
    vIni: 12,
    vFim: 15,
    titulo: "A origem do pecado"
  },
  "tg1.16-18": {
    id: "tg1.16-18",
    referencia: "Tg 1.16-18",
    livro: "Tiago",
    capitulo: 1,
    vIni: 16,
    vFim: 18,
    titulo: "A origem do bem"
  },
  "tg1.19-27": {
    id: "tg1.19-27",
    referencia: "Tg 1.19-27",
    livro: "Tiago",
    capitulo: 1,
    vIni: 19,
    vFim: 27,
    titulo: "A prática da palavra de Deus"
  },
  "tg2.1-13": {
    id: "tg2.1-13",
    referencia: "Tg 2.1-13",
    livro: "Tiago",
    capitulo: 2,
    vIni: 1,
    vFim: 13,
    titulo: "Não se deve fazer acepção de pessoas"
  },
  "tg2.14-26": {
    id: "tg2.14-26",
    referencia: "Tg 2.14-26",
    livro: "Tiago",
    capitulo: 2,
    vIni: 14,
    vFim: 26,
    titulo: "A fé sem obras é morta"
  },
  "tg3.1-12": {
    id: "tg3.1-12",
    referencia: "Tg 3.1-12",
    livro: "Tiago",
    capitulo: 3,
    vIni: 1,
    vFim: 12,
    titulo: "Os pecados da língua e o dever de refreá-la"
  },
  "tg3.13-18": {
    id: "tg3.13-18",
    referencia: "Tg 3.13-18",
    livro: "Tiago",
    capitulo: 3,
    vIni: 13,
    vFim: 18,
    titulo: "A sabedoria lá do alto"
  },
  "tg4.1-10": {
    id: "tg4.1-10",
    referencia: "Tg 4.1-10",
    livro: "Tiago",
    capitulo: 4,
    vIni: 1,
    vFim: 10,
    titulo: "A origem das contendas"
  },
  "tg4.11-12": {
    id: "tg4.11-12",
    referencia: "Tg 4.11-12",
    livro: "Tiago",
    capitulo: 4,
    vIni: 11,
    vFim: 12,
    titulo: "A maledicência é condenada"
  },
  "tg4.13-17": {
    id: "tg4.13-17",
    referencia: "Tg 4.13-17",
    livro: "Tiago",
    capitulo: 4,
    vIni: 13,
    vFim: 17,
    titulo: "A falibilidade dos projetos humanos"
  },
  "tg5.1-6": {
    id: "tg5.1-6",
    referencia: "Tg 5.1-6",
    livro: "Tiago",
    capitulo: 5,
    vIni: 1,
    vFim: 6,
    titulo: "Deus condena as riquezas mal adquiridas e mal empregadas"
  },
  "tg5.7-11": {
    id: "tg5.7-11",
    referencia: "Tg 5.7-11",
    livro: "Tiago",
    capitulo: 5,
    vIni: 7,
    vFim: 11,
    titulo: "A necessidade, bênçãos e exemplo da paciência"
  },
  "tg5.12-20": {
    id: "tg5.12-20",
    referencia: "Tg 5.12-20",
    livro: "Tiago",
    capitulo: 5,
    vIni: 12,
    vFim: 20,
    titulo: "O juramento proibido e o proceder cristão em várias experiências da vida"
  },
  "1pe1.1-2": {
    id: "1pe1.1-2",
    referencia: "1Pe 1.1-2",
    livro: "1 Pedro",
    capitulo: 1,
    vIni: 1,
    vFim: 2,
    titulo: "Prefácio e saudação"
  },
  "1pe1.3-12": {
    id: "1pe1.3-12",
    referencia: "1Pe 1.3-12",
    livro: "1 Pedro",
    capitulo: 1,
    vIni: 3,
    vFim: 12,
    titulo: "Ação de graças"
  },
  "1pe1.13-21": {
    id: "1pe1.13-21",
    referencia: "1Pe 1.13-21",
    livro: "1 Pedro",
    capitulo: 1,
    vIni: 13,
    vFim: 21,
    titulo: "A santidade na vida"
  },
  "1pe1.22-25": {
    id: "1pe1.22-25",
    referencia: "1Pe 1.22-25",
    livro: "1 Pedro",
    capitulo: 1,
    vIni: 22,
    vFim: 25,
    titulo: "A santidade no amor"
  },
  "1pe2.1-10": {
    id: "1pe2.1-10",
    referencia: "1Pe 2.1-10",
    livro: "1 Pedro",
    capitulo: 2,
    vIni: 1,
    vFim: 10,
    titulo: "Os crentes são a casa espiritual edificada em Cristo"
  },
  "1pe2.11-17": {
    id: "1pe2.11-17",
    referencia: "1Pe 2.11-17",
    livro: "1 Pedro",
    capitulo: 2,
    vIni: 11,
    vFim: 17,
    titulo: "A vida exemplar cristã: deveres para com os não crentes e para com as autoridades"
  },
  "1pe2.18-25": {
    id: "1pe2.18-25",
    referencia: "1Pe 2.18-25",
    livro: "1 Pedro",
    capitulo: 2,
    vIni: 18,
    vFim: 25,
    titulo: "A vida exemplar cristã: deveres dos que prestam serviços a outrem"
  },
  "1pe3.1-7": {
    id: "1pe3.1-7",
    referencia: "1Pe 3.1-7",
    livro: "1 Pedro",
    capitulo: 3,
    vIni: 1,
    vFim: 7,
    titulo: "A vida exemplar cristã: deveres dos casados"
  },
  "1pe3.8-12": {
    id: "1pe3.8-12",
    referencia: "1Pe 3.8-12",
    livro: "1 Pedro",
    capitulo: 3,
    vIni: 8,
    vFim: 12,
    titulo: "A vida exemplar cristã: o amor fraternal"
  },
  "1pe3.13-22": {
    id: "1pe3.13-22",
    referencia: "1Pe 3.13-22",
    livro: "1 Pedro",
    capitulo: 3,
    vIni: 13,
    vFim: 22,
    titulo: "A prática do bem. A longanimidade segundo o exemplo de Cristo"
  },
  "1pe4.1-6": {
    id: "1pe4.1-6",
    referencia: "1Pe 4.1-6",
    livro: "1 Pedro",
    capitulo: 4,
    vIni: 1,
    vFim: 6,
    titulo: "A morte para o pecado e a pureza de vida"
  },
  "1pe4.7-11": {
    id: "1pe4.7-11",
    referencia: "1Pe 4.7-11",
    livro: "1 Pedro",
    capitulo: 4,
    vIni: 7,
    vFim: 11,
    titulo: "Alguns deveres dos crentes uns para com os outros"
  },
  "1pe4.12-19": {
    id: "1pe4.12-19",
    referencia: "1Pe 4.12-19",
    livro: "1 Pedro",
    capitulo: 4,
    vIni: 12,
    vFim: 19,
    titulo: "O sofrermos por Cristo é privilégio glorioso"
  },
  "1pe5.1-4": {
    id: "1pe5.1-4",
    referencia: "1Pe 5.1-4",
    livro: "1 Pedro",
    capitulo: 5,
    vIni: 1,
    vFim: 4,
    titulo: "Os deveres do ministério"
  },
  "1pe5.5-14": {
    id: "1pe5.5-14",
    referencia: "1Pe 5.5-14",
    livro: "1 Pedro",
    capitulo: 5,
    vIni: 5,
    vFim: 14,
    titulo: "Vários conselhos. Votos, saudações finais e bênção"
  },
  "2pe1.1-2": {
    id: "2pe1.1-2",
    referencia: "2Pe 1.1-2",
    livro: "2 Pedro",
    capitulo: 1,
    vIni: 1,
    vFim: 2,
    titulo: "Prefácio e saudação"
  },
  "2pe1.3-11": {
    id: "2pe1.3-11",
    referencia: "2Pe 1.3-11",
    livro: "2 Pedro",
    capitulo: 1,
    vIni: 3,
    vFim: 11,
    titulo: "A prática progressiva das graças cristãs e seus resultados"
  },
  "2pe1.12-15": {
    id: "2pe1.12-15",
    referencia: "2Pe 1.12-15",
    livro: "2 Pedro",
    capitulo: 1,
    vIni: 12,
    vFim: 15,
    titulo: "O apóstolo dá os motivos por que escreveu esta carta"
  },
  "2pe1.16-21": {
    id: "2pe1.16-21",
    referencia: "2Pe 1.16-21",
    livro: "2 Pedro",
    capitulo: 1,
    vIni: 16,
    vFim: 21,
    titulo: "A superioridade da palavra de Deus"
  },
  "2pe2.1-22": {
    id: "2pe2.1-22",
    referencia: "2Pe 2.1-22",
    livro: "2 Pedro",
    capitulo: 2,
    vIni: 1,
    vFim: 22,
    titulo: "Os falsos mestres, seu caráter, obras e justo castigo"
  },
  "2pe3.1-13": {
    id: "2pe3.1-13",
    referencia: "2Pe 3.1-13",
    livro: "2 Pedro",
    capitulo: 3,
    vIni: 1,
    vFim: 13,
    titulo: "A vinda do Senhor e o seu significado"
  },
  "2pe3.14-18": {
    id: "2pe3.14-18",
    referencia: "2Pe 3.14-18",
    livro: "2 Pedro",
    capitulo: 3,
    vIni: 14,
    vFim: 18,
    titulo: "O cristão deve esperar o Senhor, viver vida reta, estudar as Escrituras e crescer em Cristo"
  },
  "1jo1.1-4": {
    id: "1jo1.1-4",
    referencia: "1Jo 1.1-4",
    livro: "1 João",
    capitulo: 1,
    vIni: 1,
    vFim: 4,
    titulo: "Prólogo. O Verbo da vida e a comunhão com Deus"
  },
  "1jo1.5-10": {
    id: "1jo1.5-10",
    referencia: "1Jo 1.5-10",
    livro: "1 João",
    capitulo: 1,
    vIni: 5,
    vFim: 10,
    titulo: "Deus é luz. O pecado, a confissão, o perdão, a propiciação"
  },
  "1jo2.7-11": {
    id: "1jo2.7-11",
    referencia: "1Jo 2.7-11",
    livro: "1 João",
    capitulo: 2,
    vIni: 7,
    vFim: 11,
    titulo: "O antigo e o novo mandamentos: o amor fraternal"
  },
  "1jo2.12-14": {
    id: "1jo2.12-14",
    referencia: "1Jo 2.12-14",
    livro: "1 João",
    capitulo: 2,
    vIni: 12,
    vFim: 14,
    titulo: "A vitória sobre o Maligno"
  },
  "1jo2.15-17": {
    id: "1jo2.15-17",
    referencia: "1Jo 2.15-17",
    livro: "1 João",
    capitulo: 2,
    vIni: 15,
    vFim: 17,
    titulo: "Não se deve amar o mundo"
  },
  "1jo2.18-26": {
    id: "1jo2.18-26",
    referencia: "1Jo 2.18-26",
    livro: "1 João",
    capitulo: 2,
    vIni: 18,
    vFim: 26,
    titulo: "Os anticristos"
  },
  "1jo2.27-29": {
    id: "1jo2.27-29",
    referencia: "1Jo 2.27-29",
    livro: "1 João",
    capitulo: 2,
    vIni: 27,
    vFim: 29,
    titulo: "A unção do Espírito Santo"
  },
  "1jo3.1-6": {
    id: "1jo3.1-6",
    referencia: "1Jo 3.1-6",
    livro: "1 João",
    capitulo: 3,
    vIni: 1,
    vFim: 6,
    titulo: "Deus é Pai e é santo. Seus filhos são também santos"
  },
  "1jo3.7-10": {
    id: "1jo3.7-10",
    referencia: "1Jo 3.7-10",
    livro: "1 João",
    capitulo: 3,
    vIni: 7,
    vFim: 10,
    titulo: "Os filhos de Deus e os filhos do Maligno"
  },
  "1jo3.11-24": {
    id: "1jo3.11-24",
    referencia: "1Jo 3.11-24",
    livro: "1 João",
    capitulo: 3,
    vIni: 11,
    vFim: 24,
    titulo: "O amor aos irmãos e o ódio ao mundo"
  },
  "1jo4.1-6": {
    id: "1jo4.1-6",
    referencia: "1Jo 4.1-6",
    livro: "1 João",
    capitulo: 4,
    vIni: 1,
    vFim: 6,
    titulo: "Os falsos profetas e os verdadeiros crentes"
  },
  "1jo4.7-21": {
    id: "1jo4.7-21",
    referencia: "1Jo 4.7-21",
    livro: "1 João",
    capitulo: 4,
    vIni: 7,
    vFim: 21,
    titulo: "Deus é amor"
  },
  "1jo5.1-5": {
    id: "1jo5.1-5",
    referencia: "1Jo 5.1-5",
    livro: "1 João",
    capitulo: 5,
    vIni: 1,
    vFim: 5,
    titulo: "A fé que vence o mundo"
  },
  "1jo5.6-12": {
    id: "1jo5.6-12",
    referencia: "1Jo 5.6-12",
    livro: "1 João",
    capitulo: 5,
    vIni: 6,
    vFim: 12,
    titulo: "O tríplice testemunho sobre Cristo"
  },
  "1jo5.13-19": {
    id: "1jo5.13-19",
    referencia: "1Jo 5.13-19",
    livro: "1 João",
    capitulo: 5,
    vIni: 13,
    vFim: 19,
    titulo: "O poder da intercessão"
  },
  "1jo5.20-21": {
    id: "1jo5.20-21",
    referencia: "1Jo 5.20-21",
    livro: "1 João",
    capitulo: 5,
    vIni: 20,
    vFim: 21,
    titulo: "Cristo é verdadeiro Deus e deve ser adorado"
  },
  "2jo1.1-3": {
    id: "2jo1.1-3",
    referencia: "2Jo 1.1-3",
    livro: "2 João",
    capitulo: 1,
    vIni: 1,
    vFim: 3,
    titulo: "Prefácio e saudação"
  },
  "2jo1.4-6": {
    id: "2jo1.4-6",
    referencia: "2Jo 1.4-6",
    livro: "2 João",
    capitulo: 1,
    vIni: 4,
    vFim: 6,
    titulo: "O amor fraternal"
  },
  "2jo1.7-11": {
    id: "2jo1.7-11",
    referencia: "2Jo 1.7-11",
    livro: "2 João",
    capitulo: 1,
    vIni: 7,
    vFim: 11,
    titulo: "Os falsos ensinadores e como tratá-los"
  },
  "2jo1.12-13": {
    id: "2jo1.12-13",
    referencia: "2Jo 1.12-13",
    livro: "2 João",
    capitulo: 1,
    vIni: 12,
    vFim: 13,
    titulo: "Informações finais. Saudações"
  },
  "3jo1.1-4": {
    id: "3jo1.1-4",
    referencia: "3Jo 1.1-4",
    livro: "3 João",
    capitulo: 1,
    vIni: 1,
    vFim: 4,
    titulo: "Prefácio e saudação"
  },
  "3jo1.5-8": {
    id: "3jo1.5-8",
    referencia: "3Jo 1.5-8",
    livro: "3 João",
    capitulo: 1,
    vIni: 5,
    vFim: 8,
    titulo: "O bom exemplo de Gaio"
  },
  "3jo1.9-12": {
    id: "3jo1.9-12",
    referencia: "3Jo 1.9-12",
    livro: "3 João",
    capitulo: 1,
    vIni: 9,
    vFim: 12,
    titulo: "Diótrefes, o ambicioso. Demétrio, fiel cristão"
  },
  "3jo1.13-15": {
    id: "3jo1.13-15",
    referencia: "3Jo 1.13-15",
    livro: "3 João",
    capitulo: 1,
    vIni: 13,
    vFim: 15,
    titulo: "Informações finais. Saudações"
  },
  "jd1.1-2": {
    id: "jd1.1-2",
    referencia: "Jd 1.1-2",
    livro: "Judas",
    capitulo: 1,
    vIni: 1,
    vFim: 2,
    titulo: "Prefácio e saudação"
  },
  "jd1.3-4": {
    id: "jd1.3-4",
    referencia: "Jd 1.3-4",
    livro: "Judas",
    capitulo: 1,
    vIni: 3,
    vFim: 4,
    titulo: "É dever cristão pelejar pela fé"
  },
  "jd1.5-16": {
    id: "jd1.5-16",
    referencia: "Jd 1.5-16",
    livro: "Judas",
    capitulo: 1,
    vIni: 5,
    vFim: 16,
    titulo: "Exemplos da punição dos ímpios"
  },
  "jd1.17-23": {
    id: "jd1.17-23",
    referencia: "Jd 1.17-23",
    livro: "Judas",
    capitulo: 1,
    vIni: 17,
    vFim: 23,
    titulo: "A profecia apostólica. Exortações"
  },
  "jd1.24-25": {
    id: "jd1.24-25",
    referencia: "Jd 1.24-25",
    livro: "Judas",
    capitulo: 1,
    vIni: 24,
    vFim: 25,
    titulo: "A doxologia"
  },
  "ap1.1-3": {
    id: "ap1.1-3",
    referencia: "Ap 1.1-3",
    livro: "Apocalipse",
    capitulo: 1,
    vIni: 1,
    vFim: 3,
    titulo: "O título, o autor e o assunto do livro"
  },
  "ap1.4-8": {
    id: "ap1.4-8",
    referencia: "Ap 1.4-8",
    livro: "Apocalipse",
    capitulo: 1,
    vIni: 4,
    vFim: 8,
    titulo: "Dedicatória às sete igrejas da Ásia"
  },
  "ap1.9-20": {
    id: "ap1.9-20",
    referencia: "Ap 1.9-20",
    livro: "Apocalipse",
    capitulo: 1,
    vIni: 9,
    vFim: 20,
    titulo: "A visão de Jesus glorificado"
  },
  "ap2.1-7": {
    id: "ap2.1-7",
    referencia: "Ap 2.1-7",
    livro: "Apocalipse",
    capitulo: 2,
    vIni: 1,
    vFim: 7,
    titulo: "Carta à igreja em Éfeso"
  },
  "ap2.8-11": {
    id: "ap2.8-11",
    referencia: "Ap 2.8-11",
    livro: "Apocalipse",
    capitulo: 2,
    vIni: 8,
    vFim: 11,
    titulo: "Carta à igreja em Esmirna"
  },
  "ap2.12-17": {
    id: "ap2.12-17",
    referencia: "Ap 2.12-17",
    livro: "Apocalipse",
    capitulo: 2,
    vIni: 12,
    vFim: 17,
    titulo: "Carta à igreja em Pérgamo"
  },
  "ap2.18-29": {
    id: "ap2.18-29",
    referencia: "Ap 2.18-29",
    livro: "Apocalipse",
    capitulo: 2,
    vIni: 18,
    vFim: 29,
    titulo: "Carta à igreja em Tiatira"
  },
  "ap3.1-5": {
    id: "ap3.1-5",
    referencia: "Ap 3.1-5",
    livro: "Apocalipse",
    capitulo: 3,
    vIni: 1,
    vFim: 5,
    titulo: "Carta à igreja em Sardes"
  },
  "ap3.7-13": {
    id: "ap3.7-13",
    referencia: "Ap 3.7-13",
    livro: "Apocalipse",
    capitulo: 3,
    vIni: 7,
    vFim: 13,
    titulo: "Carta à igreja em Filadélfia"
  },
  "ap3.14-22": {
    id: "ap3.14-22",
    referencia: "Ap 3.14-22",
    livro: "Apocalipse",
    capitulo: 3,
    vIni: 14,
    vFim: 22,
    titulo: "Carta à igreja em Laodiceia"
  },
  "ap4.1-11": {
    id: "ap4.1-11",
    referencia: "Ap 4.1-11",
    livro: "Apocalipse",
    capitulo: 4,
    vIni: 1,
    vFim: 11,
    titulo: "A visão do trono de Deus"
  },
  "ap5.1-14": {
    id: "ap5.1-14",
    referencia: "Ap 5.1-14",
    livro: "Apocalipse",
    capitulo: 5,
    vIni: 1,
    vFim: 14,
    titulo: "A visão do livro selado com sete selos e a do Cordeiro"
  },
  "ap6.1-2": {
    id: "ap6.1-2",
    referencia: "Ap 6.1-2",
    livro: "Apocalipse",
    capitulo: 6,
    vIni: 1,
    vFim: 2,
    titulo: "O Cordeiro abre os selos. O primeiro selo"
  },
  "ap6.3-4": {
    id: "ap6.3-4",
    referencia: "Ap 6.3-4",
    livro: "Apocalipse",
    capitulo: 6,
    vIni: 3,
    vFim: 4,
    titulo: "O segundo selo"
  },
  "ap6.5-6": {
    id: "ap6.5-6",
    referencia: "Ap 6.5-6",
    livro: "Apocalipse",
    capitulo: 6,
    vIni: 5,
    vFim: 6,
    titulo: "O terceiro selo"
  },
  "ap6.7-8": {
    id: "ap6.7-8",
    referencia: "Ap 6.7-8",
    livro: "Apocalipse",
    capitulo: 6,
    vIni: 7,
    vFim: 8,
    titulo: "O quarto selo"
  },
  "ap6.9-11": {
    id: "ap6.9-11",
    referencia: "Ap 6.9-11",
    livro: "Apocalipse",
    capitulo: 6,
    vIni: 9,
    vFim: 11,
    titulo: "O quinto selo"
  },
  "ap6.12-17": {
    id: "ap6.12-17",
    referencia: "Ap 6.12-17",
    livro: "Apocalipse",
    capitulo: 6,
    vIni: 12,
    vFim: 17,
    titulo: "O sexto selo"
  },
  "ap7.1-8": {
    id: "ap7.1-8",
    referencia: "Ap 7.1-8",
    livro: "Apocalipse",
    capitulo: 7,
    vIni: 1,
    vFim: 8,
    titulo: "Os cento e quarenta e quatro mil selados de Israel"
  },
  "ap7.9-17": {
    id: "ap7.9-17",
    referencia: "Ap 7.9-17",
    livro: "Apocalipse",
    capitulo: 7,
    vIni: 9,
    vFim: 17,
    titulo: "A visão dos glorificados"
  },
  "ap8.1-6": {
    id: "ap8.1-6",
    referencia: "Ap 8.1-6",
    livro: "Apocalipse",
    capitulo: 8,
    vIni: 1,
    vFim: 6,
    titulo: "O sétimo selo. Os sete anjos com as suas trombetas"
  },
  "ap8.7": {
    id: "ap8.7",
    referencia: "Ap 8.7",
    livro: "Apocalipse",
    capitulo: 8,
    vIni: 7,
    vFim: 7,
    titulo: "A primeira trombeta"
  },
  "ap8.8-9": {
    id: "ap8.8-9",
    referencia: "Ap 8.8-9",
    livro: "Apocalipse",
    capitulo: 8,
    vIni: 8,
    vFim: 9,
    titulo: "A segunda trombeta"
  },
  "ap8.10-11": {
    id: "ap8.10-11",
    referencia: "Ap 8.10-11",
    livro: "Apocalipse",
    capitulo: 8,
    vIni: 10,
    vFim: 11,
    titulo: "A terceira trombeta"
  },
  "ap8.12-13": {
    id: "ap8.12-13",
    referencia: "Ap 8.12-13",
    livro: "Apocalipse",
    capitulo: 8,
    vIni: 12,
    vFim: 13,
    titulo: "A quarta trombeta"
  },
  "ap9.1-12": {
    id: "ap9.1-12",
    referencia: "Ap 9.1-12",
    livro: "Apocalipse",
    capitulo: 9,
    vIni: 1,
    vFim: 12,
    titulo: "A quinta trombeta"
  },
  "ap9.13-21": {
    id: "ap9.13-21",
    referencia: "Ap 9.13-21",
    livro: "Apocalipse",
    capitulo: 9,
    vIni: 13,
    vFim: 21,
    titulo: "A sexta trombeta"
  },
  "ap10.1-11": {
    id: "ap10.1-11",
    referencia: "Ap 10.1-11",
    livro: "Apocalipse",
    capitulo: 10,
    vIni: 1,
    vFim: 11,
    titulo: "Os anjos e os sete trovões. João e o livrinho"
  },
  "ap11.1-2": {
    id: "ap11.1-2",
    referencia: "Ap 11.1-2",
    livro: "Apocalipse",
    capitulo: 11,
    vIni: 1,
    vFim: 2,
    titulo: "Ordens para medir o santuário de Deus"
  },
  "ap11.3-14": {
    id: "ap11.3-14",
    referencia: "Ap 11.3-14",
    livro: "Apocalipse",
    capitulo: 11,
    vIni: 3,
    vFim: 14,
    titulo: "As duas testemunhas mártires"
  },
  "ap11.15-19": {
    id: "ap11.15-19",
    referencia: "Ap 11.15-19",
    livro: "Apocalipse",
    capitulo: 11,
    vIni: 15,
    vFim: 19,
    titulo: "A sétima trombeta"
  },
  "ap12.1-6": {
    id: "ap12.1-6",
    referencia: "Ap 12.1-6",
    livro: "Apocalipse",
    capitulo: 12,
    vIni: 1,
    vFim: 6,
    titulo: "A mulher e o dragão"
  },
  "ap12.7-12": {
    id: "ap12.7-12",
    referencia: "Ap 12.7-12",
    livro: "Apocalipse",
    capitulo: 12,
    vIni: 7,
    vFim: 12,
    titulo: "Anjos pelejam no céu contra o dragão. A vitória de Cristo e do seu povo"
  },
  "ap12.13-17": {
    id: "ap12.13-17",
    referencia: "Ap 12.13-17",
    livro: "Apocalipse",
    capitulo: 12,
    vIni: 13,
    vFim: 17,
    titulo: "O dragão persegue a mulher"
  },
  "ap13.1-10": {
    id: "ap13.1-10",
    referencia: "Ap 13.1-10",
    livro: "Apocalipse",
    capitulo: 13,
    vIni: 1,
    vFim: 10,
    titulo: "A besta que emerge do mar"
  },
  "ap13.11-18": {
    id: "ap13.11-18",
    referencia: "Ap 13.11-18",
    livro: "Apocalipse",
    capitulo: 13,
    vIni: 11,
    vFim: 18,
    titulo: "A besta que emerge da terra"
  },
  "ap14.1-5": {
    id: "ap14.1-5",
    referencia: "Ap 14.1-5",
    livro: "Apocalipse",
    capitulo: 14,
    vIni: 1,
    vFim: 5,
    titulo: "O Cordeiro e os seus remidos no monte Sião"
  },
  "ap14.6-7": {
    id: "ap14.6-7",
    referencia: "Ap 14.6-7",
    livro: "Apocalipse",
    capitulo: 14,
    vIni: 6,
    vFim: 7,
    titulo: "A primeira voz"
  },
  "ap14.8": {
    id: "ap14.8",
    referencia: "Ap 14.8",
    livro: "Apocalipse",
    capitulo: 14,
    vIni: 8,
    vFim: 8,
    titulo: "A segunda voz"
  },
  "ap14.9-12": {
    id: "ap14.9-12",
    referencia: "Ap 14.9-12",
    livro: "Apocalipse",
    capitulo: 14,
    vIni: 9,
    vFim: 12,
    titulo: "A terceira voz"
  },
  "ap14.13": {
    id: "ap14.13",
    referencia: "Ap 14.13",
    livro: "Apocalipse",
    capitulo: 14,
    vIni: 13,
    vFim: 13,
    titulo: "A quarta voz"
  },
  "ap14.14-16": {
    id: "ap14.14-16",
    referencia: "Ap 14.14-16",
    livro: "Apocalipse",
    capitulo: 14,
    vIni: 14,
    vFim: 16,
    titulo: "A ceifa"
  },
  "ap14.17-20": {
    id: "ap14.17-20",
    referencia: "Ap 14.17-20",
    livro: "Apocalipse",
    capitulo: 14,
    vIni: 17,
    vFim: 20,
    titulo: "A vindima"
  },
  "ap15.1": {
    id: "ap15.1",
    referencia: "Ap 15.1",
    livro: "Apocalipse",
    capitulo: 15,
    vIni: 1,
    vFim: 1,
    titulo: "Os sete flagelos"
  },
  "ap15.2-4": {
    id: "ap15.2-4",
    referencia: "Ap 15.2-4",
    livro: "Apocalipse",
    capitulo: 15,
    vIni: 2,
    vFim: 4,
    titulo: "Os remidos entoam o cântico de Moisés e o cântico do Cordeiro"
  },
  "ap15.5-8": {
    id: "ap15.5-8",
    referencia: "Ap 15.5-8",
    livro: "Apocalipse",
    capitulo: 15,
    vIni: 5,
    vFim: 8,
    titulo: "Deus envia os flagelos"
  },
  "ap16.1-2": {
    id: "ap16.1-2",
    referencia: "Ap 16.1-2",
    livro: "Apocalipse",
    capitulo: 16,
    vIni: 1,
    vFim: 2,
    titulo: "O primeiro flagelo"
  },
  "ap16.3-7": {
    id: "ap16.3-7",
    referencia: "Ap 16.3-7",
    livro: "Apocalipse",
    capitulo: 16,
    vIni: 3,
    vFim: 7,
    titulo: "O terceiro flagelo"
  },
  "ap16.8-9": {
    id: "ap16.8-9",
    referencia: "Ap 16.8-9",
    livro: "Apocalipse",
    capitulo: 16,
    vIni: 8,
    vFim: 9,
    titulo: "O quarto flagelo"
  },
  "ap16.10-11": {
    id: "ap16.10-11",
    referencia: "Ap 16.10-11",
    livro: "Apocalipse",
    capitulo: 16,
    vIni: 10,
    vFim: 11,
    titulo: "O quinto flagelo"
  },
  "ap16.12-16": {
    id: "ap16.12-16",
    referencia: "Ap 16.12-16",
    livro: "Apocalipse",
    capitulo: 16,
    vIni: 12,
    vFim: 16,
    titulo: "O sexto flagelo"
  },
  "ap16.17-21": {
    id: "ap16.17-21",
    referencia: "Ap 16.17-21",
    livro: "Apocalipse",
    capitulo: 16,
    vIni: 17,
    vFim: 21,
    titulo: "O sétimo flagelo"
  },
  "ap17.1-18": {
    id: "ap17.1-18",
    referencia: "Ap 17.1-18",
    livro: "Apocalipse",
    capitulo: 17,
    vIni: 1,
    vFim: 18,
    titulo: "A descrição da grande meretriz"
  },
  "ap18.1-8": {
    id: "ap18.1-8",
    referencia: "Ap 18.1-8",
    livro: "Apocalipse",
    capitulo: 18,
    vIni: 1,
    vFim: 8,
    titulo: "O anúncio da queda de Babilônia"
  },
  "ap18.9-20": {
    id: "ap18.9-20",
    referencia: "Ap 18.9-20",
    livro: "Apocalipse",
    capitulo: 18,
    vIni: 9,
    vFim: 20,
    titulo: "Os lamentos dos admiradores de Babilônia"
  },
  "ap18.21-24": {
    id: "ap18.21-24",
    referencia: "Ap 18.21-24",
    livro: "Apocalipse",
    capitulo: 18,
    vIni: 21,
    vFim: 24,
    titulo: "A ruína de Babilônia é completa e definitiva"
  },
  "ap19.1-10": {
    id: "ap19.1-10",
    referencia: "Ap 19.1-10",
    livro: "Apocalipse",
    capitulo: 19,
    vIni: 1,
    vFim: 10,
    titulo: "O júbilo no céu"
  },
  "ap19.11-21": {
    id: "ap19.11-21",
    referencia: "Ap 19.11-21",
    livro: "Apocalipse",
    capitulo: 19,
    vIni: 11,
    vFim: 21,
    titulo: "Cristo, o vencedor da besta e do falso profeta"
  },
  "ap20.1-6": {
    id: "ap20.1-6",
    referencia: "Ap 20.1-6",
    livro: "Apocalipse",
    capitulo: 20,
    vIni: 1,
    vFim: 6,
    titulo: "A prisão de Satanás por mil anos. A primeira ressurreição"
  },
  "ap20.7-10": {
    id: "ap20.7-10",
    referencia: "Ap 20.7-10",
    livro: "Apocalipse",
    capitulo: 20,
    vIni: 7,
    vFim: 10,
    titulo: "Satanás é solto e derrotado"
  },
  "ap20.11-15": {
    id: "ap20.11-15",
    referencia: "Ap 20.11-15",
    livro: "Apocalipse",
    capitulo: 20,
    vIni: 11,
    vFim: 15,
    titulo: "O juízo de Deus"
  },
  "ap21.1-8": {
    id: "ap21.1-8",
    referencia: "Ap 21.1-8",
    livro: "Apocalipse",
    capitulo: 21,
    vIni: 1,
    vFim: 8,
    titulo: "O novo céu e a nova terra"
  },
  "ap21.9-27": {
    id: "ap21.9-27",
    referencia: "Ap 21.9-27",
    livro: "Apocalipse",
    capitulo: 21,
    vIni: 9,
    vFim: 27,
    titulo: "A nova Jerusalém"
  },
  "ap22.6-7": {
    id: "ap22.6-7",
    referencia: "Ap 22.6-7",
    livro: "Apocalipse",
    capitulo: 22,
    vIni: 6,
    vFim: 7,
    titulo: "A certeza do cumprimento da profecia deste livro"
  },
  "ap22.8-17": {
    id: "ap22.8-17",
    referencia: "Ap 22.8-17",
    livro: "Apocalipse",
    capitulo: 22,
    vIni: 8,
    vFim: 17,
    titulo: "As admoestações e as promessas finais"
  },
  "ap22.18-20": {
    id: "ap22.18-20",
    referencia: "Ap 22.18-20",
    livro: "Apocalipse",
    capitulo: 22,
    vIni: 18,
    vFim: 20,
    titulo: "A conclusão do livro"
  },
  "ap22.21": {
    id: "ap22.21",
    referencia: "Ap 22.21",
    livro: "Apocalipse",
    capitulo: 22,
    vIni: 21,
    vFim: 21,
    titulo: "A bênção"
  },
};

// ============================================
// FUNÇÕES AUXILIARES
// ============================================

function buscarTituloPorId(id) {
  return titulosBiblicos[id.toLowerCase()] || null;
}

function buscarTitulosPorLivroCapitulo(livro, capitulo) {
  return Object.values(titulosBiblicos).filter(
    t => t.livro === livro && t.capitulo === capitulo
  );
}

// Encontra o(s) título(s) de seção que cobrem um versículo específico
// dentro de um livro/capítulo (ex: buscarTituloPorVersiculo("Juízes", 17, 6))
function buscarTituloPorVersiculo(livro, capitulo, versiculo) {
  return Object.values(titulosBiblicos).find(
    t => t.livro === livro && t.capitulo === capitulo &&
         versiculo >= t.vIni && versiculo <= t.vFim
  ) || null;
}

// ============================================
// EXPORTAÇÃO
// ============================================

if (typeof window !== "undefined") {
  window.titulosBiblicos = titulosBiblicos;
  window.buscarTituloPorId = buscarTituloPorId;
  window.buscarTitulosPorLivroCapitulo = buscarTitulosPorLivroCapitulo;
  window.buscarTituloPorVersiculo = buscarTituloPorVersiculo;
}

if (typeof module !== "undefined") {
  module.exports = {
    titulosBiblicos,
    buscarTituloPorId,
    buscarTitulosPorLivroCapitulo,
    buscarTituloPorVersiculo
  };
}

console.log("📑 titulos-biblicos.js carregado!");
console.log("📊 Total de títulos: " + Object.keys(titulosBiblicos).length);
