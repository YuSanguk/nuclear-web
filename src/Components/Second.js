import React from "react";

import {
  GiDatabase,
  GiErlenmeyer,
  GiFuelTank,
  GiMineExplosion,
} from "react-icons/gi";
import { SecondContainer, Element, Title, Text } from "../Style/SecondStyle";

const Second = ({ items, setItem, innerRef, setModalOn }) => {
  const setModal = (index) => {
    setModalOn("true");
    setItem(index);
  };

  return (
    <SecondContainer ref={innerRef}>
      <Element onClick={() => setModal(0)}>
        <GiDatabase />
        <Title>{items[0].title}</Title>
        <Text>
          {items[0].text.length > 20
            ? items[0].text.slice(0, 20) + "…"
            : items[0].text}
        </Text>
      </Element>
      <Element onClick={() => setModal(1)}>
        <GiErlenmeyer />
        <Title>{items[1].title}</Title>
        <Text>
          {items[1].text.length > 20
            ? items[1].text.slice(0, 20) + "…"
            : items[1].text}
        </Text>
      </Element>
      <Element onClick={() => setModal(2)}>
        <GiFuelTank />
        <Title>{items[2].title}</Title>
        <Text>
          {items[2].text.length > 20
            ? items[2].text.slice(0, 20) + "…"
            : items[2].text}
        </Text>
      </Element>
      <Element onClick={() => setModal(3)}>
        <GiMineExplosion />
        <Title>{items[3].title}</Title>
        <Text>
          {items[3].text.length > 20
            ? items[3].text.slice(0, 20) + "…"
            : items[3].text}
        </Text>
      </Element>
    </SecondContainer>
  );
};

export default Second;
