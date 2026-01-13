import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, BarChart3 } from 'lucide-react';

export const About = () => {
    return (
        <section className="about" id="about">
            <motion.div
                className="about-img"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <img src="/images/zhir.png" alt="About Zhir" />
            </motion.div>

            <motion.div
                className="about-content"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <h2 className="heading">About <span>Me</span></h2>
                <h3>Frontend Developer</h3>
                <p>
                    Hi there, welcome to my website! I'm Zhir, a passionate web developer
                    who enjoys learning new technologies and solving problems with code!
                    I focus on creating high-quality, user-friendly experiences.
                </p>
                <a href="#" className="btn">Read More</a>
            </motion.div>

            <style jsx>{`
        .about {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 4rem;
          background: var(--second-bg-color);
        }
        .about-img img {
          width: 35vw;
          filter: drop-shadow(0 0 15px rgba(0,0,0,0.5));
        }
        .about-content h2 {
          text-align: left;
          line-height: 1.2;
        }
        .about-content h3 {
          font-size: 2.6rem;
          color: var(--main-color);
          margin-top: 1rem;
        }
        .about-content p {
          font-size: 1.6rem;
          margin: 2rem 0 3rem;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .about {
            flex-direction: column-reverse;
            text-align: center;
          }
          .about-content h2 {
            text-align: center;
          }
          .about-img img {
            width: 70vw;
          }
        }
      `}</style>
        </section>
    );
};

export const Services = () => {
    const services = [
        {
            icon: <Code2 size={48} />,
            title: 'Web Development',
            desc: 'Built responsive websites using HTML, CSS, JavaScript, Tailwind, and Bootstrap. Focused on clean, user-friendly interfaces.'
        },
        {
            icon: <Palette size={48} />,
            title: 'Graphic Design',
            desc: 'Designed clean, modern visuals for social media and branding using Canva and Figma. Focused on minimalist design.'
        },
        {
            icon: <BarChart3 size={48} />,
            title: 'Social Media',
            desc: 'Created engaging content to attract customers and boost sales across Instagram, Facebook, and TikTok.'
        }
    ];

    return (
        <section className="services" id="services">
            <h2 className="heading">Our <span>Services</span></h2>
            <div className="services-container">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className="services-box glass"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -10, borderColor: 'var(--main-color)' }}
                    >
                        <div className="icon-container">{service.icon}</div>
                        <h3>{service.title}</h3>
                        <p>{service.desc}</p>
                        <a href="#" className="btn">Read More</a>
                    </motion.div>
                ))}
            </div>

            <style jsx>{`
        .services-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2.5rem;
        }
        .services-box {
          padding: 4rem 3rem;
          text-align: center;
          border-radius: 2rem;
          transition: 0.3s ease;
        }
        .icon-container {
          color: var(--main-color);
          margin-bottom: 2rem;
          display: flex;
          justify-content: center;
        }
        .services-box h3 {
          font-size: 2.4rem;
          margin-bottom: 1.5rem;
        }
        .services-box p {
          font-size: 1.5rem;
          margin-bottom: 2.5rem;
          line-height: 1.6;
        }
      `}</style>
        </section>
    );
};
