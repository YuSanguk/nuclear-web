import React, { useEffect, useRef, useState } from "react";

import NavBar from "./Components/NavBar";
import First from "./Components/First";
import Second from "./Components/Second";
import Third from "./Components/Third";
import Footer from "./Components/Footer";
import Modal from "./Components/Modal";
import "./Style/global.css";
import items from "./Data/Contents.json";

// Hooks
import { useScrollDirection } from "./Hooks/UseScrollDirection";
import { useScrollHeight } from "./Hooks/useScrollHeight";
import { disableScroll, enableScroll } from "./Hooks/ScrollPrevent";

const App = () => {
  const [modalOn, setModalOn] = useState("false");
  const [item, setItem] = useState();

  // Scroll Prevent
  useEffect(() => {
    if (modalOn === "true") disableScroll();
    else enableScroll();
  }, [modalOn]);

  // Scroll Height & Direction
  const scrollRef = useRef();
  const scrollDir = useScrollDirection(scrollRef);
  const scrollHeight = useScrollHeight();

  // ref 1 about navigator
  const one = useRef();
  const two = useRef();
  const three = useRef();
  const refArr = [one, two, three];

  const moveToPage = (index) => {
    refArr[index]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  // function for navigator active
  const [active, setActive] = useState(0);
  useEffect(() => {
    for (let i = 0; i < refArr.length; i++) {
      if (i !== refArr.length - 1) {
        if (
          (refArr[i]?.current?.offsetTop + refArr[i + 1]?.current?.offsetTop) /
            2 >=
          scrollHeight
        ) {
          setActive(i);
          break;
        }
      } else {
        setActive(refArr.length - 1);
      }
    }
  }, [scrollHeight]);

  return (
    <div ref={scrollRef}>
      <Modal
        item={items?.data[item]}
        modalOn={modalOn}
        setModalOn={setModalOn}
      />
      <NavBar moveToPage={moveToPage} active={active} scrollDir={scrollDir} />
      <First innerRef={refArr[0]} />
      <Second
        items={items?.data.slice(0, 4)}
        setItem={setItem}
        innerRef={refArr[1]}
        setModalOn={setModalOn}
      />
      <Third
        items={items?.data.slice(4, 6)}
        setItem={setItem}
        innerRef={refArr[2]}
        setModalOn={setModalOn}
      />
      <Footer />
    </div>
  );
};

export default App;
