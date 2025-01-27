import React from 'react';

function Services() {
  const services = [
    'Custom Web Development',
    'Mobile App Design',
    'SEO Optimization',
    'Cloud Integration',
  ];

  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <ul>
        {services.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
    </section>
  );
}

export default Services;
