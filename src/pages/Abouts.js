import { AboutItem } from "../components/AboutItem/AboutItem";
import { Header } from "../components/Header/Header";
import  AboutImg from "../assets/about3.webp";
function Abouts() {
  return (
    <div>
      <Header title="About store" image={AboutImg}>
        <div>
          <div>Sportswear store</div>
          <div>
            <span>๐ช ัะป. J. Abdrakhmanova 134a</span>
            <span>๐ช Shopping center "Bishkek Park" 3rd floor</span>
            <span>
              ๐-<strong>0507161706</strong> whatsapp
            </span>
            <span>
              ๐-<strong>0501640641</strong>
            </span>
          </div>
        </div>
      </Header>
      <AboutItem />
    </div>
  );
}

export default Abouts;
