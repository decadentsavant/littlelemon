import testimonialsData from "../data/TestimonialsData";
import TestimonialsCard from "./TestimonialsCard";

const Testimonials = () => {
    return (
        <section>
            <h2>Testimonials</h2> 
            <div className="even-columns">
                <TestimonialsCard {...testimonialsData.testimonial1} />
                <TestimonialsCard {...testimonialsData.testimonial2} />
                <TestimonialsCard {...testimonialsData.testimonial3} />
                <TestimonialsCard {...testimonialsData.testimonial4} />
            </div>
        </section>
    );
};

export default Testimonials;
