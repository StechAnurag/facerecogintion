import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ box, imageUrl }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img src={imageUrl} alt="user" width="500px" height="auto" id="inputImage" />
        <div
          className="bounding-box"
          style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}
        ></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
