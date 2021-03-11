import "./App.css";
import React, { useState } from "react";
import { Frame } from "framer";
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from "framer-motion";

function Card(props) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scale = useTransform(x, [-150, 0.9, 150], [0.1, 1, 0.1]);

  function handleDragEnd(event, info) {
    //top left corner
    if (info.offset.x < -20 && info.offset.y < -20) {
      // props.setExitX(-props.getBoxGridWidth / 2);
      // props.setExitY(-props.getBoxGridHeight / 2);
      props.setExitX(-150);
      props.setExitY(-150);
      props.setIndex(props.index + 1);
      props.setCardContent();
      console.log("dragged to top left");
      props.getDragCorner((value) => "TOP LEFT");
    }
    //top right corner
    if (info.offset.x > 20 && info.offset.y < -20) {
      // props.setExitX(props.getBoxGridWidth / 2);
      // props.setExitY(-props.getBoxGridHeight / 2);
      props.setExitX(150);
      props.setExitY(-150);
      props.setIndex(props.index + 1);
      props.setCardContent();
      console.log("dragged to top right");
      props.getDragCorner((value) => "TOP RIGHT");
    }
    //bottom left corner
    if (info.offset.x < -20 && info.offset.y > 20) {
      // props.setExitX(-props.getBoxGridWidth / 2);
      // props.setExitY(props.getBoxGridHeight / 2);
      props.setExitX(-150);
      props.setExitY(150);
      props.setIndex(props.index + 1);
      props.setCardContent();
      console.log("dragged to bottom left");
      props.getDragCorner((value) => "BOTTOM LEFT");
    }
    //bottom right corner
    if (info.offset.x > 20 && info.offset.y > 20) {
      // props.setExitX(props.getBoxGridWidth / 2);
      // props.setExitY(props.getBoxGridHeight / 2);
      props.setExitX(150);
      props.setExitY(150);
      props.setIndex(props.index + 1);
      props.setCardContent();
      console.log("dragged to bottom right");
      props.getDragCorner((value) => "BOTTOM RIGHT");
    }
  }

  return (
    <motion.div
      style={{
        width: 100,
        height: 100,
        position: "absolute",
        x: x,
        y: y,
        cursor: "grab",
      }}
      whileTap={{ cursor: "grabbing" }}
      drag={props.drag}
      dragConstraints={{
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      }}
      onDragEnd={handleDragEnd}
      initial={props.initial}
      animate={props.animate}
      transition={props.transition}
      exit={{
        x: props.exitX,
        y: props.exitY,
        opacity: 0,
        scale: 0.5,
        transition: { duration: 0.5 },
      }}
    >
      <motion.div
        style={{
          width: 100,
          height: 100,
          borderRadius: 30,
          scale: scale,
        }}
      >
        <Frame
          className="card"
          height="100%"
          width="100%"
          background="#59d0ff"
          radius="10%"
        >
          {props.cardContent}
        </Frame>
      </motion.div>
    </motion.div>
  );
}

export function FmComponent(props) {
  const [index, setIndex] = React.useState(0);
  const [exitX, setExitX] = React.useState("100%");
  const [exitY, setExitY] = React.useState("100%");

  const contentList = [
    "Dream",
    "Smile",
    "Change",
    "Power",
    "Joy",
    "Love",
    "Happy",
    "Lollypop",
    "Candy",
    "Juice",
    "Unichorn",
    "Pony",
    "Summer",
    "Sun",
    "Ocean",
  ];

  const [content, setContent] = useState("Drag me");

  const randomContent = (e) => {
    const len = contentList.length;
    //setContent(props.onCountChange((e) => e + "fuuk"));
    setContent(contentList[Math.floor(Math.random() * len)]);
  };

  return (
    <motion.div
      style={{
        width: 100,
        height: 100,
        position: "relative",
      }}
    >
      <AnimatePresence initial={false}>
        <Card
          key={index}
          animate={{
            scale: 1,
            y: 0,
            opacity: 1,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 40,
            opacity: {
              duration: 0.3,
            },
          }}
          exitX={exitX}
          exitY={exitY}
          setExitX={setExitX}
          setExitY={setExitY}
          index={index}
          setIndex={setIndex}
          cardContent={content}
          setCardContent={randomContent}
          getDragCorner={props.onCountChange}
          getBoxGridWidth={props.boxGridWidth}
          getBoxGridHeight={props.boxGridHeight}
          drag
        />
      </AnimatePresence>
    </motion.div>
  );
}
