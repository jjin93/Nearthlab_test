import React from "react";

const Label = (props) => {
    const labelName = props.label.title.split(')');
    
    console.log(labelName[1]);
    
  return (
    <div className = 'contents'>
      <input type="checkbox" />
      <span class="labelName">{labelName[1]}</span>
    </div>
  );
};

export default Label;
