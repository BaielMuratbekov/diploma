import { AboutItem } from "../components/AboutItem/AboutItem";
import { Header } from "../components/Header/Header";

function Abouts() {
  return (
    <div>
      <Header title="About store" image="/assets/about3.webp">
        <div>
          <div>Sportswear store</div>
          <div>
            <span>🏪 ул. J. Abdrakhmanova 134a</span>
            <span>🏪 Shopping center "Bishkek Park" 3rd floor</span>
            <span>
              📞-<strong>0507161706</strong> whatsapp
            </span>
            <span>
              📞-<strong>0501640641</strong>
            </span>
          </div>
        </div>
      </Header>
      <AboutItem/>
    </div>
  );
}

export default Abouts;
