import useFetch from '@/hook/useFetch';
import RoomItem from '../../atoms/RoomItem';
import { Layer } from './style';
import { useEffect } from 'react';
import { RoomType } from '@/types/components/Room';
import OpenDoor from '../../../../../public/static/svg/OpenDoor.svg';

const RoomList = ({ columns }: { columns: number }) => {
  const { fetch, data } = useFetch<RoomType[]>({
    url: '/main/rooms/',
    method: 'get',
    onSuccess(data) {
      console.log(data);
    },
  });

  useEffect(() => {
    fetch();
  }, []);

  return (
    <Layer column={columns}>
      {data && data.length > 0 ? (
        data.map((item, key) => {
          return <RoomItem data={item} key={key} />;
        })
      ) : (
        <>
          <OpenDoor />
          <h4>현재 지도 주변에 빈 방이 없습니다</h4>
        </>
      )}
    </Layer>
  );
};

export default RoomList;
