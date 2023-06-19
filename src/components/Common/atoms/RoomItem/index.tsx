import * as S from './style';
import roomImg from '../../../../../public/static/png/roomImg.png';

const RoomItem = () => {
  return (
    <S.Layer>
      <S.RoomImg src={roomImg} alt="RoomImg" width="150" height="150" />
      <S.RoomInfoBox>
        <h2>월세 500/40</h2>
        <p>23.14m^2, 7층</p>
        <p>구로구 구로동</p>
        <p>분리형 원룸</p>
      </S.RoomInfoBox>
    </S.Layer>
  );
};

export default RoomItem;
