import chefs1 from "../../../images/chefs1.png";
import chefs2 from "../../../images/chefs2.png";
import "../../homepage/components/About.css";

const About = () => {
    return (
        <section className="about-container even-columns default-padding">
            <div className="about-card default-padding" >
                <h1 className="display-title">Little Lemon</h1>
                <p className="subtitle white">Chicago</p>
                <p className="white about-description">
                    Luka and Dončić are the easily the best players in the
                    sporting world of kitchens. Come watch them work their
                    magic!
                </p>
            </div>
            <div className="about-images">
                <img
                    src={chefs1}
                    alt="chefs"
                    className="about-images-first"
                ></img>
                <img
                    src={chefs2}
                    alt="chefs"
                    className="about-images-second"
                ></img>
            </div>
        </section>
    );
};

export default About;
