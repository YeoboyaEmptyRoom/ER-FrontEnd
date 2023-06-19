import { rentType } from '@/atom/components/Auth';
import { useSetRecoilState } from 'recoil';
import DepositButton from '../../atoms/DepositButton';
import { Layer } from './style';

const DepositBtnBox = () => {
  const setRoomType = useSetRecoilState(rentType);
  const filterRentType = (type: '전세' | '월세') => {
    setRoomType((prev) => (prev === type ? '' : type));
  };

  return (
    <Layer>
      <DepositButton onClick={() => filterRentType('전세')} name="전세">
        전세
      </DepositButton>
      <span />
      <DepositButton onClick={() => filterRentType('월세')} name="월세">
        월세
      </DepositButton>
    </Layer>
  );
};

export default DepositBtnBox;
