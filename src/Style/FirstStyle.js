import styled, { keyframes, css } from "styled-components";

export const FirstContainer = styled.div`
  @media screen and (min-width: 1024px) {
    min-height: 80vh;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    gap: 16px;
  }
`;

export const TitleContainer = styled.div`
  @media screen and (min-width: 1024px) {
    width: 480px;
    display: flex;
    flex-direction: column;
  }
`;

export const Title = styled.div`
  @media screen and (min-width: 1024px) {
    width: 100%;
    font-size: 68px;
    font-weight: 700;
    z-index: 2;
    background: rgba(255, 255, 255, 1);

    ${(props) => (props.onmouse === "true" ? css`` : css``)}
  }
`;

const down = keyframes`
  0% {
    transform: translateY(-68px);
  } 100% {
    transform: translateY(0);
  }
`;

const up = keyframes`
  0% {
    transform: translateY(0);
  } 100% {transform: translateY(-68px)}
`;

export const SubTitle = styled.div`
  font-size: 24px;
  z-index: 1;

  ${(props) =>
    props.onmouse === "true"
      ? css`
          animation: 1s ${down} ease;
        `
      : css`
          transform: translateY(-64px);
          animation: 1s ${up} ease;
        `}
`;

export const Img = styled.img`
  @media screen and (min-width: 1024px) {
    width: 480px;
    height: 400px;
  }
`;
