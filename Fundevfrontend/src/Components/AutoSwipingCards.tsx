import React  from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpg';
import p3 from '../assets/p3.jpg';
import p4 from '../assets/p4.jpg';

import 'swiper/css';
import 'swiper/css/pagination';

const AutoSwipingCards: React.FC = () => {
    const cardDetails = [
        { title: '', description: '', imageUrl: p1 },
        { title: '', description: '', imageUrl: p2 },
        { title: '', description: '', imageUrl: p3 },
        { title: '', description: '', imageUrl: p4 },
    ];

    return (
        <div className="swiper-container max-w-2xl mx-auto mt-6" style={{ height: '340px' }}>
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                className="swiper-wrapper"
            >
                {cardDetails.map((card, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="p-6 rounded-sm shadow-lg text-black flex flex-col justify-center items-center"
                            style={{
                                backgroundImage: `url(${card.imageUrl})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                height: '100%',
                                minHeight: '200px',
                                width: '100%',
                            }}
                        >
                            <div className='justify-items-start'>
                                <h2 className="text-2xl font-bold mb-2">{card.title}</h2>

                                <p className="text-lg font-semibold">{card.description}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default AutoSwipingCards;
