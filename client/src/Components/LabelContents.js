import React, { useState, useEffect } from "react";
import axios from "axios";
import Label from "./Label";
import Body from "./Body";

function LabelContents() {
  const [labelType, setLabelType] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [checkedLabels, setCheckLabels] = useState([]);

  const checkedLabelHandler = (id, isChecked) => {
    if (isChecked) {
      setCheckLabels([...checkedLabels, id]);
    } else {
      setCheckLabels(checkedLabels.filter((el) => el !== id));
    }

  };

  const fetchLabels = async () => {
    try {
      // 요청이 시작할 때에는 error 와 cards를 초기화하고
      setError(null);
      setLabelType(null);
      //loading 상태를 true로 바꿈
      setLoading(true);
      const response = await axios.get("https://tester-api.nearthlab.com/v1/labelTypes");
      setLabelType(response.data); // 데이터는 response.data 안에 들어있음
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchLabels();
  }, []);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  // 아직 users가 받아와지지 않았다면 아무것도 표시되지 않음
  if (!labelType) return null;

  return (
    <>
      <div className="flex flex-row mt-5 mb-5">
        {labelType.map((label, index) => (
          <Label key={index} label={label} checkedLabelHandler={checkedLabelHandler} />
        ))}
      </div>
      <div class="border border-grey-400" />
      <Body checkedLabels={checkedLabels}/>
    </>
  );
}

export default LabelContents;
