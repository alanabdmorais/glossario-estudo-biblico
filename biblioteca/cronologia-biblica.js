// Buscar evento
const evento = cronologiaBiblica.getEvento("ex12");
console.log(evento.dataDC);   // 2668
console.log(evento.dataAC);   // "1060 a.C."

// Buscar personagem
const davi = cronologiaBiblica.getPersonagem("davi");
console.log(davi.inicioDC);   // 3104
console.log(davi.inicioAC);   // "624 a.C."

// Formatar data
console.log(cronologiaBiblica.formatarData(2668)); // "1060 a.C."
console.log(cronologiaBiblica.formatarData(3728)); // "0 a.C."
console.log(cronologiaBiblica.formatarData(3761)); // "33 d.C."