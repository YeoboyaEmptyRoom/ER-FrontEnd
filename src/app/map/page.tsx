'use client';

import Header from '@/components/Header/organisms';
import RoomContent from '@/components/MapPage/organisms/RoomContent';
import { MainTemplate } from '@/components/MapPage/template/style';

const Map = () => {
  return (
    <>
      <Header />
      <MainTemplate>
        <RoomContent />
      </MainTemplate>
    </>
  );
};

export default Map;
