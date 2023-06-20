'use client';

import ImgSlider from '@/components/DetailPage/organism/ImgSlider';
import InfoLayer from '@/components/DetailPage/organism/InfoLayer';
import { ContentWrapper } from '@/components/DetailPage/template/style';
import Header from '@/components/Header/organisms';

const RoomDetail = () => {
  return (
    <>
      <Header />
      <ContentWrapper>
        <ImgSlider />
        <InfoLayer />
      </ContentWrapper>
    </>
  );
};

export default RoomDetail;
