import "./Nav.css"
function Nav() {
    return (
        <nav className="Nav">
            <div className="logo"><h1>Sport</h1></div>
            <div>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Matches</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div>
                <button className="cart"><i class="fa-solid fa-cart-shopping"></i></button>
            </div>
        </nav>
    );
}

export default Nav;