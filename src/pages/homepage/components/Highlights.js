import SpecialsCard from "./SpecialsCard";
import cardData from "../data/CardData";
import "../../homepage/components/Highlights.css";

const Highlights = () => {
    return (
        <section>
            <div className="default-padding">
                <div className="highlights-title-and-button">
                    <h6 className="subtitle extra-bold">This week's specials!</h6>
                    <button className="button">Online Menu</button>
                </div>
                <div className="container--highlights-cards even-columns">
                    <SpecialsCard {...cardData.greekSalad} />
                    <SpecialsCard {...cardData.bruchetta} />
                    <SpecialsCard {...cardData.lemonDessert} />
                </div>
            </div>
        </section>
    );
};

export default Highlights;
