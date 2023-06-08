import RoomList from '../../molecules/RoomList';
import * as S from './style';

const RoomContent = () => {
  return (
    <S.Layer>
      <h2>최신 빈 방</h2>
      <RoomList />
    </S.Layer>
  );
};

export default RoomContent;
