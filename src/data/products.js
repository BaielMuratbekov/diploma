const products = [
  {
    image: "/assets/realforma1.jpg",
    title: "Real Madrid",
    price: 2500,
    productId: "Real-Madrid",
    categoryId: "laliga",
    description:
      "Founded in 1902 as Madrid Football Club, the club has traditionally worn a white home kit since its inception. The honorific title real is Spanish for royal and was bestowed to the club by King Alfonso XIII in 1920 together with the royal crown in the emblem. Real Madrid have played their home matches in the 81,044-capacity Santiago Bernabéu Stadium in downtown Madrid since 1947. Unlike most European sporting entities, Real Madrid's members (socios) have owned and operated the club throughout its history.",
  },
  {
    image: "/assets/barca.webp",
    title: "Barcelona",
    price: 2500,
    productId: "barcelona",
    categoryId: "laliga",
    description: "lorem",
  },
  {
    image: "/assets/ManchesterUnited.jpg",
    title: "ManchesterUnited",
    price: 2500,
    categoryId: "premierliga",
    productId: "ManchesterUnited",
    description: "lorem",
  },
  {
    image: "/assets/juventus1.jpg",
    title: "Juventus",
    price: 2200,
    productId: "Juventus",
    categoryId: "seriaA",
    description:
      "Under the management of Giovanni Trapattoni, the club won 13 trophies in the ten years before 1986, including six league titles and five international titles, and became the first to win all three seasonal competitions organised by the Union of European Football Associations: the 1976–77 UEFA Cup (first Southern European side to do so), the 1983–84 Cup Winners' Cup and the 1984–85 European Champions' Cup.[15] With successive triumphs in the 1984 European Super Cup and 1985 Intercontinental Cup, it became the first and thus far only in the world to complete a clean sweep of all confederation trophies;[16] an achievement that they revalidated with the title won in the 1999 UEFA Intertoto Cup after another successful era led by Marcello Lippi,[17] becoming in addition, until 2022, the only professional Italian club to have won every ongoing honour available to the first team and organised by a national or international football association",
  },
  {
    image: "/assets/AT21A01_1.jpg",
    title: "Atlanta",
    price: 2300,
    productId: "atlanta",
    categoryId: "seriaA",
    description: "lorem",
  },
  {
    image: "/assets/chelsea.jpg",
    title: "Chelsea",
    price: 1900,
    productId: "chelsea",
    categoryId: "premierliga",
    description: "lorem",
  },
  {
    image: "/assets/bavaria.jpg",
    title: "Bavaria",
    price: 1900,
    productId: "bavaria",
    categoryId: "bundesliga",
    description: "lorem",
  },
  {
    image: "/assets/bvb-20-21-home-kit-2.jpg",
    title: "Borussia",
    price: 1900,
    productId: "borussia",
    categoryId: "bundesliga",
    description: "lorem",
  },
  {
    image: "/assets/chelsea.jpg",
    title: "Chelsea",
    price: 1900,
    productId: "chelsea",
    categoryId: "premierliga",
    description: "lorem",
  },
  {
    image: "/assets/france.webp",
    title: "France",
    price: 1900,
    productId: "france",
    categoryId: "restofworld",
    description: "lorem",
  },
  {
    image: "/assets/psg.jpg",
    title: "Psg",
    price: 1900,
    productId: "psg",
    categoryId: "liga1",
    description: "lorem",
  },
  {
    image: "/assets/as-monaco.jpg",
    title: "Monaco",
    price: 1900,
    productId: "monaco",
    categoryId: "liga1",
    description: "lorem",
  },
  {
    image: "/assets/brazil.jpg",
    title: "Brazil",
    price: 1900,
    productId: "brazil",
    categoryId: "restofworld",
    description: "lorem",
  },
];
export function getProducts(categoryId) {
  if (categoryId) {
    return products.filter((product) => product.categoryId === categoryId);
  }

  return products;
}
export function getProduct(productId) {
  return products[
    products.findIndex((product) => product.productId === productId)
  ];
}
