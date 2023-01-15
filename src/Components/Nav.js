import logo from "../images/logo.svg"

const Nav = () => {
    return (
        <nav className="nav--main">
            <img src={logo} alt="logo" className="nav--logo"/>
            <ul className="nav--list">
                <li><a href="home">Home</a></li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order Online</li>
                <li>Login</li>
            </ul>
        </nav>
    );
};

export default Nav;
