import { isForm } from '@/atom/components/Auth';
import { useRecoilValue } from 'recoil';
import { Layer } from './style';

const Intruction = () => {
  const form = useRecoilValue(isForm);
  return (
    <Layer form={form}>
      <h2>빈 방은 원하는 빈 방을 찾을 수 있도록 도와주는 서비스입니다.</h2>
      <h2>지도를 통해 자신이 원하는 지역의 빈 방을 찾아보세요!</h2>
      <h2>
        또한 원하는 빈 방을 찾으면 그 방에 대한 상세 정보와
        <br />
        해당하는 방의 등록자와 1대1 채팅까지 제공합니다.
      </h2>
    </Layer>
  );
};

export default Intruction;
``;
