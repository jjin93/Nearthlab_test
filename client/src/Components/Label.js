import React, { useState } from "react";

const Label = (props) => {
  const labelName = props.label.title.split(")");
  const labelId = props.label.id;
  const [bChecked, setChecked] = useState(false);
  const checkedLabelHandler = props.checkedLabelHandler;
  const checkHandler = ({ target }) => {
    setChecked(!bChecked);
    checkedLabelHandler(labelId, target.checked);
  };

  return (
    <div className="flex flex-row gap-2 text-xs mr-3">
      <input type="checkbox" checked={bChecked} onChange={(e) => checkHandler(e)} className="mt-0.5"/>
      <span >{labelName[1]}</span>
    </div>
  );
};

export default Label;
