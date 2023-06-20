import Image from 'next/image';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import roomImg from '../../../../../public/static/png/roomImg.png';
import { Layer } from './style';

const ImgSlider = () => {
  return (
    <Layer>
      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        loop={true}
        navigation={true}
        modules={[Navigation]}
      >
        <SwiperSlide>
          <Image src={roomImg} alt="RoomImg" width="250" height="250" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={roomImg} alt="RoomImg" width="250" height="250" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={roomImg} alt="RoomImg" width="250" height="250" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={roomImg} alt="RoomImg" width="250" height="250" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={roomImg} alt="RoomImg" width="250" height="250" />
        </SwiperSlide>
      </Swiper>
    </Layer>
  );
};

export default ImgSlider;
