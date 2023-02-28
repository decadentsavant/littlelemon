import { useState } from "react";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const UseSubmit = () => {
    const [isLoading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);

    const submit = async (url, data) => {
        const random = Math.random();
        setLoading(true);
        try {
            await wait(2000);
            if (random < 0.5) {
                throw new Error("Something went wrong");
            }
            setResponse({
                type: "success",
                message: `Thanks for your submission. We look forward to seeing you at your scheduled time!`,
            });
        } catch (error) {
            setResponse({
                type: "error",
                message: "Something went wrong, please try again later!",
            });
        } finally {
            setLoading(false);
        }
    };

    return { isLoading, response, submit };
};

export default UseSubmit;
