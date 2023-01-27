import star from "../../../images/star.svg";

const TestimonialsCard = (props) => {
    return (
        <div className="testimonials-card">
            <div className="testimonials-card-stars">
                {Array.from({ length: 5 }, (_, i) => (
                    <img
                        src={star}
                        alt="star"
                        className="testimonials-card-star-icon"
                    />
                ))}
            </div>
            <div className="testimonials-card-pic-name-row">
                <div className="testimonials-card-img-container">
                    <img
                        className="testimonials-card-image"
                        src={require("../../../images/" + props.image)}
                        alt={props.name}
                    />
                </div>
                <div className="testimonials-card-name-container">
                    <p> {props.name}</p>
                </div>
            </div>
            <div className="testimonials-card-quote">{props.quote}</div>
        </div>
    );
};

export default TestimonialsCard;
