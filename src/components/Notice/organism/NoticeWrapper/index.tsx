import NoticeList from '../../molecules/NoticeList';
import * as S from './style';

const NoticeWrapper = () => {
  return (
    <S.Layer>
      <h2>공지사항</h2>
      <NoticeList />
    </S.Layer>
  );
};

export default NoticeWrapper;
