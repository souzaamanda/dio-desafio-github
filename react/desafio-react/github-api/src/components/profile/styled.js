import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  color: orange;
  align-items: flex-start;
`;

export const WrapperStatusCount = styled.div`
  display: flex;
  color: purple;
  align-items: center;
`;

export const WrapperUsername = styled.div`
  display: flex;
  color: blue;
  align-items: center;
  h3 {
    margin-right: 8px;
  }
`;

export const WrapperInfo = styled.div`
  display: flex;
  color: green;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 8px;
`;

export const WrapperImg = styled.img`
    border-radius: 50%;
    width: 180px;
    margin: 8px;
`;