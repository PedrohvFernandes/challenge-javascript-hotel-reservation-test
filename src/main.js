const HOTEIS = require("./dados/hoteis.json");
const naSemana = ["mon", "tues", "wed", "thur", "fri"];
const noFinalSemana = ["sat", "sun"];

function getCheapestHotel(input) {
  //clientes: separador -> :   não pego o restante depois do separador -> [0]
  const clientes = input.split(":")[0];
  // Armazenando a soma dos preços de todos os hoteis
  let custoHoteis = [0, 0, 0];

  let datas;
  for (i = 0; i <= 2; i++) {
    // Pegando os meses que vem do test
    datas = input.split(":")[1].split(",")[i].split("(")[1].split(")")[0];
    console.log(datas);
    //Primeiro descobrir quem é o cliente
    if (clientes === "Regular") {
      // Depois descobrir se é final de semana ou não
      if (naSemana.includes(datas)) {
        custoHoteis[0] += HOTEIS[0].naSemana.regular;
        custoHoteis[1] += HOTEIS[1].naSemana.regular;
        custoHoteis[2] += HOTEIS[2].naSemana.regular;
      } else if (noFinalSemana.includes(datas)) {
        custoHoteis[0] += HOTEIS[0].noFinalSemana.regular;
        custoHoteis[1] += HOTEIS[1].noFinalSemana.regular;
        custoHoteis[2] += HOTEIS[2].noFinalSemana.regular;
      }
    } else {
      if (naSemana.includes(datas)) {
        custoHoteis[0] += HOTEIS[0].naSemana.reward;
        custoHoteis[1] += HOTEIS[1].naSemana.reward;
        custoHoteis[2] += HOTEIS[2].naSemana.reward;
      } else if (noFinalSemana.includes(datas)) {
        custoHoteis[0] += HOTEIS[0].noFinalSemana.reward;
        custoHoteis[1] += HOTEIS[1].noFinalSemana.reward;
        custoHoteis[2] += HOTEIS[2].noFinalSemana.reward;
      }
    }
  }
  console.log(custoHoteis);
  console.log(custoHoteis[0]);
  console.log(custoHoteis[1]);
  console.log(custoHoteis[2]);
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

  // Quando ele testa essa parte aqui o custo do hotel na posição 2 é igual ao do hotel na posição 0
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
