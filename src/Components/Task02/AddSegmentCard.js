import React,{useState} from "react";
import "./addTabel.css";
import InputEmoji from "react-input-emoji";
const AddSegmentCard = (props) => {
  //Segments State
  const [segmentname, setSegementName] = useState("");
  const [segmenticon, setSegementIcon] = useState("😏");
  const [description, setDescription] = useState("");

  //for add new segment item
  const addNewSegments = () => {
    props.addSegmentItemFunc({
      name: segmentname,
      icon: segmenticon,
      description: description,
    });
    props.hidshow();
  };
  return (
    <div className="mainTabelBox">
      <div className="formHeader">
        <h4>Add a Segment</h4>
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
          value={segmentname}
          required="required"
          onChange={(e) => {
            setSegementName(e.target.value);
          }}
        />

        <label htmlFor="name">Icon</label>
        <InputEmoji
          initialValue={segmenticon}
          onChange={setSegementIcon}
          cleanOnEnter
          placeholder="Choose Icon.."
        />

        <label htmlFor="name">Discription</label>
        <textarea
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          name=""
          id=""
        />
      </div>
      <div className="btnsection">
        <button
          disabled={!segmentname}
          className="addTablebtn"
          onClick={addNewSegments}
        >
          Save
        </button>
        <button className="cancelTablebtn" onClick={props.hidshow}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddSegmentCard;
