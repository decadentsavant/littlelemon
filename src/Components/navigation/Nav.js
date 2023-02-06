import logo from "../../images/logo.svg";
import "../../components/navigation/Nav.css";
import SideMenu from "../navigation/sideMenu/SideMenu";
import NavList from "./NavList";

const Nav = (props) => (
    <header className="toolbar">
        <nav className="toolbar_navigator">
            <div className="toggle-btn">
                <SideMenu click={props.drawerToggleClickHandler} />
            </div>
            <div className="toolbar_logo">
                <img src={logo} className="toolbar_logo-img" alt="logo" />
            </div>
            <div className="toolbar_navigation-items">
                <NavList />
            </div>
        </nav>
    </header>
);

export default Nav;
