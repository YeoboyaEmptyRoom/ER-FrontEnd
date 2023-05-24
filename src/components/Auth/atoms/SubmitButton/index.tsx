import { ButtonHTMLAttributes } from 'react';
import { Button } from './style';

interface Props {
  isCheck: boolean;
  children: string;
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button' | undefined;
}

const SubmitButton = ({ isCheck, onClick, children, type }: Props) => {
  return (
    <Button isCheck={isCheck} onClick={onClick} type={type}>
      {children}
    </Button>
  );
};

export default SubmitButton;
