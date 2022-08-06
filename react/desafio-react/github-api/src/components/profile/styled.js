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
  div {
    margin: 8px;
    text-align: center;
  }
`;

export const WrapperUserGeneric = styled.div`
  display: flex;
  color: blue;
  align-items: center;
  margin-top: 8px;
  h3 {
    margin-right: 8px;
  }

  a {
    color: pink;
    font-weight: bold;
    font-size: 18px;
  }
`;

export const WrapperInfo = styled.div`
  display: flex;
  color: green;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 8px;
  height: 200px;
  h1 {
    font-size: 32px;
    font-weight: bold;
  }

  h3 {
    font-size: 18px;
  }

  h4 {
    font-size: 16px;
  }
`;

export const WrapperImg = styled.img`
    border-radius: 50%;
    width: 180px;
    margin: 8px;
`;