'use client';

import Header from '@/components/Header/organisms';
import MapBox from '@/components/MapPage/organisms/MapBox';
import RoomContent from '@/components/MapPage/organisms/RoomContent';
import { MainTemplate } from '@/components/MapPage/template/style';

const Map = () => {
  return (
    <>
      <Header />
      <MainTemplate>
        <RoomContent />
        <MapBox />
      </MainTemplate>
    </>
  );
};

export default Map;
