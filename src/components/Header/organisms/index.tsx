import NavItem from '../atoms/NavItem';
import * as S from './style';
import Logo from '../../../../public/static/svg/Logo.svg';
import { parseCookies } from 'nookies';
import { GetServerSideProps } from 'next';

const Header = () => {
  return (
    <S.Layer>
      <S.LogoBox href="/">
        <Logo width="40" height="44" />
        <h1>빈 방</h1>
      </S.LogoBox>
      <S.NavList>
        <NavItem content="원룸" description="전세/월세" href="/map" />
        <NavItem content="투룸+" description="전세/월세" href="/map" />
        <NavItem content="오피스텔" description="전세/월세" href="/map" />
        <NavItem content="아파트" description="전세/월세" href="/map" />
        <NavItem content="게시판" description="공지사항" href="/notice" />
        <NavItem
          content="빈 방 등록"
          description="중개사무소용"
          href="/register"
        />
      </S.NavList>
      <S.AuthBtnBox href="/auth">
        {parseCookies().csrftoken ? '로그아웃' : '로그인/회원가입'}
      </S.AuthBtnBox>
    </S.Layer>
  );
};

export const getServerSideProps = async (ctx: GetServerSideProps) => {
  console.log(ctx);
  return {
    props: {},
  };
};

export default Header;
