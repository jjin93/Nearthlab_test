import React from "react";
import ReactModal from "react-modal";
import "./Modal.css";
import 'moment/locale/ko'
import moment from "moment";
import { ReactComponent as ToolIcon } from "../../img/combined-shape.svg";
import { ReactComponent as DoneIcon } from "../../img/group-7.svg";
import { ReactComponent as IncompleteIcon } from "../../img/group-6.svg";


import LabelInfo from "./LabelInfo";


const Modal = ({ isOpen, onCancel, data }) => {
  let photoUrl = data.photoUrl;
  let photoName = photoUrl.split("/");
  photoName = photoName[3];

  let photoTakenAt = data.photoTakenAt;
  photoTakenAt = photoTakenAt.split('.');
  photoTakenAt = photoTakenAt[0].split('T');

  let photoTakenDate = moment(photoTakenAt[0], "YYYY-MM-DD").format('YYYY. MM. DD. ');
  let photoTakenTime = moment(photoTakenAt[1], 'h:mm:ss').format('a h:mm:ss');
  let photoTaken = photoTakenDate + photoTakenTime;
  let createdAt = data.createdAt;
  let created = moment(createdAt.split('T')[0],"YYYY-MM-DD").format('YYYY. MM. DD. ');

  let labels = data.labels;
  let completed = data.completed;
  
  const modalStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      height: "95%",
      transform: "translate(-50%, -50%)",
      border: "none",
      borderRadius: "20px",
    },
  };

  //취소 버튼 클릭시
  const handleClickCancel = () => {
    onCancel();
  };

  return (
    <ReactModal isOpen={isOpen} style={modalStyles} ariaHideApp={false}>
      <div className="flex flex-row gap-6 border border-red-400 mt-4 mb-4">
        <h1>파일 상세 정보</h1>
        <button onClick={handleClickCancel}>닫기</button>
      </div>
      <div className="flex flex-row border border-blue-400 gap-4">
        <div className="basis-1/3 border border-yellow-400">
          <img src={photoUrl} alt="" className="object-cover w-56 h-44 mb-5" />
          <div className="flex flex-row border mb-2 text-xs">
            <span className=" basis-1/3">파일명</span>
            <span className=" basis-2/3 text-center">{photoName}</span>
          </div>
          <div className="flex flex-row border mb-2 text-xs">
            <span className=" basis-1/3 ">촬영시간</span>
            <span className=" basis-2/3 text-center">{photoTaken}</span>
          </div>
          <div className="flex flex-row border mb-2 text-xs">
            <span className=" basis-1/3">등록일</span>
            <span className=" basis-2/3 text-center">{created}</span>
          </div>
        </div>
        <div className="basis-2/3 border border-green-400">
          <div className="flex flex-row border">
            <ToolIcon className="mt-1.5"/>
            <span className="textLabelInfo">라벨 정보</span>
          </div>
          {labels.map((label, index) => (
            <LabelInfo key={index} label={label} index={index}/>
          ))}
          {completed ? (<DoneIcon className="w-20 h-8 object-contain mt-10 ml-96 mr-3" />)
            : (<IncompleteIcon className="w-20 h-8 object-contain mt-10 ml-96 mr-3"/>)}
          
        </div>
      </div>
    </ReactModal>
    
  );
};

export default Modal;
