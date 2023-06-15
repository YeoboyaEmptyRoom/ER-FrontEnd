import RoomList from '@/components/Common/molecules/RoomList';
import DepositBtnBox from '../../molecules/DepositBtnBox';
import { Layer, RoomListBox } from './style';
import { useState } from 'react';
import OpenDoor from '../../../../../public/static/svg/OpenDoor.svg';

const RoomContent = () => {
  const [roomInfo, setRoomInfo] = useState([]);
  return (
    <Layer>
      <DepositBtnBox />
      <RoomListBox roomInfo={roomInfo.length !== 0}>
        {roomInfo.length !== 0 ? (
          <RoomList columns={1} />
        ) : (
          <>
            <OpenDoor />
            <h4>현재 지도 주변에 빈 방이 없습니다</h4>
          </>
        )}
      </RoomListBox>
    </Layer>
  );
};

export default RoomContent;
