import SpecialsCard from "./SpecialsCard";
import cardData from "../data/CardData";

const Highlights = () => {
    return (
        <div className="container--highlights">
            <div className="container--highlights-header-row">
                <h3 className="subtitle">This week's specials!</h3>
                <button>Online Menu</button>
            </div>
            <div className="container--highlights-cards">
                <SpecialsCard {...cardData.greekSalad} />
                <SpecialsCard {...cardData.bruchetta} />
                <SpecialsCard {...cardData.lemonDessert} />
            </div>
        </div>
    );
};

export default Highlights;
