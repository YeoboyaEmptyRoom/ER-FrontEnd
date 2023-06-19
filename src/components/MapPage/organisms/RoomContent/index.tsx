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
      <RoomListBox>
        <RoomList columns={1} />
      </RoomListBox>
    </Layer>
  );
};

export default RoomContent;
