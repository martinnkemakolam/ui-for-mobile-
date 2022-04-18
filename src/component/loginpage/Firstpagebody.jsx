import React from 'react';

import './firstpagebody.css'
import img1 from '../pictures/picture.png'
import imgn1 from '../pictures/picturen1 (1).png'
import imgn2 from '../pictures/picturen1 (2).png'
import imgn3 from '../pictures/picturen1 (3).png'
import imgf1 from '../pictures/picturef1 (1).png'
import imgf2 from '../pictures/picturef1 (2).png'
import imgf3 from '../pictures/picturef1 (3).png'
import imgc1 from '../pictures/picturec1 (2).png'
import imgc2 from '../pictures/picturec1 (3).png'
import imgc3 from '../pictures/picturec1 (1).png'
import img2 from '../pictures/picture2.png'
import img3 from '../pictures/picture3.png'
import img4 from '../pictures/picture4.png'
import { Pagination } from 'swiper';
import { EffectCube } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cube';


const data = [
    {
        name: 'latest cars',
        review: img1,
        review1: imgc1,
        review2: imgc2,
        review3: imgc3,
    },
    {
        name: 'latest fashion',
        review: img2,
        review1: imgf1,
        review2: imgf2,
        review3: imgf3,

    },
    {
        name: 'latest phones',
        review: img3,
        review1: imgn1,
        review2: imgn2,
        review3: imgn3,
    },
    {
        name: 'latest tech',
        review: img4,
        review1: img4,
        review2: img4,
        review3: img4,
    }
]
const firstpagebody = () => {
    return (
        <section className='frontpage'>
            <Swiper
                effect={"cube"}
                grabCursor={true}
                cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                }}
                className="mySwiper"
                modules={[Pagination, EffectCube]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}>
                {
                    data.map(({ name, review, review1, review2, review3 }, index) => {
                        return (
                            <SwiperSlide key={index} className="test">
                                <div className="top">
                                    <div className="curve-1">
                                        <img src={review1} alt='' />
                                    </div>
                                    <div className="curve-2">
                                        <img src={review} alt='' />
                                    </div>
                                    <div className="curve-3">
                                        <img src={review2} alt='' />
                                    </div>
                                    <div className="curve-4">
                                        <img src={review3} alt='' />
                                    </div>
                                </div>
                                <div className='bottom'>
                                    <div className="news">
                                        <h3>
                                            News
                                        </h3>
                                    </div>
                                    <h2>
                                        for the youth
                                    </h2>
                                    <article>
                                        <p>
                                            Sign up, to get the latest and most informative news on the latest {name}
                                        </p>
                                    </article>
                                </div>
                                <div className="final">
                                    <a href="#va">get started</a>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>

        </section >
    )
}

export default firstpagebody