import useFetch from '@/hook/useFetch';
import RoomItem from '../../atoms/RoomItem';
import { Layer } from './style';
import { useEffect } from 'react';
import { RoomType } from '@/types/components/Room';
import OpenDoor from '../../../../../public/static/svg/OpenDoor.svg';
import { useRecoilValue } from 'recoil';
import { rentType } from '@/atom/components/Auth';

const RoomList = ({ columns }: { columns: number }) => {
  const roomType = useRecoilValue(rentType);

  const url = () => {
    switch (roomType) {
      case '전세':
        return 'lease/';
      case '월세':
        return 'monthly/';
      default:
        return '';
    }
  };

  const { fetch, data } = useFetch<RoomType[]>({
    url: `/main/rooms/${url()}`,
    method: 'get',
    onSuccess(data) {
      console.log(data);
    },
  });

  useEffect(() => {
    fetch();
  }, [roomType]);

  return (
    <Layer column={columns}>
      {data && data.length > 0 ? (
        data.map((item, key) => {
          return <RoomItem data={item} id={key} key={key} />;
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
