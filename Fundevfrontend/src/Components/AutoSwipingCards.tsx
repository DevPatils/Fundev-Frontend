import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import azadi from '../assets/azadi.jpg';
import 'swiper/css';
import 'swiper/css/pagination';

const AutoSwipingCards: React.FC = () => {
    const cardDetails = [
        { title: 'About', description: 'Learn more about the department and its initiatives.', imageUrl: azadi },
        { title: 'Funding', description: 'Explore funding opportunities and support schemes.', imageUrl: azadi },
        { title: 'Patent Application', description: 'Find out how to apply for patents and protect your ideas.', imageUrl: azadi },
        { title: 'Schemes', description: 'Get information on various government schemes available.', imageUrl: azadi },
        { title: 'Meetups', description: 'Join meetups and events organized by the department.', imageUrl: azadi },
    ];

    return (
        <div className="swiper-container max-w-lg mx-auto mt-6" style={{ height: '300px' }}>
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
                            className="p-6 rounded-lg shadow-lg text-black flex flex-col justify-center items-center"
                            style={{
                                backgroundImage: `url(${card.imageUrl})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                height: '100%',
                                minHeight: '200px',
                                width: '100%',
                            }}
                        >
                            <h2 className="text-2xl font-bold mb-2">{card.title}</h2>
                            <p className="text-lg">{card.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default AutoSwipingCards;
