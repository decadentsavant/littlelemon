import star from "../../../images/star.svg";

const TestimonialsCard = (props) => {
    return (
        <div className="testimonials-card" >
            <div className="testimonials-stars" >
                {Array.from({ length: 5 }, (_, i) => (
                    <img src={star} alt="star" key={i}/>
                ))}
            </div>
            <div className="image-name">
                <img
                    className="testimonials-image"
                    src={require("../../../images/" + props.image)}
                    alt={props.name}
                />
                <div className="testimonials-spacer"></div>
                <p> {props.name}</p>
            </div>
            <div>{props.quote}</div>
        </div>
    );
};

export default TestimonialsCard;
