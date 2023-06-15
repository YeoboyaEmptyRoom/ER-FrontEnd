import RoomList from '../../../Common/molecules/RoomList';
import * as S from './style';

const RoomContent = () => {
  return (
    <S.Layer>
      <h2>최신 빈 방</h2>
      <RoomList columns={4} />
    </S.Layer>
  );
};

export default RoomContent;
