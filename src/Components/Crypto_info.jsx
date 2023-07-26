import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import calender from '../assets/png/calender.png'
import timer from '../assets/png/timer.png'
import wallet from '../assets/png/wallet.png'
import Slider from "react-slick";
import slider_img_1 from '../assets/png/slider_img_1.png'
import slider_img_2 from '../assets/png/slider_img_2.png'
import slider_img_3 from '../assets/png/slider_img_3.png'
import video_play_icon from '../assets/png/video_play-slider_icon.png'

const Crypto_info = () => {
    var settings = {
        centerMode: true,
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 2.3,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2.4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            },]
    }
    return (
        <div className='py-5 overflow-hidden'>
            <Container className='py-5'>
                <div data-aos="zoom-in" data-aos-delay="250" data-aos-duration="1000" data-aos-easing="linear" >
                    <h1 className='open-sans fs-48px fw-400 fc-dark d-flex align-items-center justify-content-center'>Как “Invest Coin” работает? </h1>
                    <div className='d-flex align-items-center justify-content-center text-center'>
                        <p className='max-1104px open-sans fw-400 fs-28px fc-light'>Invest Coin - это команда оптыных инвесторов, аналитиков и программистов. Мы работаем на площадках криптовалют (и не только) уже более 4 года и имеем конкурентоспособное портфолио. Все встречи, общения и договоренности с нашими партнерами (клиентами) проходят в прозрачной форме.</p>
                    </div>
                </div>

                <Row className='pt-5 align-items-center justify-content-center'>
                    <Col md={3} sm={6} className='d-flex align-items-center justify-content-center' data-aos="flip-right" data-aos-delay="500" data-aos-duration="1000" data-aos-easing="linear" >
                        <div className='box'>
                            <div className=' d-flex align-items-center justify-content-center'>
                                <img src={calender} alt="" />
                            </div>
                            <div className=' d-flex align-items-center justify-content-center'>
                                <p className='open-sans fw-700 fs-20 mb-0 fc-dark'>Надежность</p>
                            </div>
                            <div className=' d-flex align-items-center justify-content-center text-center'>
                                <p className='open-sans fw-400 fs-18 mb-0 fc-dark max-210px'>Slate helps you see how
                                    many more days you need
                                    to work to reach your
                                    financial goal.</p>
                            </div>
                        </div>
                    </Col>

                    <Col md={3} sm={6} className='d-flex align-items-center justify-content-center pt-5 pt-sm-0' data-aos="flip-down" data-aos-delay="500" data-aos-duration="1000" data-aos-easing="linear" >
                        <div className='box'>
                            <div className=' d-flex align-items-center justify-content-center'>
                                <img src={timer} alt="" />
                            </div>
                            <div className=' d-flex align-items-center justify-content-center'>
                                <p className='open-sans fw-700 fs-20 mb-0 fc-dark'>Опыт</p>
                            </div>
                            <div className=' d-flex align-items-center justify-content-center text-center'>
                                <p className='open-sans fw-400 fs-18 mb-0 fc-dark max-210px'>Slate helps you see how
                                    many more days you need
                                    to work to reach your
                                    financial goal.</p>
                            </div>
                        </div>
                    </Col>

                    <Col md={3} className='d-flex align-items-center justify-content-center pt-5 pt-md-0' data-aos="flip-left" data-aos-delay="500" data-aos-duration="1000" data-aos-easing="linear" >
                        <div className='box'>
                            <div className=' d-flex align-items-center justify-content-center'>
                                <img src={wallet} alt="" />
                            </div>
                            <div className=' d-flex align-items-center justify-content-center'>
                                <p className='open-sans fw-700 fs-20 mb-0 fc-dark'>Прозрачность</p>
                            </div>
                            <div className=' d-flex align-items-center justify-content-center text-center'>
                                <p className='open-sans fw-400 fs-18 mb-0 fc-dark max-210px'>Slate helps you see how
                                    many more days you need
                                    to work to reach your
                                    financial goal.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Slider {...settings} className='py-5' >

                <div className='px-sm-5 px_4 py-5 position-relative' data-aos="zoom-in" data-aos-delay="250" data-aos-duration="1000" data-aos-easing="linear" >
                    <img className='w-56px absolute_1' src={video_play_icon} alt="" />
                    <img className='w-100 radius' src={slider_img_1} alt="" />
                </div>



                <div className='px-sm-5 px_4 py-5 position-relative' data-aos="zoom-in" data-aos-delay="250" data-aos-duration="1000" data-aos-easing="linear" >
                    <img className='w-56px absolute_1' src={video_play_icon} alt="" />
                    <img className='w-100 radius ' src={slider_img_2} alt="" />
                </div>



                <div className='px-sm-5 px_4 py-5 position-relative' data-aos="zoom-in" data-aos-delay="250" data-aos-duration="1000" data-aos-easing="linear" >
                    <img className='w-56px absolute_1' src={video_play_icon} alt="" />
                    <img className='w-100 radius' src={slider_img_3} alt="" />
                </div>

            </Slider>
        </div>
    )
}

export default Crypto_info