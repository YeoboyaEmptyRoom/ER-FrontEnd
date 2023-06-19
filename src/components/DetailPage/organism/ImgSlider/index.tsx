import Image from 'next/image';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import roomImg from '../../../../../public/static/png/roomImg.png';

const ImgSlider = () => {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={4}
        loop={true}
        navigation={true}
        modules={[Navigation]}
      >
        <SwiperSlide>
          <Image src={roomImg} alt="RoomImg" width="150" height="150" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={roomImg} alt="RoomImg" width="150" height="150" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={roomImg} alt="RoomImg" width="150" height="150" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={roomImg} alt="RoomImg" width="150" height="150" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={roomImg} alt="RoomImg" width="150" height="150" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ImgSlider;
