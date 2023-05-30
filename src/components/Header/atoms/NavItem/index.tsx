import { Layer } from './style';

interface Props {
  content: string;
  description?: string;
}

const NavItem = ({ content, description = '' }: Props) => {
  return (
    <Layer>
      <h2>{content}</h2>
      <p>{description}</p>
    </Layer>
  );
};

export default NavItem;
