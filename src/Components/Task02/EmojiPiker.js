import React from "react";
import InputEmoji from "react-input-emoji";

const  EmojiPiker=(props)=> {
 
  function handleOnEnter(value) {
      props.onChangeFunc(value)
  }

  return (
    <InputEmoji
      value={props.valueIcon}
      onChange={handleOnEnter}
      cleanOnEnter
      placeholder="Choose Icon.."
    />
  );
}
export default EmojiPiker;