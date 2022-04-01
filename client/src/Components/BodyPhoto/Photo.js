import React from "react";
import './Photo.css'

const Photo = (props) => {
    console.log(props)
    let id = props.data.id;
    let photoUrl = props.data.photoUrl;
    let photoTakenAt = props.data.photoTakenAt;
    let createdAt = props.data.createdAt;
    let completed = props.data.completed;
    console.log(photoUrl);
    
    
    return (
        <div>
        <img src={photoUrl} alt='' className="photo"></img>
        </div>
  );
};

export default Photo;
