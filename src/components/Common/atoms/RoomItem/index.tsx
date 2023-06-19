import * as S from './style';
import roomImg from '../../../../../public/static/png/roomImg.png';
import { RoomType } from '@/types/components/Room';
interface Props {
  data: RoomType;
}
const RoomItem = ({ data }: Props) => {
  return (
    <S.Layer>
      <S.RoomImg src={roomImg} alt="RoomImg" width="150" height="150" />
      <S.RoomInfoBox>
        <h2>{data.rent_type}</h2>
        <p>{data.area}</p>
        <p>{data.location}</p>
        <p>{data.room_type}</p>
      </S.RoomInfoBox>
    </S.Layer>
  );
};

export default RoomItem;
