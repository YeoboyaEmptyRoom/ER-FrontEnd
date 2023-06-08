import Image from 'next/image';
import BannerImg from 'public/static/png/banner.png';
import { Layer } from './style';

const Banner = () => {
  return (
    <Layer>
      <Image src={BannerImg.src} alt="banner img" fill />
      <h2>전국의 빈 방이 궁금하신 분들</h2>
      <h2>원하시는 빈 방을 찾으실 때 까지 노력하겠습니다!</h2>
    </Layer>
  );
};

export default Banner;
