import plateOfFood from "../../../images/restaurantfood.jpg";
import "../../homepage/components/Hero.css";

const Hero = () => {
    return (
        <div className="hero-card-background">
            <section className="hero-card-and-image offset-columns">
                <div className="hero-card flow">
                    <h1 className="display-title">Little Lemon</h1>
                    <p className="subtitle white">Chicago</p>
                    <p className="white">
                        A scene. Not a night goes by in which the restauraunt
                        isn't full of athletes, celebrities, stock brokers, and
                        dignitaries.
                    </p>
                    <p className="white">
                        Come rub elbows with your new famous best friends.
                    </p>
                    <button className="button">Reserve a table</button>
                </div>
                <img
                    src={plateOfFood}
                    alt="plate of food"
                    className="hero-image"
                ></img>
            </section>
        </div>
    );
};

export default Hero;
