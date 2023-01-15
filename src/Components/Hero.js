import plateOfFood from "../images/restaurantfood.jpg"
const Hero = () => {
    return (
        <section className="section--hero">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
                Our creative, elevated food and beverage program combines
                satisfying staples with imaginative twists.
            </p>
            <button>Reserve a table</button>
            <img src={plateOfFood} alt="plate of food" className="image--plateOfFood"/>
        </section>
    );
};

export default Hero;
