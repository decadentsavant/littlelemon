import { useFormik } from "formik";
import { basicSchema } from "../../schemas";

function BookingForm({ availableTimes, setAvailableTimes, submitForm }) {
    const dateNow = new Date();
    dateNow.setDate(dateNow.getDate() + 1);
    const YYYY = dateNow.getFullYear();
    const MM =
        dateNow.getMonth() < 10
            ? "0" + (dateNow.getMonth() + 1)
            : dateNow.getMonth() + 1;
    const DD =
        dateNow.getDate() < 10 ? "0" + dateNow.getDate() : dateNow.getDate();

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
            occasion: "birthday",
        },
        validationSchema: basicSchema,
        onSubmit: (values) => {
            console.log("submitting form with these values -> ", values);
            submitForm(values);
        },
    });

    console.log("state -> ??", values.occasion);
    console.log("errors are -> ", errors.occasion);

    return (
        <form
            data-testid="form"
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
                onChange={null}
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
                {availableTimes.times.map((time, index) => {
                    return (
                        <option value={time} key={index}>
                            {time}
                        </option>
                    );
                })}
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
                className={errors.guests && touched.guests ? "input-error" : ""}
            />
            {errors.guests && touched.guests ? (
                <p className="form-error-color">{errors.guests}</p>
            ) : (
                ""
            )}
            {/* OCCASION */}
            <label htmlFor="occasion">Choose occasion: </label>
            <select
                id="occasion"
                name="occasion"
                onChange={handleChange}
                value={values.occasion}
            >
                <option value="birthday" label="Birthday" />
                <option value="anniversary" label="Anniversary" />
            </select>
            {/* EMAIL INPUT  */}
            <label htmlFor="email">Email: </label>
            <input
                id="email"
                name="email"
                type="email"
                placeholder=" Enter your email"
                onChange={handleChange}
                value={values.email}
                onBlur={handleBlur}
                className={errors.email && touched.email ? "input-error" : ""}
            />
            {errors.email && touched.email ? (
                <p className="form-error-color">{errors.email}</p>
            ) : (
                ""
            )}
            {/* SUBMIT BUTTON */}
            <button
                data-testid="button"
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
