/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'
import { MdOutlineDesignServices } from 'react-icons/md'
import { FaArrowRight } from 'react-icons/fa6'
import { FadeIn } from '../animation'
import './about.css'
import { SiAffinitydesigner } from 'react-icons/si'
import { MdWeb } from 'react-icons/md'
import { TbBrandFramerMotion } from 'react-icons/tb'


const About = () => {
    return (
        <>
            <div className='about'>
                <div className='top_container'>
                    <div className='title'>
                        <h2>About</h2>
                    </div>
                    <div className='box_container'>
                        <motion.div
                            variants={FadeIn("up", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                            className='box'>
                            <div className='icon'>
                                <MdOutlineDesignServices />
                            </div>
                            <div className='details'>
                                <h3>Web3 developer</h3>
                                <p> Building skills in Web3 development through personal projects and ongoing learning initiatives.</p>
                                <div className='icon'>
                                    <FaArrowRight />
                                </div>
                            </div>

                        </motion.div>
                        <motion.div
                            variants={FadeIn("up", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                            className='box'>
                            <div className='icon'>
                                <SiAffinitydesigner />
                            </div>
                            <div className='details'>
                                <h3>Graphic Design</h3>
                                <p>Developing foundational skills in graphic design through engaging projects and peer collaboration.</p>
                                <div className='icon'>
                                    <FaArrowRight />
                                </div>
                            </div>

                        </motion.div><motion.div
                            variants={FadeIn("up", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                            className='box'>
                            <div className='icon'>
                                <MdWeb />
                            </div>
                            <div className='details'>
                                <h3>Web Developement</h3>
                                <p> Skilled in HTML(Begineer), JavaScript/CSS(Intermediate), with hands-on experience in React.js and TailWind for dynamic UI and beautiful websites.</p>
                                <div className='icon'>
                                    <FaArrowRight />
                                </div>
                            </div>

                        </motion.div><motion.div
                            variants={FadeIn("up", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                            className='box'>
                            <div className='icon'>
                                <TbBrandFramerMotion />
                            </div>
                            <div className='details'>
                                <h3>Motion Graphics</h3>
                                <p> Motion Graphics Learner
                                    Developing skills in motion graphics, with intermediate Framer Motion experience and a passion for growth.</p>
                                <div className='icon'>
                                    <FaArrowRight />
                                </div>
                            </div>

                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About