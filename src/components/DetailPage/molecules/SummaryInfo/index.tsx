import { RoomDetailType } from '@/types/components/Room';
import { Button, H2, InfoBox, Layer } from './style';

interface Props {
  data: RoomDetailType;
}

const SummaryInfo = ({ data }: Props) => {
  return (
    <Layer>
      <InfoBox>
        <h2>
          {data.rent_type} {data.price}
        </h2>
        <h3>{Math.floor(data.floor)}평</h3>
        <h3>{data.room_type}</h3>
        <h3>{data.floor}층</h3>
        <h3>{data.location}</h3>
      </InfoBox>
      <H2>송정동 중개사무소</H2>
      <Button>문의하기</Button>
    </Layer>
  );
};

export default SummaryInfo;
