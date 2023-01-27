import moped from "../../../images/moped.svg";

const SpecialsCard = (props) => {
    return (
        <div className="specials-card">
            <img
                className="specials-card-image"
                src={require("../../../images/" + props.image)}
                alt={props.title}
            />
            <div className="specials-card-title-row">
                <h4>{props.title}</h4>
                <h4>{props.price}</h4>
            </div>
            <p>{props.description}</p>
            <div className="specials-card-footer">
                <p>Order a delivery</p>
                <img
                    className="specials-card-icon"
                    src={moped}
                    alt={"../../../images/" + props.imageLocation + ".jpg"}
                />
            </div>
        </div>
    );
};

export default SpecialsCard;
