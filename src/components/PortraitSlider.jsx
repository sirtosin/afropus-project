// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import image from '../assets/p1.jpg';
import image1 from '../assets/p2.jpg';
import image2 from '../assets/p3.jpg';
import image3 from '../assets/p4.jpg';
import image4 from '../assets/p5.jpg';
import image5 from '../assets/p6.jpg';
import image6 from '../assets/p7.jpg';
import image7 from '../assets/p8.jpg';
import image8 from '../assets/p9.jpg';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
export const PortraitSlider = () => {
    SwiperCore.use([Autoplay]);
    return (
        <Swiper
            className='p-9'
            spaceBetween={15}
            slidesPerView={5}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Autoplay]}
            autoplay={{
                delay: 8000,
                disableOnInteraction: false,
            }}
            loop={true}
            speed={2000}        >
            <SwiperSlide>
                <img src={image} className='w-[100%] h-52 object-cover shadow-lg rounded-lg' alt='backgroung-image' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={image1} className='w-[100%] h-52 object-cover shadow-lg rounded-lg' alt='backgroung-image' />
            </SwiperSlide>

            <SwiperSlide>
                <img src={image2} className='w-[100%] h-52 object-cover shadow-lg rounded-lg' alt='backgroung-image' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={image3} className='w-[100%] h-52 object-cover shadow-lg rounded-lg' alt='backgroung-image' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={image4} className='w-[100%] h-52 object-cover shadow-lg rounded-lg' alt='backgroung-image' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={image5} className='w-[100%] h-52 object-cover shadow-lg rounded-lg' alt='backgroung-image' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={image6} className='w-[100%] h-52 object-cover shadow-lg rounded-lg' alt='backgroung-image' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={image7} className='w-[100%] h-52 object-cover shadow-lg rounded-lg' alt='backgroung-image' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={image8} className='w-[100%] h-52 object-cover shadow-lg rounded-lg' alt='backgroung-image' />
            </SwiperSlide>

        </Swiper>
    );
};
