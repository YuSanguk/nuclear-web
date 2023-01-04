import React from "react";

import { GiTargetLaser, GiAbstract091 } from "react-icons/gi";
import { Element, ThirdContainer, Title } from "../Style/ThirdStyle";

const Third = ({ items, setItem, innerRef, setModalOn }) => {
  const setModal = (index) => {
    setModalOn("true");
    setItem(index);
  };

  return (
    <ThirdContainer ref={innerRef}>
      <Element onClick={() => setModal(4)}>
        <GiAbstract091 />
        <Title>{items[0]?.title}</Title>
      </Element>
      <Element onClick={() => setModal(5)}>
        <GiTargetLaser />
        <Title>{items[1]?.title}</Title>
      </Element>
    </ThirdContainer>
  );
};

export default Third;
