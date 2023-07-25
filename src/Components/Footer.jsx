import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../assets/png/logo.png';
import up_arrow from '../assets/png/Up_arrow.png';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className='bg overflow-hidden'>
            <Container className='py-5'>
                <Row className='justify-content-between py-5'>

                    <div className='d-lg-flex align-items-baseline justify-content-between gap-5'>
                        <Col lg={2} data-aos="fade-right" data-aos-delay="500" data-aos-duration="1000" data-aos-easing="linear">
                            <img src={logo} alt="" />
                        </Col>
                        <Col lg={3} className='pt-4 pt-lg-0' data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000" data-aos-easing="linear">
                            <p className='text-white jost fs-24px fw-400'> 123 Market St. #22B
                                Charlottesville, California 44635</p>
                            <div className='timeline'>
                                <p className='mb-0 text-white poppins fs-14px fw-400'>contact@exmpl.page</p></div>
                        </Col>



                        <Col lg={5} className='pt-5 pt-lg-0' data-aos="fade-left" data-aos-delay="500" data-aos-duration="1000" data-aos-easing="linear">
                            <Row>
                                <Col xs={4}>
                                    <ul className='ps-0'>
                                        <li className='text-white poppins fs-12px fw-400 pt-1'>About</li>
                                        <li className='pt-2'><Link className='text-white poppins fs-12px fw-400'>Growers</Link></li>
                                        <li className='pt-2'><Link className='text-white poppins fs-12px fw-400'>Merchants</Link></li>
                                        <li className='pt-2'><Link className='text-white poppins fs-12px fw-400'>Partners</Link></li>
                                        <li className='pt-2'><Link className='text-white poppins fs-12px fw-400'>Contact</Link></li>

                                    </ul>
                                </Col>
                                <Col xs={4}>
                                    <ul className='ps-0'>
                                        <li><Link className='text-white poppins fs-12px fw-400'>Facebook</Link></li>
                                        <li className='pt-2'><Link className='text-white poppins fs-12px fw-400'>Telegram</Link></li>
                                        <li className='pt-2'><Link className='text-white poppins fs-12px fw-400'>Watsapp</Link></li>
                                        <li className='pt-2'><Link className='text-white poppins fs-12px fw-400'>Instagram</Link></li>
                                    </ul>
                                </Col>

                                <Col xs={2}>
                                    <img className='w-52px' src={up_arrow} alt="" />
                                </Col>
                            </Row>
                        </Col>
                    </div>
                </Row>
                <div className='py-2' data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1000" data-aos-easing="linear">
                    <p className='d-flex align-items-center justify-content-center text-white py-5 poppins fs-12px fw-400'>© 2023 Invest Coin. All rights reserved.</p>
                </div>
            </Container>
        </div>
    )
}

export default Footer