import styled, { keyframes, css } from "styled-components";

const disappear = keyframes`
  0% {
  opacity: 1;
  filter:blur(0px);
  transform: translateY(0px);
  } 100% {
  opacity: 50%;
  filter:blur(6px);
  transform: translateY(-54px);
  }
`;

const appear = keyframes`
  0% {
  opacity: 50%;
  filter:blur(6px);
  transform: translateY(-54px);
  } 100% {
  opacity: 1;
  filter:blur(0px);
  transform: translateY(0px);
  };
`;

export const Nav = styled.div`
  width: 100vw;
  padding: 10px 0;
  background: rgba(203, 28, 141, 0.16);
  backdrop-filter: blur(4px);
  display: flex;
  flex-direction: row;
  column-gap: 64px;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  ${(props) =>
    props.scrollDir === "up"
      ? css`
          animation: ${appear} 0.7s ease;
        `
      : css`
          animation: ${disappear} 0.7s ease;
          transform: translateY(-54px);
        `}
`;

export const NavElement = styled.div`
  color: black;
  user-select: none;
  cursor: pointer;
  font-size: 26px;
  font-weight: 700;
  &:hover {
    color: white;
  }
  ${(props) => props.active === "1" && "color: #4B56D2;"}
  transition: 0.3s ease;
`;
