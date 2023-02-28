import { useFormik } from "formik";
import { basicSchema } from "../../schemas";

const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
    alert("reservations made");
};

function BookingForm() {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    const YYYY = date.getFullYear();
    const MM =
        date.getMonth() < 10
            ? "0" + (date.getMonth() + 1)
            : date.getMonth() + 1;
    const DD = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

    const {
        values,
        errors,
        touched,
        handleBlur,
        isSubmitting,
        handleChange,
        handleSubmit,
    } = useFormik({
        initialValues: {
            email: "",
            date: YYYY + "-" + MM + "-" + DD,
            time: "",
            guests: "",
            occasion: "",
        },
        validationSchema: basicSchema,
        onSubmit: onSubmit,
    });

    console.log(values);
    console.log(errors);

    return (
            <form
                autoComplete="off"
                className="reservation-form"
                onSubmit={handleSubmit}
            >
                {/* RESERVATION DATE */}
                <label htmlFor="date">Date: </label>
                <input
                    type="date"
                    id="res-date"
                    // placeholder="Enter your date"
                    defaultValue={YYYY + "-" + MM + "-" + DD}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.date ? "input-error" : ""}
                />{" "}
                {errors.date ? (
                    <p className="form-error-color">{errors.date}</p>
                ) : (
                    ""
                )}
                {/* RESERVATION TIME */}
                <label htmlFor="res-time">Choose time: </label>
                <select id="res-time">
                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option>
                    <option value="19:00">19:00</option>
                    <option value="20:00">20:00</option>
                    <option value="21:00">21:00</option>
                    <option value="22:00">22:00</option>
                </select>
                {/* GUESTS INPUT  */}
                <label htmlFor="guests">Number of guests: </label>
                <input
                    value={values.guests}
                    onChange={handleChange}
                    id="guests"
                    type="number"
                    placeholder=" Number of guests"
                    onBlur={handleBlur}
                    className={
                        errors.guests && touched.guests ? "input-error" : ""
                    }
                />
                {errors.guests && touched.guests ? (
                    <p className="form-error-color">{errors.guests}</p>
                ) : (
                    ""
                )}
                {/* OCCASION */}
                <label htmlFor="occasion">Choose time: </label>
                <select id="occasion">
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                {/* EMAIL INPUT  */}
                <label htmlFor="email">Email: </label>
                <input
                    value={values.email}
                    onChange={handleChange}
                    id="email"
                    type="email"
                    placeholder=" Enter your email"
                    onBlur={handleBlur}
                    className={
                        errors.email && touched.email ? "input-error" : ""
                    }
                />
                {errors.email && touched.email ? (
                    <p className="form-error-color">{errors.email}</p>
                ) : (
                    ""
                )}
                {/* SUBMIT BUTTON */}
                <button
                    disabled={isSubmitting}
                    type="submit"
                    value="Make Your reservation"
                    className="button"
                >
                    Submit
                </button>
            </form>
    );
}

export default BookingForm;
