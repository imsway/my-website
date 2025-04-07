import React from 'react'
import './home.css'
import { IoCall } from "react-icons/io5";
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FadeIn } from '../animation';
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <>
            <div className='home'>
                <div className='container'>
                    <div className='details'>
                        <motion.div
                            variants={FadeIn("up", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.4 }}
                            className='info'>
                            <h2>Hi, I'm Sway</h2>
                            <p>I'm a web developer and designer from India. I'm passionate about creating user-friendly and visually appealing websites. I have experience in web development, graphic design, and digital marketing. I am always looking for new opportunities to grow my skills and knowledge.</p>

                        </motion.div>

                        <motion.div
                            variants={FadeIn("up", 0.3)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                            className='user'>
                            <div className='user_img_box'>
                                <img src='' alt=''></img>
                                <img src='' alt=''></img>
                                <img src='' alt=''></img>
                            </div>
                        </ motion.div>
                        <motion.div
                            variants={FadeIn("up", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                            className='button'>
                            <Link to="footer" smooth={true} duration={500}>Contact Me</Link>
                            <div className='icon'>
                                <IoCall />
                            </div>
                        </motion.div>
                    </div>
                    <motion.div
                        variants={FadeIn("left", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        className='img_box'>
                        <img src='src/assets/img/pfp2.jpeg' />


                    </motion.div>

                </div>

            </div>
        </>
    )
}

export default Home
