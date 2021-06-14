import React, { useState } from "react";
import "./addTabel.css";
import InputEmoji from "react-input-emoji";
const AddTableCard = (props) => {
  //Table State
  const [name, setName] = useState("");
  const [icon, setIcon] = useState("😏");
  const [color, setColor] = useState("#ff0000");

  //for add new table item
  const addNewItems = () => {
    props.addItemFunc({
      name: name,
      icon: icon,
      color: color,
    });
    props.hidshow();
  };

  return (
    <div className="mainTabelBox">
      <div className="formHeader">
        <h4>Add a Table</h4>
        <button className="closebtn" onClick={props.hidshow}>
          x
        </button>
      </div>
      <div className="formContainer">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="nameInputs"
          placeholder="Enter Name here.."
          value={name}
          required="required"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <label htmlFor="icon">Icon</label>
        <InputEmoji
          initialValue={icon}
          onChange={setIcon}
          cleanOnEnter
          placeholder="Choose Icon.."
        />

        <label htmlFor="color">Color</label>
        <input
          type="color"
          value={color}
          onChange={(e) => {
            setColor(e.target.value);
          }}
          className="colorInput"
          id=""
        />
        {/* <CirclePicker /> */}
      </div>
      <div className="btnsection">
        <button disabled={!name} className="addTablebtn" onClick={addNewItems}>
          Add
        </button>

        <button className="cancelTablebtn" onClick={props.hidshow}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddTableCard;
