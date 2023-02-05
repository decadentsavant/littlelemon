import { useState } from "react";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import iconHamburger from "../images/icon_menu.svg";
import iconClose from "../images/icon_close.svg";

function Nav(props) {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const handleToggle = () => {
        setNavbarOpen(!navbarOpen);
    };
    const closeMenu = () => {
        setNavbarOpen(false);
    };

    return (
        <header className="primary-header">
            <img src={logo} alt="logo" />
            <button
                className="mobile-nav-toggle"
                aria-controls="primary-navigation"
                onClick={handleToggle}
            >
                {navbarOpen ? (
                    <img
                        src={iconClose}
                        alt=""
                        aria-hidden="true"
                        className="icon-close"
                    />
                ) : (
                    <img
                        src={iconHamburger}
                        alt=""
                        aria-hidden="true"
                        className="icon-hamburger"
                    />
                )}
                <span className="visually-hidden">Menu</span>
            </button>
            <nav className="primary-navigation" id="primary-navigation">
                <ul
                    aria-label="Primary"
                    className={`menuNav ${navbarOpen ? "showMenu" : ""}`}
                >
                    <li>
                        <Link to="/" onClick={() => closeMenu()}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={() => closeMenu()}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/menu" onClick={() => closeMenu()}>
                            Menu
                        </Link>
                    </li>
                    <li>
                        <Link to="/reservations" onClick={() => closeMenu()}>
                            Reservations
                        </Link>
                    </li>
                    <li>
                        <Link to="/orderonline" onClick={() => closeMenu()}>
                            Order Online
                        </Link>
                    </li>
                    <li>
                        <Link to="/login" onClick={() => closeMenu()}>
                            Login
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;
