import logo from "../images/logo.svg";
const Footer = () => {
    return (
        <section>
            <img src={logo} alt="logo" classname="section--footer-logo" />
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservations</li>
                    <li>Order Online</li>
                </ul>
            </nav>
            <div>123 Main St. Chicago, IL 12345 555-867-5309 email@website.com</div>
            <ul>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Tik Tok</li>
            </ul>
        </section>
    );
};

export default Footer;
