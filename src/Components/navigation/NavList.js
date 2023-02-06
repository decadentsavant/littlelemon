import { Link } from "react-router-dom";
import { useContext } from "react";
import { CloseNavFunctionContext } from "../../App";

function NavList () {
    const closeSideDrawer = useContext(CloseNavFunctionContext);
    return (
        <ul className="navList-links" aria-label="Primary">
            <li>
                <Link to="/" onClick={closeSideDrawer}>
                    HOME
                </Link>
            </li>
            <li>
                <Link to="/about" onClick={closeSideDrawer}>
                    ABOUT
                </Link>
            </li>
            <li>
                <Link to="/menu" onClick={closeSideDrawer}>
                    MENU
                </Link>
            </li>
            <li>
                <Link to="/reservations" onClick={closeSideDrawer}>
                    RESERVATIONS
                </Link>
            </li>
            <li>
                <Link to="/orderonline" onClick={closeSideDrawer}>
                    ORDER ONLINE
                </Link>
            </li>
            <li>
                <Link to="/login" onClick={closeSideDrawer}>
                    LOGIN
                </Link>
            </li>
        </ul>
    );
};
export default NavList;
