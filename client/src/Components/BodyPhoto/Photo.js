import React from "react";
import "./Photo.css";

const Photo = (props) => {
  let id = props.data.id;
  let photoUrl = props.data.photoUrl;
  let photoName = photoUrl.split('/');
  photoName = photoName[3];
  let photoTakenAt = props.data.photoTakenAt;
  let createdAt = props.data.createdAt;
  let completed = props.data.completed;
  let labels = props.data.labels.length;

  return (
    <div className="w-44 mt-3 mr-1.5 mb-1.5 ml-0 border border-black-200">
      <img src={photoUrl} alt="" className="w-44 h-44" />
      <div className="flex flex-row">
        <div className="w-20 h-5 mt-3 mr-6 mb-3 ml-2.5 font-sans text-xs basis-1/4">{photoName}</div>
        <div class="flex flex-row w-13 h-4.5 mt-3 mr-2 mb-3 ml-2.5 p-2 basis-3/4 bg-slate-200 rounded-xl">
          <img src={require("../../../src/tool.png")} alt="" class="w-4 h-4" />
          <span className="font-sans text-xs text-blue-600">라벨 {labels}개</span>
        </div>
      </div>
    </div>
  );
};

export default Photo;

/*
span {
  width: 35px;
  height: 15px;
  font-family: NotoSansCJKkr;
  font-size: 10px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.28px;
  color: #2a67e2;
}
HTML
<span>
  라벨 8개
</span>

.BG {
  width: 56px;
  height: 18px;
  margin: 11px 8px 1px 25px;
  border-radius: 9.5px;
  background-color: #e9eef1;
}
HTML
<div class="BG"></div>

*/
