import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import macbook from '../assets/png/Macbook Pro.png'

const About = () => {
    return (
        <div className='py-5 overflow-hidden'>
            <Container className='py-5'>
                <Row className='column-reverse align-items-center justify-content-between' data-aos="fade-right" data-aos-delay="500" data-aos-duration="1000" data-aos-easing="linear" >
                    <Col lg={6}>
                        <h1 className='open-sans fw-400 fs-48px fc-dark pb-3'>Invest Coin - это про
                            безопасность!</h1>
                        <p className='fc-light open-sans fs-22px fw-400 mb-0'>И как выражается безопасность?Чем меньше вложений в инвестиции, тем больше риска потерпеть неудачу. Чем больше вложений, тем тем меньше риска.</p>
                        <p className='fc-light open-sans fs-22px fw-400'>Безопасность инвестии означает что ваши вложения (10$ или 100$) отдельно не инвестируются. Наши опытные инвесторы делают ставки с общего счета, где на балансе всегда больше 100 000$.</p>
                        <p className='fc-light open-sans fs-22px fw-400'>Нажмите на кнопку ниже и узнайте все лично от наших менеджеров</p>
                        <div className='pt-5'>
                            <p className='mb-0 button_2 open-sans fs-20px fw-700'>Узнать подробнее</p>
                        </div>
                    </Col>

                    <Col lg={6} md={8} sm={10} xs={12} className='pb-5 pb-lg-0 ps-5' data-aos="fade-left" data-aos-delay="500" data-aos-duration="1000" data-aos-easing="linear">
                        <img className='w-100' src={macbook} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About