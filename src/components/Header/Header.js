import "./Header.css"
import LaLiga from "../../assets/LaLiga.webp"
import PremierLeague from "../../assets/PremierLeague.webp"
import Bundesliga from "../../assets/Bundesliga.webp"
import Liga1 from "../../assets/Liga1.webp"
import SeriaA from "../../assets/SeriaA.png"
import Row from "../../assets/Row.webp"
import RealMadrid from "../../assets/real_madrid.jpg"
function Header() {
    return (
        <header className="Header">
            <div className="title">Shop Your Favourite League</div>
            <nav className="navbar">
                <div className="header-nav">
                    <div>
                        <a href="/" ><img src={PremierLeague} alt="laliga" /></a>
                    </div>
                    <div>
                        <p>Premier League</p>
                    </div>
                </div>
                <div className="header-nav">
                    <div>
                        <a href="/" ><img src={LaLiga} alt="laliga" /></a>
                    </div>
                    <div>
                        <p>La Liga</p>
                    </div>
                </div>
                
                <div className="header-nav">
                    <div>
                        <a href="/" ><img src={Bundesliga} alt="laliga" /></a>
                    </div>
                    <div>
                        <p>Bundesliga</p>
                    </div>
                </div>
                <div className="header-nav">
                    <div>
                        <a href="/" ><img src={Liga1} alt="laliga" /></a>
                    </div>
                    <div>
                        <p>Liga 1</p>
                    </div>
                </div>
                <div className="header-nav">
                    <div>
                        <a href="/" ><img src={SeriaA} alt="laliga" /></a>
                    </div>
                    <div>
                        <p>Seria A</p>
                    </div>
                </div>
                <div className="header-nav">
                    <div>
                        <a href="/" ><img src={Row} alt="laliga" /></a>
                    </div>
                    <div>
                        <p>Rest of World</p>
                    </div>
                </div>
            </nav>
            <section className="section">
                <div className="header__left">
                    <h1 >Spring looks.</h1>
                    <span>Upgrate your collection.</span>
                    <a href="/" className="btn">shop now</a>
                </div>
                <div className="header__right">
                    <img src={RealMadrid} alt="realmadrid"/>
                </div>
            </section>
        </header>
    )
}
export default Header