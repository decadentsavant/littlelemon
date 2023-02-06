import { Link } from "react-router-dom";
import { useContext } from "react";
import { CloseNavFunctionContext } from "../../App";

function NavList () {
    const closeSideDrawer = useContext(CloseNavFunctionContext);
    return (
        <ul className="navList-links" aria-label="Primary">
            <li>
                <Link to="/" onClick={closeSideDrawer} key="/">
                    HOME
                </Link>
            </li>
            <li>
                <Link to="/about" onClick={closeSideDrawer} key="/about">
                    ABOUT
                </Link>
            </li>
            <li>
                <Link to="/menu" onClick={closeSideDrawer} key="/menu">
                    MENU
                </Link>
            </li>
            <li>
                <Link
                    to="/reservations"
                    onClick={closeSideDrawer}
                    key="/reservations"
                >
                    RESERVATIONS
                </Link>
            </li>
            <li>
                <Link
                    to="/orderonline"
                    onClick={closeSideDrawer}
                    key="/orderonline"
                >
                    ORDER ONLINE
                </Link>
            </li>
            <li>
                <Link to="/login" onClick={closeSideDrawer} key="/login">
                    LOGIN
                </Link>
            </li>
        </ul>
    );
};
export default NavList;
