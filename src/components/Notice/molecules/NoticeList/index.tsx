import NoticeItem from '../../atoms/NoticeItem';
import * as S from './style';

const NoticeList = () => {
  return (
    <S.Layer>
      <S.ListTitle>
        <h3>제목</h3>
        <h3>날짜</h3>
      </S.ListTitle>
      <S.ListContent>
        <NoticeItem />
        <NoticeItem />
        <NoticeItem />
      </S.ListContent>
    </S.Layer>
  );
};

export default NoticeList;
