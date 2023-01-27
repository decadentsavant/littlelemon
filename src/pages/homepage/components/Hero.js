import plateOfFood from "../../../images/restaurantfood.jpg";
const Hero = () => {
    return (
        <div className="container--hero">
            <div className="container--hero-upper">
                <div className="container--hero-card">
                    <h1 className="display-title">Little Lemon</h1>
                    <h2 className="subtitle">Chicago </h2>
                    <p className="container--hero-card-text default-text">
                        A scene. Not a night goes by in which the restauraunt
                        isn't full of athletes, celebrities, stock brokers, and
                        dignitaries.
                    </p>
                    <p className="container--hero-card-text default-text">
                        Come rub elbows with your new famous best friends.
                    </p>
                    <button>Reserve a table</button>
                </div>
                <div></div>
                <img
                    src={plateOfFood}
                    alt="plate of food"
                    className="plateOfFood"
                ></img>
            </div>
        </div>
    );
};

export default Hero;
