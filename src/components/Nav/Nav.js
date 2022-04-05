import "./Nav.css"
function Nav() {
    return (
        <nav className="Nav">
            <div className="logo"><h1>Sport</h1></div>
            <div>
                <ul>
                    <li><a href="#">Premier League</a></li>
                    <li><a href="#">La liga</a></li>
                    <li><a href="#">seria a</a></li>
                    <li><a href="#">Bundesliga</a></li>
                    <li><a href="#">Ligue 1</a></li>
                    <li><a href="#">Rest of world</a></li>
                </ul>
            </div>
            <div>
                <button className="cart"><i class="fa-solid fa-cart-shopping"></i></button>
            </div>
        </nav>
    );
}

export default Nav;