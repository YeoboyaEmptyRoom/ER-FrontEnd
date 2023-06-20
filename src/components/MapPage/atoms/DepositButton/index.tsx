import { useRecoilValue } from 'recoil';
import { Button } from './style';
import { rentType } from '@/atom/components/Auth';

interface Props {
  children: string;
  onClick: () => void;
  name: '전세' | '월세';
}

const DepositButton = ({ children, onClick, name }: Props) => {
  const roomType = useRecoilValue(rentType);
  return (
    <Button onClick={() => onClick()} active={roomType === name}>
      {children}
    </Button>
  );
};

export default DepositButton;
