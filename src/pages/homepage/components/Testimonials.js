import testimonialsData from '../data/TestimonialsData';
import TestimonialsCard from './TestimonialsCard'

const Testimonials = () => {
    return (
        <div className="container--testimonials">
            <div className="container--testimonials-header-row subtitle">
                <h3>Testimonials</h3>
            </div>
            <div className="container--testimonials-cards">
                <TestimonialsCard {...testimonialsData.testimonial1} />
                <TestimonialsCard {...testimonialsData.testimonial2} />
                <TestimonialsCard {...testimonialsData.testimonial3} />
                <TestimonialsCard {...testimonialsData.testimonial4} />
            </div>
        </div>
    );
};

export default Testimonials;
