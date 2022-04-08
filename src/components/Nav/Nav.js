import "./Nav.css"
function Nav() {
    return (
        <nav className="Nav">
            <div className="logo"><h1>Sport</h1></div>
            <div>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>

                </ul>
            </div>
            <div>
                <button className="cart">
                    <i class="fa-solid fa-heart"></i>
                </button>
                <button className="cart">
                    <i class="fa-solid fa-cart-shopping"></i>
                </button>
                <button className="cart user">
                    <i class="fa-solid fa-user"></i>
                </button>
            </div>
        </nav>
    );
}

export default Nav;