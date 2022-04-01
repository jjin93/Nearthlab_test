import React from "react";

const Label = (props) => {
    const labelName = props.label.title.split(')');
    
    
  return (
    <div className = 'content'>
      <input type="checkbox" />
      <span class="labelName">{labelName[1]}</span>
    </div>
  );
};

export default Label;
