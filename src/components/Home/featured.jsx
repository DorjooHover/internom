import { CarouselWrapper } from "react-pretty-carousel";
import Image from "next/image";
const HomeFeatured = () => {
     return (
          <CarouselWrapper items={5} mode="gallery">
               <Image src={"/img/home_1_1.jpg"} width={100} height={100} />
               <Image src={"/img/home_1_1.jpg"} width={100} height={100} />
               <Image src={"/img/home_1_1.jpg"} width={100} height={100} />
               <Image src={"/img/home_1_1.jpg"} width={100} height={100} />
          </CarouselWrapper>
     );
};

export default HomeFeatured;
