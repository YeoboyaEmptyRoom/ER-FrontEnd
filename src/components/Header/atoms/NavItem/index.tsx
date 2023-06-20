import { Layer } from './style';

interface Props {
  content: string;
  description?: string;
  href: string;
}

const NavItem = ({ content, description = '', href }: Props) => {
  return (
    <Layer href={href}>
      <h2>{content}</h2>
      <p>{description}</p>
    </Layer>
  );
};

export default NavItem;
