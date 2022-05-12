const hoteis = [
  {
    hotel: "Lakewood",
    classificacao: 3,
    precos: {
      diasSemana: {
        regular: 110,
        rewards: 80,
      },
      finalSemana: {
        regular: 90,
        rewards: 80,
      },
    },
  },
  {
    hotel: "Bridgewood",
    classificacao: 4,
    precos: {
      diasSemana: {
        regular: 160,
        rewards: 110,
      },
      finalSemana: {
        rewards: 50,
        regular: 60,
      },
    },
  },
  {
    hotel: "Ridgewood",
    classificacao: 5,
    precos: {
      diasSemana: {
        regular: 220,
        rewards: 100,
      },
      finalSemana: {
        regular: 150,
        rewards: 40,
      },
    },
  },
];
exports.hoteis = hoteis;