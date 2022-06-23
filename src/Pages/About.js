import { Header } from "../components/Header/Header";
import { AboutItem } from "../components/AboutItem/AboutItem";
function About() {
  return ( 
    <>
        <Header title="About store" image="/assets/about3.webp">
          <AboutItem />
        </Header>
      </>
   );
}

export default About;