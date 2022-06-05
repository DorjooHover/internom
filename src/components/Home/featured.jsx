import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";

const HomeFeatured = () => {
     return (
          <Swiper
               slidesPerView={5}
               spaceBetween={30}
               slidesPerGroup={1}
               centeredSlides={true}
               autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
               }}
               grabCursor={true}
               loop={true}
               // loopFillGroupWithBlank={true}
               pagination={{
                    clickable: true,
               }}
               navigation={true}
               modules={[Pagination, Navigation, Autoplay]}
               className="home_featured_swiper"
          >
               <SwiperSlide>Slide 1</SwiperSlide>
               <SwiperSlide>Slide 2</SwiperSlide>
               <SwiperSlide>Slide 3</SwiperSlide>
               <SwiperSlide>Slide 4</SwiperSlide>
               <SwiperSlide>Slide 5</SwiperSlide>
               <SwiperSlide>Slide 6</SwiperSlide>
               <SwiperSlide>Slide 7</SwiperSlide>
               <SwiperSlide>Slide 8</SwiperSlide>
               <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
     );
};

export default HomeFeatured;
