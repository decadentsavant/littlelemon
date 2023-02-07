import moped from "../../../images/moped.svg";

const SpecialsCard = (props) => {
    return (
        <div className="specials-card flow">
            <img
                src={require("../../../images/" + props.image)}
                alt={props.title}
                className="specials-card-image"
            />
            <div className="specials-card-title-row">
                <p className="specials-card-title default-padding extra-bold">
                    {props.title}
                </p>
                <p className="specials-card-price default-padding extra-bold">
                    {props.price}
                </p>
            </div>
            <p className="specials-card-description default-padding">
                {props.description}
            </p>
            <div className="specials-card-footer default-padding">
                <p className="extra-bold">Order a delivery</p>
                <img
                    src={moped}
                    alt={"../../../images/" + props.imageLocation + ".jpg"}
                    className="specials-card-footer-image default-padding"
                />
            </div>
        </div>
    );
};

export default SpecialsCard;
