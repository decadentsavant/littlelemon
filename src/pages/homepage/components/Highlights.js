import SpecialsCard from "./SpecialsCard";
import cardData from "../data/CardData";

const Highlights = () => {
    return (
        <section>
            <div>
                <div>
                    <h2>This week's specials!</h2>
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
