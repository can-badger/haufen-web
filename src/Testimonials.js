import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Testimonials() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animasyon sadece bir kez tetiklenecek
    threshold: 0.2,    // Elemanın %20'si görünür olduğunda tetiklenir
  });

  const bounceAnimation = {
    initial: { opacity: 0, y: -100 }, // Yukarıdan görünmez bir şekilde başlar
    animate: {
      opacity: 1,
      y: [0, -20, 0, -10, 0], // Yukarıdan düşer, iki kez sekerek durur
      transition: {
        duration: 1.5, // Animasyon süresi
        ease: "easeOut", // Yumuşak bir animasyon efekti
      },
    },
  };

  const testimonials = [
    { name: 'John Doe', feedback: 'Excellent service!' },
    { name: 'Jane Smith', feedback: 'Highly recommend this company.' },
  ];

  return (
    <section id="testimonials" className="testimonials" ref={ref}>
      <h2>What Our Clients Say</h2>
      <div>
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="testimonial"
            variants={bounceAnimation}
            initial="initial"
            animate={inView ? "animate" : "initial"} // Görünümdeyse animasyonu başlat
          >
            <p>"{testimonial.feedback}"</p>
            <h4>- {testimonial.name}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;