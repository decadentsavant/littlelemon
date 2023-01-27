import chefs1 from "../../../images/chefs1.jpg";
import chefs2 from "../../../images/chefs2.jpg";

const About = () => {
    return (
        <div className="container--about">
            <div className="container--about-card">
                <h1 className="display-title">Little Lemon</h1>
                <h2 className="subtitle">Chicago </h2>
                <p className="container--about-card-text default-text">
                    Luka and Dončić are the easily the best players in the
                    sporting world of kitchens. Come watch them work their
                    magic!
                </p>
            </div>
            <div className="container-about-photos">
                <img
                src={chefs2}
                alt="chefs"
                className="container--about-photo2"
            ></img>
                {/* <img
                    src={chefs1}
                    alt="chefs"
                    className="container--about-photo1"
                ></img> */}
            </div>
        </div>
    );
};

export default About;
