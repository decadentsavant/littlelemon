import moped from "../../../images/moped.svg";

const SpecialsCard = (props) => {
    return (
        <div>
            <img
                src={require("../../../images/" + props.image)}
                alt={props.title}
            />

                <h4>{props.title}</h4>
                <h4>{props.price}</h4>
            <p>{props.description}</p>
            <div>
                <p>Order a delivery</p>
                <img
                    src={moped}
                    alt={"../../../images/" + props.imageLocation + ".jpg"}
                />
            </div>
        </div>
    );
};

export default SpecialsCard;
