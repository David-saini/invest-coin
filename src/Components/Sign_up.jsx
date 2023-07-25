import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import man_img from '../assets/png/man-giving-introduction_1.png'

const Sign_up = () => {
    return (
        <div className='py-5'>
            <Container className='py-5'>
                <h1 className='d-flex align-items-center justify-content-center  open-sans fw-400 fs-48px' data-aos="fade-down" data-aos-delay="500" data-aos-duration="1000" data-aos-easing="linear">Напишите нам</h1>
                <div className='d-flex align-items-center justify-content-center text-center open-sans fw-400 fs-28px'>
                    <p className='max-1024px' data-aos="fade-down" data-aos-delay="500" data-aos-duration="1000" data-aos-easing="linear">Вопросы, отзывы, пожелания и жалобы. Мы всегда стараемся ответить быстро и нам важно узнать ваше мнение.</p>
                </div>

                <Row className='column-reverse'>

                    <Col lg={6} className='pt-5' data-aos="fade-right" data-aos-delay="500" data-aos-duration="1000" data-aos-easing="linear">
                        <div className='sign-up-box p-3'>
                            <input type="text" placeholder='Ваше имя' className='ps-2 py-3 border-none poppins fw-500 fs-24px' />
                        </div>
                        <div className='py-lg-5 py-4'>
                            <div className='sign-up-box p-3'>
                                <input type="text" placeholder='Страна' className='ps-2 py-3 border-none poppins fw-500 fs-24px' />
                            </div>
                        </div>

                        <div className='feedback-box p-4'>
                            <textarea type="text" placeholder='Сообщение' className='border-none w-100 min-height resize poppins fw-500 fs-24px' />
                        </div>

                        <div className='pt-5 ps-1'>
                            <p className='mb-0 sign-up_btn py-3 open-sans fs-20px fw-700'>Отправить</p>
                        </div>
                    </Col>

                    <Col lg={6} md={10} data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1000" data-aos-easing="linear">
                        <img className='w-100' src={man_img} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Sign_up