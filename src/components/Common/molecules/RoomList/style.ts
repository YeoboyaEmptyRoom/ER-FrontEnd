import styled from '@emotion/styled';

export const Layer = styled.div`
  display: grid;
  grid-template-columns: repeat(
    ${({ column }: { column: number }) => {
      return column;
    }},
    1fr
  );
  grid-row-gap: 4.5em;
`;
