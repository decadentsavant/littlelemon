import chefs1 from "../images/chefs1.jpg"
import chefs2 from "../images/chefs2.jpg";

const About = () => {
    return (
        <section>
            <div className="section--about-card">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    Chris and Charlie are local celebrities in the restaurant
                    scene of Chicago.
                </p>
            </div>
            <img
                src={chefs1}
                alt="two chefs"
                className="section--about-chefs"
            />
            <img
                src={chefs2}
                alt="two chefs"
                className="section--about-chefs"
            />
        </section>
    );
};

export default About;