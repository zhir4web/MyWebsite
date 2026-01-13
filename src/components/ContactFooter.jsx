import React from 'react';
import { motion } from 'framer-motion';
import { Send, ArrowUp, Mail, Phone, MapPin } from 'lucide-react';

export const Contact = () => {
    return (
        <section className="contact" id="contact">
            <h2 className="heading">Contact <span>Me!</span></h2>

            <motion.form
                action="#"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="input-box">
                    <input type="text" placeholder="Full Name" required />
                    <input type="email" placeholder="Email Address" required />
                </div>
                <div className="input-box">
                    <input type="number" placeholder="Mobile Number" />
                    <input type="text" placeholder="Email Subject" />
                </div>
                <textarea name="message" cols="30" rows="10" placeholder="Your Message" required></textarea>

                <motion.button
                    type="submit"
                    className="btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '2rem auto' }}
                >
                    Send Message <Send size={20} />
                </motion.button>
            </motion.form>

            <style jsx>{`
        .contact {
          background: var(--bg-color);
        }
        .contact form {
          max-width: 70rem;
          margin: 1rem auto;
          text-align: center;
        }
        .contact form .input-box {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
        }
        .contact form .input-box input,
        .contact form textarea {
          width: 48%;
          padding: 1.5rem;
          font-size: 1.6rem;
          color: var(--text-color);
          background: var(--second-bg-color);
          border-radius: 0.8rem;
          margin: 0.7rem 0;
          border: 1px solid var(--glass-border);
          transition: 0.3s;
        }
        .contact form .input-box input:focus,
        .contact form textarea:focus {
          border-color: var(--main-color);
          box-shadow: 0 0 10px rgba(56, 189, 248, 0.2);
        }
        .contact form textarea {
          width: 100%;
          resize: none;
        }

        @media (max-width: 450px) {
          .contact form .input-box input {
            width: 100%;
          }
        }
      `}</style>
        </section>
    );
};

export const Footer = () => {
    return (
        <footer className="footer glass">
            <div className="footer-text">
                <p>Copyright &copy; 2024 by zhir jalal | All Rights reserved</p>
            </div>

            <motion.div
                className="footer-iconTop"
                whileHover={{ y: -5 }}
            >
                <a href="#home"><ArrowUp size={24} /></a>
            </motion.div>

            <style jsx>{`
        .footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          padding: 2rem 9%;
          background: var(--second-bg-color);
          border-top: 1px solid var(--glass-border);
        }
        .footer-text p {
          font-size: 1.6rem;
          color: var(--text-color);
        }
        .footer-iconTop a {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          padding: 1rem;
          background: var(--main-color);
          border-radius: 0.8rem;
          color: var(--second-bg-color);
          transition: 0.3s ease;
        }
        .footer-iconTop a:hover {
          box-shadow: 0 0 1.5rem var(--main-color);
        }

        @media (max-width: 450px) {
          .footer {
            flex-direction: column-reverse;
            gap: 2rem;
            text-align: center;
          }
        }
      `}</style>
        </footer>
    );
};
