import chefs1 from "../../../images/chefs1.png";
import chefs2 from "../../../images/chefs2.png";

const About = () => {
    return (
        <section className="even-columns">
            <div>
                <h1 className="display-title">Little Lemon</h1>
                <p className="subtitle">Chicago</p>
                <p>
                    Luka and Dončić are the easily the best players in the
                    sporting world of kitchens. Come watch them work their
                    magic!
                </p>
            </div>
            <div>
                <img src={chefs2} alt="chefs"></img>
                <img src={chefs1} alt="chefs"></img>
            </div>
        </section>
    );
};

export default About;
