import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from '../assets/png/logo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { Cross, Instagram, MenuIcon, Telegram, Whatsapp } from './Icon'

const Header = () => {
    const [menu, setMenu] = useState(false);
    return (
        <div className='header-bg'>
            <Container className='pt-4'>

                <div className='d-flex align-items-center justify-content-between pt-lg-5 pb-5'>
                    <div className='d-flex align-items-center gap-5'>
                        <img src={logo} alt="" />

                        <div className='d-lg-none d-block'>
                            <div className={`${menu ? 'show-nav' : 'nav-fix'}`}>
                                <div className='z-index-100 position-relative'
                                    onClick={() => setMenu(false)}>
                                    <div className='absolute-cross'>
                                        <Link><Cross /></Link>
                                    </div>
                                </div>
                            </div>

                            <div className={`${menu ? 'show-nav' : 'nav-fix'}`}>
                                <div className='z-index-100'
                                    onClick={() => setMenu(false)}>
                                    <div className='absolute-cross'>
                                        <Link><Cross /></Link>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center justify-content-center'>
                                    <ul>
                                        <li className='mt-4'><Link className='text-white fs-22px fw-300 open-sans'>Особенности</Link></li>
                                        <li className='mt-4'><Link className='text-white fs-22px fw-300 open-sans'>Отзывы</Link></li>
                                        <li className='mt-4'><Link className='text-white fs-22px fw-300 open-sans'>Инвестиция</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='d-none d-lg-block'>
                            <ul className='d-flex align-items-center gap-5 pe-3 '>
                                <li><Link className='text-white fs-22px fw-300 open-sans'>Особенности</Link></li>
                                <li><Link className='text-white fs-22px fw-300 open-sans'>Отзывы</Link></li>
                                <li><Link className='text-white fs-22px fw-300 open-sans'>Инвестиция</Link></li>
                            </ul>
                        </div>
                    </div>

                    <ul className='d-sm-flex d-none align-items-center gap-4'>
                        <li><Link to="https://www.instagram.com/" target='_'><Instagram /></Link></li>
                        <li><Link to="https://www.telegram.com/" target='_'><Telegram /></Link></li>
                        <li><Link to="https://www.whatsapp.com/" target='_'><Whatsapp /></Link></li>
                    </ul>
                    <div className='d-lg-none'>
                        <Link onClick={() => setMenu(true)}>
                            <MenuIcon /></Link>
                    </div>
                </div>

                <div className='py_5' data-aos="zoom-in-left" data-aos-delay="250" data-aos-duration="500" data-aos-easing="linear">
                    <Row className='py-5'>
                        <Col></Col>
                        <Col lg={6} className='py-5'>
                            <div className='py-5'>
                                <h1 className='mb-0 fc-voilet open-sans fs-28px fw-400 pt-3'>Лучший проект</h1>
                                <p className='open-sans fs-75px fw-800 mb-0 fc-voilet'>Крипто</p>
                                <p className='text-white open-sans fs-75px fw-800 mb-0 m_-1'>Инвестиции</p>
                                <p className='mb-0 open-sans fs-20px fw-400 text-white'>Международный проект инвестиции в криптовалюту и не только. Мы заработаем если вы заработаете!</p>
                                <div className='py-4 d-xl-flex align-items-center gap-4'>
                                    <p className='button_2 open-sans fs-20px fw-700 px-5'>Присоединиться</p>
                                    <p className='button_3 open-sans fs-20px fw-700 px-5'>Подробнее</p>
                                </div>
                                <div className='d-xl-flex align-items-center'>
                                    <div className='d-flex align-items-center gap-2 pe-4'>
                                        <p className='open-sans fw-700 fs-50px fc-voilet'>360</p>
                                        <div>
                                            <p className='open-sans fw-400 fs-14px fc-voilet mb-0'>Довольных</p>
                                            <p className='open-sans fw-400 fs-14px fc-voilet'>клиентов</p>
                                        </div>
                                    </div>

                                    <div className='d-flex align-items-center gap-2 px-xl-5'>
                                        <p className='open-sans fw-700 fs-50px fc-voilet'>330K</p>
                                        <div>
                                            <p className='open-sans fw-400 fs-14px fc-voilet mb-0'>заработанных
                                            </p>
                                            <p className='open-sans fw-400 fs-14px fc-voilet'>долларов</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container >
        </div >
    )
}

export default Header