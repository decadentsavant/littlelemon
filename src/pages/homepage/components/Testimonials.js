import testimonialsData from "../data/TestimonialsData";
import TestimonialsCard from "./TestimonialsCard";
import "../../homepage/components/Testimonials.css";

const Testimonials = () => {
  return (
    <section>
      <h2 className="testimonials-title subtitle yellow-1">Testimonials</h2>
      <div className="testimonials-cards even-columns">
        <TestimonialsCard {...testimonialsData.testimonial1} />
        <TestimonialsCard {...testimonialsData.testimonial2} />
        <TestimonialsCard {...testimonialsData.testimonial3} />
        <TestimonialsCard {...testimonialsData.testimonial4} />
      </div>
    </section>
  );
};

export default Testimonials;
