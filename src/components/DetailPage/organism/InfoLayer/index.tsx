import useFetch from '@/hook/useFetch';
import { useSearchParams } from 'next/navigation';
import RoomInfo from '../../molecules/RoomInfo/PriceInfo';
import { Layer, LeftWrapper } from './style';
import { useEffect } from 'react';
import { RoomDetailType } from '@/types/components/Room';
import DetailInfo from '../../molecules/RoomInfo/DetailInfo';
import SummaryInfo from '../../molecules/SummaryInfo';

const InfoLayer = () => {
  const searchParams = useSearchParams();

  const { fetch, data } = useFetch<RoomDetailType>({
    url: `main/room_detail/${Number(searchParams.get('detail')) + 1}`,
  });

  useEffect(() => {
    fetch();
  }, []);

  return (
    <Layer>
      {data && (
        <>
          <LeftWrapper>
            <RoomInfo data={data} />
            <DetailInfo data={data} />
          </LeftWrapper>
          <SummaryInfo data={data} />
        </>
      )}
    </Layer>
  );
};

export default InfoLayer;
