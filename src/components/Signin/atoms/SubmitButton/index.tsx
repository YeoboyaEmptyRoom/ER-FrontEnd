import { Button } from './style';

interface Props {
  isCheck: boolean;
  children: string;
  onClick: () => void;
}

const SubmitButton = ({ isCheck, onClick, children }: Props) => {
  return (
    <Button isCheck={isCheck} onClick={onClick}>
      {children}
    </Button>
  );
};

export default SubmitButton;
