// Os hoteis:

const HOTEIS = [
  {
    name: "Lakewood",
    class: 3,
    naSemana: {
      regular: 110,
      reward: 80,
    },
    noFinalSemana: {
      regular: 90,
      reward: 80,
    },
  },
  {
    name: "Bridgewood",
    class: 4,
    naSemana: {
      regular: 160,
      reward: 110,
    },
    noFinalSemana: {
      regular: 60,
      reward: 50,
    },
  },
  {
    name: "Ridgewood",
    class: 5,
    naSemana: {
      regular: 220,
      Reward: 100,
    },
    noFinalSemana: {
      regular: 150,
      reward: 40,
    },
  },
];

function getCheapestHotel(input) {
  //clientes: separador -> :   não pego o restante depois do separador -> [0]
  const clientes = input.split(":")[0];
  // Armazenando a soma dos preços de todos os hoteis
  let custoHoteis = [0, 0, 0];

  let datas;
  for (i = 0; i < 3; i++) {
    // Pegando os meses que vem do test
    // const datas = input.split(":")[1].split(",")[i].split("(")[1].split(")")[0];
    // const datas1 = input.split(":")[1].split(",")[0].split("(")[1].split(")")[0];
    // const datas2 = input.split(":")[1].split(",")[1].split("(")[1].split(")")[0];
    // const datas3 = input.split(":")[1].split(",")[2].split("(")[1].split(")")[0];
    datas = input.split(":")[1].split(",")[i].split("(")[1].split(")")[0];
    console.log(datas);
    //Primeiro descobrir quem é o cliente
    if (clientes === "Regular") {
      // Depois descobrir se é final de semana ou não
      if (
        datas === "mon" ||
        datas === "tues" ||
        datas === "wed" ||
        datas === "thur" ||
        datas === "fri"
      ) {
        custoHoteis[0] += HOTEIS[0].naSemana.regular;
        custoHoteis[1] += HOTEIS[1].naSemana.regular;
        custoHoteis[2] += HOTEIS[2].naSemana.regular;
      } else if (datas === "sat" || datas === "sun") {
        custoHoteis[0] += HOTEIS[0].noFinalSemana.regular;
        custoHoteis[1] += HOTEIS[1].noFinalSemana.regular;
        custoHoteis[2] += HOTEIS[2].noFinalSemana.regular;
      }
    } else if (clientes === "Rewards") {
      if (
        datas === "mon" ||
        datas === "tues" ||
        datas === "wed" ||
        datas === "thur" ||
        datas === "fri"
      ) {
        custoHoteis[0] += HOTEIS[0].naSemana.reward;
        custoHoteis[1] += HOTEIS[1].naSemana.reward;
        custoHoteis[2] += HOTEIS[2].naSemana.reward;
      } else if (datas === "sat" || datas === "sun") {
        custoHoteis[0] += HOTEIS[0].noFinalSemana.reward;
        custoHoteis[1] += HOTEIS[1].noFinalSemana.reward;
        custoHoteis[2] += HOTEIS[2].noFinalSemana.reward;
      }
    }
  }

  // Comparo os preços e a classificação dos hoteis
  if (custoHoteis[0] < custoHoteis[1] && custoHoteis[0] < custoHoteis[2]) {
    return HOTEIS[0].name;
  } else if (
    HOTEIS[0].class > HOTEIS[1].class &&
    HOTEIS[0].class > HOTEIS[2].class
  ) {
    return HOTEIS[0].name;
  }

  if (custoHoteis[1] < custoHoteis[2] && custoHoteis[1] < custoHoteis[0]) {
    return HOTEIS[1].name;
  } else if (
    HOTEIS[1].class > HOTEIS[2].class &&
    HOTEIS[1].class > HOTEIS[0].class
  ) {
    return HOTEIS[1].name;
  }

  if (custoHoteis[2] < custoHoteis[1] && custoHoteis[2] < custoHoteis[0]) {
    return HOTEIS[2].name;
  } else if (
    HOTEIS[2].class > HOTEIS[1].class &&
    HOTEIS[2].class > HOTEIS[0].class
  ) {
    return HOTEIS[2].name;
  }
}

exports.getCheapestHotel = getCheapestHotel;
