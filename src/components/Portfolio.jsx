import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
    const projects = [
        {
            img: '/images/portfolio1.jpg',
            title: 'Shoppe',
            desc: 'Creating My First Website',
            link: 'https://zhir4web.github.io/zhir/zhir.html'
        },
        {
            img: '/images/portfolio2.jpg',
            title: 'System Kaftrya',
            desc: 'Cashier system with temporary database',
            link: 'https://zhir4web.github.io/Cashier-System-for-Kaftrya/zewe.html'
        },
        {
            img: '/images/portfolio3.jpg',
            title: 'Login & Register',
            desc: 'Secure and beautiful authentication UI',
            link: 'https://zhir4web.github.io/Login-and-Register/'
        },
        {
            img: '/images/portfolio4.jpg',
            title: 'Writing Quickly',
            desc: 'Typing speed game built with JS',
            link: 'https://zhir4web.github.io/Writing-Quickly/index.html'
        },
        {
            img: '/images/portfolio5.jpg',
            title: 'POS System',
            desc: 'Fast food point of sale system',
            link: 'https://zhir4web.github.io/Pos/#/pos'
        },
        {
            img: '/images/portfolio6.jpg',
            title: 'Web Design',
            desc: 'Modern web interface exploration',
            link: '#'
        }
    ];

    return (
        <section className="portfolio" id="portfolio">
            <h2 className="heading">Latest <span>Projects</span></h2>
            <div className="portfolio-container">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="portfolio-box"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <img src={project.img} alt={project.title} />
                        <motion.div
                            className="portfolio-layer"
                            initial={{ opacity: 0, y: '100%' }}
                            whileHover={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                            <h4>{project.title}</h4>
                            <p>{project.desc}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <ExternalLink size={24} />
                            </a>
                        </motion.div>
                    </motion.div>
                ))}
            </div>

            <style jsx>{`
        .portfolio {
          background: var(--second-bg-color);
        }
        .portfolio-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2.5rem;
        }
        .portfolio-box {
          position: relative;
          border-radius: 2rem;
          overflow: hidden;
          display: flex;
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
          aspect-ratio: 16/10;
        }
        .portfolio-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: 0.5s ease;
        }
        .portfolio-box:hover img {
          transform: scale(1.1);
        }
        .portfolio-layer {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(rgba(0,0,0,0.2), var(--main-color));
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          text-align: center;
          padding: 0 2rem;
          backdrop-filter: blur(4px);
        }
        .portfolio-layer h4 {
          font-size: 2.8rem;
          color: #fff;
          font-weight: 700;
        }
        .portfolio-layer p {
          font-size: 1.5rem;
          margin: 1rem 0 2rem;
          color: #fff;
          font-weight: 500;
        }
        .portfolio-layer a {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          width: 5rem;
          height: 5rem;
          background: #fff;
          border-radius: 50%;
          color: var(--second-bg-color);
          transition: 0.3s ease;
        }
        .portfolio-layer a:hover {
          transform: scale(1.1);
          color: var(--main-color);
        }
      `}</style>
        </section>
    );
};

export default Portfolio;
