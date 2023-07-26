import React from 'react'
import bitcoin from '../assets/png/bitcoin.png'
import litecoin from '../assets/png/Litecoin.png'
import tezos from '../assets/png/Tezos.png'
import etherium from '../assets/png/Ethereum.png'
import chainlink from '../assets/png/Chainlink.png'
import ton from '../assets/png/Ton.png'
import { Container } from 'react-bootstrap';
const Currency_type = () => {
    return (
        <div className='pb-5'>
            <div className='py-5'>
                <div className='open-sans fw-400 fs-48px d-flex align-items-center justify-content-center pt-5 fc-dark' data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1000" data-aos-easing="linear">Наши площадки</div>
                <div className='d-flex align-items-center justify-content-center open-sans fs-28px fw-400 text-center py-3 fc-dark' data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1000" data-aos-easing="linear">
                    <p className='max-976px'>Наш проект работает только с проверенными площадками для инвестиций, чтобы максимально снизить риски.</p>
                </div>

                <Container className='timeline-1' data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000" data-aos-easing="linear">
                    <div className='py-5 slider-container'>
                        <div className='d-flex align-items-center justify-content-between slider pt-4'>
                            <div className=''>
                                <img className='w-150px' src={bitcoin} alt="" />
                            </div>
                            <div className=''>
                                <img className='w-150px' src={litecoin} alt="" />
                            </div>
                            <div className=''>
                                <img className='w-150px' src={tezos} alt="" />
                            </div>
                            <div className=''>
                                <img className='w-150px' src={etherium} alt="" />
                            </div>
                            <div className=''>
                                <img className='w-150px' src={chainlink} alt="" />
                            </div>
                            <div className=''>
                                <img className='w-150px' src={ton} alt="" />
                            </div>
                            <div className=''>
                                <img className='w-150px' src={bitcoin} alt="" />
                            </div>
                            <div className=''>
                                <img className='w-150px' src={litecoin} alt="" />
                            </div>
                            <div className=''>
                                <img className='w-150px' src={tezos} alt="" />
                            </div>
                            <div className=''>
                                <img className='w-150px' src={etherium} alt="" />
                            </div>
                            <div className=''>
                                <img className='w-150px' src={chainlink} alt="" />
                            </div>
                            <div className=''>
                                <img className='w-150px' src={ton} alt="" />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Currency_type