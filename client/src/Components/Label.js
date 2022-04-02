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
    <div className="mr-3">
      <input type="checkbox" checked={bChecked} onChange={(e) => checkHandler(e)} />
      <span class="labelName">{labelName[1]}</span>
    </div>
  );
};

export default Label;
