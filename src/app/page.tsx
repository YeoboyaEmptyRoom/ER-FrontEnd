'use client';

import Header from '@/components/Header/organisms';
import Banner from '@/components/Home/molecules/Banner';
import RoomContent from '@/components/Home/organism/RoomContent';

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <RoomContent />
    </>
  );
}
