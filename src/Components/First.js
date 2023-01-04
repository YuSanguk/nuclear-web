import React, { useState } from "react";

import {
  FirstContainer,
  Title,
  SubTitle,
  TitleContainer,
  Img,
} from "../Style/FirstStyle";

const First = ({ innerRef }) => {
  const [onMouse, setOnMouse] = useState("false");

  return (
    <FirstContainer ref={innerRef}>
      <TitleContainer>
        <Title
          onmouse={onMouse}
          onMouseEnter={() => setOnMouse("true")}
          onMouseLeave={() => setOnMouse("false")}
        >
          미래의 에너지원 :
        </Title>
        <SubTitle onmouse={onMouse}>핵융합은 차세대 에너지원입니다</SubTitle>
      </TitleContainer>
      <Img
        src="https://cdn.pixabay.com/photo/2017/03/26/19/46/at-dusk-2176359_960_720.jpg"
        alt="img"
      />
    </FirstContainer>
  );
};

export default First;
