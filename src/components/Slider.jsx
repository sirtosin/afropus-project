// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import image from '../assets/hero-9.jpg';
import image1 from '../assets/hero-6.jpg';
import image2 from '../assets/hero-8.jpg';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
export const Slider = () => {
    SwiperCore.use([Autoplay]);
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Autoplay]}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            loop={true}
            speed={2000}        >
            <SwiperSlide>
                <img src={image} className='w-[100%] h-72 md:h-[550px] object-cover' alt='backgroung-image' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={image1} className='w-[100%] h-72 md:h-[550px] object-cover' alt='backgroung-image' />
            </SwiperSlide>

            <SwiperSlide>
                <img src={image2} className='w-[100%] h-72 md:h-[550px] object-cover' alt='backgroung-image' />
            </SwiperSlide>

        </Swiper>
    );
};
