import styled from "styled-components";

export const SecondContainer = styled.div`
  @media screen and (min-width: 1024px) {
    min-height: 75vh;
    display: grid;
    padding: 0 50px;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 32px;
  }
`;

export const Element = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 18px;
  padding: 40px 10px;
  border-radius: 16px;
  transition: ease-in-out 0.3s;
  cursor: pointer;
  > svg {
    font-size: 64px;
  }
  &:hover {
    background: rgba(233, 233, 233, 0.68);
  }
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 24px;
`;

export const Text = styled.div`
  font-weight: 400;
  color: rgb(62, 62, 62);
  font-size: 15px;
  text-align: center;
`;
