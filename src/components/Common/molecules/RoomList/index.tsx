import useFetch from '@/hook/useFetch';
import RoomItem from '../../atoms/RoomItem';
import { Layer } from './style';
import { useEffect } from 'react';
import { RoomType } from '@/types/components/Room';

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
      {data?.map((item, key) => {
        return <RoomItem data={item} key={key} />;
      })}
    </Layer>
  );
};

export default RoomList;
