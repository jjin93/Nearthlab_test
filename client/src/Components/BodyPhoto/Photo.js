import React, { useState } from "react";
import ReactModal from "react-modal";
import Modal from "../Modal/Modal";
import "./Photo.css";
import LabelButtonIcon from "../Icon/LabelButtonIcon";
import LabelDoneIcon from "../Icon/LabelDoneIcon";
import LabelImperfectIcon from "../Icon/LabelImperfectIcon";

const Photo = (props) => {
  let id = props.data.id;
  let photoUrl = props.data.photoUrl;
  let photoName = photoUrl.split("/");
  photoName = photoName[3];
  let photoTakenAt = props.data.photoTakenAt;
  let createdAt = props.data.createdAt;
  let completed = props.data.completed;
  let labels = props.data.labels.length;
  const [isOpen, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };

  return (
    <div className="relative w-44 mt-3 mr-1.5 mb-1.5 ml-0 border border-black-200">
      <img src={photoUrl} alt="" className="w-44 h-44" onClick={openModal} />
      <div className="absolute top-3 right-3">
        {completed ? (<LabelDoneIcon />):(<LabelImperfectIcon/>)}
        
      </div>
      <div className="flex flex-row mt-3 mb-3 ml-2.5">
        <span className=" font-sans text-xs mr-14">{photoName}</span>
        <LabelButtonIcon labels={labels} />
      </div>
      <Modal isOpen={isOpen} onCancel={closeModal} data={props.data} />
    </div>
  );
};

export default Photo;
