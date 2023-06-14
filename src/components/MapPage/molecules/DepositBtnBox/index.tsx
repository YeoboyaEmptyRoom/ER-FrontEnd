import DepositButton from '../../atoms/DepositButton';
import { Layer } from './style';

const DepositBtnBox = () => {
  return (
    <Layer>
      <DepositButton>전세</DepositButton>
      <span />
      <DepositButton>월세</DepositButton>
    </Layer>
  );
};

export default DepositBtnBox;
