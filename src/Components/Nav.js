import logo from "../images/logo.svg"
import {Link} from "react-router-dom"

function Nav () {
    return (
        <nav className="nav--main">
            <img src={logo} alt="logo" className="nav--logo" />
            <ul className="nav--list">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/menu">Menu</Link>
                    </li>
                    <li>
                        <Link to="/reservations">Reservations</Link>
                    </li>
                    <li>
                        <Link to="/orderonline">Order Online</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
            </ul>
        </nav>
    );
};

export default Nav;
