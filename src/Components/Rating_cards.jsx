import React from 'react'
import { Container, Row } from 'react-bootstrap'
import rating_card_img from '../assets/png/rating-card-img.png'
import Slider from "react-slick";
import star_1 from '../assets/png/star_1.png'
import star_2 from '../assets/png/star_2.png'
const Rating_cards = () => {
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
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

    };
    return (
        <div className='py-5 overflow-hidden'>
            <Container className='py-5'>
                <div data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1000" data-aos-easing="linear">
                    <h1 className='d-flex align-items-center justify-content-center open-sans fw-400 fs-48px fc-darkc '>Наши площадки</h1>
                    <div className='d-flex align-items-center justify-content-center'>
                        <p className='max-976px open-sans fw-400 fs-28px text-center fc-light'>Каждый отзыв по-особенному  ценный для нас. Ведь для этого было проделано большой совместный путь. Успех состоит из доверие, готовности к развитию и перемен.</p>
                    </div>
                </div>
                <Slider {...settings} className='py-5'>

                    <div className='px-4 d-flex justify-content-center' data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1000" data-aos-easing="linear">
                        <div className='card'>
                            <div className='d-flex align-items-center justify-content-between px-3 pt-4'>
                                <div className='d-flex align-items-center gap-2'>
                                    <img src={rating_card_img} alt="" />
                                    <div>
                                        <p className='mb-0 text-white fs-18 open-sans fw-700'>Али</p>
                                        <p className='mb-0 text-white open-sans fs-12px fw-400'>Узбекистан</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-1 pt-4'>
                                    <div>
                                        <img src={star_1} alt="" />
                                    </div>
                                    <div>
                                        <img src={star_1} alt="" />
                                    </div>
                                    <div>
                                        <img src={star_1} alt="" />
                                    </div>
                                    <div>
                                        <img src={star_1} alt="" />
                                    </div>
                                    <div>
                                        <img src={star_2} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className='px-5 text-white pt-4 pb-3 open-sans ffs-16px fw-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu.</p>
                            </div>
                        </div>
                    </div>

                    <div className='px-4  d-flex justify-content-center' data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1000" data-aos-easing="linear">
                        <div className='card'>
                            <div className='d-flex align-items-center justify-content-between px-3 pt-4'>
                                <div className='d-flex align-items-center gap-2'>
                                    <img src={rating_card_img} alt="" />
                                    <div>
                                        <p className='mb-0 text-white fs-18 open-sans fw-700'>Али</p>
                                        <p className='mb-0 text-white open-sans fs-12px fw-400'>Узбекистан</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-1 pt-4'>
                                    <div>
                                        <img src={star_1} alt="" />
                                    </div>
                                    <div>
                                        <img src={star_1} alt="" />
                                    </div>
                                    <div>
                                        <img src={star_1} alt="" />
                                    </div>
                                    <div>
                                        <img src={star_1} alt="" />
                                    </div>
                                    <div>
                                        <img src={star_2} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className='px-5 text-white pt-4 pb-3 open-sans ffs-16px fw-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu.</p>
                            </div>
                        </div>
                    </div>

                    <div className='px-4  d-flex justify-content-center' data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1000" data-aos-easing="linear">
                        <div className='card'>
                            <div className='d-flex align-items-center justify-content-between px-3 pt-4'>
                                <div className='d-flex align-items-center gap-2'>
                                    <img src={rating_card_img} alt="" />
                                    <div>
                                        <p className='mb-0 text-white fs-18 open-sans fw-700'>Али</p>
                                        <p className='mb-0 text-white open-sans fs-12px fw-400'>Узбекистан</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-1 pt-4'>
                                    <div>
                                        <img src={star_1} alt="" />
                                    </div>
                                    <div>
                                        <img src={star_1} alt="" />
                                    </div>
                                    <div>
                                        <img src={star_1} alt="" />
                                    </div>
                                    <div>
                                        <img src={star_1} alt="" />
                                    </div>
                                    <div>
                                        <img src={star_2} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className='px-5 text-white pt-4 pb-3 open-sans ffs-16px fw-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu.</p>
                            </div>
                        </div>
                    </div>

                    <div className='px-4  d-flex justify-content-center' data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1000" data-aos-easing="linear">
                        <div className='card'>
                            <div className='d-flex align-items-center justify-content-between px-3 pt-4'>
                                <div className='d-flex align-items-center gap-2'>
                                    <img src={rating_card_img} alt="" />
                                    <div>
                                        <p className='mb-0 text-white fs-18 open-sans fw-700'>Али</p>
                                        <p className='mb-0 text-white open-sans fs-12px fw-400'>Узбекистан</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-1 pt-4'>
                                    <div>
                                        <img src={star_1} alt="" />
                                    </div>
                                    <div>
                                        <img src={star_1} alt="" />
                                    </div>
                                    <div>
                                        <img src={star_1} alt="" />
                                    </div>
                                    <div>
                                        <img src={star_1} alt="" />
                                    </div>
                                    <div>
                                        <img src={star_2} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className='px-5 text-white pt-4 pb-3 open-sans ffs-16px fw-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu.</p>
                            </div>
                        </div>
                    </div>

                    <div className='px-4  d-flex justify-content-center' data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1000" data-aos-easing="linear">
                        <div className='card'>
                            <div className='d-flex align-items-center justify-content-between px-3 pt-4'>
                                <div className='d-flex align-items-center gap-2'>
                                    <img src={rating_card_img} alt="" />
                                    <div>
                                        <p className='mb-0 text-white fs-18 open-sans fw-700'>Али</p>
                                        <p className='mb-0 text-white open-sans fs-12px fw-400'>Узбекистан</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-1 pt-4'>
                                    <div>
                                        <img src={star_1} alt="" />
                                    </div>
                                    <div>
                                        <img src={star_1} alt="" />
                                    </div>
                                    <div>
                                        <img src={star_1} alt="" />
                                    </div>
                                    <div>
                                        <img src={star_1} alt="" />
                                    </div>
                                    <div>
                                        <img src={star_2} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className='px-5 text-white pt-4 pb-3 open-sans ffs-16px fw-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu.</p>
                            </div>
                        </div>
                    </div>

                    <div className='px-4  d-flex justify-content-center' data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1000" data-aos-easing="linear">
                        <div className='card'>
                            <div className='d-flex align-items-center justify-content-between px-3 pt-4'>
                                <div className='d-flex align-items-center gap-2'>
                                    <img src={rating_card_img} alt="" />
                                    <div>
                                        <p className='mb-0 text-white fs-18 open-sans fw-700'>Али</p>
                                        <p className='mb-0 text-white open-sans fs-12px fw-400'>Узбекистан</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-1 pt-4'>
                                    <div>
                                        <img src={star_1} alt="" />
                                    </div>
                                    <div>
                                        <img src={star_1} alt="" />
                                    </div>
                                    <div>
                                        <img src={star_1} alt="" />
                                    </div>
                                    <div>
                                        <img src={star_1} alt="" />
                                    </div>
                                    <div>
                                        <img src={star_2} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className='px-5 text-white pt-4 pb-3 open-sans ffs-16px fw-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu.</p>
                            </div>
                        </div>
                    </div>



                </Slider>
            </Container>
        </div>
    )
}

export default Rating_cards