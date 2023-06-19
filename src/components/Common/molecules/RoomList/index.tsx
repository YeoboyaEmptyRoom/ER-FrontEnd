import RoomItem from '../../atoms/RoomItem';
import { Layer } from './style';

const RoomList = ({ columns }: { columns: number }) => {
  return (
    <Layer column={columns}>
      <RoomItem />
      <RoomItem />
      <RoomItem />
      <RoomItem />
      <RoomItem />
      <RoomItem />
    </Layer>
  );
};

export default RoomList;
