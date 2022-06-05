import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Pagination, Autoplay } from "swiper";
// import "./header.css";
const HomeHeader = () => {
     return (
          <>
               <Swiper
                    grabCursor={true}
                    effect={"creative"}
                    creativeEffect={{
                         prev: {
                              shadow: true,
                              origin: "left center",
                              translate: ["-5%", 0, -200],
                              rotate: [0, 100, 0],
                         },
                         next: {
                              origin: "right center",
                              translate: ["5%", 0, -200],
                              rotate: [0, -100, 0],
                         },
                    }}
                    modules={[EffectCreative, Pagination, Autoplay]}
                    autoplay={true}
                    pagination={true}
                    loop={true}
                    pagination={{
                         clickable: true,
                    }}
                    autoplay={{
                         delay: 2500,
                         disableOnInteraction: false,
                    }}
                    className="home_header_swiper"
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
          </>
     );
};

export default HomeHeader;
