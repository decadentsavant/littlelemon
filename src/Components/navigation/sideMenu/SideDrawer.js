import NavList from "../NavList";
import "./SideDrawer.css";

function sideDrawer (props) {
    let drawerClasses = ["side-drawer"];

    if (props.show) {
        drawerClasses = ["side-drawer", "open"];
    }
    return (
        <nav className={drawerClasses.join(" ")}>
            <NavList />
        </nav>
    );
};
export default sideDrawer;
