import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './portfolio.css'


import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';


const Portfolio = () => {
    return (
        <>
            <div className='portfolio'>
                <div className='container'>
                    <div className='title'>
                        <h2>Portfolio</h2>
                    </div>
                    <div className='img_slider'>
                        <Swiper
                            slidesPerView={2}
                            centeredSlides={false}
                            slidesPerGroupSkip={1}
                            grabCursor={false}
                            keyboard={{
                                enabled: true,
                            }}
                            scrollbar={true}
                            navigation={true}
                            modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className='slide_box'>
                                    <div className='details'>
                                        <h3>Project 1</h3>
                                        <p>Developing Skills and Projects</p>

                                    </div>
                                    <div className='img_box'>
                                        <img src='src/assets/img/4.jpg'  />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='slide_box'>
                                    <div className='details'>
                                        <h3>Project 2</h3>
                                        <p>Developing Skills and Projects</p>

                                    </div>
                                    <div className='img_box'>
                                        <img src='src/assets/img/3.jpg'  />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='slide_box'>
                                    <div className='details'>
                                        <h3>Project 3</h3>
                                        <p>Developing Skills and Projects</p>

                                    </div>
                                    <div className='img_box'>
                                        <img src='src/assets/img/2.jpg'  />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='slide_box'>
                                    <div className='details'>
                                        <h3>Project 4</h3>
                                        <p>Developing Skills and Projects</p>

                                    </div>
                                    <div className='img_box'>
                                        <img src='src/assets/img/1.jpg'  />
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Portfolio