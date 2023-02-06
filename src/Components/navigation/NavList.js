import { Link } from "react-router-dom";

function NavList () {
    return (
            <ul className="navList-links" aria-label="Primary">
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/about">ABOUT</Link>
                </li>
                <li>
                    <Link to="/menu">MENU</Link>
                </li>
                <li>
                    <Link to="/reservations">RESERVATIONS</Link>
                </li>
                <li>
                    <Link to="/orderonline">ORDER ONLINE</Link>
                </li>
                <li>
                    <Link to="/login">LOGIN</Link>
                </li>
            </ul>
    );
};
export default NavList;
