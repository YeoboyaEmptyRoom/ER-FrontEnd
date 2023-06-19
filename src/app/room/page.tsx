'use client';

import 'swiper/css';
import Header from '@/components/Header/organisms';
import { BottomWrapper } from '@/components/DetailPage/template/style';
import ImgSlider from '@/components/DetailPage/organism/ImgSlider';

const RoomDetail = () => {
  return (
    <>
      <Header />
      <BottomWrapper>
        <ImgSlider />
      </BottomWrapper>
    </>
  );
};

export default RoomDetail;
