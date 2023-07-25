import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import businessman from '../assets/png/businessman.png'
import girl_img_1 from '../assets/png/Content-img_1.png'
import girl_img_2 from '../assets/png/Content-img_2.png'
import video_play_icon from '../assets/png/video_play_icon.png'

const Content_sec = () => {
    return (
        <div className='py-lg-5 py-sm-4 py-3 overflow-hidden' >
            <Container>
                <Row className='d-flex align-items-center justify-content-between'>
                    <Col lg={6} data-aos="fade-up-right" data-aos-delay="500" data-aos-duration="1000" data-aos-easing="linear">
                        <Row>
                            <Col xs={4} className='px-0' >
                                <img className='w-100' src={businessman} alt="" />
                            </Col>
                            <Col xs={4} className='position-relative ps-0'>
                                <img className='icon-absolute_1' src={video_play_icon} alt="" />
                                <img className='w-100' src={girl_img_1} alt="" />
                            </Col>
                            <Col xs={4} className='pt-5 mt-5 pe-0 position-relative'>
                                <img className='icon-absolute_2' src={video_play_icon} alt="" />
                                <img className='w-100' src={girl_img_2} alt="" />
                            </Col>
                        </Row>
                    </Col>

                    <Col lg={5} className='pt-5 pt-lg-0' data-aos="fade-up-left" data-aos-delay="500" data-aos-duration="1000" data-aos-easing="linear">
                        <h1 className='open-sans fw-700 fs-20px fc-dark mb-0'>Обучение?</h1>
                        <p className='open-sans fw-400 fs-36px mb-0 py-3'>Конечно! Индивидуальные уроки тем кто хочет научиться инвестировать.</p>
                        <p className='open-sans fw-700 fs-20px fc-dark mb-0'>Подробнее посмотрите на видео</p>
                        <p className='open-sans fw-400 fs-18px mb-0'>Или напишите менеджеру</p>
                        <div className='pt-4 mt-2'>
                            <p className='btn_1 open-sans fw-400 fs-20px'>Написать</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Content_sec