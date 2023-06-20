import { RoomDetailType } from '@/types/components/Room';
import * as S from './style';

interface Props {
  data: RoomDetailType;
}

const PriceInfo = ({ data }: Props) => {
  return (
    <S.Layer>
      <div>
        <h2>가격정보</h2>
        <S.Line />
      </div>
      <S.Box>
        <h3>{data?.rent_type}</h3> <p>{data.price}</p>
      </S.Box>
      <S.Box>
        <h3>관리비</h3> <p>{data.maintenance_fee}</p>
      </S.Box>
      <S.Box>
        <h3>주차비</h3> <p>{data.parking_fee}</p>
      </S.Box>
    </S.Layer>
  );
};

export default PriceInfo;
