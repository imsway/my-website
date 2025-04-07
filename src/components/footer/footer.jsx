import React from 'react'
import './footer.css'
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { AiFillInstagram } from 'react-icons/ai'
import { IoIosSend } from 'react-icons/io'

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='container'>
                    <div className='detail_container'>
                        <h3>Let's start a project together</h3>
                        <p> I work closely with my peers and superiors to understand their objectives, target audience and unique requirements. I then create a project plan that outlines the project's goals, timelines, and budget. I also ensure that the project is delivered on time and within budget.</p>
                        <div className='call-detail'>
                            <h4>Give me a call:</h4>
                            <p> Swayambhuba Padhi</p>
                            <p> +91-7205274474</p>
                        </div>
                        <div className='email-detail'>
                            <h4>Email me:</h4>
                            <p>swayambhubaofficial@gmail.com</p>
                        </div>
                        <div className='icons'>
                            <div className='icon'>
                                <a href='https://x.com/Sway_Vents'><FaXTwitter /></a>

                            </div>
                            <div className='icon'>
                                <a href='https://github.com/SwayambhubaPadhi'><FaGithub /></a>

                            </div>
                            
                            <div className='icon'>
                                
                                <a href='https://www.instagram.com/swayambhuba_/'><AiFillInstagram  /></a>
                                
                            </div>
                            <div className='icon'>
                                <a href='https://www.linkedin.com/in/swayambhuba-padhi-450a32326/'><FaLinkedinIn  /></a>
                                
                            </div>
                        </div>
                    </div>
                    <div className='form-container'>
                        <h3>Send a message</h3>
                        <div className='form'>
                            <div className='input_box'>
                                <input type='text' placeholder='Your Name' />
                            </div>
                            <div className='input_box'>
                                <input type='text' placeholder='Your e-mail Address' />
                            </div>
                            <div className='input_box'>
                                <input type='text' placeholder='Your Name' />
                            </div>
                            <div className='input_box'>
                               <textarea placeholder='Your Message'></textarea>
                            </div>
                            <div className='btn'>
                                <button>
                                    <span>Send Message</span>
                                    <div className='icon'>
                                        <IoIosSend />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        </>
    )
}

export default Footer