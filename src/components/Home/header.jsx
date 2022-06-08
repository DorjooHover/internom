import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Pagination, Autoplay } from "swiper";
// import "./header.css";
import { motion } from "framer-motion";

const header = {
     hidden: {
          x: -20,
     },
     visible: {
          x: 0,
     },
};
const HomeHeader = () => {
     return (
          <>
               <Swiper
                    grabCursor={true}
                    effect={"creative"}
                    pagination={{
                         clickable: true,
                    }}
                    autoplay={{
                         delay: 2500,
                         disableOnInteraction: false,
                    }}
                    modules={[EffectCreative, Pagination, Autoplay]}
                    loop={true}
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
                    className="home_header_swiper"
               >
                    <SwiperSlide>
                         <m.div
                              variant={header}
                              initial="hidden"
                              animate="visible"
                         >
                              {" "}
                              Slide 1
                         </m.div>
                    </SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
               </Swiper>
          </>
     );
};

export default HomeHeader;
