const categories = [
  {
    categoryId: "premierliga",
    headerimage: "/assets/PremierLeague.png",
    title: "Premier Liga",
    image: "/assets/PremierLeague.webp",
    description:
      "The league takes place between August and May and involves the teams playing each other home and away across the season, a total of 380 matches. Three points are awarded for a win, one point for a draw and none for a defeat, with the team with the most points at the end of the season winning the Premier League title.",
  },
  {
    categoryId: "laliga",
    headerimage: "/assets/LaLiga.png",
    title: "La Liga",
    image: "/assets/LaLiga.webp",
    description:
      "La Liga (Campeonato Nacional de Liga de Primera División) is the name of the Spanish football league and has existed since 1929. The first division is called Primera División (which is commonly referred to La Liga) and the second is called Segunda División.",
  },
  {
    categoryId: "seriaA",
    title: "Seria A",
    headerimage: "/assets/serie-a.jpg",
    image: "/assets/SeriaA.png",
    description:
      "Serie A (Italian pronunciation: [ˈsɛːrje ˈa]), also called Serie A TIM due to sponsorship by TIM, is a professional league competition for football clubs located at the top of the Italian football league system and the winner is awarded the Scudetto and the Coppa Campioni d'Italia.",
  },
  {
    categoryId: "bundesliga",
    title: "Bundes Liga",
    headerimage: "/assets/bundes.png",
    image: "/assets/Bundesliga.webp",
    description:
      "Bundesliga ([ˌeːɐ̯stə-]), is a professional association football league in Germany. At the top of the German football league system, the Bundesliga is Germany's primary football competition. The Bundesliga comprises 18 teams and operates on a system of promotion and relegation with the 2. Bundesliga.",
  },
  {
    categoryId: "liga1",
    headerimage: "/assets/maxresdefault.jpg",
    title: "Liga 1",
    image: "/assets/Liga1.webp",
    description:
      "There are 18 clubs in Liga 1. During the course of a season each club plays the others twice (a double round-robin system), once at their home stadium and once at that of their opponents', for 34 games. Teams receive three points for a win and one point for a draw. No points are awarded for a loss.",
  },
  {
    categoryId: "restofworld",
    title: "Rest Of World",
    headerimage: "/assets/rew.jpg",
    image: "/assets/Row.webp",
    description:
      "Within sports and games played at the international competitive level, the Rest of the World refers to a team of players from many countries of origin that compete against a single individual or a team from a single group, such as a club or country.",
  },
];
export function getCategories() {
  return categories;
}
export function getCategory(categoryId) {
  return categories[
    categories.findIndex((category) => category.categoryId === categoryId)
  ];
}
