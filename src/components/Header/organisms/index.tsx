import NavItem from '../atoms/NavItem';
import * as S from './style';
import Logo from '../../../../public/static/svg/Logo.svg';
const Header = () => {
  return (
    <S.Layer>
      <S.LogoBox href="/">
        <Logo width="40" height="44" />
        <h1>빈 방</h1>
      </S.LogoBox>
      <S.NavList>
        <NavItem content="원룸" description="전세/월세" href="/map/one" />
        <NavItem content="투룸+" description="전세/월세" href="/map/two" />
        <NavItem
          content="오피스텔"
          description="전세/월세"
          href="/map/officetels"
        />
        <NavItem
          content="아파트"
          description="전세/월세"
          href="/map/apartment"
        />
        <NavItem content="게시판" description="공지사항" href="/notice" />
        <NavItem
          content="빈 방 등록"
          description="중개사무소용"
          href="/register"
        />
        <NavItem content="어드민" href="/admin" />
      </S.NavList>
      <S.AuthBtnBox href="/auth">로그인/회원가입</S.AuthBtnBox>
    </S.Layer>
  );
};

export default Header;
