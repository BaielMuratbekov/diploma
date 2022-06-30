import premierligaHeader from '../assets/PremierLeague.png'
import premierliga from "../assets/PremierLeague.webp"
import laligaHeader from '../assets/LaLiga.png'
import laliga from "../assets/LaLiga.webp"
import seriaAHeader from '../assets/serie-a.jpg'
import seriaA from "../assets/SeriaA.png"
import bundesHeader from '../assets/bundes.png'
import bundes from "../assets/Bundesliga.webp"
import liga1Header from "../assets/maxresdefault.jpg"
import liga1 from "../assets/Liga1.webp"
import rastofworldheader from "../assets/rew.jpg"
import rastofworld from "../assets/Row.webp"
const categories = [
  {
    categoryId: "premierliga",
    headerimage: premierligaHeader,
    title: "Premier Liga",
    image: premierliga,
    description:
      "The league takes place between August and May and involves the teams playing each other home and away across the season, a total of 380 matches. Three points are awarded for a win, one point for a draw and none for a defeat, with the team with the most points at the end of the season winning the Premier League title.",
  },
  {
    categoryId: "laliga",
    headerimage: laligaHeader,
    title: "La Liga",
    image: laliga,
    description:
      "La Liga (Campeonato Nacional de Liga de Primera División) is the name of the Spanish football league and has existed since 1929. The first division is called Primera División (which is commonly referred to La Liga) and the second is called Segunda División.",
  },
  {
    categoryId: "seriaA",
    title: "Seria A",
    headerimage: seriaAHeader,
    image: seriaA,
    description:
      "Serie A (Italian pronunciation: [ˈsɛːrje ˈa]), also called Serie A TIM due to sponsorship by TIM, is a professional league competition for football clubs located at the top of the Italian football league system and the winner is awarded the Scudetto and the Coppa Campioni d'Italia.",
  },
  {
    categoryId: "bundesliga",
    title: "Bundes Liga",
    headerimage: bundesHeader,
    image: bundes,
    description:
      "Bundesliga ([ˌeːɐ̯stə-]), is a professional association football league in Germany. At the top of the German football league system, the Bundesliga is Germany's primary football competition. The Bundesliga comprises 18 teams and operates on a system of promotion and relegation with the 2. Bundesliga.",
  },
  {
    categoryId: "liga1",
    headerimage: liga1Header,
    title: "Liga 1",
    image: liga1,
    description:
      "There are 18 clubs in Liga 1. During the course of a season each club plays the others twice (a double round-robin system), once at their home stadium and once at that of their opponents', for 34 games. Teams receive three points for a win and one point for a draw. No points are awarded for a loss.",
  },
  {
    categoryId: "restofworld",
    title: "Rest Of World",
    headerimage: rastofworldheader,
    image: rastofworld,
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
