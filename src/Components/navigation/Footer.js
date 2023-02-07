import logo from "../../images/logo.svg";
import "../navigation/Footer.css"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CloseNavFunctionContext } from "../../App";

const Footer = () => {
    const closeSideDrawer = useContext(CloseNavFunctionContext);
    return (
        <section className="even-columns footer-container">
            <img src={logo} alt="logo" className="section--footer-logo" />
            <nav>
                <ul className="footer-links">
                    <li>
                        <Link to="/" onClick={closeSideDrawer} key="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            onClick={closeSideDrawer}
                            key="/about"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/menu" onClick={closeSideDrawer} key="/menu">
                            Menu
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/reservations"
                            onClick={closeSideDrawer}
                            key="/reservations"
                        >
                            Reservations
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/orderonline"
                            onClick={closeSideDrawer}
                            key="/orderonline"
                        >
                            Order Online
                        </Link>
                    </li>
                </ul>
            </nav>
            <div>
                123 Main St.
                <br /> Chicago, IL 12345
                <br /> 555-867-5309
                <br /> email@website.com
            </div>
            <ul>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Tik Tok</li>
            </ul>
        </section>
    );
};

export default Footer;
