import React from 'react';
import { motion } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { Facebook, Linkedin, Github } from 'lucide-react';

const Hero = () => {
    const [text] = useTypewriter({
        words: ['Frontend Developer', 'Freelancer', 'Designer'],
        loop: 0,
        typeSpeed: 100,
        deleteSpeed: 100,
        delaySpeed: 1000,
    });

    const socialLinks = [
        { icon: <Facebook />, href: 'https://www.facebook.com/zhir.jalal.0' },
        { icon: <Linkedin />, href: 'https://www.linkedin.com/in/zhir-jalal-8aa579328/' },
        { icon: <Github />, href: 'https://github.com/zhir4web' },
    ];

    return (
        <section className="home" id="home">
            <div className="home-content">
                <motion.h3
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Hello, It's Me
                </motion.h3>

                <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    zhir jalal
                </motion.h1>

                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    And I'm a <span className="multiple-text">{text}<Cursor cursorStyle='|' /></span>
                </motion.h3>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    Hi! I'm Zhir, a 24-year-old frontend developer and computer science student from Sulaimani.
                    I specialize in HTML, CSS, JavaScript, Java, Tailwind and Bootstrap.
                    I’m passionate about building clean, responsive web apps and growing as a developer.
                </motion.p>

                <div className="social-media">
                    {socialLinks.map((social, index) => (
                        <motion.a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.8 + index * 0.1 }}
                            whileHover={{ scale: 1.2, backgroundColor: 'var(--main-color)', color: '#fff' }}
                        >
                            {social.icon}
                        </motion.a>
                    ))}
                </div>

                <motion.a
                    href="/assets/zhirjalal.pdf"
                    className="btn"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                >
                    Download CV
                </motion.a>
            </div>

            <motion.div
                className="home-img"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
            >
                <motion.img
                    src="/images/zhir.png"
                    alt="Zhir Jalal"
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
            </motion.div>

            <style jsx>{`
        .home {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 4rem;
        }
        .home-content h3 {
          font-size: 3.2rem;
          font-weight: 700;
        }
        .home-content h1 {
          font-size: 5.6rem;
          font-weight: 700;
          line-height: 1.3;
          margin: 0.5rem 0;
        }
        .home-content p {
          font-size: 1.6rem;
          line-height: 1.6;
          margin: 2rem 0;
          max-width: 600px;
        }
        .social-media {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }
        .social-media a {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          width: 4.5rem;
          height: 4.5rem;
          background: transparent;
          border: 0.2rem solid var(--main-color);
          border-radius: 50%;
          font-size: 2rem;
          color: var(--main-color);
          transition: 0.3s ease;
        }
        .home-img img {
          width: 35vw;
          filter: drop-shadow(0 0 20px var(--main-color));
        }

        @media (max-width: 768px) {
          .home {
            flex-direction: column-reverse;
            text-align: center;
            padding-top: 15rem;
          }
          .home-content h1 {
            font-size: 4rem;
          }
          .home-content p {
            margin: 2rem auto;
          }
          .social-media {
            justify-content: center;
          }
          .home-img img {
            width: 70vw;
          }
        }
      `}</style>
        </section>
    );
};

export default Hero;
