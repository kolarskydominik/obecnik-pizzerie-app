const ing = {
  tomato: "tomato",
  mozzarela: "mozzarela",
  bazalka: "bazalka",
  zampiony: "žampiony",
  salamDolce: " salám dolce",
  sunka: "šunka",
  ananas: "ananas",
  olivy: "černé olivy",
  paprika: "paprika",
  kukurice: "kukuřice",
  pikantniSalam: 'pikantní salám',
  parmezan: 'parmezán',
  feferonky: 'feferonky',
  cibule: 'cibule',
  vejce: 'vejce',
  tunak: 'tuňák',
  italskaKlobasa: 'italská klobása',
  cervenaCibule: 'červená cibule',
  parmskaSunka: 'parmská šunka',
  rukola: 'rukola',
  slanina: 'slanina',
  olivovyOlej: 'olivový olej',
  cesnek: 'česnek',
  oregano: 'oregano',
  smetana: 'smetana',
  panceta: 'panceta',
  listovySpenat: 'listový špenát',
  cherryRajcata: 'cherry rajčata',
  gorgonzola: 'gorgonzela',
  mascarpone: 'mascarpone',
  uzenyLosos: 'uzený losos',
  platkyCitronu: 'plátky citronu'
};

export const dataPizzaTomato = [
  {
    name: "1. MARGARITA",
    allergens: "(1, 7)",
    ingredients: [ing.tomato, ing.mozzarela, ing.bazalka],
    price: "135,-",
  },
  {
    name: "2. FUNGHI",
    allergens: "(1, 7, 4)",
    ingredients: [ing.tomato, ing.mozzarela, ing.zampiony],
    price: "169,-",
  },
  {
    name: "3. SALAMI",
    allergens: "(1, 2, 3, 4, 5)",
    ingredients: [ing.tomato, ing.mozzarela, ing.salamDolce],
    price: "169,-",
  },
  {
    name: "4. AL COTTO",
    allergens: "(1, 2, 3, 4, 5)",
    ingredients: [ing.tomato, ing.mozzarela, ing.sunka],
    price: "169,-",
  },
  {
    name: "5. HAWAI",
    allergens: "(1, 2, 3, 4, 5)",
    ingredients: [ing.tomato, ing.mozzarela, ing.zampiony],
    price: "169,-",
  },
  {
    name: "6. CAPRICIOSA",
    allergens: "(1, 2, 3, 4, 5)",
    ingredients: [
      ing.tomato,
      ing.mozzarela,
      ing.sunka,
      ing.zampiony,
      ing.olivy,
    ],
    price: "169,-",
  },
  {
    name: "7. VEGETARIANA",
    allergens: "(1, 2, 3, 4, 5)",
    ingredients: [
      ing.tomato,
      ing.mozzarela,
      ing.zampiony,
      ing.paprika,
      ing.kukurice,
    ],
    price: "169,-",
  },
  {
    name: "8. PALERMO",
    allergens: "(1, 2, 3, 4, 5)",
    ingredients: [ing.tomato, ing.mozzarela, ing.pikantniSalam, ing.paprika, ing.parmezan, ing.feferonky],
    price: "169,-",
  },
  {
    name: "9. MEXICANA",
    allergens: "(1, 2, 3, 4, 5)",
    ingredients: [ing.tomato, ing.mozzarela, ing.pikantniSalam, ing.kukurice, ing.cibule, ing.vejce],
    price: "169,-",
  },
  {
    name: "10. AL TONNO",
    allergens: "(1, 2, 3, 4, 5)",
    ingredients: [ing.tomato, ing.mozzarela, ing.tunak, ing.cibule],
    price: "169,-",
  },
  {
    name: "11. VALPOLICELLA",
    allergens: "(1, 2, 3, 4, 5)",
    ingredients: [ing.tomato, ing.mozzarela, ing.italskaKlobasa, ing.cervenaCibule, ing.parmezan],
    price: "169,-",
  },
  {
    name: "12. PROSCIUTTO CRUDO",
    allergens: "(1, 2, 3, 4, 5)",
    ingredients: [ing.tomato, ing.mozzarela, ing.parmskaSunka, ing.rukola, ing.parmezan],
    price: "169,-",
  },
  {
    name: "13. QUATTRO SALAMI",
    allergens: "(1, 2, 3, 4, 5)",
    ingredients: [ing.tomato, ing.mozzarela, ing.pikantniSalam, ing.salamDolce, ing.slanina, ing.italskaKlobasa],
    price: "169,-",
  },
];

export const dataPizzaCream = [
    {
      name: "14. CON SPINACI",
      allergens: "(1, 7)",
      ingredients: [ing.smetana, ing.mozzarela, ing.panceta, ing.listovySpenat, ing.cesnek],
      price: "135,-",
    },
    {
      name: "15. AL COTTO BIANKA",
      allergens: "(1, 7, 4)",
      ingredients: [ing.smetana, ing.mozzarela, ing.sunka, ing.cherryRajcata, ing.rukola],
      price: "169,-",
    },
    {
      name: "16. ALBORI",
      allergens: "(1, 7, 4)",
      ingredients: [ing.smetana, ing.mozzarela, ing.panceta, ing.gorgonzola, ing.cervenaCibule],
      price: "169,-",
    },
    {
      name: "17. QUATTRO FORMAGGI",
      allergens: "(1, 7, 4)",
      ingredients: [ing.smetana, ing.mozzarela, ing.gorgonzola, ing.mascarpone, ing.parmezan],
      price: "169,-",
    },
    {
      name: "18. FANTASTICCA",
      allergens: "(1, 7, 4)",
      ingredients: [ing.smetana, ing.mozzarela, ing.uzenyLosos, ing.listovySpenat, ing.platkyCitronu, ing.cesnek],
      price: "169,-",
    }
]

export const dataPizzaBread = [
    {
        name: "19. FOCCACIA",
        allergens: "(1, 7, 4)",
        ingredients: [ing.olivovyOlej, ing.cesnek, ing.oregano],
        price: "169,-",
      }
]