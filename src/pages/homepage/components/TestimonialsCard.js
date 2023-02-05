import star from "../../../images/star.svg";

const TestimonialsCard = (props) => {
    return (
        <div>
            <div className="even-columns">
                {Array.from({ length: 5 }, (_, i) => (
                    <img src={star} alt="star" />
                ))}
            </div>
            <div>
                <img
                    src={require("../../../images/" + props.image)}
                    alt={props.name}
                />
                <p> {props.name}</p>
            </div>
            <div>{props.quote}</div>
        </div>
    );
};

export default TestimonialsCard;
