import styled from "styled-components";

export const ThirdContainer = styled.div`
  @media screen and (min-width: 600px) {
    min-height: 70vh;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    background: #fff;
    flex-direction: row;
    gap: 80px;
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
    gap: 60px;
  }
`;

export const Element = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px 20px;
  border-radius: 16px;
  transition: ease-in-out 0.3s;
  row-gap: 20px;
  cursor: pointer;
  > svg {
    font-size: 64px;
  }
  &:hover {
    background: rgba(233, 233, 233, 0.68);
  }
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: 500;
`;

export const Text = styled.div``;
