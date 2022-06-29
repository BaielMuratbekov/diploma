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
    description:
      "Founded in 1899 by a group of Swiss, Spanish, German and English footballers led by Joan Gamper, the club has become a symbol of Catalan culture and Catalanism, hence the motto Més que un club (More than a club). Unlike many other football clubs, the supporters own and operate Barcelona. It is the fourth-most valuable sports team in the world, worth $4.76 billion, and the world's fourth richest football club in terms of revenue, with an annual turnover of €582.1 million.[2][3] The official Barcelona anthem is the Cant del Barça, written by Jaume Picas and Josep Maria Espinàs.[4] Barcelona traditionally play in dark shades of blue and red stripes, hence nicknamed Blaugrana.",
  },
  {
    image: "/assets/ManchesterUnited.jpg",
    title: "ManchesterUnited",
    price: 2500,
    categoryId: "premierliga",
    productId: "ManchesterUnited",
    description:
      "Manchester United Football Club, commonly referred to as Man United (also simply known as United), is a professional football club based in the Old Trafford area of Manchester, England. The club competes in the Premier League, the top division in the English football league system. Nicknamed the Red Devils, it was founded as Newton Heath LYR Football Club in 1878, but changed its name to Manchester United in 1902. The club moved from Newton Heath to its current stadium, Old Trafford, in 1910.",
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
    title: "Atalanta",
    price: 2300,
    productId: "atalanta",
    categoryId: "seriaA",
    description:
      "Atalanta was founded in 1907 by Liceo Classico Paolo Sarpi students and is nicknamed La Dea, the Nerazzurri and the Orobici. The club plays in blue-and-black vertically striped shirts, black shorts and black socks. The club plays its home matches at the 21,747-seater Gewiss Stadium. In Italy, Atalanta is sometimes called Regina delle provinciali (queen of the provincial clubs) to mark the fact that the club is the most consistent among Italian clubs not based in a regional capital, having played 60 seasons in Serie A, 28 seasons in Serie B, and only one in Serie C. Atalanta has a long-standing rivalry with nearby club Brescia.[4][5]",
  },
  {
    image: "/assets/chelsea.jpg",
    title: "Chelsea",
    price: 1900,
    productId: "chelsea",
    categoryId: "premierliga",
    description:
      "Chelsea Football Club is an English professional football club based in Fulham, in the western parts of London. Founded in 1905, they play their home games at Stamford Bridge.[4] The club competes in the Premier League, the top division of English football. They won their first major honour, the League championship, in 1955. The club won the FA Cup for the first time in 1970, their first European honour, the Cup Winners' Cup, in 1971, and becoming only the 3rd English club to win the Club World Cup in 2022.",
  },
  {
    image: "/assets/bavaria.jpg",
    title: "Bayern",
    price: 1900,
    productId: "bayern",
    categoryId: "bundesliga",
    description:
      "Fußball-Club Bayern München e. V. (FCB, pronounced [ˈfuːsbalˌklʊp ˈbaɪɐn ˈmʏnçn̩] (listen)), also known as FC Bayern (pronounced [ˌɛft͡seː ˈbaɪɐn] (listen)) or Bayern Munich, is a German professional sports club based in Munich, Bavaria. It is best known for its professional football team, which plays in the Bundesliga, the top tier of the German football league system. Bayern is the most successful club in German football history, having won a record 32 national titles, including 10 consecutively since 2013, and 20 national cups, along with numerous European honours.",
  },
  {
    image: "/assets/bvb-20-21-home-kit-2.jpg",
    title: "Borussia",
    price: 1900,
    productId: "borussia",
    categoryId: "bundesliga",
    description:
      "Ballspielverein Borussia 09 e. V. Dortmund, commonly known as Borussia Dortmund (German pronunciation: [boˈʁʊsi̯aː ˈdɔɐ̯tmʊnt] (listen)),[3] BVB (pronounced [beːfaʊ̯ˈbeː] (listen)), or simply Dortmund (pronounced [ˈdɔʁtmʊnt] (listen)), is a German professional sports club based in Dortmund, North Rhine-Westphalia. It is best known for its men's professional football team, which plays in the Bundesliga, the top tier of the German football league system. The club have won eight league championships, five DFB-Pokals, one UEFA Champions League, one Intercontinental Cup, and one UEFA Cup Winners' Cup.",
  },
  {
    image: "/assets/france.webp",
    title: "France",
    price: 1900,
    productId: "france",
    categoryId: "restofworld",
    description:
      "The France national football team (French: Équipe de France de football) represents France in men's international football and is controlled by the French Football Federation (Fédération française de football), also known as FFF. The team's colours are blue, white, and red, and the coq gaulois its symbol. France are colloquially known as Les Bleus (The Blues). They are the reigning world champions, having won the most recent World Cup final in 2018.",
  },
  {
    image: "/assets/psg.jpg",
    title: "Psg",
    price: 1900,
    productId: "psg",
    categoryId: "liga1",
    description:
      "Paris Saint-Germain Football Club (French pronunciation: ​[paʁi sɛ̃ ʒɛʁmɛ̃]), commonly referred to as Paris Saint-Germain, Paris, Paris SG or simply PSG is a professional football club based in Paris, France. They compete in Ligue 1, the top division of French football. As France's most successful club, they have won over 40 official honours, including ten league titles and one major European trophy. Their home ground is the Parc des Princes.",
  },
  {
    image: "/assets/as-monaco.jpg",
    title: "Monaco",
    price: 1900,
    productId: "monaco",
    categoryId: "liga1",
    description:
      "Association Sportive de Monaco Football Club SA, commonly referred to as AS Monaco (French pronunciation: ​[ɑ.ɛs mɔnako]) or Monaco, is a professional football club based in Monaco that competes in Ligue 1, the top tier of French football. Founded in 1918, the team plays its home matches at the Stade Louis II in Fontvieille.[2]",
  },
  {
    image: "/assets/brazil.jpg",
    title: "Brazil",
    price: 1900,
    productId: "brazil",
    categoryId: "restofworld",
    description:
      "The Brazil national football team (Portuguese: Seleção Brasileira de Futebol), nicknamed Seleção Canarinho, represents Brazil in men's international football and is administered by the Brazilian Football Confederation (CBF), the governing body for football in Brazil. They have been a member of FIFA since 1923 and a member of CONMEBOL since 1916.",
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
