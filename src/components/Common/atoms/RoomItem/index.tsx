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
        <h3>{data.rent_type}</h3>
        <h4>{data.area}</h4>
        <h4>{data.location}</h4>
        <h4>{data.room_type}</h4>
      </S.RoomInfoBox>
    </S.Layer>
  );
};

export default RoomItem;
