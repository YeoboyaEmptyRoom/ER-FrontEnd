import { RoomDetailType } from '@/types/components/Room';
import * as S from './style';

interface Props {
  data: RoomDetailType;
}

const DetailInfo = ({ data }: Props) => {
  return (
    <S.Layer>
      <div>
        <h2>상세설명</h2>
        <S.Line />
      </div>
      <S.Box>
        <p>{data.description}</p>
      </S.Box>
    </S.Layer>
  );
};

export default DetailInfo;
