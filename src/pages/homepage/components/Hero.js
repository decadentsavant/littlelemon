import plateOfFood from "../../../images/restaurantfood.jpg";
const Hero = () => {
    return (
        <section className="even-columns">
                <div>
                    <h1 className="display-title">Little Lemon</h1>
                    <p className="subtitle">Chicago</p>
                    <p className="container--hero-card-text default-text">
                        A scene. Not a night goes by in which the restauraunt
                        isn't full of athletes, celebrities, stock brokers, and
                        dignitaries.
                    </p>
                    <p className="container--hero-card-text default-text">
                        Come rub elbows with your new famous best friends.
                    </p>
                    <button className="button">Reserve a table</button>
                </div>
                <img
                    src={plateOfFood}
                    alt="plate of food"
                    className="plateOfFood"
                ></img>
        </section>
    );
};

export default Hero;
