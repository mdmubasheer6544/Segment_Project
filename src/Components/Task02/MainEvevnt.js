import React, { useState } from "react";
import AddTableCard from "./AddTableCard";
import "./mainEvent.css";
import AddSegment from "./AddSegment";
import AddSegmentCard from "./AddSegmentCard";

const dummy = [
  {
    name: "Mubasheer",
    icon: "😏",
    color: "red",
  },
];
const dummySegment = [
  {
    name: "Segment1",
    icon: "😏",
    description: "",
    dummy: [
      {
        name: "Mubasheer",
        icon: "😏",
        color: "red",
      },
    ],
  },
];
const MainEvevnt = () => {
  const [addTabel, setAddTable] = useState(false);
  // const [addSegmentTabel, setAddSegmentTable] = useState(false);
  const [addSegment, setAddSegment] = useState(false);
  const [addItems, setAddItems] = useState(dummy);
  const [addSegmentItems, setAddSegmentItems] = useState(dummySegment);

  const addItemFunc = (items) => {
    setAddItems((oldValues) => {
      return [...oldValues, items];
    });
  };

  const addSegmentItemFunc = (items) => {
    setAddSegmentItems((oldValues) => {
      return [...oldValues, items];
    });
  };

  const segmentHidShow = () => {
    setAddSegment(!addSegment);
  };
  const hidshow = () => {
    setAddTable(!addTabel);
  };
  return (
    <>
      <div className="mainContainer">
        <AddSegment
          addSegmentItems={addSegmentItems}
          onchgFunction={() => {
            setAddSegment(!addSegment);
          }}
        />
        <div className="rightBarSection">
          <div></div>
          <ul className="addList">
            {addItems.map((item, index) => {
              return (
                <li key={index}>
                  <p style={{ borderColor: item.color }}>{item.icon}</p>
                  <small>{item.name}</small>
                </li>
              );
            })}

            <li>
              <input
                className="addbtn"
                type="button"
                value="+"
                onClick={hidshow}
              />
            </li>
          </ul>
        </div>
        {addTabel && (
          <AddTableCard addItemFunc={addItemFunc} hidshow={hidshow} />
        )}
        {addSegment && (
          <AddSegmentCard
            isSegment="true"
            addSegmentItemFunc={addSegmentItemFunc}
            hidshow={setAddSegment}
            segmentTable={segmentHidShow}
          />
        )}
      </div>
    </>
  );
};

export default MainEvevnt;
