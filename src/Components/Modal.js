import React, { useState } from "react";

import { ModalBackground, ModalBox, Title, Text } from "../Style/ModalStyle";

const Modal = ({ item, modalOn, setModalOn }) => {
  const [pre, setPre] = useState(false);
  return (
    <ModalBackground
      onClick={() => !pre && setModalOn("false")}
      modalon={modalOn}
    >
      <ModalBox
        modalon={modalOn}
        onMouseEnter={() => setPre(true)}
        onMouseLeave={() => setPre(false)}
      >
        <Title>{item?.title || "title"}</Title>
        <Text>{item?.text || "text"}</Text>
      </ModalBox>
    </ModalBackground>
  );
};

export default Modal;
